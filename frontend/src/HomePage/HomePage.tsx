import axios from "axios";
import {useState} from "react";

export default function HomePage() {
    const [name1, setName1] = useState("")
    const [image1, setImage1] = useState("")
    const [power1, setPower1] = useState("")
    const [name2, setName2] = useState("")
    const [image2, setImage2] = useState("")
    const [power2, setPower2] = useState("")

    function Generate2Cards() {
        axios({
            method: 'get',
            url: '/api',
        })
            .then((response) => {
                setName1((response.data[0].name));
                setImage1((response.data[0].sprites.front_default));
                setPower1((response.data[0].power));
                setName2((response.data[1].name));
                setImage2((response.data[1].sprites.front_default));
                setPower2((response.data[1].power));
            });
    }

    return (

        <div className={"Page"}>
            <h1>Homepage</h1>
            <div className={"Card1"}>
                <li>
                    <p className={"row1"}>name: {name1}</p>
                    <p className={"row2"}><img src={image1}/></p>
                    <p className={"row3"}>power: {power1}</p>
                </li>
            </div>
            <div className={"Card1"}>
                <li>
                    <p className={"row1"}>name: {name2}</p>
                    <p className={"row2"}><img src={image2}/></p>
                    <p className={"row3"}>power: {power2}</p>
                </li>
            </div>
            <button onClick={Generate2Cards}>Generate 2 Cards</button>
        </div>

    )

}