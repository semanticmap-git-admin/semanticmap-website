
import Layout from '@/components/layout'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

export default function Product() {
  const features = [
    {
      title: "Video/audio & Transcript",
      description: "Get a sectioned transcript of the uploaded audio/video, making it easy to navigate and analyze the content.",
      image: "/placeholder.svg"
    },
    {
      title: "Speakers Info",
      description: "Obtain detailed information about the speakers in the audio/video, including speaker identification and demographics.",
      image: "/screenshots/speaker_info.png"
    },
    {
      title: "Key Takeaways",
      description: "Quickly grasp the main points and insights from the audio/video content with our AI-generated key takeaways.",
      image: "/screenshots/key_takeaways.png"
    },
    {
      title: "Deep Analysis",
      description: "Get a comprehensive, detailed analysis of the audio/video content, including sentiment, tone, and context.",
      image: "/screenshots/deep_analysis.png"
    },
    {
      title: "Concepts",
      description: "Identify and explore the main topics and concepts discussed and captured in the audio/video.",
      image: "/screenshots/concepts.png"
    },
    {
      title: "Demographic Correlations",
      description: "Uncover insights based on demographic factors, allowing for more targeted analysis and decision-making.",
      image: "/screenshots/demographic_correlations.png"
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">Our Product</h1>
          <p className="text-xl mb-16 text-center text-gray-300 max-w-3xl mx-auto">
            Semantic Map is an advanced AI-powered market research tool designed to revolutionize how you analyze and interpret data.
          </p>
          
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-24`}>
              <div className="lg:w-1/2 flex justify-center w-full">
                <div className="w-full max-w-[500px] h-[300px] relative rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{feature.title}</h2>
                <p className="text-base sm:text-lg text-gray-300 mb-6">{feature.description}</p>
                <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-6 py-2 text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  <Link href="/request-demo">Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Experience Semantic Map?</h2>
            <p className="text-xl mb-8 text-gray-300">Discover how our AI-powered tool can transform your market research.</p>
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/request-demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}