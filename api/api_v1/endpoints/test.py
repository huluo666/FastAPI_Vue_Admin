from fastapi import Body, APIRouter, HTTPException, status, Response
from common.BaseResponse import BaseResponse

router = APIRouter()

@router.get("/registertest")
async def create_user():
    # 发放token
    data = {
        "token": "TestToken",
        "token_type": "bearer"
    }
    return BaseResponse(code=200, status=0,msg="用户创建成功", data=data)