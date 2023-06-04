import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from 'pages/homepage';
import Project from 'pages/project';
import SharedLayout from 'components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/project/:projectId" element={<Project />} />
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
