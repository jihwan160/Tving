import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div id="wrap">
		<Routes>
			<Route path='/' exact element={<Home />} />
		</Routes>
    </div>
  );
}

export default App;
