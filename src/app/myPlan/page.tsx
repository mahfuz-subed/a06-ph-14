'use client'
import React, { useContext } from 'react';
import MyPlanTab from '../components/myPlantab';
import { LibraryContext } from '@/LibraryContext/LibraryProvider';
const MyPlanPage = () => {
    const {todaysPlan,saved,activeTab} = useContext(LibraryContext);
    const currentPlan = activeTab === "today"? todaysPlan:saved;
    const totalMinutes = currentPlan.reduce((total,crr)=> total+crr.duration,0)
    const totalCalories = currentPlan.reduce((total,crr)=> total+crr.caloriesBurned,0)
    return (
        <div className='w-[90%] mx-auto my-10 text-white'>
            <h2 className='text-2xl font-bold '>MY PLAN</h2>
            <p className='my-3'>Cap of the five lifts for today. Finish them, then load more.</p>
            <div className='p-5 bg-[#222630] grid grid-cols-3 px-[5%] justify-items-center'>
                <div><p>Exercises</p>
                <h3 className='text-2xl text-[#c2f800] font-bold md:text-5xl'>{currentPlan.length}</h3></div>
                <div>
                    <p>Minutes</p>
            <h3 className='text-2xl text-[#c2f800] font-bold md:text-5xl'>{totalMinutes}</h3>
                </div>
                <div>
                    <p>Calories</p>
                <h3 className='text-2xl text-[#c2f800] font-bold md:text-5xl'>{totalCalories}</h3>
                </div>
            </div>
            <MyPlanTab/>
        </div>
    );
};

export default MyPlanPage;