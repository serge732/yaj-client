import type { Task } from 'entities/task'

export type TasksGroup = {
    status: Task['status']
    tasks: Task[],
    title: string,
}
