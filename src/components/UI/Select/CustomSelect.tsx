import React from 'react';
import { CustomSelectProps } from '../../../types/interfaces';
import { StyledSelect } from '../../styles';

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  ...props
}) => {
  return (
    <StyledSelect
      {...props}
      options={options}
    />
  );
};

export default React.memo(CustomSelect); 