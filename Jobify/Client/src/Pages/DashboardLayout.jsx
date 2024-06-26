import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar,SmallSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";

const DashboardContext = createContext();



const DashboardLayout =()=>{

    // Temporary value for User

    const user ={name:"John"};
    const [showSidebar,setShowSidebar]= useState(false);
    const [isDarkTheme,setIsDarkTheme]= useState(checkDefaultTheme);
    
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
      };
      
    const toggleSidebar =()=>{
        setShowSidebar(!showSidebar);
    }
    
    const logoutUser= async ()=>{
        console.log("Logout User");
    }
    
    return(
        <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleDarkTheme,toggleSidebar,logoutUser}}>
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar/>
                <BigSideBar/>
           
            <div>
                <Navbar/>
                <div className="dashboard-page">
                  <Outlet/>
                </div>
            </div>
        </main>
        </Wrapper>
        </DashboardContext.Provider>
    )
}
export const useDashboardContext =()=> useContext(DashboardContext);
export default DashboardLayout;