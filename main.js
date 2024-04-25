//gets data from html ids
const storyText = document.getElementById('text');
const storyButtons = document.getElementById('button-container');
const health = document.getElementById('health');
const combat = document.getElementById('combat');
const inventory = document.getElementById('inventory');
const summary = document.getElementById('summary-text');


//empty object
let state = {};

//when the story starts, the text node that will be displayed is id #1
function startStory() {
    state = {};
    showTextNode(1);
}

//writes every choice you make into a summary
function writeStory() {
    const text = document.createElement('p');
    const nextText = document.createTextNode(storyText.innerText);
    text.appendChild(nextText);
    summary.appendChild(text);
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
    return option.requiredState == null || option.requiredState(state);
}

//when you pick a choice, the next text will appear
function pickChoice(option) {
    const nextTextId = option.nextText;
    state = Object.assign(state, option.setState);
    showTextNode(nextTextId);
    writeStory();
}

//story text and choices are stored inside this array
const storyNodes = [
    {
        id: 1,
        text: 'You live mysteriously with your beloved cat in a small one-story home. You really don’t like going outside, so you enjoy your solitary life indoors. One day, you wake up in your room at midnight. You have nothing to do; therefore, you look at your cat’s bed. Typically, it sits there comfy at night, but now you see only an empty bed. You first search in your room, of course, and that goes unsuccessful. You ponder to yourself: this means it is either outside, or it is missing. What will you do?',
        options: [
            {
                text: 'Search',
                setState: { catNote: true },
                nextText: 2
            },
            {
                text: 'Scream',
                nextText: 16
            },
            {
                text: 'Sleep',
                nextText: 18
            }
        ]
    },
    {
        id: 2,
        text: 'You search everywhere in your room, including your cat’s usual sleeping place, your desk, closet, etc.. You are about to give up until you spot a tiny sticky note on your door. \n “I stole your cat, come see me”, you quietly read.',
        options: [
            {
                text: 'Escape',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'You lift up their bedroom window on your left, jump out of it, and run for your life. After running for some time, you encounter a strange-looking stranger. What are they doing in the alley?',
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
        id: 16,
        text: 'You question after intensely looking around your house, “WHERE IS MY CAT!!!!???” Then, you scream very loudly that everyone in the neighborhood can hear you. A cool fluffy white cat magically appears in front of you and lets out a random “Meow”, which translates to, “Hello, what you just did was very unprofessional. Therefore, prepare to have a mob of angry neighbors raiding your house.” You become confused. “What do you mean?” Without any response, the white cat disappears. Should you believe it?',
        options: [
            {
                text: 'Escape',
                nextText: 3
            },
            {
                text: 'Ignore',
                nextText: 17
            }
        ]
    },
    {
        id: 17,
        text: '“Whatever. I’m too lazy”, you say as you begin to head back to your room. Then you hear a very loud crowd behind you, standing right outside your front door. You get raided, and before you could turn around and find somewhere to hide, you collapse and die.',
        options: [
            {
                text: 'End',
                nextText: 1
            }
        ]
    },
    {
        id: 18,
        text: 'You decided to search outside, and find a random black cat standing in front of you. "Hello, potential Hero. Do not fear. Help me find my dearest friend." Black Cat suddenly talks to you, and you scream very loudly. "UNPROFESSIONAL!"',
        options: [
            {
                text: 'Accept',
                nextText: 3
            },
            {
                text: 'Refuse',
                nextText: 17
            }
        ]
    },
    {
        id: 4,
        text: '"Hey you. Yes you. Come here." \n  You walk up to this stranger who is probably a professor and introduce yourself. “My name is Hero. Yeah, I have no idea why that is my name.” \n “Well nice to meet you, Hero. My name is Wizard.” \n “If you are a wizard, why are you dressed like a professor?” \n “It’s a disguise. Look, I know what you are looking for.” \n “What is it? I bet you can’t read my mind.” \n “You are looking for your beloved cat that suddenly went missing.” \n “Wow! You really ARE a wizard!” \n “Yep! And I’ll help you with finding it. What do you think? A nice offer ?”',
        options: [
            {
                text: 'Yes',
                nextText: 5
            },
            {
                text: 'No',
                nextText: 19
            }
        ]
    },
    {
        id: 5,
        text: '"Excellent, let me give you all the items you need. Here is this cool magic sword and a 24-hr shield potion that can only be used once. Make sure to use them wisely. Now, may you leave this dangerous place." Hero happily takes the items and skips to their first destination.',
        options: [
            {
                text: 'Travel Outside',
                nextText: 6
            }
        ]
    },
    {
        id: 19,
        text: 'You think the wizard is trying to deceive you, so you confront them. “You know what, Wizard? I don’t trust you. If you are really a wizard, you would look like a wizard. I’m leaving.” \n The wizard goes from a smile to a frown in an instant. “Wow. That wasn’t very nice. You don’t deserve to live up to your name.” Then, the wizard takes out a worn out book, opens it to a page, and writes down “Hero.” As the wizard crosses out your name, you notice a red laser heading your direction, mercilessly striking you. You drop to the concrete ground, forever laying there motionless.',
        options: [
            {
                text: 'Incomplete End',
                nextText: 1
            }
        ]
    },
    {
        id: 6,
        text: "You enter the portal to another world, nervous because you don’t know what will lay in your path. A cool, enchanting forest you and no one else have never seen before. You realize the danger of this forest when a tree collapses in front of you. A evil cat appears in front of you.",
        options: [
            {
                text: 'Fight with hands',
                nextText: 7
            },
            {
                text: 'Fight with Magic Sword',
                nextText: 7
            },
            {
                text: 'Run away',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "You stand still near a weird looking building that reminds you of a haunted house.",
        options: [
            {
                text: 'Walk away',
                nextText: 8
            },
            {
                text: 'Approach building',
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: "A white cat which seems harmless stands in front of you. Will you intervene?",
        options: [
            {
                text: 'Yes',
                nextText: 20
            },
        ]
    },
    {
        id: 20,
        text: '“Meow!” The white cat quickly and happily consumes the treat you gently handed to it, and it walks somewhere, suggesting you follow it. You follow it for a few seconds until it points its paw to a dusty key laying on a dirt patch.',
        options: [
            {
                text: 'Take key',
                setState: { key: true },
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        text: "You arrived at the very dark chamber where the villain is, but there seems to be a lock attached to the front door.",
        options: [
            {
                text: 'Leave',
                nextText: 8
            },
            {
                text: 'Unlock',
                requiredState: (state) => state.key,
                setState: { key: false },
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: "Using the key you found laying underneath the very tall tree, you successfully unlock the door and ahead of you lies a very dark hallway. You see a silhouette figure of a cat that very much resembles yours. In order to find out what it is, you slowly creep closer to it. “Meow.” The table it is sitting on rotates, facing you. “Hello, Hero. I am Villain.” You recognize the figure. It is your cat! You become very shocked. What should you do?",
        options: [
            {
                text: 'Take cat',
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: "You take the cat and run for your life. The Evil Wizard stops you from reaching the portal back to your world. “Hello, Hero. I am Evil Wizard.” “How do you know my name?” “Are you blind? I am a WIZARD.” “What do you want from me?” “You stole my cat. I want you to give me back my cat!” “No, this is MY cat!” “If you don’t give up, I will instantly strike you with lightning!”",
        options: [
            {
                text: 'Refuse',
                nextText: 13
            },
            {
                text: 'Accept',
                nextText: 12
            }
        ]
    },
    {
        id: 12,
        text: "“Fine, here is your cat.” You unhappily exclaimed and placed it on the Evil Wizard’s hands. “Thank you. You are indeed a Hero.” The Evil Wizard lets you access the portal, where you sadly walk back home without your cat that isn’t yours at all. Are you really a Hero?",
        options: [
            {
                text: 'End',
                nextText: 1
            }
        ]
    },
    {
        id: 13,
        text: "“Never!” You yell at the Evil Wizard and try to run away. Before you realize it, the wizard uses their magic wand to cast a spell on you. While you cannot move you miserably watch them take away your cat.",
        options: [
            {
                text: 'Take action',
                nextText: 14
            },
            {
                text: 'Stand still',
                nextText: 15
            }
        ]
    },
    {
        id: 14,
        text: "You draw out your glowing Magic Sword, and with hesitation challenge the Evil Wizard to a duel. To your surprise, you defeat the evil wizard, and successfully reach the portal with your cat you thought was missing forever. Now, there is no need to worry, you're once again living in your ordinary world!",
        options: [
            {
                text: 'End',
                nextText: 1
            },
        ]
    },
    {
        id: 15,
        text: "You stand there, hopeless because you can’t do anything. The Evil Wizard summons a lightning strike, fatally hitting you. You forever disappear in the world without any trace of your name.",
        options: [
            {
                text: 'End',
                nextText: 1
            },
        ]
    }
]

//starts the story by displaying the first text and choices
startStory();

//allows collapsible to display summary when clicked on
const collapsible = document.getElementsByClassName('summary');
var i;

for (i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let summaryText = this.nextElementSibling;
        if (summaryText.style.display === 'block') {
            summaryText.style.display = 'none';
        } else {
            summaryText.style.display = 'block';
        }
    });
}