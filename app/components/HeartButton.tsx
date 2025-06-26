"use client";

import { AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  return (
    <div
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={24}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
    </div>
  );
};

export default HeartButton;
