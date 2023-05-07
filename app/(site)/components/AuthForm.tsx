'use client'

import Button from '@/app/components/Button'
import Input from '@/app/components/inputs/Input'
import {BsGoogle,BsGithub} from 'react-icons/bs'
import {useState,useCallback} from 'react'
import {useForm,FieldValues,SubmitHandler} from 'react-hook-form'
import AuthSocialButton from './AuthSocialButton'

type Variant='LOGIN' | 'REGISTER'
const AuthForm = () => {
    const [variant,setVariant]=useState<Variant>('LOGIN');
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const toggleButton=useCallback(()=>{
        if(variant==='LOGIN') {
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN');
        }
    },[variant]);
    const {register,formState:{errors},handleSubmit}=useForm<FieldValues>({defaultValues:{name:'',email:'',password:''}});
    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);
        if(variant==='LOGIN') {

        }
        if(variant==='REGISTER') {

        }
    }
    const socialSignIn=(action:string)=>{
        setIsLoading(true);
    }
  return (
    <div className='mt-6 sm:mx-auto sm:max-w-md sm:w-full'>
    <div className='bg-white rounded-md shadow py-6 px-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                {variant==='REGISTER' && (
                    <Input disabled={isLoading} label='Name' id='name' errors={errors} register={register}/>
                )}
                    <Input disabled={isLoading} type='email' label='Email' id='email' errors={errors} register={register} />
                    <Input disabled={isLoading} type='password' label='Password' id='password' errors={errors} register={register} />
                    <div>
                    <Button disabled={isLoading} type='submit' fullWidth>{variant==='LOGIN'?'Sign In':'Sign Up'}</Button>
                    </div>
            </form>
            <div className='mt-6 w-full'>
                <div className='border-t my-2 border-gray-300 w-full'/>
                <div className='w-full flex gap-2'>
                <AuthSocialButton icon={BsGithub} onClick={()=>socialSignIn('github')}/>
                <AuthSocialButton icon={BsGoogle} onClick={()=>socialSignIn('google')}/>
                </div>
            </div>
            <div className='mt-6 flex justify-center gap-2'>
                <div>
                    <span className='text-gray-500 text-sm'>{variant==='LOGIN'?'New To Messenger?':'Already Have an account?'}</span>
                </div>
                <div onClick={toggleButton}>
                   <span className='text-gray-500 underline cursor-pointer'>{variant==='LOGIN'?'Sign Up':'Login'}</span> 
                </div>
            </div>
            
    </div>
    </div>
  )
}

export default AuthForm