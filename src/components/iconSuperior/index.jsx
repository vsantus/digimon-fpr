import { useDigimonContext } from "../../context/DigimonContext";
import "../../scss/HomeEstilo.scss";

const IconSuperior = () => {
    const { digimonFavorito } = useDigimonContext();

    const defaultIcon = {
        img: "https://i.postimg.cc/bvLxBxJg/d2b28865-c195-478c-a3eb-b3574539f103-1.png",
        name: "Digimon"
    };

    const iconFinal = digimonFavorito && digimonFavorito.img ? digimonFavorito : defaultIcon;

    return (
        <div className="logo">
            <img
                src={iconFinal.img}
                alt={iconFinal.name}
            />
        </div>
    );
};

export default IconSuperior;
