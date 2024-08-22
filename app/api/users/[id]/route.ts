import { NextRequest, NextResponse } from "next/server";
const users=[
    {
        id:1,
        userName:"Duy Bùi",
        age:15
    },
    {
        id:2,
        userName:"Châu Bùi",
        age:31
    }
]
export async function GET(request:NextRequest, params: { params: {id: string} }) {
    const id = params.params.id;

    const findUser = users.find((user)=>user.id === +id)
    if(findUser){
        return NextResponse.json(findUser);;
    }else{
        return NextResponse.json({message: "không tìm thấy"});
    }
}
export async function PUT(request:NextRequest, params: { params: {id: string} }){
    const id = params.params.id;
    const dataClinent = await request.json();

    const findIndex = users.findIndex((user)=>user.id === +id);
    if(findIndex !== -1){
        users[findIndex].userName = dataClinent.userName
    }
    return NextResponse.json({data: users});
}
export async function DELETE(request:NextRequest, params: { params: {id: string} }) {
    const id = params.params.id;
    const filterUser = users.filter((user)=> user.id !== +id)
    return NextResponse.json({newData: filterUser})
}