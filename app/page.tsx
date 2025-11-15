"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CloudSun } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 ">
        <div>
          <h1 className="uppercase font-bold pt-20 px-29 text-orange-400">
            best destination around the world
          </h1>
          <p className="px-29 text-6xl text-blue-950 font-black pt-3">
            Travel, enjoy{" "}
          </p>
          <p className="px-29 text-6xl text-blue-950 font-black pt-3">
            and live anew{" "}
          </p>
          <p className="px-29 text-6xl text-blue-950 font-black pt-3">
            and full life.
          </p>
        </div>
        <div className="pl-20">
          <img className="w-90 h-90 pt-20" src="/c.png" alt="photo" />
        </div>
      </div>
      <div className="pt-20">
        <p className="uppercase flex flex-col justify-center items-center  text-sm text-gray-600">
          category
        </p>
        <p className="flex flex-col justify-center items-center text-4xl text-blue-950 pt-2 font-bold">
          We Offer Best Services
        </p>
        <div className="grid grid-cols-4 gap-18 pt-10">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardDescription className="flex flex-col justify-center items-center">
                <CloudSun className="w-24 h-14" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-gray-800 mb-1">Calculated whether</p>
              <p className="text-gray-600 font-semibold ">
                Built Wicket longer{" "}
              </p>
              <p className="text-gray-600 font-semibold ">admire do barton </p>
              <p className="text-gray-600 font-semibold ">
                vanity itself do in it.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardDescription className="flex flex-col justify-center items-center">
                <CloudSun className="w-24 h-14" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-gray-800 mb-1">Calculated whether</p>
              <p className="text-gray-600 font-semibold ">
                Built Wicket longer{" "}
              </p>
              <p className="text-gray-600 font-semibold ">admire do barton </p>
              <p className="text-gray-600 font-semibold ">
                vanity itself do in it.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardDescription className="flex flex-col justify-center items-center">
                <CloudSun className="w-24 h-14" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-gray-800 mb-1">Calculated whether</p>
              <p className="text-gray-600 font-semibold ">
                Built Wicket longer{" "}
              </p>
              <p className="text-gray-600 font-semibold ">admire do barton </p>
              <p className="text-gray-600 font-semibold ">
                vanity itself do in it.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardDescription className="flex flex-col justify-center items-center">
                <CloudSun className="w-24 h-14" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-gray-800 mb-1">Calculated whether</p>
              <p className="text-gray-600 font-semibold ">
                Built Wicket longer{" "}
              </p>
              <p className="text-gray-600 font-semibold ">admire do barton </p>
              <p className="text-gray-600 font-semibold ">
                vanity itself do in it.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className=" pt-20">
        <p className=" flex flex-col justify-center items-center  text-sm text-gray-600">
          Top Selling
        </p>
        <p className="flex flex-col justify-center items-center text-4xl text-blue-950 mb-12 mt-2 font-bold">
          Top Destinations
        </p>
        <div className="grid grid-cols-3 gap-21">
          <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md p-0">
            <img
              src="addis.jfif"
              alt="Addis Ababa"
              className="w-full h-48 object-cover m-0 p-0 block"
            />
            <CardContent className="p-4 space-y-1">
              <p className="font-semibold text-gray-600">
                Addis Ababa, Ethiopia
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md p-0">
            <img
              src="addis.jfif"
              alt="Addis Ababa"
              className="w-full h-48 object-cover m-0 p-0 block"
            />
            <CardContent className="p-4 space-y-1">
              <p className="font-semibold text-gray-600">
                Addis ababa, Ethiopia
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md p-0">
            <img
              src="addis.jfif"
              alt="Addis Ababa"
              className="w-full h-48 object-cover m-0 p-0 block"
            />
            <CardContent className="p-4 space-y-1">
              <p className="font-semibold text-gray-600">
                Addis ababa, Ethiopia
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
