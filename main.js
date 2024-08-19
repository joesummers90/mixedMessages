// Provide the user with an inspirational quote, a nonsensical joke and a motivational positive affirmation to help improve their mood and inspire them

const inspirationalQuotes = [
    "\"What we think, we become.\" — Buddha",
    "\"Absorb what is useful. Discard what is not. Add what is uniquely your own.\" — Bruce Lee",
    "\"The only journey is the journey within.\" — Rainer Maria Rilke",
    "\"The swiftest way to triple your success is to double your investment in personal development\" — Robin Sharma",
    "\"What lies behind us, and what lies before us, are tiny matters compared to what lies within us.\" — Ralph Waldo Emerson",
    "\"Life isn't about finding yourself. Life is about creating yourself.\" — George Bernard Shaw",
    "\"Be not afraid of growing slowly; be afraid only of standing still.\" — Chinese Proverb",
    "\"We must become the change we want to see\".—Mahatma Gandhi",
    "\"We are what we repeatedly do. Excellence, then, is not an act but a habit.\" — Will Durant",
    "\"Whatever the mind of man can conceive and believe, it can achieve.\" — Napoleon Hill"
];
const nonsensicalJokes = [
    "Why did the lady put lipstick on her forehead? She was trying to makeup her mind",
    "Why shouldn't you tell pigs your secrets? Because they always squeal",
    "What do you get from a selfish cow? Spoiled milk",
    "Why did the teacher go to the eye doctor? She couldn't control her pupils",
    "What do you call a moose with no name? Anony-moose",
    "Why should you take advice from a porcupine? They have a lot of good points",
    "What did the duck say when the waiter brought the check? \“Put it on my bill\"",
    "What did the tree say when spring arrived? \“What a re-leaf!\”",
    "I had a conversation with a dolphin once. It felt like we really clicked",
    "A horse goes into a restaurant. The host says, \“Hey!\” The horse replies, \“You read my mind.\”"
];
const positiveAffirmations = [
    "I am grateful for another day of life",
    "I am worthy of what I desire",
    "I am resilient in the face of challenges",
    "I will accomplish everything I need to do today",
    "I overcome my fears by getting out of my comfort zone",
    "I accept my emotions and let them move through me",
    "I trust myself to make the right decisions",
    "I allow myself to make mistakes as they help me grow",
    "I have everything I need to achieve my goals",
    "I am kind to myself and others"
];

const getRandomMessage = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const quote = getRandomMessage(inspirationalQuotes);
const joke = getRandomMessage(nonsensicalJokes);
const affirmation = getRandomMessage(positiveAffirmations);

const motivateUser = () => {
    console.log("Let's brighten up your day and inspire you to keep going.");
    console.log(`Something to inspire you: ${quote}`);
    console.log(`Something to make you laugh: ${joke}`);
    console.log(`Something to tell yourself in the mirror: ${affirmation}`);
}

motivateUser();