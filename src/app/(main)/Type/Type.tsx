import React from 'react'
import TextType from '@/components/TextType';

export default function Type() {
  return (
    <TextType 
          text={["Front-End Developer | React.js" , ""]}
          typingSpeed={80}
          pauseDuration={900}
          showCursor={true}
          cursorCharacter="|" variableSpeed={undefined} onSentenceComplete={undefined}/>
  )
}
