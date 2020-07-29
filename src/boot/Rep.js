import React from 'react';
import cmo from '../1.jpg'
class Rep extends React.Component{
    render(){
        return(
            <div className="replace d-block d-sm-block d-md-none">
                <div className="blackk">
                    <img src={cmo}></img>
                    <div className="hh"><div className="hhh"> <h1>.CREATIVE AGENCY</h1><p className="d-none d-sm-block d-md-none">Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</p></div> </div>

                </div>
            </div>
        )
    }
}
export default Rep;