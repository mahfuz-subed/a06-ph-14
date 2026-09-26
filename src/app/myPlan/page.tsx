import React from 'react';
import MyPlanTab from '../components/myPlantab';

const MyPlanPage = () => {
    return (
        <div className='w-[90%] mx-auto my-10 text-white'>
            <h2 className='text-2xl font-bold '>MY PLAN</h2>
            <p className='my-3'>Cap of the five lifts for today. Finish them, then load more.</p>
            <div className='p-5 bg-[#222630] grid grid-cols-3 px-[5%] justify-items-center'>
                <p>Exercises</p>
                <p>Minutes</p>
                <p>Calories</p>
            </div>
            <MyPlanTab/>
        </div>
    );
};

export default MyPlanPage;