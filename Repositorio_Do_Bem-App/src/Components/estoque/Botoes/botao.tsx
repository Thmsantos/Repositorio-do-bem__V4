import './botao.css';
import adicionarAlimento from '../../../Functions/stockFunction/adicionarAlimento';
import { AlimentoData } from '../../../Functions/stockFunction/Interfaces/AlimentoData';
import { useEffect, useState } from 'react';
import GetAlimentos from '../../../Functions/stockFunction/GetAlimentos';
import generatePdf from '../../../Functions/stockFunction/generatePDF';
import ModalProps2 from '../../modal_props2/modalProps';

function Botao(){
  const [alimentos, setAlimentos] = useState<AlimentoData[]>([]);
  const [novoAlimento, setNovoAlimento] = useState<AlimentoData>({
    nome: '',
    peso: '',
    validade: '',
    alimentoId: '',
    emailDoador: '',
    flag: ''
  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAlimentos = async () => {
        const alimentosAxios = await GetAlimentos();
        console.log(alimentos)
        setAlimentos(alimentosAxios); 
    };

    fetchAlimentos()
}, [])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
      setIsModalOpen(false)
  }

      const handleAddAlimento = async () => {
        if (!novoAlimento.nome || !novoAlimento.peso || !novoAlimento.validade) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const response = await adicionarAlimento(novoAlimento);

        if (response.success) {
            alert('Alimento adicionado com sucesso!');
            setAlimentos(prevAlimentos => [...prevAlimentos, novoAlimento])
            setNovoAlimento({
                nome: '',
                peso: '',
                validade: '',
                alimentoId: '',
                emailDoador: '',
                flag: ''
            });
            closeModal();
        } else {
            alert('Erro ao adicionar alimento: ' + response.error);
        }
    }




    return(
      <>
        <div className="button-container">         
                <div> <button className="generate-report" onClick={generatePdf}>Gerar Relatório</button></div>
                <div className="button-group">
                <button className= "botoes" onClick={openModal}>+ Add novo alimento</button>
                <button className="botoes">- Fazer doação</button>
                </div>
          </div>  

           <ModalProps2 isOpen={isModalOpen} setOpen={setIsModalOpen} title="Adicionar Novo Alimento">
                <input
                    placeholder="Nome do Alimento"
                    value={novoAlimento.nome}
                    onChange={(e) => setNovoAlimento({ ...novoAlimento, nome: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Peso (kg)"
                    value={novoAlimento.peso}
                    onChange={(e) => setNovoAlimento({ ...novoAlimento, peso: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Validade"
                    value={novoAlimento.validade}
                    onChange={(e) => setNovoAlimento({ ...novoAlimento, validade: e.target.value })}
                />
                <button onClick={handleAddAlimento}>Adicionar</button>
                <button onClick={closeModal}>Cancelar</button>
            </ModalProps2>


    </>
  );
}

export default Botao;




