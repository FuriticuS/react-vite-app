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

type TrackImagesMain = {
  url: string,
}

type TrackImages = {
  main: TrackImagesMain[]
}

type TrackDetailsAttributes = {
  title: string,
  attributes: string,
  lyrics: string,
  attachments: TrackAttachments,
  images: TrackImages
}

type TrackDetailsResource = {
  id: string,
  attributes: TrackDetailsAttributes
}

export function App() {
  const [tracks, setTracks] = useState<Tracks[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  useEffect(() => {
    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5`, {
      headers: {
        'api-key': 'be114072-4e9d-4dfa-9bbb-23bfd7a4e3b1'
      }
    })
      .then(result => result.json())
      .then(json => {
        setTracks(json.data)
      })
  }, [])

  function handleSelectTrack(trackId: string) {
    setSelectedTrackId(trackId)

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/` + trackId, {
      headers: {
        'api-key': 'be114072-4e9d-4dfa-9bbb-23bfd7a4e3b1'
      }
    })
      .then(result => result.json())
      .then(json => {
        setSelectedTrack(json.data)
      })
  }

  return (
    <>
      <h1>Music Tracks</h1>
      {tracks === null && <span>loading...</span>}
      {tracks?.length === 0 && <span>Треков Нет</span>}
      <ul>
        {tracks?.map(track => {
          const style: CSSProperties = {}
          if (track.id === selectedTrackId) {
            style.border = '1px solid orange'
          }

          const handleSelect = () => {
            handleSelectTrack(track.id)
          }

          return <li key={track.id} style={style}>
            <h5 onClick={handleSelect}>{track.attributes.title}</h5>
            <audio src={track.attributes.attachments[0].url} controls={true}></audio>
          </li>
        })}
      </ul>
      <hr/>
      {selectedTrackId && !selectedTrack && <span>Loading...</span>}
      {selectedTrackId && selectedTrack && selectedTrack.id !== selectedTrackId&& <span>Loading...</span>}
      {selectedTrack && selectedTrack.id === selectedTrackId && <div>
        <h3>Track Details for {selectedTrack.attributes.title}</h3>
        {selectedTrack?.attributes?.images?.main?.[0]?.url?.trim()
          ? (
            <img
              src={selectedTrack.attributes.images.main[0].url}
              alt={selectedTrack?.attributes?.title ?? "Обложка"}
            />
          )
          : "Нет картинки"
        }
        <p>{selectedTrack.attributes.lyrics}</p>
      </div>}
    </>
  )
}

