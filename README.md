**AppointFit🚀🚀**

**Preview Link** -: https://appointfit.netlify.app/

**Basic Layout**
{- Header
  - Calender button
  - Add New Appointment

- Main Container
  - Persons Details
}

- Add New Appointment Button
  - It will render a form with the required fields.

- Add new appointement component
  - this component will have a form with all required fields in which we will fill our appointement details which is at last dispatched to the store.
  
- Main Container component
  - This container will consist of all the appointment cards.

- Appointment Card component
  - In this component appointment card will be there.
  - In this Change and delete button is present
    - Delete button will delete that particular entry of appointment.
    - Change button will give you the input to edit your first name,last name and location.
       - In this we are not allowing user to edit the appointments as of we are giving the user to add and delete a appointmnet.
    - add button at appointment field will add a new appointment in a particular card.
    - delete button will delete that a particular appointment.

- Calendar Component
  - In my calendar component I ahve taken refrence of whole component from internet and binded it with my data and displayed it.
  - In this compoonent when we clicked  on any date of the calendar it wil show the given appointment of that date.

  **Working of Redux Store**
  - In this from add New Appointment component we have pushed the data with full requirments and with multiple date and time.

  - we had made deleteUser,editUser,deleteAppointment,addAppointment reducers to apply their work.

**Now here we have to give a unique id to every user so we are using react-uuid package fo generating it.**


- Now we basically use redux store to dispatch action of adding new appointment and adding new user and deleting and editing it.

- Now how the redux is working is that when will I press Add New button it will only show a new component in which we have to fill every needed information and when we enter confirmation button of it that it will dispatch a action of adding a new user.

- Now every user will be given a userID so that my store will be known that when a edit action is dispatched which user we have to edit. 

- So to browse between different pages we are using react router dom.
