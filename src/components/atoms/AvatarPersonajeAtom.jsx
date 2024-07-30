export default function AvatarPersonajeAtom({imagen}) {
  console.log(imagen);
  return (
    <div>
        <img className="inline-block h-12 w-12 rounded object-contain" src={`https://image.tmdb.org/t/p/original/${imagen}`} alt=""/>
    </div>
  );
}
