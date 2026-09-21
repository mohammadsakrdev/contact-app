module.exports = () => {
  return {
    env: 'test',
    port: process.env.PORT || 80,
    secretToken: process.env.SECRET_TOKEN
  };
};
