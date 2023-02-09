'use client'
import Link from "next/link"
import { use, useState } from "react"
export default function BoxLogin(){
    async function postLogin(formLogin){
        try{
            const caduser = await fetch('http://localhost:8080/api/userconfig/login-user', {
                method: 'POST',
                body: JSON.stringify({form: formLogin}),
                headers: { 'Content-Type': 'application/json' }
            });
            return caduser.json()
        }catch(error) {
            return error
        }
    }
    const [Form, SetForm] = useState({
        usuario: '',
        senha: '',
    })
    const [response, SetResponse] = useState({
        msg: '',
        status: ''
    })
    const [codigo, SetCodigo] = useState({
        cmp1: '',
        cmp2:'',
        cmp3:'',
        cmp4:'',
        cmp5:'',
        cmp6:'',
    })
    const onChangeInput = e => SetForm({...Form, [e.target.name]: e.target.value})
    const [verSenha, SetVerSenha] = useState(false)
    const SendLogin = async e => {
        e.preventDefault()
        if(Form.usuario && Form.senha){
            const responseEnv = await postLogin(Form)
            SetResponse({
                status: responseEnv.status,
                msg: responseEnv.msg
            });
        }else{
            SetResponse({msg: 'Você deve preencher todos os campos!', status: '14042F'})
        }
    }
    if(response.status == "1"){
        const [contadorCodigo, SetContadorCodigo]= useState(0)
        const mudaFoco = e =>{
            SetCodigo({...codigo, [e.target.name]: e.target.value})
            const allFields = document.querySelectorAll('form input');
            if(e.target.value.length != 0){
                SetContadorCodigo(0)
                if(allFields[Number(e.target.name)+1].value.length == 0){
                    allFields[Number(e.target.name)+1]?.focus();
                }
            }else{
                if(contadorCodigo != 1){
                    SetContadorCodigo(contadorCodigo + 1)
                }else{
                    SetContadorCodigo(0)
                    allFields[Number(e.target.name)-1]?.focus();
                }
            }
        }
        return(
            <div className='max-w-md w-full'>
                <h1 className='text-8xl font-black'>VALIDAR</h1>
                <h2 className='mt-5'>Digite o codigo que enviamos em seu email!</h2>
                <form className='gap-4 flex flex-col mt-5' onSubmit={SendLogin} autoComplete="off">
                    <div className="flex justify-between">
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="0" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="1" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="2" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="3" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="4" maxLength="1" onKeyUp={mudaFoco}/>
                        <input type="text" className={`border rounded-lg bg-transparent h-16 w-14 text-center text-3xl font-bold text-gray-600 uppercase `} name="5" maxLength="1" onKeyUp={mudaFoco}/>
                    </div>
                    <input type="submit" className="w-full mt-5 rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="validar" />
                    <p className="text-xs text-center"><span className="underline">Porque isso esta aparecendo?</span> Não se preocupe, isso é um medida de segurança comum, as vezes indentificamos alguma atividade incomum ou você não realizou a verificação de email no cadastro =)</p>
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