import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './login.jsx'
import Funcionario from './func.jsx'
import adicionarProdutos from './produtos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
) 

createRoot(document.getElementById('login')).render(
  <StrictMode>
    <Login />
  </StrictMode>
)

createRoot(document.getElementById('funcionario')).render(
  <StrictMode>
    <Funcionario />
  </StrictMode>
)

createRoot(document.getElementById('Produtos')).render(
  <StrictMode>
    <adicionarProdutos />
  </StrictMode>
)