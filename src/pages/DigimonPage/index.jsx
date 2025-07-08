import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodosDigimons } from "../../hooks/useDigimon";
import "../../scss/DigimonEstilo.scss";
import "../../scss/HomeEstilo.scss";


import IconSuperior from "../../components/iconSuperior";
import NavTemas from "../../components/NavTemas";

const DigimonLista = () => {
    const [digimons, setDigimons] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const digimonsPorPagina = 12;

    useEffect(() => {
        const fetchDigimons = async () => {
            try {
                const dados = await buscarTodosDigimons();
                setDigimons(dados);
            } catch (error) {
                console.error("Erro ao buscar os Digimons", error);
            }
        };
        fetchDigimons();
    }, []);

    const indexUltimo = paginaAtual * digimonsPorPagina;
    const indexPrimeiro = indexUltimo - digimonsPorPagina;
    const digimonsExibidos = digimons.slice(indexPrimeiro, indexUltimo);

    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate("/");
    };

    const proximaPagina = () => {
        if (indexUltimo < digimons.length) {
            setPaginaAtual(paginaAtual + 1);
        }
    };

    const paginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
        }
    };

    return (
        <div className="digimon-container">

            <div className="digimon-header">
                <img src="https://i.postimg.cc/yxnGFKvj/LOGO.png" alt="logo-fpr" className="imgfpr1" />
                <img src="https://i.postimg.cc/PxmMQrkW/LOGO-branca.png" alt="logo-fpr-branca" class="imgfpr2" />

                <IconSuperior />
                <NavTemas />

            </div>
            <div className="digimon-list">
                {digimonsExibidos.map((digimon, index) => (
                    <div key={index} className="digimon-card">
                        <img src={digimon.img} alt={digimon.name} />
                        <div className="digimon-info">
                            <h3>Nome: {digimon.name}</h3>
                            <p>Level: {digimon.level}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="pagination">
                <button className="botaoVoltar" onClick={handleVoltar} >Voltar</button>
                <div className="pagination-controles">
                    <button onClick={paginaAnterior} disabled={paginaAtual === 1}>Anterior</button>
                    {/* <span>Página {paginaAtual}</span> */}
                    <button onClick={proximaPagina} disabled={indexUltimo >= digimons.length}>Próximo</button>
                </div>
            </div>
        </div>
    );
};

export default DigimonLista;
