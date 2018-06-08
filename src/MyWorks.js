import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import './MyWorks.css';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';

class MyWorks extends Component {
    render() {
        return (
            <div>
                <Link to="./AboutMe"><img class="back-icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio9UYejTRtNEVOLdxUGRkkRCMj8yyG39K0wnOW-v4dcd9SS1G"/>
                </Link>
                <Link to="./"><img class="home-icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIcNRTuw7ZxTynVfnfDuT48qDaNPQte3x4Ma92S9Vl-wKLY2-"/>
                </Link>
                
                <h1 class="blossom-background"><center>My Projects</center></h1>
                
                    <div class="row">
                        <div class="column">
                        <h2>My Project - Name Badge</h2> 
                            <a href="https://github.com/nguy2819/namebadge-hw"target="_blank">Check out my code on Github</a>
                            
                            <img class="name-badge" src="https://lh3.googleusercontent.com/4lI72OZdhU659QUjPxr3Rk5LPXQt-6imPSI7Z7EfVSi0Y-JzPQbX5xCxQR9MOXMxnrqyipyFeDVMAAY3yY4ygkpJp3UYimk2HIGPKxwAfTTrFI4UUUjLp1zNghUQrdMfi7ABMUSXrnBfGXQYrDzabU44TtF2yVzsJiomxwAPSOm2aLI0nL1QEgP3uYyMIYz3F0inq4Cp9KQl7AVxHLbD2ldCRJxeotNMkH0X_nDke8vBR9vy58NHTLY2DCQiClP9LwCCxxo_zdUcgmqIqElrJtXpmLIp9ZsWDZff3SAgGxdYqp2YAy-bmPFTaUCTu0H15lxxlm837Pj9kYMvl0QE4rF-Fudf5dYTCBJgnFoUbe9IAu9d9M1Ytika3l8trHdIxqizwY9TaLZ1ssz_bJRQEcPTNSLAmQi9u5Gvmn7e6Amq0k3KH551EyZ17pBjfumWzn1QfwH_lY8BymiyhcTWzSbEuHwCuRbyb2E2Oa0FzUIdfVhICbH36R5HWN8yytK3uosVL_ESChrwcYQd6KpFujfZGefQhPZ4V0_lHWoaDZfzc_TXD9v8xCss2u08O4pOkL27ok1e3kLx436MX6gv_iBSLr9s537ku5BGlw=w514-h397-no" />
                            
                            <a href="https://build-aoolvxdsiz.now.sh" target="_blank">You can play with it here</a>
                        </div>
                 
                        <div class="column">
                        <h2>My Project - Restructure IMDB page</h2>
                            <a href="https://github.com/nguy2819/restructure-idmb"target="_blank">Check out my code on Github</a>
                            <img class="imdb" src="https://lh3.googleusercontent.com/nA5Y59XsHNH8wDXu0PNu4IgOv-YehkF2xd11zYbQqEi7wsWqFDIYwg4-M5hVS4dvoC21K17N3QpGMNRCoH5hjA2yi5L8xaJ5IWD_tpmVD9q6c5UoEuVWtIn_5Zr3d7KbX0SGJe9X_iTJXBKqZHYeo_6P07rckQ9vfeLUURhmE9Alq9k5X5F0Tmrr8Cp2itDf1dCDaDBzq6DrbgY5ZArbPsXeW7k36mt_kUY2SZ0d8vlCHomNips450pwdQvE3Ej0j4eStVc2xNFfnJufcPy4_yY5WNXqy-SIyZ1-ExpUkkU7mC6mZRPtE2oNYwQ-aMhCrN2-epxGS-5NO5JOxN09IhACcvZHGmT2O5tmSvpsz2Fzwlf3rIFpl2_3Oi13Y16YWMdWC8j4s1fKKwNavtuuJzS15JyYNu0kLYXp3lAgbkuKnV0pnaZuYLA_gWoN0Fxcy1Ni1302RJS-iu_DWkRh9r98i3vGjV5fNRq3ef28gmYHe_qtneRxwrr8ZWwszjzJcgCujVDXwsR4jDXFF0h-Phrqvch8nLNgVWycqpBmeoEkzFhQyUng-tvWuzDNTlXaSCaCKtYdFn0LjCpYm6l54TY-pklJfys0YQ3qPCGX6DawyZYv51DXK78xSqUQ3T3Sb0FxFPU35Ymq9seZcSOCyOBXrDVlSbg=w1404-h716-no"/>
                        </div>
                    </div>

                    <h3><center>Contact Me</center></h3>
                    <Link to="./ContactMe"><center>
                        <img class="icon-direction-down" src="https://media.giphy.com/media/11tzAbXuJ0O4h2/source.gif" /></center>
                    </Link>
            </div>
                )
            }
        }
        
export default MyWorks