
const button = document.querySelector('#button');
const newsDiv = document.querySelector('#newsDiv');
const good2 = document.querySelector('#good');
const bad2 = document.querySelector('#bad');

button.addEventListener('click', async () => {
//  console.log("BAD====>", bad2.value);
    const goody = good2.value;
    const bad = bad2.value;
    const toLowBad = bad.toLowerCase();
    const toUpBad = bad.toUpperCase();
    let zapros = `https://newsapi.org/v2/everything?q=${goody}&from=2023-01-12&to=&sortBy=popularity&apiKey=6d5350ec4bb34b31b6be51afc8305f76`
    let zaStrind = String(zapros)
    // console.log('STRING=====>', zaStrind);
   const response = await fetch(zaStrind)
   const result = await response.json()
   console.log(result)
   const newsApi = result.articles
   console.log('newsAPI======>',newsApi)

  let resultNews = [];
  for (let i =0; i<newsApi.length; i++) {
    if (newsApi[i].description.indexOf(toLowBad) === -1 && newsApi[i].description.indexOf(toUpBad) === -1) {
      resultNews.push(newsApi[i])
    }
  }

  console.log('resultNews======>',resultNews);
  console.log('description======>',newsApi[0].description);

  //  curl https://newsapi.org/v2/everything -G \
  //   -d q=Apple \
  //   -d from=2023-01-12 \
  //   -d sortBy=popularity \
  //   -d apiKey=6d5350ec4bb34b31b6be51afc8305f76
   
  if (resultNews.length === 0) {
    for (let i =0; i<newsApi.length; i++) {
    const per = document.createElement('div')
    
    per.innerHTML = 
                   
      ` 
      <br />
        <div><b><big>${newsApi[i].title }</big></b></div>
        <p>
        <div align="justify">${newsApi[i].description}</div>
        <img width="600px" height="300" src="${newsApi[i].urlToImage}" />
        </p>
        <a href="${newsApi[i].url}">${newsApi[i].url}</a>
        <br />
      `
      newsDiv.appendChild(per) 
  }
  } else {
    for (let i =0; i<resultNews.length; i++) {
    const per = document.createElement('div')
    
    per.innerHTML = 
                   
      ` 
      <br />
      <div> Author ===> ${resultNews[i].author }</div>
        <div> Title ===> ${resultNews[i].title }</div>
        <div> Discrip ===> ${resultNews[i].description}</div>
        <a href="${resultNews[i].url}">${resultNews[i].url}</a>
        <img src="${resultNews[i].urlToImage}" />
       
        <br />
      `
      newsDiv.appendChild(per) 
  }
  }

  

})


