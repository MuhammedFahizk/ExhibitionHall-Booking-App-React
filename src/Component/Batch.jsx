import Shell from "./Shell";

const Batch = ({stall, setShowModal}) => {
    let shells = []
    for (let x = 1 ;x<=20; x++) {
        shells.push(x)
    }
    console.log(stall);
  return (
    <div className="border rounded-lg w-full p-6 justify-center hover:-translate-y-5 hover:bg-red-50 hover:transition-transform " >
        <h1>{stall} STALL</h1>
    
    <div>
        {
            shells.map((shell,index) => (
                <Shell setShowModal={setShowModal} key={index} className={index % 2 === 0 ? 'float-left w-1/2' : 'float-right w-1/2'} shell={shell} />
            ))
        }
    </div>
    </div>
  )
}

export default Batch