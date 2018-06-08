import React, { Component } from 'react';
import MyWorks from './MyWorks';
import { Link } from 'react-router-dom';
import './AboutMe.css'
import Home from './Home';


class AboutMe extends Component {
    render() {
        return (
            <div>
                <Link to="./"><img class="home-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIcNRTuw7ZxTynVfnfDuT48qDaNPQte3x4Ma92S9Vl-wKLY2-"/>
                </Link>
                <h1 class="blossom-background"><center>About Me</center></h1>

                <div class="parallax"></div>
                <p><center>SCROLLING DOWN TO KNOW HOW I DECIDED TO COME TO HELIO TRAINING.</center></p>
                <div class="parallax7"></div>
                <p><center>A little bit about me, I was born and raised in Ho Chi Minh City, Vietnam.</center></p>
                <div class="parallax1"></div>
                <p><center>Summer 2017, I graduated from University of Minnesota with B.S. in Health Management. </center></p>
                <div class="parallax6"></div>
                <p><center>I was an active college-athlete, a cheerleader, and a teaching assistant in Accouting I and II. I attended NCAA Division II University of Minnesota-Crookston Women Tennis (2015-2017), and I earned UMC's Women Tennis Scholarship.</center></p>
                <div class="parallax2"></div>
                <div class="parallax3"></div>
                <p><center>After I graduated, I did my Patient Experience internship with Utah Valley Hospital which located in Provo, UT. Later, I started working for University of Utah Health Orthopadic Center. However, my goals are not just having a job and earning money. My goals are looking for the happiness to go to work every single day and able to enjoy doing what I love everyday.</center></p>
                <div class="parallax4"></div>
                <p><center>My husband graduated from Neumont University and he has a huge trust on Helio Training. That's why we chose Helio Training and we recommend this Bootcamp to everybody who is interested.</center></p>
                <div class="parallax5"></div>
                <h3><center>Click Me</center></h3>

                <Link to="./MyWorks"><center>
                    <img class="icon-direction-down" src="https://media.giphy.com/media/11tzAbXuJ0O4h2/source.gif" /></center>
                </Link>
            </div>
        )
    }
}
export default AboutMe