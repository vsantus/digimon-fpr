import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodosDigimons, buscarDigimonPorLevel } from "../../services/api";
import { useDigimonContext } from "../../context/DigimonContext";
import { Undo2, ArrowLeft, ArrowRight, X } from "lucide-react";
import "../../scss/DigimonEstilo.scss";
import "../../scss/HomeEstilo.scss";
import "../../scss/modalConfirmacao.scss";
import "../../scss/responsivo.scss";

import IconSuperior from "../../components/iconSuperior";
import NavTemas from "../../components/NavTemas";

const DigimonLista = () => {
    const [digimons, setDigimons] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [termoBusca, setTermoBusca] = useState("");
    const [digimonSelecionado, setDigimonSelecionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const { setDigimonFavorito } = useDigimonContext();



    const digimonsPorPagina = 12;


    // modal de confirmação
    const handleCardClick = (digimon) => {
        setDigimonSelecionado(digimon);
        setMostrarModal(true);
    };

    const confirmarFavorito = () => {
    setDigimonFavorito(digimonSelecionado); // 
    window.alert(`${digimonSelecionado.name} foi adicionado aos favoritos!`);
    setMostrarModal(false);
};


    const cancelar = () => {
        setMostrarModal(false);
    };



    const navigate = useNavigate();





    const digimonsFiltrados = digimons.filter(digimon =>
        digimon.name.toLowerCase().includes(termoBusca.toLowerCase())
    );

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
    const digimonsExibidos = digimonsFiltrados.slice(indexPrimeiro, indexUltimo);

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

    const handleFiltroLevel = async (e) => {
        const level = e.target.value;

        if (level === "") {
            const dados = await buscarTodosDigimons();
            setDigimons(dados);
            setPaginaAtual(1);
            return;
        }

        try {
            const dadosFiltrados = await buscarDigimonPorLevel(level);
            setDigimons(dadosFiltrados);
            setPaginaAtual(1);
        } catch (error) {
            console.error("Erro ao buscar por level", error);
        }
    };

    return (
        <div className="digimon-container">

            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal-content">

                        <div className="modal-x"><X onClick={cancelar} size={15} className="modal-fechar" /></div>

                        <p>Você deseja adicionar {digimonSelecionado.name} como favorito?</p>

                        <div className="modal-botoes">
                            <button onClick={cancelar} id="btnN">Não</button>
                            <button onClick={confirmarFavorito} id="btnS">Sim</button>
                        </div>


                    </div>
                </div>
            )}


            <div className="digimon-header">
                <img src="https://i.postimg.cc/yxnGFKvj/LOGO.png" alt="logo-fpr" className="imgfpr1" />
                <img src="https://i.postimg.cc/PxmMQrkW/LOGO-branca.png" alt="logo-fpr-branca" className="imgfpr2" />

                <div className="digimon-iconSuperior">
                    <IconSuperior />
                </div>

                <div className="digimon-pesquisas">
                    {/* pesquisar digimon por nome  */}
                    <input type="text" placeholder="Digimon" value={termoBusca}
                        onChange={(e) => {
                            setTermoBusca(e.target.value);
                            setPaginaAtual(1); // opcional: voltar para página 1 ao digitar
                        }} />

                    <select onChange={handleFiltroLevel}>
                        <option value="">Todos</option>
                        <option value="In Training">In Training</option>
                        <option value="Rookie">Rookie</option>
                        <option value="Champion">Champion</option>
                        <option value="Ultimate">Ultimate</option>
                        <option value="Mega">Mega</option>
                    </select>
                </div>
                <div className="digimon-navtemas"><NavTemas /></div>

            </div>

            <div className="digimon-list">
                {digimonsExibidos.map((digimon, index) => (
                    <div key={index} className="digimon-card" >
                        <img src={digimon.img} alt={digimon.name} />
                        <div className="digimon-escolha" onClick={() => handleCardClick(digimon)} > <p> Escolher </p></div>
                        <div className="digimon-info">
                            <h3>Nome: {digimon.name}</h3>
                            <p>Level: {digimon.level}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button className="botaoVoltar" onClick={handleVoltar}><Undo2 size={16} /></button>
                <div className="pagination-controles">
                    <button onClick={paginaAnterior} disabled={paginaAtual === 1}><ArrowLeft size={14} /> Anterior</button>
                    <button onClick={proximaPagina} disabled={indexUltimo >= digimons.length}>Próximo <ArrowRight size={14} /></button>
                </div>
            </div>
        </div>
    );
};

export default DigimonLista;
