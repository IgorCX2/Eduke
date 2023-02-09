import BtnColor from "../Botao/btncolor";
import Image from "next/image"
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default function BoxDescription({ imageLoader, text, title, img}){
    return(
        <div className="w-full bg-white h-80 rounded-xl flex flex-col justify-between px-12 py-10">
            <div>
                <Image
                    loader={imageLoader}
                    src={`/${img}`}
                    alt={`logo do ${title}`}
                    width={50}
                    height={50}
                />
                <h1 className="text-xl font-bold mt-4">{title}</h1>
            </div>
            <p>{text}</p>
            <div className="mt-5">
                <BtnColor link="conta/cadastrar" text="COMEÇAR"/>
            </div>
        </div>
    )
}