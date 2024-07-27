import SelectorMolecule from "../molecules/SelectorMolecule";
import listaEquipos from "../../datasets/equipos.js";
import BotonEquipoAtom from "../atoms/BotonEquipoAtom.jsx";

export default function VotacionTemplate() {
  const equipos = listaEquipos;
  console.log(equipos);
  return (
    <div>
      <div className="flex flex-1">
        {equipos.map((item) => (
          <BotonEquipoAtom
            key={item.value}
            equipo={item.label}
            id={item.value}
          />
        ))}
      </div>
      <SelectorMolecule lista={equipos} />
    </div>
  );
}
