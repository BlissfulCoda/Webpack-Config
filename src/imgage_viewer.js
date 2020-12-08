import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../directory/image_viewer.css';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';
document.body.appendChild(image);


const bigImage = document.createElement('img');
bigImage.src = small;
document.body.appendChild(bigImage);

