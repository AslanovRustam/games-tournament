import Image from "next/image";
import Link from "next/link";
import { Card, Overlay } from "./TournamentItem.styled";
import { ITournament } from "@/types/tournament";

type Props = { tournament: ITournament };

function TournamentItem({ tournament }: Props) {
  return (
    <Card className="bg-white dark:bg-slate-900 border">
      <Link
        href={`/tournaments/${tournament.id}`}
        className="block relative w-full aspect-video"
      >
        <Image
          src={tournament.picture}
          alt={tournament.title}
          fill
          className="object-cover"
        />
        <Overlay>
          <div style={{ width: "100%" }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>{tournament.title}</h3>
          </div>
        </Overlay>
      </Link>
    </Card>
  );
}

export default TournamentItem;
