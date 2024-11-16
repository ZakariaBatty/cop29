"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import CustomImage from "@/components/CustomImageProps"

export default function ComponentQrCode() {
  return (
    <div className="mx-auto w-[27%] mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="group cursor-pointer transition-colors  shadow-lg rounded-lg flex flex-col items-center justify-between p-4 ">
            <CardContent className="flex flex-col items-center justify-center">
              <div className="p-4 cursor-pointer flex flex-col items-center justify-center">
                <CustomImage
                  src="/cop29/images/Icon/Side-events/qr-code.jpg"
                  alt="qr-code"
                  width={200}
                  height={200}
                  className="block mx-auto"
                />
              </div>
            </CardContent>
            <CardFooter className="w-full flex justify-center">
              <h2 className="font-semibold text-xs px-4 rounded-md transition-colors">
                Programme global COP29
              </h2>
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent className="w-full max-w-2xl p-0">
          <div className="flex items-center justify-center w-full h-full p-4">
            <CustomImage
              src="/cop29/images/Icon/Side-events/qr-code.jpg"
              alt="Programme global COP29 QR Code"
              width={500}
              height={500}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}