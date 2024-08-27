import { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import ListarProdutos from '../Componentes/ListarProdutos';

export default function Produtos() {
    const [listaProdutos, setProdutos] = useState([

        {
             id: 1,
            foto:'/public/image/fazendinha.jpeg',
            nome: 'Stardew Valley',
            genero: 'Simulação/RPG',
            preco: "R$74.99",
            empresa: "Nintendo"
        },

        {
            id: 2,
            foto:'/public/image/pinoquio.jpeg',
            nome: 'Lies of P ',
            genero: ' RPG/Ação ',
            preco: "R$299.99",
            empresa: " Neowiz Games"
        },

        {
            id: 3,
            foto:'/public/image/parasita.jpeg',
            nome: 'Dead Cells',
            genero: 'Roguelike/Metroidvania',
            preco: "R$ 41.41",
            empresa: "Motion Twin"
        },

        {
            id: 4,
            foto:'/public/image/marioMusical.jpeg',
            nome: 'Super Mario Wonder',
            genero: 'Plataforma/Aventura',
            preco: "R$ 299,99",
            empresa: "Nintendo"
        },

        {
            id: 5,
            foto:'/public/image/marioDEchapeu.jpeg',
            nome: 'Super Mario Odyssey',
            genero: 'Plataforma/Aventura',
            preco: "R$ 299,99",
            empresa: "Nintendo"
        },

        {
            id: 6,
            foto:'/public/image/morteVermelha.jpeg',
            nome: 'Red Dead Redemption 2',
            genero: ' Ação/Aventura',
            preco: "R$ 41.41",
            empresa: "Rockstar Games"
        },

        {
            id: 7,
            foto:'/public/image/PapersOrDie.png',
            nome: 'Papers, Please',
            genero: 'Simulação/Puzzle',
            preco: "R$ 49.99",
            empresa: "Lucas Pope"
        },

        {
            id: 8,
            foto:'/public/image/determinacao.jpeg',
            nome: 'Undertale ',
            genero: 'RPG ',
            preco: "R$ 49.99",
            empresa: "Toby Fox"
        },

        {
            id: 9,
            foto:'/public/image/linbo.jpeg',
            nome: 'Limbo',
            genero: ' Plataforma/Puzzle',
            preco: "R$ 49.99",
            empresa: "Playdead"
        },

        {
            id: 10,
            foto:'/public/image/meditacaoRen.jpeg',
            nome: 'Deltarune ',
            genero: 'RPG ',
            preco: "Gratuito",
            empresa: " Toby Fox"
        }

    ]);

    return(
        <div className="produtos">
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