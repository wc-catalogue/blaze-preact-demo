import { render, h } from 'preact';
// import { AppContainer } from 'react-hot-loader';

// if ( process.env.NODE_ENV === 'development' ) {
//   // this must be executed first for the HMR to work correctly
//   require( 'react-hot-loader/patch' );
// }

import './styles.css';
import App from './app/App';

// @TODO looks like we need store(redux) to make HMR work
// https://github.com/richardkall/react-starter/blob/d0e4d1e2d46fd5def7a21a1bd8ca2832fcb81528/client/index.js
const main = () => {
  render( <App/>, document.getElementById( 'app' )
  );
};

main();


// if ( process.env === 'development' ) {
// //   // Hot Module Replacement API
//   if ( module.hot ) {
//     module.hot.accept( './app/App', () => {
//       console.log( '🔁  HMR Reloading `./app/routes`...' );
//       main();
//     } );
//   }
// }
