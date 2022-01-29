  
  function displayOccurences(ar){

   /* for(let i = 0; i < ar.length; i++){
        if(res[ar[i]] === undefined){
            //string as content of array[i] occures first time
            res[ar[i]] = 1;
        }else{
            res[ar[i]] = res[ar[i]] + 1;
        }
    }*/
    const res = ar.reduce((res,cur) => res === undefined ? res === 1 : res + 1, []);
       
    
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))

}
const ar = ["lmn", "Yaichko" , "d", "lmn", "a" ,"lmn", "a","d"];
displayOccurences(ar);
  
  
  