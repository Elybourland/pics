import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID jR4xGhdsjTkBQLMU6OzewaipB-Mb5-Y2-T87amtyGqQ'
    },
    params: {
      query: 'cars'
    }
  });

  console.log(response);
  return response;
};

export default searchImages;