import React, { useState } from "react";
import { Icon, Search } from "lucide-react";
import { useDigimonContext } from "../../context/DigimonContext";
import "../../scss/variables.scss";
import "../../scss/HomeEstilo.scss";
import "../../scss/Temas.scss";

import IconSuperior from "../../components/iconSuperior";
import NavTemas from "../../components/NavTemas"


function HomePage() {
    const { mensagemErro, buscarDigimon, carregarTodosDigimons, setDigimonSelecionado } = useDigimonContext ();
    const [termoBusca, setTermoBusca] = useState("");

    const handleBusca = () => {
        buscarDigimon(termoBusca); // Chama a função de busca
        setDigimonSelecionado(termoBusca);
    };

    return (
        <div className="containerHome"> 
            <header>
                <IconSuperior />
                <NavTemas />
            </header>


            <section className="principalContainer">
                <main className="conteudoCentral">
                    <img src="https://i.postimg.cc/yxnGFKvj/LOGO.png" alt="logo-fpr-colorida" class="img1" />
                    <img src="https://i.postimg.cc/PxmMQrkW/LOGO-branca.png" alt="logo-fpr-branca" class="img2" />

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
                        <button className="botaoPesquisa" onClick={handleBusca}>ESCOLHA O SEU DIGIMON</button>
                        <button className="verTodos" onClick={carregarTodosDigimons}>VER TODOS</button>
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
