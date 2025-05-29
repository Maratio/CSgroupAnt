import React from 'react';
import { ModalProps } from 'antd/lib/modal';
import { StyledModal } from '../../styles';

interface CustomModalProps extends ModalProps {
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledModal
      {...props}
      footer={null}
      maskClosable={false}
    >
      {children}
    </StyledModal>
  );
};

export default CustomModal; 