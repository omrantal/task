"use client"

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/MovingBorders";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-4 py-10 px-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href=''
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{ borderRadius: `calc(1.75rem* 0.96)` }}
            className="flex-1 text-black dark:bg-codgray/50 dark:text-white border-neutral-200 dark:border-sahara"
          >
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 line-clamp-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-lemongrass text-base line-clamp-2",
        className
      )}
    >
      {children}
    </p>
  );
};

export const activities = [
    {
      title: "Streamlined Logistics for Global Manufacturer",
      description:
        "Partnered with a leading manufacturing company to optimize their supply chain using RFID technology and custom logistics software.",
      link: "",
    },
    {
      title: "Secure Cloud Migration for Financial Institution",
      description:
        "Successfully migrated a financial institution's on-premise data center to a secure and compliant cloud environment.",
      link: "",
    },
    {
      title: "AI-Powered Customer Insights for E-commerce Platform",
      description:
        "Developed and deployed a machine learning model for a growing e-commerce platform to analyze customer behavior and personalize product recommendations.",
      link: "",
    },
    {
      title: "Building a Robust Cybersecurity Posture for Healthcare Provider",
      description:
        "Conducted a comprehensive security audit for a major healthcare provider and implemented multi-factor authentication, intrusion detection systems.",
      link: "",
    },
    {
      title: "Enabling Smart City Initiatives with IoT Solutions",
      description:
        "Collaborated with a city municipality to implement smart street lighting, waste management systems, and environmental sensors.",
      link: "",
    },
    {
      title: "Custom Software Development for Educational Institution",
      description:
        "Designed and built a custom learning management system (LMS) for a large university to streamline course delivery, assessment, and student engagement.",
      link: "",
    },
  ];
