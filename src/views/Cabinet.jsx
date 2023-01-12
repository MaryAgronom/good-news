const React = require('react');
const Layout = require('./Layout');


function Cabinet({ user, goodWords, badWords }) {
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
            {badWords && badWords.map(({ id, bword }) => (

              <div className="card" key={id} >
                <p>{bword}</p>
              </div>
            ))}
          </div>
        </div>
      </body>
    </Layout>


  );


}

module.exports = Cabinet;