import Stack from '@mui/material/Stack'
import type { StackProps } from '@mui/material/Stack'
import type { ReactNode } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
//
import type { ItemProps } from './types'

interface DroppableStackSlots {
    after?: ReactNode
    before?: ReactNode
}

export interface DroppableStackProps<T extends ItemProps> {
    droppableId: string
    items: T[]
    renderItem(props: T): ReactNode
    slots?: DroppableStackSlots
    stackProps?: StackProps
}

export function DroppableStack<T extends ItemProps>(props: DroppableStackProps<T>) {
    const { droppableId, items, renderItem, slots, stackProps } = props

    return (
        <>
            {slots?.before}
            <Droppable droppableId={droppableId}>
                {(provided) => (
                    <Stack ref={provided.innerRef} {...stackProps}>
                        {items.map((item, index) => (
                            <Draggable
                                key={`${droppableId}-${item.draggableId}`}
                                draggableId={String(item.draggableId)}
                                index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                        {renderItem(item)}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </Stack>
                )}
            </Droppable>
            {slots?.after}
        </>
    )
}
