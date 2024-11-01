"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { Button } from "@/components/ui/button";

export function ParticleHeaderComponent({
  title = "Drisdell Consulting",
  primaryCTA = "Get Started",
  secondaryCTA = "Learn More"
}: {
  title?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}) {
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

  const options = {
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 120,
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
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
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
    <header className='relative h-64 w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 md:h-96'>
      {init && (
        <Particles
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={options}
          className='absolute inset-0'
        />
      )}
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-center'>
        <h1 className='mb-8 px-4 text-center text-4xl font-bold text-white md:text-6xl'>
          {title}
        </h1>
        <div className='flex flex-row gap-4'>
          <Button variant='default' size='lg'>
            {primaryCTA}
          </Button>
          <Button variant='outline' size='lg'>
            {secondaryCTA}
          </Button>
        </div>
      </div>
    </header>
  );
}
// https://github.com/DopamineDriven/drisdell-consulting-services/blob/main/components/Landing/LandingData/landing-data.tsx
