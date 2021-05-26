import axios from "axios";


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 4d7d478466ccd9531d9c040138ec7fa398467c9d77ba17bab5d3c0e331a29a01'
    }
});

