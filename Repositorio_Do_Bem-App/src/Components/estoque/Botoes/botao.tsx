/* eslint-disable @typescript-eslint/no-unused-expressions */
import './botao.css';
import adicionarAlimento from '../../../Functions/stockFunction/adicionarAlimento';
import { useState } from 'react';
import generatePdf from '../../../Functions/stockFunction/generatePDF';
import ModalProps2 from '../../modal_props2/modalProps';

function Botao() {
  const [peso, setPeso] = useState<string>('')
  const [validade, setValidade] = useState<string>('')
  const [nome, setNome] = useState<string>('')

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
    closeModal();
  }

  return (
    <>
      <div className="botoes-estoque-container">

        <div><button className="botoes-estoque-esquerda" onClick={generatePdf}>Gerar relatório</button></div>

        <div className="botoes-estoque-container-direita">
          <button className="botoes-estoque-direita" onClick={() => {openModal()}}>+ Add alimento</button>
          <button className="botoes-estoque-direita">- Fazer doação</button>
        </div>

      </div>

      <ModalProps2 isOpen={isModalOpen} setOpen={setIsModalOpen} title="Adicionar Novo Alimento">
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
        <button onClick={closeModal}>Cancelar</button>
      </ModalProps2>


    </>
  );
}

export default Botao;




