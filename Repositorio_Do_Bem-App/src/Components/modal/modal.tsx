import { useEffect } from 'react';
import './modal.css';

export default function Modal() {
    useEffect(() => {
        const openModalButton = document.querySelector("#open-modal") as HTMLElement;
        const closeModalButton = document.querySelector("#close-modal") as HTMLElement;
        const modal = document.querySelector("#modal") as HTMLElement;
        const fade = document.querySelector("#fade") as HTMLElement;
        const toggleModal = () => {
            if (modal && fade) {
                modal.classList.toggle("hide");
                fade.classList.toggle("hide");
            }
        };
        [openModalButton, closeModalButton, fade].forEach((el) => {
            if (el) {
                el.addEventListener("click", toggleModal);
            }
        });
        return () => {
            [openModalButton, closeModalButton, fade].forEach((el) => {
                if (el) {
                    el.removeEventListener("click", toggleModal);
                }
            });
        };
    }, []);

    return (
        <>
            <h1 className='titulo'>Modal</h1>
            <button id="open-modal">Abrir</button>
            <div id="fade" className="hide"></div>

            <div id="modal" className="hide">
                <div className="modal-header">
                    <h2 className='titulo'>Modal</h2>
                    <button id="close-modal">Fechar</button>
                </div>

                <div className="modal-body">
                </div>

            </div>
        </>
    );
}