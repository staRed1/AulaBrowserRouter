import { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
    const [produtos, setProdutos] = useState([

        {
            id: 1,
            nome: 'objeto 1',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 2,
            nome: 'objeto 2',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 3,
            nome: 'objeto 3',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 4,
            nome: 'objeto 4',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 5,
            nome: 'objeto 5',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        }

    ]);

    return(
        <div className="Home">
            <h1> A loja dos objetos'</h1>
        </div>
    )
}