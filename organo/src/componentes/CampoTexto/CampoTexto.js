import './CampoTexto.css'

export const CampoTexto = (props) => {
    return (
        <div className="CampoTexto__container container pt-5 p-4">
            <label htmlFor="nome" className="CampoTextoLabel form-label">
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