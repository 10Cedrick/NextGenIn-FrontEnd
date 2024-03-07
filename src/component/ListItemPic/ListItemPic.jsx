import { MdFacebook } from "react-icons/md";

export default function ListItemPic({item, type}) {
  return (
    <div className='flex flex-col space-y-4 items-center mr-8'>
        <div className={`rounded-full ${type === "large" ? "w-52": "w-16"}`}>
            <img src={item.avatar} alt=""/>
        </div>
        <div className='flex flex-col items-center'>
            <p className="flex flex-row items-center space-x-2 text-[14px]"><MdFacebook /> <a href={item.lienFacebook}>{item.name}</a></p>
        </div>
    </div>
  )
}
