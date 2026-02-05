export interface RazBook {
  id: string;
  level: string;
  episode: string;
  title: string;
  extensionEn: string;
  extensionCn: string;
  vocabulary: { word: string; phonetic: string; meaning: string }[];
  qa: { question: string; answer: string }[];
}

export interface RazLevel {
  id: string;
  name: string;
  description: string;
  bookCount: number;
  color: string;
  books: RazBook[];
}

export const razLevelB: RazLevel = {
  id: "b",
  name: "Level B",
  description: "RAZ B 级别，适合启蒙早期，句型简单、节奏明快。",
  bookCount: 99,
  color: "from-sky-400 to-blue-500",
  books: [
    {
      id: "b-01",
      level: "b",
      episode: "B01",
      title: "Taking Care of Chase",
      extensionEn: `I feed my new dog.

This book is called "Taking Care of Chase."
Chase is the dog's name. Chase
The girl has a new pet.
It is a dog.
The dog is small and fluffy.
The girl is feeding the dog.
The dog is eating food.
I walk my new dog.

The girl is walking the dog on the road.
The dog is walking in the front.
The girl is holding the leash and walking behind.
We need to hold the leash when we walk the dog.
I wash my new dog.

Where are they?
They are in the bathroom.
What are they doing?
The girl is giving the dog a bath.
The girl is pouring water on the dog.
The dog is wet.
I dry my new dog.

They finished bathing.
The girl is using the towel to dry the dog.
The dog is clean now.
I brush my new dog.

What's this?
It's a brush.
The girl is brushing the dog with the brush.
She is brushing out the tangles.
I pet my new dog.

The dog is beautiful.
The dog's fur is soft and fluffy again.
The dog is sitting on the stone.
The girl is petting the dog.
I love my new dog.

The dog makes the girl happy.
The dog is lying in its bed.
The girl is cuddling with the dog.
They are snuggling up to each other.
Do you remember the name of the dog?
It's Chase.
My new dog loves me.

The dog is licking the girl.
They are friends.
They do everything together.
Do you want to have a pet?
Do you want to have a dog?
What would you name it?`,
      extensionCn: `我喂我的新狗狗。

这本书的名字叫《照顾 Chase》。
是这只狗的名字。
小女孩有了一只新宠物。
那是一只狗。
狗狗又小又毛茸茸的。
小女孩正在喂狗。
狗狗正在吃东西。
我带我的新狗狗散步。

小女孩正在路上遛狗。
狗狗在前面走。
小女孩牵着狗绳走在后面。
遛狗时我们要牵好狗绳。
我给我的新狗狗洗澡。

他们在哪里？
他们在浴室里。
他们在做什么？
小女孩在给狗狗洗澡。
小女孩在给狗狗浇水。
狗狗湿了。
我给我的新狗狗擦干。

他们洗完澡了。
小女孩正在用毛巾擦干狗狗。
狗狗现在很干净。
我给我的新狗狗梳毛。

这是什么？
这是一把梳子。
小女孩正在用梳子给狗狗梳毛。
她把所有的打结都梳开了。
我抚摸我的新狗狗。

狗狗很漂亮。
狗狗的毛发又软又蓬松。
狗狗坐在石头上。
小女孩正在抚摸狗狗。
我爱我的新狗狗。

狗狗让小女孩很开心。
狗狗躺在它的床上。
小女孩和狗狗依偎在一起。
他们紧紧依偎在一起。
你还记得狗狗的名字吗？
它叫 Chase。
我的新狗狗爱我。

狗狗在舔小女孩。
他们是朋友。
他们什么都一起做。
你想养宠物吗？
你想养狗狗吗？
你想给它取什么名字？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-02",
      level: "b",
      episode: "B02",
      title: "The Pet Rats",
      extensionEn: `The Pet Rats Eat.

What can you see on the page?
We can see two rats.
One is black, and the other is gray.
They are eating.
The black one is eating broccoli.
The gray one is eating rat food.
Look at their tails, they are so long!
The Pet Rats Drink.

The gray one is drinking from the bottle.
The black one is waiting for its turn.
Look, there are bubbles in the water!
The Pet Rats Chew.

Look at their teeth, they are sharp!
They like to chew.
They are chewing on wood.
The black one is chewing on a thin piece of wood.
The gray one is chewing on a thick piece of wood.
The Pet Rats Climb.

The gray one is climbing up the pipe.
It’s climbing high, holding the pipe tight.
The black one is looking up, ready to climb.
The Pet Rats Hide.

The gray one is hiding in the bottle.
Its long tail is sticking out of the bottle.
The black one is hiding under the wooden tunnel.
There is a ball there.
These are all their toys.
The Pet Rats Run.

The black one is on top, climbing a wooden board.
The gray one is down below, running on a red wheel.
Can you see the ball?
It’s at the bottom left of the picture.
The Pet Rats Sleep.

What are they doing?
They are sleeping.
The black one is resting its head on the gray one’s back.
Let’s be quiet, don’t wake them.
Rats Are Fun Class Pets.

Look at the kids, they are playing with the rats.
The girl is holding a rat in her hand.
The boy is patting the rat.
The other rat is in the cage.
The boy is feeding the rat.
Do you want to play with pet rats?`,
      extensionCn: `老鼠们在吃东西。

你在这页上能看到什么？
我们能看到两只老鼠。
一只是黑色的，另一只是灰色的。
它们正在吃东西。
黑色的那只在吃西兰花。
灰色的那只在吃鼠粮。
看看它们的尾巴，它们好长啊！
老鼠们在喝水。

灰色的那只正在从瓶子里喝水。
黑色的那只正在等它的轮次。
看，水里有气泡！
老鼠们在啃咬。

看看它们的牙齿，它们好锋利！
它们喜欢啃咬。
它们正在啃木头。
黑色的那只在啃一块细木头。
灰色的那只在啃一块粗木头。
老鼠们在爬。

灰色的那只正在爬管子。
它爬得很高，紧紧抓着管子。
黑色的那只在向上看，准备爬。
老鼠们在藏猫猫。

灰色的那只藏在瓶子里。
它的长尾巴露出了瓶子外面。
黑色的那只藏在木制隧道下面。
那里有个球。
这些都是它们的玩具。
老鼠们在跑步。

黑色的那只在上面，正在爬一块木板。
灰色的那只在下面，正在跑一个红色的轮子。
你能看到球吗？
它在图片的左下角。
老鼠们在睡觉。

它们在做什么？
它们在睡觉。
黑色的那只把头靠在灰色的那只的背上。
我们要安静点，不要吵醒它们。
老鼠是有趣的班级宠物。

看看孩子们，他们在和老鼠玩。
女孩手里拿着一只老鼠。
男孩正在轻拍老鼠。
另一只老鼠在笼子里。
男孩在喂老鼠。
你想和宠物老鼠玩吗？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-03",
      level: "b",
      episode: "B03",
      title: "Gracie's Nose",
      extensionEn: `Gracie’s nose is very busy. Gracie

Look at the page. There's a girl and a dog.
This book is called Gracie's Nose.
Who is Gracie? Gracie
Gracie is the dog. Gracie
Why is Gracie's nose so busy?
Let's keep reading to find out.
Gracie’s nose sniffs everything. Gracie

What does 'sniff' mean? "sniff"
Watch me. Look at my nose.
This is sniffing.
Dogs are good at sniffing.
They have sharp noses.
Where is Gracie? Gracie
She’s in the garden. There are birds, butterflies, trees, flowers, and grass.
Gracie sniffs roses. Gracie

What are these?
These are roses.
They are beautiful and smell good.
There are bees collecting nectar.
What is Gracie doing? Gracie
Gracie is sniffing the roses. Gracie
How do the roses smell?
They must smell good.
Gracie sniffs bugs. Gracie

What is this?
It's a mantis.
What are these?
These are ants.
They are all bugs.
What is Gracie doing? Gracie
Gracie is sniffing the bugs. Gracie
Gracie sniffs birds. Gracie

What can you see on the page?
Gracie, frogs, and birds. Gracie、
Gracie jumps into the puddle. Gracie
The frogs are scared and jump out.
The birds are scared and fly away.
Gracie sniffs my lunch. Gracie

What can you see on the page?
A picnic blanket, a picnic basket, a banana, two apples, sandwiches, and a water bottle. .
This is the girl's lunch.
Gracie is sniffing the girl's lunch. Gracie
Maybe Gracie is hungry and wants to eat something.
Gracie sniffs my ear. Gracie

What is Gracie doing? Gracie
Gracie is sniffing the girl's ear. Gracie
The girl looks so happy.
Dogs like to sniff people.
Dogs show their love by sniffing.
Gracie sniffs my toes! Gracie

What is Gracie doing now? Gracie
Gracie is sniffing the girl's toes. Gracie
They look so happy.
What else can you see on the page?
An apple core.
It's been eaten, leaving only the core now.`,
      extensionCn: `的鼻子非常忙碌。

看看这页，这里有一个女孩和一只狗。
这本书叫《Gracie的鼻子》。
是谁？
是这只狗。
为什么Gracie的鼻子这么忙？
我们继续读下去看看。
的鼻子嗅遍一切。

是什么意思？
看着我，看我的鼻子。
这就是嗅。
狗擅长嗅东西。
它们的鼻子很敏锐。
在哪儿？
她在花园里。那里有鸟、蝴蝶、树、花和草。
嗅玫瑰。

这些是什么？
这些是玫瑰。
它们很美丽，闻起来很香。
有蜜蜂在采蜜。
在做什么？
正在嗅玫瑰。
玫瑰闻起来怎么样？
它们一定闻起来很香。
嗅虫子。

这是什么？
这是一只螳螂。
这些是什么？
这些是蚂蚁。
它们都是虫子。
在做什么？
正在嗅虫子。
嗅鸟。

你能在这页看到什么？
青蛙和鸟。
跳进了水坑。
青蛙被吓跑了，它们跳出了水坑。
鸟被吓跑了，它们飞走了。
嗅我的午餐。

你能在这页看到什么？
一张野餐毯、一只野餐篮，一根香蕉、两个苹果、三明治和一个水杯。
这是女孩的午餐。
正在嗅女孩的午餐。
也许Gracie饿了，想吃点东西。
嗅我的耳朵。

在做什么？
正在嗅女孩的耳朵。
女孩看起来很开心。
狗喜欢嗅人。
狗通过嗅来表达它们的爱。
嗅我的脚趾！

现在在做什么？
正在嗅女孩的脚趾。
她们看起来很开心。
你还能在这页看到什么？
它只剩下了一个苹果核。
它已经被吃掉了，现在只剩下核。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-04",
      level: "b",
      episode: "B04",
      title: "Playful Puppy",
      extensionEn: `Puppy sees a little mouse.

This is a small dog; it's a puppy.
What color is the puppy?
It's yellow.
Puppy sees a little mouse.
Can you see the little mouse?
Puppy wants to play with the mouse.
Puppy is happy.
Let it be, Puppy.

The girl doesn’t want the puppy to play with the mouse.
The girl waves her finger and says, "No."
Look, the mouse is going away.
Puppy is a little sad.
Puppy sees a little frog.

Can you see the little frog?
The frog is sitting on the stone.
Puppy wants to play with the frog.
Puppy is leaning on the stone and looking at the frog.
Puppy is happy.
Let it be, Puppy.

The girl doesn’t want the puppy to play with the frog.
The girl waves her finger and says, "No."
Look, the frog is jumping into the river.
Puppy is a little sad.
Puppy sees a little turtle.

Can you see the little turtle?
Puppy wants to play with the turtle.
Puppy is sniffing the turtle.
Let it be, Puppy.

The girl doesn’t want the puppy to play with the turtle.
The girl waves her finger and says, "No."
Look, the turtle is going away.
Puppy is sad.
Look at the puppy's ears and tail.
They are down.
Puppy sees a little ball.

Puppy is so happy.
Can you see the little ball?
What color is the ball?
It’s yellow and black, just like the puppy.
Puppy wants to play with the ball.
Get the ball, Puppy.

What will the girl do this time?
The girl wants the puppy to play with the ball.
Get the ball, Puppy.
Puppy is so happy now.`,
      extensionCn: `小狗看到了一只小老鼠。

这是一只小狗。
它是什么颜色的？
它是黄色的。
小狗看到了一只小老鼠。
你能看到那只小老鼠吗？
小狗想和老鼠玩耍。
小狗很开心。
不要管它，小狗。

女孩不想让小狗和老鼠玩耍。
女孩挥动手指说“不”。
看，老鼠走开了。
小狗有点难过。
小狗看到了一只小青蛙。

你能看到那只小青蛙吗？
青蛙坐在石头上。
小狗想和青蛙玩耍。
小狗趴在石头上，看着青蛙。
小狗很开心。
不要管它，小狗。

女孩不想让小狗和青蛙玩耍。
女孩挥动手指说“不”。
看，青蛙跳进河里了。
小狗有点难过。
小狗看到了一只小乌龟。

你能看到那只小乌龟吗？
小狗想和乌龟玩耍。
小狗在嗅乌龟。
随它去吧，小狗。

女孩不想让小狗和乌龟玩耍。
女孩挥动手指说“不”。
看，乌龟走开了。
小狗很难过。
看看小狗的耳朵和尾巴。
它们都垂下来了。
小狗看到了一只小球。

小狗非常开心。
你能看到那个小球吗？
球是什么颜色的？
它是黄色和黑色的，就像小狗一样。
小狗想和球玩耍。
拿球来，小狗。

这次女孩会怎么做呢？
女孩希望小狗和球玩耍。
拿球来，小狗。
小狗现在非常开心。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-05",
      level: "b",
      episode: "B05",
      title: "My Pet Dinosaur",
      extensionEn: `My pet dinosaur can fetch.

What can you see?
A boy and a dinosaur.
What are they doing?
They are playing basketball.
The dinosaur can fetch the ball.
The dinosaur fetches the ball with its mouth.
Oh no, the ball is broken; it’s leaking.
My pet dinosaur can sit.

Oh no, look at the car; it’s flattened.
The dinosaur can sit, but it’s so big.
And the dinosaur put its tail on the car.
They need to repair the car now.
My pet dinosaur can shake hands.

What are they doing?
They are shaking hands.
The dinosaur is so tall.
The boy is lifted up into the air.
And look at their hands.
The boy’s hands are small.
The dinosaur’s hands are big.
My pet dinosaur can beg.

The dinosaur is begging.
It’s so cute.
Look, it’s putting its hands like this.
What is the dinosaur begging for?
Look at the boy’s hands.
There’s a bunch of carrots.
It’s begging for carrots.
My pet dinosaur can lie down.

The dinosaur is lying on the grass.
Oh no, look at the tree; it’s tilting.
What is the boy doing?
He’s cleaning the dinosaur’s nose.
Why is the boy cleaning the dinosaur’s nose?
Maybe the dinosaur’s nose feels uncomfortable.
My pet dinosaur can roar.

The dinosaur is roaring.
Wow, its mouth is so big.
It’s bigger than the boy’s head.
The boy’s hair is blowing up into the air.
My pet dinosaur can lick.

The dinosaur is licking the boy’s face.
The dinosaur likes the boy.
Look at the big tongue and drool.
The boy is happy and falls to the ground.
I bet it must tickle.
My pet dinosaur cannot hide.
What are they doing now?
They are playing hide and seek.
The boy is the seeker.
Cover your eyes, no peeking.
The dinosaur is hiding behind the tree.
But it’s too big; it can’t hide itself.`,
      extensionCn: `我的宠物恐龙会捡东西。

你能看到什么？
一个男孩和一只恐龙。
他们在做什么？
他们在打篮球。
恐龙会捡球。
恐龙用嘴巴捡球。
哦不，球破了，正在漏气。
我的宠物恐龙会坐下。

哦不，看那辆车，它被压扁了。
恐龙会坐下，但它太大了。
恐龙把尾巴放在车上了。
他们现在需要修理车了。
我的宠物恐龙会握手。

他们在做什么？
他们在握手。
恐龙好高。
男孩被举到空中。
看看他们的手。
男孩的手很小。
恐龙的手很大。
我的宠物恐龙会乞求。

恐龙在乞求。
它好可爱。
看，它把手这样放着。
恐龙在乞求什么？
看看男孩的手。
有一串胡萝卜。
它在乞求胡萝卜。
我的宠物恐龙会躺下。

恐龙躺在草地上。
哦不，看那棵树，它歪了。
男孩在做什么？
他在清理恐龙的鼻子。
为什么男孩在清理恐龙的鼻子？
可能恐龙的鼻子感觉不舒服。
我的宠物恐龙会吼叫。

恐龙在吼叫。
哇，它的嘴巴好大。
它比男孩的头还大。
男孩的头发被吹起来了。
我的宠物恐龙会舔。

恐龙在舔男孩的脸。
恐龙喜欢男孩。
看看那条大舌头和口水。
男孩很开心，倒在地上。
我敢打赌这一定很痒。
我的宠物恐龙不会躲藏。
他们现在在做什么？
他们在玩捉迷藏。
男孩是寻找者。
捂住眼睛，不要偷看。
恐龙躲在树后。
但它太大了，藏不住自己。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-06",
      level: "b",
      episode: "B06",
      title: "On the Farm",
      extensionEn: `A dog is in a house.

What's the animal?
It's a dog.
Where is it?
It's in a house.
What is it doing?
It's lying down.
A dog is lying down on the ground in a house.
A cow is in a barn.

What's the animal?
It's a cow.
Where is it?
It's in a barn.
What is it doing?
It's eating grass.
A cow is eating grass in a barn.
A pig is in the mud.

What's the animal?
It's a pig.
Where is it?
It's in the mud.
What is it doing?
It's rolling.
A pig is rolling in the mud.
A chicken is in the hay.

What's the animal?
It's a chicken.
Where is it?
It's in the hay.
What is it doing?
It's clucking.
A chicken is clucking in the hay.
A goat is in a field.

What's the animal?
It's a goat.
Where is it?
It's in a field.
What is it doing?
It's jumping.
A goat is jumping in a field.
A duck is on a pond.

What's the animal?
It's a duck.
Where is it?
It's on a pond.
What is it doing?
It's swimming.
A duck is swimming on a pond.
A sheep is on a hill.

What's the animal?
It's a sheep.
Where is it?
It's on a hill.
What is it doing?
It's jumping.
A sheep is jumping on a hill.
Animals are on a farm.

What are these animals?
A chicken, a cow, a sheep, a goat, a pig, a duck, a dog.
Where is the...? ...
Can you see the...?
Good job./Well done.
How many animals are there?
Let's count.
One, two, three, four, five, six, seven.
There are seven animals.`,
      extensionCn: `一只狗在房子里。

这是什么动物？
这是一只狗。
它在哪里？
它在房子里。
它在做什么？
它在趴着。
一只狗在房子里趴在地上。
一头牛在谷仓里。

这是什么动物？
这是一头牛。
它在哪里？
它在谷仓里。
它在做什么？
它在吃草。
一头牛在谷仓里吃草。
一头猪在泥里。

这是什么动物？
这是一头猪。
它在哪里？
它在泥里。
它在做什么？
它在翻滚。
一头猪在泥里翻滚。
一只鸡在干草堆里。

这是什么动物？
这是一只鸡。
它在哪里？
它在干草堆里。
它在做什么？
它在咯咯叫。
一只鸡在干草堆里咯咯叫。
一只山羊在田野里。

这是什么动物？
这是一只山羊。
它在哪里？
它在田野里。
它在做什么？
它在跳跃。
一只山羊在田野里跳跃。
一只鸭子在池塘里。

这是什么动物？
这是一只鸭子。
它在哪里？
它在池塘里。
它在做什么？
它在游泳。
一只鸭子在池塘里游泳。
一只绵羊在山上。

这是什么动物？
这是一只绵羊。
它在哪里？
它在山上。
它在做什么？
它在跳跃。
一只绵羊在山上跳跃。
动物们在农场里。

这些动物是什么？
一只鸡、一头牛、一只绵羊、一只山羊、一头猪、一只鸭子、一只狗。
在哪里？
你能看到...吗？
干得好。
这里有多少只动物？
让我们来数一数。
一、二、三、四、五、六、七。
这里有七只动物。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-07",
      level: "b",
      episode: "B07",
      title: "Bonkers Likes to Bark",
      extensionEn: `Bonkers likes to bark.

What's this?
This is a dog.
Its name is Bonkers.
It's sitting on the steps.
What is Bonkers doing?
Bonkers is barking.
Woof, woof!
It likes to bark.
Bonkers likes to bark at cars.

What can you see on this page?
We can see Bonkers and cars.
How many cars are there?
There are two cars.
A red car and a yellow car.
What is Bonkers doing?
Bonkers is barking at cars.
Bonkers likes to bark at cats.

What can you see on this page?
We can see Bonkers and cats.
How many cats are there?
There are two cats.
The cats like to lick their paws.
Bonkers likes to bark at cats.
Bonkers likes to bark at bikes.

What can you see on this page?
We can see Bonkers and two kids riding bikes.
The boy is riding in the front.
The girl is riding in the back.
They are both wearing helmets.
What is Bonkers doing?
Bonkers is barking at bikes.
Bonkers likes to bark at squirrels.

What can you see on this page?
We can see Bonkers and squirrels.
How many squirrels are there?
There are three squirrels.
What is Bonkers doing?
Bonkers is barking at squirrels.
Bonkers likes to bark at kids.

What can you see on this page?
We can see Bonkers and kids.
How many kids are there?
There are four kids.
What is Bonkers doing?
Bonkers is barking at kids.
Bonkers wants to play with the kids.
Bonkers likes to bark at birds.

What can you see on this page?
We can see Bonkers and birds.
How many birds are there?
There are three birds.
What is Bonkers doing?
Bonkers is barking at birds.
Bonkers wants to play with the birds.
Bonkers likes to bark at Bonkers!

What can you see on this page?
We can see Bonkers and Bonkers' reflection in the mirror.
What is Bonkers doing?
Bonkers is barking at Bonkers.`,
      extensionCn: `邦克斯喜欢叫。

这是什么？
这是一只狗。
它的名字是邦克斯。
它正坐在台阶上。
邦克斯在做什么？
邦克斯在叫。
汪，汪！
它喜欢叫。
邦克斯喜欢对着车叫。

你在这页能看到什么？
我们能看到邦克斯和汽车。
这里有几辆车？
有两辆车。
一辆红色的车和一辆黄色的车。
邦克斯在做什么？
邦克斯在对着车叫。
邦克斯喜欢对着猫叫。

你在这页能看到什么？
我们能看到邦克斯和猫。
这里有几只猫？
有两只猫。
这些猫喜欢舔爪子。
邦克斯喜欢对着猫叫。
邦克斯喜欢对着自行车叫。

你在这页能看到什么？
我们能看到邦克斯和两个骑自行车的小孩。
男孩骑在前面。
女孩骑在后面。
他们都戴着头盔。
邦克斯在做什么？
邦克斯在对着自行车叫。
邦克斯喜欢对着松鼠叫。

你在这页能看到什么？
我们能看到邦克斯和松鼠。
这里有几只松鼠？
有三只松鼠。
邦克斯在做什么？
邦克斯在对着松鼠叫。
邦克斯喜欢对着小孩叫。

你在这页能看到什么？
我们能看到邦克斯和小孩。
这里有几个小孩？
有四个小孩。
邦克斯在做什么？
邦克斯在对着小孩叫。
邦克斯想和小孩们玩。
邦克斯喜欢对着鸟叫。

你在这页能看到什么？
我们能看到邦克斯和鸟。
这里有几只鸟？
有三只鸟。
邦克斯在做什么？
邦克斯在对着鸟叫。
邦克斯想和鸟玩。
邦克斯喜欢对着邦克斯叫。

你在这页能看到什么？
我们能看到邦克斯和镜子里的邦克斯的影子。
邦克斯在做什么？
邦克斯在对着邦克斯叫。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-08",
      level: "b",
      episode: "B08",
      title: "Animal Sounds",
      extensionEn: `Dogs bark.

Look! What animal is this?
It's a dog.
What do dogs say?
What do dogs sound like?
What sound do dogs make?
Dogs bark. Woof woof!
Let's bark like a dog! Woof woof!
Cats meow.

Look! What animal is this?
It's a cat.
What do cats say?
What do cats sound like?
What sound do cats make?
Cats meow. Meow meow!
Let's meow like a cat! Meow meow!
Cows moo.

Look! What animal is this?
It's a cow.
What do cows say?
What do cows sound like?
What sound do cows make?
Cows moo. Moo moo!
Let's moo like a cow! Moo moo!
Pigs oink.

Look! What animal is this?
It's a pig.
What do pigs say?
What do pigs sound like?
What sound do pigs make?
Pigs oink. Oink oink!
Let's oink like a pig! Oink oink!
Birds chirp.

Look! What animal is this?
It's a bird.
What do birds say?
What do birds sound like?
What sound do birds make?
Birds chirp. Chirp chirp!
Let's chirp like a bird! Chirp chirp!
Ducks quack.

Look! What animal is this?
It's a duck.
What do ducks say?
What do ducks sound like?
What sound do ducks make?
Ducks quack. Quack quack!
Let's quack like a duck! Quack quack!
Snakes hiss.

Look! What animal is this?
It's a snake.
What do snakes say?
What do snakes sound like?
What sound do snakes make?
Snakes hiss. Ssss!
Let's hiss like a snake! Ssss!
Bees buzz.

Look! What animal is this?
It's a bee.
What do bees say?
What do bees sound like?
What sound do bees make?
Bees buzz. Bzzz!
Let's buzz like a bee! Bzzz!
Lions roar.

Look! What animal is this?
It's a lion.
What do lions say?
What do lions sound like?
What sound do lions make?
Lions roar. Roarrr!
Let's roar like a lion! Roarrr!
Dads snore.

What is this man doing?
He’s sleeping and snoring.
Does your dad snore?
Can you make a snoring sound like your dad?`,
      extensionCn: `狗汪汪叫。

看！这是什么动物？
这是一只狗。
狗叫声是什么样？
狗叫声是什么样？
狗的叫声是什么样的？
狗汪汪叫！
让我们像狗一样汪汪叫！汪汪！
猫咪喵喵叫。

看！这是什么动物？
这是一只猫。
猫叫声是什么样？
猫叫声是什么样？
猫的叫声是什么样的？
猫喵喵叫！
让我们像猫一样喵喵叫！喵喵！
牛哞哞叫。

看！这是什么动物？
这是一头牛。
牛叫声是什么样？
牛叫声是什么样？
牛的叫声是什么样的？
牛哞哞叫！
让我们像牛一样哞哞叫！哞哞！
猪哼哼叫。

看！这是什么动物？
这是一只猪。
猪叫声是什么样？
猪叫声是什么样？
猪的叫声是什么样的？
猪哼哼叫！
让我们像猪一样哼哼叫！哼哼！
鸟啾啾叫。

看！这是什么动物？
这是一只鸟。
鸟叫声是什么样？
鸟叫声是什么样？
鸟的叫声是什么样的？
鸟啾啾叫！
让我们像鸟一样啾啾叫！啾啾！
鸭子嘎嘎叫。

看！这是什么动物？
这是一只鸭子。
鸭子叫声是什么样？
鸭子叫声是什么样？
鸭子的叫声是什么样的？
鸭子嘎嘎叫！
让我们像鸭子一样嘎嘎叫！嘎嘎！
蛇嘶嘶叫。

看！这是什么动物？
这是一条蛇。
蛇叫声是什么样？
蛇叫声是什么样？
蛇的叫声是什么样的？
蛇嘶嘶声！
让我们像蛇一样嘶嘶叫！嘶嘶！
蜜蜂嗡嗡叫。

看！这是什么动物？
这是一只蜜蜂。
蜜蜂叫声是什么样？
蜜蜂叫声是什么样？
蜜蜂的叫声是什么样的？
蜜蜂嗡嗡叫！
让我们像蜜蜂一样嗡嗡叫！嗡嗡！
狮子吼叫。

看！这是什么动物？
这是一只狮子。
狮子叫声是什么样？
狮子叫声是什么样？
狮子的叫声是什么样的？
狮子吼叫！
让我们像狮子一样吼叫！吼叫！
爸爸打呼噜。

这个人在做什么？
他在睡觉打呼噜。
你爸爸打呼噜吗？
你能模仿爸爸打呼噜的声音吗？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-09",
      level: "b",
      episode: "B09",
      title: "Pond Life",
      extensionEn: `There are plants in the pond.

These are cattails.
These are water lilies.
Plants make the pond green and beautiful.
Plants keep the pond clean.
There are fish in the pond.

Fish swim in the water.
Fish have shiny scales.
Fish hide among the plants.
Fish eat small bugs and plants.
There are snails in the pond.

Snails have long, wiggly antennae.
Snails have sticky, slimy bodies.
Snails have hard, thick shells.
Snails move slowly.
Snails eat plants and leaves.
There are bugs in the pond.

Some bugs run on the water.
This bug crawls on the water.
This is a dragonfly.
The dragonfly rests on the plant.
There are ducks in the pond.

Ducks swim and quack.
They love to play in the water.
Ducks eat plants and small fish.
They have webbed feet for swimming.
There are turtles in the pond.

Turtles have hard shells and swim slowly.
Turtles hide in their shells when scared.
These turtles are standing in line.
These two turtles are taking a rest.
There are beavers in the pond.

Beavers have sharp teeth.
Beavers cut down trees with their teeth.
Beavers build dams.
Beavers make new ponds with their dams.
There are boys in the pond.

Boys play and splash in the water.
Boys catch small fish and look for bugs.
Boys row boats in the water.`,
      extensionCn: `池塘里有植物。

这些是香蒲。
这些是睡莲。
植物让池塘变得绿和美丽。
植物保持池塘清洁。
池塘里有鱼。

鱼在水里游。
鱼有闪闪发光的鳞片。
鱼藏在植物中。
鱼吃小虫子和植物。
池塘里有蜗牛。

蜗牛有长长的触角。
蜗牛身体黏黏的。
蜗牛有坚硬的壳。
蜗牛移动得很慢。
蜗牛吃植物和树叶。
池塘里有虫子。

有些虫子在水面上跑。
这只虫子在水面上爬。
这是一只蜻蜓。
蜻蜓停在植物上。
池塘里有鸭子。

鸭子游泳和嘎嘎叫。
它们喜欢在水里玩。
鸭子吃植物和小鱼。
它们有蹼足用来游泳。
池塘里有乌龟。

乌龟有硬壳，游得很慢。
乌龟害怕时躲在壳里。
这些乌龟排成一行。
这两只乌龟在休息。
池塘里有河狸。

河狸有锋利的牙齿。
河狸用牙齿砍树。
河狸建造坝。
河狸用坝造新的池塘。
池塘里有男孩。

男孩们在水里玩耍和戏水。
男孩们抓小鱼，找虫子。
男孩们在水中划船。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-10",
      level: "b",
      episode: "B10",
      title: "Where ls Water",
      extensionEn: `Water is all around us.

Water is everywhere!
We can see and touch it in many places.
Where do you see water?
Water is in rivers.

This is a river.
A river is long and moves like a snake.
These animals are drinking from the river.
Water is in lakes.

This is a lake.
Lakes are big and calm, like giant ponds.
This boat is rowing on the lake.
Water is in the ocean.

This is the ocean.
The ocean is very, very big!
It has waves and is salty.
There is a beautiful beach here.
Water is in the sky.

Water goes up into the sky.
It becomes clouds.
When it rains, water falls from the sky.
Water is in the pool.

This is a pool.
We can fill a pool with water.
The kids are playing in the pool.
Water is underground.

It moves through the soil and rocks.
This water is called groundwater.
It helps plants grow and can be used by people too.
Where do you see water?

This is a fountain.
A fountain sprays water.
Fountains can be very pretty.
Can you find water around you?
It is all around us!`,
      extensionCn: `水就在我们周围。

我们周围到处都是水！
我们可以在许多地方看到并触摸到水。
你能在哪里看到水？
水在河里。

这是一条河。
河流很长，像蛇一样蜿蜒。
这些动物正在河里喝水。
水在湖里。

这是一个湖。
湖泊很大，平静，就像巨大的池塘。
这艘船正在湖上划行。
水在海里。

这是大海。
海洋非常非常大！
它有波浪，并且是咸的。
这里有一个美丽的海滩。
水在天空中。

水蒸发到空中。
它变成了云。
下雨时，水从天上降下。
水在游泳池里。

这是一个游泳池。
我们可以往游泳池里注水。
孩子们正在游泳池里玩耍。
水在地下。

它在土壤和岩石中流动。
这种水被称为地下水。
它帮助植物生长，也可以被人类使用。
你能在哪里看到水？

这是一个喷泉。
喷泉喷洒水。
喷泉可以非常漂亮。
你能在周围找到水吗？
它在我们周围无处不在！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-11",
      level: "b",
      episode: "B11",
      title: "I Love the Earth",
      extensionEn: `I love the Earth.

We live on Earth.
Earth is a big planet.
There are many things on Earth.
Let's keep reading!
I love the tall trees.

There are trees on Earth.
Some trees are tall, and some are short.
These trees are tall and beautiful.
Do you love them?
I love the bright flowers.

There are flowers on Earth.
Look at the colorful flowers!
Some are red, some are yellow, and some are pink.
Do you like flowers?
What color do you love best?
I love the green hills.

There are hills on Earth.
These hills are green.
They may turn yellow in autumn.
Do you love the green hills?
I love the high mountains.

There are mountains on Earth.
Some are high, and some are short.
Look at the mountains; they are white at the top.
That is snow!
Do you love the high mountains?
I love the long rivers.

There are many rivers on Earth.
Rivers are long.
We can row boats on the rivers.
Do you love the long rivers?
I love the deep lakes.

There are many lakes on Earth.
Lakes are deep.
We can row boats on the lakes.
Do you love the deep lakes?
I love the big oceans.

There are many oceans on Earth.
Oceans are really big.
There are beaches along the ocean.
We can play on the beaches.
Do you love the big oceans?
I love the dry deserts.

There are many deserts on Earth.
There is a lot of sand in the desert.
We can play in the sand in the desert.
I love the Earth!

There are many beautiful things on Earth.
Do you love the Earth?
What do you love best?`,
      extensionCn: `我爱地球。

我们生活在地球上。
地球是一个大行星。
地球上有许多东西。
让我们继续阅读！
我爱高大的树木。

地球上有树。
有些树是高的，有些是矮的。
这些树是高大而美丽的。
你爱它们吗？
我爱明亮的花朵。

地球上有花。
看这些五颜六色的花朵！
有些是红色的，有些是黄色的，还有些是粉色的。
你喜欢花吗？
你最喜欢什么颜色？
我爱绿色的山丘。

地球上有丘陵。
这些山丘是绿色的。
它们在秋天可能会变黄。
你爱绿色的山丘吗？
我爱高耸的山脉。

地球上有山。
有些是高的，有些是矮的。
看那些山，它们的顶部是白色的。
那是雪！
你爱高耸的山脉吗？
我爱长长的河流。

地球上有许多河流。
河流是长的。
我们可以在河上划船。
你爱长长的河流吗？
我爱深深的湖泊。

地球上有许多湖泊。
湖泊是深的。
我们可以在湖上划船。
你爱深深的湖泊吗？
我爱广阔的海洋。

地球上有许多海洋。
海洋真的很大。
海洋沿岸有沙滩。
我们可以在沙滩上玩。
你爱广阔的海洋吗？
我爱干燥的沙漠。

地球上有许多沙漠。
沙漠里有很多沙子。
我们可以在沙漠里玩沙子。
我爱地球！

地球上有许多美丽的事物。
你爱地球吗？
你最爱什么？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-12",
      level: "b",
      episode: "B12",
      title: "Animal Coverings",
      extensionEn: `We have scales.
•
Snakes have smooth scales.
Fish have shiny scales.
Butterflies have colorful scales on their wings.
We have feathers.
•
Seagulls have white and gray feathers.
Flamingos have bright pink feathers.
Penguins have black and white feathers.
We have shells.
•
Land turtles have hard and brown shells.
Sea turtles have green and smooth shells.
Snails have small and spiral-shaped shells.
We have spines.
•
Hedgehogs have sharp spines for protection.
Porcupines have long spines that can stick out.
Blowfish can inflate their bodies and show their spines.
Sea urchins have many hard spines on their shells.
We have armor.
•
Pangolins have tough armor; they protect them from predators.
Ladybugs have bright armor; they help them blend in with flowers.
Crabs have hard armor; they shield them from the ocean's dangers.
We have fur.
•
Dogs have soft fur, and they keep them warm.
Bears have thick fur, and they keep them from the cold.
Rabbits have fluffy fur, and they keep them looking cute.
We have hair.
•
People have hair in different colors and lengths.
Some people have long hair.
Others have short hair.
Hair can be straight, wavy, or curly.
We just have skin.
•
Mexican hairless dogs have no fur.
Sphynx cats are hairless.
Some bald men have shiny heads.`,
      extensionCn: `我们有鳞片。

蛇有光滑的鳞片。
鱼有闪亮的鳞片。
蝴蝶的翅膀有多彩的鳞片。
我们有羽毛。

海鸥的羽毛是白色和灰色的。
火烈鸟的羽毛是鲜艳的粉红色。
企鹅的羽毛是黑色和白色的。
我们有壳。

陆龟的壳是坚硬的棕色的。
海龟的壳是绿色的，光滑的。
蜗牛的壳小而螺旋状。
我们有刺。

刺猬有尖锐的刺来保护自己。
豪猪有长刺，可以竖起来。
河豚可以膨胀身体，展示它们的刺。
海胆的壳上有许多坚硬的刺。
我们有盔甲。

穿山甲的坚硬盔甲保护它们免受捕食者的攻击。
瓢虫的鲜艳盔甲帮助它们与花朵融为一体。
螃蟹的坚硬盔甲保护它们免受海洋的危险。
我们有毛发。

狗的毛很柔软，它让它们保持温暖。
熊的毛很厚，它保护它们免受寒冷的侵袭。
兔子的毛很蓬松，它让它们看起来很可爱。
我们有头发。

人类的头发有不同的颜色和长度。
有些人有长发。
另一些人有短发。
头发可以是直的、波浪状的或卷曲的。
我们只有皮肤。

墨西哥无毛犬没有毛。
薛芬克斯猫是无毛的。
有些秃顶的男人头部光滑。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-13",
      level: "b",
      episode: "B13",
      title: "animal ears",
      extensionEn: `This elephant has big ears.
•
What animal is this?
It's an elephant.
Where are the elephant's ears?
Here they are.
What do their ears look like?
They are big.
This beaver has small ears.
•
What animal is this?
It's a beaver.
Where are the beaver's ears?
Here they are.
What do their ears look like?
They are small.
This fox has pointed ears.
•
What animal is this?
It's a fox.
Where are the fox's ears?
Here they are.
What do their ears look like?
They are pointed.
This bear has round ears.
•
What animal is this?
It's a bear.
Where are the bear's ears?
Here they are.
What do their ears look like?
They are round.
This cat has striped ears.
•
What animal is this?
It's a cat.
Where are the cat's ears?
Here they are.
What do their ears look like?
They are striped.
This puppy has spotted ears.
•
What animal is this?
It's a dog.
Where are the dog's ears?
Here they are.
What do their ears look like?
They are spotted.
This rabbit has long ears.
•
What animal is this?
It's a rabbit.
Where are the rabbit's ears?
Here they are.
What do their ears look like?
They are long.
Does this seal have ears?
•
What animal is this?
It's a seal.
Where are the seal's ears?
We can't see the ears.
Seals' ears are very small.`,
      extensionCn: `这只大象有大耳朵。

这是什么动物？
它是一只大象。
大象的耳朵在哪里？
在这里。
它们的耳朵长什么样？
它们很大。
这只海狸有小耳朵。

这是什么动物？
它是一只海狸。
海狸的耳朵在哪里？
在这里。
它们的耳朵长什么样？
它们很小。
这只狐狸有尖耳朵。

这是什么动物？
它是一只狐狸。
狐狸的耳朵在哪里？
在这里。
它们的耳朵长什么样？
它们是尖的。
这只熊有圆耳朵。

这是什么动物？
它是一只熊。
熊的耳朵在哪里？
在这里。
它们的耳朵长什么样？
它们是圆的。
这只猫有条纹耳朵。

这是什么动物？
它是一只猫。
猫的耳朵在哪里？
在这里。
它们的耳朵长什么样？
它们是有条纹的。
这只小狗有斑点耳朵。

这是什么动物？
它是一只狗。
狗的耳朵在哪里？
在这里。
它们的耳朵长什么样？
它们是有斑点的。
这只兔子有长耳朵。

这是什么动物？
它是一只兔子。
兔子的耳朵在哪里？
在这里。
它们的耳朵长什么样？
它们很长。
这只海豹有耳朵吗？

这是什么动物？
它是一只海豹。
海豹的耳朵在哪里？
我们看不到耳朵。
海豹的耳朵非常小。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-14",
      level: "b",
      episode: "B14",
      title: "The New Forest Path",
      extensionEn: `We see a new forest path.
•
What can you see on the page?
We see two girls.
What are they doing?
They are holding hands and running on the forest path.
We see big trees by the path.
•
Where is the forest path?
Can you point it out?
Great! Well done!
What can you see by the path?
We can see big trees.
We see small bugs by the path.
•
What can you see by the path?
We can see small bugs.
The trees are big.
The bugs are small.
The bugs are ants.
They are carrying leaves.
We see green moss by the path.
•
This is moss.
What else can you see on the page?
We see a hand on the moss.
What color is the moss?
It’s green.
We see brown birds by the path.
•
How many birds are there on the page?
Let’s count.
One, two... There are two birds.
What color are the birds?
They are brown.
We see old leaves by the path.
•
What are these?
They are leaves.
What color are the leaves?
They are yellow and brown.
We see new flowers by the path.
•
What are these?
They are flowers.
What color are the flowers?
They are purple.
They are beautiful.
We see our dog by the path.
•
What can you see on the page?
We see a forest path.
We see our dog by the path.
Where is the dog?
Can you touch it?
Good job!`,
      extensionCn: `我们看到一条新的森林小径。

我们在这页能看到什么？
我们看到两个女孩。
她们在做什么？
她们手牵手在森林小径上跑。
我们看到小径旁边有大树。

森林小径在哪里？
你能指出来吗？
真棒！
你在小径旁边看到了什么？
我们看到大树。
我们看到小径旁边有小虫子。

你在小径旁边看到了什么？
我们看到小虫子。
树很大。
虫子很小。
虫子是蚂蚁。
它们在搬树叶。
我们看到小径旁有绿色苔藓。

这是苔藓。
你在这页上还能看到什么？
我们看到苔藓上有一只手。
苔藓是什么颜色的？
它是绿色的。
我们看到小径旁有棕色的鸟。

这页上有多少只鸟？
让我们数一数。
一、二... 有两只鸟。
鸟是什么颜色的？
它们是棕色的。
我们看到小径旁边有枯叶。

这些是什么？
它们是叶子。
这些叶子是什么颜色的？
它们是黄色和棕色的。
我们看到小径旁边有新花。

这些是什么？
它们是花。
这些花是什么颜色的？
它们是紫色的。
它们很漂亮。
我们看到我们的小狗在小径旁边。

你在这页上看到了什么？
我们看到一条森林小径。
我们看到我们的小狗在小径旁边。
狗在哪里？
你能摸到它吗？
做得好！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-15",
      level: "b",
      episode: "B15",
      title: "What Has These Feet",
      extensionEn: `Look at these feet. They are small.
What kind of animal has these feet?
A duck has these small feet.
These feet are webbed.
There is webbing between the toes.
It helps ducks swim efficiently.
Look at these feet. They are large.
What kind of animal has these feet?
An elephant has these large feet.
These large feet act like shock absorbers.
They help elephants walk steadily.
Look at these feet. They are soft.
What kind of animal has these feet?
A tiger has these soft feet.
These soft feet help tigers move silently.
Look at this animal. It has no feet.
What kind of animal has no feet?
A shark has no feet.
Instead, it has powerful fins.
Fins help sharks swim fast.`,
      extensionCn: `这些脚很小。
什么动物有这种脚？
鸭子有这种小脚。
这些脚有蹼。
脚趾之间有蹼。
这帮助鸭子高效游动。
这些脚很大。
什么动物有这种脚？
大象有这种大脚。
这些大脚像减震器一样。
它们帮助大象稳步行走。
这些脚很柔软。
什么动物有这种脚？
老虎有这种柔软的脚。
这些柔软的脚帮助老虎静悄悄地移动。
看这个动物，它没有脚。
哪种动物没有脚？
鲨鱼没有脚。
它有强大的鳍。
鳍帮助鲨鱼快速游动。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-16",
      level: "b",
      episode: "B16",
      title: "What Has These Stripes",
      extensionEn: `Which animal has these stripes?
Look at the black and white stripes.
Can you guess the animal?
A zebra has these smooth stripes.
These stripes help them blend in.
They make it hard to see them.
Which animal has these stripes?
Look at the colorful stripes.
Can you guess the animal?
A fish has these thin stripes.
These stripes help them blend in.
They match the water.
Which animal has these stripes?
Look at the black and brown stripes.
Can you guess the animal?
A snake has these long stripes.
These stripes help them hide.
They match the grass.
Which animals have no stripes?
They have smooth fur or skin.
These animals have no stripes.
A lion has no stripes.
Lions have golden fur.
A rhino has no stripes.
Rhinos have thick, gray skin.
What other animals have no stripes?
Can you think of more?`,
      extensionCn: `哪种动物有这些条纹？
看看这些黑白条纹。
你能猜出这是什么动物吗？
斑马有这些光滑的条纹。
这些条纹帮助它们融入环境。
这让它们不容易被发现。
哪种动物有这些条纹？
看看这些五颜六色的条纹。
你能猜出这是什么动物吗？
鱼有这些细条纹。
这些条纹帮助它们融入环境。
它们与水融为一体。
哪种动物有这些条纹？
看看这些黑色和棕色的条纹。
你能猜出这是什么动物吗？
蛇有这些长条纹。
这些条纹帮助它们隐藏。
它们与草丛融为一体。
哪些动物没有条纹？
它们有光滑的皮毛或皮肤。
这些动物没有条纹。
狮子没有条纹。
狮子有金色的皮毛。
犀牛没有条纹。
犀牛有厚厚的灰色皮肤。
还有哪些动物没有条纹？
你还能想到更多吗？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-17",
      level: "b",
      episode: "B17",
      title: "What Has This Tail",
      extensionEn: `What animal has this tail?
A pig has this curly tail.
Look at the pig's tail!
It's all curly and twisty.
The pig likes to roll around in the mud with its curly tail!
What animal has this tail?
A horse has this long tail.
Look at the horse's tail!
It's long and swishy.
The horse uses its long tail to swat away flies!
What animal has this tail?
A rabbit has this short tail.
Look at the rabbit's tail!
It's short and fluffy.
The rabbit hops around.
Its short tail bounces up and down.
What animal has no tail?
A person has no tail.
People don’t have tails.
We have arms and legs.
We can do many fun things without a tail.
We can dance and jump.`,
      extensionCn: `这是什么动物的尾巴？
猪有这样卷曲的尾巴。
看猪的尾巴！
它又卷又扭。
猪喜欢用它的卷尾巴在泥里打滚！
这是什么动物的尾巴？
一匹马有这样长的尾巴。
看马的尾巴！
它又长又扫。
马用它长长的尾巴甩走苍蝇！
这是什么动物的尾巴？
一只兔子有这样短的尾巴。
看兔子的尾巴！
它又短又蓬松。
兔子跳来跳去！
它短短的尾巴上下跳动。
哪种动物没有尾巴？
人没有尾巴。
人类没有尾巴。
我们有手臂和腿。
我们可以不用尾巴做很多有趣的事情。
我们可以跳舞和跳跃！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-18",
      level: "b",
      episode: "B18",
      title: "What Has These Spots",
      extensionEn: `What kind of animal has these spots?
A cheetah has these black spots.
Look at the cheetah!
It has black spots all over its body.
The spots help it hide in the grass.
What kind of animal has these spots?
A fawn has these white spots.
Look at the baby deer, called a fawn.
It has white spots on its back.
The spots help it stay hidden from other animals.
What kind of animal has these spots?
A bug has these tiny spots.
Wow, look at the little bug!
It has tiny spots on its wings.
These spots help the bug fly and find food.
What kind of animal has no spots?
A lemur has no spots.
Look at the lemur!
It doesn't have any spots.
Lemurs have soft fur instead of spots.`,
      extensionCn: `这种动物有这些斑点吗？
猎豹有这些黑色斑点。
看猎豹！
它全身都有这些黑色斑点。
这些斑点帮助它藏在草丛中。
这种动物有这些斑点吗？
小鹿有这些白色斑点。
看这只小鹿，叫做小鹿。
它背上有这些白色斑点。
这些斑点帮助它躲避其他动物。
这种动物有这些斑点吗？
小虫子有这些微小的斑点。
哇，看这只小虫子！
它的翅膀上有这些微小的斑点。
这些斑点帮助小虫子飞行和找到食物。
哪种动物没有斑点？
狐猴没有斑点。
看狐猴！
它没有斑点。
狐猴的毛发柔软而不是有斑点。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-19",
      level: "b",
      episode: "B19",
      title: "Amazing Caves",
      extensionEn: `This cave has sharp rocks.

There are sharp rocks in this cave.
I can find sharp rocks in this cave.
The pointed rocks are beautiful.
This cave has blue water.

There is blue water in this cave.
I can find blue water in this cave.
The water is sparkling.
This cave has black bats.

There are black bats in this cave.
I can find black bats in this cave.
Many bats are hanging upside down on the ceiling.
This cave has big crystals.

There are big crystals in this cave.
I can find big crystals in this cave.
The massive and milky white crystals look amazing.
This cave has bright worms.

There are bright worms in this cave.
I can find bright worms in this cave.
They are creepy and light up the cave.
This cave has old drawings.

There are old drawings in this cave.
I can find old drawings in this cave.
These images were drawn a long time ago.
This cave has shiny fish.

There are shiny fish in this cave.
I can find shiny fish in this cave.
Some fish are swimming by.
What does this cave have?

Can you tell me what the cave has?
People are exploring this huge cave.`,
      extensionCn: `这个洞穴有锋利的岩石。

这个洞穴里有锋利的岩石。
我能在这个洞穴里找到锋利的岩石。
这些尖尖的岩石很美丽。
这个洞穴有蓝色的水。

这个洞穴里有蓝色的水。
我能在这个洞穴里找到蓝色的水。
这水在闪闪发光。
这个洞穴有黑色的蝙蝠。

这个洞穴里有黑色的蝙蝠。
我能在这个洞穴里找到黑色的蝙蝠。
许多蝙蝠倒挂在洞穴的顶部。
这个洞穴有大的晶体。

这个洞穴里有大的晶体。
我能在这个洞穴里找到大的晶体。
巨大的乳白色晶体看起来令人惊叹。
这个洞穴有明亮的蠕虫。

这个洞穴里有明亮的蠕虫。
我能在这个洞穴里找到明亮的蠕虫。
它们很吓人，并照亮了洞穴。
这个洞穴有古老的绘画。

这个洞穴里有古老的绘画。
我能在这个洞穴里找到古老的绘画。
这些图画是在很久以前画的。
这个洞穴有闪亮的鱼。

这个洞穴里有闪亮的鱼。
我能在这个洞穴里找到闪亮的鱼。
一些鱼正在游过。
这个洞穴有什么？

你能告诉我这个洞穴有什么吗？
人们正在探索这个巨大的洞穴。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-20",
      level: "b",
      episode: "B20",
      title: "Animals Can Move",
      extensionEn: `The camel can walk.

The camel is walking in the desert.
Let’s pretend to be camels and walk.
Could you walk quickly?
Could you walk slowly?
The horse can run.

The horse is running on the grass.
Let’s pretend to be horses and run.
Could you run quickly?
Could you run slowly?
The snake can slither.

The snake is slithering on the rocks.
Let’s pretend to be snakes and slither.
Put your hands together and twist your body.
Let’s slither.
The rabbit can hop.

The rabbit is hopping on the ground.
Let’s pretend to be rabbits and hop.
Place your hands on your head like rabbit ears.
Now, let's hop around!
The polar bear can swim.

The polar bear is swimming in the water.
Let’s pretend to be polar bears and swim.
Use your arms to splash like swimming.
Let's move forward!
The bird can fly.

The bird is flying in the sky.
Let’s pretend to be birds and fly.
Our arms are wings.
Let’s flap them and fly!
The bug can crawl.

The bug is crawling on the ground.
Let’s pretend to be bugs and crawl.
You could only crawl when you were a little kid!
Then you learned how to walk.
How Can These Animals Move?

The kangaroo can hop.
The monkey can climb.
The antelope can run.
Animals move in different ways.`,
      extensionCn: `骆驼会走路。

骆驼正在沙漠中行走。
我们来假装成骆驼走路吧。
你能走快点吗？
你能走慢点吗？
马会奔跑。

马正在草地上奔跑。
我们来假装成马跑步吧。
你能跑快点吗？
你能跑慢点吗？
蛇会滑行。

蛇正在岩石上滑行。
我们来假装成蛇滑行吧。
合上双手，扭动身体。
让我们滑行吧。
兔子会跳跃。

兔子正在地上跳跃。
我们来假装成兔子跳跃吧。
把手放在头上像兔子的耳朵。
现在我们四处跳跃吧！
北极熊会游泳。

北极熊正在水中游泳。
我们来假装成北极熊游泳吧。
用你的手臂像游泳一样扑水。
让我们向前移动！
鸟会飞翔。

鸟正在天空中飞翔。
我们来假装成鸟飞翔吧。
我们的手臂就是翅膀。
让我们挥动手臂飞起来！
小虫子会爬行。

小虫子正在地上爬行。
我们来假装成小虫子爬行吧。
你小时候只能爬行！
然后你学会了走路。
这些动物们怎么移动？

袋鼠会跳跃。
猴子会爬树。
羚羊会奔跑。
动物们有不同的移动方式。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-21",
      level: "b",
      episode: "B21",
      title: "Rain in the City",
      extensionEn: `I see the clouds.

Look at the sky.
There are many grey clouds.
It's getting dark.
It's going to rain.
I see the rain.

It's raining.
The raindrops are falling on the ground.
The rain is heavy.
We can't see the cars.
I see the lightning.

It's lightning.
It lights up the sky.
We need to stay inside when there’s lightning.
Lightning can be dangerous.
I see the umbrellas.

People are holding umbrellas.
The umbrellas are colorful.
This one is a rainbow umbrella.
Some people are wearing raincoats.
I see the puddle.

The raindrops fall on the ground and form a puddle.
Do you like to jump in puddles?
Wear your rain boots.
Don’t get your clothes wet.
I see the drain.

The water goes down the drain.
The drain stores the rainwater.
The drain stops flooding when it rains heavily.
It keeps the road dry.
I see the rainbow.

The rain has stopped.
The rainbow is coming out.
The rainbow has seven colors.
The rainbow is like a giant bridge in the sky.
I see the sun.

The sun is coming out.
The clouds are going away.
The air is fresh.
Do you like sunny days or rainy days?`,
      extensionCn: `我看到云了。

看看天空。
有很多灰色的云。
天色变暗了。
要下雨了。
我看到雨了。

在下雨。
雨滴落在地上。
雨下得很大。
我们看不到车了。
我看到闪电了。

在打闪。
它照亮了天空。
打雷时我们要呆在屋里。
闪电可能很危险。
我看到雨伞了。

人们打着雨伞。
雨伞五颜六色。
这是一把彩虹伞。
有些人穿着雨衣。
我看到水坑了。

雨滴落在地上形成了水坑。
你喜欢跳进水坑吗？
穿上你的雨靴。
别把衣服弄湿了。
我看到下水道了。

水流进下水道。
下水道储存雨水。
下水道在大雨时可以防止洪水。
它保持道路干燥。
我看到彩虹了。

雨停了。
彩虹出来了。
彩虹有七种颜色。
彩虹像天空中的一座巨桥。
我看到太阳了。

太阳出来了。
云在散去。
空气很清新。
你喜欢晴天还是雨天？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-22",
      level: "b",
      episode: "B22",
      title: "Rain in the Country",
      extensionEn: `I see the clouds.

There are many clouds in the sky.
These clouds are grey.
It's about to rain.
The crops are yellow.
I see the rain.

It's raining.
The rain is heavy.
The rain falls on the crops.
The crops will grow well with rain.
I see the lightning.

It's lightning.
The lightning is very bright.
Lightning always comes with thunder.
Are you scared of lightning and thunder?
I see the horse.

The horse is eating grass.
It's getting wet from the rain.
The horse doesn’t want to go home.
The horse enjoys the rain.
I see the puddle.

The raindrops fall on the grass.
It becomes a puddle.
The puddles can be muddy.
Pigs like to roll in muddy puddles.
I see the mud.

The ground is muddy.
There are many tire marks.
It becomes muddy after raining.
Don't get your shoes dirty.
I see the rainbow.

Look at the rainbow.
It's big and beautiful.
It stretches across the sky like a bridge.
It matches the beauty of the fields.
I see the sun.

The sun is coming out.
The rain has stopped.
Look at the river; the water is clean and sparkling.
There are many clouds too; they are white.`,
      extensionCn: `我看到云了。

天空中有很多云。
这些云是灰色的。
快要下雨了。
庄稼是黄色的。
我看到雨了。

在下雨。
雨下得很大。
雨水落在庄稼上。
庄稼在雨水滋润下会长得很好。
我看到闪电了。

在打闪。
闪电非常明亮。
闪电总是伴随着雷声。
你害怕闪电和雷声吗？
我看到马了。

马在吃草。
它在雨中被淋湿。
马不想回家。
马喜欢在雨中。
我看到水坑了。

雨滴落在草地上。
它变成了水坑。
水坑可能会很泥泞。
猪喜欢在泥水坑里打滚。
我看到泥巴了。

地面是泥土。
有很多车轮印记。
下雨后变得泥泞。
别把鞋弄脏了。
我看到彩虹了。

看看彩虹。
它又大又美丽。
它像一座桥横跨天空。
它与田野的美丽相得益彰。
我看到太阳了。

太阳出来了。
雨停了。
看看河水，干净而闪亮。
天空中还有很多白云。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-23",
      level: "b",
      episode: "B23",
      title: "Gobi Desert Animals",
      extensionEn: `Many animals live in the Gobi Desert.

The Gobi Desert is one of the world's largest deserts.
It is a vast and dry place.
There is very little water.
It is a place where many animals live.
What animals live in the Gobi Desert?
Camels live in the Gobi.

A camel has two big humps.
Camels can go for many days without water.
Camels are very good at living in the desert.
The left one is looking far away.
The right one is eating grass.
Eagles live in the Gobi.

This is an eagle.
Look at its sharp mouth.
It helps the eagle catch food.
Look at its big wings.
They help the eagle fly high in the sky.
Grasshoppers live in the Gobi.

This is a grasshopper.
Grasshoppers eat plants.
They are good at hiding.
They blend in with the grass to stay safe.
Grasshoppers are small.
They can jump very high.
Horses live in the Gobi.

What are these?
These are horses.
The horses are running on the ground.
How many horses are there?
There are three horses.
Goats live in the Gobi.

What is this?
It is a goat.
Look at its curved and sharp horns; they protect the goat from danger.
Goats have thick fur to stay warm.
Wolves live in the Gobi.

What is this?
It is a wolf.
It is fierce.
Wolves are clever and hunt in groups.
Wolves can run fast to catch their prey.
Lizards live in the Gobi.

What is this?
It is a lizard.
The lizard can change its color to hide from predators.
Lizards are quick and can run to escape danger.`,
      extensionCn: `许多动物生活在戈壁沙漠里。

戈壁沙漠是世界上最大的沙漠之一。
这是一个广阔而干燥的地方。
这里水很少。
这是许多动物生活的地方。
哪些动物生活在戈壁沙漠里？
骆驼生活在戈壁沙漠里。

骆驼有两个大驼峰。
骆驼能好几天不用喝水。
骆驼非常善于在沙漠中生活。
左边的在远望。
右边的在吃草。
鹰生活在戈壁沙漠里。

这是一只鹰。
看看它的嘴巴，很锋利。
这帮助鹰抓食物。
看看它的大翅膀。
它们帮助鹰在空中飞翔。
蚂蚱生活在戈壁沙漠里。

这是一只蚂蚱。
蚂蚱吃植物。
它们很擅长躲藏。
它们融入草丛中以保持安全。
蚂蚱很小。
但它们跳得很高。
马生活在戈壁沙漠里。

这些是什么？
这些是马。
这些马在地上跑。
这里有几匹马？
这里有三匹马。
山羊生活在戈壁沙漠里。

这是什么？
这是一只山羊。
看看它弯弯而尖锐的角，保护山羊免受危险。
山羊有厚厚的毛保持温暖。
狼生活在戈壁沙漠里。

这是什么？
这是一只狼。
它很凶猛。
狼很聪明，喜欢群体狩猎。
狼跑得很快，能抓住猎物。
蜥蜴生活在戈壁沙漠里。

这是什么？
这是一只蜥蜴。
蜥蜴能变换颜色来躲避捕食者。
蜥蜴跑得很快，能逃离危险。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-24",
      level: "b",
      episode: "B24",
      title: "Wind Blows",
      extensionEn: `Wind blows on the trees.
•
Look at the trees.
Look at how they sway!
They are bending in the wind.
The wind makes the branches move.
Wind blows up the sand.
•
The sand is blown up into the air.
It can be a sandstorm.
The sky looks dusty.
The wind makes it hard to see.
Wind blows over the water.
•
Look at the big waves.
The wind makes the water move.
The water splashes high.
The waves crash on the shore.
Wind blows across the snow.
•
The ground is covered with white.
The snow moves in the air.
The wind makes snowflakes fly.
Sometimes, it can become a snowstorm.
Wind blows away the leaves.
•
The leaves dance in the air.
They fall to the ground.
The ground is covered in leaves.
The wind makes the leaves rustle.
Wind blows against the birds.
•
Look at the penguins.
Their feathers ruffle in the wind.
The wind makes them wobble.
The wind makes it hard for them to move.
Wind blows through the hair.
•
Look at the girl.
The wind makes her hair dance.
Her hair is flying in the wind.
We can't see her face clearly.
Wind blows into me!
•
Look at the kids.
They are hugging the wind.
The wind pushes against them.
The wind is strong!
They are happy.`,
      extensionCn: `风吹在树上。

看看这些树。
看它们是如何摇摆的！
它们在风中歪了。
风让树枝摇动。
风吹起沙子。

沙子被吹到空中。
它可以变成沙尘暴。
天空看起来灰蒙蒙的。
风让人很难看清楚。
风吹过水面。

看看这些大海浪。
风让水面动起来。
水花溅得很高。
海浪拍打着岸边。
风吹过雪地。

地面被白雪覆盖。
雪在空中打旋。
风让雪花飞舞。
有时，它可能会变成暴风雪。
风吹走了树叶。

树叶在空中跳舞。
它们落到地面。
地上铺满了树叶。
风让树叶沙沙作响。
风吹向鸟儿。

看看这些企鹅。
它们的羽毛在风中抖动。
风让它们摇晃。
风让它们很难移动。
风吹过头发。

看看这个女孩。
风让她的头发舞动。
头发在风中飘动。
我们看不清她的脸。
风吹向我！

看看这些孩子。
他们在拥抱风。
风推着他们。
风好大啊！
他们很开心。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-25",
      level: "b",
      episode: "B25",
      title: "How Many Legs",
      extensionEn: `Many animals have legs.
•
Animals have different numbers of legs.
Legs help them to move.
An elephant has four legs.
A scorpion has ten legs.
A penguin has two legs.
These animals have two legs.
•
How many legs do these animals have?
A gorilla has two legs.
A ostrich has two legs.
A penguin has two legs.
These animals have four legs.
•
How many legs do these animals have?
An elephant has four legs.
A hedgehog has four legs.
A frog has four legs.
A crocodile has four legs.
These animals have six legs.
•
How many legs do these animals have?
A grasshopper has six legs.
A beetle has six legs.
An ant has six legs.
A butterfly has six legs.
These animals have eight legs.
•
What are these animals?
This is an octopus.
An octopus has eight legs.
This is a spider.
A spider has eight legs.
These animals have ten legs.
•
How many legs does a crab have?
A crab has ten legs.
A crab has two large claws.
How many legs does a shrimp have?
A shrimp has ten legs.
A shrimp has two large claws.
These animals have many legs.
•
Look at these animals.
They have so many legs.
We can't count them.
Oh, I feel a little creeped out.
How many legs do these animals have?
•
These animals have no legs.
Fish have no legs; they move with their tails.
Snakes have no legs; they move with their bodies.
Dolphins have no legs; they move with their fins.`,
      extensionCn: `许多动物有腿。

动物有不同数量的腿。
腿帮助它们移动。
大象有四条腿。
蝎子有十条腿。
企鹅有两条腿。
这些动物有两条腿。

这些动物有几条腿？
一只猩猩有两条腿。
一只鸵鸟有两条腿。
企鹅有两条腿。
这些动物有四条腿。

这些动物有几条腿？
大象有四条腿。
一只刺猬有四条腿。
一只青蛙有四条腿。
一只鳄鱼有四条腿。
这些动物有六条腿。

这些动物有几条腿？
一只蚂蚱有六条腿。
一只甲虫有六条腿。
一只蚂蚁有六条腿。
一只蝴蝶有六条腿。
这些动物有八条腿。

这些动物是什么？
这是一只章鱼。
章鱼有八条腿。
这是一只蜘蛛。
蜘蛛有八条腿。
这些动物有十条腿。

螃蟹有几条腿？
螃蟹有十条腿。
螃蟹有两只大钳子。
虾有几条腿？
虾有十条腿。
虾有两只大钳子。
这些动物有很多条腿。

看看这些动物。
它们有很多条腿。
我们数不过来。
哦，我觉得有点毛骨悚然。
这些动物有几条腿？

这些动物没有腿。
鱼没有腿，它们用尾巴游动。
蛇没有腿，它们用身体移动。
海豚没有腿，它们用鳍游动。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-26",
      level: "b",
      episode: "B26",
      title: "What Flies in the Sky",
      extensionEn: `What flies in the sky?

The boy is looking up in the air.
The boy is thinking about what flies in the sky.
Do you know what flies in the sky?
Let's keep reading.
A kite flies in the sky.

This is a kite.
It's a butterfly shape.
It's beautiful.
It is flying in the sky.
We can fly a kite on a windy day.
A bird flies in the sky.

This is a bird.
A bird has wings.
Wings help the bird to fly in the sky.
They can fly really high.
A balloon flies in the sky.

This is a balloon.
It flies into the sky.
Whose balloon will it be?
This is the amusement park.
The man is selling balloons.
The boy is buying a balloon.
A bee flies in the sky.

This is a bee.
This is the bee's house; it's called a hive.
A bee flies between the flowers and collects nectar.
A rocket flies in the sky.

This is a rocket.
It's flying into the sky.
Look at the smoke!
It can fly very quickly.
It can fly into space.
A bat flies in the sky.

This is a bat.
Look at the bat's wings.
They are big.
Bats usually come out at night.
They like to eat mosquitoes and bugs.
I wish I could fly in the sky!

What is the boy doing?
He is flying a kite.
Do you want to fly a kite?
Do you want to fly in the sky?
Can you fly in the sky?
We can take a plane or a hot air balloon to fly in the sky.`,
      extensionCn: `天空中有什么东西飞？

男孩在看天上。
男孩在想天空中有什么飞的东西。
你知道天空中有什么东西飞吗？
我们继续阅读吧。
风筝在天空中飞。

这是一只风筝。
它是蝴蝶形状的。
它很美。
它在天空中飞翔。
我们可以在风大的日子放风筝。
鸟在天空中飞。

这是一只鸟。
鸟有翅膀。
翅膀帮助鸟在天空中飞翔。
它们可以飞得很高。
气球在天空中飞。

这是一只气球。
它飞向天空。
这是谁的气球呢？
这是游乐园。
男人在卖气球。
男孩在买气球。
蜜蜂在天空中飞。

这是一只蜜蜂。
这是蜜蜂的家，叫做蜂巢。
蜜蜂在花之间飞舞，采集花蜜。
火箭在天空中飞。

这是一枚火箭。
它正在飞向天空。
看看那些烟雾！
它能飞得很快。
它可以飞入太空。
蝙蝠在天空中飞。

这是一只蝙蝠。
看看蝙蝠的翅膀。
它们很大。
蝙蝠通常在晚上出来。
它们喜欢吃蚊子和昆虫。
我希望我能在天空中飞！

男孩在做什么？
他在放风筝。
你想放风筝吗？
你想在天空中飞吗？
你能在天空中飞吗？
我们可以坐飞机或热气球在天空中飞翔。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-27",
      level: "b",
      episode: "B27",
      title: "Paint It Purple",
      extensionEn: `I like purple paint.
•
This is a brush.
These are buckets with paints.
What color are the paints?
They are purple.
The girl likes purple.
She wears a purple t-shirt, purple shorts, and purple shoes.
I paint my swing purple.
•
What's this?
It's a swing.
What color is the swing?
It's brown.
What is the girl doing?
The girl is painting the swing purple.
I paint the fence purple.
•
What's this?
It's a fence.
What color is the fence?
It's white.
What is the girl doing?
The girl is painting the fence purple.
I paint the hose purple.
•
What is this?
It's a hose.
What color is the hose?
It's blue.
What is the girl doing?
The girl is painting the hose purple.
I paint my shoes purple.
•
What is she painting now?
She is painting her shoes purple.
What color are her shoes?
They are purple and white.
What is the girl doing?
The girl is painting her shoes all purple.
I paint the grass purple.
•
What is she painting now?
She is painting the grass purple.
What's the color of the grass?
It's green.
What do you think about painting the grass purple?
Do you like it?
I paint the door purple.
•
What is she painting now?
She is painting the door purple.
What color is the door?
It's green.
Look at the fence and the grass.
They are all purple now.
I paint my mom purple.
Mom does not like purple paint.
•
The door is opened, and mom is coming out.
What's this on mom's dress?
It's purple paint.
Mom looks angry.`,
      extensionCn: `我喜欢紫色颜料。

这是一个刷子。
这些是装有颜料的桶。
颜料是什么颜色的？
它们是紫色的。
这个女孩喜欢紫色。
她穿着紫色的T恤、紫色的短裤和紫色的鞋子。
我把我的秋千涂成紫色。

这是什么？
这是一个秋千。
秋千是什么颜色的？
它是棕色的。
这个女孩在做什么？
她在把秋千涂成紫色。
我把栅栏涂成紫色。

这是什么？
这是一个栅栏。
栅栏是什么颜色的？
它是白色的。
这个女孩在做什么？
她在把栅栏涂成紫色。
我把水管涂成紫色。

这是什么？
这是一根水管。
水管是什么颜色的？
它是蓝色的。
这个女孩在做什么？
她在把水管涂成紫色。
我把我的鞋子涂成紫色。

她现在在涂什么？
她在把鞋子涂成紫色。
她的鞋子是什么颜色的？
它们是紫色和白色的。
这个女孩在做什么？
她在把她的鞋子全部涂成紫色。
我把草地涂成紫色。

她现在在涂什么？
她在把草地涂成紫色。
草地是什么颜色的？
它是绿色的。
你觉得把草地涂成紫色怎么样？
你喜欢吗？
我把门涂成紫色。

她现在在涂什么？
她在把门涂成紫色。
门是什么颜色的？
它是绿色的。
看看栅栏和草地。
它们现在全都是紫色的了。
我把我的妈妈涂成紫色。
妈妈不喜欢紫色颜料。

门开了，妈妈出来了。
妈妈的衣服上是什么？
是紫色颜料。
妈妈看起来很生气。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-28",
      level: "b",
      episode: "B28",
      title: "Our Show",
      extensionEn: `We can put on a show.
•
It's time for fun and laughter!
We can invite everyone to join us.
What can we do in the show?
Do you want to put on a show?
We can sing in our show.
•
What are the kids doing?
They are singing.
And the boy is playing a guitar at the same time.
Let's sing together.
We can dance in our show.
•
What are the kids doing?
They are dancing.
Let's dance together.
Let's play some happy music and dance together!
We can act in our show.
•
What are the kids doing?
They are acting.
The girl is acting like a pirate.
The boy is acting like a magician.
Let’s act out our favorite stories!
What do you want to act?
We can juggle in our show.
•
What are the kids doing?
They are juggling balls in the air.
Can you juggle balls?
Do you want to have a try?
We can take bows in our show.
•
What are they doing?
They are taking bows.
We always take bows after the performance.
Let's take a bow together.
We can be stars in our show!
•
Do you want to be a star?
What do you want to do in the show?
Let’s shine bright like stars!
All we need is you.
•
What are these?
They are the audience.
They are watching the show.
They must be the toys of the kids.
They are clapping for the performance.`,
      extensionCn: `我们可以表演一个节目。

是快乐和欢笑的时刻！
我们可以邀请每个人来加入我们。
我们可以在节目中做什么？
你想表演一个节目吗？
我们可以在我们的节目中唱歌。

孩子们在做什么？
他们在唱歌。
男孩正在同时弹吉他。
一起唱吧。
我们可以在我们的节目中跳舞。

孩子们在做什么？
他们在跳舞。
一起跳舞吧。
一起放快乐的音乐跳舞吧！
我们可以在我们的节目中表演。

孩子们在做什么？
他们在表演。
女孩在表演海盗。
男孩在表演魔术师。
让我们表演我们最喜欢的故事吧！
你想表演什么？
我们可以在我们的节目中玩杂耍。

孩子们在做什么？
他们在空中玩杂耍。
你会玩杂耍吗？
你想试试吗？
我们可以在我们的节目中鞠躬。

他们在做什么？
他们在鞠躬。
我们在表演结束后总是鞠躬。
一起鞠躬吧。
我们可以在我们的节目中成为明星！

你想成为明星吗？
你想在节目中做什么？
让我们像星星一样闪耀！
我们需要的就是你。

这些是什么？
他们是观众。
他们在观看节目。
它们一定是孩子们的玩具。
他们在为节目鼓掌。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-29",
      level: "b",
      episode: "B29",
      title: "Ten",
      extensionEn: `Ten Cats Have Ten Bows.

There are many cats on this page.
How many cats are there?
There are ten cats.
Each cat has a bow.
There are ten bows in total.
Ten Boys Have Ten Jugs.

There are many boys on this page.
How many boys are there?
There are ten boys.
Each boy has a jug.
There are ten jugs in total.
Ten Trees Have Ten Crows.

There are many trees on this page.
How many trees are there?
There are ten trees.
There is a crow on each tree.
There are ten crows in total.
Ten Girls Have Ten Bugs.

There are many girls on this page.
How many girls are there?
There are ten girls.
Each girl has a bug.
There are ten bugs in total.
Ten Dogs Have Ten Noses.

There are many dogs on this page.
How many dogs are there?
There are ten dogs.
Each dog has a nose.
There are ten noses in total.
Ten Dads Have Ten Mugs.

There are many dads on this page.
How many dads are there?
There are ten dads.
Each dad has a mug.
There are ten mugs in total.
Ten Plants Have Ten Roses.

There are many plants on this page.
How many plants are there?
There are ten plants.
Each plant has a rose.
There are ten roses in total.
Ten Moms Give Ten Hugs.

There are many moms on this page.
How many moms are there?
There are ten moms.
Each mom gives a hug to her kid, pet, or plant.
There are ten hugs in total.`,
      extensionCn: `十只猫有十个蝴蝶结。

页面上有很多猫。
有多少只猫？
有十只猫。
每只猫都有一个蝴蝶结。
有十个蝴蝶结。
十个男孩有十个水壶。

页面上有很多男孩。
有多少个男孩？
有十个男孩。
每个男孩都有一个水壶。
有十个水壶。
十棵树有十只乌鸦。

页面上有很多树。
有多少棵树？
有十棵树。
每棵树上都有一只乌鸦。
有十只乌鸦。
十个女孩有十只虫子。

页面上有很多女孩。
有多少个女孩？
有十个女孩。
每个女孩都有一只虫子。
有十只虫子。
十只狗有十个鼻子。

页面上有很多狗。
有多少只狗？
有十只狗。
每只狗都有一个鼻子。
有十个鼻子。
十位爸爸有十个杯子。

页面上有很多爸爸。
有多少位爸爸？
有十位爸爸。
每位爸爸都有一个杯子。
有十个杯子。
十棵植物有十朵玫瑰。

页面上有很多植物。
有多少棵植物？
有十棵植物。
每棵植物都有一朵玫瑰。
有十朵玫瑰。
十位妈妈给了十个拥抱。

页面上有很多妈妈。
有多少位妈妈？
有十位妈妈。
每位妈妈都会拥抱她的孩子、宠物或植物。
有十个拥抱。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-30",
      level: "b",
      episode: "B30",
      title: "My Brain",
      extensionEn: `I use my brain to think.

What can you use your brain to do?
We can use our brain to solve problems.
The girl is studying and thinking hard.
Thinking helps us make good decisions.
I use my brain to see.

What can you use your brain to do?
We can use our brain to understand what we see.
The boy is holding a bottle and looking at it closely.
Seeing with our brain helps us know the world better.
I use my brain to talk.

What can you use your brain to do?
We can use our brain to choose the right words.
The kids are making phones and talking to each other.
Talking helps us share our thoughts and feelings.
I use my brain to listen.

What can you use your brain to do?
We can use our brain to understand what we hear.
The kid is putting on headphones and listening to music.
Listening carefully helps us learn new things.
I use my brain to move.

What can you use your brain to do?
We can use our brain to control our body.
The girl is at the playground and running around.
Moving helps keep our brain and body healthy.
I use my brain to sleep.

What can you use your brain to do?
We can use our brain to relax and fall asleep.
The girl is lying in bed and sleeping soundly.
Our brain needs rest to work well.
Sleep helps our brain recover and stay strong.
I use my brain to laugh.

What can you use your brain to do?
We can use our brain to feel happy and laugh with friends.
The kids are hugging each other and laughing loudly.
Laughing makes our brain feel good and helps us bond with others.
I use my brain for everything!

What can you use your brain to do?
The brain is very important.
The brain is the control center of our body.
Taking care of our brain helps us do our best in everything.`,
      extensionCn: `我用大脑思考。

你可以用大脑做什么？
我们可以用大脑解决问题。
女孩在认真学习和思考。
思考帮助我们做出好决定。
我用大脑看东西。

你可以用大脑做什么？
我们可以用大脑理解看到的东西。
男孩拿着瓶子，仔细看着它。
用大脑看东西帮助我们更好地了解世界。
我用大脑说话。

你可以用大脑做什么？
我们可以用大脑选择合适的词语。
孩子们在做电话并互相交谈。
说话帮助我们分享想法和感受。
我用大脑听东西。

你可以用大脑做什么？
我们可以用大脑理解听到的东西。
孩子戴上耳机听音乐。
认真听有助于我们学习新东西。
我用大脑移动身体。

你可以用大脑做什么？
我们可以用大脑控制身体。
女孩在操场上跑来跑去。
移动帮助我们保持大脑和身体健康。
我用大脑睡觉。

你可以用大脑做什么？
我们可以用大脑放松并入睡。
女孩躺在床上，睡得很香。
大脑需要休息才能运作良好。
睡眠帮助大脑恢复并保持强壮。
我用大脑笑。

你可以用大脑做什么？
我们可以用大脑感到快乐并和朋友一起笑。
孩子们互相拥抱，大声笑着。
笑让大脑感觉愉快，并帮助我们与他人建立联系。
我用大脑做所有事情！

你可以用大脑做什么？
大脑非常重要。
大脑是我们身体的控制中心。
照顾好大脑帮助我们在所有事情上做到最好。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-31",
      level: "b",
      episode: "B31",
      title: "High or Low",
      extensionEn: `Are these balloons high or low?

The balloons on the left are low.
The balloons on the right are high.
Regular balloons can't fly into the air.
They will stay on the floor.
Helium balloons can fly into the air.
Hold them tight and don't let them go.
Are these slides high or low?

The slide on the left is high.
The slide on the right is low.
The high slide is for big kids or grown-ups.
The low slide is for little kids.
Are these birds high or low?

The bird on the left is low.
It's a woodpecker, it's pecking the tree.
The bird on the right is high.
It's an eagle, it's standing on top of the tree.
Are these boards high or low?

The board on the left is high.
The board on the right is low.
We can jump into the water from the board.
The higher the board, the harder the jump.
Are these kites high or low?

The kite on the left is low.
The kite on the right is high.
Do you want to fly a kite?
How high can you fly the kite?
Are these hoops high or low?

The hoop on the left is high.
The hoop on the right is low.
The boy needs to jump to shoot into the left hoop.
The boy can shoot directly into the right hoop.
Are these cats high or low?

The cat on the left is low.
The cat on the right is high.
The cat on the left is on the ground.
The cat on the right is on the roof.
Cats are good at climbing.
Are these people high or low?

The person on the left is low.
The person on the right is high.
The person on the left is working in a deep trench on the street.
The person on the right is walking on a high bridge above the water.`,
      extensionCn: `这些气球是高的还是低的？

左边的气球是低的。
右边的气球是高的。
普通气球不能飞上天。
它们会留在地上。
氦气球可以飞上天。
紧紧抓住它们，别让它们飞走。
这些滑梯是高的还是低的？

左边的滑梯是高的。
右边的滑梯是低的。
高的滑梯是给大孩子或大人玩的。
低的滑梯是给小孩子玩的。
这些鸟是高的还是低的？

左边的鸟是低的。
它是一只啄木鸟，正在啄树。
右边的鸟是高的。
它是一只鹰，站在树顶上。
这些跳板是高的还是低的？

左边的跳板是高的。
右边的跳板是低的。
我们可以从跳板上跳入水中。
跳板越高，跳下去越难。
这些风筝是高的还是低的？

左边的风筝是低的。
右边的风筝是高的。
你想放风筝吗？
你能把风筝放多高？
这些篮筐是高的还是低的？

左边的篮筐是高的。
右边的篮筐是低的。
男孩需要跳起来才能投进左边的篮筐。
男孩可以直接投进右边的篮筐。
这些猫是高的还是低的？

左边的猫是低的。
右边的猫是高的。
左边的猫在地上。
右边的猫在屋顶上。
猫擅长爬高。
这些人是高的还是低的？

左边的人是低的。
右边的人是高的。
左边的人正在街道上的深坑里工作。
右边的人正在高高的桥上走，桥在水面上方。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-32",
      level: "b",
      episode: "B32",
      title: "Healthy Snacks",
      extensionEn: `Apples can be healthy.

The boy is eating an apple.
Apples are crunchy and sweet.
They come in many colors: red, green, and yellow.
"An apple a day keeps the doctor away!" “
Celery can be healthy.

The girl is eating celery.
Celery is green and looks like long sticks.
Celery has a special taste.
Celery is rich in fiber.
Fiber helps our tummies feel good.
Nuts can be healthy.

The boy is peeling nuts.
Nuts are small but are packed with energy.
They come in different types, like almonds and walnuts.
Nuts are great for our brains!
Seeds can be healthy.
•
The girl is eating seeds.
Seeds, like pumpkin seeds and sunflower seeds, are little powerhouses.
They come in different shapes and sizes.
Seeds are full of nutrients.
Cheese can be healthy.

The girl is making a big smile with cheese.
Cheese is creamy and delicious.
Cheese is great in a sandwich.
Cheese helps build strong bones.
Carrots can be healthy.

The girl is eating a carrot.
Carrots are orange and crunchy.
They can be eaten raw or cooked.
Carrots help us see better in the dark!
Cereal can be healthy.

The girl is eating cereal.
Cereal can be a fun breakfast or snack.
Some cereals have fruits and nuts in them.
Cereal gives us energy!
Healthy snacks taste good!

What snacks can be healthy?
There are many delicious options!
Healthy snacks are good for our bodies.
They help us grow strong.
They help us stay active.`,
      extensionCn: `苹果可以很健康。

男孩正在吃一个苹果。
苹果是脆的和甜的。
它们有很多颜色：红色、绿色和黄色。
一天一苹果，医生远离我！”
芹菜可以很健康。

女孩正在吃芹菜。
芹菜是绿色的，看起来像长棒子。
芹菜有一种特殊的味道。
芹菜富含纤维素。
纤维素有助于我们的肚子感觉舒适。
坚果可以很健康。

男孩正在剥坚果。
坚果虽然小，但充满了能量。
它们有不同的种类，如杏仁和核桃。
坚果对我们的脑袋很有好处！
种子可以很健康。

女孩正在吃种子。
种子，比如南瓜子和葵花子，是小小的能量源。
它们有不同的形状和大小。
种子富含营养。
奶酪可以很健康。

女孩用奶酪做一个大笑脸。
奶酪是奶油状的，味道美味。
它非常适合做三明治。
奶酪有助于建立强壮的骨骼。
胡萝卜可以很健康。

女孩正在吃一根胡萝卜。
胡萝卜是橙色的，脆脆的。
它们可以生吃或熟吃。
胡萝卜有助于我们在黑暗中看得更清楚！
谷物可以很健康。

女孩正在吃谷物。
谷物可以作为有趣的早餐或小吃。
一些谷物中含有水果和坚果。
谷物给我们提供能量！
健康的小吃味道很好！

什么小吃可以很健康？
我们有许多美味的选择！
健康的小吃对我们的身体有好处。
它们帮助我们成长。
它们帮助我们保持活跃。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-33",
      level: "b",
      episode: "B33",
      title: "Things Made of Wood",
      extensionEn: `Wood comes from trees.

This is a forest.
Trees grow in forests.
Trees grow tall and strong.
Trees can become wood.
Wood can be used to make many things.
What things are made of wood?
Chairs can be made of wood.

These are wooden chairs.
Wooden chairs are strong and sturdy.
Chairs can be made of wood or plastic.
Which chair do you like better, the wooden one or the plastic one?
Puzzles can be made of wood.

What are the kids doing?
They are doing puzzles.
These puzzles are made of wood.
Wooden puzzles last a long time.
Some puzzles can be made of paper or plastic.
Houses can be made of wood.

What are these houses made of?
They are made of wood.
Wooden houses are warm and cozy.
What are our houses made of?
Our house is made of concrete and steel.
Bridges can be made of wood.

What are these bridges made of?
They are made of wood.
Wooden bridges are strong but can wear down over time.
What else can bridges be made of?
Bridges can also be made of stone.
Boats can be made of wood.

What are these boats made of?
They are made of wood.
Wooden boats float on water.
Wooden boats are light but strong.
Have you ever been on a wooden boat?
Fences can be made of wood.

What are these fences made of?
They are made of wood.
Wooden fences keep things in and out.
Some wooden fences are used to protect gardens.
Do you think wooden fences look nice?
Toys can be made of wood.

This is a rocking horse.
It's made of wood.
These are blocks.
They are made of wood.
Wooden toys last a long time.
What other toys are made of wood?`,
      extensionCn: `木头来自树木。

这是一片森林。
树木在森林里生长。
树木长得又高又壮。
树木可以变成木头。
木头可以用来制造很多东西。
什么东西是用木头做的？
椅子可以用木头做。

这些是木制椅子。
木制椅子结实又耐用。
椅子可以用木头或塑料做成。
你更喜欢哪种椅子，木制的还是塑料的？
拼图可以用木头做。

孩子们在做什么？
他们在拼拼图。
这些拼图是木制的。
木制拼图很耐用。
有些拼图可以用纸或塑料做成。
房子可以用木头建造。

这些房子是用什么建造的？
它们是用木头建的。
木房子温暖又舒适。
我们的房子是用什么建造的？
我们的房子是用钢筋混凝土建的。
桥可以用木头建造。

这些桥是用什么建造的？
它们是用木头建的。
木桥很坚固，但随着时间的推移可能会磨损。
桥还可以用什么建造？
桥也可以用石头建造。
船可以用木头制造。

这些船是用什么制造的？
它们是用木头制造的。
木船能漂浮在水面上。
木船轻巧但很坚固。
你坐过木船吗？
围栏可以用木头建造。

这些围栏是用什么建造的？
它们是用木头建造的。
木制围栏能阻挡外物，也能圈住内部的东西。
一些木制围栏用于保护花园。
你觉得木制围栏好看吗？
玩具可以用木头制造。

这是一个木马。
它是用木头做的。
这些是积木。
它们是用木头做的。
木制玩具很耐用。
还有什么玩具是用木头做的？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-34",
      level: "b",
      episode: "B34",
      title: "What Gives Cover",
      extensionEn: `A tent gives cover.

This is a tent.
The boy is sitting in the tent.
The dog is lying in the tent.
It's raining.
The tent keeps them dry.
Inside, they stay warm and dry.
A tree gives cover.

This is a big tree.
There are four lions under the tree.
It’s a lion family.
The tree shades them from the sun.
The lions rest peacefully under the tree.
A cave gives cover.

This is a cave.
These are bats.
The bats hang from the ceiling of the cave.
The cave shelters them from the rain.
A log gives cover.

This is a log.
This is a small animal.
The animal stays in the log.
The log hides it from predators.
It’s snowing outside.
The log also keeps it warm.
An umbrella gives cover.

It’s raining.
The kids put up an umbrella.
The umbrella helps to keep the rain away.
Under the umbrella, they stay dry.
A mushroom gives cover.

It’s raining.
This is a mushroom.
The mouse uses the mushroom as an umbrella.
The mushroom keeps the rain off.
The mouse stays dry under the mushroom.
A house gives cover.

It’s snowing.
This is the bird’s house.
This is the kid’s house.
The house keeps them warm and safe.
Even a leaf gives cover.
•
It’s raining.
The frog is staying under the leaf.
The leaf protects the frog from the rain.
The frog stays safe and dry under the leaf.`,
      extensionCn: `帐篷提供遮挡。

这是一顶帐篷。
男孩坐在帐篷里。
狗在帐篷里躺着。
下雨了。
帐篷让他们保持干燥。
在里面，他们保持温暖和干燥。
树提供遮挡。

这是一棵大树。
树下有四只狮子。
这是一家狮子。
树为它们遮挡阳光。
狮子们在树下安静地休息。
洞穴提供遮挡。

这是一个洞穴。
这些是蝙蝠。
蝙蝠挂在洞穴的顶部。
洞穴保护它们免受雨水侵袭。
原木提供遮挡。

这是一根原木。
这是一只小动物。
这只动物呆在原木里。
它藏在原木里躲避捕食者。
外面在下雪。
原木还让它保持温暖。
雨伞提供遮挡。

正在下雨。
孩子们撑起了一把雨伞。
雨伞帮助挡住雨水。
在雨伞下，他们保持干燥。
蘑菇提供遮挡。

正在下雨。
这是一朵蘑菇。
老鼠把蘑菇当作雨伞。
蘑菇挡住了雨水。
老鼠在蘑菇下保持干燥。
房子提供遮挡。

正在下雪。
这是鸟的家。
这是孩子的家。
房子让他们保持温暖和安全。
甚至一片叶子也提供遮挡。

正在下雨。
青蛙呆在叶子下。
叶子保护青蛙免受雨水的侵袭。
青蛙在叶子下保持安全和干燥。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-35",
      level: "b",
      episode: "B35",
      title: "Fun with Paper",
      extensionEn: `What can you do with paper?
You can change paper.

These are colorful pencils.
You can use pencils to color the paper.
You can draw different shapes and pictures.
Do you want to color the paper?
What can you do with paper?
You can cut paper.

The girl is using scissors to cut paper.
You can cut out shapes like stars and hearts.
Do you want to cut paper into heart shapes?
What can you do with paper?
You can tear paper.

The boy is tearing the paper.
You can tear the paper into small pieces.
Do you want to tear the paper?
What can you do with paper?
You can roll paper.

The girl rolls the paper into a tube like a trumpet.
The girl speaks through the paper trumpet.
Do you want to roll the paper into a trumpet?
What can you do with paper?
You can fold paper.

The boy is folding the paper.
Can you fold a plane with paper?
You can also fold paper to make animals or hats.
Would you like to try folding a paper plane?
What can you do with paper?
You can glue paper.

The girl is gluing paper.
She is making a greeting card.
The paper shapes are heart-shaped.
She is gluing the hearts onto the greeting card.
What can you do with paper?
You can tape paper.

The girl is taping paper.
The girl uses tape and paper to build a house.
The house is strong and can stand up on its own.
Would you like to make a paper house too?
Paper can be fun!
We can draw on the paper.

We can use paper to cut a snowflake.
We can make a boat with paper and put it on the river.
Paper can be used for so many creative things!
What do you want to create with paper?`,
      extensionCn: `你可以用纸做什么？
你可以改变纸。

这些是彩色铅笔。
你可以用铅笔给纸上色。
你可以画出不同的形状和图画。
你想用颜色来改变纸张吗？
你可以用纸做什么？
你可以剪纸。

女孩正在用剪刀剪纸。
你可以剪出星星和心形等形状。
你想把纸剪成心形吗？
你可以用纸做什么？
你可以撕纸。

男孩正在撕纸。
你可以把纸撕成小片。
你想撕纸吗？
你可以用纸做什么？
你可以卷纸。

女孩把纸卷成像喇叭一样的筒。
女孩通过纸喇叭说话。
你想把纸卷成喇叭吗？
你可以用纸做什么？
你可以折纸。

男孩正在折纸。
你能用纸折一架飞机吗？
你还可以用纸折出小动物或帽子。
你想试着折一架纸飞机吗？
你可以用纸做什么？
你可以用胶水粘纸。

女孩正在粘纸。
她正在制作一张贺卡。
纸的形状是心形的。
她正在把心形贴在贺卡上。
你可以用纸做什么？
你可以用胶带粘纸。

女孩正在用胶带粘纸。
女孩用胶带和纸搭建了一座房子。
这座房子很坚固，可以独立站立。
你也想做一个纸房子吗？
纸可以很好玩！
我们可以在纸上画画。

我们可以用纸剪一个雪花。
我们可以用纸做一艘船，把它放到河上。
纸可以用来做许多有创意的事情！
你想用纸做什么呢？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-36",
      level: "b",
      episode: "B36",
      title: "Bananas Sometimes",
      extensionEn: `What do bananas look like?
Sometimes bananas look like hands.

These two bunches of bananas look like the boy's hand.
Each bunch has five bananas.
They look like five fingers.
What do bananas look like?
Sometimes bananas look like boats.

The boy pretends the banana is a boat.
He rows it.
What do bananas look like?
Sometimes bananas look like pencils.

The boy pretends the banana is a pencil.
He draws on paper with it.
What do bananas look like?
Sometimes bananas look like spiders.

This is a spider web.
The bananas look like spiders.
They hang from the web.
What do bananas look like?
Sometimes bananas look like telephones.

The boy pretends the banana is a telephone.
He talks on it.
What do bananas look like?
Sometimes bananas look like smiles.

The boy holds the banana over his mouth.
It looks like a big smile.
What do bananas look like?
Sometimes bananas look like frowns.

The boy holds the banana over his mouth.
This time, he turns it the other way.
That makes the boy look unhappy.
No matter what bananas look like, bananas always look good to eat.

The boy is eating a banana.
There are many bananas on the desk.
There are three bunches of bananas.`,
      extensionCn: `香蕉是什么样子的？
有时候香蕉看起来像手。

这两串香蕉枝看起来像男孩的一只手。
每串有五根香蕉。
它们看起来像五个手指。
香蕉是什么样子的？
有时候香蕉看起来像小船。

男孩假装香蕉是一只小船。
他划着它。
香蕉是什么样子的？
有时候香蕉看起来像铅笔。

男孩假装香蕉是一支铅笔。
他在纸上画画。
香蕉是什么样子的？
有时候香蕉看起来像蜘蛛。

这是一个蜘蛛网。
香蕉看起来像蜘蛛。
它们挂在网上。
香蕉是什么样子的？
有时候香蕉看起来像电话。

男孩假装香蕉是一部电话。
他用它打电话。
香蕉是什么样子的？
有时候香蕉看起来像笑脸。

男孩把香蕉放在嘴上。
它看起来像一个大笑脸。
香蕉是什么样子的？
有时候香蕉看起来像皱眉。

男孩把香蕉放在嘴上。
这次他把它反过来。
这让男孩看起来不高兴。
无论香蕉看起来像什么，香蕉总是看起来好吃。

男孩在吃香蕉。
桌子上有很多香蕉。
桌子上有三串香蕉。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-37",
      level: "b",
      episode: "B37",
      title: "Henry's Hike",
      extensionEn: `Henry hikes into the park.

Henry and his daddy are going on a hike.
Look！They put on their hats.
They have backpacks on.
They wear comfy sneakers.
And they hold walking sticks.
Now, they hike into the park.
Henry hikes on the trail.
•
They are in the park now.
They are walking on the trail.
Look！There are so many tall trees.
The trail goes through the forest.
Henry hikes around the pond.

This is a big pond.
Look！There are swans and ducks swimming.
Over there, a boy and his dad are fishing.
Henry and his dad are hiking around the pond.
Henry hikes in the mud.

Oh no！It’s very muddy here.
There is mud everywhere.
Look at Henry’s shoes！
They are so muddy.
His pants are muddy too！
Henry hikes up the hill.

What are Henry and his daddy doing now?
They are hiking up the hill！
It’s hard to go uphill.
They have to climb slowly.
Henry hikes past the deer.

Look！What are those?
They are deer！
There are many deer here.
They are quietly eating grass.
Henry hikes down the hill.

Now they are going down the hill.
We must be careful when going down.
Step by step, they go down safely.
Henry hikes to the car.

Where are they now?
They are leaving the park.
They walk on the road to the car.
There are many cars on the road.
Henry and his daddy are so dirty.
They look very tired！`,
      extensionCn: `亨利徒步走进公园。

亨利和他的爸爸要去徒步旅行。
他们戴上了帽子。
他们背着背包。
他们穿着运动鞋。
他们拿着拐杖。
他们走进了公园。
亨利在小路上徒步。

他们现在在公园里。
他们走在小路上。
看！有这么多高大的树。
小路穿过了森林。
亨利在池塘周围徒步。

这是一个大池塘。
看！有天鹅和鸭子在游泳。
在那边，一个小男孩和他的爸爸在钓鱼。
亨利和他的爸爸在池塘边散步。
亨利在泥地里徒步。

哦，不！这里很泥泞。
到处都是泥。
看看亨利的鞋子！
它们满是泥。
他的裤子也沾满了泥！
亨利徒步上山。

现在亨利和他的爸爸在干什么？
他们正在爬山！
爬上山很难。
他们得慢慢爬。
亨利徒步经过鹿。

看！那些是什么？
它们是鹿！
这里有很多鹿。
它们安静地吃着草。
亨利徒步下山。

现在他们正在下山。
下山时我们要小心。
他们一步一步地安全下山。
亨利徒步走向汽车。

他们现在在哪里？
他们要离开公园了。
他们走在通往车子的路上。
路上有很多车。
亨利和他的爸爸都很脏了。
他们看起来很累！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-38",
      level: "b",
      episode: "B38",
      title: "Applesauce",
      extensionEn: `Some are red.

Let's make applesauce！
First, we need apples.
The girl is picking apples.
There are many apples on the tree.
These apples are red.
Oh no！One apple is falling on the ground！
Some are green.

The boy is buying apples.
He is holding a bag and picking apples.
Look, he is picking up an apple and is going to put it in the bag.
These apples are green.
Some are yellow.

The man is pushing a cart.
There are many things in the cart.
The man is buying apples too.
He is picking an apple.
What color is the apple?
It's yellow！
Cut the apples.

Look at the bowl.
There are different colors of apples.
They are red, green, and yellow.
What are they doing now?
They are cutting the apples.
They are cutting the apples into small pieces.
Cook the apples.

What is Dad doing now?
He is cooking the apples.
He is putting on a glove and holding a spoon.
He is stirring the apples in the pot.
Mash the apples.
•
What is Dad doing now?
He is mashing the apples.
He is holding a masher.
He is pressing down hard to make the apples soft.
Add cinnamon?

What are the kids doing?
The girl is holding the cinnamon jar.
They are going to add cinnamon！
They are sprinkling the cinnamon on the applesauce.
Applesauce！

The applesauce is ready！
They are eating the applesauce.
They are taking a big spoon and scooping some applesauce.
It looks so yummy！
They all enjoy the homemade applesauce.`,
      extensionCn: `一些是红色的。

我们来做苹果酱吧！
首先，我们需要苹果。
小女孩在摘苹果。
树上有很多苹果。
这些苹果是红色的。
哦，不！一个苹果掉在地上了！
一些是绿色的。

小男孩在买苹果。
他提着袋子，正在捡苹果。
看，他捡起一个苹果，准备把它放进袋子里。
这些苹果是绿色的。
一些是黄色的。

男人推着购物车。
购物车里有很多东西。
男人也在买苹果。
他正在拿起一个苹果。
这个苹果是什么颜色的？
是黄色的！
切苹果。

看看这个碗。
这里有不同颜色的苹果。
它们是红色、绿色和黄色的。
他们现在在做什么？
他们正在切苹果。
他们把苹果切成小块。
煮苹果。

爸爸现在在做什么？
他在煮苹果。
他戴上手套，拿着勺子。
他正在搅拌锅里的苹果。
捣碎苹果。

爸爸现在在做什么？
他在捣碎苹果。
他拿着捣碎器。
他用力按压，让苹果变得软软的。
加肉桂。

小朋友们在做什么？
小女孩正在拿着肉桂罐。
他们要加肉桂了！
他们正在把肉桂撒在苹果酱上。
苹果酱。

苹果酱做好了！
他们正在吃苹果酱。
他们用大勺子舀了一些苹果酱。
看起来好好吃！
他们都喜欢自制的苹果酱。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-39",
      level: "b",
      episode: "B39",
      title: "We Pack a Picnic",
      extensionEn: `We pack grapes:

The girl on the right is packing grapes in the basket.
Grapes are sweet and juicy！
Grapes are a great snack for everyone！
We pack sandwiches:

The girl on the left is placing yummy sandwiches in the basket.
Sandwiches are yummy to eat outside.
Each sandwich has tasty surprises！
We pack drinks:

The girl on the right is packing drinks in the basket.
Drinks are cool and refreshing.
She has juice boxes and sparkling water to enjoy！
We pack apples:

The girl on the left is putting the apples in the basket.
Apples are crunchy and delicious.
These are dried apple slices.
They are a healthy snack for everyone！
We pack cheese:

The girl on the right packs cheddar and mozzarella cheese in the basket.
Cheese is tasty with crackers.
Cheese adds yummy flavor to our picnic！
We pack carrots:

The girl on the left packs carrots in the basket.
Carrots are crunchy and bright！
They are great for our eyes！
We pack crackers:

The girl on the right packs crackers in the basket.
Crackers are crispy and fun to eat.
They are perfect for dipping in cheese！
We pack a picnic！

These girls are having a picnic outside.
They put the picnic blanket on the grass.
They put the foods and drinks on the blanket.
Picnics are so much fun with yummy food and drinks！`,
      extensionCn: `我们打包葡萄。

右边的女孩正在把葡萄装进篮子里。
葡萄又甜又多汁！
葡萄是大家都喜欢的健康零食！
我们打包三明治。

左边的女孩正在把美味的三明治放进篮子里。
外面吃三明治很好吃。
每个三明治里都有美味的惊喜！
我们打包饮料。

右边的女孩正在把饮料装进篮子里。
饮料又凉爽又清爽。
她有果汁盒和气泡水可以享用！
我们打包苹果。

左边的女孩正在把苹果放进篮子里。
苹果又脆又美味。
这些是干苹果片。
它们是大家都喜欢的健康零食！
我们打包奶酪。

右边的女孩把切达奶酪和马苏里拉奶酪放进篮子里。
奶酪配饼干非常美味。
奶酪会为我们的野餐增添美味的风味！
我们打包胡萝卜。

左边的女孩把胡萝卜装进篮子里。
胡萝卜又脆又亮！
胡萝卜对我们的眼睛很好！
我们打包饼干。

右边的女孩把饼干装进篮子里。
饼干又脆又好吃。
饼干非常适合蘸奶酪吃！
我们打包野餐！

女孩在外面野餐。
她们把野餐毯子放在草地上。
她们把食物和饮料放在毯子上。
野餐有美味的食物饮料，非常有趣！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-40",
      level: "b",
      episode: "B40",
      title: "The Picnic",
      extensionEn: `Ted and Peg go on a picnic.
They prepare for the picnic.
Peg gets a picnic basket.
Ted gets a blanket and some plates.
There is a little mouse on the page. Can you find it?
It's behind the stairs.
The basket is empty.
Ted puts in cheese.
Ted puts cheese in the basket.
Where is the mouse?
Can you find it?
What is the mouse looking at?
The mouse is looking at the cheese.
What can you see in the basket?
We see cheese.
Peg puts in sandwiches.
Peg puts sandwiches in the basket.
What is the mouse looking at?
The mouse is looking at the sandwiches.
What can you see in the basket?
We see cheese and sandwiches.
Ted puts in chips.
Ted puts chips in the basket.
Oh, Ted is eating chips.
The mouse is catching chips.
The mouse wants to eat chips, too.
The basket is full.
What can you see in the basket?
We see cheese, sandwiches, and chips.
This is a bag of chips.
Peg puts in soda pop.
Peg puts soda pop in the basket.
Ted puts in apples.
Ted puts apples in the basket.
Ted is juggling apples.
Ted throws apples into the air and makes circles.
Peg puts in cookies.
Peg puts cookies in the basket.
Peg is eating cookies.
The mouse is looking at the cookies.
The mouse wants to eat cookies.
What is in the basket now?
Cheese, sandwiches, chips, soda pop, apples, and cookies.
Oh, what's this?
The mouse is in the basket and eating.
Who put the mouse in the basket?
Maybe the mouse put itself in the basket.`,
      extensionCn: `泰德和佩格去野餐。
他们为野餐做准备。
佩格拿了一个野餐篮子。
泰德拿了一条毯子和一些盘子。
页面上有一只小老鼠，你能找到它吗？
它在楼梯后面。
篮子是空的。
泰德放了一些奶酪进去。
泰德把奶酪放进篮子里。
老鼠在哪里？
你能找到它吗？
老鼠在看什么？
老鼠在看奶酪。
你能在篮子里看到什么？
我们看到了奶酪。
佩格放了一些三明治进去。
佩格把三明治放进篮子里。
老鼠在看什么？
老鼠在看三明治。
你能在篮子里看到什么？
我们看到了奶酪和三明治。
泰德放了一些薯片进去。
泰德把薯片放进篮子里。
哦，泰德在吃薯片。
老鼠在抓薯片。
老鼠也想吃薯片。
篮子满了。
你能在篮子里看到什么？
我们看到了奶酪、三明治和薯片。
这是一个薯片袋。
佩格放了一些汽水进去。
佩格把汽水放进篮子里。
泰德放了一些苹果进去。
泰德把苹果放进篮子里。
泰德在抛接苹果。
泰德把苹果抛向空中并画圈。
佩格放了一些饼干进去。
佩格把饼干放进篮子里。
佩格在吃饼干。
老鼠在看饼干。
老鼠想吃饼干。
现在篮子里有什么？
奶酪、三明治、薯片、汽水、苹果和饼干。
哦，这是什么？
老鼠在篮子里吃东西。
谁把老鼠放进篮子里的？
也许老鼠自己爬进了篮子。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-41",
      level: "b",
      episode: "B41",
      title: "We Make Cookies",
      extensionEn: `We put in some flour.

The girl and her dad make cookies together.
What's this?
This is flour.
First, the girl puts some flour in the bowl.
Flour is white and soft.
We put in some sugar.

What's this?
This is sugar.
Then, Dad puts some sugar in the bowl.
Sugar is sweet and makes the cookies tasty.
We put in a little salt.

The girl puts salt in the bowl.
Salt makes the cookies better.
She sprinkles it gently.
We put in two eggs.

Dad puts eggs in the bowl.
How many eggs do they need?
They need two eggs.
Dad cracks the eggs.
The girl holds an egg carefully.
She wants to help Dad crack the eggs, too.
We put in some milk.

What is this?
This is milk.
Milk makes the cookies soft and yummy.
Dad and the girl pour the milk into the bowl together.
We put in some butter.

The girl is kneeling on the stool.
The girl is putting on thick gloves.
The girl adds the butter to the bowl.
Butter makes everything taste better！
We mix it up.

The girl and her dad stir the mixture with a big spoon.
They make sure everything is blended well.
The oven is over there.
They put the batter into the oven.
Dad puts it in the oven. Yum, yum！

The cookies bake and smell wonderful！
The girl can’t wait to eat the cookies！
Let's make some cookies too！`,
      extensionCn: `我们放一些面粉。

女孩和她的爸爸一起做饼干。
这是什么？
这是面粉。
首先，女孩把一些面粉放进碗里。
面粉是白色的和柔软的。
我们放一些糖。

这是什么？
这是糖。
然后，爸爸把一些糖放进碗里。
糖是甜的，可以让饼干变得美味。
我们放一点盐。

女孩把盐放进碗里。
盐可以让饼干更美味。
她轻轻撒上盐。
我们放两个鸡蛋。

爸爸把鸡蛋放进碗里。
他们需要多少个鸡蛋？
他们需要两个鸡蛋。
爸爸磕鸡蛋。
女孩小心翼翼地拿着一个鸡蛋。
她也想帮爸爸磕鸡蛋。
我们放一些牛奶。

这是什么？
这是牛奶。
牛奶让饼干变得柔软和美味。
爸爸和女孩一起把牛奶倒进碗里。
我们放一些黄油。

女孩跪在凳子上。
女孩戴上厚手套。
她把黄油放进碗里。
黄油让一切都更美味！
我们把它们混合在一起。

女孩和她的爸爸用大勺子搅拌混合物。
他们确保所有的材料都混合得很好。
烤箱在那边。
他们把面糊放进烤箱。
爸爸把它放进烤箱。好香啊！

饼干在烤箱里烤，散发出美妙的香味！
女孩迫不及待想吃饼干！
让我们也来做一些饼干吧！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-42",
      level: "b",
      episode: "B42",
      title: "Halloween Costumes",
      extensionEn: `I look like a flower.
•
My costume is colorful and bright.
I have petals all around me.
I smell so sweet！
Everyone loves flowers.
They make people smile！
I look like a bat.
•
I have soft wings.
They can flap quietly.
I hang upside down in the dark.
Just like real bats！
I can see in the dark.
I fly silently at night.
I look like a clown.
•
I have a big red nose.
I have a funny hat.
I can make people laugh.
I use my silly tricks！
Everyone loves a clown.
I bring laughter and fun！
I look like a superhero.
•
I wear a cape and a mask.
I hide my identity.
I can fly high.
I save the day！
I help people in need.
I fight for justice.
I look like a tiger.
•
I have orange and black stripes.
I can growl softly.
I sneak around like a big cat！
I am strong and powerful.
I prowl through the jungle.
I look like a pirate.
•
I have a big hat.
I have a shiny sword.
I cover my eye with a patch.
I look like a true pirate！
I search for treasure.
I search for treasure on the high seas！
I look like a dragon.
•
I have big wings.
I have shiny scales.
I can roar loudly.
I can breathe fire！
Dragons are magical creatures.
They have great strength！
What is this costume?
•
It looks like a butterfly.
This costume is fun and creative！
It helps me become someone special for Halloween.
I can pretend to be anything I want！
With my costume！`,
      extensionCn: `我看起来像一朵花。

我的服装是多彩而明亮的。
我身边有花瓣。
我闻起来很甜美！
每个人都喜欢花。
它们能让人们微笑！
我看起来像一只蝙蝠。

我有柔软的翅膀。
它们可以安静地拍动。
我像真正的蝙蝠一样倒挂在黑暗中！
就像真正的蝙蝠一样！
我可以在黑暗中看见东西。
我晚上静静地飞翔。
我看起来像一个小丑。

我有一个大红鼻子。
我有一个有趣的帽子。
我可以让大家笑。
我用搞笑的把戏！
每个人都喜欢小丑。
我带来了欢笑和乐趣！
我看起来像一个超级英雄。

我穿着斗篷和面具。
我隐藏我的身份。
我可以飞得很高。
我拯救世界！
我帮助有需要的人。
我维护正义。
我看起来像一只老虎。

我身上有橙色和黑色的条纹。
我可以轻声咆哮。
我像大猫一样悄悄走动！
我强壮而有力。
我穿梭于丛林中。
我看起来像一个海盗。

我戴着大帽子。
我手里拿着闪亮的剑。
我用眼罩遮住我的眼睛。
我像一个真正的海盗！
我寻找宝藏。
我在大海上寻找宝藏！
我看起来像一条龙。

我有大翅膀。
我有闪亮的鳞片。
我可以大声咆哮。
我能喷火！
龙是神奇的生物。
它们拥有强大力量！
这是什么服装？

它看起来像一只蝴蝶。
这个服装有趣且富有创意！
它让我在万圣节变成特别的人。
我可以假装成我想要的任何东西！
用我的服装！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-43",
      level: "b",
      episode: "B43",
      title: "On Thanksgiving",
      extensionEn: `We drive on Thanksgiving.

This is a family.
This is dad, this is mom, and these are the kids.
Dad is driving the car.
These two kids are playing with toys.
This kid is listening to music with headphones.
We visit family on Thanksgiving.

It is Thanksgiving.
The family is visiting their grandparents.
This is grandma, she is hugging these two kids.
This is grandpa, he is going to carry the kid.
We watch football on Thanksgiving.

They are sitting on the sofa.
They are watching football.
Look, this boy is sitting on the floor.
This girl is reading a book and listening to music with headphones.
Maybe she doesn’t like watching football.
We play games on Thanksgiving.

What are they doing?
The grandparents are playing games with the kids.
It looks interesting.
They are having fun.
We cook on Thanksgiving.

They are cooking now.
Thanksgiving dinner is important.
Grandpa and dad are cooking the turkey.
Grandma and mom are making salad.
The boy is helping cook too.
The girl is taking care of the little kid.
We eat on Thanksgiving.

Wow, there is a lot of food.
It’s meal time.
Look, there is a big turkey in the middle of the table.
Do you want to take a bite?
Turkey is a must-have food on Thanksgiving.
We clean up on Thanksgiving.

They finished the meal.
They are cleaning up the dishes.
The girl and the boy are helping.
Where are dad and the little kid?
Maybe dad is taking care of the little kid.
We sleep on Thanksgiving.

It’s late, they are tired and sleepy.
These two kids are sleeping in bed.
The girl is sleeping on the sofa.
Mom and dad are tucking them in.
The little kid has already fallen asleep.
Good night.`,
      extensionCn: `我们在感恩节开车。

这是一个家庭。
这是爸爸，这是妈妈，这是孩子们。
爸爸在开车。
这两个孩子在玩玩具。
这个孩子戴着耳机在听音乐。
我们在感恩节拜访家人。

现在是感恩节。
这家人正在拜访祖父母。
这是奶奶，她正在抱着这两个孩子。
这是爷爷，他要抱起孩子。
我们在感恩节看橄榄球比赛。

他们坐在沙发上。
他们在看橄榄球比赛。
看，这个男孩坐在地上。
这个女孩在看书，戴着耳机听音乐。
也许她不喜欢看橄榄球比赛。
我们在感恩节玩游戏。

他们在做什么？
祖父母正在和孩子们玩游戏。
看起来很有趣。
他们玩得很开心。
我们在感恩节做饭。

他们正在做饭。
感恩节晚餐很重要。
爷爷和爸爸正在烤火鸡。
奶奶和妈妈正在做沙拉。
男孩也在帮忙做饭。
女孩正在照顾小孩子。
我们在感恩节吃饭。

哇，有很多食物。
是吃饭时间了。
看，桌子中间有一只大火鸡。
你想尝一口吗？
火鸡是感恩节的必备食物。
我们在感恩节收拾。

他们吃完饭了。
他们正在收拾碗盘。
女孩和男孩在帮忙。
爸爸和小孩子在哪里？
也许爸爸在照顾小孩子。
我们在感恩节睡觉。

已经很晚了，他们又累又困。
这两个孩子在床上睡觉。
女孩在沙发上睡觉。
妈妈和爸爸在给他们盖被子。
小孩子已经睡着了。
晚安。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-44",
      level: "b",
      episode: "B44",
      title: "The Aquarium.",
      extensionEn: `Fish swim in this tank.
•
What is an aquarium？
An aquarium is a place where we can see many sea animals.
Look at all the fish！
Some fish are small, and some are big.
Rays glide in this tank.
•
These are rays.
They are big and flat.
Look at their bellies, they are white！
There is a worker here, feeding the rays.
He is wearing a big oxygen tank to breathe underwater.
Otters turn in this tank.
•
These are otters.
What are they doing？
They are swimming and playing.
Look, they are turning and floating on their backs！
Jellyfish float in this tank.
•
These are jellyfish.
Look, they are so clear and see-through！
They float up and down in the water.
The jellyfish look like little umbrellas.
Don’t touch them, they can sting！
Turtles eat in this tank.
•
This is a big turtle.
The turtle is eating some food.
Look, people are feeding the turtles！
The turtle moves slowly .
Turtles have strong shells .
Seals flip in this tank.
•
These are seals.
Look, the seals are flipping in the water！
They can swim really fast and jump out of the water.
The seals like to play with each other.
Dolphins play in this tank.
•
Look at the dolphins！
They are playing with balls in the water.
The dolphins are jumping high and splashing.
Dolphins are very smart and love to play.
Whales dive in this tank.
•
Look at the big whales！
They are diving deep into the water.
Whales are the biggest animals in the ocean.
When they swim, they move slowly and gracefully.`,
      extensionCn: `鱼在这个水缸里游泳。

什么是水族馆？
水族馆是一个我们可以看到许多海洋生物的地方。
看，很多鱼！
有些鱼很小，有些鱼很大。
鳐鱼在这个水缸里滑行。

这些是鳐鱼。
它们又大又扁。
看它们的肚子，它们是白色的！
这里有个工作人员，正在喂鳐鱼。
他戴着一个大氧气罐在水里呼吸。
水獭在这个水缸里翻转。

这些是水獭。
它们在做什么？
它们在游泳和玩耍。
看，它们在翻转，还在仰泳！
水母在这个水缸里漂浮。

这些是水母。
看，它们是透明的！
它们在水里上下漂浮。
水母看起来像小伞一样。
不要碰它们，它们会蛰人！
乌龟在这个水缸里吃东西。

这是一只大乌龟。
乌龟正在吃东西。
看，人们正在喂乌龟！
乌龟动作很慢。
乌龟有坚硬的壳
海豹在这个水缸里翻滚。

这些是海豹。
看，海豹在水里翻滚！
它们游得很快，还能跳出水面。
海豹喜欢互相玩耍。
海豚在这个水缸里玩耍。

看海豚！
它们在水里玩球。
海豚跳得很高，还会溅起水花。
海豚非常聪明，喜欢玩耍。
鲸鱼在这个水缸里潜水。

看这些大鲸鱼！
它们潜入了水里。
鲸鱼是海洋里最大的动物。
它们游得很慢但很优雅。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-45",
      level: "b",
      episode: "B45",
      title: "Too High",
      extensionEn: `This chair is too high.
•
The boy is climbing a green chair.
On the counter, there is an orange bowl.
The boy wants to reach the bowl.
The chair is too high. He can't climb up and get the bowl.
This hook is too high.
•
The boy is standing on tiptoe.
He wants to reach the hat.
But the hook is too high. He can't reach the hat.
This shelf is too high.
•
This is a shelf.
There are many toys on the shelf.
There is an airplane on the top shelf.
The boy wants to reach the airplane.
But the shelf is too high. He can't reach airplane.
This sink is too high.
•
This is a sink.
There is a tap.
The boy wants to wash his hands.
He wants to turn on the tap.
But the sink is too high. He can't reach the tap.
This tree is too high.
•
A kite is stuck in the tree.
The boy is looking at the tree.
He wants to get the kite down.
But the tree is too high. He can't reach the kite.
This roof is too high.
•
A Frisbee is on the roof.
The boy is looking at the roof.
He wants to get the Frisbee down.
But the roof is too high. He can't get the Frisbee down.
This hoop is too high.
•
The boy is playing basketball.
This is a hoop.
The boy needs to throw the ball into the hoop.
But the hoop is too high. He can't throw the ball into the hoop.
This head is just right!
•
What is the boy doing?
The boy is patting a dog.
The height of the dog’s head is just right.
The dog’s head is not too high.
The boy can pat the dog.`,
      extensionCn: `椅子太高了。

他正在爬一把绿色的椅子。
柜台上有一个橙色的碗。
男孩想拿到碗。
椅子太高了，他无法爬上去拿碗。
钩子太高了。

男孩踮起脚尖站着。
他想要够到帽子。
但是钩子太高了，他够不到帽子。
架子太高了。

这是一个架子。
架子上有很多玩具。
顶层架子上有架飞机。
男孩想要够到飞机。
但是架子太高了，他够不到飞机。
水槽太高了。

这是一个水槽。
有一个水龙头。
男孩想洗手。
他想打开水龙头。
但是水槽太高了，他够不到水龙头。
这棵树太高了。

风筝卡在树上了。
男孩在看着树。
他想把风筝取下来。
但是树太高了，他够不到风筝。
这个屋顶太高了。

飞盘在屋顶上。
男孩在看着屋顶。
他想把飞盘取下来。
但是屋顶太高了，他拿不下来飞盘。
篮框太高了。

男孩在打篮球。
这是一个篮框。
男孩需要把球投进篮框。
但是篮框太高了，他无法把球投进去。
这个高度刚刚好！

这个男孩在做什么？
男孩在拍一只狗。
狗的头的高度刚刚好。
狗的头不太高。
男孩可以拍狗。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-46",
      level: "b",
      episode: "B46",
      title: "Trucks",
      extensionEn: `Some trucks carry mail.

Look, this truck is carrying mail!
It has letters and packages inside.
The mail truck brings letters to our homes.
The driver helps deliver our mail.
Some trucks carry animals.

This truck is carrying animals!
Look, there are animals inside.
The animals are going to a farm.
The truck is big so the animals can stay safe inside.
Some trucks carry garbage.

This truck is carrying garbage!
It's called a garbage truck.
It picks up trash from the streets.
The truck helps keep our city clean!
Some trucks carry logs.

Look, this truck is carrying logs!
Logs are big pieces of wood.
The truck takes the logs to a factory.
The logs will be used to make houses and furniture.
Some trucks carry cement.

This truck is carrying cement!
Cement helps build roads and buildings.
The cement truck has a big drum that spins.
It mixes the cement while driving!
Some trucks carry ice cream.

Look, the ice cream truck is here!
It carries lots of yummy ice cream.
The truck has a freezer inside to keep the ice cream cold.
Would you like some ice cream?
Some trucks carry cars.

This truck is carrying cars!
Look, there are many cars on the truck.
The truck takes new cars to the car shop.
These cars will be sold to people.
Some trucks carry trucks.

Look, a truck carrying trucks!
It's a big truck with smaller trucks on it.
The truck is delivering new trucks.
These trucks will help with lots of work.`,
      extensionCn: `一些卡车运送邮件。

看，这辆卡车正在运送邮件！
里面有信件和包裹。
邮车把信件送到我们家。
司机帮助送我们的邮件。
一些卡车运送动物。

这辆卡车正在运送动物！
看，里面有动物。
动物们正被送往农场。
卡车很大，这样动物们在里面就很安全。
一些卡车运送垃圾。

这辆卡车正在运送垃圾！
这叫垃圾车。
它从街上收集垃圾。
这辆卡车帮助保持我们的城市清洁！
一些卡车运送原木。

看，这辆卡车正在运送原木！
原木是大块的木头。
卡车把原木送到工厂。
这些原木将用来制造房屋和家具。
一些卡车运送水泥。

这辆卡车正在运送水泥！
水泥帮助建造道路和建筑物。
水泥车有一个旋转的大滚筒。
它在行驶时混合水泥！
一些卡车运送冰淇淋。

看，冰淇淋车来了！
它带了许多美味的冰淇淋。
卡车里面有一个冰柜，可以保持冰淇淋的冷冻状态。
你想要一些冰淇淋吗？
一些卡车运送汽车。

这辆卡车正在运送汽车！
看，卡车上有很多汽车。
卡车把新车运到汽车店。
这些车将被卖给人们。
一些卡车运送卡车。

看，一辆卡车在运送卡车！
这是一辆载着小卡车的大卡车。
这辆卡车正在运送新卡车。
这些卡车将帮助完成许多工作。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-47",
      level: "b",
      episode: "B47",
      title: "So Many Shops",
      extensionEn: `This shop sells bread.

Look, there are many kinds of bread in this shop!
You can smell the fresh bread when you walk in.
The baker works hard to make the bread every morning.
This shop sells fish.

This shop has many fish from the ocean.
The fish are kept on ice to stay fresh.
People come here to buy fish for their dinner.
This shop sells flowers.

Look at all the colorful flowers in this shop!
The flowers smell so nice.
People buy flowers to give as gifts or decorate their homes.
This shop sells meat.

You can see all the cuts of meat in the display.
The butcher cuts the meat for the customers.
People buy meat to cook for their family.
This shop sells cheese.

This shop has many types of cheese.
The cheese is made from milk.
People love to eat cheese with bread or crackers.
This shop sells fruit.

Look at all the bright fruit in this shop!
The fruit is fresh and good for you.
People buy fruit to eat as a snack or make juice.
This shop sells vegetables.

This shop has lots of green vegetables.
Vegetables help us stay healthy and strong.
People come here to buy vegetables for their meals.
So many shops sell so many things.

There are so many different kinds of shops!
Each shop has something special for people to buy.
People visit these shops every day to get what they need.`,
      extensionCn: `这家商店卖面包。

看，这家商店里有很多种类的面包！
你走进去时能闻到新鲜面包的香味。
面包师傅每天早晨都努力做面包。
这家商店卖鱼。

这家商店有很多来自海洋的鱼。
鱼放在冰上保持新鲜。
人们来这里买鱼做晚餐。
这家商店卖花。

看这家商店里各种颜色的花！
花闻起来非常香。
人们买花送礼物或装饰家里。
这家商店卖肉。

你可以在展示柜里看到各种肉块。
屠夫为顾客切肉。
人们买肉为家人做饭。
这家商店卖奶酪。

这家商店有很多种类的奶酪。
奶酪是用牛奶做的。
人们喜欢把奶酪和面包或饼干一起吃。
这家商店卖水果。

看这家商店里的水果多么鲜艳！
水果新鲜又对身体好。
人们买水果当零食吃或榨果汁。
这家商店卖蔬菜。

这家商店有很多绿色的蔬菜。
蔬菜帮助我们保持健康和强壮。
人们来这里买蔬菜做饭。
有如此多的商店售卖着如此多的东西。

有很多不同种类的商店！
每个商店都有一些特别的东西供人们购买。
人们每天都来这些商店买他们需要的东西。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-48",
      level: "b",
      episode: "B48",
      title: "Animal Caution Signs",
      extensionEn: `Caution. Watch for ducks.

Look for little ducks waddling!
Ducks swim in ponds and quack.
Stop if a duck crosses the road!
Ducks are friendly and love to play.
Caution. Watch for cattle.

Cattle are big and moo.
They eat grass in fields and give us milk.
Some cattle have big horns.
Be careful if cattle are near the road!
Caution. Watch for deer.

Deer run fast and jump high!
They eat grass, leaves, and fruits.
Deer have beautiful antlers.
Stay quiet and watch a deer!
Caution. Watch for moose.

Moose are very big with antlers.
They stand by lakes and rivers.
Moose can run fast.
Watch for moose crossing the road!
Caution. Watch for kangaroos.

Kangaroos hop with strong legs.
They carry babies in pouches.
Kangaroos can jump very high and far!
Watch a kangaroo jump if you see one!
Caution. Watch for elephants.

Elephants are the biggest animals!
They have long trunks and big ears.
Elephants use their trunks to drink water.
Look at how big elephants are!
Caution. Watch for monkeys.

Monkeys are playful and love to climb trees.
They make funny noises and swing from branch to branch.
Monkeys might grab your snacks!
Be careful and watch them play!
Caution. Watch for turtles.

Turtles move slowly and have hard shells.
They sit on rocks and bask in the sun.
Turtles swim gracefully in the water.
Watch how a turtle walks if you see one!
Caution. Watch for chickens.

Chickens cluck and run around the farm.
They lay eggs that we can eat.
You can see chickens on farms.
Be gentle if you see chickens!
Caution. Watch for animals.

Many animals are around us in nature.
Some are small, some are big and fluffy.
Be careful and respect all animals!
Keep a safe distance from wild animals.`,
      extensionCn: `注意。注意鸭子。

看小鸭子走路！
鸭子在池塘里游泳，嘎嘎叫。
如果鸭子过马路，停下来！
鸭子很友好，喜欢玩耍。
注意。注意牛。

牛很大，会哞哞叫。
它们在田里吃草，给我们提供奶。
有些牛有很大的角。
牛在路边时要小心！
注意。注意鹿。

鹿跑得快，还能跳得高！
它们吃草、树叶和水果。
鹿有漂亮的鹿角。
安静地看鹿！
注意。注意驼鹿。

驼鹿非常大，有鹿角。
它们在湖边和河边。
驼鹿能跑得很快。
小心驼鹿过马路！
注意。注意袋鼠。

袋鼠用强壮的腿跳。
它们把宝宝放在育儿袋里。
袋鼠能跳得又高又远！
如果你看到袋鼠，看看它是如何跳的！
注意。注意大象。

大象是最大的动物！
它们有长鼻子和大耳朵。
大象用鼻子喝水。
看看大象有多大！
注意。注意猴子。

猴子喜欢玩耍，爱爬树。
猴子发出有趣的声音，在树枝间摆荡。
猴子可能会抢你的零食！
小心，观察它们玩耍！
注意。注意乌龟。

乌龟移动缓慢，有坚硬的壳。
它们喜欢坐在岩石上，晒太阳。
乌龟在水中游得很优雅。
如果你看到乌龟，看看它是如何走的！
注意。注意鸡。

鸡在农场里咯咯叫，四处跑动。
它们下蛋，我们可以吃。
你可以在农场看到鸡。
如果你看到鸡，要温柔些！
注意。注意动物。

我们身边有很多动物。
有些动物很小，有些动物很大、毛茸茸。
小心，尊重所有动物！
与野生动物保持安全距离。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-49",
      level: "b",
      episode: "B49",
      title: "Stop That Cat!",
      extensionEn: `Cat zooms past the door.

Look out! The cat is going outside!
The cat is running very quickly!
Where will the cat go?
Let’s keep reading to find out!
Cat zooms past the car.

Where is the cat now?
The cat is zooming past the car!
The cat is still running fast!
It looks just like a little rocket!
Cat zooms past the yard.

The cat is running out of the yard!
Where will the cat go now?
The boy is looking outside from the window.
Maybe the boy wants to know where the cat will go!
Cat zooms past the fence.

Are you tired, little cat?
You have been running for a long time!
Where do you want to go next?
Cat zooms past the tree.

The cat runs so fast!
Look at the tree; it’s leaning and losing its leaves!
Look at the apples!
The apples are falling from the tree!
Cat zooms past the dog.

The dog is spinning around and about to fall!
The dog trips and falls!
The dog barks in surprise!
The cat is too quick!
But the cat just keeps zooming along!
Cat zooms past the boy.

The cat is going home now.
The cat is still running!
The boy looks helpless.
The picture on the wall seems to be flying!
Cat needs a long nap!

Oh, the cat is sleeping!
After all that zooming, the cat is tired!
It finds a cozy spot to curl up and sleep.
Sweet dreams, little cat!`,
      extensionCn: `小猫从门口飞奔而过。

小心！猫要出去啦！
猫跑得非常快！
猫要去哪里呢？
让我们继续阅读，看看吧！
小猫从车旁飞驰而过。

猫现在在哪里呢？
猫从车旁飞奔而过！
猫仍然跑得很快！
它看起来像小火箭一样快！
小猫从院子飞驰而过。

猫正跑出院子！
猫现在要去哪里呢？
男孩正在窗户旁向外看。
也许男孩想知道猫要去哪里！
小猫从篱笆旁飞驰而过。

小猫，你累了吗？
你跑了很长时间了！
你接下来想去哪儿？
小猫从树旁飞驰而过。

猫跑得真快！
看看那棵树，它在倾斜，叶子也在掉落！
看看看那些苹果！
苹果从树上掉下来了！
小猫从狗旁飞驰而过。

狗在转圈，快要摔倒了！
狗摔倒了！
狗惊讶地叫了起来！
猫太快了！
但猫仍然继续飞奔！
小猫从男孩旁飞驰而过。

猫现在要回家了。
猫仍然在跑！
男孩看起来无奈。
墙上的画似乎要飞起来了！
猫需要一个长长的午睡！

哦，猫在睡觉！
在这么快的奔跑后，猫累了！
它找个舒适的地方蜷缩起来睡觉。
小猫，祝你做个好梦！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-50",
      level: "b",
      episode: "B50",
      title: "Go Animals Go",
      extensionEn: `The cow is in a car.

What animal is this? This is a cow.
What kind of vehicle is this? It's a car.
The cow is driving the car down the road.
The car moves fast on the road.
The wind blows away the cow’s hat.
The pig is on a bike.
•
What animal is this? This is a pig.
What kind of vehicle is this? It's a bike.
The pig is pedaling the bike.
The bike moves quickly on the road.
The pig rings the bell and says, "Ding! Ding!"
The goat is in a boat.

What animal is this? This is a goat.
What kind of vehicle is this? It's a boat.
The goat is steering the boat.
The boat sails down the river.
The goat watches fish jump in the water.
The dog is on a train.

What animal is this? This is a dog.
What kind of vehicle is this? It's a train.
The dog is driving the train.
The train moves quickly on the tracks.
The train engine is making a lot of smoke.
The bird is on skates.

What animal is this? This is a bird.
What kind of vehicle is this? It's a skate.
The bird is gliding on the road.
The skates move swiftly on the road.
The bird spreads its wings and balances while skating.
The duck is in a plane.

What animal is this? This is a duck.
What kind of vehicle is this? It's a plane.
The duck is flying the plane high in the sky.
The plane flies through the clouds.
The cat is on a horse.
•
What animal is this? This is a cat.
What kind of vehicle is this? It's a horse.
The cat is holding the reins.
The horse trots down the road.
Hold the reins tight, don't fall over.
Go, animals, go!

Every animal is on the move.
Some of them are moving on the ground.
Some of them are moving in the sky.
Some of them are moving on the water.
Who will reach first?`,
      extensionCn: `牛在车里。

这是什么动物？这是一头牛。
这是什么交通工具？这是辆车。
牛正在开车沿着路行驶。
车子在路上快速移动。
风把牛的帽子吹走了。
猪骑着自行车。

这是什么动物？这是一头猪。
这是什么交通工具？这是一辆自行车。
猪正在蹬自行车。
自行车在路上快速移动。
猪按响铃铛，说“叮叮！”
山羊在船上。

这是什么动物？这是一只山羊。
这是什么交通工具？这是一艘船。
山羊正在掌舵。
船在河上航行。
山羊看着鱼在水里跳跃。
狗在火车上。

这是什么动物？这是一只狗。
这是什么交通工具？这是一列火车。
狗在驾驶火车。
火车快速地在轨道上行驶。
火车的引擎正在冒出大量烟雾。
鸟穿着溜冰鞋。

这是什么动物？这是一只鸟。
这是什么交通工具？这是一双溜冰鞋。
鸟在路上滑行。
溜冰鞋在路上快速滑动。
鸟展开翅膀，保持平衡。
鸭子在飞机里。

这是什么动物？这是一只鸭子。
这是什么交通工具？这是一架飞机。
鸭子正在高高飞行。
飞机穿过云层。
猫骑在马背上。

这是什么动物？这是一只猫。
这是什么交通工具？这是一匹马。
猫抓着缰绳。
马在路上小跑着。
抓紧缰绳，不要摔倒。
动物们，出发吧！

每个动物都在移动。
一些动物在地面上移动。
一些动物在天空中移动。
一些动物在水上移动。
谁会第一个到达呢？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-51",
      level: "b",
      episode: "B51",
      title: "I Read a Book.",
      extensionEn: `I read with my mom.

They read in the room.
They sit on the chair at the table.
This is a lamp.
We need to turn on the lamp when it's dark to read.
I read with my dad.

They read under the tree.
They sit on the bench.
The girl sits on her dad's lap.
The bird sings around them.
I read with my grandma.

The girl likes reading.
Now she reads with her grandma.
They read on the sofa.
The girl wears glasses.
Her grandma wears glasses too.
We need to protect our eyes.
I read with my grandpa.

They read on the chair.
Grandpa wears glasses too.
Aha, they all wear glasses.
This family all likes reading.
I read with my aunt.

They read on the step of the garden.
The view is beautiful.
It's good to read outdoors.
I read with my sister.

They read on the bed.
They lie on the bed, holding a book together.
The girl opens the book with her right hand.
Her sister holds the book with her left hand.
I read with my brother.

They read on the floor.
The girl's brother points to a page.
The girl's brother may ask a question.
The girl answers him.
I read to my dog.

What does the girl do now?
The girl reads to her dog.
What do they read?
They read a book about a cat.
The girl really likes reading.
The dog likes listening to stories too.`,
      extensionCn: `我跟妈妈一起读书。

他们在房间里读书。
他们坐在桌子旁的椅子上。
这是一盏灯。
天黑时我们需要打开灯来读书。
我跟爸爸一起读书。

他们在树下读书。
他们坐在长椅上。
女孩坐在爸爸的腿上。
小鸟在他们周围歌唱。
我跟奶奶一起读书。

女孩喜欢读书。
现在她跟奶奶一起读书。
他们在沙发上读书。
女孩戴着眼镜。
奶奶也戴着眼镜。
我们需要保护眼睛。
我跟爷爷一起读书。

他们在椅子上读书。
爷爷也戴着眼镜。
哈哈，他们都戴眼镜。
这家人都喜欢读书。
我跟阿姨一起读书。

他们在花园的台阶上读书。
风景很美。
在户外读书真好。
我跟姐姐一起读书。

他们在床上读书。
他们趴在床上，一起拿着一本书。
女孩用右手翻开书。
她的姐姐用左手拿着书。
我跟弟弟一起读书。

他们在地板上读书。
女孩的弟弟指着一页。
女孩的弟弟可能会问问题。
女孩回答他。
我给我的狗读书。

女孩现在在做什么？
女孩正在给她的狗读书。
他们在读什么？
他们在读一本关于猫的书。
女孩真的很喜欢读书。
狗狗也喜欢听故事。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-52",
      level: "b",
      episode: "B52",
      title: "I Pick Up",
      extensionEn: `I pick up my ball.
•
This is the boy's room,
It's all messy.
Toys are everywhere.
Let's clean up the room together!
The boy picks up the ball,
And puts it in its box.
I pick up my book.
•
The boy picks up a book and reads it.
What is the book about?
It's about a cow.
Look at the cover, there is a cow.
Remember to place it on the shelf after reading.
I pick up my shoes.
•
What is the boy picking up now?
He is picking up his shoes.
Remember to line them up neatly on the floor.
I pick up my hat.
•
The boy picks up the hat.
And puts it on his head.
Remember to put it away after that.
You can hang it on the hook.
I pick up my teddy bear.
•
Wow, the room is clean now.
The boy picks up the teddy bear.
And gives it a big hug.
Where does the boy want to put the teddy bear?
I pick up my cars.
•
Oh, he puts the teddy bear in the box.
The boy picks up his cars now.
And puts them in the box.
The box is full.
This is the ball he picked up before.
I pick up my blanket.
•
The room is clean now.
The floor is clean.
The bed is clean.
The boy picks up the blanket.
He folds it nicely and places it on the bed.
Now my room is all picked up!
•
It's tidy and clean.
Mom thinks the boy did a good job.
Mom gives the boy a big hug and a smile.
We need to clean our room like the boy.`,
      extensionCn: `我捡起我的球。

这是男孩的房间，
它乱七八糟的。
玩具到处都是。
让我们一起把房间收拾干净吧！
男孩捡起球，
然后把它放进盒子里。
我捡起我的书。

男孩捡起书然后看书。
书是关于什么的？
是关于一头牛的。
看封面，这里有一头牛。
记得看完后把它放回书架上。
我捡起我的鞋子。

男孩现在在捡什么？
他在捡他的鞋子。
记得把它们整齐地摆在地上。
我捡起我的帽子。

男孩在捡帽子。
然后戴在头上。
记得之后要把它收好。
你可以把它挂在挂钩上。
我捡起我的泰迪熊。

哇，房间现在很干净了。
男孩捡起了泰迪熊。
然后给它一个大大的拥抱。
男孩想把泰迪熊放在哪里？
我捡起我的玩具车。

哦，他把泰迪熊放进了箱子里。
男孩现在在捡他的玩具车。
然后把它们放进箱子里。
箱子满了。
这是他之前捡起的球。
我捡起我的毯子。

房间现在干净了。
地板很干净。
床也很干净。
男孩捡起了毯子。
然后把它叠得整整齐齐地放在床上。
现在我的房间收拾得整整齐齐！

它又整洁又干净。
妈妈觉得男孩做得很好。
妈妈给了男孩一个大大的拥抱和微笑。
我们要像男孩一样收拾房间。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-53",
      level: "b",
      episode: "B53",
      title: "You and I",
      extensionEn: `You and I swing.

The boy and the girl are on the swing.
They push each other higher.
The sun is shining, and they are laughing.
You and I slide.

The boy and the girl are on the slide.
They climb up and slide down together.
They giggle at the bottom.
You and I ride.

The boy and the girl are on the roundabout.
They hold on tight as it spins.
There is a slide and ladder at the playground.
You and I hike.

The boy and the girl are hiking.
The boy has a stick.
They climb up a hill.
You and I bike.

The boy and the girl are riding bikes.
The boy's bike has training wheels.
They wear helmets for safety.
You and I run.

The boy and the girl are running on the grass.
They race each other.
The boy runs fast, and the girl tries to catch him.
You and I dance.

The boy and the girl are dancing.
They hold hands and twirl.
You and I have lots of fun.

The boy and the girl are having a picnic.
They are eating sandwiches.
The girl lies on the blanket and feeds ants.`,
      extensionCn: `你和我荡秋千。

男孩和女孩在荡秋千。
他们推着对方，荡得更高。
阳光明媚，他们在笑。
你和我滑滑梯。

男孩和女孩在滑滑梯。
他们一起爬上去滑下来。
他们在底部咯咯笑。
你和我骑车。

男孩和女孩在旋转木马上。
他们紧紧抓住，随着它转动。
游乐场有滑梯和攀爬架。
你和我远足。

男孩和女孩在远足。
男孩手里有一根棍子。
他们爬上一座小山。
你和我骑自行车。

男孩和女孩在骑自行车。
男孩的自行车有学习轮。
他们戴着头盔以确保安全。
你和我跑步。

男孩和女孩在草地上跑。
他们互相比赛。
男孩跑得快，女孩试图追上他。
你和我跳舞。

男孩和女孩在跳舞。
他们手牵手旋转。
你和我玩得很开心。

男孩和女孩在野餐。
他们在吃三明治。
女孩趴在毯子上喂蚂蚁。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-54",
      level: "b",
      episode: "B54",
      title: "Carlos and His Teacher.",
      extensionEn: `Carlos and his teacher talk.

The teacher is sitting on the chair.
Carlos is standing in front of the desk.
Carlos is talking with his teacher.
Maybe Carlos is asking some questions.
Carlos and his teacher write.

Carlos is writing.
Maybe he is doing some homework.
The teacher is watching him as he writes.
The teacher is checking his work.
Carlos and his teacher read.

The teacher is holding a book and reading.
Carlos is reading along with the teacher.
They are discussing the characters and events in the book.
Remember to read loudly.
Carlos and his teacher add.

Carlos and his teacher are standing in front of the blackboard.
They are doing math.
They are adding.
Can you add?
What is 2 plus 3? What is 3 plus 4? What is 4 plus 4? 2
Carlos and his teacher share.

Carlos is taking an apple from his bag.
He is sharing it with the teacher.
The teacher smiles and thanks Carlos for his kindness.
It's good to share with others.
Carlos and his teacher paint.

They are painting now.
The teacher is painting a hill.
Carlos is painting Mexico, which is a country.
The girl is painting a dog.
There is paint on the wall. It says "Mom."
Carlos and his teacher clean.

The teacher is washing paintbrushes in the sink.
The girl is holding dirty brushes.
The clean ones are in the bottle.
The sign on the wall says, "Don't forget to wash your hands."
Carlos and his teacher play.

They are playing with a puzzle.
There are many pieces.
Carlos is holding out his hand with a puzzle piece, and he looks happy.
The teacher is smiling.
The puzzle is almost done. Keep going!`,
      extensionCn: `卡洛斯和老师说话。

老师坐在椅子上。
卡洛斯站在桌子前。
卡洛斯在和老师说话。
也许卡洛斯在问一些问题。
卡洛斯和老师写字。

卡洛斯在写字。
也许他在做一些家庭作业。
老师在看着他写字。
老师在检查他的作业。
卡洛斯和老师读书。

老师正在拿着一本书读书。
卡洛斯和老师一起读书。
他们在讨论书中的角色和事件。
记得大声朗读。
卡洛斯和老师做加法。

卡洛斯和老师站在黑板前。
他们在做数学。
他们在加法。
你会加法吗？
加3等于多少？3加4等于多少？4加4等于多少？
卡洛斯和老师分享。

卡洛斯从书包里拿出一个苹果。
他把苹果分享给老师。
老师微笑着感谢卡洛斯的善良。
与他人分享是好的。
卡洛斯和老师画画。

他们现在正在画画。
老师在画一座山。
卡洛斯在画墨西哥，墨西哥是一个国家。
女孩在画一只狗。
墙上有颜料，上面写着“妈妈”。
卡洛斯和老师清洗。

老师在水槽里洗画笔。
女孩拿着脏画笔。
干净的画笔在瓶子里。
墙上的标志写着：“别忘了洗手。”
卡洛斯和老师玩。

他们在玩拼图。
有很多拼图块。
卡洛斯伸出手拿着一块拼图，他看起来很高兴。
老师在微笑。
拼图快完成了，继续加油！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-55",
      level: "b",
      episode: "B55",
      title: "Maria and Her Teacher",
      extensionEn: `Maria and her teacher talk.

The teacher is sitting at the desk.
Maria is standing in front of the desk.
Maria is talking.
The teacher is listening.
What are they talking about?
Maybe they are talking about their lessons.
Maria and her teacher write.

Maria is sitting at the desk.
The teacher is standing behind the desk.
Maria is writing.
The teacher is watching Maria write.
What is Maria writing about?
Maybe she is writing a story about her day.
Maria and her teacher read.

Maria is sitting at the desk.
The teacher is standing behind the desk.
Maria and her teacher are reading.
What are they reading?
They are reading a story.
Maybe the story is about a brave lion.
Maria and her teacher add.

Maria and her teacher are sitting in front of the blackboard.
What are they doing?
They are adding numbers.
Can you add these numbers?
Maria and her teacher smile.

Maria and her teacher are smiling.
What are they smiling about?
Maybe they are smiling because they solved a difficult problem.
Maybe they are smiling because they had a fun day.
Maria and her teacher paint.

Maria and her teacher are painting.
What are they painting?
Maria is painting a cat.
Her teacher is painting flowers.
The cat is cute, and the flowers are beautiful.
There is a lot of paint on the table.
Maria and her teacher clean.

Maria and her teacher are cleaning.
What are they cleaning?
They are cleaning the paints and brushes in the sink.
They are working together to keep the classroom tidy.
Maria and her teacher play.

Maria and her teacher are playing.
What are they playing?
They are playing cards.
Maybe they are playing a matching game.
Maria is having fun and laughing.`,
      extensionCn: `玛丽亚和老师聊天。

老师坐在桌子旁。
玛丽亚站在桌子前面。
玛丽亚在说话。
老师在倾听。
他们在谈论什么？
可能他们在谈论课程内容。
玛丽亚和老师写字。

玛丽亚坐在桌子旁。
老师站在桌子后面。
玛丽亚在写字。
老师在看玛丽亚写字。
玛丽亚在写什么？
也许她在写一篇关于她一天的故事。
玛丽亚和老师阅读。

玛丽亚坐在桌子旁。
老师站在桌子后面。
玛丽亚和老师在阅读。
他们在读什么？
他们在读一个故事。
也许这个故事是关于一只勇敢的狮子。
玛丽亚和老师做加法。

玛丽亚和老师坐在黑板前面。
他们在做什么？
他们在加数。
你能把这些数字加起来吗？
玛丽亚和老师微笑。

玛丽亚和老师在微笑。
他们为什么微笑？
也许他们因为解决了一个困难的问题而微笑。
也许他们在微笑，因为他们度过了愉快的一天。
玛丽亚和老师绘画。

玛丽亚和老师在绘画。
他们在画什么？
玛丽亚在画一只猫。
她的老师在画花。
这只猫很可爱，花很美丽。
桌子上有很多颜料。
玛丽亚和老师清洁。

玛丽亚和老师在清洁。
他们在清洁什么？
他们在水槽里清洗颜料和画笔。
他们一起努力保持教室整洁。
玛丽亚和老师玩耍。

玛丽亚和老师在玩耍。
他们在玩什么？
他们在玩扑克牌。
也许他们在玩配对游戏。
玛丽亚玩得很开心并在笑。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-56",
      level: "b",
      episode: "B56",
      title: "I Love Art Class",
      extensionEn: `I make a drawing.

The boy is attending an art class.
What can he do in the art class?
He can make a drawing.
What is he drawing?
He is drawing a cow.
Look! The girl is drawing an elephant.
I make a hat.

He can make a hat in the art class.
Look at the table.
We can see paper, scissors, and tape.
The boy is using them to make a hat.
I make a flower.

What is he doing now?
He is making a flower.
He is gluing the flower onto the hat.
The hat is beautiful!
I make a chain.

What is he doing now?
He is making a chain with the girl.
Look! He is using paper to make a chain.
The chain is long.
I make an airplane.

Now he is folding paper.
This is an airplane!
He is using paper to fold an airplane.
Can you make an airplane with paper?
I make a painting.

Now he is painting.
There are brushes and paint on the table.
He is painting a house.
Now he is painting an animal.
There is one more tree to paint.
I make a mess!

Oh, look at his face and clothes!
They’re covered in paint!
What a mess!
But look at the picture—it’s beautiful.
Remember to clean your hands and face after painting.
I love art class!

The boy loves art class.
There are so many things to do in art class.
He is gluing the picture on the wall.
There is one more picture on the wall.
Maybe it's the girl's picture.`,
      extensionCn: `我在画画。

男孩在上美术课。
他在美术课上可以做什么？
他可以画画。
他在画什么？
他在画一头牛。
看！女孩在画一头大象。
我在做一顶帽子。

他可以在美术课上做一顶帽子。
看桌子上。
我们可以看到纸、剪刀和胶带。
男孩正在用这些东西做一顶帽子。
我在做一朵花。

他现在在做什么？
他在做一朵花。
他正在把花粘在帽子上。
这顶帽子真漂亮！
我在做一个链子。

他现在在做什么？
他和女孩一起在做链子。
看！他在用纸做链子。
这条链子很长。
我在做一架飞机。

现在他在折纸。
这是架飞机！
他在用纸折飞机。
你会用纸折飞机吗？
我在画一幅画。

现在他在画画。
桌子上有画笔和颜料。
他在画一栋房子。
现在他在画一只动物。
还有一棵树要画。
我弄得一团糟！

哦，看看他的脸和衣服！
都沾满了颜料！
真是一团糟！
但看看这幅画，它很漂亮。
记得画完后洗手和脸。
我喜欢美术课！

男孩喜欢美术课。
美术课上有很多事情可以做。
他正在把画粘在墙上。
墙上还有一幅画。
也许那是女孩的画。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-57",
      level: "b",
      episode: "B57",
      title: "Games We Play",
      extensionEn: `We like to play tag.
•
What are they doing?
They are playing tag.
We like to play tag.
The kids are running.
The kid is chasing.
We like to play baseball.
•
What are they doing?
They are playing baseball.
We like to play baseball.
The boy is throwing the baseball.
The girl is hitting the baseball with a bat.
The boy is catching the baseball.
We like to play soccer.
•
They are playing soccer.
We like to play soccer.
These kids are kicking the ball.
This boy is the goalkeeper.
We like to play dress-up.
•
They are playing dress-up.
We like to play dress-up.
This girl is putting on a dress.
This boy is putting on a coat.
This boy is putting on a boot.
This girl is looking in the mirror.
We like to play house.
•
We like to play house.
This boy is holding a baby doll.
This girl is holding a baby doll too.
The boy is carrying a tray with a teapot and three cups.
We like to play hide-and-seek.
•
They are playing hide-and-seek.
We like to play hide-and-seek.
This boy is the seeker, he is covering his eyes.
The others are the hiders, they are hiding.
Who is the seeker?
We like to play video games.
•
What are they doing?
This boy and this girl are sitting on the sofa.
They are playing video games.
This boy and this girl are standing behind the sofa.
They are watching video games.
But we do not play with fire.
•
We play many games.
But we do not play with fire.
Fire is dangerous.
We need to stay away from fire.`,
      extensionCn: `我们喜欢玩捉人游戏。

他们在做什么？
他们在玩捉人游戏。
我们喜欢玩捉人游戏。
这些孩子在跑。
这个孩子在追赶。
我们喜欢打棒球。

他们在做什么？
他们在打棒球。
我们喜欢打棒球。
男孩在投棒球。
女孩在用球棒打棒球。
男孩在接球。
我们喜欢踢足球。

他们在踢足球。
我们喜欢踢足球。
这些孩子在踢球。
这个男孩是守门员。
我们喜欢玩装扮游戏。

他们在玩装扮游戏。
我们喜欢玩装扮游戏。
这个女孩在穿裙子。
这个男孩在穿外套。
这个男孩在穿靴子。
这个女孩在照镜子。
我们喜欢玩过家家。

我们喜欢玩过家家。
这个男孩在抱一个洋娃娃。
这个女孩也在抱一个洋娃娃。
这个男孩正拿着一个托盘，上面放着一个茶壶和三个茶杯。
我们喜欢玩捉迷藏。

他们在玩捉迷藏。
我们喜欢玩捉迷藏。
这个男孩是找人的，他在捂住眼睛。
其他人是躲藏者，他们在躲藏。
谁是找人的？
我们喜欢玩电子游戏。

他们在做什么？
这个男孩和这个女孩坐在沙发上。
他们在玩电子游戏。
这个男孩和这个女孩站在沙发后面。
他们在看电子游戏。
但我们不玩火。

我们玩很多游戏。
但我们不玩火。
火很危险。
我们需要远离火。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-58",
      level: "b",
      episode: "B58",
      title: "The Big Game",
      extensionEn: `We clean on game day.
•
It is game day.
There are many things to do on game day.
What are they doing?
The boy is cleaning the tea table with a cloth.
The girl is vacuuming the carpet.
We dress up on game day.
•
The boy is putting on his clothes.
The girl has put on her clothes and is looking in the mirror.
There is a football here.
They are wearing football uniforms.
We see friends on game day.
•
The boy is opening the door.
The other family has arrived.
The parents are welcoming the other parents.
They are all wearing football uniforms.
The boy is holding a football.
The girl is holding hands with the other girl.
We paint faces on game day.
•
Look at the kids' faces.
This boy and this girl's faces are painted red.
They are wearing red clothes.
This boy and this girl's faces are painted blue.
They are wearing blue clothes.
We eat snacks on game day.
•
What are they doing?
The kids are eating snacks and drinking drinks.
Their faces look beautiful.
These are their moms, they are smiling.
We watch football on game day.
•
What are they doing?
They are watching TV together.
They are watching football.
The parents are sitting on the sofa.
The kids are sitting on the floor.
One kid is standing beside the sofa.
We cheer on game day.
•
Look, some people are cheering.
Some people are upset.
Can you find that the ones in blue are upset?
Can you find that the ones in red are cheering?
Maybe the red team won the game on TV.
We play football on game day!
•
What are they doing now?
They watched football on TV.
Now they are playing football in the garden.
The girl is holding the football and running.
They are having fun.`,
      extensionCn: `我们在比赛日打扫。

今天是比赛日。
比赛日有很多事情要做。
他们在做什么？
男孩正在用抹布擦茶几。
女孩正在用吸尘器吸地毯。
我们在比赛日打扮。

男孩正在穿衣服。
女孩已经穿好衣服，正在照镜子。
这里有一个橄榄球。
他们穿着橄榄球运动服。
我们在比赛日见朋友。

男孩正在开门。
另一家人来了。
父母们正在欢迎另一对父母。
他们都穿着橄榄球运动服。
男孩拿着一个橄榄球。
女孩和另一个女孩牵着手。
我们在比赛日涂脸。

看看这些孩子的脸。
这个男孩和女孩的脸涂成了红色。
他们穿着红色的衣服。
这个男孩和女孩的脸涂成了蓝色。
他们穿着蓝色的衣服。
我们在比赛日吃零食。

他们在做什么？
孩子们在吃零食，喝饮料。
他们的脸看起来很漂亮。
这些是他们的妈妈们，她们在微笑。
我们在比赛日看橄榄球。

他们在做什么？
他们在一起看电视。
他们在看橄榄球比赛。
父母们坐在沙发上。
孩子们坐在地板上。
一个孩子站在沙发旁边。
我们在比赛日欢呼。

看，有些人在欢呼。
有些人很沮丧。
你能找到那些穿蓝色衣服的人很沮丧吗？
你能找到那些穿红色衣服的人在欢呼吗？
也许是红队在电视上赢了比赛。
我们在比赛日玩橄榄球！

他们现在在做什么？
他们看了电视上的橄榄球比赛。
现在他们在花园里玩橄榄球。
女孩拿着橄榄球在跑。
他们玩得很开心。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-59",
      level: "b",
      episode: "B59",
      title: "Clean Is Not for Me",
      extensionEn: `Mud is for my shoes.
•
What is the girl doing?
She is jumping in the muddy puddles.
Look at her shoes; they are muddy.
Mud is all over her shoes.
But the girl looks happy.
Jumping in muddy puddles is fun!
Ketchup is for my shirt.
•
What is the girl doing?
She is eating food.
Look at her shirt; it’s messy.
The ketchup is all over her shirt.
But the girl looks happy.
The food is yummy!
Oil is for my fingers.
•
What is the girl doing?
She is mending her bike.
Look at her fingers; they are messy.
The oil is all over her fingers.
The girl is good at it.
She can mend the bike by herself.
Grass is for my pants.
•
What is the girl doing?
She is playing football.
Look at her pants; they are messy.
The grass is all over her pants.
But the girl looks happy.
She loves playing football!
Paint is for my hat.
•
What is the girl doing?
She is painting the wall.
Look at her hat; it’s messy.
The paint is all over her hat.
But the girl looks happy.
She likes painting the wall!
Dirt is for my socks.
•
What is the girl doing?
She is dumping sand from her socks.
She is playing in the sandpit.
Look at her socks; they are messy.
The sand is full in her socks.
But the girl looks happy.
She loves playing in the sandpit!
Hay is for my hair.
•
What is the girl doing?
She is stretching her arms.
Look at her hair; it’s messy.
There is hay in her hair.
But the girl looks happy.
She is having fun with the hay!
Clean is not for me!
•
Oh, the girl is dirty!
There is hay in her hair.
There is grass on her pants.
There is mud on her face and shoes.
Here comes her mommy.
Mom looks angry.
"Hurry up! Take a bath and clean yourself up!" “`,
      extensionCn: `泥巴是用来给我的鞋子添彩的。

她在做什么？
她在泥水坑里跳。
看她的鞋子，它们很脏。
泥巴满布在她的鞋子上。
但女孩看起来很高兴。
在泥水坑里跳是有趣的！
番茄酱是用来给我的衬衫添彩的。

她在做什么？
她在吃东西。
看她的衬衫，它很脏。
番茄酱满布在她的衬衫上。
但女孩看起来很高兴。
食物很好吃！
油是用来给我的手指添彩的。

她在做什么？
她在修理她的自行车。
看她的手指，它们很脏。
油满布在她的手指上。
女孩很擅长这件事。
她可以自己修理自行车。
草是用来给我的裤子添彩的。

她在做什么？
她在踢足球。
看她的裤子，它们很脏。
草满布在她的裤子上。
但女孩看起来很高兴。
她喜欢踢足球！
油漆是用来给我的帽子添彩的。

她在做什么？
她在给墙壁上漆。
看她的帽子，它很脏。
油漆满布在她的帽子上。
但女孩看起来很高兴。
她喜欢给墙壁上漆！
土壤是用来给我的袜子添彩的。

她在做什么？
她在倒出袜子里的沙子。
她在沙坑里玩。
看她的袜子，它们很脏。
她的袜子里满是沙子。
但女孩看起来很高兴。
她喜欢在沙坑里玩！
干草是用来给我的头发添彩的。

她在做什么？
她在伸展她的手臂。
看她的头发，它很脏。
她的头发里有干草。
但女孩看起来很高兴。
她和干草玩得很开心！
干净与我无关！

哦，女孩脏了！
她的头发里有干草。
她的裤子上有草。
她的脸和鞋子上有泥巴。
她的妈妈来了。
妈妈看起来很生气。
快点！去洗澡，洗干净自己！”`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-60",
      level: "b",
      episode: "B60",
      title: "Beach Fun",
      extensionEn: `What can we do at the beach?
We swim at the beach.
•
The boy is swimming.
He is wearing a float.
The waves are big.
This person is in the waves, and we can't see him clearly.
What can we do at the beach?
We dig at the beach.
•
The kids are playing with sand.
We can see buckets, shovels, and rakes.
The boy is digging with his hands.
The boy is putting sand in the bucket.
What can we do at the beach?
We run at the beach.
•
They are running barefoot.
The beach looks fine.
They leave footprints on the beach.
The waves are chasing them.
What can we do at the beach?
We eat at the beach.
•
They are having a picnic at the beach.
The food looks yummy.
This is a picnic basket.
Can you see the picnic blanket?
They are sitting on the blanket.
What can we do at the beach?
We play at the beach.
•
These two girls are playing with a ball.
The girl on the left is throwing the ball.
The girl on the right is catching the ball.
Can the girl catch the ball?
What can we do at the beach?
We fly kites at the beach.
•
Wow! Look at the sky; there are many kites.
This kite is big.
This kite is long.
This kite is high.
This kite is still on the beach.
They are going to fly it into the sky.
What can we do at the beach?
We find shells at the beach.
•
These two girls are finding shells.
There are many beautiful shells at the beach.
The waves bring the shells to the beach.
What can we do at the beach?
We build castles at the beach.
•
Wow, what a big castle!
The kids are building sandcastles.
The castle is tall, big, and beautiful.
There are two buckets here.
We can use buckets to build sandcastles.
Can you make a big sandcastle like this?`,
      extensionCn: `我们在海滩上可以做什么？
我们在海滩上游泳。

男孩在游泳。
他戴着泳圈。
海浪很大。
这个人在海浪中，我们都看不清他。
我们在海滩上可以做什么？
我们在海滩上挖沙。

孩子们在玩沙子。
我们可以看到桶、铲子和耙子。
男孩在用手挖沙。
男孩正在把沙子放进桶里。
我们在海滩上可以做什么？
我们在海滩上跑。

他们赤脚跑。
沙滩看起来细腻。
他们在沙滩上留下脚印。
海浪在追逐他们。
我们在海滩上可以做什么？
我们在海滩上吃东西。

他们在海滩上野餐。
食物看起来很好吃。
这是一个野餐篮。
你能看到野餐垫吗？
他们坐在野餐垫上。
我们在海滩上可以做什么？
我们在海滩上玩。

这两个女孩在玩球。
左边的女孩在扔球。
右边的女孩在接球。
这个女孩能接住球吗？
我们在海滩上可以做什么？
我们在海滩上放风筝。

哇！看天空，那里有很多风筝。
这个风筝很大。
这个风筝很长。
这个风筝飞得很高。
这个风筝还在沙滩上。
他们要把它放飞到天空中。
我们在海滩上可以做什么？
我们在海滩上找贝壳。

这两个女孩在找贝壳。
沙滩上有许多美丽的贝壳。
海浪把贝壳带到沙滩上。
我们在海滩上可以做什么？
我们在海滩上建沙堡。

哇，真是个大沙堡！
孩子们在建沙堡。
这个沙堡又高又大又美丽。
这里有两个桶。
我们可以用桶来建沙堡。
你能做一个像这样的沙堡吗？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-61",
      level: "b",
      episode: "B61",
      title: "Taking the Bus",
      extensionEn: `I walk to the bus stop.

I put on my shoes.
I hold my mother's hand.
We walk down the street.
We go to the bus stop.
I wait for the bus.

I stand with my mother.
We wait at the bus stop.
We sit on the bench.
We look around.
We see other people.
We listen for the bus.
I see the bus come.

I see a big bus.
It drives down the street.
It has bright lights.
It has a sign.
The sign shows where it is going.
I get on the bus.

The bus stops.
The door opens.
I hold my mother's hand.
I step onto the bus.
The bus driver smiles at us.
I pay for the bus ride.

My mother shows me.
I put the money in the machine.
I watch the coins go in.
I hear a 'clink' sound.
I ride on the bus.

We find a seat.
We sit down.
I look out the window.
I see buildings and trees.
The bus makes a 'vroom' sound.
The bus moves.
I get off the bus.

The bus stops.
We stand up.
We walk to the door.
The bus driver opens the door.
We step off the bus.
I walk the rest of the way to school.

We walk down the street.
I hold my mother's hand.
I see my school.
It is up ahead.
We are almost there.`,
      extensionCn: `我走到公交车站。

我穿上鞋子。
我牵着妈妈的手。
我们沿着街道走。
我们走到公交车站。
我等公交车。

我和妈妈站在一起。
我们在公交车站等。
我们坐在长椅上。
我们四处看看。
我们看到其他人。
我们听公交车的声音。
我看到公交车来了。

我看到一辆大公交车。
它沿着街道开来。
它有明亮的灯光。
它有一个标志。
标志上显示它要去的地方。
我上了公交车。

公交车停下了。
门开了。
我牵着妈妈的手。
我迈步上了公交车。
公交车司机对我们微笑。
我付公交车费。

妈妈教我。
我把钱放进机器里。
我看着硬币进去了。
我听到“叮当”一声。
我在公交车上。

我们找到一个座位。
我们坐下。
我看向窗外。
我看到建筑和树木。
公交车发出“轰隆”声。
公交车开动了。
我下了公交车。

公交车停下了。
我们站起来。
我们走向门口。
公交车司机开了门。
我们下了公交车。
我走剩下的路到学校。

我们沿着街道走。
我牵着妈妈的手。
我看到我的学校。
它在前面。
我们快到了。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-62",
      level: "b",
      episode: "B62",
      title: "Too Many Leaves",
      extensionEn: `I rake the leaves for Grandma.

This is a girl.
This is the girl's grandma.
This is a rake.
There are too many leaves on the ground.
The girl will rake the leaves for her grandma.
I rake the orange leaves.
I rake the brown leaves.
I rake the gold leaves.
I rake the red leaves.

What color are the leaves?
They are orange, brown, gold, and red.
The girl rakes leaves of all colors.
Rake, rake, rake.
The girl rakes leaves into a big pile.
Can you see a squirrel?
The squirrel is working with the girl.
I rake the big leaves.
I rake the small leaves.

These leaves are big.
These leaves are small.
Which leaves are big?
Which leaves are small?
The girl is happy.
The girl is not happy. Why?
Maybe because it's windy.
The wind blows down more leaves.
There are too many leaves!
•
There are many colors of leaves.
Some of them are red, and some of them are gold...
There are many sizes of leaves.
Some of them are big, and some of them are small.
There are many leaves on the ground.
There are many leaves in the air.
The girl and her grandma are happy.`,
      extensionCn: `我为奶奶耙树叶。

这是一个女孩。
这是女孩的奶奶。
这是一个耙子。
地上有太多的树叶。
女孩会为她的奶奶耙树叶。
我耙了橙色树叶。
我耙了棕色树叶。
我耙了金色树叶。
我耙了红色树叶。

树叶是什么颜色？
它们是橙色、棕色、金色和红色的。
女孩耙所有颜色的树叶。
耙，耙，耙。
她把树叶耙成一大堆。
你能看到一只松鼠吗？
松鼠正在和女孩一起工作。
我耙了大树叶。
我耙了小树叶。

这些树叶很大。
这些树叶很小。
哪些树叶很大？
哪些树叶很小？
女孩很快乐。
女孩不快乐，为什么？
也许是因为风很大。
风吹下来更多的树叶。
太多树叶了。

树叶有很多颜色。
一些是红色的，一些是金色的。
树叶有很多种尺寸。
一些很大，一些很小。
地上有很多树叶。
空中也有很多树叶。
女孩和她的奶奶都很快乐。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-63",
      level: "b",
      episode: "B63",
      title: "A Cold Day",
      extensionEn: `The air feels cold today.

It's snowing.
The house and ground are covered with snow.
The boy goes out of the house.
The boy puts on his hat, gloves, and scarf.
Look, the boy's breath turns into white vapor in the air.
The car feels cold today.

The car is covered with snow.
The boy takes off his gloves.
The boy puts his hand on the car.
The car is cold.
Look, there's a handprint on the car.
The tree feels cold today.

The boy is touching the tree now.
He uses his hands to touch the tree.
It's cold too.
Will the tree feel cold?
Will the tree need to put on a hat, gloves, and scarf?
The fence feels cold today.

The boy is touching the fence now.
There are two birds on the fence too.
Will the fence feel cold?
Will the fence need to put on a hat, gloves, and scarf?
The mailbox feels cold today.

The boy is opening the mailbox.
He uses his hands to open the mailbox.
Oh, it's cold!
The mail feels cold today.

The boy takes out the mail.
The boy is going home.
The mail is cold.
Hurry up, go back home!
The house is warm.
The door handle feels cold today.

The boy is opening the door.
The handle is cold too.
Everything is cold.
But the boy seems happy.
All the kids like snow.
The hot chocolate feels good today!

The boy is home now.
The fireplace is burning.
It's warm in the house.
The boy takes off his hat, gloves, and scarf.
Dad gives the boy a cup of hot chocolate.
It's hot!`,
      extensionCn: `今天的空气感觉很冷。

在下雪。
房子和地面都被雪覆盖着。
男孩走出房子。
男孩戴上了帽子、手套和围巾。
看，男孩的呼吸在空气中变成了白色的雾气。
今天车子感觉很冷。

车子被雪覆盖着。
男孩脱下了手套。
男孩把手放在车上。
车子很冷。
看，车上有一个手印。
今天树感觉很冷。

男孩现在正在触摸树。
他用手触摸树。
树也很冷。
树会觉得冷吗？
树需要戴上帽子、手套和围巾吗？
今天栅栏感觉很冷。

男孩现在正在摸栅栏。
栅栏上也有两只鸟。
栅栏会感觉冷吗？
栅栏需要戴上帽子、手套和围巾吗？
今天邮箱感觉很冷。

男孩正在打开邮箱。
他用手打开邮箱。
哦，它很冷！
今天信件感觉很冷。

男孩把信件拿出来。
男孩要回家了。
信件是冷的。
快点，回家吧！
房子里很温暖。
今天门把手感觉很冷。

男孩正在开门。
门把手也很冷。
所有东西都很冷。
但男孩看起来很开心。
所有的孩子都喜欢下雪。
今天热巧克力感觉真好！

男孩现在回到家了。
壁炉在燃烧。
屋里很暖和。
男孩脱下了帽子、手套和围巾。
爸爸给男孩一杯热巧克力。
它是热的！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-64",
      level: "b",
      episode: "B64",
      title: "The Kids Built It",
      extensionEn: `The kids built a road.

What are the kids building?
The kids are building a road.
This is a spiral track (
The boy holds a piece of track.
The girl is painting the track.
The kids built a car.

What are the kids building?
The kids are building a car.
The girl is painting a star at the top of the car.
The car can drive on the road.
The kids built a bus.

What are the kids building?
The kids are building a bus.
It says "school bus."
The boy is painting the bus.
The bus can drive on the road.
The kids built a house.

What are the kids building?
The kids are building a house.
What can we do at the house?
We can sleep at the house.
The kids built a school.

What are the kids building?
The kids are building a school.
What can we do at the school?
We can study at the school.
The kids built a park.

What are the kids building?
The kids are building a park.
What does the park have?
The park has trees, flowers, and a bench.
What can we do at the park?
We can play at the park.
The kids built a store.

What are the kids building?
The kids are building a store.
What can we do at the store?
We can shop at the store.
Look at what the kids built! The kids built a city.

What can you see in the city?
We can see the school.
We can see the road.
We can see the bus.
We can see the car.
We can see the park.
What a beautiful city!
Good job, kids!`,
      extensionCn: `孩子们建了一条路。

孩子们在建什么？
孩子们正在建一条路。
旋转轨道). 这是一个旋转轨道。
男孩拿着一段轨道。
女孩正在给轨道涂色。
孩子们建了一辆车。

孩子们在建什么？
孩子们正在建一辆车。
女孩正在给车顶画一颗星星。
车可以在路上行驶。
孩子们建了一辆公交车。

孩子们在建什么？
孩子们正在建一辆公交车。
上面写着“校车”。
男孩正在给公交车上色。
公交车可以在路上行驶。
孩子们建了一座房子。

孩子们在建什么？
孩子们正在建一座房子。
我们可以在房子里做什么？
我们可以在房子里睡觉。
孩子们建了一所学校。

孩子们在建什么？
孩子们正在建一所学校。
我们可以在学校做什么？
我们可以在学校学习。
孩子们建了一个公园。

孩子们在建什么？
孩子们正在建一个公园。
公园里有什么？
公园里有树、花和长椅。
我们可以在公园做什么？
我们可以在公园玩。
孩子们建了一家商店。

孩子们在建什么？
孩子们正在建一家商店。
我们可以在商店做什么？
我们可以在商店购物。
看看孩子们建了什么！孩子们建了一座城市。

你可以在城市里看到什么？
我们可以看到学校。
我们可以看到路。
我们可以看到公交车。
我们可以看到车。
我们可以看到公园。
多么美丽的城市！
孩子们，干得好！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-65",
      level: "b",
      episode: "B65",
      title: "Firefly",
      extensionEn: `I tried catching one Monday.

It's nighttime, and it's dark.
What are those? They're so bright!
They are fireflies.
The firefly has a light.
The light is on its body.
The firefly glows in the dark.
The girl is trying to catch a firefly.
I tried catching one Tuesday.

Can the girl catch the firefly?
No, she didn't catch it on Monday.
It's Tuesday.
The girl is trying to catch the firefly again.
She is using a bottle to catch the firefly.
I tried catching one Wednesday.
It's Wednesday.
The girl is trying to catch the firefly again.
Do you think she can catch the firefly?
The firefly flies quickly.
She didn’t catch it.
I tried catching one Thursday.

It's Thursday.
The girl is trying to catch the firefly again.
The girl is very determined.
She is running after the fireflies.
Have you ever seen fireflies?
It's a little hard to see fireflies in the city.
I tried catching one Friday.

It's Friday.
The girl is trying to catch the firefly again.
She goes to the bushes.
There are many fireflies here.
Can she catch the firefly today?
I tried catching one Saturday.

It's Saturday.
The girl is trying to catch the firefly again.
The girl really likes fireflies.
She has been trying to catch fireflies all week.
I tried catching one Sunday.

It's Sunday.
The girl is trying to catch the firefly again.
Look at the bottle!
There is a firefly in the bottle!
The girl finally caught a firefly.
Her parents are watching her too.
They are all so happy.
I caught one and let it go.

What is the girl doing?
The girl opens the bottle and lets the firefly go.
Why do you think the girl did that?
It's good for the firefly to fly in the air.
What a good girl!`,
      extensionCn: `我星期一试图抓一只。

是夜晚，天黑了。
那些是什么？它们很亮！
它们是萤火虫。
萤火虫有一盏灯。
这盏灯在它的身体上。
萤火虫在黑暗中发光。
女孩正在试图抓一只萤火虫。
我星期二试图抓一只。

女孩能抓到萤火虫吗？
不，她星期一没抓到。
今天是星期二。
女孩再次尝试抓萤火虫。
她正在用一个瓶子抓萤火虫。
我星期三试图抓一只。
今天是星期三。
女孩再次尝试抓萤火虫。
你觉得她能抓到萤火虫吗？
萤火虫飞得很快。
她没有抓到。
我星期四试图抓一只。

今天是星期四。
女孩再次尝试抓萤火虫。
这个女孩非常坚持。
她在追着萤火虫跑。
你见过萤火虫吗？
在城市里很难看到萤火虫。
我星期五试图抓一只。

今天是星期五。
女孩再次尝试抓萤火虫。
她走向了草丛。
这里有很多萤火虫。
她今天能抓到萤火虫吗？
我星期六试图抓一只。

今天是星期六。
女孩再次尝试抓萤火虫。
女孩非常喜欢萤火虫。
她整个星期都在试图抓萤火虫。
我星期天试图抓一只。

今天是星期天。
女孩再次尝试抓萤火虫。
看那个瓶子！
瓶子里有一只萤火虫！
女孩终于抓到了一只萤火虫。
她的父母也在看着她。
他们都非常开心。
我抓到了一只，然后放走了它。

女孩在做什么？
女孩打开瓶子，让萤火虫飞走了。
你觉得女孩为什么这样做？
对萤火虫来说，在空中飞翔是好的。
真是一个好女孩！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-66",
      level: "b",
      episode: "B66",
      title: "Under My Bed",
      extensionEn: `A sock is under my bed.

The girl is kneeling on the floor.
The girl lifts up the sheet and looks under her bed.
What's under the bed?
It's a sock.
A block is under my bed.

The girl is lying on the floor.
What's under the bed?
It's a block.
The girl reaches out her hand to get the block..
It seems too far for her to reach the block.
A book is under my bed.

The girl is on the bed.
The girl looks under the pillow.
What is she finding?
Maybe she is finding the book.
We can see a book under the bed.
A toy is under my bed.

The girl is lying on the bed.
She lifts up the sheet and looks under the bed.
What is under the bed?
It's a toy horse.
Why is the toy horse under the bed?
A hat is under my bed.

The girl is lying on the floor under the bed again.
What is she doing now?
Her hat is under the bed.
She is getting the hat.
Oh, why are all the girl's things under the bed?
A bat is under my bed.

What is under the bed this time?
It's a bat.
Look, the girl got her hat and put it on her head.
What is the girl doing now?
She is kneeling on the floor, trying to get the bat.
A cat is under my bed.

What is this?
It's a cat, it's cute.
Where is the cat?
The cat is under the bed.
What is the cat doing?
The cat is sleeping.
Let's be quiet, don't wake it.
I am under my bed!

Look, the girl is under the bed now.
The girl is sleeping with the cat.
They are snuggling together.
Why don't you sleep on the bed?
I guess the bed is more comfortable.`,
      extensionCn: `我的床下有一只袜子。

女孩跪在地板上。
女孩掀起床单，正在看她的床下。
床下有什么？
是一只袜子。
我的床下有一个积木。

女孩趴在地板上。
床下有什么？
是一个积木。
女孩伸出手，想要拿到积木。
看起来它太远了，她够不到积木。
我的床下有一本书。

女孩在床上。
女孩正在看枕头下面。
她在找什么？
也许她在找书。
我们可以看到床下有一本书。
我的床下有一个玩具。

女孩趴在床上。
她掀起床单，往床下看。
床下有什么？
是一个玩具马。
为什么玩具马在床下？
我的床下有一顶帽子。

女孩又趴在床下了。
她现在在做什么？
她的帽子在床下。
她正在拿帽子。
哦，为什么女孩所有的东西都在床下？
我的床下有一只球拍。

这次床下有什么？
是一只球拍。
看，女孩拿到了她的帽子并戴上了。
女孩现在在做什么？
她跪在地上，试图抓住球拍。
我的床下有一只猫。

这是什么？
是一只猫，它很可爱。
猫在哪里？
猫在床下。
猫在做什么？
猫在睡觉。
我们安静点，别吵醒它。
我在床下！

看，女孩现在在床下。
女孩和猫一起睡觉。
他们依偎在一起。
你为什么不在床上睡？
我猜床上更舒服。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-67",
      level: "b",
      episode: "B67",
      title: "We Do Not Share",
      extensionEn: `We do not share toothbrushes.

It's good to share with friends.
But we do not share some things.
We do not share toothbrushes because they are for cleaning our teeth.
Each person needs their own toothbrush to stay healthy.
We do not share straws.

Straws are used for drinking.
When we drink from a straw, we do not want to share germs.
It's best to use our own straw.
We do not share tissues.

Tissues are for wiping our noses.
If we share tissues, we might get each other sick.
It’s better to use our own tissues.
We do not share hairbrushes.

Hairbrushes are for keeping our hair neat and clean.
Sharing hairbrushes can spread hair products or germs.
Everyone should have their own hairbrush.
We do not share gum.

Gum is for chewing.
If we share gum, we might share our saliva, too.
It’s best to chew our own gum.
We do not share answers.

Answers are for solving our own problems.
When we do our work, we should try our best to think for ourselves.
It helps us learn better this way.
We do not share secrets.

Secrets are private and special.
When someone shares a secret, they trust us to keep it safe.
We should respect their feelings.
We do share Buddy!

Buddy is our special friend. Buddy
Sharing Buddy makes us happy.
We can play together and have fun!`,
      extensionCn: `我们不分享牙刷。

与朋友分享是件好事。
但我们不分享某些东西。
我们不分享牙刷，因为它们是用来清洁牙齿的。
每个人都需要自己的牙刷以保持健康。
我们不分享吸管。

吸管是用来喝饮料的。
当我们用吸管喝水时，我们不想传播细菌。
最好使用我们自己的吸管。
我们不分享纸巾。

纸巾是用来擦鼻子的。
如果我们分享纸巾，可能会互相感染。
最好使用我们自己的纸巾。
我们不分享发刷。

发刷是用来保持头发整洁和干净的。
分享发刷可能会传播护发产品或细菌。
每个人都应该有自己的发刷。
我们不分享口香糖。

口香糖是用来嚼的。
如果我们分享口香糖，我们也可能分享唾液。
最好嚼自己的口香糖。
我们不分享答案。

答案是用来解决我们自己的问题的。
当我们做作业时，我们应该尽力自己思考。
这样可以帮助我们更好地学习。
我们不分享秘密。

秘密是私密和特别的。
当有人分享秘密时，他们信任我们来保护它。
我们应该尊重他们的感受。
我们分享Buddy！

是我们特别的朋友。
分享Buddy让我们开心。
我们可以一起玩，享受乐趣！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-68",
      level: "b",
      episode: "B68",
      title: "After School",
      extensionEn: `I like to study after school.

The boy is doing his homework at the desk.
He is getting a book from the shelf.
These two girls are studying on the computer.
Learning new things is fun and exciting!
I like to play after school.

The kids are playing football on the grass.
They are laughing and having a great time together.
Playing with friends makes us feel happy and cheerful.
I like to dance after school.

The girls are dancing gracefully to the music.
They are practicing their dance routines together.
Look, this girl is dancing on her toes!
I like to act after school.

The kids are acting out different scenes from stories.
One girl looks like a beautiful princess.
What character is the boy pretending to be?
Maybe he is a brave prince!
We can pretend to be different characters and tell fun stories together.
I like to read after school.

This must be the library!
The girl is reading a book while sitting in her wheelchair.
What happened to the girl?
Why is she sitting in a wheelchair?
The boy is reading comfortably on the sofa.
There are many shelves filled with colorful books here.
I like to sing after school.

The kids are singing together in harmony.
The girl is leading the song while the others follow along.
Singing brings us joy and happiness!
I like to bike after school.

The kids are happily riding their bikes in the park.
They are all wearing their helmets for safety.
The helmet keeps us safe while riding our bikes.
It's fun to race with friends and feel the wind!
We like to have fun after school.

There are many fun activities to do after school.
It's great to play with friends and enjoy our time together.
What do you want to do after school today?`,
      extensionCn: `我放学后喜欢学习。

这个男孩正在桌子上做作业。
他正在书架上拿一本书。
这两个女孩正在电脑上学习。
学习新东西既有趣又令人兴奋。
我放学后喜欢玩。

孩子们在草地上踢足球。
他们在一起开心地笑着。
和朋友们一起玩让我们感到快乐和愉快。
我放学后喜欢跳舞。

女孩们在音乐中优雅地跳舞。
她们在一起练习舞蹈。
看，这个女孩在踮脚跳舞！
我放学后喜欢表演。

孩子们在表演故事中的不同场景。
一个女孩看起来像美丽的公主。
这个男孩在假装成什么角色？
也许他是勇敢的王子！
我们可以假装成不同的角色，一起讲有趣的故事。
我放学后喜欢阅读。

这一定是图书馆！
这个女孩坐在轮椅上看书。
她怎么了？
她为什么坐在轮椅上？
这个男孩坐在沙发上舒适地看书。
这里有很多书架，上面摆满了五颜六色的书。
我放学后喜欢唱歌。

孩子们在一起和谐地唱歌。
这个女孩在前面领唱，其他孩子跟着唱。
唱歌给我们带来了快乐和幸福！
我放学后喜欢骑自行车。

孩子们在公园里快乐地骑着自行车。
他们都戴着头盔以确保安全。
头盔在骑车时保护我们的安全。
和朋友们比赛骑车，感受微风的感觉很有趣！
我们放学后喜欢玩得开心。

放学后有很多有趣的活动。
和朋友们一起玩，享受我们的时光真好。
你今天放学后想做什么？`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-69",
      level: "b",
      episode: "B69",
      title: "All By Myself",
      extensionEn: `I read all by myself.

What is the girl doing?
She is reading a book.
She is lying on the bed and reading.
But it's not good for your eyes!
Sit up straight and read.
Look, there is a cat here!
The cat is yawning.
I color all by myself.

What is the girl doing?
The girl is coloring a picture.
She is coloring a cat.
Look, there is a real cat!
It's lying on the windowsill and sleeping.
I sing all by myself.

What is the girl doing?
The girl is singing.
She is holding a speaker and a microphone.
The girl is happy, and the cat is happy too!
The cat is dancing to the rhythm.
I play all by myself.

What is the girl doing?
The girl is skipping rope.
This is a jump rope.
Look at her jump high!
The cat is lying on the grass.
I build all by myself.

What is the girl doing?
The girl is building something.
She is using cushions from the sofa.
What's this? I have no idea!
Can you see the cat?
The cat is on the sofa, biting the cushion.
I listen all by myself.

What is the girl doing?
The girl is lying on the grass and listening to music.
She is wearing headphones and enjoying the music.
The cat is lying on the grass too.
The cat's tummy is facing up.
I dress all by myself.

What is the girl doing?
The girl is getting dressed by herself.
Can you see the cat?
The cat is in the drawer.
What is the cat doing?
Maybe it's looking for some clothes to wear too!
I think all by myself.

What is the girl doing?
The girl is doing homework.
She is lying on the floor, biting a pencil.
She is thinking.
Can you see the cat?
It's on the sofa, playing with a ball.`,
      extensionCn: `我自己阅读。

这个女孩在做什么？
她在看一本书。
她躺在床上看书。
但是这对你的眼睛不好！
坐直了看书。
看，这里有一只猫！
猫正在打哈欠。
我自己涂色。

这个女孩在做什么？
这个女孩正在给一幅画涂色。
她正在给一只猫涂色。
看，有一只真的猫！
它躺在窗台上睡觉。
我自己唱歌。

这个女孩在做什么？
这个女孩在唱歌。
她手里拿着音响和麦克风。
这个女孩很开心，猫也很开心！
猫正在随着节奏跳舞。
我自己玩。

这个女孩在做什么？
这个女孩在跳绳。
这是一根跳绳。
看看她跳得多高！
猫躺在草地上。
我自己搭建。

这个女孩在做什么？
这个女孩正在搭建东西。
她在用沙发垫子。
这是什么？我不知道！
你能看到猫吗？
猫在沙发上咬着垫子。
我自己听音乐。

这个女孩在做什么？
这个女孩躺在草地上听音乐。
她戴着耳机，享受音乐。
猫也躺在草地上。
猫的肚子朝上。
我自己穿衣服。

这个女孩在做什么？
这个女孩正在自己穿衣服。
你能看到猫吗？
猫在抽屉里。
猫在做什么？
也许它在找一些衣服穿！
我自己思考。

这个女孩在做什么？
这个女孩正在做作业。
她躺在地上，咬着铅笔。
她在思考。
你能看到猫吗？
它在沙发上玩一个球。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-70",
      level: "b",
      episode: "B70",
      title: "Boats",
      extensionEn: `This boat carries people.

This boat is big and can hold many people.
There are many people on the deck.
They are enjoying the beautiful scenery.
Some people are waving at us!
Everyone is breathing fresh air.
This boat carries police.

“POLICE” is written on the side.
The police officers wear bright uniforms.
They help keep us safe.
Flashing lights shine on top of the boat.
The officers are looking for people who need help.
This boat carries food.

This boat is small but important.
The rower guides the boat carefully.
This boat is filled with tasty food.
There are fresh fruits and colorful veggies.
This boat carries logs.

This boat is strong and can carry heavy logs.
The logs are stacked on the deck.
They are tied down so they won’t fall.
The boat glides smoothly on the water.
This boat carries trash.

This boat has big containers for trash.
It helps keep our water clean.
The boat will take the trash to be recycled.
Keeping our earth clean is very important!
This boat carries cars.

This boat is called a ferry.
It can carry many cars at once.
The cars are lined up on the deck.
Soon, the cars will be on the other side!
This is an easy way to cross the river.
This boat carries planes.

This boat is special; it carries planes!
It has a big deck for the planes.
Look, there are small planes on the deck.
The boat takes them to another airport.
This boat carries boats.

This boat is a big transport vessel.
It can carry small boats on its deck.
Look, there are many small boats!
This is a fun way to travel with lots of boats!`,
      extensionCn: `这艘船载着人。

这艘船很大，可以放很多人。
甲板上有很多人。
他们在欣赏美丽的风景。
有些人正在向我们挥手！
每个人都在呼吸新鲜空气。
这艘船载着警察。

侧面写着“警察”。
警察穿着亮丽的制服。
他们帮助我们保持安全。
船顶有闪烁的灯光。
警官在找需要帮助的人。
这艘船载着食物。

这艘船小但重要。
划船的人小心地引导船。
这艘船装满了美味的食物。
有新鲜的水果和五颜六色的蔬菜。
这艘船载着木头。

这艘船很坚固，可以载重木头。
木头堆在甲板上。
它们被绑好，不会掉下来。
船在水面上滑行。
这艘船载着垃圾。

这艘船有大箱子用来装垃圾。
它帮助保持水的干净。
船会把垃圾送去回收。
保持地球干净非常重要！
这艘船载着汽车。

这艘船叫渡轮。
它可以一次载很多汽车。
汽车在甲板上排成一排。
不久，汽车就会到达对岸！
这是过河的简单方法。
这艘船载着飞机。

这艘船很特别；它载着飞机！
它有一个大甲板给飞机停放。
看，甲板上有小飞机。
这艘船把它们送到另一个机场。
这艘船载着小船。

这是一艘大运输船。
它可以在甲板上载着小船。
看，船上有很多小船！
这是带很多船一起旅行的有趣方式！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-71",
      level: "b",
      episode: "B71",
      title: "Old and New",
      extensionEn: `These pickup trucks are old.
The old trucks have rust and scratches.
They don't run very fast anymore.
These pickup trucks are new.
The new trucks are shiny and clean.
They can drive really fast.
What pickup trucks are old?
The ones with rust are old.
What pickup trucks are new?
The shiny ones are new.
These houses are old.
The old houses have chipped paint.
The windows are small.
These houses are new.
The new houses have bright, fresh paint.
The windows are big and bright.
What houses are old?
The ones with chipped paint are old.
What houses are new?
The ones with fresh paint are new.
These bikes are old.
The old bikes have rusty chains.
The tires are flat.
These bikes are new.
The new bikes have shiny, strong chains.
The tires are big and full of air.
What bikes are old?
The ones with flat tires are old.
What bikes are new?
The ones with full tires are new.
These teddy bears are old.
The old teddy bear is dirty and losing its fur.
They are a little worn out.
These teddy bears are new.
The new teddy bears are soft and fluffy.
They still smell like fresh cotton.
What teddy bears are old?
The dirty ones are old.
What teddy bears are new?
The soft, fluffy ones are new.`,
      extensionCn: `这些皮卡车是旧的。
旧的皮卡车有锈和划痕。
它们已经跑得不快了。
这些皮卡车是新的。
新的皮卡车很光亮，很干净。
它们开得非常快。
哪些皮卡车是旧的？
有锈的是旧的。
哪些皮卡车是新的？
光亮的是新的。
这些房子是旧的。
旧房子的油漆剥落了。
窗户很小。
这些房子是新的。
新房子的油漆很新鲜。
窗户很大很明亮。
哪些房子是旧的？
油漆剥落的是旧的。
哪些房子是新的？
油漆很新的房子是新的。
这些自行车是旧的。
旧自行车的链条生锈了。
轮胎瘪了。
这些自行车是新的。
新自行车的链条很亮很结实。
轮胎大而且充满了气。
哪些自行车是旧的？
轮胎瘪了的是旧的。
哪些自行车是新的？
轮胎充满气的是新的。
这些泰迪熊是旧的。
旧的泰迪熊脏了，掉毛了。
它们有点破旧了。
这些泰迪熊是新的。
新的泰迪熊很软很蓬松。
它们闻起来像新的棉花。
哪些泰迪熊是旧的？
脏的是旧的。
哪些泰迪熊是新的？
蓬松柔软的是新的。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-72",
      level: "b",
      episode: "B72",
      title: "The Sandwich",
      extensionEn: `Let's make a sandwich.

What is the boy doing?
He is pouring water into the glass with his left hand.
He is rubbing his stomach with his right hand.
The boy is hungry.
His stomach is rumbling.
Let's make a sandwich.
Get some bread.

What's this?
This is a bag of bread.
What should we do first?
Get some bread.
Put one slice of bread on the plate.
How many slices of bread do we need?
We need two slices of bread.
Put some butter on the bread.

What's this?
This is butter.
What should we do next?
Spread some butter on the bread.
Use the knife to spread the butter on the bread.
Put some lettuce on the butter.

What's this?
This is lettuce.
What should we do next?
Put some lettuce on the butter.
Put some tomatoes on the lettuce.

What are these?
These are tomatoes.
What should we do next?
Put some tomatoes on the lettuce.
How many tomatoes do you see?
One, two, three, four, five.
Put some meat on the tomatoes.

What are these?
These are pieces of meat.
What should we do next?
Put some meat on the tomatoes.
How many pieces of meat do you see?
One, two, three.
Put some bread on the meat.

What should we do last?
Put another slice of bread on the meat.
The sandwich is ready.
What does it have?
It has lettuce, tomatoes, meat, and bread.
Now take a big bite.

The boy made a sandwich.
The sandwich looks yummy.
Now take a big bite.
How does it taste?
Yummy!

Do you want to make a sandwich?
Let's make a sandwich.`,
      extensionCn: `我们来做三明治吧。

男孩在做什么？
他正用左手往杯子里倒水。
他正用右手揉肚子。
男孩饿了。
他的肚子在咕噜噜叫。
我们来做个三明治吧。
拿一些面包。

这是什么？
这是一袋面包。
我们首先应该做什么？
取一些面包。
把一片面包放在盘子上。
我们需要几片面包？
我们需要两片面包。
把黄油放在面包上。

这是什么？
这是黄油。
接下来我们该做什么？
把一些黄油抹在面包上。
用刀把黄油抹在面包上。
把一些生菜放在黄油上。

这是什么？
这是生菜。
接下来我们该做什么？
把一些生菜放在黄油上。
把一些番茄放在生菜上。

这些是什么？
这些是番茄。
接下来我们该做什么？
把一些番茄放在生菜上。
你能看到几片番茄？
一，二，三，四，五。
把一些肉片放在番茄上。

这些是什么？
这些是肉片。
接下来我们该做什么？
把一些肉片放在番茄上。
你能看到几片肉？
一，二，三。
把面包放在肉上。

最后我们应该做什么？
把另一片面包放在肉上。
三明治准备好了。
它有什么？
它有生菜、番茄、肉和面包。
现在咬一大口。

男孩做了一个三明治。
三明治看起来很好吃。
现在咬一大口。
味道怎么样？
好吃！

你想做一个三明治吗？
我们来做一个三明治吧。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-73",
      level: "b",
      episode: "B73",
      title: "Valentines All Around",
      extensionEn: `Valentine's Day is a day to show our love!
We can make special cards for our beloved families.
This card is for Mom.

My mom is young and pretty.
She has a big smile and loves to hug me.
She loves flowers and all the beautiful things.
Her favorite sport is cycling.
This card is for Dad.
•
My dad is a sporty man.
He loves sports, especially baseball.
He plays baseball with me in the backyard.
He can also play the guitar.
Sometimes, we sing songs together!
This card is for Noah.
•
He is my brother.
He is a big fan of superheroes.
Superman, Spider-Man, Iron Man, and Batman are his favorites.
He likes to dress up as them and pretend to save the day!
This card is for Granny.
•
Granny is special and kind.
She can make many different kinds of cookies and cakes.
Chocolate chip cookies are my favorite!
They are all yummy, and I love to help her in the kitchen.
This card is for Pappy.
•
Pappy is charming and funny.
He is a perfect magician.
He can make things disappear and reappear with his magic!
I love watching his magic tricks.
This card is for Spot.
•
Spot is my pet dog.
He is furry and loves to play.
His favorite treats are bones.
He wags his tail when he sees me with a bone!
This card is for Mittens.
•
Mittens is my cat.
He loves chasing mice and playing with string.
He enjoys lying on the pillow and taking long naps.
Sometimes, he cuddles up next to me!
This card is for you!
•
You can draw your picture here.
Add things you love, like your favorite toys or hobbies.
Let's celebrate love together!`,
      extensionCn: `情人节是一个表达我们爱的日子！
我们可以为我们心爱的人制作特别的卡片。
这张卡片是给妈妈的。

我妈妈年轻漂亮。
她总是面带微笑，喜欢抱我。
她喜欢花和所有美丽的事物。
她最喜欢的运动是骑自行车。
这张卡片是给爸爸的。

我爸爸是一个热爱运动的人。
他喜欢运动，特别是棒球。
他在后院和我一起打棒球。
他还会弹吉他。
有时我们一起唱歌！
这张卡片是给诺亚的。

他是我的弟弟。
他是超级英雄的忠实粉丝。
超人、蜘蛛侠、钢铁侠和蝙蝠侠是他最喜欢的。
他喜欢打扮成他们，假装拯救世界！
这张卡片是给奶奶的。

奶奶特别和善。
她会做许多不同种类的饼干和蛋糕。
巧克力曲奇是我最喜欢的！
它们都很好吃，我喜欢在厨房帮她。
这张卡片是给爷爷的。

爷爷很有魅力且幽默。
他是一个完美的魔术师。
他能用魔法让物体消失和重新出现！
我喜欢看他的魔术表演。
这张卡片是给斯波特的。

斯波特是我的宠物狗。
他毛茸茸的，喜欢玩耍。
他最喜欢的零食是骨头。
当他看到我拿着骨头时会摇尾巴！
这张卡片是给米滕斯的。

米滕斯是我的猫。
他喜欢追老鼠和玩线。
他喜欢躺在枕头上打长长的盹。
有时，他会靠在我身边！
这张卡片是给你的！

你可以在这里画你的画。
加入你喜欢的东西，比如你最喜欢的玩具或爱好。
让我们一起庆祝爱！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-74",
      level: "b",
      episode: "B74",
      title: "Mixing Colors",
      extensionEn: `There are three base colors.
Red, yellow, and blue.
They can create all other colors.
We can mix colors.
Mixing different colors can create new colors.
Mix the red and blue colors.

The boy puts red and blue paint onto the plate.
He mixes them together with the brush.
Can you guess what color it will be?
They turn into purple.

We mix red and blue, we get purple!
The boy uses the purple to draw mountains.
Mix the yellow and red colors.

The boy puts yellow and red paint onto the plate.
He mixes them together with the brush.
Can you guess what color it will be?
They turn into orange.

We mix yellow and red, we get orange!
The boy uses the orange to draw the sun.
Mix the blue and yellow colors.

The boy puts blue and yellow paint onto the plate.
He mixes them together with the brush.
Can you guess what color it will be?
They turn into green.

We mix blue and yellow, we get green!
The boy uses the green to draw grass.
Mix the green and purple colors.

The boy puts green and purple paint onto the plate.
He mixes them together with the brush.
Can you guess what color it will be?
They turn into brown.

We mix green and purple, we get brown!
The boy uses the brown to draw a tree.
What a beautiful picture!`,
      extensionCn: `有三种基本颜色。
红色、黄色和蓝色。
它们可以创造所有其他颜色。
我们可以混合颜色。
混合不同的颜色可以创造新颜色。
混合红色和蓝色。

男孩把红色和蓝色的颜料放进盘子里。
他用刷子把它们混合在一起。
你能猜出它会变成什么颜色吗？
他们变成紫色。

我们混合红色和蓝色，得到紫色！
男孩用紫色画山。
混合黄色和红色。

男孩把黄色和红色的颜料放进盘子里。
他用刷子把它们混合在一起。
你能猜出它会变成什么颜色吗？
他们变成橙色。

我们混合黄色和红色，得到橙色！
男孩用橙色画太阳。
混合蓝色和黄色。

男孩把蓝色和黄色的颜料放进盘子里。
他用刷子把它们混合在一起。
你能猜出它会变成什么颜色吗？
他们变成绿色。

我们混合蓝色和黄色，得到绿色！
男孩用绿色画草。
混合绿色和紫色。

男孩把绿色和紫色的颜料放进盘子里。
他用刷子把它们混合在一起。
你能猜出它会变成什么颜色吗？
他们变成棕色。

我们混合绿色和紫色，得到棕色！
男孩用棕色画树。
多美的画啊！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-75",
      level: "b",
      episode: "B75",
      title: "It ls School Time",
      extensionEn: `What time is it?
What's the time?
It's 6 o'clock in the morning now./It is 6 a.m. now.
It is time for breakfast.
The boy is having breakfast with his parents.
What time is it?
What's the time?
It's 7 o'clock in the morning now./It is 7 a.m. now.
It is time for the bus.
The girl is getting on the bus to school.
What time is it?
What's the time?
It's 8 o'clock in the morning now./It is 8 a.m. now.
It is school time.
The boy is raising his hand to answer a question.
What time is it?
What's the time?
It's 9 o'clock in the morning now./It is 9 a.m. now.
It is time for reading.
The kids are reading books.
What time is it?
What's the time?
It's 10 o'clock in the morning now./It is 10 a.m. now.
It is recess time.
The kids are playing on the slide.
What time is it?
What's the time?
It's 11 o'clock in the morning now./It is 11 a.m. now.
It is time for math.
The teacher is teaching math.
What time is it?
What's the time?
It's 12 o'clock noon now./It is 12 p.m. now.
It is time for lunch.
The girl is getting her lunch.
What time is it?
What's the time?
It's 1 o'clock in the afternoon now./It is 1 p.m. now.
It is music time.
The boy is playing a musical instrument.
What time is it?
What's the time?
It's 2 o'clock in the afternoon now./It is 2 p.m. now.
It is time for science.
The boy is using a microscope.
What time is it?
What's the time?
It's 3 o'clock in the afternoon now./It is 3 p.m. now.
It is time to go home!
The boy's mom comes to pick him up.`,
      extensionCn: `现在几点了？
现在是什么时间？
现在是早上六点钟。
是吃早餐的时间了。
男孩正在和父母一起吃早餐。
现在几点了？
现在是什么时间？
现在是早上七点钟。
是坐公交车的时间了。
女孩正在上公交车去学校。
现在几点了？
现在是什么时间？
现在是早上八点钟。
是上学的时间了。
男孩正在举手回答问题。
现在几点了？
现在是什么时间？
现在是早上九点钟。
是阅读的时间了。
孩子们正在读书。
现在几点了？
现在是什么时间？
现在是早上十点钟。
是休息时间了。
孩子们正在滑滑梯玩耍。
现在几点了？
现在是什么时间？
现在是早上十一点钟。
是学数学的时间了。
老师正在教数学。
现在几点了？
现在是什么时间？
现在是中午十二点钟。
是吃午餐的时间了。
女孩正在拿她的午餐。
现在几点了？
现在是什么时间？
现在是下午一点钟。
是音乐时间了。
男孩正在弹奏乐器。
现在几点了？
现在是什么时间？
现在是下午两点钟。
是学科学的时间了。
男孩正在使用显微镜。
现在几点了？
现在是什么时间？
现在是下午三点钟。
是回家的时间了！
男孩的妈妈来接他回家。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-76",
      level: "b",
      episode: "B76",
      title: "Time For Soccer",
      extensionEn: `What are the important parts of soccer?
Soccer is a fun game.
We need a uniform, shoes, a team, and a ball.
Let’s learn about them!
Time to wear the soccer uniform.
First, we put on our soccer uniform.
It has a shirt, shorts, and socks.
The uniform helps us look like a team!
Time to tie the soccer cleats.
Next, we tie our soccer shoes.
They have spikes to help us run.
Let’s tie them tight!
Time to greet the soccer team.
Before we start, let’s say hello!
We can give high-fives or say “Hi!”
Being friendly is fun!
Time to plan the soccer game.
Now, we plan our soccer game.
Where will we play?
Who is on which team?
Planning is fun!
Time to throw the soccer ball.
It’s time to throw the ball!
We can throw it to friends.
Let’s use both hands!
Time to pass the soccer ball.
When we play, we pass the ball.
We kick it gently to a friend.
Passing is fun!
Time to kick the soccer ball.
Now, we kick the ball!
We can kick it hard or soft.
Kicking moves the ball!
Time to score a goal!
Finally, we try to score!
We kick the ball into the net.
Everyone cheers when we score!
Scoring is the best part!`,
      extensionCn: `足球的重要部分是什么？
足球是一个有趣的游戏。
我们需要运动服、鞋子、队友和一个球。
让我们了解一下它们吧！
穿上足球运动服的时间到了。
首先，我们穿上足球运动服。
它有一件衬衫、一条短裤和一双袜子。
运动服帮助我们看起来像一个团队！
系上足球鞋的时间到了。
接下来，我们系好足球鞋。
它们有钉子，帮助我们跑得更快。
让我们把它们系紧！
向足球队问好的时间到了。
在开始之前，让我们问好！
我们可以击掌或说“你好！”
友好是很有趣的！
计划足球比赛的时间到了。
现在，我们计划足球比赛。
我们在哪里比赛？
谁在什么队？
计划很有趣！
扔足球的时间到了。
现在是扔球的时间了！
我们可以把球扔给朋友。
让我们用双手扔球！
传足球的时间到了。
当我们玩时，我们传球。
我们轻轻地把球踢给朋友。
传球很有趣！
踢足球的时间到了。
现在是踢球的时间了！
我们可以踢得用力或轻轻地。
踢球可以让球移动！
进球的时间到了！
最后，我们试着进球！
我们把球踢进球网。
当我们进球时，大家都会欢呼！
进球是最棒的部分！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-77",
      level: "b",
      episode: "B77",
      title: "I Am a Community Worker",
      extensionEn: `I am a doctor.
I help people feel better when they are sick.
I check their heartbeat and give them medicine.
Doctors make sure everyone is healthy and happy!
I am a nurse.
I help doctors take care of patients.
I give them hugs and make them feel safe.
Nurses are friendly and help everyone feel better!
I am a firefighter.
I put out fires and keep people safe.
I wear a big helmet and use a hose.
Firefighters are heroes who help in emergencies!
I am a police officer.
I help keep our community safe.
I catch bad guys and help lost people.
Police officers are our friends!
I am a pilot.
I fly airplanes in the sky.
I take people to different places.
Pilots help us go on adventures!
I am a vet.
I take care of animals and keep them healthy.
I check their fur and give them medicine.
Vets love animals and help them feel better!
I am a construction worker.
I build houses and tall buildings.
I use big tools like hammers and drills.
Construction workers make our cities strong!
I am a teacher.
I help kids learn new things every day.
I teach them to read, write, and play.
Teachers make learning fun and exciting!`,
      extensionCn: `我是一名医生。
我帮助生病的人感觉好些。
我检查他们的心跳，还给他们药。
医生确保每个人都健康快乐！
我是一名护士。
我帮助医生照顾病人。
我给他们拥抱，让他们感到安全。
护士很友好，帮助每个人恢复健康！
我是一名消防员。
我扑灭火灾，保护人们安全。
我戴上大头盔，用水管灭火。
消防员是帮助应急情况的英雄！
我是一名警察。
我帮助让我们的社区安全。
我抓住坏人，帮助迷路的人。
警察是我们的朋友！
我是一名飞行员。
我在天空中驾驶飞机。
我带人们去不同的地方。
飞行员帮助我们去冒险！
我是一名兽医。
我照顾动物，确保它们健康。
我检查它们的毛发，还给它们药。
兽医爱动物，帮助它们恢复健康！
我是一名建筑工人。
我建造房子和高楼。
我使用大工具，比如锤子和电钻。
建筑工人让我们的城市更坚固！
我是一名老师。
我帮助孩子们每天学习新知识。
我教他们阅读、写字和玩耍。
老师让学习变得有趣和令人兴奋！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-78",
      level: "b",
      episode: "B78",
      title: "Winter Fun",
      extensionEn: `These are winter hats.
They keep our heads warm.
They are soft and cozy.
Some have pom-poms on top.
These are winter boots.
They keep our feet dry.
They are waterproof.
They help us walk in the snow.
These are winter scarves.
They keep our necks warm.
They are long and colorful.
We can wrap them around our necks.
These are winter mittens.
They keep our hands warm.
They have a thumb and a finger part.
They are soft and fuzzy inside.
These are winter pants.
They keep our legs warm.
They are thick and cozy.
They help us stay warm outside.
These are winter coats.
They keep our bodies warm.
They have hoods and pockets.
They are big and fluffy.
These are winter sleds.
We sit on them and slide down hills.
They are fun to ride.
They can go very fast.
This is winter fun.
We play in the snow.
We build snowmen and make snow angels.
We have a lot of fun together.`,
      extensionCn: `这些是冬天的帽子。
它们让我们的头保持温暖。
它们柔软又舒适。
有些帽子上面有绒球。
这些是冬天的靴子。
它们让我们的脚保持干燥。
它们是防水的。
它们帮助我们在雪地里行走。
这些是冬天的围巾。
它们让我们的脖子保持温暖。
它们又长又多彩。
我们可以把它们围在脖子上。
这些是冬天的手套。
它们让我们的手保持温暖。
它们有拇指和手指的部分。
它们里面柔软又毛茸茸的。
这些是冬天的裤子。
它们让我们的腿保持温暖。
它们又厚又舒适。
它们帮助我们在外面保持温暖。
这些是冬天的外套。
它们让我们的身体保持温暖。
它们有帽子和口袋。
它们又大又蓬松。
这些是冬天的雪橇。
我们坐在上面滑下山坡。
它们很好玩。
它们可以滑得很快。
这就是冬天的乐趣。
我们在雪地里玩。
我们堆雪人和做雪天使。
我们一起玩得很开心。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-79",
      level: "b",
      episode: "B79",
      title: "It ls Spring",
      extensionEn: `It is spring.
The sun pops up.
The sun pops up from the ground.
What color is the sun?
It's gold.
It's so happy.
It's laughing.
Let's laugh together.
The flowers pop out.
The flowers pop out from the plants.
What colors are the flowers?
Yellow, blue, purple, orange, red...
The flowers are colorful.
The worms pop up.
The worms pop up from the ground.
What color are the worms?
They are red.
How many worms are there?
Let's count.
One, two. There are two worms.
The plants pop up.
The plants pop up from the ground.
What color are the plants?
They are green.
The leaves pop out.
The leaves pop out from the trees.
What color are the leaves?
They are green.
The birds pop out.
The birds pop out from the eggs.
What color are the birds?
They are yellow.
What color are the eggs?
They are white.
The animals pop out.
The animals pop out from the hole.
What animals can you see?
A deer, a chipmunk, a rabbit, a bear.
Spring pops out everywhere.
What can you see on this page?
Trees, flowers, a bird, a rabbit, a deer, a worm.
It is spring.
Do you like spring?
I like spring.`,
      extensionCn: `到了春天。
太阳升起来了。
太阳从地平线升起。
太阳是什么颜色的？
它是金色的。
它很开心。
它在笑。
我们一起笑吧。
花开了。
花从植物上冒出来。
花是什么颜色的？
黄的、蓝的、紫的、橙的、红的。
花是五彩缤纷的。
蠕虫冒出来了。
蠕虫从地里冒出来了。
蠕虫是什么颜色的？
它们是红色的。
有多少条蠕虫？
让我们数一数。
一、二。有两条蠕虫。
植物冒出来了。
植物从地里冒出来了。
植物是什么颜色的？
它们是绿色的。
树叶冒出来了。
树叶从树上冒出来。
树叶是什么颜色的？
它们是绿色的。
小鸟冒出来了。
小鸟从蛋里冒出来。
小鸟是什么颜色的？
它们是黄色的。
鸡蛋是什么颜色的？
它们是白色的。
动物们冒出来了。
动物们从洞里出来了。
你能看到哪些动物？
一只鹿、一只花栗鼠、一只兔子、一只熊。
春天在各处冒出来。
你在这页看到了什么？
树、花、小鸟、兔子、鹿、蠕虫。
现在是春天。
你喜欢春天吗？
我喜欢春天。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-80",
      level: "b",
      episode: "B80",
      title: "Sophie Goes for a Walk",
      extensionEn: `Sophie sniffs the long leash.
Sophie is a dog that loves to explore!
Her owner will take her for a walk.
First, they need to put on the leash.
The leash keeps Sophie safe while walking.
Sophie likes to sniff new things.
Right now, she is sniffing the long leash.
Sophie sniffs the cut grass.
Look! There is a grass cutter nearby.
It cuts the grass short.
Sophie loves the smell of cut grass.
The grass smells fresh.
Sophie sniffs the fat cat. Sophie
Look at the big, fluffy cat on the fence!
Sophie is curious and sniffs the cat.
Dogs and cats sometimes play, but they can fight too.
Sophie wants to be friends with the cat!
Sophie sniffs the fresh pie.
Wow! What’s that yummy smell?
It’s a fresh pie!
The pie smells sweet.
Sophie dreams of tasting the pie.
She wishes she could have a bite!
Sophie sniffs the jumpy mailman.
Who is this person?
This is the mailman with letters in his bag.
Look! There’s a mailbox next to him.
Oh no! The mailman is jumping!
Sophie surprised him by getting too close!
Now letters are falling everywhere!
Sophie sniffs the hot steak. Sophie
Who is cooking something tasty?
The smell of steak makes Sophie hungry!
The steak smells delicious.
Sophie loves the smell of good food, especially steak!
Sophie sniffs the big skunk. Sophie
Oh no! Look at Sophie’s face!
She looks unhappy because it’s a skunk.
Skunks have a strong, bad smell!
Sophie knows to stay away from skunks!
Sophie sniffs the new friend.
Look! There’s another dog!
This is Sophie’s new friend.
The new dog seems happy and wants to play.
Sophie sniffs her new friend to say hello.
They might have fun playing together!`,
      extensionCn: `索菲闻了闻长牵引绳。
索菲是一只喜欢探索的小狗！
她的主人要带她去散步。
首先，他们需要把牵引绳绑上。
牵引绳能保证索菲在散步时的安全。
索菲喜欢闻新东西。
现在，她在闻长牵引绳。
索菲闻了闻割过的草。
看！附近有一台割草机。
它把草剪短。
索菲喜欢割草的味道。
草的味道很新鲜。
闻了闻那只胖猫。
看那只坐在篱笆上的大猫！
索菲很好奇，闻了闻这只猫。
狗和猫有时玩，但也可能打架。
索菲想和猫做朋友！
索菲闻了闻新鲜的派。
哇！那是什么好吃的味道？
是一个新鲜的派！
这派闻起来很甜。
索菲幻想尝一口这派。
她希望能咬一口！
索菲闻了闻跳动的邮递员。
这个人是谁？
这是邮递员，他的包里装着信件。
看！他旁边有一个邮筒。
哦，不！邮递员在跳！
索菲靠得太近了，吓到他了！
现在信件到处掉落！
闻了闻热牛排。
谁在做美味的食物？
牛排的味道让索菲很饿！
牛排的味道很好。
索菲喜欢好食物的味道，尤其是牛排！
闻了闻大臭鼬。
哦不！看看索菲的表情！
她看起来不开心，因为是臭鼬。
臭鼬有很强的难闻气味！
索菲知道要远离臭鼬！
索菲闻了闻新朋友。
看！这里有另一只狗！
这是索菲的新朋友。
新狗看起来很高兴，想玩。
索菲闻了闻新朋友，打招呼。
他们可能会一起玩得很开心！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-81",
      level: "b",
      episode: "B81",
      title: "Yours or Mine",
      extensionEn: `The girl is sleeping on her bed.
The cat is on the bed too.
This bed is my bed.
The girl gently takes the cat off the bed.
This bed is your bed.
The girl points to the cat's bed in the corner.
What is the cat doing?
The cat is eating the girl's food.
Oh, no, this food is my food!
This is your food.
The girl points to the cat's bowl filled with fresh food.
What is the cat doing?
The cat is playing with the girl's braids.
Don't play with it!
This tail is my tail.
The girl points to the cat's tail, which is swishing back and forth.
This tail is your tail.
The girl stretches her hands and says, "This room is my room."
The cat is hiding behind the door, peeking out.
The girl hugs the cat tightly and says to the cat, "This room is your room, too!"
They are best friends.
They love each other very much.`,
      extensionCn: `小女孩在床上睡觉。
猫也在床上。
这张床是我的床。
小女孩轻轻把猫从床上拿下来。
这张床是你的床。
小女孩指向角落里的猫床。
猫在做什么？
猫在吃小女孩的食物。
哦，不，这个食物是我的食物！
这是你的食物。
小女孩指向装满新鲜食物的猫碗。
猫在做什么？
猫在玩小女孩的辫子。
不要玩它！
这个尾巴是我的尾巴。
小女孩指着猫的尾巴，猫的尾巴在左右摇摆。
这个尾巴是你的尾巴。
小女孩伸展双手说：“这个房间是我的房间。”
猫藏在门后，偷偷看着。
小女孩紧紧抱住猫，对猫说：“这个房间也是你的房间！”
他们是最好的朋友。
他们彼此非常相爱。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-82",
      level: "b",
      episode: "B82",
      title: "Near and Far Away",
      extensionEn: `What is this?
It is a lion.
How many lions are there?
There are two lions.
This lion is near. It's fierce.
That lion is far away. It's standing on the ground.
What is this?
It is an owl.
How many owls are there?
There are two owls.
This owl is near. Its eyes are big and shiny.
That owl is far away. It's flying in the sky.
What is this?
It is a wolf.
How many wolves are there?
There are two wolves.
This wolf is near. Its teeth are sharp.
That wolf is far away. It's howling to the sky.
What is this?
It is a deer.
How many deer are there?
There are two deer.
This deer is near. Its antlers are big.
That deer is far away. It's standing on the ground.`,
      extensionCn: `这是什么？
这是一只狮子。
这里有多少只狮子？
这里有两只狮子。
这只狮子很近。它很凶猛。
那只狮子很远。它站在地上。
这是什么？
这是一只猫头鹰。
这里有多少只猫头鹰？
这里有两只猫头鹰。
这只猫头鹰很近。它的眼睛又大又亮。
那只猫头鹰很远。它在天空中飞翔。
这是什么？
这是一只狼。
这里有多少只狼？
这里有两只狼。
这只狼很近。它的牙齿很锋利。
那只狼很远。它在对着天空嚎叫。
这是什么？
这是一只鹿。
这里有多少只鹿？
这里有两只鹿。
这只鹿很近。它的鹿角很大。
那只鹿很远。它站在地上。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-83",
      level: "b",
      episode: "B83",
      title: "You Can Go",
      extensionEn: `You can go over.
The dog is going over the river.
The dog jumps high and far.
There is a fish in the river.
The fish is looking at the dog.
You can go under.
The dog is going under the trunk.
There is a bird in the air.
The bird is looking at the dog.
You can go around.
The dog is going around the garden.
The flowers and leaves are flying into the air.
You can go through.
The dog is going through the puddle.
There is a cat sitting on the wall.
The cat is looking at the dog.
You can go forward.
The dog is going forward.
There is a squirrel on the ground.
The squirrel is looking at the dog.
You can go backward.
There are ants on the road ahead.
The dog is scared.
The dog is going backward.
There is a bird in the tree.
The bird is looking at the dog.
You can go across.
The dog is going across the bridge.
There is a frog in the river.
The frog is looking at the dog.
I can go with you.
The boy is going with the dog.
They are running on the grass.`,
      extensionCn: `你可以越过去。
狗狗正在越过河流。
狗狗跳得又高又远。
河里有一条鱼。
鱼在看着狗狗。
你可以从下面过去。
狗狗正从树干下面钻过去。
空中有一只鸟。
鸟在看着狗狗。
你可以绕过去。
狗狗正在绕着花园走。
花和叶子飞到空中。
你可以穿过去。
狗狗正在穿过水坑。
墙上有一只猫。
猫在看着狗狗。
你可以向前走。
狗狗正在向前走。
地上有一只松鼠。
松鼠在看着狗狗。
你可以向后走。
路前面有很多蚂蚁。
狗狗害怕了。
狗狗正在向后退。
树上有只鸟。
鸟在看着狗狗。
你可以横过。
狗狗正在过桥。
河里有一只青蛙。
青蛙在看着狗狗。
我可以和你一起走。
男孩和狗狗一起走。
他们在草地上奔跑。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-84",
      level: "b",
      episode: "B84",
      title: "Swing, Sydney, Swing",
      extensionEn: `Sydney loves to swing. Sydney
She swings up, up, up!
Then she swings down, down, down!
Swinging is so much fun!
Sydney smiles as she swings high into the sky. Sydney
Sydney swings above the grass. Sydney
This is a swing made of a tire.
The swing is hanging on a tree.
She can see the grass below her feet.
Sydney swings so high that she almost touches the clouds! Sydney
Sydney swings below the tree. Sydney
There’s a big tree.
The tree has big, tall branches.
It can handle the swing and the weight of the girl.
Sydney swings below the tree where it’s cool and breezy.
Sydney swings over the mud. Sydney
Oh no! There’s mud under the swing!
Sydney swings over the mud. Sydney
She swings high so she doesn’t fall in.
We don’t want Sydney to get her shoes dirty, do we?
Sydney swings under the nest. Sydney
Look up! There’s a bird’s nest high in the tree.
There are three eggs in the nest.
They are going to be little birds soon.
Sydney swings under the nest. Sydney
Sydney swings beside the goat. Sydney
There’s a friendly goat at the farm.
Sydney swings beside the goat. Sydney
The goat looks at Sydney.
Sydney swings and says hi to the goat. Sydney
Sydney swings between the chickens. Sydney
Cluck, cluck! The chickens are running around, but Sydney swings between them.
They run under the swing, but Sydney is safe in the air.
She swings happily between the chickens.
Sydney swings at the farm. Sydney
Sydney is swinging at the farm. Sydney
The animals are all around.
She can hear the goats, the chickens, and even a cow mooing.
Sydney loves swinging at the farm. Sydney`,
      extensionCn: `喜欢荡秋千。
她荡得越来越高！
然后她又荡得越来越低！
荡秋千真是太有趣了！
笑了，她荡得高高的，快要碰到天空了。
在草地上荡秋千。
这是一个用轮胎做的秋千。
秋千挂在一棵树上。
她能看到脚下的草地。
荡得好高，差点碰到云朵了！
在树下荡秋千。
那是一棵大树。
树有高大粗壮的树枝。
它能承受秋千和小女孩的重量。
在树下，凉风习习，Sydney 在那里轻轻荡着。
荡过泥地。
哦不！秋千下面有泥！
荡过了泥地。
她荡得很高，所以没有掉进泥地里。
我们可不希望 Sydney 把鞋弄脏，对吗？
在鸟巢下荡秋千。
抬头看！树上有一个高高的鸟巢。
鸟巢里有三颗蛋。
它们很快会变成小鸟呢。
在鸟巢下轻轻荡着。
在山羊旁边荡秋千。
农场里有一只友好的山羊。
在山羊旁荡秋千。
山羊看着 Sydney。
荡着秋千，向山羊打招呼。
荡过鸡群之间。
咯咯咯！鸡群四处跑着，而 Sydney 在它们中间荡着。
它们从秋千下跑过去，而 Sydney 安全地在空中荡着。
她开心地在鸡群之间荡着。
在农场荡秋千。
在农场里荡秋千。
动物们都在她周围。
她能听到山羊、鸡，还有一头牛在哞哞叫。
喜欢在农场荡秋千。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-85",
      level: "b",
      episode: "B85",
      title: "Bridges",
      extensionEn: `Some bridges are big.
Big bridges are strong and wide.
Cars and trucks can go over them.
People can walk on big bridges too.
They help us cross big rivers.
Some bridges are small.
Small bridges are for people and bikes.
They cross over little streams.
You can find small bridges in parks.
Some bridges are old.
Old bridges have been here for many years.
People still use them today.
Some old bridges are made of stone.
Some bridges are new.
New bridges are shiny and strong.
They are made with new materials.
New bridges help us cross busy places.
Some bridges are made from wood.
Wooden bridges are smooth and natural.
They are made from trees.
You can find wooden bridges in parks.
Some bridges are made from stone.
Stone bridges are heavy and strong.
They are made from rocks.
Stone bridges last a long time.
Some bridges are made from metal.
Metal bridges are shiny and very strong.
They can hold many cars.
You see metal bridges in big cities.
Some bridges are made from rope!
Rope bridges are fun to cross.
They are made from thick ropes.
Rope bridges might swing a little when you walk.`,
      extensionCn: `有些桥很大。
大桥坚固而宽阔。
汽车和卡车可以经过它们。
人们也可以在大桥上行走。
它们帮助我们跨越大河。
有些桥很小。
小桥是给人和自行车用的。
它们跨越小溪。
你可以在公园里找到小桥。
有些桥是旧的。
旧桥已经存在了很多年。
人们今天仍在使用它们。
一些旧桥是用石头建成的。
有些桥是新的。
新桥是光亮而坚固的。
它们是用新材料建造的。
新桥帮助我们跨越繁忙的地方。
有些桥是木头做的。
木桥光滑而自然。
它们是用树木制成的。
你可以在公园找到木桥。
有些桥是石头做的。
石桥又重又坚固。
它们是用岩石建成的。
石桥可以使用很长时间。
有些桥是金属做的。
金属桥光亮而非常坚固。
它们可以承载许多汽车。
你可以在大城市看到金属桥。
有些桥是绳子做的。
绳桥很有趣。
它们是用粗绳子制成的。
当你走时，绳桥可能会轻微晃动。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-86",
      level: "b",
      episode: "B86",
      title: "Where",
      extensionEn: `What can you see on the page?
We see a brown bear, a white rabbit, and a yellow bird.
The brown bear looks unhappy.
What's wrong with the brown bear?
"Where?" asked the little brown bear. “
Where is the brown bear now?
Let's keep reading.
This is the mother rabbit.
These are baby rabbits.
The mother rabbit is carrying one baby rabbit.
The other two baby rabbits are playing on the ground.
The brown bear asks the mother rabbit, "Where is my mother?"
The brown bear asks the mother rabbit.
This is the father frog.
These are baby frogs.
The father frog is sitting on the lotus leaf.
This baby frog is swimming in the pond.
This baby frog is sitting on the ground.
The brown bear asks the father frog, "Where is my father?"
These are birds.
This is their house; it's a nest.
The big bird is sitting on the branch.
The baby bird is sitting in the nest.
The brown bear asks the birds, "Where is my house?"
What's this?
This is a moose.
What is it doing?
It's eating grass.
The brown bear sits on a branch.
The brown bear asks the moose, "Where is my bed?"
This is a skunk.
It's picking flowers.
The brown bear stands behind the tree.
The brown bear covers his nose.
Maybe because the skunk is smelly.
The brown bear asks the skunk, "Where is my honey?"
Where am I?
The brown bear is shouting.
The brown bear doesn't know where he is.
Maybe he is lost.
The brown bear says, "I am lost."
The brown bear asks the squirrel, "Can you help me?"
Don't worry, we'll help you find your mother.
We'll help you find your father, your house, your bed, and your honey.`,
      extensionCn: `你能在这页看到什么？
我们看到一只棕色的熊、一只白色的兔子和一只黄色的鸟。
棕熊看起来很不开心。
棕熊怎么了？
哪里？”小棕熊问道。
棕熊现在在哪里？
让我们继续阅读。
这是兔妈妈。
这些是小兔子。
兔妈妈正抱着一只小兔子。
另外两只小兔子在地上玩耍。
棕熊问兔妈妈：“我妈妈在哪里？”
棕熊问兔妈妈。
这是青蛙爸爸。
这些是小青蛙。
青蛙爸爸正坐在荷叶上。
这只小青蛙在池塘里游泳。
这只小青蛙坐在地上。
棕熊问青蛙爸爸：“我爸爸在哪里？”
这些是鸟。
这是它们的房子，是一个鸟巢。
大鸟正坐在树枝上。
小鸟正坐在巢里。
棕熊问鸟：“我的家在哪里？”
这是什么？
这是一只驼鹿。
它在做什么？
它在吃草。
棕熊坐在树枝上。
棕熊问驼鹿：“我的床在哪里？”
这是一只臭鼬。
它在摘花。
棕熊站在树后面。
棕熊捂住鼻子。
或许因为臭鼬很臭。
棕熊问臭鼬：“我的蜂蜜在哪里？”
我在哪里？
棕熊在喊叫。
棕熊不知道自己在哪。
或许他迷路了。
棕熊说：“我迷路了。”
棕熊问松鼠：“你能帮帮我吗？”
别担心，我们会帮你找到你妈妈。
我们会帮你找到你的爸爸、你的家、你的床和你的蜂蜜。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-87",
      level: "b",
      episode: "B87",
      title: "Are These His or Hers",
      extensionEn: `What can we see on the page?
We can see a mom, a boy, and a girl.
There’s a pile of clothes on a blanket.
Mom looks a bit worried.
What’s wrong?
They are sorting through the clothes.
Are these clothes his or hers?
Let's keep reading to find out.
What are these?
Mom picks up some socks.
Are these socks his or hers?
These socks are his.
They must keep his little feet warm and cozy.
What are these?
Mom picks up some shorts.
Are these shorts his or hers?
These shorts are hers.
She must wear them on warm, sunny days to play outside.
What are these?
Mom picks up some pajamas.
Are these pajamas his or hers?
These pajamas are his.
He must wear them when it’s bedtime, so he can sleep comfortably.
What are these?
Mom picks up some shirts.
Are these shirts his or hers?
These shirts are hers.
She can wear them to school or when she goes out to play.
What are these?
Mom picks up some jackets.
Are these jackets his or hers?
These jackets are his.
They’ll keep him warm on chilly days when the wind is blowing.
What are these?
Mom picks up some hats.
Are these hats his or hers?
These hats are hers.
She must love wearing them to protect her head from the sun.
What are these?
Mom picks up some jeans.
Are these jeans his or hers?
They are his and hers.
They can each wear their jeans when they go on fun adventures together.`,
      extensionCn: `我们在这一页上能看到什么？
我们看到了一位妈妈、一个男孩和一个女孩。
有一堆衣服放在毯子上。
妈妈看起来有点担心。
怎么了？
他们在整理衣服。
这些衣服是他的还是她的？
让我们继续读下去看看。
这些是什么？
妈妈拿起几双袜子。
这些袜子是他的还是她的？
这些袜子是他的。
它们一定能让他的小脚暖和又舒适。
这些是什么？
妈妈拿起几条短裤。
这些短裤是他的还是她的？
这些短裤是她的。
她一定会在温暖的阳光天穿着它们在外面玩。
这些是什么？
妈妈拿起几件睡衣。
这些睡衣是他的还是她的？
这些睡衣是他的。
他一定会在睡觉时穿上它们，这样可以睡得舒服。
这些是什么？
妈妈拿起几件衬衫。
这些衬衫是他的还是她的？
这些衬衫是她的。
她可以穿它们去学校或者出去玩的时候穿。
这些是什么？
妈妈拿起几件夹克。
这些夹克是他的还是她的？
这些夹克是他的。
它们会在刮风的寒冷日子里让他保持温暖。
这些是什么？
妈妈拿起几顶帽子。
这些帽子是他的还是她的？
这些帽子是她的。
她一定喜欢戴它们来保护自己的头部免受阳光。
这些是什么？
妈妈拿起几条牛仔裤。
这些牛仔裤是他的还是她的？
它们是他的和她的。
他们每个人都可以穿着牛仔裤一起去冒险。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-88",
      level: "b",
      episode: "B88",
      title: "Lazy Lulu",
      extensionEn: `This is a chameleon.
It's called Lazy Lulu.
Why is it called Lazy Lulu?
Let’s keep reading to find out.
The wind blows a leaf away.
Lazy Lulu sees the leaf.
What will it do?
Lulu doesn’t move at all!
The leaf blows by.
Look at Lulu’s eyes.
Its eyes are the only things moving, slowly following the leaf.
Lazy Lulu sees a feather.
A feather drifts toward Lulu.
What will Lazy Lulu do this time?
Once again, it doesn’t move at all!
The feather blows by.
Look at its eyes!
It only moves its eyes, following the feather until it disappears.
Lazy Lulu sees a seed.
This is a dandelion seed.
It’s soft and fluffy.
Lulu stays perfectly still.
The seed floats right by its head.
Look at its eyes!
Its eyes are moving again, but its body remains completely still.
Lulu’s eyes are so flexible that they can move in different directions!
Lazy Lulu sees a fly.
Buzz! The fly quickly zips by.
What will Lazy Lulu do this time?
Lulu suddenly springs into action!
It sticks out its long, sticky tongue.
Snap! The fly is caught in an instant!
Lulu isn’t so lazy after all!`,
      extensionCn: `这是一只变色龙。
它的名字叫懒惰的露露。
它为什么叫懒惰露露呢？
让我们继续读下去看看。
风吹走了一片叶子。
懒惰的露露看到了这片叶子。
它会做什么呢？
露露一点都没动！
叶子飘了过去。
看看露露的眼睛。
它的眼睛在慢慢跟随着叶子移动，眼睛是唯一在动的东西。
懒惰的露露看到了羽毛。
一片羽毛向露露飘过来。
这次懒惰的露露会做什么呢？
露露还是没有动！
羽毛吹了过去。
看看它的眼睛！
它的眼睛紧紧跟随着羽毛，直到羽毛消失不见。
懒惰的露露看到了种子。
这是一颗蒲公英的种子。
它毛茸茸的。
露露依旧一动不动。
种子从它的头边飘过。
看看它的眼睛！
它的眼睛又在动，但它的身体还是一动不动。
露露的眼睛非常灵活，可以朝不同的方向看！
懒惰的露露看到了一只苍蝇。
嗡嗡声响起，苍蝇快速飞过。
这次露露会有什么反应呢？
露露突然动了！
它伸出了又长又黏的舌头。
啪！苍蝇瞬间被捉住了！
露露其实并没有那么懒！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-89",
      level: "b",
      episode: "B89",
      title: "Light and Heavy",
      extensionEn: `This dog is heavy. She cannot lift it.
Look at this big dog!
She tries to lift it, but oh no!
It’s too heavy!
Her arms feel so tired.
Can you try to lift it?
Wow, it’s really hard, isn’t it?
This dog is light. She can lift it.
Now look at this little dog!
She can pick it up easily!
She hugs it close and smiles.
Do you want to try lifting it too?
See how light and fun it is?
This rock is heavy. She cannot lift it.
Here’s a big, heavy rock!
It’s as heavy as a mountain.
She tries to lift it, but it’s stuck!
Her hands can’t move it.
Can you give it a try?
It’s super heavy, isn’t it?
This rock is light. She can lift it.
Now look, here’s a tiny rock!
It’s so small and light, like a little toy.
She can easily pick it up with one hand.
You can pick it up too.
Isn’t it great to hold something so light?
This log is heavy. She cannot lift it.
Wow, look at this big log!
She tries to lift it, but it won’t budge.
It’s too strong for her!
Can you help her lift it?
Oh no, it’s still too heavy!
This stick is light. She can lift it.
Now here’s a little stick!
It’s light and so easy to pick up.
She waves it in the air like a magic wand.
Can you lift it too?
It’s so light and fun!
Dad is heavy. She cannot lift him.
Daddy is big and strong, just like a giant!
She tries to lift him, but he’s way too heavy.
She can’t lift him up.
Can you lift him?
Nope, he’s too big for anyone to lift!
She is light. Dad can lift her!
But she is light, like a feather!
Daddy can lift her up high in the sky!
Look how strong Daddy is.
He can lift you too!
It’s so much fun to be lifted and feel so light!`,
      extensionCn: `这只狗很重。她不能把它抬起来。
你看这只大狗！
她试着抬起它，但哦不！
它太重了！
她的手臂感到好累。
你能试着抬起它吗？
哇，这真的很难，对吧？
这只狗很轻。她可以把它抬起来。
现在看看这只小狗！
她可以轻松地把它抬起来！
她把它紧紧抱住，微笑着。
你想试着抬起它吗？
你看看它有多轻，有多好玩？
这块石头很重。她不能把它抬起来。
这里有一块大而重的石头！
它和山一样重。
她试着抬起它，但它被卡住了！
她的手无法移动它。
你能试试看吗？
这太重了，对吧？
这块石头很轻。她可以把它抬起来。
现在看看，这是一块小石头！
它又小又轻，就像一个小玩具。
她可以用一只手轻松地把它抬起来。
你也可以把它抬起来。
拿着这么轻的东西不是很好吗？
这根木头很重。她不能把它抬起来。
哇，看看这根大木头！
她试着抬起它，但它动不了。
对她来说太强壮了！
你能帮她抬起它吗？
哦不，它还是太重了！
这根棍子很轻。她可以把它抬起来。
现在这里有一根小棍子！
它轻得很，抬起来也很简单。
她像挥舞魔法棒一样在空中摇动它。
你也能抬起来吗？
它真轻又好玩！
爸爸很重。她不能把他抬起来。
爸爸又大又强壮，就像一个巨人！
她试着抬起他，但他太重了。
她不能把他抬起来。
你能把他抬起来吗？
不，他对任何人来说都太大了！
她很轻。爸爸可以把她抬起来！
但她很轻，像一根羽毛！
爸爸可以把她抬得高高的！
看看爸爸有多强壮。
他也可以把你抬起来！
被抬起来，感受到如此轻松，真是太好玩了！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-90",
      level: "b",
      episode: "B90",
      title: "The Hungry Goat",
      extensionEn: `My Goat Ate the Pretty Flowers.
The goat saw the colorful flowers in the garden.
It thought they looked yummy.
The boy felt worried and scratched his head.
"Oh no! My goat ate the pretty flowers!" “
My Goat Ate the Stinky Trash.
There was a trash can nearby.
When the goat knocked it over,
It found stinky trash.
The boy pinched his nose and said, "Eww!"
The trash was old and yucky, but the goat ate it happily.
My Goat Ate the Clean Clothes.
The boy was hanging clothes.
When the goat saw the clean clothes,
"Oh, they smell so good!" it thought. “
The goat tugged at the clothes,
And looked at the ground, where they had fallen.
"Oops! The goat did it again!" “
My Goat Ate the Old Shoes.
The goat found old shoes.
The goat started chewing on the shoes.
The boy felt angry and shouted, "Hey! Don’t bite that!"
But the goat kept munching happily.
My Goat Ate the New Ball.
The goat saw a shiny new ball and took a bite.
The boy wanted to stop the goat, but it was too late.
"Wait!" he shouted, but the ball was broken. “
“Oh no! My goat ate the new ball!" “
My Goat Ate the Math Problems.
The boy was doing homework.
The curious goat munched on the pages.
"They're all in pieces now!" the boy sighed. “
“Oh, what a headache! I need to do them again!” “
My Goat Ate the Big Book.
What is the goat eating now?
It’s munching on a big book!
The boy tried to stop it, but he couldn’t.
The goat nibbled the pages, enjoying the stories.
My Goat Will Not Eat Its Lunch.
It’s mealtime now!
The boy prepared bright fruits and veggies.
Will the goat eat them?
No, the goat won’t eat.
Naughty goat! These are your food!
You ate too many things before!`,
      extensionCn: `我的山羊吃了漂亮的花。
这只山羊看到花园里的五彩花朵。
它觉得这些花看起来很好吃。
男孩感到担心，挠了挠头。
哦不！我的山羊吃了漂亮的花！”
我的山羊吃了臭垃圾。
附近有个垃圾桶。
当山羊把它撞倒，
它发现了臭臭的垃圾。
男孩捏住鼻子说：“呜！”
垃圾又旧又恶心，但山羊却开心地吃着。
我的山羊吃了干净的衣服。
男孩正在晾衣服。
当山羊看到干净的衣服时，
哦，它们闻起来真香！”它想。
山羊拉了拉衣服，
看着地上掉落的衣服。
哎呀！山羊又搞砸了！”
我的山羊吃了旧鞋子。
山羊发现了旧鞋子。
山羊开始咀嚼鞋子。
男孩生气地喊道：“嘿！不要咬那个！”
但山羊还是开心地吃着。
我的山羊吃了新皮球。
山羊看到一个闪亮的新球，咬了一口。
男孩想阻止山羊，但为时已晚。
等一下！”他喊道，但球已经坏了。
哦不！我的山羊吃了新球！”
我的山羊吃了数学题。
男孩正在做作业。
好奇的山羊开始吃那些页面。
现在都变成碎片了！”男孩叹了口气。
哦，真头疼！我还得再做一遍！”
我的山羊吃了一本大叔。
山羊现在在吃什么？
它在吃一本大书！
男孩试图阻止它，但没有成功。
山羊啃食着书页，享受那些故事。
我的山羊不吃它的午饭。
现在是吃饭时间！
男孩准备了色彩鲜艳的水果和蔬菜。
山羊会吃吗？
不，山羊不吃。
调皮的山羊！这些是你的食物！
你以前吃了太多别的东西！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-91",
      level: "b",
      episode: "B91",
      title: "Three Baby Birds",
      extensionEn: `There were three baby birds.

Look, this is a nest on the branch.
There is a mama bird and three baby birds.
The baby birds have just been born.
We can see the eggshells.
The mama bird is taking care of the baby birds.
The baby birds grew and grew.

They are stacking up high.
They look happy.
Look at their mouths.
They are sucking on pacifiers.
Mama bird looks a little worried.
“Be careful, kids, don’t fall over!” “
One baby bird flew away.

This bird learned how to fly.
It is flying away.
Mama bird and the other two birds are watching it.
Two baby birds grew and grew.

There are only two baby birds now.
They are rolling in the nest and laughing.
They look happy.
One baby bird flew away.

This bird learned how to fly.
It is flying away.
Mama bird and the other bird are watching it.
The last baby bird grew and grew.

Mama bird is feeding the bird with bugs.
There are so many bugs on the plate.
The last baby bird flew away.

Wow, this bird is flying so high!
Mama bird is saying goodbye to the bird.
The bird looks back at mama.
It’s going to miss mama, but it’s excited to explore the world on its own.
The mama bird can finally rest.

Wow, look at mama, she is so cool!
She is sitting on a chair, wearing her hat and sunglasses.
She is drinking a refreshing drink.
She is enjoying her time.`,
      extensionCn: `曾经有三只小鸟。

看看，这是一窝鸟巢在树枝上。
有一只妈妈鸟和三只小鸟。
小鸟刚刚出生。
我们可以看到蛋壳。
妈妈鸟正在照顾小鸟们。
小鸟们越来越大了。

它们一个个叠起来了。
它们看起来很开心。
看看它们的嘴巴。
它们在叼着奶嘴。
妈妈鸟看起来有点担心。
孩子们，小心点，别摔倒！”
一只小鸟飞走了。

这只鸟学会了飞行。
它飞走了。
妈妈鸟和其他两只鸟在看着它。
两只小鸟继续成长。

现在只剩下两只小鸟了。
它们在巢里打滚，开心地笑着。
它们看起来很快乐。
一只小鸟飞走了。

这只鸟学会了飞行。
它飞走了。
妈妈鸟和另一只小鸟在看着它。
最后一只小鸟继续成长。

妈妈鸟正在用昆虫喂这只小鸟。
盘子里有很多昆虫。
最后一只小鸟飞走了。

哇，这只鸟飞得好高！
妈妈鸟在和小鸟告别。
小鸟回头看着妈妈。
它会想念妈妈，但它也很兴奋能自己去探索世界。
妈妈鸟终于可以休息了。

哇，看看妈妈鸟，她真酷！
她坐在椅子上，戴着帽子和太阳镜。
她在喝一杯清爽的饮料。
她正在享受自己的时光。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-92",
      level: "b",
      episode: "B92",
      title: "Two Little Dicky Birds",
      extensionEn: `There were two little dicky birds.
The one on the left wore a pretty dress.
The one on the right had a cool cape.
They both wore tiny hats.
They looked extra cute!
They loved flying high.
One sunny day, they met on a hill.
The hill was covered in soft, green grass.
The sun was shining warmly.
The breeze was soft and gentle.
They chirped happily.
One was named Jack.
The bird in the cape was Jack.
He was very brave.
He loved to fly fast.
The other was named Jill.
The bird in the dress was Jill.
She was gentle.
She loved to sing sweet songs.
Fly away, Jack!
Fly away, Jill!
Suddenly, Jack spread his wings.
He flew fast into the sky.
Jill was surprised. Jill
She spread her wings too.
She followed Jack.
“Wait for me, Jack!” Jill said. “
"Come back, Jack! I have something for you, Jack!” someone called. “
Jack heard the call. Jack
He turned around and flew back.
“Come back, Jill!” the voice called. “
Jill heard her name. Jill
She flew back happily.
What are these?
These are seeds.
The person gave seeds to the birds.
Jack and Jill pecked at the seeds. Jack
They were so happy!
Their wings fluttered with joy.
They loved their snack!`,
      extensionCn: `有两只小鸟。
左边的那只穿着漂亮的裙子。
右边的那只披着酷酷的披风。
它们都戴着小小的帽子。
它们看起来特别可爱！
它们喜欢飞得高高的。
有一天阳光明媚，它们在山顶相遇。
山顶铺满了柔软的青草。
阳光很温暖。
微风轻轻吹拂。
它们快乐地鸣叫。
有一只小鸟叫Jack。
披着披风的小鸟叫Jack。
他很勇敢。
他喜欢飞得快。
另一只小鸟叫Jill。
穿着裙子的小鸟叫Jill。
她很温柔。
她喜欢唱甜美的歌。
快飞走，Jack！
快飞走，Jill！
突然，Jack张开了翅膀。
他快速飞向天空。
感到惊讶。
她也张开了翅膀。
她跟着Jack。
等我，Jack！”Jill说。
回来吧，Jack！我有东西给你！”有人喊道。
听到了喊声。
他转身飞了回来。
回来吧，Jill！”那个声音喊道。
听到了她的名字。
她高兴地飞了回来。
这是什么？
这是种子。
那个人给小鸟们喂种子。
和Jill啄食着种子。
它们很开心！
它们高兴地拍打着翅膀。
它们喜欢这个小吃！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-93",
      level: "b",
      episode: "B93",
      title: "Wet Wally",
      extensionEn: `Wally got his tie wet. Wally
•
They were having breakfast.
There was a bowl of milk on the table.
Oops! Wally dropped his tie into the milk!
Now Wally’s tie is wet.
Wally got his pants wet. Wally

Wally was walking on the street. Wally
There was a big puddle ahead.
A car zoomed by and splashed water everywhere.
Oh no! Wally’s pants got wet!
Wally got his work wet. Wally

Wally was busy working. Wally
There were lots of important papers on the table.
But suddenly, the cup fell over!
Now all of Wally’s work is wet!
Wally got his lunch wet. Wally
•
Wally was having lunch. Wally
Oops! His food fell into the water!
Now Wally’s lunch is wet.
Wally doesn’t know what to do. He looks at his wet lunch, feeling unsure. Wally
Wally got his face wet. Wally

Wally was washing his hands. Wally
He tried to turn on the tap.
But the water splashed everywhere!
Now Wally’s face is all wet!
Wally got his phone wet.Wally

What is this?
It looks like Wally’s phone fell into the toilet!
Wally covered his face with his paw, feeling hopeless. Wally
Wally got his shoes wet.Wally

Wally was walking down the street again. Wally
This time, he didn’t see the puddle and stepped right into it!
Now his shoes are wet!
Wally sighed, feeling disappointed. Wally
Wally gave up and went swimming.Wally

What a terrible day for Wally!
Everything got wet!
Where is Wally now?
He’s at the swimming pool!
Wally decided to stop worrying about everything and go swimming. Wally`,
      extensionCn: `的领带湿了。

他们正在吃早餐。
桌上有一碗牛奶。
哎呀！猫把领带掉进了牛奶里！
现在Wally的领带湿了。
的裤子湿了。

在街上走着。
前面有一个大水坑。
一辆车飞驰而过，水花四溅。
哦不！Wally的裤子湿了！
的工作湿了。

正忙着工作。
桌上有很多重要的文件。
可突然，杯子倒了！
现在Wally的工作都湿了！
的午餐湿了。

正在吃午餐。
哎呀！他的食物掉进了水里！
现在Wally的午餐湿了。
不知道该怎么办，他看着湿掉的午餐，感到不知所措。
的脸湿了。

在洗手。
他试着打开水龙头。
可是水溅得到处都是！
现在Wally的脸湿了！
的手机湿了。

这是什么？
看起来Wally的手机掉进了马桶！
无奈地用爪子捂住了脸。
的鞋子湿了。

再次走在街上。
这次，他没看到水坑，直接踩了进去！
现在他的鞋子湿了！
叹了口气，感到失望。
放弃了、游泳去了。

对Wally来说真是糟糕的一天！
什么东西都湿了！
现在Wally在哪儿？
他在游泳池里！
决定不再烦恼，去游泳了。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-94",
      level: "b",
      episode: "B94",
      title: "Drop it!",
      extensionEn: `Drop the slipper, Gus.
What is Gus biting now? Gus
It's the slipper!
How does it smell?
Does it smell good?
Drop the keys, Gus.
What is Gus biting now? Gus
It's the keys!
Don't lose the keys,
Or we may be locked outside.
Drop the burger, Gus.
What is Gus biting now? Gus
It's the burger!
The delicious smell makes him hungry.
Drop the hat, Gus.
What is Gus biting now? Gus
It's the hat!
Where do you want to go?
Don't take it away!
Drop the doll, Gus.
What is Gus biting now? Gus
It's the doll!
That is the girl's doll.
Don't break it!
Drop the cat, Gus.
What is Gus biting now? Gus
It's the cat!
Oh no, that's not a toy!
The cat doesn’t like being bitten and is angry.
Drop the paper, Gus.
What is Gus biting now? Gus
It's the paper!
Do you want to read the newspaper?
Good dog, Gus!
Gus takes the paper to the woman. Gus
Gus is helping! Gus
The woman is smiling and patting Gus's head.
Gus is happy. Gus
The cat is watching and is happy too.`,
      extensionCn: `狗喜欢咬东西。
现在在咬什么？
是拖鞋！
它闻起来怎么样？
闻起来香吗？
狗喜欢咬东西。
现在在咬什么？
是钥匙！
不要弄丢钥匙，
否则我们可能会被锁在外面。
狗喜欢咬东西。
现在在咬什么？
是汉堡包！
美味的气味让他觉得饿了。
狗喜欢咬东西。
现在在咬什么？
是帽子！
你想去哪里？
不要拿走它！
狗喜欢咬东西。
现在在咬什么？
是玩偶！
那是女孩的玩偶。
不要弄坏它！
狗喜欢咬东西。
现在在咬什么？
是小猫！
哦不，那可不是玩具！
小猫不喜欢被咬，并且很生气。
狗喜欢咬东西。
现在在咬什么？
是纸张！
你想看报纸吗？
好狗，Gus！
把纸拿给了女人。
在帮忙！
女人在微笑并轻拍Gus的头。
很高兴。
小猫也在看，并且很高兴。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-95",
      level: "b",
      episode: "B95",
      title: "Mouse in the City",
      extensionEn: `The city mouse looks.
•
The mouse is looking for something.
A can is falling on the ground.
The mouse takes a look inside the can.
What is it looking for?
Let's keep reading.
The city mouse smells.
•
The mouse smells something good.
What's that smell?
Look, there is a hotdog cart.
The seller is making hotdogs.
A family is buying hotdogs.
The city mouse climbs.
•
The mouse climbs up on the stool.
What is it going to do?
It wants to get a better view.
The mouse sees the hotdogs sizzling on the grill.
Its mouth waters at the sight.
The city mouse nibbles.
•
The mouse finds a sausage.
The mouse nibbles on the sausage.
The people spot the mouse.
They are all surprised.
The city mouse jumps.
•
The mouse jumps down from the stool.
The mouse is so happy.
The sausage is big for the mouse.
All the adults are surprised.
But look at the boy; he is happy too.
The city mouse runs.
•
The mouse runs quickly.
Where does the mouse go?
It scurries across the pavement.
What will the mouse do next?
The city mouse hides.
•
The mouse hides behind the trash bags.
It's trying to stay out of sight.
Why? Let's keep reading.
That is one lucky mouse!
•
Wow, the mouse is on a picnic.
It spreads a blanket and puts the sausage on it.
And look, there is a bowl of water here.
It takes small bites and enjoys every bite.`,
      extensionCn: `城市里的老鼠在看。

老鼠在找东西。
一个罐子掉在地上。
老鼠看了一眼罐子里。
它在找什么呢？
让我们继续阅读。
城市里的老鼠闻到了。

老鼠闻到了一些好闻的味道。
这是什么味道？
看，有一个热狗车。
卖家正在制作热狗。
一家人在买热狗。
城市里的老鼠在爬。

老鼠爬上了凳子。
它要做什么呢？
它想要看得更清楚。
老鼠看到热狗在烤架上滋滋作响。
看到这一幕，它口水直流。
城市里的老鼠在啃。

老鼠找到了一根香肠。
老鼠在啃这根香肠。
人们发现了老鼠。
他们都很惊讶。
城市里的老鼠跳了起来。

老鼠从凳子上跳了下来。
老鼠非常开心。
对于老鼠来说，这根香肠太大了。
所有的大人都很惊讶。
但看看那个男孩，他也很高兴。
城市里的老鼠在跑。

老鼠跑得很快。
老鼠要去哪儿？
它快速穿过人行道。
老鼠接下来要做什么？
城市里的老鼠在藏起来。

老鼠藏在垃圾袋后面。
它试图不被看到。
为什么？让我们继续阅读。
那是一只幸运的老鼠！

哇，老鼠在野餐。
它铺了一条毯子，并把香肠放在上面。
看，这里有一碗水。
它小口小口地吃，享受着每一口的美味。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-96",
      level: "b",
      episode: "B96",
      title: "Crows on a Wire",
      extensionEn: `One crow landed on the wire.
How many crows are there?
There is one crow on the wire.
What else can you see on the page?
Can you see the cat?
The cat is beside the fence.
Another crow landed on the wire.
How many crows are there now?
There are two crows now.
Can you see the cat?
The cat is now sitting on the fence.
Two crows landed on the wire.
How many crows are there now?
There are four crows now.
Where is the cat?
The cat is still on the fence.
What is the cat doing?
The cat is now licking its paws.
Another crow landed on the wire.
How many crows are there now?
There are five crows now.
It's a little crowded on the wire.
Where is the cat?
The cat is jumping down from the fence.
Three crows landed on the wire.
How many crows are there now?
There are eight crows now.
This crow is going to land on the front wire.
These two are going to land on the back wire.
Where is the cat?
The cat is beside the tree and peeking.
What is the cat going to do?
Another crow landed on the wire.
How many crows are there now?
There are nine crows now.
Look, the cat is getting closer.
What will the cat do?
Do you know that the cat likes to catch birds?
More crows landed on the wire.
How many crows are there now?
There are too many crows now;
we can't count.
The crows like to land on the wire.
Look, the cat is getting ready to jump.
Do you know what it is going to do?
All the crows flew away!
The cat jumps high into the air.
It wants to catch the crows.
All the crows are scared and flew away.
Did the cat catch a crow?
No, the crow flies quickly.
Maybe the cat just wants to play with the crows.`,
      extensionCn: `一只乌鸦停在了电线上。
现在有多少只乌鸦？
电线上有一只乌鸦。
你还能在页面上看到什么？
你能看到猫吗？
猫在篱笆旁边。
又一只乌鸦停在了电线上。
现在有多少只乌鸦？
现在有两只乌鸦。
你能看到猫吗？
猫现在坐在篱笆上。
两只乌鸦停在了电线上。
现在有多少只乌鸦？
现在有四只乌鸦。
猫在哪里？
猫仍然在篱笆上。
猫在做什么？
猫现在正在舔自己的爪子。
又一只乌鸦停在了电线上。
现在有多少只乌鸦？
现在有五只乌鸦。
电线上有点拥挤。
猫在哪里？
猫正在从篱笆上跳下来。
三只乌鸦停在了电线上。
现在有多少只乌鸦？
现在有八只乌鸦。
这只乌鸦要停在前面的电线上。
这两只乌鸦要停在后面的电线上。
猫在哪里？
猫在树旁边偷窥。
猫要做什么？
又一只乌鸦停在了电线上。
现在有多少只乌鸦？
现在有九只乌鸦。
看，猫正靠近。
猫会怎么做？
你知道猫喜欢抓鸟吗？
更多的乌鸦停在了电线上。
现在有多少只乌鸦？
现在的乌鸦太多了，
我们无法计数。
乌鸦喜欢停在电线上。
看，猫正在准备起跳。
你知道它要做什么吗？
所有的乌鸦都飞走了！
猫跳得很高。
它想抓住乌鸦。
所有的乌鸦都害怕，飞走了。
猫抓到乌鸦了吗？
不，乌鸦飞得很快。
也许猫只是想和乌鸦玩。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-97",
      level: "b",
      episode: "B97",
      title: "Wake Up, Rooster!",
      extensionEn: `The rooster slept too long today.
The rooster usually wakes up early.
The rooster usually wakes up before the sunrise.
The rooster crows and wakes us all up.
But today, the rooster slept too long.
The sun has set, but the rooster is still sleeping.
So the sun woke up the rat.
The rat is sleeping in its bed.
There is a hole in the wall.
The sun shines into the rat’s eyes and wakes it up.
The rat stretches and yawns, ready to start the day.
So the rat woke up the cat.
The cat is sleeping soundly.
Look at the cat's eyes, and they are sleepy.
The mouse is on the cat's head, waking her up.
So the cat woke up the dog.
The dog is lying on the grass.
The cat walks beside the dog.
The dog wakes up.
Can you see the sun? It's rising.
So the dog woke up the cow.
The cow is sleeping.
The dog barks loudly at the cow.
The cow wakes up.
But it still feels sleepy.
Can you see the sun? It's rising higher.
So the cow woke up the horse.
The cow bumps the horse.
The horse wakes up.
The cow is smiling, but the horse looks angry.
Look, the sun is really big and shining.
So the horse woke up the farmer.
The farmer is sleeping.
He is holding a teddy bear.
The horse pokes its head through the window.
The farmer wakes up.
So the farmer woke up the rooster!
Look, the rooster is still sleeping.
The farmer picks up a clock.
What time is it?
The farmer looks at the clock and frowns.
The rooster feels embarrassed.`,
      extensionCn: `今天，公鸡睡得太久了。
公鸡通常很早就醒来。
公鸡通常在日出之前就醒来。
公鸡鸣叫，把我们都叫醒。
但今天，公鸡睡得太久了。
太阳已经落下了，但公鸡还在睡觉。
然后太阳把老鼠叫醒了。
老鼠正躺在床上睡觉。
墙上有一个洞。
阳光照进了老鼠的眼睛，叫醒了它。
老鼠伸了个懒腰，打了个哈欠，准备开始新的一天。
然后老鼠把猫叫醒了。
猫正在安静地睡觉。
看看猫的眼睛，睁开时显得很困。
老鼠在猫的头上，把猫叫醒了。
然后猫把狗叫醒了。
狗正躺在草地上。
猫在狗旁边走。
狗醒来了。
你能看到太阳吗？它正在升起。
然后狗把牛叫醒了。
牛在睡觉。
狗对着牛大声吠叫。
牛醒来了。
但它仍然觉得困倦。
你能看到太阳吗？它正在升起。
然后牛把马叫醒了。
牛轻轻碰了碰马。
马醒来了。
牛正在微笑，但马看起来很生气。
看，太阳真大，而且正在照耀。
然后马把农夫叫醒了。
农夫在睡觉。
他抱着一只泰迪熊。
马把头伸出窗外。
农夫醒来了。
然后农夫把公鸡叫醒了！
看，公鸡还在睡觉。
农夫拿起一只钟表。
现在几点了？
农夫看了看钟，显得不高兴。
公鸡感到尴尬。`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-98",
      level: "b",
      episode: "B98",
      title: "Make a Superhero",
      extensionEn: `My superhero needs a mask.
•
The boy is drawing a picture.
What is he drawing?
He is drawing a superhero.
First, he draws a red mask.
The mask is shiny and cool.
My superhero needs a cape.
•
Then, he draws a green cape.
Look, the cape is flying in the wind!
The superhero can fly so fast with it.
My superhero needs muscles.
•
Now, he draws big, strong muscles.
The superhero is super strong!
He can lift a car with just one hand.
My superhero needs a car.
•
He draws a purple car.
Wow, it looks so fast!
The car can zoom down the streets and save people.
My superhero needs a power.
•
What power does the superhero have?
He has electric powers!
He can shoot lightning from his hands.
Zap! The bad guys run away!
My superhero needs a friend.
•
Every superhero needs a friend.
Look, he’s drawing a new superhero!
They are going to work together to save the day!
My superhero needs a name.
•
What should we name him?
How about "Super Lightning"?
It’s the perfect name for his powers!
My superhero saves the day!
•
Wow, there are two superheroes now!
They work together to stop the bad guys.
Hooray! The superheroes saved the day!`,
      extensionCn: `我的超级英雄需要一个面具。

男孩正在画一幅画。
他在画什么呢？
他在画一个超级英雄。
首先，他画了一个红色的面具。
面具闪闪发亮，真酷啊！
我的超级英雄需要一个披风。

然后，他画了一个绿色的披风。
看，披风在风中飘扬呢！
有了它，超级英雄可以飞得非常快！
我的超级英雄需要肌肉。

现在，他画了强壮的大肌肉。
超级英雄非常强壮！
他能用一只手举起一辆车呢！
我的超级英雄需要一辆车。

他画了一辆紫色的车。
哇，它看起来好快！
这辆车可以飞驰在街道上，去拯救大家！
我的超级英雄需要超能力。

超级英雄有什么超能力呢？
他有电流超能力！
他能从手里发射闪电。
嘶嘶！坏人们逃跑了！
我的超级英雄需要一个朋友。

每个超级英雄都需要一个朋友。
看，他在画另一个超级英雄呢！
他们要一起拯救世界了！
我的超级英雄需要一个名字。

我们该给他取什么名字呢？
就叫“超级闪电”怎么样？
这名字跟他的超能力太配了！
我的超级英雄拯救了世界！

哇，现在有两个超级英雄了！
他们一起阻止了坏人。
万岁！超级英雄们拯救了世界！`,
      vocabulary: [],
      qa: [],
    },
    {
      id: "b-99",
      level: "b",
      episode: "B99",
      title: "This Turtle",
      extensionEn: `This turtle is big. It's as big as a person.
This turtle is small. It's smaller than a hand.
Which one is the big one?
Which one is the small one?
What is the turtle doing?
This turtle is swimming.
It's swimming with its flippers.
Where is this turtle swimming?
It's swimming in the sea.
What is the turtle doing?
This turtle is walking.
It's walking with its legs.
Where is this turtle walking?
It's walking on the ground.
What is the turtle doing?
This turtle is digging.
It's digging with its flippers.
Where is this turtle digging?
It's digging in the sand.
What is the turtle doing?
This turtle is snapping.
It's snapping with its mouth.
It's snapping at something.
Oh, don't snap at me!
This turtle is hiding.
It hides its head and legs in its shell.
The shell protects the turtle.
Where is the turtle hiding?
It's hiding inside its shell.
This turtle is looking up.
It's looking up with its long neck.
This turtle looks funny.
It's colorful.
Its neck is long.
Its shell is smooth.`,
      extensionCn: `这只乌龟很大，它和人一样大。
这只乌龟很小，它比人的手还小。
哪只是大的？
哪只是小的？
乌龟在做什么？
这只乌龟在游泳。
它用鳍在游泳。
这只乌龟在哪里游泳？
它在海里游泳。
乌龟在做什么？
这只乌龟在走路。
它用腿在走路。
这只乌龟在哪走路？
它在地上走路。
乌龟在做什么？
这只乌龟在挖掘。
它用鳍在挖掘。
这只乌龟在哪挖掘？
它在沙子里挖掘。
乌龟在做什么？
这只乌龟在咬。
它用嘴在咬。
它在咬某物。
哦，别咬我！
这只乌龟在藏起来。
它把头和腿藏进了壳里。
壳保护乌龟。
乌龟藏在哪里？
它藏在壳里。
这只乌龟在往上看。
它用长脖子在往上看。
这只乌龟看起来很有趣。
它很五彩缤纷。
它的脖子很长。
它的壳很光滑。`,
      vocabulary: [],
      qa: [],
    },
  ],
};

export const razLevels: RazLevel[] = [razLevelB];

export const getRazBooksByLevel = (levelId: string) => {
  const level = razLevels.find((item) => item.id === levelId);
  return level ? level.books : [];
};
