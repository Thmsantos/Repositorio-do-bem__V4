/* eslint-disable @typescript-eslint/no-unused-expressions */
import './botao.css';
import adicionarAlimento from '../../../Functions/stockFunction/adicionarAlimento';
import { useEffect, useState } from 'react';
import generatePdf from '../../../Functions/stockFunction/generatePDF';
import ModalProps2 from '../../modal_props2/modalProps';
import { debitarAlimento } from '../../../Functions/stockFunction/debitarAlimentos';
import { AlimentoData } from '../../../Functions/stockFunction/Interfaces/AlimentoData';
import GetAlimentos from '../../../Functions/stockFunction/GetAlimentos';

function Botao() {
  const [peso, setPeso] = useState<string>('')
  const [validade, setValidade] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [alimentos, setAlimentos] = useState<AlimentoData[]>([]); 
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDoacaoModalOpen, setIsDoacaoModalOpen] = useState(false);
  const [selectedAlimento, setSelectedAlimento] = useState<string>(''); 

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openDoacaoModal = () => setIsDoacaoModalOpen(true);
  const closeDoacaoModal = () => setIsDoacaoModalOpen(false);

  useEffect(() => {
    const fetchAlimentos = async () => {
        const alimentosAxios = await GetAlimentos();
        setAlimentos(alimentosAxios);
    };

    fetchAlimentos();
}, []);

  function handleAddAlimento() {
    const changeAlimento = {
      "nome": nome,
      "peso": peso,
      "validade": validade,
      "flag": 'verde'
    };
    return changeAlimento;
  }
  
  function addAlimento() {
    const newAlimento = handleAddAlimento();
    adicionarAlimento(newAlimento); 
    closeAddModal();
  }

  async function handleFazerDoacao() {
    if (selectedAlimento) {
      await debitarAlimento(selectedAlimento, setAlimentos);
      closeDoacaoModal(); 
      window.location.reload()
    } else {
      alert('Selecione um alimento para doar.');
    }
  }

  return (
    <>
      <div className="botoes-estoque-container">

        <div><button className="botoes-estoque-esquerda" onClick={generatePdf}>Gerar relatório</button></div>

        <div className="botoes-estoque-container-direita">
          <button className="botoes-estoque-direita" onClick={openAddModal}>+ Add alimento</button>
          <button className="botoes-estoque-direita" onClick={openDoacaoModal}>- Fazer doação</button>
        </div>

      </div>

      <ModalProps2 isOpen={isAddModalOpen} setOpen={setIsAddModalOpen} title="Adicionar Novo Alimento">
        <input
          placeholder="Nome do Alimento"
          onChange={(e) => setNome(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Peso (kg)"
          onChange={(e) => setPeso(e.target.value)}
        />
        <br></br>
        <input
          type="date"
          placeholder="Validade"
          onChange={(e) => setValidade(e.target.value)}
        />
        <br></br>
        <button onClick={() => {addAlimento(), window.location.reload()}}>Adicionar</button>
        <button onClick={closeAddModal}>Cancelar</button>
      </ModalProps2>


      <ModalProps2 isOpen={isDoacaoModalOpen} setOpen={setIsDoacaoModalOpen} title="Fazer Doação">
        <select value={selectedAlimento} onChange={(e) => setSelectedAlimento(e.target.value)}>
          <option value="">Selecione os alimentos para doar</option>
          {alimentos.map((alimento) => (
            <option key={alimento.alimentoId} value={alimento.alimentoId}>
              {alimento.nome} - {alimento.peso}
            </option>
          ))}
        </select>
        <br />
        <button onClick={handleFazerDoacao}>Confirmar Doação</button>
        <button onClick={closeDoacaoModal}>Cancelar</button>
      </ModalProps2>
    </>
  );
}

export default Botao;




