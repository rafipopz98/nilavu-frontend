import ExplainerSeats from "../../components/employer/add-seats/ExplainerSeats";
import SeatSelector from "../../components/employer/add-seats/SeatSelector";

const AddSeats = () => {
  return (
    <div className="mt-6 font-geist w-full">
      <div className="mx-3 mb-6 space-y-6">
        <ExplainerSeats />
        <SeatSelector />
      </div>
    </div>
  );
};

export default AddSeats;
