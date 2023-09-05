import React, {useState} from "react";
import cn from "classnames";
import { ReactComponent as IconTriangle} from "./icons/triangle.svg";
import { TaskType } from "#types/task";
import { firstLetterToUpperCase, displayDate } from "#helpers/formatting";
import s from "./taskItem.module.scss";

type Props = {
  data: TaskType;
};

const TaskItem: React.FC<Props> = ({ data }) => {
  const { title, taskId, dateRange, description, tag, isComplete } = data;

  const [complete, setComplete] = useState(isComplete);

  const inputHandler = () => {
    setComplete((value) => !value)
  }

  return (
    <div className={s.panel}>
      <div className={s.title}>
        <span className={s.customCheckobox}>
          <input type="checkbox" id={`${taskId}`} checked={complete} onChange={inputHandler}/>
        </span>
        <label className={s.checkboxLabel} htmlFor={`${taskId}`}>
          {firstLetterToUpperCase(title)}
        </label>
      </div>
      <div className={s.range}>
        {
          dateRange.map((item) => {
            return (
              <div className={s.date} key={`${item}`}>{`${displayDate(item)}`}</div>
            )
          })
        }
      </div>
      <div className={s.description}>
        {
          description
        }
      </div>
      <div className={s.bottom}>
        <div className={s.tags}>
          <div className={s.tag}>
            <div className={s.label}>{firstLetterToUpperCase(tag)}</div>
          </div>
          <div className={s.tag}>
            <div className={cn(s.label, s.last)}>
              Front-end
              <div className={s.icon}>
                <IconTriangle />
              </div>
            </div>
          </div>
        </div>
        <div className={s.avatar}>
          <div className={s.image}>
            <img src="/avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
