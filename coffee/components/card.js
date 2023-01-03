import Image from "next/image"
import Link from "next/link"


const Card = (props)=> {
    
    return (
        <Link href={props.href} className=" bg-slate-50/60 
        hover:bg-slate-50/90 hover:ring-[0.3px] hover:shadow-xl w-[300px] flex flex-col mt-5 p-3 rounded-lg">
            <h2 className=" text-xl font-bold mb-2 mx-2">{props.name}</h2>
            <Image src={props.imgUrl} width={260}
             height={160} className="rounded-xl mx-auto m-3"/>
        </Link>
    )
}

export default Card