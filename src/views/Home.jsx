const React = require('react');
const Layout = require('./Layout');


function Home({ user }) {
    return (
      <Layout user = {user}>
        <body style={{
        backgroundPosition: 'center', background: '-webkit-linear-gradient(225deg, rgb(142, 139, 124), rgb(255, 255, 255));', backgroundRepeat: 'repeat', height: '135vh',
      }}>
       <> 
      <h3> ---- Здесь будут случайные хорошие новости ---</h3>
      
       </>
       
       </body>
      </Layout>
  
      
    );
  
    
  }
  
  module.exports = Home;