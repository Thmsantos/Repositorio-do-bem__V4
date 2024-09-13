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
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td> // estabelecer limite de carac
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