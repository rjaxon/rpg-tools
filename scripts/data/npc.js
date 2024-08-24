

let data_npc_modifiers = [
 {id: 'npcmodifiers' },
 'superflous',    'addicted',     'conformist',     'nefarious',      'sensible',
 'untrained',     'romantic',     'unreasonable',   'skilled',        'neglictful',
 'lively',        'forthright',   'idealistic',     'unsupportive',   'rational',
 'course',        'foolish',      'cunning',        'delightful',     'miserly',
 'inept',         'banal',        'logical',        'subtle',         'reputable',
 'wicked',        'lazy',         'pessimistic',    'solumn',         'habitual',
 'meek',          'helpful',      'unconcerned',    'generous',       'docile',
 'cheery',        'pragmatic',    'serene',         'thoughful',      'hopeless',
 'pleasant',      'insensitive',  'titled',         'inexperienced',  'prying',
 'oblivious',     'refined',      'indespensable',  'scholarly',      'conservative',
 'uncouth',       'willful',      'indifferent',    'fickle',         'elderly',
 'sinful',        'naive',        'privleged',      'glum',           'likable',
 'lethargic',     'defiant',      'obnoxious',      'insightful',     'tactless',
 'fanatic',       'plebeian',     'childish',       'pious',          'uneducated',
 'incosiderate',  'cultured',     'revolting',      'curious',        'touchy',
 'needy',         'dignified',    'push',           'kind',           'corrupt',
 'jovial',        'schrewd',      'liberal',        'compliant',      'destitute',
 'conniving',     'carful',       'alluring',       'defective',      'optimistic',
 'affluent',      'despondent',   'midless',        'passionate',     'devoted',
 'established',   'unseemly',     'dependable',     'righteous',      'confident'
];


let data_npc_nouns = [
  {id: 'npcnouns' },
 'gypsy',               'witch',        'merchant',       'expert',     'commoner',
 'judge',               'ranger',       'occultist',      'reverent',   'thug',
 'drifter',             'journeyman',   'statesman',      'astrologer', 'duelist',
 'jack-of-all-trades',  'aristocrat',   'preacher',       'artisan',    'rogue',
 'missionary',          'outcast',      'mercenary',      'caretaker',  'hermit',
 'orator',              'chieftain',    'pioneer',        'burglar',    'vicar',
 'officer',             'explorer',     'warden',         'outlaw',     'adept',
 'bum',                 'sorcerer',     'laborer',        'master',     'ascendant',
 'villager',            'magus',        'conscript',      'worker',     'actor',
 'herald',              'highwayman',   'fortune-hunter', 'governer',   'scrapper',
 'monk',                'homemaker',    'reculse',        'steward',    'polymath',
 'magician',            'traveler',     'vagrant',        'apprentice', 'politician',
 'mediator',            'crook',        'civilian',       'activist',   'hero',
 'champion',            'cleric',       'slave',          'gunman',     'clairvoyant',
 'patriarch',           'shopkeeper',   'crone',          'adventurer', 'soldier',
 'entertainer',         'craftsman',    'scientist',      'ascetic',    'superior',
 'performer',           'magister',     'serf',           'brute',      'inquisitor',
 'lord',                'villain',      'proferrsor',     'servant',    'charmer',
 'globetrotter',        'sniper',       'courtier',       'priest',     'tradesman',
 'hitman',              'wizard',       'beggar',         'tradesman',  'warrior'
];

let data_npc_motivation_verbs = [
  {id: 'npcmotverb' },
  'advise', 'obtain', 'attempt', 'spoil', 'oppress',
  'interact', 'create', 'abduct', 'promote', 'conceive',
  'blight', 'progress', 'distress', 'possess', 'record',
  'embrace', 'contact', 'pursue', 'associate', 'prepare',
  'shepherd', 'abuse', 'indulge', 'chronicle', 'fulfill',
  'drive', 'review', 'aid', 'follow', 'advance',
  'guard', 'conquer', 'hinder', 'plunder', 'construct',
  'encourage', 'agonize', 'comprehend', 'administer', 'relate',
  'take', 'discover', 'deter', 'acquire', 'damage',
  'publicise', 'burden', 'advocate', 'implement', 'understand',
  'collaborate', 'strive', 'complete', 'compel', 'join',
  'assist', 'defile', 'produce', 'institute', 'account',
  'work', 'accompany', 'offend', 'guide', 'learn',
  'persecute', 'communicate', 'process', 'report', 'develop',
  'steal', 'suggest', 'weaken', 'achieve', 'secure',
  'inform', 'patronize', 'depress', 'determine', 'seek',
  'manage', 'supress', 'proclaim', 'operate', 'access',
  'refine', 'compose', 'undermine', 'explain', 'discourage',
  'attend', 'detect', 'execute', 'maintain', 'realize',
  'convey', 'rob', 'establish', 'overthrow', 'support'
];

let data_npc_motivation_nouns = [

  {id: 'npcmotnoun'},
  'wealth', 'hardship', 'affluence', 'resources', 'prosperity',
  'poverty', 'opulence', 'deprivation', 'success', 'distress',
  'contraband', 'music', 'literature', 'technology', 'alcohol',
  'medicines', 'beauty', 'strength', 'intelligence', 'force',
  'the wealthy', 'the populous', 'enemies', 'the public', 'religion',
  'the poor', 'family', 'the elite', 'academia', 'the forsaken',
  'the law', 'the government', 'the opressed', 'friends', 'criminals',
  'allies', 'secret societies', 'the world', 'military', 'the church',
  'dreams', 'discretion', 'love', 'freedom', 'pain',
  'faith', 'slavery', 'enlightenment', 'racism', 'sensuality',
  'dissonance', 'peace', 'discrimination', 'disbelief', 'pleasure',
  'hate', 'happiness', 'servitude', 'harmony', 'justice',
  'gluttony', 'lust', 'envy', 'greed', 'laziness',
  'wrath', 'pride', 'purity', 'moderation', 'vigilance',
  'zeal', 'composure', 'charity', 'modesty', 'atrocities',
  'cowardice', 'narcissism', 'compassion', 'valor', 'patience',
  'advice', 'propoganda', 'science', 'knowledge', 'communications',
  'lies', 'myths', 'riddles', 'stories', 'legends',
  'industry', 'new religions', 'progress', 'animals', 'ghosts',
  'magic', 'nature', 'old religions', 'expertise', 'spirits'

];

// let data_npc_power_level = [
//   {id: 'npcpowerlevel', note: 'expected 3d6' },
//   '-', '-', 
//   'Much Weaker', 'Much Weaker', 'Much Weaker', 'Much Weaker',
//   'Slightly Weaker', 'Slightly Weaker', 'Slightly Weaker', 'Slightly Weaker',
//   'Comparable', 'Comparable', 'Comparable',
//   'Slightly Stronger', 'Slightly Stronger', 'Slightly Stronger',
//   'Much Stronger', 'Much Stronger'
// ];

let data_npc_power_level = [
  {id: 'npcpowerlevel', note: 'expected 3d6' },
  [  3,  6, 'Much Weaker'],
  [  7, 10, 'Slightly Weaker'],
  [ 11, 13, 'Comparable'],
  [ 14, 16, 'Slightly Stronger'],
  [ 17, 18, 'Much Stronger']
];

let data_npc_names = [

  {id: 'npcnames', note: 'columns: firstname, epithet-a, noun-a, epithet-b, noun-b',
   source: 'https://www.hipstersanddragons.com/memorable-npc-name-generator/' },
['Jon',	'Black',	'hand',	'Blue',	'staff'],
['Jana',	'White',	'finger',	'Noble',	'crest'],
['Dragomir',	'Gold',	'fist',	'Lightning',	'catcher'],
['Wes',	'Silver',	'tongue',	'Cat',	'fetcher'],
['Arron',	'Bronze',	'beard',	'Tide',	'fighter'],
['Lena',	'Copper',	'hair',	'Ferret',	'skipper'],
['Flyn',	'Steel',	'jaw',	'Skull',	'pecker'],
['Granit',	'Iron',	'glove',	'Snow',	'clasp'],
['Yanis',	'Rock',	'haven',	'Loose',	'button'],
['Eva',	'Amber',	'dawn',	'Craven',	'cottage'],
['Idris',	'Red',	'moon',	'Riddle(s)',	'worth'],
['Gwen',	'Rose',	'mount',	'Giant',	'reckon(ing)'],
['Devon',	'Green',	'gaze',	'Sage',	'wine'],
['Esemir',	'Grey',	'cloak',	'Gorgon',	'spell'],
['Axel',	'Shadow',	'run',	'Timber',	'trader'],
['Mira',	'Dark',	'sun',	'Lumber',	'worker'],
['Darian',	'Dusk',	'tripper',	'Cradle',	'lit'],
['Flo',	'Dawn',	'dancer',	'Heron',	'loft'],
['Issi',	'Bright',	'soul',	'Tinder',	'spark'],
['Dafne',	'Light',	'flower',	'Wet',	'peg'],
['Hazel',	'Sun',	'blossom',	'Flint',	'flurry'],
['Roisin',	'Moon',	'bringer',	'Needle',	'dart'],
['Ruben',	'Star',	'dust',	'Swallow',	'drifter'],
['Seth',	'Storm',	'quiver',	'Dire',	'whisper(er)'],
['Caelin',	'Cloud',	'seeker',	'Pewter',	'ring'],
['Orla',	'Dream',	'giver',	'Brass',	'brace'],
['Pria',	'Fire',	'strike',	'Hill',	'shepherd'],
['Rowan',	'Wood',	'cutter',	'Plain',	'sceptre'],
['Olaf',	'Oak',	'heart',	'Rye',	'grain'],
['Trent',	'Strong',	'blood',	'Wheat',	'sheaf'],
['Marek',	'Hard',	'helm',	'Soft',	'pride'],
['Roik',	'Stout',	'anvil',	'Proud',	'antler'],
['Bertran',	'Arrow',	'smith',	'Rib',	'tickler'],
['Tormen',	'Shield',	'bearer',	'Free',	'mason'],
['Zak',	'Sparrow',	'flash',	'Dour',	'bound'],
['Ganut',	'True',	'stone',	'Opal',	'chain'],
['Stron',	'Swift',	'shield',	'Brandy',	'barn'],
['Pelin',	'Deft',	'spear',	'Dandy',	'buck'],
['Oswin',	'Nimble',	'foot',	'Spirit',	'horn'],
['Ferlik',	'Quick',	'notch',	'Hoot',	'cryer'],
['Jasmin',	'Fleet',	'ford',	'Safe',	'harbour'],
['Drezz',	'Hawk',	'wind',	'Shallow',	'port'],
['Coromet',	'Lion',	'mane',	'Knave',	'trap(per)'],
['Grunwila',	'Bear',	'rider',	'Spider',	'jack'],
['Rafina',	'Tiger',	'rake',	'Rage',	'lust'],
['Draxon',	'Griffon',	'bane',	'Noon',	'riser'],
['Alkon',	'Dragon',	'slayer',	'Boon',	'lord'],
['Fleck',	'Snake',	'skin',	'Prime',	'cut'],
['Jin',	'Cobra',	'killer',	'Eternal',	'glade'],
['Dagmar',	'Eagle',	'born',	'Pure',	'crack'],
['Joris',	'Stag',	'walker',	'Beryl',	'gift'],
['Lavin',	'Deer',	'hunt(er)',	'Middle',	'camp'],
['Tegen',	'Ox',	'tamer',	'Blaze',	'town'],
['Larissa',	'Bison',	'stalker',	'Fen',	'moor'],
['Lorilee',	'Wolf',	'creek',	'Kings',	'mire'],
['Fenwick',	'Jackal',	'mouth',	'Quag',	'nag'],
['Caradoc',	'Dog',	'tooth',	'Dung',	'sweeper'],
['Toady',	'Rat',	'tail',	'Desert',	'mare'],
['Gea',	'Lynx',	'hide',	'Forest',	'steed'],
['Aspen',	'Owl',	'flight',	'Filly',	'whip(per)'],
['Leandra',	'Panther',	'claw',	'Daisy',	'bell(s)'],
['Colyn',	'Crab',	'eater',	'Fir',	'snapper'],
['Agnes',	'Kraken',	'maid',	'Willow',	'warbler'],
['Seldon',	'Trout',	'nose',	'Beech',	'craft'],
['Clifton',	'River',	'bank',	'Pine',	'harness'],
['Gibon',	'Sea',	'breeze',	'Fury',	'forge(d)'],
['Lazar',	'Swan',	'song',	'Heaven',	'sent'],
['Fel',	'Duck',	'feather',	'Lime',	'scent'],
['Gerald',	'Goose',	'wing',	'Orchid',	'musk'],
['Ovina',	'Sand',	'shifter',	'Swamp',	'shiver'],
['Vondel',	'Castle',	'stormer',	'Bog',	'shudder'],
['Gideon',	'Cliff',	'raider',	'Aether',	'bat'],
['Drayton',	'Crag',	'reaver',	'Elm',	'cudgel'],
['Owyn',	'Bluff',	'breaker',	'Rhyme',	'peddler'],
['Brindel',	'Beach',	'comber',	'Honey',	'lyre'],
['Una',	'Good',	'berry',	'Marble',	'limb'],
['Uma',	'Fair',	'brook',	'Candle',	'stick'],
['Benn',	'Blade',	'forge(r)',	'Wicker',	'horse'],
['Delryn',	'Axe',	'storm',	'Hoarse',	'throat'],
['Mia',	'Hammer',	'wind',	'Silent',	'pad'],
['Nora',	'Wagon',	'chaser',	'Limp',	'shoe'],
['Pip',	'Leather',	'saddle',	'Fiery',	'bolt'],
['Teia',	'Loom',	'weaver',	'Last',	'arch'],
['Osbalt',	'Cart',	'swain',	'Wheel',	'barrow'],
['Robyn',	'Bull',	'chest',	'Rabbit',	'burrow'],
['Perritt',	'Plough',	'puller',	'Wiggle',	'worm'],
['Eggard',	'Wheel',	'wright',	'Bug',	'stain'],
['Merit',	'Little',	'rider',	'Cat',	'lick'],
['Philomena',	'Great',	'star',	'Frog',	'fetcher'],
['Jaysee',	'Dew',	'drop',	'Viper',	'prey'],
['Cameron',	'Crow',	'caller',	'Hornet',	'nest'],
['Nikki',	'Raven',	'roost',	'Church',	'mouse'],
['Bryn',	'Ruby',	'mine(r)',	'Brick',	'temple'],
['Ida',	'Jet',	'tempest',	'New',	'spire'],
['Oriel',	'Sky',	'deck',	'Old',	'tower'],
['Alina',	'Jade',	'tusk',	'Sly',	'hook'],
['Odo',	'Gem',	'tree',	'Razor',	'pike'],
['Dezre',	'Diamond',	'farmer',	'Bold',	'crook'],
['Petronia',	'Flame',	'fork',	'Fiery',	'bolt'],
['Bilko',	'Bone',	'field',	'Wily',	'guise'],
['Eva',	'Teal',	'feather',	'Shy',	'kiss(ed)'],
['Finigan',	'Frost',	'whiskers',	'Vile',	'wart'],
['Helois',	'Ever',	'lock',	'Lazy',	'toad'],
['Loris',	'Right',	'guard',	'Slumber',	'newt'],
['Brigitte',	'Scarlet',	'mark',	'Velvet',	'fleece'],
['Theobald',	'Night',	'warden',	'Bracken',	'hearth'],
['Wilhelm',	'Day',	'watcher',	'Hay',	'blaze'],
['Neferi',	'Lone',	'ranger',	'Stork',	'sigil'],
['Jilomar',	'Ivy',	'bridge',	'Straw',	'bale'],
['Botherin',	'Smoke',	'ridge',	'Ghost',	'mound'],
['Larissa',	'Sable',	'valley',	'Grand',	'crescent'],
['Dillon',	'Deep',	'gorge',	'Butter',	'cup(s)'],
['Remy',	'Sharp',	'thistle',	'Tender',	'bud'],
['Rex',	'Bitter',	'thorn',	'Umber',	'brow'],
['Gelda',	'Ginger',	'petal',	'Frail',	'gable'],
['Jamila',	'Sweet',	'meadow',	'Chestnut',	'head'],
['Eldon',	'Rolling',	'boulder',	'Glimmer',	'knife'],
['Greta',	'Smooth',	'pebble',	'Tin',	'spoon'],
['Lilly',	'Acorn',	'bush',	'Pepper',	'pot'],
['Hattie',	'Speckle',	'bough',	'Salt',	'shaker'],
['Clarence',	'Cloven',	'trunk',	'Barley',	'barrel'],
['Gus',	'Winter',	'vale',	'Ale',	'dipper'],
['Chester',	'Spring',	'leaf',	'Plum',	'brew'],
['Oliver',	'Autumn',	'grove',	'Ripe',	'vine'],
['Ezra',	'Summer',	'orchard',	'Brush',	'thatch'],
['Abelia',	'Lily',	'bank',	'Flaxen',	'cape'],
['Bertie',	'Beetle',	'boots',	'Even',	'glory'],
['Grint',	'Brazen',	'belt',	'Lunar',	'flood'],
['Cyril',	'Slow',	'sack',	'Coral',	'rain'],
['Alba',	'Battle',	'pack',	'Queens',	'reign'],
['Abner',	'Dry',	'fell',	'Feeble',	'reins'],
['Roscoe',	'Cherry',	'falls',	'Tawny',	'bridle'],
['Wilber',	'Wild',	'dove',	'Gloom',	'driver'],
['Cornel',	'Dune',	'fox',	'Doom',	'sayer'],
['Osgood',	'Spotted',	'vole',	'Grim',	'guts'],
['Hector',	'Cold',	'paw',	'Bleak',	'blizzard'],
['Cruilla',	'Death',	'maw',	'Sombre',	'fellow'],
['Elric',	'Scar',	'nape',	'Chalk',	'cheeks'],
['Mildred',	'Mild',	'jape',	'Slate',	'jacket'],
['Wexton',	'War',	'song',	'Oyster',	'diver'],
['Linus',	'Thunder',	'clap',	'Saffron',	'flume'],
['Wendel',	'Merry',	'harp',	'Dappled',	'plume'],
['Clem(ence)',	'Idle',	'calm',	'Ash',	'grave'],
['Percy',	'Cheese',	'bread',	'Lead',	'tomb'],
['Rufus',	'Rich',	'larder',	'Nettle',	'garden'],
['Hal',	'Poor',	'plate',	'Hoar',	'frost'],
['Harvey',	'Rust',	'bucket',	'Morn',	'singer'],
['Megan',	'Mean',	'pouch',	'Under',	'root'],
['Jen',	'Joy',	'pocket',	'Heather',	'frond'],
['Prunila',	'Pearl',	'locket',	'Fat',	'harvest'],
['Loretta',	'Luck(y)',	'charm',	'Broken',	'blade'],
['Garret',	'Long',	'rope',	'Hell',	'throne'],
['Faizel',	'Firm',	'law',	'Brisk',	'bee'],
['Rosalind',	'Rough',	'scale',	'Drift',	'swarm'],
['Cyra',	'Pale',	'snout',	'Ample',	'flock'],
['Jasper',	'Savage',	'beak',	'Lame',	'herd'],
['Drusilla',	'June',	'bird',	'Gout',	'rot'],
['Carrick',	'May',	'gale',	'Yellow',	'belly'],
['Roncan',	'Gentle',	'rush',	'Throttle',	'weed'],
['Titiana',	'Tall',	'reed',	'Damsel',	'sting'],
['Tethren',	'Top',	'lily',	'Adder',	'bite'],
['Berrick',	'Bottom',	'pond',	'Smelly',	'turf'],
['Mylo',	'Mellow',	'lake',	'Mink',	'flayer'],
['Elias',	'Short',	'beam',	'Ruin',	'tracker'],
['Gael',	'Fine',	'ray',	'Kin',	'seer'],
['Layla',	'Fortune',	'well',	'Omen',	'gazer'],
['Nanna',	'Grave',	'gate',	'Woe',	'wanderer'],
['Hubert',	'High',	'wall',	'Kind',	'voyager'],
['Avona',	'Pink',	'coat',	'Slug',	'squisher'],
['Gray',	'Glass',	'shins',	'Crystal',	'fang'],
['Thinden',	'Thrifty',	'palm',	'Bristle',	'noose'],
['Derrian',	'Drizzle',	'shears',	'Slip',	'knot'],
['Willy',	'Wool',	'shorn',	'Crinkle',	'moss'],
['Timrin',	'Tortoise',	'shell',	'Lavendar',	'bark'],
['Elrod',	'Falcon',	'dive',	'Lace',	'gauntlet'],
['Jesper',	'Crown',	'steward',	'Loyal',	'squire'],
['Berevan',	'Arbour',	'lark',	'Leal',	'knight'],
['Grenley',	'Anchor',	'bay',	'Cow',	'halter'],
['Solomon',	'Dread',	'shore',	'Bluster',	'bow'],
['Axton',	'Cleft',	'coast',	'Galley',	'shank'],
['Erel',	'Emerald',	'hoarder',	'Rum',	'runner'],
['Tina',	'Twinkle',	'toes',	'Wrinkle',	'rump'],
['Bella',	'Bay',	'kite',	'Fable',	'joust'],
['Krag',	'Harpy',	'begotten',	'Silent',	'destroyer'],
['Cleris',	'Common',	'heir',	'Royal',	'lance'],
['Vixen',	'Venom',	'bride',	'Dun',	'scabbard'],
['Gladwin',	'Coal',	'groom',	'Boar',	'holm'],
['Languedoc',	'Titan',	'scion',	'Fickle',	'slippers'],
['Beyla',	'Bumble',	'child',	'Knoll',	'strider'],
['Ilsa',	'God',	'chosen',	'Air',	'borne'],
['Bolo',	'Baggy',	'britches',	'Moor',	'jaunt'],
['Bea',	'Biege',	'breetches',	'Soot',	'cowl'],
['Roni',	'Ram',	'rod',	'Roan',	'hood'],
['Pippa',	'Poppy',	'cock',	'Snug',	'hat'],
['Scarsen',	'Shatter',	'brood',	'Cur',	'howl'],
['Yunis',	'Hound',	'breath',	'Harrier',	'talons'],
['Quentin',	'Scrawny',	'scribe',	'Siren',	'conch'],
['Phoebe',	'Flea',	'home',	'Cabbage',	'patch'],
['Delewin',	'Birch',	'hall',	'Bent',	'dirk'],
['Wally',	'Chamber',	'key',	'Bile',	'bladder'],
['Otis',	'Hairy',	'purse',	'Weasel',	'creek'],
['Tigga',	'Troll',	'spawn',	'Fey',	'sworn'],
['Reece',	'Rumble',	'mage',	'Spore',	'sniffer'],
['Specky',	'Spruce',	'scythe',	'Murky',	'moat'],
['Peggy',	'Poison',	'chalice',	'Tough',	'mutton'],
['Hamil',	'Beacon',	'keeper',	'Falcon',	'flare'],
['Bethel',	'Far',	'flung',	'Mountain',	'lair'],
['Aldric',	'Apple',	'house',	'Demon',	'scorned']

];


let data_npc_relationship = [
  { id: 'relationship', note: '3d6' },
  [  0,  3, 'loved'],
  [  4,  5, 'friendly'],
  [  6,  8, 'peaceful'],
  [  9, 13, 'neutral'],
  [ 14, 16, 'distrustful'],
  [ 16, 17, 'hostile'],
  [ 18, 18, 'hated']
];

let data_npc_mood = [
  {id: 'mood'},
  [ {id: 'loved' },
    [1,    1, 'withdrawn'],
    [2,    6, 'guarded'],
    [7,   16, 'cautious'],
    [17,  31, 'neutral'],
    [32,  70, 'sociable'],
    [71,  85, 'helpful'],
    [86, 100, 'forthcoming'] ],
  [ {id: 'friendly' },
    [1,    2, 'withdrawn'],
    [3,    8, 'guarded'],
    [9,   20, 'cautious'],
    [21,  40, 'neutral'],
    [41,  76, 'sociable'],
    [77,  89, 'helpful'],
    [90, 100, 'forthcoming'] ],
  [ {id: 'peaceful' },
    [1,    3, 'withdrawn'],
    [4,   11, 'guarded'],
    [12,  25, 'cautious'],
    [26,  55, 'neutral'],
    [56,  82, 'sociable'],
    [83,  93, 'helpful'],
    [94, 100, 'forthcoming'] ],
  [ {id: 'neutral' },
    [1,    5, 'withdrawn'],
    [6,   15, 'guarded'],
    [16,  30, 'cautious'],
    [31,  60, 'neutral'],
    [71,  85, 'sociable'],
    [86,  95, 'helpful'],
    [96, 100, 'forthcoming'] ],
  [ {id: 'distrustful' },
    [1,    7, 'withdrawn'],
    [8,   18, 'guarded'],
    [19,  46, 'cautious'],
    [47,  76, 'neutral'],
    [77,  90, 'sociable'],
    [91,  97, 'helpful'],
    [98, 100, 'forthcoming'] ],
  [ {id: 'hostile' },
    [1,   11, 'withdrawn'],
    [12,  24, 'guarded'],
    [25,  61, 'cautious'],
    [62,  81, 'neutral'],
    [82,  93, 'sociable'],
    [94,  98, 'helpful'],
    [99, 100, 'forthcoming'] ],
  [ {id: 'hated' },
    [1,    15, 'withdrawn'],
    [16,   30, 'guarded'],
    [31,   69, 'cautious'],
    [70,   84, 'neutral'],
    [85,   94, 'sociable'],
    [95,   99, 'helpful'],
    [100, 100, 'forthcoming'] ],

];

let data_npc_demeanor = [
  {id: 'npcdemeanor', note: 'used with npc_bearing. expected d8' },
  'scheming',
  'insane',
  'friendly',
  'hostile',
  'inquisitive',
  'knowing',
  'mysterious',
  'prejudiced'
];

let data_npc_bearing = [
  {id: 'npcbearing', note: 'zeroth column is disposition' },
 [ 'scheming', 'intent', 'bargain', 'means', 'proposition', 'plan', 'compromise', 'agenda', 'arrangement', 'negotiation', 'plot' ],
 [ 'insane', 'madness', 'fear', 'accident', 'chaos', 'idiocy', 'illusion', 'turmoil', 'confusion', 'facade', 'bewilderment' ],
 [ 'friendly', 'alliance', 'comfort', 'gratitude', 'shelter', 'happiness', 'support', 'promise', 'delight', 'aid', 'celebration' ],
 [ 'hostile', 'death', 'capture', 'judgment', 'combat', 'surrender', 'rage', 'resentment', 'submission', 'injury', 'destruction' ],
 [ 'inquisitive', 'questions', 'investigation', 'interest', 'demand', 'suspicion', 'request', 'curiosity', 'skepticism', 'command', 'petition' ],
 [ 'knowing', 'report', 'effects', 'examination', 'records', 'account', 'news', 'history', 'telling', 'discourse', 'speech' ],
 [ 'mysterious', 'rumor', 'uncertainty', 'secrets', 'misdirection', 'whispers', 'lies', 'shadows', 'enigma', 'obscurity', 'conundrum' ],
 [ 'prejudiced', 'reputation', 'doubt', 'bias', 'dislike', 'partiality', 'belief', 'view', 'discrimination', 'assessment', 'difference' ]
];

/*
NPC Focus
If possible the NPC Focus should be regarded as pertaining to 
 - the PC of the player rolling, 
 - the PC that will be speaking, or
 - the party members in general.

It may be helpful to put the word �PC�s� or �your� in front of
the NPC Focus if there is a question. It is also helpful to 
narrow the NPC Focus. If �last story� was rolled figure out
what the last story was. What happened during the last story
that made this NPC want to discuss it? 
*/

let data_npc_focus = [
 {id: 'focus', note: 'used to determine focus of conversations'},
 [1 ,  3, 'current scene'],
 [4 ,  6, 'last story'],
 [7 ,  9, 'equipment'],
 [10, 12, 'parents'],
 [13, 15, 'history'],
 [16, 18, 'retainers'],
 [19, 21, 'wealth'],
 [22, 24, 'relics'],
 [25, 27, 'last action'],
 [28, 30, 'skills'],
 [31, 33, 'superiors'],
 [34, 36, 'fame'],
 [37, 39, 'campaign'],
 [40, 42, 'future action'],
 [43, 45, 'friends'],
 [46, 48, 'allies'],
 [49, 51, 'last scene'],
 [52, 54, 'contacts'],
 [55, 57, 'flaws'],
 [58, 60, 'antagonist'],
 [61, 63, 'rewards'],
 [64, 66, 'experience'],
 [67, 69, 'knowledge'],
 [70, 72, 'recent scene'],
 [73, 75, 'community'],
 [76, 78, 'treasure'],
 [79, 81, 'the character'],
 [82, 84, 'current story'],
 [85, 87, 'family'],
 [88, 90, 'power'],
 [91, 93, 'weapons'],
 [94, 96, 'previous scene'],
 [97,100, 'enemy']

];

let npc_appearance_skin = [
  {},
  [1,   4, 'Pale'],
  [5,   8, 'Fair'],
  [9,  12, 'Tan'],
  [13, 16, 'Brown'],
  [17, 20, 'Dark']
];

let npc_appearance_hair_color = [ 
  {},
  [  1,  24, 'Black'],
  [ 25,  48, 'Brown'],
  [ 49,  57, 'Red'],
  [ 58,  66, 'Orange'],
  [ 67,  91, 'Yellow'],
  [ 92,  94, 'Blue'],
  [ 95,  96, 'Green'],
  [ 97,  98, 'Pink'],
  [ 99, 100, 'Violet']
];

let npc_appearance_hair_length = [ 
  {},
  [  1,  11, 'Bald/Buzz Cut'],
  [ 12,  22, 'Short'],
  [ 23,  33, 'Half Cut'],
  [ 34,  44, 'Shaggy'],
  [ 45,  55, 'Shoulder Length'],
  [ 56,  66, 'Middle Back'],
  [ 78,  88, 'Long'],
  [ 89,  98, 'Knees'],
  [ 99, 100, 'Floor']
];

let npc_appearance_hair_texture = [
  {},
  [  1,  20, 'Straight'],
  [ 31,  50, 'Wavy'],
  [ 51,  65, 'Curly'],
  [ 66,  77, 'Frizzy'],
  [ 78,  83, 'Patchy'],
  [ 84,  88, 'Patchy'],
  [ 89, 100, 'Balding']
];

let npc_appearance_eyes = [
  {},
  [  1,  19, 'Brown'],
  [ 20,  39, 'Green'],
  [ 40,  59, 'Hazel'],
  [ 60,  79, 'Blue'],
  [ 80,  86, 'Violet'],
  [ 87,  87, 'Pink'],
  [ 88,  89, 'Silver'],
  [ 90,  98, 'Black'],
  [ 99, 100, 'Red']

];

let npc_appearance_misc = [

  {},
  [  1,  35, 'None'],
  [ 36,  49, 'Tall'],
  [ 50,  69, 'Short'],
  [ 70,  79, 'Visible Scars'],
  [ 80, 100, 'Facial Hair']

];

