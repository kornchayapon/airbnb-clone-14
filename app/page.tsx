import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingParams } from "./actions/getListing";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingParams;
}

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState />;
  }

  return (
    <Container>
      <div
        className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.ig}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
