"use client";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import TournamentItem from "../TournamentItem/TournamentItem";
import Skeleton from "../Skeleton/Skeleton";
import { fetchTournaments } from "@/lib/api";
import { ITournament } from "@/types/tournament";

type Props = { initialTournaments?: ITournament[] };

function TournamentList({ initialTournaments }: Props) {
  const [tournaments, setTournaments] = useState<ITournament[]>(
    initialTournaments || []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setSearchQuery(query);
    try {
      const { tournaments } = await fetchTournaments({ searchText: query });
      setTournaments(tournaments);
    } catch (err) {
      console.error("Loading error", err);
      setTournaments([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-[5vw] py-10 flex flex-col gap-8">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Skeleton />
      ) : tournaments.length > 0 ? (
        <ul className="grid w-full gap-6 grid-cols-[repeat(auto-fit,minmax(30%,1fr))]">
          {tournaments.map((tournament) => (
            <TournamentItem key={tournament.id} tournament={tournament} />
          ))}
        </ul>
      ) : (
        searchQuery && (
          <p className="text-center mt-10 text-lg">
            No tournaments found for{" "}
            <span className="font-semibold ">“{searchQuery}”</span>.
          </p>
        )
      )}
    </section>
  );
}

export default TournamentList;
