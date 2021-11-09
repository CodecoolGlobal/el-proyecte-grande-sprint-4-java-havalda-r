import React from 'react';

const Layout = (props) => {
  return (
    <>
      <header>HEADER</header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </>
  );
};

export default Layout;
