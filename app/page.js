const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=cat&rating=g`
const getCatImage = async () => {
  const response = await fetch(url,{ cache: "no-store" })
  const { data } = await response.json()
  return data
}
import CatImage from "./Components/Image"

export default async function Home () {
  const image = await getCatImage()

  return (
    <main className="flex min-h-screen p-28  flex-col items-center">
      <h1 className="text-3xl font-mono whitespace-nowrap">Random Kitten!</h1>
      <CatImage cat={image?.images?.original?.url} />
    </main>
  )
}
