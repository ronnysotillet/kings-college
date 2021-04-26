import React, {Component} from 'react';
import Carousel1 from '../components/carousel1';
import Notices from '../components/notices';

class Home extends Component{

    render(){
        return (
            <div>
               <Carousel1 id="firstCarousel"/>
               <Notices/>
            </div>
        )
    }
}

export default Home;