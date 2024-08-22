import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'

const user=[
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
export async function GET() {
  return NextResponse.json({data: user})
}
export async function POST(request: NextRequest){
    // Bước 1:  Lấy dữ liệu từ client
    const dataClinent = await request.json();
    //Bước 2: Push dữ liệu lấy được từ client vào trong mảng
    user.push(dataClinent);
    //Bước 3: Trả về mảng mới vừa được thêm vào
    return NextResponse.json({newUser: user})
}