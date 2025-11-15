"use client ";

import { div } from "framer-motion/client";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <hr />
      <footer className="flex flex-row my-10 mx-60  ">
        <div>
          <h1 className="text-gray-800 text-4xl font-bold mb-6 ">CertiFlow.</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit elit pukki, </p>
          <p className="text-gray-600">consectetur adipiscing .</p>
        </div>
        <div className="grid grid-cols-3 gap-28 ml-70">
          <div>
            <h1 className="text-gray-700 font-semibold text-xl mb-3">
              Company
            </h1>
            <p className="text-gray-600 my-1 font-semibold">About</p>
            <p className="text-gray-600 my-1 font-semibold">Careers</p>
            <p className="text-gray-600 my-1 font-semibold">Mobile</p>
          </div>

          <div>
            <h1 className="text-gray-700 font-semibold text-xl mb-3">
              Contact
            </h1>
            <p className="text-gray-600 my-1 font-semibold">Help/FAQ</p>
            <p className="text-gray-600 my-1 font-semibold">Press</p>
            <p className="text-gray-600 my-1 font-semibold">Affiliates</p>
          </div>
          <div>
            <h1 className="text-gray-700 font-semibold text-xl mb-3">More</h1>
            <p className="text-gray-600 my-1 font-semibold">Cccc</p>
            <p className="text-gray-600 my-1 font-semibold">Aaaaa</p>
            <p className="text-gray-600 my-1 font-semibold">Bbbbb</p>
          </div>
        </div>
        <div className="ml-27">
          <div className="flex flex-row space-x-7">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
          <p className="text-gray-700 font-bold mt-6">Discover our app.</p>
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className="w-40 -ml-3"
          />
        </div>
      </footer>
    </div>
  );
}
