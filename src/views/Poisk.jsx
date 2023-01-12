const React = require('react');
const Layout = require('./Layout');


function Poisk({ user, plainSlova }) {
  return (

    <Layout user={user}>
      <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
        <div className='container'>
          <div className='search'>
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
          </div>

          <div className='offers'>
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
          </div>
        </div>
      </body>

    </Layout>


  );


}

module.exports = Poisk;