import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
  return (
    <div className='flex flex-col justify-center min-h-full bg-gray-100'>
      <div className='mx-auto'>
        <Image src='/images/logo.png' width='48' height='48' alt='logo' className='mx-auto'/>
        <h2 className='mt-6 font-bold text-3xl'>Sign In To Your Account</h2>
      </div>
      <AuthForm/>
    </div>
  )
}
