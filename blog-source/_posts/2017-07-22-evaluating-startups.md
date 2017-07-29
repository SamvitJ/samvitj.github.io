---
layout: post 
title: "How to Pick Your Next Gig - Evaluating Startups"
date: 2017-07-22
comments: true
---

*This blog post is based on my experience interviewing with a range of tech companies for a software internship for my last summer as an undergrad at Princeton. At the end of the process, I had to make a choice between a [large public company](https://www.google.com/), a then recently-minted [unicorn](http://fortune.com/unicorns/), and a then-Series B startup with 100 employees based in San Francisco.*

*This piece attempts to codify how I went about making my decision, and in particular, lays out a methodology for how to evaluate startups.*

Choosing a company to work for is an investment. While a venture capitalist might put in large amount of money and a small amount of their time (i.e. in monthly board meetings) in a portfolio company, as an employee, the *primary* asset you invest is your time.

The returns you make can take a number of forms - career advancement, personal growth and fulfillment, and financial reward. Making any decision comes with an opportunity cost - the foregone returns of another choice you could have made.

Finally, unlike a venture capitalist, as an employee, you commit to work at a single place, so you can only make *one* investment at any given point in time. So while Marc Andreessen might be okay with a 1-in-10 hit rate,[^1] you have to set the bar a little higher.

All of this is not to paint the decision as a paralyzingly difficult one, but to place it in its proper context - as a prospective employee, *you* are an investor, and you are evaluating companies as much as they are evaluating you.

The brand recognition of a company, the capital raised, the prestige of the investors, your friends' opinion - all of these might matter, but perhaps only as secondary signals of a company's future prospects. What, then, should you look for, and how much weight should you put on each factor?

Here's a laundry list of potential criteria that you might consider in evaluating a startup:

- Current traction (i.e. users, revenue)
- Growth rate (i.e. users, revenue)
- Number of employees
- Strength of founders
- Strength of early employees
- Investor pedigree (i.e. reputation, past record)
- Rounds of funding raised
- Location
- Press coverage
- Problem domain
- Personal fit

In the remainder of the post, I'll address each of these in turn, and provide a "star rating" to indicate how strongly you should consider each factor when making your decision.

<!-- These aren't tips for how to find the next circa-2001 Google -->

### The criteria

#### Current traction

<div class="rating" data-rate="3.5">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

One fact that makes evaluating startups as a prospective employee particularly difficult is that most key metrics are not public information. Statistics such as the number of monthly or daily active users (MAUs/DAUs), annual revenue, and months of runway are often not even known to current employees, let alone available on the internet.

Moreover, the founders and upper management are unlikely to share this information in the interview process, even if you do get the chance to speak with them, but it is definitely worth a shot to ask.

<!-- If you do get the chance to speak with upper management or a founder in the interview process, it is unlikely that they will share this information, though it is definitely worth the chance to ask. -->

Even if these numbers are known, they may not actually be the strongest signals. Revenue, for example, is often an irrelevant measure for early-stage, consumer-facing companies (e.g. [Facebook in 2008](https://en.wikipedia.org/wiki/Template:Facebook_revenue)), while number of clients may be too coarse a metric for early-stage, enterprise tech companies (for many years, Palantir only had customer: the US government). <!-- So it is important to be looking at the appropriate growth markers for a particular company. -->

You also have to be careful about companies cherry picking statistics that paint them in a favorable light. A mobile app company may choose to reveal total downloads, but not monthly active users, or their shockingly high churn (i.e. uninstall) rate.

A famous example where these metrics sharply conflicted is [Draw Something](https://en.wikipedia.org/wiki/Draw_Something), a social drawing app, which, along with its parent company OMGPop, was acquired by Zynga in March 2012 for $180 million. Within two months of the purchase, daily active users had fallen by a third, from a peak of 15 million on the day of the sale to 10 million by early May. Draw Something relied on aggressive growth hacking, via close integration with Facebook, and sacrificed the opportunity to build a sustainable product for rapid growth.

The result? One of the greatest "pops" of the social-local-mobile app era.

#### Growth rate

<div class="rating" data-rate="3">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

This one is tricky. Growth figures, especially when measured over only two data points (metrics today vs. metrics last year), are often hard to evaluate, unless absolute numbers are known as well. A representative from Facebook could have reported a [2150% growth](https://en.wikipedia.org/wiki/Template:Facebook_revenue) in revenue in 2005. While Facebook was indeed growing incredibly fast at that time, that particular statistic is meaningless, as revenue was nearly zero in 2004.

This is not just a straw man argument. Various startups that I've interviewed with have claimed that they "doubled in revenue since last year," or even that they've been "doubling in revenue every year" when the company has only been in existence for 3 years, without providing a clear estimate of *current* revenue. <!-- In this talk by Dustin Moskovitz, co-founder of Facebook and founder of Asana... -->

You should ask yourself why a company is choosing to share growth numbers, but not any absolute figures. It's likely because growth statistics are a lot of more flattering to the company. But you should know: being a derivative of the yearly revenue (or total user base) graph, growth figures will almost always contain less information.

Of course, don't be pedantic. If a founder mentions that their service has over a million users, and is sporting 200% year-over-year growth, but won't give exact numbers, that is probably enough information to judge that the business is going rapidly.

#### Number of employees

<div class="rating" data-rate="2">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

Cisco Systems has 70,000 employees today, and its stock price has hovered between $15 and $30 for the last 16 years. When WhatsApp was acquired by Facebook for $19 billion in February 2014, it had 55 employees. <!-- or about 1 employee per every y million users -->

Evidently, headcount alone says little about a company's quality. But the number of employees, combined with the most recent valuation of the company, can give you a good idea for how much money you stand to make if you join.

Here's the heuristic. Stocks generally vest over four years, and if you stay the four years, you'll ownership of the company will amount to the following:
$$
\begin{aligned}
\text{Fraction ownership } = \frac{1}{\text{(Number of employees)}^2}
\end{aligned}
$$

This can now be used to calculate your potential upside. If you join a 100-person startup valued at $500 million, and work there for four years, you'll be granted shares constituting
$$
\begin{aligned}
\text{Fraction ownership }
&= \frac{1}{\text{(Number of employees)}^2} \\
&= \frac{1}{\text{(100)}^2} \\
&= 0.01\%
\end{aligned}
$$

of the company. If the company is then acquired for $5 billion, you will stand to make:
$$
\begin{aligned}
\text{Value of equity }
&= \text{Fraction ownership } * \text{Exit valuation} \\
&= 0.0001 * \text{\$5,000,000,000} \\
&= \$500,000
\end{aligned}
$$

(Here I'm not considering the strike price of your stock options, i.e. how much you'll need to pay the company to exercise them.)

What evidence do I have that this is true? This equation correctly predicts (to within about 40%) the value of equity I was offered at the one company to which I applied to for a full-time job on graduation. (Its output was a bit conservative.) Its predictions also resemble those of this more [precise calculator](https://tldroptions.io/), which takes slightly different inputs.

Finally, it has the following very nice property:
$$
\begin{aligned}
\text{Total ownership }
&= \int_1^\infty \frac{1}{n^2} \text{dn} \\
&= -\frac{1}{n} \bigg|_1^\infty \\
&= 1
\end{aligned}
$$

Must be true, right?

#### Strength of founders

<div class="rating" data-rate="5">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

Full disclosure: this is the only criteria in this list that I gave the full five stars to. And for good reason too. As venture capitalists have said for time immemorial, it is the founding team, more than any other aspect of a company, that really determines its eventual fate. 

<!-- It is the founders that do the critical groundwork, launching the startup on a promising path. It is the founders that, through their smarts and drive, attract early employees to build a company with them. And it is the founders who, through their fanatic devotion to a clearly articulated mission, pull their team through hard times. -->

As a quick exercise, consider these short, 2-sentence bios of the founders of the five most valuable tech companies in the world today:

- **Facebook** - Mark Zuckerberg began programming in middle school, going on to build an intelligent music player, Synapse, that AOL and Microsoft offered up to $1 million to buy, while still in high school.[^2] At Harvard, Zuckerberg established a reputation for building popular social tools for his peers, including Facemash, the traffic from which crashed Harvard's servers and the security breaches involved in which nearly got him expelled.

- **Amazon** - Jeff Bezos entered Princeton intending to study physics, with the goal of becoming a theoretical physicist, but exited an electrical engineering and computer science major, graduating near the top of his class, and as president of the Princeton chapter of Students for the Exploration and Development of Space. During his 8 year career on Wall Street, Bezos rose to become the then two-year-old hedge fund D. E. Shaw's youngest ever vice president.

- **Microsoft** - Bill Gates began programming in 8th grade on a computer donated to his high school, which he used for everything from writing simple games, to exploiting bugs in the timesharing system - an exploit which temporarily cost him his computer privileges, to developing a payroll program for the donating company. While at Harvard, he solved a minor, open combinatorics problem, and after prematurely promising the company a demonstration, implemented a BASIC language interpreter for MITS' Altair mini-computer.

<!-- as a proof-of-concept, implemented a interpreter for the BASIC language for the Altair 8800 mini-computer.-->

- **Alphabet** - A computer science and mathematics major at the University of Maryland, Sergey Brin began his PhD studies in computer science at Stanford in 1994; a computer engineering major at the University of Michigan, and an inventive engineering student, Larry Page began his PhD at Stanford in 1995. Among other topics, Page considered doing research on telepresence and autonomous cars, but along with Brin, decided to focus on exploring the graph structure of the rapidly growing World Wide Web.

- **Apple** - In high school, Steve Jobs demonstrated diverse interests, from Shakespeare and Plato, to creative writing, to electronics, enrolling in a freshman English class at Stanford during his senior year, and then dropping out of Reed College after 6 months. Jobs later moved to India, where he lived in an ashram for seven months; later still, he took up a contract project for Atari, enlisting the help of Steve Wonziak to construct a highly-optimized circuit board for an arcade game, a deal that earned him $5,000.

What do you notice about these six founders?

Three dropped out of college, and one pair dropped out of grad school. Five out of six were highly technical. None were serial entrepreneurs. Five out of six did not have any professional experience.

Yes, unfortunately, they were also all white males, born in most cases into privilege and into supportive, two-parent households.[^3]

But what personal *qualities* come up repeatedly in these descriptions? Intensity, ambition, clear passions - many times established at a young age, and often, a disregard for rules. <!-- streak of rebelliousness? -->

In an [interview](http://www.vogue.com/article/star-quality-jennifer-lawrence-hunger-games) with Vogue, Jennifer Lawrence, the highest paid actress in the world today, once said, with some hesitation, that she "always knew that [she] was going to be famous." To the list of characteristics I would then also add, a certain belief in their own predestination.[^4] <!-- an inextinguishable belief? -->

Notice also that, today, Jeff Bezos is the owner of Blue Origin, one of the two leading space exploration companies, and Alphabet is the industry leader in the self-driving car space. Evidently, Bezos' early interest in space colonization and Page's attraction to autonomous cars weren't fake passions, but deeply-seated ambitions - visions for how the future should look like that they acted on as soon as they got the chance. <!-- While being the CEOs of $400+ billion companies definitely helps... -->

While their biographies may sound impressive, none of these accomplishments are particularly uncommon, and I challenge you to hold the founders of your potential employer to the same high standard. Can you write a 2-sentence bio of each of the founders that reflects a similar caliber of achievement?

In your description, try to focus on concrete accomplishments, as opposed to proper nouns. Instead of writing, "Sarah graduated from Harvard as a public policy major, and worked at Goldman Sachs for two years," write: "Sarah graduated from Harvard, where she worked to develop novel financial instruments allowing emigrants from oppressive regimes to remotely liquidate their assets, even testing her research through a live study based in Syria. While at Goldman Sachs, she helped to expand the bank's portfolio of consumer fintech companies, and personally oversaw late-stage financing for three bitcoin and blockchain-related startups."

This second Sarah would make a great founding CEO or COO for a blockchain-based, smart property startup. Sarah is a self-starter, with a history of building new things and sticking with them until they see adoption. She has a demonstrated interest in shaping the future through invention, as opposed to simply an interest in advancing herself. She has also successfully faced competition - it is not easy to get accepted to Harvard, and it is not easy to get a job at Goldman Sachs.

So Sarah may have what it takes to beat the odds that the company she'll start will get killed - by its burn rate, by disputes between its founders, by its failure to find product-market fit, by its competitors, by shifts in the market.[^5]

What kinds of past experience are signs of a great founder?

- **Pivotal role in a very successful company** - This is rare, but a very strong sign when true. Two great examples are Dustin Moskovitz, a co-founder of Facebook, and Adam D'Angelo, Facebook's first CTO, who each went on to start extremely well-run companies, Asana and Quora, respectively. Dustin and Adam combine front-line experience in a [rocket ship](https://www.forbes.com/sites/kashmirhill/2012/05/24/sheryl-sandberg-to-harvard-biz-grads-find-a-rocket-ship/#7b3127313b37), with a genuine thirst to build companies of their own - both were in some sense sidelined at circa 2008 Facebook, which only had room for one real leader at its helm. Asana emerged as an internal project at Facebook, and Adam left two years of equity at Facebook on the table to found Quora, strong circumstantial evidence that the problems they chose to tackle were relevant and valuable.

- **The fourth-time founder, aka the serial entrepreneur** - I have more mixed feelings about this one. Being a serial entrepreneur is considered a great resume item in some circles, and there are of course a few example of wildly successful born-again founders - notably, Elon Musk, and even Steve Jobs, who founded NeXT Computer between 1980s Apple and iPod/iPhone-era Apple. Entrepreneurship is a difficult journey, and the greatest founders tend to treat their companies as their life's work. A long history of eight-figure acquisitions doesn't speak very well to a founder's dedication, and their ability to navigate difficult times to take a company to greatness. Be especially wary if there's a trail of people who've worked with the founder in the past, and have felt screwed over.

- **Domain expertise** - This is valuable, but probably not strictly necessary. This Y Combinator-backed waste management company [recently raised](https://techcrunch.com/2017/07/06/an-uber-for-garbage-picks-up-steam-and-11-7-million-in-series-a-funding/) a $12 million Series A round, and includes a founder whose family has been in the waste recycling business for four generations. That sounds splendid to me, and is an attribute that investors often assign big plus points to. But being an outsider can sometimes constitute a great advantage as well. Elon Musk had no formal experience in rockets or electric cars when he started SpaceX and Tesla, two areas that seem to have extremely high barriers to entry. Moral: we probably overestimate how hard it is for smart people to immerse themselves in new, hard problems they care about.

#### Strength of early employees

<div class="rating" data-rate="4.5">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

I have a controversial heuristic for judging the quality of the early employees at a company. I get on LinkedIn, and jump from profile to profile, looking at the schools they've attended and the companies they've worked for. I consider it a pretty big red flag if most attended seemingly weak schools and worked for companies I've never heard for. This sounds at best naive and at worst prejudiced, so let me defend myself.

In my experience, the best startups have a critical mass of junior employees who attended schools like Stanford, MIT, and Harvard. This was true of early Google and early Facebook, and is true today of companies like Dropbox, Stripe, SpaceX, and Quora. If a startup doesn't have any students from such schools, it says to me one of two things:

1. The founders and their first hires do not have a network that extends to new grads from these schools.

2. The startup cannot convince students at these schools to come work for them.

The first is more benign than the second. Great founders come from lots of different places, and some may just not be connected to students at top schools. After the startup becomes a certain size, however, and reaches a certain level of notoriety, this excuse becomes a little weaker.

The second reflects a little less favorably, but is understandable. Recruiting smart people is really, *really* hard. I know this, because I spent several months in early 2015 searching for Employee #1 for my nascent, pre-seed venture, [LinkMeUp](http://www.linkmeupmessenger.com/). I set up shop at a startup career fair at Princeton, posted in college and hackathon Facebook groups, and even upgraded to LinkedIn Premium, where I sent many an unsolicited message to undergrads in my extended network. I interviewed several candidates for an Android engineering role, some of whom I turned down and several others more who turned *me* down.

Moral of the story: it's hard to convince people to turn down offers at Google, Facebook, Uber, Airbnb, etc. to come work for your shitty company that might fail. But that is exactly the task of a great founding team. They must be accomplished and inspiring enough that smart people want to work for them, and clear enough in their articulation of the company's vision to convince smart people that the impossible might actually be possible.

The one thing that distinguishes students at top schools is that they tend to have the most options for what to do in the future, and often the highest opportunity cost for picking any one thing. So if you can convince Harvard grads to join your company, you are either really good at creating hype, or are genuinely offering them an amazing opportunity.[^6]

#### Investor pedigree

<div class="rating" data-rate="4">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

If I was looking for a job, and I saw that a company was backed by Sequoia Capital, I would be tempted to go work for them - even if their founders were five years old.

Here's a list of companies whose Series A or B rounds (or both) were led by Sequoia: Apple, Google, Yahoo!, Stripe, Dropbox, YouTube, Instagram, Airbnb, and WhatsApp.

Of Sequoia's over 1000 investments since 1972, 209 companies have been acquired and 69 have IPOed. Their [mission statement](https://www.sequoiacap.com/people/ethos/):

> The creative spirits. The underdogs. The resolute. The determined. The outsiders. The defiant. The independent thinkers. The fighters and the true believers.

> These are the founders with whom we partner. They’re extremely rare. And we’re ecstatic when we find them...

> We’re serious about our work, and carefully choose the words to describe it. Terms like “deal” or “exit” are forbidden. And while we’re sometimes called investors, that is not our frame of mind. We consider ourselves partners for the long term.

> We help the daring build legendary companies.

If that doesn't capture the ethos of Silicon Valley, I don't know what does.

This is a criteria that my intuition would award 4.5 stars to, but that even investors themselves would warn against overvaluing. So I compromised, and gave it 4 stars.

Silicon Valley has a hierarchy in its investors. The top-tier is generally agreed to consist of: Sequoia, Kleiner Perkins Caufield Byers (KPCB), Greylock, Benchmark, Accel, and Andreessen Horowitz.[^7] These are the venture capital firms that, in general, attract the best founders, win the best deals, and show, on average, the highest returns.

...

<!-- Even the best firms, however, often miss great deals... -->

<!-- Other well-known firms include General Catalyst, NEA, and Lightspeed Ventures. -->

#### Rounds of funding raised

<div class="rating" data-rate="3">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

*The funding statistics in this section are based on a 2017 [article](https://techcrunch.com/2017/05/17/heres-how-likely-your-startup-is-to-get-acquired-at-any-stage/) by TechCrunch that looked at 15,600 U.S.-based tech companies founded between 2003 and 2013.*

*As a sanity check, I compared these numbers with those from a Business Insider [article](http://www.businessinsider.com/startup-matriculation-rate-mattermark-2016-9) from 2016, which considered 2,011 U.S.-based software companies that raised seed rounds between 2009 and 2012. The BI funding statistics are slightly more conservative.*

The number of rounds of funding raised by a company is a decent indicator of how much risk the startup has neutralized, or in other words, how likely the company is to succeed at some level.

This doesn't mean that it is always better to join a company that has raised a Series C round over a company that has only raised a Series B, because there is a tradeoff. The Series C company will be offering a smaller equity share, possibility significantly so, and thus less potential upside. In addition, some types of funding rounds can actually be indicative of *problems* in the company - notably, down rounds and debt financing.

A company that has raised no external funding should be considered "extremely high risk", and not being offered founder-level equity at such a company should be met with extreme skepticism. (Especially because you are likely to be working for little to no pay for a while.)

A company that has raised a seed round is officially a funded startup, but is still "high risk", as only about 40% of seed-funded companies go on to raise Series A rounds, and only about 9% get acquired. In 2016, the [median seed round](https://techcrunch.com/2016/09/07/crunchbase-sees-rise-in-average-seed-round-in-2016/) size was $0.63 million, and the average size was $1.14 million. Investors typically take around 20% of the company in early funding rounds, so this indicates a post-money valuation of $2-8 million.

A company that has raised a Series A round should be considered "moderate risk". Of companies that raise a Series A, about 62.5% go on to raise a Series B round, and 7.5% get acquired, which implies that the other 30% likely die.[^8] In terms of career growth and financial upside, this is probably the best time to join a startup that scores highly on all of the other criteria. Series A companies still have high growth potential, and yet have been formally validated by a group whose full-time job it is to evaluate early-stage startups. As a prospective employee, you now have an additional data point: the reputation of the venture capital firm that led the Series A round.

Series B companies should be considered "low risk".[^9] For one, companies that have raised a Series B round are [almost always](http://www.nea.com/blog/what-size-series-a-round-can-you-expect-to-raise) generating revenue. Series B round investors look for evidence of healthy growth in users or customers since the A round, meaning that Series B companies have been validated not only on company fundamentals (team, product, market) but also on more complex signals, such as product-market fit. The [median Series B round](https://mattermark.com/series-b-round-sizes-increased-84-since-2008/) size, as of July 2015, was $18.4 million, implying that the median Series B company is valued on the order of $100 million.

When evaluating a startup on its funding history, an important factor to consider is *when* the last round of funding was raised. A Series B company founded in 2005 that hasn't raised any venture capital since 2008, and has not IPOed, is either 1) reliant on its own revenue, and likely slow growing (i.e. [not really a startup](http://www.paulgraham.com/growth.html)), or 2) approaching death.[^10]

A point to note: companies that have raised a Series B round or beyond should be offering a base salary that is competitive with that offered by larger, public companies. For new college grads, the [average base salary](https://www.glassdoor.com/Salaries/san-francisco-software-engineer-new-grad-salary-SRCH_IL.0,13_IM759_KO14,40.htm) offered by top-tier tech companies based in San Francisco was $110,000, as of mid-2017. Take this figure with a grain of salt (and, of course, don't neglect cost of living adjustments), but if you're being offered much less, you're either at a company with an unusual compensation structure (and should be offered a significantly above-average equity grant), or are not being made a fair offer.[^11]

Finally, as I mentioned earlier, there are two kinds of funding rounds that could actually be indicative of problems in a company. The first is down rounds. These are almost always bad, as they imply that a company was obliged to raise funding to stay alive, but had to do so at a lower valuation than in its previous round of funding - something that is bad for all existing shareholders of the company. The second kind is debt financing. In such a round, a company raises debt, which must be paid back with interest, instead of ordinary capital. This has become a common practice among very mature private companies, such as [Uber](https://www.theverge.com/2016/6/14/11936316/uber-leveraged-loan-two-billion-valuation-travis-kalanick) and [Snapchat](https://www.recode.net/2016/9/8/12845890/snapchat-banking-debt-credit-line-morgan-stanley) (before its IPO), which often need more cash, but either do not want to further dilute shareholders or cannot find a bank willing or able to invest at their current valuation. This may not necessarily be a bad sign, but raising debt can be dangerous, especially if the company later hits a rough patch.

A highly prescient question to ask a founder or executive in the interview process is how much runway the company has at its current burn rate. This is an estimate for how long the company could stay afloat, given the cash in its bank and its current rate of spending, were it not to raise any more capital. Asking this question definitely does not constitute a faux pax, and an evasive answer should be cause for alarm.

<!-- Discuss YC -->
<!-- Discuss Atlassian, which only raised one round of funding -->

#### Location

<div class="rating" data-rate="3">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

#### Press coverage

<div class="rating" data-rate="2">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

#### Problem domain

<div class="rating" data-rate="3">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

#### Personal fit

<div class="rating" data-rate="4">
  <i class="star-1">★</i>
  <i class="star-2">★</i>
  <i class="star-3">★</i>
  <i class="star-4">★</i>
  <i class="star-5">★</i>
</div>

### Footnotes

[^1]: The [number one rule](http://www.paulgraham.com/swan.html) of startup investing is that nearly all of an investor's returns are concentrated in a few big winners. As of 2012, three-quarters of Y Combinator's $10 billion portfolio value was concentrated in two companies: Dropbox and Airbnb. This, combined with the difficulty of identifying the biggest winners in their infancy, means that early-stage investors go out of their way to court a large number of companies with a small chance at astronomical success.

[^2]: There's a caveat here: the offers from Microsoft and AOL were more like acqui-hires. Zuck (and his co-founder, Adam D'Angelo) would have to defer college, and [agree to work](http://www.thecrimson.com/article/2003/10/23/not-so-artificial-intelligence-for-his-high-school/) at the acquiring company.

[^3]: Steve Jobs is a notable exception. He was raised by working-class, adoptive parents who hadn't attended college.

[^4]: “Jeff [Bezos] always wanted to make a lot of money,” says his high school girlfriend, Ursula “Uschi” Werner. She herself was an overachiever – valedictorian of the Miami Palmetto Senior High School class a year ahead of Bezos, winner of a full scholarship to Duke University, and a Rhodes Scholar – but she remains awed by Bezos’s commitment. “It wasn’t about money itself. It was about what he was going to do with the money, about changing the future.” (from a [1999 article](https://www.wired.com/1999/03/bezos-3/) by Wired)</br></br>
Page grew up in East Lansing, Michigan, where his father taught computer science at Michigan State. He wanted to be an inventor, not simply because of his interests and abilities in math and technology but because, he says, “I really wanted to change the world.” ... Page’s ideas may have been fantastic, but his vision always extended to the commercial. “From when I was 12, I knew I was going to start a company,” he says. (from a [2011 article](https://www.wired.com/2011/03/mf_larrypage/) by Wired)

[^5]: I hate that I'm perpetuating the very imprecise misconception that "most startups fail" with this statement. There are two problems with this aphorism - the definition of "startup" and the definition of "fail". If we define "startups" as companies that have at least raised a Series A round, and "fail" as the failure to make any money for the founders, then I think the statistics would look a lot rosier.</br></br>
Side point: companies that haven't raised any external funding shouldn't be called startups; "project" would probably be a better term here.</br></br>
Many, many companies get acquired in the $5-200 million range. Many of these deals are not publicized, since in some cases, the product is shut down after the acquisition, and in other cases, the investors who backed the company in its *last* round of funding lose money. Such acquisitions still aren't failures, in any reasonable sense of the word, for the founders, the early investors, and the early employees.</br></br>
Startups can be risky, but you have to be precise about what you mean by "risk" and "failure". If failure means not making as much money as you could, not growing as much as you could, and not advancing in your career as much as you could, then floating around in an entry level job at a big company for three years also sounds pretty risky to me.</br></br>
Being quick to label things as a "failure" is another problem altogether, and probably prevents people from making the kinds of choices that result in world-changing outcomes.

[^6]: With regards to my elite college theory: if you disagree that the top hackers at places like Stanford, MIT, and Harvard form a disproportionate fraction of the pool of "great early employees" at large, then of course my argument is invalid.</br></br>
Considering that students from these schools are so [overrepresented](https://qz.com/896280/most-unicorn-founders-in-the-world-are-graduates-of-stanford-harvard-and-the-indian-institutes-of-technology-iits/) in lists of successful *founders*, I have reason to believe my assertion approximates the truth.

[^7]: Andreessen Horowitz (a16z) is a bit of an outlier. Founded in 2009, it is the only venture capital firm started after 1995 to make this list. Being the newest of the lot, a16z has more to prove, but in terms of prestige, reputation, and [network centrality](https://techcrunch.com/2011/05/25/top-10-vc-firms-investorrank/) it is second-to-none. Some of its highest profile exits/IPOs include Groupon, Skype, Zynga, Nicira, and Oculus VR.

[^8]: I'm assuming that the probability of a company become financially self-sustaining or IPOing after raising only a Series A round is negligible.

[^9]: In this discussion, I've used terms such as "high risk" and "low risk", but as I mentioned in an earlier footnote, defining risk is tricky, because the definition of success for a company's employees is stricter than the definition of success for the founders and early investors. As an example, consider a liquidity event, say a $250 million acquisition, that occurs after a Series B round that values the company at $350 million. A $250 million acquisition is great news for the founders, who will likely earn $25-50 million a piece on their equity, and for the seed-stage and Series A round investors. But it is definitely *not* good news for the Series B round investors, and may not be a win for later employees, either. Employees who joined after the Series B round were granted four years of stock options worth $60,000 at the $350 million valuation, options now worth about $45,000. In the context of a $115,000 annual base salary, this is not a huge monetary loss, but for a talented engineer, spending several years at such a company entails a separate, much higher opportunity cost. After all, isn't earning equity that will be worth something significant in the future a big point of joining a startup in the first place?

[^10]: An example of a startup that has done very well without raising much external capital is Atlassian, a Sydney, Australia-based company that builds productivity software (e.g. Jira, Confluence) for developers. Founded in 2002, Atlassian has been profitable since 2005, and in 2015, IPOed on the NASDAQ stock exchange at a $4.3 billion valuation. In 2010, Atlassian raised $60 million in secondary financing from Accel Partners. This was a [very unusual](http://www.businessinsider.com/atlassian-ceo-mike-cannon-brookes-accel-partners-2016-9) kind of funding round - the company already had $55 million in the bank, and raised the money as a way to offer employees liquidity for their options, and to bring in an external board member from Accel.

[^11]: Where public companies and startups differ is in what they offer on top of the base salary. While public companies or late-stage startups may offer a cash bonus and RSUs (which become publicly tradeable stock options on vesting), startups generally compensate via stock options, which must be purchased from the company at an exercise, or strike price, and which can generally only be sold once a company has gone public or gotten acquired. In some cases, however, it is possible to sell stock options on a private secondary market (e.g. to another venture capital firm), or back to the company during a stock buy-back program.
