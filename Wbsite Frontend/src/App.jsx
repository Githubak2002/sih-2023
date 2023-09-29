// import './App.css'
// import Assessment from './components/Assessment'
import Quiz from './components/Assessment2'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Result from './components/Result'

import Home from './components/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='quiz' element={<Quiz />} />
          <Route path='result' element={<Result />} /> 
          
        </Routes>

      
      {/* <Assessment /> */}
      </Router>

    </>
  )
}

export default App
