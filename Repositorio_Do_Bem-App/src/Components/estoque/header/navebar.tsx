import './navebar.css'
import { useState, useEffect } from 'react'
import ModalUserInfo from './modalUserInfo';
import GetUserStatus from '../../../Functions/UserFunctions/GetStatus';

export default function Navebar() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("")
  const [userCnpj, setUserCnpj] = useState<string>("")

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await GetUserStatus();
      setUserName(userData.nomeEmpresa);
      setUserCnpj(userData.cnpj);
    };

    fetchUsers();
  }, []);

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
        cnpj={userCnpj} 
      />
    </>    
    
  )
}