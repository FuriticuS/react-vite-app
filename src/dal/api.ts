const apiKey = 'be114072-4e9d-4dfa-9bbb-23bfd7a4e3b1'
const headers = {
  'api-key': apiKey
}

export const getTrackDetails = (trackId: string) => {
  return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/` + trackId, {
    headers
  })
    .then(result => result.json())
}

export const getTracks = () => {
  return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5`, {
    headers
  })
    .then(result => result.json())
}