import '../styles/scss/main.scss';
import generateJoke from "./generateJoke";
import '../styles/css/main.css'
import '../styles/css/input-element.css';
import laughing from '../assets/images/laugh.jfif';

const laughImg =  document.getElementById('laughImg');
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();