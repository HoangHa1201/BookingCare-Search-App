import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
          <Home />
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
