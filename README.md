# FastAPI_Vue_Admin
🔥 ✨ 前端：Vue3+Vite4+Element-Plus+TypeScript 后台管理系统（兼容移动端）✨ 后端：FastAPI



# API文档

http://127.0.0.1:8000/docs#/

http://127.0.0.1:8000/redoc



# Vue-admin

```shell
$ git clone https://github.com/pure-admin/pure-admin-thin frontend
$ pnpm install
$ pnpm run dev
$ pnpm run build
```



## FastAPI

### 安装依赖

```
fastapi
databases
python-dotenv
aiomysql
...
```



## 导出requirements.txt

以下是使用 Conda 导出到 `requirements.txt` 文件的修正步骤：

1. 激活你的 FastAPI 项目所在的 Conda 环境。在终端中运行以下命令：

```
conda activate <environment_name>
```

将 `<environment_name>` 替换为你的环境名称。

运行以下命令来生成 `requirements.txt` 文件：

```
conda list | awk '{print $1"=="$2}' > requirements.txt
```

这将导出当前环境中的包列表，并使用 `awk` 命令将包名称和版本号以标准格式（`package_name==version`）保存到名为 `requirements.txt` 的文件中。

完成上述步骤后，你将在当前目录下生成一个名为 `requirements.txt` 的文件，其中包含了 Conda 环境中的包列表以标准格式呈现。



要导出 FastAPI 项目的 `requirements.txt` 文件，可以使用 `pip` 命令结合 `pipreqs` 或 `pipenv`。这两个工具可以扫描项目的源代码，并自动检测项目所依赖的 Python 包。然后，你可以将检测到的依赖导出到 `requirements.txt` 文件中。





2、**使用 pipreqs：**

1. 首先，确保你已经安装了 `pipreqs`。如果没有安装，可以使用以下命令安装：

```
pip install pipreqs
```

在终端中进入你的 FastAPI 项目的根目录。

运行以下命令来生成 `requirements.txt` 文件：

```
pipreqs .
```

这将扫描当前目录下的源代码，并生成一个包含项目依赖的 `requirements.txt` 文件。



## 参考文档

fastapi 源代码：https://github.com/tiangolo/fastapi

fastapi 中文文档：https://fastapi.tiangolo.com/zh/

fastapi 更新说明：https://fastapi.tiangolo.com/zh/release-notes/

pydantic 官方文档：https://pydantic-docs.helpmanual.io/

pydantic 数据模型代码生成器官方文档 （Json -> Pydantic）：https://koxudaxi.github.io/datamodel-code-generator/

SQLAlchemy-Utils：https://sqlalchemy-utils.readthedocs.io/en/latest/

alembic 中文文档：https://hellowac.github.io/alembic_doc/zh/_front_matter.html

Typer 官方文档：https://typer.tiangolo.com/

