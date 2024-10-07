import './tabela.css';
import GetAlimentos from '../../../Functions/stockFunction/GetAlimentos';
import { AlimentoData } from '../../../Functions/stockFunction/Interfaces/AlimentoData';
import { useEffect, useState } from 'react';
import ModalProps2 from '../../modal_props2/modalProps';

function StockTable() {
    const [alimentos, setAlimentos] = useState<AlimentoData[]>([]);
    const [isEditOpen, setEditOpen] = useState(false);
    const [alimentoEdit, setAlimentoEdit] = useState<AlimentoData>();
    const [nome, setNome] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [data, setData] = useState<string>('');

    useEffect(() => {
        const fetchAlimentos = async () => {
            const alimentosAxios = await GetAlimentos();
            setAlimentos(alimentosAxios);
        };

        fetchAlimentos();
    }, []);

    function EditChange(alimentoId: string){
        for(let i = 0; i < alimentos.length; i++){
            if(alimentos[i].alimentoId === alimentoId){
                setAlimentoEdit(alimentos[i])
            }
        }

        setEditOpen(true);
    }

    function EditAlimento(){
        //construir o objeto 
    }


    return (
        <>
            <div className='divStock'>
                <table>
                    <thead>
                        <th>Alimento</th>
                        <th>Peso</th>
                        <th>Validade</th>
                    </thead>
                    <tbody>
                        {alimentos.map((alimento) => (
                            <tr key={alimento.alimentoId}>
                                <td>{alimento.nome}</td>
                                <td>{alimento.peso}</td>
                                <td>{alimento.validade}</td>
                                <td>
                                    <button onClick={() => EditChange(alimento.alimentoId)}>Editar</button>
                                </td>
                                <td>
                                    <button>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ModalProps2 isOpen={isEditOpen} setOpen={setEditOpen} title="Editar Alimento">
                <input
                    placeholder="Nome"
                    defaultValue={alimentoEdit?.nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    placeholder="Peso"
                    defaultValue={alimentoEdit?.peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
                <input
                    placeholder="Validade"
                    defaultValue={alimentoEdit?.validade}
                    type="date"
                    onChange={(e) => setData(e.target.value.toString())}
                />
                <button>Salvar</button>
            </ModalProps2>
        </>

    )
}

export default StockTable