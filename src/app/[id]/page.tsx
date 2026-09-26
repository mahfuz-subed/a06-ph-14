import Image from "next/image";
import PlanButton from "../components/buttons/planButton";
import SaveButton from "../components/buttons/saveButton";

interface ILibraryDetialsProp{
  params: Promise<{id:string}>
}

const LibraryDetailsPage = async ({params}:ILibraryDetialsProp) => {
    const {id} = await params

    const res = await fetch (`https://api.api-store.workers.dev/api/fitlog/${id}`)
   
    if(!res.ok){
        throw new Error ("Couldn't get data.")
    }

    const idData = await res.json();

    return (
        <div className="grid justify-items-center  w-[90%] mx-auto">
           <div className="card md:card-side bg-black shadow-sm text-white ">
  <figure className="w-[80%] mx-auto md:w-[40%]">
    <Image
      src={idData.image}
      alt={idData.name} width={400} height={400}
      className="w-full object-cover"/>
  </figure>
  <div className="card-body text-[15px]">
    <h2 className="card-title">{idData.name}</h2>
    <p>{idData.description}</p>
    <div className="flex justify-start items-center gap-2 text-black">
        <div className="badge bg-[#c2f800] rounded-3xl ">{idData.muscleGroups[0]}</div>
      <div >{idData.muscleGroups[1]&&(<span className="badge bg-[#c2f800] rounded-3xl ">{idData.muscleGroups[1]}</span>)}</div>
     </div>
     <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#222630] ">
  <table className="table text-[12px]">
    {/* head */}
  <tbody className="[&>tr>td]:text-end font-bold">
      <tr>
        <th>EQUIPMENT</th>
          <td >{idData.equipment}</td>
         </tr>  
          <tr>
        <th>DIFFICULTY</th>
          <td>{idData.difficulty}</td>
         </tr>
           <tr>
        <th>SETS</th>
         <td>{idData.sets}</td>
        </tr>
          <tr>
        <th>REPS</th>
          <td>{idData.reps}</td>
         </tr>
          <tr>
        <th>DURATION</th>

        <td>{idData.duration}</td>
          </tr>
           <tr>
        <th>CALORIES</th>
        
        <td>{idData.caloriesBurned}</td>
            </tr>
             <tr>
        <th>RATING</th>
        
        <td>{idData.rating}</td>
      </tr>
  
    </tbody>
  </table>
</div>
<div className="grid space-y-3 my-3">
  <h2 className="font-bold">INSTRUCTIONS</h2>
  <p>1. {idData.instructions[0]}</p>
  <p>2. {idData.instructions[1]}</p>
  <p>3. {idData.instructions[2]}</p>
  <p>4. {idData.instructions[3]}</p>
</div>
    <div className="card-actions justify-start gap-2">
      <PlanButton idData={idData}/>
      <SaveButton idData={idData}/>
    </div>
  </div>
</div>
        </div>
    );
};

export default LibraryDetailsPage;