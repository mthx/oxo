// Emoji from MIT licensed
// https://github.com/lukekarrys/emoji-named-characters/blob/master/emoji-characters.js
// but pruned arbitrarily to those that amuse me.
// For example, I have removed "golf".
const emoji = {
  "100": "💯",
  "+1": "👍",
  "-1": "👎",
  "8ball": "🎱",
  accept: "🉑",
  airplane: "✈️",
  alarm_clock: "⏰",
  alien: "👽",
  ambulance: "🚑",
  anchor: "⚓️",
  angel: "👼",
  angry: "😠",
  anguished: "😟",
  ant: "🐜",
  apple: "🍎",
  astonished: "😲",
  baby: "👶",
  baby_bottle: "🍼",
  baby_chick: "🐤",
  balloon: "🎈",
  bamboo: "🎍",
  banana: "🍌",
  bangbang: "‼️",
  baseball: "⚾️",
  basketball: "🏀",
  bath: "🛀",
  bathtub: "🛁",
  bear: "🐻",
  bee: "🐝",
  beer: "🍺",
  beers: "🍻",
  beetle: "🐞",
  bell: "🔔",
  bicyclist: "🚴",
  bird: "🐦",
  birthday: "🎂",
  blossom: "🌼",
  blowfish: "🐡",
  blue_heart: "💙",
  blush: "😊",
  bomb: "💣",
  boom: "💥",
  boy: "👦",
  broken_heart: "💔",
  bug: "🐛",
  bulb: "💡",
  cactus: "🌵",
  cake: "🍰",
  camel: "🐫",
  candy: "🍬",
  car: "🚗",
  carousel_horse: "🎠",
  cat: "🐱",
  cat2: "🐈",
  cherries: "🍒",
  cherry_blossom: "🌸",
  chestnut: "🌰",
  chicken: "🐔",
  children_crossing: "🚸",
  chocolate_bar: "🍫",
  christmas_tree: "🎄",
  circus_tent: "🎪",
  cold_sweat: "😰",
  confetti_ball: "🎊",
  confounded: "😖",
  confused: "😕",
  cookie: "🍪",
  corn: "🌽",
  cow: "🐮",
  cow2: "🐄",
  crocodile: "🐊",
  crown: "👑",
  cry: "😢",
  crying_cat_face: "😿",
  dancer: "💃",
  deciduous_tree: "🌳",
  department_store: "🏬",
  disappointed: "😞",
  disappointed_relieved: "😥",
  dizzy: "💫",
  dizzy_face: "😵",
  dog: "🐶",
  dog2: "🐕",
  dolphin: "🐬",
  donut: "🍩",
  dragon_face: "🐲",
  ear: "👂",
  ear_of_rice: "🌾",
  evergreen_tree: "🌲",
  exclamation: "❗️",
  expressionless: "😑",
  eyes: "👀",
  fallen_leaf: "🍂",
  fearful: "😨",
  fire: "🔥",
  fish: "🐟",
  flushed: "😳",
  football: "🏈",
  four_leaf_clover: "🍀",
  frog: "🐸",
  frowning: "😦",
  game_die: "🎲",
  gem: "💎",
  ghost: "👻",
  gift: "🎁",
  gift_heart: "💝",
  girl: "👧",
  goat: "🐐",
  green_apple: "🍏",
  green_heart: "💚",
  grimacing: "😬",
  grin: "😁",
  grinning: "😀",
  guitar: "🎸",
  haircut: "💇",
  hamburger: "🍔",
  hamster: "🐹",
  hankey: "💩",
  hatched_chick: "🐥",
  hear_no_evil: "🙉",
  heart: "❤️",
  heart_eyes: "😍",
  heart_eyes_cat: "😻",
  high_heel: "👠",
  honeybee: "🐝",
  horse: "🐴",
  hushed: "😧",
  ice_cream: "🍨",
  innocent: "😇",
  joy: "😂",
  joy_cat: "😹",
  kiss: "💋",
  koala: "🐨",
  lollipop: "🍭",
  monkey: "🐒",
  monkey_face: "🐵",
  mouse: "🐭",
  mouse2: "🐁",
  movie_camera: "🎥",
  mushroom: "🍄",
  neutral_face: "😐",
  no_good: "🙅",
  no_mouth: "😶",
  octopus: "🐙",
  panda_face: "🐼",
  pig: "🐷",
  pig_nose: "🐽",
  pizza: "🍕",
  poodle: "🐩",
  poop: "💩",
  postal_horn: "📯",
  princess: "👸",
  punch: "👊",
  purple_heart: "💜",
  rabbit: "🐰",
  rainbow: "🌈",
  ram: "🐏",
  rat: "🐀",
  rocket: "🚀",
  roller_coaster: "🎢",
  rooster: "🐓",
  rose: "🌹",
  scream: "😱",
  scream_cat: "🙀",
  secret: "㊙️",
  seedling: "🌱",
  skull: "💀",
  sleeping: "😴",
  sleepy: "😪",
  smile: "😄",
  smile_cat: "😸",
  smiley: "😃",
  smiley_cat: "😺",
  smiling_imp: "😈",
  smirk: "😏",
  smirk_cat: "😼",
  snail: "🐌",
  snake: "🐍",
  snowman: "⛄️",
  sob: "😭",
  soccer: "⚽️",
  space_invader: "👾",
  star: "⭐️",
  stuck_out_tongue: "😛",
  stuck_out_tongue_closed_eyes: "😝",
  stuck_out_tongue_winking_eye: "😜",
  sunflower: "🌻",
  sunglasses: "😎",
  sunny: "☀️",
  tada: "🎉",
  thought_balloon: "💭",
  tiger: "🐯",
  tired_face: "😫",
  toilet: "🚽",
  trophy: "🏆",
  tropical_drink: "🍹",
  tropical_fish: "🐠",
  turtle: "🐢",
  unamused: "😒",
  volcano: "🌋",
  whale: "🐳",
  whale2: "🐋",
  zzz: "💤"
};

export default emoji;
