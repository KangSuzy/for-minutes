import React from 'react'
import '../App.css'
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './FirstView.css';


function FirstView() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/Little.mp4" autoPlay loop muted /> */}
            <h1>For-minutes</h1>
            <p>AI Summary Service</p>
            <div className="hero-btns">
                <Button 
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                <Link to="/post">
                    GET STARTED
                    </Link>
                </Button>

            </div>
        </div>
    )
}

export default FirstView;
