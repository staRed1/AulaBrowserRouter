import { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import ListarProdutos from '../Componentes/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../globals.css'

export default function Home() {
    const [produtos, setProdutos] = useState([

        {
            id: 1,
            foto:'/public/image/zeldaBotw.jpeg',
            nome: 'The Legend of Zelda: Breath of the Wild',
            genero: ' Ação/Aventura',
            preco: "R$ 299.99",
            empresa: "Nintendo"
            
        },

        {
            id: 2,
            foto:'/public/image/Ocarina.jpeg',
            nome: 'The Legend of Zelda: Ocarina of Time',
            genero: 'É um objeto',
            preco: "R$ 199.99",
            empresa: "Nintendo"
            
        },

        {
            id: 3,
            foto:'/public/image/majora.jpeg',
            nome: 'The Legend of Zelda: Majoras Mask ',
            genero: ' Ação/Aventura',
            preco: "R$ 199.99",
            empresa: "Nintendo"
            
        },

        {
            id: 4,
            foto:'/public/image/braço novo.jpeg',
            nome: 'The Legend of Zelda: Tears of the kingdom',
            genero: ' Ação/Aventura',
            preco: "R$ 299,99",
            empresa: "Nintendo"
            
        },

        {
            id: 5,
            foto:'/public/image/crepusculo.jpeg',
            nome: 'The Legend of Zelda: Twilight Princess',
            genero: ' Ação/Aventura',
            preco: "R$ 249,99",
            empresa: "Nintendo"
            
        }
        
      
    ]);

    return(
        <div className="Home">
            <Header> Jogos & Cia </Header>
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

                <div>

                <ListarProdutos
                    listarProdutos={produtos}
                    />

                </div>

                <div id='rodape'>

                    <Footer/>

                </div>
        </div>
    )
}