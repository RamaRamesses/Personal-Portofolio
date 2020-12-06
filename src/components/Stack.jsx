import React from 'react';
import nodejs from '../assets/images/node.png'
import postgres from '../assets/images/postgres.svg'
import express from '../assets/images/express.png'
import sequelize from '../assets/images/sequelize.png'
import react from '../assets/images/react.png'
import vue from '../assets/images/vue.png'
import unity from '../assets/images/unity.png'

export default function Stack () {
    return (
        <div className="col-md-12 d-flex justify-content-center" style={{ background: '#FFFFFF' }}>
            <img src={unity} alt="unity" className="stack-image mx-2"></img>
            <img src={nodejs} alt="nodejs" className="stack-image mx-2"></img>
            <img src={postgres} alt="postgres" className="stack-image mx-2"></img>
            <img src={express} alt="express" className="stack-image mx-2"></img>
            <img src={sequelize} alt="sequelize" className="stack-image mx-2"></img>
            <img src={react} alt="react" className="stack-image mx-2"></img>
            <img src={vue} alt="vue" className="stack-image mx-2"></img>
        </div>
    )
}