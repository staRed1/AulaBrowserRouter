import { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';

export default function Produtos() {
    const [listaProdutos, setProdutos] = useState([

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
        },

        {
            id: 6,
            nome: 'objeto 5',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 7,
            nome: 'objeto 5',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 8,
            nome: 'objeto 5',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 9,
            nome: 'objeto 5',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        },

        {
            id: 10,
            nome: 'objeto 5',
            desc: 'É um objeto',
            preco: 41.41,
            estoque: 14,
            tags: 'não sei o que escrever'
        }

    ]);

    return(
        <div className="listaProduto">
            <h1> A loja dos objetos'</h1>
        </div>
    )
}