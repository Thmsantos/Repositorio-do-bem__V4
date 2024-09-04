import './tabela.css';

function StockTable (){
    return (
        <>
            <div className='divStock'>
                <table>
                    <thead>
                        <th>Alimento</th>
                        <th>Descrição</th>
                        <th>Código</th>
                        <th>Validade</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>teste vida</td>
                            <td>teste vida</td>
                            <td>teste vida</td>
                            <td>teste vida</td>
                        </tr>
                        <tr>
                            <td>teste vida</td>
                            <td>teste vida</td>
                            <td>teste vida</td>
                            <td>teste vida</td>
                        </tr>
                        <tr>
                            <td>teste vida</td>
                            <td>teste vida</td>
                            <td>teste vida</td>
                            <td>teste vida</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default StockTable