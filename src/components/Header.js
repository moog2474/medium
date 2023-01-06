export default function Navigation({ navs }) {
    return (
        <header>
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
            <div className="col up">
                <div className="col-2 col7">
                    <h1>Stay curious.</h1>
                    <p>Discorer stories, thinking, and expertise from writers on any topic.</p>
                    <button>Start Reading</button>
                </div>
                <div className="col-2 col3">
                    <img src={require("../images/svg.png")} />
                </div>
            </div>
        </header>
    )
}