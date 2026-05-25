export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: 'language-learning' | 'travel' | 'culture' | 'teaching-tips'
  publishedAt: string
  readingTime: number
  featured: boolean
  content?: string
}
