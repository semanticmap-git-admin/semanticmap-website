

import Layout from '@/components/layout'
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Trial',
      price: 'Free',
      features: ['1 project', '500 minutes of audio', 'Core features'],
      cta: 'Contact Sales'
    },
    {
      name: 'Pay-as-you-go',
      price: '€0.15/minute audio',
      features: ['Unlimited projects', 'Unlimited minutes of audio', 'Basic support', 'All features'],
      cta: 'Contact Sales'
    },
    // {
    //   name: 'Pro',
    //   price: '$299',
    //   features: ['20 projects', '5000 minutes of audio', 'Priority support', 'Advanced features', 'API access'],
    //   cta: 'Start Free Trial'
    // },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited projects', 'Unlimited audio', '24/7 dedicated support', 'Custom features', 'On-premise option'],
      cta: 'Contact Sales'
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <h1 className="text-5xl font-bold mb-6 text-center text-white">Pricing Plans</h1>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto">
            Choose the perfect plan to elevate your market research with Semantic Map
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-700 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h2>
                  <p className="text-xl font-bold mb-2 text-white">{plan.price}</p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="mt-auto">
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-200 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  <a href="mailto:info@semanticmap.com">{plan.cta}</a>
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Not sure which plan is right for you?</h2>
            <p className="text-xl mb-8 text-gray-300">Our team is here to help you find the perfect solution for your needs.</p>
            <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <a href="mailto:info@semanticmap.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}