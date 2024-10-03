import './tabela.css';
import GetAlimentos from '../../../Functions/stockFunction/GetAlimentos';
import { AlimentoData } from '../../../Functions/stockFunction/Interfaces/AlimentoData';
import { useEffect, useState } from 'react';

function StockTable (){
    const [alimentos, setAlimentos] = useState<AlimentoData[]>([]);

    useEffect(() => {
        const fetchAlimentos = async () => {
            const alimentosAxios = await GetAlimentos();
            console.log(alimentos)
            setAlimentos(alimentosAxios); 
        };

        fetchAlimentos();
    }, []);

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