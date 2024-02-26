import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppointmentCard from "./AppointmentCard";

function MainContainer() {
  const reduxUsers = useSelector((store) => store.user.users);
  const [users, setUsers] = useState(reduxUsers);
  useEffect(() => {
    setUsers(reduxUsers);
  }, [reduxUsers]);

  return (
    <div className="flex flex-wrap pt-4 justify-center md:items-center w-screen h-screen">
      {users.map((user, index) => (
        <AppointmentCard key={user.userId} user={user} index={index} />
      ))}
    </div>
  );
}

export default MainContainer;
