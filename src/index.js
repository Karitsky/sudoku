module.exports = function solveSudoku(matrix) {

    // каждый проход с нуля считаем сколько осталось нерешенных ячеек
    remaining = {};

    // находим пустые ячейки
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        if (matrix[x][y] == 0) {

          //какие цифры могут быть
          let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          
          //проверяем какие цифры уже есть в горизонтали
          for (let i = 0; i < 9; i++) {
            if (matrix[x][i] != 0) {
              if (candidates.includes(matrix[x][i])) {
                candidates.splice(candidates.indexOf(matrix[x][i]), 1);
              }
            }
          }

          //проверяем какие цифры уже есть в вертикали
          for (let i = 0; i < 9; i++) {
            if (matrix[i][y] != 0) {
              if (candidates.includes(matrix[i][y])) {
                candidates.splice(candidates.indexOf(matrix[i][y]), 1);
              }
            }
          }

          //проверяем какие цифры уже есть в блоке
          for (let blockX = Math.floor(x / 3) * 3; blockX < Math.floor(x / 3) * 3 + 3; blockX++) {
            for (let blockY = Math.floor(y / 3) * 3; blockY < Math.floor(y / 3) * 3 + 3; blockY++) {
              if (matrix[blockX][blockY] != 0) {
                if (candidates.includes(matrix[blockX][blockY])) {
                  candidates.splice(candidates.indexOf(matrix[blockX][blockY]), 1);
                }
              }
            }
          }
          
          //если только одна цифра подойдет на это место, то вставляем
          if (candidates.length == 1) {
            matrix[x][y] = candidates[0];
          } else {
            matrix[x][y] = candidates;
          }
        }
      }
    }
    console.log(matrix);
  return matrix;
}