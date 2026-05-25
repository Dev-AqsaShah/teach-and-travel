export interface Resource {
  id: string
  title: string
  description: string
  format: 'PDF' | 'MP3' | 'Video'
  fileName: string
  thumbnail: string
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Russian Alphabet Guide',
    description: 'A complete illustrated guide to the Cyrillic alphabet with pronunciation tips and practice exercises.',
    format: 'PDF',
    fileName: 'russian-alphabet-guide.pdf',
    thumbnail: '/images/resource-alphabet.jpg',
  },
  {
    id: '2',
    title: '100 Essential Russian Phrases for Travelers',
    description: 'The most useful Russian phrases for travel, dining, shopping, and emergencies.',
    format: 'PDF',
    fileName: 'russian-phrases-travelers.pdf',
    thumbnail: '/images/resource-phrases.jpg',
  },
  {
    id: '3',
    title: 'Top 10 Mistakes English Learners Make',
    description: 'Common grammar and vocabulary errors Russian speakers make in English — with clear corrections.',
    format: 'PDF',
    fileName: 'english-common-mistakes.pdf',
    thumbnail: '/images/resource-mistakes.jpg',
  },
  {
    id: '4',
    title: 'Russian Pronunciation Audio Guide',
    description: 'Audio examples of all Russian vowels, consonants, and stress patterns with native speaker recordings.',
    format: 'MP3',
    fileName: 'russian-pronunciation-guide.mp3',
    thumbnail: '/images/resource-audio.jpg',
  },
]
