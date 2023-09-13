const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.NEXT_PUBLIC_API_KEY}&tag=kitten&rating=g`

export const getCatImage = async () => {
  const response = await fetch(url,{ cache: "no-store" })
  const { data } = await response.json()
  return data
}