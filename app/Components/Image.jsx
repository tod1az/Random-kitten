'use client'
import { getCatImage } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { loadingCat } from "@/lib/consts"


export default function CatImage({ cat }) {
  const [ gif, setGif ] = useState(cat) 
  const [ loading, setLoading ] = useState(false)
  const handleClick = async () => {
    setLoading(true)
    await getCatImage()
      .then((cat) => {
        setGif(cat?.images?.original?.url)
        setLoading(false)
      })
  }
  return (
    <section className="p-10   gap-[3vw] flex flex-col justify-center " >
      {
        loading
        ? <Image className=" md:max-w-[50rem] md:max-h-[32rem] border-2 rounded-lg" src={loadingCat} width={480} height={480} alt={loadingCat}/>
        : <Image className=" md:max-w-[50rem] md:max-h-[32rem] border-2 rounded-lg" src={gif} width={700} height={400} alt={gif}/>
      }
      <button className="hover:bg-gray-700 hover:scale-110 active:translate-y-1 px-5 py-3 border-2 w-[10rem] place-self-center rounded-lg flex justify-center" onClick={handleClick}  >Meowfresh</button>
    </section>
  )
}