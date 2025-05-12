import './Colaborador.css'

export const Colaborador = ({ cor, nome, cargo, imagem}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={cor}>
                <img className="imagem" src={imagem} alt="Foto do colaborador" />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
