import "./Checkbox.css";

const CheckBoxGitHub = ({ placeholder, checked, onChange }) => {
  return (
    <div className="Checkbox__container">
      <input
        type="checkbox"
        placeholder={placeholder}
        className="Checkbox__checkbox"
        checked={checked}
        onChange={onChange}
      ></input>
      <label className="Checkbox__label">{placeholder}</label>
    </div>
  );
};

export default CheckBoxGitHub;
