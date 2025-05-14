import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="ListaSuspensa__container container pb-5">
        <label className="ListaSuspensa__label form-label container">Time</label>
        <select className="ListaSuspensa__select form-select border-0" 
          key={props.valor}
          onChange={evento => props.aoAlterado(evento.target.value)} 
          required={props.obrigatorio} value={props.valor}>
            <option value=""></option>
            {props.itens.map(item => {
                return (
                    <option key={item}>{item}</option> //precisa de item key, react perde o controle de rendereização sem ele
                )
            })}
        </select>
    </div>
  );
};
