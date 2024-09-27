import './App.css'

const adicionarProdutos = () => {
  return(
    <>
      <div>
      <section className="form-container">
        <div className="containe">
          <form>
            <div className="input-single">
              <input type="text" name="" id="nome-box" className="input" autocomplete="off" required></input>
              <label htmlfor="nome-box">Nomde do produto</label>
            </div>
            
            <div className="input-single">
              <input type="number" name="" id="preco-box" className="input" autocomplete="off" required></input>
              <label htmlfor="preco-box">Preço do produto</label>
            </div>

            <div className="input-single">
              <input type="number" name="" id="quantidade-box" className="input" autocomplete="off" required></input>
              <label htmlfor="quantidade-box">Quantidade disponivel do produto</label>
            </div>
            <div className="btn"> <input type="submit" value="enviar" /></div>
          </form>
        </div>
      </section>
      </div>
    </>
  )
}

//module.exoport = ()

function removerProduto() {

}

function listarProduto() {

}

function editarProduto(){

}

function adcionarPromocao(){

}

function removerPromocao(){

}

function listarPromocao(){

}

function editarPromocao(){

}
export default adicionarProdutos