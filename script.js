const sounds = {
  klaxon: new Audio("sounds/klaxon.mp3"),
  beep: new Audio("sounds/beep.mp3"),
  explosion: new Audio("sounds/explosion.mp3")
};

// List of 30 unique events with modifiers for all ship types
const events = [
  { 
    name: 'Alien Attack',
    prompt: "A hostile alien fleet is approaching! Defense ships must protect your planet.",
    modifiers: {
      defense: "+40 per Defense Ship",
      trade: "-10 per Trade Ship",
      exploration: "-5 per Exploration Ship",
      mining: "-10 per Mining Ship"
    }
  },
  { 
    name: 'Trade Boom',
    prompt: "The intergalactic economy is thriving, making trade routes highly profitable.",
    modifiers: {
      defense: "-5 per Defense Ship",
      trade: "+30 per Trade Ship",
      exploration: "+10 per Exploration Ship",
      mining: "+5 per Mining Ship"
    }
  },
  { 
    name: 'Asteroid Strike',
    prompt: "A massive asteroid has struck a mining colony! Mining ships are required for repairs.",
    modifiers: {
      defense: "+5 per Defense Ship",
      trade: "-10 per Trade Ship",
      exploration: "0 (No Effect)",
      mining: "-20 per Mining Ship"
    }
  },
  { 
    name: 'Solar Flare',
    prompt: "A powerful solar flare disrupts communications. Defense ships shield critical systems.",
    modifiers: {
      defense: "+25 per Defense Ship",
      trade: "-5 per Trade Ship",
      exploration: "+10 per Exploration Ship",
      mining: "-10 per Mining Ship"
    }
  },
  { 
    name: 'Black Hole Discovered',
    prompt: "A newly discovered black hole disrupts space travel. Exploration ships assist navigation.",
    modifiers: {
      defense: "0 (No Effect)",
      trade: "-15 per Trade Ship",
      exploration: "+35 per Exploration Ship",
      mining: "-5 per Mining Ship"
    }
  },
  { 
    name: 'Pirate Raid!',
    prompt: "Pirates are attacking your trade convoys! Defense ships are needed for protection.",
    modifiers: {
      defense: "+30 per Defense Ship",
      trade: "-25 per Trade Ship",
      exploration: "-5 per Exploration Ship",
      mining: "0 (No Effect)"
    }
  },
  { 
    name: 'Mysterious Signal Detected',
    prompt: "A strange signal has been detected from deep space. Exploration ships investigate.",
    modifiers: {
      defense: "0 (No Effect)",
      trade: "-5 per Trade Ship",
      exploration: "+40 per Exploration Ship",
      mining: "0 (No Effect)"
    }
  },
  { 
    name: 'Wormhole Appears',
    prompt: "A wormhole has opened near your system. Exploration ships can scout new routes.",
    modifiers: {
      defense: "0 (No Effect)",
      trade: "+10 per Trade Ship",
      exploration: "+30 per Exploration Ship",
      mining: "+5 per Mining Ship"
    }
  },
  { 
    name: 'Meteor Shower',
    prompt: "A meteor shower threatens mining operations. Defense ships shield against damage.",
    modifiers: {
      defense: "+15 per Defense Ship",
      trade: "0 (No Effect)",
      exploration: "-5 per Exploration Ship",
      mining: "-20 per Mining Ship"
    }
  },
  { 
    name: 'Refugee Crisis',
    prompt: "A neighboring planet is in distress. Trade ships deliver emergency supplies.",
    modifiers: {
      defense: "+10 per Defense Ship",
      trade: "+30 per Trade Ship",
      exploration: "+5 per Exploration Ship",
      mining: "0 (No Effect)"
    }
  },
  { 
    name: 'Ancient Alien Ruins Found',
    prompt: "An ancient alien structure is discovered on a distant world. Exploration ships analyze the site.",
    modifiers: {
      defense: "-5 per Defense Ship",
      trade: "+10 per Trade Ship",
      exploration: "+50 per Exploration Ship",
      mining: "+15 per Mining Ship"
    }
  },
  { 
    name: 'Rare Mineral Cache',
    prompt: "A rare mineral deposit has been found in a nearby asteroid field. Mining ships extract it.",
    modifiers: {
      defense: "0 (No Effect)",
      trade: "+10 per Trade Ship",
      exploration: "+5 per Exploration Ship",
      mining: "+50 per Mining Ship"
    }
  },
  { 
    name: 'Diplomatic Dispute',
    prompt: "A trade dispute between planets threatens economic stability.",
    modifiers: {
      defense: "+10 per Defense Ship",
      trade: "-30 per Trade Ship",
      exploration: "0 (No Effect)",
      mining: "+5 per Mining Ship"
    }
  },
  { 
    name: 'Energy Crisis',
    prompt: "Fuel shortages limit space travel. Mining ships extract alternative energy sources.",
    modifiers: {
      defense: "-5 per Defense Ship",
      trade: "-10 per Trade Ship",
      exploration: "-10 per Exploration Ship",
      mining: "+40 per Mining Ship"
    }
  },
  { 
    name: 'Stellar Anomaly',
    prompt: "A powerful gravitational anomaly is detected. Exploration ships study its effects.",
    modifiers: {
      defense: "-5 per Defense Ship",
      trade: "+5 per Trade Ship",
      exploration: "+40 per Exploration Ship",
      mining: "0 (No Effect)"
    }
  },
  { 
    name: 'Fleet Technology Upgrade',
    prompt: "A breakthrough in ship technology improves efficiency.",
    modifiers: {
      defense: "+10 per Defense Ship",
      trade: "+10 per Trade Ship",
      exploration: "+10 per Exploration Ship",
      mining: "+10 per Mining Ship"
    }
  },
  { 
    name: 'Hyperspace Lane Disruption',
    prompt: "A critical hyperspace lane is blocked. Trade ships are delayed.",
    modifiers: {
      defense: "0 (No Effect)",
      trade: "-20 per Trade Ship",
      exploration: "+5 per Exploration Ship",
      mining: "0 (No Effect)"
    }
  },
  { 
    name: 'Galactic Summit Agreement',
    prompt: "A major diplomatic agreement benefits interstellar trade.",
    modifiers: {
      defense: "0 (No Effect)",
      trade: "+30 per Trade Ship",
      exploration: "+5 per Exploration Ship",
      mining: "0 (No Effect)"
    }
  },
  { 
    name: 'AI Breakthrough',
    prompt: "Artificial intelligence revolutionizes space mining.",
    modifiers: {
      defense: "-5 per Defense Ship",
      trade: "0 (No Effect)",
      exploration: "+5 per Exploration Ship",
      mining: "+50 per Mining Ship"
    }
  },
  { 
    name: 'Cosmic Radiation Storm',
    prompt: "A radiation storm threatens all fleets. Defense ships mitigate damage.",
    modifiers: {
      defense: "+20 per Defense Ship",
      trade: "-10 per Trade Ship",
      exploration: "-10 per Exploration Ship",
      mining: "-5 per Mining Ship"
    }
  },
  { 
    name: 'Time Dilation Event',
    prompt: "A strange time anomaly slows ship operations.",
    modifiers: {
      defense: "-5 per Defense Ship",
      trade: "-10 per Trade Ship",
      exploration: "-10 per Exploration Ship",
      mining: "-10 per Mining Ship"
    }
  },
  { 
    name: 'New Planet Colonized',
    prompt: "A habitable planet is discovered and colonized!",
    modifiers: {
      defense: "+10 per Defense Ship",
      trade: "+15 per Trade Ship",
      exploration: "+35 per Exploration Ship",
      mining: "+20 per Mining Ship"
    }
  }
];

// Function to play a sound effect
function playSound() {
  const soundKeys = Object.keys(sounds);
  const randomSound = soundKeys[Math.floor(Math.random() * soundkeys.length)};
sounds [randomSound].play();
}

// Generate a random event and display its modifiers
document.getElementById('generateEventBtn').addEventListener('click', () => {
  playSound();
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  const eventDisplay = document.getElementById('eventDisplay');

  // Apply fade-in animation
  eventDisplay.classList.remove("fade-in");
  void eventDisplay.offsetWidth;
  eventDisplay.classList.add("fade-in");
  
  eventDisplay.innerHTML = `
    <h2>Event: ${randomEvent.name}</h2>
    <p>${randomEvent.prompt}</p>
    <h3>Modifiers:</h3>
    <ul>
      <li><strong>Defense:</strong> ${randomEvent.modifiers.defense}</li>
      <li><strong>Trade:</strong> ${randomEvent.modifiers.trade}</li>
      <li><strong>Exploration:</strong> ${randomEvent.modifiers.exploration}</li>
      <li><strong>Mining:</strong> ${randomEvent.modifiers.mining}</li>
    </ul>
  `;
});
