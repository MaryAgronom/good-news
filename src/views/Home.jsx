const React = require('react');
const Layout = require('./Layout');


function Home({ user }) {
  return (
    <Layout user={user}>
      <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
        <>
          <h3> <br />Хорошие новости специально для тебя!</h3>
          <div className='forYou'>
          <div className="card" style={{ width: "18rem", height: "8rem", marginBottom: "50px" }}>
            <div className="card-body">
            <h5 className="card-title"></h5>
              <p className="card-text">Сегодня сняли всех котят с деревьев!</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", height: "8rem" }}>
            <div className="card-body">
            <h5 className="card-title"></h5>
              <p className="card-text">Никто не завалил экзамен!</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", height: "8rem" }}>
            <div className="card-body">
            <h5 className="card-title"></h5>
              <p className="card-text">Олег всех поднял, перевернул и не надорвался!</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", height: "8rem" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">Денис окончательно преисполнился!</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", height: "8rem" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">На HH обрушилась лавина вакансий в секторе IT!</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", height: "8rem" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">Банки простили своим клиентам кредиты и подарили по мороженке!</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", height: "8rem" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">Школа Эльбрус пригласила студентов отметить выпускной на Мальдивах!</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", height: "8rem" }}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">Пятница объявлена всенародным выходным днем!</p>
            </div>
          </div>
          </div>
        </>

      </body>
    </Layout>


  );


}

module.exports = Home;