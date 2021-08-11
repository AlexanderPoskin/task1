import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loadDetails } from '../../reducers/detailsUser';
import { formatAddress, formatCompany } from '../../utils/helpers';
import './UserDetails.scss';

const mapStateToProps = (state) => ({
  loadingDetails: state.detailsUser.loading,
  userDetails: state.detailsUser.user,
});

const mapDispatchToProps = {
  loadDetails,
};

class UserDetails extends Component {
  componentDidMount() {
    this.props.loadDetails({ id: this.props.match.params.id });
  }

  render() {
    const { userDetails } = this.props;

    return (
      <div className="user-details">
        <div classnames="user-details__name">
          <b>Name:</b> {userDetails.name}
        </div>
        <div classnames="user-details__username">
          <b>Username:</b> {userDetails.username}
        </div>
        <div classnames="user-details__email">
          <b>Email:</b> {userDetails.email}
        </div>
        <div classnames="user-details__address">
          <b>Address:</b> {formatAddress(userDetails.address)}
        </div>
        <div classnames="user-details__phone">
          <b>Phone:</b> {userDetails.phone}
        </div>
        <div classnames="user-details__website">
          <b>Website:</b>{' '}
          <a
            href={`https://${userDetails.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {userDetails.website}
          </a>
        </div>
        <div classnames="user-details__company">
          <b>Company:</b> {formatCompany(userDetails.company)}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserDetails));
