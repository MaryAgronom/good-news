const reg = document.querySelector('#reg'); // фетч привязываем к джсхсной форме во вьюшках

reg.addEventListener('submit', async (event) => {
  event.preventDefault(); // чтобы не было перезагрузки
  const { email, username, password } = reg;
// console.log('===>>>', email.value, username.value, password.value);

const myPost = { email: email.value, username: username.value, password: password.value }; 

console.log('mwPost========>>', myPost);

const zapis = await fetch(
    '/reg', // откуда берем данные
    {
      method: 'POST',
      body: JSON.stringify(myPost), // привести майпост к строке
      headers: { 'Content-type': 'application/json' },
      
    },
  );
    if(zapis.ok) {
      window.location.replace('/poisk')
    }


//   const looked = await zapis.json();
//   console.log('================>>>>',looked);

});