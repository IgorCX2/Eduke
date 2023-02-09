import { Suspense } from "react";
import '../globals.css'
import Container from "../interface/components/Group/container";
import LoadingPage from "../interface/components/Loading/loadingpage";
import NavLink from "../interface/components/NavLink/navlink";
export default function MainLayout({ children }){
    return(
        <html lang="pt-BR">
            <body className="overflow-x-hidden">
                <Container>
                    <NavLink/>
                </Container>
                <Suspense fallback={<LoadingPage/>}>
                    {children}
                </Suspense>
            </body>
        </html>
    )
}