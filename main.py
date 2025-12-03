#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date    : 2023/5/22
# @Author  : huluo
# @Version : V1.0
# @Features: 优化版 - 支持 Vercel Serverless 部署

"""
FastApi 更新文档：https://github.com/tiangolo/fastapi/releases
FastApi Github：https://github.com/tiangolo/fastapi
"""

import os
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.api_v1.api import api_router

app = FastAPI(
    title="FastAPI-Platform",
    description="Author:kyren",
    version="1.0",
)

# ========== 数据库配置 (兼容 Vercel Serverless) ==========
DATABASE_URL = os.getenv("DATABASE_URL")
if DATABASE_URL:
    # 处理 PostgreSQL URL 格式
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+psycopg2://", 1)
    
    # Serverless 环境优化：连接池配置
    engine = create_engine(
        DATABASE_URL,
        pool_pre_ping=True,  # 检查连接是否有效
        pool_recycle=300,    # 5分钟回收连接
        pool_size=5,         # Serverless 环境建议较小连接池
        max_overflow=10
    )
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    
    # ⚠️ 注意：Vercel Serverless 环境下，不建议在这里创建表
    # 建议使用 Alembic 迁移或单独的初始化脚本
    # Base.metadata.create_all(bind=engine)
    
    # 依赖注入方式获取数据库会话（推荐用于 Serverless）
    def get_db():
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close()
    
    # 将 get_db 添加到 app.state 供全局使用
    app.state.get_db = get_db

# ========== CORS 跨域配置 ==========
origins = ['*']  # 生产环境建议指定具体域名
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# ========== API 路由 ==========
app.include_router(api_router, prefix="/api/v1")

@app.get("/api/test")
def read_root():
    return {"Hello": "World", "platform": "Vercel"}

# ========== 静态文件配置 (Vue-Pure-Admin) ==========
# 自动检测 dist 目录位置
DIST_DIR = None
possible_paths = [
    Path(__file__).parent / "frontend" / "vue-pure-admin" / "dist",  # 本地开发时
]

for path in possible_paths:
    if path.exists():
        DIST_DIR = path
        break

# 挂载静态资源（assets、js、css 等）
if DIST_DIR:
    assets_path = DIST_DIR / "assets"
    if assets_path.exists():
        app.mount("/assets", StaticFiles(directory=str(assets_path)), name="assets")
    
    # 挂载其他可能的静态目录
    for static_dir in ["js", "css", "img", "fonts"]:
        static_path = DIST_DIR / static_dir
        if static_path.exists():
            app.mount(f"/{static_dir}", StaticFiles(directory=str(static_path)), name=static_dir)

# ========== SPA 路由处理 (支持 Vue Router History 模式) ==========
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    """
    处理所有未匹配的路由，返回 index.html
    支持 Vue Router 的 history 模式
    """
    # 跳过 API 路由
    if full_path.startswith("api/"):
        return {"error": "API endpoint not found"}, 404
    
    # 如果没有找到 dist 目录
    if not DIST_DIR:
        return {
            "error": "Frontend not found",
            "message": "Please build vue-pure-admin and place dist folder in project root"
        }, 404
    
    # 检查是否是静态文件（直接返回文件）
    file_path = DIST_DIR / full_path
    if file_path.is_file():
        return FileResponse(file_path)
    
    # 所有其他路由返回 index.html（SPA 路由）
    index_path = DIST_DIR / "index.html"
    if index_path.exists():
        return FileResponse(index_path)
    
    return {"error": "index.html not found"}, 404

# ========== 健康检查端点 ==========
@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "database": "connected" if DATABASE_URL else "not configured",
        "frontend": "found" if DIST_DIR else "not found"
    }

# ========== 运行说明 ==========
# 本地开发: uvicorn main:app --reload --host 0.0.0.0 --port 8000
# Vercel: 自动部署，无需手动运行