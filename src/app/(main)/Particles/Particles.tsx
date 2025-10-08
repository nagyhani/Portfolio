import React from 'react'
import Particles from '@/components/Particles';

export default function ParticlesImage() {
  return (
   <>
   <div style={{ width: '100%', height: '740px', position: 'relative' }}>
  <Particles
              particleColors={['#0000ff", "#1e90ff", "#00bfff']}
              particleCount={380}
              particleSpread={15}
              speed={0.3}
              particleBaseSize={150}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false} className={undefined}  />
             
</div>

 
   </>


  )
}
