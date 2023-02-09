'user client'
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from "next/link";
import { Suspense } from 'react'
var jwt = require('jsonwebtoken');
const { promisify } = require('util');
import Btn from '../Botao/btn';
import BtnColor from '../Botao/btncolor';
import BoxLoading from '../Loading/boxloading';
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
async function StatusLogin(){
    const Cookies = cookies();
    const UserToken = Cookies.get('UserToken');
    if(UserToken){
        const decode = await promisify(jwt.verify)(DadosDoCliente.value, "OD2DS8S21DSA4SD4SS3A");
        return(
            <div>
                <Link href="/perfil">
                    <div className="flex gap-5 items-center">
                        <div className="flex flex-col">
                            <p className="text-blue-500 font-bold text-2xl">1</p>
                        </div>
                        <div className="flex flex-col ">
                            <p>Seja Bem Vindo(a)</p>
                            <p>{decode.nick}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
    return(
        <div className="flex gap-5">
            <Btn className="text-black" link={"/conta/cadastrar"} text={"CADASTRO"}/>
            <BtnColor link={"/conta/entrar"} text={"LOGIN"}/>
        </div>
    )
}
export default function NavLink({imageLoader}){
    return(
        <header className="relative w-full flex justify-between py-5 items-center z-20">
            <div className="flex gap-44 items-center">
                <Link href="/" className="flex gap-3 items-center">
                    <Image
                        loader={imageLoader}
                        src="/logo.png"
                        alt="LogoCX2"
                        width={35}
                        height={50}
                        priority
                    />
                    <div>
                        <h1 className="text-2xl font-black">EDUKE</h1>
                        <h2 className="text-xl font-semibold -mt-2 tracking-widest">by CX2</h2>
                    </div>
                </Link>
                <nav>
                    <ul className="flex gap-10">
                        <li>
                            <Link href="/plano-de-estudo">Plano de Estudo</Link>
                        </li>
                        <li>
                            <Link href="/">Recursos</Link>
                        </li>
                        <li>
                            <Link href="/calendario">Calendario</Link>
                        </li>
                        <li>
                            <Link href="/">Professores</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Suspense fallback={<BoxLoading tamanhos={'h-12 w-28 , h-12 w-24'} gapquebra={'gap-5'}/>}>
                <StatusLogin/>
            </Suspense>
        </header>
    )
}