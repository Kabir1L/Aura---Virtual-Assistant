
// <--- AURA --->  

// Select the HTML elements for button and content display
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Function to convert text to speech
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1; // Set the speech rate
    text_speak.pitch = 1; // Set the speech pitch
    window.speechSynthesis.speak(text_speak); // Invoke the speech synthesis
}

// Function to greet the user based on the time of the day
function wishMe() {
    var day = new Date(); // Get the current date and time
    var hr = day.getHours(); // Extract the hour

    // Conditional greetings based on the time of the day
    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    } else if(hr == 12) {
        speak("Good noon");
    } else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
    speak("How can I help?"); // Common follow-up question
}

// Event listener for window load to greet the user and introduce Aura
window.addEventListener('load', ()=>{
    speak("My name is Aura, I'm Your Personal Assistant");
    wishMe();
})

// Speech recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Function to handle the speech recognition result
recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript; // Display the transcribed text
    speakThis(transcript.toLowerCase()); // Process the transcribed text
}

// Event listener to start speech recognition when the button is clicked
btn.addEventListener('click', ()=>{
    recognition.start();
})

// Function to process the spoken message and respond
function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    // Default response for unrecognized messages
    speech.text = "I did not understand what you said. Please try again.";

    // Various conditional responses based on specific keywords in the message
    if(message.includes('hi') || message.includes('hello')) {
        const finalText = "Hello. How can I help?";
        speech.text = finalText;
    }

    // Additional conditions for different messages like greetings, questions about Aura, etc.

    else if(message.includes('how are you')) {
        const finalText = "I'm fine, How are you Today?";
        speech.text = finalText;
    }

    else if(message.includes('introduce yourself') || message.includes('What are you?')) {
        const finalText = "I'm a virtual assistant. My name is Aura. I'm developed by Kabir Lal. I'm your personal assistant at your service 24 7";
        speech.text = finalText;
    }

    else if(message.includes('how old are you')) {
        const finalText = "As I'm a virtual assistant, I've no age. But, i can say that I've started my journey from 14th april, 2022";
        speech.text = finalText;
    }

    else if(message.includes('what are you doing now') || message.includes('what are you doing') || message.includes('what are you doing right now')) {
        const finalText = "Oh. It's pretty cool. I'm talking with you";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is Aura";
        speech.text = finalText;
    }

    else if(message.includes('who is my future girlfriend')) {
        const finalText = "You will marry no one else but Esh, that is your future end game she will be the love of your life and your dream come true.";
        speech.text = finalText;
    }


    else if(message.includes('who is your developer') || message.includes('who developed you') || message.includes('who build you')) {
        const finalText = "I'm developed by Kabir. Let see his profile";
        window.open("https://www.linkedin.com/in/kabir-lal-9b6925175/", "_blank");
        speech.text = finalText;
    }

    else if(message.includes('can you help me')) {
        const finalText = "Why not? ask me. if possible, then i will try with my best";
        speech.text = finalText;
    }

    else if(message.includes('who are you')) {
        const finalText = "Hey!! I'm Aura. I'm your personal virtual assistant.";
        speech.text = finalText;
    }

    else if(message.includes('How can you help me')) {
        const finalText = "It's cool. I can help you in many ways.";
        speech.text = finalText;
    }


    else if(message.includes('what is your name') || message.includes('tell me your name')) {
        const finalText = "My name is Aura";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('how can')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    
    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"});
        speech.text = "Today's date is " + date;

    } 

    else if(message.includes('calculator')) {
        window.open('Calculator:///');
        speech.text = "Opening Calculator.";
    } 
    
    else if(message.includes('tell me a joke')) {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
            "How does the moon cut his hair? Eclipse it."
        ];
        speech.text = jokes[Math.floor(Math.random() * jokes.length)];
    } 
    
    else if(message.includes('set a reminder')) {
        // Example of setting a reminder - you might need additional functionality for this
        speech.text = "What would you like to be reminded about, and when?";
    } 

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        speech.text = "Opening YouTube for you.";
    } 
    else if(message.includes('open twitter')) {
        window.open("https://twitter.com", "_blank");
        speech.text = "Taking you to Twitter.";
    } 
    else if(message.includes('open maps')) {
        window.open("https://maps.google.com", "_blank");
        speech.text = "Opening Google Maps.";

    }
    else if(message.includes('play music')) {
        // Add a functionality to play music if you can
        speech.text = "Playing your favorite tunes!";
    } 
    
    else{
        // Default search response
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speech.text = "I found some information about " + message + " on Google.";
    }

    // Set the properties for the speech response
    speech.volume = 1; // Full volume
    speech.pitch = 1; // Normal pitch
    speech.rate = 1; // Normal rate

// This line tells the browser to read aloud the text we've set up.
// 'speech' is our prepared script that the speaker will read. It contains what to say and how to say it.
window.speechSynthesis.speak(speech);

}