import axios from "axios";
import {useState} from "react";

const MAX_POINTS=5;

export default function HomePage() {
    const [name1, setName1] = useState("")
    const [image1, setImage1] = useState("")
    const [power1, setPower1] = useState("")
    const [name2, setName2] = useState("")
    const [image2, setImage2] = useState("")
    const [power2, setPower2] = useState("")
    const [result, setResult] = useState("")
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)

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

    function Fight() {
        if(MAX_POINTS!=score1 && MAX_POINTS!=score2) {
            if (power1 > power2) {
                setResult("The Winner ist " + name1);
                setScore1(score1 + 1);
            } else {
                setResult("The Winner ist " + name2);
                setScore2(score2 + 1);
            }
        }
    }

    function Reset() {
        setScore1(0)
        setScore2(0)
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
            <div className={"result"}>
                <p>Result: {result}</p>
            </div>
            <div className={"score_1"}>
                <p>Score Player 1: {score1}</p>
            </div>
            <div className={"score_2"}>
                <p>Score Player 2: {score2}</p>
            </div>
            <button onClick={Generate2Cards}>Generate 2 Cards</button>
            <button onClick={Fight}>Fight</button>
            <button onClick={Reset}>Reset Score</button>
            <p>{score1==MAX_POINTS || score2==MAX_POINTS ? "Game Over": ""}</p>
        </div>

    )

}