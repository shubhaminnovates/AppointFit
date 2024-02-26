import Calendar from "./component/calendar/Calendar.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewAppointment from "./component/AddNewAppointment";

import Body from "./component/Body";
import appStore from "./utils/store/appStore";

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<Body/>,
  },
  {
    path:"/addNewAppointment",
    element:<AddNewAppointment/> 
},
{
  path:"/calendar",
  element:<Calendar/> 
}
])

export default App
