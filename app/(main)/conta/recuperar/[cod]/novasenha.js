'use client'
import { useState } from "react"
import { redirect } from 'next/navigation';
async function postNovaSenha(stats, id, cod, senha){
    try{
        const novasenha = await fetch('http://localhost:8080/api/userconfig/rec-senha', {
            method: 'POST',
            body: JSON.stringify({stats: stats, id: id, cod: cod, senha: senha}),
            headers: { 'Content-Type': 'application/json' }
        });
        return novasenha.json()
    }catch(error) {
        return error
    }
}
export default function BoxNovaSenha({link}){
    const codLink = link.split('%26')
    const [Form, SetForm] = useState({
        senha: '',
    })
    const [response, SetResponse] = useState({
        msg: '',
        status: '',
    })
    const onChangeInput = e => SetForm({...Form, [e.target.name]: e.target.value})
    const [verSenha, SetVerSenha] = useState(false)
    const SendNovaSenha = async e => {
        e.preventDefault()
        SetResponse({status: 'loading'})
        if(Form.senha){
            if(Form.senha.length >= 6){
                const responseEnv = await postNovaSenha(codLink[0], codLink[1], codLink[2], Form.senha)
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
    if(response.status == "0"){
        redirect('conta/login')
    }
    return(
        <div className='max-w-md w-full'>
            <h1 className='text-8xl font-black'>RECUPERAR SENHA</h1>
            <h2 className='mt-5'>Digite a sua nova senha!</h2>
            <form className='gap-4 flex flex-col mt-5' onSubmit={SendNovaSenha}>
            <div className="flex gap-2 ">
                    <input className="w-full border rounded-lg bg-transparent outline-none p-2 py-3 mb-2" type={verSenha == false ? "password" : "text"} name="senha" placeholder='Nova Senha' autoComplete="new-password" onChange={onChangeInput}/>
                    <div className="border rounded-lg p-2 py-3 mb-2 select-none" onClick={() => verSenha == false ? SetVerSenha(true) : SetVerSenha(false)}>MOSTRAR</div>
                </div>
                <input type="submit" className="w-full rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="salvar senha"/>
            </form>
            {response.msg}
        </div>
    )
}