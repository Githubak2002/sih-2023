// import './App.css'
// import Assessment from './components/Assessment'
import Quiz from './components/Assessment2'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Result from './components/Result'
import Dashboard from './components/Dashboard'

import Home from './components/Home'

function App() {
  return (
    <main className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='quiz' element={<Quiz />} />
          <Route path='result' element={<Result />} /> 
          <Route path='dashboard' element={<Dashboard />} /> 
          
        </Routes>

      
      {/* <Assessment /> */}
      </Router>

    </main>
  )
}

export default App
