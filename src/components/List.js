import { Droppable, Draggable } from "react-beautiful-dnd";

export const List = (props) => {
  const { tasks, horizontal } = props;
  return (
    <Droppable
      droppableId="tasks"
      direction={horizontal ? "horizontal" : "vertical"}
    >
      {horizontal
        ? (droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="task-container2"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(justAParam) => (
                    <li
                      {...justAParam.draggableProps}
                      ref={justAParam.innerRef}
                      {...justAParam.dragHandleProps}
                      className="task-item"
                    >
                      {task.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )
        : (droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="task-container"
            >
              {tasks.map((task, index) => (

                // <Draggable key={task.id} draggableId={task.id} index={index}>
                //   {(justAParam) => (
                //     <li
                //       {...justAParam.draggableProps}
                //       ref={justAParam.innerRef}
                //       {...justAParam.dragHandleProps}
                //       className="task-item"
                //     >
                //       {task.text}
                //     </li>
                //   )}
                // </Draggable>                
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(justAParam) => {
                    return (
                      <li
                        {...justAParam.draggableProps}
                        ref={justAParam.innerRef}
                        {...justAParam.dragHandleProps}
                        className="task-item"
                      >
                        {task.text}
                      </li>
                    );
                  }}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
    </Droppable>
  );
};
