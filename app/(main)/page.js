import Image from 'next/image';
import Btn from '../interface/components/Botao/btn';
import BtnColor from '../interface/components/Botao/btncolor';
const imageLoader = ({ src }) => {
    return `http://localhost:3000/${src}`;
};
export default function Home({ imageLoader }){
    return(
        <main className="overflow-hidden absolute top-0">
            <section className="w-screen h-screen relative left-0 top-0 bg-sky-300 flex justify-center">
                <div className="absolute w-full h-full left-0 flex justify-center z-10 bg-black/15 backdrop-blur-xs">
                    <div className="flex flex-col items-center max-w-4xl w-full justify-center gap-8 text-center text-white">
                        <h1 className="font-black text-6xl">VOCE ESTA NO LUGAR CERTO PARA APRENDER !</h1>
                        <h2 className="font-medium text-lg">Desenvolvemos uma plataforma que é capaz de identificar seus pontos fracos e fortes, com isso, traçamos o melhor roteiro de aulas para você. Pois na plataforma EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando.</h2>
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
        </main>
    )
}