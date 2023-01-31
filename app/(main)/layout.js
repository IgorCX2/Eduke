import { Suspense } from "react";
import '../globals.css'
import LoadingPage from "../interface/components/Loading/loadingpage";
export default function MainLayout({ children }){
    return(
        <html lang="pt-BR">
            <body>
                <Suspense fallback={<LoadingPage/>}>
                    {children}
                </Suspense>
            </body>
        </html>
    )
}