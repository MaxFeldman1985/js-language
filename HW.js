const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
const comparator = (n1, n2)=> {
    let res = n1 % 2 - n2 % 2;
    if(res == 0) {
        res = n1 % 2 == 0 ? n1 - n2 : n2 - n1;
    }
    return res;
}
arHw.sort(comparator);
console.log(arHw);
 



const matrix = [[1,2], [3,4], [5,6]];
function matrixTransp(matrix){
    const res = [];
    for (let i = 0; i < matrix[0].length; i++){
        res.push([]);
    };
      for(let j = 0; j < matrix.length; j++){
          for(let j = 0; j < matrix.length; j++){
              res[i].push(matrix[j][i]);
          }
      }
      return res;
        }
        displayMatrix(matrixTransp([[1,2],[3,4],[5,6]]));
       /* function displayMatrix(Matrix) {
            for (let i = 0; i < Matrix.length; i++){
                let row = '';
              for(let j = 0; j < Matrix[i].length; j++){
                  row = row + Matrix[i][j] + '  ';
              }
              console.log(row);
            };
        }

displayMatrix(res);*/
matrixTransp(matrix);