import { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../globals.css'

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
            <h1 className='Titulo1'> Jogos & Cia </h1>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight>

                    <div id='carrosel-slide'>
                      <img id='carousel-image' src='public/carrosel/vaziozinho.jpg'/>
                      </div>
                      <div id='carrosel-slide'>
                      <img id='carousel-image' src='public/carrosel/flor.jpg'/>
                      </div>
                      <div id='carrosel-slide'>
                      <img id='carousel-image' src='public/carrosel/zeldinha.jpg'/>
                      </div>                      
                </Carousel>
        </div>
    )
}