'use client'

import { LibraryContext } from "@/LibraryContext/LibraryProvider";
import { useContext, useState } from "react";
import { ILibrary } from "../types/libraryType";
import Image from "next/image";
import { FaRegCircle,FaFire,FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { IoIosCheckmark } from "react-icons/io";
import { toast } from "react-toastify";
import { RiDeleteBin2Line } from "react-icons/ri";



const MyPlanTab = () => {

    const [doneIds,setDoneIds] = useState<number[]>([]);

    const handleDoneButton=(id:number)=>{
        toast.success("Congrats on finishing the task.")
         setDoneIds ([...doneIds,id]);
    }

    const {todaysPlan,setTodaysPlan, saved,setSaved,setActiveTab} = useContext(LibraryContext)

    const handleRemovePlan = (library:ILibrary) =>{
        const restPlan = todaysPlan.filter((card:ILibrary)=> {
            return card.name !== library.name
        })
        setTodaysPlan(restPlan)
    }
    const handleRemoveSaved = (library:ILibrary) =>{
        const restSaved = saved.filter((card:ILibrary)=> {
            return card.name !== library.name
        })
        setSaved(restSaved)

       
    }

     const [sortBy, setSortBy] = useState<"duration"|"calories"|"rating">("duration")

    const sortCards = (library:ILibrary[])=>{
      const sortedCards  = [...library]
      if(sortBy === "duration"){
        sortedCards.sort((a,b)=> b.duration - a.duration)
      } else if (sortBy === "calories"){
        sortedCards.sort((a,b)=> b.caloriesBurned - a.caloriesBurned)
      } else if(sortBy === "rating"){
        sortedCards.sort((a,b)=> b.rating - a.rating)
      } return sortedCards;
    }

    const sortedTodaysPlan = sortCards(todaysPlan);
    const sortedSaved = sortCards(saved)

    return (
        <div>
            <div className="text-end mt-8">
        <select value={sortBy} 
        onChange={(e)=> setSortBy (e.target.value as "duration" | "calories" | "rating")}
        className="select bg-[#222630] rounded-2xl w-[40%]">
  <option disabled={true}>Sort by</option>
  <option value={"duration"}>Duration</option>
  <option value={"calories"}>Calories</option>
  <option value={"rating"}>Rating</option>
</select>
      </div>
<div className="tabs tabs-border text-whites"> 
  <input type="radio" name="my_tabs_2" className="tab text-white checked:text-[#c2f800]" aria-label="Today's Plan" onChange={()=>setActiveTab("today")}defaultChecked/>
  <div className="tab-content border-base-300 bg-[#222630] p-10 space-y-4"> {todaysPlan.length>0? sortedTodaysPlan.map((library:ILibrary)=>{
    return <div key={library.id} className="flex justify-between items-center border-1 border-[#9ca3af] rounded-2xl py-2 px-[1%] md:px-[5%]">
       <div className=" w-full flex flex-row justify-between items-center">
         <div>
         <Image src={library.image} alt={library.name} width={100} height={100} className="rounded-2xl"></Image>
        </div>
         
             <div className="flex flex-col justify-between items-center lg:items-baseline">
            <h2 className="text-[15px] font-bold text-white lg:text-xl">{library.name}</h2>
            <p className="text-[13px] text-white mb-2 lg:text-md">{library.equipment}</p>
            <div className="card-actions text-sm flex flex-col justify-center text-[#9ca3af]  border-hidden text-center  md:flex-row text-md border-[.5px]">
                  <div className="flex justify-between items-center gap-1"><FaRegCircle className="text-[#c2f800]" /> {library.duration} min</div>
                  <div className="flex justify-between items-center gap-1"><FaFire  className="text-[#c2f800]"/> {library.caloriesBurned} kcal</div>
                  <div className="flex justify-between items-center gap-1"><FaRegStar  className="text-[#c2f800]"/> {library.rating}</div>
                </div>
             </div>
        
         <div className=" flex flex-col  justify-between items-center gap-2 md:flex-row">
        <Link href=""><button className=" text-[12px] btn btn-outline rounded-3xl border-[#9ca3af] text-white lg:text-[15px]">View Details</button></Link>
         <button  onClick={()=>handleDoneButton(library.id)} disabled={(doneIds.includes(library.id))? true: false}
         className="text-[12px] btn px-[8px] rounded:5xl bg-[#c2f800] lg:text-base px-[12px]"><IoIosCheckmark className="text-2xl"/> Mark as Done</button>
         <span onClick={()=>handleRemovePlan(library)}><RiDeleteBin2Line className=" text-[#c2f800] ml-4 cursor-pointer"/>
        </span>
         </div>
        
         </div>
     
      
        </div>}): (
      <div className="text-center text-white space-y-3 py-5">
        <h2 className="font-bold text:xl md:text-2xl">NOTHING HERE YET</h2>
        <p className="text-[#9ca3af] text-[12px] md:text-base">Browse the library and a lift to get today moving.</p>
        <Link href="/#workouts"><button className="btn px-[12px] py-[10px] rounded-xl bg-[#c2f800] text-black text-[12px] md:text-base">Go to workouts</button></Link>
      </div>
    )}
        </div>

  <input type="radio" name="my_tabs_2" className="tab text-white checked:text-[#c2f800]" aria-label="Saved" onChange={()=>setActiveTab("save")}  />
  <div className="tab-content border-base-300 bg-[#222630] p-10 space-y-4">
    {saved.length>0? sortedSaved.map((library:ILibrary)=>{
    return <div key={library.id} className="flex justify-between items-center border-1 border-[#9ca3af] rounded-2xl py-2 px-[1%] md:px-[5%]">
       <div className="w-full flex justify-between items-center">
         <div className=""><Image src={library.image} alt={library.name} width={100} height={100} className="rounded-2xl"></Image></div>
    
        <div  className="flex flex-col justify-between items-center lg:items-baseline">
            <h2 className="text-l font-bold text-white lg:text-xl">{library.name}</h2>
            <p className="text-sm text-white mb-2 lg:text-md">{library.equipment}</p>
            <div className="card-actions text-sm flex flex-col justify-center text-[#9ca3af]  border-hidden text-center  md:flex-row text-md border-[.5px]">
                  <div className="flex justify-between items-center gap-1"><FaRegCircle className="text-[#c2f800]" /> {library.duration} min</div>
                  <div className="flex justify-between items-center gap-1"><FaFire  className="text-[#c2f800]"/> {library.caloriesBurned} kcal</div>
                  <div className="flex justify-between items-center gap-1"><FaRegStar  className="text-[#c2f800]"/> {library.rating}</div>
                </div>
        </div>
       

          <div className="flex flex-col justify-between items-center gap-2 md:flex-row">
           
              <Link href={`/${library.id}`}><button className="btn btn-outline rounded-3xl border-[#9ca3af] text-white">View Details </button></Link> <span onClick={()=>handleRemoveSaved(library)}><RiDeleteBin2Line className=" text-[#c2f800] cursor-pointer"/>
</span>
          </div>
          </div>
        </div>}): (
      <div className="text-center text-white space-y-3 py-5">
        <h2 className="font-bold text-2xl">NOTHING HERE YET</h2>
        <p className="text-[#9ca3af]">Browse the library and a lift to get today moving.</p>
        <Link href="/#workouts"><button className="btn px-[12px] py-[10px] rounded-xl bg-[#c2f800] text-black">Go to workouts</button></Link>
      </div>
    )}
 
  </div>

</div>

        </div>
    );
};

export default MyPlanTab;

//  <div className="flex flex-col md:flex-row">