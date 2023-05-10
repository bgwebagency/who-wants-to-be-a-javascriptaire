
const date1 = new Date("2023-5-1")
const us_election = new Date("2024-11-5")
const difference_in_time =us_election.getTime()-date1.getTime()
const difference_in_days = difference_in_time  / (1000 * 3600 * 24);
console.log(parseInt(difference_in_days,10)+ " Days")