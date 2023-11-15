import axios from 'axios'
const TRAIN_BASE_REST_API_URL = 'http://localhost:8080/api/v1/trains';
class TrainService{

    getAllTrain(){
        return axios.get(TRAIN_BASE_REST_API_URL)
    } 
    getAllTrainByTrainLine(idTrain){
        return axios.get(TRAIN_BASE_REST_API_URL+'/trainline/'+idTrain)
    }
    getTrainById(id){
        return axios.get(TRAIN_BASE_REST_API_URL+"/"+id)
    }
    createTrain(newTrain){
        return axios.post(TRAIN_BASE_REST_API_URL+"/insert", newTrain)
    }
    updateTrain(id, train){
        return axios.put(TRAIN_BASE_REST_API_URL+"/"+id, train)
    }
    deleteTrain(id){
        return axios.delete(TRAIN_BASE_REST_API_URL+"/"+id)
    }
}

// eslint-disable-next-line
export default new TrainService()