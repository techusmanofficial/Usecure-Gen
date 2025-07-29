let text = document.getElementById("text")
let generate = document.getElementById("generate")
let range = document.getElementById("range")
let includeuppercase = document.getElementById("include-uppercase")
let includelowercase = document.getElementById("include-lowercase")
let includenumbers = document.getElementById("include-numbers")
let includesymbols = document.getElementById("include-symbols")
let copy = document.getElementById("copy")
let password = document.getElementById("password")




function RandomGenerate() {
    let CharSet = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "1234567890",
        symbols: "!@#$%^&*()_+{}[]|\\:;\"'<>,.?/"
    }

    let SelectCharSet = [
        document.getElementById("include-uppercase") && CharSet.uppercase,
        document.getElementById("include-lowercase").checked && CharSet.lowercase,
        document.getElementById("include-numbers").checked && CharSet.numbers,
        document.getElementById("include-symbols").checked && CharSet.symbols
    ];

    if (!SelectCharSet.some(Boolean)) {
        alert("Choose at least one is Reqiured")
        return; // Exit the function
    }

    // console.log(SelectCharSet.filter(Boolean).join(" "))
    // let Range = document.getElementById("range")


    let FinalPassword = "";
    let selectedCharSet = SelectCharSet.filter(Boolean).join("");



    let passwordLength = document.getElementById("range").value;

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * selectedCharSet.length);
        FinalPassword += selectedCharSet[randomIndex];
    }

    password.innerHTML = FinalPassword;
}




// for input generate

function Generate() {

    let CharSet = [
        "craft",
        "pubg",
        "new",
        "top",
        "king",
        "good",
        "psl",
        "ipl",
        "worldcup",
        "cricketer",
        "footballer",
        "hello",
        "gamer",
        "tech",
        "vlog",
        "vlogger",
        "Basketball",
        "Tennis",
        "Golf",
        "Rugby",
        "Baseball",
        "Volleyball",
        "TableTennis",
        "Badminton",
        "IceHockey",
        "Hockey",
        "Football",
        "Swimming",
        "Athletics",
        "Cycling",
        "Boxing",
        "Martial",
        "Wrestling",
        "Gymnastics",
        "Archery",
        "Rowing",
        "Sailing",
        "Skiing",
        "Snowboarding",
        "Surfing",
        "Skateboarding",
        "Climbing",
        "Fencing",
        "Canoeing",
        "Triathlon",
        "Triathlon",
        "Equestrian",
        "Weightlifting",
        "Powerlifting",
        "Bobsleigh",
        "Luge",
        "Skeleton",
        "Curling",
        "Polo",
        "Racquetball",
        "WaterPolo",
        "Lacrosse",
        "Frisbee",
        "Cricket",
        "Croquet",
        "Netball",
        "Volleyball",
        "Banana",
        "Telescope",
        "Bicycle",
        "Sunglasses",
        "Notebook",
        "Pineapple",
        "Guitar",
        "Backpack",
        "Compass",
        "Wristwatch",
        "Umbrella",
        "Soccerball",
        "Alarmclock",
        "Camera",
        "Chessboard",
        "Headphones",
        "Waterbottle",
        "Laptop",
        "Sneakers",
        "Magnifyingglass",

    ]
    console.log(CharSet.length)

    let Numbers = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ]

    // random numbers
    let RandomNumbers
    for (let i = 0; i < 2; i++) {
        RandomNumbers = Math.floor(Math.random() * Numbers.length);
        // FinalPassword += selectedCharSet[randomIndex];
    }
    let RandN = Numbers[RandomNumbers]
    // console.log(RandN)




    // random charset

    let RandomCharset = Math.floor(Math.random() * CharSet.length)
    let RandCS = CharSet[RandomCharset]
    newtext = text.value
    let check = newtext.trim("").split(" ").length

    if (check === 1) {
        // console.log(RandN)
        let setText = text.value

        if (text.value === "") {
            alert("Please your name")
        }
        if (text.value === "allah" || text.value === "Allah" || text.value === "muhammad" ||  text.value === "muhammad " || text.value === "Muhammad") {
            alert("This name is not allowed")
        }
        else {
            password.innerHTML = setText + RandCS + RandN
        }

    }

    else {

        let setText = newtext.split(" ")
        text.value = setText.join(RandCS)
        // console.log(RandomNumbers)

        let a = password.innerHTML = text.value
        password.innerHTML = a + RandN
        let changetext = setText.join(" ")
        text.value = changetext
    }

}

let rangeValue = document.getElementById("range-value")

range.addEventListener("input", () => {
    rangeValue.innerHTML = range.value
})



copy.addEventListener("click", () => {
    if(text.value === ""){
        alert("invalid value")
    }


    let textarea = password.innerText
    copyToClipboard(textarea);
    // text.select();
    // console.log(textarea)
})

function copyToClipboard(text1) {

    var textArea = document.createElement("textarea");

    // Set the text content to be the text you want to copy
    textArea.value = text1;

    document.body.appendChild(textArea);

    // Select the text inside the textarea
    textArea.select();
    if(textArea === "Nothing here"){
        alert("invalid value")
    }
    else{


   

    try {
        // Execute the copy command
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert('Copying password was ' + msg);
    } catch (err) {
       alert('Unable to copy text');
    }

    // Remove the textarea from the document
    document.body.removeChild(textArea);
}

}





