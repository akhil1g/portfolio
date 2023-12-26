import React from "react";
import { useEffect,useRef } from "react";
import {motion,useInView, useAnimation} from "framer-motion";

export const Reveal =({children,width = "fit-content"})=>{
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true});
const Controls=useAnimation();
useEffect(()=>{
    if(isInView){
        Controls.start("visible");
    }
},[isInView]);
return (
    <div ref={ref} style={{}}>
        <motion.div
          variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
          }}
          initial="hidden"
          animate={Controls}
          transition={{duration:1, delay : 0.25}}
        >
            {children}
        </motion.div>
    </div>
)
}