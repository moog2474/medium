import React, { useState } from "react";
import "../style/News.css"
import news from './Data'
export default function News() {
    const [datas, setData] = useState(news)

    return (
        <section className="container pop">
            {datas.map((item, e) => {
                return (
                    <div className="flex1">
                        <div className="card">
                            <div className="col">
                                <img src={item.createdUser.img} />
                                <p>{item.createdUser.Name}</p>
                            </div>
                            <h3>{item.head}</h3>
                            <div className="col">
                                <p>{item.date}</p>
                                <p>{item.read}</p>
                                <p>category</p>
                            </div>
                        </div>
                        <img src={item.image} />
                    </div>
                )
            })}
        </section>)
}
