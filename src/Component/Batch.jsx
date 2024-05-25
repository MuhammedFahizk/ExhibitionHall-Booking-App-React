import { useSelector } from 'react-redux';
import Shell from '../Component/Shell';

const Batch = ({ stall, setShowModal, setShellData }) => {
  const { bookings } = useSelector((state) => state.expo);
  const { choseDate } = useSelector((state) => state.expo);
  let shells = [];
  for (let x = 1; x <= 20; x++) {
    shells.push(x);
  }

  return (
    <div className="border rounded-lg w-full p-6 justify-center hover:-translate-y-5 text-center hover:transition-transform">
      <h1>{stall} STALL</h1>

      <div>
        {shells.map((shell, index) => {
          // Check if there's a booking for this shell on the chosen date
          const hasBooking = bookings.some(item => item.stall === stall && item.date.toDateString() === choseDate.toDateString()  && item.shell === shell);
            // hasBooking? console.log('afds'): ''
            console.log(hasBooking)
          return (
            <Shell
              setShowModal={setShowModal}
              stall={stall}
              key={index}
              setShellData={setShellData}
              className={`float-left w-1/2`}
              shell={shell}
              booking={hasBooking? 'bg-red-200 border-red-400 hover:bg-red-500': ''}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Batch;
