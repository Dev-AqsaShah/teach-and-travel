import { Resend } from 'resend'

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
