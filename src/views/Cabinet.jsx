const React = require('react');
const Layout = require('./Layout');


function Cabinet( {user} ) {
  return (
    <Layout user={user}>
<h1>кабинет</h1>
    </Layout>

    
  );

  
}

module.exports = Cabinet;