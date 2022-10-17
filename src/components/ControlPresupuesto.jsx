import React from 'react'

export const ControlPresupuesto = ({ presupuesto }) => {

    const formaterarCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {formaterarCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formaterarCantidad(presupuesto)}
                </p>
                <p>
                    <span>Gastado:</span> {formaterarCantidad(presupuesto)}
                </p>
            </div>
        </div>
    )
}
