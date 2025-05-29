import React, { memo } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { useTaskActions } from '../../hooks/useTaskActions';
import { ConfirmModal } from '../UI';
import TaskCard from '../TaskCard/TaskCard';
import TaskListHeader from './TaskListHeader';
import TaskEditForm from '../TaskForm/TaskEditForm';
import { ListContainer, TaskListContainer, GlobalTaskListStyles } from '../styles';

const TaskList: React.FC = () => {
  const { tasks } = useFilter();
  const {
    editingTask,
    setEditingTask,
    handleEdit,
    handleDelete,
    deleteConfirmation,
    handleConfirmDelete,
    handleCancelDelete,
    getPriorityColor,
    getPriorityText,
  } = useTaskActions();

  return (
    <ListContainer>
      <GlobalTaskListStyles />
      <TaskListHeader />
      
      <TaskListContainer>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            getPriorityColor={getPriorityColor}
            getPriorityText={getPriorityText}
          />
        ))}
      </TaskListContainer>

      <TaskEditForm
        task={editingTask}
        open={!!editingTask}
        onClose={() => setEditingTask(null)}
      />

      <ConfirmModal
        title="Удаление задачи"
        content="Вы уверены, что хотите удалить эту задачу? Это действие нельзя отменить."
        open={deleteConfirmation.isOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        confirmText="Удалить"
        cancelText="Отмена"
      />
    </ListContainer>
  );
};

export default memo(TaskList); 