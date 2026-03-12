import {useTracks} from "../../../bll/useTracks.ts";
import {TrackItem} from "../TrackItem/TrackItem.tsx";
import styles from './PlayList.module.css'

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
      <ul className={styles.trackList}>
        {tracks?.map(track => {
          return <TrackItem
            key={track.id}
            track={track}
            isSelected={track.id === props.selectedTrackId}
            onTrackSelect={props.onTrackSelect}/>
        })}
      </ul>
    </div>
  )
}