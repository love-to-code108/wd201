
/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
	// Complete the function


	// GETTING THE DATE
	const date = new Date();


	// MONTH
	const month = String(date.getMonth()+1).padStart(2,"0");


	// DAY
	const day = String(date.getDate()).padStart(2,"0");

	// YEAR
	const year = String(date.getFullYear());


	const todaysDateStr = `${year}-${month}-${day}`;
	// console.log(todaysDateStr)


	let Output = "",entryDate,finalOutput;


	// const month 

	for(let i = 0 ; i < entries.length ; i++){
		
		entryDate = entries[i].date.split("T");

		if(todaysDateStr === entryDate[0]){
			 Output = Output + entries[i].name + ",";

			}
			// console.log("hello world")
	}

	finalOutput = Output.substring(0,Output.length - 1);

	return finalOutput;

}

module.exports = todaysEntries;


// let input = [
// 	{ name: "Harry", date: "2023-08-07T02:53:42+05:30" },
// 	{ name: "Hermione", date: "2021-01-22T02:53:42+05:30" },
// 	{ name: "Ron", date: "2023-08-07T03:53:42+05:30" }
//   ]

// console.log(todaysEntries(input));




