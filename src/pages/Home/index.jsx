import { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import Comic from "../../components/Comic"

function Home() {
  const [latestComic, setLatestComic] = useState(null)
  useEffect(() => {
    if(!latestComic) {
      fetch('https://xkcd.now.sh/?comic=latest').then(response => response.json()).then(data => setLatestComic(data))
    }
  }, [latestComic])
  return (
    <>
      {latestComic ? <Comic comic={latestComic} /> : <Loader />}
    </>
  )
}

export default Home
