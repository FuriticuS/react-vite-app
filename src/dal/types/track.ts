type TrackUser = {
  id: string,
  name: string
}

type TrackAttributes = {
  title: string,
  user: TrackUser,
  attachments: TrackAttachments[]
}

type TrackAttachments = {
  id: string,
  addedAt: string,
  updatedAt: string,
  version: number,
  url: string,
}

export type Tracks = {
  id: string,
  attributes: TrackAttributes,
  attachments: TrackAttachments
}

type TrackImagesMain = {
  url: string,
}

type TrackImages = {
  main: TrackImagesMain[]
}

type TrackDetailsAttributes = {
  title: string,
  attributes: string,
  lyrics: string,
  attachments: TrackAttachments,
  images: TrackImages
}

export type TrackDetailsResource = {
  id: string,
  attributes: TrackDetailsAttributes
}