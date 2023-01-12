export default function Cot({cots}){
    return(
        <div>
        {cots.map((b)=>{
            return(
                <a>{b.name}</a>
            )
        })}

        </div>
    )
}