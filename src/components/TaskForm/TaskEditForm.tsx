import React, { useEffect } from 'react';
import { Task } from '../../types/task';
import { useTaskEditForm } from '../../hooks/useTaskEditForm';
import { CustomModal } from '../UI';
import TaskFormBase from './TaskFormBase';
import { TaskEditFormProps } from '../../types/interfaces';

const TaskEditForm: React.FC<TaskEditFormProps> = ({ task, open, onClose }) => {
  const { form, handleSubmit } = useTaskEditForm(task, onClose);

  useEffect(() => {
    if (task && open) {
      form.setFieldsValue(task);
    }
  }, [task, open, form]);

  return (
    <CustomModal
      title="Редактирование задачи"
      open={open}
      onCancel={onClose}
    >
      <TaskFormBase
        form={form}
        onFinish={handleSubmit}
        submitText="Сохранить"
        onCancel={onClose}
        showCancelButton
      />
    </CustomModal>
  );
};

export default React.memo(TaskEditForm); 