import React from 'react'
import {IconType} from 'react-icons'

interface AuthSocialButtonProps {
    onClick:()=>void;
    icon:IconType

}

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({onClick,icon:Icon}) => {
  return (
    <button onClick={onClick} className='bg-gray-100 border border-gray-300 py-2 px-4 rounded-md flex-1 inline-flex justify-center'>
        <Icon/>
    </button>
  )
}

export default AuthSocialButton