import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Landing () {
    return (
        <div className="backgroundLandingPage">
            <h1 className="title">Proyecto Individual Henry Countries</h1>
            <div className="startBtn">
                <Link className="textDecoration" to={"/home"}>Start</Link>
            </div>
            <h3 className="subtitle">Powered by Andrés Medina</h3>
        </div>
    )
}