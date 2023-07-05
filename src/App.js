import {Route, Switch, Redirect} from 'react'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/courses/:id" component={CourseDetails} />
    <Route path="not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
