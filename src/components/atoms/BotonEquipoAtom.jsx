export default function BotonEquipoAtom({ equipo, id }) {
  return (
    <div className="flex flex-col items-center justify-center p-2 border rounded bg-light-400">
      <img
        className="object-contain"
        src={`https://api.sofascore.app/api/v1/team/${id}/image`}
        alt={equipo}
      />
    </div>
  );
}
