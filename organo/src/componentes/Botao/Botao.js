import './Botao.css'

export const Botao = (props) => {
    return (
        <div className="container">
            <button className="Botao__button mb-5">
                {props.texto}
            </button>
        </div>
    )
}