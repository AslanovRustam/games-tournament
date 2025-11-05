import Image from "next/image";
import Link from "next/link";
import { ITournament } from "@/types/tournament";

type Props = { tournament: ITournament };

function TournamentItem({ tournament }: Props) {
  return (
    <li
      key={tournament.id}
      className="p-2 border rounded-md flex flex-col items-center justify-between gap-2"
      aria-labelledby={`tour-${tournament.id}-title`}
    >
      <h2
        id={`tour-${tournament.id}-title`}
        className="text-lg font-medium text-center w-full truncate"
        title={tournament.title}
      >
        {tournament.title}
      </h2>
      <Link
        href={`/tournaments/${tournament.id}`}
        scroll={false}
        className="relative group overflow-hidden rounded"
      >
        <Image
          src={tournament.picture}
          alt={tournament.title}
          className="object-cover rounded aspect-square transition-transform duration-300 ease-in-out group-hover:scale-110"
          width={200}
          height={200}
        />
      </Link>
    </li>
  );
}

export default TournamentItem;
