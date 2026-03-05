import {useEffect, useState} from 'react'
import './App.css'

type Tracks = {
  id: number,
  title: string,
  url: string,
}

const tracksMusic = [
  {
    id: 1,
    title: 'One track',
    url: 'https://www.google.com/',
  }
]

export function App() {
  const [tracks, setTracks] = useState<Tracks[] | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setTracks(tracksMusic)
    }, 1000)
  },[])

  return (
    <>
      <h1>Music Tracks</h1>
      {tracks === null && <span>loading...</span>}
      {tracks?.length === 0 && <span>Треков Нет</span>}
      <ul>
        {tracks?.map(track => {
          return <li key={track.id}>
            <h5>{track.title}</h5>
            <audio src={track.url} controls={true}></audio>
          </li>
        })}
      </ul>
    </>
  )
}

