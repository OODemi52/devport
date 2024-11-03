import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

interface ProjectsProps {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
}

const projects: ProjectsProps[] = [
  {
    thumbnail: "https://picsum.photos/200",
    title: "SlackShots",
    description: "",
    url: "",
  },
  {
    thumbnail: "https://picsum.photos/200",
    title: "D-Labs Photography",
    description: "",
    url: "",
  },
  {
    thumbnail: "https://picsum.photos/200",
    title: "YRS",
    description: "",
    url: "",
  },
];

export default function Home() {
  return (
    <section className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
      {projects.map((project) => (
        <Link
          key={project.title}
          href=""
        >
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://nextui.org/images/hero-card.jpeg"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
              <p className="text-tiny text-white/80">{project.title}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </section>
  );
}
