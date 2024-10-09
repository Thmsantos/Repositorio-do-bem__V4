import style from './modalProps.module.css'

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    title: string;
    children?: React.ReactNode; 
}

function ModalProps2({ isOpen, setOpen, title, children }: IModal) {
    if (isOpen) {
        return (
            <>
                <div className={style.background}>
                    <div className={style.modal}>
                        <div className={style.header}>
                            <h1 className={style.titulo}>{title}</h1>
                            <button className={style.close} onClick={() => setOpen(!isOpen)}>x</button>
                        </div>

                        <div className={style.content}>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <></>;
    }
}

export default ModalProps2;
