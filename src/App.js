import {Route, BrowserRouter, Switch} from 'react-router-dom' 
import {Home} from './components/Home'
import {Contact} from './components/Contact'
import About from './components/About'
import Header from './components/Header'
import {NotFound} from './components/NotFound'
import './App.css'

const App = () => (
  <div className="main">
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Switch className="sub-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
)

export default App
