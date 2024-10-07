import { FC, useEffect, useState } from 'react';
import style from './modalUserInfo.module.css';
import ModalProps2 from '../../modal_props2/modalProps';
import { UsuarioData } from '../../../Functions/UserFunctions/Interfaces/UsuarioData';
import GetUserStatus from '../../../Functions/UserFunctions/GetStatus';
import EditUser from '../../../Functions/UserFunctions/EditUser';

interface ModalUserInfoProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  name: string;
  cnpj: string;
}

const ModalUserInfo: FC<ModalUserInfoProps> = ({ isOpen, setOpen, name, cnpj }) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [user, setUser] = useState<UsuarioData>();
  const [cnpjForm, setCnpjForm] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("")


  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await GetUserStatus();
      console.log(userData)
      setUser(userData);
    };

    fetchUsers();
  }, []);

  function EditUserChange() {
    console.log(cnpjForm, email, cep, nome)
     
    if (user && user.id) {
      const updatedUser: UsuarioData = {
        ...user,
        cnpj: cnpjForm,
        nomeEmpresa: nome,
        cep: cep,
        email: email,
      };
  
      EditUser(updatedUser, user.id)
        .then((response) => {
          if (response) {
            alert("Usuário atualizado com sucesso!");
            setEditOpen(false);
          }
        })
        .catch((error) => {
          console.error("Erro ao atualizar o usuário:", error);
          alert("Erro ao atualizar o usuário.");
        });
    } else {
      alert("Usuário não encontrado");
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={style.background}>
        <div className={style.modal}>
          <div className={style.header}>
            <img
              src="/src/assets/images/close.png"
              alt=""
              onClick={() => setOpen(false)}
              className={style['close-button']}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className={style.descricao}>
            <p>{name}</p>
            <p>{cnpj}</p>
            <button>Sair</button>
            <button onClick={() => setEditOpen(true)}>Editar usuário</button>
            <button>Deletar usuário</button>
          </div>
        </div>
      </div>

      <ModalProps2
        isOpen={isEditOpen}
        setOpen={setEditOpen}
        title="Editar Usuário"
      >
        <input placeholder='Cnpj' defaultValue={user?.cnpj} onChange={(e) => setCnpjForm(e.target.value)} />
        <input placeholder='Nome' defaultValue={user?.nomeEmpresa} onChange={(e) => setNome(e.target.value)} />
        <input placeholder='Cep' defaultValue={user?.cep} onChange={(e) => setCep(e.target.value)} />
        <input placeholder='Email' defaultValue={user?.email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={EditUserChange}>Salvar</button>
      </ModalProps2>
    </>
  );
};

export default ModalUserInfo;
