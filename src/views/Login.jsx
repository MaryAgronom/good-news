const React = require('react');
const Layout = require('./Layout');


function Login( {  } ) {
  return (
    <Layout >
     
     <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
      <main className="form">
       
        <form name="login" id='login' method='POST' action='/login' >
          <br />
          <div>
          <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
            <input name='username' type="text" className="form-control" id="exampleInputEmail1"  />
            <div id="emailHelp" className="form-text"> Ваш ник на сайте.</div>
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
          </div>

         <br />

          <button type="submit" className="btn btn-dark">Войти</button>
        </form>
      </main>
      </body>
      
    </Layout>

    
  );

  
}

module.exports = Login;