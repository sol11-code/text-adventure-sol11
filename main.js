//gets data from html ids
const storyText = document.getElementById('text')
const storyButtons = document.getElementById('button-container')

let state = {};

function startStory() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = storyNodes.find(textNode => textNode.id === textNodeIndex);
    storyText.innerText = textNode.text;
}

function chooseOption(option) {

}


const storyNodes = [
    {
        id: 1,
        text: 'You live mysteriously with their beloved cat in a small one-story home. One day, you wake up in their room at midnight. You have nothing to do. With a blink of an eye, you are reminded to find their cat. Where is their cat?',
        choices: [
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
        choices: [
            {
                text: 'Escape',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Hero lifts up their bedroom window on their left, jumps out of it, and runs for their life. After running for some time, they encounter a strange-looking stranger. What are they doing in the alley?',
        choices: [
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
