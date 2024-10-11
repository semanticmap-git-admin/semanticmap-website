import Layout from '@/components/layout'
import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Users, BarChart, Brain, Smile, PieChart } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const features = [
    {
      icon: Mic,
      title: "Automatic Transcription",
      description: "Convert audio to text with high accuracy, saving time and ensuring precise data capture."
    },
    {
      icon: Users,
      title: "Speaker Identification",
      description: "Distinguish between different speakers in conversations for targeted insights."
    },
    {
      icon: BarChart,
      title: "Topic Analysis",
      description: "Identify key topics and themes discussed, revealing trends and patterns in your data."
    },
    {
      icon: Brain,
      title: "Opinion Summarization",
      description: "Summarize opinions and sentiments expressed, providing quick overviews of participant feedback."
    },
    {
      icon: Smile,
      title: "Mood Analysis",
      description: "Detect and analyze emotional tones in conversations for deeper understanding of responses."
    },
    {
      icon: PieChart,
      title: "Demographic Correlations",
      description: "Uncover insights based on demographic factors, enabling targeted strategy development."
    }
  ]

  return (
    <Layout>
      <div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">Revolutionize Your Market Research</h1>
            <p className="text-xl sm:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI to unlock unprecedented insights from your qualitative data.
            </p>
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="https://app.nextdataconsulting.com/">Get Started</Link>
            </Button>
          </div>

          {/* Main Feature */}
          <div className="mb-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl"></div>
            <Image
              src="/screenshots/main_page.png"
              alt="Semantic Map in Action"
              width={1200}
              height={600}
              className="rounded-3xl shadow-2xl mx-auto object-cover w-full h-full relative z-10"
            />
          </div>

          {/* Features Section */}
          <div className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Powerful AI-Driven Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800 bg-opacity-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Transform Your Research?</h2>
            <p className="text-xl mb-8 text-gray-300">Join the AI revolution and unlock unprecedented insights.</p>
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/request-demo">Request a Demo</Link>
            </Button>
          </div>

          {/* Testimonial Section */}
          {/* <div className="mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Trusted by Industry Leaders</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((_, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg">
                  <p className="text-gray-300 mb-4">
                    "Semantic Map has transformed our market research process. The insights we've gained have been invaluable for our product development."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Client"
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="text-white font-semibold">Jane Doe</p>
                      <p className="text-gray-400">CEO, Tech Innovators Inc.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}
