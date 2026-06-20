import { motion, useScroll, useSpring } from 'motion/react'
import { SPRING_SNAP } from '../lib/anim'
import styles from './ScrollProgress.module.css'

/**
 * A thin sky bar pinned to the top edge that fills as you scroll the page.
 * It's a progress visualization, so it tracks scroll position directly rather
 * than easing on its own; a stiff spring just smooths pointer/scroll jitter.
 * Because it follows scroll (not a timer), it stays meaningful under
 * reduced motion and needs no separate guard.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, SPRING_SNAP)

  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />
}
