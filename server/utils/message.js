var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

var generateLocationMessage = (from,lat,long) => {
  return {

  };
};

module.exports = {generateMessage};
