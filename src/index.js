
import 'bootstrap/dist/css/Bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "./css/style.css";
import './scss/style.scss';
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)