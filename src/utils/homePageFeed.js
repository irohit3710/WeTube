// // import axios from 'axios';
// // import React from 'react'

// // const url = 'https://youtube-v3-alternative.p.rapidapi.com/trending?geo=US&lang=en';
// // const options = {
// //     params: {
// //         maxResults: 50,
// //       },
// // 	headers: {
// // 		'X-RapidAPI-Key': 'ad50247b22mshc75d22dc6bed93dp11136fjsndfad3f835e3c',
// // 		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
// // 	}
// // };

// // export const homePageFeed = async () => {
// //     const { result } = await axios.get(`${url}`, options);
// //     return result;
// // }

// import axios from 'axios';

// const options = {
//     method: 'GET',
//     url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
//     params: {id: 'dQw4w9WgXcQ'},
//     headers: {
//       'X-RapidAPI-Key': 'ad50247b22mshc75d22dc6bed93dp11136fjsndfad3f835e3c',
//       'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//     }
//   };

// // try {
// // 	const response = await axios.request(options);
// // 	console.log(response.data);
// // } catch (error) {
// // 	console.error(error);
// // }


// export const homePageFeed = async () => {
//     const response = await axios.request(options);
//     return response;
// }