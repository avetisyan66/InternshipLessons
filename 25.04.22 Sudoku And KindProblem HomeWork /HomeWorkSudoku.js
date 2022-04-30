function kingProblem(roadRegister){
    const n = roadRegister.length;
    const m = roadRegister[0].length;
    let answer = true;
    for(let i = 0; i < n; i++){
        let inn = 0, out = 0;
        for(let j = 0; j < m; j++){
            if(roadRegister[i][j]){
                out++;
            }
            if(roadRegister[j][i]){
                inn++;
            }
        }
        if(inn !== out){
            answer = false;
            break;
        }
    }
    return answer;
}
const roadRegister = [
    [false, true, false],
    [false, false, false],
    [true, false, false],
];

//console.log(kingProblem(roadRegister))


//I used more than one function
function solution(grid){
  return (
    checkRows(grid) &&
    checkRows(rotate(grid)) &&
    checkSubGrids(grid)
  );
}

function checkRows(grid){
  let checked = true;
  for(const row of grid){
    if(!checked){
      break;
    }
    let existOnce = {};
    
    row
    .filter(item => item !== ".")
    .forEach(item => {
      if(existOnce[item]){
        checked = false;
      } else{
        existOnce[item] = 1;
      }
    });
  }
  return checked;
}

function rotate(grid){
  return grid.map((e, index) =>{
    const newArr = [];

    for(const arr of grid){
      newArr.push(arr[index]);
    }
    return newArr.reverse();
  });
}

function checkSubGrids(grid){
  const SubGrids = [];
  const FirstSubRow = function(grid, subRow, subCol){
    const SubGridOfNow = [];

    for(let row = subRow; row < subRow + 3; row++){
      for(let col = subCol; col < subCol + 3; col++){
        SubGridOfNow.push(grid[row][col]);
      }
    }
    return SubGridOfNow;
  };

  for(let i = 0; i < grid.length; i += 3){
    for(let j = 0; j < grid.length; j += 3){
      SubGrids.push(FirstSubRow(grid, i, j));
    }
  }
  return checkRows(SubGrids);
}

const grid1 = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

const grid2 = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", ".", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

console.log(solution(grid1))
console.log(solution(grid2))