import Footer from "./Components/Footer"
import CatImage from "./Components/Image"
import { getCatImage } from "@/lib/utils"

export default async function Home () {
  const image = await getCatImage()

  return (
    <main className="flex min-h-screen p-28  flex-col items-center">
      <h1 className="md:text-5xl text-3xl font-mono whitespace-nowrap">Random Kitten!</h1>
      <CatImage cat={image?.images?.original?.url} />
      <Footer/>
    </main>
  )
}
