import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { buscarTodosDigimons, buscarDigimonPorNome, buscarDigimonPorLevel } from "../services/api"; 

export function useDigimon() {
    const [listaDigimons, setListaDigimons] = useState([]);
    const [mensagemErro, setMensagemErro] = useState("");
    const [digimonFavorito, setDigimonFavorito] = useState(null);
    const navigate = useNavigate();

    const carregarTodosDigimons = async () => {
        const dados = await buscarTodosDigimons();
        setListaDigimons(dados);
        console.log('teste');
        navigate("/digimons");  
    };

    const buscarDigimon = async (nome) => {
    if (!nome.trim()) return;

    setMensagemErro("");

    const resultado = await buscarDigimonPorNome(nome.toLowerCase());

    if (resultado.length > 0) {
        setListaDigimons(resultado);
        return resultado; // <-- RETORNAR
    } else {
        window.alert("Nenhum Digimon encontrado, pesquise o nome correto!");
        setListaDigimons([]);
        return []; // <-- RETORNAR array vazio
    }
};

    const buscarDigimonLevel = async (level) => {
        if (!level.trim()) return; 

        setMensagemErro(""); 

        const resultado = await buscarDigimonPorLevel(level.toLowerCase());

        if (resultado.length > 0) {
            setListaDigimons(resultado);
        } else {
            window.alert("Nenhum Digimon encontrado"); 
            setListaDigimons([]); 
        }
    };

    return {
        listaDigimons,
        mensagemErro,
        digimonFavorito,       
        setDigimonFavorito,
        buscarDigimon,
        buscarDigimonLevel,
        carregarTodosDigimons,  
    };
}

export { buscarTodosDigimons };  
