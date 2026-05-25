import { redirect } from 'next/navigation'

// Anna teaches Russian and Romanian — redirecting old English lessons URL
export default function EnglishLessonsRedirect() {
  redirect('/lessons/romanian')
}
