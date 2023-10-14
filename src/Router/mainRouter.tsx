import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Static/Layout'
import Homepage from '../Pages/Homepage'
import TaskPage from '../Pages/TaskPage'



export const Mainrouter = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Homepage/>
        }
    ],
    
},
{
    path: '/add-newtask',
    element: <TaskPage/>
}
])