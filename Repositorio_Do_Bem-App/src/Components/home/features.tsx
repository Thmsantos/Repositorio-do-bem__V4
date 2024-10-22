import './features.css'

function Features(){
    return(
        <>
            <div className='container'>
                
                <div className='feature'>
                    <p className='title'>Otimização</p>
                    <img src="/src/assets/images/stock.png" alt="" />
                    <p className='descricao'>Gerencie seu estoque de alimentos adicionando itens por nome, validade e peso. Mantenha tudo organizado, evite desperdícios com facilidade, e otimize seu processo.                   </p>
                </div>
                <div className='feature'>
                    <p className='title'>Gráficos</p>
                    <img src="/src/assets/images/statisctics.png" alt="" />
                    <p className='descricao'>Visualize o status do seu estoque com gráficos interativos e atualizáveis em tempo real. Tome decisões informadas com base em dados claros e acessíveis.</p>
                </div>
                <div className='feature'>
                    <p className='title'>Relatórios</p>
                    <img src="/src/assets/images/document.png" alt="" />
                    <p className='descricao'>Gere relatórios abrangentes com informações sobre validade, ID e nome dos alimentos, e fique por dentro dos itens disponíveis no seu estoque.</p>
                </div>
            </div>       
        </>
    )
}

export default Features;