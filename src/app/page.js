import Navbar from "@/components/Navbar";
import TripDetail from "@/components/TripDetail";
import Welcome from "@/components/Welcome";
import TripList from "./trips/page";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Welcome />
      <TripList />
      <TripDetail />
    </div>
  );
}
