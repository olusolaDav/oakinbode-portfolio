  import { type NextRequest, NextResponse } from "next/server"

  export async function POST(request: NextRequest) {
    try {
      const { name, email, message } = await request.json()

      // Validate the input
      if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 })
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
      }

      // Using Brevo (Sendinblue) API for sending emails
      const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY || "", // You'll need to set this in your environment variables
        },
        body: JSON.stringify({
          sender: {
            name: "Portfolio Contact Form",
            email: "info@alotacademy.com", // Replace with your verified sender email
          },
          to: [
            {
              email: "alotacademy@gmail.com", // Replace with your actual email
              name: "Alot Academy: Alot Digital Solutions",
            },
          ],
          subject: `New Contact Form Message from ${name}`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #06b6d4;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
              <p style="color: #666; font-size: 12px;">
                This message was sent from your portfolio contact form.
              </p>
            </div>
          `,
          textContent: `
            New Contact Form Submission
            
            Name: ${name}
            Email: ${email}
            Message: ${message}
            
            This message was sent from your portfolio contact form.
          `,
        }),
      })

      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json()
        console.error("Brevo API Error:", errorData)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }

      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    } catch (error) {
      console.error("Contact API Error:", error)
      return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
  }
