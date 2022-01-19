const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
function pickIt(arHw){
    const odd=[], even=[];
    for(let i = 0; i < arHw.length; i++){
        if(arHw[i]%2 !== 0){
    
            even.push(arHw[i]);
            even.sort((a,b) => b - a);
        }else{
            odd.push(arHw[i]);
            odd.sort((a,b) => a - b);
        }
        
    }
    const result = [...odd, ...even];
    
    console.log(result);
}
pickIt(arHw);
 



const matrix = [[1,2], [3,4], [5,6]];
function matrixTransp(matrix){
    let newArr = [];
    for (let i = 0; i < matrix.length; i++){
        newArr.push([])
    };
      for(let i = 0; i < matrix.length; i++){
          for(let j = 0; j < matrix.length; j++){
              newArr[j].push(matrix[i][j]);
          };
      };
      
      console.log(newArr);
}; 

matrixTransp(matrix);




