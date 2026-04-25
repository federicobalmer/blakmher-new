import { categoryListings } from "../catalog";
import { ListingPage } from "../components/ListingPage";

export default function LivingComedorPage() {
  return <ListingPage category={categoryListings["living-comedor"]} />;
}
