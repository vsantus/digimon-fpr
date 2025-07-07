import React, { createContext, useState, useEffect } from "react";

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState(null);

    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema");
        if (temaSalvo) {
            setTema(temaSalvo);
            document.body.classList.add(`tema-${temaSalvo}`);
        }
    }, []);

    const trocarTema = (novoTema) => {
        if (tema === novoTema) {
            setTema(null);
            localStorage.removeItem("tema");
            document.body.className = ""; 
        } else {
            setTema(novoTema);
            localStorage.setItem("tema", novoTema);
            document.body.className = ""; // Limpa classes anteriores  
            document.body.classList.add(`tema-${novoTema}`);
        }
    };

    return (
        <TemaContext.Provider value={{ tema, trocarTema }}>
            {children}
        </TemaContext.Provider>
    );
};
