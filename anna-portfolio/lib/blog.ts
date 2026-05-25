import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types/blog'
import { estimateReadingTime } from './utils'

const contentDir = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return []
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(contentDir, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        coverImage: data.coverImage || '/images/blog-placeholder.jpg',
        category: data.category,
        publishedAt: data.publishedAt,
        readingTime: estimateReadingTime(content),
        featured: data.featured || false,
        content,
      } as BlogPost
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    coverImage: data.coverImage || '/images/blog-placeholder.jpg',
    category: data.category,
    publishedAt: data.publishedAt,
    readingTime: estimateReadingTime(content),
    featured: data.featured || false,
    content,
  }
}
