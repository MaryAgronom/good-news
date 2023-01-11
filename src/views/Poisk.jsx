const React = require('react');
const Layout = require('./Layout');


function Poisk( {user} ) {
  return (
    <Layout user={user}>
<form id='poisk' method='POST' action='/poisk'>
  <fieldset>
    <legend>Выберите новости по ключевым словам:</legend>
    <div className="mb-3">
      <label htmlFor="TextInput" className="form-label">Хорошие слова</label>
      <input type="text" id="TextInput" className="form-control" name="gwords" />
    </div>
    <div className="mb-3">
      <label htmlFor="TextInput" className="form-label">Плохие слова</label>
      <input type="text" id="TextInput" className="form-control" name="bwords" />
    </div>
    <div className="mb-3">
      <div className="form-check">
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Отправить</button>
  </fieldset>
</form>
    </Layout>

    
  );

  
}

module.exports = Poisk;