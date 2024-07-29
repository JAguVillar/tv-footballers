import SelectorMolecule from "../molecules/SelectorMolecule";
import listaEquipos from "../../datasets/equipos.js";
import listaActores from "../../datasets/actores.js";
import BotonEquipoAtom from "../atoms/BotonEquipoAtom.jsx";
import TarjetaPersonajeMolecule from "../molecules/TarjetaPersonajeMolecule.jsx";
import BotonVerResultadosAtom from "../atoms/BotonVerResultadosAtom.jsx";
import { useNavigate } from "react-router-dom";

export default function VotacionTemplate() {
  const navigate = useNavigate();
  const equipos = listaEquipos;
  const mainEquipos = listaEquipos.slice(0, 12);
  const actor = listaActores[Math.floor(Math.random() * listaActores.length)];

  const irAResultados = () => {
    navigate("/resultados");
  };
  return (
    <div>
      <div className="container mx-auto px-4">
        <TarjetaPersonajeMolecule
          imagen={actor.image}
          personaje={actor.character}
        />
        <div className="grid grid-cols-6 gap-4 ">
          {mainEquipos.map((item) => (
            <BotonEquipoAtom
              key={item.value}
              equipo={item.label}
              id={item.value}
            />
          ))}
        </div>
        <SelectorMolecule lista={equipos} />
      </div>
      <BotonVerResultadosAtom handleClick={irAResultados} />
    </div>
  );
}
