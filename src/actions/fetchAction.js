

export function addTodo(todo){
    
    return {
        type: "add_todo",
        todo : todo
    }
}

// export function getImages(url){
//     return {
//         type: "fetch_images",
//         catPhotos : ['https://pbs.twimg.com/media/EBxz9txXYAEyBEf?format=jpg&name=medium','https://pbs.twimg.com/media/EBxz9txXYAEyBEf?format=jpg&name=medium','https://pbs.twimg.com/media/EBxz9txXYAEyBEf?format=jpg&name=medium']
//     }

//     fetch(url, {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
      
//       headers: {
//           'x-api-key': 'fcb484a2-3f89-48c1-bea5-a92c5ec3ab86',
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//       }
//   })
//   .then(response => response.json()).then(response => {
//     return {
//         type: "fetch_images",
//         catPhotos: response
//     }
//   });
