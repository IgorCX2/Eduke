import Container from "../../../interface/components/Group/container";
import Image from 'next/image';
import Link from "next/link";
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default function Perfil({imageLoader}){
    return(
        <Container>
            <main className="flex flex-col justify-center items-center mt-10">
                <section className="w-full flex justify-between">
                    <div className=" flex gap-14 items-center">
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
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-semibold">Igor Cortez</h1>
                            <div className="flex gap-5 mt-5">
                                <div className="flex gap-2 text-white py-.5 px-2 rounded-lg bg-blue-500 font-medium	">membro</div>
                                <div className="flex gap-2 items-center	 text-white py-.5 px-2 rounded-lg bg-blue-500 font-medium	">
                                    <div>
                                        <Image
                                            loader={imageLoader}
                                            src={"/coin.png"}
                                            alt="imagem do seu personagem"
                                            priority={true}
                                            width={20}
                                            height={20}	
                                        />
                                    </div>
                                    <div>moedas</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 mt-8">
                                <div className="flex gap-2"><div>a</div><div>Conta aberta em 23 de fevereiro de 2023</div></div>
                                <div className="flex gap-2"><div>a</div><div>Segue: <spa>0</spa> </div></div>
                                <div className="flex gap-2"><div>a</div><div>Seguidores: <spa>0</spa> </div></div>
                                <div className="flex gap-2"><div>a</div><div>Já fez <spa>0</spa> planos de estudo</div></div>
                            </div>

                        </div>
                    </div>
                    <div className="flex">
                        <div>REPORTAR</div>
                        <div>SEGUIR</div>
                    </div>
                </section>
                <section className="relative rounded-lg w-full py-5 bg-gray-50 flex gap-10">
                    <h1 className="text-4xl font-bold absolute">Nivel</h1>
                    <div className="w-full flex gap-10 items-end justify-center px-20">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[40px] bg-rose-500"/>
                            <h1 className="font-medium">Matematica</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[80px] bg-blue-500"/>
                            <h1 className="font-medium">portugues</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[120px] bg-orange-500"/>
                            <h1 className="font-medium">geografia</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[160px] bg-yellow-500"/>
                            <h1 className="font-medium">historia</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[200px] bg-emerald-500"/>
                            <h1 className="font-medium">biologia</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[200px] bg-lime-500"/>
                            <h1 className="font-medium">quimicA</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[200px] bg-teal-500"/>
                            <h1 className="font-medium">fisica</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[200px] bg-violet-500"/>
                            <h1 className="font-medium">literatura</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[200px] bg-pink-500"/>
                            <h1 className="font-medium">artes</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[200px] bg-fuchsia-500"/>
                            <h1 className="font-medium">sociologia</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-[200px] bg-sky-500"/>
                            <h1 className="font-medium">filosofia</h1>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col w-full py-5 relative gap-10">
                    <h1 className="text-4xl font-bold absolute">Galeria</h1>
                    <div className="flex gap-7 py-3 mt-20 justify-start items-end text-center overflow-auto w-full scrollbonito">
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                        <div className="flex">
                            <div className="bg-black rounded-lg h-32 w-56 flex"></div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col w-full py-5 relative gap-10 rounded-lg bg-gray-50">
                    <h1 className="text-4xl font-bold absolute">Galeria</h1>
                    <div className="relative w-full flex flex-wrap mt-20 gap-10 justify-center">
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-rose-500">152</h1>
                            <h2 className="font-medium text-lg">Matematica</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-blue-500">152</h1>
                            <h2 className="font-medium text-lg">portugues</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-orange-500">152</h1>
                            <h2 className="font-medium text-lg">geografia</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-yellow-500">152</h1>
                            <h2 className="font-medium text-lg">historia</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-emerald-500">152</h1>
                            <h2 className="font-medium text-lg">biologia</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-lime-500">152</h1>
                            <h2 className="font-medium text-lg">quimica</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-teal-500">152</h1>
                            <h2 className="font-medium text-lg">fisica</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-violet-500">152</h1>
                            <h2 className="font-medium text-lg">literatura</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-pink-500">12</h1>
                            <h2 className="font-medium text-lg">artes</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-fuchsia-500">152</h1>
                            <h2 className="font-medium text-lg">sociologia</h2>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-bold text-sky-500">152</h1>
                            <h2 className="font-medium text-lg">filosofia</h2>
                        </div>
                    </div>
                </section>
                <section className="flex w-full gap-10 justify-between">
                    <div className="flex flex-col border rounded-lg p-2 py-3 w-5/12">
                        <div className="flex justify-center items-center gap-5">
                            <div className="grayscale-[60%]">
                                <Image
                                    loader={imageLoader}
                                    src={"/elo.png"}
                                    alt="rank abaixo do seu"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div>
                                <Image
                                    loader={imageLoader}
                                    src={"/elo.png"}
                                    alt="seu rank"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className="grayscale-[60%]">
                                <Image
                                    loader={imageLoader}
                                    src={"/elo.png"}
                                    alt="rank acima do seu"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-2 gap-1">
                            <h1 className="font-bold text-3xl">Rank Ouro</h1>
                            <p className="">Desafie outros jogadores para poder subir de rank</p>
                        </div>
                        <div className="flex justify-between px-20 mt-14">
                            <div className="flex flex-col justify-between gap-3">
                                <p className="font-semibold h-11 items-center flex scale-90 grayscale-[40%]">10ª</p>
                                <p className="font-semibold	h-11 items-center flex">10ª</p>
                                <p className="font-semibold	h-11 items-center flex scale-90 grayscale-[40%]">10ª</p>
                            </div>
                            <div className="flex flex-col items-center justify-between">
                                <div className="flex items-center gap-3 h-11 scale-90 grayscale-[40%]">
                                    <Image
                                        loader={imageLoader}
                                        src={"/rosto.png"}
                                        alt="imagem do seu personagem"
                                        width={35}
                                        height={35}	
                                    />
                                    <p className="font-bold	text-lg">Igor Cortez</p>
                                </div>
                                <div className="flex items-center gap-3 h-11 ">
                                    <Image
                                        loader={imageLoader}
                                        src={"/rosto.png"}
                                        alt="imagem do seu personagem"
                                        width={35}
                                        height={35}	
                                    />
                                    <p className="font-bold	text-lg">Igor Cortez</p>
                                </div>
                                <div className="flex items-center gap-3 h-11 scale-90 grayscale-[40%]">
                                    <Image
                                        loader={imageLoader}
                                        src={"/rosto.png"}
                                        alt="imagem do seu personagem"
                                        width={35}
                                        height={35}	
                                    />
                                    <p className="font-bold	text-lg">Igor Cortez</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between">
                                <div className="flex items-center gap-3 h-11 scale-90 grayscale-[40%]">
                                    <Image
                                        loader={imageLoader}
                                        src={"/trofeu.png"}
                                        alt="imagem do seu personagem"
                                        width={20}
                                        height={20}	
                                    />
                                    <p>100 PTS</p>
                                </div> 
                                <div className="flex items-center gap-3 h-11">
                                    <Image
                                        loader={imageLoader}
                                        src={"/trofeu.png"}
                                        alt="imagem do seu personagem"
                                        width={20}
                                        height={20}	
                                    />
                                    <p>100 PTS</p>
                                </div> 
                                <div className="flex items-center gap-3 h-11 scale-90 grayscale-[40%]">
                                    <Image
                                        loader={imageLoader}
                                        src={"/trofeu.png"}
                                        alt="imagem do seu personagem"
                                        width={20}
                                        height={20}	
                                    />
                                    <p>100 PTS</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 relative">
                        <div className="border rounded-lg bg-white flex flex-col px-10 py-5 z-10">
                            <h1 className="text-center text-2xl font-semibold underline underline-offset-[10px]">Seguindo</h1>
                            <div className="flex flex-col gap-5 mt-8">
                                <div className="flex items-center gap-3 h-11">
                                    <Image
                                        loader={imageLoader}
                                        src={"/rosto.png"}
                                        alt="imagem do seu personagem"
                                        width={35}
                                        height={35}	
                                    />
                                    <p className="font-bold	text-lg">Igor Cortez</p>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-lg bg-white flex flex-col px-10 py-5 z-10">
                            <h1 className="text-center text-2xl font-semibold underline underline-offset-[10px]">Seguindo</h1>
                            <div className="flex flex-col gap-5 mt-8">
                                <div className="flex items-center gap-3 h-11">
                                    <Image
                                        loader={imageLoader}
                                        src={"/rosto.png"}
                                        alt="imagem do seu personagem"
                                        width={35}
                                        height={35}	
                                    />
                                    <p className="font-bold	text-lg">Igor Cortez</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative rounded-lg w-full py-5 bg-gray-50 flex gap-10">
                    <h1 className="text-4xl font-bold absolute">Nivel</h1>
                    <div className="flex justify-center w-full mt-20">
                        <div className="w-10/12 flex flex-col gap-1">
                            <p className="w-12/12 text-start text-2xl hover:scale-110 duration-700 text-rose-500">Multiplicacão de Numeros Quebrados 3</p>
                            <p className="w-11/12 text-end text-xl font-medium hover:scale-110 duration-700	text-rose-500">Progressão Geométrica 6/</p>
                            <p className="w-4/12 text-end text-xl font-bold hover:scale-110 duration-700 text-emerald-500">UVA 4/</p>
                            <p className="w-10/12 text-end hover:scale-110 duration-700	text-blue-500">Pleonasmo vicioso ou redundância 9/</p>
                            <p className="w-12/12 text-center text-3xl font-semibold hover:scale-110 duration-700 text-orange-500">Dominios morfocimaticos 1</p>
                            <p className="w-8/12 text-center hover:scale-110 duration-700 text-yellow-500">A Revolução Francesa. 10/</p>
                            <p className="w-4/12 text-center text-xl hover:scale-110 duration-700 text-yellow-500">Primeiro Reinado 7</p>
                            <p className="w-9/12 text-end text-xl font-semibold hover:scale-110 duration-700 text-emerald-500">Desenvolvimento embrionario 5/</p>
                            <p className="w-11/12 text-center text-lg font-medium hover:scale-110 duration-700 text-teal-500">Movimento Uniformemente Variado 8</p>
                            <p className="w-12/12 text-end text-2xl font-medium hover:scale-110 duration-700 text-fuchsia-500">Grupos sociais 2</p>
                        </div>
                    </div>
                </section>
            </main>
        </Container>
    )
}