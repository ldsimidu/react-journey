import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div>
        <label className="form-label">Time</label>
        <select className="form-select">
            {props.itens.map(item => {
                return (
                    <option key={item}>{item}</option> //precisa de item key, react perde o controle de rendereização sem ele
                )
            })}
        </select>
    </div>
  );
};
