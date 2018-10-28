import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./Detail.js'),
    // loading: Loading,
    loading(){
        return <div>正在加載...</div>
    }
});

export default () => <LoadableComponent/>


// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }