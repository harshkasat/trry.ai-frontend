"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SignupComponent } from "../Signup";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <div className="relative">
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-white/70 hover:text-white relative px-4 py-1.5 text-sm font-medium"
        >
          {item}
          {active === item && (
            <motion.div
              layoutId="lamp"
              className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
              initial={false}
              transition={transition}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white/40 rounded-t-full">
                <div className="absolute w-8 h-4 bg-white/20 rounded-full blur-md -top-2 -left-1" />
                <div className="absolute w-6 h-4 bg-white/20 rounded-full blur-md -top-1" />
                <div className="absolute w-3 h-3 bg-white/20 rounded-full blur-sm top-0 left-1.5" />
              </div>
            </motion.div>
          )}
        </motion.p>
      </div>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full bg-black/20 border border-white/10 backdrop-blur-xl flex justify-center w-fit mx-auto shadow-lg"
    >
      <div className="flex items-center space-x-1 px-2 py-2">
        {children}
        <div className="ml-4 pl-4 border-l border-white/10">
          <SignupComponent />
        </div>
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
