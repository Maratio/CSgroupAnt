import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Task, Priority } from '../types/task';

interface TaskState {
  tasks: Task[];
  filter: Priority | 'all';
  sortOrder: 'asc' | 'desc';
  lastOrderNumber: number;
}

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
  sortOrder: 'desc',
  lastOrderNumber: 0,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
        state.lastOrderNumber = Math.max(state.lastOrderNumber, action.payload.orderNumber);
      },
      prepare: (title: string, description: string, priority: Priority) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
          priority,
          createdAt: new Date().toISOString(),
          orderNumber: Date.now(),
        },
      }),
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        const orderNumber = state.tasks[index].orderNumber;
        state.tasks[index] = { ...action.payload, orderNumber };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<Priority | 'all'>) => {
      state.filter = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, setFilter, setSortOrder } = taskSlice.actions;
export default taskSlice.reducer; 