export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  createdAt: string;
  orderNumber: number;
}

export interface TaskState {
  tasks: Task[];
  filter: Priority | 'all';
  sortOrder: 'asc' | 'desc';
} 