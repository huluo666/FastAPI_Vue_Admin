# 使用官方 Python 3.9 镜像作为基础镜像
FROM python:3.9

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器的工作目录
COPY . /app

# 安装项目依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露 FastAPI 应用程序的端口（默认为 8000）
EXPOSE 8000

# 启动 FastAPI 应用程序
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
