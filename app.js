document.getElementById('button 1').addEventListener('click',getText);

//button 2 event listener

document.getElementById('button 2').addEventListener('click', getJson);

//button 3 event listener

document.getElementById('button 3').addEventListener('click', getExternalApi);

function getText(){
    fetch('text.txt')
        .then(response =>  response.text()) //fetch uses promises. to get a response from fetch you have to use .then().  same as promis

        // console.log(response); /*
        // //dsiplays
        // Response {type: "basic", url: "http://localhost:63342/fetchApi/text.txt", redirected: false, status: 200, ok: true, …}
        // */

         //returns  a promise. we use .text() method shown in console under prototypes because we want to return text file. if it was json we would use .json()
             /*
        Promise {<pending>}

         */ //to get response from promise we have to use .then


        .then(textData=> {
            console.log(textData); //displays data in text,txt when button clicked. THis is a text file

            document.getElementById('output').innerHTML = textData; //display datain test.txt in body not cosole

    }) //we put in data. thats what this promise returns

        //to geterror use .catch
        .catch(error =>  console.log(error));


}

function getJson(){
    fetch('posts.json')
        .then(response => response.json())


        //get json data
        .then(jsonData => {
            console.log(jsonData);
            //to display in body. is an array of json data, so loop through it

            let output = '';
            jsonData.forEach(function(post){
                output += `<li>${post.title}</li>`;

            });

            document.getElementById('output').innerHTML = output;

        })

        .catch((error) => {
            console.log(error);

        });

}

function getExternalApi(){
    fetch('https://api.github.com/users') //external api
        .then(response => response.json())
        //get json data
        .then(externaalApiData => {
            console.log(externaalApiData);
            //to display in body. is an array of json data, so loop through it

            let output = '';
            externaalApiData.forEach(function(user){
                output += `<li>${user.login}</li>`;

            });

            document.getElementById('output').innerHTML = output;

        })

        .catch(error => console.log(error))

}