import axios from 'axios'
const TRAINLINE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/trainlines'
class TrainLineService{

    getAllTrainLine(){
        return axios.get(TRAINLINE_BASE_REST_API_URL)
    }
    searchTrainLine(name){ 
        return axios.get(TRAINLINE_BASE_REST_API_URL+'/findByNameTrain/'+name)
    }
}

// eslint-disable-next-line
export default new TrainLineService()