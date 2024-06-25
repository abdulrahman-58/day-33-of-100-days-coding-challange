// Assalamualaikum @everyone 👋
// 🚀 Day 33 Challenge: Start Coding! 🚀
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
console.log((`\n`));
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilTheNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilTheNewYear() + " days until new year.");
console.log(`\n`);
// Question 99: Generate a date object representing your next birthday and log it to the console.
function getNextBirthday(month, day) {
    const today = new Date();
    const year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBithday = getNextBirthday(10, 20);
console.log("Next birthday on ", nextBithday.toLocaleDateString());
export {};
