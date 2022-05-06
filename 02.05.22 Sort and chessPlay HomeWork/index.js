// Sorting without comparison of elements
// All the elements in the array are integers

// I couldn't think about better solution except bucket sorting
/* function insertionSort(array) {
    let length = array.length;
    
    for(var i = 1; i < length; i++) {
      let temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }
  
  function sort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }

    let i,
        min = array[0],
        max = array[0];
    
    array.forEach(function (currentVal) {
        if (currentVal < min) {
            min = currentVal;
        } else if (currentVal > max) {         
            max = currentVal;
        }
    });
  
    let count = Math.floor((max - min) / bucketSize) + 1;
    let allBuckets = new Array(count);
    
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }
    
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - min) / bucketSize)].push(currentVal);
    });
  
    array.length = 0;
    
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });
  
    return array;
  }

const arr = [3, 8, 11, 99, -7, 9, 11, -19];

console.log(sort(arr, arr.length))  */


// For chessPlayers = 4 and finishedMatches = [[0, 1], [1, 2], [2, 0]]
// solution(chessPlayers, finishedMatches) = [[0, 3], [1, 3], [2, 3]]


/* const solution = (chessPlayers, finishedMatches) => {
  let playersCount = chessPlayers;
  
  const generate = new Array(chessPlayers);
  while (chessPlayers-- > 0){
      let count = [];
      count.push(chessPlayers);
      for (let matche of finishedMatches){
          if (matche[0] === chessPlayers)
              count.push(matche[1]);
          else if (matche[1] === chessPlayers)
              count.push(matche[0]);
      }
      generate[chessPlayers] = count;
  }

  const answer = [];
  let checkForAllPlayers = 0;
  for (let match of generate){
      let i = 0;
      while (i < playersCount){
          if (!match.includes(i)){
              if (checkForAllPlayers < i){
                answer.push([checkForAllPlayers, i])
                  break ;
              }
          }
          i++;
      }
      checkForAllPlayers++;
  }
  return answer;
};

let finishedMatches = [[0, 1], [1, 2], [2, 0]];
let chessPlayers = 4;
console.log(solution(chessPlayers, finishedMatches)); */





