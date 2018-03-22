/**
 * Created by wangqiliang on 2018/3/22.
 */

/**
 * 插入排序算法(降序)
 *
 * @param arr 输入数组
 * @param sort 升序降序，true:升序  false:降序
 */
function insertionSort(arr,sort=true){

    for(let j=1; j<arr.length; j++){
        let key = arr[j];

        let i = j-1;
        while(i>=0 && sort? arr[i]>key:arr[i]<key){

            arr[i+1]=arr[i];

            i--;
        }

        arr[i+1] = key;
    }

}

// 测试1
let arr1 = [3,5,2,1,1,7,7,8,-1];
insertionSort(arr1,false);
console.log(arr1.join(","));