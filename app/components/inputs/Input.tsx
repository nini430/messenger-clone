'use client'
import React from 'react';
import {FieldValues,UseFormRegister,FieldErrors} from 'react-hook-form'
import clsx from 'clsx';

interface InputProps {
    label:string;
    id:string;
    type?:string;
    required?:boolean;
    disabled?:boolean;
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors;

}
const Input:React.FC<InputProps> = ({label,id,type,register,required,errors,disabled}) => {
  return (
    <div>
      <label className='text-gray-900 text-sm block' htmlFor={id}>{label}</label>
      <div>
        <input className={clsx(`
        form-input
        w-full
        border-gray-300
        shadow-sm
        rounded-md
        mt-2
        
        `,errors[id] && 'border-rose-500',disabled && 'opacity-50 cursor-default')}  type={type} disabled={disabled} {...register(id,{required})}  />
      </div>
    </div>
  )
}

export default Input;