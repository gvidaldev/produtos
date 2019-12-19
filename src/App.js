import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Components/Home'
import Sobre from './Components/Sobre'
import Produtos from './Components/Produtos'

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-inverse'>
          <div className='container'>
            <div className='navbar-header'>
              <Link to='/' className='navbar-brand'>
                Gerenciador de Produtos
              </Link>
            </div>
            <ul className='nav navbar-nav'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/produtos'>Produtos</Link></li>
              <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
          </div>
        </nav>

        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/sobre' component={Sobre} />
          <Route path='/produtos' component={Produtos} />
        </div>
      </div>
    </Router>
  )
}

export default App