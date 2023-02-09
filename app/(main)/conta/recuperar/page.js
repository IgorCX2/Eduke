import { Suspense } from "react";
import BoxLoading from "../../../interface/components/Loading/boxloading";
import SendEmail from "./enviaremail";

export default function RecuperarSenha(){
    return(
        <Suspense fallback={<BoxLoading config={'max-w-md w-full flex-col'} configquebra={'flex-col w-full space-y-4'} gapquebra={', mt-5'} tamanhos={'w-full h-20 | w-full h-5 , w-4/6 h-5 , w-5/6  h-5 , w-full h-5 , w-4/6 h-5'}/>}>
            <SendEmail/>
        </Suspense> 
    )
}