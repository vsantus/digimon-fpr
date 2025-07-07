import { useDigimon } from "../../hooks/useDigimon";
import "../../scss/HomeEstilo.scss";


const IconSuperior = () => {

    const { listaDigimons } = useDigimon();

    return (
        <div className="logo">
            {listaDigimons.length > 0 && (
                <img src={listaDigimons[0].img} alt={listaDigimons[0].name} />
            )}
        </div>
    );

}

export default IconSuperior;


