import Container from "../../interface/components/Group/container";
import FlexContainer from "../../interface/components/Group/flexcontainer";
import Image from 'next/image';
import Link from "next/link";
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default function Learn({imageLoader}){
    const imgsco = ['1','2','3','4','5','6']
    var conteste = -1
    var valor = 10
    return(
        <main>
            
            <Container>
                <section className="mt-10 flex justify-between gap-10">
                    <div className="flex top-0 flex-col max-w-sm w-full gap-8">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-7xl font-black">PLANO DE ESTUDO</h1>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="rounded-lg w-full py-3.5 relative bg-white border flex flex-col justify-center items-center text-center	">
                                <Image
                                    loader={imageLoader}
                                    src={"/coroa.png"}
                                    alt="imagem mandou bem!"
                                    width={60}
                                    height={60}	
                                />
                                <span className="text-sm text-gray-300 font-medium">Mando Bem</span>
                                <h1 className="text-xl mt-3 font-bold">BIOLOGIA</h1>
                            </div>
                            <div className="rounded-lg w-full py-3.5 relative bg-white border flex flex-col justify-center items-center">
                                <Image
                                    loader={imageLoader}
                                    src={"/hard.png"}
                                    alt="imagem mandou bem!"
                                    width={60}
                                    height={60}
                                />
                                <span className="text-sm text-gray-300 font-medium">Mando Mal</span>
                                <h1 className="text-xl mt-3 font-bold">BIOLOGIA</h1>
                            </div>
                        </div>
                        <div className="rounded-lg w-full h-24 py-3.5 relative bg-white border">propaganda</div>
                        <div className="rounded-lg w-full py-3.5 px-5 relative border">
                            <h1 className="ml-1 text-lg font-bold">XP diária</h1>
                            <div className="flex items-center gap-5 mt-2">
                                <div>
                                    <Image
                                        loader={imageLoader}
                                        src={"/chest.png"}
                                        alt="imagem bau"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="w-full">
                                    <h1>Meta diária</h1>
                                    <div className="flex relative gap-5 mt-1 items-center">
                                        <div className="relative rounded-lg w-8/12 h-3 bg-gray-200 overflow-hidden"><div className="absolute bg-bluelight h-3 w-2/12"/></div>
                                        <p>0/10 XP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg w-full py-3.5 relative bg-green-400 font-semibold text-white	text-center">A plataforma está atualizada</div>
                        <div className="flex justify-between gap-5">
                            <div className="rounded-lg w-full py-3.5 px-5 relative bg-white border flex flex-col items-center justify-between text-center">
                                <div className="relative flex flex-col mb-2">
                                    <div className="bg-fuchsia-400 rounded-t-lg h-3 w-14 flex justify-around">
                                        <div className="bg-fuchsia-400 h-2 w-1 -mt-1"></div>
                                        <div className="bg-fuchsia-400 h-2 w-1 -mt-1"></div>
                                    </div>
                                    <div className="bg-fuchsia-400 rounded-b-lg h-10 w-14 text-white flex justify-center items-center text-3xl font-medium mt-1">21</div>
                                </div>
                                <p>Aparentemente está tudo tranquilo no dia de hoje!</p>
                            </div>
                            <div className="rounded-lg w-full py-3.5 relative bg-white border flex flex-col items-center justify-between text-center">
                                <div className="bg-indigo-400 p-1 rounded-full">
                                    <div className="flex items-end p-2 bg-white rounded-full">
                                        <p className="text-indigo-400 text-3xl font-bold">7</p>
                                        <p className="text-indigo-400 font-medium">/10</p>
                                    </div>
                                </div>
                                <p className="mt-1">Você está quase acabando. Continue assim!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full gap-10 flex flex-col">
                        <form className='flex gap-2 relative mt-5'>
                            <input className="relative w-full border rounded-lg bg-transparent outline-none p-2 py-3 mb-2" type="text" name="pesquisar" placeholder='Pesquisar materia, conteudo ou exercicios'/>
                            <select className="border rounded-lg bg-transparent outline-none p-2 py-3 mb-2">
                                <option>Plano De Estudos</option>
                                <option>Exercícios</option>
                            </select>
                            <div>
                                <input type="submit" className="rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white px-2 py-3 font-bold hover:from-blue-500 hover:to-blue-500" value="PESQUISAR"/>
                            </div>
                        </form>
                        <div className="mt-14 flex flex-col">
                            <div className="rounded-lg w-full py-5 px-20 relative bg-gray-50/75 border flex justify-between">
                                <div className="max-w-lg mt-5">
                                    <h1 className="text-4xl font-semibold mb-5">Frase Motivacional do Dia</h1>
                                    <p>“É em meio a dificuldade que se encontra a oportunidade”. “O êxito é ir de frustração a frustração sem perder a animação”. “Mesmo que algo pareça difícil, nunca desista antes de tentar”. “Você é o único que entende as suas dificuldades, por isso motive se a prosseguir”.</p>
                                    <div className="relative mt-5">
                                        <Link href={'ho,e'}><div className="absolute rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white px-2 py-3 font-bold hover:from-blue-500 hover:to-blue-500">PRECISA DE AJUDA?</div></Link>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        loader={imageLoader}
                                        src={"/user.png"}
                                        alt="imagem do seu personagem"
                                        priority={true}
                                        width={170}
                                        height={200}	
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-10">
                                <h1 className="text-4xl font-bold mb-5">Seu Plano de Estudo</h1>
                                <div className="flex mt-5 items-baseline gap-10 flex-wrap">
                                    <div className="flex relative">
                                        <div className="z-20">
                                            <Image
                                                loader={imageLoader}
                                                src={"/ilhapq.png"}
                                                alt="ilha de estudo"
                                                priority={true}
                                                width={160}
                                                height={150}	
                                            /> 
                                        </div>
                                        <div className="border-2 border-teal-500 rounded-lg h-full w-60 -ml-20">
                                            <div className="flex justify-between flex-col ml-20 p-2 ">
                                                <div>
                                                    <span className="text-xs font-medium">ESTUDO</span>
                                                    <h1 className="text-sm font-semibold text-teal-500">BIOLOGIA</h1>
                                                </div>
                                                <div>
                                                    <h2 className="font-bold text-lg">isso</h2>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full relative mt-20">
                                <h1 className="text-4xl font-bold mb-5">Sugestões de Artigos para Você</h1>
                                <div className="w-full flex justify-between	gap-10">
                                    <div className="flex rounded-lg bg-gray-100 max-w-xs w-full h-36 relative overflow-hidden">
                                        <Link href={''}>
                                            <div className="absolute w-full h-full left-0 flex items-end z-10 bg-black/15 backdrop-blur-xs p-8">
                                                <h1 className="text-white text-lg font-medium capitalize ">como subtrair Tudo de um Numero Bem legal,k</h1>
                                            </div>
                                            <Image
                                                loader={imageLoader}
                                                src={"/fotografia.jpg"}
                                                alt="foto do artigo"
                                                placeholder ='blur'
                                                blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                                                fill={true}	
                                                style={{objectFit: "cover"}}	
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </main>

    )
}