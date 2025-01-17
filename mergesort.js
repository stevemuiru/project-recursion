const mergeSort = (arr) => {
    if(arr.length <= 1) {
      return arr
    }
    let mid = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, mid)
    let rightHalf = arr.slice(mid)
    
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    
     return merge(sortedLeft, sortedRight);
    
  }
  
  const merge = (left, right) => {
    const result = []
    let i = 0, j = 0
    
    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        result.push(left[i]);
        i++
      } else {
        result.push(right[j])
        j++
      }
    }
    
    while(i < left.length) {
      result.push(left[i])
      i++
    }
    while(j < right.length){
      result.push(right[j])
      j++
    }
    return result;
  }
  
  console.log(mergeSort([105, 79, 100, 110]));