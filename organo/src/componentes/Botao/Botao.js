import './Botao.css'

export const Botao = (props) => {
    return (
        <button className="Botao__button">
            {props.children}
        </button>
    )
}

//children utilizado na linha 7, pois no botão pode ser inserido
//qualquer tipo de dado, seja imagem etc, então é mais prático
//puxar o conteúdo dentro de Botao em Formulario com o children