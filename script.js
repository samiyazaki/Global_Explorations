// List of 30 unique events with modifiers for all ship types
const events = [
  { 
    name: 'Alien Attack',
    prompt: "A hostile alien fleet is approaching! Defense ships must protect your planet.",
    modifiers: { Defense: 30, Trade: -10, Exploration: -5, Mining: -10 }
  },
  { 
    name: 'Trade Boom',
    prompt: "The intergalactic economy is thriving, making trade routes highly profitable.",
    modifiers: { Defense: -5, Trade: 30, Exploration: 10, Mining: 10 }
  },
  { 
    name: 'Asteroid Strike',
    prompt: "A massive asteroid has struck a mining colony! Mining ships are required for repairs.",
    modifiers: { Defense: 10, Trade: -10, Exploration: 5, Mining: -15 }
  },
  { 
    name: 'Solar Flare',
    prompt: "A powerful solar flare disrupts communications. Defense ships shield critical systems.",
    modifiers: { Defense: 20, Trade: -5, Exploration: 10, Mining: -10 }
  },
  { 
    name: 'Black Hole Discovered',
    prompt: "A newly discovered black hole disrupts space travel. Exploration ships assist navigation.",
    modifiers: { Defense: 0, Trade: -10, Exploration: 25, Mining: -5 }
  },
  { 
    name: 'Pirate Raid!',
    prompt: "Pirates are attacking your trade convoys! Defense ships are needed for protection.",
    modifiers: { Defense: 25, Trade: -20, Exploration: -5, Mining: 0 }
  },
  { 
    name: 'Mysterious Signal Detected',
    prompt: "A strange signal has been detected from deep space. Exploration ships investigate.",
    modifiers: { Defense: 5, Trade: 0, Exploration: 30, Mining: 0 }
  },
  { 
    name: 'Wormhole Appears',
    prompt: "A wormhole has opened near your system. Exploration ships can scout new routes.",
    modifiers: { Defense: 5, Trade: 10, Exploration: 25, Mining: 10 }
  },
  { 
    name: 'Meteor Shower',
    prompt: "A meteor shower threatens mining operations. Defense ships shield against damage.",
    modifiers: { Defense: 15, Trade: 0, Exploration: -5, Mining: -15 }
  },
  { 
    name: 'Refugee Crisis',
    prompt: "A neighboring planet is in distress. Trade ships deliver emergency supplies.",
    modifiers: { Defense: 10, Trade: 25, Exploration: 10, Mining: 5 }
  },
  { 
    name: 'Ancient Alien Ruins Found',
    prompt: "An ancient alien structure is discovered on a distant world. Exploration ships analyze the site.",
    modifiers: { Defense: -5, Trade: 10, Exploration: 30, Mining: 15 }
  },
  { 
    name: 'Rare Mineral Cache',
    prompt: "A rare mineral deposit has been found in a nearby asteroid field. Mining ships extract it.",
    modifiers: { Defense: 0, Trade: 10, Exploration: 10, Mining: 30 }
  },
  { 
    name: 'Diplomatic Dispute',
    prompt: "A trade dispute between planets threatens economic stability.",
    modifiers: { Defense: 10, Trade: -25, Exploration: 5, Mining: 10 }
  },
  { 
    name: 'Energy Crisis',
    prompt: "Fuel shortages limit space travel. Mining ships extract alternative energy sources.",
    modifiers: { Defense: -5, Trade: -10, Exploration: -5, Mining: 25 }
  },
  { 
    name: 'Stellar Anomaly',
    prompt: "A powerful gravitational anomaly is detected. Exploration ships study its effects.",
    modifiers: { Defense: -5, Trade: 5, Exploration: 30, Mining: 0 }
  },
  { 
    name: 'Fleet Technology Upgrade',
    prompt: "A breakthrough in ship technology improves efficiency.",
    modifiers: { Defense: 10, Trade: 10, Exploration: 10, Mining: 10 }
  },
  { 
    name: 'Hyperspace Lane Disruption',
    prompt: "A critical hyperspace lane is blocked. Trade ships are delayed.",
    modifiers: { Defense: 0, Trade: -15, Exploration: 10, Mining: 0 }
  },
  { 
    name: 'Galactic Summit Agreement',
    prompt: "A major diplomatic agreement benefits interstellar trade.",
    modifiers: { Defense: 0, Trade: 25, Exploration: 10, Mining: 5 }
  },
  { 
    name: 'AI Breakthrough',
    prompt: "Artificial intelligence revolutionizes space mining.",
    modifiers: { Defense: -5, Trade: 5, Exploration: 10, Mining: 30 }
  },
  { 
    name: 'Cosmic Radiation Storm',
    prompt: "A radiation storm threatens all fleets. Defense ships mitigate damage.",
    modifiers: { Defense: 20, Trade: -10, Exploration: -5, Mining: -5 }
  },
  { 
    name: 'Time Dilation Event',
    prompt: "A strange time anomaly slows ship operations.",
    modifiers: { Defense: -5, Trade: -10, Exploration: -10, Mining: -10 }
  },
  { 
    name: 'New Planet Colonized',
    prompt: "A habitable planet is discovered and colonized!",
    modifiers: { Defense: 10, Trade: 15, Exploration: 25, Mining: 20 }
  }
];

// Generate a random event and display its modifiers
document.getElementById('generateEventBtn').addEventListener('click', () => {
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  
  // Ensure the keys exist before displaying (prevents 'undefined' issues)
  const defense = randomEvent.modifiers?.Defense ?? 0;
  const trade = randomEvent.modifiers?.Trade ?? 0;
  const exploration = randomEvent.modifiers?.Exploration ?? 0;
  const mining = randomEvent.modifiers?.Mining ?? 0;

  document.getElementById('eventDisplay').innerHTML = `
    <h2>Event: ${randomEvent.name}</h2>
    <p>${randomEvent.prompt}</p>
    <h3>Modifiers:</h3>
    <ul>
      <li><strong>Defense:</strong> ${defense}</li>
      <li><strong>Trade:</strong> ${trade}</li>
      <li><strong>Exploration:</strong> ${exploration}</li>
      <li><strong>Mining:</strong> ${mining}</li>
    </ul>
  `;
});


