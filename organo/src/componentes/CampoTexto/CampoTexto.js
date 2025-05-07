import './CampoTexto.css'

export const CampoTexto = (props) => {
    return (
        <div className="CampoTexto__container container">
            <label htmlFor="nome" className="CampoTexto__label form-label">
                {props.label}
            </label>
            <input
                type="text" 
                className="CampoText__input form-control border-0" 
                id="nome" 
                //placeholder={`Digite seu ${props.label}`}
                placeholder={props.placeholder}
            />
        </div>
    )
}