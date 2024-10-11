import Layout from '@/components/layout'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function UseCases() {
  const cases = [
    {
      title: "Enterprise Market Research",
      description: "Streamline large-scale market research operations with our AI-powered tools. Analyze vast amounts of data quickly and efficiently, uncovering valuable insights that drive strategic decisions.",
      benefits: [
        "Process thousands of survey responses in minutes",
        "Identify emerging trends and patterns across diverse datasets",
        "Generate comprehensive reports with actionable insights"
      ]
    },
    {
      title: "Startup Product Validation",
      description: "Quickly validate your product ideas with in-depth consumer insights. Understand your target audience better and make data-driven decisions to refine your product offerings.",
      benefits: [
        "Analyze customer feedback from multiple channels",
        "Identify key features that resonate with your target market",
        "Prioritize development efforts based on customer needs"
      ]
    },
    {
      title: "Academic Research",
      description: "Enhance qualitative research projects with advanced AI analysis. Process large volumes of interview data efficiently, identifying patterns and themes that might be missed through manual analysis.",
      benefits: [
        "Transcribe and analyze hours of interview recordings",
        "Identify recurring themes and concepts across multiple studies",
        "Generate visual representations of complex data relationships"
      ]
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">Use Cases</h1>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto">
            Discover how Semantic Map transforms market research across various industries and scenarios.
          </p>
          
          {cases.map((case_, index) => (
            <section key={index} className="mb-24">
              <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">{case_.title}</h2>
                <p className="text-base sm:text-lg text-gray-300 mb-6">{case_.description}</p>
                <h3 className="text-xl font-semibold mb-3 text-white">Key Benefits:</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6">
                  {case_.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="mb-2">{benefit}</li>
                  ))}
                </ul>
                {/* <Button asChild variant="secondary" className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 text-base font-semibold transition-all duration-300 ease-in-out">
                  <Link href={`/use-cases/${case_.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
            </section>
          ))}
          
          <section className="mt-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Endless Possibilities</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              These are just a few examples of how Semantic Map can revolutionize your research process. Our versatile platform adapts to countless industries and use cases.
            </p>
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="/request-demo">
                Explore More Use Cases
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </Layout>
  )
}