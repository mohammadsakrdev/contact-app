module.exports = () => {
  return {
    env: 'prod',
    port: process.env.PORT || 80,
    secretToken: process.env.SECRET_TOKEN
  };
};
