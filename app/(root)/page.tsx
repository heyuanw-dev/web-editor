import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      <div className="flex flex-col justify-center items-center my-5">
        <Image src={"/landing-page.svg"} alt="Hero-Section" height={500} width={500} />

        <h1
          className=" z-20 text-6xl mt-5 font-extrabold text-center bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-amber-500 to-amber-600
dark:from-amber-300 dark:via-amber-400 dark:to-amber-500
 tracking-tight leading-[1.3] "
        >
          Online Code Editor With AI Intelligence
        </h1>
      </div>

      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
        Codepad AI is a powerful, web-based code editor that enhances your development workflow with
        intelligent AI features and seamless integration. It helps you write, debug, and optimize
        code efficiently—directly in your browser.
      </p>
      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4" size={"lg"}>
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
  );
}
