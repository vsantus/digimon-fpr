import React, { useContext, useState } from "react";
import { TemaContext } from "../../context/TemaContext";
import "../../scss/HomeEstilo.scss";

function NavTemas() {
    const { tema, trocarTema } = useContext(TemaContext);
    const [menuAberto, setMenuAberto] = useState(false);

    const temas = [
        { id: "esperanca", label: "ESPERANÇA", imgPadrao: "https://i.postimg.cc/gkNg579R/esperanca-Branco.png", imgAtivo: "https://i.postimg.cc/fLf4pvjP/esperanca.png" },
        { id: "sabedoria", label: "SABEDORIA", imgPadrao: "https://i.postimg.cc/bwZ4RPGd/sabedoria-Branco.png", imgAtivo: "https://i.postimg.cc/XJbSsPFF/sabedoria.png" },
        { id: "confianca", label: "CONFIANÇA", imgPadrao: "https://i.postimg.cc/8kdKd5tZ/confianca-Branco.png", imgAtivo: "https://i.postimg.cc/WzpRvJ51/confianca.png" },
        { id: "coragem", label: "CORAGEM", imgPadrao: "https://i.postimg.cc/ncHd3JWp/coragem-Branco.png", imgAtivo: "https://i.postimg.cc/J0pf44Fc/coragem.png" },
        { id: "amizade", label: "AMIZADE", imgPadrao: "https://i.postimg.cc/WzV9LLbm/amizade-Branco.png", imgAtivo: "https://i.postimg.cc/T2QMcCPL/amizade.png" },
        { id: "luz", label: "LUZ", imgPadrao: "https://i.postimg.cc/L5VxmCnc/luz-Branco.png", imgAtivo: "https://i.postimg.cc/JzDfM85Z/luz.png" },
        { id: "amor", label: "AMOR", imgPadrao: "https://i.postimg.cc/3xNtHZ7q/amor-Branco.png", imgAtivo: "https://i.postimg.cc/3JRMfmyL/amor.png" },
        { id: "sinceridade", label: "SINCERIDADE", imgPadrao: "https://i.postimg.cc/sX7nNDyD/sinceridade-Branco.png", imgAtivo: "https://i.postimg.cc/WbfBBzgs/sinceridade.png" },
    ];

    return (
        <nav className="nav-temas">
            <div className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
                {/* Ícone hamburguer simples */}
                <div className={`bar ${menuAberto ? "open" : ""}`}></div>
                <div className={`bar ${menuAberto ? "open" : ""}`}></div>
                <div className={`bar ${menuAberto ? "open" : ""}`}></div>
            </div>
            <h2>Escolha seu Tema</h2>
            <ul className={`temas-opcoes ${menuAberto ? "aberto" : ""}`}>
                {temas.map((temaItem) => (
                    <button
                        key={temaItem.id}
                        className={`tema ${temaItem.id} ${tema === temaItem.id ? "ativo" : ""}`}
                        onClick={() => trocarTema(temaItem.id)}
                    >
                        <img src={tema === temaItem.id ? temaItem.imgAtivo : temaItem.imgPadrao} alt={temaItem.label} />
                        <span>{temaItem.label}</span>
                    </button>
                ))}
            </ul>
        </nav>
    );
}

export default NavTemas;
