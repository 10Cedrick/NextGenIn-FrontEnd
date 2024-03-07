import React from 'react'
import {ecole, interet, club} from '../../assets';
import { motion } from 'framer-motion';


export default function ContaintLanding() {

    const textAnimateInteret={
        offscreen:{y:100, opacity: 0},
        onscreen:{y:0,opacity: 1,
        transition:{
          bounce:0.2,
          duration:0.6,
        },},
      };
      const parentVariantsInteret = {
        offscreen: {},
        onscreen: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      };

      const imageVariantsLanding= {
        offscreen: { y: -100, opacity: 0 },
        onscreen: { y: 0, opacity: 1,
          transition: {
            duration:0.1,
            type: 'spring',
            stiffness: 50,
          }
        },
      };
      
      

  return (
    <>
    <div className=' flex flex-row flex-wrap w-full h-[100vh] justify-center items-center mt-[70px]'>
        <motion.div className=' flex-1 flex flex-col justify-end pl-40 items-center   gap-8'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:false, amount:0.5}}
            variants={parentVariantsInteret}
        >
                <motion.div className='text-[4rem] tracking-wide leading-tight' variants={textAnimateInteret}>Suivez votre centre d'interet</motion.div>
                <motion.div className='text-justify text-sm' variants={textAnimateInteret}>Que vous soyez passionné par les sciences, les arts, la technologie ou toute autre discipline, l'université offre un terreau fertile pour cultiver vos intérêts et découvrir votre véritable passion et laissez-vous guider par votre curiosité. </motion.div>
        </motion.div>
        <motion.div className='img1 flex-1 flex justify-center'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:false, amount:0.5}}
            variants={imageVariantsLanding}
        >
                <img src={interet} alt="interet" className=''/>
        </motion.div>
    </div>
    <div className=' flex flex-row w-full h-[100vh] bg-slate-100 justify-center items-center mt-[70px]'>
        <motion.div className='img1 0 flex-1 flex justify-center'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{once:false, amount:0.5}}
        variants={imageVariantsLanding}
        >
                <img src={club} alt="club" className=''/>
        </motion.div>
        <motion.div className=' w-[55%] flex flex-col justify-center items-center pr-40 gap-8'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:false, amount:0.5}}
            variants={parentVariantsInteret}
        >
            <motion.div className='text-[3rem] tracking-wide leading-tight' variants={textAnimateInteret}>Participez à des clubs correspondant à vos centres d'intérêt.</motion.div>
            <motion.div className='text-justify text-sm' variants={textAnimateInteret}>Les clubs d'entraide sont là pour vous offrir une communauté solidaire et bienveillante. Ensemble, nous pouvons surmonter les obstacles et atteindre de nouveaux sommets.</motion.div>
        </motion.div>
    </div>
    <div className=' flex flex-row w-full h-[100vh] justify-center items-center mt-[70px]'>
        <motion.div className=' flex-1 flex flex-col justify-center items-center pl-40 gap-8'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:false, amount:0.5}}
            variants={parentVariantsInteret}
        >
            <motion.div className='text-[3rem] tracking-wide leading-tight ' variants={textAnimateInteret}>Découvrez tout ce que notre école a à offrir en un seul clic</motion.div>
            <motion.div className='text-justify text-sm' variants={textAnimateInteret}>accéder à toutes les informations essentielles et ne manquez rien de ce que notre communauté éducative a préparé pour vous.</motion.div>
        </motion.div>
            <motion.div className='img1 flex-1 flex justify-start items-center'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:false, amount:0.5}}
            variants={imageVariantsLanding}
            >
                <img src={ecole} alt="ecole" className=''/>
            </motion.div>
    </div>
    </>
  )
}
