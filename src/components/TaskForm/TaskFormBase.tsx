import React, { useMemo } from 'react';
import { Form, Input } from 'antd';
import { Priority } from '../../types/task';
import { CustomButton, CustomSelect } from '../UI';
import { TaskFormBaseProps } from '../../types/interfaces';
import { FormActions } from '../styles';

const { TextArea } = Input;

const TaskFormBase: React.FC<TaskFormBaseProps> = ({
  form,
  onFinish,
  submitText,
  onCancel,
  showCancelButton = false,
}) => {
  const priorityOptions = useMemo(() => [
    { value: Priority.LOW, label: 'Низкий' },
    { value: Priority.MEDIUM, label: 'Средний' },
    { value: Priority.HIGH, label: 'Высокий' },
  ], []);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ priority: Priority.MEDIUM }}
    >
      <Form.Item
        name="title"
        label="Название"
        rules={[{ required: true, message: 'Пожалуйста, введите название задачи!' }]}
      >
        <Input placeholder="Введите название задачи" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Описание"
        rules={[{ required: true, message: 'Пожалуйста, введите описание задачи!' }]}
      >
        <TextArea rows={4} placeholder="Введите описание задачи" />
      </Form.Item>

      <Form.Item
        name="priority"
        label="Приоритет"
        rules={[{ required: true, message: 'Пожалуйста, выберите приоритет!' }]}
      >
        <CustomSelect options={priorityOptions} />
      </Form.Item>

      <FormActions>
        {showCancelButton && (
          <CustomButton onClick={onCancel} style={{ marginRight: 12 }}>
            Отмена
          </CustomButton>
        )}
        <CustomButton type="primary" htmlType="submit" variant="primary">
          {submitText}
        </CustomButton>
      </FormActions>
    </Form>
  );
};

export default React.memo(TaskFormBase); 