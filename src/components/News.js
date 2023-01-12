import "../style/News.css"
export default function News({ data }) {
    return (
        <section className="container pop">
            {data.map((e) => {
                return (
                    <div className="flex1">
                        <div className="card">
                            <div className="col">
                                <img src={e.createdUser.img} />
                                <p>{e.createdUser.Name}</p>
                            </div>
                            <h3>{e.head}</h3>
                            <div className="col">
                                <p>{e.date}</p>
                                <p>{e.read}</p>
                                <p>category</p>
                            </div>
                        </div>
                        <img src={e.image} />
                    </div>
                )

            })}

        </section>
    )
}