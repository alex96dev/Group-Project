import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

type Props = {
    setUser: (user: string) => void
}

function LoginPage(LoginPageProbs: Props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()

    function OnChangeEventHandlerUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function OnChangeEventHandlerPassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function Login(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/user/login", undefined, {auth: {username, password}})
            .then((response)=>LoginPageProbs.setUser(response.data))
            .then(() => nav("/Homepage"))
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={Login}>
                <input type="text" id="username" placeholder="please enter your username" required={true}
                       onChange={OnChangeEventHandlerUsername}></input>
                <input type="password" id="password" placeholder="please enter your password" required={true}
                       onChange={OnChangeEventHandlerPassword}></input>
                <button>Login</button>
                <Link to={"/register"}>Not registered yet? Click here!</Link>
            </form>
        </div>
    )

}

export default LoginPage;