import {type CSSProperties, useEffect, useState} from "react";
import type {Tracks} from "../../types/track.ts";

type Props = {
  selectedTrackId: string | null,
  onTrackSelect: (trackId: string) => void,
}

export function PlayList(props: Props) {
  // Загрузка всех треков
  const [tracks, setTracks] = useState<Tracks[] | null>(null)
  // Загрузка всех треков
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

  return (
    <div>
      {tracks === null && <span>loading...</span>}
      {tracks?.length === 0 && <span>Треков Нет</span>}
      <ul>
        {tracks?.map(track => {
          const style: CSSProperties = {}
          if (track.id === props.selectedTrackId) {
            style.border = '1px solid orange'
          }

          const handleSelect = () => {
            props.onTrackSelect(track.id)
          }

          return <li key={track.id} style={style}>
            <h5 onClick={handleSelect}>{track.attributes.title}</h5>
            <audio src={track.attributes.attachments[0].url} controls={true}></audio>
          </li>
        })}
      </ul>
    </div>
  )
}