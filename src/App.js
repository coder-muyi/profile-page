import { Route, Routes, BrowserRouter } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import WorkingOnIt from './pages/WorkingOnIt';
import SharedLayout from './components/SharedLayout'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/working-on-it" element={<WorkingOnIt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

console.log("Samuel Adepoju MADE THIS!!! 😁😁")