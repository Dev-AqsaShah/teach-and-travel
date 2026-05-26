import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendWelcomeTip } from '@/lib/email'
import { languageTips } from '@/data/languageTips'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: result.error.issues[0].message }, { status: 400 })
    }

    const tip = languageTips[Math.floor(Math.random() * languageTips.length)]
    await sendWelcomeTip(result.data.email, tip)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
