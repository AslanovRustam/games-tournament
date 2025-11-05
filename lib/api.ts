import { ITournament } from "@/types/tournament";
import axios from "axios";

axios.defaults.baseURL = "https://68a035c86e38a02c581808ad.mockapi.io/";

export type FetchTournamentsResponse = ITournament[];

export const fetchTournaments = async ({
  searchText,
}: {
  searchText: string;
}): Promise<{ tournaments: ITournament[] }> => {
  const response = await axios.get<FetchTournamentsResponse>("/tournaments", {
    params: {
      ...(searchText !== "" && { search: searchText }),
    },
  });

  return { tournaments: response.data };
};

export const fetchTournamentById = async (tournamentId: string) => {
  const response = await axios.get<ITournament>(`/tournaments/${tournamentId}`);
  return response.data;
};
