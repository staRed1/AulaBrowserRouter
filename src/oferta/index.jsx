import { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import ListarProdutos from '../Componentes/ListarProdutos';

export default function Oferta() {
    const [listaProdutos, setProdutos] = useState([

        {
            id: 1,
            foto:'/public/image/persona.jpeg',
            nome: 'Persona 5 ',
            genero: 'RPG ',
            preco: "R$299.99",
            empresa: "Atlus"
            
        },

        {
            id: 2,
            foto:'/public/image/sallyFace.jpeg',
            nome: 'Sally Face',
            genero: 'Aventura/Terror',
            preco: "R$ 74.99",
            empresa: "Portable Moose"
            
        },

        {
            id: 3,
            foto:'/public/image/xicrinhas.png',
            nome: 'Cuphead',
            genero: 'Plataforma ',
            preco: "R$ 99.99",
            empresa: " Studio MDHR"
            
        },

        {
            id: 4,
            foto: 'public/image/morangoDourado.jpeg',
            nome: 'Celeste',
            genero: 'Plataforma ',
            preco: "R$ 99.99",
            empresa: "Maddy Makes Games"
            
        },

        {
            id: 5,
            foto:'/public/image/fantaziaFInal.jpeg',
            nome: 'Final Fantasy VII',
            genero: 'RPG ',
            preco: "R$ 349.99",
            empresa: "Square Enix"
            
        },

        {
            id: 6,
            foto:'/public/image/Doom.jpeg',
            nome: 'Doom Eternal',
            genero: 'FPS/Ação',
            preco: "R$ 299.99",
            empresa: "id Software"
            
        },

        {
            id: 7,
            foto:'/public/image/bruxo.jpeg',
            nome: 'The Witcher 3: Wild Hunt',
            genero: 'RPG/Ação ',
            preco: "R$ 199.99",
            empresa: "CD Projekt Red"
            
        },

        {
            id: 8,
            foto:'/public/image/anelEspacial.jpeg',
            nome: 'Halo Infinite',
            genero: 'FPS ',
            preco: "R$ 299.99",
            empresa: " 343 Industries"
            
        },

        {
            id: 9,
            foto:'/public/image/alma3.jpeg',
            nome: 'Dark Souls III',
            genero: 'RPG/Ação',
            preco: "R$ 299.99",
            empresa: "FromSoftware"
            
        },

        {
            id: 10,
            foto:'/public/image/anel.jpeg',
            nome: 'Elden Ring',
            genero: 'RPG/Ação',
            preco: "R$ 299.99",
            empresa: "FromSoftware"
            
        },

        {
            id: 11,
            foto:'/public/image/chifrudoVazio.jpeg',
            nome: 'Hollow Knight',
            genero: 'Metroidvania',
            preco: "R$ 74.99",
            empresa: "Team Cherry"
            
        },

        {
            id: 12,
            foto:'/public/image/bomDeguerra.jpeg',
            nome: 'God of War',
            genero: 'Ação/Aventura',
            preco: "R$ 249.99",
            empresa: "Santa Monica Studio"
            
        },

        {
            id: 13,
            foto:'/public/image/capetovelha.jpeg',
            nome: 'Cult of the Lamb',
            genero: ' Roguelike/Simulação',
            preco: "R$ 124.99",
            empresa: "Massive Monster"
        },

        {
            id: 14,
            foto:'/public/image/cacada.jpeg',
            nome: 'Bloodborne ',
            genero: 'É um objeto',
            preco: "R$ 41.41",
            empresa: "FromSoftware"
        },

        {
            id: 15,
            foto: 'public/image/residenteMaligno.jpeg',
            nome: 'Resident Evil 4 Remake',
            genero: 'Terror/Sobrevivência',
            preco: "R$ 199.99",
            empresa: "Capcom"
        }

    ]);

    return(
        <div className="Ofertas">
            <Header> Jogos & Cia </Header>
           

                <div>

                <ListarProdutos
                    listarProdutos={listaProdutos}
                    />

                </div>

                <div id='rodape'>

                    <Footer/>

                </div>
        </div>
    )
}