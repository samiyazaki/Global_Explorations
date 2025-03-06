// List of 30 unique events with modifiers for all ship types
const events = [
  { 
    name: "Intergalactic Trade Coalition Formed",
    prompt: "A historic trade agreement unites multiple civilizations, drastically increasing commerce and resource sharing.",
    modifiers: { Defense: -10, Trade: 50, Exploration: 10, Mining: 15 }
  },
  { 
    name: "Universal Economic Pooling",
    prompt: "Major economies pool their resources to stabilize interstellar markets. Trade ships thrive while other sectors adjust.",
    modifiers: { Defense: -5, Trade: 45, Exploration: 5, Mining: 10 }
  },
  { 
    name: "Galactic Banking Boom",
    prompt: "A surge in interstellar banking leads to increased investments in planetary economies. Those with strong trade fleets benefit the most.",
    modifiers: { Defense: -5, Trade: 40, Exploration: 0, Mining: 10 }
  },
  { 
    name: "Corporate Mega-Merger",
    prompt: "A major corporate merger restructures interstellar trade, providing lucrative opportunities for trade-oriented civilizations.",
    modifiers: { Defense: -10, Trade: 50, Exploration: 10, Mining: 20 }
  },
  { 
    name: "Intergalactic Stock Market Crash",
    prompt: "A speculative market collapse sends shockwaves through the galactic economy, hitting trade routes and financial investments hard.",
    modifiers: { Defense: 5, Trade: -40, Exploration: -20, Mining: 15 }
  },
  { 
    name: "Banking Reform & Stabilization",
    prompt: "New financial regulations stabilize the galactic economy, boosting trade and investment in planetary infrastructures.",
    modifiers: { Defense: 0, Trade: 35, Exploration: 15, Mining: 10 }
  },
  { 
    name: "Trade Route Expansion",
    prompt: "A breakthrough in hyperspace lane mapping opens new profitable trade routes, benefiting trade and exploration.",
    modifiers: { Defense: -5, Trade: 40, Exploration: 20, Mining: 5 }
  },
  { 
    name: "Galactic Peace Treaty Signed",
    prompt: "After years of tension, warring civilizations agree to an unprecedented peace treaty, significantly reducing military spending and boosting trade.",
    modifiers: { Defense: -30, Trade: 50, Exploration: 10, Mining: 5 }
  },
  { 
    name: "Centralized Space Banking System",
    prompt: "A new centralized space banking system makes transactions more efficient, benefiting trade while reducing security concerns.",
    modifiers: { Defense: -10, Trade: 45, Exploration: 5, Mining: 10 }
  },
  { 
    name: "Luxury Goods Boom",
    prompt: "An explosion in demand for luxury goods across the galaxy creates massive trade opportunities.",
    modifiers: { Defense: -5, Trade: 50, Exploration: 5, Mining: 10 }
  },
  { 
    name: "Planetary Infrastructure Investment",
    prompt: "A massive wave of infrastructure investment increases demand for trade and mining.",
    modifiers: { Defense: 0, Trade: 30, Exploration: 5, Mining: 20 }
  },
  { 
    name: "Galactic Free Trade Agreement",
    prompt: "Major civilizations agree to remove tariffs on intergalactic goods, creating new trade opportunities.",
    modifiers: { Defense: -5, Trade: 45, Exploration: 10, Mining: 5 }
  },
  { 
    name: "Mining Conglomerates Buy Out Trade Fleets",
    prompt: "Large mining corporations buy shares in trade companies, increasing resource allocation for interstellar transport.",
    modifiers: { Defense: -5, Trade: 30, Exploration: 0, Mining: 20 }
  },
  { 
    name: "Refugee Crisis Stabilized",
    prompt: "Massive investments in housing and infrastructure resolve the refugee crisis, strengthening economic activity and trade.",
    modifiers: { Defense: -10, Trade: 40, Exploration: 5, Mining: 10 }
  },
  { 
    name: "New Economic Hub Established",
    prompt: "A newly colonized planet emerges as a major financial hub, benefiting trade and exploration.",
    modifiers: { Defense: -5, Trade: 35, Exploration: 20, Mining: 10 }
  },
  { 
    name: "Universal Digital Currency Adopted",
    prompt: "A new universal currency allows faster and more efficient trade across civilizations, benefiting commercial sectors.",
    modifiers: { Defense: -5, Trade: 50, Exploration: 5, Mining: 10 }
  },
  { 
    name: "AI Revolution in Logistics",
    prompt: "AI-powered logistics create a revolution in cargo transport and supply chain management, increasing trade efficiency.",
    modifiers: { Defense: -5, Trade: 45, Exploration: 10, Mining: 5 }
  },
  { 
    name: "Mining Technology Breakthrough",
    prompt: "Advances in asteroid mining tech lead to an increase in valuable minerals being extracted and traded.",
    modifiers: { Defense: 0, Trade: 30, Exploration: 5, Mining: 30 }
  },
  { 
    name: "New Colony Establishes Major Trade Hub",
    prompt: "A recently settled planet quickly develops into a major hub for interstellar commerce, boosting trade routes.",
    modifiers: { Defense: -5, Trade: 40, Exploration: 10, Mining: 5 }
  },
  { 
    name: "Interplanetary Financial Exchange Launched",
    prompt: "A new financial exchange allows civilizations to invest in planetary development, benefiting trade and mining sectors.",
    modifiers: { Defense: -5, Trade: 45, Exploration: 5, Mining: 10 }
  }
];


document.getElementById('generateEventBtn').addEventListener('click', () => {
  const randomEvent = events[Math.floor(Math.random() * events.length)];

  // Debugging log to check if event is selected correctly
  console.log("Selected Event:", randomEvent);

  // Debugging log to check if modifiers exist
  console.log("Modifiers Object:", randomEvent.modifiers);

  // Ensure the keys exist before displaying (prevents 'undefined' issues)
  const defense = randomEvent.modifiers && "Defense" in randomEvent.modifiers ? randomEvent.modifiers.Defense : 0;
  const trade = randomEvent.modifiers && "Trade" in randomEvent.modifiers ? randomEvent.modifiers.Trade : 0;
  const exploration = randomEvent.modifiers && "Exploration" in randomEvent.modifiers ? randomEvent.modifiers.Exploration : 0;
  const mining = randomEvent.modifiers && "Mining" in randomEvent.modifiers ? randomEvent.modifiers.Mining : 0;

  console.log("Extracted Modifiers:", { defense, trade, exploration, mining });

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

