import React, { useState } from "react";
import { Search } from "lucide-react";
import { useDigimon } from "../../hooks/useDigimon"; 
import "../../scss/variables.scss";
import "../../scss/HomeEstilo.scss";

function HomePage() {
    const { listaDigimons, mensagemErro, buscarDigimon, carregarTodosDigimons } = useDigimon();
    const [termoBusca, setTermoBusca] = useState("");

    const handleBusca = () => {
        buscarDigimon(termoBusca); // Chama a função de busca
    };

    return (
        <div className="containerHome">
            <header>
                <div className="logo">
                    {listaDigimons.length > 0 && <img src={listaDigimons[0].img} alt={listaDigimons[0].name} />}
                </div>
                <nav>
                    <h2>Escolha seu Tema: </h2>
                    <ul className="temas-opcoes">
                        <li className="tema esperanca">
                            <img src="https://i.postimg.cc/HnYMc7vr/esperanca-branco-1.png" alt="" />
                            <span>ESPERANÇA</span>
                        </li>
                        <li className="tema sabedoria">
                            <img src="https://i.postimg.cc/MGKwww6w/sabedoria-branco.png" alt="" />
                            <span>SABEDORIA</span>
                        </li>
                        <li className="tema confianca">
                            <img src="https://i.postimg.cc/13KSbXZM/confianca-branco.png" alt="" />
                            <span>CONFIANÇA</span>
                        </li>
                        <li className="tema coragem" >
                            <img src="https://i.postimg.cc/Z5mZf3XC/coragem-branco.png" alt="" />
                            <span>CORAGEM</span>
                        </li>
                        <li className="tema amizade" >
                            <img src="https://i.postimg.cc/fW6M91K7/amizade-branco-1.png" alt="" />
                            <span>AMIZADE</span>
                        </li>
                        <li className="tema luz" >
                            <img src="https://i.postimg.cc/zvYPJwCh/LUZ-BRANCO-1.png" alt="" />
                            <span>LUZ</span>
                        </li>
                        <li className="tema amor" >
                            <img src="https://i.postimg.cc/7Y0wMXsF/AMOR-BRANCO-1.png" alt="" />
                            <span>AMOR</span>
                        </li>
                        <li className="tema sinceridade" >
                            <img src="https://i.postimg.cc/BvY0QzbK/SINCERIDADE-BRANCO-1.png" alt="" />
                            <span>SINCERIDADE</span>
                        </li>
                    </ul>
                </nav>
            </header>
            

            <section className="principalContainer">
                <main className="conteudoCentral">
                    <img src="https://i.postimg.cc/yxnGFKvj/LOGO.png" alt="logo-fpr" />
                    <h1>Bem-vindo ao FPR DIGIMON</h1>
                    <h4>Escolha o <br /> seu Digimon</h4>
                    <p>
                        O Universo Digimon é um mundo digital onde vivem os Digimons,
                        criaturas virtuais que formam laços com parceiros humanos. Juntos,
                        eles enfrentam desafios e vilões para proteger tanto o Mundo Digital
                        quanto o mundo real.
                    </p>

                    <div className="barraPesquisa">
                        <Search className="iconePesquisa" onClick={handleBusca} />
                        <input
                            type="text"
                            placeholder="Digite o nome do DIGIMON"
                            className="inputPesquisa"
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleBusca()}
                        />
                    </div>

                    {/* Exibe mensagem de erro caso haja */}
                    {mensagemErro && <p className="error">{mensagemErro}</p>}

                    <div className="botoes">
                        <button className="botaoPesquisa" onClick={handleBusca}>Escolha seu Digimon</button>
                        <button className="verTodos" onClick={carregarTodosDigimons}>Ver Todos</button>
                    </div>
                </main>

                <aside className="conteudoLateral">
                    <img src="https://i.postimg.cc/TPm8jP3T/pngegg-1.png" alt="turma-digimon" />
                </aside>
            </section>
        </div>
    );
}

export default HomePage;
