import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">My Resume</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                

                <p class="mt-5">
                <a href="https://www.linkedin.com/in/gregory-christiansen-b82a60151/"><img src="https://img.icons8.com/glyph-neue/256/000000/linkedin.png" alt="LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="https://www.linkedin.com/in/gregory-christiansen-b82a60151/" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>Front End Experience</h2>
                <p>HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>Back End Experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose) API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;