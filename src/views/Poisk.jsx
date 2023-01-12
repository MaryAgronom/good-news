const React = require('react');
const Layout = require('./Layout');


function Poisk({ user, plainSlova }) {
  return (
    <Layout user={user}>

      <script defer src="./js/poiskFeth.js"> </script>
      <script defer src="./js/buttonFetch.js"> </script>
      <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
        <div className='container'>
          <div className='search'>
              <legend>Выберите новости по ключевым словам:</legend>
            <form className='poiskForm' id='poisk'>
              <div className="mb-3">

                

                <label htmlFor="TextInput" className="form-label" style={{ width:"340px" }}>Включить в поиск:</label>

                <input type="text" id="good" className="form-control" name="gword" />
              </div>
              <div className="mb-3">
                <label htmlFor="TextInput" className="form-label" style={{ width:"340px" }}>Исключить из поиска:</label>
                <input type="text" id="bad" className="form-control" name="bword" />
              </div>
              <div className="mb-3">
                <div className="form-check">
                </div>
              </div>
              <button type="submit" className="btn btn-dark" id='button' style={{ width:"200px", height:"50px", marginTop:"25px" }}>Отправить</button>
            </form>

            <div className='offers'>
              <legend>Ваши хорошие новости:</legend>
              <div className="mb-3">
                <div className="form-check" id='newsDiv'>
                  {/* <h1>news</h1> */}
                </div>
              </div>
            </div>
          </div>
       
          <div className="card-columns">
            <h3>Чаще всего ищут:</h3>

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