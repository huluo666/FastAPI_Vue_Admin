#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date    : 2023/5/22
# @Author  : huluo
# @Version : V1.0
# @Features:

"""
FastApi 更新文档：https://github.com/tiangolo/fastapi/releases
FastApi Github：https://github.com/tiangolo/fastapi
Typer 官方文档：https://typer.tiangolo.com/
"""

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from api.api_v1.api import api_router

# 加载Vue项目
import os
from fastapi.responses import HTMLResponse  # 响应html（备用）
from fastapi.staticfiles import StaticFiles  # 设置静态目录

app = FastAPI(
    title="FastAPI-Platform",
    description="Author:kyren",
    version="1.0",
)

# 初始化数据库连接（Render 环境变量）
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from your_db_models import Base  # 替换为你的模型文件（如 models.py 中的 Base）

DATABASE_URL = os.getenv("DATABASE_URL")  # Render 提供的 PostgreSQL URL
if DATABASE_URL:
    # psycopg2 需要替换 postgresql:// 为 postgresql+psycopg2://
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+psycopg2://")
    
    engine = create_engine(DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    
    # 创建表（开发环境用；生产用 Alembic 迁移）
    Base.metadata.create_all(bind=engine)
    
    # 示例：全局依赖注入 DB session（可选，在 api 中用）
    @app.middleware("http")
    async def db_session_middleware(request, call_next):
        response = None
        try:
            request.state.db = SessionLocal()
            response = await call_next(request)
        finally:
            if response:
                request.state.db.close()
        return response

# 解决跨域请求
# 设置允许访问的域名
origins = ['*']  # 可以设置为'*'，即为所有。
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 设置允许的origins来源
    allow_credentials=True,
    allow_methods=['*'],  # 设置允许跨域的http方法，比如 get、post、put等。
    allow_headers=['*']  # 允许跨域的headers，可以用来鉴别来源等作用。
)

# 添加路由规则
app.include_router(api_router, prefix="/api/v1")  # 默认的前缀

# 可选,独立定义根路由
@app.get("/test")
def read_root():
    return {"Hello": "World"}

# 配置静态资源：挂载 Vue dist 目录（自动处理 / 根路径）
app.mount("/", StaticFiles(directory="frontend/vue-pure-admin/dist", html=True), name="index")

# （可选）备用根路径，如果 mount 不生效
@app.get("/")
async def main():
    # Render 上直接用 mount 处理 SPA 路由
    return {"message": "Redirect to frontend"}  # 或返回 SPA 的 index.html

# 注意：Render 启动时会用 uvicorn main:app --host 0.0.0.0 --port $PORT