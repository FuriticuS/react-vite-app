import {useTrackDetails} from "../../../bll/useTrackDetails.ts";

type Props = {
  selectedTrackId: string | null;
}

export function TrackDetails(props: Props) {
  const {selectedTrack} = useTrackDetails(props.selectedTrackId)

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