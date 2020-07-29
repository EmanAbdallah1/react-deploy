import React from 'react';
import one from '../3.jpg';
import two from '../2.jpg';
import three from '../44.jpg';

class Slider extends React.Component{
    render(){
        return(
            <div id="slider">
                <div className="slides">
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1>Lorem ipsum dolor</h1>
                                <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img src={one}/>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1>Lorem ipsum dolor</h1>
                                <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img src={two}/>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1>Lorem ipsum dolor</h1>
                                <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img src={one}/>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1>Lorem ipsum dolor</h1>
                                <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img src={three}/>
                        </div>
                    </div>
                </div>
                <div className="switch">
                    <ul>
                        <li>
                            <div className="on"></div>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Slider;