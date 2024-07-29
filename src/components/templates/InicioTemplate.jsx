import { useEffect, useState } from "react";
import BotonAtom from "../atoms/BotonAtom";
import SelectorMolecule from "../molecules/SelectorMolecule";
import { useNavigate } from "react-router-dom";

const paises = [
  { value: 1, label: "Argentina" },
  { value: 2, label: "Brasil" },
];

export default function InicioTemplate() {
  const navigate = useNavigate();

  const [pais, setPais] = useState("Argentina");
  useEffect(() => {
    console.log(pais);
  }, [pais]);

  const irAVotacion = () => {
    console.log(pais);
    navigate("/votacion");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>TV Footballers</h1>
      <p>
        Es una encuesta colaborativa en donde vos nos dices de que equipo es
        cada uno de los personajes
      </p>
      <SelectorMolecule lista={paises} value={pais} setValue={setPais} />
      <BotonAtom handleClick={irAVotacion} />
    </div>
  );
}
