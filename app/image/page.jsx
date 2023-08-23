'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CatImage({ cat }) {
  const router = useRouter()
  return (
    <main className="p-10  flex gap-[3vw] items-center justify-center  xs:flex-col" >
      <Image className="max-h-[100vh] border-2 rounded-3xl" src={cat} width={700} height={400} alt={cat} />
      <button className="hover:bg-cyan-600 p-10 border-2 rounded-3xl flex items-center h-2" onClick={()=>router.refresh() }  >Meowfresh</button>
    </main>
  )
}