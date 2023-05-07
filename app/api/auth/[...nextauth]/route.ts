import NextAuth,{AuthOptions} from "next-auth";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import prisma from '@/app/libs/prismaClient'
import bcrypt from 'bcrypt'

export const authOptions:AuthOptions={
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name:'credentials',
            credentials:{
                email:{label:'email',type:'text'},
                password:{label:'password',type:'password'}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password) {
                    throw new Error('Invalid Credentials')
                }

                const user=await prisma.user.findFirst({where:{email:credentials.email}});

                if(!user || !user.hashedPassword) {
                    throw new Error('Invalid authentication')
                }

                const isPasswordCorrect=await bcrypt.compare(credentials.password,user.hashedPassword);

                if(!isPasswordCorrect) {
                    throw new Error('Invalid credentials')
                }

                return user;
            }
        })
    ],
    debug:process.env.NODE_ENV==='development',
    session:{
        strategy:'jwt'
    },
    secret:process.env.NEXTAUTH_SECRET
}

const handler=NextAuth(authOptions);

export {handler as GET,handler as POST};



