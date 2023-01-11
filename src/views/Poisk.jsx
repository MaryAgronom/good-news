const React = require('react');
const Layout = require('./Layout');


function Poisk( {user, plainSlova} ) {
  return (
    <Layout user={user}>
<script defer src="./js/poiskFeth.js"> </script>

<form name='poisk' id='poisk'>
  <fieldset>
    <legend>Выберите новости по ключевым словам:</legend>
    <div className="mb-3">
      <label htmlFor="TextInput" className="form-label">Хорошие слова</label>
      <input type="text" id="TextInput" className="form-control" name="gword" />
    </div>
    <div className="mb-3">
      <label htmlFor="TextInput" className="form-label">Плохие слова</label>
      <input type="text" id="TextInput" className="form-control" name="bword" />
    </div>
    <div className="mb-3">
      <div className="form-check">
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Отправить</button>
  </fieldset>
</form>

<legend>Ваши хорошие новости:</legend>
<div className="mb-3">
      <div className="form-check">
        <h1>news</h1>
      </div>
    </div>

    {plainSlova && plainSlova.map(({ id, gword }) => (
                   
      <div className="card" key={id} >
       <div className="card-body">
          <p className="card-text">  </p>
         <h5 className="card-title"> {gword}</h5>
       </div>
     </div>
           ))}


    </Layout>

    
  );

  
}

module.exports = Poisk;