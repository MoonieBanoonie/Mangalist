import React from 'react';
import axios from 'axios';
import "./DiscoverComponent.css"

class DiscoverComponent extends React.Component{
  constructor(props){
   super(props);
   this.state = {
     items:[],
   };
 }

  componentDidMount(){
  const min = 1;
  const max = 100;
  const rand = min + Math.round(Math.random() * (max - min));

    axios({
      'method': 'GET',
      'url': 'https://jikan1.p.rapidapi.com/manga/' + rand + '/recommendations',
      'headers': {
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
        'x-rapidapi-key': 'cf481e4390msh1f69f6b4c62a2eep183315jsn0b2939ba020a'
      }
    })
    .then(response => {
      this.setState({items:response.data.recommendations})
    });
  }



  render(){
    return(
      <div id="mainContent" className="container">
        {this.state.items.map((item) => (
          <div>
          <a target="_blank" href={item.url} rel="noopener noreferrer">
          <figure key={item.mal_id} className="gridItem">
           <img src={item.image_url} alt="no data available"/>
         </figure>
         </a>
          </div>
        ))}
      </div>
    )
  }

}

export default DiscoverComponent
