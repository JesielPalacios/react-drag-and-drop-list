import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './styles.css';

import { List } from './components/List';

import { initialTasks } from './tasks';

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="app">
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
          );

          console.log(result);
        }}
      >
        <h1>Organice las herramientas (verticalmente)</h1>
        <List tasks={tasks} />
      </DragDropContext>

      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
          );

          console.log(result);
        }}
      >
        <h1>Organice las herramientas (horizontalmente)</h1>
        <List tasks={tasks} horizontal={true} />
      </DragDropContext>
    </div>
  );
};
