import { useEffect, useCallback } from 'react';
import { addTask } from '../store/taskSlice';
import { Priority } from '../types/task';
import { useAppDispatch } from './redux';

export const useAutoTaskGenerator = () => {
  const dispatch = useAppDispatch();

  const generateRandomTask = useCallback(() => {
    const priorities = [Priority.LOW, Priority.MEDIUM, Priority.HIGH];
    const randomPriority = priorities[Math.floor(Math.random() * priorities.length)];
    const randomNumber = Math.floor(Math.random() * 1000);

    dispatch(addTask(
      `Автоматическая задача ${randomNumber}`,
      `Это автоматически сгенерированная задача #${randomNumber}`,
      randomPriority
    ));
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
      setTimeout(generateRandomTask, randomDelay);
    }, 20000);

    return () => clearInterval(interval);
  }, [generateRandomTask]);
}; 