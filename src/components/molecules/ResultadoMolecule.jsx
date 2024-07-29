import AvatarPersonajeAtom from "../atoms/AvatarPersonajeAtom";
import PersonajeSerieAtom from "../atoms/PersonajeSerieAtom";

export default function ResultadoMolecule({ imagen, personaje }) {
  console.log(imagen);
  console.log(personaje);
  return (
    <div>
      <AvatarPersonajeAtom imagen={imagen} />
      <PersonajeSerieAtom personaje={personaje} serie={"Game of Thrones"} />
    </div>
  );
}
