import React, {Component} from 'react';
import MangaDataService from '../service/MangaDataService.js';
import "./MangaListComponent.css";

class MangaListComponent extends Component{

  constructor(props){
    super(props)
    this.state = {
      mangas:[],
      search:''
    }

    this.refreshMangas = this.refreshMangas.bind(this)
    this.deleteMangaClicked = this.deleteMangaClicked.bind(this)
    this.updateMangaClicked = this.updateMangaClicked.bind(this)
  }

  componentDidMount(){
   this.refreshMangas();
  }

  refreshMangas(){
    MangaDataService.retrieveAllManga()
      .then(
        response=>{
          this.setState({mangas:response.data})
          console.log(response.data)
         }
     )
}

  deleteMangaClicked(id) {
    MangaDataService.deleteManga(id)
      .then(
        response => {
          this.setState({ message: `Manga deleted` })
          this.refreshMangas()
        }
    )
}

updateMangaClicked(id) {
   this.props.history.push(`/manga/${id}`)
}

  updateSearch(event){
    console.log(event.target.value)
    this.setState({search:event.target.value})
  }

render(){
  const filteredMangas = this.state.mangas.filter(
    (manga) => {
    if(manga.title.toLowerCase().split(' ').join('').indexOf(this.state.search.toLowerCase().split(' ').join('')) !== -1){
          return manga;
    }
    else return null;
  }
  );

  return(

    <div className="container">
          {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
      <div>
      <br></br>
          <input className="mr-sm-2 form-control" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search for a title. . ."/>
       </div>
       <br></br>
       <div className="container-manga">
           <table className="table">
              <tbody>
                    <th>Title</th>
                    <th>Current chapter</th>
                    <th>Status</th>
                    <th>Go to Manga</th>
                    <th>Delete</th>
              </tbody>
               <tbody>
                {filteredMangas.map(
                    manga =>
                    <tr key={manga.id}>
                        <td className="manga-title">{manga.title}</td>
                        <td>{manga.currentChapter}</td>
                        <td>{manga.status}</td>
                        <td><button className="btn" onClick={()  => this.updateMangaClicked(manga.id)}>Details</button></td>
                        <td><button className="btn" onClick={() => this.deleteMangaClicked(manga.id)}>Delete</button></td>
                    </tr>)}
               </tbody>
           </table>
       </div>
   </div>
    )
  }
}

export default MangaListComponent;
