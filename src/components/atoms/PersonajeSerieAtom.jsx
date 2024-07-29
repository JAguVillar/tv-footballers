export default function PersonajeSerieAtom({ personaje, serie }) {
  return (
    <div>
      <div className="text-xl">{serie}</div>
      <div className="text-md">{personaje}</div>
    </div>
  );
}
