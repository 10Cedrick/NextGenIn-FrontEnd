import { MdArrowForward } from "react-icons/md";

export default function ClubOverview({item}) {
  return (
    <div className='flex flex-col space-y-2 items-center'>
        <div className='flex flex-col h-[200px] w-full bg-slate-200 mb-8'>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="pl-2">
            <h1>{item.nomClub}</h1>
            <p className="text-[14px] ">{item.description}</p>
        </div>
        <div>
            <p className="hover:underline"><a href={"/club/" + item.id + ""} className="flex flex-row items-center space-x-2 text-[14px] mt-8 "> <span>Voir page</span> <MdArrowForward /> </a></p>
        </div>
    </div>
  )
}
