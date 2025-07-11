# Приложение для управления задачами

Приложение для управления задачами, разработанное с использованием React, TypeScript и Redux. Проект демонстрирует современные практики разработки, включая разделение бизнес-логики и представления, использование кастомных хуков и компонентную архитектуру.

## Технологии

- React
- TypeScript
- Redux Toolkit
- Styled Components
- Ant Design
- Webpack

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── TaskCard/       # Компонент карточки задачи
│   ├── TaskList/       # Компонент списка задач
│   ├── TaskForm/       # Компоненты форм
│   ├── TaskFilters/    # Компоненты фильтрации
│   ├── UI/             # Переиспользуемые UI компоненты
│   └── AutoTaskGenerator/ # Генератор автоматических задач
├── hooks/              # Кастомные хуки
├── store/              # Redux store и слайсы
├── types/              # TypeScript типы и интерфейсы
├── styles/             # Глобальные стили и темы
└── styled/             # Styled Components компоненты
```

## Стилизация с Styled Components

### Организация стилей

1. **Базовые компоненты**
   - Основные стилизованные компоненты в `/styled/base`
   - Переиспользуемые стилевые примитивы
   - Темизация через ThemeProvider

2. **Компонентные стили**
   - Каждый компонент имеет свой styled-файл
   - Локальная стилизация внутри компонентов
   - Использование пропсов для динамических стилей

3. **Глобальные стили**
   - Настройка GlobalStyle
   - Определение тем и цветовых схем
   - Переменные темы в ThemeProvider

### Примеры использования

```typescript
// Пример стилизованного компонента
const StyledTaskCard = styled.div<{ priority: string }>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors[props.priority]};
`;

// Пример темы
const theme = {
  colors: {
    primary: '#1890ff',
    secondary: '#52c41a',
    background: '#ffffff',
    high: '#ff4d4f',
    medium: '#faad14',
    low: '#52c41a',
  },
};
```

## Компоненты

### Основные компоненты

1. **TaskList**
   - Основной контейнерный компонент
   - Композиция компонентов TaskCard, TaskListHeader
   - Управление модальными окнами
   - Стилизация через Styled Components

2. **TaskCard**
   - Отображение отдельной задачи
   - Мемоизированный для оптимизации производительности
   - Динамические стили на основе пропсов

3. **TaskForm**
   - Базовая форма для создания/редактирования задач
   - Переиспользуемый компонент TaskFormBase
   - Интеграция с Ant Design Form
   - Кастомные стилизованные элементы форм

4. **TaskFilters**
   - Фильтрация по приоритету
   - Сортировка по дате
   - Стилизованные компоненты фильтров

### UI компоненты

- **StyledButton** - Кастомная кнопка с темизацией
- **StyledSelect** - Стилизованный селект
- **StyledModal** - Модальное окно с кастомными стилями
- **StyledConfirmModal** - Стилизованное модальное окно подтверждения

## Хуки

### Бизнес-логика

1. **useTaskActions**
   - Управление действиями с задачами
   - CRUD операции
   - Обработка модальных окон

2. **useTaskFilters**
   - Логика фильтрации и сортировки
   - Интеграция с Redux
   - Мемоизированные обработчики

3. **useTheme**
   - Управление темой приложения
   - Переключение между светлой и темной темами
   - Доступ к переменным темы

## Архитектура

### Стилизация и компонентный подход

1. **Styled Components**
   - Изоляция стилей на уровне компонентов
   - Динамическая стилизация через пропсы
   - Поддержка тем и глобальных стилей

2. **Переиспользование стилей**
   - Базовые стилизованные компоненты
   - Миксины и хелперы
   - Консистентный дизайн

### Оптимизация производительности

1. **Мемоизация**
   - Компоненты обернуты в React.memo
   - Использование useMemo для вычислений
   - useCallback для обработчиков

2. **Styled Components оптимизации**
   - Статические стили
   - Переиспользование компонентов
   - Оптимизация рендеринга

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Сборка проекта
npm run build
```
