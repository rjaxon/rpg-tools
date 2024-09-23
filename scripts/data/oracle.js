

let data_oracle_loom = [
  {id: 'oracle_cgre_loom', note: 'column 0 is a list of distributions for knowledge, conflict, ending'},
         /*  | knowledge |  conflict |  endings   | */
    [ [[0, 0], [  1,   5], [  1,   2], [  1,   1]  ], 'No, and unexpectedly'],
    [ [[0, 0], [  6,  15], [  3,   6], [  2,   2]  ], 'No, but'],
    [ [[0, 0], [ 16,  20], [  7,  16], [  3,  20]  ], 'No, and'],
    [ [[0, 0], [ 21,  50], [ 17,  50], [ 21,  50]  ], 'No'],
    [ [[0, 0], [ 51,  80], [ 51,  84], [ 51,  80]  ], 'Yes'],
    [ [[0, 0], [ 81,  85], [ 85,  94], [ 81,  98]  ], 'Yes, and'],
    [ [[0, 0], [ 86,  95], [ 95,  98], [ 99,  99]  ], 'Yes, but'],
    [ [[0, 0], [ 96, 100], [ 99, 100], [100, 100]  ], 'Yes, and unexpectedly'],
];


let data_oracle_crge_unexpected = [
  { id: 'oracle_cgre_unexpected' },
  [ 'Foreshadowing', 'Set a thread to be the main thread for the next scene. The current scene should then start wrapping up and heading towards the next scene.'],
  [ 'Tying Off', 'The main thread resolves or substantially moves forward in this scene by narrative decree. This does not mean that the main thread cannot create follow-up threads.'],
  [ 'To Conflict', 'The next scene centers on a conflict of your choosing. Set the main elements of the next scene, and start heading toward them in this scene.'],
  [ 'Costume Change', 'An NPC drastically changes their mind, motivations, alliances, etc. for better or worse. This could be a big story reveal or a simple change of heart.'],
  [ 'Key Grip', 'Set the location or general elements for the next scene. The current scene should then start wrapping up and heading towards the next scene.'],
  [ 'To Knowledge', 'The next scene centers on lore or investigation of your choosing. Set the main elements of the next scene, and start heading toward them in this scene.'],
  [ 'Framing', 'An NPC (new or pre-existing) or object becomes critical to the main thread.'],
  [ 'Set Change', 'Scene continues in another location. The current thread remains as much as makes sense.'],
  [ 'Upstaged', 'An NPC makes a big move. If the NPC has any motivations, plot vectors, or goals they go into overdrive'],
  [ 'Pattern Change', 'The main thread gets modified, drastically. Whatever direction the main thread was heading, make a hard left. Use a generator, such as Rory’s Story Cubes, tarot cards or a random Wikipedia page, as necessary.'],
  [ 'Limelit', 'The rest of the scene goes great for the PC’s. Assume that the majority of the questions pertaining to the main thread with regard to the scene are answered in a way that benefits the PC’s.'],
  [ 'Entering the Red', 'Threat of danger or combat arrives. The premise of the scene gets more dangerous in a way that forces the PC’s to respond by leaving, fighting, or taking their chances.'],
  [ 'To Endings', 'The next scene resolves or substantially moves forward a thread of your choosing. Set the main elements of the next scene, and start heading toward them in this scene.'],
  [ 'Montage', 'The timeframe of the scene changes to a montage of actions set across various scenes to move forward.'],
  [ 'Enter Stage Left', 'A PC or NPC (new or pre-existing) arrives fresh in the scene.'],
  [ 'Cross-stitch', 'Choose another thread to be the main thread for the rest of the scene.'],
  [ 'Six Degrees', 'A meaningful, but not always positive, connection forms between two PC’s and/or NPC’s.'],
  // [ 'Reroll / Reserved 1', 'These slots are reserved for specific “GM actions” found in an RPG system, such as a compel action in the FATE system. Specific examples can be found at conjecturegames.com.'],
  // [ 'Reroll / Reserved 2', 'These slots are reserved for specific “GM actions” found in an RPG system, such as a compel action in the FATE system. Specific examples can be found at conjecturegames.com.'],
  // [ 'Reroll / Reserved 3', 'These slots are reserved for specific “GM actions” found in an RPG system, such as a compel action in the FATE system. Specific examples can be found at conjecturegames.com.']

];



let data_event_meaning_action = [
  { id: 'event_meaning_action' },
  'Attainment', 'Starting', 'Neglect', 'Fight', 'Recruit', 
  'Triumph', 'Violate', 'Oppose', 'Malice', 'Communicate', 
  'Persecute', 'Increase', 'Decrease', 'Abandon', 'Gratify', 
  'Inquire', 'Antagonise', 'Move', 'Waste', 'Truce', 
  'Release', 'Befriend', 'Judge', 'Desert', 'Dominate', 
  'Procrastinate', 'Praise', 'Separate', 'Take', 'Break', 
  'Heal', 'Delay', 'Stop', 'Lie', 'Return', 
  'Immitate', 'Struggle', 'Inform', 'Bestow', 'Postpone', 
  'Expose', 'Haggle', 'Imprison', 'Release', 'Celebrate', 
  'Develop', 'Travel', 'Block', 'Harm', 'Debase', 
  'Overindulge', 'Adjourn', 'Adversity', 'Kill', 'Disrupt', 
  'Usurp', 'Create', 'Betray', 'Agree', 'Abuse', 
  'Oppress', 'Inspect', 'Ambush', 'Spy', 'Attach', 
  'Carry', 'Open', 'Carelessness', 'Ruin', 'Extravagance', 
  'Trick', 'Arrive', 'Propose', 'Divide', 'Refuse', 
  'Mistrust', 'Deceive', 'Cruelty', 'Intolerance', 'Trust', 
  'Excitement', 'Activity', 'Assist', 'Care', 'Negligence', 
  'Passion', 'Work hard', 'Control', 'Attract', 'Failure', 
  'Pursue', 'Vengeance', 'Proceedings', 'Dispute', 'Punish', 
  'Guide', 'Transform', 'Overthrow', 'Oppress', 'Change' 
];

let data_event_meaning_subject = [
  { id: 'event_meaning_subject' },
  'Goals', 'Dreams', 'Environment', 'Outside', 'Inside', 
  'Reality', 'Allies', 'Enemies', 'Evil', 'Good', 
  'Emotions', 'Opposition', 'War', 'Peace', 'The innocent', 
  'Love', 'The spiritual', 'The intellectual', 'New ideas', 'Joy', 
  'Messages', 'Energy', 'Balance', 'Tension', 'Friendship', 
  'The physical', 'A project', 'Pleasures', 'Pain', 'Possessions', 
  'Benefits', 'Plans', 'Lies', 'Expectations', 'Legal matters', 
  'Bureaucracy', 'Business', 'A path', 'News', 'Exterior factors', 
  'Advice', 'A plot', 'Competition', 'Prison', 'Illness', 
  'Food', 'Attention', 'Success', 'Failure', 'Travel', 
  'Jealousy', 'Dispute', 'Home', 'Investment', 'Suffering', 
  'Wishes', 'Tactics', 'Stalemate', 'Randomness', 'Misfortune', 
  'Death', 'Disruption', 'Power', 'A burden', 'Intrigues', 
  'Fears', 'Ambush', 'Rumor', 'Wounds', 'Extravagance', 
  'A representative', 'Adversities', 'Opulence', 'Liberty', 'Military', 
  'The mundane', 'Trials', 'Masses', 'Vehicle', 'Art', 
  'Victory', 'Dispute', 'Riches', 'Status quo', 'Technology', 
  'Hope', 'Magic', 'Illusions', 'Portals', 'Danger', 
  'Weapons', 'Animals', 'Weather', 'Elements', 'Nature', 
  'The public', 'Leadership', 'Fame', 'Anger', 'Information' 
];



// https://alyssalostinspace.com/wp-content/uploads/2022/09/d100-keyword-chart.pdf
//
//   --- the 2-d table is split into a single list following this one

let data_plot_hooks = [ /*  DEPRECATED  */
  {id: 'plot_hooks'},
  /* who, where, what, description, additional element, sensory detail */
['Priest', 'Village', 'Pyre', 'Decayed', 'Fall', 'Rustling Leaves'],
['Ghost', 'Plains', 'Tome', 'Abandoned', 'Puzzle', 'Eerie Silence'],
['Minstrel', 'Lake', 'Lock', 'Scorched', 'Escape', 'Birdsong'],
['Heretic', 'Cliffs', 'Cage', 'Sparkling', 'Fear', 'Distant Shouts'],
['Veteran', 'Fortress', 'Heirloom', 'Embroidered', 'Betray', 'Ominous Echo'],
['Trickster', 'Wasteland', 'Drug', 'Torn', 'Drown', 'Thick Smoke'],
['Researcher', 'Farm', 'Book', 'Damaged', 'Despair', 'Wet Earth'],
['Cultist', 'Swamp', 'Sword', 'Ancient', 'Loss', 'Damp Wood'],
['Ruler', 'Glade', 'Totem', 'Carved', 'Marriage', 'A Swinging Blade'],
['Prophet', 'Sewers', 'Dagger', 'Ornate', 'Extortion', 'Crackling Fire'],
['Pirate', 'Forest', 'Egg', 'Possessed', 'Blessing', 'Bubbling Cauldron'],
['Cartographer', 'Trail', 'Door', 'Small', 'Feud', 'Soft Weeping'],
['Scholar', 'Monastery', 'Secret', 'Stolen', 'Protect', 'Shattering Glass'],
['Monk', 'Garden', 'Letter', 'corrupted', 'Heresy', 'Tingling Skin'],
['Slave', 'Mountains', 'Curse', 'Enchanted', 'Climb', 'Quiet Singing'],
['Child', 'Observatory', 'Puzzle', 'Forged', 'Espionage', 'Beating ofLarge Wings'],
['Spy', 'Museum', 'Shield', 'Collapsed', 'Belief', 'Sulfuric Odor'],
['God', 'Temple', 'Song', 'Rusted', 'Mystery', 'Burning Wood'],
['Courtesan', 'Sea', 'Campfire', 'Cracked', 'Revenge', 'Metallic Odor'],
['Merchant', 'Bridge', 'Tool', 'Vibrant', 'Prejudice', 'Light Rain'],
['Healer', 'Prison', 'Storm', 'Worn', 'Discover', 'Animal Calls'],
['Knight', 'Marsh', 'Ship', 'Pearlescent', 'Assassination', 'Clashing of Steel'],
['Blacsmith', 'Desert', 'Shrine', 'Ruined', 'Promise', 'Pouring Tea'],
['Thief', 'Lair', 'Poison', 'Valuable', 'Journey', 'Cooking Spices'],
['Fortune Teller', 'Caravan', 'Artifact', 'Polished', 'Jealousy', 'Heavy Perfume'],
['Noble', 'Ruins', 'Seal', 'Divine', 'Obsession', 'Fresh Blood'],
['Spirit', 'Greatwood', 'Map', 'Forgotten', 'Endure', 'Buzzing in the Air'],
['Sailor', 'Battlefield', 'Promise', 'Floating', 'Memory', 'A Slick Surface'],
['Mage', 'Waterfall', 'Decoy', 'Cursed', 'Return', 'A Distant Glow'],
['Soldier', 'Coast', 'Painting', 'Pulsating', 'Exchange', 'Falling Snow'],
['Undertaker', 'Valley', 'Signal', 'Blighted', 'Redemption', 'Something Hissing Nearby'],
['Witch', 'Palace', 'Chest', 'Frozen', 'Disease', 'Snapping Branches'],
['Alchemist', 'Harbor', 'Treasure', 'Weathered', 'Love', 'Heavy, Humid Air'],
['Smuggler', 'Catacombs', 'Rune', 'Sticky', 'Destroy', 'Burning in the Back ofYour Throat'],
['Necromancer', 'Tower', 'Portal', 'Gilded', 'Break', 'Jangling Coins'],
['Servant', 'Ravine', 'Name', 'Hungry', 'Guilt', 'Footsteps in Mud'],
['Monk', 'Cairn', 'Obelisk', 'Massive', 'Forgive', 'The Smell of Old Parchment'],
['Assassin', 'City', 'Statue', 'Colourful', 'Travel', 'Roasting Meat'],
['Emissary', 'Graveyard', 'Tree', 'Broken', 'Arrive', 'Heavy Rain'],
['Professor', 'Abbey', 'Bell', 'Silvery', 'Reconciliation', 'An Herbal Aroma'],
['Dragon', 'Hideout', 'Arrow', 'Illegal', 'Control', 'Grinding Teeth'],
['Artist', 'Altar', 'Amulet', 'Whispering', 'Risk', 'Spoiled Meat'],
['Gladiator', 'River', 'Coin', 'Ashen', 'Abandon', 'Bracing Breeze'],
['Engineer', 'Library', 'Key', 'Fragile', 'Repulse', 'Pressure on Your Mind'],
['Farmer', 'Oasis', 'Instrument', 'Glassy', 'Mourn', 'A Cry for Help'],
['Mercenary', 'Grove', 'Tomb', 'Glowing', 'Create', 'A Rumble ofThunder'],
['Bandit', 'Tavern', 'Monument', 'Sentient', 'Expense', 'Fresh Baked Bread'],
['Criminal', 'Castle', 'Flower', 'Singing', 'Flee', 'Heaving Coughs'],
['Orphan', 'Hamlet', 'Pearl', 'Sodden', 'Hypocrisy', 'A Blaring Horn'],
['Guildmaster', 'Dungeon', 'Wine', 'Fettered', 'Humiliatioon', 'Gentle Music'],
['Ship Captain', 'Guild', 'Flag', 'Sealed', 'Respect', 'Distressed Animals'],
['Coachman', 'Moor', 'Scroll', 'Animated', 'Panic', 'The Glint of Metal'],
['Animal Tamer', 'Jungle', 'Medicine', 'Festering', 'Torment', 'Clean Soap'],
['Steward', 'Inn', 'Oil', 'Petrified', 'Death', 'Loud Chewing'],
['Demon', 'Outpost', 'Symbol', 'Bloody', 'Determined', 'Scrapping Wood'],
['Preacher', 'Carnival', 'Crystal', 'Dirty', 'Influence', 'Old Manure'],
['Traveler', 'Hot Spring', 'Rope', 'Frayed', 'Escort', 'Staccato Dripping'],
['Scribe', 'Camp', 'Ink', 'Mossy', 'Distract', 'Cloying Incense'],
['Guardian', 'Cave', 'Charm', 'Rare', 'Depart', 'A Medicinal Odor'],
['Peddler', 'Thicket', 'Crown', 'Crystallized', 'Slumber', 'Startled Birds'],
['Centaur', 'Chasm', 'Staff', 'Mechanical', 'Scheme', 'Scrapping Against Stone'],
['Refugee', 'Lighthouse', 'Gauntlet', 'Jagged', 'Suppress', 'Dark Chanting'],
['Bard', 'Island', 'Wedding', 'Silky', 'Freedom', 'A Tree Falling Nearby'],
['Archmage', 'Quarry', 'Lens', 'Transparent', 'Resist', 'An Inhuman Roar'],
['Goblin', 'Town', 'Horn', 'Uneven', 'Defend', 'Rotten Fruit'],
['Magistrate', 'Fjord', 'Warning', 'Buried', 'Devour', 'Distant Cheering'],
['Guard', 'Volcano', 'Ring', 'Golden', 'Investigate', 'Damp Clothing'],
['Fairy', 'Mine', 'Tea', 'Melted', 'Fascination', 'Sharp Pain'],
['Elder', 'Estate', 'Armor', 'Clockwork', 'Restore', 'A Shiver Down the Spine'],
['Charlatan', 'Redoubt', 'Bottle', 'Coated', 'Search', 'Cold Metal'],
['Beggar', 'Canyon', 'Law', 'Faded', 'Threat', 'Erratic Flashes ofLight'],
['Golem', 'Barrow', 'Chain', 'Colour-Changing', 'Acquire', 'A Pair of Eyes Watching'],
['Retired Hero', 'Crater', 'Festival', 'Lustrous', 'Passage', 'Fluttering Fabric'],
['Djinn', 'Shipwreck', 'Mask', 'Smooth', 'Command', 'Heavy Breathing'],
['Investigator', 'Station', 'Blood', 'Painted', 'Price', 'The Hiss of an Arrow'],
['Warrior', 'Tundra', 'Throne', 'Magical', 'Transform', 'Chirping Insects'],
['Druid', 'Meadow', 'Monster', 'Flowering', 'Hide', 'Dry, Crinkling Leaves'],
['Adventurer', 'Vault', 'Lantern', 'Heavy', 'Survival', 'Distant Fire Smoke'],
['Scientist', 'Fissure', 'Entrails', 'Elegant', 'Supply', 'Nearby Hoof Beats'],
['Squire', 'Sanctuary', 'Urn', 'Hollow', 'Fortify', 'A Thick, Pungent Broth'],
['Vigilante', 'Academy', 'Ritual', 'New', 'Battle', 'The Pop of Frying Food'],
['Apprentice', 'Orchard', 'Clock', 'Bleached', 'Corrupt', 'An Earthy Musk'],
['Hunter', 'Factory', 'Vial', 'Pliable', 'Defy', 'Charred Runes'],
['Diplomat', 'Highlands', 'Dream', 'Musical', 'Warning', 'The Swirl of Colourful Fabric'],
['Automaton', 'Laboratory', 'Skeleton', 'Restored', 'Duty', 'Coarse Fabric'],
['Courier', 'Labyrinth', 'Spell', 'Unknown', 'Truth', 'Soft Muttering'],
['Murderer', 'Mesa', 'Carving', 'Famous', 'Breach', 'A Heavy Fog'],
['Crime Boss', 'Dig Site', 'Ceremony', 'Lightweight', 'Surrender', 'Fresh Flowers'],
['Hermit', 'Church', 'Bow', 'Poisoned', 'Avoid', 'A Darting Shadow'],
['Performer', 'Stronghold', 'Mirror', 'Oozing', 'Gather', 'Liquid Sloshing'],
['Bounty Hunter', 'Spire', 'Funeral', 'Patterned', 'Deliver', 'Clouds of Dust'],
['Warlord', 'Lagoon', 'Emblem', 'Fragrant', 'Capture', 'A Low- Pitched Grinding'],
['Sage', 'College', 'Trap', 'Mind- Reading', 'Learn', 'The Bite of Strong Ale'],
['Explorer', 'Plateau', 'Potion', 'Incomprehensible', 'Honor', 'Dragging Through Mud'],
['Drunkard', 'Cathedral', 'Skull', 'Ordinary', 'Opportunity', 'The Aroma of Fine Wine'],
['Pilgrim', 'Stable', 'Constellation', 'Shattered', 'Knowledge', 'Slithering Against Your Skin'],
['Fisher', 'Shop', 'Grave', 'Overgrown', 'Reveal', 'Crashing Waves'],
['Inventor', 'Watchtower', 'Bracelet', 'Distinctive', 'Danger', 'Whispered Prayers'],
['Oracle', 'Refuge', 'Shipment', 'Smoldering', 'Challenge', 'Soggy, Uneven Ground'],
['Scout', 'Citadel', 'Bone', 'Gnarled', 'Manipulate', 'Running Water']

  
];



let data_plot_hook_start_who = [
    {id: 'WHO' },
    'Priest', 'Ghost', 'Minstrel', 'Heretic', 'Veteran', 'Trickster',
    'Researcher', 'Cultist', 'Ruler', 'Prophet', 'Pirate', 'Cartographer',
    'Scholar', 'Monk', 'Slave', 'Child', 'Spy', 'God',
    'Courtesan', 'Merchant', 'Healer', 'Knight', 'Blacksmith', 'Thief',
    'Fortune Teller', 'Noble', 'Spirit', 'Sailor', 'Mage', 'Soldier',
    'Undertaker', 'Witch', 'Alchemist', 'Smuggler', 'Necromancer', 'Servant',
    'Monk', 'Assassin', 'Emissary', 'Professor', 'Dragon', 'Artist',
    'Gladiator', 'Engineer', 'Farmer', 'Mercenary', 'Bandit', 'Criminal',
    'Orphan', 'Guild master', 'Ship Captain', 'Coachman', 'Animal Tamer', 'Steward',
    'Demon', 'Preacher', 'Traveler', 'Scribe', 'Guardian', 'Peddler',
    'Centaur', 'Refugee', 'Bard', 'Archmage', 'Goblin', 'Magistrate',
    'Guard', 'Fairy', 'Elder', 'Charlatan', 'Beggar', 'Golem',
    'Retired Hero', 'Djinn', 'Investigator', 'Warrior', 'Druid', 'Adventurer',
    'Scientist', 'Squire', 'Vigilante', 'Apprentice', 'Hunter', 'Diplomat',
    'Automaton', 'Courier', 'Murderer', 'Crime Boss', 'Hermit', 'Performer',
    'Bounty Hunter', 'Warlord', 'Sage', 'Explorer', 'Drunkard', 'Pilgrim',
    'Fisher', 'Inventor', 'Oracle', 'Scout'
];


let data_plot_hook_start_where = [
    {id: 'WHERE' },
    'Village', 'Plains', 'Lake', 'Cliffs', 'Fortress', 'Wasteland',
    'Farm', 'Swamp', 'Glade', 'Sewers', 'Forest', 'Trail',
    'Monastery', 'Garden', 'Mountains', 'Observatory', 'Museum', 'Temple',
    'Sea', 'Bridge', 'Prison', 'Marsh', 'Desert', 'Lair',
    'Caravan', 'Ruins', 'Greatwood', 'Battlefield', 'Waterfall', 'Coast',
    'Valley', 'Palace', 'Harbor', 'Catacombs', 'Tower', 'Ravine',
    'Cairn', 'City', 'Graveyard', 'Abbey', 'Hideout', 'Altar',
    'River', 'Library', 'Oasis', 'Grove', 'Tavern', 'Castle',
    'Hamlet', 'Dungeon', 'Guild', 'Moor', 'Jungle', 'Inn',
    'Outpost', 'Carnival', 'Hot Spring', 'Camp', 'Cave', 'Thicket',
    'Chasm', 'Lighthouse', 'Island', 'Quarry', 'Town', 'Fjord',
    'Volcano', 'Mine', 'Estate', 'Redoubt', 'Canyon', 'Barrow',
    'Crater', 'Shipwreck', 'Station', 'Tundra', 'Meadow', 'Vault',
    'Fissure', 'Sanctuary', 'Academy', 'Orchard', 'Factory', 'Highlands',
    'Laboratory', 'Labyrinth', 'Mesa', 'Dig Site', 'Church', 'Stronghold',
    'Spire', 'Lagoon', 'College', 'Plateau', 'Cathedral', 'Stable',
    'Shop', 'Watchtower', 'Refuge', 'Citadel'
];


let data_plot_hook_start_what = [
    {id: 'WHAT' },
    'Pyre', 'Tome', 'Lock', 'Cage', 'Heirloom', 'Drug',
    'Book', 'Sword', 'Totem', 'Dagger', 'Egg', 'Door',
    'Secret', 'Letter', 'Curse', 'Puzzle', 'Shield', 'Song',
    'Campfire', 'Tool', 'Storm', 'Ship', 'Shrine', 'Poison',
    'Artifact', 'Seal', 'Map', 'Promise', 'Decoy', 'Painting',
    'Signal', 'Chest', 'Treasure', 'Rune', 'Portal', 'Name',
    'Obelisk', 'Statue', 'Tree', 'Bell', 'Arrow', 'Amulet',
    'Coin', 'Key', 'Instrument', 'Tomb', 'Monument', 'Flower',
    'Pearl', 'Wine', 'Flag', 'Scroll', 'Medicine', 'Oil',
    'Symbol', 'Crystal', 'Rope', 'Ink', 'Charm', 'Crown',
    'Staff', 'Gauntlet', 'Wedding', 'Lens', 'Horn', 'Warning',
    'Ring', 'Tea', 'Armor', 'Bottle', 'Law', 'Chain',
    'Festival', 'Mask', 'Blood', 'Throne', 'Monster', 'Lantern',
    'Entrails', 'Urn', 'Ritual', 'Clock', 'Vial', 'Dream',
    'Skeleton', 'Spell', 'Carving', 'Ceremony', 'Bow', 'Mirror',
    'Funeral', 'Emblem', 'Trap', 'Potion', 'Skull', 'Constellation',
    'Grave', 'Bracelet', 'Shipment', 'Bone'
];



let data_plot_hook_start_description = [
    {id: 'DESCRIPTION' },
    'Decayed', 'Abandoned', 'Scorched', 'Sparkling', 'Embroidered', 'Torn',
    'Damaged', 'Ancient', 'Carved', 'Ornate', 'Possessed', 'Small',
    'Stolen', 'corrupted', 'Enchanted', 'Forged', 'Collapsed', 'Rusted',
    'Cracked', 'Vibrant', 'Worn', 'Pearlescent', 'Ruined', 'Valuable',
    'Polished', 'Divine', 'Forgotten', 'Floating', 'Cursed', 'Pulsating',
    'Blighted', 'Frozen', 'Weathered', 'Sticky', 'Gilded', 'Hungry',
    'Massive', 'Colorful', 'Broken', 'Silvery', 'Illegal', 'Whispering',
    'Ashen', 'Fragile', 'Glassy', 'Glowing', 'Sentient', 'Singing',
    'Sodden', 'Fettered', 'Sealed', 'Animated', 'Festering', 'Petrified',
    'Bloody', 'Dirty', 'Frayed', 'Mossy', 'Rare', 'Crystallized',
    'Mechanical', 'Jagged', 'Silky', 'Transparent', 'Uneven', 'Buried',
    'Golden', 'Melted', 'Clockwork', 'Coated', 'Faded', 'Color-Changing',
    'Lustrous', 'Smooth', 'Painted', 'Magical', 'Flowering', 'Heavy',
    'Elegant', 'Hollow', 'New', 'Bleached', 'Pliable', 'Musical',
    'Restored', 'Unknown', 'Famous', 'Lightweight', 'Poisoned', 'Oozing',
    'Patterned', 'Fragrant', 'Mind- Reading', 'Incomprehensible', 'Ordinary', 'Shattered',
    'Overgrown', 'Distinctive', 'Smoldering', 'Gnarled'
];


let data_plot_hook_start_addtional_element = [
    {id: 'ADDITIONAL ELEMENT' },
    'Fall', 'Puzzle', 'Escape', 'Fear', 'Betray', 'Drown',
    'Despair', 'Loss', 'Marriage', 'Extortion', 'Blessing', 'Feud',
    'Protect', 'Heresy', 'Climb', 'Espionage', 'Belief', 'Mystery',
    'Revenge', 'Prejudice', 'Discover', 'Assassination', 'Promise', 'Journey',
    'Jealousy', 'Obsession', 'Endure', 'Memory', 'Return', 'Exchange',
    'Redemption', 'Disease', 'Love', 'Destroy', 'Break', 'Guilt',
    'Forgive', 'Travel', 'Arrive', 'Reconciliation', 'Control', 'Risk',
    'Abandon', 'Repulse', 'Mourn', 'Create', 'Expense', 'Flee',
    'Hypocrisy', 'Humiliation', 'Respect', 'Panic', 'Torment', 'Death',
    'Determined', 'Influence', 'Escort', 'Distract', 'Depart', 'Slumber',
    'Scheme', 'Suppress', 'Freedom', 'Resist', 'Defend', 'Devour',
    'Investigate', 'Fascination', 'Restore', 'Search', 'Threat', 'Acquire',
    'Passage', 'Command', 'Price', 'Transform', 'Hide', 'Survival',
    'Supply', 'Fortify', 'Battle', 'Corrupt', 'Defy', 'Warning',
    'Duty', 'Truth', 'Breach', 'Surrender', 'Avoid', 'Gather',
    'Deliver', 'Capture', 'Learn', 'Honor', 'Opportunity', 'Knowledge',
    'Reveal', 'Danger', 'Challenge', 'Manipulate'
];


let data_plot_hook_start_sensory_detail = [
    {id: 'SENSORY DETAIL' },
    'Rustling Leaves', 'Eerie Silence', 'Birdsong', 'Distant Shouts', 'Ominous Echo', 'Thick Smoke',
    'Wet Earth', 'Damp Wood', 'A Swinging Blade', 'Crackling Fire', 'Bubbling Cauldron', 'Soft Weeping',
    'Shattering Glass', 'Tingling Skin', 'Quiet Singing', 'Beating of Large Wings', 'Sulfuric Odor', 'Burning Wood',
    'Metallic Odor', 'Light Rain', 'Animal Calls', 'Clashing of Steel', 'Pouring Tea', 'Cooking Spices',
    'Heavy Perfume', 'Fresh Blood', 'Buzzing in the Air', 'A Slick Surface', 'A Distant Glow', 'Falling Snow',
    'Something Hissing Nearby', 'Snapping Branches', 'Heavy, Humid Air', 'Burning in the Back of Your Throat', 'Jangling Coins', 'Footsteps in Mud',
    'The Smell of Old Parchment', 'Roasting Meat', 'Heavy Rain', 'An Herbal Aroma', 'Grinding Teeth', 'Spoiled Meat',
    'Bracing Breeze', 'Pressure on Your Mind', 'A Cry for Help', 'A Rumble of Thunder', 'Fresh Baked Bread', 'Heaving Coughs',
    'A Blaring Horn', 'Gentle Music', 'Distressed Animals', 'The Glint of Metal', 'Clean Soap', 'Loud Chewing',
    'Scrapping Wood', 'Old Manure', 'Staccato Dripping', 'Cloying Incense', 'A Medicinal Odor', 'Startled Birds',
    'Scrapping Against Stone', 'Dark Chanting', 'A Tree Falling Nearby', 'An Inhuman Roar', 'Rotten Fruit', 'Distant Cheering',
    'Damp Clothing', 'Sharp Pain', 'A Shiver Down the Spine', 'Cold Metal', 'Erratic Flashes of Light', 'A Pair of Eyes Watching',
    'Fluttering Fabric', 'Heavy Breathing', 'The Hiss of an Arrow', 'Chirping Insects', 'Dry, Crinkling Leaves', 'Distant Fire Smoke',
    'Nearby Hoof Beats', 'A Thick, Pungent Broth', 'The Pop of Frying Food', 'An Earthy Musk', 'Charred Runes', 'The Swirl of Colorful Fabric',
    'Coarse Fabric', 'Soft Muttering', 'A Heavy Fog', 'Fresh Flowers', 'A Darting Shadow', 'Liquid Sloshing',
    'Clouds of Dust', 'A Low-Pitched Grinding', 'The Bite of Strong Ale', 'Dragging Through Mud', 'The Aroma of Fine Wine', 'Slithering Against Your Skin',
    'Crashing Waves', 'Whispered Prayers', 'Soggy, Uneven Ground', 'Running Water'
];



