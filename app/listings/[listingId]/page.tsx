import getListingById from "@/app/actions/getListingById";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import getReservations from "@/app/actions/getReservation";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  console.log("IParams", params);

  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default ListingPage;
