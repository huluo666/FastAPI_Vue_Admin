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

from fastapi import FastAPI,Request
from starlette.middleware.cors import CORSMiddleware

from api.api_v1.api import api_router
from vue.fadmin import fadmin

# 加载Vue项目
import os
from fastapi.responses import HTMLResponse  # 响应html
from fastapi.staticfiles import StaticFiles # 设置静态目录
from fastapi.templating import Jinja2Templates
from pathlib import Path


app = FastAPI(
	title="FastAPI-Platform",
	description="Author:kyren",
	version="1.0",
)


app.include_router(fadmin)
# 初始化数据库连接
# init_db()

#解决跨域请求
#设置允许访问的域名
origins = ['*']  #可以设置为'*'，即为所有。
app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,  # 设置允许的origins来源
	allow_credentials=True,
	allow_methods=['*'],  	# 设置允许跨域的http方法，比如 get、post、put等。
	allow_headers=['*']		# 允许跨域的headers，可以用来鉴别来源等作用。
)  

# *添加路由规则
app.include_router(api_router, prefix="/api/v1")  # 默认的前缀

# 可选,独立定义根路由
@app.get("/test")
def read_root():
	return {"Hello": "World"}

# 配置1，添加静态资源
app.mount("/", StaticFiles(directory="frontend/dist", html=True), name="index")

# 配置2，添加根索引路径
@app.get("/")
def main():
    html_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static', 'index.html')
    html_content = ''
    with open(html_path,encoding='utf-8') as f:
        html_content = f.read()
    return HTMLResponse(content=html_content, status_code=200)

if __name__ == '__main__':
	import uvicorn
	uvicorn.run(app="main:app",port=8010,reload=True)