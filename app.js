function calculateAge() {
    let inputDate = document.getElementById("date").value;
    
    if (inputDate) {
        let birthDate = new Date(inputDate);
        let currentDate = new Date();

        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let monthDiff = currentDate.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        document.querySelector(".result").innerHTML = `Your age is: ${age} years.`;
    } else {
        alert("Please select a valid date.");
    }
}

