import "./Colaborador.css";

export const Colaborador = ({
  cor,
  id,
  nome,
  cargo,
  imagem,
  excluirColaborador,
}) => {
  return (
    <div className="colaborador__container">
      <div className="colaborador__header" style={cor}>
        <img
          className="colaborador__imagem"
          src={imagem}
          alt="Foto do colaborador"
        />
      </div>
      <div className="colaborador__footer">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
      <button
        className="colaborador__botao-excluir"
        type="button"
        onClick={() => excluirColaborador(id)}
      >
        Excluir
      </button>
    </div>
  );
};
