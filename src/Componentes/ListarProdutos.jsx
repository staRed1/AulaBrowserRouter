import Header from "../Componentes/Header"
import Footer from "../Componentes/Footer"

export default function ListarProdutos({produtos}) {
    return (
        ListarProdutos.map((produtos) =>
        <div key={produtos.id}>
            <p>{produtos.nome}</p>
            <p>{produtos.desc}</p>
            <p>{produtos.preco}</p>
        </div>)
    )
}

