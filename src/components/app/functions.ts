import { TodosType, TaskType } from "#types/task";
import { faker } from "@faker-js/faker";

export const mapTodosToTaskProps: (data: TodosType[]) => TaskType[] = (
  data
) => {
  return data.map((item) => {
    const { id, title, completed } = item;
    const startDate = faker.date.past();
    const endDate = faker.date.past({ refDate: startDate });
    return {
      title: title,
      taskId: id,
      isComplete: completed,
      tag: faker.hacker.noun(),
      description: faker.lorem.paragraph(2),
      dateRange: [startDate, endDate],
    };
  });
};
