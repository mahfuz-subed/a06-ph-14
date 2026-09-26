const MyPlanTab = () => {
    return (
        <div>
<div className="tabs tabs-border text-whites"> 
  <input type="radio" name="my_tabs_2" className="tab text-white checked:text-[#c2f800]" aria-label="Today's Plan" defaultChecked/>
  <div className="tab-content border-base-300 bg-[#222630] p-10">Today's Plan</div>

  <input type="radio" name="my_tabs_2" className="tab text-white checked:text-[#c2f800]" aria-label="Saved"  />
  <div className="tab-content border-base-300 bg-[#222630] p-10">Saved</div>

</div>
        </div>
    );
};

export default MyPlanTab;