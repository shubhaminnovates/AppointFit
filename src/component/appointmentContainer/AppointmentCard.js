import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewAppointment,
  appointmentDelete,
  deleteUser,
  editUserDetails,
} from "../../utils/store/userSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

function AppointmentCard({ user, index }) {
  const dispatch = useDispatch();

  const [appointmentUsers, setAppointmentUsers] = useState(user.appointments);
  const [firstNameChange, setFirstNameChange] = useState(user.firstName);
  const [lastNameChange, setLastNameChange] = useState(user.lastName);
  const [locationChange, setLocationChange] = useState(user.location);

  const [newDate, setNewDate] = useState();
  const [newTime, setNewTime] = useState();

  const [newAppointmentChange, setNewAppointmentChange] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setAppointmentUsers(user.appointments);
  }, [user.appointments]);

  const handleCancelButtonPressed = (index) => {
    dispatch(deleteUser(index));
  };

  const handleChangeButtonPressed = (index) => {
    setChange((prevState) => !prevState);
  };

  const handleAppointmentDelete = (appointmentIndex) => {
    dispatch(
      appointmentDelete({ index: index, appointmentIndex: appointmentIndex })
    );
  };

  const handleAddNewAppointmentClicked = () => {
    setNewAppointmentChange(true);
   
  };

  const handleSaveButtonClicked = () => {
    dispatch(
      editUserDetails({
        userIndex: index,
        userInfo: {
          firstName: firstNameChange,
          lastName: lastNameChange,
          location: locationChange,
        },
      })
    );

    setChange((prevState) => !prevState);
  };

  const handleAddNewAppointmentSaved = () => {
    dispatch(
      addNewAppointment({
        userIndex: index,
        newAppointment: {
          date: newDate,
          time: newTime,
        },
      })
    );

    

    setNewAppointmentChange((prevState) => !prevState);
  };

  return (
    <div className=" p-2 w-[90%] h-fit md:w-[20%] shadow-lg mx-2 bg-teal-800 rounded-md m-2 ">
      <div className="mb-4">
        <span className="px-1 font-bold text-xl text-white">First Name</span>
        <div className="shadow-lg px-2 py-1 bg-white my-1 flex  justify-between rounded-md">
          {change ? (
            <input
              type="text"
              value={firstNameChange}
              placeholder="what is your first name?"
              onChange={(e) => {
                setFirstNameChange(e.target.value);
                console.log(e.target.value);
              }}
              className="focus:outline-none "
            />
          ) : (
            <span className="font-normal">{user.firstName}</span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <span className="px-1 font-bold text-xl text-white">Last Name</span>
        <div className="shadow-lg px-2 py-1 bg-white my-2 flex justify-between rounded-md">
          {change ? (
            <input
              type="text"
              value={lastNameChange}
              placeholder="what is your last name?"
              onChange={(e) => {
                setLastNameChange(e.target.value);
                console.log(e.target.value);
              }}
              className="focus:outline-none"
            />
          ) : (
            <span className="font-normal">{user.lastName}</span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <span className="px-1 font-bold text-xl text-white">Location</span>
        <div className="shadow-lg px-2 py-1 bg-white my-2 flex justify-between rounded-md">
          {change ? (
            <input
              type="text"
              placeholder="What is your location?"
              value={locationChange}
              onChange={(e) => {
                setLocationChange(e.target.value);
              }}
              className="focus:outline-none "
            />
          ) : (
            <span className="font-normal">{user.location}</span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <div className="px-1 font-bold text-xl text-white">Appointments </div>

          <div
            className="bg-white font-bold text-xl rounded-md hover:bg-gray-200 cursor-pointer p-0.5 m-0.5"
            onClick={() => {
              handleAddNewAppointmentClicked();
            }}
          >
            <IoMdAdd />
          </div>
        </div>

        <div className="shadow-lg px-2 py-1 bg-white my-1  rounded-md">
          {newAppointmentChange ? (
            <div className="flex-col w-screen">
              <div>
                <input
                  className="w-64 mb-2 focus:outline-none"
                  value={newDate}
                  onChange={(e) => {
                    setNewDate(e.target.value);
                  }}
                  type="date"
                />
              </div>
              <div>
                <input
                  type="time"
                  value={newTime}
                  onChange={(e) => {
                    setNewTime(e.target.value);
                  }}
                  className="w-64  focus:outline-none"
                />
              </div>
            </div>
          ) : (
            appointmentUsers.map((appointment, appointmentIndex) => (
              <div className="flex justify-between">
                <span>
                  {appointment.date}
                  {" , "}
                  {appointment.time}
                </span>
                <span
                  className=" pt-1 bg-teal-800 hover:bg-teal-600 text-white p-0.5 rounded-md m-1 cursor-pointer"
                  onClick={() => {
                    handleAppointmentDelete(appointmentIndex);
                  }}
                >
                  <MdOutlineDeleteOutline />
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className=" ">
        {change || newAppointmentChange ? (
          <div className="flex justify-center">
            <button
              className="font-bold px-2 w-screen py-2 hover:bg-gray-300 bg-white mt-1 rounded-md"
              onClick={() => {
                newAppointmentChange
                  ? handleAddNewAppointmentSaved()
                  : handleSaveButtonClicked();
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex-col">
            <div
              className="font-bold text-center cursor-pointer my-1 py-2 hover:bg-gray-300 bg-white mt-1 rounded-md"
              onClick={() => {
                handleChangeButtonPressed(index);
              }}
            >
              Change
            </div>
            <div
              className="font-bold text-center py-2 cursor-pointer hover:bg-gray-300 bg-white mt-1 rounded-md"
              onClick={() => {
                handleCancelButtonPressed(index);
              }}
            >
              Delete
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentCard;
