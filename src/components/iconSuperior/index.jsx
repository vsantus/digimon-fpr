import { useDigimonContext } from "../../context/DigimonContext";
import "../../scss/HomeEstilo.scss";

const IconSuperior = () => {
    const { listaDigimons, digimonSelecionado } = useDigimonContext();

    const digimonIcon = digimonSelecionado
        ? listaDigimons.find(d => d.name.toLowerCase() === digimonSelecionado.toLowerCase())
        : listaDigimons[0];

    return (
        <div className="logo">
            {digimonIcon && (
                <img src={digimonIcon.img} alt={digimonIcon.name} />
            )}
        </div>
    );
};

export default IconSuperior;
