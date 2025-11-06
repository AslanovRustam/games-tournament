"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";
import { fetchTournamentById } from "@/lib/api";
import { ITournament } from "@/types/tournament";

function TournamentDetails() {
  const [tournament, setTournament] = useState<ITournament | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const router = useRouter();

  const { id } = useParams<{ id: string }>();

  const handleClose = () => {
    router.back();
  };

  const handleSignIn = () => {
    const fakeLogin = new Promise((resolve) => setTimeout(resolve, 2000));

    toast.promise(
      fakeLogin,
      {
        loading: "Signing in...",
        success: <b>Welcome! You are now signed in.</b>,
        error: <b>Login failed. Try again later.</b>,
      },
      {
        position: "top-center",
        style: {
          background: "#1f2937",
          color: "#fff",
          fontSize: "15px",
        },
        iconTheme: {
          primary: "#10b981",
          secondary: "#fff",
        },
      }
    );
  };

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
      {tournament ? (
        <div
          key={tournament.id}
          className="p-2 flex flex-col items-center gap-2 h-full min-h-full"
          aria-labelledby={`tour-${tournament.id}-title`}
        >
          <h2
            id={`tour-${tournament.id}-title`}
            className="text-2xl font-medium text-center w-full "
            title={tournament.title}
          >
            {tournament.title}
          </h2>

          <div className="relative w-full flex justify-center">
            {isImageLoading && (
              <div className="w-[400px] h-[225px] rounded bg- animate-pulse" />
            )}
            <Image
              src={tournament.picture}
              alt={tournament.title}
              className={`object-cover rounded aspect-video transition-opacity duration-500 ${
                isImageLoading ? "opacity-0 absolute" : "opacity-100"
              }`}
              width={400}
              height={225}
              onLoadingComplete={() => setIsImageLoading(false)}
              priority
            />
          </div>

          <p>{tournament.description}</p>

          <Button
            text=" Sign In"
            onClick={handleSignIn}
            style={{ marginTop: "auto" }}
          />
        </div>
      ) : (
        <p>Content is currently unavailable, please try again later</p>
      )}
    </Modal>
  );
}

export default TournamentDetails;
