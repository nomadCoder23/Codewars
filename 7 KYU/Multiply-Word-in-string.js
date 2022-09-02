function modifyMultiply (str,loc,num) {
    let strToArr = str.split(" ")
    let desiredStr = strToArr[loc]
    let temp = ""
    
    for (let i = 0; i<num ; i++){
        temp += desiredStr
        temp += "-";
    }
    let answer = temp.slice(0,temp.length-1)
    return answer
  } 