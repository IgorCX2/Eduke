import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from "next/link";
import Btn from '../interface/components/Botao/btn';
import BtnColor from '../interface/components/Botao/btncolor';
import BoxDescription from '../interface/components/Group/boxdescription';
import BoxProduct from '../interface/components/Group/boxproduct';
import FlexContainer from '../interface/components/Group/flexcontainer';
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default async function Home({ imageLoader }){
    const cookiesList = cookies()
    const hasCookie = await cookiesList.has('UserToken')
    if(hasCookie != false){
        redirect('/aprender')
    }
    return(
        <main className="absolute top-0">
            <section className="w-screen h-screen relative left-0 top-0 bg-sky-300 flex justify-center">
                <div className="absolute w-full h-full left-0 flex justify-center z-10 bg-black/15 backdrop-blur-xs">
                    <div className="flex flex-col items-center max-w-4xl w-full justify-center gap-8 text-center text-white">
                        <h1 className="font-black text-6xl">VOCE ESTA NO LUGAR CERTO PARA APRENDER !</h1>
                        <h2 className="font-medium text-lg">A nossa plataforma de estudos identifica os pontos fortes e fracos de cada pessoa, traçando um plano de estudos personalizado e eficiente para alcançar o seu sucesso. Junte-se a nós e maximize seu potencial!</h2>
                        <div className="flex gap-12 mt-2">
                            <Btn link='https://www.youtube.com/' text='Tutorial'/>
                            <BtnColor link='conta/cadastrar' text='COMEÇAR'/>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        loader={imageLoader}
                        src={"/slidemain.png"}
                        alt="slide inicial do site"
                        priority={true}
                        placeholder ='blur'
                        blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                        fill={true}	
                        style={{objectFit: "cover"}}	
                    />
                </div>
            </section>
            <FlexContainer config={"pt-24"}>
                <div className="flex flex-col max-w-3xl w-full">
                    <h1 className="font-black text-5xl">CONHEÇA O NOSSO MÉTODO</h1>
                    <p className="mt-6">Pensando em estudantes de todas as idades, Nossa plataforma revolucionária de estudos utiliza tecnologia avançada para identificar pontos fortes e fracos de cada aluno. Com base nessas informações, traçamos um plano de estudos personalizado e eficiente, para assim, poder passar por todos os seus obstáculos. Acreditamos que para evoluir é necessario pratica, treinos, e não somente escutar e escrever, com isso, iremos proporcionar um ensino totalmente personalizado para você. Junte-se a nós e transforme seu aprendizado!</p>
                    <div className="mt-10">
                        <BtnColor link="conta/cadastrar" text="COMEÇAR"/>
                    </div>
                </div>
                <div>
                    <Image
                        loader={imageLoader}
                        src="/ilhas.png"
                        alt="desenho de ilhas voadoras"
                        width={400}
                        height={400}
                    />
                </div>
            </FlexContainer>
            <FlexContainer config={"bg-gray-200 py-5 mt-24"}>
                <div>
                    <Image
                        loader={imageLoader}
                        src="/pix.jpeg"
                        alt="QrCode do pix"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col max-w-3xl w-full">
                    <h1 className="font-black text-5xl">NOS AJUDE A TE AJUDAR =)</h1>
                    <p className="mt-6">Somos uma empresa idependende, entretando, temos muitos gastos para manter esta plataforma no ar e de forma gratuita para muitos. Com isso, pedimos humildemente que nos ajude com qualquer valor, para conseguirmos manter a plataforma no ar com extrema qualidade.</p>
                    <div className="w-full h-5 mt-10">
                        propaganda
                    </div>
                </div>
            </FlexContainer>
            <FlexContainer config={"mt-24"}>
                <div className="w-full flex-col items-center">
                    <h1 className="font-black text-5xl text-center">NOSSOS PLANOS</h1>
                    <div className="flex justify-between mt-40 w-full flex-wrap">
                        <BoxProduct style="bg-white" title="10 moedas" text="Comprando moedas você consegue trocar por itens incriveis em nossa loja!" img="coin.png"/>
                        <BoxProduct style="bg-blue-500 -mt-14 text-white" title=" 50 moedas" text="Comprando moedas você consegue trocar por itens incriveis em nossa loja!" img="coin.png"/>
                        <BoxProduct style="bg-blue-500 -mt-14 text-white" title="Vip" text="Comprando vip você podera desfrutar de diversos benefícios" img="coroa.png"/>
                        <BoxProduct style="bg-white" title="100 moedas" text="Comprando moedas você consegue trocar por itens incriveis em nossa loja!" img="coin.png"/>
                    </div>
                </div>
            </FlexContainer>
            <FlexContainer config={"mt-40"}>
                <div>
                    <div className="bg-blue-500 flex justify-between gap-16 rounded-l-xl px-10 py-8 text-white">
                        <div className="items-center flex flex-col gap-3">  
                            <h1 className="text-5xl font-bold">+2mil</h1>
                            <h2 className="text-lg font-medium">CADASTRADOS</h2>
                        </div>
                        <div className="items-center flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">+300</h1>
                            <h2 className="text-lg font-medium">PLANOS DE ESTUDOS</h2>
                        </div>
                        <div className="items-center flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">+300</h1>
                            <h2 className="text-lg font-medium">ARTIGOS</h2>
                        </div>
                        <div className="items-center flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">+7mil</h1>
                            <h2 className="text-lg font-medium">EXERCICIOS</h2>
                        </div>
                    </div>
                </div>
                <div className="max-w-md w-full">
                    <h1 className="text-5xl font-bold">Informações da Nossa Plataforma</h1>
                </div>
            </FlexContainer>
            <FlexContainer config={"mt-40 bg-gray-200 py-10"}>
                <div className="flex flex-col w-1/2 gap-12 mt-16">
                    <BoxDescription img="booknotsmoke.png" text="Em nossa plataforma temos diversos tipos de simulados, com eles é possivel adquirir técnicas, para assim, poder resolver com mais facilidades os desafios propostos pelos vestibulares" title="SIMULADOS"/>
                    <BoxDescription img="booknotsmoke.png" text="Aqui você encotra os mais variados tipos de exercícios, podendo ser de vestibulares ou até mesmo feito por nossos especialistas. Os exercícios colocam em prática tudo aquilo que você aprendeu" title="EXERCÍCIOS"/>
                </div>
                <div className="flex flex-col w-1/2 gap-12 -mt-36">
                    <div>
                        <h1 className="font-black text-4xl">VOCE ESTA NO LUGAR CERTO PARA APRENDER !</h1>
                        <h2 className="font-medium text-lg mt-10">Na plataforma EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando. Com isso, oferecemos alguns serviços que são de extrema importância para complementar os seus estudos.</h2>
                    </div>
                    <BoxDescription img="booknotsmoke.png" text="Faremos um plano de estudo totalmente personalizado para você, baseado em suas dificuldades, para assim, poder estudar aquilo que você realmente precisa" title="PLANO DE ESTUDO"/>
                </div>
            </FlexContainer>
            <FlexContainer config={"py-5"}>
                <div>
                    <p>Desenvolvido por CX2</p>
                </div>
                <Link href="/" className="flex gap-3 items-center">
                    <Image
                        loader={imageLoader}
                        src="/logo.png"
                        alt="LogoCX2"
                        width={35}
                        height={50}
                        priority
                    />
                    <div>
                        <h1 className="text-2xl font-black">EDUKE</h1>
                        <h2 className="text-xl font-semibold -mt-2 tracking-widest">by CX2</h2>
                    </div>
                </Link>
            </FlexContainer>
        </main>
    )
}