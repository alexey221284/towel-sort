module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length <= 0) {
    return []
  }

  const newArray1 = matrix.map((element, index) => {
    if (index % 2) {
      return element.sort((a, b) => b - a)
    } else {
      return element.sort((a, b) => a - b)
    }
  });

  return newArray1.join(',').split(',')
}

