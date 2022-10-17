import { useState } from 'react'
import { Mensaje } from './Mensaje';

export const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!presupuesto || presupuesto < 1) {
            setMensaje('Presupuesto no valido')
            return;
        }
        setMensaje('');
        setIsValidPresupuesto(true);
        console.log('validando');
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='campo'>
                    <input
                        className='nuevo-presupuesto'
                        type='number'
                        placeholder='definir presupuesto'
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value='Añadir' />
                {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}
