import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import LetterGlitch from "@/components/ui/letter-glitch-background";
import { Button } from "@heroui/button";
import TextType from "@/components/ui/text-type";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-screen flex flex-col items-center justify-center gap-4">
        <div
          className="absolute inset-0 -z-50 [mask-image:radial-gradient(circle_at_center,white,transparent)]
          [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]
          [-webkit-mask-image:radial-gradient(circle_at_center,white,transparent)]
          [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:cover]"
        >
          <div className="scale-150">
            <LetterGlitch
              //glitchColors={["#733B73", "#ab4eda", "#2b2031"]}
              glitchSpeed={100}
              centerVignette
            />
          </div>
        </div>

        <div className="flex flex-col max-w-xl text-center">
          <h1 className={title({ className: "text-9xl" })}>Demi Daniel</h1>
          <TextType
            className={title({ size: "sm" })}
            text={[
              "Software Engineer",
              "AI/ML Engineer",
              "Full Stack Developer",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className="flex gap-3 mt-6">
          <Button isExternal variant="shadow" color="primary" as={Link} href="">
            Terminal
          </Button>
          <Button variant="bordered" as={Link} href={siteConfig.links.github}>
            <GithubIcon size={20} />
            GitHub
          </Button>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </>
  );
}
