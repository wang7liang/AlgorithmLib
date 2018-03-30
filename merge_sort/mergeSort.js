/**
 * Created by wangqiliang on 2018/3/28.
 */

/**
 * 归并排序算法
 */
function mergeSort(arr, r=arr.length){

    let q = Math.floor(r/2);

    let leftSize = q+1;
    let rightSize = r-q+1;

    if(q>0){
        let arrLeft = new Array(leftSize);
        for(let i=0;i<leftSize-1; i++){
            arrLeft[i] = arr[i];
        }
        arrLeft[leftSize-1] = Number.MAX_VALUE;

        let arrRight = new Array(rightSize);
        for(let i=0;i<rightSize-1; i++){
            arrRight[i] = arr[i+q];
        }
        arrRight[rightSize-1] = Number.MAX_VALUE;

        // 分
        mergeSort(arrLeft,leftSize-1);
        mergeSort(arrRight,rightSize-1);

        // 和
        let i=0;
        let j=0;
        let k=0;
        while(k<r){
            if(arrLeft[i]<arrRight[j]){
                arr[k++]=arrLeft[i++];
            }else{
                arr[k++]=arrRight[j++];
            }
        }
    }
}


let arr = [1,5,2,6,3,4];
mergeSort(arr);
console.log(arr.join(","));


