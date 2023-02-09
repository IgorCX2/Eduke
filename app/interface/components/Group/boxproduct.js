import Image from "next/image"
import BtnColor from "../Botao/btncolor";
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default function BoxProduct({ imageLoader, title, text, img, style}){
    return(
        <div className={`rounded-lg drop-shadow-n2xl max-w-xs w-full h-96 flex flex-col items-center justify-between py-7 ${style}`}>
            <div className="flex flex-col items-center gap-2">
                <Image
                    loader={imageLoader}
                    src={`/${img}`}
                    alt={`logo do produto ${title}`}
                    width={80}
                    height={80}
                />
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <p className="text-center">{text}</p>
            <BtnColor text={"Saiba Mais"}/>
        </div>
    )
}