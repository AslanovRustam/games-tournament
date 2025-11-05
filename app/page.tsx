import TournamentList from "@/components/TournamentList/TournamentList";
import { fetchTournaments } from "@/lib/api";

export default async function Home() {
  const { tournaments: initialData } = await fetchTournaments({
    searchText: "",
  }).catch(() => ({
    tournaments: [],
  }));

  return (
    <main className="flex w-full max-w-6xl flex-col items-center justify-center px-[5vw] py-16">
      <TournamentList initialTournaments={initialData} />
    </main>
  );
}
