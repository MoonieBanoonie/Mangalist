import axios from 'axios';

class MangaDataService{

  retrieveAllManga(){
    return axios.get("http://localhost:8082/api/manga/showall");
  }

  deleteManga(id){
    return axios.delete(`http://localhost:8082/api/manga/delete/${id}`);
  }

  retrieveManga(id){
    return axios.get(`http://localhost:8082/api/manga/showmanga/${id}`);
  }

  updateManga(id, manga){
    return axios.put(`http://localhost:8082/api/manga/update/${id}`, manga);
  }

  addManga(manga){
    return axios.post(`http://localhost:8082/api/manga/add/`,manga);
  }

}

export default new MangaDataService();
