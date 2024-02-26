import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../utils/store/userSlice";
import { toggleAppointmentForm } from "../utils/store/view";
import Header from "./Header";

function AddNewAppointment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstName = useRef();
  const lastName = useRef();
  const location = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);

  const handleSubmitButtonClicked = (e) => {
    e.preventDefault();

    dispatch(
      addNewUser({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        location: location.current.value,
        appointments: dates.map((date, index) => {
          return {
            date: date,
            time: times[index],
          };
        }),
      })
    );
    dispatch(toggleAppointmentForm());
    navigate("/");
    alert("New user added succesfully");
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-12">
        <div className="w-full max-w-lg  ">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmitButtonClicked}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                required
                ref={firstName}
                placeholder="What is your first name?"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                required
                ref={lastName}
                placeholder="What is your last name?"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                ref={location}
                type="text"
                required
                placeholder="What is your location?"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date: [{dates.map((date) => date).join(" , ")}]
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                ref={dateRef}
                onChange={(e) => {
                  setDates([...dates, dateRef.current.value]);
                }}
                type="date"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="time"
              >
                Time: [{times.map((time) => time).join(" , ")}]
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                ref={timeRef}
                onChange={(e) => {
                  setTimes([...times, timeRef.current.value]);
                }}
                type="time"
                required
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewAppointment;
