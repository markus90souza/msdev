import { motion } from 'framer-motion'

const animateVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}

export const Transitions = () => {
  return (
    <>
      <motion.div
        className="fixed right-full top-0 bottom-0 h-screen w-screen z-30 bg-[#2E2257]"
        variants={animateVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />

      <motion.div
        className="fixed right-full top-0 bottom-0 h-screen w-screen z-20 bg-[#3B2D71]"
        variants={animateVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      />

      <motion.div
        className="fixed right-full top-0 bottom-0 h-screen w-screen z-10 bg-[#4B3792]"
        variants={animateVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      />
    </>
  )
}
