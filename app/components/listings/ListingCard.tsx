"use client";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import Image from "next/image";
import HeartButton from "../HeartButton";
import { useRouter } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import { useMemo } from "react";

interface ListingCardProps {
  data: SafeListing;
  currentUser?: SafeUser | null;
  // reservation?: SafeReservation | null;
}

const ListingCard: React.FC<ListingCardProps> = ({ data, currentUser }) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          >
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">{data.category}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {data.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
