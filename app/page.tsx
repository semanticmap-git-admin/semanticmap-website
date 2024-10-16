'use client';

import React from 'react';
import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, Users, BarChart, Brain, Smile, PieChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  console.log('Current language:', i18n.language);

  const features = [
    {
      icon: Mic,
      title: t('feature_automatic_transcription_title'),
      description: t('feature_automatic_transcription_description'),
    },
    {
      icon: Users,
      title: t('feature_speaker_identification_title'),
      description: t('feature_speaker_identification_description'),
    },
    {
      icon: BarChart,
      title: t('feature_topic_analysis_title'),
      description: t('feature_topic_analysis_description'),
    },
    {
      icon: Brain,
      title: t('feature_opinion_summarization_title'),
      description: t('feature_opinion_summarization_description'),
    },
    {
      icon: Smile,
      title: t('feature_mood_analysis_title'),
      description: t('feature_mood_analysis_description'),
    },
    {
      icon: PieChart,
      title: t('feature_demographic_correlations_title'),
      description: t('feature_demographic_correlations_description'),
    },
  ];

  return (
      <Layout>
        <div>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">{t('slogan')}</h1>
              <p className="text-xl sm:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
                {t('sub-slogan')}
              </p>
              <Button
                  asChild
                  className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="https://app.nextdataconsulting.com/">{t('hero_button')}</Link>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
                {t('features_title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{t('cta_title')}</h2>
              <p className="text-xl mb-8 text-gray-300">{t('cta_description')}</p>
              <Button
                  asChild
                  className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/request-demo">{t('cta_button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
  );
}
