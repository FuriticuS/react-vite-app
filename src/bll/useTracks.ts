import {useEffect, useState} from "react";
import type {Tracks} from "../dal/types/track.ts";
import {getTracks} from "../dal/api.ts";

export function useTracks() {
  const [tracks, setTracks] = useState<Tracks[] | null>(null)

  useEffect(() => {
    getTracks()
      .then(json => {
        setTracks(json.data)
      })
  }, [])

  return {
    tracks,
  }
}