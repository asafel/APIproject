import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { fetchData } from '../../actions/api'

// Components 
import { Scrollbars } from 'react-custom-scrollbars'
import Datum from '../../components/Datum'

// Style
import style from './style'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.getFilteredData = this.getFilteredData.bind(this)
  }

  onInputChange(e) {
    const term = e.target.value.toLowerCase()
    this.setState({ term })
  }

  componentWillMount() {
    this.props.fetchData()
  }

  getFilteredData() {
    return this.props.data.reduce((res, item) => {
      const { term } = this.state

      if (item.name.includes(term) || item.email.includes(term) || !term) {
        res.push(<Datum key={item.id} data={item} term={this.state.term} />)
      }
      return res
    }, [])
  }

  render() {
    const { data } = this.props

    if (!data) {
      return null
    }

    const filteredList = this.getFilteredData()

    return (
      <div id='mainContainer' style={style.mainContainer}>
        <div>
          <input
            placeholder="Search for name or email"
            style={style.searchBar}
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>

        <div id="dataList" style={style.dataList} >
          <Scrollbars style={{ width: '100%', height: '400px' }}>
            {filteredList}
          </Scrollbars>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ api }) {
  const { data } = api

  return { data }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)