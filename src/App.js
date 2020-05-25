import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import blog from './pages/blog/blog.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Author from './pages/author/author.component'
import blogpage from './pages/blog-page/blog-page.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={blog} />
        <Route path='/trending' component={blog} />
        <Route path='/author/:author' component={Author} />
        <Route path='/blog-page/:title' component={blogpage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
