"use client";

import { useEffect, useMemo, useState } from "react";

import { loadFull } from "tsparticles";
import { fireOptions, fireWorksOptions } from "../lib/utils";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const TsParticle = ({
  toggleParticleOptions,
}: {
  toggleParticleOptions: boolean;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleOptions = useMemo(
    () => (toggleParticleOptions ? fireWorksOptions : fireOptions),
    [toggleParticleOptions],
  );

  return (
    init && (
      <Particles id="tsparticles" className="-z-10" options={particleOptions} />
    )
  );
};

export default TsParticle;
