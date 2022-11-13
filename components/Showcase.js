import Image from "next/image"
import {myFace} from '../public/myface.jpg'
import Link from "next/link"
export default function Showcase() {
  return (
    <div className=" flex justify-between my-8 mx-64 font-poppins text-white">
      <div className="my-face ">
        <Image alt="my-face" src={require('../public/myface.jpg')} className="rounded-full ml-4 h-60 w-60"/>
      </div>
       <div className="flex flex-col">
         <h1 className="text-5xl font-bold mx-4 my-4">Aje Oluwasegun</h1>
         <p className="text-l font-bold px-4">Software Developer at <span className="text-green-500">Acealth</span>,Blockchain Developer at <span className="text-green-500">Genmon</span>New World</p>
       </div>
    </div>
  )
}
