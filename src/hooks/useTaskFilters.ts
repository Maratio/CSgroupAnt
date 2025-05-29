import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { setFilter, setSortOrder } from '../store/taskSlice';
import { Priority } from '../types/task';

export type FilterValue = Priority | 'all';
export type SortValue = 'asc' | 'desc';

export const useTaskFilters = () => {
  const dispatch = useAppDispatch();
  const { filter, sortOrder } = useAppSelector(state => state.tasks);

  const handleFilterChange = useCallback((value: FilterValue) => {
    dispatch(setFilter(value));
  }, [dispatch]);

  const handleSortChange = useCallback((value: SortValue) => {
    dispatch(setSortOrder(value));
  }, [dispatch]);

  return useMemo(() => ({
    filter,
    sortOrder,
    handleFilterChange,
    handleSortChange,
  }), [filter, sortOrder, handleFilterChange, handleSortChange]);
}; 