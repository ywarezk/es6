/**
 * Created by yarivkatz on 14/11/2017.
 */


console.log('REST server communication');

// get all the tasks
// can get optional options argument of dictionary type usually we will leave it empty
const req = new XMLHttpRequest();

// the open method will initialize a request
// the first two arguments are method and url
req.open('GET', 'https://nztodo.herokuapp.com/api/task/?format=json');

// addEventListener attach an event to the request
// some of the events: load, error
// you can access the response by using this.responseText
req.addEventListener("load", function(evt){
    const tasks = JSON.parse(this.responseText);
    for(let task of tasks) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task.title));
        document.getElementById('container1').appendChild(li);
    }
});

// to set additional headers to the request
// adding additional headers will usually cause a preflight options request
// req has to be opened before this is used
req.setRequestHeader("Content-Type", "application/json");

// send will send the actual event
// send can have an optional argument for the response body as string
req.send();

// doing the same get request with fetch
// fetch works with promises which is a bit easier
// fetch gets a url and init object
// the promise resolve function will get a Response object

var myHeaders = new Headers();
myHeaders.set('Content-Type', 'application/json');
fetch('https://nztodo.herokuapp.com/api/task/?format=json', {
    method: 'GET',
    headers: myHeaders
}).then((res) => {
    res.json().then((tasks) => {
        for(let task of tasks) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(task.title));
            const button = document.createElement('button');
            button.appendChild(document.createTextNode('delete'));
            button.addEventListener('click', (event) => {
                const parent = event.target.parentElement;
                fetch(`https://nztodo.herokuapp.com/api/task/${task.id}/`, {
                    method: 'DELETE'
                }).then((res) => {
                    if(res.status === 204){
                        parent.remove();
                    }
                });
            });
            li.appendChild(button);
            document.getElementById('container2').appendChild(li);
        }
    })
});

// get a single task with fetch
fetch('https://nztodo.herokuapp.com/api/task/8529/?format=json').then((res) => {
    res.json().then((task) => {
        const container = document.getElementById('container3');
        const title = document.createElement('h3');
        title.appendChild(document.createTextNode(task.title));
        container.appendChild(title);
        const description = document.createElement('p');
        description.appendChild(document.createTextNode(task.description));
        container.appendChild(description);
    });
});

function createTask(event){
    // grab the data from the form
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const when = new Date(document.getElementById('when').value);
    const group = document.getElementById('group').value;
    const req = new XMLHttpRequest();
    req.open('POST', 'https://nztodo.herokuapp.com/api/task/');
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function() {
        alert(`success xmlhttprequest created object ${JSON.parse(this.responseText)['id']}`);
    });
    req.send(JSON.stringify({
        title: title,
        description: description,
        when: when.toISOString(),
        group: group
    }));

    // create the same with fetch
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    fetch('https://nztodo.herokuapp.com/api/task/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            title: title,
            description: description,
            when: when.toISOString(),
            group: group
        })
    }).then((res) => {
        res.json().then((json) => {
            alert(`success fetch created object ${json['id']}`);
        })
    });

    event.preventDefault();
    event.stopPropagation();
}

// delete



