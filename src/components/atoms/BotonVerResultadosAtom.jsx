export default function BotonVerResultadosAtom({ handleClick }) {
  return (
    <button className="w-full bg-blue-400" onClick={() => handleClick()}>
      Ver resultados
    </button>
  );
}
