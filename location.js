// inspecting the Location object

// change the current url

function changeUrl(){
    //location.assign('https://www.google.com')
    // location = 'https://www.facebook.com';
    // location.replace('https://www.linkedin.com');
    location.href = 'https://www.youtube.com';
}

// reload the current url

function reload() {
    location.reload(true);
}

console.log('some data about the location:')
console.log(`host: ${location.host}`);
console.log(`hostname: ${location.hostname}`);
console.log(`href: ${location.href}`);
console.log(`origin: ${location.origin}`);
console.log(`pathname: ${location.pathname}`);
console.log(`port: ${location.port}`);
console.log(`protocol: ${location.protocol}`);


// change the hash

function changeHash(e){
    location.hash = e.currentTarget.value;
}

// change the search

function search() {
    const search = document.getElementById('search-input').value;
    location.search = location.search + `&search=${search}`;
}



