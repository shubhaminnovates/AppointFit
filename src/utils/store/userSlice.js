const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    
  },
  reducers: {
    addNewUser: (state, action) => {
      const newUser = action.payload;
      
      state.users.push(newUser);
    },
    deleteUser: (state, action) => {
      const indexToDelete = action.payload;
      state.users = state.users.filter(
        (user, index) => index !== indexToDelete
      );
    },
    editUserDetails: (state, action) => {
      const { userIndex, userInfo } = action.payload;
    state.users = state.users.map((user, index) => {
      if (index === userIndex) {
        // Ensure appointments property is present
        return { ...user, ...userInfo, appointments: user.appointments || [] };
      }
      return user;
    });
  
    },
    appointmentDelete: (state, action) => {
      const { index, appointmentIndex } = action.payload;
      state.users[index].appointments = state.users[index].appointments.filter(
        (appointment, index) => index !== appointmentIndex
      );
    },
    addNewAppointment: (state, action) => {
      const { userIndex, newAppointment } = action.payload;
      // const user = state.users[index];
    
     
      // user.appointments = user.appointments || [];
    
    
      // user.appointments.push(newAppointment);
      state.users[userIndex].appointments = [
        ...state.users[userIndex].appointments,
        newAppointment,
      ]; 
    },
   
    
  },
});

export const {
  addNewUser,
  
  deleteUser,
  appointmentDelete,
  editUserDetails,
  addNewAppointment,
 
} = userSlice.actions;

export default userSlice.reducer;
