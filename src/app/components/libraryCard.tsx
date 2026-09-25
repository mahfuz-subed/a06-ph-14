import Image from 'next/image';
import { ILibrary } from '../types/libraryType';
import { FaFire,FaRegStar,FaRegCircle  } from "react-icons/fa";



const LibraryCard = ({library}:{library:ILibrary}) => {
    return (
       <div className="card bg-[#222630] shadow-sm w-85 h-95">
  <figure>
    <Image
      src={library.image}
      alt={library.name} width={250} height={150}
      className='w-full' />
  </figure>
  <div className="card-body">
     <div className="flex justify-start items-center gap-2 text-black">
        <div className="badge bg-[#c2f800] rounded-3xl ">{library.muscleGroups[0]}</div>
      <div >{library.muscleGroups[1]&&(<span className="badge bg-[#c2f800] rounded-3xl ">{library.muscleGroups[1]}</span>)}</div>
     </div>
    <h2 className="card-title text-white font-extrabold">
     {library.name}
    </h2>
    <p className='text-[#9ca3af]'>{library.equipment}</p>
    <div className="card-actions justify-center gap-4 text-[#9ca3af] border-[.5px] border-[#6f6f71]">
      <div className="flex justify-between items-center gap-1"><FaRegCircle /> {library.duration} min</div>
      <div className="flex justify-between items-center gap-1"><FaFire /> {library.caloriesBurned} kcal</div>
      <div className="flex justify-between items-center gap-1"><FaRegStar /> {library.rating}</div>
    </div>
  </div>
</div>
    );
};

export default LibraryCard;