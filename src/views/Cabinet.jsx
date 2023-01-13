const React = require('react');
const Layout = require('./Layout');


function Cabinet({ user, goodWords, resultBad }) {
  return (
    <Layout user={user}>
      <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
        <div className='cabinet'>
          <div className='lk'>
            <h3>Дружище {user}, <br />ты хотел найти:</h3>
            {goodWords && goodWords.map(({ id, gword }) => (

              <div className="card" key={id} >
                <p>{gword}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Не хотел <br />видеть:</h3>
            {resultBad && resultBad.map(( el ) => (

              <div className="card" key={el} >
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>
      </body>
    </Layout>


  );


}

module.exports = Cabinet;