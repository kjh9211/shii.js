// Import zone
const { Client, GatewayIntentBits, ActivityType, PresenceUpdateStatus, Embedbuilder }= require("discord.js")
require("dotenv").config()
const { check } = require('korcen')
const fs = require("fs")
// functions
/**db 여는 함수 */
function open_cer_db(){
    try{
        const f = fs.readFileSync("cer.json")
        return f
    }catch(e){
        return {}
    }
}

function put_cer_db(userid){
    f = fs.readFileSync("cer.json");
    
}

// classes
class hogam {
    add(hogamdo, userid){
        f = fs.readFileSync("./data/hogam.json");
        if (!f){
            fs.writeFileSync("./data/hogam.json","{}");
            return false
        }
        const testdata =  hogamdo-f[userid]
        if (testdata > 5) return false
        f[userid] = hogamdo
        fs.writeFileSync("./data/hogam.json",f)
        return true
    }
    load(userid){
        f = fs.readFileSync("./data/hogam.json");
        if (!f){
            fs.writeFileSync("./data/hogam.json","{}");
            return false
        }
        return f[userid]
    }
    cheak(userid){
        f = fs.readFileSync("./data/hogam.json");
        if (!f){
            fs.writeFileSync("./data/hogam.json","{}");
            return "File is not found. So I made hogam.json file."
        }
        if (!f[userid]){
            f[userid] = 0
            fs.writeFileSync("./data/hogam.json",f)
            return
        }
    }
}
// setup
bser_api_key = process.env.bser
naver_client_id = process.env.naver
KAKAO_API_KEY = process.env.kakao
naver_client_secret = process.env.navers

json_file_path = 'bot_info.json'
attendance_file = 'attendance.json'
c = 'server_data.json'
happiness_file_path = 'happiness.json'
mamo_file = 'mamo.json'
lv_file = 'lv.json'
SETTINGS_FILE = "bot_settings.json"
count_FILE = 'count.json'
mining_limit = 10
capital_file = 'money.json'
stocks_file = 'jusik.json'
user_stocks_file = 'user_jusik.json'
previous_value = {
    '이시가전': 0,
    '고구우글': 0,
    '아마준': 0,
    '나노소포트': 0,
    '불화': 0,
    '시이전자': 0
}
sex = []
wordshii = [
    '넹!', '왜 그러세용?', '시이예용!', '필요 하신거 있으신가요?', '뭘 도와드릴까요?', '반가워용', '저 부르셨나요?',
    '왜요용', '잉', '...?', '네?', '/가르치기로 단어를 알려 줄 수 있어요!'
]
baddword = ['확마', '아놔', '뭐레', '이게', '나쁜말은 싫어요ㅠ']
bad = [
    '씨발', '시발', '병신', '지랄', '좆', '염병', '또라이', '급식충', '닥쳐', '등신', '대가리', '싸가지',
    '찐따', '존나', '새끼'
]
catss = ['냥!', "냐앙", "냥냥!"]
tkak = [
    '네 주인님!', '주인님 왜 그러시죠?', '주인님 안녕하세요!', '주인님 필요하신거 있으신가요?', '주인님 뭘 도와드릴까요?',
    '주인님 반가워요!', '주인님 저 부르셨나요?'
]
start_time = datetime.utcnow()
why = ['으에?', '몰?루', '왜요용', '잉', '...?', '몰라여', '으에.. 그게 뭐징?', '네?']
active_polls = {}
voted_users = {}
//
const client = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessagePolls,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildExpressions,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessagePolls,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.MessageContent,
        
    ],
});

client.once('ready', () => {
    console.log(`봇 ${client.user.tag}이(가) 준비되었습니다!`);
    client.user.setActivity('노래', { type: ActivityType.Listening });
    client.user.setStatus(PresenceUpdateStatus.Online);
    startTime = Date.now();
});
