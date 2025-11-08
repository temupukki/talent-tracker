"use client";
import { motion } from "framer-motion";
import { div, li, ul } from "framer-motion/client";
import { ChevronDown, MoveDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navbar_items: string[] = ["Home", "About", "Contact", "Login"];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-end gap-23 text-green-700 z-10 px-10 py-6 ">
        <div className="absolute top-6 left-6">
          <motion.h1 whileHover={{ scale: 1.2 }} className="font-bold text-2xl">
            CertiFlow
          </motion.h1>
        </div>

        {navbar_items.map((items, index) => {
          {
            const path = `/${items.toLowerCase()}`;
            return (
              <motion.li
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.88 }}
                className="list-none text-[19px] hover:font-bold"
                key={index}
              >
                <a href={path}>{items}</a>
              </motion.li>
            );
          }
        })}
        <div className="-ml-2 flex gap-6">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.99 }}
            className=" border-2 border-gray-700 rounded px-3 py-1.5 -mt-1.5 hover:bg-blue-600 hover:text-white"
          >
            Sign Up
          </motion.button>
          <div className="-mt-0.3">
          <DropdownMenu>
            <DropdownMenuTrigger><span>EN</span> <ChevronDown /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Amharic</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
}
