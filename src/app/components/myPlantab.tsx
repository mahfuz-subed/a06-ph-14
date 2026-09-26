'use client'

import { LibraryContext } from "@/LibraryContext/LibraryProvider";
import { useContext } from "react";
import { ILibrary } from "../types/libraryType";
import Image from "next/image";
import { FaRegCircle,FaFire,FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { IoIosCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const MyPlanTab = () => {
    const handleDoneButton=()=>{
        toast.success("Congrats on finishing the task.")
    }
    const {todaysPlan, saved} = useContext(LibraryContext)

    return (
        <div>
<div className="tabs tabs-border text-whites"> 
  <input type="radio" name="my_tabs_2" className="tab text-white checked:text-[#c2f800]" aria-label="Today's Plan" defaultChecked/>
  <div className="tab-content border-base-300 bg-[#222630] p-10 space-y-4"> {todaysPlan.length>0? todaysPlan.map((library:ILibrary)=>{
    return <div key={library.id} className="flex justify-between items-center border-1 border-[#9ca3af] rounded-2xl px-[5%] py-2">
       <div className="w-[40%] flex justify-between items-center">
         <div className=""><Image src={library.image} alt={library.name} width={100} height={100} className="rounded-2xl"></Image></div>
        <div>
            <h2 className="text-xl font-bold text-white">{library.name}</h2>
            <p className="text-white">{library.equipment}</p>
            <div className="card-actions justify-center gap-4 text-[#9ca3af] border-[.5px]]">
                  <div className="flex justify-between items-center gap-1"><FaRegCircle className="text-[#c2f800]" /> {library.duration} min</div>
                  <div className="flex justify-between items-center gap-1"><FaFire  className="text-[#c2f800]"/> {library.caloriesBurned} kcal</div>
                  <div className="flex justify-between items-center gap-1"><FaRegStar  className="text-[#c2f800]"/> {library.rating}</div>
                </div>
        </div>
       </div>
          <div className="grid gap:3 grid-cols-2">
        <Link href=""><button className="btn btn-outline rounded-3xl border-[#9ca3af] text-white">View Details</button></Link>
         <button  onClick={handleDoneButton} disabled={true}
         className="btn rounded:5xl bg-[#c2f800]"><IoIosCheckmark className="text-xl"/> Mark as Done</button>
         </div>
        </div>}): "No items has yet been added in Plan tab."}</div>

  <input type="radio" name="my_tabs_2" className="tab text-white checked:text-[#c2f800]" aria-label="Saved"  />
  <div className="tab-content border-base-300 bg-[#222630] p-10 space-y-4">
    {saved.length>0? saved.map((library:ILibrary)=>{
    return <div key={library.id} className="flex justify-between items-center border-1 border-[#9ca3af] rounded-2xl px-[5%] py-2">
       <div className="w-[40%] flex justify-between items-center">
         <div className=""><Image src={library.image} alt={library.name} width={100} height={100} className="rounded-2xl"></Image></div>
        <div>
            <h2 className="text-xl font-bold text-white">{library.name}</h2>
            <p className="text-white">{library.equipment}</p>
            <div className="card-actions justify-center gap-4 text-[#9ca3af] border-[.5px]]">
                  <div className="flex justify-between items-center gap-1"><FaRegCircle className="text-[#c2f800]" /> {library.duration} min</div>
                  <div className="flex justify-between items-center gap-1"><FaFire  className="text-[#c2f800]"/> {library.caloriesBurned} kcal</div>
                  <div className="flex justify-between items-center gap-1"><FaRegStar  className="text-[#c2f800]"/> {library.rating}</div>
                </div>
        </div>
       </div>
        <div className="grid gap:3 grid-cols-2">
            <Link href={`/${library.id}`}><button className="btn btn-outline rounded-3xl border-[#9ca3af] text-white">View Details</button></Link>
            <button onClick={handleDoneButton} disabled={true}
            className="btn rounded:5xl bg-[#c2f800]"><IoIosCheckmark className="text-xl" /> Mark as Done</button>
        </div>
        </div>}): "No items has yethas been added been added in Saved tab."}
 
  </div>

</div>
        </div>
    );
};

export default MyPlanTab;