import AddUser from './Components/AddUser'
import Edituser from './Components/EditUser'
import HomePage from './Components/HomePage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/AddUser",
    element:<AddUser/>
  },
  {
    path:"/EditUser",
    element:<Edituser/>
  },
  {
    path:"*",
    element:<div>page not found</div>
  }
]);
return <RouterProvider router={router}/>
}
export default App;