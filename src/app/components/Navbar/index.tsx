import './index.scss';

export default function Navbar(){
    return(
        <header>
            <h1>Filmes</h1>
            <nav className="navbar">
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Filmes</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

