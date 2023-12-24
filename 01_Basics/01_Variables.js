const account_ID=121
let account_Name="Aayush"
var account_Password="1221"
account_Address="Biratnagar"

//*account_ID=150;*//
/*prefer not to use var because there will be issue in functional 
scope and block scope*

Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])/
*/
account_Name="Rajiv Magar"
account_Password="4321"
account_Address="Kathmandu"

console.table([account_ID,account_Name,account_Password,account_Address]);