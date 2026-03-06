import {type CSSProperties, useEffect, useState} from 'react'
import './App.css'

type TrackUser = {
  id: string,
  name: string
}

type TrackAttributes = {
  title: string,
  user: TrackUser,
  attachments: TrackAttachments[]
}

type TrackAttachments = {
  id: string,
  addedAt: string,
  updatedAt: string,
  version: number,
  url: string,
}

type Tracks = {
  id: string,
  attributes: TrackAttributes,
  attachments: TrackAttachments
}

export function App() {
  const [tracks, setTracks] = useState<Tracks[] | null>(null)
  const [selectedTrackId, setselectedTrackId] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks`, {
      headers: {
        'api-key': 'be114072-4e9d-4dfa-9bbb-23bfd7a4e3b1'
      }
    })
      .then(result => result.json())
      .then(json => {
        setTracks(json.data)
      })
  },[])

  return (
    <>
      <h1>Music Tracks</h1>
      {tracks === null && <span>loading...</span>}
      {tracks?.length === 0 && <span>Треков Нет</span>}
      <ul>
        {tracks?.map(track => {
          const style: CSSProperties = {}
          if(track.id === selectedTrackId) {
            style.border = '1px solid orange'
          }

          return <li key={track.id} style={style}>
            <h5 onClick={() => setselectedTrackId(track.id)}>{track.attributes.title}</h5>
            <audio src={track.attributes.attachments[0].url} controls={true}></audio>
          </li>
        })}
      </ul>
    </>
  )
}

