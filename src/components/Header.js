import React from "react"
import Sec from "./Sec"


export default function Navigation() {
    const nav = [
        { id: 1, link: "about", name: "Our story" },
        { id: 2, link: "membership", name: "Membership" },
        { id: 3, link: "write", name: "Write" },
        { id: 4, link: "#", name: "Sign in" },
    ]
    return (
        <header className="Big">
            <div className="borderbottom">
                <div className="container">
                    <nav className="col">
                        <img src={require("../images/Vector.png")} alt="" />
                        <ul className="col">
                            {nav.map((e) => {
                                return (
                                    <li>
                                        {e.name}
                                    </li>

                                )
                            })}
                            <button>Get started</button>
                        </ul>
                    </nav>

                </div>

            </div>
            <Sec />
        </header>
    )
}