import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
//
import type { Task } from '../model'

export interface TaskCardProps {
    task: Task
}

export function TaskCard(props: TaskCardProps) {
    const { task } = props

    return (
        <Card>
            <CardContent>
                <Typography>
                    {task.name}
                </Typography>
            </CardContent>
        </Card>
    )
}
