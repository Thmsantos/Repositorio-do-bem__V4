import style from './modalProps.module.css'

interface IModal{
    isOpen: boolean
    setOpen: (isOpen: boolean)=> void
    title: string
}

function ModalProps2({isOpen, setOpen, title} :IModal){
    if(isOpen){
        return(
        <>

        <div className={style.background}>
            <div className={style.modal}>

                <div className={style.header}>
                    <h1 className={style.titulo}>{title}</h1>
                    <button className={style.close} onClick={()=>setOpen(!isOpen)}>Fechar</button>
                </div>
            </div>
        </div>

        </>
     )
    }else{
        return(
            <></>
        )
    }
    
    
}

export default ModalProps2;