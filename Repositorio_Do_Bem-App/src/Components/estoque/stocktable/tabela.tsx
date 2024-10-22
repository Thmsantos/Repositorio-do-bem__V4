import './tabela.css';
import GetAlimentos from '../../../Functions/stockFunction/GetAlimentos';
import { AlimentoData } from '../../../Functions/stockFunction/Interfaces/AlimentoData';
import { useEffect, useState } from 'react';
import ModalProps2 from '../../modal_props2/modalProps';
import UpdateAlimento from '../../../Functions/stockFunction/UpdateAlimentos';
import DeleteAlimento from '../../../Functions/stockFunction/DeleteAlimento';

function StockTable() {
    const [alimentos, setAlimentos] = useState<AlimentoData[]>([]);
    const [isEditOpen, setEditOpen] = useState(false);
    const [alimento, setAlimento] = useState<AlimentoData>();
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


    function ChangeAliment(alimentoId: string) {
        const alimentoEncontrado = alimentos.find(a => a.alimentoId === alimentoId);
        if (alimentoEncontrado) {
            setAlimento(alimentoEncontrado);
            setNome(alimentoEncontrado.nome);
            setPeso(alimentoEncontrado.peso);
            setData(alimentoEncontrado.validade);
        }
        setEditOpen(true);
    }

    function DelAlimento(alimentoId: string) {
        const alimentoEncontrado = alimentos.find(a => a.alimentoId === alimentoId);
        if (alimentoEncontrado) {
            DeleteAlimento(alimentoEncontrado.alimentoId)
                .then((response) => {
                    if (response) {
                        alert("Alimento deletado com sucesso!");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao deletar o alimento:", error);
                    alert("Erro ao deletar o alimento.");
                });
        }

        window.location.reload()
    }

    function EditAlimento() {
        if (alimento) {
            alimento.nome = nome;
            alimento.peso = peso;
            alimento.validade = data;

            UpdateAlimento(alimento, alimento?.alimentoId)
                .then((response) => {
                    if (response) {
                        alert("Alimento atualizado!");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao atualizar alimento:", error);
                    alert("Erro ao atualizar alimento.");
                });
        }
        setEditOpen(false);
    }

    return (
        <>

            <table>
                <thead className='headTable'>
                    <th className='gambiarraAlimento'>Alimento</th>
                    <th className='gambiarraPeso'>Peso</th>
                    <th className='gambiarra'>Validade</th>
                </thead>
                <div className='divStock'>
                    <tbody>
                        {alimentos.map((alimento) => (
                            <tr key={alimento.alimentoId} className='alimento-row'>
                                <td className='alimentos'>{alimento.nome}</td>
                                <td>{alimento.peso}</td>
                                <td>{alimento.validade}</td>
                                <td>
                                    <button className='btn-stock' onClick={() => ChangeAliment(alimento.alimentoId)}>Editar</button>
                                </td>
                                <td>
                                    <button className='btn-stock' onClick={() => { DelAlimento(alimento.alimentoId) }}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </div>
            </table>

            <ModalProps2 isOpen={isEditOpen} setOpen={setEditOpen} title="Editar Alimento">
                <input
                    placeholder="Nome"
                    defaultValue={alimento?.nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    placeholder="Peso"
                    defaultValue={alimento?.peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
                <input
                    placeholder="Validade"
                    defaultValue={alimento?.validade}
                    type="date"
                    onChange={(e) => setData(e.target.value.toString())}
                />
                <button onClick={EditAlimento}>Salvar</button>
            </ModalProps2>

        </>

    )
}

export default StockTable