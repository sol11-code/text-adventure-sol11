//gets data from html ids
const storyText = document.getElementById('text');
const storyButtons = document.getElementById('button-container');

let state = {};

//when the story starts, the text node that will be displayed is id #1
function startStory() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = storyNodes.find(textNode => textNode.id === textNodeIndex);
    storyText.innerText = textNode.text;
    while (storyButtons.firstChild) {
        storyButtons.removeChild(storyButtons.firstchild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('choice');
            button.addEventListener('click', () => chooseOption(option));
            storyButtons.appendChild(button);
        }
    })
}

function showOption(option) {
    return true;
}

function chooseOption(option) {
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
    }
]

startStory();
