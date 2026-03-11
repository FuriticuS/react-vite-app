import {type CSSProperties} from "react";
import {useTracks} from "../../../bll/useTracks.ts";

type Props = {
  selectedTrackId: string | null,
  onTrackSelect: (trackId: string) => void,
}

export function PlayList(props: Props) {
  const {tracks} = useTracks()

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