"use client";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import TournamentItem from "../TournamentItem/TournamentItem";
import Skeleton from "../Skeleton/Skeleton";
// import Modal from "../Modal/Modal";
import { fetchTournaments } from "@/lib/api";
import { ITournament } from "@/types/tournament";

type Props = { initialTournaments?: ITournament[] };

function TournamentList({ initialTournaments }: Props) {
  const [tournaments, setTournaments] = useState<ITournament[]>(
    initialTournaments || []
  );
  const [loading, setLoading] = useState(false);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
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

  //   const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <section className="w-full px-[5vw] py-10 flex flex-col gap-8">
      <SearchBar onSearch={handleSearch} />
      <ul className="grid w-full gap-6 grid-cols-[repeat(auto-fit,minmax(30%,1fr))]">
        {loading ? (
          <Skeleton />
        ) : (
          tournaments?.map((tournament) => (
            <TournamentItem key={tournament.id} tournament={tournament} />
          ))
        )}
      </ul>
      {/* {isModalOpen && <Modal onClose={toggleModal}>qwe</Modal>} */}
    </section>
  );
}

export default TournamentList;
