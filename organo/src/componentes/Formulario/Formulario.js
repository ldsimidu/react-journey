import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

export const Formulario = () => {

    const times = [
        '',
        'G2',
        'MIBR',
        'LOUD',
        '2Game',
        'Sentinels',
        'Furia',
        '100Thieves'
    ]

    return (
        <div className="formulario__container container mt-5 mb-5 rounded-p">
            <h2 className="formulario__label-title pt-5 mb-4">Preencha os dados para criar o card do colaborador</h2>
            <form>
                <CampoTexto label='Nome' placeholder='Digite seu nome'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem'/>
                <ListaSuspensa itens={times} />
                <Botao texto="Criar Card" />
            </form>
        </div>
  );
}