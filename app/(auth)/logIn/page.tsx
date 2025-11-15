"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  Field,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
export default function signUp() {
  return (
    <div className="grid grid-cols-[40%_60%]  ">
      <div className="bg-orange-500 h-screen "></div>
      <div className="bg-linear-to-br from-blue-50 to-indigo-100 ">
        <div className="flex flex-col justify-center items-center mt-24 space-y-4 mb-10">
          <h1 className=" text-7xl font-black mb-8 ">
            Certi<span className="text-orange-600 font-black">F</span>low.
          </h1>
          <p className=" text-gray-700 font-bold text-xl">
            Welcome back to <span className="font-black text-2xl text-black">Certi<span className="text-orange-600 font-black">F</span>low.</span>
          </p>
        </div>

        <form>
       
          <FieldGroup className="px-31 mt-9 ">
             <FieldSet >
              <Field>
                <FieldLabel>Email or Password</FieldLabel>
                <div >
                  <Input
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="Enter your credential"
                    required
                  />
                </div>
              </Field>
                  <Field>
                <FieldLabel >Password</FieldLabel>
                <div className="flex flex-row space-x-3">
                  <Input
                    type="password"
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </Field>
            </FieldSet>
            </FieldGroup>
            <motion.button  
            className="mx-31 my-6 rounded-none  border-2 border-blue-950 pr-46 py-3 pl-2 bg-black text-white"
            whileHover={{scale:1.10}}
            whileTap={{scale:1.0}}
            >
              Log In 
            </motion.button>
        </form>
      </div>
    </div>
  );
}
