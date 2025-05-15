import './Titulo.css'

export const Titulo = ({ colaboradores }) => {
    return (
        (colaboradores.length > 0) ? <section className='titulo__section'>
            <div className='titulo__container'>
                <h1 className='titulo__title'>Minha Organização:</h1>
                <hr className='titulo__hr' />
            </div>
        </section>
        : ''
    )
}