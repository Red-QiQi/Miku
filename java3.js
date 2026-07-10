// ===================== 可扩展配置区（后续只需修改这里） =====================
// 1. 题库（支持批量导入，格式统一即可）
const questionBank = [
    {
        id: 1,
        title: "1. 创作音乐时，你更偏向？",
        options: [
            { text: "轻快治愈的电子音乐，充满元气", role: "初音未来" },
            { text: "活泼跳脱的流行乐，甜度拉满", role: "镜音铃" },
            { text: "酷炫带感的摇滚风，充满力量", role: "镜音连" },
            { text: "成熟魅惑的抒情曲，温柔缱绻", role: "巡音流歌" },
            { text: "悠扬舒缓的民谣风，治愈人心", role: "KAITO" },
            { text: "飒爽率性的曲风，态度满分", role: "MEIKO" }
        ]
    },
    {
        id: 2,
        title: "2. 舞台表演时，你的状态是？",
        options: [
            { text: "和观众互动，享受每一刻", role: "初音未来" },
            { text: "活力四射，把快乐传递出去", role: "镜音铃" },
            { text: "专注表演，用实力征服全场", role: "镜音连" },
            { text: "优雅从容，展现成熟魅力", role: "巡音流歌" },
            { text: "温柔稳重，给人满满的安全感", role: "KAITO" },
            { text: "气场全开，掌控整个舞台", role: "MEIKO" }
        ]
    },
    {
        id: 3,
        title: "3. 面对烦恼，你会？",
        options: [
            { text: "听音乐自愈，很快恢复元气", role: "初音未来" },
            { text: "找朋友吐槽，玩闹忘记烦恼", role: "镜音铃" },
            { text: "默默消化，用行动解决问题", role: "镜音连" },
            { text: "独处思考，和自己和解", role: "巡音流歌" },
            { text: "安静沉淀，不轻易表露情绪", role: "KAITO" },
            { text: "直面问题，绝不逃避", role: "MEIKO" }
        ]
    },
    {
        id: 4,
        title: "4. 你的理想休息日是？",
        options: [
            { text: "逛漫展、收集可爱周边", role: "初音未来" },
            { text: "和朋友去游乐园疯玩", role: "镜音铃" },
            { text: "宅家打游戏/做手工", role: "镜音连" },
            { text: "泡温泉、听音乐放松", role: "巡音流歌" },
            { text: "去海边钓鱼，享受安静", role: "KAITO" },
            { text: "和好友喝酒聊天，吐槽日常", role: "MEIKO" }
        ]
    },
    {
        id: 5,
        title: "5. 你认为音乐的意义是？",
        options: [
            { text: "传递快乐与治愈", role: "初音未来" },
            { text: "表达青春与活力", role: "镜音铃" },
            { text: "展现自我与态度", role: "镜音连" },
            { text: "诉说情感与故事", role: "巡音流歌" },
            { text: "温暖人心与陪伴", role: "KAITO" },
            { text: "打破束缚与做自己", role: "MEIKO" }
        ]
    },
    {
        id: 6,
        title: "6. 你更喜欢哪种颜色系？",
        options: [
            { text: "清新的蓝绿色系", role: "初音未来" },
            { text: "温暖的橙黄色系", role: "镜音铃" },
            { text: "冷冽的天蓝色系", role: "镜音连" },
            { text: "柔美的粉色系", role: "巡音流歌" },
            { text: "沉稳的宝蓝色系", role: "KAITO" },
            { text: "热烈的红色系", role: "MEIKO" }
        ]
    },
    {
        id: 7,
        title: "7. 朋友对你的评价更接近？",
        options: [
            { text: "治愈小太阳，永远乐观", role: "初音未来" },
            { text: "快乐小捣蛋，古灵精怪", role: "镜音铃" },
            { text: "高冷实力派，外冷内热", role: "镜音连" },
            { text: "温柔大姐姐，善解人意", role: "巡音流歌" },
            { text: "可靠老大哥，默默守护", role: "KAITO" },
            { text: "霸气大姐头，气场十足", role: "MEIKO" }
        ]
    },
    {
        id: 8,
        title: "8. 你更擅长哪种表达方式？",
        options: [
            { text: "用歌声传递温暖", role: "初音未来" },
            { text: "用玩笑活跃气氛", role: "镜音铃" },
            { text: "用行动证明自己", role: "镜音连" },
            { text: "用文字诉说情感", role: "巡音流歌" },
            { text: "用陪伴表达关心", role: "KAITO" },
            { text: "用态度表明立场", role: "MEIKO" }
        ]
    },
    {
    id: 9,
    title: "9. 你更倾向于哪种社交模式？",
    options: [
        { text: "和所有人都能友好相处，温暖包容", role: "初音未来" },
        { text: "和好朋友打打闹闹，热闹有趣", role: "镜音铃" },
        { text: "只和少数知己深交，宁缺毋滥", role: "镜音连" },
        { text: "享受独处，偶尔和懂自己的人交流", role: "巡音流歌" },
        { text: "默默陪伴，不主动但始终都在", role: "KAITO" },
        { text: "圈子干净，合得来就处，不合就散", role: "MEIKO" }
    ]
},
{
    id: 10,
    title: "10. 面对新挑战，你的态度是？",
    options: [
        { text: "充满好奇，勇敢尝试新事物", role: "初音未来" },
        { text: "跃跃欲试，觉得新鲜又有趣", role: "镜音铃" },
        { text: "冷静分析，有把握才会行动", role: "镜音连" },
        { text: "从容应对，相信自己的能力", role: "巡音流歌" },
        { text: "稳扎稳打，一步一个脚印", role: "KAITO" },
        { text: "迎难而上，绝不轻易认输", role: "MEIKO" }
    ]
},
{
    id: 11,
    title: "11. 你喜欢的食物类型是？",
    options: [
        { text: "甜甜的抹茶甜品，清新不腻", role: "初音未来" },
        { text: "元气满满的草莓蛋糕，甜度满分", role: "镜音铃" },
        { text: "咸香的薯条汉堡，简单直接", role: "镜音连" },
        { text: "精致的法式甜点，优雅美味", role: "巡音流歌" },
        { text: "暖心的热可可配面包，温暖治愈", role: "KAITO" },
        { text: "辛辣的烤肉配啤酒，够味过瘾", role: "MEIKO" }
    ]
},
{
    id: 12,
    title: "12. 你更向往哪种场景？",
    options: [
        { text: "开满樱花的街道，清新治愈", role: "初音未来" },
        { text: "充满欢声笑语的游乐场", role: "镜音铃" },
        { text: "酷炫的电竞场馆，充满竞技感", role: "镜音连" },
        { text: "浪漫的海边日落，温柔缱绻", role: "巡音流歌" },
        { text: "安静的雪山湖泊，与世隔绝", role: "KAITO" },
        { text: "热闹的livehouse,释放自我", role: "MEIKO" }
    ]
},
{
    id: 13,
    title: "13. 你处理情绪的方式是？",
    options: [
        { text: "快速调整，不让负面情绪停留", role: "初音未来" },
        { text: "大哭大笑，情绪直接表达", role: "镜音铃" },
        { text: "藏在心里，自己慢慢消化", role: "镜音连" },
        { text: "写下来或唱出来，温柔释放", role: "巡音流歌" },
        { text: "默默承受，不麻烦别人", role: "KAITO" },
        { text: "直面情绪，解决根源问题", role: "MEIKO" }
    ]
},
{
    id: 14,
    title: "14. 你更擅长的技能是？",
    options: [
        { text: "创作治愈系的旋律，打动人心", role: "初音未来" },
        { text: "带动气氛，让身边人都开心", role: "镜音铃" },
        { text: "专注钻研，把一件事做到极致", role: "镜音连" },
        { text: "共情能力强，懂得倾听和安慰", role: "巡音流歌" },
        { text: "手工制作，做出温暖的小物件", role: "KAITO" },
        { text: "领导力强，能统筹安排一切", role: "MEIKO" }
    ]
},
{
    id: 15,
    title: "15. 你对时尚的理解是？",
    options: [
        { text: "清新简约，舒适又有设计感", role: "初音未来" },
        { text: "色彩鲜艳，充满青春活力", role: "镜音铃" },
        { text: "酷帅街头，彰显个性态度", role: "镜音连" },
        { text: "优雅精致，凸显女性魅力", role: "巡音流歌" },
        { text: "经典百搭，低调又有质感", role: "KAITO" },
        { text: "率性利落，不被风格束缚", role: "MEIKO" }
    ]
},
{
    id: 16,
    title: "16. 你更享受哪种创作过程？",
    options: [
        { text: "即兴创作，灵感来了就记录", role: "初音未来" },
        { text: "和朋友合作，边玩边创作", role: "镜音铃" },
        { text: "独自钻研，反复打磨细节", role: "镜音连" },
        { text: "慢慢酝酿，让情感自然流露", role: "巡音流歌" },
        { text: "按部就班，稳扎稳打完成", role: "KAITO" },
        { text: "干脆利落，不拖泥带水", role: "MEIKO" }
    ]
},
{
    id: 17,
    title: "17. 你收到礼物时的反应是？",
    options: [
        { text: "开心道谢，会回赠小礼物", role: "初音未来" },
        { text: "惊喜尖叫，立刻拆开分享", role: "镜音铃" },
        { text: "表面淡定，内心偷偷开心", role: "镜音连" },
        { text: "温柔感谢，珍藏这份心意", role: "巡音流歌" },
        { text: "略显害羞，默默记在心里", role: "KAITO" },
        { text: "大方收下，下次加倍奉还", role: "MEIKO" }
    ]
},
{
    id: 18,
    title: "18. 你更像哪种天气？",
    options: [
        { text: "晴朗的春日，温暖又治愈", role: "初音未来" },
        { text: "热烈的夏日，活力四射", role: "镜音铃" },
        { text: "凉爽的秋日，飒爽有态度", role: "镜音连" },
        { text: "温柔的秋日，浪漫又诗意", role: "巡音流歌" },
        { text: "安静的冬日，沉稳又温暖", role: "KAITO" },
        { text: "爽快的雷阵雨，干脆利落", role: "MEIKO" }
    ]
},
{
    id: 19,
    title: "19. 你对待梦想的态度是？",
    options: [
        { text: "永远保持热爱，勇敢追逐", role: "初音未来" },
        { text: "天马行空，想到就去做", role: "镜音铃" },
        { text: "目标明确，用实力去实现", role: "镜音连" },
        { text: "温柔坚持，不慌不忙靠近", role: "巡音流歌" },
        { text: "默默努力，静待开花结果", role: "KAITO" },
        { text: "绝不妥协，活出自己的样子", role: "MEIKO" }
    ]
},
{
    id: 20,
    title: "20. 你更喜欢的宠物类型是？",
    options: [
        { text: "软萌的猫咪，治愈又可爱", role: "初音未来" },
        { text: "活泼的柯基，元气满满", role: "镜音铃" },
        { text: "高冷的柴犬，酷帅又忠诚", role: "镜音连" },
        { text: "优雅的布偶猫，温柔粘人", role: "巡音流歌" },
        { text: "稳重的金毛，暖心又可靠", role: "KAITO" },
        { text: "霸气的阿拉斯加，有安全感", role: "MEIKO" }
    ]
},
{
    id: 21,
    title: "21. 你在团队中的角色是？",
    options: [
        { text: "调和气氛的暖心担当", role: "初音未来" },
        { text: "活跃气氛的开心果", role: "镜音铃" },
        { text: "技术核心的实力担当", role: "镜音连" },
        { text: "温柔包容的协调者", role: "巡音流歌" },
        { text: "默默付出的后盾", role: "KAITO" },
        { text: "说一不二的领导者", role: "MEIKO" }
    ]
},
{
    id: 22,
    title: "22. 你更偏爱哪种乐器？",
    options: [
        { text: "电子琴，音色清新治愈", role: "初音未来" },
        { text: "架子鼓，节奏活泼明快", role: "镜音铃" },
        { text: "电吉他，音色酷炫带感", role: "镜音连" },
        { text: "大提琴，音色温柔缱绻", role: "巡音流歌" },
        { text: "钢琴，音色沉稳温暖", role: "KAITO" },
        { text: "贝斯，音色低哑有态度", role: "MEIKO" }
    ]
},
{
    id: 23,
    title: "23. 你解决矛盾的方式是？",
    options: [
        { text: "温柔沟通，化解不愉快", role: "初音未来" },
        { text: "主动道歉，用玩笑化解", role: "镜音铃" },
        { text: "冷静分析，讲道理解决", role: "镜音连" },
        { text: "换位思考，理解对方立场", role: "巡音流歌" },
        { text: "默默退让，避免冲突", role: "KAITO" },
        { text: "直截了当，说清问题所在", role: "MEIKO" }
    ]
},
{
    id: 24,
    title: "24. 你更享受的阅读类型是？",
    options: [
        { text: "治愈系绘本，温暖又治愈", role: "初音未来" },
        { text: "轻松搞笑的漫画，解压有趣", role: "镜音铃" },
        { text: "科幻小说，充满想象力", role: "镜音连" },
        { text: "文艺散文，温柔又有深度", role: "巡音流歌" },
        { text: "纪实文学，真实又暖心", role: "KAITO" },
        { text: "女性独立题材，飒爽有态度", role: "MEIKO" }
    ]
},
{
    id: 25,
    title: "25. 你起床后的状态是？",
    options: [
        { text: "元气满满，哼着歌洗漱", role: "初音未来" },
        { text: "赖床到最后一刻，飞速收拾", role: "镜音铃" },
        { text: "准时起床，面无表情洗漱", role: "镜音连" },
        { text: "慢慢起床，享受清晨时光", role: "巡音流歌" },
        { text: "提前起床，做好早餐等大家", role: "KAITO" },
        { text: "雷厉风行，绝不拖拖拉拉", role: "MEIKO" }
    ]
},
{
    id: 26,
    title: "26. 你更擅长的游戏类型是？",
    options: [
        { text: "休闲治愈类，放松心情", role: "初音未来" },
        { text: "多人联机类，和朋友一起玩", role: "镜音铃" },
        { text: "竞技对抗类，追求胜负", role: "镜音连" },
        { text: "解谜探索类，享受过程", role: "巡音流歌" },
        { text: "钓鱼养老类，安静休闲", role: "KAITO" },
        { text: "硬核操作类，挑战极限", role: "MEIKO" }
    ]
},
{
    id: 27,
    title: "27. 你对失败的看法是？",
    options: [
        { text: "没关系，下次继续努力", role: "初音未来" },
        { text: "短暂难过，很快就忘记", role: "镜音铃" },
        { text: "总结经验，默默改进", role: "镜音连" },
        { text: "接受不完美，和自己和解", role: "巡音流歌" },
        { text: "独自承担，不表露情绪", role: "KAITO" },
        { text: "不服输，一定要赢回来", role: "MEIKO" }
    ]
},
{
    id: 28,
    title: "28. 你更偏爱哪种饮品？",
    options: [
        { text: "抹茶拿铁，清新不腻", role: "初音未来" },
        { text: "草莓奶盖，甜滋滋的", role: "镜音铃" },
        { text: "冰美式，提神醒脑", role: "镜音连" },
        { text: "玫瑰茶，温柔又养颜", role: "巡音流歌" },
        { text: "热牛奶，暖心又暖胃", role: "KAITO" },
        { text: "精酿啤酒，够味过瘾", role: "MEIKO" }
    ]
},
{
    id: 29,
    title: "29. 你旅行时更倾向于？",
    options: [
        { text: "打卡网红景点，记录美好", role: "初音未来" },
        { text: "随心所欲，走到哪玩到哪", role: "镜音铃" },
        { text: "做好攻略，高效游玩", role: "镜音连" },
        { text: "慢节奏体验，感受当地氛围", role: "巡音流歌" },
        { text: "负责后勤，照顾同行的人", role: "KAITO" },
        { text: "说走就走，不被计划束缚", role: "MEIKO" }
    ]
},
{
    id: 30,
    title: "30. 你表达爱意的方式是？",
    options: [
        { text: "温柔陪伴，默默付出", role: "初音未来" },
        { text: "直球表白，大胆说爱", role: "镜音铃" },
        { text: "用行动证明，不说废话", role: "镜音连" },
        { text: "温柔守护，细水长流", role: "巡音流歌" },
        { text: "默默关心，不善言辞", role: "KAITO" },
        { text: "霸气守护，绝不退让", role: "MEIKO" }
    ]
},
{
    id: 31,
    title: "31. 你更像哪种花朵？",
    options: [
        { text: "樱花，清新治愈", role: "初音未来" },
        { text: "向日葵，活力满满", role: "镜音铃" },
        { text: "剑兰，坚韧有态度", role: "镜音连" },
        { text: "玫瑰，优雅又迷人", role: "巡音流歌" },
        { text: "铃兰，温柔又安静", role: "KAITO" },
        { text: "红枫，飒爽又热烈", role: "MEIKO" }
    ]
},
{
    id: 32,
    title: "32. 你熬夜时通常在做什么？",
    options: [
        { text: "听音乐画画，享受独处时光", role: "初音未来" },
        { text: "和朋友打游戏，聊到深夜", role: "镜音铃" },
        { text: "专注做自己喜欢的事，忘记时间", role: "镜音连" },
        { text: "听着轻音乐，思考人生", role: "巡音流歌" },
        { text: "默默加班，完成未做完的事", role: "KAITO" },
        { text: "和好友喝酒聊天，释放压力", role: "MEIKO" }
    ]
},
{
    id: 33,
    title: "33. 你对过去的态度是？",
    options: [
        { text: "珍惜回忆，感恩相遇", role: "初音未来" },
        { text: "笑着释怀，大步向前", role: "镜音铃" },
        { text: "不回头看，专注未来", role: "镜音连" },
        { text: "温柔接纳，成为更好的自己", role: "巡音流歌" },
        { text: "藏在心里，偶尔回味", role: "KAITO" },
        { text: "放下过去，活在当下", role: "MEIKO" }
    ]
},
{
    id: 34,
    title: "34. 你更擅长的运动是？",
    options: [
        { text: "瑜伽，舒缓身心", role: "初音未来" },
        { text: "跳绳，简单又有活力", role: "镜音铃" },
        { text: "篮球，充满竞技感", role: "镜音连" },
        { text: "普拉提，优雅塑形", role: "巡音流歌" },
        { text: "钓鱼，安静又放松", role: "KAITO" },
        { text: "拳击，释放压力", role: "MEIKO" }
    ]
},
{
    id: 35,
    title: "35. 你收到批评时的反应是？",
    options: [
        { text: "虚心接受，温柔改进", role: "初音未来" },
        { text: "有点委屈，很快就改正", role: "镜音铃" },
        { text: "面无表情，默默记下来改进", role: "镜音连" },
        { text: "冷静分析，有则改之", role: "巡音流歌" },
        { text: "沉默接受，独自反思", role: "KAITO" },
        { text: "据理力争，不服就辩", role: "MEIKO" }
    ]
},
{
    id: 36,
    title: "36. 你更享受的节日是？",
    options: [
        { text: "樱花季，浪漫又治愈", role: "初音未来" },
        { text: "儿童节，充满童趣", role: "镜音铃" },
        { text: "万圣节，酷炫又有趣", role: "镜音连" },
        { text: "情人节，温柔又浪漫", role: "巡音流歌" },
        { text: "圣诞节，温馨又暖心", role: "KAITO" },
        { text: "跨年，热烈又洒脱", role: "MEIKO" }
    ]
},
{
    id: 37,
    title: "37. 你整理房间的风格是？",
    options: [
        { text: "温馨治愈，摆满可爱小物件", role: "初音未来" },
        { text: "乱中有序，充满生活气息", role: "镜音铃" },
        { text: "极简风格，只留必需品", role: "镜音连" },
        { text: "精致优雅，每一处都有格调", role: "巡音流歌" },
        { text: "整洁舒适，让人感到安心", role: "KAITO" },
        { text: "干脆利落，绝不拖泥带水", role: "MEIKO" }
    ]
},
{
    id: 38,
    title: "38. 你更向往的职业是？",
    options: [
        { text: "音乐创作者，传递治愈力量", role: "初音未来" },
        { text: "综艺主持人，带来欢声笑语", role: "镜音铃" },
        { text: "技术工程师，靠实力说话", role: "镜音连" },
        { text: "心理咨询师，温柔治愈他人", role: "巡音流歌" },
        { text: "烘焙师，制作暖心的食物", role: "KAITO" },
        { text: "创业者，掌控自己的人生", role: "MEIKO" }
    ]
},
{
    id: 39,
    title: "39. 你认为自己的核心特质是？",
    options: [
        { text: "治愈温暖，永远向阳而生", role: "初音未来" },
        { text: "元气可爱，永远少年感", role: "镜音铃" },
        { text: "实力至上，低调不张扬", role: "镜音连" },
        { text: "温柔通透，内心有力量", role: "巡音流歌" },
        { text: "沉稳可靠，是身边人的港湾", role: "KAITO" },
        { text: "独立飒爽，活出真实自我", role: "MEIKO" }
    ]
}
];

// 2. 角色配置（独立管理）
const characterConfig = {
    score: {
        "初音未来": 0,
        "镜音铃": 0,
        "镜音连": 0,
        "巡音流歌": 0,
        "KAITO": 0,
        "MEIKO": 0
    },
    desc: {
        "初音未来": "你像初音未来✨，元气满满、治愈温暖，永远对生活充满热爱，能用自己的快乐感染身边的每一个人，是大家心中的小太阳～",
        "镜音铃": "你像镜音铃🍬，活泼跳脱、甜度满分，敢爱敢恨的性格让你充满魅力，永远保持着少年感，是人群中最亮眼的存在～",
        "镜音连": "你像镜音连⚡，酷炫又有实力，做事专注认真，不轻易表露情绪，但总会用行动证明自己，是可靠又有态度的存在～",
        "巡音流歌": "你像巡音流歌💖，成熟优雅、温柔缱绻，内心丰富且通透，懂得和自己和解，自带独特的魅力与气质～",
        "KAITO": "你像KAITO❄️,温柔稳重、治愈人心，不善言辞但总能给人满满的安全感，是身边人可以依靠的港湾～",
        "MEIKO": "你像MEIKO🔥,飒爽率性、气场全开,敢于做自己,从不向困难低头,是独立又有态度的酷女孩/男孩～"
    },
    color: {
        "初音未来": "#39C5BB",
        "镜音铃": "#FFA500",
        "镜音连": "#FFE211",
        "巡音流歌": "#FFC0CB",
        "KAITO": "#0000FF",
        "MEIKO": "#D80000"
    },
    icon: {
        "初音未来": "ミク",
        "镜音铃": "鈴",
        "镜音连": "連",
        "巡音流歌": "ル",
        "KAITO": "カ",
        "MEIKO": "メ"
    }
};

// ===================== 新增：核心配置（补全缺失） =====================
const config = {
  bgMusicUrl: "http://music.163.com/song/media/outer/url?id=22677558.mp3",
  roleMusicMap: {
    "初音未来": "http://music.163.com/song/media/outer/url?id=22677570.mp3",
    "镜音铃": "http://music.163.com/song/media/outer/url?id=33516239.mp3",
    "镜音连": "http://music.163.com/song/media/outer/url?id=30870538.mp3",
    "巡音流歌": "http://music.163.com/song/media/outer/url?id=28844024.mp3",
    "KAITO": "http://music.163.com/song/media/outer/url?id=2019338676.mp3",
    "MEIKO": "http://music.163.com/song/media/outer/url?id=2634236186.mp3"
  },
  bilibiliUrl: "https://www.bilibili.com/video/BV1NW4y147gD/",
  maxHeartClick: 39
};

// ===================== 全局状态 =====================
let currentQuestionId = 1;
let totalQuestions = 0;
let score = {};
let heartClickCount = 0;
// 全局音频实例（核心：全程复用一个音频对象）
let audioPlayer = null;
let isBgMusic = true; // 标记当前播放的是背景音乐还是角色音乐

// ===================== DOM加载完成初始化 =====================
document.addEventListener('DOMContentLoaded', function () {
  // 初始化全局音频播放器（优先执行）
  initAudioPlayer();
  // 初始化音量控制（优先绑定）
  initVolumeControl();
  // 初始化音乐播放/暂停按钮
  initMusicPlayPauseBtn();
  
  // 👉 新增：页面加载完成后立即尝试自动播放音乐
  tryAutoPlayMusic();
  
  // 初始化测试逻辑
  if (typeof questionBank !== 'undefined' && typeof characterConfig !== 'undefined') {
    totalQuestions = questionBank.length;
    score = { ...characterConfig.score };
    
    initStartScreen();
    renderQuestionBank();
    initAnswerButtons();
    initOptionClick();
    
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) {
      restartBtn.addEventListener('click', restartTest);
    }
  }
  
  initVoiceCharAnimation();
  initHeartBtn();
});

// ===================== 新增：自动播放音乐核心函数 =====================
function tryAutoPlayMusic() {
  if (!audioPlayer) return;
  
  // 尝试直接播放
  audioPlayer.play().then(() => {
    // 播放成功：更新按钮图标为暂停
    const musicIcon = document.getElementById('musicIcon');
    if (musicIcon) musicIcon.className = "fas fa-pause";
  }).catch((err) => {
    // 播放失败（浏览器限制）：监听页面任意点击后播放
    console.log('浏览器自动播放限制，等待用户交互:', err);
    document.body.addEventListener('click', () => {
      audioPlayer.play();
      const musicIcon = document.getElementById('musicIcon');
      if (musicIcon) musicIcon.className = "fas fa-pause";
    }, { once: true }); // 只监听一次点击
  });
}

// ===================== 核心：全局音频播放器初始化 =====================
function initAudioPlayer() {
  // 创建唯一的音频实例（全程复用）
  audioPlayer = document.createElement('audio');
  audioPlayer.id = 'globalAudio';
  audioPlayer.loop = true; // 循环播放
  audioPlayer.preload = 'auto'; // 👉 修改：从metadata改为auto，优先加载音频
  audioPlayer.src = config.bgMusicUrl;
  // 挂载到body，方便调试
  document.body.appendChild(audioPlayer);

  // 音频播放错误处理
  audioPlayer.addEventListener('error', (e) => {
    console.error('音频播放失败:', e);
    alert('背景音乐加载失败，请检查链接是否有效！');
  });
}

// ===================== 音量控制（全程生效） =====================
function initVolumeControl() {
  const volumeSlider = document.getElementById('volumeSlider');
  const volumeIcon = document.getElementById('volumeIcon');

  // 兼容滑块不存在的情况
  if (!volumeSlider || !volumeIcon) return;

  // 初始化音量（默认100%）
  audioPlayer.volume = parseFloat(volumeSlider.value);
  updateVolumeIcon(audioPlayer.volume, volumeIcon);

  // 滑块拖动：实时修改音量
  volumeSlider.addEventListener('input', function () {
    const volume = parseFloat(this.value);
    audioPlayer.volume = volume;
    updateVolumeIcon(volume, volumeIcon);
  });

  // 点击音量图标：静音/恢复
  volumeIcon.addEventListener('click', function () {
    if (audioPlayer.volume > 0) {
      // 静音：记录当前音量
      this.dataset.lastVolume = audioPlayer.volume;
      audioPlayer.volume = 0;
      volumeSlider.value = 0;
      this.className = "fas fa-volume-mute";
    } else {
      // 恢复音量：读取记录的音量
      const lastVolume = parseFloat(this.dataset.lastVolume || 1);
      audioPlayer.volume = lastVolume;
      volumeSlider.value = lastVolume;
      updateVolumeIcon(lastVolume, this);
    }
  });
}

// 更新音量图标样式
function updateVolumeIcon(volume, iconElement) {
  if (volume === 0) {
    iconElement.className = "fas fa-volume-mute";
  } else if (volume < 0.5) {
    iconElement.className = "fas fa-volume-down";
  } else {
    iconElement.className = "fas fa-volume-up";
  }
}

// ===================== 修复：播放/暂停按钮（确保全程生效） =====================
function initMusicPlayPauseBtn() {
  const musicControlBtn = document.getElementById('musicControlBtn');
  const musicIcon = document.getElementById('musicIcon');

  if (!musicControlBtn || !musicIcon) return;

  // 初始化图标（根据音频实际状态）
  musicIcon.className = audioPlayer.paused ? "fas fa-play" : "fas fa-pause";

  // 按钮点击：切换播放/暂停（简化逻辑，确保执行）
  musicControlBtn.addEventListener('click', () => {
    // 强制同步状态，避免异步问题
    if (audioPlayer.paused) {
      // 播放：直接执行，忽略catch（已在autoPlay中处理授权）
      audioPlayer.play();
      musicIcon.className = "fas fa-pause";
    } else {
      // 暂停
      audioPlayer.pause();
      musicIcon.className = "fas fa-play";
    }
  });
}

// ===================== 开始界面初始化（移除重复播放逻辑） =====================
function initStartScreen() {
  const startScreen = document.getElementById('startScreen');
  const testContent = document.getElementById('testContent');
  const startBtn = document.getElementById('startBtn');

  if (!startScreen || !testContent || !startBtn) return;

  startBtn.addEventListener('click', function () {
    // 隐藏开始界面，显示答题界面
    startScreen.classList.remove('active');
    testContent.classList.add('active');
    
    // 👉 移除：重复的播放逻辑（音乐已在页面加载时播放）
    // 保留音乐继续播放即可
  });
}

// ===================== 以下代码完全不变，无需修改 =====================
// ===================== 题库渲染 =====================
function renderQuestionBank() {
  const container = document.getElementById('questionContainer');
  if (!container) return;
  container.innerHTML = '';

  questionBank.forEach(question => {
    const questionDiv = document.createElement('div');
    questionDiv.id = `question${question.id}`;
    questionDiv.className = `question-container ${question.id === 1 ? 'active' : ''}`;
    questionDiv.style.display = question.id === 1 ? 'block' : 'none';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'question-title';
    titleDiv.textContent = question.title;
    questionDiv.appendChild(titleDiv);

    const optionList = document.createElement('div');
    optionList.className = 'option-list';

    const randomOptions = [...question.options].sort(() => Math.random() - 0.5);


    randomOptions.forEach(option => {
      const optionDiv = document.createElement('div');
      optionDiv.className = `option ${option.role.replace(/\s+/g, '').toLowerCase()}-opt`;
      optionDiv.setAttribute('data-role', option.role);
      optionDiv.textContent = option.text;
      optionList.appendChild(optionDiv);
    });

    questionDiv.appendChild(optionList);
    container.appendChild(questionDiv);
  });
}

// ===================== 答题按钮初始化 =====================
function initAnswerButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (!prevBtn || !nextBtn || !submitBtn) return;

  // 下一题
  nextBtn.addEventListener('click', function () {
    const currentOptions = document.querySelector(`#question${currentQuestionId} .option.selected`);
    if (!currentOptions) {
      alert('请先选择一个选项哦～');
      return;
    }

    // 切换题目
    document.getElementById(`question${currentQuestionId}`).style.display = 'none';
    currentQuestionId++;
    document.getElementById(`question${currentQuestionId}`).style.display = 'block';

    prevBtn.disabled = false;
    if (currentQuestionId === totalQuestions) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'block';
    }
  });

  // 上一题
  prevBtn.addEventListener('click', function () {
    document.getElementById(`question${currentQuestionId}`).style.display = 'none';
    currentQuestionId--;
    document.getElementById(`question${currentQuestionId}`).style.display = 'block';

    nextBtn.style.display = 'block';
    submitBtn.style.display = 'none';
    if (currentQuestionId === 1) {
      prevBtn.disabled = true;
    }
  });

  // 提交结果
  submitBtn.addEventListener('click', calculateResult);
}

// ===================== 选项点击逻辑 =====================
function initOptionClick() {
  const container = document.getElementById('questionContainer');
  if (!container) return;

  container.addEventListener('click', function (e) {
    if (e.target.classList.contains('option')) {
      const option = e.target;
      // 取消其他选项选中状态
      option.parentElement.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      // 选中当前选项
      option.classList.add('selected');

      // 更新得分
      const role = option.getAttribute('data-role');
      resetCurrentQuestionScore();
      score[role] += 1;
    }
  });
}

// 重置当前题目的得分
function resetCurrentQuestionScore() {
  for (let role in score) {
    if (score[role] > 0) {
      const currentSelected = document.querySelector(`#question${currentQuestionId} .option.selected[data-role="${role}"]`);
      if (currentSelected) {
        score[role] -= 1;
      }
    }
  }
}

// ===================== 计算结果（切换角色音乐） =====================
function calculateResult() {
  // 计算最高分角色
  let maxScore = 0;
  let resultRole = "";
  for (let role in score) {
    if (score[role] > maxScore) {
      maxScore = score[role];
      resultRole = role;
    }
  }

  // 隐藏答题界面，显示结果界面
  document.querySelectorAll('.question-container').forEach(container => container.style.display = 'none');
  document.querySelector('.btn-container').style.display = 'none';
  
  const resultContainer = document.getElementById('result');
  if (resultContainer) {
    resultContainer.style.display = 'block';
    document.getElementById('resultAvatar').style.background = characterConfig.color[resultRole];
    document.getElementById('resultAvatar').textContent = characterConfig.icon[resultRole];
    document.getElementById('resultName').textContent = `你最像 ${resultRole}!`;
    document.getElementById('resultDesc').textContent = characterConfig.desc[resultRole];
  }

  // 核心：停止背景音乐，播放角色音乐
  isBgMusic = false;
  audioPlayer.pause();
  audioPlayer.loop = true;
  audioPlayer.src = config.roleMusicMap[resultRole];
  // 保留当前音量设置
  audioPlayer.volume = parseFloat(document.getElementById('volumeSlider')?.value || 1);
  
  // 播放角色音乐
  audioPlayer.play().catch(() => {
    alert('请点击页面任意位置授权音乐播放！');
    document.body.addEventListener('click', () => audioPlayer.play(), { once: true });
  });
  
  // 更新播放按钮图标
  const musicIcon = document.getElementById('musicIcon');
  if (musicIcon) musicIcon.className = "fas fa-pause";
}

// ===================== 重新测试 =====================
function restartTest() {
  // 重置答题状态
  currentQuestionId = 1;
  score = { ...characterConfig.score };

  // 切换界面
  document.getElementById('result').style.display = 'none';
  document.getElementById('startScreen').classList.add('active');
  document.getElementById('testContent').classList.remove('active');

  // 重置题目显示
  const allQuestions = document.querySelectorAll('.question-container');
  allQuestions.forEach((q, index) => {
    q.style.display = index === 0 ? 'block' : 'none';
    q.classList.toggle('active', index === 0);
  });

  // 重置选项选中状态
  document.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));

  // 重置按钮显示
  const btnContainer = document.querySelector('.btn-container');
  if (btnContainer) {
    btnContainer.style.display = 'flex';
    document.getElementById('prevBtn').disabled = true;
    document.getElementById('nextBtn').style.display = 'block';
    document.getElementById('submitBtn').style.display = 'none';
  }

  // 核心：恢复背景音乐播放
  isBgMusic = true;
  audioPlayer.pause();
  audioPlayer.src = config.bgMusicUrl;
  // 保留音量设置
  audioPlayer.volume = parseFloat(document.getElementById('volumeSlider')?.value || 1);
  
  // 重置爱心状态
  heartClickCount = 0;
  const heartBtn = document.getElementById('heartBtn');
  if (heartBtn) {
    heartBtn.disabled = false;
    heartBtn.style.opacity = '1';
    heartBtn.style.cursor = 'pointer';
  }
  
  const heartContainer = document.getElementById('heartContainer');
  if (heartContainer) heartContainer.innerHTML = '';
  
  // 恢复答题按钮可用
  document.querySelectorAll('.btn, .option, #startBtn, #restartBtn').forEach(el => {
    el.disabled = false;
    el.style.opacity = '1';
    el.style.cursor = 'pointer';
  });

  // 重置播放按钮图标
  const musicIcon = document.getElementById('musicIcon');
  if (musicIcon) musicIcon.className = "fas fa-play";
  
  // 重新尝试自动播放背景音乐
  tryAutoPlayMusic();
}

// ===================== 爱心按钮逻辑 =====================
function initHeartBtn() {
  const heartBtn = document.getElementById('heartBtn');
  const heartContainer = document.getElementById('heartContainer');
  if (!heartBtn || !heartContainer) return;

  // 生成随机爱心
  function createRandomHeart() {
    const heart = document.createElement('button');
    heart.style.cssText = `
      position: absolute;
      top: ${Math.random() * 90}vh;
      left: ${Math.random() * 90}vw;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: #39C5BB;
      color: white;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      cursor: pointer;
      transition: all 0.2s ease;
      opacity: 1;
    `;
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heartContainer.appendChild(heart);

    // 子爱心点击事件
    heart.addEventListener('click', function handleHeartClick(e) {
      e.stopPropagation();
      heartClickCount++;

      // 第39次点击跳转B站
      if (heartClickCount === config.maxHeartClick) {
        window.open(config.bilibiliUrl, '_blank');
        return;
      }

      // 禁用当前子爱心
      heart.disabled = true;
      heart.style.opacity = '0.7';
      heart.style.cursor = 'not-allowed';
      heart.removeEventListener('click', handleHeartClick);

      // 生成新爱心
      createRandomHeart();
    });

    return heart;
  }

  // 母爱心点击事件
  heartBtn.addEventListener('click', function handleMainHeartClick(e) {
    e.stopPropagation();
    heartClickCount++;

    if (heartClickCount === config.maxHeartClick) {
      window.open(config.bilibiliUrl, '_blank');
      return;
    }

    // 禁用母爱心
    heartBtn.disabled = true;
    heartBtn.style.opacity = '0.7';
    heartBtn.style.cursor = 'not-allowed';
    heartBtn.removeEventListener('click', handleMainHeartClick);

    // 禁用答题按钮
    document.querySelectorAll('.btn, .option, #startBtn, #restartBtn').forEach(el => {
      el.disabled = true;
      el.style.opacity = '0.5';
      el.style.cursor = 'not-allowed';
    });

    // 生成第一个子爱心
    createRandomHeart();
  });
}

// ===================== 角色动画 =====================
const voiceChars = [
  { name: "初音ミク", className: "char-miku" },
  { name: "鏡音リン", className: "char-rin" },
  { name: "鏡音レン", className: "char-len" },
  { name: "巡音ルカ", className: "char-luka" },
  { name: "KAITO", className: "char-kaito" },
  { name: "MEIKO", className: "char-meiko" }
];

function createCharContainer() {
  const old = document.querySelector('.voice-char-container');
  if (old) old.remove();
  const container = document.createElement("div");
  container.className = "voice-char-container";
  document.body.appendChild(container);
  return container;
}

function createRandomChar(container) {
  const c = voiceChars[Math.floor(Math.random() * voiceChars.length)];
  const el = document.createElement("div");
  el.className = `voice-char ${c.className} voice-char-fall`;
  el.textContent = c.name;
  el.style.left = Math.random() * 90 + "%";
  el.style.animationDuration = (5 + Math.random() * 10) + "s";
  container.appendChild(el);
  el.addEventListener("animationend", () => el.remove());
}

function initVoiceCharAnimation() {
  const container = createCharContainer();
  for (let i = 0; i < 5; i++) createRandomChar(container);
  setInterval(() => {
    if (container.children.length < 15) createRandomChar(container);
  }, 2000);
}

// ===================== 老虎按钮功能（最终版） =====================
function initTigerBtn() {
  // 全局变量
  let tigerClickCount = 0; // 点击次数
  const BILIBILI_VIDEO_URL = "https://www.bilibili.com/video/BV1NMUZYeEyM/"; // 替换成你的B站链接
  const tigerBtn = document.getElementById('tigerBtn');
  const tigerModal = document.getElementById('tigerModal');
  const modalContent = document.getElementById('modalContent');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const tigerCoverContainer = document.getElementById('tigerCoverContainer');

  // 关闭弹窗
  closeModalBtn.addEventListener('click', () => {
    tigerModal.style.display = 'none';
  });

  // 老虎按钮点击事件
  tigerBtn.addEventListener('click', () => {
    tigerClickCount++;
    
    // 第一次点击
    if (tigerClickCount === 1) {
      modalContent.textContent = "真的要这样做吗？";
      closeModalBtn.style.display = 'block'; // 显示关闭按钮
      tigerModal.style.display = 'block';
    }
    // 第二次点击
    else if (tigerClickCount === 2) {
      modalContent.textContent = "真要这样做吗？？？？？";
      closeModalBtn.style.display = 'block'; // 显示关闭按钮
      tigerModal.style.display = 'block';
    }
    // 第三次点击（核心修改：仅此时暂停音乐+禁用按钮）
    else if (tigerClickCount === 3) {
      // 👉 仅第三次点击才暂停音乐
      if (audioPlayer && !audioPlayer.paused) {
        audioPlayer.pause();
        const musicIcon = document.getElementById('musicIcon');
        if (musicIcon) musicIcon.className = "fas fa-play";
      }

      // 👉 仅第三次点击才禁用所有其他交互按钮
      disableAllOtherButtons();

      // 显示不可关闭的弹窗 + 倒计时
      let countdown = 2; // 倒计时2秒
      modalContent.innerHTML = `这是你自己选择的！要来了！！<br><span id="countdownText" style="color: red; font-size: 24px; margin-top: 10px; display: block;">${countdown}</span>`;
      closeModalBtn.style.display = 'none'; // 隐藏关闭按钮
      tigerModal.style.display = 'block';

      // 倒计时逻辑
      const countdownTimer = setInterval(() => {
        countdown--;
        document.getElementById('countdownText').textContent = countdown;
        if (countdown <= 0) {
          clearInterval(countdownTimer);
        }
      }, 1000);
      
      // 1.5秒内铺满老虎头像（数量保持不变）
      setTimeout(() => {
        coverScreenWithTiger();
      }, 100); // 延迟100ms开始铺满
      
      // 1.5秒铺满 + 2秒等待 = 3.5秒后跳转（含倒计时）
      setTimeout(() => {
        window.open(BILIBILI_VIDEO_URL, '_blank');
        // 可选：当前页面跳转用这个：window.location.href = BILIBILI_VIDEO_URL;
      }, 1500 + 2000); 
    }
  });

  // 禁用所有其他按钮（保留老虎按钮可用）
  function disableAllOtherButtons() {
    // 禁用答题相关按钮
    document.querySelectorAll('.btn, .option, #startBtn, #restartBtn, #musicControlBtn, #heartBtn').forEach(el => {
      el.disabled = true;
      el.style.opacity = '0.5';
      el.style.cursor = 'not-allowed';
      el.style.pointerEvents = 'none'; // 彻底禁用点击
    });
    // 保留老虎按钮可用
    tigerBtn.disabled = false;
    tigerBtn.style.opacity = '1';
    tigerBtn.style.cursor = 'pointer';
    tigerBtn.style.pointerEvents = 'auto';
  }

  // 1.5秒内铺满老虎头像（数量足够，仅调整时间）
  function coverScreenWithTiger() {
    tigerCoverContainer.style.display = 'block';
    tigerCoverContainer.innerHTML = ''; // 清空原有内容
    
    // 计算需要生成的老虎数量（保持你调好的密度）
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const tigerSize = 40; // 保持40px尺寸
    const countX = Math.ceil(screenWidth / (tigerSize / 2)); 
    const countY = Math.ceil(screenHeight / (tigerSize / 2)); 
    const totalCount = countX * countY * 1.2; 

    // 1.5秒内完成生成（调整批次和间隔）
    let generated = 0;
    const batchSize = Math.ceil(totalCount / 15); // 分15批（原30批），1.5秒完成
    const interval = setInterval(() => {
      for (let i = 0; i < batchSize; i++) {
        if (generated >= totalCount) {
          clearInterval(interval);
          return;
        }
        
        // 创建单个老虎头像
        const tiger = document.createElement('div');
        tiger.style.cssText = `
          position: absolute;
          top: ${Math.random() * screenHeight}px;
          left: ${Math.random() * screenWidth}px;
          width: ${tigerSize}px;
          height: ${tigerSize}px;
          font-size: ${tigerSize}px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: fadeIn 0.2s ease forwards; // 动画缩短到0.2秒
          z-index: 9998;
          pointer-events: none;
        `;
        tiger.textContent = '🐯';
        tigerCoverContainer.appendChild(tiger);
        
        generated++;
      }
    }, 100); // 每100ms一批，15批=1.5秒完成

    // 添加渐入动画
    if (!document.querySelector('#tigerAnimationStyle')) {
      const style = document.createElement('style');
      style.id = 'tigerAnimationStyle';
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// 在DOM加载完成后初始化老虎按钮
document.addEventListener('DOMContentLoaded', function() {
  initTigerBtn();
});