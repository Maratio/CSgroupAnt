import { useCallback, useMemo } from 'react';
import { Form } from 'antd';
import { Task } from '../types/task';
import { editTask } from '../store/taskSlice';
import { useAppDispatch } from './redux';
import { TaskFormValues } from '../types/interfaces';

export const useTaskEditForm = (task: Task | null, onClose: () => void) => {
  const [form] = Form.useForm<TaskFormValues>();
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((values: TaskFormValues) => {
    if (task) {
      dispatch(editTask({ ...task, ...values }));
      onClose();
    }
  }, [dispatch, task, onClose]);

  return useMemo(() => ({
    form,
    handleSubmit,
  }), [form, handleSubmit]);
}; 