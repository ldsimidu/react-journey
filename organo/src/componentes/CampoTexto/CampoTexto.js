import { useEffect, useState } from "react";
import CheckBoxGitHub from "../CheckBoxGitHub/CheckBox";
import "./CampoTexto.css";

export const CampoTexto = ({
  label,
  valor,
  obrigatorio,
  placeholder,
  aoValorAlterado, // Relembrando: Esta função é quem manda o valor atualizado do input para o componente pai
}) => {
  const [usarCheckGithub, setUsarCheckGithub] = useState(false); //useState do Checkbox (define se é true ou false (marcardo ou nao marcado))
  const [valorDigitado, setValorDigitado] = useState(""); //preciso do valor salvo inputado para poder colocar na variável do link do github

  useEffect(() => {
    if (label === "Imagem" && valor === "") {
      setValorDigitado("");
      setUsarCheckGithub("");
    }
  }, [valor, label]);

  const linkGithub = (usuario) => {
    return `https://github.com/${usuario}.png`;
  };

  // Função que é chamada sempre que o usuário digitar no input (que possua onChange)
  const aoDigitado = (evento) => {
    const valorInserido = evento.target.value;
    //setValor(evento.target.value) // Atualiza o estado 'valor' com o conteúdo digitado no campo
    //console.log(valor)

    setValorDigitado(valorInserido);
    if (usarCheckGithub && label === "Imagem") {
      aoValorAlterado(linkGithub(valorInserido));
    } else {
      aoValorAlterado(valorInserido);
    }
  };

  const aoMarcarCheckbox = (evento) => {
    const checked = evento.target.checked;
    setUsarCheckGithub(checked);
    if (checked) {
      aoValorAlterado(linkGithub(valorDigitado));
    } else {
      aoValorAlterado(valorDigitado);
    }
  };

  return (
    <div className="CampoTexto__container">
      <label htmlFor="nome" className="CampoTexto__label form-label">
        {label}
      </label>
      {label === "Imagem" ? (
        <CheckBoxGitHub
          placeholder="Imagem do Github"
          checked={usarCheckGithub}
          onChange={aoMarcarCheckbox}
        />
      ) : (
        ""
      )}
      <input
        value={label === "Imagem" ? valorDigitado : valor}
        onChange={aoDigitado}
        required={obrigatorio}
        type="text"
        className="CampoText__input form-control border-0"
        id={label}
        //placeholder={`Digite seu ${props.label}`}
        placeholder={
          usarCheckGithub === true
            ? "Digite apenas o usuário do github que deseja inserir a foto"
            : placeholder
        }
      />
    </div>
  );
};
