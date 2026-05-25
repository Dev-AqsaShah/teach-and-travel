export interface GalleryImage {
  id: string
  src: string
  alt: string
  location: string
  region: 'europe' | 'asia' | 'americas' | 'middle-east' | 'all'
  width: number
  height: number
}
