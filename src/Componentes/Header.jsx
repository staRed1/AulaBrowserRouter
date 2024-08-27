import { Link } from "react-router-dom";

//codigo do Header 
export default function Header(){
    return(
        <header>
            <h1>Jogos & Cia</h1>
     
          <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>

                <li>
                    <Link to="/oferta">Ofertas</Link>
                </li>

                <li>
                    <Link to="/produtos">Mais Produtos </Link>
                </li>
                
            </ul>
         </nav>  
                
        </header>
    )
}