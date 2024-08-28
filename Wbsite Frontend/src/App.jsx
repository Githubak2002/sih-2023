// import './App.css'
// import Assessment from './components/Assessment'
import Quiz from './components/Assessment2'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import QuizResult from './pages/quiz res/QuizResult'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'

import Home from './components/Home'

// created recently
import Quiz01 from './pages/try quiz with db/Quiz'

function App() {
  return (
    <main className=' max-w-[1440px] mx-auto'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/quiz' element={< Quiz01 />} />
          <Route path='/result' element={<QuizResult />} /> 

          {/* ===== previous temp quiz with result page ===== */}
          {/* <Route path='quiz' element={<Quiz />} /> */}
          {/* <Route path='result' element={<Result />} />  */}
          <Route path='/dashboard' element={<Dashboard />} /> 
          
        </Routes>

      
      {/* <Assessment /> */}
      </Router>

    </main>
  )
}

export default App
