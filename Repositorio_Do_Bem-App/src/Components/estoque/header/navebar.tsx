import './navebar.css'
import { useState } from 'react'
import ModalUserInfo from './modalUserInfo';


export default function Navebar() {
  const [modalOpen, setModalOpen] = useState(false);
  const userName = "Nome Empresa"; 
  const userCNPJ = "00.000.000/0000-00";

  return (
    <>
      <div className="estoque-header">
        
          <div className="estoque-header-esquerda">
          <p className='estoque-header-esquerda-texto' onClick={() => window.location.href = 'http://localhost:5173/home'}>Home</p>
          </div>

          <div className="estoque-header-direita">
            <img 
            id='logo-header-img'
            src="/src/assets/images/user-estoque.png" 
            alt=""
            onClick={() => setModalOpen(true)}
            style={{ cursor: 'pointer' }} />
          </div>

      </div>

      <ModalUserInfo 
        isOpen={modalOpen} 
        setOpen={setModalOpen} 
        name={userName} 
        cnpj={userCNPJ} 
      />
    </>    
    
  )
}