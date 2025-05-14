import Colaborador from '../Colaborador'
import './Time.css'

export const Time = (props) => {
    
    const cSec = { backgroundColor: props.corSecundaria }
    const cPri = { backgroundColor: props.corPrimaria }
    const cBorder = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time__section' style={cSec}>
            <h1 style={cBorder}>{props.nome}</h1>
            <div className='time__colaborador-card'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} cor={cPri} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}