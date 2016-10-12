import React from 'react';
import { Component } from 'react';
// import seriesList from '../data/seriesList';
import axios from 'axios';
import SeriesSplash from './SeriesSplash';
import SeriesCard from './SeriesCard';
import Map from './Map';






const styles = {
  cardStack: {
    marginBottom: '32em'
  }
}

class Series extends Component {
  constructor() {
    super()

    this.state = {
      seriesList: []
    }
  }

  componentWillMount(){
    axios.get('http://localhost:8001/seriesList').then(function(resp){
      this.setState({seriesList: resp.data})
    })
  }

  render() {

    return (
      <div className="container-fluid">
      {document.body.scrollTop = document.documentElement.scrollTop = 0}
				<SeriesSplash />
        <div className="container"
             style={styles.cardStack}>
          {this.state.seriesList.map(function(concert){
            return (
              <SeriesCard
              key={concert.cid}
              cid={concert.cid}
              title={concert.title}
              subtitle={concert.subtitle}
              date1={concert.date1}
              date2={concert.date2}
              time={concert.time}
              picUrl={concert.picUrl}
              blurb={concert.blurb}
              guestTag={concert.guestTag}
              guests={concert.guests}
              bptid={concert.bptid}
            />
            )
          })}
        </div>
        <Map />
      </div>

    );
  }
}

export default Series;
