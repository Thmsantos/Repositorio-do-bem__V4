import { FC } from 'react'
import style from './modalUserInfo.module.css'

interface ModalUserInfoProps {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
  name: string
  cnpj: string
}

const ModalUserInfo: FC<ModalUserInfoProps> = ({ isOpen, setOpen, name, cnpj }) => {
  if (!isOpen) return null

  return (
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
        </div>
      </div>
    </div>
  );
};

export default ModalUserInfo
