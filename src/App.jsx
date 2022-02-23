import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import routes from './routes';
import Header from './components/Header';

export default function App() {

 const element = useRoutes(routes)

  return (
    <div>
      <div className='row'>
        <Header />
      </div>

      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className='list-group'>
             <NavLink className="list-group-item" end to="/about">About</NavLink>
             <NavLink className="list-group-item" end to="/home">Home</NavLink>
           </div>
        </div>
      </div>

      <div className="col-xs-6">
        <div className="panel">
          <div className='panel-body'>
          
          {/* <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/" element={<Navigate to="/about"/>}/>
          </Routes> */}

          {element}
          </div>
        </div>
      </div>
      
    </div>
  )
}

