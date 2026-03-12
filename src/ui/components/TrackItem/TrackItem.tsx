import type {CSSProperties} from "react";
import type {Tracks} from "../../../dal/types/track.ts";

type Props = {
  track: Tracks,
  isSelected: boolean,
  onTrackSelect: (trackId: string) => void,
}

export function TrackItem(props: Props) {
  const style: CSSProperties = {}
  if (props.isSelected) {
    style.border = '1px solid orange'
  }

  const handleSelect = () => {
    props.onTrackSelect(props.track.id)
  }

  return (
    <li style={style}>
      <h5 onClick={handleSelect}>{props.track.attributes.title}</h5>
      <audio src={props.track.attributes.attachments[0].url} controls={true}></audio>
    </li>
  )
}