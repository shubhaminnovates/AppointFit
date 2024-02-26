import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAppointmentForm, toggleCalendarView } from "../utils/store/view";


function Header() {
  const navigate = useNavigate();
  const dispatch =useDispatch()
  const appointmentFormView = useSelector((store) => store.view.appointmentFormView);
  const calendarView = useSelector((store)=>store.view.calendarView)

  const handleAddNewButtonClicked = () => {
    dispatch(toggleAppointmentForm())
    
    navigate("/addNewAppointment");
    
  };

  const handleBackButtonClicked = () => {
   appointmentFormView && dispatch(toggleAppointmentForm())
   calendarView && dispatch(toggleCalendarView())
    navigate("/");
  };

  const handleCalendarButtonClicked = () => {
    dispatch(toggleCalendarView())
    navigate("/calendar");
  };
  const handleAppointFitLogoClicked = ()=>{
    dispatch(toggleAppointmentForm())
    dispatch(toggleCalendarView())
    navigate("/");
  }

  return (
    <div className=" flex justify-between align-middle shadow-md ">
      {!(appointmentFormView || calendarView) ? (
        <div className="flex cursor-pointer md:p-2 mt-3" onClick={handleAppointFitLogoClicked} >
          <img src="./logo.png" alt="Logo" className="md:w-14 p-1 w-10 h-12" />
          <h1 className="pt-2 text-green-900 md:text-2xl text-xl font-bold">AppointFit</h1>
        </div>
      ) : (
        <div
          className="text-2xl flex  p-4 cursor-pointer font-bold "
          onClick={handleBackButtonClicked}
        >
          <IoChevronBackOutline />
          <h1 className="-mt-1 ml-1 ">Back</h1>
        </div>
      )}
      <div className="md:mr-4">
        {!(appointmentFormView || calendarView) && <button
          className="p-2 bg-teal-600 mr-12  rounded-lg font-bold  m-4"
          onClick={handleAddNewButtonClicked}
        >
          Add New
        </button>}
        {!(appointmentFormView || calendarView) && <button 
        className="p-2 bg-teal-600 -ml-8 rounded-lg  font-bold m-4"
        onClick={handleCalendarButtonClicked}
        >
          Calendar
        </button>}

      </div>
    </div>
  );
}

export default Header;
