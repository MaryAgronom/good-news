const React = require('react');
const Layout = require('./Layout');


function Cabinet( {user, goodWords, badWords} ) {
  return (
    <Layout user={user}>
      <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
<h3>Дружище {user}, ты хотел найти:</h3>
{goodWords && goodWords.map(({ id, gword }) => (
                   
                   <div className="card" key={id} >
                    <p>{gword}</p>
                  </div>
                        ))}
<h3>Не хотел видеть:</h3>
{badWords && badWords.map(({ id, bword }) => (
                   
                   <div className="card" key={id} >
                    <p>{bword}</p>
                  </div>
                        ))}
            </body>            
    </Layout>

    
  );

  
}

module.exports = Cabinet;