import styled, { createGlobalStyle } from 'styled-components';
import { Button, Modal, Select, Card, Typography, Tag, Form, Input } from 'antd';
import { Priority } from '../types/task';

const { Title, Paragraph } = Typography;

// Здесь будут размещены все стилизованные компоненты 

export const StyledTaskCard = styled(Card)`
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

export const TaskTitle = styled(Title)`
  &.ant-typography {
    font-size: 18px;
    font-weight: 600;
    color: #262626;
    margin-bottom: 12px;
  }
`;

export const TaskDescription = styled(Paragraph)`
  &.ant-typography {
    color: #595959;
    margin-bottom: 16px;
    line-height: 1.5;
  }
`;

export const TaskMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
`;

export const PriorityTag = styled(Tag)<{ $priority: Priority }>`
  text-transform: capitalize;
  padding: 4px 12px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  background: ${props => {
    switch (props.$priority) {
      case Priority.HIGH:
        return '#ff4d4f';
      case Priority.MEDIUM:
        return '#faad14';
      case Priority.LOW:
        return '#52c41a';
      default:
        return '#52c41a';
    }
  }};
`;

export const Timestamp = styled.span`
  color: #8c8c8c;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 12px;

  .anticon {
    margin-right: 4px;
  }
`;

// Стили для TaskForm
export const FormContainer = styled.div`
  margin-bottom: 32px;
  padding: 32px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 28px;
  color: #1890ff;
  font-size: 24px;
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #1890ff;
    border-radius: 2px;
  }
`;

export const FormActions = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-start;
`;

// Глобальные стили для Ant Design компонентов
export const GlobalFormStyles = createGlobalStyle`
  .ant-form-item {
    margin-bottom: 24px;
  }

  .ant-input,
  .ant-select-selector {
    border-radius: 8px !important;
    transition: all 0.3s ease !important;

    &:hover {
      border-color: #1890ff !important;
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2) !important;
    }
  }

  .ant-btn {
    border-radius: 8px;
    height: 40px;
    padding: 0 24px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .ant-btn-primary {
    background: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.35);

    &:hover {
      background: #40a9ff;
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.45);
      transform: translateY(-1px);
    }
  }
`;

// Стили для TaskList
export const ListContainer = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

export const ListTitle = styled(Title)`
  &.ant-typography {
    margin-bottom: 24px !important;
  }
`;

export const TaskListContainer = styled.div`
  margin-top: 24px;
`;

export const ListHeader = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
`;

// Дополнительные глобальные стили для Ant Design компонентов
export const GlobalTaskListStyles = createGlobalStyle`
  .ant-card-body {
    padding: 24px !important;
  }

  .ant-select {
    min-width: 140px;
  }

  .ant-btn {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ant-modal-content {
    border-radius: 12px;
    padding: 0;
  }

  .ant-modal-header {
    border-radius: 12px 12px 0 0;
    padding: 24px;
    border-bottom: 1px solid #f0f0f0;
  }

  .ant-modal-body {
    padding: 24px;
  }

  .ant-modal-footer {
    padding: 24px;
    border-top: 1px solid #f0f0f0;
  }
`;

// Стили для CustomButton
export const StyledButton = styled(Button)<{ $variant?: 'primary' | 'danger' | 'default' }>`
  border-radius: 8px;
  height: 40px;
  padding: 0 24px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: #1890ff;
          color: #fff;
          border-color: #1890ff;
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.35);

          &:hover {
            background: #40a9ff;
            border-color: #40a9ff;
            box-shadow: 0 4px 12px rgba(24, 144, 255, 0.45);
            transform: translateY(-1px);
          }
        `;
      case 'danger':
        return `
          background: #ff4d4f;
          color: #fff;
          border-color: #ff4d4f;
          box-shadow: 0 2px 8px rgba(255, 77, 79, 0.35);

          &:hover {
            background: #ff7875;
            border-color: #ff7875;
            box-shadow: 0 4px 12px rgba(255, 77, 79, 0.45);
            transform: translateY(-1px);
          }
        `;
      default:
        return `
          background: #fff;
          border-color: #d9d9d9;

          &:hover {
            color: #40a9ff;
            border-color: #40a9ff;
            transform: translateY(-1px);
          }
        `;
    }
  }}
`;

// Стили для CustomSelect
export const StyledSelect = styled(Select)`
  min-width: 140px;

  .ant-select-selector {
    border-radius: 8px !important;
    transition: all 0.3s ease !important;

    &:hover {
      border-color: #1890ff !important;
    }
  }

  &.ant-select-focused .ant-select-selector {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2) !important;
  }
`;

// Стили для CustomModal
export const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
    padding: 0;
  }

  .ant-modal-header {
    border-radius: 12px 12px 0 0;
    padding: 24px;
    border-bottom: 1px solid #f0f0f0;
  }

  .ant-modal-body {
    padding: 24px;
  }

  .ant-modal-footer {
    padding: 24px;
    border-top: 1px solid #f0f0f0;
  }
`;

// Стили для ConfirmModal
export const ConfirmModalContent = styled.div`
  padding: 20px 0;

  p {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.5;
    color: #595959;
  }
`;

export const ConfirmModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${StyledButton} {
    width: 100%;
    height: 40px;
    justify-content: center;
  }
`; 