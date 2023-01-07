import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [pokemonNameList, setPokemonNameList] = useState<{ name: string; url: string }[]>([]);
  const [pokemonAbilityList, setPokemonAbilityList] = useState<{ name: string; url: string }[]>([]);
  const [pokemonNatureList, setPokemonNatureList] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => {
        console.log(res.data);
        setPokemonNameList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://pokeapi.co/api/v2/ability?limit=10&offset=0")
      .then((res) => {
        console.log(res.data);
        setPokemonAbilityList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://pokeapi.co/api/v2/nature?limit=10&offset=0")
      .then((res) => {
        console.log(res.data);
        setPokemonNatureList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:max-w-[1200px] lg:m-auto gap-3 p-3">
      <div className="col-span-full my-4">
        <p className="text-4xl font-extrabold">Pokedex</p>
      </div>
      {pokemonNameList.map((pokemon, index) => (
        <div
          key={index}
          onClick={() => {
            router.push({
              pathname: "/detail/" + (index + 1),
              query: {
                name: pokemon.name,
                ability: pokemonAbilityList[index].name,
                nature: pokemonNatureList[index].name,
              },
            });
          }}
          className="bg-red-500 hover:bg-opacity-90 hover:cursor-pointer w-full h-[120px] rounded-xl overflow-hidden p-2 relative"
        >
          <div className="w-[165px] h-[165px] absolute bottom-[-45px] right-[-45px] z-20">
            <Image alt="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} fill />
          </div>
          <div className="w-[90px] h-[90px] opacity-[0.6] absolute bottom-[-8px] right-[-8px] z-10">
            <Image alt="icobg" src="/pokeball.png" fill sizes="1" />
          </div>
          <div className="flex flex-col gap-1 relative z-30">
            <p className="text- font-bold text-white">{pokemon.name}</p>
            <div className="bg-white bg-opacity-30 rounded-xl p-1 px-2 w-fit">
              <p className="text-xs text-white font-bold">{pokemonAbilityList[index]?.name}</p>
            </div>
            <div className="bg-white bg-opacity-30 rounded-xl p-1 px-2 w-fit">
              <p className="text-xs text-white font-bold">{pokemonNatureList[index]?.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
