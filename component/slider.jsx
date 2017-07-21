import React from 'react';
import Slider from 'react-slick';


class SimpleSlider extends React.Component {
  constructor() {
    super();

    this.state = {data: ''}
  }


  getData(){
     var requestURL = 'https://api.myjson.com/bins/1gwcwn';
     var request = new XMLHttpRequest();
     request.open('GET', requestURL);
     request.responseType = 'json';
     request.send();

     request.onload = function() {
       //šeit es saglabātu request.response mainīgajā, taču ir problēmas ar kontekstu

      }
   }

  render() {

    var rows = [];
    //šis būtu atbilde no getData()
    var response={
      "data":[
        {"title":"A Love Supreme",
        "year":"1965",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71LQ34%2BJj%2BL._SL1061_.jpg"
        },
        {"title":"Giant Steps",
        "year":"1965",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51W6g-GYnIL.jpg"
        },
        {"title":"Blue train",
        "year":"1958",
        "image":"http://respect-mag.com/wp-content/uploads/2013/01/blue-train-4ede613be3aa5-640x640.jpg"
        },
        {"title":"My Favorite Things",
        "year":"1961",
        "image":"http://cps-static.rovicorp.com/3/JPG_500/MI0001/900/MI0001900920.jpg?partner=allrovi.com"
        },
        {"title":"Soultrane",
        "year":"1961",
        "image":"http://www.cannonballrecords.co.uk/WebRoot/Store2/Shops/es749547/52CA/8F87/4072/524B/DEA4/0A0F/1118/CDA0/coltrane-soultrane.jpg"
        },
        {"title":"Dakar",
        "year":"1961",
        "image":"http://d24jnm9llkb1ub.cloudfront.net/icpn/00888072391307/00888072391307-cover-zoom.jpg"
        }
      ]
    };
    //nepaspēju izdomāt loģiku, lai nodrošinātu, ka renderis sākas tikai pēc datu ielādes.
    for (var i=0; i < response.data.length; i++) {

        rows.push(
          <div className="album-cont">
            <img className="album-image" src={response.data[i].image} alt="cover"/>
            <h4 className="album-title">{response.data[i].title}</h4>
            <h5 className="album-year">{response.data[i].year}</h5>
          </div>
        );
    }

    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 4,
      speed: 500
    };
      return (
        <div className="slider-wrap" id="slider-wrap">
          {this.getData()}
          <Slider {...settings}>
            {rows}
          </Slider>
        </div>
      );
    }
}

export default SimpleSlider;
