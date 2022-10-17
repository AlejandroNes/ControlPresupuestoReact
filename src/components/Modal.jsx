import React from 'react';
import btnCerrar from '../img/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const handleCerrar = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal' onClick={handleCerrar}>
                <img src={btnCerrar} alt="icono cerrar" />
            </div>
            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
            </form>
        </div>
    )
}
