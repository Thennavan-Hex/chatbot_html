function getBotResponse(input) {

    if (input == "hi") {
        return "hello";
    } else if (input == "whoami") {
        return "you are user";
    } else if (input == "who are you") {
        return "i am chat bot";
    }

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Sorry i can't understand that";
    }
}
