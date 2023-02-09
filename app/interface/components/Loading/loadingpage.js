import Image from 'next/image';
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default function LoadingPage({imageLoader, describe}){
    return(
        <div className="absolute top-0 left-0 h-screen z-40 w-full bg-white flex flex-col items-center justify-center gap-8">
            <div className='relative -ml-4'>
                <Image
                    loader={imageLoader}
                    src="/ilhascarregamento.svg"
                    alt="ilha flutuante"
                    placeholder ='blur'
                    blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                    width={181}
                    height={137}
                />
                <div className='absolute bottom-24 left-14'>
                    <div className='animate-bounce'>
                        <Image
                            loader={imageLoader}
                            src="/skin.png"
                            alt="mascote do site"
                            placeholder ='blur'
                            blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                            width={75}
                            height={75}
                        />
                    </div>
                    <div className='bg-black w-full h-5 rounded-full -mt-2 absolute animate-newpulse'></div>
                </div>
            </div>
            <div className="flex flex-col text-center gap-1">
                <h1 className="font-bold text-gray-400 text-xl">AGUARDE...</h1>
                <p>{describe || "Estamos Finalizando =)"}</p>
            </div>
        </div>
    )
}