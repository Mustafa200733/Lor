const appJson = require('./app.json');

module.exports = ({ config }) => {
  const baseUrl = process.env.EXPO_BASE_URL?.trim().replace(/\/+$/, '');

  return {
    ...config,
    ...appJson.expo,
    experiments: {
      ...appJson.expo.experiments,
      ...(baseUrl ? { baseUrl } : {}),
    },
  };
};
