import React from 'react';
import { StyledEffectsBlock } from './EffectsBlock.style';
import { Box } from '@mui/material';
import { ICurrentThemesColor } from '../../../app/context/themeContext/themeContext';
import { Parallax } from 'react-scroll-parallax';

interface IEffectsBlockProps {
  currentPalette: ICurrentThemesColor
};

export const EffectsBlock: React.FC<IEffectsBlockProps> = ({ currentPalette }) => {

  const RenderEffectBlock = () => {
    return (
      <>
        <Parallax translateX={['0px', '-600px']} className='effect-block-right'>
          <Box component='div' > resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume</Box>
        </Parallax>
        <Parallax translateX={['0px', '300px']} className='effect-block-left'>
          <Box component='div' > resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume</Box>
        </Parallax>
      </>
    )
  }

  return (
    <StyledEffectsBlock theme={currentPalette} >
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map( block => {
          return (
            <RenderEffectBlock key={block}/>
          )
        })
      }
    </StyledEffectsBlock>
  );
};