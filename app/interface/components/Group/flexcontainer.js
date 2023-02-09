import Container from "./container";

export default async function FlexContainer({ children, config}){
    return(
        <section className={`relative ${config}`}>
            <Container>
                <div className="w-full justify-between items-center flex gap-12 flex-row-reverse">
                    {children}
                </div>
            </Container>
        </section>
    )
}