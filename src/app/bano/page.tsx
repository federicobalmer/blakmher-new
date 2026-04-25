import { categoryListings } from "../catalog";
import { ListingPage } from "../components/ListingPage";

export default function BanoPage() {
  return <ListingPage category={categoryListings.bano} />;
}
