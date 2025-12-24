// --- 庞大的 Emoji 关键词数据库 (终极扩展版) ---
// Structure:
// id: Unique ID
// keys: Specific Trigger words
// items: Primary visuals
// safe_mix: Items that are safe to mix
// type: Broad Archetype (used for fallback matching)

export const EMOJI_DB = [
    // --- 1. Tech & Future (Hot Topics) ---
    {
        id: 'ai',
        keys: ['ai', 'robot', 'bot', 'gpt', 'code', 'future', 'tech', 'hack', '机器人', '代码', '程序猿', '程序员', '码农', '黑客', '科技', '未来'],
        items: ['🤖', '🦾', '🦿', '🧠', '💻', '📡', '🔋', '🔌', '⌨️', '🖱️'],
        topper: '🤖',
        bg: 'from-slate-900 to-black',
        accent: 'text-cyan-400',
        type: 'tech'
    },
    {
        id: 'crypto',
        keys: ['crypto', 'btc', 'bitcoin', 'eth', 'coin', 'blockchain', 'wallet', '币', '区块链', '炒币', '比特币', '以太坊'],
        items: ['🪙', '🚀', '📉', '📈', '🔗', '🔒', '🏦'],
        topper: '🚀',
        bg: 'from-indigo-950 to-purple-950',
        accent: 'text-yellow-300',
        type: 'tech'
    },
    {
        id: 'space',
        keys: ['space', 'star', 'moon', 'mars', 'alien', 'ufo', 'galaxy', '宇宙', '星', '外星人', '飞碟', '三体', '很多星星'],
        items: ['👽', '👾', '🛸', '🌍', '🌑', '☄️', '🛰️', '🔭', '👨‍🚀'],
        topper: '🛸',
        bg: 'from-black to-slate-900',
        accent: 'text-purple-300',
        type: 'nature'
    },

    // --- 2. Live & Motion (Broad Actions) ---
    {
        id: 'sports',
        keys: ['run', 'gym', 'sport', 'ball', 'play', 'game', 'score', 'win', '运动', '跑', '健身', '球', '比赛', '夺冠', '减肥'],
        items: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏃', '🏊', '🚴'],
        topper: '🏆',
        bg: 'from-blue-900 to-blue-950',
        accent: 'text-blue-300',
        type: 'motion'
    },
    {
        id: 'music',
        keys: ['music', 'song', 'sing', 'dance', 'party', 'rock', 'pop', '音乐', '歌', '跳舞', '蹦迪', '派对', 'k歌', '麦霸'],
        items: ['🎵', '🎶', '🎸', '🎹', '🎺', '🎻', '🥁', '🎤', '🎧', '🕺', '💃'],
        topper: '🎵',
        bg: 'from-fuchsia-900 to-purple-900',
        accent: 'text-fuchsia-300',
        type: 'motion'
    },
    {
        id: 'travel',
        keys: ['travel', 'trip', 'fly', 'car', 'bus', 'train', 'map', 'world', '旅行', '车', '旅游', '去玩', '度假', '飞机', '高铁'],
        items: ['✈️', '🚗', '🚕', '🚌', '🚓', '🚑', '🚒', '🚂', '🚆', '🚢', '🗺️', '🏝️'],
        topper: '✈️',
        bg: 'from-sky-800 to-blue-900',
        accent: 'text-sky-200',
        type: 'motion'
    },

    // --- 3. Nature & Animals (Strict) ---
    {
        id: 'cat',
        keys: ['猫', 'cat', 'meow', 'kitten', '喵', 'kitty', '小猫', '咪咪', '吸猫', '主子', '铲屎官'],
        items: ['🐱', '😸', '🐈', '😽', '🧶', '🐾', '📦', '🥛', '🐟', '🐁'],
        topper: '🐱',
        bg: 'from-orange-900 to-amber-950',
        accent: 'text-orange-300',
        type: 'animal'
    },
    {
        id: 'dog',
        keys: ['狗', 'dog', 'puppy', 'woof', '汪', 'doge', '小狗', '修勾', '汪星人'],
        items: ['🐶', '🐕', '🐩', '🦴', '🐾', '🎾', '🥩', '🍖', '🐕‍🦺'],
        topper: '🐶',
        bg: 'from-amber-900 to-yellow-950',
        accent: 'text-yellow-400',
        type: 'animal'
    },
    {
        id: 'farm',
        keys: ['cow', 'pig', 'sheep', 'farm', 'milk', '猪', '牛', '羊', '农场', '农村'],
        items: ['🐮', '🐷', '🐑', '🐔', '🐣', '🚜', '🌾', '🥛'],
        topper: '🐮',
        bg: 'from-amber-950 to-green-900',
        accent: 'text-green-200',
        type: 'animal'
    },

    // --- 4. Food & Fun ---
    {
        id: 'hotpot',
        keys: ['火锅', 'hotpot', 'spicy', '辣', 'chili', '麻辣烫', '串串', '海底捞'],
        items: ['🍲', '🥘', '🥢', '🥩', '🌶️', '🥬', '🍄', '🍥', '🔥'],
        topper: '🔥',
        bg: 'from-red-900 to-orange-900',
        accent: 'text-red-400',
        type: 'food'
    },
    {
        id: 'fastfood',
        keys: ['burger', 'pizza', 'fries', 'cola', 'eat', 'hungry', 'food', '吃', '饿', '干饭', '麦当劳', '肯德基', '汉堡', '披萨', '快乐水', '夜宵'],
        items: ['🍔', '🍕', '🌭', '🍟', '🥪', '🌮', '🌯', '🥤', '🍿', '🍗'],
        topper: '🍔',
        bg: 'from-orange-800 to-red-900',
        accent: 'text-yellow-300',
        type: 'food'
    },
    {
        id: 'dessert',
        keys: ['cake', 'sweet', 'candy', 'chocolate', 'ice cream', '糖', '甜', '蛋糕', '奶茶', '下午茶', '冰淇淋'],
        items: ['🧁', '🍰', '🎂', '🍩', '🍪', '🍬', '🍫', '🍦', '🍭', '🧋'],
        topper: '🍭',
        bg: 'from-pink-900 to-rose-900',
        accent: 'text-pink-300',
        type: 'food'
    },
    {
        id: 'fruit',
        keys: ['fruit', 'apple', 'banana', 'grape', 'lemon', '水果', '苹果', '香蕉', '瓜'],
        items: ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍑', '🍍', '🥭'],
        topper: '🍍',
        bg: 'from-green-800 to-lime-900',
        accent: 'text-lime-300',
        type: 'food'
    },

    // --- 5. Emotions & Abstract (Broad) ---
    {
        id: 'love',
        keys: ['love', 'heart', 'kiss', 'wedding', 'gf', 'bf', '爱', '喜欢', '恋爱', '结婚', '女朋友', '男朋友', '爱你', '笔芯'],
        items: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '💌', '💘', '💍'],
        topper: '💘',
        bg: 'from-red-900 to-pink-900',
        accent: 'text-red-300',
        type: 'emotion'
    },
    {
        id: 'happy',
        keys: ['happy', 'smile', 'lol', 'haha', 'win', 'good', 'nice', '笑', '好', '开心', '快乐', '哈哈', '甚至想笑', '乐'],
        items: ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😎', '🥳'],
        topper: '😎',
        bg: 'from-yellow-700 to-orange-800',
        accent: 'text-yellow-200',
        type: 'emotion'
    },
    {
        id: 'sad',
        keys: ['sad', 'cry', 'tears', 'bad', 'miss', 'lose', '哭', 'emo', '难过', '抑郁', '太难了', '破防', '裂开'],
        items: ['😢', '😭', '😤', '🤕', '💔', '🥀', '☔', '🌧️', '😿'],
        topper: '☔',
        bg: 'from-slate-800 to-gray-900',
        accent: 'text-gray-400',
        type: 'emotion'
    },
    {
        id: 'wealth',
        keys: ['钱', 'money', 'rich', 'gold', '财富', '发财', '钞票', '金币', '暴富', '搞钱', '恭喜发财', '工资', '奖金'],
        items: ['💰', '💵', '💸', '💎', '🪙', '💳', '🏦', '🤑', '🧧'],
        topper: '💎',
        bg: 'from-yellow-900 to-amber-900',
        accent: 'text-yellow-400',
        type: 'culture'
    },
    // --- 6. Chinese Specifics (User Requested) ---
    {
        id: 'rabbit',
        keys: ['rabbit', 'bunny', 'hare', '兔子', '兔', '小兔'],
        items: ['🐇', '🐰', '🥕', '🥬'],
        topper: '🐇',
        bg: 'from-pink-900 to-rose-950',
        accent: 'text-pink-300',
        type: 'culture'
    },
    {
        id: 'dragon',
        keys: ['dragon', 'loong', '龙', '小龙人'],
        items: ['🐉', '🐲', '🔥', '☁️', '🏮'],
        topper: '🐲',
        bg: 'from-red-900 to-orange-900',
        accent: 'text-yellow-400',
        type: 'culture'
    },
    {
        id: 'tiger',
        keys: ['tiger', 'tiger', '虎', '老虎', '大脑斧'],
        items: ['�', '�', '🍖', '🌲', '�'],
        topper: '🐅',
        bg: 'from-orange-900 to-amber-950',
        accent: 'text-orange-400',
        type: 'culture'
    },
    {
        id: 'snake',
        keys: ['snake', 'serpent', '蛇', '小蛇'],
        items: ['�', '🎋', '🥚', '�'],
        topper: '�',
        bg: 'from-emerald-900 to-green-950',
        accent: 'text-green-400',
        type: 'culture'
    },
    {
        id: 'horse',
        keys: ['horse', 'pony', '马', '小马'],
        items: ['🐎', '🐴', '🏇', '🌾', '🥕'],
        topper: '🐎',
        bg: 'from-amber-900 to-yellow-900',
        accent: 'text-amber-300',
        type: 'culture'
    },
    {
        id: 'garden',
        keys: ['flower', 'rose', 'lily', 'sunflower', 'plant', '玫瑰', '百合', '向日葵', '鲜花', '植物', '花', '草'],
        items: ['🌹', '🌻', '🪷', '💐', '🌸', '🌼', '🌷', '🌺', '🌵', '🌿', '🪴'],
        topper: '🌻',
        bg: 'from-green-900 to-emerald-800',
        accent: 'text-pink-300',
        type: 'nature'
    },
    {
        id: 'asian_food',
        keys: ['dumpling', 'baozi', 'bbq', 'noodle', 'sushi', '饺子', '包子', '烧烤', '面条', '寿司', '羊肉串', '烤肉', '拉面'],
        items: ['🥟', '🍜', '🍣', '🍢', '🍡', '🍚', '🍤', '🥡', '🥢', '🍱'],
        topper: '🥟',
        bg: 'from-orange-900 to-red-950',
        accent: 'text-orange-200',
        type: 'food'
    },
    {
        id: 'desire',
        keys: ['car', 'house', 'gift', 'firecracker', '汽车', '房子', '礼物', '鞭炮', '豪宅', '大奔', '宝马'],
        items: ['🚗', '🏎️', '🏡', '🏰', '🎁', '🧨', '🧧', '💎', '🔑'],
        topper: '�',
        bg: 'from-purple-900 to-fuchsia-900',
        accent: 'text-purple-300',
        type: 'culture'
    },
    {
        id: 'people',
        keys: ['handsome', 'beauty', 'boy', 'girl', '帅哥', '美女', '男神', '女神', 'crush'],
        items: ['👱‍♂️', '�', '👨‍�', '👩‍🦰', '�', '👸', '🕺', '💃', '🕶️', '�'],
        topper: '👸',
        bg: 'from-pink-900 to-rose-900',
        accent: 'text-pink-200',
        type: 'people'
    },
    {
        id: 'vivid_emotion',
        keys: ['cute', 'awesome', '100', 'heart', 'hit', 'awkward', 'sweat', 'lmao', '可爱', '真棒', '一百分', '喜欢', '比心', '爱你', '打你', '尴尬', '流汗', '笑哭', '666'],
        items: ['🥺', '👍', '💯', '🫶', '👊', '😅', '😓', '🤣', '🥰', '😍', '�'],
        topper: '🥰',
        bg: 'from-sky-900 to-indigo-900',
        accent: 'text-yellow-300',
        type: 'emotion'
    },
    {
        id: 'blessing',
        keys: ['peace', 'luck', 'health', 'joy', '宁静', '平安', '吉祥', '健康', '喜乐', '顺遂', '安康'],
        items: ['🕊️', '🍀', '🍎', '🏮', '🙏', '😊', '🕯️', '🌟', '🎋'],
        topper: '🕊️',
        bg: 'from-teal-900 to-cyan-900',
        accent: 'text-teal-200',
        type: 'culture'
    },
    {
        id: 'mahjong',
        keys: ['麻将', 'mahjong', 'gamble', 'luck', '赢', '发'],
        items: ['🀄', '🎲', '🎰', '🃏', '🎱', '🖐️', '💰'],
        topper: '🀄',
        bg: 'from-green-900 to-emerald-950',
        accent: 'text-green-200',
        type: 'culture'
    }
];

export const PRESET_THEMES = [
    { id: 'classic', label: 'Classic Fir', items: ['🌲', '🎄', '🌿', '🟢'], topper: '🌟', bg: 'from-green-900 to-gray-900', accent: 'text-green-400' },
    { id: 'cny', label: 'Chinese New Year', items: ['🧧', '🧨', '🏮', '🐲'], topper: '🐲', bg: 'from-red-900 to-yellow-900', accent: 'text-red-400' },
    { id: 'cat', label: 'Cat Lover', items: ['🐱', '😸', '🐟', '🧶'], topper: '🐱', bg: 'from-orange-900 to-amber-950', accent: 'text-orange-300' },
];

export const INITIAL_WISHES = [
    { id: 1, text: "Happy New Year! 🧧", author: "Lucky Star" },
    { id: 2, text: "To the moon 🚀", author: "CryptoKing" }
];

// --- Enhanced Logic (Multi-Tier) ---

const getRandomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Christmas "Spice" items to make unknown themes look vivid but festive
const CHRISTMAS_SPICE = ['🎄', '✨', '🎁', '🔔', '❄️'];

export const generateThemeFromInput = (input) => {
    const lowerInput = input.trim().toLowerCase();

    // Tier 1: Exact Key Match
    // We look for specific triggers first.
    let matchedCategory = null;
    for (const category of EMOJI_DB) {
        if (category.keys.some(key => lowerInput.includes(key))) {
            matchedCategory = category;
            break;
        }
    }

    if (matchedCategory) {
        // Strategy: 80% Primary, 20% Christmas Spice (to make it look like a tree)
        const targetSize = 25;
        const finalItems = [];

        const primaryCount = Math.floor(targetSize * 0.9); // 90% Specific
        for (let i = 0; i < primaryCount; i++) finalItems.push(getRandomFrom(matchedCategory.items));

        // 10% Spice (Just a little bit of twinkle)
        for (let i = 0; i < targetSize - primaryCount; i++) finalItems.push(getRandomFrom(CHRISTMAS_SPICE));

        finalItems.sort(() => Math.random() - 0.5);

        return {
            id: `magic-${Date.now()}`,
            label: `Magic: ${input}`,
            items: finalItems,
            topper: matchedCategory.topper,
            bg: matchedCategory.bg,
            accent: matchedCategory.accent
        };
    }

    // Tier 2: Broad Archetype Failover
    // If we didn't match specific keys, let's see if the word feels like a "Type".
    // This is a heuristic based on checking ALL keys of a certain type.
    // e.g. input "jogging" (not in keys) might contain "jog" (hypothetically).
    // A better approach for "Unknown" is to map them to broad visuals.

    // For now, let's try to map generic unknown intents.
    // We will use a "Vivid Fallback". 
    // If specific match failed, we assume it's a generic word.

    // Let's create a "Mystery Mix" that is 50% Christmas, 50% Random Vivid Emojis (Faces/Nature)
    const vividPool = EMOJI_DB.filter(c => ['emotion', 'nature', 'food'].includes(c.type)).flatMap(c => c.items);

    // Fallback strategy: 
    // 60% Christmas Basics
    // 40% Vivid Pop (from random interesting categories)
    // Topper: Star

    const fallbackItems = [];
    const fbSize = 25;

    const xmasItems = ['🎄', '🌲', '🎁', '🎅', '🦌', '⛄', '❄️', '🔔', '🕯️'];

    for (let i = 0; i < fbSize; i++) {
        if (Math.random() > 0.4) {
            fallbackItems.push(getRandomFrom(xmasItems));
        } else {
            fallbackItems.push(getRandomFrom(vividPool));
        }
    }

    fallbackItems.sort(() => Math.random() - 0.5);

    return {
        id: `fallback-${Date.now()}`,
        label: `Christmas: ${input}`,
        items: fallbackItems,
        topper: '🌟',
        bg: 'from-green-900 to-gray-900',
        accent: 'text-green-400'
    };
};
