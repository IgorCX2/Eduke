'use client'
import Link from "next/link";
export default function Btn({link, text, color}){
    return(
        <Link href={`${link}`} className={`rounded-lg border-2 p-2 font-bold py-2.5 px-4${color ? color : "text-white"}`}>{text}</Link>
    )
}