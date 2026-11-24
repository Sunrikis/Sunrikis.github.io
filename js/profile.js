// 这里只保存适合公开展示的昵称、研究、兴趣与学习主题。
window.PROFILE = {
  name: "Sunrikis",
  role: "计算机视觉 · 图像复原 · 算法学习",
  description: "Sunrikis 的个人主页，记录图像复原研究、算法学习，以及游戏、音乐与动漫等日常兴趣。",
  bio: [
    "我是 Sunrikis。我喜欢追问一张图像为什么会变模糊，以及边缘和纹理是怎样重新变得清晰的。这里是我整理视觉研究与算法思路的地方。",
    "无意识庭院借用了古明地恋的意象。研究之外，游戏、音乐、动漫、语言学习和偶然遇到的灵感，也都可以在这里留一页。"
  ],
  publications: [
    {
      title: "All-in-One Adverse Weather Removal via a Unified Latent Conditional Diffusion Model",
      venue: "ICIG",
      year: "2026",
      status: "已录用"
    }
  ],
  interests: [
    {
      category: "游戏",
      title: "像素与弹幕之间",
      description: "喜欢东方 Project 的角色设定与世界观，也偏爱美术精致、节奏舒缓的独立游戏。写完代码后，偶尔会在像素灯光与探索地图里放空一会儿。",
      tags: ["东方 Project", "独立游戏", "像素美学"],
      art: "assets/koishi-pixel-walk.webp",
      artAlt: "像素风格的古明地恋披着鼠尾草绿短斗篷，提着暖灯轻快漫步",
      artWidth: 405,
      artHeight: 560,
      artClass: "interest-art is-pixel",
      interactive: true
    },
    {
      category: "音乐",
      title: "写代码时的背景音轨",
      description: "常听东方同人编曲、游戏原声带与轻快的器乐纯音乐。读论文或调模型时，一段熟悉而安静的旋律总能把节奏稳下来。",
      tags: ["东方同人曲", "游戏 OST", "器乐纯音乐"],
      art: "assets/prop-third-eye-locket.webp",
      artAlt: "闭合第三只眼造型的复古珐琅挂坠与心形丝绳",
      artWidth: 460,
      artHeight: 454,
      artClass: "interest-art"
    },
    {
      category: "动漫",
      title: "留住心动的作画与光影",
      description: "偏爱轻松治愈的日常番、细腻的光影分镜与有想象力的美术风格，也会随手收藏让人眼前一亮的色彩搭配和同人插画。",
      tags: ["日常治愈", "光影分镜", "同人插画"],
      art: "assets/prop-koishi-hat.webp",
      artAlt: "缀着鹅黄蝴蝶结缎带与银杏叶的黑色宽檐帽",
      artWidth: 460,
      artHeight: 366,
      artClass: "interest-art"
    }
  ],
  notes: [
    {
      category: "代码与实验",
      title: "从思路到实现",
      description: "把算法拆成可以验证的小问题。读开源实现，也记录实验条件和观察到的现象。"
    },
    {
      category: "学术阅读",
      title: "读懂方法的取舍",
      description: "留意空间与频率表示各自保留了什么，也关注生成模型的质量与推理开销。"
    },
    {
      category: "日常积累",
      title: "慢慢攒一页",
      description: "记下语言学习中的新表达、读到的有趣问题，以及二次元作品里值得回看的细节。"
    }
  ]
};
