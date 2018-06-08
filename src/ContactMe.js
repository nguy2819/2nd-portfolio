import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import './ContactMe.css';
import MyWorks from './MyWorks';

class ContactMe extends Component {
    render() {
        return (
            <div>
                <Link to="./MyWorks"><img class="back-icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio9UYejTRtNEVOLdxUGRkkRCMj8yyG39K0wnOW-v4dcd9SS1G"/>
                </Link>
                <Link to="./"><img class="home-icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIcNRTuw7ZxTynVfnfDuT48qDaNPQte3x4Ma92S9Vl-wKLY2-" />
                </Link>
                <h1 class="blossom-background"><center>Contact Me</center></h1>
                <form id="register" class="contactme-form">
                    <div>
                        <label for="firstname">First Name</label>
                        <input form="register" name="flibbery" id="fname" required placeholder="Your first name..."/>
                    </div>
                    <div>
                        <label for="lname">Last Name</label>
                        <input form="register" name="bibbery" id="lname" required placeholder="Your last name..."/>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input form="register" type="email" name="email" id="email" required minlength="10" maxlength="100" placeholder="Your email..."/>
                    </div>
                    <div>
                        <label for="phonenumber">Phone Number</label>
                        <input form="register" type="text" id="phonenumber" required minlength="10" pattern="\d{3}-\d{3}-\d{4}" placeholder="Please enter full-phone-number. For example: 000-000-0000" />
                    </div>
                    <div>
                        <label for="comment">Comment</label>
                        <input form="register" type="text" id="comment" placeholder="Please write something..."/>
                    </div>
                <input form="register" type="submit" value="submit" formmethod="GET" class="button-primary"></input>
                </form>
                
                    <a href="https://www.facebook.com/nguyen.tien.520" target="blank"><img class="facebook-icon1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg==" /></a>
                    <a href="https://www.linkedin.com/in/tien-borland-3b223265/" target="blank"><img class="linkedin-icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B67DqqsM2XW5xZt_gHAT_zcJv9-5YGSxn4tneEFGHuWQkDpd" /></a>
                
            </div>

                )
            }
        }
        
export default ContactMe