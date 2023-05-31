import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WorkingOnIt from './pages/WorkingOnIt';
import SharedLayout from './components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects/:projectId" element={<WorkingOnIt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

console.log(`
|    Welcome to my portfolio    |

      Made with React.js
`);
