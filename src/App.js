import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';

function App() {
  return (
    <div id="wrap">
		<Routes>
			<Route path='/' exact element={<Home />} />
			<Route path='/detail/:id' element={<Detail />} />
		</Routes>
    </div>
  );
}

export default App;
