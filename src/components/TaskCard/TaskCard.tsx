import React, { memo } from 'react';
import { EditOutlined, DeleteOutlined, ClockCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { TaskCardProps } from '../../types/interfaces';
import { CustomButton } from '../UI';
import {
  StyledTaskCard,
  TaskTitle,
  TaskDescription,
  TaskMeta,
  PriorityTag,
  Timestamp,
  TaskActions
} from '../styles';

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  getPriorityColor,
  getPriorityText,
}) => {
  const priorityText = getPriorityText(task.priority);
  const taskNumber = Math.floor(task.orderNumber / 1000);
  const formattedDate = moment(task.createdAt).format('DD.MM.YYYY HH:mm');

  return (
    <StyledTaskCard>
      <TaskTitle level={5}>
        Задача №{taskNumber} - {task.title}
      </TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskMeta>
        <PriorityTag $priority={task.priority}>
          {priorityText}
        </PriorityTag>
        <Timestamp>
          <ClockCircleOutlined />
          Создано: {formattedDate}
        </Timestamp>
      </TaskMeta>
      <TaskActions>
        <CustomButton
          variant="primary"
          icon={<EditOutlined />}
          onClick={() => onEdit(task)}
        >
          Изменить
        </CustomButton>
        <CustomButton
          variant="danger"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(task.id)}
        >
          Удалить
        </CustomButton>
      </TaskActions>
    </StyledTaskCard>
  );
};

export default memo(TaskCard); 