"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import { fetchTournamentById } from "@/lib/api";
import { ITournament } from "@/types/tournament";

type Props = {};

function TournamentDetails({}: Props) {
  const [tournament, setTournament] = useState<ITournament | null>(null);

  const router = useRouter();

  const { id } = useParams<{ id: string }>();

  const handleClose = () => {
    router.back();
  };
  console.log(tournament);

  useEffect(() => {
    if (!id) return;
    const getTournamentInfo = async () => {
      const res = await fetchTournamentById(id);
      setTournament(res);
    };
    getTournamentInfo();
  }, [id]);

  return (
    <Modal onClose={handleClose}>
      <div>TournamentDetails MODAL</div>
    </Modal>
  );
}

export default TournamentDetails;
