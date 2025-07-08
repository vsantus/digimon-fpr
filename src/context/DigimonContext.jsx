// DigimonContext.jsx
import { createContext, useContext, useState } from "react";
import { useDigimon } from "../hooks/useDigimon";

const DigimonContext = createContext();

export function DigimonProvider({ children }) {

    const digimon = useDigimon();
    const [digimonSelecionado, setDigimonSelecionado] = useState(null);

    return (
        <DigimonContext.Provider value={{...digimon, digimonSelecionado, setDigimonSelecionado}}>
            {children}
        </DigimonContext.Provider>
    );
}

export function useDigimonContext() {
    return useContext(DigimonContext);
}
