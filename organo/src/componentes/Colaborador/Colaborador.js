import './Colaborador.css'

export const Colaborador = ({ cor, nome, cargo, imagem}) => {
    return (
        <div className="colaborador__container">
            <div className="colaborador__header" style={cor}>
                <img className="colaborador__imagem" src={imagem} alt="Foto do colaborador" />
            </div>
            <div className="colaborador__footer">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
