
export default function CardList ({newsList}) {
    return(
        <div>
        {newsList.map((e) => {

            return(
            <div className="col-4">
                <div className="d-flex justify-content-start">
                    <img src={e.createdUser.img}/>
                    <p>{e.createdUser.Name}</p>
                </div>
                <h3>{e.createdUser.head}</h3>
                <div className="d-flex">
                    <p>{e.date}</p>
                    <p>{e.read}</p>
                </div>
            </div>
            )
        })}
    
        </div>
    )
}