export default function BoxLoading({tamanhos, config, configquebra, gapquebra}){
    const quebra = tamanhos.toString().split('|')
    const gap = gapquebra.toString().split(',')
    var countQuebra = -1
    const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent`;
    return(
        <div className={`${config} flex`}>
            {quebra.map((quebra) => {
                countQuebra++
                const valorCountQuebra = countQuebra
                return(
                    <div className={`${configquebra} ${gap[valorCountQuebra]} flex`}>
                        {quebra.toString().split(',').map((tamanho) => {
                            return(<div className={`${tamanho} rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 ${shimmer}`}/>)
                        })}
                    </div>
                )
            })}
        </div>
    )

}