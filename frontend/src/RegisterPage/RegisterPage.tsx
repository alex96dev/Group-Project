import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()

    function OnChangeEventHandlerUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function OnChangeEventHandlerPassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function Register(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/user/register", {username, password})
            .then(() => nav("/"))
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={Register}>
                <input type="text" id="username" placeholder="please enter your username" required={true}
                       onChange={OnChangeEventHandlerUsername}></input>
                <input type="password" id="password" placeholder="please enter your password" required={true}
                       onChange={OnChangeEventHandlerPassword}></input>
                <button>Register</button>
            </form>
        </div>
    )

}

export default RegisterPage;