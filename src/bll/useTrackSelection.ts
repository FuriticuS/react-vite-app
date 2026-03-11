import {useState} from "react";

export function useTrackSelection() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  function handleTrackSelect(trackId: string) {
    setSelectedTrackId(trackId)
  }

  return {
    selectedTrackId,
    handleTrackSelect
  }
}