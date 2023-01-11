const React = require('react');
const Layout = require('./Layout');


function Home({ user }) {
    return (
      <Layout user = {user}>
       <> 
      <h3> ---- Здесь будут случайные хорошие новости ---</h3>
      
       </>
       
       
      </Layout>
  
      
    );
  
    
  }
  
  module.exports = Home;