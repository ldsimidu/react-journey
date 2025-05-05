export const CampoTexto = (props) => {
    return (
        <div className="container pt-5 p-4 bg-light shadow-sm">
            <label htmlFor="nome" className="form-label">
                {props.label}
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="nome" 
                placeholder={`Digite seu ${props.label}`}
            />
        </div>
    )
}