import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault(); //evento que impede auto carregar do botão
    props.novoColaborador({
      id: Date.now(),
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");

    console.log(
      "Form foi submetido\n------------------------\n",
      "\nNome:",
      nome,
      "\nCargo:",
      cargo,
      "\nImagem:",
      imagem,
      "\nTime:",
      time,
    );
  };

  return (
    <div className="formulario__container container">
      <h2 className="formulario__label-title">
        Preencha os dados para criar o card do colaborador
      </h2>
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoValorAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoValorAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoValorAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          itens={props.times}
          obrigatorio={true}
          valor={time}
          aoValorAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </div>
  );
};
