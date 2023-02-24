'use client'
import { useState } from "react";
import LoadingPage from "../../../interface/components/Loading/loadingpage";
async function postEmailRec(formCadastro){
    try{
        const recsenhaemail = await fetch('http://localhost:8080/api/userconfig/rec-email-senha', {
            method: 'POST',
            body: JSON.stringify({form: formCadastro}),
            headers: { 'Content-Type': 'application/json' }
        });
        return recsenhaemail.json()
    }catch(error) {
        return error
    }
}
export default function SendEmail(){
    const [response, SetResponse] = useState({
        msg: '',
        status: ''
    })
    const [Form, SetForm] = useState({
        email: '',
    })
    const onChangeInput = e => SetForm({...Form, [e.target.name]: e.target.value})
    const SendEmailRec = async e => {
        e.preventDefault()
        SetResponse({status: 'loading'})
        if(Form.email){
            const responseEnv = await postEmailRec(Form)
            SetResponse({
                status: responseEnv.status,
                msg: responseEnv.msg
            });
        }else{
            SetResponse({msg: 'Você deve preencher todos os campos!', status: '14042F'})
        }
    }
    if(response.status == "1"){
        return(
            <div className='max-w-md w-full'>
                <h1 className='text-8xl font-black'>VALIDAR</h1>
                <h2 className='mt-5'>Para validarmos a sua identidade, basta clicar no link que nossa equipe enviou para seu email, e seguir o passo a passo para recuperar a senha =)</h2>
            </div>
        )
    }
    return(
        <div className='max-w-md w-full'>
            <h1 className='text-8xl font-black'>RECUPERAR SENHA</h1>
            <h2 className='mt-5'>Enviaremos um email para você!</h2>
            <form className='gap-4 flex flex-col mt-5' onSubmit={SendEmailRec}>
                <input className="w-full border rounded-lg bg-transparent outline-none p-2 py-3 mb-2" type="email" name="email" placeholder='Email' onChange={onChangeInput}/>
                <input type="submit" className="w-full rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="recuperar senha"/>
            </form>
            {response.status == "loading" ? <LoadingPage/> : response.status ?  `${response.msg}.  ${response.status != "1" ? `ERRO:${response.status}` : ""}` : response.msg}
        </div>
    )
}