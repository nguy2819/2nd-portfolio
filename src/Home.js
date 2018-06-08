import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Home.css'
import MyWorks from './MyWorks'
import ContactMe from './ContactMe'



class Home extends Component {
    render() {
        return (
            <div>
                <Link to="./AboutMe">
                <img class="aboutme-icon" src="https://www.powerinthegroup.com/wp-content/uploads/2016/12/testimonial_headshot_Smita_208_201x210.png"/>
                </Link>
                <Link to="./MyWorks">
                <img class="myworks-icon" src="http://www.edubizsoft.com/images/icons/code-icon-script.png"/>
                </Link>
                <Link to="./ContactMe">
                <img class="contactme-icon" src="https://sites.google.com/a/cashton.k12.wi.us/buedding/_/rsrc/1467672862219/contact-mrs-b/contact_me_icon.png"/>
                </Link>
                <h1 class="tien-text">Xin chào, I am Tien Nguyen Borland</h1>
                <h2 class="under-tien-text">And I'm a Full-Stack Web Dev</h2>
                <h2 class="under-tien-text2">Welcome to my portfolio</h2>
                <img src="https://lh3.googleusercontent.com/g_Pvd7qs0RTe0i-5JULdRsFl-T0g21bLZMT06iIWIWCtKU7MCkrYO6A0VvJw9Jm93kqBuBLYdhoBozXuIQPu6WuW6xDOeCM_dwi7FqAn6-uT9ZZww7flT84I26cq83Pn_ZIHxsSMwxDs59j-7v2nwr2zj3OZV992aXaurTsF5Qg95GDQuyPRNig-cixMHHI629j3Zj4vRDSvlBKXwxKL5Oz4HmkDCiU1MwfIyaUic3vYxhv1WLthdDkcNrAKT0c0JjpeDQ7jorgbgztsdZUqlROP9GoLPa1OKLM0RN_CV19MXog0WgZYfbNsu3-TfjEqziDBPBnU22DgW5qPDXfBxmUaEHknm-N34bUMvCPNzzWf4Ym0j-Uc6b-JLxIyrZZ-2_9lYcIQ7YvriaH9IZ-fVAhd8HwQUBbaWOjPConvAKZi42vf0c6S60kScNcNSjZ-epQjcNzdI5iJ_TepMlNt-7tB094NRrwvmj3wnm4oiz1c8kKcwab1mIFRwxet0TDaC6W_oBV95Kx2oyKzrZwYkJCGgp1j2eLJMqtpWxNhXlresqxQK4KSN4Xqa28Oc09eWXy_ASUYuFenKUvIyWpXIbrInSMVq92eYWLm2Q=w1440-h540-no"
                />
                <a href="https://www.facebook.com/nguyen.tien.520"target="blank"><img class="facebook-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg=="/></a>
                <a href="https://www.linkedin.com/in/tien-borland-3b223265/" target="blank"><img class="linkedin-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B67DqqsM2XW5xZt_gHAT_zcJv9-5YGSxn4tneEFGHuWQkDpd"/></a>
                <h3><center>Click Me</center></h3>
                <Link to="./AboutMe"><center>
                <img class="icon-direction-down" src="https://media.giphy.com/media/11tzAbXuJ0O4h2/source.gif"/></center>
                </Link>
                
            </div>
        )
    }
}
export default Home