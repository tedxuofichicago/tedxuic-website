import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    // Get form data from the request
    const { name, email, message } = await req.json()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "From website! <onboarding@resend.dev>", // You can change this to your verified domain later
      to: ["tedxuofichicago@gmail.com"], // Replace with your actual email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      // You can also use HTML for a nicer formatted email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      data,
    })
  } catch (error) {
    console.error("Error in contact API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

