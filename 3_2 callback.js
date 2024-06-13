function plusNums(start, end) {
    let current = start;

    function printNextNumber() {
        console.log(current);
        current++;
        if (current > end) {
            clearInterval(intervalId);
        }
    }

    let intervalId = setInterval(printNextNumber, 1000);
}

plusNums(5, 15);