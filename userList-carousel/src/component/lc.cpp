// class Solution{
//     public:
//         int findMaxConsecutiveOnes(vector<int>&nums){
//             int count=0;
//             int maxCount=0;
//             for(int i=0;i<nums.size();i++){
//                 if(nums[i]==1){
//                     count++;
//                 }
//                 else{
//                     maxCount=max(maxCount,count);
//                     count=0;
//                 }
//             }
//             return count;
//         }
// };
//[1,0,1,1,0,1]



// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


//[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1] k=3
//o/p 8 expected 10
// class Solution {
// public:
//     int longestOnes(vector<int>& nums, int k) {
//         int left=0;
//         int right=0;
//         int len=0;

//         while(right<nums.size()){
//             if(k==0 && nums[right]==0){
//                 while(k==0){
//                     if(nums[left]==0){
//                         k++;
//                     }
//                     left++; 
//                 }
//             }
//             if(nums[right]==0){
//                 k--;
//             }
//             len=max(len,right-left+1);
//             right++;
//         }
//         return len;
//     }
// };


