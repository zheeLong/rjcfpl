export interface OxfordBook {
  id: string;
  level: string;
  episode: string;
  title: string;
  extensionEn: string;
  extensionCn: string;
  vocabulary: { word: string; phonetic: string; meaning: string }[];
  qa: { question: string; answer: string }[];
}

export interface OxfordLevel {
  id: string;
  name: string;
  description: string;
  bookCount: number;
  color: string;
  books: OxfordBook[];
}

// 牛津树L1级别数据
export const oxfordTreeL1: OxfordLevel = {
  id: "l1",
  name: "Level 1",
  description: "入门级，适合刚开始英语启蒙的孩子，以简单句型和重复句式为主",
  bookCount: 36,
  color: "from-green-400 to-emerald-500",
  books: [
    {
      id: "l1-01",
      level: "undefined",
      episode: "L101",
      title: "Hide and Seek",
      extensionEn: `What can you see on the page? Look, I can see a tree. I can see a wheelbarrow. I can see a house. I can see a box. I can see the long fence. And I can see a boy. What's the boy doing? The boy is facing the fence, counting down. Let's count together, 10,9,8,7,6,5,4,3,2,1. Ready or not? Here I come! And now this boy is going to find everyone. What? Everyone? I don't see anyone, but everyone asks, can you see us? 

 

Found you! And this boy asks, can you see me? Yes, I can see you. Look, this boy is found first, right? And he says can you see me? You're under the wheelbarrow. And now they two are gonna keep looking for others. 

 

Look, these two boys have found the girl inside the house. Okay, and then the girl said, can you see me? And then they said, yes, we can see you.

 

Now 3 children are there, right? And they three are gonna find Kipper. Look, there is Kipper in the box. So Kipper said, can you see me? And then they three said, yes, we can see you. What's that? Oh, look, somebody is in the tree and then there's a broken twig. Oh, no, I think it’s gonna fall down. 

 

Hello, daddy. We can all see dad now. Dad was in the tree and then dad fell into the wheelbarrow.

![img](https://mxdpdkfx24.feishu.cn/space/api/box/stream/download/asynccode/?code=YWVlMzgyY2FjMGU0NDliNWIyZjA4MjgzNzJkOGQ0YzlfajQ1V3hBbzBVZ1lhbGNUZ3ZHTEZTZ0x4NUhEakUwQm1fVG9rZW46WG0zemJtcXdjb3FKVEh4aVlHWGNsa3h0bnllXzE3NTA5MDgxMTA6MTc1MDkxMTcxMF9WNA)`,
      extensionCn: `这页上你能看到什么？看，我能看到一棵树。我能看到一个手推车。我能看到一座房子。我能看到一个盒子。我能看到长长的围栏。我还能看到一个男孩。那个男孩在做什么？那个男孩面对着围栏，在倒计时。我们一起数，10，9，8，7，6，5，4，3，2，1。准备好了吗？我来了！现在这个男孩要去找其他人。什么？其他人？我看不到其他人，但其他人问，你能看到我们吗？

找到了！这个男孩问，你能看到我吗？是的，我能看到你。看，这个男孩首先被找到了，对吧？他说，你能看到我吗？你在手推车下面。现在他们两个要继续找其他人。

看，这两个男孩找到了房子里的女孩。好，然后女孩说，你能看到我吗？然后他们说，是的，我们能看到你。

现在有三个孩子在一起，对吧？他们三个要去找Kipper。看，Kipper在盒子里。于是Kipper说，你能看到我吗？然后他们三个说，是的，我们能看到你。那是什么？哦，看，有人藏在树上，还有一根折断的树枝。哦，不，我想它会掉下来。

你好，爸爸。我们现在都能看到爸爸了。爸爸在树上，然后爸爸掉进了手推车里。

![img](https://mxdpdkfx24.feishu.cn/space/api/box/stream/download/asynccode/?code=MDBiOWE0MDg3OTk3NzNmNWZjODk0ZjMxOTdmZGNlOTVfRGRwT0JIdjk1bzVTbVdTTlRPWm9VSUxqOXdXczcyOTRfVG9rZW46WlkxUmJ0WGxUb21OOEV4UlpjaGM3dTZ6blJkXzE3NTA5MDgxMTA6MTc1MDkxMTcxMF9WNA)`,
      vocabulary: [
        { word: "see", phonetic: "siː", meaning: "看到" },
        { word: "tree", phonetic: "triː", meaning: "树" },
        { word: "wheelbarrow", phonetic: "ˈwiːlˌbær.oʊ", meaning: "独轮手推车" },
        { word: "house", phonetic: "haʊs", meaning: "房子" },
        { word: "box", phonetic: "bɒks", meaning: "盒子" },
        { word: "fence", phonetic: "fɛns", meaning: "篱笆" },
        { word: "count", phonetic: "kaʊnt", meaning: "数数" },
        { word: "ready", phonetic: "ˈrɛdi", meaning: "准备好" },
        { word: "find", phonetic: "faɪnd", meaning: "找到" },
        { word: "everyone", phonetic: "ˈɛvrɪwʌn", meaning: "每个人" },
        { word: "under", phonetic: "ˈʌndər", meaning: "在...下面" },
        { word: "keep", phonetic: "kiːp", meaning: "继续" },
        { word: "broken", phonetic: "ˈbroʊkən", meaning: "破碎的" },
        { word: "twig", phonetic: "twɪɡ", meaning: "小树枝" },
        { word: "fall", phonetic: "fɔːl", meaning: "落下；fell /fɛl/ - 摔倒（fall的过去式）" }
      ],
      qa: [
        { question: "What game are they playing?", answer: "他们在玩什么游戏？" },
        { question: "Who is the seeker?", answer: "谁是寻找者？" },
        { question: "What is the boy doing?", answer: "这个男孩在做什么？" },
        { question: "Where are the hiders?", answer: "躲藏者在哪里？" },
        { question: "Who is this?", answer: "这是谁？" },
        { question: "Where is daddy?", answer: "爸爸在哪里？" },
        { question: "Who is found first/second/third/last?", answer: "谁第一个/第二个/第三个/最后一个被找到？" },
        { question: "What happened to daddy?", answer: "爸爸发生了什么？" },
        { question: "Why did daddy fall?", answer: "为什么爸爸会掉下来？" }
      ]
    },
    {
      id: "l1-02",
      level: "undefined",
      episode: "L102",
      title: "Look at Me",
      extensionEn: `Today we're gonna read this book. Look at me. Wow, look at this boy. He is Chip. And Chip has a big yellow dog called Floppy. What are they doing? Floppy is running and then Chip is riding his bike. Oh, wait a minute. Look at his feet. His feet are not on the pedals. Wow, Chip, are you performing acrobatics? Let's find out. 
 
Look at me, mom. Chip is so happy on his bike. And look at him. He is riding his bike no-handed. No handed? Whoa, that's so dangerous. Don't do it everyone. That's very dangerous to do. Okay, so mom is thinking, whoa, be careful.
 
Alright, and then look at Chip. Chip is really performing acrobatics. Look, he's putting his knee on the seat. And his hands are on the handlebar. But his other foot is up in the air. Oh, no, Chip. But Chip is so happy. Chip is saying, “Look at me, mom”. And mom says, oh, no, that's dangerous. And even Floppy is surprised. What? Now Chip says, “Look at me on my bike”. Well, you're really good at riding a bike. 
 
And then what is Chip doing now? Chip is riding so fast. Chip is speeding. He is going faster and faster. “Look at me, mom”. What are you gonna do now? Look at me on my bike. I'm gonna speed up this bump.Whoa, that's another trick. Chip can do so many kinds of tricks. 
 
And splish, splash, whoa, Chip has just spilled the mud everywhere. Look at me, mom. Oh, no. Oh, I think mom got spilled. Do you think Mommy will be happy now? I think mom will be very angry, very mad. 
 
Oh, look at me. Chip said. No, mom is not so happy. Why not? Because look, Mommy's clothes get so dirty. What do you think chip should say? Sorry, mom, I'm so sorry. I will not do it next time. And mom has to clean her clothes now.`,
      extensionCn: `今天我们要读这本书。看着我。哇，看这个男孩。他是Chip。Chip有一只大黄狗，叫Floppy。他们在做什么呢？Floppy正在跑，而Chip正在骑他的自行车。哦，等一下。看看他的脚。他的脚没放在踏板上。哇，Chip，你是在表演杂技吗？让我们来看看吧。
看着我，妈妈。Chip在他的自行车上非常开心。看看他，他在不用手骑车。不用手？哇，这太危险了。大家千万别这样做。这非常危险。好吧，妈妈在想：哇，小心点。
好啦，然后看看Chip。Chip真的在表演杂技。看，他的膝盖放在车座上。他的手握着车把，但另一只脚翘在空中。哦，不，Chip。但Chip很开心。他说：“看着我，妈妈。”妈妈说：“哦，不，这很危险。”连Floppy都感到惊讶：“什么？”Chip接着说：“看着我骑自行车。”嗯，你骑车真的很棒。
然后Chip现在在干什么？Chip骑得非常快。Chip在加速，他骑得越来越快。“看着我，妈妈。”你现在要做什么？“看着我骑自行车，我要从这个坡上冲过去。”哇，又是一个技巧。Chip能做这么多种技巧。
然后哗啦啦，哇，Chip把泥水洒得到处都是。“看着我，妈妈。”哦，不。我觉得妈妈被溅到了。你觉得妈妈现在会开心吗？我觉得妈妈会很生气，非常生气。
哦，看着我，Chip说。不，妈妈看起来不是很开心。为什么呢？因为看看，妈妈的衣服都变脏了。你觉得Chip应该说什么？“对不起，妈妈，我很抱歉，下次我不会再这样做了。”而妈妈现在得去清洗她的衣服了。`,
      vocabulary: [
        { word: "ride", phonetic: "raɪd", meaning: "骑，乘坐" },
        { word: "bike", phonetic: "baɪk", meaning: "自行车" },
        { word: "pedal", phonetic: "ˈpedl", meaning: "踏板，踩踏板" },
        { word: "perform", phonetic: "pərˈfɔːrm", meaning: "表演，执行" },
        { word: "acrobatic", phonetic: "ˌækrəˈbætɪk", meaning: "杂技的，技巧高超的" },
        { word: "no-handed", phonetic: "noʊ ˈhændɪd", meaning: "不用手的" },
        { word: "knee", phonetic: "niː", meaning: "膝盖" },
        { word: "handlebar", phonetic: "ˈhændlbɑːr", meaning: "自行车或摩托车的车把" },
        { word: "up in the air", phonetic: "ʌp ɪn ðə ɛr", meaning: "悬在空中" },
        { word: "surprise", phonetic: "sərˈpraɪz", meaning: "惊喜，惊讶" },
        { word: "speed", phonetic: "spiːd", meaning: "速度" },
        { word: "speed up", phonetic: "spiːd ʌp", meaning: "加速" },
        { word: "bump", phonetic: "bʌmp", meaning: "碰撞，颠簸" },
        { word: "trick", phonetic: "trɪk", meaning: "技巧，花招" },
        { word: "splash", phonetic: "splæʃ", meaning: "溅，泼" },
        { word: "spill", phonetic: "spɪl", meaning: "溢出，洒出" },
        { word: "mud", phonetic: "mʌd", meaning: "泥巴" },
        { word: "happy", phonetic: "ˈhæpi", meaning: "开心的" },
        { word: "angry", phonetic: "ˈæŋɡri", meaning: "生气的" },
        { word: "mad", phonetic: "mæd", meaning: "疯狂的，愤怒的" },
        { word: "dirty", phonetic: "ˈdɜːrti", meaning: "脏的" }
      ],
      qa: [
        { question: "What is the boy doing?", answer: "他在做什么？" },
        { question: "Look at his hand, does his hand hold the handlebar?", answer: "看他的手，他的手握住车把了吗？" },
        { question: "Do you think it is OK?", answer: "你觉得这样可以吗？" },
        { question: "What is the boy doing now?", answer: "现在这个男孩在做什么？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "What is the boy going to do?", answer: "这个男孩准备做什么？" },
        { question: "What happened?", answer: "发生了什么？" },
        { question: "How does mommy feel?", answer: "妈妈感觉怎么样？" }
      ]
    },
    {
      id: "l1-03",
      level: "undefined",
      episode: "L103",
      title: "Go Away Floppy",
      extensionEn: `Hello everyone. Welcome back to read with Susan. Today we are gonna read Go Away, Floppy. Go away, Susan. Hey, monkey, you can't say that, that is very rude, OK? Now Floppy is a big yellow dog and Floppy wants to play with everyone. They are busy, so they say go away, Floppy. But don't say go away to people. Now let's get started. 
 
Look, this is Kipper. What's Kipper doing? Kipper is painting with his crayons. And he is using a blue crayon to color the sky. And I like crayons. Do you have crayons? Yes, I have crayons. Good. Here comes Floppy. Floppy has a ball in his mouth. And Floppy says play with me. Oh, do you think Kipper wants to play with Floppy? No. So Kipper says go away, Floppy, I am painting. 
 
So Floppy goes to find other children. They are skipping rope. Look! They are doing the two person skip rope. They are skipping the rope. They are swinging the rope. And here comes Floppy. Floppy has a ball and he says play with me. Do you think they want to play with Floppy? No. So they say go away, Floppy, we are skipping. 
 
Mommy and Daddy, what are they doing? They are painting, painting, painting the garage door. They are using the yellow paint, yellow paint. And this is the brush, so Daddy and Mommy are busy painting. Here comes Floppy, play the ball with me. Do you think daddy and mommy can play with Floppy? No. So they say go away, Floppy. We are painting. 
 
Floppy was not so happy and Floppy went away. Floppy put the ball on the lawn. Oh, nobody wanted to play with me. And then everybody came out. Everybody knew that Floppy was not so happy. And they thought that maybe they were wrong by saying go away. So they said come back, Floppy, come back, Floppy, come back. 
 
And they are all playing with Floppy. Look, how happy Floppy is. Look! He is holding a bone. Of course, a dog likes the bone. And Kipper is holding a, I think that is a rabbit, maybe this is one of Floppy's favorite toy. And everyone is playing with Floppy. And then everyone says we are sorry, we are sorry for making you sad, we are sorry for saying go away, Floppy. Don't go away, let's play together.`,
      extensionCn: `大家好，欢迎回到和苏珊一起读书的时间。今天我们要读的是《走开，Floppy》。走开，苏珊。嘿，猴子，你不能这么说，那样很粗鲁，好吗？现在Floppy是一只大黄色的狗，Floppy想和大家一起玩。他们很忙，所以他们说：“走开，Floppy。” 但不要对人说“走开”。现在，让我们开始吧。
看，这就是Kipper。Kipper在做什么？Kipper在用蜡笔画画。他用蓝色的蜡笔给天空涂色。我喜欢蜡笔。你有蜡笔吗？是的，我有蜡笔。很好。这里来了Floppy，Floppy嘴里叼着一个球。Floppy说：“和我玩吧。” 哦，你觉得Kipper想和Floppy玩吗？不想。所以Kipper说：“走开，Floppy，我在画画。”
于是Floppy去找其他小朋友玩。他们在跳绳。看！他们在跳双人跳绳。他们在跳绳，他们在摇动绳子。然后Floppy来了，Floppy嘴里叼着一个球，说：“和我玩吧。” 你觉得他们想和Floppy玩吗？不想。所以他们说：“走开，Floppy，我们在跳绳。”
爸爸妈妈在做什么？他们在画画，画车库门。他们在用黄色的油漆，黄色的油漆。这是刷子，所以爸爸和妈妈正在忙着画画。这里来了Floppy，拿着球来找爸爸妈妈玩。你觉得爸爸妈妈能和Floppy玩吗？不能。所以他们说：“走开，Floppy，我们在画画。”
Floppy不太开心，Floppy走开了。Floppy把球放在草坪上。哦，没人想和我玩。然后每个人都出来了。每个人都知道Floppy不太开心，他们觉得说“走开”可能是错的。所以他们说：“回来吧，Floppy，回来吧，Floppy，回来吧。”
他们都和Floppy玩了。看，Floppy多开心啊。看！他拿着一根骨头。当然，狗狗喜欢骨头。Kipper拿着，我想那是一只兔子，也许这是Floppy最喜欢的玩具之一。每个人都和Floppy玩。然后每个人说：“对不起，对不起让你伤心了，对不起说了‘走开，Floppy’，不要走开，我们一起玩吧。”`,
      vocabulary: [
        { word: "Rude", phonetic: "ruːd", meaning: "粗鲁的，无礼的" },
        { word: "Go away", phonetic: "ɡəʊ əˈweɪ", meaning: "离开，走开" },
        { word: "Come back", phonetic: "kʌm bæk", meaning: "回来" },
        { word: "Paint", phonetic: "peɪnt", meaning: "画，涂（颜料）" },
        { word: "Crayon", phonetic: "ˈkreɪən", meaning: "蜡笔" },
        { word: "Rope", phonetic: "rəʊp", meaning: "绳子" },
        { word: "Skip rope", phonetic: "skɪp rəʊp", meaning: "跳绳" },
        { word: "Swing", phonetic: "swɪŋ", meaning: "摇摆，秋千" },
        { word: "Garage", phonetic: "ɡəˈrɑːʒ", meaning: "车库" },
        { word: "Brush", phonetic: "brʌʃ", meaning: "刷子，刷" },
        { word: "Busy doing sth", phonetic: "ˈbɪzi ˈduːɪŋ ˈsʌmθɪŋ", meaning: "忙于做某事" },
        { word: "Lawn", phonetic: "lɔːn", meaning: "草坪" },
        { word: "Hold", phonetic: "hoʊld", meaning: "拿着，持有" },
        { word: "Bone", phonetic: "boʊn", meaning: "骨头" }
      ],
      qa: [
        { question: "What's the dog's name?", answer: "它的名字是什么？" },
        { question: "What is Floppy doing?", answer: "Floppy在做什么？" },
        { question: "What is the boy doing?", answer: "男孩在做什么？" },
        { question: "Does the boy want to play with Floppy?", answer: "男孩想和Floppy玩吗？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "Do they want to play with Floppy?", answer: "他们想和Floppy玩吗？" },
        { question: "What are daddy and mommy doing?", answer: "爸爸妈妈在做什么？" },
        { question: "Do daddy and mommy want to play with Floppy?", answer: "爸爸妈妈想和Floppy玩吗？" },
        { question: "How does Floppy feel?", answer: "Floppy感觉怎么样？" },
        { question: "Why is Floppy sad?", answer: "为什么Floppy感到难过？" },
        { question: "How does Floppy feel?", answer: "Floppy感觉怎么样？" },
        { question: "Why is Floppy happy?", answer: "为什么Floppy感到开心？" }
      ]
    },
    {
      id: "l1-04",
      level: "undefined",
      episode: "L104",
      title: "Reds and Blues",
      extensionEn: `Today we are gonna continue reading Oxford Reading Tree and toady we are gonna read reds and blues, two colors. Reds and blues? My favorite colors. I am so happy you like it, monkey. Now what do you think they are doing? Are they running? 
 
Yes, they are running to have a football match. Now, look, we are all in red. Red? What color is red? They are wearing a red shirt. Is Susan in red? No, Susan is in yellow. What about you, monkey? Ah, you are in blue, I love blue. Look, they are ready to have a football match. 
 
We are all in blue. Look, blue, blue, blue, blue, blue, blue. They are wearing a blue shirt too, and blue socks. What color are your socks, Susan? My socks are black, what about you? I am not wearing socks. Ha, you are cute! OK, now they are practicing, they want to win! 
 
Oh, look, the reds are forwarding, forward, forward! And the blues are trying to stop them, defend, defend! Look, he is the goalkeeper. His job is to stop the ball from getting into the goal. And we are gonna cheer for them. OK, come on the reds! Come on the blues! Read after me, everyone! Come on the blues. 
 
Oh, I have a question. Who is in red? I can't see it clearly because I think they are getting a little bit muddy. Because they fall, they get mud onto their shirts. And this girl passes the ball to her with the head,! Wow, this is so cool! And this is a bicycle kick, bicycle kick! Who is in blue? I know Biff is in blue, look at the bow tie! 
 
Eh oh, we are all muddy. Look at them! I can't tell who is in red and who is in blue now. And I have a question which team do you think has won? Let's take a look, I don't know if they get the goal and I don't know if they get the goal here. And they all look very happy. Oh, I know monkey, do you know the answer? I know! It's a tie, 0 to 0. Yes, I figure out the same thing. Look, everyone is happy. Usually, the winners are happy and the losers are sad. But they are all happy, so it's a tie.`,
      extensionCn: `今天我们要继续读《Oxford Reading Tree》，今天我们要读《红色和蓝色，两个颜色》。红色和蓝色？我最喜欢的颜色。你喜欢它，我真开心，猴子。现在你觉得他们在做什么？他们在跑步吗？
是的，他们在跑步，准备进行一场足球比赛。现在，看，我们都穿着红色的衣服。红色？红色是什么颜色？他们穿着红色的衬衫。Susan穿红色的吗？不，Susan穿的是黄色的。你呢，猴子？啊，你穿的是蓝色的，我喜欢蓝色。看，他们准备好进行足球比赛了。
我们都穿蓝色的衣服。看，蓝色，蓝色，蓝色，蓝色，蓝色，蓝色。他们也穿着蓝色的衬衫，还有蓝色的袜子。Susan，你的袜子是什么颜色？我的袜子是黑色的，你呢？我没有穿袜子。哈，你真可爱！好了，现在他们在练习，他们想赢！
哦，看看，红队在向前冲，向前，向前！蓝队在努力阻止他们，防守，防守！看，他是守门员。他的工作是阻止球进门。我们要为他们加油。好，加油红队！加油蓝队！大家跟我一起读！加油蓝队！
哦，我有个问题。谁穿红色的衣服？我看不太清楚，因为我觉得他们有点脏了。因为他们摔倒了，衣服上沾上了泥巴。这女孩用头把球传给她！哇，这真酷！这是一个倒挂金钩！倒挂金钩！谁穿蓝色的衣服？我知道Biff穿蓝色，看那条领结！
哎呀，我们都弄脏了。看看他们！我现在看不出谁穿红色，谁穿蓝色了。我有个问题，你觉得哪个队赢了？让我们来看看，我不知道他们是否进球，也不知道他们是否在这里进球。每个人看起来都很开心。哦，我知道了，猴子，你知道答案吗？我知道！是平局，0比0。是的，我也得出同样的结论。看，大家都很开心。通常，赢家会很开心，输家会很伤心。但他们都很开心，所以是平局。`,
      vocabulary: [
        { word: "Match", phonetic: "mætʃ", meaning: "比赛" },
        { word: "Wear", phonetic: "wɛər", meaning: "穿，戴" },
        { word: "Shirt", phonetic: "ʃɜːt", meaning: "衬衫" },
        { word: "Sock", phonetic: "sɒk", meaning: "袜子" },
        { word: "Practice", phonetic: "ˈpræktɪs", meaning: "练习" },
        { word: "Forward", phonetic: "ˈfɔːwəd", meaning: "向前，前进；前锋（在足球等运动中）" },
        { word: "Defend", phonetic: "dɪˈfɛnd", meaning: "防守，辩护" },
        { word: "Goalkeeper", phonetic: "ˈɡəʊlˌkiːpər", meaning: "守门员" },
        { word: "Cheer", phonetic: "tʃɪə(r)", meaning: "欢呼，加油" },
        { word: "Clearly", phonetic: "ˈklɪəli", meaning: "清楚地，明显地" },
        { word: "Muddy", phonetic: "ˈmʌdi", meaning: "泥泞的，脏的" },
        { word: "Bicycle kick", phonetic: "ˈbaɪsɪkl kɪk", meaning: "倒挂金钩（足球动作）" },
        { word: "Bow tie", phonetic: "baʊ taɪ", meaning: "蝴蝶结领结" },
        { word: "Tell", phonetic: "tɛl", meaning: "告诉" },
        { word: "Goal", phonetic: "ɡəʊl", meaning: "目标，进球" },
        { word: "Tie", phonetic: "taɪ", meaning: "平局" },
        { word: "Figure out", phonetic: "ˈfɪɡər aʊt", meaning: "弄清楚，理解" }
      ],
      qa: [
        { question: "What is this?", answer: "它是什么？" },
        { question: "What color are they wearing?", answer: "他们穿什么颜色的衣服？" },
        { question: "What color are they wearing?", answer: "他们穿什么颜色的衣服？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "Who is this?", answer: "这是谁？" },
        { question: "Who is this?", answer: "这是谁？" },
        { question: "Can you tell who is in red or who is in blue?", answer: "你能分辨谁穿红色，谁穿蓝色吗？" },
        { question: "Why are they muddy?", answer: "为什么他们很脏？" },
        { question: "Which team do you think has won?", answer: "你觉得谁赢了？" },
        { question: "Why?", answer: "为什么？" }
      ]
    },
    {
      id: "l1-05",
      level: "undefined",
      episode: "L105",
      title: "Big Feet",
      extensionEn: `Today we are gonna read this book, it's called big feet. Susan, do you have big feet? Yeah, Susan has very big feet! What about you, monkey? I think I have small feet. Yes, you are right, you have small feet. What about the children? Do they have big feet? This is Biff, this is Kipper, and this is Chip. I think they have very small feet, just like you, monkey. Do you have big feet or small feet? You say I have small feet, I have small feet. Good job. Now let's get started. 
 
Ah, wow, what are they? They look so big. Big footprints! Look, it had snowed. This boy is called Chip. And Chip opened the door and said, wow, giant footprints. What are they? Come and look at this. So Chip is calling everyone, everyone, come come come, come and look at this. Super big footprints! 
 
Wow! And then here comes Biff! And Biff got wow so many big footprints, wow do you think they belong to a monster? I don't know. So Biff said come and look at this, come come come, come and look at this. Is it a big monster? Monkey, do you think it is a big monster? I don't know, maybe. It's so scary. 
 
And here comes Kipper, Kipper goes wow look at the footprints. So everyone, let's read it together, come and look at this. Is it a big dinosaur? So Kipper thinks it is a big dinosaur. Do you think so? Maybe! 
 
Then here comes mom. Come and look at this. Is it a big giant? A giant is very very big and very very tall. Is it a big giant? What do you think, monkey? What is it? What is it? 
 
Oh, look, it is dad. No. It is dad. What's dad wearing? It's a special kind of shoe, right? Animal footprint shoes! I want to try this. Do you want to try it? You say I want to try them on. I want to try them on. Very good! Hahaha, it's daddy, look, it's daddy!`,
      extensionCn: `今天我们要读这本书，它叫《大脚》。Susan，你有大脚吗？是的，Susan有很大的脚！那你呢，猴子？我觉得我有小脚。是的，你说得对，你有小脚。那这些孩子呢？他们有大脚吗？这是Biff，这是Kipper，这是Chip。我觉得他们有非常小的脚，就像你一样，猴子。你有大脚还是小脚？你说我有小脚，我有小脚。做得很好！现在我们开始吧。
啊，哇，那是什么？它们看起来好大。大脚印！看，它下雪了。这个男孩叫Chip。Chip打开门，说，哇，巨大的脚印。它们是什么？快来看这个。所以Chip在喊大家，大家，快快快，快来看这个。超级大的脚印！
哇！然后Biff来了！Biff看到，哇，真多的大脚印，哇，你觉得它们是怪物的吗？我不知道。所以Biff说，快来看这个，快快快，快来看这个。是大怪物吗？猴子，你觉得是大怪物吗？我不知道，也许吧。真吓人。
然后Kipper来了，Kipper说，哇，看这些脚印。所以大家，一起读，快来看这个。是大恐龙吗？所以Kipper认为那是大恐龙。你觉得呢？也许吧！
然后妈妈来了。快来看这个。是大巨人吗？巨人非常非常大，非常非常高。是大巨人吗？你觉得怎么样，猴子？那是什么？那是什么？
哦，看，是爸爸。不是。是爸爸。爸爸穿什么鞋？是特别的鞋子，对吧？动物脚印鞋！我想试试这个。你想试试吗？你说我想试试它们。我想试试它们。很好！哈哈哈，是爸爸，看，是爸爸！`,
      vocabulary: [
      ],
      qa: [
        { question: "Who is the boy?", answer: "他是谁？" },
        { question: "What are these?", answer: "这些是什么？" },
        { question: "Are they big or small?", answer: "它们是大还是小？" },
        { question: "Who is the girl?", answer: "她是谁？" },
        { question: "Who do the footprints belong to?", answer: "这些脚印是谁的？" },
        { question: "What is Biff thinking?", answer: "Biff在想什么？" },
        { question: "Who is the boy?", answer: "他是谁？" },
        { question: "What is Kipper thinking?", answer: "Kipper在想什么？" },
        { question: "Who is this?", answer: "她是谁？" },
        { question: "What is mommy thinking?", answer: "妈妈在想什么？" },
        { question: "Who is this?", answer: "他是谁？" },
        { question: "What's on daddy's feet?", answer: "爸爸脚上穿着什么？" },
        { question: "Who made the footprints?", answer: "谁留下了这些脚印？" }
      ]
    },
    {
      id: "l1-06",
      level: "undefined",
      episode: "L106",
      title: "Kipper's Diary",
      extensionEn: `Today we are gonna read Kipper's Diary. This is Kipper, this is Floppy. And what's Kipper doing? Monkey, do you know it? Kipper is writing a diary. Susan, what is a diary? A diary is about your life. You write or draw pictures in it about your life. I have a diary, do you have a diary? No, I don't have one yet. Don't worry about it, let's read about Kipper's life. 
 
Monday! Wow, pitter-patter, pitter-patter! It's raining. It's pouring. It's such a wet day. It's raining. Kipper, why are you standing in the rain? You might get cold. It was a wet day. So much water, it's wet, wet, wet. 
 
Tuesday! Woo,woo, says the wind. It was a windy day. Look, all the leaves are flying in the sky. Where is Kipper going with his mom? Oh, the pet shop. What can you see in the pet shop? Rabbit? Puppy? And more rabbits? And here is a little chicken and some rats. Funny! I went to the shops. Maybe they are thinking of buying some pets. What do you want, monkey? I want another monkey, I need a friend. Oh, what a cute monkey! I am your friend, right? 
 
It's Wednesday. It was a sunny day. Really? Yes, yes, yes, the sun. It must be very warm. Where are they? I went to the pool. This is the swimming pool, swimming pool. Look, what's this? This is called inflatable. You can sit on it like a boat. What's this? This is a diving board. 321! Splish and splash! Diving to the swimming pool! Where is Kipper? Maybe this one. Kipper is swimming. Monkey, can you swim? No, I don't think so. Kipper can swim. Can you swim, everyone? I can swim. Good job! 
 
Then it's Thursday! What a big sun! It must be a good day. It was a hot day. I am so hot. Are you hot? I am so hot. Where is Kipper? Kipper is here in the park. I went to the park with daddy. Do you like going to the park? Yes, I like going to the park. Good job, everyone! You can play on the slide. you can play on the swing. 
 
You can drive a bumper car. Wow, that was a lot of fun. Woo, woo, boom. I love the bumper cars. It was a fun day. A fun day means you are happy. Are you happy? Yes, I am having a fun day too, reading to you!`,
      extensionCn: `今天我们要读《Kipper的日记》。这是Kipper，这是Floppy。Kipper在做什么？Monkey，你知道吗？Kipper在写日记。Susan，什么是日记？日记是关于你的生活的。你可以在里面写字或画画，记录你的生活。我有一本日记，你有吗？没有，我还没有。不用担心，我们来读读Kipper的生活吧。
星期一！哇，滴答滴答，滴答滴答！下雨了。下得好大！是个非常湿的日子。正在下雨。Kipper，你为什么站在雨里？你可能会感冒哦。这是个湿漉漉的日子。好多水，湿漉漉，湿漉漉，湿漉漉。
星期二！呼呼，呼呼，风在吹。这是个刮风的日子。看，所有的叶子都在空中飞舞。Kipper和妈妈要去哪儿？哦，是宠物店。你在宠物店里能看到什么？兔子？小狗？还有更多的兔子？这是一只小鸡，还有一些老鼠。好有趣！我去了商店。也许他们在考虑买一些宠物。Monkey，你想要什么？我想要另一个猴子，我需要一个朋友。哦，多可爱的猴子啊！我不就是你的朋友吗，对吧？
星期三。今天是个晴天。真的吗？是的，是的，是的，有太阳。一定很暖和。他们在哪儿？我去了游泳池。这是游泳池，游泳池。看，这是什么？这个叫充气玩具。你可以坐在上面，就像一艘船。这是什么？这是跳水板。3、2、1！扑通！跳进游泳池！Kipper在哪儿？也许在这里。Kipper在游泳。Monkey，你会游泳吗？不，我想我不会。Kipper会游泳。大家会游泳吗？我会游泳。干得好！
然后是星期四！好大的太阳！一定是个好天气。这是个炎热的日子。我好热。你热吗？我好热。Kipper在哪儿？Kipper在公园里。我和爸爸去了公园。你喜欢去公园吗？是的，我喜欢去公园。干得好，大家！你可以玩滑梯，可以玩秋千。
你可以开碰碰车。哇，太有趣了。嗖嗖，砰。我喜欢碰碰车。这是个有趣的日子。有趣的日子意味着你很开心。你开心吗？是的，我也很开心，读书给你听！`,
      vocabulary: [
        { word: "diary", phonetic: "ˈdaɪəri", meaning: "日记" },
        { word: "rain", phonetic: "reɪn", meaning: "雨" },
        { word: "raining", phonetic: "ˈreɪnɪŋ", meaning: "正在下雨" },
        { word: "pour", phonetic: "pɔːr", meaning: "倾盆而下" },
        { word: "wet", phonetic: "wet", meaning: "湿的" },
        { word: "get cold", phonetic: "ɡɛt kəʊld", meaning: "感冒" },
        { word: "wind", phonetic: "wɪnd", meaning: "风" },
        { word: "windy", phonetic: "ˈwɪndi", meaning: "刮风的" },
        { word: "pet shop", phonetic: "ˈpɛt ˌʃɒp", meaning: "宠物店" },
        { word: "warm", phonetic: "wɔːrm", meaning: "温暖的" },
        { word: "swimming pool", phonetic: "ˈswɪmɪŋ ˌpuːl", meaning: "游泳池" },
        { word: "inflatable", phonetic: "ɪnˈfleɪtəbl", meaning: "充气玩具" },
        { word: "diving board", phonetic: "ˈdaɪvɪŋ ˌbɔːrd", meaning: "跳水板" },
        { word: "", phonetic: "wɒt ə", meaning: "多么……" },
        { word: "park", phonetic: "pɑːrk", meaning: "公园" },
        { word: "slide", phonetic: "slaɪd", meaning: "滑梯" },
        { word: "swing", phonetic: "swɪŋ", meaning: "秋千" },
        { word: "bumper car", phonetic: "ˈbʌmpər ˌkɑːr", meaning: "碰碰车" }
      ],
      qa: [
        { question: "What day is it today?", answer: "今天星期几？" },
        { question: "What day is it today?", answer: "今天星期几？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "What day is it today?", answer: "今天星期几？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "What day is it today?", answer: "今天星期几？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "What day is it today?", answer: "今天星期几？" },
        { question: "What is Kipper doing?", answer: "Kipper 在做什么？" },
        { question: "How does Kipper feel?", answer: "Kipper 感觉如何？" }
      ]
    },
    {
      id: "l1-07",
      level: "undefined",
      episode: "L107",
      title: "What Dogs Like",
      extensionEn: `Today we are gonna read about what dogs like. Why aren't we reading about what monkeys like? Because, just because… OK, first we are gonna read about dogs, then we are gonna read about monkeys one day. OK? What dogs like? Do you know what dogs like? I don't know, let's find out. 
 
This is Biff. Biff is reading a book about what dogs like. Dogs like to play. Really? Yes, look! Floppy is a dog. Floppy is playing the tennis ball. Dogs like to play. Yes, that's right. 
 
Then, oh, where are they? They are outside. Kipper is walking Floppy. Wow, look, Kipper is sweating. And Kipper is holding the leash. They like to walk. Dogs like to walk. Do you like to walk? Yes, I like to walk. Floppy likes to walk. So that's so true. 
 
What is Floppy doing now? Floppy is sleeping, sleeping. I know they like to sleep. Floppy likes to sleep too. Do you like to sleep? Yes, I like to sleep. Good job! 
 
Then what are they doing in the yard? Floppy is running. And they are running after Floppy. So the children, Kipper and Chip are running after Floppy. They are chasing, they are chasing Floppy. They like to run. Floppy likes to run. Susan likes to run. Monkey, do you like to run? No, I don't. I like to stay in the tree. Lazy monkey! 
 
Oh, look at Floppy! Do you think Floppy is happy? No, Floppy is looking like this, er…So that means I don't like it, I don't like it. Er oh! There is something dogs don't like. Dogs like a bath. What? The book says dogs like a bath. Look at Floppy. Floppy hates this. Hate, hate! I don't like it. Floppy hates this. So this is not so true, right? I hate a bath too. Well, you shouldn't. Because having bath is fun. Look at all the bubbles. POP! So many bubbles! Why? Because look, daddy has used shampoo. I like the bubbles.`,
      extensionCn: `今天我们要读的是关于狗狗喜欢什么的。为什么我们不读关于猴子喜欢什么呢？因为……就是因为……好吧，首先我们读关于狗狗的内容，然后某一天我们再读关于猴子的内容，好吗？狗狗喜欢什么？你知道狗狗喜欢什么吗？我不知道，我们一起来看看吧。
这是Biff。Biff正在读一本关于狗狗喜欢什么的书。狗狗喜欢玩耍。真的吗？是的，看！Floppy是一只狗。Floppy正在玩网球。狗狗喜欢玩耍。是的，没错。
然后，哦，他们在哪里？他们在外面。Kipper正在遛Floppy。哇，看，Kipper在流汗。Kipper拿着狗绳。他们喜欢散步。狗狗喜欢散步。你喜欢散步吗？是的，我喜欢散步。Floppy也喜欢散步。所以这是真的。
现在Floppy在做什么？Floppy正在睡觉，睡觉。我知道它们喜欢睡觉。Floppy也喜欢睡觉。你喜欢睡觉吗？是的，我喜欢睡觉。做得好！
然后他们在院子里做什么呢？Floppy在跑。孩子们也在跑着追Floppy。所以孩子们，Kipper和Chip正在追赶Floppy。他们在追，他们在追Floppy。他们喜欢跑步。Floppy喜欢跑步。Susan喜欢跑步。猴子，你喜欢跑步吗？不，我不喜欢。我喜欢待在树上。懒猴子！
哦，看Floppy！你觉得Floppy开心吗？不，Floppy看起来像这样，嗯……这意味着我不喜欢，我不喜欢。哦！有些东西是狗狗不喜欢的。书上说狗狗喜欢洗澡。什么？书上说狗狗喜欢洗澡。看Floppy，Floppy讨厌这个。讨厌，讨厌！我不喜欢。Floppy讨厌洗澡。所以这不完全是真的，对吧？我也讨厌洗澡。嗯，你不应该讨厌，因为洗澡很有趣。看这么多泡泡！POP！好多泡泡！为什么呢？因为看，爸爸用了洗发水。我喜欢这些泡泡。`,
      vocabulary: [
        { word: "Find out", phonetic: "faɪnd aʊt", meaning: "找出；发现" },
        { word: "Tennis ball", phonetic: "ˈtɛnɪs bɔːl", meaning: "网球" },
        { word: "Outside", phonetic: "ˌaʊtˈsaɪd", meaning: "外面" },
        { word: "Walk", phonetic: "wɔːk", meaning: "散步" },
        { word: "Sweat", phonetic: "swɛt", meaning: "出汗" },
        { word: "Leash", phonetic: "liːʃ", meaning: "狗绳；牵引绳" },
        { word: "Yard", phonetic: "jɑːrd", meaning: "院子" },
        { word: "Chase", phonetic: "tʃeɪs", meaning: "追赶" },
        { word: "Lazy", phonetic: "ˈleɪzi", meaning: "懒惰的" },
        { word: "Bath", phonetic: "bæθ", meaning: "洗澡" },
        { word: "Hate", phonetic: "heɪt", meaning: "讨厌" },
        { word: "Bubble", phonetic: "ˈbʌbl", meaning: "泡泡" },
        { word: "Pop", phonetic: "pɒp", meaning: "（泡泡）破裂；啪的一声" },
        { word: "Shampoo", phonetic: "ʃæmˈpuː", meaning: "洗发水" }
      ],
      qa: [
        { question: "What is Biff doing?", answer: "- Biff正在读一本关于狗的书。" },
        { question: "What does the book say?", answer: "- 书上说狗喜欢玩。" },
        { question: "What does the book say?", answer: "- 书上说狗喜欢散步。" },
        { question: "What is Kipper doing?", answer: "- Kipper正在带Floppy散步。" },
        { question: "What does the book say?", answer: "- 书上说狗喜欢睡觉。" },
        { question: "What is Floppy doing?", answer: "- Floppy正在睡觉。" },
        { question: "What does the book say?", answer: "- 书上说狗喜欢跑步。" },
        { question: "Does Floppy like to run?", answer: "- 是的，Floppy喜欢跑步。" },
        { question: "What does the book say?", answer: "- 书上说狗喜欢洗澡。" },
        { question: "What is Daddy doing?", answer: "- 爸爸正在给Floppy洗澡。" },
        { question: "Does Floppy like baths?", answer: "- 不，Floppy看起来不高兴。" }
      ]
    },
    {
      id: "l1-08",
      level: "undefined",
      episode: "L108",
      title: "Presents for Dad",
      extensionEn: `Today we are gonna read this book. It's called Presents for Dad. What's wrong with dad? Oh, no! Dad is lying in bed in hospital, Look at this! Oh, no! Dad has got a broken leg. Broken leg! Broken leg! Because, look, there is the cast, cast, cast. Poor daddy! I think the family are going to see daddy and give daddy some presents. I want a present. Do you want to lie in bed? Er, I don't think so. Now let's get started and read! 
 
Look! Hi, daddy! Hi, everyone! Wow, mom, Biff, Chip and Kipper are coming to see daddy! Look! Kipper is talking to the nurse. This is for dad. This is for dad. What are they? Grapes, green grapes! Monkey, do you like green grapes? Yes, I do, but I like bananas better. Do you like green grapes? Yes, I like green grapes! 
 
They are saying hi to daddy! This is for you, dad. It is a bunch of flowers, a bunch of flowers. Are they beautiful? Yes! When we see a sick person, we need to take the flowers. This is a bunch of flowers. This is Chip. And Chip says this is for you, dad. What do you think dad should say? Thank you, thank you, Chip. Very good!
 
Here comes Biff. Biff is holding a box of chocolates. Chocolate will make you feel happy too! This is for you, dad. It is a box of chocolates. Do you like chocolates? Yes, I like chocolates. 
 
And then this is Kipper. This is for you, dad. Dad says thank you! It is a bunch of grapes. Many many grapes. Why are there only two grapes left? It's not really a bunch. 
 
But anyway, look, here comes mom. That is a kiss. You know a kiss can show that you love somebody. Mom loves dad, so mom kisses dad. Does mommy kiss you? Yes, my mom kisses me and says I love you. This is for the best dad of all. You are the best dad ever. So I love you.`,
      extensionCn: `今天我们要读这本书。它的名字叫《给爸爸的礼物》。爸爸怎么了？哦，不！爸爸躺在医院的床上。看看这个！哦，不！爸爸的腿骨折了。骨折了！骨折了！因为，看，这里有石膏，石膏，石膏。可怜的爸爸！我觉得这个家人要去看爸爸，还会给爸爸一些礼物。我想要一个礼物。你想躺在床上吗？呃，我不觉得。所以我们开始阅读吧！
看！嗨，爸爸！嗨，大家好！哇，妈妈、比夫、奇普和基珀来看爸爸了！看！基珀在和护士说话。这是给爸爸的。这是给爸爸的。这是什么？葡萄，绿色的葡萄！小猴子，你喜欢绿色的葡萄吗？是的，我喜欢，但我更喜欢香蕉。你喜欢绿色的葡萄吗？是的，我喜欢绿色的葡萄！
他们在和爸爸打招呼！这是给你的，爸爸。这是一束花，一束花。它们漂亮吗？是的！当我们去看望病人的时候，我们需要带花。这是一束花。这是奇普。奇普说这是给你的，爸爸。你觉得爸爸应该说什么？谢谢你，谢谢你，奇普。非常好！
接下来是比夫。比夫拿着一盒巧克力。巧克力也会让人感到快乐！这是给你的，爸爸。这是一盒巧克力。你喜欢巧克力吗？是的，我喜欢巧克力。
然后这是基珀。这是给你的，爸爸。爸爸说谢谢！这是一串葡萄。好多好多葡萄。为什么只剩下两颗葡萄了？这可不算是一串呀。
但无论如何，看，这里是妈妈。那是一个吻。你知道一个吻可以表达你爱某人。妈妈爱爸爸，所以妈妈亲了爸爸。妈妈会亲你吗？是的，我的妈妈会亲我，还会说我爱你。这是给最棒爸爸的。你是最棒的爸爸。所以我爱你。`,
      vocabulary: [
      ],
      qa: [
        { question: "Where are they?", answer: "他们在哪里？" },
        { question: "Where is daddy?", answer: "爸爸在哪里？" },
        { question: "What's wrong with daddy?", answer: "爸爸怎么了？" },
        { question: "What is Kipper doing?", answer: "基珀在做什么？" },
        { question: "What does Chip get for daddy?", answer: "奇普给爸爸带了什么？" },
        { question: "What is Kipper doing?", answer: "基珀在做什么？" },
        { question: "What does Biff get for daddy?", answer: "比夫给爸爸带了什么？" },
        { question: "What is Kipper doing?", answer: "基珀在做什么？" },
        { question: "What is Kipper doing?", answer: "基珀在做什么？" },
        { question: "How many grapes can you see?", answer: "你能看到几颗葡萄？" },
        { question: "Where are the other grapes?", answer: "其他的葡萄在哪里？" },
        { question: "What is Biff doing?", answer: "比夫在做什么？" },
        { question: "What is mommy doing?", answer: "妈妈在做什么？" },
        { question: "How do the kids feel?", answer: "孩子们感觉如何？" }
      ]
    },
    {
      id: "l1-09",
      level: "undefined",
      episode: "L109",
      title: "Top Dog",
      extensionEn: `Woof, woof, woof! Why do we hear so many dogs barking? Because we are at a pet show, or we should say it is a dog show. A dog show? I want to go to a monkey show. We are watching a monkey show. We are gonna find out who is gonna be the top dog. Let's get started. 
 
Look, it is a dog show. So many dogs! I see a yellow dog. I see a dog with many dots, a very small dog. This dog is scratching its head. There is a black dog with very curly fur. Wow, they are so cute. I love them. Do you like dogs? I like them. Good job! Look at all the dogs, look, look, look, look at all the dogs. Which one do you like best? I like Floppy.
 
We like this dog. Look, this is the judge and this is the judge too. And the judge is giving out an award. And here it says the third place, because it's so small, right? This is a little dog, a little, very very little, so cute! 
 
Wow, look at this dog! It's so big! We like this dog. This is a big dog. Do you like this big dog? I think I like it, maybe I can ride on it. So this dog got the second place, the second place. What about Floppy? I don't know! 
 
We all like this dog. This dog is so tall, so thin, and so elegant. What? The first prize? So this must be the top dog. Indeed it is very beautiful. It's white. It's tall. It's thin. And it's elegant. We all like this dog. This is the top dog. Wait a minute, but look at Floppy. Floppy is sad. I haven't got an award. 
 
And then back home. What are they doing? They are having their own ceremony. It says best of all, because everyone loves Floppy. And for this family, Floppy is the best! So we like floppy best of all, because Floppy is our dog. So here is your cup, take it please. Now Floppy is so happy! Am I the best monkey of all? Of course, monkey you are the best monkey of all, just like Floppy. Floppy is the best dog of all.`,
      extensionCn: `汪汪汪！为什么我们听到这么多狗在叫？因为我们在一个宠物展，或者应该说这是一个狗展。狗展？我想去看猴子展。我们正在看一个猴子展哦。我们要来看看谁会成为最佳狗狗。让我们开始吧！
看，这是一个狗展！好多狗啊！我看到一只黄色的狗。我看到一只身上有许多斑点的狗，还有一只非常小的狗。这只狗正在抓头。还有一只黑色的狗，有着非常卷的毛。哇，它们好可爱！我喜欢它们。你喜欢狗吗？我喜欢它们。干得好！看看所有的狗，看看，看看，看看所有的狗。你最喜欢哪只狗？我喜欢弗洛皮。
我们喜欢这只狗。看，这位是裁判，这位也是裁判。裁判正在颁奖。这上面写着第三名，因为它太小了，对吧？这是一只小狗，一只非常非常小的小狗，太可爱了！
哇，看这只狗！它好大啊！我们喜欢这只狗。这是一只大狗。你喜欢这只大狗吗？我觉得我喜欢它，也许我可以骑在它身上。所以这只狗得了第二名，第二名。那弗洛皮呢？我不知道！
我们都喜欢这只狗。这只狗好高，好瘦，而且非常优雅。什么？第一名？所以这一定是最佳狗狗了。确实，它非常漂亮。它是白色的。它很高。它很瘦。而且很优雅。我们都喜欢这只狗。这是最佳狗狗。等等，可是看看弗洛皮。弗洛皮很伤心。我没有得奖。
然后回到家里。他们在做什么？他们在举办自己的颁奖典礼。上面写着最棒的，因为每个人都爱弗洛皮。而对于这个家庭来说，弗洛皮是最棒的！所以我们最喜欢弗洛皮，因为弗洛皮是我们的狗。这是你的奖杯，请拿好。现在弗洛皮好开心！我是最棒的猴子吗？当然了，小猴子，你是最棒的猴子，就像弗洛皮是最棒的狗狗一样。`,
      vocabulary: [
      ],
      qa: [
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "Where is Floppy?", answer: "弗洛皮在哪里？" },
        { question: "What is the man doing?", answer: "那个人在做什么？" },
        { question: "What prize does the dog get?", answer: "这只狗得了什么奖？" },
        { question: "What prize does the dog get?", answer: "这只狗得了什么奖？" },
        { question: "How does the dog feel?", answer: "这只狗感觉如何？" },
        { question: "How does Floppy feel?", answer: "弗洛皮感觉如何？" },
        { question: "Why is Floppy unhappy?", answer: "为什么弗洛皮不开心？" },
        { question: "What prize does the dog get?", answer: "这只狗得了什么奖？" },
        { question: "What color is the dog?", answer: "这只狗是什么颜色的？" },
        { question: "Do you like the dog?", answer: "你喜欢这只狗吗？" },
        { question: "How does Floppy feel?", answer: "弗洛皮感觉如何？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "How does Floppy feel?", answer: "弗洛皮感觉如何？" },
        { question: "Why do they make a prize and award for Floppy?", answer: "他们为什么为弗洛皮制作奖并颁发？" }
      ]
    },
    {
      id: "l1-10",
      level: "undefined",
      episode: "L110",
      title: "Look after Me",
      extensionEn: `Today, we are gonna read Look after Me. What does look after me mean? Look after means to take care of you. For example, when you are a baby, you can only cry, and you can only lie in bed, you need someone to take care of you. When you are hungry, your mom feeds you. When you want to go pee-pee, or go poo-poo, your mommy is going to help you, too. So look after means someone comes to take care of you. Look, here we have a little girl. How old do you think she is? Maybe 3 or 5 years old, I am not sure. And then here is Biff, Chip, and Wilma, they are older kids, they are bigger, so they come here to look after the little girl. Can you do it, monkey? No, I need somebody to look after me. Yes, you are tiny, too. So let's find out what happened. 
 
Look, where are they? I think they are in a funfair, do you think so? This is Kate. She is Kate. She is a very little girl. 
 
And then, woo, ok, here is an elephant. Do you know where they are? Yes, they are in the zoo. And what is Kate doing here? Oh, Kate is climbing up, climb, climb, climb. She went up the net. So this is the net. Hey, everyone, can you go up the net? Yes, I can go up the net. Good job! And then Kate says I like this, she said. Wow, she is so happy. Look, she is climbing up. But wait a minute! Do you think they are having fun? No, they look worried. Worried, why? I know, because, hey, Kate, be careful, you might fall down, so they are worried about Kate's safety. 
 
What do you see here? Wow, so many balls! I want to go in there. Hey, monkey, calm down. I know you love it! Everybody, do you know what this is? This is called a ball pit, ball pit. I love ball pit, it's so much fun! I like jumping into it. Splish! Splash! I have so much fun. 
 
Look, this is Kate. After Kate climbed up the net, she can go down the slide, shoo! Do you love playing on the slide? Yes, I love the slide. Good job! Wee, and then she is having fun, she is gonna go into the balls. Wow, that's so happy. Do you think they are having fun? No, they still looked worried. What are they worried about? It is so much fun. When you are having fun, you have to be careful too. Because if you are going down too fast, boom, you might hurt yourself, so, well, sometimes you need to be careful even when you are having fun. 
 
Wow, so I see the space. Here we have many many stars! This one is the sun, and this one is the moon, this is the space shuttle. It is a space shuttle. This girl, Kate is climbing up the ladder. She is trying to go inside. So, she went up the ladder. I like this, she said. Wow, Kate is so happy. But do you think they are happy? They still looked worried. That's right! What are they worried about? Monkey, do you know it? They are worried that she might fall down? Good job, monkey! They are worried that she might fall down. So be careful, Kate! 
 
And finally, after a whole day at the funfair, there she is. Kate is sleeping in the pram, so soundly! We like this, said Biff. Look, they are so happy that Kate is sleeping. Why? Why are they so happy, monkey, do you know it? I don't know. Because they had fun in the funfair? Well, do you think so, everyone? No, actually, it's because, look, they were tired looking after Kate. Kate was so energetic, running here and there, and finally Kate was sleeping, so they think, whoo! We don't need to be worried anymore.`,
      extensionCn: `今天，我们要阅读《照顾我》（Look after Me）。"Look after me"是什么意思？ "Look after" 的意思是照顾你。比如，当你还是个婴儿时，你只能哭，只能躺在床上，需要有人来照顾你。当你饿了，你的妈妈会喂你；当你想去小便或者大便时，你的妈妈也会帮助你。所以 "look after" 的意思是有人来照顾你。
看，这里有一个小女孩。你觉得她几岁？也许是 3 岁或 5 岁，我不确定。还有比夫（Biff）、奇普（Chip）和威尔玛（Wilma），他们是年纪更大的孩子，更高大一些，所以他们来照顾这个小女孩。猴子，你能做到吗？不，我需要有人照顾我。是的，你也很小。所以我们来看看接下来发生了什么。
看，他们在哪里？ 我想他们在游乐园，你觉得呢？这是凯特（Kate）。她是凯特，一个非常小的小女孩。
然后，哇哦，嗯，看，这是一头大象。你知道他们在哪里吗？是的，他们在动物园。凯特在做什么呢？哦，凯特正在往上爬，爬呀爬呀爬。她爬上了网。这是网。嘿，大家，你们能爬上网吗？是的，我能爬上去。干得好！然后凯特说：我喜欢这个！她说。哇哦，她看起来好开心。看，她正在往上爬。但等一下！你觉得他们玩得开心吗？不，他们看起来很担心。担心？为什么？我知道了，因为，嘿，凯特，小心点，你可能会摔下来，所以他们在担心凯特的安全。
你在这里看到了什么？ 哇，好多球啊！我想进去！嘿，猴子，冷静点。我知道你喜欢！大家知道这是什么吗？这叫做球池（ball pit）。我喜欢球池，太有趣了！我喜欢跳进去。扑通！哗啦！我玩得好开心。
看，这是凯特。凯特爬上网之后，她可以滑下滑梯。嗖！你喜欢玩滑梯吗？是的，我喜欢滑梯。干得好！嗖——然后她玩得很开心，她会滑进那些球里。哇，太高兴了。你觉得他们玩得开心吗？不，他们还是看起来很担心。他们在担心什么？这明明很有趣啊。当你玩得开心的时候，你也需要小心。因为如果你滑得太快，砰！你可能会伤到自己。所以，有时候，即使玩得开心，你也需要小心。
哇哦，我看到太空了。 这里有好多好多星星！这是太阳，这是月亮，这是太空飞船。它是太空飞船。这个女孩，凯特，正在爬梯子。她试图爬进去。所以她爬上了梯子。我喜欢这个！她说。哇，凯特看起来很高兴。但是你觉得他们高兴吗？他们还是看起来很担心。对了！他们担心什么呢？猴子，你知道吗？他们担心她会摔下来吗？干得好，猴子！他们担心她会摔下来。所以小心点，凯特！
最后，经过一天的游乐园活动之后，凯特睡着了。她睡在婴儿车里，睡得好香！我们喜欢这样。比夫说。看，他们很高兴，因为凯特睡着了。为什么？为什么他们这么高兴？猴子，你知道吗？我不知道。是因为他们在游乐园玩得开心？嗯，你觉得呢，大家？不，其实是因为，看，他们照顾凯特已经累了。凯特精力充沛，到处跑来跑去，最后凯特终于睡着了，所以他们觉得，呼！我们终于不用再担心了。`,
      vocabulary: [
        { word: "look after", phonetic: "lʊk ˈæf.tər", meaning: "照顾" },
        { word: "take care of", phonetic: "teɪk keər əv", meaning: "照顾" },
        { word: "lie in bed", phonetic: "laɪ ɪn bed", meaning: "躺在床上" },
        { word: "hungry", phonetic: "ˈhʌŋ.ɡri", meaning: "饥饿的" },
        { word: "feed", phonetic: "fiːd", meaning: "喂养" },
        { word: "pee-pee", phonetic: "ˈpiː.piː", meaning: "（儿童语）小便" },
        { word: "poo-poo", phonetic: "ˈpuː.puː", meaning: "（儿童语）大便" },
        { word: "funfair", phonetic: "ˈfʌn.feər", meaning: "游乐场" },
        { word: "elephant", phonetic: "ˈel.ɪ.fənt", meaning: "大象" },
        { word: "tiny", phonetic: "ˈtaɪ.ni", meaning: "微小的" },
        { word: "zoo", phonetic: "zuː", meaning: "动物园" },
        { word: "climb up", phonetic: "klaɪm ʌp", meaning: "爬上去" },
        { word: "net", phonetic: "net", meaning: "网" },
        { word: "be careful", phonetic: "bi ˈkeə.fəl", meaning: "小心" },
        { word: "worried", phonetic: "ˈwʌr.id", meaning: "担心的" },
        { word: "fall down", phonetic: "fɔːl daʊn", meaning: "摔下来" },
        { word: "safety", phonetic: "ˈseɪf.ti", meaning: "安全" },
        { word: "calm down", phonetic: "kɑːm daʊn", meaning: "冷静下来" },
        { word: "ball pit", phonetic: "bɔːl pɪt", meaning: "球池" },
        { word: "jump", phonetic: "dʒʌmp", meaning: "跳跃" },
        { word: "go down", phonetic: "ɡəʊ daʊn", meaning: "下去" },
        { word: "hurt", phonetic: "hɜːt", meaning: "受伤" },
        { word: "space shuttle", phonetic: "speɪs ˈʃʌt.əl", meaning: "太空飞船" },
        { word: "ladder", phonetic: "ˈlæd.ər", meaning: "梯子" },
        { word: "soundly", phonetic: "ˈsaʊnd.li", meaning: "香甜地（睡觉）" },
        { word: "pram", phonetic: "præm", meaning: "婴儿车" },
        { word: "tired", phonetic: "ˈtaɪəd", meaning: "累的" },
        { word: "energetic", phonetic: "ˌen.əˈdʒet.ɪk", meaning: "精力充沛的" }
      ],
      qa: [
        { question: "Who is this?", answer: "这是谁？" },
        { question: "What is Kate doing?", answer: "凯特在做什么？" },
        { question: "How does Kate feel?", answer: "凯特感觉怎么样？" },
        { question: "How do the other kids feel?", answer: "其他孩子感觉怎么样？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "What is Kate doing?", answer: "凯特在做什么？" },
        { question: "How does Kate feel?", answer: "凯特感觉怎么样？" },
        { question: "How do the other kids feel?", answer: "其他孩子感觉怎么样？" },
        { question: "What is Kate doing?", answer: "凯特在做什么？" },
        { question: "Why are the kids always worried?", answer: "为什么孩子们一直都很担心？" },
        { question: "How do the other kids feel?", answer: "其他孩子感觉怎么样？" },
        { question: "Why are they happy?", answer: "为什么他们开心？" }
      ]
    },
    {
      id: "l1-11",
      level: "undefined",
      episode: "L111",
      title: "Go On, Mum!",
      extensionEn: `Today we are gonna read this book. It's called Go On, Mum! Go On, Mum? What is Mum doing? I think Mum is tying her shoelace. Look, shoelace, this is shoelace. She is tying it up. Monkey, can you tie your shoelace? I don't think I have shoes. Oh, yeah, you are right. OK, now let's find out what's happening here. 
 
I see so many Mums. What are they doing here? And there is a person in soldier's uniform. Oh, I see. Look, here it says army training ground. So people come here to get the military training. And this is Mum's fun run. So all the Mums will run and it is not just normal run. It's fun run. Let's find out how fun it is. Here we see Chip. And Chip is saying, Go on, Mum, said Chip. 
 
Wow, it's indeed so much fun. Look, I see a very long log, so long. And this log is placed over a big muddy puddle and then all the Mums have to run, run, run, run across the log. Wow, it's so difficult. Do you think you can do it? No, I will be just like her, splish, splash, falling to the water. Er-oh. Go on, Mum, said Biff. There is Biff, and Biff said, go on, Mum. Keep going! Well Mum said, I am going, said Mum, I am going. 
 
And then wow, look, they must climb up this cargo net. Wow, it is so difficult. You have to be really strong to climb up that one. And then here comes Kipper. Look, Kipper is right here. And Kipper says, Go on, Mum, said Kipper, Go on, Mum. And then Mum goes. I am going, she said. Oh, look, Mum is not very happy, maybe because it is too difficult. 
 
Oh, what? Oh, my! Look at Mummy, Mummy gets so muddy, because Mummy had to go in the muddy puddles, or maybe you call that a river or anyway, it is so muddy. And then you see these things, these are beams, so they have to go under the beams. Oh, on my god! Look at her, she is spiting muddy water, oh no, I don't want to do it. monkey, do you want to do it? I don't want to do it. OK, then here comes Dad, Dad says go on, go on, said Dad. And then Mum says I am going, said Mum. I don't think Mummy is so happy about this run. And then look at the soldier, she goes go on, go on. It's not easy to be a good solder. 
 
Look, here it says, lap two. What does a lap two mean? Was there a lap one? Oh, yes, look, she is holding a sign that says lap one. A lap is a circle. So you have to go everything once, and lap two would be everything twice, and what about lap three? Everything three times! Yes, that's right. But do you think she wants to do everything all over again? Oh, no, here comes Mum. And Mum says, I am not going again. Oh, Mum has decided to quit. Why? Look at her shoes. She gets so muddy and she has a lot of mud inside her shoe. So, everybody, I have a question for you. Do you want to go on the second lap? I don't want to. Mum, you are great enough.`,
      extensionCn: `今天我们要读这本书。它的名字叫《加油，妈妈！》。加油，妈妈？妈妈在做什么呢？我觉得妈妈正在系鞋带。看，鞋带，这就是鞋带。她正在系好它。猴子，你会系鞋带吗？我觉得我没有鞋。哦，对，你说得对。好吧，那我们看看这里发生了什么。
我看到很多妈妈。她们在这里做什么？还有一个穿军装的人。哦，我明白了。看，这里写着军训场地。所以人们来这里接受军事训练。而这是妈妈趣味跑。所有的妈妈都会跑步，而且这不仅是普通的跑步，是趣味跑步。让我们来看看有多有趣吧。这里我们看到奇普。奇普说，加油，妈妈！奇普说。
哇，确实很有趣。看，我看到了一根很长很长的原木，好长。这根原木架在一个大泥坑上，所有的妈妈都必须跑、跑、跑、跑过这根原木。哇，这太难了。你觉得你能做到吗？不，我会像她一样，扑通，扑通掉进水里。哦，不。比夫说，加油，妈妈！那是比夫，比夫说，加油，妈妈！继续！妈妈说，我在加油呢，妈妈说，我在加油呢。
然后，哇，看，她们必须爬上这个网格绳。哇，这太难了。你必须非常强壮才能爬上去。然后基珀来了。看，基珀就在这里。基珀说，加油，妈妈！基珀说，加油，妈妈！然后妈妈继续说，我在加油呢。哦，看，妈妈似乎不太高兴，也许是因为太难了。
哦，什么？哦，天哪！看看妈妈，妈妈变得好脏，因为妈妈必须走进泥坑，或者你可以称它为小河，不管怎样，真的很泥泞。然后你看这些东西，这些是横梁，所以她们必须从横梁下爬过去。哦，天哪！看她，她还在吐泥水。哦，不，我不想做这个。猴子，你想做吗？我不想做。好吧，然后爸爸来了。爸爸说，加油，加油！爸爸说。然后妈妈说，我在加油呢，妈妈说。我觉得妈妈对这个跑步并不是特别高兴。然后看看那个士兵，她也在说，加油，加油！成为一个好士兵可不容易。
看，这里写着第二圈。第二圈是什么意思？是不是还有第一圈？哦，对，看，她手里拿着一个牌子，上面写着第一圈。圈是一个完整的回合。所以你必须把所有的项目都走一遍，而第二圈就是把所有的项目都走两遍，那第三圈呢？就是把所有的项目都走三遍！对了，就是这样。但你觉得妈妈还想再做一遍吗？哦，不，妈妈来了。妈妈说，我不再跑了。哦，妈妈决定放弃了。为什么呢？看她的鞋子。鞋子里全是泥，而且鞋子都湿透了。所以，大家，我问你们一个问题：你们想跑第二圈吗？我不想跑了。妈妈，你已经够棒的了！`,
      vocabulary: [
        { word: "tie", phonetic: "taɪ", meaning: "系，绑" },
        { word: "tying", phonetic: "ˈtaɪɪŋ", meaning: "正在系，绑" },
        { word: "shoelace", phonetic: "ˈʃuː.leɪs", meaning: "鞋带" },
        { word: "soldier", phonetic: "ˈsəʊl.dʒər", meaning: "士兵" },
        { word: "uniform", phonetic: "ˈjuː.nɪ.fɔːrm", meaning: "制服" },
        { word: "army", phonetic: "ˈɑːr.mi", meaning: "军队" },
        { word: "military", phonetic: "ˈmɪl.ɪ.ter.i", meaning: "军事的，军用的" },
        { word: "indeed", phonetic: "ɪnˈdiːd", meaning: "确实，的确" },
        { word: "log", phonetic: "lɒɡ", meaning: "原木" },
        { word: "place", phonetic: "pleɪs", meaning: "放置，地方" },
        { word: "muddy puddle", phonetic: "ˈmʌd.i ˈpʌd.l", meaning: "泥泞的水坑" },
        { word: "across", phonetic: "əˈkrɒs", meaning: "穿过" },
        { word: "cargo", phonetic: "ˈkɑːr.ɡoʊ", meaning: "货物" },
        { word: "beam", phonetic: "biːm", meaning: "横梁" },
        { word: "split", phonetic: "splɪt", meaning: "劈开，裂开" },
        { word: "lap", phonetic: "læp", meaning: "一圈" },
        { word: "circle", phonetic: "ˈsɜːr.kəl", meaning: "圆" },
        { word: "once", phonetic: "wʌns", meaning: "一次" },
        { word: "twice", phonetic: "twaɪs", meaning: "两次" },
        { word: "three times", phonetic: "ˈθriː taɪmz", meaning: "三次" },
        { word: "decide", phonetic: "dɪˈsaɪd", meaning: "决定" },
        { word: "quit", phonetic: "kwɪt", meaning: "放弃，退出" },
        { word: "second", phonetic: "ˈsek.ənd", meaning: "第二" },
        { word: "enough", phonetic: "ɪˈnʌf", meaning: "足够的" }
      ],
      qa: [
        { question: "What can you see on the page?", answer: "你在这一页上看到了什么？" },
        { question: "Who is this?", answer: "这是谁？" },
        { question: "Can you see Kipper?", answer: "你能看到基珀吗？" },
        { question: "Who else can you see?", answer: "你还能看到谁？" },
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "What happened to this Mommy?", answer: "这个妈妈发生了什么事？" },
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "What is Kipper doing?", answer: "基珀在做什么？" },
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "Why is Mommy covering her nose?", answer: "为什么妈妈捂着鼻子？" },
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "Mommy is so dirty, why?", answer: "妈妈为什么这么脏？" },
        { question: "How does Mommy feel?", answer: "妈妈感觉怎么样？" },
        { question: "What does Mommy say?", answer: "妈妈说了什么？" }
      ]
    },
    {
      id: "l1-12",
      level: "undefined",
      episode: "L112",
      title: "Go Away, Cat",
      extensionEn: `Today we are gonna read Go Away, Cat. Go away? What does go away mean? Shoo, shoo, shoo, go away! Don't stay here. Why not? Maybe because they don't like cats. I don't like the cats. What's wrong with the cats? Oh, look at them. I think they look happy, maybe they like cats. They just want the cat to go away for some reason. Let's find out. 
 
Here comes Biff. And Biff says hey, meow, meow, hello, cat. And the cat opens one eye. And then the cat says, what's up? What's wrong? I am sleeping on the lawn. And then Biff said, go away, little cat. Go away, don't stay here, this is our lawn. 
 
Now here comes Kipper. And the cat walks, walks, walks to Kipper's feet. So obviously, the cat likes Kipper. And the cat is snuggling, snuggling. Oh, but Kipper says, go away, little cat, go away, don't stay here. Why not? Here is the reason. A dog is coming! A dog? I don't see a dog. Oh, I remember, they have a yellow dog called Floppy. So do you think Floppy will like the cat? No, because you know, cats and dogs, they never like each other. Every time they see each other, they are gonna fight. 
 
So here come Chip, and Chip says, come on, go away, little cat, go away. What is the cat doing? The cat is licking, licking its own paw. Cat, please, a big dog is coming. It's a very big dog. Here comes Floppy! 
 
Woof, woof, woof! Oh, no! Floppy is coming to catch the cat. And look how terrified the cat is. Meow! Go away, little cat, now, go away, be quick! Floppy is coming. Oh, my! And look, all of them look really worried. Oh, no! Do you think the cat should go away? If you think so, let's say it together, everyone, together, go away, little cat, go away! 
 
Eh, oh! Wait a second! I don't think the cat needs to go away! What's happening here? Oh, my! So Floppy is terrified, Floppy is scared. And Floppy is running away. The cat is chasing Floppy. Oh, no! What a cool cat! Er, oh!`,
      extensionCn: `今天我们要读《走开，猫》。走开？走开是什么意思？嗖嗖嗖，走开！不要待在这里。为什么不让它待在这？也许是因为他们不喜欢猫。我不喜欢猫。猫怎么了？哦，看他们的表情。我觉得他们看起来很开心，也许他们喜欢猫。他们只是出于某种原因想让猫走开。让我们一起来看看发生了什么吧。
看，比夫来了。比夫说：嘿，喵喵喵，你好，猫。猫睁开一只眼睛，然后猫说：怎么了？出什么事了？我正在草坪上睡觉呢。然后比夫说：走开，小猫。走开，不要待在这里，这是我们的草坪。
现在基珀来了。猫走啊走啊走到基珀的脚边。显然，这只猫喜欢基珀。猫在蹭啊蹭啊。哦，但是基珀说：走开，小猫，走开，不要待在这里。为什么呢？这里有原因。一只狗来了！狗？我没看到狗。哦，我记得，他们有一只黄色的狗叫弗洛皮。你觉得弗洛皮会喜欢猫吗？不会，因为你知道，猫和狗总是互相讨厌。每次他们见到对方，他们都会打起来。
然后奇普来了，奇普说：拜托，走开，小猫，走开。猫在干什么？猫正在舔舔自己的爪子。猫，拜托，一只大狗来了。一只非常大的狗！看，弗洛皮来了！
汪汪汪！哦，不！弗洛皮来了，它要追猫了。看看这只猫有多害怕。喵！走开，小猫，现在走开，快一点！弗洛皮来了。哦，天哪！看，他们都显得非常担忧。哦，不！你觉得猫应该走开吗？如果你觉得应该，让我们一起说：走开，小猫，走开！
嗯，等等！我不觉得猫需要走开！发生什么了？哦，天哪！原来弗洛皮害怕了，弗洛皮害怕得逃跑了。而猫正在追弗洛皮。哦，不！这只猫太酷了！嗯，哦！`,
      vocabulary: [
        { word: "go away", phonetic: "ɡoʊ əˈweɪ", meaning: "走开" },
        { word: "find out", phonetic: "faɪnd aʊt", meaning: "发现；弄清楚" },
        { word: "reason", phonetic: "ˈriːzən", meaning: "原因" },
        { word: "what's up", phonetic: "wʌts ʌp", meaning: "怎么了" },
        { word: "what's wrong", phonetic: "wʌts rɔːŋ", meaning: "出什么事了" },
        { word: "obviously", phonetic: "ˈɑːbviəsli", meaning: "明显地" },
        { word: "snug", phonetic: "snʌɡ", meaning: "依偎；舒适" },
        { word: "fight", phonetic: "faɪt", meaning: "打架；战斗" },
        { word: "lick", phonetic: "lɪk", meaning: "舔" },
        { word: "paw", phonetic: "pɔː", meaning: "爪子" },
        { word: "catch", phonetic: "kætʃ", meaning: "抓住" },
        { word: "terrified", phonetic: "ˈtɛrəˌfaɪd", meaning: "害怕的；恐惧的" },
        { word: "scare", phonetic: "skɛr", meaning: "惊吓；害怕" },
        { word: "chase", phonetic: "tʃeɪs", meaning: "追逐；追赶" }
      ],
      qa: [
        { question: "What is this?", answer: "这是什么？" },
        { question: "What color is the cat?", answer: "这只猫是什么颜色的？" },
        { question: "Who is this?", answer: "这是谁？" },
        { question: "Who is behind the door?", answer: "门后是谁？" },
        { question: "What is the cat doing?", answer: "猫在做什么？" },
        { question: "Do you think the cat likes Kipper?", answer: "你觉得猫喜欢基珀吗？" },
        { question: "Look at Kipper's hand. He is holding it out. What is he doing?", answer: "看看基珀的手，他伸出手在做什么？" },
        { question: "Why?", answer: "为什么？" },
        { question: "What is the cat doing?", answer: "猫在做什么？" },
        { question: "What is Biff looking at?", answer: "比夫在看什么？" },
        { question: "What is behind the door?", answer: "门后是什么？" },
        { question: "What is Floppy doing?", answer: "弗洛皮在做什么？" },
        { question: "How does the cat feel?", answer: "猫感觉怎么样？" },
        { question: "How do the kids feel?", answer: "孩子们感觉怎么样？" },
        { question: "Why are they worried?", answer: "为什么他们会担心？" },
        { question: "What happened on this page?", answer: "这一页发生了什么？" },
        { question: "How do the kids feel?", answer: "孩子们感觉怎么样？" },
        { question: "Do you think the cat is brave?", answer: "你觉得这只猫勇敢吗？" }
      ]
    },
    {
      id: "l1-13",
      level: "undefined",
      episode: "L113",
      title: "The Sandcastle",
      extensionEn: `Susan, Susan, I am so bored. monkey, where are you? Why are you so bored? I am at the beach and I have nothing to do. What? Monkey, you are at the beach and you have nothing to do? Come on! Today we are gonna read this book, and I am gonna teach you a fun game to play at the beach. Let's make the sandcastle. Hello, everyone, are you ready to read with monkey? Let's get started. First of all, I want you to look at the cover. That's our family. Mommy, Kipper, Biff, and Chip. Wow, they are looking at a poster. What does the poster say? It says enter the sandcastle competition. What's a competition? It's a very long word. But don't worry about it. Com, pe, ti, tion. When you see a long word, you cut, cut, cut, cut it into small parts and you will be able to read it. Com, pe, ti, tion. Competition. What's a competition? It's a game. A lot of people are playing together and we will see who builds the greatest, the most beautiful sandcastle. Let's get started. I believe they want to enter this game. 
 
So there they are, our family. Everyone is carrying a lot of tools. So Chip had a box. Where is the box? There! Wow, it's such a big box. They are trying to find a good spot to build their sandcastle. 
 
Look, they are patting, patting, patting. So he put sand in it. That's Chip. Chip puts sand in it. Pat it flat, he said. Pat it flat, pat it flat, pat, pat, pat, pat it flat. So that it will look like a building. That's really a good idea. 
 
Now look everyone, the first layer has been done. Now Kipper has a smaller box. Look, look, it's a smaller box. And in Kipper's hands, you can see a small orange bucket, bucket. And Kipper is pouring sand into it. So Kipper had a box. Kipper had a box. And he put sand in it. He put sand in it. And I wonder what mom and dad are doing? Oh, look! Mom is reading, we are reading too. And what about dad? Dad is playing his foot. Funny dad! 
 
And then, Biff had a bucket. Where is Biff? There she is. Look at Biff's bucket! It's red and it has a very weird shape, right? And she is getting sand in it. And she put sand in it. I think that's really cool. What about dad and mom? What are they doing? They are both looking, they are looking at the children. Look, Kipper has just removed the box. Wow! Two layers, really cool! 
 
And then, there are some people coming to watch. I think they must believe that this sandcastle is really cool. And then Biff put the bucket on top and gently, gently lifted it up. Look, one two three, three layers. Wow that's really cool. What's mommy doing here? Mommy is taking pictures for them. Good, she said. Wow, it's so pretty. What about Kipper? What do you think Kipper is doing? I see many, many shells, shells. How many? One two three four five, bla, bla, so many. You can pick up some shells on the beach. 
 
And then it was a sandcastle. And they have made some stairs over there. It was a good sandcastle. It's so pretty. 
 
Look, everyone is coming to look. And they have got the first prize. Amazing! Wow, congratulations, you guys are really cool! It was the best sandcastle. Now, monkey, do you know what to play? Yes, we can build a sandcastle at the beach.`,
      extensionCn: `苏珊，苏珊，我好无聊。猴子，你在哪里？你为什么这么无聊？我在海滩上，我不知道该干什么。什么？猴子，你在海滩上却不知道干什么？拜托！今天我们要读这本书，我要教你一个在海滩上玩的有趣游戏。让我们来建一个沙堡吧！大家好，准备好和猴子一起读书了吗？让我们开始吧。首先，我想让你看封面。那是我们的家人。妈妈、基珀、比夫和奇普。哇，他们在看一张海报。海报上写了什么？它说参加沙堡比赛。Competition 是什么？这是一个很长的单词。但别担心。分开读：com、pe、ti、tion。当你看到一个长单词时，把它切成小部分，这样你就能读了。com、pe、ti、tion。比赛是什么？比赛是一个游戏。很多人一起玩，我们会看看谁建造了最大的、最漂亮的沙堡。让我们开始吧。我相信他们想参加这个比赛。
看，他们来了，我们的家人。每个人都拿着很多工具。奇普拿了一个箱子。箱子在哪里？在那里！哇，那是一个大箱子。他们正在找一个合适的地方建沙堡。
看，他们在拍打沙子。他们往模具里装沙子。这是奇普。奇普把沙子放进模具里。把它拍平，他说。把它拍平，拍平，拍，拍，拍，把它拍平。这样它看起来像一栋建筑物。这真是个好主意。
现在大家看，第一层已经完成了。基珀拿了一个更小的模具。看，基珀手上有一个小橙色的桶。基珀正在往里面倒沙子。基珀有一个模具。他把沙子放进模具里。我想知道爸爸和妈妈在干什么？哦，看！妈妈在看书，我们也在看书。爸爸呢？爸爸在玩他的脚，真有趣！
然后，比夫拿了一个桶。比夫在哪里？在那里！看看比夫的桶！是红色的，而且形状很奇怪，对吗？她正在往里面装沙子。她把沙子放进去了。我觉得这真是太酷了。爸爸和妈妈在干什么？他们都在看孩子们。看，基珀刚刚移开了模具。哇！两层，真酷！
接着，有一些人来看。他们一定觉得这个沙堡真的很棒。然后比夫把桶放在顶部，小心翼翼地拿起来。看，一、二、三，三层。哇，真棒！妈妈在干什么？妈妈正在给他们拍照。很好，她说。哇，太漂亮了。基珀呢？你觉得基珀在干什么？我看到许多许多的贝壳。贝壳有多少？一二三四五，等等，太多了。你可以在海滩上捡贝壳。
然后，这就是一个沙堡了。他们还在那里做了一些楼梯。这是一个很棒的沙堡，太漂亮了！
看，所有人都来看。他们得了第一名。太棒了！哇，祝贺你们，真的很棒！这是最好的沙堡。现在，猴子，你知道在海滩上玩什么了吗？是的，我们可以在海滩上建一个沙堡。`,
      vocabulary: [
        { word: "beach", phonetic: "biːtʃ", meaning: "海滩" },
        { word: "sandcastle", phonetic: "ˈsændˌkɑːsl", meaning: "沙堡" },
        { word: "poster", phonetic: "ˈpoʊstər", meaning: "海报" },
        { word: "competition", phonetic: "ˌkɑːmpəˈtɪʃn", meaning: "比赛" },
        { word: "tool", phonetic: "tuːl", meaning: "工具" },
        { word: "set", phonetic: "set", meaning: "放置" },
        { word: "pat", phonetic: "pæt", meaning: "轻拍" },
        { word: "flat", phonetic: "flæt", meaning: "平坦的" },
        { word: "layer", phonetic: "ˈleɪər", meaning: "层" },
        { word: "bucket", phonetic: "ˈbʌkɪt", meaning: "桶" },
        { word: "pour", phonetic: "pɔːr", meaning: "倒入" },
        { word: "wonder", phonetic: "ˈwʌndər", meaning: "想知道" },
        { word: "weird", phonetic: "wɪrd", meaning: "奇怪的" },
        { word: "on top", phonetic: "ɑːn tɑːp", meaning: "在顶上" },
        { word: "gently", phonetic: "ˈdʒentli", meaning: "温柔地" },
        { word: "lift up", phonetic: "lɪft ʌp", meaning: "抬起" },
        { word: "take picture of", phonetic: "teɪk ˈpɪktʃər əv", meaning: "给……拍照" },
        { word: "pretty", phonetic: "ˈprɪti", meaning: "漂亮的" },
        { word: "shell", phonetic: "ʃel", meaning: "贝壳" },
        { word: "pick up", phonetic: "pɪk ʌp", meaning: "捡起" },
        { word: "stair", phonetic: "ster", meaning: "楼梯" },
        { word: "prize", phonetic: "praɪz", meaning: "奖品" },
        { word: "amazing", phonetic: "əˈmeɪzɪŋ", meaning: "令人惊叹的" },
        { word: "congratulation", phonetic: "kənˌɡrætʃəˈleɪʃn", meaning: "祝贺" }
      ],
      qa: [
        { question: "Where are they?", answer: "他们在哪里？" },
        { question: "What's in Chip's hands?", answer: "Chip手里拿的是什么？" },
        { question: "What's in Biff's hands?", answer: "Biff手里拿的是什么？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "What is Chip doing?", answer: "Chip在做什么？" },
        { question: "What is Kipper doing?", answer: "Kipper在做什么？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "Is it a big or small sandcastle?", answer: "这是一个大沙堡还是一个小沙堡？" },
        { question: "How many layers does it have?", answer: "它有多少层？" },
        { question: "How many layers does it have now?", answer: "它现在有多少层？" },
        { question: "What is Kipper doing?", answer: "Kipper在做什么？" },
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "There are many kids coming over to look at them. How many kids can you see?", answer: "有很多孩子过来看。你能看到几个孩子？" },
        { question: "Do you think it is a pretty sandcastle?", answer: "你觉得这是一个漂亮的沙堡吗？" },
        { question: "It has stairs. Can you see the stairs?", answer: "它有楼梯。你能看到楼梯吗？" },
        { question: "Kipper is putting a flag on the top. Can you see the flag?", answer: "Kipper正在把旗子插在顶部。你能看到旗子吗？" },
        { question: "Who are they?", answer: "他们是谁？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "Do you want to make a big sandcastle?", answer: "你想建一个大沙堡吗？" }
      ]
    },
    {
      id: "l1-14",
      level: "undefined",
      episode: "L114",
      title: "Floppy's Bone",
      extensionEn: `Today, we are gonna read Floppy's Bone. Hey, monkey, I have a question for you. Do you know what a dog likes to eat? Easy, Susan, of course, bananas. What? Bananas? No, no, no! A monkey likes to eat bananas. A dog likes to eat bones. Now, look! Mommy is giving Floppy a very big bone. Wow! Floppy must be very happy. 
 
And there it is lying comfortably on the grass with one eye open, the other eye closed. And there is the bone. It wants to enjoy it later. My bone, a dog is coming. Here comes a very small dog. What does the small dog want? Maybe the dog wants to eat the bone. So Floppy had a bone. And the dog wants to eat it. Oh, my! 
 
Oh, no! Look! A dog took the bone. That's the small dog, and then Floppy ran after the dog. So the dog started to run and then Floppy started to run too. Oh, no! What happened to mom's laundry? Oh, no! All the clean clothes are scattered here and there! Oh, no! And look, some stockings got in tangled on to Floppy! Oh, my! 
 
Come back, said Mum. Come back! Because Mum wants to get the clothes back. And then she ran after Floppy, come back, come back! And there is daddy. Daddy is cleaning the golf club, golf club. Look, there are so many golf clubs, and golf balls and everything. And then the dog tow around. Oh, no! That's not good! 
 
Come back, said dad, come back, everybody, come on, stop the dogs! He ran after Mum. Wow, so many people are running. And then, look, there are some children. Oh, that's Chip, and Biff. They are flying the kite! Look, the kite! 
 
The dogs ran past the children, and look, here is the kite. Oh, my! Floppy, look, what you have got on you? Stockings, golf clubs, golf balls, and the kite. Oh my god, Floppy was running after the dog. Mum was running after the dogs. Dad was running after Mum and the dogs. And Biff and Chip are running after them. Wow, it's a long train of people. Come back, said Biff and Chip. They ran after Dad. Come on, come on, stop the dogs. 
 
Why did the small dog stop? And Floppy stopped, daddy stopped, mom stopped, everybody stopped. And they bumped together. What happened? Oh, no! Here is a very big dog. And look at this small dog. The small dog is so scared. So the dog stopped. A big dog took the bone. It's mine Oh, no! 
 
And here is the big dog chewing the yummy bone. Look at the sharp teeth. The big dog ate the bone. Oh, no! And everyone else was hiding here behind the wall, oh, my bone!`,
      extensionCn: `今天，我们要读《Floppy的骨头》。嘿，小猴子，我有个问题问你。你知道狗喜欢吃什么吗？
 太简单了，Susan，当然是香蕉啦。
 什么？香蕉？不，不，不！猴子喜欢吃香蕉。狗喜欢吃骨头。现在看！妈妈正在给Floppy一根非常大的骨头。哇！Floppy一定很开心。
瞧，它正舒服地躺在草地上，一只眼睛睁着，另一只眼睛闭着。骨头就在那儿，它想以后再享用它。这是我的骨头！一个狗来了。来了一只很小的狗。那只小狗想干什么？也许那只狗想吃骨头。所以，Floppy有一根骨头，而小狗想吃它。哦，天哪！
哦，不！看！小狗叼走了骨头！是那只小狗，然后Floppy追着小狗跑了。于是，小狗开始跑，而Floppy也开始跑。哦，不！妈妈晾的衣服怎么了？哦，不！所有的干净衣服散得到处都是！哦，不！瞧，有些袜子还缠在了Floppy身上！天哪！
回来！妈妈说。回来！因为妈妈想把衣服拿回来。然后她追着Floppy跑，回来！回来！瞧，那是爸爸。爸爸正在清理高尔夫球杆。看，有这么多高尔夫球杆、高尔夫球，还有其他东西。然后狗绕了一圈跑了过去。哦，不！这可不好！
回来！爸爸说。回来！大家，快来，拦住那些狗！他也跑去追妈妈了。哇，这么多人在跑。然后看，有一些孩子。哦，那是Chip和Biff。他们正在放风筝！看，那风筝！
狗从孩子们旁边跑过去了，看，风筝在这里。哦，天哪！Floppy，你身上都挂了些什么？袜子、高尔夫球杆、高尔夫球，还有风筝。天哪，Floppy在追那只狗，妈妈在追狗，爸爸在追妈妈和狗。Biff和Chip也在追他们。哇，真是一列长长的人群。回来！Biff和Chip说。他们追着爸爸跑。快来，快来，拦住那些狗！
为什么那只小狗停下来了？Floppy停下来了，爸爸停下来了，妈妈停下来了，大家都停下来了。他们撞到了一起。发生了什么事？哦，不！来了一只非常大的狗。看这只小狗，它好害怕！所以小狗停下来了。一只大狗拿走了骨头。这是我的！哦，不！
瞧，这只大狗正在啃那根美味的骨头。看它的尖牙。大狗把骨头吃掉了。哦，不！其他人都躲在墙后面。哦，我的骨头！`,
      vocabulary: [
      ],
      qa: [
        { question: "What's this?", answer: "这是什么？" },
        { question: "Who is this?", answer: "这是谁？" },
        { question: "What does the little dog want?", answer: "这只小狗想要什么？" },
        { question: "What happened?", answer: "发生了什么？" },
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "What happened to the laundry box?", answer: "洗衣篮怎么了？" },
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "Why does Mommy run after Floppy?", answer: "妈妈为什么追Floppy？" },
        { question: "Can you see the trash bin?", answer: "The trash bin is falling. 你能看到垃圾桶吗？垃圾桶正在倒下。" },
        { question: "Why is Daddy running too?", answer: "爸爸为什么也在跑？" },
        { question: "Do you think the little dog is running fast or slow?", answer: "你觉得这只小狗跑得快还是慢？" },
        { question: "What's this?", answer: "这是什么？" },
        { question: "Whose kite is it?", answer: "这是谁的风筝？" },
        { question: "Chip and Biff are running after Floppy too. Can you see them?", answer: "Chip和Biff也在追Floppy。你能看到他们吗？" },
        { question: "What's wrong?", answer: "They stopped. Why? 出了什么事？他们停下来了，为什么？" },
        { question: "How do the little dog and Floppy feel?", answer: "小狗和Floppy感觉怎么样？" },
        { question: "Why are they scared?", answer: "他们为什么害怕？" },
        { question: "Who is this?", answer: "这是谁？" },
        { question: "What's on Daddy's head?", answer: "爸爸头上是什么？" },
        { question: "What are these?", answer: "这些是什么？" },
        { question: "What is the dog doing?", answer: "那只狗在做什么？" },
        { question: "Why are they hiding behind the wall?", answer: "他们为什么躲在墙后面？" }
      ]
    },
    {
      id: "l1-15",
      level: "undefined",
      episode: "L115",
      title: "The Box of Treasure",
      extensionEn: `Today we are gonna read this book, The Box of Treasure. Treasure, treasure, it's treasure. Wow! What is treasure? Treasure is really really good things, valuable things, like gold, silver, beautiful necklace and everything. OK? And I wonder what mum and dad are doing. Oh, they are writing something. And what are they writing, monkey? They are writing their names. No, monkey, they are writing treasure map, a treasure map. What is a treasure map? It tells you where to find the treasures. Wow, that sounds very exciting. Let's get started. 
 
Look! There is mom, there is dad. And dad is holding the map. And what about mum? Mum has a shovel. Shovel, shovel. And there is a plastic bag. There must be something cool inside. So Dad had a map. Dad had a map. And what are they doing there? 
 
Oh, look! He hid the map in the sand. Dad was digging, digging, dig, dig, dig, and there is a hole. And dad put it inside. What's mum doing? Mum is digging. Dig, dig, dig, mommy is digging a big hole. Interesting! 
 
Ha, there are the children. I know, mum and dad hid the treasure and the treasure map for the children to find. Look, Biff found the map. Hey, everybody come over here, look what I've got. It is a treasure map, she said. And then here is Chip, here is Kipper. They ran over here. 
 
Look, the map said, dig here. Dig here, right here. So they must find the treasure, but where? Here, it says, treasure, ten paces west from the big rock. So there should be a big rock. They must find the big rock first. 
 
There it is, the big rock. And they must walk ten paces. What are ten paces? One, two, three, four, five, six, so they need to walk ten paces right over here. Dig here, said Biff. Chip dug in the sand. Look at mum and dad. And they look back, they are gonna find the treasure. 
 
And then, Chip found a box. And here comes mum and dad. And everyone is looking. Is it a box of treasure? He said. Monkey, what do you think is in the treasure box? Bananas! No, not bananas, or maybe, who knows? Let's take a look. 
 
Oh, no, it was a box of sweets. Oh, dad and mum hid a box of sweets for the children to find. Woo! Happy!`,
      extensionCn: `今天我们要读这本书，《宝藏箱》。宝藏，宝藏，这是宝藏。哇！什么是宝藏呢？宝藏是非常非常好的东西，有价值的东西，比如黄金、白银、美丽的项链等等。明白了吗？我想知道妈妈和爸爸在干什么。哦，他们在写东西。猴子，他们在写什么呢？他们在写名字吗？不，猴子，他们在画藏宝图，一张藏宝图。什么是藏宝图呢？它告诉你哪里可以找到宝藏。哇，这听起来很令人兴奋。我们开始吧！
看！那里有妈妈，那里有爸爸。爸爸拿着地图。那妈妈呢？妈妈拿着一把铲子。铲子，铲子。而且还有一个塑料袋。里面肯定有一些很酷的东西。所以爸爸有一张地图，爸爸有一张地图。他们在那里干什么呢？
哦，看！爸爸把地图藏在了沙子里。爸爸在挖，挖，挖，挖，挖，有一个洞。然后爸爸把地图放了进去。妈妈在干什么？妈妈在挖，挖，挖，妈妈正在挖一个大洞。真有趣！
哈哈，孩子们来了。我知道了，妈妈和爸爸把宝藏和藏宝图藏起来是为了让孩子们找到。看，Biff找到了地图。嘿，大家过来看看，我发现了什么！她说，这是藏宝图。然后Chip和Kipper也跑了过来。
看，地图上写着在这里挖。就在这里。所以他们必须找到宝藏，但是在哪里呢？地图上写着：从大岩石向西走十步。所以应该有一块大岩石。他们必须先找到这块大岩石。
在那里！大岩石。他们必须走十步。什么是十步呢？一，二，三，四，五，六，他们需要走十步，正好走到这里。在这里挖吧，Biff说。Chip开始在沙子里挖。看看妈妈和爸爸。他们回头看着孩子们，他们要找到宝藏了。
然后，Chip发现了一个箱子。妈妈和爸爸过来了，每个人都在看。这是一个装宝藏的箱子吗？他说。猴子，你觉得宝箱里有什么？香蕉！不，不是香蕉，或者可能是，谁知道呢？我们来看看吧。
哦，不！里面是一箱糖果。哦，爸爸和妈妈为孩子们藏了一箱糖果！哇！大家都很开心！`,
      vocabulary: [
        { word: "Treasure", phonetic: "ˈtreʒər", meaning: "宝藏" },
        { word: "Valuable", phonetic: "ˈvæljʊəbəl", meaning: "有价值的" },
        { word: "Gold", phonetic: "ɡoʊld", meaning: "金子" },
        { word: "Silver", phonetic: "ˈsɪlvər", meaning: "银子" },
        { word: "Necklace", phonetic: "ˈnɛkləs", meaning: "项链" },
        { word: "Shovel", phonetic: "ˈʃʌvəl", meaning: "铲子" },
        { word: "Plastic", phonetic: "ˈplæstɪk", meaning: "塑料" },
        { word: "Hid", phonetic: "hɪd", meaning: "（动词hide的过去式）藏" },
        { word: "Dig", phonetic: "dɪɡ", meaning: "挖" },
        { word: "Dug", phonetic: "dʌɡ", meaning: "（动词dig的过去式）挖了" },
        { word: "Hole", phonetic: "hoʊl", meaning: "洞" },
        { word: "Pace", phonetic: "peɪs", meaning: "步伐" },
        { word: "West from", phonetic: "wɛst frʌm", meaning: "从……向西" },
        { word: "Rock", phonetic: "rɑːk", meaning: "岩石" },
        { word: "Sweet", phonetic: "swiːt", meaning: "糖果" }
      ],
      qa: [
        { question: "What's this?", answer: "它是什么？" },
        { question: "What is in Mommy's hands?", answer: "妈妈手里有什么？" },
        { question: "What is Daddy doing?", answer: "爸爸在干什么？" },
        { question: "What does Biff find?", answer: "Biff找到了什么？" },
        { question: "Why is Biff waving her hand?", answer: "为什么Biff挥着手？" },
        { question: "What are they looking at?", answer: "他们在看什么？" },
        { question: "What are Mommy and Daddy looking at?", answer: "妈妈和爸爸在看什么？" },
        { question: "Why are they looking at the map now?", answer: "为什么他们现在在看地图？" },
        { question: "What is Chip doing?", answer: "Chip在干什么？" },
        { question: "What do they find?", answer: "他们找到了什么？" },
        { question: "What's in the box?", answer: "箱子里有什么？" },
        { question: "How do they feel?", answer: "他们感觉怎么样？" }
      ]
    },
    {
      id: "l1-16",
      level: "undefined",
      episode: "L116",
      title: "Hook a Duck",
      extensionEn: `Hook a Duck, hook a duck, who wants to hook a duck? Today we are gonna read this book, Hook a Duck. What does it mean? Look, quack, quack, quack, there are so many toy ducks. And what's this? This is a fishing pole. And you can use the fishing pole to hook a duck and get a prize. Where can you play this, monkey? At the funfair? Yes, that's right! There at the funfair. Let's go to the funfair together. 
 
Oh, there they are. And look there are so many people at the funfair. And here are our family. Look, they are hooking the duck. Oh, I love it. Let's see who can get the biggest prize. Hook a duck, said mum. Hook a duck, come, come. 
 
Chip had a go, had a go means have a try, OK? So Chip had a go. He got a pen. Look, the duck has got a number. It is number four. Why there is a number? Oh, I know, number four means you can get a pen. So if you get maybe number three, you can get a bear. If you get number two, you can get a ball. So monkey, which number do you want? Which duck do you want to get? I want a monkey. Oh, that's right. OK, you can try to get a duck and see if you can get a monkey. OK? 
 
And then have a go, said mum. Biff had a go! Do you think Biff can get something? And what is dad doing here? Daddy is paying. You need to pay before you have a go. Of course. 
 
Look! Oh, Biff got a cat, a meow-meow cat, oh, it is so cute. Go on hook a duck, said mum. And now it is Kipper's turn. What is dad doing? Dad is still paying. 
 
And then let's see what Kipper has got. May I have it please? Kipper had a go. He got a dog. Woof, woof, it is a red dog. It must be very good. Is there still money in dad's wallet? Oh, no, no money. Everyone had a go, but everyone had a prize. 
 
Oh, what a big dog Kipper has got. It was a big dog. Oh! Mum says that's big. What a big dog, said Kipper. Look, they are so happy getting it. 
 
Grrr, said Floppy. Woof, woof! Floppy is not so happy about it. Why not? Monkey, do you know it? I think because Floppy is a dog. Yes, you are right. Floppy is a dog and then when Floppy sees a big dog, he feels threatened and he doesn't like another dog at home.`,
      extensionCn: `钓小鸭，钓小鸭，谁想钓小鸭？今天我们要读这本书，《钓小鸭》。这是什么意思呢？看，嘎嘎嘎，这里有好多玩具鸭。这是什么？这是一个钓鱼竿。你可以用钓鱼竿钓起一只小鸭，然后获得一个奖品。猴子，你知道在哪里可以玩这个游戏吗？在游乐场吗？是的，没错！就在游乐场。我们一起去游乐场吧！
哦，他们到了！看，游乐场里有好多人。这是我们的家人，快看，他们在钓小鸭呢。哦，我喜欢这个！我们来看看谁能拿到最大的奖品吧。钓小鸭！妈妈说，钓小鸭，来吧，来吧！
Chip试了一下。试一下就是试试，尝试一下，明白了吗？所以Chip试了一下。他钓到了一支笔。看，小鸭子上有一个号码，是4号。为什么会有一个号码呢？哦，我知道了，4号表示你可以拿到一支笔。所以如果你钓到3号，你可能会得到一只玩具熊；如果你钓到2号，你可能会得到一个球。那么，猴子，你想要哪个号码？你想钓到哪只鸭子呢？我想要一个猴子！哦，好的，那你可以试试钓一只鸭子，看看能不能钓到一个猴子。好吧？
然后妈妈说：试一下吧。Biff试了一下！你觉得Biff能钓到东西吗？爸爸在做什么？爸爸在付钱。你需要付钱才能试一下。当然了。
看！Biff钓到了一只猫，喵喵喵的猫！哦，它太可爱了！继续钓小鸭吧！妈妈说。现在轮到Kipper了。爸爸在做什么呢？爸爸还在付钱。
然后，让我们看看Kipper钓到了什么。请问，我可以试一下吗？Kipper试了一下。他钓到了一只狗。汪汪，它是一只红色的狗，一定很好。爸爸的钱包里还有钱吗？哦，没有了，没有钱了。每个人都试了一下，但每个人都得到了一个奖品。
哦，Kipper得到了一个大狗。它是一只大狗。哇！妈妈说，好大的一只狗。多大的一只狗啊！Kipper说。看，他们拿着它都很开心。
呜呜，Floppy说。汪汪！Floppy可不太高兴。为什么呢？猴子，你知道吗？我觉得是因为Floppy是一只狗。是的，你说得对。Floppy是一只狗，然后当Floppy看到一只大狗时，他觉得受到了威胁，不喜欢家里有另一只狗。`,
      vocabulary: [
        { word: "Fishing pole", phonetic: "ˈfɪʃɪŋ poʊl", meaning: "钓鱼竿" },
        { word: "Hook", phonetic: "hʊk", meaning: "钩子；钩住" },
        { word: "Duck", phonetic: "dʌk", meaning: "鸭子" },
        { word: "Prize", phonetic: "praɪz", meaning: "奖品" },
        { word: "Funfair", phonetic: "ˈfʌnfeər", meaning: "游乐场；嘉年华" },
        { word: "Have a go", phonetic: "hæv ə ɡoʊ", meaning: "尝试一下" },
        { word: "Have a try", phonetic: "hæv ə traɪ", meaning: "试试看" },
        { word: "Pay", phonetic: "peɪ", meaning: "支付；付款" },
        { word: "Of course", phonetic: "ʌv kɔːrs", meaning: "当然" },
        { word: "Turn", phonetic: "tɜːrn", meaning: "轮到；回合" },
        { word: "Money", phonetic: "ˈmʌni", meaning: "钱" },
        { word: "Wallet", phonetic: "ˈwɒlɪt", meaning: "钱包" },
        { word: "Threaten", phonetic: "ˈθrɛtn", meaning: "威胁" }
      ],
      qa: [
        { question: "Who is hooking a duck?", answer: "谁在钓小鸭？" },
        { question: "What does Chip get?", answer: "Chip得到了什么？" },
        { question: "Who is hooking?", answer: "谁在钓小鸭？" },
        { question: "What is Daddy doing?", answer: "爸爸在做什么？" },
        { question: "What does Biff get?", answer: "Biff得到了什么？" },
        { question: "What is Daddy doing?", answer: "爸爸在做什么？" },
        { question: "Who is hooking?", answer: "谁在钓小鸭？" },
        { question: "What does Kipper get?", answer: "Kipper得到了什么？" },
        { question: "What's this?", answer: "这是什么？" },
        { question: "Is the dog big or small?", answer: "这只狗是大还是小？" },
        { question: "How do they feel?", answer: "他们感觉怎么样？" },
        { question: "What is Floppy doing?", answer: "Floppy在做什么？" },
        { question: "How does Floppy feel?", answer: "Floppy感觉怎么样？" },
        { question: "Why is Floppy angry?", answer: "为什么Floppy生气？" }
      ]
    },
    {
      id: "l1-17",
      level: "undefined",
      episode: "L117",
      title: "Chip's Robot",
      extensionEn: `Hello, everyone. This is Susan. (Say like a robot) Hey, Susan, what's wrong with you? Hello, this is robot Susan. Today we are gonna read this one, Chip's Robot. So that's why I am talking like a robot. Can you do it, monkey? Hello, I am Susan. Let's get started. OK, look, this is Chip. And Chip is making the head of a robot. This is my head. Do I look like a robot? No, I think I look better, right? 
 
OK, now here comes Chip and his friends. And then Chip had a box. Look, it is a big box, and inside you can see many other boxes too. 
 
Look, Chip poured everything out. I see many, many shapes, right? I see a lot of boxes and some cylinders, cylinders. This is my robot, he said. Can you see it? And the friends got ha? These are robots? I only see boxes. 
 
OK, now Chip started the work. This is a leg, said Chip. A leg? monkey, do you think that looks like a leg? Well, I can't see it. Can you see the robot? Can you see the robot, everyone? No, I can't see the robot. I only see some boxes and the cylinders. And what's this, everyone? Glue, glue is very sticky. OK, so Chip is gluing the cylinder on to the box. Everyone is watching. 
 
And then, this is an arm. An arm, Susan's arm. Susan is waving an arm. And this is an arm, said Chip. Can you see my robot? And everyone goes I am trying but I still can't see a robot. Let's say it together, I can't see the robot. Still, keep working. I might see it later. 
 
Can you see it, yet? Said Chip. No, said Biff. Biff still can not see it. Can you see it? No, I can't see it. Oh, Chip, keep working. 
 
And here is the head. This is the head, said Chip. Now can you see my robot? Everyone is smiling. So can you see the robot? I think I can see it. Look, this is the body, this is the head. And all Chip has to do is to glue them together. 
 
I can see it now, it is a robot. Yes, you are right, monkey. We can see it now, said Biff. And everyone is clapping their hands, clap, clap, clap. It's a very good robot. Now monkey, do you like this robot? Yes, I like it too. Now I want to make one. Shall we go and make it?`,
      extensionCn: `你好，大家好，我是Susan。（像机器人一样说）嘿，Susan，你怎么了？
 你好，我是机器人Susan。今天我们要读这本书，《Chip的机器人》。这就是我像机器人一样说话的原因。猴子，你能像我一样说话吗？
 你好，我是Susan。我们开始吧。好了，看，这里是Chip，Chip正在做机器人的头部。
 这是我的头。我看起来像机器人吗？不，我觉得我看起来更好，对吧？
好的，现在Chip和他的朋友们来了。然后Chip有一个盒子。看，它是一个大盒子，里面你还可以看到很多其他的盒子。
看，Chip把所有东西倒了出来。我看到了很多很多形状，对吧？我看到很多盒子和一些圆柱形的物体，圆柱。
 他说：这是我的机器人。你们看得见吗？朋友们看了看，啊？这些是机器人吗？我只看到了盒子。
好的，现在Chip开始做了。这是腿，Chip说。腿？猴子，你觉得那像腿吗？
 其实，我看不见。你们看得到机器人吗？大家看得到机器人吗？不，我看不见机器人。我只看见一些盒子和圆柱形的物体。
 那这是什么，大家？胶水，胶水很粘。好的，所以Chip正在把圆柱形的物体粘到盒子上。大家都在看。
然后，这是一个胳膊。一个胳膊，Susan的胳膊。Susan正在挥动胳膊。Chip说，这是一个胳膊。你们看得到我的机器人吗？
 然后大家说，我在试着看，但我还是看不见机器人。我们一起说，"我看不见机器人"。继续做吧，我可能稍后会看到。
Chip问：你们看见了吗？不，Biff说。Biff还是看不见。你能看见吗？不，我看不见。哦，Chip，继续做吧。
然后这是头部。Chip说，这是头部。现在你们看得到我的机器人了吗？
 大家都在笑。那么你们看得到机器人了吗？我想我看得见了。看，这就是身体，这是头部。Chip要做的就是把它们粘到一起。
现在我能看到了，它是一个机器人。是的，猴子，你说得对。Biff说，我们现在看到了。大家都在拍手，拍，拍，拍。它是一个很棒的机器人。
 现在，猴子，你喜欢这个机器人吗？是的，我也喜欢。现在我想做一个。我们去做一个吧？`,
      vocabulary: [
        { word: "robot", phonetic: "ˈrəʊbɒt", meaning: "机器人" },
        { word: "head", phonetic: "hɛd", meaning: "头" },
        { word: "leg", phonetic: "lɛɡ", meaning: "腿" },
        { word: "glue", phonetic: "ɡluː", meaning: "胶水" },
        { word: "arm", phonetic: "ɑːm", meaning: "胳膊" },
        { word: "box", phonetic: "bɒks", meaning: "盒子" },
        { word: "shape", phonetic: "ʃeɪp", meaning: "形状" },
        { word: "pour", phonetic: "pɔːr", meaning: "倒" },
        { word: "cylinder", phonetic: "ˈsɪlɪndə", meaning: "圆柱体" },
        { word: "wave", phonetic: "weɪv", meaning: "挥动" },
        { word: "clap", phonetic: "klæp", meaning: "拍手" }
      ],
      qa: [
        { question: "What is Chip holding?", answer: "- Chip拿着什么？" },
        { question: "What is Chip doing?", answer: "- Chip在做什么？" },
        { question: "What is Chip doing?", answer: "- Chip在做什么？" },
        { question: "Can you see the robot?", answer: "- 你能看到机器人吗？" },
        { question: "What is this?", answer: "- 这是什么？" },
        { question: "What is this?", answer: "- 这是什么？" },
        { question: "What does Chip make?", answer: "- Chip做了什么？" },
        { question: "What are they doing?", answer: "- 他们在做什么？" }
      ]
    },
    {
      id: "l1-18",
      level: "undefined",
      episode: "L118",
      title: "One Wheel",
      extensionEn: `Hello, today we are gonna read this book, it is called one wheel. Wheel, wheel. What is a wheel? Look, this is a wheel, and this is a one wheel. It's called a monocycle, monocycle. Can you ride it, monkey? I don't think I can. It's ok, Susan can not ride a monocycle either. But I think this woman can. Let's find out how to ride it. 
 
Look, this is the woman and she is riding this monocycle. And it is called a one wheel too. And look, she is a street performer, street performer, street performer. She is not just riding a monocycle. She is also playing the bobbin. Wow, so difficult. One wheel, said Chip. Chip is very happy to see this, and Chip is clapping, clap, clap, clap. Wow, amazing! Do you like watching it? I like watching it. It is so cool. 
 
Look, said Chip. One wheel. Here is Biff and here is Chip. What are they doing? Look, Chip is in the wheelbarrow, and the wheelbarrow has only one wheel too. Biff is pushing him, push, push. And Chip is playing the bobbin. Do you think they are doing a very good trick? Yes, it is a good trick. 
 
And then, look, said mom. What is mom doing? Mom is riding a bicycle, and also she is holding a stick. And she is spinning a plate, spin, spin, spin. Wow that seems so difficult, the trick. Can you do it, everybody? No, I can't. It's so difficult. And mom says I am on two wheels. Two wheels, really? One, two, two wheels, it's a bicycle. Everybody, can you ride a bike? I can ride a bike. Good job! 
 
Now look at Kipper. Where is Kipper? Kipper is sitting on a tricycle. Yes, that's called a tricycle. Why? One, two, three, because it has got three wheels. Look at me, said Kipper, I am on three wheels. OK, riding a tricycle is easy. You know, it is very easy to balance. But look, here are two balls. So Kipper is also juggling, wow that seems difficult too. Look at Floppy. Woof, woof, woof! Floppy is surprised to see this. 
 
And then, wow, here comes Biff. Look at me, said Biff, I am on four wheels. Four wheels? One, two, three, four, four very small wheels on the skateboard. Skateboard! This is not easy to do. It's very easy to fall. And also Biff is wearing a helmet, helmet. Remember when you ride a bicycle or playing the skateboard, you must wear a helmet to protect your head. OK? And also she is holding a tray, and on the tray, you can see one, two, three, four, four cups. Wow this is so difficult. Amazing! Look, daddy is showing this, amazing! And everyone is clapping. Good job! Biff! 
 
And then wow here comes dad! What's daddy doing? Daddy is doing a wheelie. Wheelie, wheelie. What does a wheelie mean? It means balancing on the bike wheel. That's so difficult! I can't do it. Can you do it, everyone? I can't do it. Look at dad, said mom, he is on one wheel. What about Floppy? I think Floppy is mimicking daddy but Floppy doesn't have a wheel. Floppy is standing on the back legs. Wow, that's so cool, daddy! Good job! Good job! 
 
And then, oh, no, said dad, no wheels now. What happened? Daddy fell down and broke the laundry line. Oh, my! Dad, that was so dangerous. Don't try it, OK?`,
      extensionCn: `你好，今天我们要读这本书，它叫做《独轮车》。独轮车，独轮车。什么是独轮车？看，这就是一个轮子，这就是一个独轮车。它叫做单轮车，单轮车。你能骑吗，猴子？我觉得我不能。没关系，苏珊也不能骑单轮车。但是我觉得这个女人能。让我们来看看她是怎么骑的。
看，这个女人正在骑单轮车，它也叫做独轮车。看，她是一个街头表演者，街头表演者，街头表演者。她不仅在骑单轮车，还在玩陀螺。哇，好难。独轮车，Chip说。Chip很高兴看到这个，Chip在拍手，拍，拍，拍。哇，太棒了！你喜欢看吗？我喜欢看。真酷。
看，Chip说。独轮车。这里是Biff，那里是Chip。 他们在做什么？看，Chip在独轮车里，独轮车也只有一个轮子。Biff在推他，推，推。Chip在玩陀螺。你觉得他们做得很好吗？是的，这是个很好的把戏。
然后，妈妈说，看。妈妈在做什么？妈妈在骑自行车，还拿着一根棍子。她在旋转一个盘子，旋转，旋转，旋转。哇，那个把戏看起来很难。你能做吗，大家？不能，太难了。妈妈说，我骑的是双轮车。双轮车，真的吗？一，二，二个轮子，这是自行车。大家，你们会骑自行车吗？我会骑自行车。做得好！
现在看Kipper。Kipper在哪里？Kipper坐在三轮车上。是的，那叫做三轮车。为什么？一，二，三，因为它有三个轮子。看我，Kipper说，我骑的是三轮车。好吧，骑三轮车很容易。你知道，它很容易保持平衡。但看，这里有两个球。所以Kipper也在玩杂耍，哇，那看起来也很难。看Floppy。汪，汪，汪！Floppy看到这一切非常惊讶。
然后，哇，Biff来了。看我，Biff说，我骑的是四轮车。四轮车？一，二，三，四，滑板上有四个小轮子。滑板！这可不容易。很容易摔倒。Biff还戴着头盔，头盔。记住，当你骑自行车或者玩滑板时，必须戴上头盔来保护你的头，好吗？她还拿着一个托盘，托盘上有一，二，三，四，四个杯子。哇，这太难了。太棒了！看，爸爸在展示这个，太棒了！大家都在拍手。做得好！Biff！
然后，哇，爸爸来了！爸爸在做什么？爸爸正在做单轮车。单轮车，单轮车。单轮车是什么意思？就是用自行车的一个轮子保持平衡。那太难了！我做不到。大家能做吗？我做不到。看爸爸，妈妈说，他骑的是一个轮子。Floppy呢？我觉得Floppy在模仿爸爸，但Floppy没有轮子。Floppy站在后腿上。哇，太酷了，爸爸！做得好！做得好！
然后，爸爸说，哦，不，没有轮子了。发生了什么事？爸爸摔倒了，弄断了晾衣绳。哦，我的天！爸爸，那太危险了。不要再尝试了，好吗？`,
      vocabulary: [
        { word: "Monocycle", phonetic: "ˈmɒnəʊsaɪkl", meaning: "单轮车" },
        { word: "Wheel", phonetic: "wiːl", meaning: "轮子" },
        { word: "Street performer", phonetic: "striːt pəˈfɔːmə(r)", meaning: "街头表演者" },
        { word: "Bobbin", phonetic: "ˈbɒbɪn", meaning: "线轴，纺织用的纱轴" },
        { word: "Juggling", phonetic: "ˈdʒʌɡlɪŋ", meaning: "杂耍" },
        { word: "Skateboard", phonetic: "ˈskeɪtbɔːd", meaning: "滑板" },
        { word: "Helmet", phonetic: "ˈhɛlmɪt", meaning: "头盔" },
        { word: "Trick", phonetic: "trɪk", meaning: "把戏" },
        { word: "Balance", phonetic: "ˈbæləns", meaning: "平衡" },
        { word: "Wheelie", phonetic: "ˈwiːli", meaning: "单轮骑行" },
        { word: "Bicycle", phonetic: "ˈbaɪsɪkl", meaning: "自行车" },
        { word: "Tricycle", phonetic: "ˈtraɪsɪkl", meaning: "三轮车" },
        { word: "Plate", phonetic: "pleɪt", meaning: "盘子" },
        { word: "Spin", phonetic: "spɪn", meaning: "旋转" },
        { word: "Clapping", phonetic: "ˈklæpɪŋ", meaning: "拍手" },
        { word: "Fall", phonetic: "fɔːl", meaning: "摔倒" },
        { word: "Dangerous", phonetic: "ˈdeɪndʒərəs", meaning: "危险的" },
        { word: "Laundry line", phonetic: "ˈlɔːndri laɪn", meaning: "晾衣绳" }
      ],
      qa: [
        { question: "Who is this?", answer: "这是谁？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "How many wheels does it have?", answer: "它有几个轮子？" },
        { question: "What is the woman doing?", answer: "那个女人在做什么？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "How many wheels does it have?", answer: "它有几个轮子？" },
        { question: "Where is Chip?", answer: "Chip 在哪里？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "How many wheels does it have?", answer: "它有几个轮子？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "How many wheels does it have?", answer: "它有几个轮子？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "How many wheels does it have?", answer: "它有几个轮子？" },
        { question: "What is daddy doing?", answer: "爸爸在做什么？" },
        { question: "What is Chip doing?", answer: "Chip 在做什么？" },
        { question: "What is daddy doing?", answer: "爸爸在做什么？" },
        { question: "What happened?", answer: "发生了什么？" },
        { question: "Is it funny?", answer: "它好笑吗？" }
      ]
    },
    {
      id: "l1-19",
      level: "undefined",
      episode: "L119",
      title: "The Ice Cream",
      extensionEn: `Monkey, monkey, where are you? I am buying some popcorn. Popcorn! Do you like popcorn better or ice cream better? Ice cream, I am coming! Today we are gonna read this book, The Ice Cream. Look, this is the ice cream, it's so yummy! What is your favorite flavor? I like chocolate flavor. How about you? OK! All kinds of flavors, right? Let's get started. 
 
Look, this is the beach again. And there is the ice cream van. And can I get an ice cream? Kipper is thinking. I want to eat some ice cream. Yes, I can. Of course, I am gonna go and get the ice cream. 
 
And then, come on, run to the ice cream van. Look, this is the ice cream van, van. And this man is selling ice cream. And look, Kipper is running. Run to the ice cream van. And look they are playing a ball. 
 
And then, there they are. Biff, Chip and Kipper. I want the big one, says Kipper. And then this man says, here you are, enjoy! Look at that, it is so big and it's got a cookie on top. So yummy! Everyone is so happy. What kind of ice cream do you want? I want the big one. Yes! I want the big one too. And look, this girl is playing this ball, spinning it. 
 
And then, oh no! Look out, Kipper! What happened to Kipper? Kipper tripped over the ball. Where did the ball come? This girl is playing this ball and then I know what happened. The girl dropped the ball and then Kipper tripped over it. Oh, no, look at the ice cream. The ice cream is flying away. Oh, no! 
 
And eh oh! Splat. This is bad. Look, this man was lying here comfortably in the sun, and the next second, bang, ice cream on his head. Sorry, man. Everyone got ha, ha, ha. That's so funny. Look at him, he is laughing. And then Kipper got oh, no. What do you think Kipper is thinking? Kipper is feeling sorry. What do you think Kipper should do? Clean it, of course and say I am so sorry, I am so sorry, I am so sorry.`,
      extensionCn: `猴子，猴子，你在哪里？我在买爆米花。爆米花！你是更喜欢爆米花还是更喜欢冰淇淋？冰淇淋，我来了！今天我们要读这本书，《冰淇淋》。看，这是冰淇淋，好美味！你最喜欢什么口味？我喜欢巧克力味。你呢？好的！各种各样的口味，对吧？让我们开始吧。
看，这是海滩，又是海滩。那里有一辆冰淇淋车。我能买一个冰淇淋吗？Kipper 正在想。我想吃冰淇淋。是的，我可以。当然了，我要去买冰淇淋。
然后，快跑向冰淇淋车。看，这是冰淇淋车，冰淇淋车。而这个男人正在卖冰淇淋。看，Kipper 正在跑步。跑向冰淇淋车。看，他们正在玩球。
然后，他们到了。Biff、Chip 和 Kipper。我想要一个大的，Kipper 说。然后这个男人说，给你，享受吧！看那个，好大啊，上面还有一块饼干。好美味！每个人都很开心。你想要什么样的冰淇淋？我想要一个大的。是的！我也想要一个大的。看，这个女孩在玩球，转着它。
然后，哦，不！小心，Kipper！Kipper 怎么了？Kipper 被球绊倒了。球从哪里来的？这个女孩正在玩这个球，然后我知道发生了什么。这个女孩把球掉了，然后 Kipper 被绊倒了。哦，不，看冰淇淋。冰淇淋飞走了。哦，不！
然后，哎呀！啪嗒。这真糟糕。看，这个男人正舒服地躺在太阳下，下一秒，砰，冰淇淋砸在了他的头上。对不起，先生。每个人都哈哈大笑。这太有趣了。看他，他正在笑。然后 Kipper 想，哦，不。你觉得 Kipper 在想什么？Kipper 感到很抱歉。你觉得 Kipper 应该做什么？当然是清理，并且说：对不起，对不起，对不起。`,
      vocabulary: [
        { word: "popcorn", phonetic: "ˈpɒp.kɔːn", meaning: "爆米花" },
        { word: "flavor", phonetic: "ˈfleɪ.vər", meaning: "口味" },
        { word: "ice cream", phonetic: "aɪs kriːm", meaning: "冰淇淋" },
        { word: "beach", phonetic: "biːtʃ", meaning: "海滩" },
        { word: "van", phonetic: "væn", meaning: "小货车" },
        { word: "cookie", phonetic: "ˈkʊk.i", meaning: "饼干" },
        { word: "ball", phonetic: "bɔːl", meaning: "球" },
        { word: "trip", phonetic: "trɪp", meaning: "绊倒" },
        { word: "splat", phonetic: "splæt", meaning: "啪的一声" },
        { word: "sun", phonetic: "sʌn", meaning: "太阳" },
        { word: "sorry", phonetic: "ˈsɒr.i", meaning: "对不起" },
        { word: "clap", phonetic: "klæp", meaning: "拍手" },
        { word: "laugh", phonetic: "læf", meaning: "笑" },
        { word: "comfortable", phonetic: "ˈkʌmf.tə.bəl", meaning: "舒适的" },
        { word: "enjoy", phonetic: "ɪnˈdʒɔɪ", meaning: "享受" }
      ],
      qa: [
        { question: "Where are they?", answer: "他们在哪里？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "What's this?", answer: "这是什么？" },
        { question: "Where is Kipper going?", answer: "Kipper 要去哪儿？" },
        { question: "What is this?", answer: "这是什么？" },
        { question: "Do you want an ice cream?", answer: "你想要一个冰淇淋吗？" },
        { question: "What's going on?", answer: "发生了什么？" },
        { question: "Where does the ice cream go?", answer: "冰淇淋飞到哪里了？" },
        { question: "What should Kipper say?", answer: "Kipper 应该说什么？" }
      ]
    },
    {
      id: "l1-20",
      level: "undefined",
      episode: "L120",
      title: "Can You See Me?",
      extensionEn: `Monkey, what's wrong? This supermarket is so big, I can't see any bananas. Pat, pat, pat, don't worry, monkey. I will help you later. But first, why don't we enjoy the book together? It's called Can you see me? Can you see me? What? 
 
There it is. Here comes Kipper, and Kipper says can you see my teddy bear? Teddy bear? Wow, I see so many toys. Now everyone, why don't we help Kipper together? Let's go over them together, OK? I see a dog, frog, dog, monster, superman, cat, oh, there it is. I see the teddy bear behind this white cat, do you see it? You say, yes, I can see the teddy bear. Good job, everyone. 
 
We are in the yard now. And here we have Kipper and can you see my dog? What's missing? Floppy! Floppy is missing. Wow, I believe Floppy must be hiding somewhere. Let's see. We have got a teddy bear, a tent, an orange tent and then we have a paddling pool, a football. Oh, there it is. Floppy! Floppy is hiding in the bushes. 
 
Wow, I see so many pictures on this page. Can you see my picture of a big red frog? OK, we are looking for a big red frog. Let's go over and let's find something red first. I think that's very logical. This is yellow, no. Let's find something red. This is a red bird. This is a red house. This is a red person. Ah, something red! Is this the big red frog? Yes, so let's say it together I can see the big red frog. Good job! 
 
And then, what's our task now? Can you see my tiger if you look in the tree? OK, I see one two three, three trees. And can you see the tiger? Is this the tiger? No, no, no! Look closely, this is a cat. Where is the tiger? There it is. The tiger is in the tree over here. Let's get it down. So are you looking? Yes, I am not just looking, I see it. Look, I see the tiger in the tree. 
 
And then can you see me? Kipper is hiding too? Can you find Kipper, everybody? Is this Kipper? No, it's a monster. And is this Kipper? No, it is a tiger. And is this Kipper? No, this is a cat. There he is. He is Kipper.`,
      extensionCn: `猴子，怎么了？这家超市太大了，我找不到任何香蕉。拍拍，不要担心，猴子。我稍后会帮你的。但首先，我们为什么不一起享受这本书呢？它的名字叫《你能看见我吗？》。你能看见我吗？什么？
在那里。Kipper 来了，Kipper 说：你能看见我的泰迪熊吗？泰迪熊？哇，我看到好多玩具。现在大家，我们为什么不一起帮助 Kipper 呢？我们一起找，好吗？我看见一只狗、一只青蛙、一只怪物、超人、一只猫，哦，找到了。我看到泰迪熊在这只白猫后面，你看到了吗？你说：是的，我看到了泰迪熊。干得好，大家。
现在我们在院子里。这儿有 Kipper，你能看见我的狗吗？少了什么？Floppy！Floppy 不见了。哇，我相信 Floppy 一定藏在某个地方。让我们看看。我们有一只泰迪熊，一个帐篷，一个橙色的帐篷，然后我们有一个戏水池，一个足球。哦，找到了。Floppy！Floppy 躲在灌木丛里。
哇，我在这一页上看到了好多图片。你能看见我画的大红青蛙吗？好，我们现在在找一只大红青蛙。让我们从找一些红色的东西开始吧。我觉得这很有逻辑性。这是黄色的，不是。我们找一些红色的。这是一只红鸟。这是一座红房子。这是一个红色的人。啊，有红色的东西！这是那只大红青蛙吗？是的，所以我们一起说：我看到了大红青蛙。干得好！
然后，我们现在的任务是什么？如果你看树，你能看见我的老虎吗？好，我看见了一、二、三，三棵树。你能看见老虎吗？这是老虎吗？不是，不是，不是！仔细看，这是只猫。老虎在哪里？在那里。老虎在这棵树上。让我们把它弄下来。所以你在看吗？是的，我不仅在看，我看见了。看，我看见树上的老虎了。
然后，你能看见我吗？Kipper 也在藏起来？大家，你们能找到 Kipper 吗？这是 Kipper 吗？不是，这是一个怪物。这是 Kipper 吗？不是，这是只老虎。这是 Kipper 吗？不是，这是一只猫。那他在哪儿？在那里。他是 Kipper。`,
      vocabulary: [
        { word: "Supermarket", phonetic: "ˈsuːpərˌmɑːrkɪt", meaning: "超市" },
        { word: "Teddy bear", phonetic: "ˈtɛdi bɛər", meaning: "泰迪熊" },
        { word: "Toy", phonetic: "tɔɪ", meaning: "玩具" },
        { word: "Yard", phonetic: "jɑːrd", meaning: "院子" },
        { word: "Missing", phonetic: "ˈmɪsɪŋ", meaning: "丢失的" },
        { word: "Tent", phonetic: "tɛnt", meaning: "帐篷" },
        { word: "Bushes", phonetic: "bʊʃɪz", meaning: "灌木丛" },
        { word: "Frog", phonetic: "frɒɡ", meaning: "青蛙" },
        { word: "Logical", phonetic: "ˈlɒdʒɪkəl", meaning: "合乎逻辑的" },
        { word: "Tree", phonetic: "triː", meaning: "树" },
        { word: "Tiger", phonetic: "ˈtaɪɡər", meaning: "老虎" },
        { word: "Hiding", phonetic: "ˈhaɪdɪŋ", meaning: "躲藏" },
        { word: "Monster", phonetic: "ˈmɒnstər", meaning: "怪物" },
        { word: "Cat", phonetic: "kæt", meaning: "猫" }
      ],
      qa: [
        { question: "Can you see the [teddy bear]?", answer: "你能看到[泰迪熊]吗？" },
        { question: "Where is the [teddy bear]?", answer: "[泰迪熊]在哪里？" },
        { question: "I can't find the [teddy bear], can you help me?", answer: "我找不到[泰迪熊]，你能帮我吗？" },
        { question: "Is it the [teddy bear]?", answer: "这是[泰迪熊]吗？" },
        { question: "What can you see in the tree?", answer: "你在树上看到了什么？" },
        { question: "It's a little hard, right?", answer: "Let's keep finding. 有点难对吧？我们继续找吧！" }
      ]
    },
    {
      id: "l1-21",
      level: "undefined",
      episode: "L121",
      title: "Good Dog",
      extensionEn: `Today we are gonna read this book called Good Dog. Monkey, what are you doing? I am mimicking a dog. Oh, you are so cute. And this is our good dog! Floppy! Look, Floppy is a very good dog, right? OK! Now let's get started. 
 
There Floppy is. I am a good dog. Look at me, do you think Floppy is a good dog? Yes, Floppy looks clean and nice, a good dog. 
 
Wow, Floppy, you are such a good dog. Look, Floppy is helping dad and Kipper carrying the newspaper. You are a very useful dog, a very good dog. I'm very good as you can see. You are a good helper, are you a good helper? Yes, I am a good helper too. Good, everyone. 
 
And then look, there is Floppy. You say sit, I sit, that's it. If you call, I get the ball. So what are they doing? They are playing a ball game, they are playing a ball game. Look, this is Biff, and this is Chip. Chip is throwing the ball. And Biff says, go get the ball. And then here comes Floppy. And Floppy is going to get the ball. You are a good dog. So let's say it together to Floppy. You are a good dog. Good job! 
 
And then, here comes Kipper again. You say stay, I stay. That's that. So stay means don't move. Stay here, don't go anywhere, no, don't go, just stay here. OK, so I say stay, Floppy will stay, but look at Floppy's face. What's wrong? Something is wrong. There comes a cat. You know dog and cat, dogs and cats are not friends. 
 
So, there they are. Look, the cat says, meow. The cat is running for life. And then here comes Floppy. Don't go away, I am catching you. Wait, but not if I can see a cat. So that means when I see a cat, I am not a good dog anymore. I want to catch the cat. Oh, no, and then Kipper says oh, no, Floppy, come back. Oh, Floppy!`,
      extensionCn: `今天我们要读这本书，书名是《好狗》。猴子，你在干什么？我在模仿狗。哦，你好可爱啊。这是我们家的好狗！弗洛比！看，弗洛比是一只非常好的狗，对吧？好，现在我们开始吧。
那里是弗洛比。我是一只好狗。看看我，你觉得弗洛比是一只好狗吗？是的，弗洛比看起来干净又漂亮，是一只好狗。
哇，弗洛比，你真是一只好狗。看，弗洛比正在帮爸爸和奇普拿报纸。你是一只非常有用的狗，一只非常好的狗。我很好，你看得出来。你是一个好帮手，你是一个好帮手吗？是的，我也是一个好帮手。太棒了，大家。
然后看，那里是弗洛比。你说坐下，我就坐下，就是这样。如果你叫我，我就把球拿回来。那么他们在做什么？他们在玩一个球的游戏，他们在玩一个球的游戏。看，这是比夫，这是奇普。奇普正在扔球。然后比夫说，去把球拿回来。接着弗洛比来了。弗洛比要去把球拿回来。你是一只好狗。所以让我们一起对弗洛比说，你是一只好狗。干得好！
接着，奇普又来了。你说停下，我就停下。就是这样。所以停下意思是不要动。待在这里，不要去任何地方，不，不要走，就待在这里。好，我说停下，弗洛比就会停下，但看看弗洛比的表情。怎么了？有些不对劲。有只猫来了。你知道狗和猫，狗和猫不是朋友。
所以，他们来了。看，那只猫说，喵。猫在逃命。然后弗洛比来了。别跑，我抓住你了。等一下，但是如果我看到一只猫，那就不同了。这意味着当我看到猫的时候，我就不再是一只好狗了。我想抓住那只猫。哦，不，然后奇普说，哦，不，弗洛比，回来。哦，弗洛比！`,
      vocabulary: [
        { word: "mimic", phonetic: "ˈmɪmɪk", meaning: "模仿" },
        { word: "cute", phonetic: "kjuːt", meaning: "可爱" },
        { word: "clean", phonetic: "kliːn", meaning: "干净的" },
        { word: "useful", phonetic: "ˈjuːsfəl", meaning: "有用的" },
        { word: "helper", phonetic: "ˈhɛlpər", meaning: "帮手" },
        { word: "throw", phonetic: "θroʊ", meaning: "扔" },
        { word: "stay", phonetic: "steɪ", meaning: "停下，待着" },
        { word: "move", phonetic: "muːv", meaning: "移动" },
        { word: "wrong", phonetic: "rɔːŋ", meaning: "错误，不对劲" },
        { word: "catch", phonetic: "kætʃ", meaning: "抓住" },
        { word: "meow", phonetic: "miˈaʊ", meaning: "猫叫声" },
        { word: "life", phonetic: "laɪf", meaning: "生命" },
        { word: "back", phonetic: "bæk", meaning: "回来" },
        { word: "newspaper", phonetic: "ˈnjuːzˌpeɪpər", meaning: "报纸" },
        { word: "game", phonetic: "ɡeɪm", meaning: "游戏" },
        { word: "face", phonetic: "feɪs", meaning: "脸" },
        { word: "friends", phonetic: "frɛndz", meaning: "朋友" },
        { word: "anymore", phonetic: "ˌɛn.iˈmɔr", meaning: "再也不" },
        { word: "good", phonetic: "ɡʊd", meaning: "好的" },
        { word: "dog", phonetic: "dɔːɡ", meaning: "狗" }
      ],
      qa: [
        { question: "What are daddy and Kipper doing?", answer: "- 他们在做什么？" },
        { question: "What is Floppy doing?", answer: "- 弗洛比在做什么？" },
        { question: "Is Floppy a good dog?", answer: "- 弗洛比是只好狗吗？" },
        { question: "What are they doing?", answer: "- 他们在做什么？" },
        { question: "What do they want?", answer: "- 他们想要什么？" },
        { question: "Do you think Floppy will get the ball back?", answer: "- 你认为弗洛比会把球捡回来吗？" },
        { question: "What does Kipper want Floppy to do?", answer: "- 基普想让弗洛比做什么？" },
        { question: "Will Floppy stay there?", answer: "- 弗洛比会待在那里吗？" },
        { question: "What is Floppy doing?", answer: "- 弗洛比在做什么？" }
      ]
    },
    {
      id: "l1-22",
      level: "undefined",
      episode: "L122",
      title: "What a Din!",
      extensionEn: `Stop! What a din! Hey, monkey, come back, it's time to read a book. Today we are gonna read this book, it's called What a Din! What a din! What does a din mean? Noise! Oh, my! I don't like noise. Do you like noise? Do you like a din? No, I don't like it. OK, let's see what's happening. 
 
There is Biff. Biff has a pan and a big red pot. Pan, ta-da, this is the pan. And this is the red pot. What is this, everyone? This is called an egg beater. You have the egg in a bowl and you use the egg beater to beat, beat, beat the egg. And then this one is a big spoon. Oh, I know. They are the things you use to cook in the kitchen. And what is Biff doing? Biff is knocking on them to the music. Music? Where is the music? Monkey, look, this is a CD and Biff is putting the CD in the CD player to play music, OK? 
 
Alright, so let's continue. Here, Chip has a tin. Bang, bang, bang, this is the tin. And what is Chip holding? It's called a spatula. Spatula! You usually cook beef steak with this. Bang, bang, bang, to music. What has Kipper got? What do you think? I don't know, let's find out. 
 
Kipper has a can. Wow, this is a can. And then Kipper is using a spoon to knock on it. Bang, bang, bang, and then dad has the bin, it is a dust bin. Bang, bang, bang, well, everyone is having so much fun. What about mum? Mum is not happy. Mum doesn't like the noise. Mummy, put on your ear defenders. Monkey, that's a really good idea. 
 
And look, mum has put on her ear defenders, ear defenders. Ban, crash, bang! What a din! And then look, Biff is playing so fast. Oh my god! What a din! Do you like it, monkey? Well, I don't like it. 
 
What's in mum's hand? It's called a feather duster? Feather duster? What does it do? Do you eat it? No, you use it to clean the dust on the table. Oh, my table looks so clean. What is mum doing? Oh, mum is conducting a band. And everyone is bang, bang, bang, making a din. But I think it should be better because we have got a conductor conducting and everyone is playing together that makes a better music. What a din! Everyone is having fun except for one, Floppy! Floppy, what are you doing? What a din! What are you doing? Wow, it's such a fun moment! I want to join them actually.`,
      extensionCn: `停！哇，真吵！嘿，猴子，回来吧，时间读书了。今天我们要读这本书，它叫《What a Din!》。哇，真吵！Din是什么意思？噪音！哦，我不喜欢噪音。你喜欢噪音吗？你喜欢吵闹吗？不，我不喜欢。好了，我们来看看到底发生了什么。
这里是Biff。Biff有一个平底锅和一个大红锅。平底锅，哗啦，这是平底锅。还有这个是红锅。大家看看这个是什么？这个叫打蛋器。你把鸡蛋放在碗里，用打蛋器打，打，打鸡蛋。然后这是一个大勺子。哦，我知道了，它们都是厨房用具。那么Biff在做什么呢？Biff正在用它们敲打音乐。音乐？音乐在哪儿呢？猴子，看看，这是一个CD，Biff把CD放进CD播放器里播放音乐，好吗？
好，继续。这里是Chip，Chip有一个罐头。砰，砰，砰，这是罐头。Chip拿着的是什么？这是一个铲子。铲子！你通常用它来做牛排。砰，砰，砰，伴随着音乐。Kipper拿的是什么？你们觉得呢？我不知道，我们来找找看。
Kipper拿的是一个罐头。哇，这真是个罐头。然后Kipper用勺子敲打它。砰，砰，砰，然后爸爸拿的是垃圾桶，是个垃圾桶。砰，砰，砰，好，大家玩得很开心。那么妈妈呢？妈妈不高兴。妈妈不喜欢噪音。妈妈，戴上你的耳罩吧。猴子，真是个好主意。
看看，妈妈戴上了耳罩，耳罩。砰，砰，砰！哇，真吵！然后看看，Biff玩的太快了。哦我的天！真是吵死了！你喜欢吗，猴子？嗯，我不喜欢。
妈妈手里拿的是什么？这是个羽毛掸子。羽毛掸子？它是做什么的？你用它吃吗？不，你用它清理桌子上的灰尘。哦，我的桌子看起来好干净。妈妈在做什么？哦，妈妈正在指挥一个乐队。大家都在砰，砰，砰，制造噪音。但我认为应该做得更好，因为我们有指挥带领，大家一起演奏，这样会产生更好的音乐。哇，真吵！大家都玩得很开心，只有一个不开心的，Floppy！Floppy说：“你们在做什么？哇，真吵！你们在做什么？”哇，真是一个有趣的时刻！其实我也想加入他们。`,
      vocabulary: [
        { word: "Din", phonetic: "dɪn", meaning: "噪音" },
        { word: "Pan", phonetic: "pæn", meaning: "平底锅" },
        { word: "Pot", phonetic: "pɒt", meaning: "锅" },
        { word: "Egg beater", phonetic: "ɛɡ ˈbiːtə", meaning: "打蛋器" },
        { word: "Spatula", phonetic: "ˈspætjʊlə", meaning: "铲子" },
        { word: "Tin", phonetic: "tɪn", meaning: "罐头" },
        { word: "Spoon", phonetic: "spuːn", meaning: "勺子" },
        { word: "Bin", phonetic: "bɪn", meaning: "垃圾桶" },
        { word: "Defenders", phonetic: "dɪˈfɛndərz", meaning: "防护装置" },
        { word: "Ear defenders", phonetic: "ɪə dɪˈfɛndəz", meaning: "耳罩" },
        { word: "Feather duster", phonetic: "ˈfɛðər ˈdʌstər", meaning: "羽毛掸子" },
        { word: "Conductor", phonetic: "kənˈdʌktər", meaning: "指挥（乐队）" },
        { word: "Noise", phonetic: "nɔɪz", meaning: "噪音" },
        { word: "Music", phonetic: "ˈmjuːzɪk", meaning: "音乐" },
        { word: "CD player", phonetic: "ˈsiː diː ˈpleɪər", meaning: "CD 播放器" },
        { word: "Beef steak", phonetic: "biːf steɪk", meaning: "牛排" },
        { word: "Crash", phonetic: "kræʃ", meaning: "碰撞，撞击" },
        { word: "Bang", phonetic: "bæŋ", meaning: "砰，猛击声" },
        { word: "Knock", phonetic: "nɒk", meaning: "敲击" },
        { word: "Clean", phonetic: "kliːn", meaning: "清洁" },
        { word: "Conduct", phonetic: "kənˈdʌkt", meaning: "指挥" },
        { word: "Band", phonetic: "bænd", meaning: "乐队" },
        { word: "Table", phonetic: "ˈteɪbəl", meaning: "桌子" },
        { word: "Join", phonetic: "dʒɔɪn", meaning: "加入" },
        { word: "Fun", phonetic: "fʌn", meaning: "有趣，乐趣" },
        { word: "Moment", phonetic: "ˈmoʊmənt", meaning: "时刻" }
      ],
      qa: [
        { question: "What can you see?", answer: "/ 你能看到什么？" },
        { question: "What is Biff doing?", answer: "/ Biff 在做什么？" },
        { question: "What does Chip have?", answer: "/ Chip 有什么？" },
        { question: "What is Chip doing?", answer: "/ Chip 在做什么？" },
        { question: "What does Kipper have?", answer: "/ Kipper 有什么？" },
        { question: "What does Daddy have?", answer: "/ Daddy 有什么？" },
        { question: "What are they doing?", answer: "/ 他们在做什么？" },
        { question: "Are they happy?", answer: "/ 他们开心吗？" },
        { question: "Is Mommy happy?", answer: "/ 妈妈开心吗？" },
        { question: "What is Mommy doing?", answer: "/ 妈妈在做什么？" },
        { question: "What's on Mommy's ears?", answer: "/ 妈妈耳朵上戴着什么？" }
      ]
    },
    {
      id: "l1-23",
      level: "undefined",
      episode: "L123",
      title: "See Me Skip!",
      extensionEn: `Hey, Susan, what are you doing? I am skipping rope. Now look, today we are gonna talk about See Me Skip. This is a very interesting book. Why don't we read together? See My Skip! Look, this is a skip rope, skip rope. Can you do it? Can you skip rope? Yes, I can skip rope. Good job! 
 
Now look Biff is skipping rope. See me skip. And Floppy is very happy to see this. And there is dad. Dad is brushing a shoe. Dad is working. And he is wearing gloves, rubber gloves. 
 
And then, oh, look, Biff is jumping so high! Jump, jump, jump, skip, skip, skip. Wow, I like to do this every day. Do you skip rope every day? Uh, I don't. I don't. Monkey, do you do it every day? No, I don't. Biff is so cool. And then, this is the way. Look, you've got to skip rope like this every day. And here comes dad. What is in dad's hand? That's called a peg, peg. Oh, dad is trying to hang the shoes to dry. And look, Chip is watching too. 
 
And then, what? Dad wants to try. And look, dad is wearing an apron and apron can stop your clothes from getting dirty. And there is a lobster on it. And dad is trying to skip, skip, skip. Come on, dad. Can you skip too? Yes, I can. I skip like you. Wow, look, dad is skipping very well. And then Biff is showing this thumb kin which means good job, bravo, excellent. Ok, but look at Floppy. Floppy goes, can you do it? And then, look at me. Look at me go! Wow, dad is jumping faster and faster. Look out, dad, be careful. Look, Kipper is very excited and Kipper says, look, look, daddy is jumping so fast, good job, go, go, go! And then look at Biff, Biff is a little bit of worried, maybe. And then Chip is 
thinking really? Dad? Wow! And Floppy goes oh, no, I can't look. 
 
And then what happened? Splish, splash! Oh no, oh no! What happened? Look at dad. Dad fell into the paddling pool. And the water is spilled everywhere. Wait a minute, I think somebody got wet. Who got wet? Kipper, Biff and Chip. Oh, no, they got wet. Funny dad.`,
      extensionCn: `嘿，苏珊，你在做什么？我在跳绳。现在看看，今天我们要讲的是《See Me Skip》。这是一本非常有趣的书。我们一起读吧！看看我跳绳！看，这是跳绳，跳绳。你能做吗？你会跳绳吗？是的，我会跳绳。做得好！
现在看看，Biff 在跳绳。看看我跳绳。Floppy 看着很高兴。那是爸爸。爸爸在刷鞋子。爸爸在工作。他戴着手套，橡胶手套。
然后，哦，看看，Biff 跳得好高！跳，跳，跳，跳，跳，跳。哇，我喜欢每天做这个。你每天跳绳吗？嗯，我不跳，我不跳。猴子，你每天跳绳吗？不，我不跳。Biff 真酷。然后，这是方法。看，你得像这样每天跳绳。然后爸爸来了。爸爸手里拿着什么？那叫衣夹，衣夹。哦，爸爸正在试着把鞋子挂起来晒。看，Chip 也在看。
然后，怎么了？爸爸想试试。看，爸爸戴着围裙，围裙可以防止弄脏衣服。上面还有一只龙虾图案。爸爸正在试着跳绳，跳，跳，跳。来吧，爸爸。你也能跳吗？是的，我可以。我像你一样跳。哇，看看，爸爸跳得真好。然后Biff 竖起大拇指，意思是做得好，太棒了，优秀。好，但看看 Floppy。Floppy 说，你能做吗？然后，看看我。看我跳！哇，爸爸跳得越来越快。小心，爸爸，注意安全。看，Kipper 很兴奋，Kipper 说，看，看看，爸爸跳得这么快，做得好，加油，继续！然后看看 Biff，Biff 可能有点担心。然后 Chip 想，真的吗？爸爸？哇！Floppy 说，哦，不，我不敢看。
然后发生了什么？扑通，扑通！哦不，哦不！发生了什么？看爸爸。爸爸掉进了游泳池里。水到处都溅了出来。等一下，我想有人湿了。谁湿了？Kipper、Biff 和 Chip。哦不，他们湿了。爸爸真好笑。`,
      vocabulary: [
        { word: "skipping rope", phonetic: "ˈskɪpɪŋ rəʊp", meaning: "跳绳" },
        { word: "gloves", phonetic: "ɡlʌvz", meaning: "手套" },
        { word: "rubber gloves", phonetic: "ˈrʌbər ɡlʌvz", meaning: "橡胶手套" },
        { word: "brush", phonetic: "brʌʃ", meaning: "刷子" },
        { word: "jump", phonetic: "dʒʌmp", meaning: "跳跃" },
        { word: "peg", phonetic: "pɛɡ", meaning: "衣夹" },
        { word: "apron", phonetic: "ˈeɪprən", meaning: "围裙" },
        { word: "lobster", phonetic: "ˈlɒbstər", meaning: "龙虾" },
        { word: "spoon", phonetic: "spuːn", meaning: "勺子" },
        { word: "skip", phonetic: "skɪp", meaning: "跳跃" },
        { word: "thumb", phonetic: "θʌm", meaning: "大拇指" },
        { word: "paddling pool", phonetic: "ˈpædlɪŋ puːl", meaning: "塑料小泳池" },
        { word: "wet", phonetic: "wɛt", meaning: "湿的" },
        { word: "excited", phonetic: "ɪkˈsʌɪtɪd", meaning: "兴奋的" },
        { word: "careful", phonetic: "ˈkɛəfʊl", meaning: "小心的" }
      ],
      qa: [
        { question: "What is this?", answer: "这是什么？" },
        { question: "What is Biff gonna do?", answer: "Biff 要做什么？" },
        { question: "Is Biff good at skipping?", answer: "Biff 擅长跳绳吗？" },
        { question: "What is daddy doing?", answer: "爸爸在做什么？" },
        { question: "What is daddy gonna do?", answer: "爸爸要做什么？" },
        { question: "How does Floppy feel?", answer: "Floppy 感觉怎么样？" },
        { question: "What's wrong with Floppy?", answer: "Floppy 怎么了？" },
        { question: "Why?", answer: "为什么？" },
        { question: "What happened?", answer: "发生了什么？" },
        { question: "How does mommy feel?", answer: "妈妈感觉怎么样？" }
      ]
    },
    {
      id: "l1-24",
      level: "undefined",
      episode: "L124",
      title: "The Mud Pie",
      extensionEn: `Today we are gonna read The Mud Pie. Pie? I like banana pies. Yes, monkey, I know but you can not eat a mud pie because it is made of mud, it is not food. You can enjoy the banana pie, apple pie, grape pie, cherry pie, all kinds of yummy pies but not the mud pie. You can play it. Let's play with Kipper. 
 
Look, this is the backyard of the family. Everyone is busy doing something. Look, this is Kipper. And Kipper is playing mud. Squeeze, squezze, squezze. I love playing mud, do you like it? I like playing mud. That's right. And this is mud in my hand. And what is daddy doing? Daddy is doing the dishes again. Daddy is always doing dishes. What a good dad! What about Chip and Biff? They are playing a new game. It is called pole tennis, pole tennis. That seems fun. What about mum? What is mum doing here? Mum is holding a very long hose. I know mum is watering flowers. Everyone is busy doing something. 
 
Here comes Floppy. Floppy is chasing a butterfly. I love butterflies. They are beautiful. And then here is Kipper, put in water. This is a watering can, watering can. How do you use it? Of course, you put in water and you water the flowers. This is a watering can, watering can. So put in water, mix in sand, mix, mix, mix, you got mud, water and sand. And what do you get?
 
Tip it out, this is the mud. Tip it out, tip. Do you remember that song that goes I am a little teapot, short and stout. Here is my handle, here is my spout. When I get steamed up, then I shout. Tip me over, pour me out! This is called tip. So tip it out, pat it flat. 
 
OK. And then something bad is going to happen. This is a mud pie and the mud pie is flying. Why? Look, Kipper tripped over the hose. And then what is gonna happen next? 
 
Look at Floppy. Not a hat, it is a mud pie. And now it went on Floppy's head. Floppy got, eh? What's that? Eh, oh, it is a mud pie hat. Everyone is laughing. This is so much fun.`,
      extensionCn: `今天我们要读《泥饼》。饼？我喜欢香蕉饼。是的，猴子，我知道，但你不能吃泥饼，因为它是用泥巴做的，不是食物。你可以吃香蕉饼、苹果饼、葡萄饼、樱桃饼，各种美味的饼，但不是泥饼。你可以玩泥饼。我们和Kipper一起玩吧。
看，这是家里的后院。每个人都忙着做自己的事。看，这是Kipper，Kipper在玩泥巴。挤，挤，挤。我喜欢玩泥巴，你喜欢吗？我喜欢玩泥巴。没错。这是我手里的泥巴。爸爸在做什么？爸爸又在洗碗了。爸爸总是洗碗。真是个好爸爸！Chip和Biff在做什么？他们在玩一个新游戏，叫做杆网球，杆网球。听起来很好玩。那妈妈呢？妈妈在做什么？妈妈拿着一根很长的水管。我知道，妈妈在浇花。每个人都在忙着做自己的事。
Floppy来了。Floppy在追蝴蝶。我喜欢蝴蝶，它们很美丽。然后Kipper把水倒进了水壶里。这是一个浇水壶，浇水壶。怎么用呢？当然是把水倒进去，然后浇花。这是浇水壶，浇水壶。所以倒水，混合沙子，混，混，混，你得到了泥巴、水和沙子。那你得到的是什么呢？
倒出来，这是泥巴。倒出来，倒。你记得那首歌吗？《我是小茶壶，胖又矮。这里是我的把手，这里是我的嘴。蒸汽出来时，我就会喊，倒过来，倒出来！》这叫做倒。所以倒出来，拍平。
好了，然后发生了一件坏事。这是泥饼，泥饼飞了。为什么呢？看，Kipper绊倒在水管上。接下来会发生什么呢？
看Floppy。那不是帽子，是泥饼。现在它掉在了Floppy的头上。Floppy怎么样了？呃？哦，是个泥饼帽。大家都在笑。这真是太有趣了。`,
      vocabulary: [
      ],
      qa: [
        { question: "What is in Kipper's hand?", answer: "- Kipper 手里有什么？" },
        { question: "Do you like playing in the mud?", answer: "- 你喜欢玩泥巴吗？" },
        { question: "What's in Kipper's hand?", answer: "- Kipper 手里有什么？" },
        { question: "What happened to Biff?", answer: "- Biff 发生了什么？" },
        { question: "Will it hurt?", answer: "- 会疼吗？" },
        { question: "What's Kipper doing?", answer: "- Kipper 在做什么？" },
        { question: "Whose legs are they?", answer: "- 那是谁的腿？" },
        { question: "What's wrong with Kipper?", answer: "- Kipper 怎么了？" },
        { question: "Where is the mud pie?", answer: "- 泥饼在哪里？" },
        { question: "Is Floppy happy?", answer: "- Floppy 开心吗？" },
        { question: "How does Kipper feel?", answer: "- Kipper 有什么感觉？" },
        { question: "How do the others feel?", answer: "- 其他人是什么感觉？" }
      ]
    },
    {
      id: "l1-25",
      level: "undefined",
      episode: "L125",
      title: "The Headache",
      extensionEn: `Country road, take me home, to the place I belong. Hey, monkey, would you please stop for a moment? You are giving me a headache. You are being so loud. Today we are gonna read this book, it is called the headache. OK? Headache, oh, my head aches, my head hurts. Oh, headache. Why? Maybe because I did not sleep well. And here, look this is daddy. Do you think daddy is having a headache? I don't think so. Daddy looks happy. And daddy has opened this box and daddy is taking out a trumpet, trumpet, trumpet. Trumpet can be loud. So let's see what happens, OK? 
 
Here is our daddy, and daddy is playing the trumpet. Look, daddy is sitting on the stool and this is a music stand, music stand. Why? Why is daddy using this? It is because there is the sheet music, sheet music. So the music stand holds the sheet music, so that daddy knows which notes to play. And look, our children, we have Chip, Biff and Kipper. They are looking from behind the wall. What is daddy doing? Daddy is playing the trumpet. So here it says Dad had a trumpet. Dad had a trumpet. Dad is practicing. 
 
Then here comes Chip. Chip had a drum. Look, Chip is playing the drum happily. And then what about daddy? Daddy is still playing the trumpet. But look at daddy's face. I am gonna play more loudly than you. So daddy is saying shh, I am playing the trumpet.
 
Er oh, they are not alone. Here comes Biff. Biff had a recorder. Look, this is a recorder, you play it this way. Oh, no, one, two, three, three people are playing music loudly. So everything is getting louder, right? Look, what's happening here? Daddy is getting a little bit angry. 
 
Oh, no, here comes Kipper. So Kipper had a guitar. Do you know how many strings does a guitar have? A guitar should have six strings. But now look at this. Two strings are broken. I wonder what kind of music it can play. And now one, two, three, four, four people, they are playing very loudly. I can't imagine how loud it is. And look, the stool has tipped over. Oh, no!  
 
And then here comes mum. Oh, no! Mum had a headache. Why? Because everyone is playing so loudly and it is not beautiful music. Loud noisy music! The end! So monkey, tell me, do you want to listen to this? No, of course not, it will give me a headache.`,
      extensionCn: `乡间小路，带我回家，到属于我的地方。嘿，猴子，你能停一会儿吗？你让我头疼。你太吵了。今天我们要读这本书，叫《头疼》。好吧？头疼，哦，我的头疼，我的头好痛。哦，头疼。为什么？也许是因为我没睡好。看，这是爸爸。你觉得爸爸头疼吗？我不这么认为。爸爸看起来很开心。爸爸打开了这个盒子，拿出了一把小号，小号，小号。小号可以很吵。让我们看看会发生什么，好吗？这是我们的爸爸，爸爸在吹小号。看，爸爸坐在凳子上，这是一个乐谱架，乐谱架。为什么？为什么爸爸要用这个？因为上面有乐谱，乐谱。所以乐谱架用来放乐谱，这样爸爸知道该演奏哪个音符。看，我们的孩子们，Chip、Biff 和 Kipper，他们从墙后看着。爸爸在做什么？爸爸在吹小号。书上写着“爸爸有一把小号，爸爸在练习。”然后 Chip 出现了。Chip 有一个鼓。看，Chip 很开心地在打鼓。那么爸爸呢？爸爸还在吹小号。但看爸爸的脸，“我要比你更大声地演奏。”于是爸爸说：“嘘，我在吹小号。”哦，糟糕，他们不是一个人。Biff 出现了。Biff 有一个竖笛。看，这是一支竖笛，你这样吹。哦，不，一，二，三，三个人在大声地演奏音乐。于是声音越来越大，对吗？看，这里发生了什么？爸爸有点生气了。哦，糟糕，Kipper 出现了。Kipper 有一把吉他。你知道吉他有几根弦吗？吉他应该有六根弦。但看看这个，有两根弦断了。我很好奇它能演奏什么样的音乐。现在，一，二，三，四，四个人，他们演奏得非常响。我无法想象有多吵。看，凳子都翻倒了。哦，不！然后妈妈来了。哦，不！妈妈头疼了。为什么？因为每个人都演奏得太吵了，而且这不是美妙的音乐。嘈杂的噪音音乐！结束！所以猴子，告诉我，你想听这个吗？不，当然不，这会让我头疼。`,
      vocabulary: [
        { word: "country road", phonetic: "ˈkʌntri roʊd", meaning: "乡间小路" },
        { word: "headache", phonetic: "ˈhɛdeɪk", meaning: "头疼" },
        { word: "trumpet", phonetic: "ˈtrʌmpɪt", meaning: "小号" },
        { word: "music stand", phonetic: "ˈmjuːzɪk stænd", meaning: "乐谱架" },
        { word: "sheet music", phonetic: "ʃiːt ˈmjuːzɪk", meaning: "乐谱" },
        { word: "drum", phonetic: "drʌm", meaning: "鼓" },
        { word: "recorder", phonetic: "rɪˈkɔːrdər", meaning: "竖笛" },
        { word: "guitar", phonetic: "ɡɪˈtɑːr", meaning: "吉他" },
        { word: "loud", phonetic: "laʊd", meaning: "大声的" },
        { word: "noisy", phonetic: "ˈnɔɪzi", meaning: "嘈杂的" },
        { word: "stool", phonetic: "stuːl", meaning: "凳子" },
        { word: "broken", phonetic: "ˈbroʊkən", meaning: "破裂的" },
        { word: "angry", phonetic: "ˈæŋɡri", meaning: "生气的" },
        { word: "beautiful", phonetic: "ˈbjuːtəfəl", meaning: "美丽的" }
      ],
      qa: [
        { question: "What is Daddy doing?", answer: "爸爸在做什么？" },
        { question: "Where are the kids?", answer: "孩子们在哪里？" },
        { question: "What does Chip have?", answer: "Chip 拿了什么？" },
        { question: "Whose leg is this?", answer: "这是谁的腿？" },
        { question: "What does Biff have?", answer: "Biff 拿了什么？" },
        { question: "Whose leg is this?", answer: "这是谁的腿？" },
        { question: "What does Kipper have?", answer: "Kipper 拿了什么？" },
        { question: "What’s this?", answer: "这是什么？" },
        { question: "Whose leg is this?", answer: "这是谁的腿？" },
        { question: "Do you notice that Daddy has stood up?", answer: "你注意到爸爸站起来了吗？" },
        { question: "What’s wrong with Mummy?", answer: "妈妈怎么了？" },
        { question: "What is Mummy doing?", answer: "妈妈在做什么？" },
        { question: "Why?", answer: "为什么？" }
      ]
    },
    {
      id: "l1-26",
      level: "undefined",
      episode: "L126",
      title: "At the Park",
      extensionEn: `Hey, monkey, where are you allowed to play in the park? Susan, what do you mean? Why am I not allowed? Look at this book, it says at the park. Look at this sign, it says no dogs. So I think maybe animals are not allowed to play in the park. Dogs can not but monkeys can, especially me, I speak good English. Reasonable! So why don't we read this book and find it out? Look, the family are going to the park. Look, here we have daddy, mummy, and the three children and Floppy. Look, how happy Floppy is! You know Floppy says, we are going to the park, we are going to the park, yeah! And that is the park. 
 
When they arrive at the park, they see a sign that says no dogs, no dogs, dogs can not enter. So daddy has to tie Floppy here. Look at Floppy. Floppy is very disappointed and very angry. But look at Kipper. Kipper has run inside. Everyone went to the park. Everyone went to the park. Well, what do you see there? I think I see the see-saw, the slide, and the swing. I love them so much. 
 
There they are. They are playing on the slide. And look, there is Chip! Chip has climbed up, up, up. And Chip, be careful! You must hold the handrail very well, otherwise, you might fall down. So be careful! And Chip went on the slide. Wee, wee, and he can slide down. I love that. And I enjoy it! And look at Floppy! I really want to play. I really want to play. Oh, sorry, Floppy, you are not allowed in. 
 
And then Biff went on the horse. This is a spring horse. Boeing! So you can go up and down, up and down on the horse. And, yeah, I am so happy here. And there is Floppy dismayed, why am I not allowed in? Not happy! And daddy says good job, Biff! 
 
Then Kipper went on the swing. Fly, higher, daddy, push, push, push me higher. Wow, Kipper is having so much fun on the swing. I love playing this well, it's so cool. And then mum went on the see-saw. And look, two children on the one side, and mum is there. And then they go up and down, up and down. Oh, look at Floppy! Everyone is having fun, but Floppy is feeling sleepy. Poor Floppy. He is not allowed in. 
 
And then when they finish, they feel happy and they are ready to go home. Floppy is asleep. Floppy is asleep soundly. And do you know what Floppy is dreaming of? I think he must be dreaming of playing in the park too. Poor Floppy! Stroke, stroke. So Floppy went to sleep. So next time, if you want to go to the park, you need to make sure if your pet can go in, otherwise, they are gonna feel bored and fall asleep.`,
      extensionCn: `嘿，小猴子，你可以在公园里玩什么地方？
 苏珊，你什么意思？为什么我不能玩？
 看看这本书，它的名字叫《在公园》。看看这个标志，上面写着禁止狗进入。所以我想也许动物不可以在公园玩。狗不可以，但猴子可以，尤其是我，我的英语说得很好。很有道理！那我们为什么不读这本书来弄明白呢？你看，这一家人要去公园了。看，爸爸、妈妈，还有三个孩子和Floppy。看，Floppy多开心啊！你知道Floppy在说什么吗？我们要去公园了，我们要去公园了，耶！那就是公园。
他们到达公园时，看到了一个标志，上面写着禁止狗进入。所以爸爸不得不把Floppy拴在这里。看看Floppy。Floppy很失望，也很生气。但是看看Kipper。Kipper已经跑进去了。每个人都进了公园。每个人都进了公园。嗯，你在公园里看到了什么？我想我看到了跷跷板、滑梯和秋千。我太喜欢它们了。
他们在那里玩滑梯。看，那里是Chip！Chip爬上去了，爬上去了。Chip，小心！你一定要抓紧扶手，不然可能会摔下来。所以小心！然后Chip滑下来了。嗖，嗖，他滑了下来。我太喜欢了，我很享受！再看看Floppy！我真的很想玩。我真的很想玩。哦，抱歉，Floppy，你不可以进去。
然后Biff去玩弹簧木马。这是一匹弹簧马。波音！所以你可以上下颠簸，上下颠簸在木马上。是的，我在这里太开心了。再看看Floppy，心情低落：为什么我不能进去？Floppy很不高兴。爸爸说：干得好，Biff！
接着Kipper去玩秋千。飞得更高，爸爸，推我，推我，再高一点。哇，Kipper在秋千上玩得太开心了。我也喜欢玩这个，太酷了。然后妈妈去玩跷跷板。看，两个孩子坐在一边，妈妈坐在另一边。然后他们一上一下，一上一下。哦，看看Floppy！每个人都玩得很开心，但Floppy却开始困了。可怜的Floppy，他不可以进去。
玩完之后，他们都很开心，准备回家了。Floppy睡着了。Floppy睡得很香。你知道Floppy在梦什么吗？我觉得他一定梦到了自己也在公园玩耍。可怜的Floppy！轻轻抚摸他。所以Floppy睡着了。下次，如果你想去公园，你需要确认你的宠物能不能进去，不然它们会觉得无聊，然后睡着了。`,
      vocabulary: [
        { word: "monkey", phonetic: "ˈmʌŋki", meaning: "猴子" },
        { word: "park", phonetic: "pɑːrk", meaning: "公园" },
        { word: "sign", phonetic: "saɪn", meaning: "标志" },
        { word: "allowed", phonetic: "əˈlaʊd", meaning: "被允许的" },
        { word: "disappointed", phonetic: "ˌdɪsəˈpɔɪntɪd", meaning: "失望的" },
        { word: "angry", phonetic: "ˈæŋɡri", meaning: "生气的" },
        { word: "see-saw", phonetic: "ˈsiː sɔː", meaning: "跷跷板" },
        { word: "slide", phonetic: "slaɪd", meaning: "滑梯" },
        { word: "swing", phonetic: "swɪŋ", meaning: "秋千" },
        { word: "handrail", phonetic: "ˈhændˌreɪl", meaning: "扶手" },
        { word: "careful", phonetic: "ˈkerfl", meaning: "小心的" },
        { word: "spring horse", phonetic: "sprɪŋ hɔːrs", meaning: "弹簧木马" },
        { word: "push", phonetic: "pʊʃ", meaning: "推" },
        { word: "higher", phonetic: "ˈhaɪər", meaning: "更高" },
        { word: "fun", phonetic: "fʌn", meaning: "乐趣" },
        { word: "tired", phonetic: "taɪrd", meaning: "累的" },
        { word: "dream", phonetic: "driːm", meaning: "梦" },
        { word: "stroke", phonetic: "stroʊk", meaning: "轻抚" },
        { word: "bored", phonetic: "bɔːrd", meaning: "无聊的" },
        { word: "notice", phonetic: "ˈnoʊtɪs", meaning: "注意到" }
      ],
      qa: [
        { question: "Where are they?", answer: "他们在哪里？" },
        { question: "Why is Daddy tying Floppy?", answer: "爸爸为什么要拴住Floppy？" },
        { question: "What is Chip doing?", answer: "Chip在做什么？" },
        { question: "Is Floppy happy?", answer: "Floppy开心吗？" },
        { question: "Where is Biff?", answer: "Biff在哪里？" },
        { question: "What is Daddy doing?", answer: "爸爸在做什么？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "Are they having fun?", answer: "他们玩得开心吗？" },
        { question: "How about Floppy?", answer: "Floppy呢？" },
        { question: "What is Floppy doing?", answer: "Floppy在做什么？" },
        { question: "Why?", answer: "为什么？" }
      ]
    },
    {
      id: "l1-27",
      level: "undefined",
      episode: "L127",
      title: "Fancy Dress",
      extensionEn: `Susan, what are you doing? Well, I am preparing to go to a fancy dress party. How do I look? Do I look good? Yes, OK! Now look, the family are going to the fancy dress party too. And let's see. 
 
Ta-da, wow, look at mummy, do you think what mummy is wearing is fancy enough? Well, for a scarecrow, it is. Mum was a scarecrow, scarecrow. What is a scarecrow? That's a thing you see in the field and you know some crows, they would come and eat the wheat. And if you put a scarecrow there, the crows will think, oh, no there is someone, so we can not eat. Now look, this is a scarecrow. And mummy is wearing clothes with patches and straw. That's really cool. 
 
And then, here is Biff. Biff was a pirate. A pirate should have a knife and a pirate should have a pirate hat. Really cool! And daddy is tying a scarf around Biff's neck. It is so cool. And then Chip was a pirate too. Look at Chip. Chip has a hook. That's a hook. You know, some pirates, they lose one arm and they put a hook on. And then he is wearing an ear ring. And this one is an eye patch, eye patch. An eye patch will make you look really like a pirate. 
 
Oh, look at this. Our Kipper was an angel, an angel boy with two wings. And there is a halo. This is called a halo over his head. And then they are ready. Mum has got a carrot shaped nose. This is a scarecrow, two pirates and an angel. What about daddy? I wonder what daddy is wearing. 
 
Cock A Doodle Doo! Oh my god! Dad was a chicken. So dad is wearing the chicken costume holding a pair of wings. Cock A Doodle Doo! And then everyone got ha, ha, ha, daddy you are funny. And then daddy goes, oh, why do I get to wear this stupid one? Oh, what do you think of this, is it stupid? I think it is funny. Daddy is really cool. 
 
And there they are. Everyone is having fun. And everyone was happy at this fancy dress party. What else do you see? I think I see a robot, I see a witch, I see a king. And everyone is wearing a fancy dress. That's so cool. I feel like going and joining them.`,
      extensionCn: `苏珊，你在做什么？嗯，我正在准备参加一个化装舞会。我看起来怎么样？好看吗？是的，好看！现在看，这一家人也要去化装舞会了。让我们看看吧。哒哒，哇，看看妈妈，你觉得妈妈穿得够华丽吗？嗯，对于稻草人来说，是够华丽了。妈妈装扮成了稻草人，稻草人。什么是稻草人？那是一种你在田地里看到的东西，乌鸦会来吃麦子。如果你放一个稻草人在那，乌鸦会想哦，不，那边有人，所以我们不能吃。现在看，这就是一个稻草人。妈妈穿着有补丁和稻草的衣服。真是太酷了。然后，这是比夫。比夫装扮成了一个海盗。一个海盗应该有一把刀，还应该有一顶海盗帽。真酷！爸爸正在给比夫的脖子系上一条围巾。真的很酷。然后奇普也装扮成了一个海盗。看看奇普，奇普有一个钩子。这是一个钩子。你知道，有些海盗会失去一只手臂，然后装上一个钩子。接着他戴了一只耳环。还有这个是眼罩，眼罩。戴上眼罩会让你看起来真的很像一个海盗。哦，看这个。我们的小基珀装扮成了一个天使，一个有两只翅膀的小天使男孩。他头上有一个光环。这叫做光环。然后，他们都准备好了。妈妈有一个胡萝卜形状的鼻子。这是一个稻草人、两个海盗和一个天使。爸爸呢？我很好奇爸爸穿了什么。咯咯咯！天啊！爸爸装扮成了一只鸡。所以爸爸穿着鸡的服装，手上拿着一对翅膀。咯咯咯！然后大家都哈哈大笑，爸爸，你太搞笑了。然后爸爸说：哦，为什么我得穿这个傻乎乎的衣服？你怎么看这个？它傻吗？我觉得它很有趣。爸爸真的很酷。然后他们来了，大家都玩得很开心。在这个化装舞会上每个人都很高兴。你还能看到什么？我好像看到了一个机器人，一个女巫，一个国王。每个人都穿着华丽的服装。真是太酷了！我都想去参加了！`,
      vocabulary: [
      ],
      qa: [
        { question: "What is Mommy doing?", answer: "妈妈在做什么？" },
        { question: "What does Mommy dress up as?", answer: "妈妈装扮成什么？" },
        { question: "What do Chip and Biff dress up as?", answer: "Chip 和 Biff 装扮成什么？" },
        { question: "What does Kipper pretend to be?", answer: "Kipper 假扮成什么？" },
        { question: "What does daddy pretend to be?", answer: "爸爸假扮成什么？" },
        { question: "Is daddy happy?", answer: "爸爸高兴吗？" },
        { question: "Is everyone else happy?", answer: "其他人都高兴吗？" },
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "What else can you see?", answer: "你还能看到什么？" }
      ]
    },
    {
      id: "l1-28",
      level: "undefined",
      episode: "L128",
      title: "Push!",
      extensionEn: `Hey monkey, where are you going? I am going to the grange farm. Really? They are going to the grange farm too. Look, the family are driving their car to the farm. I wonder what happens. Let's get started. Push, push! What are they pushing? Let's see! 
 
Ta-da! I know what they are pushing. They are pushing their car. Look, their car is stuck in the mud. That's too bad. When your car is stuck in the mud, no matter how hard you try to drive, your car wouldn't go. So the car was stuck, stuck. That's too bad. What shall we do? And daddy was thinking of an idea. What's the idea? Let's see. 
 
Daddy sat back in the car and mum pushed it. So mum pushed it. Push, push! Do you think this was gonna work? I don't know. Let's find out. 
 
Obviously, it didn't. So the children got out of the car too. And Biff and Chip pushed it. Push, push. And mum pulled it. Pull, pull. Do you think this was gonna work? I don't know. 
 
And then, oh, wait a minute. There came a tractor. Where was the tractor? Look, the tractor came in. A tractor is a really powerful car. So the tractor pulled it. Pull, pull. And everyone else was pushing, even Kipper walked out of the car. So pushed, pushed. And Floppy was still inside, what's going to happen? 
 
And then, no, everyone face planted in the mud. That's bad! But daddy was so happy. We got our car out of the mud. Thanks to the tractor. But they, eh-oh. When they stood up, you are gonna see four funny muddy faces.`,
      extensionCn: `嘿，猴子，你要去哪儿？我去格兰奇农场。真的吗？他们也要去格兰奇农场。看，家人正在开车去农场。我想知道会发生什么。我们开始吧。推，推！他们在推什么？我们看看！
哒哒！我知道他们在推什么。他们在推他们的车。看，他们的车卡在泥里了。真糟糕。当你的车卡在泥里时，不管你怎么努力开车，车都走不动。所以车卡住了，卡住了。真糟糕。我们该怎么办？爸爸想到了一个主意。是什么主意？我们来看看。
爸爸坐回车里，妈妈在推车。所以妈妈推车。推，推！你觉得这个方法会有效吗？我不知道。我们看看。
显然，这个方法不起作用。于是孩子们也下车了。Biff和Chip推车。推，推。妈妈拉车。拉，拉。你觉得这个方法会有效吗？我不知道。
然后，等一下，来了一个拖拉机。拖拉机在哪里？看，拖拉机来了。拖拉机是一辆非常有力的车。所以拖拉机拉车。拉，拉。其他人也在推车，连Kipper也走出车外。所以推，推。Floppy还在车里，接下来会发生什么？
然后，不，大家都脸朝下摔进了泥里。真糟糕！但是爸爸很高兴。我们把车从泥里拉出来了。多亏了拖拉机。可是，他们，呃，哦。当他们站起来时，你会看到四张有趣的泥巴脸。`,
      vocabulary: [
        { word: "Grange farm", phonetic: "ɡreɪndʒ fɑːrm", meaning: "格兰奇农场" },
        { word: "Car", phonetic: "kɑːr", meaning: "车" },
        { word: "Mud", phonetic: "mʌd", meaning: "泥" },
        { word: "Stuck", phonetic: "stʌk", meaning: "卡住" },
        { word: "Push", phonetic: "pʊʃ", meaning: "推" },
        { word: "Pull", phonetic: "pʊl", meaning: "拉" },
        { word: "Tractor", phonetic: "ˈtræk.tər", meaning: "拖拉机" },
        { word: "Powerful", phonetic: "ˈpaʊərfəl", meaning: "强大的" },
        { word: "Floppy", phonetic: "ˈflɒpi", meaning: "Floppy（狗的名字）" },
        { word: "Face plant", phonetic: "feɪs plænt", meaning: "脸朝下摔倒" },
        { word: "Muddy faces", phonetic: "ˈmʌdi ˈfeɪsɪz", meaning: "脏脸" }
      ],
      qa: [
        { question: "What's the matter with the car?", answer: "- 车怎么了？" },
        { question: "What should we do?", answer: "- 我们应该怎么办？" },
        { question: "What is mommy doing?", answer: "- 妈妈在做什么？" },
        { question: "Does it work?", answer: "- 有用吗？" },
        { question: "What are they doing now?", answer: "- 他们现在在做什么？" },
        { question: "Why are Floppy and Kipper still in the car?", answer: "- 为什么Floppy和Kipper还在车里？" },
        { question: "What is this?", answer: "- 这是什么？" },
        { question: "What is the tractor doing?", answer: "- 拖拉机在做什么？" },
        { question: "Where is Kipper?", answer: "- Kipper在哪里？" },
        { question: "Did the car get out of the mud?", answer: "- 车从泥潭里出来了吗？" },
        { question: "What happened to them?", answer: "- 他们发生了什么事？" }
      ]
    },
    {
      id: "l1-29",
      level: "undefined",
      episode: "L129",
      title: "Good Old Mum",
      extensionEn: `You'd better watch out. You'd better not cry. You'd better not pout. I'm telling you why. Santa Claus is coming to town. Hi, everyone, Christmas is coming. And look, our mum is busy shopping for something. Oh, good old mum. What do you think good old mum is shopping for? It must be something related to Christmas. Let's get started. 
 
Mum put on a big red nose. A big red nose, that is so funny. Yes, I think mum looks like a clown. Do you think so, every one? Yes, funny red nose. And what's on the table? Mum is sitting at a dressing table. And here I see the hairbrush, I see the hair pin and some make up. Mummy is dressing her up as something. 
 
Mum put on a big pillow. What? A big pillow around mummy's waist. And mum is tying with a belt. That's funny. Mummy, you are making yourself look so fat and so funny. And everyone is wondering, mum, what are you doing? 
 
And mum put on big boots. Wow, these black boots are so big! Do you have black boots? I have black boots and they make me look so cool. And mum is putting on big boots, a red nose, and a pillow. Mum, you are really looking funny. 
 
And then, mum put on big eyebrows. Eyebrows. These are eyebrows. But look, mum has big eyebrows and white eyebrows. And mum also has put on mustache and beard, also white. Oh, mum, you are looking like an old person and an old man. Yes, I think so. She put on a big beard like an old man. 
 
Oh, that's why! Ho, ho, ho, said mum. Mum is dressed up as a Santa Claus. Susan, why is mum dressed up as a Santa. Well, because Christmas is coming, and probably it is mum's job to give out the presents and candy. And how about Kipper? Kipper is dressed up as an elf. Look at the pointy ears. Elf!`,
      extensionCn: `你最好小心点，你最好不要哭，你最好不要噘嘴，我告诉你原因：圣诞老人要来了！大家好，圣诞节快到了。看，我们的妈妈正忙着买东西呢。哦，亲爱的妈妈，你们觉得妈妈在买什么呢？肯定是和圣诞节有关的东西。让我们一起开始吧！
妈妈戴上了一个大红鼻子。一个大红鼻子，太搞笑了！是啊，我觉得妈妈看起来像个小丑。你们觉得呢，大家？是啊，真是滑稽的红鼻子。桌子上有什么呢？妈妈正坐在一个梳妆台前。我看到梳子、发夹，还有一些化妆品。妈妈正在把自己打扮成某个模样。
妈妈又围上了一个大枕头。什么？一个大枕头围在妈妈的腰上。然后妈妈用一条带子系了起来。这也太搞笑了吧！妈妈，你把自己搞得又胖又滑稽。每个人都很好奇，妈妈，你到底在干什么？
接着，妈妈穿上了一双大靴子。哇，这些黑靴子好大啊！你们有黑靴子吗？我有一双黑靴子，它们让我看起来很酷。而妈妈穿上了大靴子、红鼻子和枕头。妈妈，你真的看起来很滑稽。
然后，妈妈又戴上了浓密的眉毛。眉毛！这些是眉毛。可是你看，妈妈戴着大大的眉毛，而且是白色的眉毛。妈妈还戴上了胡子和胡须，也是白色的。哦，妈妈，你看起来像个老爷爷，是的，我觉得是。她戴上了一副大胡须，看起来像个老男人。
哦，原来是这样！吼吼吼！妈妈说。妈妈打扮成了圣诞老人！苏珊，为什么妈妈要打扮成圣诞老人呢？嗯，因为圣诞节快到了，而且可能妈妈的任务是分发礼物和糖果。那Kipper呢？Kipper打扮成了一个小精灵。看看那尖尖的耳朵，精灵！`,
      vocabulary: [
        { word: "better", phonetic: "ˈbetər", meaning: "更好" },
        { word: "pout", phonetic: "paʊt", meaning: "撅嘴，不高兴" },
        { word: "Santa Claus", phonetic: "ˈsæntə klɔːz", meaning: "圣诞老人" },
        { word: "Christmas", phonetic: "ˈkrɪsməs", meaning: "圣诞节" },
        { word: "busy", phonetic: "ˈbɪzi", meaning: "忙碌的" },
        { word: "related", phonetic: "rɪˈleɪtɪd", meaning: "有关的" },
        { word: "clown", phonetic: "klaʊn", meaning: "小丑" },
        { word: "dressing table", phonetic: "ˈdresɪŋ ˌteɪbl", meaning: "梳妆台" },
        { word: "hairbrush", phonetic: "ˈheərˌbrʌʃ", meaning: "发刷" },
        { word: "makeup", phonetic: "ˈmeɪkʌp", meaning: "化妆品" },
        { word: "pillow", phonetic: "ˈpɪləʊ", meaning: "枕头" },
        { word: "waist", phonetic: "weɪst", meaning: "腰部" },
        { word: "belt", phonetic: "belt", meaning: "腰带" },
        { word: "boots", phonetic: "buːts", meaning: "靴子" },
        { word: "cool", phonetic: "kuːl", meaning: "酷的，时髦的" },
        { word: "eyebrows", phonetic: "ˈaɪbraʊz", meaning: "眉毛" },
        { word: "mustache", phonetic: "ˈmʌstæʃ", meaning: "小胡子" },
        { word: "beard", phonetic: "bɪrd", meaning: "胡须" },
        { word: "old", phonetic: "əʊld", meaning: "年老的" },
        { word: "elf", phonetic: "ɛlf", meaning: "精灵" },
        { word: "pointy", phonetic: "ˈpɔɪnti", meaning: "尖尖的" },
        { word: "ears", phonetic: "ɪrz", meaning: "耳朵" },
        { word: "wondering", phonetic: "ˈwʌndərɪŋ", meaning: "想知道，感到疑惑" },
        { word: "funny", phonetic: "ˈfʌni", meaning: "滑稽的" },
        { word: "presents", phonetic: "ˈpreznts", meaning: "礼物" }
      ],
      qa: [
        { question: "What color is mommy's nose?", answer: "- 妈妈的鼻子是什么颜色？" },
        { question: "Is it big or small?", answer: "- 它是大还是小？" },
        { question: "What is on mommy's waist?", answer: "- 妈妈的腰上是什么？" },
        { question: "What is mommy doing?", answer: "- 妈妈正在做什么？" },
        { question: "How do Kipper and Floppy feel?", answer: "- Kipper和Floppy觉得怎么样？" },
        { question: "What is mommy doing?", answer: "- 妈妈正在做什么？" },
        { question: "What color are the boots?", answer: "- 靴子是什么颜色的？" },
        { question: "What color are mommy's eyebrows?", answer: "- 妈妈的眉毛是什么颜色的？" },
        { question: "What's this?", answer: "- 这是什么？" },
        { question: "Why is mommy putting on a beard?", answer: "- 为什么妈妈要戴胡子？" },
        { question: "Who is mommy dressing up as?", answer: "- 妈妈装扮成了谁？" },
        { question: "What does Santa do?", answer: "- 圣诞老人做什么？" },
        { question: "What's in the bag?", answer: "- 袋子里有什么？" }
      ]
    },
    {
      id: "l1-30",
      level: "undefined",
      episode: "L130",
      title: "The Pet Shop",
      extensionEn: `Today we are gonna read The Pet Shop. We are gonna go to the pet shop and choose a cute pet. Remember, I want a cute pet, OK? Could you help me choose one? So the family are in the pet shop. They are looking at the different pets. 
 
Knock, knock, here we are. Everyone wanted a pet. What do they want? Well, they all wanted different things. Everyone wanted a pet. So they want different things. Let's see what they want. 
 
What? I see a rat. And the rat is eating a nut. Chip wanted a rat. Do you like this as a pet? Look at everyone's face. Ah, no, I don't want a rat. Oh, no, said everyone. Why not? Because a rat will eat all their food? Yes, maybe. And I don't like it. I just don't like it. 
 
Biff wanted a spider. Look how happy Biff is. Spider! What? Do you show this kind of face when you see a spider? Look at everyone else. Oh, no, and they got, oh, disgusting! So what is everyone thinking of that? So scary! I don't want a spider. Oh, no, said everyone. It gives me goose bumps. 
 
And Kipper wanted a snake. Ah, snake, so cute! It's green and long. Oh no! Here is mum and mum has covered her face. Oh, no. And look at Chip. Chip is so terrified. And oh, no, said everyone. Why not? Because a snake is so scary and a snake can bite. Yes, you are right. A snake can bite, that's not good. 
 
Everyone wanted a gold fish. Oh, look, here is a fish tank. And in the fish tank, you can see a little cute gold fish that swims and swims everyday quietly. That's a perfect pet. What is the shop keeper holding? Good question, let's take a look! I think it's a crocodile. Oh, no! Monkey, do you want a crocodile as your pet? No, a crocodile will bite and eat me. Yes, that's too scary. We want a cute pet.`,
      extensionCn: `今天我们要读《宠物店》。我们要去宠物店，挑选一只可爱的宠物。记住，我要一只可爱的宠物，好吗？你能帮我选一个吗？于是，家人们来到了宠物店，他们正在看各种不同的宠物。
敲敲，到了！每个人都想要一只宠物。他们想要什么呢？嗯，他们每个人想要的都不一样。每个人都想要一只宠物。所以他们想要的东西不一样。我们来看看他们想要什么吧。
什么？我看到了一只老鼠，它正在吃一颗坚果。奇普想要一只老鼠。你喜欢把老鼠当作宠物吗？看看每个人的表情。啊，不，我不想要老鼠。哦，不，大家都说。为什么不呢？因为老鼠会把他们的食物都吃掉吗？是的，也许是这样。而且我不喜欢它，我就是不喜欢它。
比夫想要一只蜘蛛。看看比夫有多高兴。蜘蛛！什么？你看到蜘蛛时会做这种表情吗？看看其他人。哦，不，大家都觉得，啊，太恶心了！那么大家对此有什么想法呢？太可怕了！我不想要蜘蛛。哦，不，大家都说。这让我起鸡皮疙瘩。
基普想要一条蛇。啊，蛇，好可爱！它是绿色的，又长又细。哦，不！这是妈妈，妈妈捂住了脸。哦，不。看看奇普，奇普吓坏了。哦，不，大家都说。为什么不呢？因为蛇太可怕了，而且蛇可能会咬人。是的，你说得对，蛇会咬人，这不好。
大家都想要一条金鱼。哦，看看，这里有一个鱼缸，鱼缸里有一条小小的金鱼，它每天都安静地游来游去。这是完美的宠物。店主手里拿着什么呢？好问题，我们来看看！我想那是一只鳄鱼。哦，不！猴子，你想要一只鳄鱼当宠物吗？不，鳄鱼会咬我，把我吃掉。是的，太可怕了。我们想要一只可爱的宠物。`,
      vocabulary: [
        { word: "pet", phonetic: "pɛt", meaning: "宠物" },
        { word: "shop", phonetic: "ʃɒp", meaning: "商店" },
        { word: "choose", phonetic: "tʃuːz", meaning: "选择" },
        { word: "cute", phonetic: "kjuːt", meaning: "可爱的" },
        { word: "rat", phonetic: "ræt", meaning: "老鼠" },
        { word: "nut", phonetic: "nʌt", meaning: "坚果" },
        { word: "spider", phonetic: "ˈspaɪdə(r)", meaning: "蜘蛛" },
        { word: "face", phonetic: "feɪs", meaning: "脸" },
        { word: "disgusting", phonetic: "dɪsˈɡʌstɪŋ", meaning: "恶心的" },
        { word: "scary", phonetic: "ˈskeəri", meaning: "可怕的" },
        { word: "goosebumps", phonetic: "ˈɡuːsˌbʌmps", meaning: "鸡皮疙瘩" },
        { word: "snake", phonetic: "sneɪk", meaning: "蛇" },
        { word: "bite", phonetic: "baɪt", meaning: "咬" },
        { word: "goldfish", phonetic: "ˈɡəʊldfɪʃ", meaning: "金鱼" },
        { word: "tank", phonetic: "tæŋk", meaning: "鱼缸" },
        { word: "crocodile", phonetic: "ˈkrɒkədaɪl", meaning: "鳄鱼" },
        { word: "monkey", phonetic: "ˈmʌŋki", meaning: "猴子" }
      ],
      qa: [
        { question: "Where are they?", answer: "- 他们在哪里？" },
        { question: "What are they going to do?", answer: "- 他们要做什么？" },
        { question: "What's this?", answer: "- 这是什么？" },
        { question: "Does Chip like it?", answer: "- 奇普喜欢它吗？" },
        { question: "Does everyone else like it?", answer: "- 其他人喜欢它吗？" },
        { question: "What's this?", answer: "- 这是什么？" },
        { question: "Does Biff like it?", answer: "- 比夫喜欢它吗？" },
        { question: "Does everyone else like it?", answer: "- 其他人喜欢它吗？" },
        { question: "What's this?", answer: "- 这是什么？" },
        { question: "Does Kipper like it?", answer: "- 基普喜欢它吗？" },
        { question: "Does everyone else like it?", answer: "- 其他人喜欢它吗？" },
        { question: "What's this?", answer: "- 这是什么？" },
        { question: "Does everyone like it?", answer: "- 每个人都喜欢它吗？" }
      ]
    },
    {
      id: "l1-31",
      level: "undefined",
      episode: "L131",
      title: "What a Mess!",
      extensionEn: `Monkey, what have you done? Look at the room! What a mess! Oh, monkey, you have got to read this book with me, OK? Today we are gonna read this book. It is called What a Mess! So I believe the family must have made a mess too. Oh, look, they are going somewhere. It says to the show. Oh, they are going to a show, so, oh, look, each one of them is carrying something. What's mummy holding? Something like a dress, a purple dress. And then how about Chip? Chip is carrying a scarf. And how about Kipper? I don't know, something white. And then Biff is carrying something like a lorry or a truck. And daddy is holding a jar of something. And there is Floppy. What are they gonna do? Let's take a look. 
 
Here is mum. And mum made a dress. Wow, it is a beautiful dress. I can't believe it. Mummy made the dress all by herself. It is amazing. Look, this is called a sewing machine, sewing machine. You can put the cloth here and the sewing machine will help you sew a dress. Wow, that's amazing. And here you can also see some needles and thread. Mum, good job! I like the dress you have made. 
 
And then here is daddy. Dad has made something yummy, right? Oh, daddy, what are you doing? Look at daddy. Daddy is pouring the jam in to the jar. Oh, wait a minute. Daddy has spilled the jam. Oh, I wonder what kind of jam it is. Oh, strawberries. I see strawberries here. Oh, I know. It is strawberry jam. Good job! Do you like strawberry jam? Oh, I think I am Ok with that. I prefer blueberry jam. OK, now look at this. Daddy has got so many jars and a pot and lots of jam. Dad made some jam. 
 
Chip is busy working too. Chip made a scarf. Wow, Chip can knit, knit, knit. This is amazing. Chip is knitting a very long scarf. Scarf, you wear a scarf in winter. And then here you see different colors of yarn and the thread. It is amazing. Wow. And there are three colors, blue, red and green. I think the scarf is really cool. Do you like it? Yes, I love this scarf. Good! And what about Biff? Biff is busy making something too. So Biff made a lorry. What is a lorry? A lorry is a big truck. It is pretty big, huh? It has got wheels and Biff has used some boxes. And there she has got some scissors, some glue and some paints. Pretty good, huh? Kipper is busy working on something. Kipper made a birthday card. That is so beautiful. Look, he has joined some flowers and he has so many crayons on the table. Oh, what a mess on the table, right? 
 
And then everyone else is going. But look at the room. Oh, my, it is so messy. Everyone made a mess. Oh, my god! Now look, there is a sewing machine, and the dirty dishes and everything. Oh, dear, so I have a question, monkey. Why didn't they tidy up? What do you think? Maybe because they are gonna be late. Yeah, I think you are right, I think they were in a hurry. So they didn't have time to tidy everything up. And I have another question, monkey. Who do you think was the messiest? Daddy, daddy! Yes, you are right. Daddy has spilled out the jam everywhere. So messy!`,
      extensionCn: `猴子，你做了什么？看看这个房间！多乱啊！哦，猴子，你得和我一起读这本书，好吗？今天我们要读这本书。它叫《好乱啊！》。所以我觉得这个家庭一定也弄得很乱。哦，看看，他们要去某个地方。书上写着去表演。哦，他们要去参加一个表演，所以，哦，看，每个人都拿着一些东西。妈妈拿着什么？看起来像是一条紫色的裙子。那么奇普呢？奇普拿着一条围巾。基普呢？我不知道，可能是某种白色的东西。比夫呢？比夫拿着看起来像是一辆卡车或货车的东西。而爸爸拿着一个罐子，里面装着什么东西。还有弗洛比。他们要干什么呢？我们来看看。
这是妈妈。妈妈做了一条裙子。哇，好漂亮的一条裙子。我简直不敢相信，妈妈是自己做的。这太棒了。看，这个叫缝纫机，缝纫机。你可以把布放在这里，然后缝纫机会帮你缝一条裙子。哇，这太厉害了。而这里你还可以看到一些针和线。妈妈，干得好！我喜欢你做的这条裙子。
接着是爸爸。爸爸做了些好吃的，对吗？哦，爸爸，你在干什么？看看爸爸，爸爸正在往罐子里倒果酱。哦，等一下，爸爸把果酱洒出来了。哦，我在想这是什么果酱。哦，是草莓。我看到了草莓。哦，我知道了，这是草莓果酱。干得好！你喜欢草莓果酱吗？哦，我觉得还好吧。我更喜欢蓝莓果酱。好吧，现在看看这个。爸爸有这么多罐子，还有一个锅，还有好多果酱。爸爸做了些果酱。
奇普也在忙着做东西。奇普做了一条围巾。哇，奇普会织围巾，织，织，织。太厉害了。奇普正在织一条很长的围巾。围巾，冬天的时候你会戴围巾。然后你可以看到不同颜色的毛线和线。这太棒了。哇，还有三种颜色：蓝色、红色和绿色。我觉得这条围巾真的很酷。你喜欢吗？是的，我喜欢这条围巾。太好了！那么比夫呢？比夫也忙着做东西。比夫做了一辆货车。货车是什么？货车是一种大卡车。很大吧？它有轮子，比夫用了几个盒子来做。她还用到了剪刀、胶水和颜料。还不错吧？基普也在忙着做东西。基普做了一张生日卡片。太漂亮了。看，他画了一些花，桌子上还有很多蜡笔。哦，桌子真乱，对吧？
然后大家都走了。但是看看这个房间。哦，我的天啊，太乱了。每个人都弄得一团糟。哦，天哪！现在看，有一台缝纫机，还有脏盘子和各种东西。哦，天啊，我有一个问题，猴子。为什么他们没有收拾干净？你觉得呢？也许是因为他们要迟到了。是的，我觉得你是对的，我觉得他们太匆忙了，所以没时间整理。我还有一个问题，猴子。你觉得谁弄得最乱？爸爸，爸爸！是的，你说得对。爸爸把果酱洒得到处都是。太乱了！`,
      vocabulary: [
        { word: "monkey", phonetic: "ˈmʌŋki", meaning: "猴子" },
        { word: "mess", phonetic: "mɛs", meaning: "混乱，凌乱" },
        { word: "book", phonetic: "bʊk", meaning: "书" },
        { word: "show", phonetic: "ʃəʊ", meaning: "表演" },
        { word: "dress", phonetic: "drɛs", meaning: "连衣裙" },
        { word: "scarf", phonetic: "skɑːf", meaning: "围巾" },
        { word: "lorry", phonetic: "ˈlɒri", meaning: "卡车，货车" },
        { word: "truck", phonetic: "trʌk", meaning: "卡车" },
        { word: "jar", phonetic: "dʒɑː(r)", meaning: "罐子" },
        { word: "sewing machine", phonetic: "ˈsəʊɪŋ məˈʃiːn", meaning: "缝纫机" },
        { word: "needle", phonetic: "ˈniːdl", meaning: "针" },
        { word: "thread", phonetic: "θrɛd", meaning: "线" },
        { word: "strawberry jam", phonetic: "ˈstrɔːbəri dʒæm", meaning: "草莓果酱" },
        { word: "blueberry jam", phonetic: "ˈbluːbəri dʒæm", meaning: "蓝莓果酱" },
        { word: "knit", phonetic: "nɪt", meaning: "编织" },
        { word: "yarn", phonetic: "jɑːn", meaning: "毛线" },
        { word: "card", phonetic: "kɑːd", meaning: "卡片" },
        { word: "birthday card", phonetic: "ˈbɜːθdeɪ kɑːd", meaning: "生日卡片" },
        { word: "crayon", phonetic: "ˈkreɪən", meaning: "蜡笔" },
        { word: "tidy up", phonetic: "ˈtaɪdi ʌp", meaning: "收拾，整理" },
        { word: "spill", phonetic: "spɪl", meaning: "洒出，溢出" },
        { word: "dirty dishes", phonetic: "ˈdɜːti ˈdɪʃɪz", meaning: "脏盘子" },
        { word: "hurry", phonetic: "ˈhʌri", meaning: "匆忙" },
        { word: "messy", phonetic: "ˈmɛsi", meaning: "乱糟糟的" }
      ],
      qa: [
        { question: "What's this?", answer: "这是什么？" },
        { question: "What can a sewing machine do?", answer: "缝纫机能做什么？" },
        { question: "What's mommy doing?", answer: "妈妈在做什么？" },
        { question: "What color is the dress?", answer: "裙子是什么颜色的？" },
        { question: "What is daddy doing?", answer: "爸爸在做什么？" },
        { question: "What can it be?", answer: "它可能是什么？" },
        { question: "Can you see the strawberries?", answer: "你能看到草莓吗？" },
        { question: "What is Chip doing?", answer: "奇普在做什么？" },
        { question: "What color is the scarf?", answer: "围巾是什么颜色的？" },
        { question: "What is Biff doing?", answer: "比夫在做什么？" },
        { question: "What is Kipper doing?", answer: "基普在做什么？" },
        { question: "Can you see the lorry?", answer: "Is it beautiful?你能看到那辆货车吗？它漂亮吗？" },
        { question: "Look at the table. What do you think of it?", answer: "看看桌子，你觉得怎么样？" },
        { question: "Who made that?", answer: "谁弄的？" },
        { question: "What should they do?", answer: "他们应该做什么？" }
      ]
    },
    {
      id: "l1-32",
      level: "undefined",
      episode: "L132",
      title: "Making Faces",
      extensionEn: `Susan, what are you doing? Monkey, I am making faces. It is a lot of fun. It makes me feel very silly. Can you do it? OK, look, our children are also making faces. Look, Chip has showed a very scary face. And then Biff has made a very sad face. And then Kipper has made a very silly face. I love making faces. That's right, monkey. It is very funny. And now let's see what they are doing. 
 
Oh, look, our family are playing a game. Oh, daddy is holding a card. What's on the card? It says fierce. What does fierce mean? Fierce means grrr, it is a very scary face. Do you think daddy is doing very well? Yes, daddy has showed a very scary face. And then everyone knows, good job, daddy, it is fierce. So dad was fierce. Good job, daddy! 
 
And then Chip has got a card that says sad, sad. And look at Chip, do you think he is doing very well? That is a very sad face. So Chip was sad. Good job. 
 
What about Biff? Biff has got a card that says good. Good, I am feeling good, I am happy. Ok, so look at Biff, Biff was good. So Biff was happy too. A beautiful smile. Now can you show me a good face and a happy face? That's very good. 
 
And then, look, what mum has got? Frightened! What does frightened mean? If I say boom, and you will make, ah! That's a frightened face. Oh, look at mum, that's so frightened, very good! And even daddy got frightened too. Mum, you looked really, really scared, really, really frightened. So mum was frightened. Who is this? Isn't this Kipper? Wait a minute. Kipper was sitting on the ground. And Kipper crawled to the dining room, and there Kipper was in. Why? What was he up to? And what was Kipper up to? 
 
Kipper was hungry, So Kipper was eating. Oh, my! This is a very good performance. Isn't it? So what is Kipper eating? Cake, sandwiches and cupcakes. Oh, my! Kipper, you are so hungry, aren't you? And you didn't finish the game. Well, maybe he did very well in the game.`,
      extensionCn: `苏珊，你在做什么？猴子，我正在做鬼脸。这很好玩，让我觉得自己很傻。你会做吗？好吧，看，我们的孩子们也在做鬼脸呢！看，奇普做了一个非常吓人的脸。然后比夫做了一个非常难过的脸。接着基普做了一个非常搞笑的脸。我喜欢做鬼脸。
 没错，猴子，这真的很有趣。现在让我们看看他们在做什么吧。
哦，看，我们的家人在玩一个游戏。爸爸拿着一张卡片。卡片上写着什么？上面写着凶恶。凶恶是什么意思？凶恶意味着咆哮，是一个非常吓人的表情。你觉得爸爸做得好吗？是的，爸爸做了一个非常吓人的脸。于是大家都知道了：干得好，爸爸，就是凶恶。所以爸爸很凶恶。干得好，爸爸！
接着奇普拿到了一张写着伤心的卡片。伤心。看看奇普，你觉得他做得好吗？这是一个非常伤心的脸。所以奇普很伤心。干得好！
比夫呢？比夫拿到了一张写着开心的卡片。开心，我感到很好，我很高兴。好吧，看比夫，比夫是开心的。所以比夫也很高兴，一个漂亮的微笑。现在你能给我一个好心情的脸和开心的脸吗？非常棒！
然后，看，妈妈拿到了什么？害怕！害怕是什么意思？如果我说砰！，你会大喊啊！——这就是一个害怕的脸。哦，看看妈妈，这真的是害怕，非常棒！甚至爸爸也害怕了。妈妈，你看起来真的、真的很害怕，真的、真的很吓人。所以妈妈很害怕。
这是谁？这不是基普吗？等一下，基普坐在地上。然后基普爬到了餐厅里，基普进去了。为什么？他在干什么？基普在干嘛呢？
基普饿了，所以基普在吃东西。哦，天啊！这真的是一个非常好的表演，不是吗？基普在吃什么？蛋糕、三明治和杯子蛋糕。哦，天啊！基普，你真的很饿，不是吗？而且你没有完成游戏。嗯，也许他在游戏中表现得非常好。`,
      vocabulary: [
        { word: "make faces", phonetic: "meɪk feɪsɪz", meaning: "做鬼脸" },
        { word: "silly", phonetic: "ˈsɪli", meaning: "傻的，滑稽的" },
        { word: "scary", phonetic: "ˈskeəri", meaning: "吓人的" },
        { word: "fierce", phonetic: "fɪəs", meaning: "凶恶的，猛烈的" },
        { word: "sad", phonetic: "sæd", meaning: "伤心的" },
        { word: "good", phonetic: "ɡʊd", meaning: "好的，开心的" },
        { word: "happy", phonetic: "ˈhæpi", meaning: "开心的，幸福的" },
        { word: "frightened", phonetic: "ˈfraɪtnd", meaning: "害怕的，受惊的" },
        { word: "performance", phonetic: "pəˈfɔːməns", meaning: "表现，表演" },
        { word: "hungry", phonetic: "ˈhʌŋɡri", meaning: "饥饿的" },
        { word: "sandwich", phonetic: "ˈsænwɪtʃ", meaning: "三明治" },
        { word: "cupcake", phonetic: "ˈkʌpkeɪk", meaning: "纸杯蛋糕" }
      ],
      qa: [
        { question: "What are they doing?", answer: "他们在做什么？" },
        { question: "Can you make faces?", answer: "你会做鬼脸吗？" },
        { question: "Look at daddy's face. What's this face?", answer: "看看爸爸的表情，这是什么表情？" },
        { question: "Can you make a fierce face?", answer: "你能做一个凶恶的表情吗？" },
        { question: "Do you know what face Chip is making?", answer: "你知道奇普在做什么表情吗？" },
        { question: "What is Biff's face?", answer: "比夫的表情是什么？" },
        { question: "What is Kipper doing?", answer: "基普在做什么？" },
        { question: "What is mommy's face?", answer: "妈妈的表情是什么？" },
        { question: "Can you make a frightened face?", answer: "你能做一个害怕的表情吗？" },
        { question: "What is Kipper doing?", answer: "基普在做什么？" }
      ]
    },
    {
      id: "l1-33",
      level: "undefined",
      episode: "L133",
      title: "The Journey",
      extensionEn: `Susan, Susan, I am so bored. There is a traffic jam. And our car won't go. We can't go. What shall I do? I know, I know. Monkey, you must be bored. So why don't we read this book to kill the time? It is called The Journey. Look, the family are packing. They are putting their suitcases in the trunk. They are getting ready for a long journey. Do you know why I know it is a long journey? Because look at the suitcases. They are so big. So they must have packed a lot of things. So I wish they are happy on their journey. 
 
Oh, bad beginning. I see a long line of cars, beep, beep, honk, honk. But no car can move. That's terrible. This is called a traffic jam, traffic jam. It is just so sticky like jam. No cars can move. Usually at this moment, do you know what I do? I will sleep. Otherwise, it is so bored. Oh, look, someone are already playing with the sheep. Oh, no! I'm bored, said Kipper. Kipper is really angry inside the car. 
 
And then finally, the car moved, and they reached a little shop or a coffee. They can go there and eat. So here it says, I am hungry, said Biff. And where is Biff? There is Biff. Biff and Chip are running to eat. And this restaurant is called the big eater. Why? Look at the cups, the cups are so big. I am thirsty, said Chip. Well, you can enjoy some food there. You can eat a lot. 
 
And then oh, no. This is so unlucky. Look, they should take this way, but then you see the street sign that says diversion. What is diversion? Diversion means the old road can not be used. They are repairing it, maintaining it. You have to take another way. Oh, no! I am cross, said dad. And dad was angry. I am cross. But you know, there is no use being cross. You have to take the diversion. 
 
And then the problem with the diversion is that it is a new road. You will get lost. Mum is checking on the map. Where am I? Where are we? I don't know. So I am lost, said mum. Oh, no! What an unlucky journey! So many problems! 
 
Finally, they found their way out. And they reach their destination, the beautiful beach. Hooray! Said everyone. Look at the children. Finally, they have reached the beach. They can enjoy fun time there. Look at mum. Finally! Mum is so relieved! What an unlucky journey!`,
      extensionCn: `苏珊，苏珊，我好无聊啊。现在堵车了，我们的车动不了了，开不走了。我该怎么办呢？我知道了，我知道了。猴子，你一定觉得无聊，那我们读这本书打发时间吧！它的名字叫《旅程》。你看，这家人正在打包，他们把行李箱放进后备箱。他们正在为一次长途旅行做准备。你知道我为什么知道这是一次长途旅行吗？因为你看这些行李箱，它们很大。所以他们一定装了很多东西。我希望他们的旅途愉快。
哦，糟糕的开头。我看到一长排的汽车，嘟嘟嘟，按喇叭，但车都不能动。真是太糟糕了。这就叫交通堵塞，交通堵塞。它就像果酱一样黏糊糊的，没有车能移动。通常这个时候，你知道我会做什么吗？我会睡觉。不然真的太无聊了。哦，你看，有人已经开始逗羊玩了。哦，不！我好无聊啊。基普说。基普在车里真的很生气。
然后终于，车动了，他们到了一个小商店或者咖啡馆。他们可以进去吃东西了。这里写着，我饿了。比夫说。比夫在哪？比夫和奇普跑去吃东西了。这家餐厅叫大胃王。为什么呢？看这些杯子，杯子好大啊。我渴了。奇普说。好了，你可以在那里好好享受食物了，可以吃很多。
哦，不！真是太倒霉了。看，他们本来应该走这条路，但你看到路标上写着绕行。什么是绕行？绕行就是旧路不能用了。他们正在修路，需要走另一条路。哦，不！我好生气啊。爸爸说。爸爸很生气，我好生气啊。但你知道吗？生气也没有用，你必须绕道而行。
绕行的问题是，这是一条新路，你会迷路的。妈妈正在查看地图。我们在哪？我们在哪里？我不知道。所以妈妈说，我迷路了。哦，不！真是一次倒霉的旅行！那么多问题！
最后，他们找到了路，到了目的地——美丽的海滩。万岁！每个人都欢呼起来。看看孩子们，终于到了海滩，他们可以在那里尽情玩耍。看看妈妈，终于松了一口气！真是一次倒霉的旅行！`,
      vocabulary: [
        { word: "traffic jam", phonetic: "ˈtræfɪk dʒæm", meaning: "堵车" },
        { word: "journey", phonetic: "ˈdʒɜːrni", meaning: "旅程" },
        { word: "suitcase", phonetic: "ˈsuːtkeɪs", meaning: "行李箱" },
        { word: "trunk", phonetic: "trʌŋk", meaning: "后备箱" },
        { word: "beep", phonetic: "biːp", meaning: "按喇叭" },
        { word: "honk", phonetic: "hɒŋk", meaning: "按喇叭" },
        { word: "bored", phonetic: "bɔːrd", meaning: "无聊的" },
        { word: "angry", phonetic: "ˈæŋɡri", meaning: "生气的" },
        { word: "restaurant", phonetic: "ˈrestrɒnt", meaning: "餐馆" },
        { word: "thirsty", phonetic: "ˈθɜːrsti", meaning: "口渴的" },
        { word: "diversion", phonetic: "daɪˈvɜːrʒn", meaning: "绕行" },
        { word: "cross", phonetic: "krɒs", meaning: "生气的" },
        { word: "map", phonetic: "mæp", meaning: "地图" },
        { word: "lost", phonetic: "lɔːst", meaning: "迷路的" },
        { word: "destination", phonetic: "ˌdestɪˈneɪʃn", meaning: "目的地" },
        { word: "beach", phonetic: "biːtʃ", meaning: "海滩" },
        { word: "relieved", phonetic: "rɪˈliːvd", meaning: "如释重负的" }
      ],
      qa: [
        { question: "What happened?", answer: "（发生了什么？）" },
        { question: "Why is there a traffic jam?", answer: "（为什么会堵车？）" },
        { question: "Why are Biff and Chip running?", answer: "（为什么 Biff 和 Chip 在跑？）" },
        { question: "What happened?", answer: "（发生了什么？）" },
        { question: "How does daddy feel?", answer: "（爸爸感觉怎么样？）" },
        { question: "What happened?", answer: "（发生了什么？）" },
        { question: "What is mommy doing?", answer: "（妈妈在做什么？）" },
        { question: "Where are they?", answer: "（他们在哪里？）" },
        { question: "Are the kids happy?", answer: "（孩子们开心吗？）" },
        { question: "Is mommy happy?", answer: "（妈妈开心吗？）" },
        { question: "Why isn’t mommy happy?", answer: "（为什么妈妈不开心？）" }
      ]
    },
    {
      id: "l1-34",
      level: "undefined",
      episode: "L134",
      title: "Goal!",
      extensionEn: `Go, go, go, yeah! Hooray! Susan, what are you doing? I am watching a very exiting football match. Do you want to come and join me? Look, here it says goal. Look, the ball is in the goal. So that means one team has scored. Yeah! Good job! And I believe this is the goal keeper. Do you know why? Because usually the goal keeper will try to keep the ball out of the goal. And then uh-oh, he missed it. And look at the football boots, football boots. And there you can see one, two, three, four, five, six, six studs. These studs will prevent slipping. They will help you play football better. OK? So now let's look at this one. 
 
Hey, isn't this daddy? Yes, daddy is in the match, that's why I am so excited. And look at the weather. Pitter, patter. It is raining. Oh, my! What a bad weather! But still, they are playing football. So this is true love. So it was a cold day. Yes! Look at them, everyone is wearing a hat, and a scarf and they are wearing a lot. So it must be a very cold rainy day. And they are playing football. Good job, daddy! 
 
And then everyone got wet. Pitter, patter. And they don't seem to be happy. Why do we have to watch this on such a cold day? And then look at daddy. That's called frosty breath, frosty breath. When the day is really cold, when you breathe out, and then you can see frosty breath. So cold! Daddy, try harder! Everyone got cold. 
 
And then Floppy got tired. So obviously, Floppy doesn't like watching football matches. Bored! And then Kipper got miserable. Why? Because it was so cold and Kipper is only a little kid. And Kipper felt miserable. When you are sick, you might feel miserable. 
 
Then mum got cross. Why? I am so angry. No, no, no, this is not fair. Why? What got mum so cross? Oh, Look at the referee, the referee is blowing the whistle. And then look, what is in his hand? It is a yellow card. Oh, because the blue team fouled, and then they got a yellow card. And it was daddy! Oh, no! 
 
And then finally, daddy kicked the goal in. Kicked the ball inside the goal! Yeah! Hooray! Dad got a goal. Then look at this man, he is jumping up so high and everyone is cheering and saying hooray! Good job! Daddy, well done!`,
      extensionCn: `去吧，去吧，去吧，耶！万岁！苏珊，你在做什么？我在看一场非常激动人心的足球比赛。你想过来一起看吗？看，这里写着进球。看，球进门了。这意味着有一队得分了。耶！干得好！我相信这就是守门员。你知道为什么吗？因为通常守门员会试图把球挡在门外。然后，呃哦，他没扑到。看这些足球鞋。你可以看到鞋底有六个钉子。这些鞋钉可以防滑。它们会帮助你更好地踢足球。好吧，现在我们看看这个。
嘿，这不是爸爸吗？是的，爸爸在比赛中，这就是为什么我这么激动。看天气，滴答滴答。下雨了。哦，天哪！真是糟糕的天气！但他们还是在踢足球。这才是真爱啊！那是个寒冷的日子。看他们，每个人都戴着帽子、围巾，穿得很多。所以一定是个非常寒冷的雨天。但他们还是在踢足球。干得好，爸爸！
然后每个人都淋湿了。滴答滴答。他们看起来都不开心。为什么我们要在这么冷的天看比赛呢？再看看爸爸，那叫霜气。当天气非常冷的时候，你呼气时会看到霜气。好冷啊！爸爸，加油！每个人都觉得很冷。
然后Floppy累了。很明显，Floppy不喜欢看足球比赛。无聊！然后Kipper觉得很难受。为什么？因为天气太冷了，而Kipper还只是个小孩子。Kipper觉得很难受。当你生病的时候，你可能会觉得难受。
然后妈妈生气了。为什么？我好生气。不，不，不，这不公平！为什么？是什么让妈妈这么生气？看裁判，裁判在吹哨子。然后看，他手里拿着什么？是一张黄牌。哦，因为蓝队犯规了，他们得了一张黄牌。而且是爸爸！哦，不！
最后，爸爸进球了！把球踢进门里了！耶！万岁！爸爸进球了。看这个人，他跳得好高，大家都在欢呼，说万岁！干得好，爸爸！`,
      vocabulary: [
        { word: "goal", phonetic: "ɡəʊl", meaning: "进球" },
        { word: "goalkeeper", phonetic: "ˈɡəʊlˌkiːpər", meaning: "守门员" },
        { word: "football boots", phonetic: "ˈfʊtbɔːl buːts", meaning: "足球鞋" },
        { word: "studs", phonetic: "stʌdz", meaning: "鞋钉" },
        { word: "slipping", phonetic: "ˈslɪpɪŋ", meaning: "滑倒" },
        { word: "rainy", phonetic: "ˈreɪni", meaning: "下雨的" },
        { word: "frosty breath", phonetic: "ˈfrɒsti brɛθ", meaning: "霜气" },
        { word: "miserable", phonetic: "ˈmɪzərəbl", meaning: "难受的，悲惨的" },
        { word: "referee", phonetic: "ˌrɛfəˈriː", meaning: "裁判" },
        { word: "whistle", phonetic: "ˈwɪsl", meaning: "哨子" },
        { word: "yellow card", phonetic: "ˈjɛləʊ kɑːrd", meaning: "黄牌" },
        { word: "foul", phonetic: "faʊl", meaning: "犯规" },
        { word: "cheer", phonetic: "tʃɪər", meaning: "欢呼" },
        { word: "pitter-patter", phonetic: "ˈpɪtər ˈpætər", meaning: "滴答滴答（雨声）" },
        { word: "true love", phonetic: "truː lʌv", meaning: "真爱" }
      ],
      qa: [
        { question: "What's the weather like today?", answer: "- 今天天气怎么样？" },
        { question: "What are they doing?", answer: "- 他们在做什么？" },
        { question: "How do they feel?", answer: "- 他们感觉如何？" },
        { question: "Why is Kipper crossing his arms and holding himself?", answer: "- 为什么Kipper交叉双臂并抱住自己？" },
        { question: "What's wrong with mommy?", answer: "- 妈妈怎么了？" },
        { question: "Who is this?", answer: "- 这是谁？" },
        { question: "What's in his mouth?", answer: "- 他嘴里有什么？" },
        { question: "What's in his hand?", answer: "- 他手里有什么？" },
        { question: "Why are they so happy?", answer: "- 为什么他们这么高兴？" },
        { question: "What is Daddy doing?", answer: "- 爸爸在做什么？" }
      ]
    },
    {
      id: "l1-35",
      level: "undefined",
      episode: "L135",
      title: "Who Did That?",
      extensionEn: `Monkey, did you eat my bananas? Me? No, not me. I didn't eat your bananas. I am so cross, somebody ate my bananas. Look at our mum. Today mum is also cross for something. Look at the wall. There are some dirty marks on the wall. And who did that? I don't know. Let's find out. 
 
And mum called all the children, even Floppy here. And mum says, look at the wall, it is so dirty, who did that? Mum was cross. And all the children got, mum is angry, who did that? 
 
And then who did that, she said. Who made our wall so dirty? Biff said, it was Chip, said Biff. So it was not Biff. So it was Chip, and Chip got, ha? Me? Not me. OK 
 
And then Chip said, it was Kipper, not me, I didn't do it, said Chip. And then Kipper said, it was Floppy, said Kipper. So they didn't do it. Really? But do you think Floppy did it? Floppy got, ha? What? Me? Not me! Then who? 
 
It was Floppy, said Biff. Yes, it must be Floppy. Because I didn't do it, you didn't do it, and Kipper didn't do it, then who else? It must be Floppy. And then Floppy got no, no, no, ruff, ruff, not me, not me. It wasn't Floppy, said dad. Here came daddy. 
 
What? It was me. Daddy owned up. Oh, my! Look at daddy. Daddy is holding a red bucket and a long mop and a plunger. So daddy was cleaning the toilet. And look at the blue overalls and the gloves. Oh, and daddy said sorry, I smear the dirt accidently. I didn't mean it. And then mum got, oh, it was you. Mum was surprised probably. And all the children were surprised. So tell me, did Floppy do it? No, Floppy didn't do it. They wrongly blamed Floppy.`,
      extensionCn: `猴子，你吃了我的香蕉吗？ 我？不是我。我没有吃你的香蕉。 我好生气，有人吃了我的香蕉。 看看我们的妈妈，今天妈妈也因为某事生气了。 看看墙上，墙上有一些脏污的痕迹。 那是谁做的？我不知道。我们来找找看。 妈妈叫来了所有的孩子，包括在这里的Floppy。 妈妈说，看看墙，脏得不行，谁做的？ 妈妈生气了，所有的孩子都觉得妈妈生气了，谁做的？ 然后她说，谁做的？是谁把我们的墙弄得这么脏？ Biff说，是Chip做的，Biff说。那就不是Biff。那就是Chip，Chip说，哈？我？不是我。好吧。 然后Chip说，是Kipper做的，不是我，我没做，Chip说。 然后Kipper说，是Floppy做的，Kipper说。 所以他们都没有做。真的吗？你认为是Floppy做的吗？ Floppy说，哈？什么？我？不是我！那是谁？ Biff说，是Floppy做的。是的，一定是Floppy。因为我没有做，你也没做，Kipper也没做，那还有谁呢？一定是Floppy。 然后Floppy说，不是， 不是， 不是，汪汪，不是我，不是我。 不是Floppy，爸爸说。这时爸爸来了。 什么？是我。爸爸承认了。 哦，我的天！看看爸爸。爸爸拿着一个红色的桶，一个长拖把和一个吸盘。 所以爸爸在打扫厕所。 看看蓝色的工作服和手套。 哦，爸爸说对不起，我不小心把脏东西弄到墙上了，我不是故意的。 然后妈妈说，哦，原来是你。妈妈可能很惊讶。 所有的孩子都很惊讶。 那告诉我，Floppy做的吗？不，Floppy没有做。他们错误地把罪名嫁祸给Floppy了。`,
      vocabulary: [
      ],
      qa: [
        { question: "What's up with mommy?", answer: "- 妈妈怎么了？" },
        { question: "What does mommy say?", answer: "- 妈妈说什么？" },
        { question: "Who did that?", answer: "- 谁做的？" },
        { question: "What does Biff say?", answer: "- Biff 说什么？" },
        { question: "Why is Chip pointing to Kipper?", answer: "- 为什么 Chip 指着 Kipper？" },
        { question: "Who is Kipper pointing to?", answer: "- Kipper 指着谁？" },
        { question: "Why are the kids all pointing to Floppy?", answer: "- 为什么孩子们都指着 Floppy？" },
        { question: "Who messed up the wall?", answer: "- 谁弄脏了墙？" },
        { question: "What is in Daddy's hands?", answer: "- 爸爸手里拿着什么？" },
        { question: "What is Daddy doing?", answer: "- 爸爸在做什么？" }
      ]
    },
    {
      id: "l1-36",
      level: "undefined",
      episode: "L136",
      title: "Shopping",
      extensionEn: `Monkey, I want to eat some cakes. But I don't want to go out and buy it. What shall I do? It is easy, we can make it at home. Oh, yes, but I don't know how to make one. Maybe we should read this book and find it out, OK? It is called shopping. They need to go out and shop for something. But I think Chip is reading a recipe book. It is a recipe. Look, it says biscuits. Oh, they are making some biscuits. You will need balabala. What do they need? Let's see. The need flour, the need sugar, and they need fresh eggs, maybe some butter. OK? 
 
Look, dad and Chip are working together. Chip wanted some sugar. Do you think there is sugar in the can? No sugar. So what should he do? I don't know. Maybe they should go and buy something. And what else do you need for the biscuit? Butter, and then here is a half dozen of eggs, and then flour, the recipe book. Oh, all they need is the sugar. They should go shopping for some sugar. 
 
Here they are in the supermarket. So he went to the supermarket. Wow, so many kinds of sugar. Let me see, we have got golden icing sugar, we have got brown sugar, we have got salty vinegar crisps, what? Crisps? Crunch, crunch. Crisps, they are chips right? What? Hey, you guys, sugar is right over here. But they are shopping for crisps. But I like them, salty vinegar, my favorite flavor. What is daddy checking on? Maybe some canned food. So he got some crisps. Chip got some crisps. 
 
Then they went to the shop. They left the supermarket and went into a small shop. I see lots of sugar here. Brown sugar, white sugar, everything. Wait, Chip, what are you checking on? Flip-flop, comics, wait, so he got a comic. And Chip didn't buy the sugar, he got a comic. Alright, maybe he wanted to read that. 
 
And then he went to the market. There are more venders here. Look, you see people selling clothes and some cut price food. These are pretty cheap and pretty good. You see sugar here. And then, wow, there are toys. And then Chip got a ball. Wow, it is a beautiful ball, yellow with some red spots. And then dad is checking his watch. What time is it? We need to go home. We spent so much time outside. 
 
And then when they got home, dad was reading the book. And mum was going, what are you doing? And then here is a new stuff. And then, oh, no! What did Chip forget? He forgot the sugar. Come on, you went to three places and there was sugar the whole time and you didn't buy it. Oh, my! You are so distracted by so many things. Oh my god!`,
      extensionCn: `猴子，我想吃点蛋糕。但我不想出去买。我该怎么办？很简单，我们可以在家做。哦，是的，但我不知道怎么做。或许我们应该读这本书，找出做法，好吗？这本书叫做《购物》。他们需要出去买些东西。但我觉得 Chip 正在读一本食谱书。这是一本食谱。看，它写着饼干。哦，他们在做一些饼干。你将需要……（可能是一些食材）。他们需要什么呢？让我们看一下。他们需要面粉、糖、鸡蛋，也许还需要一些黄油。好吗？看，爸爸和 Chip 正在一起工作。Chip 想要一些糖。你认为罐子里有糖吗？没有糖。那他该怎么办呢？我不知道。或许他们应该去买东西。做饼干还需要什么呢？黄油，然后这里有六个鸡蛋，还有面粉，食谱书。哦，他们只需要糖。他们应该去买一些糖。他们现在在超市里。所以他去了超市。哇，糖有这么多种。让我看看，我们有金色糖霜、红糖、还有盐醋味的薯片，什么？薯片？咯吱，咯吱。薯片，它们是薯片，对吧？什么？嘿，你们，糖就在这里。但他们在买薯片。但我喜欢它们，盐醋味，我最喜欢的口味。爸爸在检查什么？可能是罐头食品。所以他买了些薯片。Chip 也买了些薯片。然后他们去了商店。他们离开了超市，进入了一家小店。我看到这里有很多糖。红糖、白糖，应有尽有。等一下，Chip，你在看什么？拖鞋，漫画，等等，他买了一本漫画。Chip 没有买糖，他买了一本漫画。好吧，也许他想看那个。然后他去了市场。这里有更多的小摊贩。看，你看到有人在卖衣服和一些降价的食品。这些都很便宜，而且质量不错。你在这里看到糖。然后，哇，有玩具。然后 Chip 买了一个球。哇，这是一个漂亮的球，黄色的，上面有一些红色的斑点。然后爸爸在看他的手表。现在几点了？我们需要回家了。我们在外面花了这么长时间。然后当他们回到家时，爸爸正在读书。妈妈说，您在做什么？然后这里有新的东西。然后，哦，不！Chip 忘了什么？他忘了买糖。你去了三个地方，糖一直在那，结果你没买。哎呀！你被那么多东西分心了。我的天啊！`,
      vocabulary: [
        { word: "Cake", phonetic: "keɪk", meaning: "蛋糕" },
        { word: "Make", phonetic: "meɪk", meaning: "做，制作" },
        { word: "Recipe", phonetic: "ˈrɛsəpi", meaning: "食谱" },
        { word: "Flour", phonetic: "ˈflaʊər", meaning: "面粉" },
        { word: "Sugar", phonetic: "ˈʃʊɡər", meaning: "糖" },
        { word: "Eggs", phonetic: "ɛɡz", meaning: "鸡蛋" },
        { word: "Butter", phonetic: "ˈbʌtər", meaning: "黄油" },
        { word: "Supermarket", phonetic: "ˈsuːpərˌmɑːrkɪt", meaning: "超市" },
        { word: "Crisps", phonetic: "krɪsps", meaning: "薯片" },
        { word: "Icing sugar", phonetic: "ˈaɪsɪŋ ˈʃʊɡər", meaning: "糖霜" },
        { word: "Vinegar", phonetic: "ˈvɪnɪɡər", meaning: "醋" },
        { word: "Can", phonetic: "kæn", meaning: "罐头" },
        { word: "Comic", phonetic: "ˈkɒmɪk", meaning: "漫画" },
        { word: "Market", phonetic: "ˈmɑːrkɪt", meaning: "市场" },
        { word: "Ball", phonetic: "bɔːl", meaning: "球" },
        { word: "Watch", phonetic: "wɒtʃ", meaning: "手表" },
        { word: "Distracted", phonetic: "dɪˈstræktɪd", meaning: "分心的" },
        { word: "Sugar", phonetic: "ˈʃʊɡər", meaning: "糖" }
      ],
      qa: [
        { question: "What are they doing?", answer: "- 他们在做饼干。" },
        { question: "What do they need?", answer: "- 他们需要什么？" },
        { question: "Where are they?", answer: "- 他们在哪里？" },
        { question: "Can you see sugar?", answer: "- 你能看到糖吗？" },
        { question: "What does Chip get?", answer: "- Chip拿了什么？" },
        { question: "What does Chip get this time?", answer: "- 这次Chip拿了什么？" },
        { question: "What does Chip get this time?", answer: "- 这次Chip拿了什么？" },
        { question: "What is Daddy doing?", answer: "- 爸爸在做什么？" },
        { question: "Why is Daddy checking his watch?", answer: "- 爸爸为什么在看他的手表？" },
        { question: "What happened?", answer: "- 发生了什么事？" }
      ]
    }
  ]
};


// 牛津树L2级别数据
export const oxfordTreeL2: OxfordLevel = {
  id: "l2",
  name: "Level 2",
  description: "入门进阶，开始出现更多情节与拓展表达，适合有一定词汇基础的孩子",
  bookCount: 36,
  color: "from-blue-400 to-indigo-500",
  books: [
    {
      id: "l2-01",
      level: "l2",
      episode: "L201",
      title: "Kipper's Laces",
      extensionEn: `Bunny ears, bunny ears, playing by a tree. Criss-crossed the tree, trying to catch me. Bunny ears, bunny ears, jumped into the hole, popped out the other side beautiful and bold。Monkey, what are you doing? I am learning how to tie my shoelaces. Oh, it is not easy. And look, Kipper is sitting on the stairs, looking very sad. Why? Because Kipper can not tie his shoelaces. Shoelaces. Look, his shoelaces are undone. And Floppy is here, looking at him, oh, come on, just try it a little harder. And this book is called Kipper's Laces. Let's find out what happens, OK?

Now, turn to page one. Look at them, where are they? They are in a shoe shop. There are many, many shoes for you to buy. Which pair of shoes do you like? I like this pair, because it looks really handsome. But look, Kipper doesn't like that pair. No, no, no, the wrong color. What about that pair? No, the wrong size, they are too big for me. What about this pair? No, I don't like the color again. Oh, come on, Kipper. What about this pair? A pair of white sneakers. And look at the shop assistant. He is sweating. Oh, my! You have tried so many pairs. Is there a pair that you like? So Kipper wanted new shoes. OK, and there they are, at the shoe shop.

OK, finally Kipper decided. I want this pair of white sneakers. And look behind there, we have mummy's shoes, High-heel shoes. Which pair do you like? I like the pair of yellow high-heels. And then Kipper had a problem, he couldn't tie his shoe laces. Daddy, help me! Dad helped him. OK, I am gonna help you. Look, just tie bunny ears. It is so easy. Susan, what are bunny ears? Bunny ears, just look at the shoelaces, ok? They look like a bow, right? When you tie them, they look like bunny ears. Yes! What is mummy doing? Mummy is paying. And finally the shop assistant, finally, it is over. Yeah, good! I am so happy to help you.

And then there is Kipper and all the students. What are they doing? Are they dancing? Oh, look, the class had PE. Kipper was at school. And the class had PE. So this is the PE class. What are they doing? I think they are doing warm-up in their PE class. Kipper was at school. The class had PE. Yes, it is a PE class. Do you love PE class? Yes, I love PE class. I can play basketball, I can play football, I can run, I can swim. PE classes are fun. OK, but what are they doing? Are they dancing? Yes, they are stretching, they are balancing. Look, look at this boy. He fell down on the ground. So he is not very good at balancing. Are you good at balancing? Of course. I am super good at balancing. OK, you need more practice, OK? And now I think Kipper is doing a good job.

And ding-ling-ling-ling! Class is over. Kipper couldn't tie his shoelaces. Look, everyone is getting changed into their normal clothes. And then Kipper couldn't put on his shoes. Oh wait! He could put on his shoes. But he couldn't tie his shoelaces. So what did he do? He said, teacher, teacher, can you help me? And Mrs Green helped him. Oh, Kipper, you need to learn how to tie your shoelaces. OK? And look at the boys. Ha, ha, ha, Kipper, look at Kipper. He is such a big boy. He doesn't know how to tie his shoelaces. What are they doing? They are laughing at Kipper. That's not good, OK? Don't laugh at others, even though it is a little bit funny. Yes. Oh, no! You've got to learn it. OK?

And then Kipper got upset. And Kipper got home and said daddy, daddy, my friends laughed at me at school because I can't tie my shoelaces. Kipper was very upset. Kipper was upset. And he told dad. And dad thought for a moment. Maybe you really, really need to learn how to tie your shoelaces. Yes, Kipper, you must learn it.

And look, dad is helping Kipper. Dad made a block. OK, now dad is putting the shoelace on the block. Everybody, do you know how to tie shoelaces? Now let me teach you. First, you place the shoes on a flat surface and let the shoe laces for to either side of the shoe. And then you tie a basic knot just like this, and then make a bunny ear loop with one of the laces. And you make a bunny loop with the other lace. And tie a basic knot with the bunny ear loops. And pull the bunny ear loops tight. Done! Look, your shoes are tied nicely ! And now Kipper has known how to tie his shoelaces. But Kipper still needs practice. Practice makes perfect. So Kipper tried, it is not right. Try again and tried. It is still not right. And tried and tried. And Kipper got upset. Look at Kipper. What? Did you just tie a flower? OK and hooray! Finally ! Said Kipper. Kipper did it! Good job!

And now Kipper was at school. And Kipper did up his laces. Yeah! Kipper doesn't need the teacher to help. Wonderful, Kipper! And look, the teacher is helping with this girl.

And then it is time to go. Wait a minute ! What's wrong? Oh, no! Said Kipper. Kipper tied the shoelaces together. You need more practice, Kipper. Kipper, you need more practice.`,
      extensionCn: `兔子耳朵，兔子耳朵，在树旁玩耍。交叉着绕过树，想要抓住我。兔子耳朵，兔子耳朵，跳进洞里，从另一边钻出来又漂亮又勇敢。猴子，你在做什么？我在学怎么系鞋带。哦，这可不容易。你看，Kipper坐在台阶上，看起来很难过。为什么？因为Kipper不会系鞋带。鞋带。看，他的鞋带松开了。Floppy在旁边看着他，哦，加把劲儿再试试。这个故事叫《Kipper的鞋带》。我们来看看会发生什么吧，好吗？

好，现在翻到第一页。看，他们在哪里？他们在一家鞋店。这里有很多很多鞋子可以买。你喜欢哪一双？我喜欢这双，因为它看起来很帅。但看，Kipper不喜欢那双。不，不，不，颜色不对。那一双呢？不，尺码不对，太大了。那这一双呢？不，我还是不喜欢颜色。哦，Kipper。那这一双呢？一双白色运动鞋。再看售货员，他在冒汗。哦天哪！你试了这么多双。有没有一双你喜欢的？Kipper想要新鞋。好，他们就在鞋店里。

好，Kipper终于决定了：我要这双白色运动鞋。看那边还有妈妈的鞋，高跟鞋。你喜欢哪一双？我喜欢那双黄色高跟鞋。接着Kipper遇到问题了，他不会系鞋带。爸爸，帮帮我！爸爸帮了他。好，我来帮你。看，系“兔子耳朵”就可以了，很简单。Susan，什么是兔子耳朵？兔子耳朵就是看鞋带呀，它们像蝴蝶结，对吧？系起来就像兔子耳朵。是的！妈妈在做什么？妈妈在付钱。终于，售货员松了口气，终于结束了。耶，太好了！我很高兴能帮到你。

然后是Kipper和同学们。他们在干什么？在跳舞吗？哦，看，今天体育课。Kipper在学校，班上有体育课。这就是体育课。他们在做什么？我觉得他们在做热身。Kipper在学校，班上有体育课。对，这是体育课。你喜欢体育课吗？我喜欢！我会打篮球、踢足球、跑步、游泳。体育课很有趣。好，但他们在干什么？在跳舞吗？是的，他们在拉伸、在练平衡。看这个男孩，他摔倒在地上了，所以他平衡不好。你平衡好吗？当然，我超会。好，那你还需要多练习。现在我觉得Kipper做得不错。

叮铃铃！下课了。Kipper还是不会系鞋带。看，大家都在换回平常的衣服。Kipper穿上了鞋，但他不会系鞋带。于是他怎么做？他说：老师，老师，能帮帮我吗？Green老师帮了他。哦，Kipper，你得学会系鞋带，好吗？再看这些男孩，哈哈哈，Kipper，你看Kipper。他这么大了还不会系鞋带。他们在做什么？他们在笑Kipper。这可不好。不要嘲笑别人，哪怕有点好笑。是的。哦不！你必须学会它。

Kipper很难过，回到家对爸爸说：爸爸，爸爸，朋友们在学校笑我，因为我不会系鞋带。Kipper很难过。他告诉了爸爸。爸爸想了想：也许你真的真的需要学会系鞋带。是的，Kipper，你必须学会它。

看，爸爸在帮Kipper。爸爸做了一个小板。好，现在爸爸把鞋带放在板上。大家知道怎么系鞋带吗？我来教你。先把鞋放在平整的地方，让鞋带分别垂在两边。然后先系一个基础结，再用一边的鞋带做一个“兔子耳朵”圈，再用另一边也做一个圈，然后把两个圈再系一个结，拉紧。完成！看，你的鞋带系得真漂亮。现在Kipper会了，但他还需要练习。熟能生巧。Kipper试了，不对；再试，还是不对；再试再试，Kipper又急了。看，Kipper，咦？你系成了一朵花？好，耶！终于！Kipper说，Kipper做到了！太棒了！

现在Kipper在学校，他自己系好鞋带了。耶！Kipper不需要老师帮忙了。太棒了，Kipper！看，老师在帮另一位小朋友。

然后到了回家的时候。等一下！怎么了？哦，不！Kipper把两只鞋带系在一起了。你还需要更多练习，Kipper，Kipper你需要更多练习。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-02",
      level: "l2",
      episode: "L202",
      title: "The Wobbly Tooth",
      extensionEn: `Monkey, what are you doing? I think I have got a wobbly tooth. Wobbly tooth? Have you even got any tooth? Of course, Susan. I have really well teeth. In your dreams, right? You are still too young to have teeth, little monkey? You know you need to wait until you are older to get new teeth. Now look, Kipper is old enough. Now Kipper has got a wobbly tooth. Look, this one, wobbly. And soon, it is gonna fall out. OK, and who is this? This is the tooth fairy. Every night, the tooth fairy will fly here and there, carrying some coins. Why? Because when you have a fallen tooth, you need to put it under your pillow and then the tooth fairy will come and swop it for a coin. And now Kipper obviously wants the coin.

Kipper had a wobbly tooth. It is not comfortable. I can't chew well and when I talk it feels uncomfortable. I want it to fall and I want the coin in the tooth fairy's hand.

Mummy wanted to pull it out. Kipper, Kipper, come, come, I can help you. No, no, no, no, said Kipper. I don't want it. No! So Kipper is going into Kipper's room.

Oh, my god! What are they? The pliers! Daddy, what's on your mind? Daddy wanted to pull it out. And Kipper said, no, no, no, said Kipper. No, no, no! These are too scary. These are huge. And daddy got, ha, ha, ha. Oh my! Look! They are laughing. This is so funny. And Kipper, no, no, no, daddy, ran away.

And then, of course, daddy was joking, you know, those pliers are too big. And then they are in the yard. And Kipper is playing. So Biff went on the swing. And push, and push, look, Biff jumped off. And what's gonna happen? Kipper pushed her and Kipper looked back, look at us.

And then, bang! Oh, no, the swing hit Kipper. Oh, I can't imagine it. It makes me feel painful. And then here goes, oh, no, Kipper.

And then the tooth was gone. Er-oh! Look at Kipper's mouth. One tooth was gone. Where was the tooth? Was the tooth on the grass? I don't know. Maybe. And Kipper had swallowed it. Swallow, what does it mean? Like, I just swallowed it. And Kipper swallowed the tooth. Wait a minute ! Swallow in, and then the tooth will go all the way into your stomach.

Wait a minute. That's the problem. Kipper was upset. Why? Because now he had no tooth to put under the pillow. And here comes the tooth fairy, and the tooth fairy says, no tooth, no money. Oh, no, and Kipper was upset, because probably Kipper wouldn't get the coin.

But then brother and sister came, Sorry, said Biff and Chip, I am sorry. I let the swing hit your chin. I am so sorry. Here is my coin, it is for you. And then mummy comes, never mind, said mum, I will give you a coin. Don't be so upset. Never mind, said dad, here is my coin. Hey, I am not sad, said Kipper. Because now Kipper has three coins.

I am glad, glad means happy. And now who is upset. The tooth fairy. I have got no tooth.`,
      extensionCn: `猴子，你在做什么？我觉得我有一颗松动的牙。松动的牙？你真的有牙吗？当然了，Susan，我牙齿很好呀。做梦吧？你还太小，不会掉牙呢。你得再长大些才会换新牙。看，Kipper已经够大了。Kipper有一颗松动的牙。看，这颗，晃晃的，很快就要掉了。那这是谁？这是牙仙子。每天晚上，牙仙子会飞来飞去，带着一些硬币。为什么？因为当你有掉下来的牙，就要放在枕头下面，然后牙仙子会来用硬币换走。Kipper当然想要硬币。

Kipper的牙松动了，很不舒服。我咬东西不方便，说话也不舒服。我想它赶紧掉，然后拿到牙仙子的硬币。

妈妈想把它拔掉。Kipper，Kipper，来，我帮你。不要，不要，不要，Kipper说。我不要。不要！于是Kipper跑进了自己的房间。

天哪！那是什么？钳子！爸爸你想干嘛？爸爸想用钳子拔。Kipper说不不不，太吓人了，这么大。爸爸哈哈大笑。哦我的天！他们在笑。这太搞笑了。Kipper不不不，跑开了。

当然，爸爸是在开玩笑，那钳子太大了。接着他们到了院子里，Kipper在玩。Biff去荡秋千，推呀推呀，Biff跳下来了。会发生什么？Kipper推了她一下，回头看我们。

然后，砰！哦不，秋千撞到了Kipper。想想就疼。然后就这样，哦不，Kipper。

然后牙掉了。呃哦！看Kipper的嘴，少了一颗牙。牙去哪了？在草地上吗？不知道，也许吧。Kipper把牙吞下去了。吞下去是什么意思？就像我刚刚吞下去一样。牙一路到胃里去了。

问题来了。Kipper很难过。为什么？因为他没有牙可以放在枕头下了。牙仙子来了，牙仙子说：没有牙就没有钱。哦不，Kipper很难过，因为他可能拿不到硬币。

这时哥哥姐姐来了。对不起，Biff和Chip说，对不起，是我让秋千撞到你的下巴。我很抱歉。给你我的硬币。然后妈妈来了：没关系，妈妈给你一个硬币。别难过。爸爸也说：没关系，我也给你一个硬币。嘿，我不难过了，Kipper说，因为现在我有三枚硬币。

我很高兴，glad就是开心。那现在谁不开心？牙仙子。她没有牙了。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-03",
      level: "l2",
      episode: "L203",
      title: "The Foggy Day",
      extensionEn: `Susan, what's wrong with the weather? Oh, let me take a look. It is a foggy day. Monkey, it is foggy. Look, this family are caught by the fog too. And this book is called The Foggy Day. Now do you know what you can't do on a foggy day? You can not go outside and run very quickly or drive a car super fast. No, it is dangerous because you can't see anything clearly. OK? Now look at them. It seems that they are lost. Biff is pointing that way. And Kipper says I don't know which way to go. Oh, no! OK, let's see what happened.

It is the morning. Where is that building gone? The building is gone. Wait a minute. Maybe it is still there. Oh, it was foggy. On a foggy day, you can't see anything clearly. The building was gone.

Dad wanted to go shopping. What? Going shopping on such a bad weather? Are you sure that's a good idea? And look at the children. They got, oh, no, said the children. We don't want to go, daddy, you can barely see anything. And we want to play with the rose and the toy car. And daddy said, no, no, no, come, come, come, follow me, let's go.

OK, they got into the car. And they were fed up. OK, OK, daddy, stop nagging, we are coming, we are coming. OK? Let's get into the car. Oh, no! What's wrong with Biff's purse? Biff opened her purse, and then dropped her coins. Oh, no! It is very bad when you drop things on such a foggy day. Look, all the coins were everywhere but you just can't see them. Too bad! And then they got in the car and daddy started driving.

And boom, boom, boom. What happened? Look at the car, where is the car? I can barely see it. Wait a minute. The car is on the lawn. Can you drive a car on the lawn? No, you should drive your car on the road. And why is the car on the lawn? Because of the fog, the fog got worse, and you couldn't see the road, and daddy drove his car onto the lawn. Dad couldn't see and scared a cat, meow! That's a bad idea to drive.And dad stopped the car, maybe we should just get out. And they had to walk home. Really, we can't see the road at all.Oh, look, how they are walking? They are holding onto each other's scarf. Wow, that's a really good idea. Because if you don't do this, you might get separated, and you might get lost. So the fog got worse and they were lost anyway. Luckily, they were lost together, because they were holding to each other's scarf.

And then Biff said, this way, this way. And then the Kipper said I don't know which way to go. And the big brother said, no, no, no, this way, said Chip. And daddy got I really don't know, maybe that way.

So wait a minute. They saw a light, and they saw a shadow. What is that? A monster, said dad. Look, dad was sweating. It was so scary when you were already lost, right? Oh, no!

Oh, wait a minute. It is mum, said the children. Finally, they found their way home. Daddy, it was your fault. You know? You shouldn't have gone out on such a foggy day. You should stay at home and play your toys, OK?`,
      extensionCn: `Susan，天气怎么了？哦，我看看，是个大雾天。猴子，有雾。看，这家人也被雾困住了。这本书叫《大雾天》。你知道雾天不能做什么吗？你不能跑得很快，也不能开得很快。因为看不清楚，很危险。看，他们好像迷路了。Biff指着那边，Kipper说我不知道走哪儿。哦不！我们看看发生了什么。

早上，那栋楼去哪了？楼没了。等等，也许还在。哦，是雾太大了。雾天看不清楚，所以看起来楼不见了。

爸爸想去购物。什么？这样的坏天气去购物？你确定吗？孩子们说：哦不，我们不想去，爸爸，你几乎什么都看不见。我们想玩玫瑰花和玩具车。爸爸说不不不，来吧，跟着我走。

好，他们上了车。他们有点烦了。好好好，爸爸别念叨了，我们来了，我们来了。上车吧。哦不，Biff的钱包怎么了？她打开钱包，硬币掉了一地。雾天掉东西太糟糕了。硬币到处都是，你看不清，太糟了！然后他们上车，爸爸开始开车。

砰砰砰！发生了什么？车在哪？我几乎看不见。等等，车在草地上。车能开到草地上吗？不，你应该开在路上。为什么车在草地上？因为雾更大了，看不清路，爸爸把车开到了草地上。爸爸看不清还吓到了猫，喵！雾天开车很危险。爸爸停了车：也许我们该下车。于是他们走路回家，真的一点路也看不清。看，他们怎么走？他们抓着彼此的围巾。好主意！不这样就可能走散、迷路。雾越来越大，他们确实迷路了，但幸运的是他们在一起，因为他们抓着彼此的围巾。

Biff说这边这边，Kipper说我不知道往哪走，大哥哥Chip说不不不，这边。爸爸也说我不知道，也许那边。

等等，他们看到了一束光和一个影子。那是什么？爸爸说是怪物。看，爸爸在出汗。迷路时看到影子很吓人，对吧？哦不！

哦，等等，是妈妈。孩子们说。终于，他们找到了回家的路。爸爸，这是你的错，你不该在雾天出门。你应该待在家里玩玩具，好吗？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-04",
      level: "l2",
      episode: "L204",
      title: "Biff's Aeroplane",
      extensionEn: `Today we are gonna read this book, it is called Biff's Aeroplane. Aeroplane, this is the model aeroplane. Monkey, do you have one? I don't have one. It looks so cool. I want it. Oh, yeah! Maybe after the show, we can make one together, OK? Now look, Biff is ready to launch it. Launch, and how is Biff launching it? With a sling! This one is a sling. You got, like, o, bang, and then you launch the model plane. Let's see.

Oh, look, Biff is making it. Biff made an aeroplane. She has got some boards, and she has got some glue and a screwdriver. OK, quite a lot of tools. I don't know how to make a model plane. Do you know how to make one, monkey? I don't know. But we can learn. Yes, we can always learn.And then mum helped her. And I can help you, monkey. Hey, Susan, where are they? Well, I think they are in their living room. Look, they are making the model plane and they are painting it. Look, mum is holding a brush. And Biff is holding a brush too. And they are using model aircraft paint, non-toxic. What is not-toxic mean? That means it will not do harm to you. It is good. It is healthy. OK? So they are painting it. Look at the red stripe, beautiful. So mum helped her. And the aeroplane looks good. Do you like this model plane? Yes, I do, I love it.

Ta-da ! Biff wanted to fly it. And where are they now, monkey? Are they in a factory? Why do you say they are in a factory? Oh, I know. You must have seen these buildings, right? Yeah, they do look like the buildings in a factory, especially the smoke here. You see the smoke coming out of the chimney. But actually, she went to the park. They are in a park. You see the grass. And Biff is ready to launch the model plane. Three, two, one, let it go! Look, the airplane flew up. How happy they were! It flew really well! So it went over the trees. Everyone is looking up. Oh, look at the aeroplane. And look at Kipper, bang, fell onto the ground.

Then it went over the houses. Wow! I can't believe it. The model plane can fly so far. And then Floppy look up, woof, woof! Aeroplane! And then here comes a bird. Model plane!

Er-oh! They had a problem. The aeroplane flew too well that it got missing. Er-oh! Biff looked for the airplane everywhere. Everyone helped. They looked in the bushes. Is my model plane there? No. Pop! A rabbit hopped out. And Chip looked up at the tree. No, it is not in the tree. What is mummy doing back there? Mummy is asking the stranger. Hey, excuse me, sir, have you seen a model plane? And the stranger said, no, no, I don't know where it is. Everyone helped.

And they are still searching. So Biff looked and looked, searched and searched. She couldn't find it. Oh, look at Chip. Chip was even searching in the junk. Er! Smelly ! But still no sign of the model plane. Look at Biff. Biff was so sad. You know she has spent a long time making the model plane with mum.

She wanted to cry. And she went upstairs feeling so sad. She went upstairs. And here is a tennis ball. Be careful! Don't trip over.

She opened the door. And there she was! The airplane was on the bed. The airplane was on the bed. Look at Biff. Biff was so happy! Susan, how did the airplane get on the bed? That's a good question. I think we need to look back. Now here is the model plane, flying in the sky. Do you see this window? It is open. So maybe the airplane just flew through the window.`,
      extensionCn: `今天我们读这本书，叫《Biff的飞机》。Aeroplane，这是模型飞机。猴子，你有一架吗？我没有。它看起来好酷，我也想要。哦耶，也许节目结束后我们可以一起做一个，好吗？看，Biff准备发射了。发射，她是怎么发射的？用弹弓！就是这个弹弓，“嗖—砰”就把模型飞机射出去。我们看看吧。

看，Biff在做模型飞机。她有木板、胶水和螺丝刀，工具挺多。我不知道怎么做模型飞机。你会吗，猴子？我不会。但我们可以学。对，我们总能学会。妈妈也帮她。Susan，他们在哪？我想在客厅。看，他们在做模型飞机并给它上色。妈妈拿着刷子，Biff也拿着刷子。他们用的是模型飞机专用颜料，无毒。无毒是什么意思？就是对人无害，安全健康。看红色条纹，很漂亮。妈妈帮了她，飞机也很好看。你喜欢吗？我喜欢，我很爱它。

哒哒！Biff想让飞机飞起来。他们现在在哪里？在工厂吗？为什么这么说？哦，我知道，你看到那些建筑了吧？确实有点像工厂，尤其是冒烟的烟囱。但其实她去了公园。看草地，他们在公园。Biff准备发射了。三、二、一，放！飞机飞起来了！他们多开心啊！飞得很棒，飞过树梢。大家抬头看。哦，看飞机！Kipper“砰”摔在地上。

接着它飞过了房子。哇！不敢相信这架模型飞机能飞这么远。Floppy仰头叫：汪汪！飞机！这时还有一只鸟，模型飞机！

呃哦！出问题了，飞机飞得太好了，结果飞丢了。Biff到处找飞机。大家都帮忙，在灌木里找：我的飞机在这儿吗？没有。啪，一只兔子跳出来。Chip又看树上，没有。妈妈在后面问陌生人：先生，您看到模型飞机了吗？陌生人说没有。大家都在找。

他们继续寻找。Biff找啊找，搜啊搜，就是找不到。看，Chip甚至在垃圾堆里找。呃，臭！还是没有。Biff很难过，她和妈妈花了很久做这个飞机。

Biff想哭，难过地上楼。上楼时有个网球，注意别被绊倒。

她打开门，飞机在床上！飞机在床上。Biff太开心了！Susan，飞机怎么到床上的？好问题，我们回想一下。看，模型飞机在空中飞。看到窗户了吗？窗户开着。也许飞机就从窗户飞进来了。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-05",
      level: "l2",
      episode: "L205",
      title: "Floppy the Hero",
      extensionEn: `Hurry, hurry, drive the fire truck. Monkey, what are you doing? Susan, I am driving a fire truck. Wow, you know what? Today we are gonna read a story about fire trucks, a fire engine. No, Susan, I don't see any fire engine. You are about to see it. Look, here is Floppy. And Floppy is in the garden feeling so happy about itself. Do you know why? Because everyone says Floppy is the hero. Why?

The children were playing a ball. They were playing catch. And then nee-nor, nee-nor, here came a fire engine. A fire engine went by, sped by. What happened? Something must be on fire. What can you see on the fire engine? Lots and lots of hoses. And these hoses are for you to use to spray water and put out the fire.

Look, do you see the smoke? It is so thick. Oh, no, there was a fire. And everyone ran to see. Look, everyone, they were running there. And look at this fat man, he is holding some shaving cream. So he was shaving in. And then he heard, oh, fire engine! Something was on fire. I need to go. Everyone was running there to take a look. And here, he was doing some gardening. And then the dogs were joining too, let's go and take a look.

Wow, look, so many people were coming. But then the fireman said, get back. Get back, said the fireman. A barn was on fire, you need to get back. Susan, why do we have to get back? You know, when something is on fire, it is very dangerous if you go near. Look, this house might collapse, collapse. Or sometimes, there might be burst of fire, shooting out of the house, it's dangerous. And sometimes, that building might explode like boom. So tell me, can you go very near and take a look? No, no, we should keep a distance. Yes, we should keep a distance, OK? And a barn was on fire. What is a barn? This is a big barn. It is a big house for storing food or keeping animals, OK?

And oh, no! It's on fire. Woof, woof! Here is a white dog. And the white dog is barking. Oh, the dog wants to get inside the barn. There must be something important inside. The little dog ran to the barn and she barked and barked. Woof, woof! As if saying help, help ! What do you think happened? I don't know. And look, here is a sign that says, sold for conversion to luxury homes. What are luxury homes? Very fancy buildings for people to live in. And conversion means you are changing it. So nobody lives inside. This house has been sold

And then Floppy ran to the barn. Floppy jumped inside. Floppy jumped in the window. Why? I think Floppy must know why the white dog is barking. Oh, no, but Kipper is not happy about it. Chip is not happy about it. Oh, no, somebody, hey, save Floppy! Don't jump inside, it is dangerous.

And then, get Floppy, said Chip. No, firemen, you must save Floppy! My dog ran inside. And look, the firemen pushed the door. Push, push, the firemen pushed the door down, bang!

And then, look, Floppy ran out. What was in Floppy's mouth? A puppy! Not just one, everyone! One, two, three, four puppies. One, two, three, four, four puppies. Why? I know, this must be mummy dog. And they are the puppies. So that's why this mummy dog was barking. Oh, no, my children are inside. So he had some puppies. Hero! Floppy!

And then everyone looked at Floppy! Good job! Good job! Excellent! Bravo! You are our hero. What a good dog! Everyone said. Good job! Floppy! You are our hero.

Look at that! What a hero! And our Floppy is eating a big bone. That must be the reward. Very good! Floppy! And they are very happily playing together.`,
      extensionCn: `快点快点，开消防车。猴子，你在做什么？Susan，我在开消防车。哇，今天我们要读一个关于消防车的故事。消防车？Susan我没看到消防车。你马上就会看到。看，Floppy在花园里，很开心。为什么？因为大家都说Floppy是英雄。为什么呢？

孩子们在玩球，玩接球游戏。这时“呜—呜—”消防车来了。消防车飞快经过。发生了什么？一定是哪里着火了。你在消防车上看到什么？好多好多水管，它们用来喷水灭火。

看，你看到烟了吗？烟很浓。哦不，起火了。大家都跑来看。看，大家都跑过去了。那个胖胖的人手里拿着剃须泡，他刚在刮胡子，听到消防车就赶过去了。还有人在做园艺，狗狗也加入了，大家一起去看看。

哇，来的人真多。但消防员说：退后！退后！谷仓着火了，大家都要后退。Susan，为什么要后退？因为着火时靠近很危险。房子可能会倒塌，也可能喷出火焰，甚至爆炸。你能靠近吗？不能，我们要保持距离。对，要保持距离。谷仓着火了，什么是谷仓？这是一个大仓房，用来储存食物或养动物。

哦不！谷仓着火了。汪汪！有一只白色的小狗在叫。它想进谷仓，里面一定有重要的东西。小狗跑到谷仓旁一直叫，好像在说救命。会发生什么呢？我不知道。看，有个牌子写着“已售出，改建为豪华住宅”。豪华住宅就是很高级的房子，改建就是改变用途，所以里面没人住。

然后Floppy冲向谷仓，跳了进去，从窗户跳进去。为什么？我觉得Floppy知道小狗为什么叫。哦不，Kipper和Chip都很担心。救救Floppy！别跳进去，太危险了。

Chip说：把Floppy救出来！消防员，救救Floppy！我的狗跑进去了。消防员推开门：推、推，“砰”门开了！

接着Floppy跑出来了，嘴里叼着什么？一只小狗！不止一只，大家看：一、二、三、四只小狗。为什么？这是狗妈妈和她的宝宝们。所以小狗妈妈才一直叫：我的孩子在里面。英雄！Floppy！

大家看着Floppy：干得好！太棒了！Bravo！你是我们的英雄！真是好狗！大家都说。Floppy，你是我们的英雄！

看啊，多棒的英雄！Floppy在啃一根大骨头，这是奖励。太棒了！他们开心地一起玩。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-06",
      level: "l2",
      episode: "L206",
      title: "The Chase",
      extensionEn: `Today we are gonna read this book, it is called The Chase. Chase, chase, monkey, what does chase mean? Easy! Chase means to run after something. Do you like to chase something? I like to chase my bananas. Your bananas wouldn't run. Now look, here we have Floppy. And Floppy is sitting here looking exited. Exited! Why do you think Floppy looks so excited? Well, because Floppy sees a cat. Wow, I think I know why this book is called the chase. Because Floppy is about to chase. Now let's get started.

Floppy doesn't look quite happy. Why not? Look at this, Floppy's basket. It is broken. It is looks so old and broken. And Floppy is thinking what if I can get a new one. Floppy wanted a new basket.

OK, and ta-da ! There they are in the market. And here they are at a pet shop. Mum and Biff went to the market. Look, here is mummy, here is Biff. And Biff is taking Floppy. She says, Floppy, do you like this new basket? It is pink. And Floppy goes, yes, I do. I like it. And they got a new basket. Let's take a look at here. What do you see? Everything for pets. This is a pet store. You can buy pet toys and accessories. For example, beautiful belts. Wow, what a big toy! This is a bone shaped toy. And some meat and cages. If you have a pet, you can bring the pet here to buy something fun. OK?

Where is mum going down to? Look, mummy is going downstairs into the Ladies. Ladies, Ladies, Ladies means for women. I know, that's a toilet. That's where people go pee-pee and poo-poo. Mummy and Biff went to the toilet. But do you think Floppy can go inside too? No, no dog allowed. Especially I believe Floppy is not a girl, right? Stay Floppy, said Biff. And Biff tied Floppy to the lamp. Street lamp. Wait a minute. Look at the leash. I think it is not well tied. It is too loosely tied. But Biff says, hey, stay here, Floppy! Don't run away, OK? Stay, Floppy!

Then, ha ha, the chased get started. Floppy saw a cat. Oh, no, he chased it. OK! Now let's see what happened next.

The cat jumped over the oranges. And then the cat toppled the fruit stand, like all of the oranges … Crashed! Crash went the oranges. And then look at them. Oh, no! My oranges and lemons, it gonna take me a long time to put them back. Naughty cat! Bad dog!

Oh, no, they didn't stop. They kept on running. They were darting through the market. The cat jumped over some plates. What would happened to the plates? They would be smashed. Oh, no! Poor woman! She is gonna lose some money because if all those plates were broken, then she wouldn't get any money, right? So crash went the plates. Naughty dog, bad dog! You caused so much trouble ! Yeah, you did.

And the cat jumped over some clothes. Oh, look! A hat covered its face. And look at Floppy. Floppy ran into some clothes, and Floppy is wearing that blue coat. Oh my! They are funny! And then this old man got you, said a man. Got you! Stop running!

And then everyone was cross. What does cross mean? Angry! Look at them. Bad dog! Whose dog is it! Look what you have done! He is angry too. What a bad day and what a bad dog! Everyone said. But Floppy felt very happy. I like chasing cat. Do you think Floppy is a bad dog or a good dog?

What? What a good dog! Said mum. Why? Floppy caused so much trouble. And mummy said he was a good dog. Why, monkey? Because mummy didn't know about the chase. Yes, mummy didn't know about the chase. When she walked out, Floppy was looking very good. But actually Floppy caused a lot of trouble for those people, right?`,
      extensionCn: `今天我们要读这本书，叫《追逐》。Chase，追逐，猴子，chase是什么意思？简单！就是追赶。你喜欢追什么吗？我喜欢追香蕉。你的香蕉不会跑。看，Floppy坐在这儿，兴奋得不得了。兴奋！为什么Floppy这么兴奋？因为它看到了一只猫。哦，我知道为什么叫《追逐》了，因为Floppy要追猫了。我们开始吧。

Floppy看起来不太开心。为什么？看，Floppy的篮子破了，又旧又破。Floppy想：要是有个新篮子就好了。它想要新篮子。

好，哒哒！他们来到了市场，在宠物店。妈妈和Biff去市场，带着Floppy。Biff说：Floppy，你喜欢这个新篮子吗？它是粉色的。Floppy说：喜欢，我喜欢。于是他们买了新篮子。看，这里有什么？宠物的用品！这是宠物店，你可以买宠物玩具和配件，比如漂亮的皮带。哇，好大的玩具！这是骨头形状的玩具，还有肉和笼子。如果你有宠物，就可以带它来买东西。

妈妈要去哪儿？看，妈妈下楼去了“Ladies”。Ladies就是女卫生间。对，是厕所。妈妈和Biff去上厕所了。Floppy能进去吗？不能，不准带狗，而且Floppy也不是女孩。Biff说：Floppy，待在这儿。她把Floppy拴在路灯上。等等，看这根牵引绳，好像没拴牢，有点松。Biff说：嘿，待在这儿，Floppy！不要跑，好吗？待着！

然后，哈哈，追逐开始了。Floppy看见一只猫，哎呀，它追了上去。我们看看发生了什么。

猫跳过一堆橙子，撞翻了水果摊，橙子哗啦啦掉下来。哦不！我的橙子和柠檬，整理起来要很久。淘气的猫！坏狗！

他们还没停，继续在市场里乱跑。猫跳过一堆盘子，会怎么样？盘子会碎！哦不，可怜的女人，她要赔钱了。哗啦，盘子碎了。坏狗！你惹了好多麻烦！

猫又跳过衣服。看，一顶帽子盖住了它的脸。Floppy撞进衣服堆，披上了蓝色外套。天哪，好搞笑！一个老爷爷喊：抓到你了！别跑！

大家都很生气。cross就是生气。看他们：坏狗！是谁的狗！看看你干的好事！每个人都很生气。这真是糟糕的一天，糟糕的狗！但是Floppy很开心：我喜欢追猫。你觉得Floppy是坏狗还是好狗？

什么？好狗！妈妈说。为什么？Floppy闯了那么多祸，妈妈还说它是好狗？因为妈妈不知道追逐这件事。是的，妈妈不知道。她出来时只看到Floppy乖乖的样子，但实际上Floppy给大家带来了很多麻烦。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-07",
      level: "l2",
      episode: "L207",
      title: "Monkey Tricks",
      extensionEn: `Monkey, monkey, monkey, what are you doing? I am doing a monkey trick. Get down. OK, monkey, you are so naughty. And today we are gonna read Monkey Tricks. Now look, they are in the zoo looking at monkeys. And then, look, what’s in Kipper’s hand? It says joke shop. What’s a joke shop? That’s where you buy things for magics, OK? So let’s take a look.

Welcome to the zoo. And I see the giraffe. And I see a smiling bear. And what is daddy doing? Wilma’s Dad is buying some tickets. How many tickets does he need? One, two, three, four, five, six, he needs six tickets. OK, so the children went to the zoo. Let’s go inside !

And then, they look at the giraffes. look at the giraffe, so tall, three or five meters tall. And look at the giraffe, what color is it? It is yellow, and it has got brown patches. I love this pattern. And look at the cleaner, this is a zookeeper. The zookeeper is cleaning the pen, OK? And the giraffes are very tall. Do you like giraffes? Yes, I love giraffes. Me too.

And then they went to see the seals. Look, Atlantic Seal. And their feeding time is five o’clock. Oh, I think it’s their feeding time now. Look, the zookeeper is throwing fish at them. And they eat the fish happily. So they looked at the seals. Oh, look at the seals, they are so chubby and smooth. They are so cute. The seals were hungry, eat the fish. Are you hungry, monkey? No, I am not, it is not my feeding time. You are so cute.

And then they looked at the crocodiles. Look at the crocodiles, they are so long. Oh, they are the Nile Crocodile. Crocodiles, they are so long and they are ugly, very big mouth and sharp teeth. Look, this one is sleeping in the pond. Shh! They are sleeping and don’t wake them up. And it says, so not tap on glass. What is tap on glass? Here you see the glass, and you go tap, tap, tap. What’s wrong? I just want to say hello. No, no, no, don’t do this to animals. Can you imagine sitting in there or staying in there the whole day hearing thousands of taps a day? Knock, knock,knock. It must be very annoying. We can not tap on glass. That annoys the animals. That’s right.

And then they looked at the parrots. Oh, look, so many parrots. Here it says, parrots of South America. I believe they are called Macaws. Look how beautiful they are. Red, yellow, blue, so pretty and pure green ones, and parrots can mimic what you say, they can copy your words. So if you say hello, and they will say hello. If you do heng-heng, they will do heng-heng. Not all! And then look, they have got a curved beak, very very beautiful feathers. I like parrots, monkey, do you like them ? I like parrots too. So the parrots were noisy. They will say hello, hello, hello.

And then they looked at the elephants. Trumpet! Here are the mummy elephant and baby elephant. They have very long trunk, two long tusks. And the elephant is gray, so cool! Huh? And they are saying hello with its nose. So the elephants were big. And they are African elephants. African elephants have really big ears. And then they looked at the elephants very happily. What is Kipper doing here? Kipper is shopping for something from the joke shop. What is a joke shop? A joke shop is where you buy trick items. For example, fake playing cards. And I wonder what Kipper is shopping for. I don’t know. And look at the zookeeper, the zookeeper is holding a brush, and the zookeeper is brushing the elephant’s tusk. Very funny!

And then they looked at the monkeys. Oh, look, this monkey is eating a banana. Monkey, he has got a banana. I want a banana too. Don’t worry, I will give you a banana later, OK? Oh, they’ve got an apple, some bananas and they are looking at people and saying hi! The monkey were funny! Yeah! You are funny too, right? I am funny. I am funny.That’s right, you are funny! Look, Kipper comes back.

But they didn’t see Kipper. So they looked for Kipper. Kipper, where are you? Where is Kipper? I don’t know where Kipper is, but I do know a Rhesus Monkey was outside the cage. That’s not good. We need to find the zookeeper, right? Kipper, where are you?

Boom! What? Here comes Kipper wearing a mask. Oh, so this is, wait a minute. This was not a Rhesus Monkey, it was Kipper, look at the hand. So Kipper was wearing a Rhesus Monkey mask. Oh, that’s funny! Oh, I know, look, ha ha, Kipper bought the mask at the joke shop. Oh, that’s funny! Kipper looked like a monkey. And monkey, you look like a monkey. I am a monkey. Yes! OK!`,
      extensionCn: `猴子猴子，你在干嘛？我在做猴子把戏。下来！好吧。猴子，你真调皮。今天我们读《猴子把戏》。看，他们在动物园看猴子。然后看，Kipper手里拿的是什么？上面写着“恶作剧商店”。什么是恶作剧商店？就是买魔术小道具的地方。我们来看看吧。

欢迎来到动物园。我看到长颈鹿，我看到一只在笑的熊。爸爸在干什么？Wilma的爸爸在买票。他要买几张？一、二、三、四、五、六，他需要六张票。好，孩子们进动物园啦，走吧！

他们先看长颈鹿。长颈鹿很高，有三到五米高。长颈鹿是什么颜色？黄色的，上面有棕色斑点。我喜欢这个花纹。看饲养员在清理围栏。长颈鹿很高，你喜欢长颈鹿吗？喜欢！我也喜欢。

然后他们去看海豹。看，大西洋海豹。它们五点喂食。哦，可能正好到喂食时间了，饲养员在丢鱼给它们。它们开心地吃鱼。海豹圆滚滚、滑溜溜的，很可爱。猴子，你饿吗？不饿，我现在不是喂食时间。你真可爱。

接着他们看鳄鱼。鳄鱼好长，是尼罗鳄。鳄鱼嘴巴大，牙齿尖，看起来很凶。有一只在池塘里睡觉。嘘，别吵醒它们。牌子上写着“禁止敲玻璃”。敲玻璃是什么？就是“哒哒哒”敲。为什么不能？想想你被关在里面，一天听到成千上万次敲击，多烦啊。我们不能敲玻璃，那会打扰动物。

然后他们看鹦鹉。哇，好多鹦鹉。牌子写着“南美洲鹦鹉”，可能是金刚鹦鹉。红、黄、蓝，颜色很漂亮，还有纯绿色的。鹦鹉会模仿说话，你说“hello”，它也说“hello”。你哼哼，它也哼哼（不是所有）。它们有弯弯的喙和漂亮的羽毛。你喜欢鹦鹉吗？我也喜欢。鹦鹉很吵，会不停地说hello。

接着他们看大象。呜——这是妈妈象和宝宝象。它们鼻子长，象牙也长。大象是灰色的，很酷。它们用鼻子打招呼。非洲象耳朵很大。他们看得很开心。那Kipper在做什么？Kipper在恶作剧商店买东西。恶作剧商店就是买把戏道具的地方，比如假扑克牌。Kipper买什么呢？不知道。看饲养员在刷大象的象牙，很有趣。

然后他们去看猴子。看，这只猴子在吃香蕉。猴子，它有香蕉！我也想要。别急，等会儿给你。猴子们还有苹果和香蕉，朝人们打招呼。猴子很有趣！你也很有趣，对吧？我很有趣。对，你很有趣！看，Kipper回来了。

但是他们没看到Kipper，于是到处找。Kipper，你在哪？我不知道Kipper在哪，但我看到一只恒河猴在笼子外面，这可不好，我们得找饲养员。Kipper你在哪？

砰！什么？Kipper戴着面具出现了。等等，这不是恒河猴，这是Kipper，你看那只手。Kipper戴着恒河猴的面具！哈哈真有趣。哦，我知道了，Kipper在恶作剧商店买了面具。太好笑了，Kipper像一只猴子。猴子，你也像猴子。我就是猴子。是的！好吧！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-08",
      level: "l2",
      episode: "L208",
      title: "Hey Presto!",
      extensionEn: `Hey Presto !Today we are gonna read a book about magicians. And Hey Presto is the word that a magician says when he makes things appear. So let’s say together, Hey Presto ! Now look, Wilma’s dad is looking at a poster and here it says Sheena. Who is Sheena? She is Sheena. Sheena is the conjurer. What is a conjurer? A conjurer is a magician who can make things appear out of nowhere. Wow, that's really cool! Look at all the white doves in her hand. It says the show will be on Saturday at the civic ballroom. A ballroom is a very big room where people go dancing and watch shows. So let’s get started. I really want to go and watch magic show.

Civil ballroom! Look, there are so many people waiting to go inside. And it is says, tonight here comes Sheena, the conjurer! The children went to a show. So it is a magic show. Mum and Dad took them. Let’s go inside. Everyone is so happy.

And look, this is Sheena. She is really professional, huh? She is wearing the magician suit. Here she is wearing a tuxedo. A conjurer was in the show. And what is she doing? She is making, boom, handkerchief appear out of nowhere. That is so cool! And look at this, on the table, we can see some props, props are things to help you do magic, OK? I see a magic wand, and a pair of glasses, and an egg. Seems quite interesting! And she was called Sheena. Hello, Sheena. I like your show.

And then she took Dad’s tie. Hello, sir, may I borrow your tie, please? Oh, and daddy says, OK, here you are. And then she put it in a bag. I wonder what she is gonna do with daddy’s tie.

And she took mummy’s ear-ring. Oh, mummy has really big ear-ring, huh? And she put it in the bag, bong, in the bag.

And then she took dad’s watch. Wow, it looks like a gold watch. It must be worth a lot of money. And she put it in the bag too, bong. Wow, I wonder what she is gonna do.

And she took dad on to the stage. This is the stage. You can give a show, you can sing, you can dance on the stage. And there dad sits on the stage. And she put the bag on dad’s head. OK, there it is, the bag, I am gonna put it under the hat. OK! And look, here comes an assistant. The assistant is pushing a box, oh, it is a pretty big box with some shapes on, circle, and diamond, square.

Oh, a girl is in the box. Yes, indeed, that’s Wilma. Sheena took a big box and Sheena opened the door, and she put Wilma inside. So Wilma is an assistant too. And then what is the conjurer gonna do with Wilma?

Sheena took her wand. One, two, three, Hey Preston! Bang! She said.

And then what happened? Ta-da ! Hey Presto ! Said Wilma. Oh, look, wait a minute ! Wilma is wearing daddy’s tie, mummy’s ear-ring and daddy’s gold watch. Where were these things just now? I remember they were here in the bag under the magician's hat. Wait a minute ! But how? How did it happen? Wow! Amazing! That’s why I like conjurers and magicians. You know, they are, they know magic, so cool!                                            And monkey, do you know what happened? Do you know how these things got onto Wilma’s body? I think maybe the magician put these things in the box. Maybe, maybe the conjurer, look, here is the moment when she closed the box, maybe she put the things inside already. It was a sleight of hand, it was like... You can not see it, but she might have done it. Magicians are so cool! I want to be a magician.`,
      extensionCn: `嘿，Presto！今天我们读一本关于魔术师的书。“Hey Presto”是魔术师变出东西时说的话。我们一起说：Hey Presto！看，Wilma的爸爸在看海报，上面写着Sheena。Sheena是谁？她就是Sheena，一个魔术师。什么是魔术师？能把东西凭空变出来的人。哇，太酷了！看她手里的白鸽。海报说演出在周六的市政舞厅。舞厅是很大的房间，人们在那里跳舞和看表演。我们开始吧，我很想看魔术表演。

市政舞厅！看，有很多人排队入场。上面写着：今晚登场的是魔术师Sheena！孩子们去看演出了，爸爸妈妈带他们进去，大家都很开心。

看，这就是Sheena。她很专业，穿着魔术师的衣服，像燕尾服。魔术师正在表演，她“砰”地把手帕变出来了。太酷了！桌上有很多道具：魔杖、眼镜、鸡蛋。很有意思。她叫Sheena。你好，Sheena，我喜欢你的表演。

然后她拿走了爸爸的领带：先生，我能借一下您的领带吗？爸爸说：好的，给你。她把领带放进袋子里。我好奇她要做什么。

她又拿走了妈妈的耳环。哇，妈妈的耳环好大。她把耳环也放进袋子里，咚。

她又拿走了爸爸的手表。哇，看起来像金表，很值钱。她把手表也放进去，咚。她到底要做什么呢？

她请爸爸上台。这里是舞台，可以唱歌跳舞表演。爸爸坐在舞台上，她把袋子套在爸爸头上，然后再盖上帽子。看，助手推来一个大箱子，上面有圆形、菱形、正方形的图案。

箱子里有个女孩，是Wilma。Sheena打开箱门，把Wilma放进去。Wilma也是助手。魔术师要对Wilma做什么呢？

Sheena拿起魔杖：一、二、三，Hey Presto！砰！

然后发生了什么？哒哒！Wilma说：Hey Presto！哇，等等！Wilma戴着爸爸的领带、妈妈的耳环和爸爸的金表。刚才这些不是在袋子里、帽子下面吗？怎么会到了Wilma身上？太神奇了！这就是我喜欢魔术师的原因，他们会魔法，太酷了。猴子，你知道怎么回事吗？这些东西怎么到了Wilma身上？我想也许魔术师在关箱子时就把东西放进去了。是障眼法，你看不见，但她可能已经做了。魔术师真酷！我也想当魔术师。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-09",
      level: "l2",
      episode: "L209",
      title: "It’s The Weather",
      extensionEn: `Today we are gonna read this book, it’s called It’s The Weather. Woo, woo, look at this, it is a very windy day. And there is an old lady. I believe this is the teacher. What’s wrong with her? Look, ta-da! She is holding an umbrella but something wrong is with the umbrella. Yes, look, the umbrella is blown inside out. Uh-oh! Now she can’t use it. Look at this cleaner, a gust of wind came, and the cap has been blown away, Wow, it’s such a windy day. Look at the trees, all the trees are tilting in the wind. And probably there might be sand, that will get into your eyes. I hate windy days, monkey, do you like windy days? No, it is so windy today. Be careful, monkey, come inside, let’s read this story, OK? Don’t stay in the strong wind.

And here, the children were noisy like all the children are blablabla, eh, so noisy. And the teacher is saying shh, quiet, children, quiet, let’s read this story. And the children were still blablabla talking. What’s wrong? Why are the children so noisy today?

Look at the children, the children were silly. Look at Kipper, Kipper is making a face. What’s that girl doing? Look, the girl is waving her hands, hi! And then what’s this boy doing? The boy is playing a paper plane. And then this boy looks really silly, look, this boy is shaking his hands, and

his hands are gone blurry. How many hands do you see? Blurry! Many, many hands, right? Look at the children, they were silly.

And then, oh my god, look at this. The children were messy. They’ve made the classroom so messy. The paint, they have spilled the paint, and they have scattered the art supplies everywhere.

The children were untidy. This room is a mess. Monkey, do you want to go into the room? No, that’s scary. I might get paint all over my body. Yes, that’s very bad. Look at the cleaner, he is carrying something. Wait a minute, I think he has tied his cap onto his face, that’s so funny.

And I wonder why he is doing this. That’s why! Oh, look, remember last page? Children were being silly, and outside, ta-da, the cleaner lost his cap. His cap was blown away. And then what happened? Fell on the wall. So probably he would have to take it off, right?

OK, now that’s a very clever idea. He has tied his cap, that’s pretty good. Oh, dear, said Mrs. May. The teacher is looking out the window. The leaves are being blown everywhere. Even the garbage is blown out of the garbage bin. Smelly! Oh, dear, what a bad weather. It’s the weather.

It’s bad weather.

And then the children were cross. Why did you do that? No, you start it first! What are they doing? They are quarreling. They are quarreling with each other. Monkey, have you quarreled with

your friends? Have I quarreled with you, Susan? No, I don’t think we have. Look, they are angry at each other. They are quarreling. The children were grumpy. Grumpy means you are angry, you are cross. I think I see the cleaner’s cap. Wait a minute. The cap was on his head. And he even tied his cap. No use! Look, the cap has been blown away again.

And then the children were unhappy. Look, he is crying, she is crying too. They must be so unhappy because they can’t play outside. Look at the weather outside. And then the cleaner is looking up, oh, no, my cap, how can I get it down? Yes, monkey, do you know how he can get it down? Maybe he needs something really long or he needs to climb up onto the wall. Yes, maybe he needs to climb up.

And look, oh, dear, said Mrs. May. The cleaner has got a very long mop. Yes, this is long enough, and he can use this to get the cap. It’s the weather. Pitter-patter, pitter-patter, it is raining. So it is a very stormy day. There are strong wind and heavy rain. And children are not happy. Look at them. We can’t go outside, we are not happy, we are grumpy.

And then the sun was shining. Here comes the bird chirping on the wall and everyone was very happy. The children were good. Look, he is making handcraft, she is reading, they are talking nicely with a big smile on her face. Very happy! And even the cleaner is very happy. Look, look at my plants. And he has got his cap back. Wow, finally, the wind has stopped.

P10: And it is a good day! Look at the sun! Sunshine always makes my happy. What a day! Said Mrs May. All the children go hooray! We can play outside. The weather is very important right? What’s the weather like in your town today? I hope it is good weather.`,
      extensionCn: `今天我们读这本书，叫《天气》。呜——看，这是个大风天。这里有位老太太，我想她是老师。她怎么了？看，她拿着伞，可伞被风吹翻了，撑不开了。再看清洁工，一阵风把他的帽子吹走了。哇，风好大。树都被吹歪了，风沙还会吹进眼睛。我讨厌大风天，猴子，你喜欢吗？不喜欢。今天太大风了。小心，猴子，进来，我们读故事吧，别站在大风里。

教室里孩子们叽叽喳喳，老师说：嘘，安静，孩子们安静，来读故事。可孩子们还是叽叽喳喳。怎么了？为什么今天这么吵？

看这些孩子，多淘气。看Kipper在做鬼脸。那个女孩在挥手，嗨！那个男孩在玩纸飞机。还有这个男孩看起来很滑稽，他在摇手，手都变模糊了。你看到几只手？模糊，一堆手，对吧？孩子们真淘气。

再看，天哪，教室乱糟糟的。他们把教室弄得一团糟，颜料洒了，画具到处都是。

孩子们太不整洁了。房间像被炸过。猴子，你想进这个房间吗？不想，太可怕了，我会被颜料弄脏。对，很糟糕。看清洁工，他拿着东西。等等，他把帽子绑在脸上了，好搞笑。

他为什么要这样？因为！看，上一页孩子们在闹，外面风把清洁工的帽子吹走了，帽子掉在墙上。他只能取下来。所以他把帽子绑住了，这个主意很聪明。

哎呀，May老师说。她往窗外看，树叶被吹得到处都是，垃圾也被吹出了垃圾桶。臭臭的！真是坏天气。

天气不好。

接着孩子们开始吵架。你先开始的！你先的！他们在争吵。猴子，你和朋友吵过架吗？我和你吵过吗？没有吧。看，他们互相生气。孩子们很暴躁。grumpy就是生气、闹情绪。咦，我看到清洁工的帽子。刚刚他把帽子绑好了也没用，又被吹走了。

然后孩子们不开心了。看，有人哭了，她也哭了。他们不能出去玩，很不开心。看看外面的天气。清洁工抬头看：哦不，我的帽子，怎么取下来？猴子，你知道怎么取吗？可能要用很长的东西，或者爬上墙。对，可能要爬上去。

哦，May老师说。清洁工拿来一根很长的拖把，够长了，可以把帽子勾下来。天气啊天气。滴答滴答，下雨了。风很大、雨很大，这是暴风雨天。孩子们不开心：不能出去玩，我们很生气。

然后太阳出来了！小鸟在墙上叫，大家都很开心。孩子们很乖，有人在做手工，有人在读书，大家聊得很开心。清洁工也很开心，看，他把帽子拿回来了。终于，风停了。

这是个好天气！看太阳！阳光总是让人开心。May老师说：多好的一天！孩子们欢呼：我们可以出去玩啦。天气很重要，对吧？你们那儿今天是什么天气？希望是好天气。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-10",
      level: "l2",
      episode: "L210",
      title: "Naughty Children",
      extensionEn: `Today we are gonna read this book, it’s called Naughty Children. Susan, you are naughty. What? Am I naughty, everyone? I am funny and naughty. Do you think the children are very naughty? I think they look a little bit mean. Eh-oh! But look at this daddy. The daddy is very happy, right? Hi! And the daddy looks happy, jolly and very chipper.

OK, now look, mummy and this dad are shaking hands. Shake shake shake, hello, hello, shake hands, nice to meet you, blablabla. And then two children came. These children probably don’t want to come. Look at their face. That is a very unhappy face, right? And then, here Biff is looking at them and she got, oh, they look very naughty.

Indeed, look at them. They are so naughty. This is not their home. They are guests in other people’s home. And look what they are doing? They climbed on the furniture. What is furniture? Furniture refers to the things that can be moved in your house, like a piece of furniture, furniture, a sofa is a piece of furniture. You can also have a chair, a table and a bed, everything that can be moved, OK? Furniture! And then they jumped on the sofa. Look, they didn’t even take off their shoes. Our sofa is gonna be dirty. That’s bad. They are not happy.

What is the girl doing? They climbed up the curtains. This girl has climbed up the curtains. Do you think it is safe to do, monkey? No, no, it’s very dangerous. Get down! Everyone, let’s say

it together, get down! It is dangerous. The curtains might be broken, right? And then, they jumped on the bed. Five little monkeys jumping on the bed... OK, OK, calm down, monkey. This is not jumping on the bed time. This is bad to do, we shouldn’t do that. Let’s say it together, don’t jump on the bed, don’t jump on the bed. Especially when the bed is not yours. Oh, my!

What? What are they doing? They climbed up the tree. Now look at the tree. The tree is bend. Er-oh, do you know what will happen if they stay on this very thin tree for a long time? The tree will snap. Snap, that is not good. And he might fall down. What is the girl doing? Oh, no! The girl is jumping on the flowers. They jumped on the flowers. This is not good. Why not, monkey? Because the flowers might die. Yes, the flowers might die. Stop! Look, Biff is shouting, stop! Everyone, let’s say it together, stop! Good job! OK.

But have they stopped? No, they haven’t. They are just like monkeys jumping here and there. Susan, do you have an issue with monkeys? No, but you know, monkeys like jumping. Oh, no! Said mum. What is the boy doing? The boy just head-butted, bang, head-butt, head-butt the ball

onto the window. What might happen? The window might be smashed. Oh, no! Mum is so angry,

Mum is frowning. Look at me, frowning. OK, and Biff had an idea. Mum, I know what to do. I have an idea. What is Biff’s idea? Let’s keep reading, OK?

Oh, wait a minute. The are still jumping. But where are they jumping? I see a slide. I see a big log. And it looks like a playground, right? The backyard, we have some big, big toys for you to play on. They climbed up the ladder. That’s where you should climb. They jumped off the log. This is where you should jump. Oh, I see. I know what Biff’s idea is, take them to the playground.

They can have fun here. Look, oh, she is still climbing. But this time she is climbing on the net. They climbed on the net. They jumped off the wall. Bang! This is where you are supposed to climb and jump. Very good! I like Biff’s idea.

Oh, so look, these children are just very, very energetic just like Susan. Energy, I am full of energy. I just want to jump. So we need to take them to the right place. Everybody was happy. Look, a header! Bang, and look, kick, bang, they are having fun playing football. What are they doing? Our family are enjoying a picnic when the children are having fun. What a lovely scene, right? So everyone was happy! What good children! Said mum.

So look, when they leaving, they are happy too. Remember when they first came, they got I don’t want to be here, I want to play, and then when they leave, they are so happy. They had a wonderful day. So the children went home, bye!`,
      extensionCn: `今天我们读这本书，叫《淘气的孩子》。Susan，你淘气吗？什么？大家觉得我淘气吗？我又好玩又调皮。你觉得这些孩子淘气吗？我觉得他们有点坏。哎哟！但看这个爸爸，他很开心，对吧？嗨！爸爸看起来很高兴、很开朗。

看，妈妈和这个爸爸在握手。握握手，打招呼，很高兴见到你。然后两个孩子来了，他们看起来不想来。看他们的表情，很不开心。Biff看到他们：哦，他们看起来很淘气。

确实很淘气。这不是他们的家，他们是客人。看他们在做什么？他们爬到家具上。家具是什么？就是家里可移动的东西，比如沙发、椅子、桌子、床，这些都是家具。他们还穿着鞋就跳到沙发上，沙发要被弄脏了。太不好了。

那个女孩在干什么？她爬上窗帘。你觉得安全吗？不安全，快下来！大家一起说：快下来！危险。窗帘会被扯坏。然后他们又跳到床上。五只小猴子在床上跳……好啦好啦，冷静。现在不是跳床时间，这很不好，尤其这床还不是你家的。大家一起说：别跳床！别跳床！

他们又在做什么？爬到树上。看这棵树，都被压弯了。哎哟，如果他们在这么细的树上待太久，会怎么样？树会断，孩子会摔下来。那个女孩又在做什么？哦不，她在踩花！踩花可不好，花会被踩死。停下！Biff在喊：停！大家一起说：停！好。

他们停了吗？没有。他们像小猴子一样到处跳。Susan，你对猴子有意见吗？没有，猴子就是爱跳。哦不！妈妈说。那个男孩在干什么？他用头顶球，砰，球飞到窗户上。会发生什么？窗户会碎。哦不！妈妈很生气，皱起了眉头。看，我在皱眉。Biff有了主意：妈妈，我知道怎么办了。Biff的主意是什么？我们继续看。

等等，他们还在跳，但在哪里跳？我看到了滑梯、大木头，像是游乐场，对吧？后院里有大玩具，他们爬梯子，该爬的地方；从木头上跳，该跳的地方。哦，我知道Biff的主意了：带他们去游乐场。

他们在这里玩得开心。看，她还在爬，但这次在爬网。她们在网子上爬，从墙上跳，砰！这是应该爬和跳的地方。Biff的主意真好。

这些孩子很有精力，就像Susan一样。精力旺盛，我就想跳。所以要把他们带到合适的地方。大家都很开心。看，顶球，砰；踢球，砰，他们在玩足球。家里人在野餐，孩子们在玩，多美的画面啊！大家都很开心。妈妈说：真是好孩子！

看，他们要走了也很开心。记得刚来时，他们不想来、只想玩，离开时却很开心。度过了美好的一天。孩子们回家啦，拜拜！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-11",
      level: "l2",
      episode: "L211",
      title: "A Sinking Feeling",
      extensionEn: `Hey monkey, let’s go swimming. Swimming? I don’t want to go. Why not? Because I have a sinking feeling. A sinking feeling? Like this? A Sinking Feeling. What does it mean, everyone? A sinking feeling is the feeling that says something bad is going to happen. Something bad? I think they look quite happy. Why do they say they have a sinking feeling? Let’s get started.

There they are. They are in the swimming pool. Hey, monkey, I have a question for you. When you go to the swimming pool, what do you need to bring? I need a swimming cap, swimming goggles and swimming suit. Yes, that’s right, monkey. What if you can’t swim very well, what else do you need? I don’t know. Look, arm floaties. You need arm floaties. Arm floaties.They will help you float on the water, you will not sink. Well, look, Kipper doesn’t know how to swim, so Kipper needs to wear arm floaties. Monkey, you need arm floaties. I don’t want to go even. Oh, come on, cheer up! The children were in the pool. Kipper, Kipper, come and join us.

I see a very big rubber duck. It’s called an inflatable. What is Wilma doing? Wilma climbed on the duck. Climb up the net. So that means Wilma is going to ride on the duck. Wow, that seems fun. I want to try it.

Hey, get on, said Wilma. Get on, get on. Wilf climbed on. Wow, it seems fun.

And then, get on, said Wilf. Who else was coming? Oh, Chip, Chip climbed up. This looks so funny. I want to go.

Get on, said Chip. Biff climbed on. Eh, pull, pull. Oh, monkey, do you want to try? No, I am scared. Oh, come on! It is just a rubber duck.

And then, get on, said Biff. Kipper couldn’t get on. Help, help! Oh, come on. Kipper is just like you, monkey.

Get on, said everyone. Come on, you can do it. Let’s cheer for Kipper, OK? Get on, Kipper! Yes, monkey, let’s encourage Kipper a little bit more. Get on, you can do it! Everyone, together! Get on, you can do it! Good job! So Kipper couldn’t get on. I just can’t! I don’t know what to do.

Get on, said everyone. Kipper climbed on. Wow, very good! Look! Hooray! Kipper did it.

Look! Monkey, if you just try, you can make it too.

On, no! Splish, splash! I see so many legs and arms. What happened? This rubber duck tilted, tipped over. You say, tip over. And then everyone fell into the water. But that’s a lot of fun. It is just like diving.`,
      extensionCn: `嘿猴子，我们去游泳吧。游泳？我不想去。为什么？因为我有一种“沉下去的感觉”。沉下去的感觉？像这样？“A Sinking Feeling”是什么意思？就是觉得要发生不好的事。真的会发生坏事吗？他们看起来挺开心的。为什么会有“沉下去的感觉”？我们开始吧。

他们在游泳池里。猴子，我问你，去游泳要带什么？泳帽、泳镜、泳衣。对！那如果不会游泳，还需要什么？我不知道。看，臂圈！需要臂圈，能帮你浮起来，不会下沉。看，Kipper不会游泳，所以戴着臂圈。猴子，你也需要臂圈。我更不想去了。别这样，打起精神！孩子们在泳池里玩，Kipper快来。

我看到一只很大的橡皮鸭，是充气的。Wilma在干什么？她爬到鸭子上，准备骑它。哇，真好玩，我也想试试。

Wilma说：上来，上来。Wilf爬上去了。哇，好好玩。

然后Wilf说：上来。谁要来？哦，Chip爬上去了。这看起来太好玩了，我也想上去。

Chip说：上来。Biff爬上去了。哎呀，拉拉拉。猴子，你想试吗？不，我害怕。别怕，只是个橡皮鸭。

然后Biff说：上来。Kipper上不去。救命救命！哎呀，Kipper跟你一样。大家说：上来，上来。来吧，你可以的。我们给Kipper加油。上来，Kipper！加油！大家一起：上来，你可以的！太棒了！可是Kipper还是上不去。我就是不行，不知道怎么办。

大家还在喊：上来。Kipper终于爬上去了。哇，很好！看！耶！Kipper做到了。

看吧，猴子，只要你试一试，你也可以。

哦不！哗啦！我看到了好多腿和胳膊。发生了什么？橡皮鸭翻了，翻倒了。大家都掉进水里。但这很有趣，就像跳水一样。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-12",
      level: "l2",
      episode: "L212",
      title: "Creepy-crawly",
      extensionEn: `Today we are gonna read this book. It is called Creepy-crawly. Susan, what is a creepy-crawly? A creepy-crawly is an insect that you don’t like. You know, the insects will creep, creep and crawl, crawl on your arm, thinking of it gives me goose bumps like.... Can you think about it? Just think about it, close your eyes. And then it is crawling there, goose bumps. Oh, no, I hate bugs. Itchy! Yes, OK, now look, Wilma has got something inside the box. Oh, and the box says the joke shop. The joke shop, remember the joke shop? Yes, that’s where Kipper got that

monkey mask. Yes, that’s right. They got something funny inside it. Don’t tell me it is a creepy-crawly.

Ta-da! Wilma had a creepy-crawly. It looks like a spider, a spider. She put it in the bath. What? Oh my! Wilma put this in the bath. This is the bathtub. You can go inside and take a bath. Happy? But do you think you will be happy when you are taking a bath and see a creepy-crawly inside? Ah! Probably you will scream, right?

And then, oh, they called dad. Wilma called dad. Get it out, said Wilf. Dad, look, they looked

very scared. They are tricking daddy. Yes, they are tricking daddy. And dad didn’t know.

Ugh! I couldn’t, said dad. So dad is afraid of the creepy-crawly. And then Wilf called mum. Mum, mum, get it out. Look at dad! They are so naughty, right?

Get it out, said Wilf. Ugh! I couldn’t, said mum. Mum is scared too. Oh, because, come on, think of that creepy-crawly so big. When you see such a big spider, you’d better run. You know?

And then Wilma called Chip. Chip, Chip, come, come, come. Get it out, said Wilf. What do you think Chip would say?

Ugh! I couldn’t. Let’s say it together, ugh! I couldn’t. Said Chip. Scary! And then Wilf called Biff. Biff, come, come, come!

Get it out, said Wilma. Get it out! And then ugh! I couldn’t, said Biff. Such a big spider in the bathtub.

And then everyone called Kipper. Kipper, Kipper, come and help. Get it out, said Wilf. And Kipper got, what? What’s in it? You are all standing here and you can’t get it out? And you want me? Such a little boy to can get it out?

On, my! Wait a minute! Kipper got it. Kipper took it out from the bathtub.And Kipper holds it in his hand. Easy! Said Kipper. Why, monkey? I know because Kipper knew it was a creepy-crawly. Oh, yes, you are right. Kipper went to the joke shop and Kipper must have seen it.`,
      extensionCn: `今天我们读这本书，叫《爬来爬去的小虫》。Susan，什么是creepy-crawly？就是你不喜欢的小虫。它们会“爬、爬、爬”在你胳膊上，光是想想就起鸡皮疙瘩。闭上眼想一想，它在爬……哎呀，我讨厌虫子，痒痒的！好吧，现在看，Wilma的盒子里有东西，盒子上写着“恶作剧商店”。记得恶作剧商店吗？Kipper就是在那里买了猴子面具。对，他们买了有趣的东西。别告诉我是小虫。

哒哒！Wilma拿出一个爬虫，看起来像蜘蛛。她把它放进浴缸里。什么？天哪！Wilma把它放进浴缸。浴缸就是洗澡的地方。你会开心吗？如果洗澡时看到一只爬虫，肯定会尖叫吧？

然后他们叫爸爸。Wilf说：把它弄出来！爸爸，他们看起来很害怕。他们在捉弄爸爸。爸爸也不知道。

“呃！我不敢。”爸爸说。爸爸也怕爬虫。然后Wilf叫妈妈：妈妈妈妈，快弄出来。看爸爸！他们好淘气。

“把它弄出来！”Wilf说。“呃！我不敢。”妈妈也怕。想想那么大的蜘蛛，看到就想跑，对吧？

然后Wilma叫Chip：Chip，快来。Wilf说：把它弄出来。你觉得Chip会说什么？

“呃！我不敢。”我们一起说：呃！我不敢。Chip说。好吓人。然后Wilf叫Biff：Biff，快来！

“把它弄出来！”Wilma说。然后“呃！我不敢。”Biff也说。浴缸里那么大的蜘蛛。

最后大家叫Kipper。Kipper，快来帮忙。Wilf说：把它弄出来。Kipper说：什么？里面是什么？你们都站在这里不敢弄出来，还要我？我这么小也能弄出来？

哎呀！等等！Kipper拿出来了。Kipper从浴缸里拿起它，拿在手里。简单！Kipper说。为什么呢？因为Kipper知道那只是个恶作剧小虫。对，你说得对，Kipper去过恶作剧商店，一定见过它。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-13",
      level: "l2",
      episode: "L213",
      title: "What is it?",
      extensionEn: `Susan, what is it? It looks so scary! Monkey, don’t be scared. This is only a salamander. Salamander, salamander, look how cute it is. It looks like a lizard, right? But it is not a lizard. This is an amphibian. That means it lives on land and in water. It is black and it has got yellow spots. And it’s got four short legs and a very long tail. It’s cold-blooded. What does that mean? It means that it needs the sunshine to heat it up. OK? We are not cold-blooded, we are warm-blooded. OK? Now it is lying on the grass and I see some leaves there.

OK, woof, woof, here comes Floppy. Floppy barked. Woof, woof, woof. What do you think Floppy is saying? Floppy says what is it? This thing looks so strange. And look, the family are walking here. There is a little bridge. And then mum is talking to someone. So I bet they are in a park.

Woof, woof, Floppy keeps barking. And Floppy barked and barked. And Floppy was saying, hey, everyone, come here, take a look at this. What is it? Said Biff. Floppy, why are you barking? Let’s take a look. Everyone is walking towards Floppy.

OK! And then Biff looked.Wow, look at this little thing. What is it? She asked. Oh, Biff didn’t know what it was. And then all the others were coming too. Look, Kipper was holding a little teddy bear.

What is it? Wilf looked and Wilf didn’t know what it was. So Wilf asked, what is it? He said. Oh, look at mummy. Mum was looking at the bottom of her shoe. So maybe something got stuck there, right?

What is it? Said Wilma. I don’t know. Is it a frog? But is it a frog, everyone? No, it is not a frog. A frog should be green. Look at this color, it is black with yellow spots. It is not a frog. And then Kipper is waving to mummy. Kipper said, come, come, mum, come. And then, mum has got, what? OK, OK, look, I need to scrape something off the bottom of my shoe. Something got stuck. Susan, what is in mummy’s hand? Mummy is using a twig to scrape something off the bottom of her shoe. OK? Scrape, scrape off.

OK, and then, mummy, mummy, come here. What is it? Said Chip. Look, Chip was taking a close look at it. Is it a lizard? Now everyone, is it a lizard? No, it is a salamander, right? Yes, actually, they belong to the same group. Yes. Where was Floppy going? Yes, good question. Where is Floppy going? Floppy is gone. I don’t know.

So mum looked at it. What is it? Said the children. Mummy was taking a close look. What is it? Let me think about it.

Ta-da! It’s a salamander. Said mum. Look, mummy is holding a piece of leaf. And mummy is taking this somewhere. Maybe the salamander needs some help. It’s lost, she said. So we need to help the salamander to find its home.

OK, let’s see where its home is. Ta-da! There it is. The salamander was safe. So actually where are they? Ah, there it says, animal rescue. Rescue means to save somebody. Now they are here to save the animal, to save the salamander. If you find some lost animal, and you don’t know what to do with it, or if the animal is hurt, you can take it to animal rescue. OK? And here it says save our wildlife. So some animals do need our help, OK?`,
      extensionCn: `Susan，这是什么？看起来好吓人！猴子，别害怕。这只是蝾螈。蝾螈，看，它多可爱。它看起来像蜥蜴，对吧？但它不是蜥蜴，它是两栖动物，既能在陆地上生活也能在水里生活。它是黑色的，身上有黄色斑点，有四条短腿和一条很长的尾巴。它是冷血动物。什么意思？就是需要太阳晒一晒才能暖起来。我们不是冷血动物，我们是温血动物。它躺在草地上，我还看到一些叶子。

汪汪，Floppy来了，Floppy在叫。你觉得它在说什么？它在说：这是什么？好奇怪。看，家人们走过来，有一座小桥，妈妈在跟人说话，我猜他们在公园里。

Floppy一直在叫，好像在说：快来看！这是什么？Biff说。Floppy，你为什么叫？大家都走向Floppy。

Biff看到了：哇，这个小东西是什么？她不知道。其他人也过来了。Kipper手里还抱着小熊。

这是什么？Wilf看了看也不知道，就问：这是什么？看妈妈，她在看自己的鞋底，可能踩到了什么，对吧？

这是什么？Wilma说。我不知道，是青蛙吗？但这是青蛙吗？不是，青蛙应该是绿色的。看它是黑色带黄点。不是青蛙。Kipper在招呼妈妈：妈妈，快来看。妈妈说：等一下，我要把鞋底的东西刮掉。Susan，妈妈手里是什么？妈妈用一根小树枝把鞋底的东西刮掉。刮一刮。

妈妈，妈妈，快来。是什么？Chip说。Chip凑近看。是蜥蜴吗？大家觉得是蜥蜴吗？不是，是蝾螈，对吧？是的，的确它们属于同一类。Floppy去哪了？好问题，Floppy不见了。

妈妈仔细看了看。孩子们问：是什么？妈妈想了想。

哒哒！是蝾螈。妈妈说。妈妈拿着一片叶子，准备带它去别的地方。它迷路了，我们得帮它找到家。

好，我们去找它的家。哒哒！到了，蝾螈安全了。这里写着“动物救助”。救助就是救援。现在他们在救这只动物。如果你发现迷路的动物，或动物受伤了，不知道怎么办，可以带到动物救助站。这里还写着“保护野生动物”。有些动物确实需要我们的帮助。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-14",
      level: "l2",
      episode: "L214",
      title: "The Lost Puppy",
      extensionEn: `Today we are gonna read this book, it is called The Lost Puppy. Lost, lost! What does lost mean? Lost means it is missing, it is gone. It is nowhere to be found. Oh, no! Wait a minute! Isn’t the puppy sleeping here? I think it is sleeping quite happily with a bone in front of it. This is a Border Collie. Look, it has got a white body with big black spots. OK, let’s see what is the story was like.Mrs. May had a puppy. So cute and tiny! Stroke, stroke. Mrs. May had a puppy. It was called Sniff. Sniff, look, I am sniffing. So I know why it is called Sniff. Because it likes to Sniff. OK. Oh look, there is Floppy. If this is a Border Collie, what kind of dog is Floppy? I think Floppy is called a Golden Retriever. We can call it a Golden. OK? And this little puppy is a poodle. A poodle is so cute and clever. I think they are in a park, right? And Biff is stroking this little puppy, so cute, so cute! What? What happened? Look, first Floppy is chasing the poodle. Hey, hey, hey, woof, woof. And the poodle goes don’t chase me. Then, look, Sniff ran off. Sniff got Floppy’s bone. How do I know it? Look, this bone belongs to Floppy. And then Sniff got the bone and ran off. What do you think they are saying? Come back, Sniff! So everyone, let’s say it together, come back, Sniff! That’s right! And then, oh, no, all the dog were running away.

OK, let’s see what happens next? And Sniff, Sniff, where are you? Er-oh, everyone is looking for Sniff, because Sniff is gone. Sniff, where are you? Mrs. May was upset. Upset means very angry, worried, anxious, you know, that kind of feeling. Of course, if my puppy went lost, I would be upset too. And look at him, he is not happy. He is upset too. Why? Look, he is the owner of the

poodle, because you know, just now Floppy was chasing his poodle and OK, so Sniff was lost. And everyone started to look for Sniff. OK?

And Sniff, come back! Biff was shouting. Biff and Chip looked. And Chip was looking in the bushes. But I don’t see Sniff anywhere. And then Mrs. May was talking to mum and dad. Probably she was telling them what had happened. They couldn’t find Sniff. Look at Floppy, Floppy was Sniffing. Sniff! Yes, so if Floppy could smell Sniff, probably, he could find it. You know, a dog has a really, really good nose, right?

Then Wilf and Wilma looked. Hey, Sniff, where are you? And then Wilf was holding a stick.

Hey, are you there? Hey, do you think Sniff could be in the pond? No, impossible! Right? I don’t think it is there. And they couldn’t find Sniff. Everyone was looking and looking. Where do you think the puppy is?

Mum and dad looked. Where is Sniff? They couldn’t find Sniff. Oh, look, Chip climbed up onto the ladder. And then he is looking inside. No, Sniff is not on the slide. We need to keep looking, ok, keep looking.

Everyone looked. Sniff, where are you? Look, Wilf is on the slide. Probably when you are at a higher place, you can see far and father, right? You could see farther. So, no, I still can’t find Sniff. Nobody could find Sniff. Terrible! But you must keep looking, OK?

So Floppy looked for his bone. Hey, isn’t that my bone? Sniff was by the tree. Oh, there it was. Sniff was sleeping in the grass next to a, I think that is a swing, but this swing is not hanging in the tree. Look, I see a little squirrel. The squirrel is peeking. OK, so there is Sniff. You don’t need to worry about Sniff anymore.

What a clever dog! Everyone said. Good job! Floppy! But actually, do you think Floppy was looking for Sniff? No, I know it. Look, Floppy wanted its bone back. Look, what a clever dog! Said everyone. And Floppy was thinking I got my bone back. Happy!`,
      extensionCn: `今天我们读《走丢的小狗》。走丢是什么意思？就是不见了、找不到了。等等，小狗不是在这儿睡觉吗？它正开心地睡着，前面还有根骨头。它是一只边境牧羊犬，白色身体配大黑斑。我们看看故事吧。

May老师养了一只小狗，又小又可爱，摸摸摸。小狗叫Sniff。Sniff，闻一闻，所以叫Sniff。看，Floppy来了。如果这是边境牧羊犬，那Floppy是什么品种？我觉得Floppy是金毛寻回犬。还有一只小狗是贵宾犬，聪明又可爱。他们在公园里，Biff在摸小贵宾，好可爱。

发生了什么？先是Floppy追贵宾：嘿嘿，汪汪！贵宾说：别追我。然后Sniff跑开了，叼走了Floppy的骨头。怎么知道的？那根骨头是Floppy的。Sniff叼着骨头跑了。大家在喊：Sniff，回来！大家一起说：回来，Sniff！对！然后狗狗们都跑走了。

接下来会怎样？Sniff，Sniff，你在哪？哦不，大家在找Sniff，因为Sniff不见了。May老师很难过。Upset就是生气、担心、焦虑那种心情。如果我的小狗走丢了，我也会难过。看，那个贵宾犬的主人也不开心，因为刚才Floppy追他的狗，结果Sniff丢了。大家开始找Sniff。

Biff喊：Sniff，回来！Biff和Chip到处找，Chip在灌木丛里找，没看到Sniff。May老师在跟爸爸妈妈说发生了什么。找不到Sniff。看Floppy在闻来闻去。对，狗的嗅觉很灵敏，如果Floppy闻到Sniff，也许能找到它。

Wilf和Wilma也在找：Sniff，你在哪？Wilf手里拿着树枝。你在那儿吗？你觉得Sniff会在池塘里吗？不可能吧。大家找啊找，还是找不到。小狗到底在哪？

爸爸妈妈也在找：Sniff在哪？还是找不到。看，Chip爬上梯子往里看，没有。继续找。

大家都在找。Wilf站在滑梯上，站高点可能看得更远，对吧？还是找不到。没有人找到Sniff。太糟糕了，但必须继续找。

最后Floppy在找它的骨头。咦，那不是我的骨头吗？Sniff在树旁。找到了！Sniff在草地上睡着了，旁边好像是秋千。还有一只小松鼠在探头。Sniff没事了。

大家说：好聪明的狗！干得好，Floppy！但你觉得Floppy是在找Sniff吗？不是的，Floppy只是在找自己的骨头。大家说聪明狗，Floppy心里想：我把骨头找回来了。开心！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-15",
      level: "l2",
      episode: "L215",
      title: "New Trees",
      extensionEn: `Come, come, everyone, let’s plant a tree. Today we are gonna read this book, it is called New Trees. New trees? What does that mean? Let’s read the poster. Here it says Help your park! Oh, our park needs our help. Give a tree week! What is a week? Let’s look at the date. October the seventh to October the thirteenth. What does that mean? Let’s count. October the seventh, the eighth, the ninth, the tenth, the eleventh, the twelfth, the thirteenth. Seven days. I know seven days make a week. So that means during this week, you can come to the park and give a tree. What does give a tree mean? That means you need to buy a sapling and plant it and to help to grow a tree, OK? So you are invited to buy a tree and plant it in the park. Do you want to do it? Yes, I have always wanted to plant a tree. I want to go. And I bet they want to go too. So let’s follow them, OK?

Look, wow, it is so crowded. Everyone is coming to give a tree. The children went to the park. Oh, I think daddy had prepared everything very well. Daddy was pushing a wheelbarrow. And what do you think is in the wheelbarrow? I see two shovels, and I see some boots. Everyone was walking there to a little shed. Let’s see why they are going there.

It was give a tree week. So everyone was coming here to plant a tree. Everyone wanted to give trees. Yes, anyway, it is a really good idea to plant more trees for us. Because you know trees make oxygen for us, OK? And here, daddy is paying the money. And because he needs to buy the saplings. What are saplings? Saplings are little young trees. And look, you see a little bag here, wrapping the root of the sapling. It makes sure that the sapling doesn’t die, OK? And this is the park keeper shed. So they are coming here to find the park keeper to buy their own sapling.

OK, so let’s see. Susan, what is dad doing? Look, dad is digging. Dig, dig, dig. You know, to plant a tree, first you need to dig a hole, OK? And look what dad is wearing? The boots. Why? Because look, when you are digging, you are very close to the soil, and it is full of dirt. And if you wear your normal shoes. They would be muddy and dirty. So you need to wear your special boots. OK? And look at daddy, daddy is sweating. It’s hard work, you know? Digging a hole. Here we have oak tree. I want you to look closely at the leaves of the oak tree. Do you see the sawtooth-like margins? So that must be the oak tree leaf. Yes, that is an oak tree leaf. Next time, when you go into the garden, you can take a look and see if you can find an oak tree in your garden, OK? He put it by the shed. Oh, look this is the shed. And daddy was putting that little sapling here.

And then, look at everyone. Chip gave a tree. There was Chip. And Chip was putting the little sapling in the hole. Look, it is a willow. Willow leaves are very long, OK? Long and narrow, not very wide, very narrow, long and narrow. I want to see a willow tree. Yes, next time, when you go in to the garden, you can find a willow tree. OK? What’s this? Here says Bone Meal. Will Floppy eat the bone meal? No, no, no, this is not the bone for the dog. Bone meal is a fertilizer. A fertilizer will give the little tree more nutrients, it is like the food that the tree can eat. OK? So he put it by

the stream. Look, that is the stream, a little river. OK? I think this is a really good spot, it is beautiful when you have willow trees by the stream.

And then here is Biff. Biff gave a tree. What kind of the tree? Let’s take a look. It is a beech tree. I think that looks quite beautiful, right? And she put it by the pond. Do you think this is a really good place? Yes, Susan, this is a really good place, it makes the garden really beautiful.

And now, look at Wilf. Wilf gave a tree. And what is Wilf doing? Wilf is watering the sapling with a watering can. OK, and let’s see what kind of tree. It says chestnut tree. Look at the leaves. I

think chestnut tree leaves look like palms, right? One, two, three, four, five, it has got five blades, just like your hands. Interesting! So he put it by the bridge. Do you think this is a really good place? Yes, it is beautiful, right? OK!

And then Wilma gave a tree. And it is a maple tree. You know what? In my garden, there are a lot of maple trees. Maple tree leaves look like stars. And I like them in autumn, because they turn red. Wow, that’s so beautiful! Susan, what’s this woman doing? This woman is staking the tree. This can give the tree a support so that it will not fall down. Or, it will also grow taller instead of growing too wide, OK? So she put it by the swing. That’s really a beautiful place. So next time, when you sit on the swing, you can take a look at your own tree. That’s a good idea. And there is a see-saw. Hey, what is Floppy doing? Floppy is digging. I know, Floppy wants to give a tree too, right? And I wonder what Floppy...

Oh, wait a minute, Floppy is not digging for the tree, Floppy is digging for the bone. Floppy gave a bone. Wait a minute, can a bone grow into a tree? No, of course not. Have you even heard of a bone tree? Susan, hahaha, a bone tree, hahaha. OK, there is no bone tree. He put it in a hole thinking that maybe next year, I could have a tree full of bones. Silly Floppy! No, it doesn’t work that way, OK?

And then but still, they made Floppy really happy. A funny tree, bone planted by Floppy, said Chip. A funny bone, said Dad.`,
      extensionCn: `来吧，大家一起种树。今天我们读《新树》。新树是什么意思？看海报：帮助你的公园！我们的公园需要帮助。“赠树周”。什么是周？看日期：10月7日到10月13日。数一数，7号到13号一共七天。七天就是一周。意思是这一周你可以来公园“赠树”。“赠树”就是买一棵小树苗并把它种下去，帮助它长成大树。你愿意去吗？我一直想种树。我想去。他们也想去。我们跟着他们吧。

哇，好多人！大家都来“赠树”。孩子们到了公园，爸爸准备得很充分，推着独轮车。车里有什么？我看见两把铲子和一些靴子。大家走向一个小棚子，我们看看他们去做什么。

这是赠树周，大家都来种树。这是个好主意，因为树能给我们制造氧气。爸爸在付钱，因为要买树苗。什么是树苗？就是小小的树。看，树苗根部包着袋子，能让树苗不容易死。这是公园管理员的小棚子，他们来找管理员买树苗。

看爸爸在挖坑。挖、挖、挖。种树首先要挖坑。爸爸穿着靴子，因为挖土会很脏，穿普通鞋会弄得很泥泞，所以要穿靴子。爸爸在流汗，挖坑很辛苦。这里有一棵橡树。仔细看橡树叶，边缘像锯齿，这是橡树叶。下次你去花园，可以找找橡树。爸爸把树苗放在棚子旁。

看，Chip也赠了一棵树，他把树苗放进坑里。这是一棵柳树，柳叶很长很窄。下次你去花园可以找柳树。这里写着“骨粉”。Floppy会吃骨粉吗？不会。骨粉是肥料，能给小树提供营养，就像树的食物。他把柳树种在小溪边。溪边有柳树会很美。

这是Biff，她赠了一棵树。是什么树？是一棵榉树。她把它种在池塘边，很合适，让公园更美。

看Wilf，他在给树苗浇水。是什么树？写着“栗子树”。栗子树叶像手掌，一、二、三、四、五，像你的手。很有意思。他把它种在桥边，很漂亮。

Wilma也赠了一棵树，是枫树。我的花园里有很多枫树。枫叶像星星，秋天会变红，很美。Susan，这位女士在做什么？她在给树做支撑，防止树倒，也能让树长高而不长歪。她把枫树种在秋千旁。以后坐秋千时就能看到自己的树，真好。旁边还有跷跷板。Floppy在干什么？Floppy在挖坑。它也想赠树吗？

哦等等，Floppy不是在挖树坑，而是在找骨头。Floppy“赠”了一根骨头。骨头能长成树吗？当然不能。你听过“骨头树”吗？哈哈，没有骨头树。Floppy把骨头埋进坑里，以为明年会长出一棵骨头树。傻Floppy！不会那样的。

不过大家还是很开心。Chip说：Floppy种了一棵“搞笑树”。爸爸说：一根搞笑的骨头。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-16",
      level: "l2",
      episode: "L216",
      title: "Up and Down",
      extensionEn: `Today we are gonna read this book, it is called Up and Down. Remember we’ve played this game a long time ago? Up, down, up, down, up, up, down. Up and down! Hey, are they going up? I see an escalator. Look! This is an escalator, escalator, escalator. What can an escalator do? This is really cool, you know? You can stand on it, you don’t need to walk, just put your hand on the handrail, and just stand, it will take you up. This is what an escalator can do. OK? Now where is mum and where is dad? Where are they? Let me take a look. I think they are in a department store. Do you know what is a department store? In a department store, you can see many many shops, OK? For example, I like ice cream shop. But, Susan, you can not eat too much ice cream, you will be fat. Yes, I know, but I still like ice cream shop. What shop do you like? I think I like green grocery, like the supermarket where I can buy many, many bananas. Yes, I know that. But I don’t think mum and dad are going to look for ice cream or bananas. Let’s see what they want to buy, OK? Now look, there is a shop guide, the shop guide. Here we see level one, level two, level three. What did they mean? The floors! Look, we have the first floor, the second floor, and the third floor. And they sell different things. Look, on the third floor, you can buy books, on the second floor, you can buy clothes, and on the first floor, you can buy hardware. What is hardware? I will tell you later, OK?

Now there is mum, and there is dad. They seemed to be talking about something. Blabalabla, what do you think they are talking about, monkey? I think mummy says I want to buy something. Yes, I think mummy wants to buy something. It seems that they are not going together, OK? Mum and dad went shopping. OK, they went shopping.

Look, daddy is thinking of a book. Oh, I know, dad wanted a book. Remember where books are sold? Ha, there, on the third floor. OK, so daddy needs to go up, why? Look at this one, this is number two. What does that mean? That means they are on the second floor. On the second floor, you can buy clothes. Now take a look, yes, look at this, we have men’s fashions, boy’s outfits, that means you can buy men’s clothes here, and boy’s clothes here, and something is on sale, it is cheaper. And then here we have hosiery. What is a hosiery department? That’s where you can buy socks and stockings. Hey, Susan, what are the people doing there? What people, you mean these? No, no, no, monkey, they are not people, they are mannequins. Susan, what are you doing? I am playing a mannequin like a model. You know? They are not real people. They are just standing there to show you what the clothes should look like on your body, OK? So, oh, mummy is saying bye-bye! Oh, I know, mommy doesn’t want to buy a book, mummy wants to buy something else. And let’s see what.

Ta-da! Mummy is thinking of a brush, brush. Probably mummy wants to paint something. Mummy wanted a paint brush. Paint brush, do you have a paint brush? Yes, I have a paint brush. I can use it to paint my door. Good idea! And then she went down. Why? Ta-da! Remember? Level one, the first floor, you can buy hardware. And a paint brush is a kind of hardware, OK? Hardware means all kinds of tools, like hammers, nails, all kinds of big and small tools, OK?

And let’s see, mummy went up. Look, what’s in her hand? A paint brush. Mummy got what she wanted. I think I see daddy. Dad went down. And daddy got a book. Wonderful! So they both got what they wanted.

And then wait a minute, why was mummy going up? Mum couldn’t see dad. Oh, mum didn’t see dad. So mum thought where is daddy? Maybe he is still looking for a book. Maybe I can join him. So mummy stood on the escalator. And she went up. But wait a minute, I think I see daddy here. They missed each other. They didn’t see each other. Oh, no, and daddy is looking at a tie. So mummy went up. She went up. Oh no!

Wait a minute! So they waited for each other for sometime. And they didn’t find each other. So mum went down. Dad went up. Hey, you! What? Wait a minute. This is so funny. They went on the opposite escalators. And wait a minute, hey, this time, dad went down. Mum went up. And mum got, what a crazy! Hey, hey, hey, could you stop there? Stop moving!

No, no, no, stop, she said, stop, don’t move. Mum came down and dad goes OK, I am gonna wait you here.

Up and down, said dad. Mum said, that was tiring. Hey, next time, we can not do this.     Monkey, do you know what they should do to be able to find each other? I think one should wait for the other. Either mummy waits for daddy or daddy waits for mummy. Yes, they can’t both keep moving. They are gonna miss each other again and again. That’s so funny.`,
      extensionCn: `今天我们读《上下》。还记得我们以前玩过的游戏吗？上、下、上、下。上上下下！他们在上去吗？我看到自动扶梯。看，这是自动扶梯。它能做什么？很酷，你站上去，不用走，扶着扶手站着，它就带你上去。

爸爸妈妈在哪里？我看看，他们在百货商店。什么是百货商店？里面有很多很多店。比如我喜欢冰淇淋店。但Susan，冰淇淋不能吃太多，会变胖。是的，但我还是喜欢。你喜欢什么店？我喜欢水果蔬菜店，能买很多香蕉。好，但妈妈爸爸不是来买冰淇淋或香蕉的。我们看看他们想买什么。

这里有商店指南：一楼、二楼、三楼。那是什么意思？楼层！三楼卖书，二楼卖衣服，一楼卖五金。五金是什么？等会告诉你。

妈妈和爸爸在说话，看起来要分开买东西。爸爸想买书。书在三楼，所以爸爸要上去。看这个数字2，说明现在在二楼，二楼卖衣服。这里有男装、男孩衣服，有的在打折。还有“袜品部”，就是卖袜子和长筒袜的地方。Susan，那些人在干嘛？那些不是人，是模特。它们只是用来展示衣服的样子。妈妈说再见，妈妈不买书，她要买别的。

哒哒！妈妈想买刷子，画刷。你有画刷吗？我有，可以刷门。好主意。她往下走，因为画刷属于五金。一楼卖五金，五金就是各种工具，比如锤子、钉子、大大小小的工具。

看看，妈妈拿着什么？画刷。妈妈买到了。爸爸呢？爸爸下楼了，手里有书。两个人都买到了想要的东西。

等等，妈妈为什么又往上？她没看到爸爸，以为爸爸还在找书，想去找他。于是她上了扶梯。但我好像看到爸爸在这边。他们错过了。爸爸在看领带，妈妈继续往上。哦不！

他们等了一会儿还是没找到。于是妈妈下，爸爸上。嘿！这太好笑了。他们走了相反方向的扶梯。接着爸爸下、妈妈上。妈妈说：太疯狂了！嘿，能不能停一下？别动！

不不不，停下，她说，别动。妈妈下来了，爸爸说好，我在这里等你。

上上下下，爸爸说。妈妈说，这太累了。下次不要这样了。猴子，你知道他们该怎么做才能找到对方吗？一个人等另一个人，不要两个人都走来走去，否则会一直错过。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-17",
      level: "l2",
      episode: "L217",
      title: "The Little Dragon",
      extensionEn: `Grrr! Were you scared? Yes, you were scared, right? Today, we are gonna read this book, it is called The Little Dragon. Where is the dragon? There, I see a green dragon with a long tail and there are so many sawteeth. Wait a minute, isn’t that Kipper? That is Kipper. Kipper is dressed as a dragon. Roar! And what is this costume made of? I think it is quite funny. It is made of green cardboard. And on top, there is an egg carton. And mummy is helping Kipper. Mummy has got some double-side tape and mummy is taping this mouth on. I think Kipper looks really cool and Kipper has got something like a flag. Is it flag? I don’t know. Let’s find out.

The children put on a play. Welcome to our play, everyone! Daddy says, I am a tree. Look! A tree looks simple, but actually, later you will find out it’s not simple, it’s not easy at all. It’s a very difficult one, you know? Because you have to stand like that for a long time, OK? And this play is called The Little Dragon. Scene one! Here is Wilf. Hi! Scene One! Everyone! Good!

I am the King, said Chip. Look, Chip is wearing a yellow crown and a red cape. You look really cool, right? I am the King, said Chip. And then, fight the dragon. Who is this? This is Wilma. Wilma is wearing a red helmet. She is holding a wooden sword. And what is this? Is it a tabard? Wow, monkey, you are cool, you know this word. This is a tabard. Yes, it is a tabard. A tabard looks like this. And what’s on the tabard? Ta-da! A red cross! Interesting! And then let’s see what happens next, OK?

Ta-da! I am the knight, said Wilma. I am very strong. I can fight. I will fight the dragon. Look at daddy. Why is daddy not so happy? Dad got, I am tired. My arms are sore. It is not easy being a tree, you know?

I am the dragon, said Kipper. But I think Kipper is a very cute dragon, what do you think? Oh, no, I know, this one is not a flag, this is the fire that a dragon can spit. But still, I think this dragon is very cute. Hey, Wilf! I think Wilf is holding this board upside-down. It should been Scene Two. But look, Wilf is holding it this way. But I am a little dragon. A little, little dragon. So you know, a big dragon is very fierce. It can roar! Spit fire! But a little dragon should be very cute, right?

I am the princess, said Biff. Look at Biff, Biff is very pretty. She is wearing a very beautiful dress with a lot of flowers. And she is holding a little flower in her hand. What’s she wearing on

her head? A wreath of white flowers. That’s so beautiful. But look at daddy, I can’t hold anymore. My arms are sore. And then, I like dragons, especially little dragons. Look at Kipper, Kipper is hiding there.

The princess played with the dragon. Hey, let’s play ball game. Catch, dragon! OK! You catch! Wow, we are good friends, we are playing happily together. What? A princess is playing with a dragon? This is different from all other stories. Because, in other stories, a dragon is fierce, evil, and a dragon will probably take the princess away. But now, they are playing happily. A very different dragon, right? So the princess played with the dragon. And look at daddy. I am so tired. And Biff put her flowers and the dress on daddy’s arm. Tired! OK! So they played under the tree so happily. And the tree is not so happy, right? And then let’s find out what happens next.

I am the knight, said Wilma. The knight came. Oh, my! What is the knight doing here? A knight is fighting the dragon. I am, I am frightened, said the dragon. Frightened means you are scared. Susan, what will make you frightened? Spiders! Spiders will make me frightened, what about you, monkey? Maybe, a dragon! Yes, a dragon is very, very frightening. But wait a minute, the dragon is frightened itself. Hey, what has Wilf brought? A pond? Why? Why do we need a pond? Let’s find out.

I am cross, said the princess. Wait a minute, cross, what does cross mean? Cross means you are angry, OK? And princess is angry. And then the princess pushed, she pushed the knight in the pond. Hey! And then here comes Wilf. And Wilf is throwing some confetti. Look at the confetti, it is pretty. When do we use confetti? For weddings, wedding ceremonies. But now, OK! The princess is so strong. Yes, Biff is a very, very strong princess. She pushed the knight in the pond. No, you can’t fight my dragon. We are friends. You can’t do that. Er-oh!

OK! This is the end of the story. Everyone is standing on the stage and they are saying thank you, thank you for watching. Thank you! Now look at daddy, finally, it is over. And everyone is very happy. What a good play! Said everyone. And everyone is clapping. We enjoyed your play.`,
      extensionCn: `嗷——你被吓到了吗？对吧？今天我们读《小龙》。龙在哪？看，有一条绿色的龙，长尾巴、锯齿状的背。等等，那不是Kipper吗？就是Kipper！他扮成了龙。吼！这套衣服是用什么做的？很有趣，是绿色纸板做的，上面还有一个蛋托。妈妈在帮Kipper，拿着双面胶把嘴巴贴上去。Kipper看起来很酷，还拿着一块像旗子的东西。是旗子吗？我们看看。

孩子们演了一出戏。欢迎大家来看我们的戏！爸爸说：我是树。看，树看起来很简单，但其实很难，因为要站很久。这个戏叫《小龙》。第一幕！Wilf登场，大家好！

Chip说：我是国王。看，Chip戴着黄色王冠、红色披风，很帅。国王下令：去打龙！这是谁？这是Wilma。她戴着红色头盔，拿着木剑。她穿的是什么？是tabard，一种罩袍。看，上面有红色十字。我们继续。

Wilma说：我是骑士，我很强，我要去打龙。爸爸怎么不开心？爸爸说：我好累，胳膊酸，当树不容易。

Kipper说：我是龙。我觉得他是只很可爱的龙。那块“旗子”其实是龙吐的火。Wilf举着牌子，但牌子拿反了，本来是第二幕。Kipper说：我是小小龙。大龙很凶，会喷火，但小龙应该很可爱，对吧？

Biff说：我是公主。她穿着漂亮的花裙子，手里拿着花，头上是白色花环，很美。爸爸说：我撑不住了，胳膊酸。公主说：我喜欢龙，尤其是小龙。看，Kipper躲在树下。

公主和龙一起玩。来，玩球！接住，龙！好！我们是好朋友。公主居然和龙玩？这和其他故事不一样。别的故事里龙很凶、会抓走公主，但这里他们玩得很开心。爸爸很累，Biff把花和裙摆放在爸爸胳膊上。大家在树下玩得很开心，树却不太开心。接下来会怎样呢？

Wilma说：我是骑士。骑士来了。哎呀，骑士要打龙。龙说：我害怕。害怕就是frightened。Susan，什么会让你害怕？蜘蛛！那你呢，猴子？可能是龙。龙也很可怕。但等等，龙自己也害怕。Wilf带来一个“池塘”？为什么要池塘？我们看看。

公主说：我生气了。Cross就是生气。公主把骑士推进池塘。Wilf撒彩纸，彩纸一般在婚礼用。公主很强：你不能打我的龙，我们是朋友。哎哟！

故事结束了。大家站在舞台上说谢谢观看。爸爸终于解放了。大家都很开心：好棒的戏！大家鼓掌。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-18",
      level: "l2",
      episode: "L218",
      title: "The Band",
      extensionEn: `Susan, what are you doing? Shh! I am conducting the band, OK? Susan, stop, you look funny. What? I look funny? OK, I am just trying to be the conductor here. Look, the conductor is conducting the band. What’s the band? Many people play music together, that is a band. OK? What musical instruments can you see? I see a trumpet. I see a tuba. And I see a trombone. And I see a clarinet. Very interesting. And which one do you want to play? I want to play the biggest one. OK, but I don’t want to be your neighbor if you play that, OK?

Now look, here is daddy. Daddy is sitting on the stool. And dad played his trumpet. Dad is practicing very carefully. Good job, dad! But look at the musical notes, they look a little messy. What does that mean? Maybe the music that daddy is playing is not a music. And look at everyone’s face. Dad, could you stop that? So noisy! And look at Floppy, what are you doing, dad? OK, so, poor dad! He played in the house. Of course, you know, when you play the music instrument, you need to practice everyday. So you play in your house, like the piano, the violin,OK? But Floppy didn’t like it, so Floppy barked at dad. Stop it, play it somewhere else. And mummy said, Floppy, stop barking. Noisy dog!

And then poor daddy! Daddy played in the garage. Er-oh! Floppy barked at dad. So Floppy couldn’t get into the garage, but still Floppy barked outside. Woof! Woof! And then Kipper and mummy were looking at Floppy, noisy dog, stop barking!

And then poor daddy had to change another place. So dad played in the shed. Wait a minute, look at the plants. This is the cactus, and here is another plant. They look fine, you know, up right, standing there. But look at these plants. It’s so funny. So dad is practicing there. And then Floppy barked at dad. Woof! Woof! Floppy, could you stop that? And Floppy’s barking annoyed other people too. Look, here is a neighbor. The neighbor got, er, noisy dog, stop barking, stop barking. And then look at the little white dog. Woof! Woof! It was barking together with Floppy! So noisy! Can you imagine that? The trumpet, loud, and a dog is barking, two dogs are barking? Oh, I have to go somewhere else.

And then dad played in a band. Dad is trying so hard. Look at his face! Turn so red. And everyone is looking at dad. Hey, dad, did you practice at home? You are not playing very well. And this girl is looking at daddy, em, OK. She is playing the drum, and he is playing the clarinet, and she is playing the trombone, and he is playing the tuba. And everyone is looking at dad. Did yo practice or not?

And then, the band played in the park. I hope that everything goes well, because when you are giving a show, you want it to be a success, right? OK! Everyone is playing the music very happily. Wait a minute. Floppy came. Floppy went to the park. Floppy found dad playing the trumpet. Oh, no!

The band played, but Floppy barked! Woof! Woof! Oh, no! That’s so noisy. And look, everybody is looking at them. And dad, oh, no, Floppy, stop it.

Floppy barked and barked, and more dogs joined. They barked and barked. The band couldn’t play. Everyone had to listen to dogs’ barking. Bad luck! Look at the conductor, she is so cross.

And then, eh-oh! What a bad dog! Said dad. Dad had to take Floppy away! Bye, sorry, everyone. But look at them, this boy seems quite happy, hey, bye, finally you are gone, we can play our music now.                                             OK, so I have a question for you, monkey, why do you think Floppy kept barking? You know, dogs, dogs are just being dogs. Dogs like to bark. Or maybe I think Floppy must have thought like this, so noisy, stop, stop! Poor daddy! Now what do you think daddy should have done? They should have kept Floppy at home. Yes, they should not have taken Floppy there.`,
      extensionCn: `Susan，你在干嘛？嘘！我在指挥乐队。Susan，别闹，你看起来好搞笑。什么？我只是当指挥。看，指挥在带乐队。乐队就是很多人一起演奏音乐。你看到了哪些乐器？有小号、有大号、有长号、有单簧管。你想演奏哪个？我想演最大的。好，但如果你演那个，我可不想当你的邻居。

看爸爸坐在凳子上，吹小号。他很认真在练习。干得好，爸爸！但乐谱看起来有点乱，说明爸爸吹出来的并不太像音乐。大家的表情像在说：爸爸，别吹了，太吵了。Floppy也在叫：爸爸你在干嘛？

爸爸在家练习，乐器需要每天练习，就像钢琴、小提琴一样。但Floppy不喜欢，朝爸爸叫。妈妈说：Floppy别叫了，吵闹狗！

爸爸去了车库练。Floppy进不去，但还是在外面叫。汪汪！Kipper和妈妈看着Floppy：吵闹狗，别叫。

爸爸又换地方，去了棚子里练。看，棚子里有仙人掌和植物，本来都好好的。结果吹着吹着，Floppy又叫。汪汪！Floppy，别叫了！邻居也被吵到了：吵闹狗，别叫了。小白狗也一起叫。想想看，小号很吵，两条狗一起叫，太吵了！爸爸只好再换地方。

爸爸加入了乐队。他很努力，脸都憋红了。大家看着他：你在家练了吗？吹得不太好。这个女孩打鼓，那个吹单簧管，她吹长号，他吹大号。大家都在看爸爸：你练没练？

乐队在公园演出。演出要成功才好。大家快乐地演奏。等等，Floppy来了！它找到爸爸在吹小号。哦不！

乐队演奏，Floppy却一直叫。汪汪！大家都看过来。爸爸：Floppy，别叫了。

Floppy越叫越多狗跟着叫，乐队没法演奏，大家只听到狗叫。倒霉！指挥气坏了。

哎呀，坏狗！爸爸说。他只好把Floppy带走。对不起大家。那个男孩看起来很开心：终于走了，我们可以演奏了。

猴子，你觉得Floppy为什么一直叫？狗就是爱叫，或者Floppy觉得：太吵了，别吹了。可怜的爸爸。那爸爸应该怎么做？应该把Floppy留在家里，不该带去。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-19",
      level: "l2",
      episode: "L219",
      title: "The Toy’s Party",
      extensionEn: `Today we are gonna read this book, it is called The Toy’s Party. Party! I love parties. Monkey, do you love parties? Yes, I love parties so much. Yes, now look, there is a party, shall we go? Wait a minute! I see Floppy. I see a bear and I see a dog. And there is a soldier, and a cat, and a toy rabbit. Wait a minute. They are all toys. This is the toy’s party. Do you want to go to the toy’s party? Let’s see what they are doing, OK?

Susan, what’s wrong with you? I am mimicking Kipper, like... What’s wrong with Kipper? Kipper wanted a party. Kipper is feeling bored. So bored, so lonely. I am bored and lonely. I have nothing fun to do! I want a party, OK? So Kipper wanted a party. Look, Kipper has prepared food.

Look, there are some sweets, there are some empty cups and then two glasses and some spoons. Now if you have a party, what should it have, monkey? Bananas, lots and lots of bananas. Monkey, come on! If it is a party, we need more things than just bananas. We need drinks, maybe orange juice, maybe milk. And we need ice cream and cookies, and a lot of more things, cupcakes, and cakes! Susan, Susan, wake up, wake up,let’s read the book. Yes, yes, I am sorry, OK, now Kipper wanted a party.

But why is he so sad? Because he can not have a party. Look, Chip and Biff are playing football. And mum and dad are washing their car. Nobody wanted to come, so Kipper was here alone. And even Floppy was sleeping. Poor Kipper! Kipper wanted a party. And no one wanted to come. And monkey, what would you do? I would eat all the bananas. Monkey, there are no bananas, OK? Let’s see what Kipper did.

Kipper got an idea. He got his toys and look, I got so many toys. Careful, Kipper! OK? Do not

trip and fall down, alright? Look, I have got so many toys. A soldier, a dog, a bear, a cat, another teddy bear, and a rabbit. Look, Kipper is wearing a crown. This is gonna be fun. And Floppy is already waiting there.

OK! Ta-da! What do you think Kipper wants to do? Yes, Kipper wants to make a cake. I see

popcorn, I see a cherry, and I see a chocolate cake and cream. Susan, Susan, come on, tell the story, don’t just think about food. Alright, fine! Now Kipper has got a mixing bowl. It’s very big. You know, when you make a cake, you need to get a very big mixing bowl, OK? And then all the toys are standing there. Look, they look happy. They know Kipper is gonna make a very good and yummy, delicious cake. He wanted a cake. Everyone is happy, they want the cake too, OK?

And then, oh, no! What is Kipper doing? He put in cornflakes. Cornflakes, crunch, crunch, crunch, cornflakes are made of corn. If you haven’t tried this, go and ask your mum to buy you a box, OK? They are crunchy and delicious, and very good for you. He put in tomato sauce. What? Cornflakes with tomato sauce? Ew! That sounds so yukky! Ew! It’s so yukky! Ew! Cornflakes are made of corn, and they taste really good in milk. That’s really good. And if you haven’t tasted it before, ask your mum to buy you a box, OK? And tomato sauce, you know that, when you eat chips, you can squeeze some tomato sauce on it, and then you go... But if you put these two together... so Kipper is adding ingredients, all of these, go in my cake. And then, look at the bowl, the bowl is overflowing. Even the caps were falling off the table. And look at the toys, the toys probably are thinking, Kipper, what are you doing? What are you doing? You are making such a mess. But look at Floppy! Floppy sticks out its tongue, yum, yum, Floppy wants to eat it.

Oh, no! He put in milk, tomato sauce, and everything. And he put in jam. Look, what do we have? Blueberry jam. I love blueberry jam. But can you imagine all of these ingredients together? Milk and cornflakes, jam, ew! Disgusting! Look at the toys, they got, er, Kipper! Look at the mess you have made!

What? Even more things? He put in sugar. Lots and lots of sugar. Er! I don’t want to try it. You know, you shouldn’t eat too much sugar. He put in baked beans, baked beans, eh. Susan, I want to puke. Yes, this is so disgusting. Actually, I think Kipper is wasting food. That’s not really good!

Mum came, Kipper! Look at mummy, what are you doing? Mum was cross, angry. Look at the mess, and you are wasting food. Stop it, Kipper! Look, Floppy is going away. I don’t want get in trouble. I wasn’t in it, OK? I don’t know anything about it. Floppy is leaving. And Kipper goes, sorry, mum, sorry, I am just having a tea party. And I invited you.

And then, now look at Kipper. Kipper is feeling really sorry. Probably Kipper is washing his feet, OK, in the basin. This is a basin. And you put your feet in hot or warm water. That feels good. But Kipper is not feeling happy. I am so sorry, mum, I shouldn’t have made a mess. I’m so sorry. I didn’t mean it. So Kipper was sorry. And look at all the toys. Kipper has to put all the toys in the washing machine. And the washing machine has them washed. And what is mummy doing here? Ha, look, remember? Kipper got jam all over his shirt. And mum has to wash his shirt and pants. Kipper, think about this, OK? Don’t ever do it again. Kipper, you made such a mess, you should feel sorry.`,
      extensionCn: `今天我们读《玩具派对》。派对！我喜欢派对。猴子你喜欢派对吗？喜欢！看，有一个派对，我们去吗？等等，我看到Floppy，还有小熊、小狗、士兵、猫、玩具兔子……都是玩具！这是玩具的派对。我们看看他们在做什么。

Susan，你怎么了？我在学Kipper。Kipper怎么了？他想开派对，觉得很无聊、很孤单：我好无聊，没有好玩的，我想要派对。Kipper准备了食物。

这里有糖果、空杯子、两只杯子和勺子。办派对应该有什么？很多香蕉！猴子，别闹，派对需要饮料，橙汁或牛奶，还要冰淇淋、饼干、纸杯蛋糕、蛋糕……Susan，醒醒，继续讲故事。好吧。

但Kipper为什么这么难过？因为他办不了派对。Chip和Biff在踢足球，爸爸妈妈在洗车，没有人来。连Floppy都在睡觉。可怜的Kipper。你会怎么办？我会把香蕉全吃掉。猴子，这里没香蕉。看看Kipper怎么做。

Kipper有主意了。他拿来了玩具：士兵、小狗、小熊、猫、另一只泰迪、兔子。Kipper还戴了王冠：这会很有趣。Floppy已经等着了。

哒哒！Kipper想做蛋糕。我看到爆米花、樱桃、巧克力蛋糕和奶油。Susan别只想着吃。好吧。Kipper拿了一个大搅拌盆。做蛋糕要用大盆。玩具们站好，等着好吃的蛋糕。

然后，哦不！他倒了玉米片。玉米片很脆，是玉米做的。还倒了番茄酱。什么？玉米片配番茄酱？好恶心！玉米片配牛奶才好吃。Kipper把各种东西往里倒，盆都要满出来了，盖子还掉了。玩具们想：Kipper在干嘛？但Floppy伸着舌头：我想吃！

他又倒了牛奶、番茄酱，还倒了果酱。蓝莓果酱很好吃，但这些东西混一起……恶心！玩具们：Kipper！你弄得一团糟！

又加更多？他加了很多糖。呃，不想尝。糖不能吃太多。他还加了烤豆子。Susan，我想吐。太恶心了。我觉得Kipper在浪费食物，这不好。

妈妈来了：Kipper！你在干什么？妈妈生气了。看看这一团糟，还浪费食物。停下！Floppy悄悄溜走：我不想惹麻烦。Kipper说：对不起妈妈，我只是办了个茶话会，还邀请你。

现在Kipper很内疚。他在盆里洗脚。盆里泡着温水，洗脚很舒服，但Kipper并不开心：对不起妈妈，我不该弄这么乱。玩具们都要洗干净，放进洗衣机。妈妈也得洗Kipper的衣服和裤子。Kipper，好好想想，下次别这样了。你弄得太乱了，应该道歉。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-20",
      level: "l2",
      episode: "L220",
      title: "A New Dog",
      extensionEn: `Woof, woof! Susan, what are you doing? I am mimicking a dog. Why are you mimicking a dog? Well, because it’s fun. Look! This is the book we are gonna read today. It is called A New Dog. They are gonna get a new dog? Well, this story is about how they got Floppy, OK? Now look, woof, woof, woof! Susan, what’s wrong with you again? Well, I am showing you what it was like there, OK? There were so many dogs, big and small, yellow and black and white, you know, all kinds of dogs. And they were all barking. And the family were going there to pick one dog as their pet, OK? Now look at these dogs, which one do you like best? I like this very little Chiwawa, so cute! I like the biggest one that is howling. You mean this one? The gray one that is howling? A-woo! Maybe this dog thinks he is a wolf.

OK, now look, here is Kipper, and Kipper is reading a book. It is called My Book of Dogs. So Kipper is learning about dogs. Why? Because Kipper wanted a dog.

OK, everyone wanted a dog. But look at this, everyone wanted a different dog. Everyone wanted a dog, but a different one. Look, Kipper is thinking of a very small, black dog with curly fur. Curly, like this, look, this is straight, and if I do this, it’s gonna be curly, OK? Look at this, do you like this one? I quite like it. It is very small, very cute. But mummy wants a big dog. Look at this dog, it is as tall as Kipper. But Chip wants a dog that can run and play with him. And Biff wants a dog that can do tricks. Jump through the ring! And dad wants a big guard dog. Woof, woof! If a bad thief or a bad guy comes, the guard dog will bite him. I think that is a little too fierce, right?

So everyone went to the dogs’ house, OK? So they went to the dogs’ home. Oh, this one is called a dogs’ home. And who is this guy? I think his name is called Horris. And he is wearing a vet’s gown, because he is the vet there. He is there to make sure that all the dogs are healthy. And the kennel, look at the kennel, this is a big kennel and it is a big cage for dogs, OK? So the kennel is clean and all the dogs are happy and healthy. And the family are here to pick one dog as their pet.

Look at all these dogs, look, some have very long fur, like this one, it has very long fur, and some one, this poodle is funny. It’s got no fur on its body, OK? And I see some black dogs, a big one and a small one, and I see some dogs with spots. Look at this one, and this one has bigger spots. And this gray dog is very tall and it is howling. A-woo! What’s that small dog called? That small dog is called a Chiwawa. Look, the Chiwawa is standing on a very old dog. Funny, there are so many dogs. I don’t know which one to choose.They looked at the dogs. Which one do you think they will choose?

What about this one? Kipper wanted this dog. Woof, look at this dog. It is even bigger than Kipper. And it was too big, dad thought. Maybe this dog will not learn good behavior. It will do bad things. For example, it will sit on daddy’s chair. Er, my chair! Daddy doesn’t want it.

And then, Biff wanted this dog. Look at this, it is a very small Chiwawa with a pink bow tie. But mummy is thinking, no, it was too little. It is so little, I might trip. I might not see and trip over it, that’s not good.

Oh, I like this one, mummy said. Mum wanted this dog. What is mummy doing? Mum was scratching the dog’s chin and I am coming... Susan, Susan, don’t scratch me, it is so itchy. It’s so funny! So cute! Mum wanted this dog. But Chip didn’t think it was a good idea. Look, it would be too strong to leash. It was too strong. We can not walk this strong dog. No!

Wow, look at this one. This yellow dog is not too big, not too small. And it looks so fun! Everyone liked this dog. I want this! Look, it has got floppy ears. Maybe we could name him Floppy.

Oh, yes! Look, hooray! Hooray! They got the dog everyone liked. Yes, they took the dog home. Happy Floppy, happy everyone, and they will make a very happy family.`,
      extensionCn: `汪汪！Susan，你在干嘛？我在学狗叫。为什么学狗叫？因为好玩。看，我们今天读《新狗》。他们要养新狗了吗？这个故事讲他们怎么得到Floppy。听，汪汪汪！Susan，你又怎么了？我在模拟当时的场景：有很多狗，大的、小的、黄的、黑的、白的，各种各样，都在叫。家人去那里挑一只当宠物。你最喜欢哪只？我喜欢最小的吉娃娃，好可爱！我喜欢最大的那只在嚎叫的。你说这只灰色的？啊呜！它可能以为自己是狼。

看，Kipper在看一本书，叫《我的狗狗百科》。他在学狗的知识，因为他想要一只狗。

大家都想要狗，但想要的不一样。Kipper想要一只很小的黑色卷毛狗。卷毛像这样，直的是直的，卷的就是卷的。妈妈想要一只大狗，比Kipper还高。Chip想要能跑能玩的狗。Biff想要会表演的狗，能跳圈。爸爸想要看门的大狗，汪汪！坏人来了可以咬他。我觉得太凶了。

于是他们去了狗狗之家。这里是狗狗之家。这个人叫Horris，他穿着兽医工作服，负责确保狗都健康。看犬舍，是个大狗笼。犬舍很干净，狗都很健康。家人来这里选一只狗当宠物。

看这么多狗，有的毛很长；那只贵宾很搞笑，身上几乎没毛。我看到黑色的大狗和小狗，还有带斑点的狗。那只灰色狗很高，在嚎叫。那只小狗叫吉娃娃，站在一只老狗身上。好多狗，不知道选哪只。你觉得他们会选哪只？

这一只？Kipper想要这只。汪！这只狗比Kipper还大。爸爸觉得太大了，怕它学坏，比如坐在爸爸的椅子上。爸爸不想要。

Biff想要这只很小的吉娃娃，还戴粉色领结。但妈妈觉得太小了，容易踩到，危险。

妈妈喜欢这一只。妈妈在挠狗狗下巴，好痒呀。妈妈想要它。但Chip觉得不行，狗太壮，牵不动。

哇，这只黄色的狗不大不小，看起来很有趣！大家都喜欢它。我要这只！它耳朵软软的，也许可以叫它Floppy。

耶！大家选到了都喜欢的狗。他们把狗带回家。开心的Floppy，开心的大家，他们会成为快乐的一家人。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-21",
      level: "l2",
      episode: "L221",
      title: "New Trainers",
      extensionEn: `Go, go, go, go, go! Susan, why are you shouting? I am cheering for them. Look, they are having a football match. Is this the new book we are gonna read today? Yes, clever monkey! We are gonna read new trainers today. Susan, what are trainers? Are they choo-choo train? Choo-choo! No, trainers are the shoes that you wear for sports, OK? You can not wear leather shoes to play football, OK?

Now, wait a minute, what’s wrong with Chip’s shoes? Er-oh! Look, this is the sole, the sole split off the shoe. It’s like the shoe was laughing like, hahaha. Isn’t that funny? Now, when this happens, this means the shoes are so old, it’s too old that you can not wear it anymore, OK? So Chip wanted new trainers. Of course, you can not wear these old shoes to play football, OK?

And then there they were, look, they were trying on new trainers. But look at the shop assistant. He was sweating terribly. Yes, He was sweating. Maybe because he was too hot or maybe look at all the shoes that Chip had tried on. Gee! You have tried on too many shoes. OK?

Just look at them, and then choose one, or two, or maybe three. These are too many, OK? And then, but anyway, he liked this pair. It is a pair of red trainers. They looked pretty cool! Look at daddy, daddy liked this pair of shoes. And theses leather shoes were on sale. If something is on sale, that means it is cheaper. Cheaper than before, you will spend less money. That’s really good! So you can buy one pair, maybe, daddy!

And finally, there they were. Look at Chip, he looked really proud. Yes, he looked really proud and happy. Look at my new trainers. I am the coolest boy in town. And Chip wore the new trainers, he was happy. But look at the shop assistant, finally, they are gone, I have done the work for the whole week. And then mum is saying, come on, come on, follow us, be quick, be quick. And look at daddy. Daddy was looking into the bag. What do you think daddy, oh, and look at daddy’s shoes. Look, dad was wearing this pair of shoes but, ta-da, dad is wearing the new shoes

too. So I know what’s in the bag. Monkey, do you know it? The old shoes! Yes, dad got a new pair of leather shoes too. And then Chip went to play. Hey, everybody, look at me. I’ve got new trainers. Let’s play!

OK! And they started to play football. Bang, bang, bang, they were so happy. And the trainers got muddy. Oh, no! They are your new shoes, Chip, be careful, OK?

And then they were running across this little creek. The trainers got wet. How? Look at Chip! Chip misstepped and stepped in the water, splish, splash! What would happen to the new trainers? They would get wet.

And then, Chip went home with muddy shoes and pants. And daddy saw him, dad was cross. Hey, look at your new shoes, go and clean them. And then, er, I am so sorry. And then Floppy got we are sorry. And then Chip was saying we are so sorry. And look at the neighbor. The neighbour is peeking again. And the dog is barking again. The dog is always barking. Funny dog! Yes!

What is Chip doing here? Dad said, clean your shoes. So Chip washed the trainers. And he was holding the brush. You know cleaning shoes is not easy. It is very tiring. OK? And dad says, come on, wash your trainers, next time you need to take good care of them, don’t get the new trainers so dirty.

And, wait, stop, sir! Er-oh! Dad stepped into wet concrete. Oh, no! Dad, you are in big trouble. Do you know why, what’s wrong? Because you can not even wash you shoes now. The wet concrete will be stuck onto your shoe forever. Poor daddy! Daddy will be in great trouble. Yes, do you think mum would get really, really cross? Yes, mum will yell at dad! Sorry, dad!`,
      extensionCn: `冲呀冲呀！Susan，你为什么在喊？我在给他们加油。看，他们在踢足球。今天读这本吗？对，聪明猴子，今天读《新运动鞋》。Trainers是什么意思？是运动鞋，不是火车。踢球不能穿皮鞋。

等等，Chip的鞋怎么了？哎呀，鞋底裂开了，像在笑。说明鞋太旧了，不能穿了。Chip想要新运动鞋。旧鞋不能踢球。

他们去试新鞋。看店员汗都下来了，可能太热，也可能因为Chip试了太多双。天哪，试太多了。选一双就好。

最后他喜欢一双红色运动鞋，看起来很酷。爸爸也喜欢一双皮鞋，还在打折。打折就是更便宜，可以买一双。

终于买好了。Chip很骄傲：看我的新鞋，我是全镇最酷的男孩。店员终于松了口气：总算结束了。妈妈催他们快点走。爸爸在看袋子，你看爸爸脚上也穿了新鞋。袋子里是什么？旧鞋！爸爸也买了一双新皮鞋。

Chip去踢球：看我！我有新鞋。大家开始踢球，蹦蹦跳跳，很开心。但鞋子弄脏了。哦不，这是新鞋，Chip，小心。

他们跑过一条小溪，鞋子弄湿了。Chip一脚踩进水里，哗啦！新鞋变湿了。

Chip带着脏鞋和脏裤子回家，爸爸很生气：看看你的新鞋，去洗！Chip说对不起。Floppy也在一旁。邻居又在偷看，小狗又在叫，真是搞笑。

Chip在洗鞋，拿着刷子。洗鞋很累。爸爸说：下次要好好保护新鞋，别弄这么脏。

等等，停下！爸爸踩进了湿水泥。哦不！爸爸麻烦大了。为什么？因为水泥会永远粘在鞋底上，鞋子洗不掉了。可怜的爸爸！妈妈一定会很生气吧。对，妈妈会骂爸爸。抱歉啦，爸爸！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-22",
      level: "l2",
      episode: "L222",
      title: "What a Bad Dog!",
      extensionEn: `Today we are gonna read this book, What a Bad Dog! Bad dog! Hey, monkey, what are you doing? I am eating a banana. Is that my banana? Is this your banana? Monkey, we will talk about that later, let’s finish the book first. What a bad dog! Now look at Floppy, woof, woof, woof, Floppy is running with a shirt in its mouth. Why? Floppy, you are being naughty again.

Floppy, no, no, no, don’t come here, shouted daddy. What is daddy doing? Oh, daddy is using a tool to flatten, flatten the concrete. Daddy is working hard until, woof, woof, woof, oh, Floppy is running over the wet concrete. Do you know what will happen to it? Now, the concrete will harden with pawprints in it. But first, I think it is very funny. Now, Floppy went on the concrete. Why? Why did Floppy do this? Do you think Floppy was chasing the butterfly? Yes, that’s right. Look, there is a yellow butterfly, and Floppy was chasing it. Woof, woof, woof, oh, no, now dad had to flatten that one more time. Naughty Floppy, go over there.

What is Floppy doing here? Oh! Oh my! Floppy was shaking mud. Shake, shake, shake! Now everyone, can you shake your hands? Shake your hands with me. And sometimes, when you move your hands so fast, it seems that you can see many, many hands, right? And now here you see lots and lots of mud. OK, now Floppy went in the mud and Floppy was shaking it. Look, Floppy spilled the mud everywhere, all over Kipper. And mummy said, hey, stop that, naughty Floppy! OK!

Let’s see what Floppy did. What was Floppy doing here? Well, look, Floppy pulled the washing down. Oh, no, these are all clean clothes, OK? We’ve got clean socks, a clean T-shirt with number two on it and more clean socks, and some clean shirts and clean underpants. Everything was so clean and then, Floppy pulled the washing down. What would happen to the washing? The clothes will get dirty again. So mummy goes, oh no! I just washed them. Now I have to do it all over again. And why? Why did Floppy do it? Was the butterfly again? So Floppy was chasing the butterfly again. Naughty Floppy! So you say Naughty Floppy! Yes, that’s right!

And then, oh, look! Chip was playing Legos. And Chip made a very tall Lego house. Really cool, I like this house. And Floppy pushed the Lego over. Boom! And the Lego pieces fell apart. You know, I believe Chip must felt very angry and cross. Hey, Floppy! Stop! Look at my house, you ruined it. Er-oh! And Floppy got butterfly, butterfly! So Floppy was not looking anywhere, Floppy was only looking at the butterfly. Oh, dear!

And now daddy got angry again. Floppy! What a bad dog, said mum. What a bad dog! Why? What did Floppy do? Look, Floppy got, oh, no, wait a minute, isn’t this daddy’s other slipper? This slipper is perfectly fine, but look at this, Floppy chewed through dad’s slipper and now, oh no! I don’t think daddy can wear this anymore. So daddy got, my slipper, bad dog! Er-oh! And look, there is an apple, a red apple on the windowsill, and there is a cactus.

And then woof, woof, woof. It is the night when everyone should be sleeping. And Floppy barked and barked. Woof, woof, woof. And daddy couldn’t fall asleep. Daddy couldn’t sleep. What was Floppy up to?

And dad was cross. So dad put on his robe. What a bad dog! Said dad. So dad probably would go to see Floppy and check what was going on, right? And then mum got, yes, go, go to find that dog! Calm it down.

Oh, no, the tray was on fire. Daddy left the tray on the stove and then the tray got on fire and Floppy found it. So Floppy was barking, woof, woof, woof, somebody come, come, come, something was on fire, wake up, everyone. Oh, Floppy did something very good. Floppy warned everyone about the fire. Oh, no, something was on fire, daddy was surprised and mum was surprised. Now what should they do? Put out the fire, OK? Hey, look at the apple, somebody ate the apple, funny!

Everyone was so happy and they said, what a good dog! Hey, why are they saying Floppy was a good dog now? I remember, because Floppy saved everyone from the fire, right? Good dog! So everyone is patting Floppy and they are rewarding Floppy with hugs. Very good!           So do you like this story, everyone? Yes, I like this story so much. Well, speaking of that, monkey, are you being a bad monkey?Am I a bad monkey? Why am I a bad monkey? Because you ate my bananas. I think sometimes monkeys are as naughty as dogs. Only sometimes, I think monkeys are nice, we just sometimes eat your bananas, and sometimes you know some monkey steal. Stealing is bad, OK? We don’t want you to do this.`,
      extensionCn: `今天我们读《真是只坏狗！》。坏狗！猴子，你在干嘛？我在吃香蕉。那是我的香蕉吗？这个是你的香蕉吗？猴子，我们先讲故事。坏狗！看Floppy，汪汪汪，它嘴里叼着衬衫在跑。为什么？Floppy又淘气了。

Floppy，别过来！爸爸喊。爸爸在用工具把水泥抹平。结果Floppy跑过湿水泥。会发生什么？水泥上会留下爪印。虽然很好笑，但爸爸得再抹一遍。Floppy为什么跑过去？它在追蝴蝶。看那只黄蝴蝶，Floppy追它。汪汪汪！爸爸只好再抹一次。淘气Floppy，走开！

Floppy在干嘛？哦！它在甩泥巴。甩甩甩！你也甩甩手，会看到很多重影。Floppy把泥巴甩得到处都是，溅到Kipper身上。妈妈说：停下，淘气Floppy！

接下来Floppy做了什么？它把晾着的衣服拉了下来。哦不，这些都是干净的衣服：袜子、印着2号的T恤、内裤、衬衫。现在全要弄脏了。妈妈说：我刚洗好又得重新洗。为什么Floppy这么做？还是为了追蝴蝶。淘气Floppy！大家说：淘气Floppy！

看，Chip在玩乐高，搭了很高的房子，好酷。Floppy把乐高撞倒了，哗啦散开。Chip一定很生气：Floppy！停下！我的房子被你毁了。Floppy只顾追蝴蝶。哎呀！

爸爸又生气了。Floppy！真是只坏狗！妈妈说：真是只坏狗！为什么？看，Floppy在咬爸爸的拖鞋。另一只还完好，但这只被咬坏了，爸爸不能穿了。爸爸：我的拖鞋！坏狗！窗台上有个苹果和仙人掌。

夜里大家该睡觉了，Floppy却不停叫。爸爸睡不着，生气地穿上睡袍：坏狗！爸爸去看看发生了什么。妈妈说：快去看看那狗，安静点。

哦不！托盘着火了。爸爸把托盘忘在炉子上着火了，Floppy发现后一直叫：汪汪汪，快来，着火了！Floppy提醒了大家。爸爸妈妈很惊讶。现在要怎么办？灭火！看，苹果被咬了一口，真搞笑。

大家很开心，说：真是只好狗！为什么现在又成好狗了？因为Floppy救了大家，提醒了火灾。大家拍拍Floppy，抱抱奖励它。真棒！

大家喜欢这个故事吗？我很喜欢。说到这，猴子，你是不是坏猴子？我怎么坏？因为你吃了我的香蕉。有时猴子跟狗一样淘气。偶尔偷东西是不对的哦。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-23",
      level: "l2",
      episode: "L223",
      title: "The Go-kart",
      extensionEn: `Honk, honk! Susan, what are you doing? Hey, monkey, I am driving the go-cart. Look, this is a really cool go-cart. Susan, that is not yours, that belongs to Kipper’s family. Yes, that’s right. I am just imagining, you know? Look, this is a go-cart. A go-cart is really cool. You can sit here, you can drive, you can steer the wheel, steer wheel, and you can honk, and you can pedal, it’s a lot of fun. You can go really fast, and you can feel the wind. Wow, I feel like I am a car racer.

Of course, dad made this go-cart. Look, dad is busy working. And what is dad holding? Dad is holding a screw driver. A screw driver is a really useful tool. You can use it to screw the nails,

screw, screw, screw, OK? And what else can you see? I see a tool box. And in the tool box, I see a hammer, and here is another hammer. You can use a hammer to hammer, bang, bang, bang, hit the nails, bang, bang, bang. That’s cool! And I see another screw driver. And this kind of tool is called pliers, pliers. And you can use pliers to hold things or cut wires. And what else do we have? A wrench, you can use a wrench to twist, twist, twist, very interesting! And dad made a go-cart. It’s so cool. And I see the horn right here,I see the brush. Dad is busy! Come on, dad! I love your go-cart.

Ta-da! That’s so cool! And Biff wanted the go-cart. Chip wanted the go-cart too. Both of them were running to get it. And Floppy wanted it too. Three, three of them. I want to play in it. I want to play in it. I want to ride on it.

And then, er-oh! Biff wanted a go, I want a go. And Chip wanted a go, I want a go. Me first! I got here first. No, I got here first. And they started to push each other. And here is Floppy, and Floppy got, woof, woof, woof, what about me? And here is the cat, it goes, what are they doing? And look, the horn broke off. Oh, no, you haven’t started playing it, and now you broke it.

And then, oh, oh, my! They started fighting. Biff pushed, it’s like, and then Biff pulled. Er-oh! They had a fight. And look, mum got surprised, oh, what are they doing? And then dad was also looking in the fight, and dad wanted to stop them, so dad tapped, tap, tap, tap, hey, hey, hey, you two, stop. But they didn’t seem to hear dad, right?

And then Biff pushed Chip to the ground, I wanted a go, I got here first. They had a fight. And then mum and dad ran out of the house, and here Floppy was barking too. Woof, woof! stop, stop. They got, stop, stop, you two, stop fighting. Do you think they would be nice and kind to each other? No, they were in a fight. Tell me, everyone, is fighting good? No, you shouldn’t have a fight, OK? You should be nice to your friends.

And then finally, dad and mum separated them. And then stop it, said dad, stop it, said mum.

And then they started to blame each other, she said, he pushed me first, he pulled me, and then Chip said, Biff pushed me to the ground, and then, probably, I think Biff said, I got there first, and then Chip said, no, I got there first, and blablabla. They wanted keep fighting, OK?

But dad thought a way, no, you two stop, no one could ever play this go-cart. I am gonna lock it away in the shed. No one can play it. Dad put the go-cart away. Er-oh! Sorry, no one can play it now. What is Floppy doing? Well, Floppy said, I haven’t tried it yet. And then look, they got, no fun. And, OK, so look, so now they don’t have a go-cart to play with. They are building a swing. I think this looks really cool. Mum is holding a wrench. Mum is twisting and then Biff is holding a hammer, mum, I can help you. And then dad is carefully painting, painting the swing red with the red paint, right? And then Biff is holding a bottle of something and a towel, helping too. I think this is going on really well, right? So they made a swing and they could play this happily. Do you think this is a really good idea?

Oh, no! They started fighting over the swing again. They need some rules, you know? Serious, they need some rules when they come to play. What do you mean by rules? Well, rules are things to tell you what you should do and what you shouldn’t do. I think they should take turns. Like, you go first, then you, then you, then you, take turns. And after a few minutes, they should switch, OK? I think in this way, they can both enjoy, and one can sit on it, and the other one can push. Come on! This is happy, right? But now, fighting will make everyone angry, OK?`,
      extensionCn: `嘟嘟！Susan，你在干嘛？猴子，我在开卡丁车。看，这辆卡丁车好酷。Susan，那不是你的，是Kipper家的。对，我只是想象一下。卡丁车可以坐进去，转方向盘，按喇叭，还能踩踏板，特别好玩。你可以开得很快，感受风，像赛车手。

这辆卡丁车是爸爸做的。看爸爸在忙，他拿着螺丝刀。螺丝刀很有用，可以拧螺丝。工具箱里有锤子，用来敲钉子；还有另一把螺丝刀；还有钳子，可以夹东西或剪线；还有扳手，可以拧。爸爸做了一辆卡丁车，好酷！这里还有喇叭和刷子。爸爸好忙！爸爸，加油，我喜欢你的卡丁车。

哒哒！Biff想玩，Chip也想玩，Floppy也想玩。三个人都想上车：我先来！不，我先来！

糟了！他们开始推来推去。Floppy也在叫：那我呢？猫看着他们。喇叭被弄坏了。还没开始玩就坏了。

他们开始打架。Biff推，Chip拉。妈妈惊讶：他们在干嘛？爸爸想制止：喂，你们两个，别打了。但他们听不见。

Biff把Chip推倒：我先到的。爸爸妈妈跑出来，Floppy也叫。停！别打了！打架好吗？不好。要对朋友友善。

最后爸爸妈妈把他们分开。他们互相指责：她先推我！他先拉我！还想继续吵。

爸爸想了个办法：你们两个都不许玩，我把卡丁车锁在棚子里。没人能玩了。Floppy还没玩到。大家都不开心。

后来他们做了一个秋千。妈妈拿扳手，Biff拿锤子帮忙，爸爸把秋千刷成红色。Biff拿着瓶子和毛巾帮忙，一切很顺利。他们可以快乐地玩秋千，这主意很好。

哦不！他们又在为秋千争吵。需要规则。规则就是告诉你该做什么、不该做什么。应该轮流玩：你先、我后，过几分钟换。这样两个人都能玩，一个坐，一个推。这样才快乐。打架只会让大家生气。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-24",
      level: "l2",
      episode: "L224",
      title: "The Dream",
      extensionEn: `Monkey, monkey, wake up! What’s going on? Susan, I had a bad dream, it was so terrifying. Oh, monkey, huggie, huggie, I am so sorry. I think this book can calm you down. Come, come, let’s read it, OK? This is called the dream. You know the dream, right? When you sleep, your brain is still working, and you are dreaming of really fantastic things and sometimes terrifying things. Here is Biff. What is Biff dreaming of? A dragon. The dragon is dripping saliva, saliva is the water in its mouth. Disgusting, it’s smelly. And the dragon is spitting fire. So scary! So Biff was having a bad dream.

Biff couldn’t sleep. So Biff walked down stairs, walked in to the living room. Oh, dad was reading newspaper there. I can’t fall asleep.

And then... Susan, what are they doing in the living room? Look, dad was reading to Biff. Dad was reading a book about a fire spitting dragon. And then there is Biff sitting on the sofa with her knees tucked to her chest. Here is your chest, OK? And then she was sitting because she was a little bit afraid, OK? She was feeling sad or blue. Dad told her a story. The story was about a dragon. Hey, I think I like their living room. What do you see in the living room? I see a big sofa and a small sofa, some newspapers. And this one, I think it is called a Swiss cheese plant, it’s a very pretty plant, and I see a lamp. I see a coffee table. That’s right. And on the coffee table, I see two books, two remote controls. And on the sofa, I see one, two, three, three cushions. I like their living room, do you like their living room? Yes, I like their living room too.

Yes, OK, and after hearing the story, Biff went back to bed again. And Biff fell asleep and Biff started dreaming. And Biff dreamed about the dragon. Oh, no! Look, the dragon jumped out of the book. Oh, no! And there is Biff, Biff was so scared.

And the dragon wanted to eat her. It was a nasty dream, a terrible dream, a terrifying dream, so scary, oh, no! The dragon was huge and it was ugly, it was spitting fire. And Biff had to pick up a wooden sword and she put a bucket on her head and she was holding a shield. And it’s like I am gonna fight with you, I am gonna fight. And then Biff was not having a good dream.

Oh, no! The dragon was spitting fire. You know, fire is extremely hot. And the fire is melting the shield. What should Biff do? It was a very nasty dream. Oh, no! Somebody need to help Biff. Yes, but it seems that no one is coming.

And, look, the dragon bit the sword in half, and Biff fell down on here butt. Oh, no!

Somebody needs to help her. Biff had to fight it. Yes, or maybe, you just have to fight it. OK.

And then, mum, dad, Biff went downstairs. Biff woke up with a start like... Luckily, she woke up, OK? Because we don’t want to be eaten by a dragon in the dream, OK? You got so scared, so you woke up. And then somebody, mum, dad, help. And then, Floppy was surprised. What’s going on? Dad was surprised, mum was surprised, holding the kettle, what’s going on? Bad dreams!

And then, mum got a really good book. Look, this book is full of dolphins. You know, dolphins can jump out of water and a dolphin is very smart and cute and a dolphin can swim very fast. Mum told her a story about dolphins, OK? The story was about a dolphin. Oh, but why do I see so many dolphins? OK, and then, dad was looking at them. It seems that Biff is really happy and dad is holding a tray and on the tray, there are one, two, three, three cups of tea. And look at Floppy, Floppy is sticking its tongue out like..., I want to drink that.

Now, finally, Biff could have a really good sleep. Biff dreamed about a dolphin. And Biff was riding on the dolphin. Wow! I am a dolphin rider, happy, free! I love the blue sky and the blue sea.`,
      extensionCn: `猴子猴子，醒醒！怎么了？Susan，我做了噩梦，好可怕。哦，抱抱抱抱，没事没事。我想这本书能让你 calm down。来，我们读吧。这本叫《梦》。你知道梦吧？睡觉时大脑还在工作，会做很奇妙的梦，有时也很可怕。看Biff在梦什么？一条龙。龙流着口水，还会喷火，太吓人了。Biff做了噩梦。

Biff睡不着，于是下楼到客厅。爸爸在读报。Biff说：我睡不着。

Susan，他们在客厅干什么？爸爸给Biff讲故事，讲的是会喷火的龙。Biff蜷着腿坐在沙发上，有点害怕、情绪低落。爸爸给她讲龙的故事。看他们的客厅：大沙发、小沙发、报纸，还有一盆漂亮的龟背竹，灯、茶几。茶几上有两本书和两个遥控器，沙发上有三个靠垫。我喜欢他们的客厅，你呢？我也喜欢。

听完故事，Biff回到床上，又睡着了，又梦到龙。哦不！龙从书里跳出来了，Biff吓坏了。

龙想吃她，是个可怕的梦。龙又大又丑，还喷火。Biff拿起木剑，头上戴着桶，手里拿着盾牌：我要和你战斗！但这是个坏梦。

哦不！龙喷火，火非常热，把盾牌都融化了。Biff怎么办？太可怕了。需要有人帮她，但好像没人来。

龙把剑咬断了，Biff摔倒在地上。哦不！她只能自己对抗。

然后Biff猛地醒了，真好，她醒了，不然梦里要被龙吃掉了。她喊：妈妈爸爸，救命！Floppy也被吓到。爸爸妈妈惊讶，妈妈手里还拿着水壶：怎么了？噩梦！

妈妈拿来一本很好的书，里面全是海豚。海豚能跃出水面，聪明又可爱，还游得很快。妈妈讲海豚的故事。Biff看起来开心了。爸爸端着托盘，上面有三杯茶。Floppy伸着舌头：我也想喝。

最后Biff睡得很好，梦到海豚。她骑着海豚，自由快乐，蓝天蓝海，真开心。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-25",
      level: "l2",
      episode: "L225",
      title: "The Big Egg",
      extensionEn: `Susan, what are you doing? I am mimicking a hen. Look, today they are gonna go and collect the eggs, yeah! Collect eggs? What’s the fun of that? Well, it’s fun! It’s something like an Easter hunt. You know, I found the egg, I found the egg. You know, it’s fun! We are gonna go and join them, OK? It’s called The Big Egg. Where are they, monkey? I think they are on the farm. Yes! They are on the farm. On the farm, you can feed the animals and you can collect the eggs. Let’s go! OK! Look, come and eat, everyone! Look, here are a lot of hens. And the children fed the hens. Feed the animals, feed, feed. Have you ever fed something? Somebody fed me. I know, and what did they feed you? I think they fed me lots and lots of bananas. Happy monkey! Now what are they feeding the hens? Chicken feed, OK? This is chicken feed. Come and eat! And all these hens were really happy, and they got, food, food! What is Floppy doing here? Floppy is tied on to the fence. And here comes a little sparrow, cheep, cheep, cheep. The little sparrow is annoying Floppy. And Floppy got go away, go away!

Hey, Susan, what are they doing here? Let me see, I think they are collecting eggs. Look, everyone of them is holding a carton. And when they see an egg, they will pick it up and put it in the carton. Oh, let’s help them. OK, let’s help them. Here we have one egg here. One, two, three, three eggs here in the grass. And Kipper has found one here in the grass too. And there are more. How many hens can you see? One, two, three, four, five, six, seven, eight, nine, ten, eleven, eleven hens. OK! And where are they? Some are walking in the grass, and some are standing on the wheelbarrow. Really cool! Hey, woof, woof, woof! Floppy is barking here, what happens to Floppy? Floppy got, go away! Here comes a little black bird. I think this one is called a magpie. And in my yard, you can see many, many magpies. I don’t quite like the sound they make, because they make like...this kind of sound. And then Floppy is a little bit afraid like, go away, what are you doing? Probably, these birds don’t quite like Floppy. They are gonna pick the eggs. It seems that dad has thought of some cool ideas.

What is daddy doing here? Daddy is holding some money. OK, I am gonna give it secretly, give it secretly, don’t let the children see. What is daddy doing? Daddy is secretly paying the farmer. Why? I don’t know. But OK, now, they have finished collecting the eggs and they are giving the cartons to mummy. And what is Floppy doing here? Look, here comes a hen and the hen got cluck, cluck, cluck. Susan, are they roosters or hens? Well, they look like hens because you know what? Only hens can lay eggs. I think they should be hens. Look, here comes a brown hen. The brown hen is harassing Floppy. Floppy is still tied up to the fence, and then Floppy got, go away, don’t peck me, don’t peck me. Look at the leash, the leash is taut.

And they are going into the barn. Usually you put some hay and some more animals in the barn, OK? And then Kipper went on looking. What were they looking at? I don’t know, they were looking at something, maybe this hen. Look at Floppy here. Floppy is covering its eyes, oh, no, what’s wrong with the birds here? Here comes a goose, and the goose is standing on its back, barking at it.

OK, so, look at this egg, said Kipper. This is too big. And look at this hen, it goes yes, it is not mine. Why do I say that? Because a hen can not lay such a big egg. OK? It is impossible. That’s why everyone is so surprised. What? Such a big egg! And here comes another goose. Floppy is so scared and Floppy stands up like, go away, go away, stop harassing me.

And then Kipper got a hold of the egg and Kipper said, huh. And then Kipper looked at the egg and looked at the hen. Kipper looked at the hen. And, this is too big for you, he said. How is it possible that you laid such a big egg? And then look at Floppy back, Floppy goes, geese, go away, please. These geese are honking, honk, honk, honk. OK, all these birds hate Floppy. I am so sorry.

And daddy said something, look, everyone, look at Floppy. Floppy is on its back, but look at the bird. It’s only a very small robin. So little! This is funny, right? Look, Floppy is so big, and the Robin is only this big. But Floppy is so scared, like ah! But of course, they didn’t see what had happened to Floppy. OK, then, so come and see this, said daddy, everyone got, hahaha, Floppy, you are so afraid of little birds. And Floppy said, come on, you didn’t see what I’ve experienced.

And then they went to see the ostriches. Oh, I got it, this is not a chicken egg, OK? This egg is an ostrich egg. It is so huge because an ostrich is big, OK? This is too big for you, said mum, let me carry it, don’t drop it. Look at Floppy again. Oh, yes, look, the biggest ostrich is pecking Floppy’s ear. Why did these birds hate Floppy so much? I don’t know. What is this ostrich doing? This ostrich is eating out of the trash can. Hey! This is funny. Now look at this ostrich, this one and this one, they have long necks right? Very funny! And this ostrich is running here. That looks a little bit scary.

And look at them, they are having breakfast. Everyone of them is eating an egg. And look, it is very interesting that they put the egg in the egg holder. Ding-ding, ding-ding! Look at this egg holder, it is big, such a big egg holder, because an ostrich egg is very big. This is too big for me, said dad. Probably, you can not finish this. I think, probably, mum and dad will have to eat together to finish this, right? Which egg do you want to try? Do you want to try the ostrich egg, monkey? Yes, I want to try it but I still like bananas better. OK, I got it.`,
      extensionCn: `Susan，你在干嘛？我在学母鸡叫。看，今天他们要去捡鸡蛋啦！捡鸡蛋有什么好玩？很好玩，像复活节找蛋游戏一样：我找到蛋啦！我们也一起去吧。这本叫《大大的蛋》。他们在哪？我觉得在农场。对，农场可以喂动物、捡鸡蛋。走吧！

来吃吧！这里有好多母鸡，孩子们在喂鸡。你喂过东西吗？有人喂过我。喂你什么？好多香蕉。开心猴子。现在他们喂鸡吃鸡饲料。母鸡们很开心：食物食物！Floppy呢？Floppy被拴在栅栏上。来了一只小麻雀，叽叽叽，在惹Floppy，Floppy说走开走开。

他们在干嘛？我看他们在捡蛋。每个人拿着一个蛋盒，看到蛋就放进去。我们也帮忙吧。这里有一个蛋，草地上还有三个蛋，Kipper也找到一个。你看到几只母鸡？一、二、三……一共十一只。有的在草地上走，有的站在独轮车上。很酷。

汪汪！Floppy又叫了。来了只黑色小鸟，我觉得是喜鹊。我们院子里也有很多喜鹊，但我不太喜欢它们的叫声。Floppy有点害怕：走开走开。可能这些鸟也不喜欢Floppy，还想偷蛋。爸爸好像想到了办法。

爸爸在干嘛？他拿着钱，悄悄付给农场主，别让孩子看见。捡完蛋了，大家把蛋盒交给妈妈。Floppy呢？一只母鸡走过来咯咯叫。Susan，这是公鸡还是母鸡？应该是母鸡，因为只有母鸡会下蛋。看，一只棕色母鸡在啄Floppy。Floppy被拴着，绳子绷紧了：别啄我！

他们走进了谷仓。谷仓里放稻草、养动物。Kipper还在看。Floppy捂着眼睛：这些鸟怎么回事？来了一只鹅站在它背上。Floppy好害怕。

Kipper说：看这个蛋，太大了！母鸡说：不是我下的。母鸡不可能下这么大的蛋，所以大家很惊讶。又来了一只鹅，Floppy被欺负得更厉害。Kipper拿起蛋看了看：这蛋太大了，你怎么可能下？Floppy在后面求鹅别再闹。鹅一直“嘎嘎”叫。大家都没看到Floppy遭遇了什么。

爸爸说：来看看Floppy。Floppy仰着肚皮，但鸟只有一只很小的知更鸟。Floppy那么大却怕这么小的鸟，大家都笑了。Floppy心想：你们没看到我经历了什么。

后来他们去看鸵鸟。哦，原来这不是鸡蛋，而是鸵鸟蛋。鸵鸟很大，所以蛋也很大。妈妈说：太大了，我来拿，别摔了。看，最大的鸵鸟还在啄Floppy的耳朵。为什么这些鸟都欺负Floppy？不知道。一只鸵鸟在翻垃圾桶吃东西，真搞笑。鸵鸟脖子很长，看起来有点吓人。

最后大家吃早餐，每个人都在吃蛋。鸵鸟蛋很大，所以蛋托也很大。爸爸说：这蛋太大了，我可能吃不完。估计爸爸妈妈要一起吃。你想试试鸵鸟蛋吗？我想试，但我还是更喜欢香蕉。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-26",
      level: "l2",
      episode: "L226",
      title: "Poor Floppy",
      extensionEn: `Today we are gonna read this book, it is called Poor Floppy. Poor Floppy, what happened? Look at Floppy! Do you think he looks very tired? Yes, Susan, I think he looks very tired. But how do you know he looks very tired? Now look at its eyes. Do you see these? They are eye pouches and they are visible, very big. So when you see very visible eye pouches, that means he is tired, and probably he needs more sleep. Susan, you need more sleep. Really? Do I have very visible eye pouches? Yes, you need more sleep. Yes, I should go to bed earlier. OK, anyway, let’s keep reading. Poor Floppy!

Look at Floppy. Floppy is a little bit shaking. And Floppy looks very tired, right? So Floppy was not well. Usually when a cat or a dog looks very tired and shaky, probably the dog or cat is ill, OK? And what should we do? We should take it to see the vet. Susan, what’s a vet? A vet is an animal doctor, OK? Doctors see you when you are sick and a vet sees the animals when they are sick. Look at Floppy! Floppy looks so tired. He is not playful anymore. And he lay on his bed. He looks bad, said Kipper. Oh, and they are patting him. I think we should take him to see the vet. Yes, take Floppy to see the vet. Poor Floppy!

Poor Floppy! Let’s pat him, pat, pat, pat. And Biff wanted Floppy to get well. So Biff drew a card, it says to Floppy from Biff. And what did Biff draw? A cat! Why? Oh, I know, Floppy likes to chase the cat, so maybe when Floppy sees the cat, Floppy would be happy and start chasing it, woof, woof, woof. No, Floppy still looks tired and sick. Kipper was sad and Kipper was crying. What is daddy holding? It is a thermometer! When you are sick, you need this one to test your temperature, OK? Sometimes, when you feel really hot and you have a fever, we need to take your temperature. Sometimes, you put this in your mouth, sometimes, it is just something you put it in your ear, it goes di, and we will read the number, OK?

OK, ta-da, mummy is holding such a big Floppy to the vet. Poor Floppy! Yes, look, they have come to the vet. And mum took Floppy to the vet. Chip went too. Let’s go and take him to see the vet. Oh, what a crowded room. Look at this, what do we see here? We see many people. And everyone of them has taken their pet. Oh, poor dog! This dog is lying on the ground upside down. What happened to the bird? This bird is upside down too. What’s in this box? What do you think, monkey? Is it an earthworm? No, not an earthworm. I think it’s the tail of a rat. So that must be a rat. And how many cats can you see? One, two, three, four, five, six, six cats in four cages. Usually, remember, when Floppy sees cats, Floppy can not control himself, and Floppy would go chasing them. Oh, look at Floppy, he is so weak and he is only sleeping there on the ground. Oh, poor Floppy. And there on the wall, you can see a lot of posters and here you can see a foot, a mouth, and here is a snake, and there is a picture of a horse, and here it says no barking, blablabla, and this is the surgery room. Susan, what is a surgery room? In a surgery room, a doctor will do surgeries. Here the vet will do a surgery on the animal, OK? And then I can see six cats, he said.

Floppy just looked at the cats. OK, cats, but I am too tired to chase them. He was not well. Yes, indeed and these cats got, what’s wrong with this dog? Dogs will chase us, what’s wrong with this dog?

There they are, finally! The vet is examining Floppy. The vet looked at Floppy. Give him some pills, she said. So Floppy needs some pills but I don’t know what’s wrong with him and it doesn’t say. Probably Floppy eats something wrong or Floppy had a fever. Maybe some pills will help him. Susan, what’s a pill? A pill is something probably this big and you put it in your mouth and drink it, OK? Susan, what’s on the wall? You see, there is something on the wall, right? This one is an anatomy poster. Anatomy poster, it can let you see the body parts of an animal. And here we have a Snellen eye chart. It can test your eye sight, OK? All right!

Wow, look at this. They’ve come back home and Floppy is eating. This is good, you know, sometimes when you are sick, it feels like I don’t want to eat anything. But when you get better, you feel hungry, and you want to eat a lot of food. So mum took Floppy home. Floppy had some pills, pills. And look at here, we have so many cards. It says, get better soon, Floppy! Floppy, we love you! So everybody has prepared a gift for Floppy to get better. Here we have a present bone, and a ball. It says, get better, we can play with you. And Floppy is eating the pills. Yes, I want to get better too.

Oh, yes, look! Floppy has got better. Floppy was soon better. How do you know Floppy is better? Floppy is running. And Floppy is not only running but also chewing daddy’s slipper again. Naughty, naughty! When a dog, when a naughty dog gets naughty again, that means it is very well.`,
      extensionCn: `今天我们读《可怜的Floppy》。Floppy怎么了？看起来很累。怎么知道？看它的眼袋，很明显，说明它很疲惫，需要睡觉。Susan，你也需要早点睡。好吧，我们继续。

Floppy有点发抖，看起来很难受。一般狗或猫如果很累、发抖，可能是生病了。该怎么办？带去看兽医。兽医是动物医生，看动物的病。Floppy不爱玩了，躺在床上。Kipper说它看起来不好。大家摸摸它：我们该带Floppy去看兽医。可怜的Floppy！

Biff画了一张卡片给Floppy：祝你快点好。她画了一只猫，因为Floppy喜欢追猫，看到猫也许会开心。但Floppy还是很难受。Kipper很难过，哭了。爸爸拿着体温计，生病要测体温。有的放嘴里，有的放耳朵里“滴”一下读数。

妈妈抱着Floppy去看兽医，Chip也去了。诊所里好多人，大家带着宠物。那只狗躺着，那只鸟也倒着。盒子里像是老鼠尾巴。你能看到几只猫？一、二、三、四、五、六只，分在四个笼子里。平时Floppy看到猫会追，但现在它太虚弱了，只能躺着。墙上有海报：脚、嘴、蛇、马，还有“禁止吠叫”。这是手术室。手术室就是做手术的地方。Floppy只是看着猫：猫我看到了，但太累，追不动。猫们也在想：这狗怎么了？

终于轮到Floppy。兽医检查后说：给它吃点药。具体什么病没说，可能是吃坏了或发烧。药片就是小小一粒放嘴里吞下。墙上有解剖图，还有视力表。

回到家，Floppy开始吃东西了。生病时没胃口，好转后会饿。家里准备了很多卡片：祝你快点好。还有礼物：骨头、球。Floppy吃药，慢慢好起来。

看！Floppy好了，开始跑了，还又咬爸爸拖鞋。淘气又回来了，说明它恢复了。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-27",
      level: "l2",
      episode: "L227",
      title: "Put It Back",
      extensionEn: `Pinch, pinch, pinch! Susan, what are you doing? I am pinching something. I’ve got big pincers. Are you mimicking a crab? Yes, I am a crab. OK, look! Today, we are gonna read this book, it is called Put It Back. Put it back? Back where? I don’t know. Let’s start reading. Where are they? They are on the beach. That’s right. They’ve found a little crab. Look, the crab has got two pincers. Susan, what does a crab eat? I think a crab eats worms, clams, mussels, sea urchins. A lot of interesting things. And I can eat the crabs. Really? You wanna eat the crabs? No, probably just bananas. OK, now look, they are playing on the beach and they’ve found a crab. Last time, I went there, I found many many very small crabs.

So look at this, said Biff. Ha, they found a big puddle and they found a little crab. So Biff was going to get it. And Chip and Kipper are coming.

She had a crab in her hand. Look! Put it back, said Chip. Susan, why do we have to put it back? Well, because if you don’t want to eat it, just let it live and it must live in its own home, that is the sea, OK?

Then Biff put the crab back. Go back! Enjoy! Go back to the puddle. Let’s look on the sand, said dad. There is daddy. Come, come, let’s look on the sand and see what we can find.

OK! Everyone is looking. She has found something and it looks like a shell, and Kipper has found something very long, it looks like a worm. Dad seems to have found a stone. What has Biff found? Biff is still looking. Biff hasn’t found anything yet. And how about Chip? Chip has found a net. That’s right. Come and see this, said Chip. He had a net. What weird things have you found!

Come and see this, said mum. Mum is holding a bit of wood. She had a bit of wood. That’s quite special. Hey, look, Kipper has found a fish bone. Oh, who is this? Chip! Chip has found a shell. Look at this shell, this shell looks really beautiful, right? And I quite like Chip’s hat. Yes, I like the sunhat too. Yes, it’s very special.

And then look at this shell, said Kipper. It looks really beautiful and quite big. This is the best of all. Yes, the best of all. Hey, I’ve found something. I think it is a cork. Susan, what is a cork? You can use a cork to close a bottle, especially a wine bottle. What has dad found? Is it mushroom? Mushroom? That would be wired. But it looks like a mushroom. And someone is wearing flip-flops.

OK, now, they’ve laid out everything on the white mat. The shell had legs. What? The shell had legs? Oh, the shell is walking away. The shell had legs? Yes, the shell was crawling away. Oh, no, said Kipper, what is that? So it is not a shell. There must be something inside that can move. Let’s look what they’ve found. They’ve found a lot of things, right? Cork, and some shells, some stones, a bit of wood and a net and broken glasses. Fine! And they got, what! Why is it moving?

OK, let’s see what’s that? It’s a hermit crab. Susan, what is a hermit crab? A hermit crab is a little crab who lives in a shell. It’s very interesting. And it is a crab that lives in a shell. Look, that’s a hermit crab. I haven’t seen a real one. Have you seen a real one? No.

Put is back, said Kipper. Yes, put it back. Because if you don’t want to eat it, let it rejoin the natural cycle, so we do not disturb the food chain. We need to protect the animals, we need to protect the environment, OK?`,
      extensionCn: `夹夹夹！Susan，你在干嘛？我在夹东西，我有大钳子。你在学螃蟹吗？对！今天我们读《放回去》。放回去？放哪儿？不知道，开始吧。他们在哪里？在海边。对，他们发现了一只小螃蟹。螃蟹有两只钳子。螃蟹吃什么？它吃虫子、蛤蜊、贻贝、海胆等。我也可以吃螃蟹。真的？你要吃？不，还是吃香蕉吧。

看，Biff发现了一个大水坑和一只小螃蟹。她把螃蟹抓起来。Chip和Kipper也来了。

把它放回去，Chip说。为什么要放回去？如果不吃它，就让它活着，它应该回到自己的家——大海。

Biff把螃蟹放回水坑：回去吧，享受吧。爸爸说：来看看沙子里还有什么。大家开始找。

大家在找东西。有人找到贝壳，有人找到很长的东西像虫子。爸爸像是找到了石头。Biff还在找。Chip找到一张网：快来看。妈妈拿着一块木头：快来看。Kipper找到鱼骨。Chip又找到一个漂亮贝壳。我也喜欢他的太阳帽。

Kipper说：看这个贝壳，好漂亮好大，这是最好的。有人说自己找到了一个瓶塞。瓶塞是用来塞住瓶子的。爸爸找到像蘑菇的东西，但不太像。有人穿着人字拖。

大家把找到的东西放在白色垫子上。哎？贝壳长腿了！贝壳在走？原来它在爬走。Kipper说：那是什么？说明里面有东西能动。大家找到了很多东西：瓶塞、贝壳、石头、木头、网，还有碎玻璃。怎么会动？

原来是寄居蟹。什么是寄居蟹？就是住在贝壳里的小螃蟹。很有趣。我没见过真的，你见过吗？没有。

Kipper说：放回去。对，把它放回去。我们不吃它，就让它回到自然循环里，不要破坏食物链。我们要保护动物、保护环境。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-28",
      level: "l2",
      episode: "L228",
      title: "In a Bit",
      extensionEn: `Susan, Susan, come and play with me. I wanna climb the tree. Yes, that sounds fine. But in a bit. Because I am reading this book to everyone. In a Bit. Susan, what does in a bit mean? Well, in a bit means we are gonna do it later, not now, because we are busy with something else, we will do that later. So for example, after reading the book, I am gonna play with you, OK? So here it says In a Bit. What are the children doing? Look, the children are watching TV happily. I am very happy when I am watching TV. Are you? Yes, I am happy when I am watching TV. Good!

And then, let’s look at the first page. Here comes mum. Mum is holding a basket. What’s in the basket? Dirty laundry. Ew, socks and smelly socks, and T-shirts, and pants and everything. And here is a bag of pegs. After you wash all these clothes, you have to dry them, hang them up and then you will need the pegs, OK? Come and help, said mum. But look at Biff, do you think Biff wants to help?

Biff was looking at the TV. And, in a bit, she said, I can’t help you now. I like this program. It’s fun. And mum got uh, lazy girl.

And then, dad is knocking on the window, knock, knock, knock, hey, hey, hey, tap, tap, tap. Daddy is holding a sponge. And a bucket. Yes, that’s right, an orange bucket. What do you think daddy is doing? Is daddy cleaning the window? I don’t think so. I see a red car here, so maybe dad wants to clean the car. Wash the car. And dad had a job for Chip. Come and help, he said. I get a job for you. Susan, what’s a job? A job is what you must do, it is your work. You must do it. And so what do you think dad wanted Chip to do? Dad wanted Chip to clean the car with him. Yes, that’s right. Washing a car is really a tough job, OK? But do you think they are going? I am pretending I can not hear you. So, I don’t think they are going. OK?

Chip was looking at the TV. And, in a bit, he said, in a bit, not now, we are watching TV. And dad goes, come on, come on, help me. And they got no, no, no.

Oh, my gosh! Look at this room. It’s so messy. I see dirty socks on the bed, and books everywhere, toys everywhere, all over the bed and floor. Kipper’s room was in a mess. Tell me, is your room like this? Sometimes. Sometimes? Often. Yes, you need to tidy your room. What about you guys? Your room is clean, seriously? OK! So Kipper’s room was in a mess. Come and help, said mum. Tidy your room, put away your toys and books, and you need to put the things where they should be, OK? But do you think Kipper is coming?

No, Kipper was looking at the TV. Everyone, wow, they are so relax, comfortable, on the sofa. In a bit, he said. And mum got, you need to clean your room.

Mum and dad are not happy, OK? They are drinking tea. And mum is stirring, stirring, we need to think of a way to ask them to do their work. What should we do? What can we do? Said dad. Mum had an idea. I wonder what mum’s idea was.

Biff, Chip and Kipper wanted dinner. Mum and dad, we are hungry. Is there food? I wanna eat dinner. Wait a minute, do you think mum and dad are cooking? No! Mum is holding a pair of scissors. What are mum and dad doing? I don’t know. Look, they’ve got a big cardboard. I think they are making something. But why didn’t they make dinner?

Ta-da! This is why. In a bit, said mum and dad. Mum and dad made a cardboard TV. Why are they doing this? Why didn’t they cook? Oh, I think I know it. Remember they are angry about their kids not helping them? So they wanted to teach them a lesson. You wanna eat dinner, we want to cook the dinner in a bit, later. Because now we are in a TV. This is so funny, right?`,
      extensionCn: `Susan，来陪我玩，我想爬树。好呀，但等一会儿。我要先给大家读书。“In a bit”就是“等一会儿、稍后”，不是现在。比如读完书就陪你玩。看，孩子们正在看电视，很开心。我看电视也很开心，你呢？我也是。

妈妈来了，手里提着篮子，里面是脏衣服：臭袜子、T恤、裤子。还有一袋夹子。衣服洗好后要晾起来，用夹子夹住。妈妈说：来帮忙。但Biff在看电视，说：等一会儿，我正在看节目。妈妈心想：懒丫头。

爸爸在敲窗户，手里拿海绵和水桶。你觉得他在干嘛？旁边有红色汽车，我想他要洗车。爸爸让Chip来帮忙。什么是job？就是你的工作、你必须做的事。爸爸要Chip帮他洗车。洗车很累。Chip去吗？他假装没听到。

哎呀，Kipper的房间好乱：袜子、书、玩具到处都是。你房间也这样吗？有时。常常。你得整理房间。妈妈说：来帮忙，把玩具和书放回原位。但Kipper在看电视，说：等一会儿。妈妈不高兴。

爸爸妈妈喝茶，想办法让孩子们去做事。妈妈有了主意。

孩子们饿了：妈妈爸爸，晚饭好了吗？妈妈拿着剪刀和大纸板，爸爸也在忙。他们没做饭，在做什么？

哒哒！爸爸妈妈做了一个纸板电视。他们说：等一会儿。为什么？他们在教孩子们一个道理：你们叫我们做事总说“等一会儿”，那我们也“等一会儿”给你们做饭。这样很搞笑吧！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-29",
      level: "l2",
      episode: "L229",
      title: "A Present for Mum",
      extensionEn: `Monkey, monkey, you’ve got to come and look at this. Look! This is a jewellery shop, jewellery! You know, all girls and women love jewellery. Do you know what jewellery is? Ha, like a necklace is a kind of jewellery. And we have rings, your mummy has a ring. You may have earrings here, bling, bling. You may have bracelet here around your wrist. Here you can also buy

perfume, that smells so good. You know, all girls love sparkly things. Susan, do you love sparkly things? But I don’t see you wearing them. Well, yes, I do. I am wearing. Look, look at my eyes, bling, bling. Everyone likes sparkly things. OK, now let’s come back to our book, here it says A Present for Mum. So, I guess it must be mummy’s birthday or some special date. And they are shopping for a present for mum. Gifts! I think Daddy has got some. It looks so small, what do you think it is? I don’t know, it must be some of the jewellery, right?

OK, now look, everyone is busy preparing something. Biff and Chip are putting up the banner here. And daddy is looking into a small purple box, and inside there is something bling, bling. That must be the gift that daddy has prepared for mum. And then Kipper is here drawing something, happy, happy, so Kipper is drawing. So daddy had a little box, and everyone is busy preparing something.

Look at this, they’ve got some wrapping paper, and they’ve got some red ribbon, wrapping ribbon. I think this looks quite like Christmas color, right? It was a present for mum. But it is so small and dad is wrapping them, and Floppy is helping them. That’s funny.

But it looks so small, do you think mummy will like it? Yes, maybe even though it is a little small, it is still, it is a good wish, OK? So dad is thinking of something. Dad had an idea. He wanted to make mum laugh. Ha, ha, ha! How can he make mum laugh? I don’t know. It must be a

wonderful idea. And here, Chip has drawn something, and Kipper and Biff are busy decorating some poster. Oh, wait a minute, it’s not birthday. Look, it says happy anniversary. Susan, what is an anniversary? Well, an anniversary is a very special date. That is celebrated every year. Because several years ago, something important happened on that date, OK? Now, it looks like they are having some kind of wedding anniversary. OK? Now he wanted to make mum laugh. So I see a very, very big box. For what? Look, daddy has only got such a small thing, why did he prepare such a big box? I don’t know, let’s keep reading.

Wow, the party! I love parties. Happy 10th anniversary! So they’ve been married for ten years. Yes, they’ve been married for ten years. What a happy family, right? Everyone is happy about this. There is a loud speaker making music. And they are dancing. Look, what is grandma holding?

Grandma is holding maracas, OK? She is holding two maracas. That’s so happy. And everyone is dancing and shaking. Mum and dad had a party. Happy! Hey, what’s wrong with Floppy? Floppy is scratching. Floppy has got a bow tie on it with the ribbon. Wait a minute, just now, look, we forgot to talk about Floppy. Floppy had got ribbon wrapped around its mouth. And now I think Floppy looks really handsome, do you think so? Yes! Everyone is happy.

And now, it’s the gift moment. Mum has prepared something for dad, and dad has prepared something so big for mum. Mum gave dad a present. What do you think it looks like? I think it looks like some dumbbell or barbell. Now dad gave mum a big box. OK, let’s open it.

Open, open, open. Oh, it’s a spade. So maybe mum knows that dad loves gardening and mum has bought a new spade for dad. Mum had a smaller box. What? Oh, so mummy opened his box. Inside there is another smaller box. This time it’s got blue wrapper with white ribbon. And outside,

this one is a piece of yellow wrapping paper with leaves. That’s beautiful! And what is is? she asked.

The present got smaller. Inside the box, there is another box. And this time, the wrapping paper is green with black stripes. And, and smaller, another one. OK, and a smaller one. OK, and this is for you, said dad. What? Now look at them, they are surrounded by boxes. So many boxes. But inside this is the gift. Do you think mum is laughing? I don’t know. Mum is quite curious, right?

OK now, and this is for you, said mum. So actually they both got a little box. Mum has got a purple box from dad, and mum is giving this little blue box to dad. What’s inside the box?

So they both give each other rings. Yes, oh, dad, said mum. Oh, mum, said dad. So both of them have got a ring for each other. Yes, actually a ring is really good gift for an anniversary, OK?`,
      extensionCn: `猴子，快来看！这是珠宝店。女生和妈妈们都喜欢首饰。什么是首饰？项链、戒指、耳环、手链都是首饰。这里还卖香水，香香的。大家都喜欢闪闪亮亮的东西。Susan，你喜欢吗？我当然喜欢，你看我的眼睛，bling bling。

回到故事，本书叫《给妈妈的礼物》。应该是妈妈生日或特别的日子。他们在给妈妈挑礼物。爸爸好像准备了一个小礼物，盒子很小，可能是首饰。

大家都在准备。Biff和Chip挂横幅，爸爸看着一个小紫盒子，里面闪闪的，应该是送给妈妈的礼物。Kipper在画画。大家还准备了包装纸和红色丝带，看起来像圣诞配色。礼物很小，爸爸在包，Floppy也在帮忙，挺搞笑。

礼物这么小，妈妈会喜欢吗？会的，小礼物也代表心意。爸爸想了个办法让妈妈笑。Kipper和Biff在装饰海报。等等，不是生日，写着“结婚纪念日快乐”。什么是纪念日？是每年纪念的重要日子。他们是在庆祝结婚纪念日。

爸爸准备了一个很大的盒子，但里面只有一个很小的礼物。为什么要这么大盒子？我们继续看。

派对开始了！结婚10周年快乐！他们结婚十年了。大家很开心，有音乐，大家跳舞。奶奶手里拿着沙锤，大家跟着节奏摇。Floppy也系了蝴蝶结，嘴上还缠着丝带，看起来很帅。

到了送礼物时间。妈妈给爸爸准备了礼物，爸爸给妈妈准备了一个大盒子。妈妈给爸爸一个小盒子，像哑铃。爸爸给妈妈大盒子。打开、打开——是把铲子。原来妈妈知道爸爸喜欢园艺，所以送他铲子。

妈妈打开自己的盒子，里面还有更小的盒子。包装纸一层一层：黄色、蓝色、绿色……越来越小。大家被一堆盒子围着。妈妈很好奇。

最后，爸爸给妈妈一个紫色小盒子，妈妈给爸爸一个蓝色小盒子。里面是什么？是戒指！两个人互相送戒指。纪念日送戒指，真的很合适。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-30",
      level: "l2",
      episode: "L230",
      title: "The Hole in The Sand",
      extensionEn: `Today we are gonna read this book, The Hole in The Sand. What? They’ve gone to the beach again? Yes, they are lucky, right? I know, you want to go to too. Now look, mummy is shopping for something. Here mummy is holding the purse, and mummy is giving the money to the shop keeper. What shop is this? Let’s see. We have glasses, we have swimming fins, snorkels,

and diving goggles, postcards and some plastic spades. I know, this is a souvenir shop. You can buy some little toys for the kids, OK. And dad is looking at something.

They are digging, right? Yes, Biff’s spade was no good. Oh, it was too soft. So it was bent. You can not dig with that. It’s only a toy. Look, Biff’s spade was bent, and Chip’s spade was bent too. And dad was thinking what should we do.

OK, let’s go to buy something really strong. Wow, what do you see here? Dad has got a very strong spade. What shop is this? It is a hardware shop. You see the saw, the ax, and you see the watering can, a rake and some other bigger saws and hammer. These are really strong tools, OK? So this one is not bent, this is strong. OK, now dad got a big spade. Let me dig a hole, he said. He wants to dig a very big hole, I guess.

Look, daddy started working. Dad dug a hole. Dig, dig, dig, that’s right. The children helped. Let’ dig together. And here is a very strong man running. Mum is reading.

Wow, look at daddy’s hole. Yes, the hole got bigger and bigger and deeper and deeper, deeper. Oh my! Look, daddy is sweating. I think it must be very tiring to dig a hole like this size.

Wow, look, how happy the children are. Jump, bang, they jump inside and then somebody is making more sandcastles here. All the children came. Yes, indeed, this is a very big hole and everyone can play together. So they played in the hole. Jump! And this girl is pulling this boy up. They are really enjoying themselves. Yes, they are having a really fun time until...

Something happened? Wow, what a big wave! I think it is a tide. The high tide is coming. You know, that’s very dangerous. When a high tide comes, you really need to run, because a high tide comes really fast. And if you don’t run fast enough, do you know what will happen? You might be drowned, because the water will eat you up. So the water came in, oh, no, daddy, go, go, go. I can’t stop it, said dad. I can’t. I’ve got such a big hole. But, no, daddy, seriously, the high tide is coming. You should go!

Oh, look! The water comes really fast as I said, right? So the tide came in. Dad’s spade was in the hole. No, leave it there, daddy, go, go, go. Don’t let the water bury you, OK?

The next day, it is so calm. It’s a low tide, probably. The next day, the hole had gone. Oh, my hole is gone. And the bigger problem is dad’s spade was under the sand. And it is nowhere to be found. All was gone, so where is it?

I must find my spade, I spend so much money on it. I must get it back. Let’s dig, said dad. Dad, are you sure you want to use this soft plastic spade to dig for your strong spade? You’d better buy another one. And everyone got, dad, stop it, you can never find it. Next time, be careful!`,
      extensionCn: `今天我们读《沙滩上的大洞》。又去海边了？对，他们真幸运。妈妈在买东西，手里拿着钱包给店主钱。店里卖眼镜、脚蹼、呼吸管、潜水镜、明信片和塑料小铲子，这是纪念品店，给孩子买小玩具。爸爸在看别的东西。

孩子们在挖沙洞，但Biff的铲子太软，弯了，只是玩具，挖不了。Chip的铲子也弯了。爸爸想办法：去买结实的。

哇，这是五金店，有锯子、斧头、浇水壶、耙子、大锯子和锤子。爸爸买了一把结实的大铲子：让我来挖个大洞。

爸爸开始挖，孩子们帮忙。洞越来越大、越来越深。爸爸流汗了，挖这么大的洞很累。

孩子们很开心，跳进洞里玩。大家都来玩，洞很大，很好玩。直到——

大浪来了！这是涨潮。涨潮很危险，水来得很快，来不及跑会被淹。爸爸说：我挡不住，洞太大了。大家说快走！水来了！

潮水很快涌进来，爸爸的铲子还在洞里。算了别要了，快走！第二天，海面很平静，是退潮。洞不见了，铲子也被埋了，找不到。

爸爸说我花了很多钱，一定要找回来。又开始挖。大家说：用软塑料铲子找大铲子？不可能的。你该再买一把。大家劝他放弃。下次小心吧！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-31",
      level: "l2",
      episode: "L231",
      title: "Floppy’s Bath",
      extensionEn: `Hi, monkey, come on! it’s time to take a bath. What? A bath? I hate bath. I don’t want a bath. You are just like Floppy, right? Look at Floppy, Floppy is so muddy and dirty. And it’s called Floppy’s bath. And you know, after the book, you know why you need a bath, OK? So, let’s see. Biff is taking off Floppy’s collar. Come on, let’s take a bath. And Floppy’s face says, no, I don’t want to take a bath. I hate it. OK, so let’s find out how Floppy got so muddy.

Pitter-patter, pitter-patter. Wow, what a heavy rain! It’s so stormy. It’s raining and it’s pouring. Susan, I know the song, It’s raining, it’s pouring, the old man is snoring. Good job, monkey! And can you go outside and play on such a stormy day? I don’t think that’s a good idea. But there is Floppy. Floppy is not afraid of a heavy rain. And Floppy saw a rabbit. Where is the rabbit? There it is, a rabbit. Do you know what Floppy wants to do? Chase! Floppy is always chasing some other animals.

OK, and look at this. Woof, woof, woof, Floppy is chasing. OK, now Floppy chased it. And of course, the rabbit will hop away, right? So it went under a fence. Do you think Floppy could go under the fence? Somehow, he did it, OK?

Now, Floppy got wet. Floppy is sliding down. Yes, so Floppy is sliding down the slope. Woof, woof, woof, don’t go. I can get you. Yes, exactly like you said. OK, and the rabbit was hopping away.

What’s this? Oh, I know, this is the rabbit’s burrow. OK? A rabbit lives underground. And Floppy is digging there trying to get the rabbit. Floppy, stop digging, you are not a rabbit, OK? Floppy got muddy. And look at daddy, look at Chip and Kipper. They got angry. Floppy, how can you get yourself so muddy and dirty?

OK, and then they took Floppy home. Look at this dirty dog. What a soggy doggy! Soggy? What does soggy mean? Soggy means it’s dirty, wet and muddy, OK? And then mummy got, ah, what? Floppy! What did you do, how did you get yourself so soggy and muddy? Oh my! Said Kipper.

OK! And then, they put Floppy in the bath. But look at Floppy, do you think Floppy is enjoying it? No, Floppy is struggling like... Floppy tried to escape, escape the bath. And then everyone is trying to, no, no, stay, stay, put it, stay, stay stable, OK? Don’t try to come out. And Kipper is kneeling down, showing the rabbit, look, look, look, hey, hey, hey, calm down. It’s not easy. Even a baby is easier to bath. Now let’s see what’s here, bubble bath, I love bubbles! You know, if you put a little bit of that in the bathtub, you will have lots and lots of bubbles, big bubbles. And that’s so cute. And then Floppy is here, let me out, let me out. Mum and dad washed him. It’s not easy, right?

Floppy looks enjoying himself. Yes, that’s right. Floppy looks so happy, right? Comfortable! Why? Because Biff and Chip dried Floppy. And what’s in Chip’s hand? Chip is holding a hair dryer. Look! My hair is a little bit wet, actually. Do you know what I need? I need the hair dryer. You can turn it on, and then my hair will be dry, OK? And you can feel warm air coming out of this. And then what is Biff holding? Biff is holding a hair brush, brush, brush, brush. Look at Floppy’s ears. They are very happy. But look at them. Look at Biff’s clothes, look at Chip’s clothes and mummy’s clothes. Why are they so muddy? Oh, I got it. Look, when they were trying to bath Floppy, Floppy got the muddy water everywhere, so everyone got as soggy as Floppy, right?

But look at Floppy now, Floppy looked clean with a very beautiful pink bow. I think Floppy can even go to a dog show now, right? But look at everyone else, wet, muddy, soggy! What a good dog! Said Kipper. Yes, after so much hard work.

Floppy is not cherishing it. Floppy goes, the rabbit! Got you! I am gonna run into the mud again. Oh, no! Susan, I think that is a very bad idea to bath Floppy. Yes, you are right. I think they should wait until all the muddy puddles are gone. Because otherwise, look, Floppy will get dirty, and they will get themselves dirty. It’s not worth it, right?`,
      extensionCn: `嗨猴子，该洗澡啦。什么？我讨厌洗澡。你像Floppy一样。看Floppy又脏又泥，这本叫《Floppy洗澡》。读完你就知道为什么要洗澡了。Biff给Floppy取下项圈：来洗澡吧。Floppy的表情是：不要，我讨厌。

雨哗啦啦下，暴风雨。你能在这种天气出去玩吗？不太好，但Floppy不怕雨。它看到一只兔子，想追。汪汪汪，兔子钻进了篱笆底下，Floppy竟然也钻过去了。

Floppy被淋湿了，在斜坡上滑下去，继续追兔子。这里是兔子的洞穴，兔子住地下。Floppy在挖洞，越挖越泥。爸爸、Chip和Kipper生气了：Floppy，你怎么弄得这么脏！

他们把Floppy带回家。好脏的狗！“soggy”就是又湿又泥又脏。妈妈说：Floppy，你怎么这么脏？哦天哪！Kipper也惊讶。

他们把Floppy放进浴缸。Floppy不愿意，拼命想逃。大家按住它：别动，稳住。Kipper拿兔子玩具哄它：看，看，冷静。洗狗不容易，洗宝宝都更容易。

泡泡浴来了，加一点就会有很多泡泡。Floppy还在挣扎：放我出去！爸爸妈妈给它洗干净。很不容易。

洗完后Floppy很舒服。Biff和Chip给它擦干。Chip拿吹风机，热风吹干毛发。Biff拿梳子刷毛。Floppy耳朵一甩，很开心。

但看，Biff、Chip和妈妈的衣服都泥泞了。因为洗澡时Floppy甩得到处都是泥水。现在Floppy干净了，还戴上粉色蝴蝶结，像要去狗狗比赛。但大家都又湿又脏。

Kipper说：真是只好狗。但Floppy不珍惜，看到兔子又要冲进泥里。哦不！看来给Floppy洗澡得等泥坑干了，否则它马上又脏，大家也会跟着脏，不值得。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-32",
      level: "l2",
      episode: "L232",
      title: "The Baby-sitter",
      extensionEn: `Today, we are gonna read this book, it is called The Baby-sitter. The baby-sitter? Does it mean the baby who sits there? No, it means a person who takes care of babies and children. Sometimes, you know parents have to go out, but they can’t leave their children alone at home, that’s against the law, OK? So they must find a baby-sitter coming to take care of them when they are away, OK? So it looks like that mum and dad are going out, and they found this baby-sitter. And look at this baby-sitter, I think he looks quite interesting. Interesting? How interesting? Oh, look, he is wearing very thick glasses and in English, we call that beer bottom glasses. That means you are, you know, short sighted, and if you take off your glasses, you can not see very well, OK? So he must have read many books, I guess. And now it seems they are having fun.

OK, now look, mum and dad are all dressed up. They are wearing very formal clothing, OK? Look, it’s a very fancy dress. And mum is holding a black purse, wearing really beautiful and elegant earrings and necklace and she is wearing make-ups just like me. And daddy is wearing a suit. So this is what you wear for formal occasions. For example, a dinner, if you are eating at a very beautiful, fancy restaurant, or when you are going to a concert, or maybe a ball, a party, you all need to dress up. You can not wear pajamas there, OK? And then the baby-sitter came. Hello, Mr. and Mam. And then here the children are looking down from the stairs. Oh, the baby-sitter comes. And mum and dad say, be good, bye! Have a nice evening, we are going!

OK, go back to bed, said dad, go, go, go. And the children are running upstairs. Behave yourselves! That’s right, that’s what you say when you want your children to be good, OK? Behave yourselves!

Do you think the children will behave themselves? I doubt it. The children came downstairs. We couldn’t sleep, they said. They want to do something fun. Actually, the baby-sitter was reading and he got, OK, well, maybe we can do something together.

And Kipper got his books. Come on, can you read this one for me? Or maybe this one, or maybe this one, or maybe this one. I am gonna read all of them. And then he wanted a story but he can not decide which one, and this baby-sitter got, OK, I’ve got many books to read tonight, huh? And then, let’s look at Biff. Biff wants to listen to some CDs. And then Chip is trying to turn on the TV. But actually, do you think you can do this at night, at bedtime? No, you should go to bed. These children!

Oh, no, the whole room is gonna be messy. Look, Biff was hungry. So Biff has made such a huge sandwich. Do you think she can finish it? No, it is a waste of food. Now look, one, two, three, four, five, five pieces of toasts, and she has put some stewed apples, and some pickles, some jam and everything together. I can’t finish it, can you? OK! And then, the baby-sitter is cooking something, oh, no, look at the steam. What are the boys doing? Oh, Kipper is holding a banana, and probably he is chasing Chip, and it is like, I think Kipper is pretending that this banana is a sword. They got, ha, ha! So they are fighting and chasing each other. Oh, no.

Oh, no! The room gets even messier. Chip wanted a pillow fight. Let’s have a pillow fight. Bang! OK, even the baby-sitter is joining in. OK! Everyone joined in. Look at the pillow, we got it exploded, bong! Oh, no! But I love pillow fight. You know, I love playing it with monkey. Monkey, monkey, let’s do it, pillow fight! That’s fun, you can play this with your mum and dad.

And then the children went back to bed. OK, it is too late, everyone, go back to bed! What a mess, said the baby-sitter. Now let’s look at the room, books are everywhere. And it’s the feathers from the pillow. Oh, no! He has to clean up, tidy up the whole mess. Oh, dear!

And then mum and dad came back. What is daddy blowing? Daddy is blowing a party horn. That’s funny, right? Next time, when you go to a party, you can get one. And it seems that mum and dad are having fun. And mum and dad came back. Was everyone good? Said mum. Look at the room, do you think the room looks quite tidy? Yes, and what is the baby-sitter holding behind him? It’s a vacuum cleaner. I know, he must has used this one to tidy the room quickly.

And then, yes and no, said the baby-sitter. How can it be yes and no, monkey? Well, the children are sleeping, so that’s probably a yes, but the children made a mess, that was no. Yes, good job, monkey. The children were not really very good. They made the room very messy, but then they went to bed, right? And dad got, what’s this? What’s going on?`,
      extensionCn: `今天我们读《保姆》。保姆不是“坐着的宝宝”，而是照顾孩子的人。父母要外出，不能把孩子单独留在家里，所以要请保姆。妈妈爸爸要出门，找了一个保姆。看这位保姆，戴着很厚的眼镜，像“啤酒瓶底”一样，说明他近视，估计看了很多书。

妈妈爸爸都穿得很正式。妈妈拿黑色手包，戴漂亮耳环和项链，还化妆了；爸爸穿西装。正式场合要这样穿，比如高级餐厅、音乐会或舞会。保姆来了：晚上好。孩子们从楼梯上看。爸爸妈妈说：乖一点，拜拜，玩得开心，我们出门啦。

爸爸说：回床上去。孩子们跑上楼。要“behave yourselves”，就是要乖。

你觉得孩子们会乖吗？我怀疑。孩子们又下楼：睡不着，想玩。保姆正在看书，就说：好吧，我们一起做点什么。

Kipper拿来一堆书：读这个，读那个，全部都想听。保姆说：今晚要读很多书了。Biff想听CD，Chip想开电视。夜里还能这样吗？不行，该睡觉。

房间越来越乱。Biff饿了，做了超大的三明治，五片吐司，加炖苹果、腌黄瓜、果酱，根本吃不完，浪费食物。保姆在做饭。男孩子们在闹：Kipper拿香蕉当剑追Chip，哈哈乱跑。

更乱了。Chip要打枕头仗，砰！保姆也加入了。枕头被打爆，羽毛飞得到处都是。枕头仗很有趣，可以和爸爸妈妈玩。

最后孩子们回床上睡觉。保姆说：太晚了，回床上。房间乱得一塌糊涂，书到处是，枕头羽毛到处飞。保姆只好收拾。

爸爸妈妈回来了。爸爸吹派对喇叭，很有趣。妈妈问：大家都乖吗？房间看起来很整洁，保姆身后拿着吸尘器，应该是刚收拾过。

保姆说：一半一半。为什么？孩子们现在睡了，这是“是”；但他们把房间弄乱了，这是“不是”。孩子们其实不太乖。爸爸说：这是怎么回事？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-33",
      level: "l2",
      episode: "L233",
      title: "The Water Fight",
      extensionEn: `Monkey, it’s so hot. Would you like some ice juice? Yes, I’d like some ice juice. Susan, would you like some? Yes, but I think we need something else, now look, the water fight. Do you want to try the water fight? Water fight? Sounds cool! Let’s see how we play this. OK! Now look, this is Chip. And Chip is spraying someone. Look, this person must be very cool, you know, he is completely soaked. I think he is slithering.

Look, as another very hot day, just like today, it’s so hot. Everyone was hot. So hot! Now look, Chip is lying on the grass next to Floppy. Floppy goes, ha, ha, ha. You know a dog can not sweat,

so a dog has to stick out his tongue to cool itself down, OK? And Chip is wearing a pair of sunglasses. And here comes mum, mum is holding a tray, and on the tray you can see a glass of ice juice. Oh, I wanna drink that. OK, and now here Biff is sitting on the grass too. And Biff is drinking juice, hot! And look at daddy, daddy is sitting in the deck chair, so hot, I can barely move. I see a little cat there, yes, look, there is a cat feeling so hot. What a hot day!

And look what the children wanted to do, the children wanted to go swimming. Yes, going swimming on a hot day is the best, the cool water, you just jump in this, splish, splash! And look at Kipper, Kipper is wearing the floaties. Oh, so cool! I want to go swimming in it. And all the children wanted to go. Let’s go, daddy. Did daddy want to go? No, dad said, no, no way. What’s wrong? Look, oh, I see, dad doesn’t want to drive a car there, because there will be so many people, there will be a traffic jam and it will be so difficult to park your car, right? Here is a swimming pool, car park at rear, so that means there is a car park behind it but look the line of cars, it will take a long time to find a parking space.

And here, they are doing something on their own lawn. Biff got the paddling pool. Come on, let’s fill it with water. So Kipper filled it with water. Yes, can’t wait. Look, how excited Floppy got. Yes, let’s do it!

And then! Look at Chip, wait a minute, Chip had a very weird idea. A-ha, push! So Chip pushed Biff in the water. Look at Biff, Biff got splish, splash fell into the water. What’s going on? And then look at the other hand of Chip, Chip was holding the hose, and the water sprayed on Kipper. So he grabbed the hose. Let’s get the water fight started. And the neighbor is watching, what are you doing, you guys?

OK, and then they had a water fight. Now this is Chip and Chip is spraying hose and Biff is tossing water with a bucket and Floppy is jumping into the paddling pool. Everyone seems so happy and the neighbor got, yeah, water fight, that’s cool.

And mum got wet. How? Because the children sprayed water on her. My book! Hey, what’s going on? Stop it, said dad. Well, I think this is wasting water, do you think so?

And dad got a bucket of water, watch me! And then he chased Chip and Chip climbed up onto the ladder. I am gonna run away, oh, no!

And then dad threw the water at Chip. But look, was Chip sprayed? No, Chip dodged like dodged. And then wait a minute, here is the neighbor, oh, no!

Ta-da! Sorry, said dad. The neighbor was soaked. I am sorry. The neighbor got, hey, why did I get sprayed? Why did I all get soaked? Er-oh! But actually he should feel cooler, right?`,
      extensionCn: `猴子，太热了，要不要喝冰果汁？好呀。Susan你也要吗？要，但我想玩点别的——水仗！水仗听起来很酷。我们看看怎么玩。

今天又是大热天，大家都热。Chip躺在草地上，Floppy伸着舌头散热。狗不会出汗，只能这样降温。妈妈端着托盘，上面有冰果汁。Biff坐在草地上喝果汁，爸爸躺在躺椅上热得不想动。还有一只小猫也热得不行。真热的一天。

孩子们想去游泳，热天游泳最舒服。Kipper戴着浮臂圈，很酷。大家说：走吧爸爸。爸爸不想去，因为路上车多、会堵车、停车很难。看游泳池标牌，车子一长串，停车位难找。

于是他们在家草坪上玩。Biff拿出充气小泳池：快装水！Kipper放水。Floppy很兴奋。

然后Chip想到一个主意，推！他把Biff推到水里。Biff扑通掉进去。Chip另一只手拿着水管，喷Kipper。水仗开始了。邻居在看：你们在干嘛？

大家打水仗，Chip拿水管喷，Biff用桶泼水，Floppy跳进小泳池，大家都很开心，邻居也觉得挺好玩。

妈妈被喷湿了：我的书！爸爸说：停下！这很浪费水吧？

爸爸也拿起一桶水追Chip。Chip爬上梯子，躲开了。爸爸把水泼出去，结果——泼到邻居了。糟了！爸爸说对不起。邻居被浇透：为什么是我？不过这样也凉快了吧。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-34",
      level: "l2",
      episode: "L234",
      title: "Kipper’s Balloon",
      extensionEn: `Susan, Susan, I want a balloon. You want a balloon? OK, so here it says Kipper’s Balloon. Here is a street vendor or to be exact, it should be a walking vendor because she is walking there on street selling children’s toys. What can you see here? I see balloons, and I see a scary spider. But don’t be afraid, they are just toys, OK? They are just toys.

Look, mum and dad are taking Kipper somewhere! Mum and dad went shopping. OK, so here you see the pet shop, and a PH something, and a fish and chips, so you can go there and eat fish and chips. And there is a litter, we call it a trash can. So if you want to litter, you have to make sure your garbage goes there, OK?

And then they see the walking vendor. And Kipper said, mum, dad, I want a balloon. OK, so Kipper bought a balloon. Kipper gave one coin to the vendor and then he got the balloon. I want the red one, please. Good. And dad got, be quick!

And then, they went to the supermarket! Boom! What happened? Er-oh! The balloon was squished by the door. Bad luck! The balloon went bang! They have just walked into the supermarket. What can you see here? We have customer complaints. This is the customer service desk, OK? We can also call it customer service center. When you have some problems, you can go there, and they can help you, OK?

And ta-da! So what did they do? Of course, Kipper was not happy because his balloon was squished. So they went outside again and Kipper bought a new balloon. May I have another one please? And this time was there a red balloon? No, no red balloon. Where was? Look, this girl got the red balloon. But dad didn’t see it, so dad went to the men’s room, right? And then there were some other children lining up, all of them were waiting to get some toys, OK? So dad went to the toilet.

What’s that? A red balloon? Yes, look, dad saw a balloon. Dad got very surprised, why? I don’t know. And Kipper’s balloon, he said. So dad thought it was Kipper’s balloon. Was it Kipper’s balloon? I doubt it. Because you know just now it was the girl who was holding it. So probably the girl didn’t hold onto the balloon very well and let it go. The balloon blew away. So next time when you buy a balloon, make sure you hold onto it, OK?

And then, what? Dad started chasing the balloon. Dad ran after it. Hey, that’s Kipper’s balloon. I must get it. Funny, he almost knock that man over.

OK, and the balloon kept flying. The balloon flew away. And dad chased it. Stop, I must get it, almost there, almost there.

What? What is daddy doing? Dad is climbing onto a statue. Can you climb onto a statue? No, it is against the rules, OK? You can not do that. The balloon was on a statue and daddy climbed onto it. But finally dad got the balloon. But daddy really shouldn’t do it. And look, everyone else was angry and here is a policewoman that said, sir, get down, it is not allowed. And dad got it down. Crazy dad, right?

And dad got the balloon, and dad got, Kipper, look what I have found, your balloon. Oh, no, said dad. Kipper got a green balloon, so that was not Kipper’s. Dad, but thank you for the effort, I know you love your son so much, but next time, don’t climb onto a statue. OK?`,
      extensionCn: `Susan，我要气球。你要气球？好啊。这本叫《Kipper的气球》。街上有个流动小贩，卖孩子们的玩具。你看到了什么？气球，还有一个吓人的蜘蛛玩具。别怕，那只是玩具。

妈妈爸爸带Kipper去逛街。这里有宠物店、鱼和薯条店，还有垃圾桶。看到流动小贩了。Kipper说：妈妈爸爸，我要气球。Kipper付了一枚硬币，买了气球：我要红色的。爸爸催他快点。

然后他们进了超市。砰！气球被门夹爆了。好倒霉。刚进超市就爆了。这里是客服台，有问题可以来这里。

于是Kipper又去买一个。红色没有了，红色在另一个小女孩手里。爸爸去男厕。其他孩子也在排队买玩具。

爸爸看到一个红气球，以为是Kipper的。其实不是，应该是那个女孩没抓稳，气球飞走了。买气球要握紧哦。

爸爸追气球：那是Kipper的气球！他一路追，差点撞到人。气球一直飞，爸爸一直追。

爸爸爬上雕像去拿气球。这是违规的，不能爬。最后拿到了，但警察说：先生，下来，不能这样。爸爸只好下来。真是疯狂的爸爸。

爸爸拿着气球回来：Kipper，看我找到你的气球了。哦不，Kipper拿的是绿色气球，所以那不是他的。爸爸虽然搞错了，但用心了。下次别爬雕像了。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-35",
      level: "l2",
      episode: "L235",
      title: "Spots",
      extensionEn: `Today we are gonna read this book, Spots! Spots? Where are the spots? All over Kipper’s face. What’s wrong? Yes, what’s wrong with Kipper? I think Kipper must have got the chicken pox. What is chicken pox? The chicken pecked him? No, chicken pox is a very contagious disease, OK? It’s highly infectious. If you get it, you may pass it onto your family, to mum, to your dad, to everyone in your home, OK? How does it feel to have chicken pox? Well, you may have something called blisters and then after the blisters gone, you may have scab and you will have red spots and you feel itchy, and sometimes you have a headache, and a swollen neck and then you will have a fever, you don’t want to eat anything, OK? It feels very terrible, and when you have this chicken pox, you’d better lie in the bed, OK? So let’s see, oh, no! Kipper looks into the mirror, and Kipper says what are these? Er-oh!

Kipper had spots. Oh, I am so sorry. Now look, here is the thermometer, so that means Kipper has a fever, probably. And then daddy is giving Kipper water. We need to call the doctor. Yes, let the family doctor come.

What’s wrong with Biff and Chip? What’s wrong with Biff and Chip? Biff and Chip had spots too. Oh, no! Now look at dad, dad was surprised, what! Oh, no! Now the tea was poured everywhere. All the children have got the spots.

Yes, and the doctor came. Look, the doctor is checking them on. And in the bag, you can see a lot of medical tools, OK? And now the doctor is listening to Chip’s heart and lungs, like breathe in, breathe out, breathe in, breathe out. And she is also listening to the heart beat, boom, boom, boom. Look how terrible they are feeling, they must feel miserable. Stay in bed, she said. Everyone must stay in bed. You will feel very tired when you get this.

Now mum had spots. What? There are five people in the family, and four have got the chicken pox. Really infectious, OK? Now stay in bed, too. Said the doctor. What is the doctor doing? The doctor is measuring her heartbeat, OK?

Alright, now dad looked after everyone. Good job, dad! Dad has cooked some yummy food. Here is beef, and some grapes and the water, and daddy even prepared flowers. OK, now, everyone, stay in bed, I am gonna take good care of you. Look, I have got yummy food for you. Look, Floppy is helping too. Floppy has brought the newspaper. If you feel bored, you can read the newspaper.

Where is daddy? Here is daddy. Daddy is standing behind the very long bed sheet. And what is daddy doing? Daddy is hanging the clothes, OK? Daddy has taken the laundry out. Daddy is very busy now because only he can take care of others. So daddy is preparing the food, taking care of the sick and doing the laundry, everything around the house, right? And even the neighbors were watching. What is he busy doing here?

Where is daddy now? Daddy went shopping in the supermarket. This is a very busy supermarket. And daddy is buying groceries. Look, daddy has bought many many things, margarine, hammer, and some jam, and even a big turkey and lots of food. Wait a minute, daddy, I think you are standing at the wrong lane. Here, it says eight items or less, and cash only. What does that mean? That means if you buy more than eight items, more than eight things, you can not pay here. Daddy, you are at the wrong lane. And you can only pay by cash. What does cash mean? Well, cash means the paper money, OK? But here daddy is paying by the cheque. Is it right? No, that’s wrong, OK? So but anyway, I think daddy is too busy to take notice of all the signs here. What a job, said dad. He is too busy, OK?

Now everyone got better. Look at them, they are so... Are they happy? I don’t think they are very happy, right? Oh, no! Said mum. Why? Since now they are recovered, why are they not happy? Oh, look, mum got oh, no! Something bad happened to dad. What do you think? I know, dad has got the spots.

Ta-da! Dad had spots. OK, so everyone in the family got the spots. This is what might happen when anyone of your family member gets the spots, it gonna pass onto anyone else. But now it’s the family’s turn to look after dad. Look, mum has prepared the food, there is the turkey leg, I guess, and Floppy has got a bone. A jig saw puzzle, wow, Kipper has brought the jig saw puzzle for dad to play. And Biff has got a book. So take a good rest, dad!`,
      extensionCn: `今天我们读《斑点》。斑点在哪？Kipper脸上。怎么了？我想Kipper得了水痘。水痘不是被鸡啄，是一种传染性很强的病。得了会传给家人。水痘会怎样？会起水泡，结痂，身上有红点，很痒，还可能头痛、脖子肿、发烧、没胃口。很难受，所以要躺床上。

Kipper照镜子：这些是什么？哎呀，Kipper有斑点。温度计说明他发烧了。爸爸给他水。要叫医生。

Biff和Chip怎么了？他们也有斑点。哦不，爸爸震惊，茶都洒了。三个孩子都得了水痘。

医生来了，检查他们。医生用听诊器听Chip的心肺：吸气、呼气。她说：都要卧床休息，会很疲惫。

妈妈也有斑点。家里五个人，四个得了水痘，传染性很强。医生让妈妈也卧床。医生在测她的心跳。

爸爸照顾大家。爸爸做了好吃的，牛肉、葡萄、水，还准备了花。Floppy也帮忙，带来报纸给大家解闷。爸爸还要洗衣服、做饭、照顾病人，忙得团团转。邻居在看：他在忙什么？

爸爸去超市采购，买了很多东西：黄油、果酱、火鸡等。可他站错了收银台，这是“八件以内、仅收现金”的通道。爸爸买太多，又用支票付款，不符合规定。但他太忙了没注意。

后来大家都好了。妈妈却说：哦不！怎么了？原来爸爸也得了水痘。最后全家都轮流照顾爸爸。妈妈做了吃的，Floppy有骨头，Kipper拿拼图给爸爸玩，Biff拿书。爸爸好好休息吧。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "l2-36",
      level: "l2",
      episode: "L236",
      title: "Kipper’s Birthday",
      extensionEn: `Monkey, monkey, let’s sing a song. Happy birthday song! Why, Susan? It’s Kipper’s birthday. Ready? Go! Happy birthday to you! Happy birthday to you! Happy birthday to Kipper! Happy birthday to you! Happy birthday, Kipper! Today is Kipper’s birthday. So why don’t we go and take a look at the party. There are so many people. I believe Kipper must be very happy, OK? So let’s see what happened.

Wow, Kipper has got so many gifts. That’s why children love parties. You know, when your friends come, everyone will give a gift. Wow, look how happy Kipper is! It was Kipper’s birthday. Wow, so many gifts! Which one do you think he can open first? May be this one, right? OK!

Now Kipper wanted a party. And everyone wanted to come. So what is Kipper giving to everyone? It’s an invitation card, OK? Invitation card, that means, here is an invitation to you, would you like to come to my party? Here it says please come to my party, Kipper. And it’s on Saturday. Wow, look, how excited everyone is! Yeah! I got the invitation. I can go to party! Happy! You know, at a party, children play together, you eat a cake, happy time!

Wow, so everyone is preparing for the party, right? Yes, look, Biff put up balloons. They have so many colorful balloons. Kipper is dressing Floppy. Now put on this beautiful hat, it is pretty. Mum made a cake. Wow, I love this cake. What flavor do you think it is? I think it looks like peanut flavor. And how many candles can you see? One, two, three, four, five, so Kipper is five years old? Alright!

So dad took a sandwich. Hey, dad, not yet. Dad, don’t take the food yet. Yes, not the time. So stop it, said mum. Let’s look at what mum has prepared. Wow, cupcakes, sandwiches, salad, cake,

cookies, and juice, so yummy and tarts. Which one would you like to eat? I want to eat lots and lots of bananas, right? OK, lots and lots of bananas. And I believe, look, Floppy likes the tarts. What do I like? I like the sandwiches because I think they are healthier, you know. What is daddy doing? Daddy is putting some powder in the washing machine, so that he can wash some clothes, but take a close look at the box, here it says not for use in washing machines, not for use in the washing machines, dad, you are putting the wrong thing into the washing machine. This one will make lots and lots of bubbles. That’s not good.

Ding-dong, ding-dong! Everyone came to the party. Hello, Kipper, happy birthday! Here is the gift. Everyone is so happy. And look at Floppy, so many people are coming. Happy! And Kipper is ripping all those wrapping paper and he goes, yeah, a new gift, toy car and new books. So happy!

What do you want for your birthday? I want a banana tree. OK, banana tree. I will remember that, when your birthday comes, I will buy you a banana tree, OK? Alright!

So dad wanted to play a game. What game did dad want to play? This is called pinning the tail on the donkey game, OK? Now here is the tail, like monkey has a long tail, OK? Now daddy is trying to pin it on the board. Here is a donkey. But first, we have to blind fold daddy, OK? Blind fold. And then you have to spin this person like spin, spin, spin, so that he feels very dizzy, and he doesn’t know which way to go. And then you need to tell this person, left, left, forward, forward, backward, up and down, left, you know, and then he will try to pin the tail where he thinks it should be. But sometimes it could be funny like pin it right on the eye, eh! OK! Wait a minute, I don’t think the children are playing with daddy. But Kipper put the television on. So everyone is watching the cartoon so happily. OK!

Oh, dear! What happened in the kitchen? Oh, the bubbles overflew the machine. Oh, dear! There are so many bubbles. Oh, no! Said mum, what a mess! Who did this? It was daddy’s fault. Daddy put the wrong thing.

Oh, dear! The children played with the bubbles. Oh, finally they didn’t watch TV, everyone was so happy playing with the bubbles. Pop, pop, pop, so many bubbles. And look at him, he is dressed himself as an old man with mustache, and beard, and white hair. Oh, dear! That’s so much fun. And look at Floppy, mustache, that’s so funny. OK, everyone is having a lot of fun playing the bubbles. What a good party! Everyone said. Of course, you don’t get to play bubbles so happily very often. And then mum and dad had to clean it up. Of course, it was a lot of work. But then everyone said, it was a good party. So they felt good about themselves. Yes, we prepared a very good party.`,
      extensionCn: `猴子，来唱歌！生日歌！为什么？今天是Kipper的生日。准备，开始！祝你生日快乐！今天是Kipper生日，我们去看看派对吧。好多朋友，Kipper一定很开心。

Kipper收到了很多礼物，这就是孩子喜欢派对的原因。朋友来都会送礼物。Kipper很开心。先拆哪一个呢？

Kipper发邀请卡给大家：请来参加我的派对，周六。大家都很兴奋。

大家开始准备派对。Biff挂气球，Kipper给Floppy戴漂亮的帽子。妈妈做了蛋糕。你觉得是什么口味？我觉得像花生味。蜡烛有五根，Kipper五岁了。

爸爸拿起三明治，妈妈说：还没到时候！看看妈妈准备的食物：纸杯蛋糕、三明治、沙拉、蛋糕、饼干、果汁、塔点心，好香。你想吃哪个？我想吃很多香蕉。Floppy喜欢塔点心。我喜欢三明治，健康一点。

爸爸在洗衣机里倒粉。看盒子写着“不可用于洗衣机”。爸爸放错东西了，会起很多泡泡。

叮咚！大家来派对：生日快乐！送你礼物。Kipper拆礼物：玩具车、新书。好开心！

你生日想要什么？我想要香蕉树。好，到你生日我送你香蕉树。

爸爸想玩游戏：给驴子贴尾巴。先蒙住眼睛，再转圈，晕头转向后按指令贴尾巴，可能会贴到眼睛上，很搞笑。但孩子们没有玩这个，而是打开电视看动画。

厨房出事了：洗衣机泡泡溢出来了。妈妈：一团糟！是谁干的？是爸爸放错了东西。

孩子们玩泡泡，最后没看电视，大家都玩得很开心。有人用泡泡当胡子、头发，Floppy也成了小胡子狗。派对很成功，大家都说很好玩。妈妈爸爸虽然要收拾，但也觉得很值得。`,
      vocabulary: [],
      qa: [],
    },
  ]
};

// 所有级别数据
export const oxfordTreeLevels: OxfordLevel[] = [
  oxfordTreeL1,
  oxfordTreeL2,
  // 后续可以添加L3等级别
];

// 根据ID获取绘本
export function getOxfordBookById(id: string): OxfordBook | undefined {
  for (const level of oxfordTreeLevels) {
    const book = level.books.find(b => b.id === id);
    if (book) return book;
  }
  return undefined;
}

// 根据级别获取绘本列表
export function getOxfordBooksByLevel(levelId: string): OxfordBook[] {
  const level = oxfordTreeLevels.find(l => l.id === levelId);
  return level?.books || [];
}
