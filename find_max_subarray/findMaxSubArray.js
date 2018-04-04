/**
 * Created by wangqiliang on 2018/4/4.
 */


/**
 * 查找和最大的跨中间的子数组
 *
 * @param arr
 * @param low
 * @param mid
 * @param high
 */
function findMaxCrossingSubArray(arr, low, mid, high){
    let leftSum = Number.MIN_VALUE;
    let leftMax = mid;
    let leftTmpSum = 0;
    for(let i=mid; i>=low; i--){
        leftTmpSum+=arr[i];
        if(leftTmpSum>=leftSum){
            leftMax = i;
            leftSum = leftTmpSum;
        }
    }

    let rightSum = Number.MIN_VALUE;
    let rightMax = mid+1;
    let rightTmpSum = 0;
    for(let i=mid+1; i<=high; i++){
        rightTmpSum+=arr[i];
        if(rightTmpSum>=rightSum){
            rightMax = i;
            rightSum = rightTmpSum;
        }
    }

    return {low: leftMax, high: rightMax, sum: leftSum+rightSum};
}


/**
 * 查找和最大的子数组
 *
 * @param arr
 * @param low
 * @param high
 * @returns {{low: *, high: *, sum: *}}
 */
function findMaxSubArray(arr, low=0, high=arr.length-1){
    if(low == high){
        // 基本情况
        return {low: low, high: high, sum: arr[low]};
    }else{
        // 递归情况
        let mid = low+Math.floor((high-low)/2);

        let leftRetValue = findMaxSubArray(arr, low, mid);
        let rightRetValue = findMaxSubArray(arr, mid+1, high);
        let crossRetValue = findMaxCrossingSubArray(arr, low, mid, high);

        if(leftRetValue.sum >= rightRetValue.sum && leftRetValue.sum >= crossRetValue.sum){
            return {low: leftRetValue.low, high: leftRetValue.high, sum: leftRetValue.sum}
        }else if(rightRetValue.sum >= leftRetValue.sum && rightRetValue.sum >= crossRetValue.sum){
            return {low: rightRetValue.low, high: rightRetValue.high, sum: rightRetValue.sum}
        }else{
            return {low: crossRetValue.low, high: crossRetValue.high, sum: crossRetValue.sum}
        }
    }
}



// 测试
// let arr = [3,-5,2,1,1,-7,7,8,-1];
let arr = [-1,4,6,7,-9,56,-90,11,55,22,44,1,-1,2];
let retValue = findMaxSubArray(arr);
console.log("low:"+retValue.low+"  high:"+retValue.high+"  sum:"+retValue.sum);