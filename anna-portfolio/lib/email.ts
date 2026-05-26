import { Resend } from 'resend'
import { LanguageTip } from '@/data/languageTips'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail({
  name,
  email,
  country,
  learningGoal,
  message,
}: {
  name: string
  email: string
  country: string
  learningGoal: string
  message: string
}) {
  return resend.emails.send({
    from: 'Contact Form <contact@annavolkova.com>',
    to: process.env.CONTACT_EMAIL_TO || 'anna@annavolkova.com',
    subject: `New inquiry from ${name} — ${learningGoal}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Wants to learn:</strong> ${learningGoal}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })
}

export async function sendWelcomeTip(toEmail: string, tip: LanguageTip) {
  return resend.emails.send({
    from: 'Anna Gladysheva <onboarding@resend.dev>',
    to: toEmail,
    subject: `${tip.emoji} Your Language Tip: ${tip.title}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
        <div style="background: #1A1A2E; padding: 32px 40px; text-align: center;">
          <p style="color: #C9A84C; font-size: 13px; letter-spacing: 2px; margin: 0 0 8px; text-transform: uppercase;">Anna Gladysheva</p>
          <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: normal;">Your Free Language Tip</h1>
        </div>
        <div style="padding: 40px;">
          <p style="color: #C9A84C; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 8px;">${tip.language} Tip ${tip.emoji}</p>
          <h2 style="color: #1A1A2E; font-size: 20px; margin: 0 0 20px; line-height: 1.4;">${tip.title}</h2>
          <p style="color: #555; font-size: 15px; line-height: 1.8; margin: 0 0 32px;">${tip.body}</p>
          <div style="border-top: 1px solid #eee; padding-top: 24px; text-align: center;">
            <p style="color: #999; font-size: 13px; margin: 0 0 16px;">Ready to go deeper? Book a private lesson with Anna.</p>
            <a href="https://annagladysheva.com/book" style="display: inline-block; background: #C9A84C; color: #1A1A2E; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: bold;">Book a Lesson</a>
          </div>
        </div>
        <div style="background: #f8f8f5; padding: 20px 40px; text-align: center;">
          <p style="color: #aaa; font-size: 12px; margin: 0;">You subscribed at annagladysheva.com · <a href="https://annagladysheva.com" style="color: #aaa;">Unsubscribe</a></p>
        </div>
      </div>
    `,
  })
}
