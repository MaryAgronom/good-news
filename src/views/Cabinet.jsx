const React = require('react');
const Layout = require('./Layout');


function Cabinet( {user, goodWords, badWords} ) {
  return (
    <Layout user={user}>
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
                        
    </Layout>

    
  );

  
}

module.exports = Cabinet;