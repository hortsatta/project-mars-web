export const sectionMotionAnimation = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { duration: 0.4, ease: 'easeIn' },
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '0px 0px -400px 0px' },
};
