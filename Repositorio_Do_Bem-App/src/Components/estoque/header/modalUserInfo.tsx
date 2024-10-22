import { FC, useEffect, useState } from 'react';
import style from './modalUserInfo.module.css';
import ModalProps2 from '../../modal_props2/modalProps';
import { UsuarioData } from '../../../Functions/UserFunctions/Interfaces/UsuarioData';
import GetUserStatus from '../../../Functions/UserFunctions/GetStatus';
import EditUser from '../../../Functions/UserFunctions/EditUser';
import DeleteUser from '../../../Functions/UserFunctions/DeleteUser'; 

interface ModalUserInfoProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  name: string;
  cnpj: string;
}

const ModalUserInfo: FC<ModalUserInfoProps> = ({ isOpen, setOpen, name, cnpj }) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false); 
  const [user, setUser] = useState<UsuarioData>();
  const [cnpjForm, setCnpjForm] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await GetUserStatus();
      setUser(userData);
    };

    fetchUsers();
  }, []);

  function openEditModal() {
    if (user) {
      setEmail(user?.email);
      setCep(user?.cep);
      setNome(user?.nomeEmpresa);
      setCnpjForm(user?.cnpj);
    }
    setEditOpen(true);
  }

  function EditUserChange() {
    if (user && user.usuarioId) {
      const updatedUser: UsuarioData = {
        ...user,
        cnpj: cnpjForm,
        nomeEmpresa: nome,
        cep: cep,
        email: email,
      };

      EditUser(updatedUser, user.usuarioId)
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

  function openDeleteModal() {
    setDeleteOpen(true);
  }

  function handleDeleteUser() {
    window.location.href = 'http://localhost:5173/login'
    if (user && user.usuarioId) {
      DeleteUser(user.usuarioId)
        .then((response) => {
          if (response) {
            alert("Usuário deletado com sucesso!");
            window.location.href = 'http://localhost:5555/'
            setDeleteOpen(false);
            setOpen(false);
          }
        })
        .catch((error) => {
          console.error("Erro ao deletar o usuário:", error);
          alert("Erro ao deletar o usuário.");
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
            <button onClick={openEditModal}>Editar usuário</button>
            <button onClick={openDeleteModal}>Deletar usuário</button>
            <button>Sair</button>
          </div>
        </div>
      </div>

      <ModalProps2 isOpen={isEditOpen} setOpen={setEditOpen} title="Editar Usuário">
        <input
          placeholder="Cnpj"
          defaultValue={user?.cnpj}
          onChange={(e) => setCnpjForm(e.target.value)}
        />
        <input
          placeholder="Nome"
          defaultValue={user?.nomeEmpresa}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder="Cep"
          defaultValue={user?.cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <input
          placeholder="Email"
          defaultValue={user?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={EditUserChange}>Salvar</button>
      </ModalProps2>

      <ModalProps2 isOpen={isDeleteOpen} setOpen={setDeleteOpen} title="Deletar Usuário">
        <p>Deseja realmente excluir o usuário?</p>
        <button onClick={handleDeleteUser} className='delete-user-button' >Excluir</button>
        <button onClick={() => setDeleteOpen(false)} className='cancel-button' >Cancelar</button>
      </ModalProps2>
    </>
  );
};

export default ModalUserInfo;
