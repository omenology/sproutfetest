import axios from "axios";
import { useState, useEffect, Fragment } from "react";

import { capitalizeFirstLetter } from "../utils";

const BaseStat = ({ id }: { id: string }) => {
  const [data, setData] = useState<{ name: string; stat: number }[]>([]);

  useEffect(() => {
    if (id) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((res) => {
          // const dataPokemon: typeof data = {
          //   species: res.data.species.name,
          //   height: res.data.height,
          //   weight: res.data.weight,
          //   abilities: res.data.abilities.map((ability: any) => ability.ability.name),
          // };

          setData(
            res.data.stats.map((stat: any) => {
              return {
                name: stat.stat.name,
                stat: stat.base_stat,
              };
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div className="grid grid-cols-3 mt-2 mx-3 gap-2">
      {data.map((item, index) => (
        <Fragment key={index}>
          <div className="flex items-center justify-start">
            <p className="text-base font-bold text-gray-500">{capitalizeFirstLetter(item.name)}</p>
          </div>
          <div className="flex items-center justify-start col-span-2 gap-3">
            <p className="text-base font-bold text-gray-900">{item.stat}</p>
            <div className="grow">
              <div
                className={`${(index + 1) % 2 == 0 ? "bg-green-500" : "bg-red-500"} h-1`}
                style={{ width: item.stat > 100 ? 100 : item.stat + "%" }}
              />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default BaseStat;
