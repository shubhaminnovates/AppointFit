import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { generateDate, months } from "./utilities/calendar";
import cn from "./utilities/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Header from "../Header";
import { useSelector } from "react-redux";


export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const users = useSelector(store=>store.user.users)
  
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const date = selectDate.toDate().toDateString()
  
  function formatDate(date) {
    // Parse the input date
    const parsedDate = new Date(date);
  
    // Extract year, month, and day
    const year = parsedDate.getFullYear();
    // Months are zero-based, so add 1 to get the correct month
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = parsedDate.getDate().toString().padStart(2, '0');
  
    // Create the formatted date string
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }
  
  
  
  const formattedDate = formatDate(date);

  const appointments = users.map((user) => {
    const userAppointments = user.appointments.filter(
      (appointment) => appointment.date === formatDate(date)
    );

    if (userAppointments.length > 0) {
      return { ...user, appointments: userAppointments };
    }

    return null;
  });

  // Remove null values from the array
  const filteredAppointments = appointments.filter((user) => user !== null);

  
  
  
  return (
    <>
      <Header />
      <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
        <div className="w-96 h-96 ">
          <div className="flex justify-between items-center">
            <h1 className="select-none font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-10 items-center ">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className=" cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                >
                  {day}
                </h1>
              );
            })}
          </div>

          <div className=" grid grid-cols-7 ">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today ? "bg-red-600 text-white" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="h-96 w-96 sm:px-5">
          <h1 className=" font-semibold">
            Schedule for {date}
          </h1>
          {console.log("start")}
          {console.log(filteredAppointments[0])}
          {console.log("end")}

          <ul >
          {filteredAppointments.length!==0 && filteredAppointments[0].appointments.map(appointment=>{
            return(
                <div className="shadow-lg m-2 p-2 bg-teal-800 text-white font-bold">
                <li>{filteredAppointments[0].firstName} {filteredAppointments[0].lastName}</li>
                <li>{appointment.time}</li>
                </div>
            )
          })
           
          }
          </ul>
          {filteredAppointments.length===0 && <p className="tex-gray-900 m-2">No appointments for today.</p>}
        </div>
      </div>
    </>
  );
}
