import './Time.css'

export const Time = (props) => {
    
    const cSec = { backgroundColor: props.corSecundaria }
    const cPri = { borderColor: props.corPrimaria }

    return (
        <section 
            className='time__section' style={cSec}>
            <h1 style={cPri}>{props.nome}</h1>
        </section>
    )
}