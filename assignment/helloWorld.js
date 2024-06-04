const title = document.getElementById('title');

window.onload = titleChange;

const titleChange = () => {
document.title.innerHTML = document.title.replace('Unit 1 Assignment', 'Hello World!')
}
