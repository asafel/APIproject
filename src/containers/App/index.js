import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../../actions/api';

import { Scrollbars } from 'react-custom-scrollbars';
import Datum from '../../components/Datum';

import style from './style'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e) {
    const term = e.target.value.toLowerCase();

    this.setState({ term });
  }

  componentWillMount() {
    this.props.fetchData();
  }


  render() {
    if (!this.props.data) {
      return null
    }

    const dataList = this.props.data.filter(item => {
      const { term } = this.state;
      const { name, email } = item;
      
      return !term || name.includes(term) || email.includes(term);
    })

    const filteredList = dataList.map(item => {
      return <Datum key={item.id} data={item} />;
    })

    return (
      <div>
        <input
          placeholder="Search for a specific data"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <div id="test" style={style.test} >
          <Scrollbars style={{ width: '100%', height: '400px' }}>
            {filteredList}
          </Scrollbars>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ api }) {
  const { data } = api;
  return { data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)