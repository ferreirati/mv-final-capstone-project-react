import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleFavouriteAction } from '../redux/actions';
import Provider from './Provider';
import providers from '../constants/providers';

const Favourites = ({ favourites }) => (
  <div>
    <h2>Favourite providers</h2>
    {providers
      .filter(p => favourites.includes(p.id))
      .map(p => <Provider key={p.id} provider={p} />)}
  </div>
);

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({ favourites: state.providers.favourites });
const mapDispatchToProps = (dispatch) => ({
  toggleFavourite: (id) => dispatch(toggleFavouriteAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
