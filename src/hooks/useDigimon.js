import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { buscarTodosDigimons, buscarDigimonPorNome, buscarDigimonPorLevel } from "../services/api"; 

export function useDigimon() {
    const [listaDigimons, setListaDigimons] = useState([]);
    const [mensagemErro, setMensagemErro] = useState("");
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
        } else {
            window.alert("Nenhum Digimon encontrado, pesquise o nome correto!"); 
            setListaDigimons([]); 
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
        buscarDigimon,
        buscarDigimonLevel,
        carregarTodosDigimons,  
    };
}

export { buscarTodosDigimons };  
