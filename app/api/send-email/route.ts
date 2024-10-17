import { NextResponse } from 'next/server';
import { SendMailClient } from "zeptomail";

const url = "api.zeptomail.eu/";
const token = "Zoho-enczapikey yA6KbHtZvQ/zkWgGQxE61ZmCp4xirKs+2X6/tSnqfcAiK9nkiqFr3xdpItDpdWeJ247T6KpVP9gXJ4657dBdfJlgM9RVKJTGTuv4P2uV48xh8ciEYNYkgp+gBbYTE6JOdBsgAioyRPht"
// const token = process.env.ZEPTOMAIL_API_KEY;
const client = new SendMailClient({url, token});

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    // Send email to info@semanticmap.com
    await client.sendMail({
      "from": {
        "address": "noreply@semanticmap.com",
        "name": "Semantic Map"
      },
      "to": [
        {
            "email_address": {
                "address": "info@semanticmap.com",
                "name": "Semantic Map Info"
            }
        },
        {
            "email_address": {
                "address": "philipp.sowik@semanticmap.com",
                "name": "Semantic Map Info"
            }
        },
        // {
        //     "email_address": {
        //         "address": "vipul.chauhan@semanticmap.com",
        //         "name": "Semantic Map Info"
        //     }
        // },
        // // {
        // //     "email_address": {
        // //         "address": "vaibav.grover@semanticmap.com",
        // //         "name": "Semantic Map Info"
        // //     }
        // // }
      ],
      "subject": "New Demo Request",
      "htmlbody": `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Submission Date:</strong> ${new Date().toISOString()}</p>
      `,
    });

    // Send auto-reply to the requester
    await client.sendMail({
      "from": {
        "address": "noreply@semanticmap.com",
        "name": "Semantic Map"
      },
      "to": [
        {
          "email_address": {
            "address": email,
            "name": name
          }
        }
      ],
      "subject": "Thank you for your interest in Semantic Map",
      "htmlbody": `
        <p>Hi ${name},</p>
        <p>Thank you for your interest. We got you!</p>
        <p>Our team will be shortly in touch.</p>
        <p>Best Regards,<br>Team SemanticMap</p>
      `,
    });

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}