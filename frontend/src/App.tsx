import './App.css'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage.tsx";
import RegisterPage from "./RegisterPage/RegisterPage.tsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.tsx";
import {useState} from "react";
import HomePage from "./HomePage/HomePage.tsx";

/*function ShowPokemonDetails() {


}*/



function App() {
    const [user, setUser] = useState("");

    //const [currywurst, setCurrywurst] = useState("Startwert");






    return (
        <>
        <Routes>
            <Route path={"/"}
                   element={<LoginPage setUser={setUser}/>}>
            </Route>
            <Route path={"/register"}
                   element={<RegisterPage/>}>
            </Route>

            <Route element={<ProtectedRoute user={user}/>}>
                <Route path={"/Homepage"} element={<HomePage/>}>


                </Route>


            </Route>

        </Routes>
        </>
    )
}

export default App
