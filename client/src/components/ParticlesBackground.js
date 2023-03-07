import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import React, { useCallback } from "react"
import particlesConfig from './config/particles-config'
import { tsParticles } from "tsparticles-engine";
import { loadPolygonPath } from "tsparticles-path-polygon";

loadPolygonPath(tsParticles);
function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                margin: "0",
                padding: "0",
                left: "0"
            }}
            params={particlesConfig} />
    );
}
export default ParticlesBackground