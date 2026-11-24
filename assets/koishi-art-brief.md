# 「无意识庭院」古明地恋立绘与小物件生图企划（GPT-Image 专用）

本文档为 **Sunrikis · 无意识庭院** 个人主页定制了一套共 **9 张** 美术素材方案，包含 **5 种不同画风 / 服装 / 动作的古明地恋立绘** 与 **4 件呼应「古明地恋 × 图像复原」主题的手绘小物件**。

每张图均已规划好网页落位、尺寸比例、透明背景要求及可直接复制给 **GPT-Image** 的英文提示词。画完后直接放进 `assets/` 目录对应文件名，再告诉我即可无缝接入页面并做好深浅主题、响应式与专注阅读适配。

---

## 一、全站视觉规范与页面落位总览

为保证 5 种截然不同的画风（厚涂、Q 版、水彩、像素、藏书票版画）放在同一个主页里依然高级和谐，所有提示词均锁定了同一套色彩基因与角色特征：

- **全站统一色盘**：
  - 纸白 / 奶油暖白 `#f5f4ea` · 森林墨绿 `#2c5b40` · 薄荷灰绿 `#9ec0a3` · 银杏鹅黄 `#d9b85b` · 恋眼薰衣草灰紫 `#5a546d`
- **角色固定识别特征（严禁画偏）**：
  - 薄荷绿微卷短发（Wavy Bob Hair）、浅草绿眼眸、温柔俏皮的微笑
  - 标志性**闭合的第三只眼**（紫炭色眼睑轻闭、切忌画成睁开）+ 纤细紫灰色**心形丝绳**
  - 蝴蝶结宽檐帽（随服装在黑绒帽 / 贝雷帽 / 编织草帽之间呼应变化）

### 素材规划总表

| 编号 | 文件名（保存至 `assets/`） | 画风 | 服装与主题 | 建议尺寸 | 背景 | 页面落位 | 推荐优先级 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | `koishi-impasto-window.png` | 光影厚涂油画风 | 雨晴斗篷风衣 + 贝雷帽 | `1536×1024` | 完整场景 | 图像退化对比区（可与原图切换或作主图） | ★★★ 核心 |
| **02** | `koishi-chibi-peeker.png` | 日系 Q 版二头身 | 鹅黄针织开衫 + 歪戴大黑帽 | `1024×1024` | **透明 PNG** | 论文卡片 / 关于卡片顶边「趴框探头」 | ★★★ 核心 |
| **03** | `koishi-watercolor-sketch.png` | 博物志淡彩手绘 | 复古森系茶会蕾丝长裙 + 草帽 | `1024×1536` | **透明 PNG** | 「庭院的主人」关于区文艺插图 | ★★★ 核心 |
| **04** | `koishi-pixel-walk.png` | 32-bit 精致像素风 | 经典装 + 鼠尾草绿短斗篷 + 提灯 | `1024×1024` | **透明 PNG** | 学习札记「代码与实验」角标 / 页脚漫步彩蛋 | ★★★ 核心 |
| **05** | `koishi-exlibris-stamp.png` | 复古版画藏书票 | 维多利亚蕾丝衬衫 + 手持棱镜 | `1024×1024` | **透明 PNG** | 庭院徽记 / 可打印概览 `cv.html` 装饰印章 | ★★☆ 进阶 |
| **06** | `prop-koishi-hat.png` | 轻水彩微缩静物 | 恋恋宽檐黑帽与银杏叶 | `1024×1024` | **透明 PNG** | 首页标题 / 关于区静物点缀 | ★★☆ 进阶 |
| **07** | `prop-third-eye-locket.png` | 轻水彩微缩静物 | 闭合第三只眼珐琅怀表挂坠 | `1024×1024` | **透明 PNG** | 区块分隔饰件 / 深色模式呼应挂饰 | ★★☆ 进阶 |
| **08** | `prop-optical-lens.png` | 轻水彩微缩静物 | 复古黄铜放大镜与三棱镜 | `1024×1024` | **透明 PNG** | 「研究与论文 / 退化实验」区块装饰 | ★★☆ 进阶 |
| **09** | `prop-garden-notebook.png` | 轻水彩微缩静物 | 敞开的银杏札记本与蘸水笔 | `1024×1024` | **透明 PNG** | 「学习札记」标题旁视觉锚点 | ★★☆ 进阶 |

---

## 二、古明地恋五套多画风立绘（01 ~ 05）

---

### 01 · 光影厚涂风：雨后玻璃花房的恋恋（全天候退化对比主图）

- **文件名**：`assets/koishi-impasto-window.png`
- **尺寸**：`1536×1024`（横幅 3:2，完整场景，无需透明）
- **页面落位**：放入「模糊与天气带走了什么？」对比实验器，作为**古明地恋专属全天候图像退化对比场景**（左半边构图专门布置了远方尖塔、玻璃花房窗格、湖面与细密银杏枝叶，非常适合演示散焦、雾霭、雨丝、飞雪的前后对比）。
- **视觉设定**：
  - **画风**：厚涂油画感日系插画（Painterly Impasto），可见温润的厚重笔触、阳光穿透薄雾的丁达尔光晕、色彩层次饱满高级。
  - **服装**：奶油杏色双排扣短款雨晴斗篷风衣、墨绿细格纹领巾、缀有鹅黄小蝴蝶结的复古茶褐色贝雷帽、深橄榄绿百褶裙；闭合的第三只眼设计为一枚别在胸前的紫炭色珐琅胸饰，细长紫灰心形绳柔和绕过斗篷肩线。
  - **动作**：雨过天晴的欧式玻璃花房走廊边，恋恋位于画面右半侧（膝上七分身），倚着雕花墨绿铁艺窗栏回眸浅笑，右手轻抬去接一片掠过窗前的金色银杏叶，左手扶着一柄收起的透明玻璃长柄伞。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1536x1024 wide horizontal anime oil painting illustration in rich painterly impasto style with visible tactile brushstrokes, luminous sunlit atmosphere, and fine architectural details. Subject: Touhou Project character Koishi Komeiji, recognizable mint-green wavy bob hair, pale sage-green eyes, gentle whimsical smile. Outfit: a stylish cream-beige double-breasted short capelet trench coat over a dark olive pleated skirt, a deep forest-green tartan neck scarf, a vintage charcoal-brown beret decorated with a butter-yellow satin ribbon bow, and her signature closed third eye (gently shut violet-charcoal eyelid with delicate lashes, strictly closed) worn as an ornate brooch at her chest with thin looping purple-grey heart-shaped cords. Pose & Composition: place Koishi on the right half of the frame from head to thighs, leaning gracefully beside an arched botanical conservatory window after a rain shower; one anatomically accurate five-fingered hand reaches softly to catch a drifting golden ginkgo leaf in a sunbeam, the other hand rests lightly on a folded clear glass umbrella handle. Left half of the composition features crisp high-detail scenery through the open iron-framed conservatory window: distant gothic clocktowers, a shimmering sunlit lake, fine botanical ironwork mullions, blooming mist-cleared trees, and golden ginkgo branches with crisp edges and textures. Palette: sunlit ivory, sage green, deep forest emerald, butter ginkgo gold, and soft slate violet. High-craft editorial painterly anime art, complete headroom above beret, no text, no letters, no watermark, no signature.
```

---

### 02 · 日系 Q 版二头身贴纸风：趴在卡片边缘偷看的小恋

- **文件名**：`assets/koishi-chibi-peeker.png`
- **尺寸**：`1024×1024`（**透明背景 PNG**）
- **页面落位**：巧妙「趴」在论文卡片或「庭院的主人」卡片顶部右边缘，像一个小彩蛋探头看着访客读文章；鼠标悬停时可以触发轻微抬头摇晃动效。
- **视觉设定**：
  - **画风**：精致日系 2.2 头身 Q 版插画，暖深棕色细腻柔滑线稿，清透赛璐璐配淡粉水彩腮红，果冻高光眼眸；**不要画粗白贴纸边**（深色主题下无白边才自然高级）。
  - **服装**：宽松软绵的鹅黄色麻花针织开衫、白衬衫配墨绿小领结、标志性的大号黑绒宽檐帽配黄丝带（歪戴一点显得超萌），胸口圆润 Q 版闭合第三只眼与两个小巧心形细绳。
  - **动作**：经典的「扒着桌面/卡片边沿探头」姿势——底部齐平裁切在胸口正下方，两只圆润小手乖乖扶在最底部的隐形水平线上，下巴轻靠手背，好奇地眨一只眼微笑。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1024 cute Japanese chibi anime character illustration isolated on a true transparent PNG background. Subject: Touhou Project character Koishi Komeiji in adorable 2.2-head-tall chibi proportions, fluffy mint-green wavy bob hair, sparkling soft sage-green eyes with jelly highlights, rosy watercolor cheeks, playful winking smile. Outfit: a cozy oversized butter-yellow cable-knit cardigan over a white collar shirt with a tiny forest-green ribbon tie, her oversized black wide-brimmed hat with a big yellow bow tilted playfully on her head, and a cute round closed third eye (strictly closed smiling dark-violet eyelid) at her upper chest with two dainty purple-grey heart-shaped cords curling beside her shoulders. Pose: a "peeking over a ledge" pose—her two small hands rest neatly along an invisible straight horizontal bottom edge, chin resting playfully near her hands as she peeks upward curiously; her torso ends cleanly and flatly along that horizontal line right below her hands and closed third eye so she can sit perched on top of a website card border. Art style: refined modern Japanese chibi illustration, clean warm dark-brown lineart, soft cel shading with gentle painterly gradients, crisp clean alpha silhouette edges, NO thick white sticker outline, NO drop shadow, NO drawn checkerboard pattern, generous empty margin above the hat and on both sides, no text, no watermark.
```

---

### 03 · 博物志淡彩水彩手绘风：抱着笔记簿的森系茶会恋

- **文件名**：`assets/koishi-watercolor-sketch.png`
- **尺寸**：`1024×1536`（竖版 2:3，**透明背景 PNG**）
- **页面落位**：放置在页面底部「庭院的主人（About）」卡片中作为文艺图文插画，与「银杏、光斑与清晰的轮廓」副题呼应，让关于区块瞬间像打开一本精装绘本。
- **视觉设定**：
  - **画风**：日式绘本 / 植物博物志淡彩手绘风（Delicate Ink & Transparent Watercolor），温润细腻的棕褐色钢笔勾线、透明水彩轻柔叠色与纸面微透质感、边缘轻盈通透。
  - **服装**：复古森系田园茶会洋装——鼠尾草绿与奶油白拼接蕾丝滚边长裙、系着淡鹅黄细长丝带的浅色编织草帽、复古棕色系带短靴；闭合第三只眼以细腻水彩绘于胸口丝带结中央，心形细绳化作细巧柔美的藤蔓曲线在裙摆间轻舞。
  - **动作**：轻盈优雅的七分身/全身略侧站姿，左手怀抱一本米色布面硬壳素描本与几片刚拾起的金色银杏叶，右手食指轻点唇边露出会心微笑，微风拂动发丝与裙摆。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1536 vertical delicate Japanese botanical ink-and-watercolor character illustration isolated on a true transparent PNG background. Subject: Touhou Project character Koishi Komeiji, delicate mint-green wavy bob hair catching soft breeze, gentle sage-green eyes, serene whimsical smile. Outfit: a pastoral vintage botanical tea dress in soft sage green and warm cream ivory with delicate lace trim, a woven pale straw sun hat tied with a trailing butter-yellow ribbon, vintage lace-up boots, and her closed third eye (gently shut violet-slate eyelid, strictly closed) nestled on her bodice ribbon with slender heart-shaped purple-grey cords curling gracefully like botanical vines around her skirt. Pose: elegant full-to-three-quarter figure standing in a slight three-quarter turn; one anatomically accurate five-fingered hand cradles a closed linen-bound sketchbook with tucked golden ginkgo leaves against her side, while the other hand lifts a fingertip thoughtfully near her cheek. Art style: refined Japanese storybook watercolor and sepia fine-liner pen sketch, translucent hand-painted watercolor washes, gentle sunlit sage, cream, and ginkgo-gold palette, airy hand-drawn charm, completely isolated figure on clean transparent background with NO drawn background box, NO floor shadow, NO checkerboard, full head, hat, and feet/hem comfortably inside frame with margins, no text, no letters, no watermark.
```

---

### 04 · 32-bit 精致像素风：提着暖灯漫步庭院的小恋

- **文件名**：`assets/koishi-pixel-walk.png`
- **尺寸**：`1024×1024`（**透明背景 PNG**）
- **页面落位**：点缀在「学习札记 · 代码与实验」卡片右下角，或放在页脚版权条旁做像素漫步小彩蛋（点击可触发轻轻一跳和一句话冒泡，致敬程序员 / 二次元双厨浪漫）。
- **视觉设定**：
  - **画风**：高精致度 32-bit 现代日系独立 RPG 像素风（如精品东方同人像素游戏的过场/地图角色比例，约 64×64 ~ 96×96 逻辑像素网格清晰放大），颗粒分明锐利、拒绝糊边与伪像素滤镜、柔和森系限定色盘。
  - **服装**：经典恋恋配色改良旅人装——标志性带黄丝带的黑帽、鹅黄上衣、深绿百褶裙，肩头多披一件带一枚小小金扣的鼠尾草绿短斗篷，像素化的闭合第三只眼与清晰可爱的心形像素细线。
  - **动作**：轻快向左或向右迈步的 3/4 侧面单帧立绘，一只手提着一盏散发暖鹅黄微光的复古小玻璃提灯，脚旁点缀两三片小小的像素金色银杏叶。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1024 crisp 32-bit Japanese indie RPG pixel art character sprite isolated on a true transparent PNG background. Subject: Touhou Project character Koishi Komeiji in charming full-body RPG sprite proportions (designed on a clean ~80x80 pixel grid scaled up crisply with sharp square pixel edges). Recognizable mint-green wavy bob hair, black wide-brimmed hat with yellow ribbon, butter-yellow blouse, dark forest-green skirt, plus a cozy short sage-green traveler capelet fastened with a tiny gold button, and a clearly readable pixel-art closed third eye (strictly closed dark-violet eye) at her chest with dainty looping pixel heart cords. Pose: cheerful three-quarter view mid-stride walking pose, holding a tiny warm glowing brass-and-glass garden lantern in one hand while two tiny golden pixel ginkgo leaves float nearby. Art style: authentic handcrafted modern 32-bit pixel art like high-craft Japanese indie games, limited harmonious palette (mint, sage, forest green, butter gold, warm charcoal, muted lavender), crisp sharp pixel blocks with zero blurry anti-aliasing, zero painterly gradients, clean transparent alpha background, NO checkerboard, NO ground shadow, NO sprite sheet grid, single centered character with generous padding, no text, no watermark.
```

---

### 05 · 复古版画藏书票风：手持光学棱镜的恋恋印章（Ex-Libris）

- **文件名**：`assets/koishi-exlibris-stamp.png`
- **尺寸**：`1024×1024`（**透明背景 PNG**）
- **页面落位**：用于「研究与论文」/「关于我」的典雅水印徽记，或直接印在可打印概览页 [cv.html](file:///d:/D/Sunrikis/cv.html) 右上角，瞬间把个人主页与概览提升到复古博物志精装书级别！
- **视觉设定**：
  - **画风**：欧洲复古藏书票（Vintage Ex-Libris）与细腻木刻铜版线条画风，采用极为克制的**深森林墨绿 + 暖银杏金 + 极淡羊皮纸高光**三色套印风格，线条精密优雅，无任何文字。
  - **服装**：古典维多利亚荷叶领白衬衫、优雅倾斜的经典黑帽与丝带。
  - **构图与动作**：对称的椭圆形银杏叶与植物藤蔓装饰边框内，古明地恋优雅侧身半身像，纤细手指举起一块**透明光学三棱镜**微微端详光线的折射，胸前闭合的第三只眼心形丝绳顺势延伸并与外圈椭圆花环交织成艺术纹样。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1024 vintage botanical Ex-Libris bookplate engraving emblem illustration isolated on a true transparent PNG background. Subject: Touhou Project character Koishi Komeiji in an elegant half-body side-profile portrait framed inside an ornate symmetrical oval wreath of ginkgo leaves and delicate botanical curls. Recognizable mint-green tinted wavy bob hair, tilted wide-brimmed hat with bow, Victorian ruffled-collar scholar blouse, and her closed third eye (strictly closed eyelid) whose slender looping heart-shaped cords weave harmoniously into the surrounding botanical oval frame. Pose: Koishi gently holds up a small faceted optical glass prism with one anatomically accurate five-fingered hand, smiling serenely as fine engraved light rays refract from the prism. Art style: refined vintage woodcut / linocut etching and Art Nouveau linework, limited noble three-tone print palette of deep forest emerald (#244a35), antique ginkgo gold (#cfa84e), and soft pale cream accents, crisp clean ink linework, symmetrical decorative emblem silhouette on pure transparent alpha background, NO text, NO letters, NO Latin motto, NO banner words, NO checkerboard, centered with generous padding.
```

---

## 三、四个「恋恋 × 视觉研究」微缩静物小物件（06 ~ 09）

> 下面 4 张小物件故意统一为**同一种「日式轻水彩 + 细彩铅微缩静物」画风**，且全部要求**纯透明背景 PNG、居中留白、无底面阴影**，这样无论点缀在亮色米白纸面还是深色月夜森林卡片上，都像同一位画师亲手绘制的精致贴画！

---

### 06 · 恋恋的宽檐黑帽与银杏叶

- **文件名**：`assets/prop-koishi-hat.png`
- **尺寸**：`1024×1024`（**透明背景 PNG**）
- **页面落位**：Hero 副区或「庭院的主人」装饰摆件。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1024 charming miniature still-life illustration of an iconic anime character's hat isolated on a true transparent PNG background. Object: Koishi Komeiji's signature soft black wide-brimmed felt hat with a lush butter-yellow satin ribbon tied into a graceful flowing bow on the side, with two translucent golden ginkgo leaves and a tiny mint-green leaf sprig tucked gently into the hatband. Angle: slightly tilted three-quarter floating view showing the soft ruffled brim shape. Art style: delicate Japanese watercolor and fine colored-pencil editorial spot illustration, warm charcoal-black shading with soft sage reflections, luminous butter-gold highlights, clean crisp alpha edges on pure transparent background, NO ground shadow, NO table surface, NO checkerboard, centered with comfortable padding, no text, no watermark.
```

---

### 07 · 闭合的第三只眼珐琅挂坠与心形丝绳

- **文件名**：`assets/prop-third-eye-locket.png`
- **尺寸**：`1024×1024`（**透明背景 PNG**）
- **页面落位**：分区装饰饰件 / 导航或页脚呼应恋恋意象的小徽记。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1024 exquisite miniature jewelry still-life illustration isolated on a true transparent PNG background. Object: an artistic ornamental pendant inspired by Koishi Komeiji's closed third eye—a smooth glossy deep violet-slate enamel medallion rimmed in delicate antique brass gold, featuring a gently curving shut eyelid with graceful dark lashes (strictly closed eye), suspended from slender looping purple-grey silk cords that curve symmetrically into two whimsical heart-shaped loops on either side, with a tiny faceted emerald-green diamond crystal charm dangling neatly underneath. Art style: refined Japanese watercolor and fine sepia ink botanical spot illustration, soft luminous metallic gold sheen and translucent gem highlights, clean crisp alpha silhouette on pure transparent background, NO drop shadow, NO checkerboard, centered with generous padding, no text, no watermark.
```

---

### 08 · 复古黄铜放大镜与光学三棱镜（呼应图像复原研究）

- **文件名**：`assets/prop-optical-lens.png`
- **尺寸**：`1024×1024`（**透明背景 PNG**）
- **页面落位**：「研究与论文」标题装饰或「视觉退化对比」模块左下角点缀。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1024 refined miniature editorial spot illustration of vintage optical instruments isolated on a true transparent PNG background. Object: a delicate antique brass-and-dark-wood handheld magnifying glass resting diagonally beside a clear triangular optical glass prism; subtle ethereal beams of soft mint green, pale sky blue, and warm ginkgo gold glint gently inside the crystal lens and prism, accompanied by two small golden ginkgo leaves resting nearby. Theme: quiet poetic tribute to optical clarity and image restoration. Art style: delicate Japanese watercolor and fine colored-pencil illustration matching a botanical journal aesthetic, crisp luminous glass reflections, warm vintage brass tones, clean transparent alpha background, NO floor shadow, NO table, NO checkerboard, centered with generous padding, no text, no watermark.
```

---

### 09 · 敞开的森系银杏札记本与蘸水笔（呼应学习札记）

- **文件名**：`assets/prop-garden-notebook.png`
- **尺寸**：`1024×1024`（**透明背景 PNG**）
- **页面落位**：「学习札记（Notebook）」区块标题旁视觉点缀。

**GPT-Image Prompt（直接复制）：**
```text
Create a 1024x1024 delicate miniature still-life illustration of a botanical study notebook isolated on a true transparent PNG background. Object: a charming open linen-bound cream-ivory journal seen from a gentle three-quarter overhead angle, its open warm paper pages featuring only faint minimalist botanical sketches of a ginkgo leaf and subtle smooth wave curves (strictly NO readable text, NO letters, NO numbers), a fluttering butter-yellow silk ribbon bookmark tucked in the spine, a pressed golden ginkgo leaf on the page corner, and a sleek deep forest-green wooden dip pen with a vintage brass nib resting diagonally across the right side. Art style: refined Japanese watercolor and fine sepia linework editorial spot illustration, harmonious ivory, sage green, forest emerald, and warm gold palette, clean transparent alpha edges, NO drop shadow, NO desk background, NO checkerboard, centered with generous padding, no text, no letters, no watermark.
```

---

## 四、给 GPT-Image 生图时的实用建议与验收要点

1. **分批生成更稳**：建议一次只发 **1 张** 提示词给 GPT-Image（不要在同一个对话里连续发太多种画风，否则模型容易把上一张的水彩或像素风格串味到下一张；每换一种画风可以新开一个对话）。
2. **透明背景验收**：
   - 02、03、04、05 及 06~09 均需透明底 PNG。如果 GPT-Image 偶尔误把灰白格子画进了图片里，直接回复它：`Re-generate this exact image with a true transparent alpha background. Do not draw any checkerboard pattern or solid box.`
3. **重点检查的细节**：
   - **第三只眼**：确认是温柔闭合的，没有误画成睁眼。
   - **手指与帽檐**：01、03、05 确认五指自然、帽檐顶部与心形丝绳没有被画面边缘裁断。
   - **02（Q 版探头）**：确认底部小手下方平齐截断，方便严丝合缝贴在卡片上边框。
   - **04（像素风）**：放大看边缘是清晰干脆的像素块，没有混入平滑渐变或抗锯齿糊边。
4. **交付方式**：
   - 把你满意的成图按上表文件名存到仓库的 `assets/` 文件夹下（即便尺寸稍大也没关系，接入前我可以帮你做无损/高质 WebP 体积优化，并按每张图的实际构图微调网页落位、深浅主题适配和趣味微交互）。
