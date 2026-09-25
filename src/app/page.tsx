import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/banner.png"
import LibrarySection from "./components/library";
export default function Home() {
  return (
<div>
     <section className="px-[5%]">
     <div className="grid grid-cols-1 justify-items-center p-[5%] my-14 bg-[#222630] rounded-xl gap-10 md:grid-cols-2">
      <div className="grid grid-cols-1">
        <p className="text-m text-[#c2f800] md:text-lg">WORKOUT LIBRARY</p>
        <h2 className="text-[25px]  font-bold text-white md:text-[34px]">TRAIN WITH INTENT. LOG <br />
EVERY SET.</h2>
        <p className="text-s text-[#9ca3af] md:text-lg">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the weeks' work add up.</p>
        <Link href="#workouts" className="btn bg-[#c2f800] text-black mt-2 w-[50%] border-none">BROWSE WORKOUTS</Link>
      </div>
      <div >
        <Image className="lg:ml-30"
         src={heroImg} alt="hero image"></Image>
      </div>
    </div>
   </section>

    <section id="workouts">
      <div>
        <LibrarySection/>
      </div>
    </section>

</div>
  );
}
//className="w-1/2"