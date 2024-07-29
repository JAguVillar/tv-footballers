import PersonajeSerieAtom from "../atoms/PersonajeSerieAtom";

export default function TarjetaPersonajeMolecule({ imagen, personaje }) {
  return (
    <div>
      <img
        className="object-contain mb-2"
        src={`https://image.tmdb.org/t/p/original/${imagen}`}
      />
      <PersonajeSerieAtom personaje={personaje} serie={"Game of Thrones"} />
    </div>
  );
}
