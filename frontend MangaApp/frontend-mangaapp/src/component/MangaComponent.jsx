import React, {Component} from 'react';
import MangaDataService from '../service/MangaDataService';
import { Formik, Form, Field } from 'formik';
import './MangaComponent.css'
import axios from "axios";

class MangaComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: this.props.match.params.id,
      title: '',
      currentChapter: '',
      status:'',
      link: ''
    }

    this.onSubmit = this.onSubmit.bind(this)

  }

  componentDidMount(){
    axios.get("http://localhost:8082/api/manga/showmanga/" + this.props.match.params.id)
    .then(
        response =>
          this.setState({
            title: response.data.title,
            currentChapter: response.data.currentChapter,
            status: response.data.status,
            link: response.data.link
          })
      )
  }

  onSubmit(values){
        let newManga = {
            id: this.state.id,
            title: values.title,
            currentChapter: values.chapter,
            status: values.status,
            link: values.link,
            targetDate: values.targetDate
        }

      MangaDataService.updateManga(this.state.id, newManga)
        .then(() => this.props.history.push('/'))
  }

  render(){
    let id = this.state.id
    let title = this.state.title
    let chapter = this.state.currentChapter
    let status = this.state.status
    let link = this.state.link
    console.log(this.props.match.params);

    return (
         <div>
         <br></br>
              <div className="container">
              <div class="mangaContainer">
                  <figure>
                  <img src={"/img/manga_" + id + ".png" || "/img/manga_" + id + ".jpg"}  alt={this.state.title}/>
                  </figure>
             </div>
                   <Formik
                   enableReinitialize={true}
                   initialValues={{ id, title, chapter,status, link}}
                   onSubmit={this.onSubmit}
                   >{(props) => (
                               <Form>
                                <h3>Manga details</h3>
                                   <fieldset className="form-group">
                                       <label>Title</label>
                                       <Field className="form-control" type="text" name="title" disabled />
                                   </fieldset>
                                   <fieldset className="form-group">
                                       <label>Current chapter</label>
                                       <Field className="form-control" type="text" name="chapter" />
                                   </fieldset>
                                   <fieldset className="form-group">
                                       <label>Status</label>
                                       <Field className="form-control" type="text" name="status" />
                                   </fieldset>
                                   <fieldset className="form-group">
                                       <label>Working link</label>
                                       <Field className="form-control" type="text" name="link" />
                                   </fieldset>
                                   <button className="btn" type="submit">Update</button>
                                   <button className="btn" type="submit"><a target="_blank" href={link}>Read Manga</a></button>
                               </Form>)}
                   </Formik>
                  <br></br>
           </div>
        </div>

       )
  }
}
// <img src={'../img/' + this.state.title + '.png'} />
//<img src={lookism}/>
//    MangaDataService.retrieveManga(this.state.id)
export default MangaComponent
