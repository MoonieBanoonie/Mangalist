import React, {Component} from 'react';
import MangaListComponent from './MangaListComponent';
import MangaComponent from './MangaComponent';
import NewMangaComponent from './NewMangaComponent';
import Navbarcomponent from './Navbarcomponent';
import Banner from './Banner';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}from "react-router-dom";


class MangaApp extends Component {


  render(){
     return (
       <Router>
         <Banner/>
         <Navbarcomponent />
        <Switch>
          <Route path="/" exact component={MangaListComponent} />
          <Route path="/manga/:id" component={MangaComponent} />
          <Route exact path="/newmanga" component={NewMangaComponent} />
          <Route exact path="/about">
          <div className="container">
          <h1>Made by MoonieBanoonie</h1>
          <p>This is a simple CRUD app where I can keep track of which mangas I read, what chapter I'm currently on and redirecting me to the manga's website to read the manga.
           It's possible to add, update, remove and to filter for a manga based on its title.
           The information is stored on my localhost database.
           </p>
          <p>Technologies used: Spring Boot, MySQL and React</p>
          </div>
          </Route>
        </Switch>
       </Router>
     )
   }
 }

export default MangaApp