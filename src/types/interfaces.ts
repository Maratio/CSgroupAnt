import { Priority, Task } from './task';
import { SelectProps } from 'antd/lib/select';

// Form interfaces
export interface TaskFormValues {
  title: string;
  description: string;
  priority: Priority;
}

export interface TaskFormBaseProps {
  form: any;
  onFinish: (values: TaskFormValues) => void;
  submitText: string;
  onCancel?: () => void;
  showCancelButton?: boolean;
}

export interface TaskEditFormProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
}

// Select interfaces
export interface SelectOption {
  value: string | number;
  label: string;
}

export interface CustomSelectProps extends Omit<SelectProps, 'options'> {
  options: SelectOption[];
}

// Task related interfaces
export interface DeleteConfirmation {
  isOpen: boolean;
  taskId: string | null;
}

export interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  getPriorityColor: (priority: Task['priority']) => string;
  getPriorityText: (priority: Task['priority']) => string;
}

// Modal interfaces
export interface ConfirmModalProps {
  title: string;
  content: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
} 