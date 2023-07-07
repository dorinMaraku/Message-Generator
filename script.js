// a list of 50 inspirational quotes generated from the internet
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The future depends on what you do today. - Mahatma Gandhi",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. - Chantal Sutherland",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "Do not wait for the perfect moment, take the moment and make it perfect. - Unknown",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "It does not matter how slowly you go, as long as you do not stop. - Confucius",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. - Chantal Sutherland",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "Do not wait for the perfect moment, take the moment and make it perfect. - Unknown",
  "The best way to predict the future is to create it. - Peter Drucker",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "It does not matter how slowly you go, as long as you do not stop. - Confucius",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
];

//list of wroing days
const workDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

//list of time during the day
const timeOfTheDay = ['morning', 'afternoon', 'evening']

// Randomly select a quote from the array
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const prompt = require("prompt-sync")({sigint: true})


const generateQuote = () => {
    const promptedDay = prompt("Please enter a work day: ", "i.e. Monday")
    const promptedTimeOfDay = prompt("Please enter the time of day: ", "i.e. morning")
    if (workDays.includes(promptedDay.toLowerCase()) && timeOfTheDay.includes(promptedTimeOfDay.toLowerCase())) {
        return `Your quote for ${promptedDay}'s ${promptedTimeOfDay} is: ${randomQuote}`
    } else {
        return "Please enter either the day or time of the day in the required form" 
    }
}
const quoteGenerator = generateQuote()
console.log(quoteGenerator)

