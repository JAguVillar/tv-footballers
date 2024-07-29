export default function AvatarPersonajeAtom(imagen) {
  console.log(imagen);
  return (
    <div>
      <img
        className="object-contain mb-2"
        src={`https://image.tmdb.org/t/p/original/${imagen}`}
      />
    </div>
  );
}
