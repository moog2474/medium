export default function ({ cats }) {
    return (
        <div className="cat">
            <h2>Discover more of what matters to you</h2>
            {cats.map((e) => {
                return (
                    <span>{e.name}</span>
                )
            })}
        </div>
    )
}