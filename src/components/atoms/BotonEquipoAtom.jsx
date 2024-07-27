export default function BotonEquipoAtom({ equipo, id }) {
  return (
    <div>
      <img
        src={`https://api.sofascore.app/api/v1/team/${id}/image`}
        alt={equipo}
        width={"50px"}
      />
      {equipo}
    </div>
  );
}
