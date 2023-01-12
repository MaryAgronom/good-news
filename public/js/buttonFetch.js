
const button = document.querySelector('#button');
const newsDiv = document.querySelector('#newsDiv');
const good2 = document.querySelector('#good');

button.addEventListener('click', async () => {
//  console.log("GOOD====>", good2.value);
    const goody = good2.value;
    let zapros = `https://newsapi.org/v2/everything?q=${goody}&from=2023-01-12&to=&sortBy=popularity&apiKey=6d5350ec4bb34b31b6be51afc8305f76`
    let zaStrind = String(zapros)
    // console.log('STRING=====>', zaStrind);
   const response = await fetch(zaStrind)
   const result = await response.json()
   console.log(result)
   const newsApi = result.articles
   console.log('newsAPI======>',newsApi)


  //  curl https://newsapi.org/v2/everything -G \
  //   -d q=Apple \
  //   -d from=2023-01-12 \
  //   -d sortBy=popularity \
  //   -d apiKey=6d5350ec4bb34b31b6be51afc8305f76
   
  //  newsDiv.innerHTML = newsApi.map((el) => {
  //   ` <div> Author ===> ${el.author }</div>
  //       <div> Title ===> ${el.title }</div>
  //       <div> Discrip ===> ${el.description}</div>
  //       <div> URL ===> ${el.url}</div>
  //     `
  //  })

  for (let i =0; i<newsApi.length; i++) {
    const per = document.createElement('div')
    
    per.innerHTML = 
                   
      ` 
      <br />
      <div> Author ===> ${newsApi[i].author }</div>
        <div> Title ===> ${newsApi[i].title }</div>
        <div> Discrip ===> ${newsApi[i].description}</div>
        <a href="${newsApi[i].url}">${newsApi[i].url}</a>
        <img src="${newsApi[i].urlToImage}" />
       
        <br />
      `
      newsDiv.appendChild(per) 
  }

})


