import ResultadoMolecule from "../molecules/ResultadoMolecule";
import SelectorMolecule from "../molecules/SelectorMolecule";
import listaActores from "../../datasets/actores.js";

export default function ResultadosTemplate() {
  return (
    <>
      {listaActores.map((item) => (
        <ResultadoMolecule
          key={item.id}
          imagen={item.image}
          personaje={item.character}
          serie="Game of Thrones"
        />
      ))}
      <SelectorMolecule lista={listaActores} />
    </>
  );
}
