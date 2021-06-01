import React from 'react';

function Notificaciones(props) {
    
    const type = props.type || 'info';
    const closable = props.closable !== undefined ? props.closable : true;
    
    const handleClick = () => {
   
        props.onClose();
    };

    return (<div className={"alert alert-dismissible alert-" + type}>
     
        {props.title && <h4 className="alert-heading">{props.title}</h4>}
        {props.children}
        {
            closable && (<button type="button" aria-label="Cerrar alerta" className="close" onClick={handleClick}>
                <span aria-hidden="true">&times;</span>
            </button>)
        }
    </div>);
}

export default Notificaciones;
