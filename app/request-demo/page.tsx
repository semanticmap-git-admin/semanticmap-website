"use client"

import { useState } from 'react'
import Layout from '@/components/layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Request Submitted Successfully!",
        description: "Our team will get in touch with you shortly.",
      })

      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">Request a Demo</h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Experience the power of Semantic Map firsthand. Fill out the form below and we'll be in touch shortly.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
              <Input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
                required 
                className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <Textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                required 
                className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div className="text-sm text-gray-400 mb-4">
              By submitting your information to our website you agree to the terms outlined in our{' '}
              <a href="/data_privacy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </a>.
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-gray-900 hover:bg-gray-200 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </Layout>
  )
}


// "use client"

// import { useState } from 'react'
// import Layout from '@/components/layout'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/hooks/use-toast"
// import { Toaster } from "@/components/ui/toaster"
// import { SendMailClient } from "zeptomail"

// const url = "api.zeptomail.eu/";
// const token = "Zoho-enczapikey yA6KbHtZvQ/zkWgGQxE61ZmCp4xirKs+2X6/tSnqfcAiK9nkiqFr3xdpItDpdWeJ247T6KpVP9gXJ4657dBdfJlgM9RVKJTGTuv4P2uV48xh8ciEYNYkgp+gBbYTE6JOdBsgAioyRPht";
// const client = new SendMailClient({url, token});

// export default function RequestDemo() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       // Prepare the data for submission
//       const submissionData = {
//         ...formData,
//         submissionDate: new Date().toISOString()
//       }

//       // Send email to info@semanticmap.com
//       await client.sendMail({
//         "from": {
//           "address": "noreply@semanticmap.com",
//           "name": "Semantic Map"
//         },
//         "to": [
//           {
//             "email_address": {
//               "address": "info@semanticmap.com",
//               "name": "Semantic Map Info"
//             }
//           }
//         ],
//         "subject": "New Demo Request",
//         "htmlbody": `
//           <h2>New Demo Request</h2>
//           <p><strong>Name:</strong> ${formData.name}</p>
//           <p><strong>Email:</strong> ${formData.email}</p>
//           <p><strong>Company:</strong> ${formData.company}</p>
//           <p><strong>Message:</strong> ${formData.message}</p>
//           <p><strong>Submission Date:</strong> ${submissionData.submissionDate}</p>
//         `,
//       });

//       // Send auto-reply to the requester
//       await client.sendMail({
//         "from": {
//           "address": "noreply@semanticmap.com",
//           "name": "Semantic Map"
//         },
//         "to": [
//           {
//             "email_address": {
//               "address": formData.email,
//               "name": formData.name
//             }
//           }
//         ],
//         "subject": "Thank you for your interest in Semantic Map",
//         "htmlbody": `
//           <p>Hi ${formData.name},</p>
//           <p>Thank you for your interest. We got you!</p>
//           <p>Our team will be shortly in touch.</p>
//           <p>Best Regards,<br>Team SemanticMap</p>
//         `,
//       });

//       // Show success message
//       toast({
//         title: "Request Submitted Successfully!",
//         description: "Our team will get in touch with you shortly.",
//       })

//       // Reset form
//       setFormData({ name: '', email: '', company: '', message: '' })
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Show error message
//       toast({
//         title: "Submission Failed",
//         description: "There was an error submitting your request. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <Layout>
//       <div className="min-h-screen">
//         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">Request a Demo</h1>
//           <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
//             Experience the power of Semantic Map firsthand. Fill out the form below and we'll be in touch shortly.
//           </p>
//           <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-xl">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
//               <Input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 value={formData.name}
//                 onChange={handleChange}
//                 required 
//                 className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//               <Input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 value={formData.email}
//                 onChange={handleChange}
//                 required 
//                 className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
//               />
//             </div>
//             <div>
//               <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
//               <Input 
//                 type="text" 
//                 id="company" 
//                 name="company" 
//                 value={formData.company}
//                 onChange={handleChange}
//                 required 
//                 className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
//               <Textarea 
//                 id="message" 
//                 name="message" 
//                 rows={4} 
//                 value={formData.message}
//                 onChange={handleChange}
//                 required 
//                 className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
//               />
//             </div>
//             <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
//             <Textarea 
//               id="message" 
//               name="message" 
//               rows={4} 
//               value={formData.message}
//               onChange={handleChange}
//               required 
//               className="bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
//             />
//             </div>
//             <div className="text-sm text-gray-400 mb-4">
//               By submitting your information to our website you agree to the terms outlined in our{' '}
//               <a href="/data_privacy" className="text-blue-400 hover:text-blue-300 underline">
//                 Privacy Policy
//               </a>.
//             </div>
//             <Button 
//               type="submit" 
//               disabled={isSubmitting}
//               className="w-full bg-white text-gray-900 hover:bg-gray-200 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Request'}
//             </Button>
//           </form>
//         </div>
//       </div>
//       <Toaster />
//     </Layout>
//   )
// }