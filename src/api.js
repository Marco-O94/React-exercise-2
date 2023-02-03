import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID pCASUAmnq4C7j5YaxYw_40G91SHXLh39ixoX5T95tXw'
        },
        params: {
            query: term
        }

    });

    return response.data.results;
};

export default searchImages;