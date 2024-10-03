import { useState } from 'react';
import ModalProps2 from '../modal_props2/modalProps';
import './modal_props.css'


export default function ModalProps(){

    const [open, setOpen] = useState<boolean>(false);
    console.log("🚀 ~ ModalProps ~ open:", open)
    

    return(
        <>
        <button className='modal-open' onClick = {() => setOpen(!open)}>Abrir Modal</button>

        <ModalProps2
         isOpen = {open} 
         setOpen = {setOpen}
         title = {'Título'}
         />

        
        </>
    )
}