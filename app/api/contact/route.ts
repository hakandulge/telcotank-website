import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, company, topic, message } = body

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Send notification email to Telcotank
    await resend.emails.send({
      from: 'Telcotank Website <noreply@telcotank.com>',
      to: ['info@telcotank.com'],
      replyTo: email,
      subject: `New Strategy Discussion Request — ${firstName} ${lastName} from ${company || 'N/A'}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0A2540; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 32px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 14px; width: 140px;">Name</td>
                <td style="padding: 8px 0; color: #0A2540; font-size: 14px; font-weight: 600;">${firstName} ${lastName || ''}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #0A2540; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #2563EB;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Company</td>
                <td style="padding: 8px 0; color: #0A2540; font-size: 14px;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Topic</td>
                <td style="padding: 8px 0; color: #0A2540; font-size: 14px;">${topic || 'Not selected'}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
            <p style="color: #6B7280; font-size: 14px; margin-bottom: 8px;">Message:</p>
            <p style="color: #0A2540; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the person who submitted
    await resend.emails.send({
      from: 'Telcotank <noreply@telcotank.com>',
      to: [email],
      subject: 'We received your message — Telcotank',
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0A2540; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">Thank you, ${firstName}</h1>
          </div>
          <div style="padding: 32px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #4B5563; font-size: 15px; line-height: 1.7;">
              We received your message and our team will get back to you within 24 hours.
            </p>
            <p style="color: #4B5563; font-size: 15px; line-height: 1.7;">
              In the meantime, feel free to explore our
              <a href="https://www.telcotank.com/strategicintelligence" style="color: #2563EB;">Strategic Intelligence</a>
              frameworks or schedule a call directly via our
              <a href="https://meet.google.com/ntt-vpge-shj" style="color: #2563EB;">Google Meet link</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
            <p style="color: #9CA3AF; font-size: 13px;">
              Telcotank — Transformation Strategy & Consulting<br/>
              6800 Jericho Turnpike, Suite 120W, Syosset, NY 11791<br/>
              <a href="https://www.telcotank.com" style="color: #2563EB;">www.telcotank.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
