
let url_root = '/rpg-tools/';

let data = {};
data.cache = {};
data.cache.add = function(key, value) {
  this[key] = value;
}

data.cache.get = function(key) {
  return this[key];
}

data_icons_actions = [
  { id: 'actions' },  // zeroth field is for data
	url_root + 'img/icons/ffffff/000000/1x1/andymeneely/riposte.svg',
	url_root + 'img/icons/ffffff/000000/1x1/caro-asercion/mountain-climbing.svg',
	url_root + 'img/icons/ffffff/000000/1x1/caro-asercion/ricochet.svg',
	url_root + 'img/icons/ffffff/000000/1x1/cathelineau/annexation.svg',
	url_root + 'img/icons/ffffff/000000/1x1/darkzaitzev/acrobatic.svg',
	url_root + 'img/icons/ffffff/000000/1x1/darkzaitzev/catch.svg',
	url_root + 'img/icons/ffffff/000000/1x1/darkzaitzev/running-ninja.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/arrest.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/button-finger.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/chat-bubble.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/choice.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/convince.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/coronation.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/crafting.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/discussion.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/drinking.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/eating.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/evasion.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/flying-fox.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/hiking.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/hive-mind.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/jump-across.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/kneeling.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/leapfrog.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/look-at.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/miner.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/night-sleep.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/public-speaker.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/pull.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/push.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/robber.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/shaking-hands.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/shield-bash.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/shrug.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/skills.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/slalom.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/stairs-goal.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/switch-weapon.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/teacher.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/team-idea.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/think.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/throwing-ball.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/uprising.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/vote.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/walk.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/back-forth.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/backstab.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/boot-kick.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/boot-stomp.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/bowman.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/conversation.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/disintegrate.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/divert.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/dodging.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/drowning.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/fruiting.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/grab.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/journey.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/juggler.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/kindle.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/meditation.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/mining.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/muscle-up.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/pointing.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/pouring-chalice.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/prayer.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/profit.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/rally-the-troops.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/run.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/screaming.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/shouting.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/sing.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/slap.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/snatch.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/sprint.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/stick-splitting.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/stone-crafting.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/swallow.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/targeting.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/tearing.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/teleport.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/trade.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/transfuse.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/vomiting.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/wolf-howl.svg',
	url_root + 'img/icons/ffffff/000000/1x1/quoting/trench-assault.svg',
	url_root + 'img/icons/ffffff/000000/1x1/sbed/crush.svg',
	url_root + 'img/icons/ffffff/000000/1x1/sbed/expander.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/amputation.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/drop-weapon.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/read.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/talk.svg'
];

data_dice_all = [
  { id: 'dice_all' }, 
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-eight-faces-eight.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-fire.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-shield.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-target.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-twenty-faces-one.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-twenty-faces-twenty.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-five.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-four.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-one.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-five.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-four.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-one.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-six.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-three.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-two.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-three.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-two.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/rolling-dice-cup.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/rolling-dices.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/rule-book.svg',
	url_root + 'img/icons/ffffff/000000/1x1/lorc/cubes.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/d10.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/d12.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/d4.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/inverted-dice-1.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/inverted-dice-2.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/inverted-dice-3.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/inverted-dice-4.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/inverted-dice-5.svg',
	url_root + 'img/icons/ffffff/000000/1x1/skoll/inverted-dice-6.svg'
];

data_dice_6d_num = [
  {id: '6d' },
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg',
];

data_dice_6d_per = [
  {id: '6dper' },
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-one.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-two.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-three.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-four.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-five.svg',
	url_root + 'img/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-six.svg'
]
