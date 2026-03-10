import {useEffect, useState} from "react";
import type {TrackDetailsResource} from "../../types/track.ts";

type Props = {
  selectedTrackId: string | null;
}

export function TrackDetails(props: Props) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  useEffect(() => {
    if(!props.selectedTrackId) return;

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/` + props.selectedTrackId, {
      headers: {
        'api-key': 'be114072-4e9d-4dfa-9bbb-23bfd7a4e3b1'
      }
    })
      .then(result => result.json())
      .then(json => {
        setSelectedTrack(json.data)
      })
  }, [props.selectedTrackId])

  return (
    <div>
      {props.selectedTrackId && !selectedTrack && <span>Loading...</span>}
      {props.selectedTrackId && selectedTrack && selectedTrack.id !== props.selectedTrackId&& <span>Loading...</span>}
      {selectedTrack && selectedTrack.id === props.selectedTrackId && <div>
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
    </div>
  )
}