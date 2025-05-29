import React from 'react';
import { Modal } from 'antd';
import { CustomButton } from '../..';
import { ConfirmModalContent, ConfirmModalButtons } from '../../../styles';

interface ConfirmModalProps {
  title: string;
  content: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  content,
  open,
  onConfirm,
  onCancel,
  confirmText = 'Подтвердить',
  cancelText = 'Отмена',
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      footer={null}
      maskClosable={false}
    >
      <ConfirmModalContent>
        <p>{content}</p>
        <ConfirmModalButtons>
          <CustomButton
            variant="danger"
            onClick={onConfirm}
          >
            {confirmText}
          </CustomButton>
          <CustomButton
            onClick={onCancel}
          >
            {cancelText}
          </CustomButton>
        </ConfirmModalButtons>
      </ConfirmModalContent>
    </Modal>
  );
};

export default ConfirmModal; 