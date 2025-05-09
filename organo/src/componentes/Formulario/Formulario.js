import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

export const Formulario = () => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const times = [
        'G2',
        'MIBR',
        'LOUD',
        '2Game',
        'Sentinels',
        'Furia',
        '100Thieves'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault() //evento que impede auto carregar do botão
        console.log('Form foi submetido => ', nome, cargo, imagem)
    }

    return (
        <div className="formulario__container container mt-5 mb-5 rounded-p">
            <h2 className="formulario__label-title pt-5 mb-4">Preencha os dados para criar o card do colaborador</h2>
            <form onSubmit={aoSalvar}>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </div>
  );
}