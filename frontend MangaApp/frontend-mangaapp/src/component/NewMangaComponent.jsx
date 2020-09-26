import React, {Component} from 'react';
import MangaDataService from '../service/MangaDataService';
import { Formik, Form, Field } from 'formik';
import "./NewMangaComponent.css";



class NewMangaComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: this.props.match.params.id,
      title: '',
      currentChapter: '',
      link: '',
      status:''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values){
        let newManga = {
            title: values.title,
            currentChapter: values.chapter,
            link: values.link,
            status: values.status,
            targetDate: values.targetDate
        }
      MangaDataService.addManga(newManga)
       .then(() => this.props.history.push('/'))
        console.log(newManga)
        console.log(values)
  }

  render(){
    let title = this.state.title
    let chapter = this.state.currentChapter
    let link = this.state.link
    let status = this.state.status

    return (
           <div className="container">
               <div className="container-new-manga">
               <br></br>
                <h3>New Manga</h3>
                   <Formik
                   enableReinitialize={true}
                   initialValues={{title, chapter, status, link}}
                   onSubmit={this.onSubmit}
                   >
                       {
                           (props) => (
                               <Form>
                                   <fieldset className="form-group">
                                       <label className="label">Title Manga</label>
                                       <Field className="form-control" type="text" name="title"  />
                                   </fieldset>
                                   <fieldset className="form-group">
                                       <label className="label">Current chapter</label>
                                       <Field className="form-control" type="text" name="chapter" />
                                   </fieldset>
                                   <fieldset className="form-group">
                                       <label className="label">Status</label>
                                       <Field className="form-control" type="text" name="status" />
                                   </fieldset>
                                   <fieldset className="form-group">
                                       <label className="label">Link to manga</label>
                                       <Field className="form-control" type="text" name="link" />
                                   </fieldset>
                                   <button className="btn " type="submit">Save</button>
                               </Form>
                           )
                       }
                   </Formik>
                   <br></br>
               </div>
           </div>
       )
  }
}

export default NewMangaComponent
