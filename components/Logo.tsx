"use client";

import logo from '@/public/mini_logo.jpg'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3DCard";

const Logo = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-lemongrass relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-codgray dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-full border">
        <CardItem translateZ="100" className="w-auto">
          <Image
            src={logo}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default Logo