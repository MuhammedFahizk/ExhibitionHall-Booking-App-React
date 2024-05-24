import  { useState } from "react"; // Don't forget to import React
import Batch from "./Batch";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const batch = ["A", "B", "C"];
  const {choseDate} = useSelector((state) => state.expo)
  console.log(choseDate)
  return (
    <>
      <div className="mx-20 m-5 flex justify-between ">
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >Choos Date</button>
        <h1 className="bg-pink-500 rounded flex items-center px-4  font-bold text-white">{choseDate.toDateString()}</h1>
      </div>
      <div className="flex justify-between mx-20 mb-20 gap-6">
        {showModal ? <Modal setShowModal={setShowModal} /> : ""}
        {batch.map((stall, index) => (
          <Batch stall={stall} key={index} setShowModal={setShowModal} />
        ))}
      </div>
    </>
  );
};

export default Main;
