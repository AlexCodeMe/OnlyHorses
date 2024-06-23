import React from 'react'
import HeroSection from './hero-section'
import ModeToggle from '@/components/custom/mode-toggle'
import UnderlinedText from '@/components/text-decorators/underlined-text'
import TodaysHighlight from './todays-highlight'
import RotatedText from '@/components/text-decorators/rotated-text'
import MasonryGrid from './masonry-grid'
import Features from './features'
import Testimonials from './testimonials'
import Pricing from '@/components/custom/pricing'
import Team from './team'

export default function AuthScreen() {
  return (
    <div className='flex flex-col'>
      <HeroSection />

      <div className='mb-20 mt-12'>
        <div className='max-w-6xl  mx-auto px-4'>
          <p className='text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center'>
            Today&apos;s{" "}
            <UnderlinedText className='underline-offset-8 md:underline-offset-[12px] decoration-wavy'>
							Highlight
						</UnderlinedText>
            <span className='text-2xl md:text-4xl ml-1'>👇</span>
          </p>

          {/* Featured Post */}
          <div className='flex flex-col gap-10 mt-10'>
            <TodaysHighlight />

            <div className='mt-24'>
              <p className='text-2xl md:text-5xl text-center tracking-tighter font-bold'>
                Meet the <RotatedText>Stars</RotatedText> of Our Farm
              </p>

              <MasonryGrid />
            </div>

            <Features />
            <Testimonials />
            <Pricing />
            <Team />
          </div>
        </div>
      </div>
    </div>
  )
}
