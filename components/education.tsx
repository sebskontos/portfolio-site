"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
          <div>
            <Image src="/USYD-logo.png" alt="University" width="150" height="150" />
          </div>

          <div>
            <p className="text-lg font-medium">
              Bachelor of Laws
            </p>
            <p>University of Sydney</p>
            <p className="mt-1">2022 - 2027</p>
            <p className="mt-2">79 WAM</p>
          </div>
        </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">

        <div>
          <Image src="/USYD-logo.png" alt="University" width="150" height="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Bachelor of Engineering Honours (Software)
          </p>
          <p>University of Sydney</p>
          <p className="mt-1">2022 - 2025</p>
          <p className="mt-2">83 Honours WAM</p>
          <ul className="list-disc pl-6">
            <li>2023: 1st place SUMO Hackathon (40+ teams)</li>
            <li>2024: 1st place COMP3308 AI Cypher Crack</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src="/NC-logo.jpeg" alt="University" width="150" height="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Higher School Certificate
          </p>
          <p>Newington College</p>
          <p className="mt-1">2016 - 2021</p>
          <p className="mt-2">99.50 ATAR</p>
          <ul className="list-disc pl-6">
            <li>Runner-up to Dux</li>
            <li>School Prefect</li>
            <li>Alexander Bulteau Prize for Languages</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
