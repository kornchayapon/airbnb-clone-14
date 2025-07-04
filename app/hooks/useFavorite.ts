"use client";

import { useCallback, useMemo } from "react";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorite, listingId, loginModal, router]
  );

  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;
