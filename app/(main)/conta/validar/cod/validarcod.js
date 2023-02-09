export default function ValidarCod(){
    return(
        <div className="max-w-md w-full">
            <h1 className="font-black text-5xl">{statusvalidar.mensagem}</h1>
            <p className="mt-6 mb-6">{statusvalidar.type != 'sucess' ? "Erro, tente novamente !!" : "Seja bem vindo a plataforma EdukeCX2, será um prazer ter você conosco em nossa plataforma, agora com o seu email validado, você tem acesso a todos os itens incluso em seu pacote, bom estudo !!"}</p>
            <BtnColor link={'conta/entrar'} text={statusvalidar.type != 'sucess' ? 'reenviar link' : 'entrar na conta'}/>
        </div>
    )
}