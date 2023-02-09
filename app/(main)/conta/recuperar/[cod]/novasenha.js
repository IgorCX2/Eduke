export default function BoxNovaSenha(){
    return(
        <div className='max-w-md w-full'>
            <h1 className='text-8xl font-black'>RECUPERAR SENHA</h1>
            <h2 className='mt-5'>Digite a sua nova senha!</h2>
            <form className='gap-4 flex flex-col mt-5'>
                <input className="w-full border rounded-lg bg-transparent outline-none p-2 py-3 mb-2" type="password" name="senha" placeholder='Nova senha'/>
                <input type="submit" className="w-full rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="salvar senha"/>
            </form>
        </div>
    )
}