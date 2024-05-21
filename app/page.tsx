import { Button } from "@/components/Button";
import { libreFranklin, newsreader } from "@/constants/fonts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/python");
  const data = await response.json();
  return (
    <>
      <div className="pt-20 text-center">
        <div className={`text-5xl ${newsreader.className}`}>
          Get Lost in <em>Adventure</em>,<br />
          Never in <em>Confusion</em>.
        </div>
        <div className={`font-medium ${libreFranklin.className}`}>
          Tailor your adventure by completing our survey
          <br /> and crafting your own unique journey.
        </div>
        <div className="startHereBtn">
          <Link href="/survey">
            <Button title="Start Here" type="button" />
          </Link>
        </div>
        <Image
          src="/landing-page-image.jpg"
          alt="Landing Page Image"
          width={768}
          height={500}
          className="mx-auto pt-5"
        />
      </div>
    </>
  );
}
