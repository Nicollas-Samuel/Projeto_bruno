import './App.css'

function Produtos() {
  return (
    <>
    <div>
        <div className="conta">
            <div className="men">
                <nav>
                    <a href="#"> Remoer Produto </a>
                    <a href="#"> Configuração de funcionários </a>
                    <a href="#"> Configuração de produtos</a>
                    <button onclick="adcionarProduto()">Adicionar Produto</button>
                    <button onclick="removerProduto()">Remoer Produto</button>
                    <button onclick="listarProduto()">Listar Produtos</button>
                    <button onclick="editarProduto()">Editar Produto</button>
                    <button onclick="adcionarPromocao()">Adcionar Promoção</button>
                    <button onclick="removerPromocao()">Remover Promoção</button>
                    <button onclick="listarPromocao()">Listar Promoção</button>
                    <button onclick="editarPromocao()">Editar Promoção</button>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export function adicionarProdutos() {
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
export default Produtos