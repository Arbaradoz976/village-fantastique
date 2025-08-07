import React from 'react';
import { useControls } from 'leva';
import { EffectComposer, Bloom, ChromaticAberration, Vignette, Noise, SSAO } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const PostProcessingControls = () => {
  const {
    bloomEnabled,
    bloomIntensity,
    bloomRadius,
    bloomThreshold,
    vignetteEnabled,
    vignetteOffset,
    vignetteDarkness,
    chromaticEnabled,
    chromaticOffset,
    noiseEnabled,
    noiseOpacity,
    ssaoEnabled,
    ssaoIntensity,
    ssaoRadius
  } = useControls('Post-Processing', {
    bloomEnabled: true,
    bloomIntensity: { value: 0.5, min: 0, max: 3, step: 0.1 },
    bloomRadius: { value: 0.4, min: 0, max: 1, step: 0.01 },
    bloomThreshold: { value: 0.85, min: 0, max: 1, step: 0.01 },
    
    vignetteEnabled: true,
    vignetteOffset: { value: 0.3, min: 0, max: 1, step: 0.01 },
    vignetteDarkness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    
    chromaticEnabled: false,
    chromaticOffset: { value: 0.002, min: 0, max: 0.01, step: 0.001 },
    
    noiseEnabled: false,
    noiseOpacity: { value: 0.1, min: 0, max: 1, step: 0.01 },
    
    ssaoEnabled: false,
    ssaoIntensity: { value: 0.5, min: 0, max: 1, step: 0.01 },
    ssaoRadius: { value: 0.1, min: 0, max: 1, step: 0.01 }
  });

  return (
    <EffectComposer>
      {bloomEnabled && (
        <Bloom
          intensity={bloomIntensity}
          radius={bloomRadius}
          luminanceThreshold={bloomThreshold}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      )}
      
      {vignetteEnabled && (
        <Vignette
          offset={vignetteOffset}
          darkness={vignetteDarkness}
          blendFunction={BlendFunction.NORMAL}
        />
      )}
      
      {chromaticEnabled && (
        <ChromaticAberration
          offset={[chromaticOffset, chromaticOffset]}
          blendFunction={BlendFunction.NORMAL}
        />
      )}
      
      {noiseEnabled && (
        <Noise
          opacity={noiseOpacity}
          blendFunction={BlendFunction.COLOR_DODGE}
        />
      )}
      
      {ssaoEnabled && (
        <SSAO
          intensity={ssaoIntensity}
          radius={ssaoRadius}
          blendFunction={BlendFunction.MULTIPLY}
        />
      )}
    </EffectComposer>
  );
};

export default PostProcessingControls;
