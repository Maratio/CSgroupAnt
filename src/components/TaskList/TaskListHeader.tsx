import React, { memo } from 'react';
import TaskFilters from '../TaskFilters/TaskFilters';
import { ListTitle } from '../styles';

const TaskListHeader: React.FC = () => {
  return (
    <>
      <ListTitle level={4}>
        Список задач
      </ListTitle>
      <TaskFilters />
    </>
  );
};

export default memo(TaskListHeader); 