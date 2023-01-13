const React = require('react');

function Layout({children, user}) {
  
  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel='stylesheet' href="/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap" rel="stylesheet"></link>
        <title>GoodNews</title>
      </head>
      <body>
    
        <div className="grid text-center">
      
              <div className="container-xl px-4 text-center">
                <div className="row gx-5">

                  <header>
                    
                    
                      
                    {user? (
                            
                            <nav className="navbar navbar-expand-lg bg-light">
                           <div className="container-fluid">
                        <a className="navbar-brand" href="/"> <img src='../img/goods.png' alt='logo'/>  <br /> <h7>Привет, {user}</h7>  </a> 

                          <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link" href="/poisk">Поиск хороших новостей</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/cabinet">Личный кабинет</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/logout">Выйти</a>
                            </li>
                            </ul>

                            </div>
                           </nav>
                  
                            
                    ) : (
                            
                      <nav className="navbar navbar-expand-lg bg-light">
                      <div className="container-fluid">

                      <a className="navbar-brand" href="/"> <img src='../img/goods.png' alt='logo'/></a> 
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a className="nav-link" href="/reg">Регистрация</a>
                            </li><li className="nav-item">
                                <a className="nav-link" href="/login">Войти</a>
                              </li>
                              </ul>
                     
                   </div>
                           </nav>
               
                             
                    )

                    }
                    
                    
                  </header>

                  { children }

                 
                </div>
              </div>
          
        </div>
        <script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
 module.exports = Layout;
