import './CampoTexto.css'

export const CampoTexto = (props) => {

    let valor = 'Lucas Derenze SImidu'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="CampoTexto__container container">
            <label htmlFor="nome" className="CampoTexto__label form-label">
                {props.label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                type="text" 
                className="CampoText__input form-control border-0" 
                id="nome" 
                //placeholder={`Digite seu ${props.label}`}
                placeholder={props.placeholder}
            />
        </div>
    )
}