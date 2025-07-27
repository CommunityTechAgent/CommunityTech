import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create email content
    const emailContent = `
New Project Specification Request

Service Type: ${formData.serviceType}
Estimated Total: $${formData.estimatedTotal?.toLocaleString()}
Timestamp: ${new Date(formData.timestamp).toLocaleString()}

Project Details:
- Project Name: ${formData.projectName || "Not specified"}
- Project Description: ${formData.projectDescription || "Not specified"}
- Start Date: ${formData.startDate || "Not specified"}
- Content Type: ${formData.contentType || "Not specified"}
- Event Date: ${formData.eventDate || "Not specified"}
- Event Time: ${formData.eventTime || "Not specified"}
- Location: ${formData.location || "Not specified"}
- Participants: ${formData.participants || "Not specified"}
- Special Requirements: ${formData.specialRequirements || "Not specified"}

Selected Add-ons: ${formData.selectedAddOns?.join(", ") || "None"}
Selected Team Member: ${formData.selectedTeamMember || "Not specified"}

${formData.serviceType === "media" ? `Media Duration: ${formData.mediaDuration} hours` : ""}
${formData.budgetRange ? `Budget Range: $${formData.budgetRange?.toLocaleString()}` : ""}

Contact Information:
User Agent: ${formData.userAgent}
Referrer: ${formData.referrer}
    `

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Project Specification Request</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Project Summary</h3>
          <p><strong>Service Type:</strong> ${formData.serviceType}</p>
          <p><strong>Estimated Total:</strong> $${formData.estimatedTotal?.toLocaleString()}</p>
          <p><strong>Submitted:</strong> ${new Date(formData.timestamp).toLocaleString()}</p>
        </div>

        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Project Details</h3>
          <p><strong>Project Name:</strong> ${formData.projectName || "Not specified"}</p>
          <p><strong>Description:</strong> ${formData.projectDescription || "Not specified"}</p>
          <p><strong>Start Date:</strong> ${formData.startDate || "Not specified"}</p>
          ${formData.contentType ? `<p><strong>Content Type:</strong> ${formData.contentType}</p>` : ""}
          ${formData.eventDate ? `<p><strong>Event Date:</strong> ${formData.eventDate}</p>` : ""}
          ${formData.eventTime ? `<p><strong>Event Time:</strong> ${formData.eventTime}</p>` : ""}
          ${formData.location ? `<p><strong>Location:</strong> ${formData.location}</p>` : ""}
          ${formData.participants ? `<p><strong>Participants:</strong> ${formData.participants}</p>` : ""}
          ${formData.specialRequirements ? `<p><strong>Special Requirements:</strong> ${formData.specialRequirements}</p>` : ""}
        </div>

        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Additional Details</h3>
          <p><strong>Selected Add-ons:</strong> ${formData.selectedAddOns?.join(", ") || "None"}</p>
          <p><strong>Preferred Team Member:</strong> ${formData.selectedTeamMember || "Not specified"}</p>
          ${formData.serviceType === "media" ? `<p><strong>Duration:</strong> ${formData.mediaDuration} hours</p>` : ""}
          ${formData.budgetRange ? `<p><strong>Budget Range:</strong> $${formData.budgetRange?.toLocaleString()}</p>` : ""}
        </div>

        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Next Steps</h3>
          <p>Please review this request and send an invoice within 24 hours for final confirmation.</p>
        </div>

        <hr style="margin: 30px 0;">
        <p style="color: #64748b; font-size: 14px;">
          This email was automatically generated from the Community Tech project specification form.
        </p>
      </div>
    `

    let emailSent = false
    let lastError = null

    // Try Resend first (if API key is available)
    if (process.env.RESEND_API_KEY && !emailSent) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "noreply@communitytechnet.com",
            to: ["services@communitytechnet.com"],
            subject: `New Project Specification - ${formData.serviceType}`,
            text: emailContent,
            html: htmlContent,
          }),
        })

        if (emailResponse.ok) {
          emailSent = true
        } else {
          const errorData = await emailResponse.text()
          lastError = `Resend API error: ${errorData}`
        }
      } catch (error) {
        lastError = `Resend error: ${error instanceof Error ? error.message : "Unknown error"}`
      }
    }

    // Try Nodemailer with Gmail SMTP as fallback
    if (!emailSent && process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      try {
        const nodemailer = require("nodemailer")

        const transporter = nodemailer.createTransporter({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, // Use App Password for Gmail
          },
        })

        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: "services@communitytechnet.com",
          subject: `New Project Specification - ${formData.serviceType}`,
          text: emailContent,
          html: htmlContent,
        })

        emailSent = true
      } catch (error) {
        lastError = `Gmail SMTP error: ${error instanceof Error ? error.message : "Unknown error"}`
      }
    }

    // Try a simple webhook/form service as final fallback
    if (!emailSent && process.env.WEBHOOK_URL) {
      try {
        const webhookResponse = await fetch(process.env.WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "services@communitytechnet.com",
            subject: `New Project Specification - ${formData.serviceType}`,
            message: emailContent,
            html: htmlContent,
            formData: formData,
          }),
        })

        if (webhookResponse.ok) {
          emailSent = true
        } else {
          lastError = `Webhook error: ${await webhookResponse.text()}`
        }
      } catch (error) {
        lastError = `Webhook error: ${error instanceof Error ? error.message : "Unknown error"}`
      }
    }

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully and email sent",
      })
    } else {
      // Log the form data even if email fails
      console.log("Form submission (email failed):", JSON.stringify(formData, null, 2))

      return NextResponse.json(
        {
          success: false,
          message: `Failed to send email. Last error: ${lastError}. Form data has been logged.`,
          debug: process.env.NODE_ENV === "development" ? { lastError, formData } : undefined,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error in form submission:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error during form submission",
        debug: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 },
    )
  }
}
