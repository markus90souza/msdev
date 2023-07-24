'use client'

import { Avatar } from '@/components/avatar'
import { BtnProjects } from '@/components/btn-projects'
import { Particles } from '@/components/particles'

import { fadeIn } from '@/utils/animations'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      {/** CALL TO ACTION */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex container h-full mx-auto flex-col justify-center text-center xl:pt-40 xl:text-left">
          <motion.h1
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={fadeIn('down', 0.2)}
            className="h1"
          >
            Transforme Idéias <br /> em {''}
            <span className="text-accent">Realidade no digital</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={fadeIn('down', 0.3)}
            className="mx-auto max-w-sm xl:max-w-xl mb-10 xl:mx-0 xl:mb-16"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ad
            provident alias eos quasi, cumque pariatur beatae voluptatibus sunt
            vitae voluptatem sequi rerum nostrum molestias adipisci odio omnis,
            est saepe?
          </motion.p>
          <div className="relative flex justify-center xl:hidden">
            <BtnProjects />
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={fadeIn('down', 0.6)}
            className="hidden xl:flex"
          >
            <BtnProjects />
          </motion.div>
        </div>
      </div>
      {/** END CALL TO ACTION */}

      {/* iMAGEM DE CAPA */}

      <div className="w-[1200px] h-full right-0 bottom-0 absolute">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />

        <Particles />

        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={fadeIn('up', 0.5)}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}
export default Home
