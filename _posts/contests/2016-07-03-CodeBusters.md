---
layout: post
thumb: "/static/img/contests/codebusters/thumb.png"
title: "CodeBusters - CodinGame Contest"
tag: "contest"
topics:
- Artificial Intelligence
- JavaScript
- CodinGame
date: 2016-07-03 22:51:00 +0200
decription: CodeBusters is one of the many programming contests held by CodinGame where you program an AI that plays against other AIs made by other people.
permalink: /contests/:year/:month/:day/:title/
---

## Preparation

Before the contest started I decided to not program for a while, because I knew that I would be programming a lot for 8 days.
The only thing I did was prepare a small simulator environment so that I could create an offline simulator of the game once the contest had started, just in case it would be needed or useful.

I also spent some time with my friend, speculating what the game would be about, what we could expect and what we might need to program.


## The Game

The game is played on a `16001` by `9001` field. There are `2` teams, one starts at the top-left corner and the other at the bottom-right.
Each team starts with the same amount of busters, where the number can be from `2-4`.
There are ghosts scattered around the map, each ghost has a stamina of `3, 15 or 40`.

The map has a fog of war which makes it so your team can only see what is `2200` units away from your busters.

The goal of the game is to bust more ghosts than your opponent.


## Saturday(Day 1) &ndash; Hype!

### The Endless Wait

Just as with every CodinGame contest, a couple of hours before the contest starts, people start gathering in the chat.
Hype starts to build up and you can feel the excitement rushing through your veins and you think "This is gonna be one hell of a week!".
But before you know it, time's up!

### Ready, Set, Go!

The contest has finally started.
In the beginning I spend a bit of time reading through the rules and understanding how the game works before just i start coding.
A couple of hours into the contest I had made it to the bronze league and kept adding small conditions to improve my AI.


## Sunday(Day 2) &ndash; State Machine

The next day, I just continued tweaking the behaviour of my busters a bit.
I made a very basic state machine where the busters decided what to do in the following order:


1. Am I carrying a ghost inside of the base? Release it.
2. Am I carrying a ghost? Move towards the base.
3. Always stun opponent if possible.
4. Bust the ghost with the least stamina of all the visible ones.
5. If no ghosts are visible, then wander.

![]({{ "/static/img/contests/codebusters/rank5th.png" | prepend: site.baseurl }}){:.right-half}

With around 70 lines of code, these simple commands got me to the awesome rank of 5/531.
But there was still 6 days to go, a lot was going to happen!

### Offline Simulator

Ranking 5th was considered pretty good for me, but it was still very annoying to wait for so long to see if a change was good or bad.
So I ended up programming an offline simulator over night and I made quite a lot of progress.
I still had a few things to fix, still, but I had gotten movement, busting and releasing done.


## Monday(Day 3) &ndash; Road to Silver!

### The Bronze Boss

On the long wait for the bronze boss, I didn't think of much to improve for the AI.
However, I ended up doing 3 small changes:

* Ignore ghosts with stamina 40 cause they take too long to bust.
* Stun opponents that are carrying ghosts before stunning opponents carrying nothing.
* Improved the wandering path by covering more area.

When the boss was finally unleashed, I was promoted to silver, and there wasn't any new change to the game rules, so I continued working on my simulator.

### Back to The Simulator

I finally finished the stunning for my simulator and it was working fine... well, until I found a terrible bug, that is.

The simulator itself was working great and I could have a couple of AIs play hundreds of games in a minute to then look at the results.
But the problem itself was in the game simulation.
When I saw that the top-left team was winning 998 vs 2, I knew that there was something wrong.


## Tuesday(Day 4) &ndash; Let's Talk Tactics

![]({{ "/static/img/contests/codebusters/tactics.png" | prepend: site.baseurl }}){:.left-quarter}

I met up with my friend to discuss some tactics.
We discussed a lot of different things like wandering strategies and picking paths, herding strategies, how to protect against base campers and searching techniques.

Instead of randomly running around, or following a bad path, we talked a bit on how we could improve our paths to cover more area.

We also talked about herding and how maybe you could make it so the ghosts move towards your base, but at the same time, you want to do that without losing too much time.

About the base campers, one strategy could be to drop your ghost, let the opponent pick it up, then you'd bust the opponent and secure your score.
The problem with this is that the better players might stun you before they bust the ghost, or they might be more than 1 camper, which makes your life harder.
So, we thought that maybe you could have someone escort the carrier to the base, just to keep the ghost safe.

For the searching techniques, we thought of splitting the map into a grid and searching the areas that hadn't been searched through already, in hope to find hidden ghosts.

### Fun Replay

Once I got back home, I checked the [logbook](https://www.codingame.com/blog/en/2016/06/codebusters-3-2-1-go.html) and saw that they had launched the replay contest and thought it would be fun to make something special.
So I started working on a little choreography for my busters where they walked around and said things.

[![]({{ "/static/img/contests/codebusters/choreography.png" | prepend: site.baseurl }}){:.right-half.lifted-3}](https://www.codingame.com/replay/110180527)

At first, it wasn't so serious, but once I had gotten a bit into it and got positive feedback from a couple of friends, I decided to invest some time into it.
I stayed up all night working on it to get the perfect timing and alignment, that was one long night...

After all these hours of working on the replay, I was getting a bit sick of the replay cause I had seen it so many times.
But it was finally time to send the [replay](https://www.codingame.com/replay/110180527) to the CG team and let them have a look at it before going to sleep.


## Wednesday(Day 5) &ndash; The Big Surprise

The next day I checked my mail and to my surprise, here's what I saw:

> Woah this is AMAZING! Thank you a lot for this! The team can't believe it :)
>
> <small>[CG]Thibaud</small>

At first, it was hard to believe what had hit me, it turned out the CG team loved the replay.
It was later shared on [Twitter](https://twitter.com/CodinGame/status/748212713822818305) where it got a crazy 24 likes!
They even linked it in the newsletter and the logbook.

A little while later, [CG]VonRickroll writes to me in the chat telling me "Husenap your replay is fire! The whole team has enjoyed it so much.".
This is when people started noticing the replay and the chat went crazy, I couldn't stop smiling.

![]({{ "/static/img/contests/codebusters/collage.png" | prepend: site.baseurl }})

### Golden Sky

It was finally time for another promotion!
Everyone had been patiently waiting for the silver boss to be released.
My code from Sunday was still ranking pretty well, and once the silver boss was release, the surprising amount of around 360 players were promoted to gold.

I tried tweaking my code a bit, hoping to improve things, but nothing seemed to perform any better, so the only thing there was left to do was wait for the gold boss to be released.


## Thursday(Day 6) &ndash; Thank You!

[![]({{ "/static/img/contests/codebusters/heart.png" | prepend: site.baseurl }}){:.left-half.lifted-3}](https://www.codingame.com/replay/111252400)

I had been very touched by all the people who had written to me and I wanted to thank everyone.
So I was thinking of how to do that, and thought, what's better than making a replay to thank everyone?

So I spent my entire Thursday, just trying to come up with something that would be a great way to thank you people, and I ended up with this [replay](https://www.codingame.com/replay/111252400)!

This is a big thank you to everyone who wrote to me in the chat and liked my replay, sadly, I couldn't fit more names in there, so... if you're not in there, thank you anyway! :P


## Friday(Day 7) &ndash; The Legend of The Spectre

It was now time for the promotion to the legend league!
At the time, we were 700 people in the gold league and judging by the previous bosses, everyone in the chat suspected that 200-300 people would be promoted.
It was pretty funny when the boss finally came and crushed everyone and reached top 100, so people thought CG had targeted top 50.
Only to find that 19 people were promoted.

I was ranked around 200 in the gold league which I wasn't happy with, so it was time to write some more code, other than the stuff I had from Sunday.


## Saturday(Day 8) &ndash; Time For a Change

My code from Sunday was simply not enough to rank well near the end of the contest, so I decided to change things up a bit.

### Decision Tree

The way I decided to go was by using a decision tree, it was the first time I use one.
I ended up with something along these lines:

![]({{ "/static/img/contests/codebusters/decisionTree.png" | prepend: site.baseurl }})

Using a decision tree gave me the ability to set any node as the root node and test each operation to see if it was working.
It was probably too late to start working on this one day before the contest was over, but I wasn't going to give up.

I spent the entire day, testing all the different things that I could come up with and see if they worked, here are a couple of things that I did:

* I made it so my busters sweeped my half of the map in the beginning of the game so that I could predict where all the ghosts were located, even on the other side of the map.
* When a buster was returning a ghost to the base, but there were opponents visible, he would call the ghostbusters for help.
To my surprise, this resulted in a escorting behaviour where the other busters protected the carrier of the ghost to secure my point.

### Why Doesn't Anyone Like The 40 Ghosts? :(

Since Sunday, my busters had been ignoring all the ghosts with stamina 40 for the first half of the game.
This was really bugging me, because this wasn't an acceptable strategy anymore since most of my games ended up with my busters chasing ghosts and waiting, instead of busting them!
So I decided that I needed to change the way that I evaluate the ghosts, instead of sorting the ghosts by stamina and ignoring the ones with stamina 40, I came up with a simple formula which looked something like this:

{% highlight javascript linenos %}
// Get ghosts from the shared blackboard
let ghosts = blackboard.ghosts
	// Filters out all the dead(scored) and missing(not found) ghosts
	.filter((ghost)=>!ghost.missing&&!ghost.dead)
	/*
	* Sort the ghosts by the time it takes to capture them
	* The formula I used is:
	*
	* ((ghost - base) + (ghost - buster)) / 800 + ghost.stamina
	*
	* The way it works is by dividing the distance on the maximum amount
	* of units the buster can move per turn, this gives me the number of
	* turns it'll take the buster to run the distance. Then, by adding the
	* stamina because that's how many turns it takes to bust the ghost, I
	* get the total amount of time it takes to score the ghost.
	*/
	.sort((a,b) => ((b.dist(base)+b.dist(buster))/800+b.stamina) < ((a.dist(base)+a.dist(buster))/800+a.stamina) );
{% endhighlight %}

This was a one of the best changes I did this day, because it boosted my rank by quite a bit.
My busters weren't patiently waiting to bust anymore and the started picking ghosts that I didn't expect them to pick.
I managed to jump from rank 200 in gold, to rank 23.


## Sunday(Final Day) &ndash; What Now?

The final day of the contest was here! These 8 days had felt like forever, but at the same time super short.

I spent the last day trying to tweak my busters' behaviours and made a few changes:

* I tried squaring the values in the formula sorting function explained above to give more importance to the distance, this way, my busters would rather pick a 15 ghost that is close to my base than picking a 3 ghost that is very far away, since I can't be sure it's still there.
* I also told my busters to go camp at the enemy base once there were no ghosts left on the map, of the ones my busters knew of, that is.
* I created 3 different formations, one for each number of busters in `2, 3, 4`.

A few hours before deadline, I submitted these changes but they didn't seem to rank any better, they were like 60 ranks behind the previous submission.
Maybe that's because of TrueSkill, who knows?
I resubmitted the previous submission again and it didn't rank as good as before, but I went with it anyway and finally ended up at rank 216/1'984.


## Wrapping it up

All in all, this contest has been amazing, as usual, and I feel like the CG team are getting better at this after each contest.

### The league system

The league system is something that I personally find really nice, because it makes leaderboard climbing more fun.
It would be nice to be able to play against people outside your league, as long as the rules are the same, such as the gold and legend league.

### Contests are great for learning

I'm really thankful that CG hosts these contests since there is so much to learn!

* After CSB, I programmed my first [Genetic Algorithm](https://en.wikipedia.org/wiki/Genetic_algorithm).
* In STC, it was the first time I had good use of a [Flood Fill Algorithm](https://en.wikipedia.org/wiki/Flood_fill).
* And now, in CB, I learned how to program my own [Decision Tree](https://en.wikipedia.org/wiki/Decision_tree).

We have yet to know what we can learn from the next CG contest, [HyperSonic](https://www.codingame.com/contests/hypersonic)!

I'm very excited for it, and as always, see you in the arena! ;)


## Links
[Leaderboard](https://www.codingame.com/leaderboards/global/challenge/codebusters/43822519b1074cb4ae44119c1c8f151471d50aa){:.button.lift-3.rippleParent}
[Replay 1](https://www.codingame.com/replay/110180527){:.button.lift-3.rippleParent}
[Replay 2](https://www.codingame.com/replay/111252400){:.button.lift-3.rippleParent}
[Amazing Art by TontonRevolver](https://tontonrevolver.artstation.com/){:.button.lift-3.rippleParent}