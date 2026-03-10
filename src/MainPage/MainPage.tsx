import {PageTitle} from "../components/PageTitle/PageTitle.tsx";
import {PlayList} from "../components/PlayList/PlayList.tsx";
import {TrackDetails} from "../components/TrackDetails/TrackDetails.tsx";
import {useState} from "react";

export default function MainPage() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  function handleTrackSelect(trackId: string){
    setSelectedTrackId(trackId)
  }

  return(
    <>
      <PageTitle title="Music Tracks"/>
      <PlayList selectedTrackId={selectedTrackId} onTrackSelect={handleTrackSelect}/>
      <TrackDetails selectedTrackId={selectedTrackId}/>
    </>
  )
}