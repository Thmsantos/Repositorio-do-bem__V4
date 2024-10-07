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
                        <th>Peso</th>
                        <th>Flag</th>
                        <th>Validade</th>
                    </thead>
                    <tbody>
                        {alimentos.map((alimento) => (
                            <tr>
                                <td>{alimento.nome}</td>
                                <td>{alimento.peso}</td>
                                <td>{alimento.flag}</td>
                                <td>{alimento.validade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default StockTable