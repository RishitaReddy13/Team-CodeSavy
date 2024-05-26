import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomeLayout,Login,DashboardLayout,Register,Error,Landing,AddJob,Stats,Profile,AllJobs,Admin} from './Pages';

export const checkDefaultTheme = () => {
  const isDarkTheme =
    localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();


 const router= createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index: true,
        element:<Landing/>
      },
      {
        path:'login',
        element:<Login/>,
      },
      {
        path:'register',
        element:<Register/>,
        action:()=>{
          console.log("Hello There");
          return null;
        }
      },
      {
        path:'dashboardLayout',
        element:<DashboardLayout/>,
        children:[
          {
            index: AddJob,
            element: <AddJob/>,
          },
          {
            path: 'stats',
            element: <Stats/>,
          },
          {
            path: 'profile',
            element: <Profile/>,
          },
          {
            path: 'all-jobs',
            element: <AllJobs/>,
          },
          {
            path: 'admin',
            element: <Admin/>,
          }
        ]
      },
    ]
  },
  {
    path:'/error',
    element:<Error/>,
  }
]);

const App= ()=>{
    return(
      <div> 
      
       <RouterProvider router={router}/>
      </div>
     
    )
}

export default App;