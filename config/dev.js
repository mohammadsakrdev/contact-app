module.exports = () => {
  return {
    env: 'dev',
    port: process.env.PORT || 80,
    secretToken: process.env.SECRET_TOKEN
  };
};
