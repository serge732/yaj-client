import { Provider as ReduxProvider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//
/* pages */
import { BoardPage } from 'pages/BoardPage'
/* widgets */
import { SignupDialog } from 'widgets/SignupDialog'
import { TaskEditorDialog } from 'widgets/TaskEditorDialog'
/* shared */
import { store } from 'shared/store'
//
import './style.scss'

const router = createBrowserRouter([
    {
        path: '/',
        element: <BoardPage />
    }
])

export function App() {
    return (
        <ReduxProvider store={store}>
            <RouterProvider router={router} />
            <SignupDialog />
            <TaskEditorDialog />
        </ReduxProvider>
    )
}
