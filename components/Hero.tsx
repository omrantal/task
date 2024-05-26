"use client"

import React from 'react'
import { motion } from "framer-motion"
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight"
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import Logo from './Logo'

const Hero = () => {
  return (
    <section id="home">
      <HeroHighlight containerClassName='h-screen' className='container w-full'>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex w-full flex-col xl:flex-row items-center justify-between gap-2 px-2 pr-0 xl:pr-20"
        >
          <div className='w-full'>
            <Logo />
          </div>

          <div className='text-lemongrass dark:text-white max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto'>
            <Highlight className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-codgray/40">
              iCAN Technical Solutions
            </Highlight>

            <TextGenerateEffect
              words={`For software and technical solutions and everything related to information and communications technology Managed by Engineer: Basil Tanbakji`}
              className="text-lg mt-4 px-2 md:text-xl lg:text-2xl"
            />
          </div>
        </motion.h1>
      </HeroHighlight>
    </section>
  )
}

export default Hero
