export type TodosType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TaskType = {
  title: string;
  taskId: number;
  dateRange: [Date, Date];
  description: string;
  tag: string;
  isComplete: boolean;
};
