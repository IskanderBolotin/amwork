import React, { useEffect } from "react";
import TaskItem from "#components/taskItem";
import { TaskType } from "#types/task";
import { ReactComponent as IconPlus } from "./icons/plus.svg";
import { useInView } from "react-intersection-observer";
import cn from "classnames";
import s from "./taskList.module.scss";

type Props = {
  data: TaskType[];
  totalCount: number;
  handler: (isView: boolean) => void;
};

const TaskList: React.FC<Props> = ({ data, totalCount, handler }) => {
  const isDataAray = data.length > 0;
  const isLoading = data.length < totalCount;

  const { ref: loadingRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    handler(inView);
  }, [inView]);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.date}>Today</div>
        <div className={s.activity}>
          <div className={s.activeityItem}>
            <button className={s.plus}>
              <IconPlus />
            </button>
          </div>
          <div className={s.activeityItem}>
            <div className={s.counter}>{data.length}</div>
          </div>
        </div>
      </div>
      <div className={s.overflow}>
        <ul className={s.list}>
          {data.map((task, index, arr) => {
            return (
              <li
                className={cn(s.item, index == arr.length - 1 && s.last)}
                key={task.taskId}
              >
                <TaskItem data={task} />
              </li>
            );
          })}
          {isDataAray && isLoading && (
            <li className={s.loading} key="loading" ref={loadingRef}>
              <div className={s.loadRing}>
                <div className={s.loadInner}></div>
                <div className={s.loadInner}></div>
                <div className={s.loadInner}></div>
                <div className={s.loadInner}></div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
