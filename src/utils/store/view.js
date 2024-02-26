import { createSlice } from "@reduxjs/toolkit";

const view = createSlice({
  name: "view",
  initialState: {
    appointmentFormView: false,
    calendarView: false,
  },
  reducers: {
    toggleCalendarView: (state) => {
      state.calendarView = !state.calendarView;
      
    },
    toggleAppointmentForm: (state) => {
      state.appointmentFormView = !state.appointmentFormView;
    },
  },
});

export const {
    toggleCalendarView,
    toggleAppointmentForm
   
  } = view.actions;
  
  export default view.reducer;