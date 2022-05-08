import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h2>Difference between javascript and nodejs</h2>
            <p>Javascript is a programming language that is used to write website scripts.NodeJS is a runtime environment for Javascript.Javascript can only be executed in browsers.NodeJs is mostly used on the server-side.In frontend development, Javascript is used. Nodejs is used in server-side development.</p>

            <h2>When should you use nodejs and when should you use mongodb?</h2>
            <p>NodeJS and MongoDB are basically two technologies. MonogDB is a database system that allows you to effectively store documents in a database and conduct actions such as data changes or searching documents based on certain criteria.The responsibility of NodeJS is especially to run your application.</p>

            <h2>Differences between SQL and NoSQL databases.</h2>
            <p>SQL databases have fixed or static or predefined schema. NoSQL have dynamic schema.SQL databases are best suited for complex queries.NoSQL databases are not so good for complex queries.SQL is vertically Scalable and NoSQL is	horizontally scalable</p>

            <h2>What is the purpose of jwt and how does it work?</h2>
            <p>JWT, or JSON Web Token, is an open standard that allows two parties — a client and a server — to exchange security information. Each JWT includes encoded JSON objects as well as a set of assertions. JWTs use a cryptographic technique to verify that the claims cannot be changed after the token is issued.</p>
        </div>
    );
};

export default Blogs;