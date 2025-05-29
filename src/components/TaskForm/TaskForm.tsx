import React from 'react';
import { useTaskForm } from '../../hooks/useTaskForm';
import TaskFormBase from './TaskFormBase';
import { FormContainer, FormTitle, GlobalFormStyles } from '../styles';

const TaskForm: React.FC = () => {
  const { form, handleSubmit } = useTaskForm();

  return (
    <FormContainer>
      <GlobalFormStyles />
      <FormTitle>Новая задача</FormTitle>
      <TaskFormBase
        form={form}
        onFinish={handleSubmit}
        submitText="Добавить задачу"
      />
    </FormContainer>
  );
};

export default TaskForm; 