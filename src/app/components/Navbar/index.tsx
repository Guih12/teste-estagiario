import './index.scss';

export default function Navbar(){
    return(
        <>
            <div id='top'></div>
            <header>
                <h1>🍿SuperMarioCine</h1>
                <nav className="navbar">
                    <ul>
                        <li><a href="#top">Início</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

