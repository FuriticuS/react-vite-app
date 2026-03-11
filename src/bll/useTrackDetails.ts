import {useEffect, useState} from "react";
import type {TrackDetailsResource} from "../dal/types/track.ts";
import {getTrackDetails} from "../dal/api.ts";

export function useTrackDetails(selectedTrackId: string | null) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  useEffect(() => {
    if (!selectedTrackId) return;

    getTrackDetails(selectedTrackId).then(json => {
      setSelectedTrack(json.data)
    })
  }, [selectedTrackId])

  return {
    selectedTrack,
  }
}