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
export default function signUp() {
  return (
    <div className="grid grid-cols-[40%_60%]  ">
      <div className="bg-orange-500 h-screen "></div>
      <div className="bg-linear-to-br from-blue-50 to-indigo-100 ">
        <div className="flex flex-col justify-center items-center mt-24 space-y-4 mb-10">
          <h1 className=" text-2xl font-semibold ">
            BECOME AN EXCLUSIVE MEMBER
          </h1>
          <p className="uppercase text-gray-700">
            sign up and join the partnership
          </p>
        </div>

        <form>
          <FieldGroup className="flex flex-col items-center justify-center ">
            <FieldSet className="flex flex-row space-x-3">
              <Field>
                <FieldLabel className="uppercase">First name</FieldLabel>
                <div >
                  <Input
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="First name"
                    required
                  />
                </div>
              </Field>
                  <Field>
                <FieldLabel className="uppercase">last name</FieldLabel>
                <div className="flex flex-row space-x-3">
                  <Input
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="Last name"
                    required
                  />
                </div>
              </Field>
            </FieldSet>
             <FieldSet className="flex flex-row space-x-3">
              <Field>
                <FieldLabel className="uppercase">Email</FieldLabel>
                <div >
                  <Input
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="abcd@email.com"
                    required
                  />
                </div>
              </Field>
                  <Field>
                <FieldLabel className="uppercase">Phone number</FieldLabel>
                <div className="flex flex-row space-x-3">
                  <Input
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="09**********"
                    required
                  />
                </div>
              </Field>
            </FieldSet>
          
          </FieldGroup>
          <FieldGroup className="px-31 mt-6 ">
             <FieldSet >
              <Field>
                <FieldLabel className="uppercase">password</FieldLabel>
                <div >
                  <Input
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="Password"
                    required
                  />
                </div>
              </Field>
                  <Field>
                <FieldLabel className="uppercase">confrim password</FieldLabel>
                <div className="flex flex-row space-x-3">
                  <Input
                    className="border-2 rounded-none border-gray-600 pr-47 py-8"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </Field>
            </FieldSet>
            </FieldGroup>
            <motion.button  
            className="mx-31 my-6 rounded-none  border-2 border-blue-950 pr-46 py-3 pl-2 bg-blue-900 text-white"
            whileHover={{scale:1.10}}
            whileTap={{scale:1.0}}
            >
              Register
            </motion.button>
        </form>
      </div>
    </div>
  );
}
