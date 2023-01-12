const React = require('react');
const Layout = require('./Layout');


function Reg( {user} ) {
  return (
    <Layout user={user}>
      <script defer src="./js/regFetch.js"> </script>

      <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
      <main className="form">
        <h1>Зарегистрируйтесь!</h1> 
        <form name="reg" id='reg'>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
            <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
          </div>
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

          <button id='button' type="submit" className="btn btn-dark">Зарегестрироваться</button>
        </form>
      </main>
      </body>

    </Layout>

    
  );

  
}

module.exports = Reg;