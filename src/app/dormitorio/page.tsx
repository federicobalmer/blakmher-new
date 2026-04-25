import { categoryListings } from "../catalog";
import { ListingPage } from "../components/ListingPage";

export default function DormitorioPage() {
  return <ListingPage category={categoryListings.dormitorio} />;
}
