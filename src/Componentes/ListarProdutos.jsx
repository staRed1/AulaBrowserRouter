import { useState } from "react"

export default function ListarProdutos({ listarProdutos, carrinhoPedidos }) {
    return (

           <div id="produtos-bloco">
                {
                    listarProdutos.map((produtos)=> (

                   <div key={produtos.id}>

                    <div id="card-produto">
                
                   <img src={produtos.foto}/>
                   <p>{produtos.nome}</p>
                   <p>{produtos.preco}</p>
                   <p>{produtos.empresa}</p>
                   <p>{produtos.genero}</p>
                    <button onClick={() => adicionarCarrinhoProduto(produtos)}>Adicionar</button>
                    </div>

                </div>

              )
            )
          }
          
          </div>
          
   
    )
}

