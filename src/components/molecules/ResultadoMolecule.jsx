import AvatarPersonajeAtom from "../atoms/AvatarPersonajeAtom";
import BotonVerAtom from "../atoms/BotonVerAtom";
import PersonajeSerieAtom from "../atoms/PersonajeSerieAtom";

export default function ResultadoMolecule({ imagen, personaje }) {
  return (
    <div className="flex justify-between gap-x-6 px-4 py-6 w-full">
      <div className="flex">
        <AvatarPersonajeAtom imagen={imagen} />
        <PersonajeSerieAtom personaje={personaje} serie={"Game of Thrones"} />
      </div>

      <BotonVerAtom />
    </div>
  );
}
