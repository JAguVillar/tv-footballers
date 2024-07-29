import ResultadoMolecule from "../molecules/ResultadoMolecule";
import listaActores from "../../datasets/actores.js";

export default function ResultadosTemplate() {
  return (
    <>
      {listaActores.map((item) => (
        <ResultadoMolecule
          key={item.id} // Assuming each item has a unique id
          imagen={item.image}
          personaje={item.character}
          serie="Game of Thrones"
        />
      ))}
    </>
  );
}
