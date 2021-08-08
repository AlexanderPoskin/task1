import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadDetails from '../../reducers/detailsUser';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loadDetails,
};

class UserDetails extends Component {
  componentDidMount() {
    this.props.loadDetails();
  }

  render() {
    return <div></div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
