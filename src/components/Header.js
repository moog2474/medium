import Sec from "./Sec"
export default function Navigation({ navs }) {
    return (
        <header className="Big">
            <div className="borderbottom">
                <div className="container">
                    <nav className="col">
                        <img src={require("../images/Vector.png")} alt="" />
                        <ul className="col">
                            {navs.map((e) => {
                                return (
                                    <li><a href="">{e.name}</a></li>
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