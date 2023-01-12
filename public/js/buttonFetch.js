
const button = document.querySelector('#button');
const newsDiv = document.querySelector('#newsDiv');


button.addEventListener('click', async () => {
 
  
   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-12&sortBy=publishedAt&apiKey=6d5350ec4bb34b31b6be51afc8305f76')
   const result = await response.json()
   console.log(result)
   const news = ` <div>${result.articles}</div>`
   newsDiv.innerHTML = news
 })