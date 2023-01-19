import React from "react"
import Sec from "./Sec"
import LoginModal from "./LoginModal"

export default function Navigation({

    onLogin,
    user,
    setUser,
    showModal,
    openModal

}) {
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
                            {nav.map((e, index) => {
                                <>
                                    <li key={index}>
                                        {e.id == 4 ? (
                                            user ? (
                                                user
                                            ) : (
                                                <span onClick={openModal}>
                                                    {e.name}
                                                </span>
                                            )
                                        ) : (
                                            <a href={e.link}>
                                                {e.name}
                                            </a>
                                        )}
                                    </li>
                                </>
                            })}
                            <button>Get started</button>
                            {user && (
                                <button className="warning" onClick={() => setUser("")}>Sign Out</button>
                            )}
                        </ul>
                    </nav>

                </div>

            </div>
            <Sec />
            <LoginModal
                showModal={showModal}
                onLogin={onLogin}
                setShowModal={openModal}
            />
        </header>
    )
}