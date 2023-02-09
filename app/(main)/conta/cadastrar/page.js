import { Suspense } from "react";
import BoxLoading from "../../../interface/components/Loading/boxloading";
import BoxCadastrar from "./boxcadastrar";

export default async function Cadastrar(){
    return(
        <Suspense fallback={<BoxLoading config={'max-w-md w-full flex-col'} configquebra={'flex-col w-full space-y-4'} gapquebra={', mt-5, mt-6'} tamanhos={'w-full h-20 | w-full h-5 , w-4/6 h-5 , w-5/6  h-5 | w-full h-10 , w-full h-10 , w-full h-10 , w-4/6 h-5 , w-full h-10'}/>}>
            <BoxCadastrar/>
        </Suspense> 
    )
}