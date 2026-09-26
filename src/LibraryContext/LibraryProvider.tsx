import { ILibrary } from "@/app/types/libraryType";
import { createContext,ReactNode,useState } from "react";

interface ILibraryContext {
    todaysPlan: ILibrary[],
    setTodaysPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>,
    saved: ILibrary[],
    setSaved: React.Dispatch<React.SetStateAction<ILibrary[]>>
}

const LibraryContext = createContext<ILibraryContext>({todaysPlan:[],setTodaysPlan:()=>{},saved:[],setSaved:()=>{}})


const LibraryProvider = ({children}:{children:ReactNode}) => {
    const [todaysPlan,setTodaysPlan] = useState<ILibrary[]>([]);
    const [saved,setSaved] = useState<ILibrary[]>([]);

    const contexts = {
    todaysPlan,setTodaysPlan,saved,setSaved
    }

    return(
        <LibraryContext.Provider value={contexts}>{children}</LibraryContext.Provider>
    );
};

export default LibraryProvider;