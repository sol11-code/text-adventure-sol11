//gets data from html ids
const storyText = document.getElementById('text');
const storyButtons = document.getElementById('button-container');
const health = document.getElementById('health');
const combat = document.getElementById('combat');

//empty object
let state = {};

//when the story starts, the text node that will be displayed is id #1
function startStory() {
    state = {};
    showTextNode(1);
}

//shows story text and all available choices
function showTextNode(textNodeIndex) {
    const textNode = storyNodes.find(textNode => textNode.id === textNodeIndex);
    storyText.innerText = textNode.text;
    while (storyButtons.firstChild) {
        storyButtons.removeChild(storyButtons.firstChild);
    }

    textNode.options.forEach(option => {
        if (showChoice(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('choice');
            button.addEventListener('click', () => pickChoice(option));
            storyButtons.appendChild(button);
        }
    })
}

//displays all available choices
function showChoice(option) {
    return true;
}

//when you pick a choice, the next text will appear
function pickChoice(option) {
    const next = option.nextText;
    showTextNode(next);
}

//story text and choices are stored inside this array
const storyNodes = [
    {
        id: 1,
        text: 'You live mysteriously with their beloved cat in a small one-story home. One day, you wake up in their room at midnight. You have nothing to do. With a blink of an eye, you are reminded to find their cat. Where is their cat?',
        options: [
            {
                text: 'Search',
                setState: { catNote: true },
                nextText: 2
            },
            {
                text: 'Scream',
                nextText: 2
            },
            {
                text: 'Sleep',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You search everywhere in your room, including your cat’s usual sleeping place, your desk, closet, etc.. You are about to give up until you spot a tiny sticky note on your door. “I stole your cat, come see me”, you quietly read.',
        options: [
            {
                text: 'Escape',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Hero lifts up their bedroom window on their left, jumps out of it, and runs for their life. After running for some time, they encounter a strange-looking stranger. What are they doing in the alley?',
        options: [
            {
                text: 'Ignore',
                nextText: 4
            },
            {
                text: 'Talk',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: '"Hey you. Yes you. Come here." Hero walks up to this stranger who is probably a professor and introduces themself. “My name is Hero. Yeah, I have no idea why that is my name.” “Well nice to meet you, Hero.My name is Wizard.” “If you are a wizard, why are you dressed like a professor ?” “It’s a disguise. Look, I know what you are looking for.” “What is it ? I bet you can’t read my mind.” “You are looking for your beloved cat that suddenly went missing.” “Wow! You really ARE a wizard!” “Yep! And I’ll help you with finding it.What do you think? A nice offer ?”',
        options: [
            {
                text: 'Yes',
                nextText: 5
            },
            {
                text: 'No',
                nextText: 5
            }
        ]
    }
]

//starts the story by displaying the first text and choices
startStory();
