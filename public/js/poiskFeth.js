const poisk = document.querySelector('#poisk'); // фетч привязываем к джсхсной форме во вьюшках

poisk.addEventListener('submit', async (event) => {
  event.preventDefault(); // чтобы не было перезагрузки
  const { gword, bword} = poisk;
console.log('===>>>', gword.value, bword.value);

const myPoisk = { gword: gword.value, bword: bword.value }; 

console.log('myPoisk===>>>', myPoisk);

const zapis = await fetch(
    '/poisk', // откуда берем данные
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(myPoisk), // привести майпост к строке
      
    },
  );
    if(zapis.ok) {
      window.location.replace('/poisk')
    }


  // const looked = await zapis.json();
  // console.log('================>>>>',looked);

});