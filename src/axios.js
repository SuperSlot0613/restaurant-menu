import axios from 'axios'

const instance =axios.create({
    baseURL:'http://localhost:5001/amezon-clone-ecaf6/us-central1/api' //the API (CLOUD FUNCTION) URL
});

export default instance;