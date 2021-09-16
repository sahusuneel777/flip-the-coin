import {Component} from 'react'
import './index.css'

const imageList = [
  {
    imageId: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    alt: 'toss heads',
  },
  {
    imageId: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    alt: 'toss tails',
  },
]
class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imageUrl: imageList[0].imgUrl,
    // imgUrl:imageList[0]
  }

  headsorTails = () => {
    // const {imageUrl, headsCount, tailsCount} = this.state

    const tossNo = Math.floor(Math.random() * 2)

    if (tossNo === 0) {
      this.setState({imageUrl: imageList[tossNo].imgUrl})
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState({imageUrl: imageList[tossNo].imgUrl})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }

    this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
  }

  render() {
    const {totalCount, headsCount, tailsCount, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="coin-card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-result-image" />
          <button
            type="button"
            onClick={this.headsorTails}
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="toss-results">
            <p>Total:{totalCount}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
