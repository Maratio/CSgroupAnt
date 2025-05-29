import React, { useMemo } from 'react';
import { Priority } from '../../types/task';
import { useTaskFilters } from '../../hooks/useTaskFilters';
import { CustomSelect } from '../UI';
import { FilterContainer } from '../styles';

const TaskFilters: React.FC = () => {
  const { filter, sortOrder, handleFilterChange, handleSortChange } = useTaskFilters();

  const priorityOptions = useMemo(() => [
    { value: 'all', label: 'Все приоритеты' },
    { value: Priority.LOW, label: 'Низкий приоритет' },
    { value: Priority.MEDIUM, label: 'Средний приоритет' },
    { value: Priority.HIGH, label: 'Высокий приоритет' },
  ], []);

  const sortOptions = useMemo(() => [
    { value: 'desc', label: 'Сначала новые' },
    { value: 'asc', label: 'Сначала старые' },
  ], []);

  return (
    <FilterContainer>
      <CustomSelect
        value={filter}
        onChange={handleFilterChange}
        options={priorityOptions}
        placeholder="Фильтр по приоритету"
      />

      <CustomSelect
        value={sortOrder}
        onChange={handleSortChange}
        options={sortOptions}
        placeholder="Сортировка по дате"
      />
    </FilterContainer>
  );
};

export default React.memo(TaskFilters); 