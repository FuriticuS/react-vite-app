import {PageTitle} from "../components/PageTitle/PageTitle.tsx";
import {PlayList} from "../components/PlayList/PlayList.tsx";
import {TrackDetails} from "../components/TrackDetails/TrackDetails.tsx";
import {useTrackSelection} from "../../bll/useTrackSelection.ts";

export default function MainPage() {
  const {selectedTrackId, handleTrackSelect} = useTrackSelection()

  return(
    <>
      <PageTitle title="Music Tracks"/>
      <PlayList selectedTrackId={selectedTrackId} onTrackSelect={handleTrackSelect}/>
      <TrackDetails selectedTrackId={selectedTrackId}/>
    </>
  )
}