const IGNORED_IPS = new Set(['127.0.0.1', '255.255.255.255', '0.0.0.0']);

const INVESTIGATION_REFRESH_TIME = 30;

module.exports = {
  IGNORED_IPS,
  INVESTIGATION_REFRESH_TIME
};
