import { Navbar } from "../../component"
import {ContaintLanding} from "../../component"
import "./LandingPage.css"
import { landingPuzzle } from '../../assets';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const textAnimate={
    offscreen:{y:100, opacity: 0},
    onscreen:{y:0,opacity: 1,
    transition:{
      bounce:0.2,
      duration:0.6,
    },},
  };
  const parentVariants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const imageVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: { x: 0, opacity: 1,
      transition: {
        delay: 0,
        type: 'spring',
        stiffness: 50,
      }
    },
  };
  return (
    <div className="">
      <Navbar />
      <div className="container__LandingPage--text flex flex-col w-[100%] h-[93vh] justify-center items-center">
        <motion.div className="flex flex-col gap-10"
          initial='offscreen'
          whileInView='onscreen'
          viewport={{once:false, amount:0.5}}
          variants={parentVariants}
        >
          <motion.div className="LandingPage-textDescription text-[5rem] tracking-wide leading-tight" variants={textAnimate}>Résolvez le 
              <span className="text-[#10a37f] textPuzzlePart"> p
              <motion.div style={{display:'inline-block'}}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'loop',
                  repeatDelay: 3
              }}
              >
                u
              </motion.div>
              zzl
              <motion.div
              style={{display:'inline-block'}}
              animate={{
                scale: [1, 1.2, 1]

              }}
              transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'loop',
                  repeatDelay: 3
              }}
              >
                e
              </motion.div></span><br/>de l'intégration
            </motion.div>
          <motion.p variants={textAnimate} className="LandingPage-textTitle text-sm">En connectant les novices et les anciens, tels des pièces de puzzle.<br/>Formez une communauté solide</motion.p>
          <motion.div variants={textAnimate}><a href="/signing"><Button id="ctaButton" className=" bg-[#10a37f] text-white w-1/4 h-12 tracking-widest flex items-center justify-center">S'inscrire<RightOutlined/></Button></a></motion.div>
        </motion.div>
      </div>

      <motion.div
        initial='offscreen'
        animate='onscreen'
        variants={imageVariants}
      >
        <img src={landingPuzzle} alt="puzzle" className='w-[361px] h-[432px] absolute bottom-0 right-0'/>
      </motion.div>
        <div className='zone-puzzle'></div>
        <div className='zone-little'></div>
        <div className='zone-orange'></div>

        <ContaintLanding/>
    </div>
  )
}
