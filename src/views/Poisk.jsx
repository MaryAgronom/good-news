const React = require('react');
const Layout = require('./Layout');


function Poisk({ user, uniqueWords }) {
  return (
    <Layout user={user}>

      <script defer src="./js/poiskFeth.js"> </script>
      <script defer src="./js/buttonFetch.js"> </script>
      <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '700vh',
      }}>
        <div className='container'>
          <div className='search'>
              <legend>Выберите новости по ключевым словам:</legend>
            <form className='poiskForm' id='poisk'>
              <div className="mb-3">

                

                <label htmlFor="TextInput" className="form-label" style={{ width:"340px" }}></label>

                <input type="text" id="good" className="form-control" name="gword" placeholder="Включить в поиск" />
              </div>
              <div className="mb-3">
                <label htmlFor="TextInput" className="form-label" style={{ width:"340px" }}></label>
                <input type="text" id="bad" className="form-control" name="bword" placeholder="Исключить из поиска" />
              </div>
              <div className="mb-3">
                <div className="form-check">
                </div>
              </div>
              <button type="submit" className="btn btn-dark" id='button' style={{ width:"200px", height:"35px", marginTop:"26px" }}>Отправить</button>
            </form>

            <div className='offers'>
              <legend>Ваши хорошие новости</legend>
              <div className="mb-3">
                <div className="form-check" id='newsDiv'>
                  {/* <h1>news</h1> */}
                </div>
              </div>
            </div>
          </div>
       
          <div className="card-columns">
            <h3>Чаще всего ищут</h3>

            {uniqueWords && uniqueWords.map(( el ) => (

              <div className="card" key={el} >
                <div className="card-body">
                  <p className="card-text">  </p>
                  <h5 className="card-title"> {el}</h5>
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