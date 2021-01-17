import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ArticleList, ArticleInsert, ArticleUpdate,Login,EmployeeArticle } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
         
            <Switch>
            <Route path="/" exact component={Login} />
                <Route path="/article/list" exact component={ArticleList} />
                <Route path="/article/create" exact component={ArticleInsert} />
                
                <Route path="/article/update/:id" exact component={ArticleUpdate} />
                <Route path="/article/create" exact component={ArticleInsert} />
               
                <Route path="/article/EmployeeArticle" exact component={EmployeeArticle} />
            </Switch>
        </Router>
    )
}
export default App