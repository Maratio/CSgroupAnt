import { useMemo } from 'react';
import { Task, Priority } from '../types/task';
import { useAppSelector } from './redux';

export const useFilter = () => {
  const { tasks, filter, sortOrder } = useAppSelector(state => state.tasks);

  const filteredAndSortedTasks = useMemo(() => {
    let result = [...tasks];
    
    // Фильтрация
    if (filter !== 'all') {
      result = result.filter(task => task.priority === filter);
    }

    // Сортировка
    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [tasks, filter, sortOrder]);

  // Вспомогательные функции для работы с задачами
  const getTasksByPriority = (priority: Priority) => {
    return tasks.filter(task => task.priority === priority);
  };

  const getTasksCount = () => ({
    total: tasks.length,
    high: getTasksByPriority(Priority.HIGH).length,
    medium: getTasksByPriority(Priority.MEDIUM).length,
    low: getTasksByPriority(Priority.LOW).length,
  });

  return {
    tasks: filteredAndSortedTasks,
    tasksStats: getTasksCount(),
    filter,
    sortOrder,
  };
}; 