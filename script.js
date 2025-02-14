// List of 30 random events with modifiers
const events = [
  { 
    name: 'Alien Attack',
    prompt: "A hostile alien fleet is approaching! Defense ships reduce planetary damage.",
    modifier: "+30 per Defense Ship"
  },
  { 
    name: 'Trade Boom',
    prompt: "The galactic economy surges, increasing profits for trade ships.",
    modifier: "+25 per Trade Ship"
  },
  { 
    name: 'Diamond Asteroid Found',
    prompt: "A rare asteroid filled with diamonds is discovered! Mining ships can extract valuable resources.",
    modifier: "+40 per Mining Ship"
  },
  { 
    name: 'Uncharted Space Discovery',
    prompt: "A new star system is found! Exploration ships expand your planetary influence.",
    modifier: "+35 per Exploration Ship"
  },
  { 
    name: 'Pirate Raid!',
    prompt: "Space pirates are targeting trade routes. Defense ships protect your economy.",
    modifier: "+20 per Defense Ship"
  },
  { 
    name: 'Smuggler’s Market',
    prompt: "An underground trading hub is discovered. Trade ships can exploit black market deals.",
    modifier: "+30 per Trade Ship"
  },
  { 
    name: 'Mining Equipment Failure',
    prompt: "A mining malfunction reduces productivity. Mining ships are needed for repairs.",
    modifier: "-20 per Mining Ship"
  },
  { 
    name: 'Supernova Shockwave',
    prompt: "A distant supernova threatens your fleet. Exploration ships help navigate through the radiation.",
    modifier: "+25 per Exploration Ship"
  },
  { 
    name: 'Galactic War Declaration',
    prompt: "War erupts between rival planets. Defense ships are needed to maintain security.",
    modifier: "+40 per Defense Ship"
  },
  { 
    name: 'Planetary Crisis!',
    prompt: "A neighboring planet is in distress. Trade ships can deliver much-needed supplies.",
    modifier: "+20 per Trade Ship"
  },
  { 
    name: 'Asteroid Mining Contract',
    prompt: "Your mining fleet is contracted for a lucrative operation.",
    modifier: "+35 per Mining Ship"
  },
  { 
    name: 'Lost Expedition Found',
    prompt: "An old expedition team has been located! Exploration ships rescue survivors.",
    modifier: "+30 per Exploration Ship"
  },
  { 
    name: 'Intergalactic Taxation Policy',
    prompt: "New tariffs increase trade costs. Trade ships face financial strain.",
    modifier: "-15 per Trade Ship"
  },
  { 
    name: 'Refugee Crisis',
    prompt: "A refugee crisis requires planetary assistance. Defense and trade ships provide aid.",
    modifier: "+10 per Defense & Trade Ship"
  },
  { 
    name: 'Solar Flare Warning',
    prompt: "A massive solar flare threatens your fleet. Defense ships provide shield coverage.",
    modifier: "+25 per Defense Ship"
  },
  { 
    name: 'Diplomatic Trade Agreement',
    prompt: "An alliance strengthens your economy. Trade ships benefit from favorable deals.",
    modifier: "+30 per Trade Ship"
  },
  { 
    name: 'Black Hole Discovery',
    prompt: "A dangerous black hole is detected. Exploration ships help scientists study it safely.",
    modifier: "+20 per Exploration Ship"
  },
  { 
    name: 'Space Debris Crisis',
    prompt: "A debris field threatens mining operations. Mining ships must clean up the area.",
    modifier: "-10 per Mining Ship"
  },
  { 
    name: 'Hidden Resource Cache',
    prompt: "A hidden planetary cache is uncovered. Mining ships extract valuable resources.",
    modifier: "+50 per Mining Ship"
  },
  { 
    name: 'Meteor Shower Impacts!',
    prompt: "A meteor shower threatens trade lanes. Defense ships ensure safe travel.",
    modifier: "+15 per Defense Ship"
  },
  { 
    name: 'Stellar Cartography Breakthrough',
    prompt: "Exploration ships uncover a more efficient method for interstellar travel.",
    modifier: "+35 per Exploration Ship"
  },
  { 
    name: 'Pirate King Overthrown',
    prompt: "A notorious pirate has been captured! Trade ships travel safely without risk.",
    modifier: "+10 per Trade Ship"
  },
  { 
    name: 'Unobtanium Found!',
    prompt: "A powerful rare mineral has been found. Mining ships extract valuable resources.",
    modifier: "+45 per Mining Ship"
  },
  { 
    name: 'Exotic Alien Discovery',
    prompt: "An unknown alien species is discovered! Exploration ships conduct first contact.",
    modifier: "+30 per Exploration Ship"
  },
  { 
    name: 'Ancient Relic Found',
    prompt: "Explorers uncover an ancient space relic of immense value.",
    modifier: "+40 per Exploration Ship"
  },
  { 
    name: 'Fleet Fuel Shortage',
    prompt: "A fuel crisis affects all fleets. Teams with balanced fleets suffer less.",
    modifier: "-15 per Ship (All Types)"
  },
  { 
    name: 'Tech Upgrade Breakthrough',
    prompt: "A major technological advancement increases ship efficiency.",
    modifier: "+20 per Ship (All Types)"
  },
  { 
    name: 'Hyperlane Disruption',
    prompt: "A critical hyperspace lane is closed. Trade ships suffer delays.",
    modifier: "-20 per Trade Ship"
  },
  { 
    name: 'Defense Contract Signed',
    prompt: "A lucrative deal strengthens planetary security. Defense ships gain additional funding.",
    modifier: "+35 per Defense Ship"
  },
  { 
    name: 'Comet Mining Opportunity',
    prompt: "A fast-moving comet contains valuable minerals. Mining ships gain a huge bonus.",
    modifier: "+60 per Mining Ship"
  }
];

// Generate a random event and display its modifier
document.getElementById('generateEventBtn').addEventListener('click', () => {
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  
  document.getElementById('eventDisplay').innerHTML = `
    <h2>Event: ${randomEvent.name}</h2>
    <p>${randomEvent.prompt}</p>
    <h3>Modifier: ${randomEvent.modifier}</h3>
  `;
});
