import axios from "axios";
import { useEffect, useState } from "react";

import { capitalizeFirstLetter } from "../utils";

const About = ({ id }: { id: string }) => {
  const [data, setData] = useState<{ species: string; height: number; weight: number; abilities: string[] }>({
    species: "",
    height: 0,
    weight: 0,
    abilities: [],
  });

  useEffect(() => {
    if (id) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((res) => {
          const dataPokemon: typeof data = {
            species: res.data.species.name,
            height: res.data.height,
            weight: res.data.weight,
            abilities: res.data.abilities.map((ability: any) => ability.ability.name),
          };
          console.log(res);
          setData(dataPokemon);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div className="grid grid-cols-3 mt-2 mx-3 gap-2">
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Species</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{capitalizeFirstLetter(data.species)}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Height</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{data.height} dm</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Weight</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{data.weight} Hg</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-base font-bold text-gray-500">Abilities</p>
      </div>
      <div className="flex items-center justify-start col-span-2">
        <p className="text-base font-bold text-gray-900">{data.abilities.toString()}</p>
      </div>
    </div>
  );
};

export default About;
