"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { ParticleButton } from "@/ui/particles/ParticleButton";
import { cn } from "@/lib/utils";
import css from "./particle-header.module.css";

export function ParticleHeaderComponent<
  const T extends "HOME" | "ABOUT" | "CONSULTANTS" | "CONTACT" | "QR"
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
      : target === "QR"
        ? "#ffffff"
        : target === "ABOUT"
          ? "#ffffff"
          : "#102a43";
  }, [target]);

  const tsParticle = useMemo(() => {
    return target === "CONTACT"
      ? "#102a43"
      : target === "QR"
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
    <div
      className={cn(
        "relative sm:h-[33rem] 2xl:h-[90vh]",
        target === "QR"
          ? "h-[75vh]"
          : target === "HOME"
            ? "h-[75vh]"
            : "h-[50vh]"
      )}>
      <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
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
        {target === "QR" ? (
          <>
            <h1
              className={cn(
                `mb-4 text-balance text-center font-basis-grotesque-pro-bold text-4xl tracking-tight text-dcs-800 sm:text-5xl`
              )}>
              {"Welcome to Drisdell Consulting!"}
            </h1>
            <p className='mx-auto mb-4 max-w-xl text-pretty px-2 text-center font-basis-grotesque-pro-medium text-[1.25rem] leading-[1.5rem] tracking-tight text-dcs-800 sm:max-w-2xl'>
              {`It was a pleasure to meet you and we look forward to the opportunity to continue to get to know you better. Please take a moment to let us know more about you. We want to help you address your HCM needs and goals.`}
            </p>
          </>
        ) : (
          <>
            <h1
              className={cn(
                "mb-4 px-4 text-center font-basis-grotesque-pro-bold text-4xl md:text-6xl",
                target === "HOME"
                  ? "text-white"
                  : target === "CONSULTANTS"
                    ? "text-white"
                    : target === "QR"
                      ? "text-[#102a43]"
                      : "text-[#102a43]"
              )}>
              {title}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className={cn(
                "mx-auto mb-4 px-2 flex max-w-xl flex-col justify-center text-center font-basis-grotesque-pro-regular sm:max-w-2xl",
                css.content,
                target === "HOME"
                  ? "text-white"
                  : target === "CONSULTANTS"
                    ? "text-white"
                    : target === "QR"
                      ? "text-white"
                      : "text-[#102a43]"
              )}
            />
          </>
        )}
        <div className='flex flex-col gap-4 sm:flex-row'>
          {target === "CONTACT" ? (
            <>
              <Link href='/consultants'>
                <ParticleButton variant='dcs' size='dcs'>
                  {"Consultants"}
                </ParticleButton>
              </Link>
              <Link
                href='/contact-us#send-us-an-email'
                scroll={true}
                style={{ scrollBehavior: "smooth" }}
                shallow={true}>
                <ParticleButton variant='dcs' size='dcs'>
                  {"Send an Email"}
                </ParticleButton>
              </Link>
              <Link href='/consultants/skills-and-positions'>
                <ParticleButton variant='dcs' size='dcs'>
                  {"Skills & Positions"}
                </ParticleButton>
              </Link>
            </>
          ) : target === "QR" ? (
            <>
              {/* <Link href='/consultants'>
                <Button variant='dcs' size='dcs'>
                  {"Consultants"}
                </Button>
              </Link>
              <Link href='/about-us'>
                <Button variant='dcs' size='dcs'>
                  {"About Us"}
                </Button>
              </Link> */}
            </>
          ) : target === "ABOUT" ? (
            <>
              <Link href='/consultants'>
                <ParticleButton variant='dcs' size='dcs'>
                  {"Consultants"}
                </ParticleButton>
              </Link>
              <Link href='/contact-us'>
                <ParticleButton variant='dcs' size='dcs'>
                  {"Contact Us"}
                </ParticleButton>
              </Link>
            </>
          ) : (
            <>
              <Link href='/about-us'>
                <ParticleButton variant='dcs_dark' size='dcs'>
                  {"About Us"}
                </ParticleButton>
              </Link>
              <Link href='/contact-us'>
                <ParticleButton variant='dcs_dark' size='dcs'>
                  {"Contact Us"}
                </ParticleButton>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
