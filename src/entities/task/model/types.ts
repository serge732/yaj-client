export interface Task {
    id: number
    name: string
    status: 'todo' | 'progress' | 'review' | 'complete'
    sort: number
}
