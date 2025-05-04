import './Formulario.css'

export const Formulario = () => {

    return (
        <div className="formulario-container container mt-5">
            <h2 className="pt-3 mb-4">Preencha os dados para criar o card do colaborador.</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" placeholder="Digite seu nome" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cargo</label>
                    <input type="text" className="form-control" placeholder="Digite seu cargo" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Imagem</label>
                    <input type="text" className="form-control" placeholder="Informe o endereço da imagem" />
                </div>

                <div className="mb-4">
                    <label className="form-label">Time</label>
                    <select className="form-select">
                        <option>Selecione um time</option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                        <option>Design</option>
                    </select>
                </div>

                <button type="submit" className="mb-4 btn btn-primary">Criar card</button>
            </form>
        </div>
  );
}