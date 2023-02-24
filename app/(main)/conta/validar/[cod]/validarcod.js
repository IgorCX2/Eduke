import BtnColor from "../../../../interface/components/Botao/btncolor";
async function postValidarCadastro(stats, id, cod){
    try{
        const validarCadastro = await fetch('http://localhost:8080/api/userconfig/validar-cadastro', {
            method: 'POST',
            body: JSON.stringify({cod: cod, id: id, stats: stats}),
            headers: { 'Content-Type': 'application/json' }
        });
        return validarCadastro.json()
    }catch(error) {
        return error
    }
}
export default async function ValidarCod({link}){
    const codLink = link.split('%26')
    const statusValidar = await postValidarCadastro(codLink[0], codLink[1], codLink[2])
    const titulos = ['VALIDADO', 'JÁ VALIDADO', 'LINK EXPIRADO', 'LINK INVALIDO']
    return(
        <div className="max-w-md w-full">
            <h1 className="font-black text-5xl">{titulos[statusValidar.status]}</h1>
            <p className="mt-6 mb-6">{statusValidar.status != '0' ? statusValidar.msg : "Seja bem vindo a plataforma EdukeCX2, será um prazer ter você conosco em nossa plataforma, agora com o seu email validado, você tem acesso a todos os itens incluso em seu pacote, bom estudo !!"}</p>
            <BtnColor link={'conta/entrar'} text={'entrar na conta'}/>
        </div>
    )
}