import Image from 'next/image';
import '../../globals.css'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Container from '../../interface/components/Group/container'
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default async function LayoutConta({ children, imageLoader}) {
    const cookiesList = cookies()
    const hasCookie = await cookiesList.has('UserToken')
    if(hasCookie != false){
        redirect('/aprender')
    }
    return(
        <main>
            <Container>
                <div className="absolute w-0.5 h-full bg-gradient-to-t from-transparent via-gray-400 top-0 items-center flex">
                    <div className='w-1.5 h-40 rounded-full bg-gradient-to-t from-blue-500 absolute -left-0.5 drop-shadow-toxl'></div>
                </div>
                <section className='w-full flex justify-evenly items-center mt-24'>
                    <Image
                        loader={imageLoader}
                        src="/book.png"
                        alt="foto de um livro"
                        placeholder ='blur'
                        blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                        width={600}
                        height={600}
                    />
                    {children}
                </section>
            </Container>
        </main>
    )
}