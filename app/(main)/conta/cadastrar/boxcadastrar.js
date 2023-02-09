'use client'
import Link from "next/link";
import { useState } from "react";
import LoadingPage from "../../../interface/components/Loading/loadingpage";
async function postCadastro(formCadastro){
    try{
        const caduser = await fetch('http://localhost:8080/api/userconfig/add-user', {
            method: 'POST',
            body: JSON.stringify({form: formCadastro}),
            headers: { 'Content-Type': 'application/json' }
        });
        return caduser.json()
    }catch(error) {
        return error
    }
}
export default function BoxCadastrar(){
    const [Form, SetForm] = useState({
        email: '',
        nick: '',
        senha: '',
    })
    const [response, SetResponse] = useState({
        msg: '',
        status: ''
    })

    const [verSenha, SetVerSenha] = useState(false)
    const onChangeInput = e => SetForm({...Form, [e.target.name]: e.target.value})
    const SendCadastro = async e => {
        e.preventDefault()
        SetResponse({status: 'loading'})
        if(Form.email && Form.nick && Form.senha){
            if(Form.senha.length >= 6){
                const responseEnv = await postCadastro(Form)
                SetResponse({
                    status: responseEnv.status,
                    msg: responseEnv.msg
                });
            }else{
                SetResponse({msg: 'Sua senha deve ser maior que 6 digitos!', status: '06023F'})
            }
        }else{
            SetResponse({msg: 'Você deve preencher todos os campos!', status: '14042F'})
        }
    }
    if(response.status == "1"){
        return(
            <div className='max-w-md w-full'>
                <h1 className='text-8xl font-black'>VALIDAR</h1>
                <h2 className='mt-5'>Para validarmos a sua identidade e finalizarmos o seu cadastro, basta clicar no link que nossa equipe enviou para seu email <strong>{Form.email}</strong>, caso o email demore para chegar ou der algum erro, entre em contato com nossa equipe =)</h2>
                <Link href="/conta/entrar"><button className="w-full rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 mt-10">ir para página de login</button></Link>
            </div>
            )
    }
    return(
        <div className='max-w-md w-full'>
            <h1 className='text-8xl font-black'>CADASTRAR</h1>
            <h2 className='mt-5'>Realize o seu cadastro para juntar-se a nossa comunidade e desfrute de vantagens incriveis, que voce so pode conferir aqui =)</h2>
            <form className='gap-4 flex flex-col mt-5' onSubmit={SendCadastro}>
                <input className="w-full border rounded-lg outline-gray-800 p-2 py-3 mb-2" type="email" name="email" placeholder='Email' autoComplete="email" onChange={onChangeInput}/>
                <input className="w-full border rounded-lg outline-gray-800 p-2 py-3 mb-2" type="text" name="nick" placeholder='Nome de usuário' autoComplete="username" onChange={onChangeInput}/>
                <div className="flex gap-2">
                    <input className="w-full border rounded-lg bg-transparent outline-none p-2 py-3 mb-2" type={verSenha == false ? "password" : "text"} name="senha" placeholder='Senha' autoComplete="new-password" onChange={onChangeInput}/>
                    <div className="border rounded-lg p-2 py-3 mb-2 select-none" onClick={() => verSenha == false ? SetVerSenha(true) : SetVerSenha(false)}>MOSTRAR</div>
                </div>
                <Link href="/conta/entrar">Ja tenho um cadastro. <u>Fazer Login</u></Link>
                <input type="submit" className="w-full rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="proximo"/>
                {response.status == "loading" ? <LoadingPage/> : response.status ?  `${response.msg}.  ${response.status != "1" ? `ERRO:${response.status}` : ""}` : response.msg}
            </form>
        </div>
    )
}