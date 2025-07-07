import React, { useContext } from "react";
import { TemaContext } from "../../context/TemaContext"; // ajuste o caminho conforme sua pasta
import "../../scss/HomeEstilo.scss"; // ajuste o caminho conforme sua pasta

function NavTemas() {
    const { tema, trocarTema } = useContext(TemaContext);

    const temas = [
        { id: "esperanca", label: "ESPERANÇA", img: "https://i.postimg.cc/HnYMc7vr/esperanca-branco-1.png" },
        { id: "sabedoria", label: "SABEDORIA", img: "https://i.postimg.cc/MGKwww6w/sabedoria-branco.png" },
        { id: "confianca", label: "CONFIANÇA", img: "https://i.postimg.cc/13KSbXZM/confianca-branco.png" },
        { id: "coragem", label: "CORAGEM", img: "https://i.postimg.cc/Z5mZf3XC/coragem-branco.png" },
        { id: "amizade", label: "AMIZADE", img: "https://i.postimg.cc/fW6M91K7/amizade-branco-1.png" },
        { id: "luz", label: "LUZ", img: "https://i.postimg.cc/zvYPJwCh/LUZ-BRANCO-1.png" },
        { id: "amor", label: "AMOR", img: "https://i.postimg.cc/7Y0wMXsF/AMOR-BRANCO-1.png" },
        { id: "sinceridade", label: "SINCERIDADE", img: "https://i.postimg.cc/BvY0QzbK/SINCERIDADE-BRANCO-1.png" },
    ];

    return (
        <nav>
            <h2>Escolha seu Tema</h2>
            <ul className="temas-opcoes">
                {temas.map((temaItem) => (
                    <button
                        key={temaItem.id}
                        className={`tema ${temaItem.id} ${tema === temaItem.id ? "ativo" : ""}`}
                        onClick={() => trocarTema(temaItem.id)}
                    >
                        <img src={temaItem.img} alt={temaItem.label} />
                        <span>{temaItem.label}</span>
                    </button>
                ))}
            </ul>
        </nav>
    );
}

export default NavTemas;
