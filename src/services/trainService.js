import axios from 'axios'
const TRAIN_BASE_REST_API_URL = 'http://localhost:8080/api/v1/trains';
class TrainService{

    getAllTrain(){
        return axios.get(TRAIN_BASE_REST_API_URL)
    }
    getAllTrainByTrainLine(idTrain){
        return axios.get(TRAIN_BASE_REST_API_URL+'/trainline/'+idTrain)
    }
}

// eslint-disable-next-line
export default new TrainService()