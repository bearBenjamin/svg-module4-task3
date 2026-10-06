/* не совсем понял задание
хотя с другой стороны сам бы тоже наверное не решил,
как в эталоном варианте */

const circle = document.querySelector('.target');
const path = document.querySelector('.path');
const pathLength = path.getTotalLength();

console.log('circle: ', circle);
console.log('path: ', path);
console.log('pathLength: ', pathLength);

let currentDistance = 0;
const speed = 2;

const updatePosition = () => {
	currentDistance += speed;


	if (currentDistance >= pathLength) return;

	const point = path.getPointAtLength(currentDistance);

	circle.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;

	requestAnimationFrame(updatePosition);
}

requestAnimationFrame(updatePosition);
