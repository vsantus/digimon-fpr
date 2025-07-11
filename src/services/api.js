import axios from "axios";

const API_URL = "https://digimon-api.vercel.app/api/digimon";

// Função para buscar todos os Digimons


//usado na pagina digimon
export const buscarTodosDigimons = async () => {
    try {
        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar Digimons", error);
        return [];
    }
};


// Função para buscar um Digimon pelo nome

//usando no card superior
export const buscarDigimonPorNome = async (nome) => {
    try {
        const response = await axios.get(`${API_URL}/name/${nome}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Digimon por nome:", error);
        return [];
    }
};


//usado na pagina digimon
export const buscarDigimonPorLevel = async (level) => {
    try {
        const response = await axios.get(`${API_URL}/level/${level}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Digimon por level", error);
        return [];
    }
};
