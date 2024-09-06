let data_plot_start_who = [
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
    'Fisher', 'Inventor', 'Oracle', 'Scout'];


let data_plot_start_where = [
    {id: 'WHERE   ' },
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
    'Shop', 'Watchtower', 'Refuge', 'Citadel'];


let data_plot_start_what = [
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
    'Grave', 'Bracelet', 'Shipment', 'Bone'];



let data_plot_start_description = [
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
    'Overgrown', 'Distinctive', 'Smoldering', 'Gnarled'];


let data_plot_start_addtional_element = [
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
    'Reveal', 'Danger', 'Challenge', 'Manipulate'];


let data_plot_start_sensory_detail = [
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
    'Clouds of Dust', 'A Low- Pitched Grinding', 'The Bite of Strong Ale', 'Dragging Through Mud', 'The Aroma of Fine Wine', 'Slithering Against Your Skin',
    'Crashing Waves', 'Whispered Prayers', 'Soggy, Uneven Ground', 'Running Water'];


