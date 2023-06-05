import Image from "next/image";
import coverImage from "../public/coverImage.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:max-w-screen-xl lg:mx-auto">
      <div className="md:grid md:grid-cols-3 lg:px-10 mt-6 px-5 lg:p-0 md:mt-20 lg:mt-32 lg:mb-0 mb-6">
        <div className="md:col-span-2 flex flex-col gap-2">
          <h1 className="font-bold text-3xl xl:text-6xl xl:leading-normal m-0">Master the Behavioral Interview</h1>
          <p className="xl:text-2xl text-xl text-[#8E8181] xl:leading-9">Improve your behavioral interview skills with our AI-powered web app. Get personalized feedback on your responses to common questions and practice at your own pace.</p>
          {/* Break button into six parts */}
          <Link href={""} className="md:w-60 xl:w-60 align-center h-16 rounded-md bg-[#3772FF] grid grid-cols-6 px-3 justify-center items-center mt-3">
            <div className="col-span-6 lg:h-4/6 flex justify-center items-center">
              <p className="text-xl text-white w-fit font-semibold">Sign Up - Its free!</p>
            </div>
          </Link>
        </div>
        <div className="col-span-1 mt-4 md:mt-0">
          <Image src={coverImage} width={400} height={392} alt="person on computer" className="w-64 h-64 mx-auto md:w-full md:h-60 lg:h-full"></Image>
        </div>
      </div>
    </div>
  )
}
