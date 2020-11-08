const genButton = document.getElementById('gen');
const advice = document.getElementById('advice');

// base URL
const baseURL = "https://api.adviceslip.com";
// advice.innerHTML = advice["slip"]["advice"];

genButton.addEventListener('click', () => {
    console.log("clicked")

    advice.style.color = "lightgreen";
    advice.style.backgroundColor = "black";
    advice.innerHTML = "Connecting Server..."

    const Http = new XMLHttpRequest();
    Http.open("GET", baseURL + "/advice", true);

    Http.onreadystatechange = function() {
        if (Http.readyState === XMLHttpRequest.DONE) {
            var status = Http.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                const advices = JSON.parse(Http.responseText);
                console.log(advices["slip"]["advice"])
                    // advice.innerHTML = advice["slip"]["advice"];
                advice.innerHTML = advices["slip"]["advice"];
                advice.style.color = "black";
                advice.style.backgroundColor = "white";

            } else {
                // Oh no! There has been an error with the request!
                console.log("oh---noe")
            }
            console.log(status)

        }
    }

    Http.send();

});



// Setting Footer
var year = new Date()
document.getElementById('year').innerHTML = year.getFullYear()