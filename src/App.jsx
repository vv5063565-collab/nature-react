import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeNature from './components/HomeNature'
import AboutNature from './components/AboutNature'
import ServicesNature from './components/ServicesNature'
import ContactNature from './components/ContactNature'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeNature />} />
        <Route path='/AboutNature' element={<AboutNature />} />
        <Route path='/ServiceNature' element={<ServicesNature />} />
        <Route path='/ContactNature' element={<ContactNature />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App