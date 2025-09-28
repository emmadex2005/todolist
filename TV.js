const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')
const resultsContainer = document.getElementById('results-container');

form.addEventListener('submit', async function (e)  {
    e.preventDefault();
    const search = input.value;
    const config = { params: { q: search }};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    resultsContainer.innerHTML = '';
    makeImages(res.data);
    input.value = '';
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            resultsContainer.append(img);
        }
    }
}



const navLinks = document.getElementById('nav-links');
const username = localStorage.getItem('adtvUser');
if (username) {

    // Username display
    usernameDisplay = document.getElementById('username-display');
    usernameDisplay.textContent = username;
    usernameDisplay.style.color = '#ff4b2b';
    usernameDisplay.style.fontWeight = 'bold';


    const logoutItem = document.createElement('li');
    logoutItem.classList.add('nav-item');
    logoutItem.innerHTML = '<a class="nav-link" href="#" id="logout-link">Logout</a>';
    navLinks.appendChild(logoutItem);


    document.getElementById('logout-link').addEventListener('click', function() {
        localStorage.removeItem('adtvUser');
        alert('You have been logged out.');
        location.href = 'login.html';
    });
} else {
    const loginItem = document.createElement('li');
    loginItem.classList.add('nav-item');
    loginItem.innerHTML = '<a class="nav-link" href="login.html">Login</a>';
    navLinks.appendChild(loginItem); 
    const signupItem = document.createElement('li');
    signupItem.classList.add('nav-item');
    signupItem.innerHTML = '<a class="nav-link" href="signup.html">Sign Up</a>';
    navLinks.appendChild(signupItem); 
}
