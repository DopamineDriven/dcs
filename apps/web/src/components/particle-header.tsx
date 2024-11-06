"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import css from "./particle-header.module.css";

export function ParticleHeaderComponent<
  const T extends "HOME" | "ABOUT" | "CONSULTANTS" | "CONTACT"
>({ content, title, target }: { content: string; title: string; target: T }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const tsTheme = useMemo(() => {
    return target === "CONTACT"
      ? "#ffffff"
      : target === "ABOUT"
        ? "#ffffff"
        : "#102a43";
  }, [target]);

  const tsParticle = useMemo(() => {
    return target === "CONTACT"
      ? "#102a43"
      : target === "ABOUT"
        ? "#102a43"
        : "#ffffff";
  }, [target]);

  const options = {
    background: {
      color: {
        value: tsTheme
      }
    },
    fpsLimit: 120,
    fullScreen: { enable: false },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: { enable: true }
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: tsParticle
      },
      links: {
        color: tsParticle,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          height: 800,
          width: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    detectRetina: true
  } satisfies ISourceOptions;

  return (
    <div className='relative h-[50vh] sm:h-[33rem]'>
      <div
        className='absolute inset-0 flex flex-col'
        aria-hidden='true'>
        <div className='relative w-full flex-1'>
          <div className='absolute inset-0 overflow-hidden'>
            {init && (
              <Particles
                id='tsparticles'
                particlesLoaded={particlesLoaded}
                options={options}
                className='h-full w-full object-cover object-center'
              />
            )}
          </div>
          <div className='absolute inset-0 opacity-50' />
        </div>
        <div className='inset-0 w-full bg-white' />
      </div>
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-center'>
        <h1
          className={cn(
            "mb-4 px-4 text-center font-basis-grotesque-pro-bold text-4xl md:text-6xl",
            target === "HOME"
              ? "text-white"
              : target === "CONSULTANTS"
                ? "text-white"
                : "text-[#102a43]"
          )}>
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={cn(
            "mx-auto mb-4 flex flex-col justify-center px-4 text-center font-basis-grotesque-pro-regular",
            css.content,
            target === "HOME"
              ? "text-white"
              : target === "CONSULTANTS"
                ? "text-white"
                : "text-[#102a43]"
          )}
        />
        <div className='flex flex-col sm:flex-row gap-4'>
          {target === "CONTACT" ? (
            <>
              <Link href='/consultants'>
                <Button variant='dcs' size='dcs'>
                  {"Consultants"}
                </Button>
              </Link>
              <Link
                href='/contact-us#send-us-an-email'
                scroll={true}
                style={{ scrollBehavior: "smooth" }}
                shallow={true}>
                <Button variant='dcs' size='dcs'>
                  {"Send an Email"}
                </Button>
              </Link>
              <Link href='/consultants/skills-and-positions'>
                <Button variant='dcs' size='dcs'>
                  {"Skills & Positions"}
                </Button>
              </Link>
            </>
          ) : target === "ABOUT" ? (
            <>
              <Link href='/consultants'>
                <Button variant='dcs' size='dcs'>
                  {"Consultants"}
                </Button>
              </Link>
              <Link href='/contact-us'>
                <Button variant='dcs' size='dcs'>
                  {"Contact Us"}
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href='/about-us'>
                <Button variant='dcs_dark' size='dcs'>
                  {"About Us"}
                </Button>
              </Link>
              <Link href='/contact-us'>
                <Button variant='dcs_dark' size='dcs'>
                  {"Contact Us"}
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
