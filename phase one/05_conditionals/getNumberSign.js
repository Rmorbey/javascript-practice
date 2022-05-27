const getNumberSign = (a) => {

  if (a > 0) {
    return 'positive'
  } else if (a === 0) {
    return 'zero'
  } else (a < 0) ;{
    return 'negative'
  }
}


module.exports = getNumberSign;