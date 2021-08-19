import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Login from './components/general/Login'
import Register from './components/general/Register'
import Error404 from './components/general/Error'
import Home from './components/general/Home'
import About from './components/general/About'
import Contacts from './components/general/Contacts'

import Dashboard from './components/User/Dashboard'
import Profile from './components/User/Profile'

import ArticleJobDetails from './components/User/ArticleJobDetails'
import BlogJobDetails from './components/User/BlogJobDetails'

import AdvertJobDetails from './components/User/AdvertJobDetails'
import './App.css'
import Forgotpassword from './components/general/Forgotpassword'
import PassReset from './components/general/PassReset'
import EmailActive from './components/general/EmailActive'
import Notification from './components/User/Notification'
import Withdrawal from './components/User/Withdrawal'
import JobInfo from './components/User/JobInfo'
import JobList from './components/User/JobList'
import Checkout from './components/User/Checkout'
import WorkNotification from './components/User/JobInfo'

export const loginStatus = JSON.parse(localStorage.getItem('status'))
function App() {
  const protectRoute1 = (Component) => {
    if (loginStatus) {
      return Component
    }
    return <Redirect to="/login" />
  }
  const protectRoute2 = (Component) => {
    if (!loginStatus) {
      return Component
    }
    return <Redirect to="/" />
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />

        <Route
          path="/register"
          exact
          component={() => protectRoute2(<Register />)}
        />
        <Route path="/login" exact component={() => protectRoute2(<Login />)} />

        <Route
          path="/user/dashboard"
          exact
          component={() => protectRoute1(<Dashboard />)}
        />
        <Route
          path="/user/jobs/joblist/articlejobs/:slug"
          exact
          component={() => protectRoute1(<ArticleJobDetails />)}
        />

        <Route
          path="/user/jobs/joblist/blogsjobs/:slug"
          exact
          component={() => protectRoute1(<BlogJobDetails />)}
        />

        <Route
          path="/user/jobs/joblist/advertjob/:slug"
          exact
          component={() => protectRoute1(<AdvertJobDetails />)}
        />
        <Route
          path="/user/joblist"
          exact
          component={() => protectRoute1(<JobList />)}
        />
        <Route
          path="/user/profile"
          exact
          component={() => protectRoute1(<Profile />)}
        />

        <Route
          path="/user/notification"
          exact
          component={() => protectRoute1(<Notification />)}
        />
        <Route
          path="/user/workinformation"
          exact
          component={() => protectRoute1(<WorkNotification />)}
        />
        <Route
          path="/user/withdrawal"
          exact
          component={() => protectRoute1(<Checkout />)}
        />
        <Route
          path="/user/mainwithdrawal"
          exact
          component={() => protectRoute1(<Withdrawal />)}
        />

        <Route
          path="/user/passwordreset"
          exact
          component={() => protectRoute2(<Forgotpassword />)}
        />
        <Route
          path="/user/jobinfo"
          exact
          component={() => protectRoute1(<JobInfo />)}
        />
        <Route
          path="/user/passwordupdate/:token"
          exact
          component={() => protectRoute2(<PassReset />)}
        />
        <Route
          path="/user/activate/:token"
          exact
          component={() => protectRoute2(<EmailActive />)}
        />

        <Route path="/contact" exact component={Contacts} />

        <Route exact component={Error404} />
      </Switch>
    </Router>
  )
}

export default App
