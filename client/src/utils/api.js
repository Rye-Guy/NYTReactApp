import axios from 'axios';

const api = {
    searchNYT: function(search, startYear, endYear){
        const authKey = '3b3debd0a8764ff9b15fe098b32a079b'
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + '&q=' + search + '&begin_date=' + startYear + '0101&end_date=' + endYear + '0101';
        console.log(queryURL);        
        return axios.get(queryURL);   
    },
    saveArticle: function(articleOjb){
        console.log(articleOjb);
        return axios.post('/api/saved', articleOjb);
    }
}

export default api;