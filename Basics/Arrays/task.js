

// ### **Real-Life Problems with Arrays**

// #### **Basic Array Manipulations**
// 1. **Shopping List Manager:**
//    - Create an array to store shopping items.
//    - Add, remove, and display items in the list.

// 2. **Class Attendance:**
//    - Use an array to store the names of students present in class.
//    - Add new names dynamically and display the updated list.
// var student = [];
// while (1) {
//     var ans = prompt("Enter Student Name : ");
//     if(ans==null){
//         break;
//     }
//     var Attendance = +prompt("Enter Presence : ");
//     if(Attendance){
//         student.push(ans);
//         console.log(student);
//     }
// }


// 3. **Weather Tracker:**
//    - Store daily temperatures in an array.
//    - Calculate the average temperature of the week.
// var temp = [];
// for (let i = 0; i < 7; i++) {
//     temp.push(+prompt("Enter Temp : "));
// }
// console.log(temp);
// var sum=0;
// for (let i = 0; i < temp.length; i++) {
//     sum+=temp[i];
// }
// console.log("Avg : ",sum/temp.length);

// 4. **To-Do List Application:**
//    - Create a to-do list array.
//    - Allow users to mark tasks as completed (e.g., by removing them from the array).

// var arr1 = [11,12,13,14,15,16];
// while (1) {
//     var arr2 = [];
//     var ans = prompt(`${arr1}\n1.Add \n 2.Remove.\n\nEnter Your Choice : `);
//     if(ans==null){
//         console.log('Final Array : ',arr1);
//         break;
//     }
//     else if(ans == 1){
//         arr1.push(+prompt("Enter a Number : "));
//     }
//     else if(ans == 2){
//         var num = +prompt("Enter Number :- ");
//         for (let i = 0; i< arr1.length; i++){
//             if(arr1[i] != num)
//             {
//                 arr2.push(arr1[i]);
//             }
//         }
//         arr1 = arr2.concat();
//     }
// }

// 5. **Exam Scores Analyzer:**
//    - Store exam scores in an array.
//    - Find the highest, lowest, and average scores.

// ---

// #### **Cloning Arrays**
// 6. **Backup of Inventory Data:**
//    - Create an inventory array.
//    - Clone the array to create a backup before making changes.

//    ```javascript
//    const inventory = ['Apples', 'Oranges', 'Bananas'];
//    const inventoryBackup = [...inventory]; // Clone using spread operator
//    const a = inventory.concat();
//    const b = inventory.slice();


//    console.log(inventoryBackup);
//    console.log(a);
//    console.log(b);

//    ```

// 7. **Restore Default Settings:**   // H.W
//    - Clone a default settings array to allow resetting user settings to defaults.

// 8. **Employee List Duplication:**  // H.W
//    - Clone an employee names array to preserve the original list while sorting the duplicate for reporting.

// ---

// #### **Using Loops**

// ##### **For Loop**
// 9. **Daily Expenses Tracker:**
//    - Store daily expenses in an array.
//    - Use a `for` loop to calculate the total expenses for the month.

// 10. **Number Filter:**
//     - Create an array of numbers.
//     - Use a `for` loop to separate even and odd numbers into different arrays.

// ---

// ##### **For-In Loop**
// 11. **Student Grades Analyzer:**
//     - Use a `for-in` loop to iterate over an array of student grades and count how many students scored above 80.

// 12. **Product Inventory Tracker:**
//     - Store product quantities in an array.
//     - Use a `for-in` loop to calculate the total quantity of products.

// var allData = [];
// while (1){
//     var value = +prompt("Howmuch Quantity : ");
//     if(value==0)
//         break;

//     allData.push(value);
// }
// console.log(allData);
// var totalQuan = 0;
// for (const index in allData) {
//     totalQuan+=allData[index];
// }
// console.log("Total : ",totalQuan);
// ---

// ##### ** For-Of Loop **
// 13. **Favorite Books:**
//     - Create an array of favorite book titles.
//     - Use a `for-of` loop to display each title.
// var fvrtBooks = [];
// while (1) {
//     var t = prompt("Enter Book Title : ");
//     if(t == null){
//        break;
//     }
//     fvrtBooks.push(t);
// }
// for (const element of  fvrtBooks) {
//     console.log(element);
// }

// var products = ["Choco","Cold Drink","Bag","Wafer","Paper"];
// console.log(parseInt(Math.random()*products.length));
// console.log(Math.floor(Math.random()*products.length));

// console.log(products[parseInt(Math.random()*products.length)]);

// var price = prompt("Enter price of Bag : ");


// 14. **Calculate Discounts:**
//     - Store product prices in an array.
//     - Use a `for-of` loop to apply a discount to each price and create a new discounted prices array.

// ---

// ##### **ForEach Loop**
// 15. **Customer Order List:**
//     - Store customer orders in an array.
//     - Use `forEach` to display each order in the console.

//     ```javascript
//     const orders = ['Order1', 'Order2', 'Order3'];
//     orders.forEach(order => console.log(order));
//     ```

// 16. **Employee Salary Update:**
//     - Use `forEach` to iterate over an array of salaries and apply a raise to each employee.

// 17. **Email Notification Sender:**
//     - Store email addresses in an array.
//     - Use `forEach` to send notifications to each email address.

// ---

// #### **Combination Problems**
// 18. **Survey Data Processor:**
//     - Store survey responses in an array.
//     - Use a combination of loops to:
//       - Count responses.
//       - Filter responses based on criteria.
//       - Display results.

// 19. **Recipe Ingredient Checker:**
//     - Store required ingredients in one array and available ingredients in another.
//     - Use loops to check which ingredients are missing.

// 20. **Game Scoreboard:**
//     - Store player scores in an array.
//     - Use different loops to:
//       - Find the highest score.
//       - Display scores above a certain threshold.

// ---

// #### **Advanced Problems**
// 21. **City Temperature Monitor:**
//     - Store temperatures of multiple cities in a 2D array.
//     - Use nested loops to find the city with the highest and lowest temperature.

// 22. **Order Fulfillment System:**
//     - Store product IDs and quantities in two arrays.
//     - Use loops to match product IDs with quantities and calculate the total value of fulfilled orders.

// 23. **Team Performance Tracker:**
//     - Store team names and their scores in separate arrays.
//     - Use loops to pair team names with their scores and display them.

// 24. **Duplicate Finder:**
//     - Create an array with duplicate entries.
//     - Use loops to identify and remove duplicates, creating a new array with unique values.

// 25. **Travel Planner:**
//     - Store destinations and distances in separate arrays.
//     - Use loops to find destinations within a specific distance range.

// ---
