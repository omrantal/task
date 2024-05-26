import { BentoGrid, BentoGridItem, gridItems } from "@/components/ui/BentoGrid"
import { motion } from "framer-motion"
import { HeroHighlight } from "@/components/ui/HeroHighlight"

export const About = () => {
  return (
    <section id="about">
      <div className="bg-sahara/70">
        <HeroHighlight className='py-10 px-10 w-full' color='codgray' containerClassName="relative">
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
          >
            <BentoGrid className="w-full py-20">
              {gridItems.map((item, i) => (
                <BentoGridItem
                  id={item.id}
                  key={i}
                  title={item.title}
                  description={item.description}
                  // remove icon prop
                  // remove original classname condition
                  className={item.className}
                  img={item.img}
                  imgClassName={item.imgClassName}
                  titleClassName={item.titleClassName}
                  spareImg={item.spareImg}
                />
              ))}
            </BentoGrid>
          </motion.h1>
        </HeroHighlight>
      </div>
    </section>
  );
};

export default About;
