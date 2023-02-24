'use client'
import Link from "next/link"
import { useState } from "react"
import { setCookie } from 'nookies'
import { redirect } from 'next/navigation';
async function postLogin(formLogin){
    try{
        const loginuser = await fetch('http://localhost:8080/api/userconfig/login-user', {
            method: 'POST',
            body: JSON.stringify({form: formLogin}),
            headers: { 'Content-Type': 'application/json' }
        });
        return loginuser.json()
    }catch(error) {
        return error
    }
}
async function postValidarLogin(formValidar, id){
    try{
        const validar = await fetch('http://localhost:8080/api/userconfig/validar-login', {
            method: 'POST',
            body: JSON.stringify({form: formValidar, id: id}),
            headers: { 'Content-Type': 'application/json' }
        });
        return validar.json()
    }catch(error) {
        return error
    }
}
export default function BoxLogin(){
    const [Form, SetForm] = useState({
        usuario: '',
        senha: '',
    })
    const [response, SetResponse] = useState({
        msg: '',
        status: '',
        id: '',
    })
    const [codigo, SetCodigo] = useState({
        a: '',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
    })
    const onChangeInput = e => SetForm({...Form, [e.target.name]: e.target.value})
    const [verSenha, SetVerSenha] = useState(false)
    const [contadorCodigo, SetContadorCodigo]= useState(0)
    const SendLogin = async e => {
        e.preventDefault()
        if(Form.usuario && Form.senha){
            const responseEnv = await postLogin(Form)
            SetResponse({
                status: responseEnv.status,
                msg: responseEnv.msg,
                id: responseEnv.id
            });
            if(responseEnv.status == '0'){
                setCookie(null, 'UserToken', responseEnv.token, {
                    maxAge: 60 * 60,
                    path: '/',
                });
                location.reload();
            }
        }else{
            SetResponse({msg: 'Você deve preencher todos os campos!', status: '14042F'})
        }
    }
    if(response.status == "1"){
        const SendValidarLogin = async e =>{
            e.preventDefault()
            if(codigo.a && codigo.b && codigo.c && codigo.d && codigo.e && codigo.f){
                const responseEnv = await postValidarLogin(codigo, response.id)
                SetResponse({
                    status: responseEnv.status,
                    msg: responseEnv.msg
                });
                if(responseEnv.status == '0'){
                    setCookie(null, 'UserToken', responseEnv.token, {
                        maxAge: 60 * 60,
                        path: '/',
                    });
                    location.reload();
                }
            }else{
                SetResponse({msg: 'Você deve preencher todos os campos!', status: '1'})
            }
        }
        const mudaFoco = e =>{
            const nomeParaNumero = ['a','b','c','d','e','f']
            SetCodigo({...codigo, [e.target.name]: e.target.value})
            const allFields = document.querySelectorAll('form input');
            if(e.target.value.length != 0){
                SetContadorCodigo(0)
                if(allFields[Number(nomeParaNumero.indexOf(e.target.name))+1].value.length == 0){
                    allFields[Number(nomeParaNumero.indexOf(e.target.name))+1]?.focus();
                }
            }else{
                if(contadorCodigo != 1){
                    SetContadorCodigo(contadorCodigo + 1)
                }else{
                    SetContadorCodigo(0)
                    allFields[Number(nomeParaNumero.indexOf(e.target.name))-1]?.focus();
                }
            }
        }
        return(
            <div className='max-w-md w-full'>
                <h1 className='text-8xl font-black'>VALIDAR</h1>
                <h2 className='mt-5'>Digite o codigo que enviamos em seu email!</h2>
                <form className='gap-4 flex flex-col mt-5' onSubmit={SendValidarLogin} autoComplete="off">
                    <div className="flex justify-between">
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="a" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="b" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="c" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="d" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="e" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="f" maxLength="1" onKeyUp={mudaFoco}/>
                    </div>
                    <input type="submit" className="w-full mt-5 rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="validar" />
                    <p className="text-xs text-center"><span className="underline">Porque isso esta aparecendo?</span> Não se preocupe, isso é um medida de segurança comum, as vezes indentificamos alguma atividade incomum ou você não realizou a verificação de email no cadastro =)</p>
                    {response.status == "loading" ? <LoadingPage/> : response.status != "1" || "0" ?  `${response.msg}.  ${response.status != "1" ? `ERRO:${response.status}` : ""}` : ""}
                </form>
            </div>
        )
    }
    return(
        <div className='max-w-md w-full'>
            <h1 className='text-8xl font-black'>LOGAR</h1>
            <h2 className='mt-5'>Realize o seu login para juntar-se a nossa comunidade e desfrute de vantagens incriveis, que voce so pode conferir aqui =)</h2>
            <form className='gap-4 flex flex-col mt-5' onSubmit={SendLogin}>
                <input className="w-full border rounded-lg bg-transparent outline-none p-2 py-3 mb-2" type="text" name="usuario" placeholder='Usuário ou Email' autoComplete="username" onChange={onChangeInput}/>
                <div className="flex gap-2 ">
                    <input className="w-full border rounded-lg bg-transparent outline-none p-2 py-3 mb-2" type={verSenha == false ? "password" : "text"} name="senha" placeholder='Senha' autoComplete="current-password" onChange={onChangeInput}/>
                    <div className="border rounded-lg p-2 py-3 mb-2 select-none" onClick={() => verSenha == false ? SetVerSenha(true) : SetVerSenha(false)}>MOSTRAR</div>
                </div>
                <Link href="/conta/cadastrar">não tenho um cadastro. <u>Fazer Cadastro</u></Link>
                <input type="submit" className="w-full rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="fazer login"/>
                <Link href="/conta/recuperar">Esqueceu a senha?</Link>
                {response.status == "loading" ? <LoadingPage/> : response.status ?  `${response.msg}.  ${response.status != "1" ? `ERRO:${response.status}` : ""}` : response.msg}
            </form>
        </div>
    )
}