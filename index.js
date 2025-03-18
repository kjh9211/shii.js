/**
 * recode by kjh9211 (python -> Javascript)
 * code by studio boran (python)
 */
// Import zone
const { Client, GatewayIntentBits, ActivityType, PresenceUpdateStatus, EmbedBuilder }= require("discord.js")
require("dotenv").config()
const { check } = require('korcen')
const fs = require("fs")
// setup
const bser_api_key = process.env.bser;
const naver_client_id = process.env.naver;
const KAKAO_API_KEY = process.env.kakao;
const naver_client_secret = process.env.navers;
const TOKEN = process.env.token;

const json_file_path = './data/bot_info.json';
const attendance_file = './data/attendance.json';
const c = './data/server_data.json';
const happiness_file_path = './data/happiness.json';
const mamo_file = './data/mamo.json';
const lv_file = './data/lv.json';
const SETTINGS_FILE = "./data/bot_settings.json";
const count_FILE = './data/count.json';
const mining_limit = 10;
const capital_file = './data/money.json';
const stocks_file = './data/jusik.json';
const user_stocks_file = './data/user_jusik.json';
const hogam_path = "./data/hogam.json";
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

async function gumrul(text){
    const gum = await check(text)
    if (gum) return "그건 나쁜 말 이래요!";
    if (text !== text.replace("@",2)) return "@ 가 포함되어 있어요..."
    // 링크 검열 함수 라이브러리 사용 => if (text.replace("[",2)&&text.replace("](",2)&&text.replace(")",2)) return "링크가 포함되어 있어요..."
    
    
}
// classes
class hogam {
    add(hogamdo, userid){
        f = fs.readFileSync(hogam_path);
        if (!f){
            fs.writeFileSync(hogam_path,"{}");
            return false
        }
        const testdata =  hogamdo-f[userid]
        if (testdata > 5) return false
        f[userid] = hogamdo
        fs.writeFileSync(hogam_path,f)
        return true
    }
    load(userid){
        f = fs.readFileSync(hogam_path);
        if (!f){
            fs.writeFileSync(hogam_path,"{}");
            return false
        }
        return f[userid]
    }
    cheak(userid){
        f = fs.readFileSync(hogam_path);
        if (!f){
            fs.writeFileSync(hogam_path,"{}");
            return;
        }
        if (!f[userid]){
            f[userid] = 0
            fs.writeFileSync(hogam_path,f)
            return
        }
    }
}
/**dropdown */



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

client.login(TOKEN)