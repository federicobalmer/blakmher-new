import { categoryListings } from "../catalog";
import { ListingPage } from "../components/ListingPage";

export default function CocinaPage() {
  return <ListingPage category={categoryListings.cocina} />;
}
