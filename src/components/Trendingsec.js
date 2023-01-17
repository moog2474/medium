import "../style/Tredingsec.css"
export default function Trendingsec({ datas }) {
    return (
        <section className="container br">
            <div className="col">
                <img src={require("../images/log.png")} alt="" />
                <p className="bold">TRENDING ON MEDIUM</p>
            </div>
            <div className="row-2 col-wrap">

                {datas.map((e, index) => {
                    if (e.isTrending) {
                        return (
                            <div className="flex">
                                <h3>0{index + 1}</h3>
                                <div className="card">
                                    <div className="col">
                                        <img src={e.createdUser.img} />
                                        <p>{e.createdUser.Name}</p>
                                    </div>
                                    <h3>{e.head}</h3>
                                    <div className="col">
                                        <p>{e.date}</p>
                                        <p>{e.read}</p>
                                    </div>
                                </div>
                            </div>

                        )

                    }

                })}
            </div>
        </section>
    )
}