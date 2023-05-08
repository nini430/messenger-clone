import prisma from '@/app/libs/prismaClient'
import bcrypt from 'bcrypt'
import {NextRequest,NextResponse} from 'next/server'

export async function POST(req:NextRequest,res:NextResponse) {
    try{
     const body=await req.json() as any;
    const {name,email,password}=body;
    if(!name || !email || !password) {
        return new NextResponse('Missing info',{status:400})
    }
    const hashedPassword=await bcrypt.hash(password,12);
    const user=await prisma.user.create({data:{email,name,hashedPassword}});
    return NextResponse.json(user);
    }catch(err) {
        console.log(err,'REGISTRATION_ERROR')
        return new NextResponse('server error',{status:5000})
    }
}