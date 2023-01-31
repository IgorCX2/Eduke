'use client'
import Link from "next/link";
export default function BtnColor({link, text}){
    return(
        <Link href={`${link}`} className= "rounded-lg bg-blue-500 text-white p-2 drop-shadow-n2xl font-bold py-2.5 px-4">{text}</Link>
    )
}