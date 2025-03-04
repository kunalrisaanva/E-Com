"use client";
import { useState } from "react";
import { Lens } from "./ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";

export function LensDemo({image}) {
  const [hovering, setHovering] = useState(false);

  return (
    (<div>
     
        <div className="">
          <Lens hovering={hovering} setHovering={setHovering}>
           {image}
          </Lens>
      </div>
    </div>)
  );
}


