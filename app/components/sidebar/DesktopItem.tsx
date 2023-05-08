"use client"
import React from 'react'
import clsx from 'clsx';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface DesktopItemProps {
    label:string;
    href:string;
    icon:IconType;
    active?:boolean;
    onClick?:()=>void;
}

const DesktopItem:React.FC<DesktopItemProps> = ({label,href,icon:Icon,active,onClick}) => {
    const handleClick=()=>{
        if(onClick) {
            return onClick();
        }
    }
  return (
    <li onClick={handleClick} className={clsx(`p-3 text-gray-700 rounded-md`,active && 'bg-gray-200')}>
    <Link href={href}>
    <span className='sr-only'>{label}</span>
    <Icon className='text-2xl'/>
    </Link>
    </li>
  )
}

export default DesktopItem