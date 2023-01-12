export default function ({cats}){
    return(
            <div>
            {cats.map((e)=>{
                return(
                <span>{e.name}</span>
                )
                    
                })}
            </div>

    )
}