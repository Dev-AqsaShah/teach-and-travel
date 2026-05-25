import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail } from '@/lib/email'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  learningGoal: z.enum(['russian', 'english', 'both', 'other']),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)
    await sendContactEmail(data)
    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
