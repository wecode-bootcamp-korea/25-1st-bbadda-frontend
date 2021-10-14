/*global Kakao*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import './Main.scss';
import IMAGES_DATA from './Carousel/Image_Data';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newItemList: [],
      rankingItemList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.118:8000/products/menu?sort=-created_at')
      .then(result => result.json())
      .then(data => {
        this.setState({ newItemList: data.content });
      });

    fetch('http://10.58.0.118:8000/products/menu?sort=number_of_selling')
      .then(result => result.json())
      .then(data => {
        this.setState({ rankingItemList: data.content });
      });
  }

  render() {
    return (
      <>
        <main className="MainWrapper">
          <Carousel images={IMAGES_DATA} />
          <div className="newArrival">
            <div className="wrapper">
              <div className="header">NEW ARRIVAL</div>
              <div className="content">
                <div className="newArrivalBanner">
                  <Link to="#">
                    <img
                      alt="Banner"
                      src="https://static.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10113_6809_111_KOR_20211005143759.jpg"
                    />
                  </Link>
                </div>
                <div className="newArrivalList">
                  <ul className="itemsList">
                    {this.state.newItemList.map(
                      ({ id, url, image_url, name, price }) => {
                        return (
                          <li key={id}>
                            <div className="item">
                              <Link to={url}>
                                <div className="itemImg">
                                  <img alt="itemImg" src={{ image_url }} />
                                </div>
                                <div className="itemName">{name}</div>
                                <div className="itemPrice">
                                  {parseInt(price)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                  원
                                </div>
                              </Link>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ranking">
            <div className="wrapper">
              <div className="header">RANKING</div>
              <div className="content">
                <div className="items">
                  <ul className="itemsList">
                    {this.state.rankingItemList.map(
                      ({ id, url, image_url, name, price }) => {
                        return (
                          <li key={id}>
                            <div className="item">
                              <Link to={url}>
                                <div className="itemImg">
                                  <img alt="itemImg" src={image_url} />
                                </div>
                                <div className="itemName">{name}</div>
                                <div className="itemPrice">
                                  {parseInt(price)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                  원
                                </div>
                              </Link>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
