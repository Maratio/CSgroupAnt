import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import { StyledButton } from '../../styles';

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'danger' | 'default';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'default',
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      $variant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton; 