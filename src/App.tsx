import { Mainrouter } from './Router/mainRouter';
import {RouterProvider} from 'react-router-dom'


function App() {
  return (
    <div>
      <RouterProvider router={Mainrouter}/>
    </div>
  );
}

export default App;
