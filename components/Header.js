import Image from "next/image"
import Link from "next/link"
export default function Header() {
  return (
    <nav className="flex justify-between mx-4 text-white font-poppins border-b-2 border-green-500">
      <div className="nav-logo p-4 cursor-pointer hover:text-green-500">
        <Link href='/'>
        <h1>Oluwasegun</h1>
        </Link>
       </div>
      <div className="nav-item cursor-pointer">
        <ul className="flex justify-between">
          <li className="p-4 hover:bg-green-500"><Link href='/'> Home</Link></li>
          <li className="p-4 hover:bg-green-500"><Link href='/about'>About</Link></li>
          <li className="p-4 hover:bg-green-500"><Link href='/project'>Project</Link></li>
          <li className="p-4 hover:bg-green-500"><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
