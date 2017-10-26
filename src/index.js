import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import createStore from './redux'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import Trainings from './components/Trainings'

const ArticleRoute = () => <Article title="Un article"><p>Lorem ipsum ...</p></Article>

const Training = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h3>Training with id : {match.params.id}</h3>
    </div>
  )
}

ReactDOM.render(
  <Provider store={createStore()} >
    <Router>
      <div>
        <Header />
        <ul>
          <li><Link to="/trainings">trainings</Link></li>
          <li><Link to="/article">article</Link></li>
          <li><a href="http://openska.com">Openska</a></li>
        </ul>
        <Switch>
          <Route path="/trainings/:id" component={Training}/>
          <Route path="/trainings" component={Trainings} />
          <Route path="/article" component={ArticleRoute}/>
          <Redirect from="/(.+)" to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
