import { useState, useEffect } from "react";
import TaskList from "#components/taskList";
import { loadTodos } from "#services/todo";
import { mapTodosToTaskProps } from "./functions";
import { TaskType } from "#types/task";
import s from "./app.module.scss";

function App() {
  const [todo, setTodo] = useState<TaskType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  
  useEffect(() => {
    const loadData = async () => {
      const data = await loadTodos({ page: page, limit: 10 });
      const taskData = mapTodosToTaskProps(data.data);
      setTodo([...todo, ...taskData]);
      setPage(page + 1);
      setTotalCount(data.headers['x-total-count'])
      setFetching(false);
    };
    if (fetching) {
      loadData();
    }
  }, [fetching]);

  const intersectionHandler = async (isInView: boolean) => {
    if (isInView && todo.length < totalCount) {
      setFetching(true)
    }
  }

  return (
    <div className={s.main}>
      {!!todo && (
        <div className={s.wrapper}>
          <TaskList data={todo} handler={intersectionHandler} totalCount={totalCount} />
        </div>
      )}
    </div>
  );
}

export default App;
