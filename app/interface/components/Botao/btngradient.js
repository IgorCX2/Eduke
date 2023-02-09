'use client'
import Link from "next/link";
export default function BtnGradient({link, text}){
    return(
        <Link href={`${link}`} className={"absolute text-center w-full rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500"}>{text}</Link>
    )
}