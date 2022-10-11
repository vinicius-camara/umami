import React from 'react';
import PropTypes from 'prop-types';
import styles from './Favicon.module.css';

function getHostName(url) {
  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
  return match && match.length > 1 ? match[1] : null;
}

function Favicon({ domain, ...props }) {
  const hostName = domain ? getHostName(domain) : null;

  return hostName ? (
    <img
      className={styles.favicon}
      src={`https://medportal.s3.amazonaws.com/medportal/static/img/favicon.png`}
      height="16"
      alt=""
      {...props}
    />
  ) : null;
}

Favicon.propTypes = {
  domain: PropTypes.string,
};

export default Favicon;
