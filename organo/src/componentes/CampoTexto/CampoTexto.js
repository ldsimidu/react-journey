import './CampoTexto.css'

export const CampoTexto = (props) => {

    // Função que é chamada sempre que o usuário digitar no input (que possua onChange)
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        //setValor(evento.target.value) // Atualiza o estado 'valor' com o conteúdo digitado no campo
        //console.log(valor)
    }

    return (
        <div className="CampoTexto__container">
            <label htmlFor="nome" className="CampoTexto__label form-label">
                {props.label}
            </label>
            <input
                value={props.valor}
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