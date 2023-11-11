import axios from 'axios'
const TRAINLINE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/trainlines'
class TrainLineService{

    getAllTrainLine(){
        return axios.get(TRAINLINE_BASE_REST_API_URL)
    }
    getTrainLineById(idTrainLine){ 
        return axios.get(TRAINLINE_BASE_REST_API_URL + '/' + idTrainLine)
    }
    searchTrainLine(name){ 
        return axios.get(TRAINLINE_BASE_REST_API_URL+ '/findByNameTrain/' + name)
    }
    createTrainLine(newTrainLine){ 
        return axios.post(TRAINLINE_BASE_REST_API_URL+'/insert', newTrainLine)
    }
    updateTrainLine(idTrainLine, trainLine){
        return axios.put(TRAINLINE_BASE_REST_API_URL + '/' + idTrainLine, trainLine)
    }
    deleteTrainLine(idTrainLine){
        return axios.delete(TRAINLINE_BASE_REST_API_URL + '/' + idTrainLine)
    }
}

// eslint-disable-next-line
export default new TrainLineService()