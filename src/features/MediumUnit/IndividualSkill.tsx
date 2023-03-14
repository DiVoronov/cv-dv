import React, { useState } from 'react';
import { Box } from '@mui/material';
import { IIndividualSkill } from './MediumUnit';

interface IIndividualSkillProps {
  skill: IIndividualSkill
};

export const IndividualSkill: React.FC<IIndividualSkillProps> = ({ skill }) => {

  const [ flipHoverClass, setFlipHoverClass ] = useState('');

  const handleSetFlipClassName = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('flip-hover')
    e.stopPropagation();
    e.preventDefault();
    setFlipHoverClass('flip-hover');
  };
  const handleRemoveFlipClassName = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setFlipHoverClass('');
  };

  return (
    <Box 
      component='div' 
      className={`${skill.className} ${flipHoverClass}`} 
      onMouseEnter={handleSetFlipClassName}
      onMouseLeave={handleRemoveFlipClassName}
    >
      <Box component='div' className='skill-title'>{skill.title}</Box>
      <Box component='div' className='skills-options'>
        {
          skill.value.map( option => <Box key={option}>{option}</Box> )
        }
      </Box>
    </Box>
  );
};