import React ,{Component} from 'react';
import '../avoidFOUC'
import reactDom from 'react-dom'
import render from './template'
import './style.scss'


class App extends Component {}
App.prototype.render = render;

export default App;
