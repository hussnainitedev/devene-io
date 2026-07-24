// Fallback content — mirrors the original static copy exactly.
// Used at build time whenever Sanity isn't configured yet, or a query returns nothing.
// Once SANITY_PROJECT_ID is set, matching documents in Sanity take over automatically.

export const services = [
  {
    id: 'svc-ai-strategy', glyph: '☾', title: 'AI Strategy & Enablement', tag: 'AI-native', tagAi: true,
    summary: "Where AI actually fits your business — and where it doesn't.",
    body: [
      'Every board is asking "what\'s our AI plan?" — and most answers are either panic or PowerPoint. We give you a third option: a grounded, honest assessment of where AI creates real value in your business, where it doesn\'t, and a sequenced plan to get there.',
      "We'll audit your data readiness, map use cases to actual ROI, make the build-vs-buy calls with you, and train your team so the capability stays in-house after we leave."
    ],
    deliverables: ['AI opportunity map, ranked by value & feasibility', 'Data readiness & governance assessment', 'Build / buy / wait recommendations', '90-day pilot plan with success metrics', 'Team enablement workshops']
  },
  {
    id: 'svc-product', glyph: '✺', title: 'Product Strategy & Roadmapping', tag: 'strategy', tagAi: false,
    summary: 'Roadmaps with a spine. We help you decide what not to build.',
    body: [
      'Most roadmaps are wish lists wearing a Gantt chart. Ours start with discovery: who your users are, what they actually do, and where the value leaks out. Then we build a roadmap with a spine — one that says no to good ideas so the great ones ship.',
      "Led by senior business analysts who've run discovery across healthcare, energy, auctions, and B2B services. They've seen what happens when you skip this step."
    ],
    deliverables: ['User research & journey maps', 'Prioritised roadmap (with the reasoning shown)', 'Epics & user stories, ready for build', 'Success metrics per release', 'A "not doing" list — the most honest artifact in software']
  },
  {
    id: 'svc-dev', glyph: '✿', title: 'AI-Powered Software Development', tag: 'AI-native', tagAi: true,
    summary: 'Designed by humans, accelerated by AI pair-builders. Weeks, not quarters.',
    body: [
      'Web apps, client portals, internal platforms, integrations — built by a small senior team working alongside AI pair-builders. The AI writes fast; the humans decide what\'s worth writing. The result is delivery in weeks that used to take quarters, without the quality debt.',
      'Every line reviewed by a person. Every architecture decision made by a person. Every demo given by the person who built it.'
    ],
    deliverables: ['Working software, demoed weekly', 'Clean, documented, handover-ready code', 'CI/CD & environments set up properly', 'Test coverage that means something', 'A team that answers when you call']
  },
  {
    id: 'svc-data', glyph: '◐', title: 'Data, BI & Intelligent Reporting', tag: 'AI-native', tagAi: true,
    summary: 'Dashboards people actually open. Ask your data questions in plain English.',
    body: [
      'Your data is probably fine. Your reporting probably isn\'t. We build semantic models, Power BI estates, and paginated reports that people actually open — then layer natural-language analytics on top so anyone can ask "how did the north region do last quarter?" and get a real answer.',
      'Deep experience with Power BI, SQL Server, Microsoft Fabric, and Azure data pipelines, delivered for regulated industries where the numbers have to be right.'
    ],
    deliverables: ['Semantic model built for self-service', 'Dashboards & paginated reports', 'Natural-language query layer', 'Automated data quality checks', 'Documentation your analysts will thank us for']
  },
  {
    id: 'svc-design', glyph: '☼', title: 'UX & Product Design', tag: 'design', tagAi: false,
    summary: 'Research-led design with taste.',
    body: [
      'Research-led design with taste. We prototype in days, put it in front of real users, and refine until the product feels obvious — because the best interface is the one nobody has to think about.',
      'Our designers sit inside the build team, not in a separate studio. Design decisions get made next to engineering reality, which is why what we mock up is what actually ships.'
    ],
    deliverables: ['User research & usability testing', 'Clickable prototypes in week one', 'Design system & component library', 'Accessibility built in, not bolted on']
  },
  {
    id: 'svc-auto', glyph: '⌘', title: 'Automation & Agentic Workflows', tag: 'AI-native', tagAi: true,
    summary: 'Custom AI agents and pipelines that quietly delete busywork.',
    body: [
      'Custom AI agents, n8n pipelines, and integrations that quietly delete busywork from your organisation. Invoice triage, report generation, ticket routing, data syncing between systems that were never meant to talk — the boring stuff, automated with judgment.',
      "We design for graceful failure: every automation knows when to stop and ask a human. That's the difference between an agent and an accident."
    ],
    deliverables: ['Workflow audit & automation map', 'Custom agents with human-in-the-loop controls', 'System integrations (APIs, webhooks, MCP)', 'Monitoring & fallback design']
  },
  {
    id: 'svc-support', glyph: '♡', title: 'Support & Continuous Care', tag: 'ongoing', tagAi: false,
    summary: "We don't ship and vanish.",
    body: [
      "We don't ship and vanish. Application support, monitoring, and continuous improvement from engineers who know your system as well as the people who wrote it — because often they are the people who wrote it.",
      'Real SLAs, real humans, and a monthly improvement rhythm so your product keeps getting better instead of quietly rotting.'
    ],
    deliverables: ['Named support engineers, not a queue', 'Proactive monitoring & alerting', 'Monthly improvement releases', 'Clear SLAs you can hold us to']
  }
];

export const teamGroups = [
  {
    heading: '☾ Strategy & Analysis',
    members: [
      { glyph: '☾', name: '[Name Placeholder]', role: 'Lead Business Analyst · 8+ yrs', help: 'Runs your discovery, owns your roadmap, and translates between your stakeholders and our builders. Has led delivery across healthcare, energy, auctions, and B2B services.', experience: 'requirements engineering · stakeholder workshops · Power BI · Azure DevOps · agile delivery', superpower: 'asking the question nobody wanted to' },
      { glyph: '✺', name: '[Name Placeholder]', role: 'Business Analyst · 5+ yrs', help: 'Turns messy stakeholder conversations into clean user stories and acceptance criteria your build team never has to question. Keeps scope honest sprint after sprint.', experience: 'user stories & epics · process mapping · UAT coordination · SQL · client demos', superpower: 'writing specs that survive contact with reality' },
      { glyph: '◭', name: '[Name Placeholder]', role: 'Business Analyst · 4+ yrs', help: "Your day-to-day contact during delivery — tracking decisions, unblocking questions, and making sure what was agreed is what gets shipped.", experience: 'backlog management · client comms · reporting · documentation · QA support', superpower: 'nothing falls between the cracks, ever' }
    ]
  },
  {
    heading: '☼ Design',
    members: [
      { glyph: '☼', name: '[Name Placeholder]', role: 'Senior UI/UX Designer · 7+ yrs', help: 'Leads research and design direction. Prototypes in week one, tests with your real users, and builds the design system your product grows on.', experience: 'user research · Figma · design systems · usability testing · accessibility', superpower: 'making complex things feel obvious' },
      { glyph: '❋', name: '[Name Placeholder]', role: 'UI/UX Designer · 4+ yrs', help: 'Sits inside the build team so design decisions get made next to engineering reality. What gets mocked up is what actually ships.', experience: 'interface design · prototyping · component libraries · handoff & QA', superpower: 'pixel care without pixel preciousness' }
    ]
  },
  {
    heading: '✿ AI & Engineering',
    members: [
      { glyph: '✿', name: '[Name Placeholder]', role: 'Lead AI Engineer · 6+ yrs', help: 'Architects your AI features — model selection, fine-tuning, agent design — and knows when the honest answer is "you don\'t need AI for this."', experience: 'LLM integration · fine-tuning (LoRA) · NL-to-SQL · MCP servers · Azure & Vertex AI', superpower: 'knowing when NOT to use AI' },
      { glyph: '⌘', name: '[Name Placeholder]', role: 'AI Engineer · 4+ yrs', help: 'Builds your agents and automation pipelines with human-in-the-loop controls — so every workflow knows when to stop and ask a person.', experience: 'n8n · API integration · agentic workflows · prompt engineering · evaluation', superpower: 'automations that fail gracefully' },
      { glyph: '✧', name: '[Name Placeholder]', role: 'Full-Stack Engineer · 6+ yrs', help: 'Builds your product with AI pair-builders at full speed — then reviews every line personally. Demos their own work to you every week.', experience: 'React · .NET · Node · SQL Server · CI/CD · cloud architecture', superpower: 'shipping on Fridays without fear' },
      { glyph: '◐', name: '[Name Placeholder]', role: 'BI & Data Engineer · 5+ yrs', help: 'Builds the semantic models, pipelines, and dashboards your decisions run on — for industries where the numbers have to be right the first time.', experience: 'Power BI · paginated reports · SQL views · Microsoft Fabric · data modelling', superpower: 'finding the story in the spreadsheet' }
    ]
  },
  {
    heading: '♡ Support & Care',
    members: [
      { glyph: '♡', name: '[Name Placeholder]', role: 'Senior Application Support Engineer · 6+ yrs', help: 'Owns your system after launch — monitoring, incident response, and the monthly improvement rhythm. Knows your product like the people who wrote it.', experience: 'incident management · monitoring & alerting · SQL debugging · SLA ownership', superpower: 'calm, at all times, under all conditions' },
      { glyph: '☂', name: '[Name Placeholder]', role: 'Application Support Engineer · 3+ yrs', help: "The person who picks up at 9am Monday when something breaks — and who already knows your system, because they've been in it since launch.", experience: 'ticket triage · root-cause analysis · user support · release verification', superpower: 'turning "it\'s broken" into "it\'s fixed" fast' },
      { glyph: '✉', name: '[Name Placeholder]', role: 'Delivery & Client Success · 5+ yrs', help: 'Not an account manager — a delivery partner. Keeps the rhythm honest: weekly demos happen, decisions get logged, and you always know where things stand.', experience: 'delivery coordination · client onboarding · reporting cadence · feedback loops', superpower: 'you always know exactly where things stand' }
    ]
  }
];

export const caseStudies = [
  {
    title: 'Natural-language reporting for a renewable energy group', sector: 'energy · data', category: 'data',
    body: [
      'A UK renewables operator was drowning in spreadsheet requests — every question to the data team took days. We rebuilt their reporting estate on a clean semantic model, added paginated reports for regulators, and layered a natural-language query interface so anyone could ask questions in plain English.',
      'The data team went from report factory to strategy partner. The board went from monthly PDFs to live answers.'
    ],
    results: [{ n: '−80%', l: 'ad-hoc report requests' }, { n: '3 days → 30 sec', l: 'time to answer' }, { n: '12 wks', l: 'discovery to launch' }]
  },
  {
    title: 'Lead-to-auction platform for a vehicle remarketing firm', sector: 'automotive · product', category: 'product',
    body: [
      'A motor auction business was running lead management across inboxes, spreadsheets, and memory. We ran discovery with their sales team, designed a custom lead pipeline that matched how they actually work, and built it with AI-assisted development — first demo in week one, live in a quarter.',
      'Automated handover flows and vehicle status tracking meant nothing fell between the cracks anymore.'
    ],
    results: [{ n: '2×', l: 'leads converted to listings' }, { n: '1 qtr', l: 'idea to production' }, { n: '0', l: 'leads lost to inbox chaos' }]
  },
  {
    title: 'Agentic workflow automation for a facilities management group', sector: 'facilities · automation', category: 'automation',
    body: [
      'Hundreds of supplier invoices, compliance documents, and job reports arriving weekly — all triaged by hand. We built a set of AI agents with human-in-the-loop controls: documents classified, data extracted, exceptions flagged to a person, everything else flowing straight through.',
      'The team kept full oversight. The busywork disappeared.'
    ],
    results: [{ n: '30 hrs/wk', l: 'manual work removed' }, { n: '99.2%', l: 'extraction accuracy' }, { n: '100%', l: 'exceptions reviewed by humans' }]
  },
  {
    title: 'AI strategy & pilot programme for a healthcare services provider', sector: 'healthcare · strategy', category: 'strategy',
    body: [
      'The board wanted "an AI strategy." What they needed was a filter. We audited their data estate, mapped twenty candidate use cases, and — crucially — killed fourteen of them. The six survivors got a sequenced pilot plan with real success metrics, and their team got hands-on enablement so the capability stayed in-house.',
      'Two pilots are now in production. Zero were built on hype.'
    ],
    results: [{ n: '20 → 6', l: 'use cases, honestly filtered' }, { n: '2', l: 'pilots now in production' }, { n: '90 days', l: 'strategy to first pilot' }]
  },
  {
    title: 'Text-to-SQL analytics layer for a B2B services group', sector: 'b2b · data · ai', category: 'data',
    body: [
      'A multi-brand B2B group had data in six systems and answers in none. We built a governed semantic layer with a text-to-SQL chat interface on top — sales, ops, and finance teams now ask questions in plain English and get charts back with the SQL shown for trust.',
      'A profile-based architecture keeps costs flat even as data volume grows, and every query respects row-level security. GDPR-compliant by design.'
    ],
    results: [{ n: '6 → 1', l: 'places to find an answer' }, { n: '−90%', l: 'cost vs. raw-data querying' }, { n: '94%', l: 'query accuracy at launch' }]
  }
];

export const testimonials = [
  { quote: 'They asked harder questions in week one than our last agency asked in a year. Then they built exactly what we needed — which wasn\'t what we asked for.', who: 'Operations Director, UK Facilities Group' },
  { quote: 'Our reporting went from a monthly chore to something the board actually looks forward to. The natural-language layer feels like magic, but the thinking behind it was all human.', who: 'Head of Data, Renewable Energy Co.' },
  { quote: "I know every person on the team by name. That's never happened with an agency before, and it's why everything moves so fast.", who: 'Founder, HealthTech Startup' }
];

export const faqItems = [
  { q: 'If AI does the heavy lifting, why do I need you?', a: 'AI makes producing software cheap. It makes producing the right software no cheaper at all. Knowing what to build, what to skip, and what "good" looks like for your users — that\'s judgment, and it\'s the thing we actually sell. The AI just means you get it faster.' },
  { q: 'Will I work with the people from the pitch?', a: 'Yes — because there is no pitch team. The people you meet in the first call are the people who do the work. It\'s a small studio; there\'s nobody to switch you to.' },
  { q: 'How fast is "fast"?', a: "First working demo within seven days of kickoff. Most Builds go live in one to two quarters. We're quick because of AI acceleration and small-team focus — not because we cut corners on discovery or testing." },
  { q: 'What if you think our idea is bad?', a: "We'll tell you, with reasons, in week one — and suggest what we'd do instead. Some of our best client relationships started with us talking someone out of the original brief. It costs us billable hours and earns us trust. Good trade." },
  { q: 'Is our data safe with AI in the process?', a: "We design for it from day one: GDPR-compliant handling, data minimisation, regional hosting where required, and clear agreements about what models see and what they never do. In regulated sectors, we've done this dance before — happy to walk through our approach in detail." },
  { q: 'Do you work with startups or just established companies?', a: 'Both. Startups usually begin with a Spark; established teams often start with strategy or a data project. The common thread is that you care about the thing you\'re building — that\'s our only real filter.' }
];

export const blogPosts = [
  {
    slug: 'judgment', tag: 'ai & teams', title: "The junior developer isn't dead — but the junior task is",
    excerpt: "AI hasn't replaced developers. It's replaced the tasks juniors used to learn on. What that means for how teams grow talent, and why judgment is the new seniority.",
    minutes: 6, author: 'the engineering team', featured: true, glyph: '☾',
    body: `Every few weeks another headline declares the death of the junior developer. The evidence is always the same: AI can now write the CRUD endpoints, the unit tests, the boilerplate — the exact work juniors used to cut their teeth on.

The headlines are half right. The junior *task* is dying fast. The junior *developer* doesn't have to — but only if teams change how they grow people.

## What actually disappeared

The traditional apprenticeship in software was built on a convenient economic accident: there was a huge supply of low-stakes, well-specified work, and it was cheaper to give it to a junior than a senior. Juniors learned by doing a thousand small things, absorbing patterns through repetition.

AI removed the economic accident. A first draft of almost anything — a migration script, a form component, a test suite — now costs minutes, not days. The thousand small things are still happening; they're just not happening through human fingers.

> Repetition taught pattern recognition. Now the patterns arrive pre-recognised, and the scarce skill is knowing when they're wrong.

## Judgment is the new seniority

Here's what we've noticed inside our own studio: the value of every person on the team now concentrates in decisions, not production.

- **Is this the right thing to build at all?** AI will happily produce a beautiful solution to the wrong problem.
- **Is this generated code actually correct for our context?** It compiles. It passes the tests it wrote for itself. Neither means it's right.
- **What's the second-order effect?** AI optimises the local task. Humans hold the system.

None of these are senior-only skills by birthright. They're teachable. But they used to be taught as a side effect of grunt work, and the grunt work is gone.

## How we grow juniors now

So we changed the apprenticeship. Juniors at Devene don't start with tickets; they start with reviews. Reading AI-generated code and finding the flaw is a better teacher than writing slow code ever was. They sit in discovery calls from week one, because understanding *why* is now more valuable than knowing *how*. And they own small end-to-end outcomes — a feature, with a user, with a metric — rather than fragments of large ones.

> **The short version:** If your hiring plan assumes juniors pay for themselves by doing cheap tasks, it's already broken. If it assumes juniors are trainee decision-makers with AI leverage, it might be the best investment on your books.

The teams that figure this out will compound. The ones that simply stop hiring juniors will look brilliant for two years — and then wonder where their next seniors were supposed to come from.`
  },
  {
    slug: 'notdoing', tag: 'product strategy', title: 'Your roadmap needs a "not doing" list',
    excerpt: 'The most honest artifact in software is the list of good ideas you deliberately killed. Here\'s how to write one — and how it saves you two quarters.',
    minutes: 5, author: 'the strategy team', featured: false, glyph: '✺',
    body: `Every roadmap we inherit from a previous agency has the same shape: a river of features flowing confidently toward a horizon nobody has examined. What it never has is the other document. The honest one. The list of things you've decided **not** to do.

## Why "not doing" beats "doing later"

Most teams think their backlog is their "not doing" list. It isn't — it's a "doing later" list, and "later" is a promise. Promises accumulate interest. Every stakeholder who was told "it's on the backlog" believes their thing is coming, and every planning cycle begins with relitigating the same twenty ideas.

A "not doing" list is different. It says: we considered this, we understood its appeal, and we are choosing against it — *for these reasons*. Written down. Signed off. Findable.

> A backlog defers the argument. A "not doing" list ends it.

## What goes on the list

- **Good ideas that serve the wrong user.** The feature your loudest customer wants and your largest segment doesn't.
- **Anything justified only by a competitor having it.** Their roadmap is their bet. Copying it means running their race, a year behind.
- **The second platform.** Mobile app, marketplace, API programme — each is a company, not a feature.
- **AI for its own sake.** If the honest version of the pitch is "the board wants to see AI," it goes on the list until there's a user who wants it too.

## How to write one that survives

Three rules. First, every entry gets a reason and a revisit condition — "not doing X *until* we have 500 active teams" turns a rejection into a tripwire. Second, the list is public inside the company; a secret "not doing" list protects nobody. Third, the list gets reviewed exactly as often as the roadmap, because a "no" from last year deserves the same scrutiny as a "yes" for next quarter.

> **From our practice:** In discovery engagements, we spend as much time filling the "not doing" list as the roadmap. One recent client arrived with twenty candidate AI use cases; fourteen went on the list. The six survivors shipped. That ratio is the strategy.

Saying no is a capital allocation decision wearing casual clothes. Dress it properly.`
  },
  {
    slug: 'dashboard', tag: 'data & bi', title: "Nobody opens your dashboard. Here's why.",
    excerpt: 'Most BI fails at the last mile: the human one. What natural-language analytics changes about reporting culture.',
    minutes: 5, author: 'the data team', featured: false, glyph: '◐',
    body: `Somewhere in your organisation there is a beautiful dashboard. It took weeks to build. It was demoed to applause. And its weekly active users are: the analyst who built it, and one director who opens it before board meetings to take a screenshot.

This isn't a failure of the dashboard. It's a failure of the assumption underneath it.

## The last mile of BI is human

Business intelligence has spent twenty years perfecting everything except the moment of use. Pipelines: solved. Modelling: solved. Visualisation: gorgeous. But the actual moment — a human with a question, at 4:40pm, needing an answer before a call — still fails, because the dashboard answers the questions its builder predicted, and humans reliably ask others.

> A dashboard is a bet on which questions people will ask. Most bets lose.

## Questions are the interface

This is what natural-language analytics actually changes — not the technology, the *culture*. When people can type "how did the north region do last quarter vs. target?" and get a real answer with the working shown, three things happen:

- **Question volume explodes.** One client saw ad-hoc data questions go from ~30 a month (routed through a bottlenecked data team) to hundreds a week, self-served.
- **The data team changes jobs.** From report factory to curator of the semantic layer — defining metrics once, correctly, instead of exporting the same numbers forever.
- **Trust becomes the product.** Showing the generated SQL next to the answer isn't a developer feature; it's the reason a finance director will actually rely on it.

## What still matters underneath

None of this works on a swamp. Natural-language layers amplify whatever they sit on — a governed semantic model with agreed definitions produces magic; six systems with three definitions of "revenue" produce confident nonsense at scale. The unglamorous work is still the work.

> **The test:** Watch someone in your org get a data question they can't answer. Count the hours (or days) until they have an answer they trust. That number — not your dashboard count — is the state of your BI.

Dashboards aren't dead; they're just the second screen. The first screen is a question, asked in the words the person already had.`
  },
  {
    slug: 'aistrategy', tag: 'ai strategy', title: 'Most AI strategies are lists of demos',
    excerpt: "Twenty use cases isn't a strategy — it's a wishlist. How to filter for the six that survive contact with your data, your budget, and reality.",
    minutes: 7, author: 'the strategy team', featured: false, glyph: '✿',
    body: `We've now read a lot of corporate AI strategies. Most share a structure: an executive summary about transformation, a market-size chart, and then the heart of the document — a list of use cases. Twenty of them, typically. Chatbot for support. Copilot for sales. Document summarisation. Forecasting. Each with a sparkling one-paragraph description and no mention of data readiness, cost of error, or who owns it.

That's not a strategy. That's a list of demos waiting to happen.

## The filter is the strategy

A strategy is what you use to say no. So the real document isn't the list of twenty — it's the reasoning that kills fourteen of them. We run every candidate use case through four gates:

### 1. Is the data actually there?

Not "do we have data" — every company has data. Is it accessible, clean enough, and legally usable for this purpose? More AI pilots die of data plumbing than of model quality. If the answer is "we'd need a six-month data project first," that's fine — but then the use case is a data project, and should be costed as one.

### 2. What does an error cost?

AI is probabilistic. Every use case must survive the question: what happens when it's wrong? Drafting an internal summary — an error costs a shrug. Answering a patient-facing medical question — an error costs everything. Map each use case on error-cost, and route high-cost ones through human review by design, or kill them.

### 3. Is there a workflow, or just a wow?

The demo is the easy part. The question is whether the output lands inside a workflow someone already runs — their inbox, their CRM, their morning routine. AI that requires a new habit fails quietly within a quarter.

### 4. Who bleeds if it fails?

Every surviving use case needs an owner whose actual job improves if it works. "The innovation team" is not an owner. If nobody's quarterly numbers depend on the pilot, the pilot is theatre.

> Twenty use cases in, six out, two in production a year later — that's what a healthy funnel looks like. If everything survives your filter, you don't have a filter.

## Sequencing beats ambition

Whatever survives, resist launching in parallel. The first pilot's real product isn't the feature — it's the organisational muscle: the data access patterns, the review process, the evaluation habit, the vendor relationships. Sequence so each pilot makes the next one cheaper.

> **A fair test for any advisor:** Ask what they'd cut. An AI consultancy that never kills a use case isn't advising you — it's upselling you. (Yes, this applies to us. Please apply it to us.)`
  },
  {
    slug: 'agents', tag: 'automation', title: 'The difference between an agent and an accident',
    excerpt: "Human-in-the-loop isn't a compliance checkbox — it's an architecture. Designing automations that know when to stop and ask.",
    minutes: 4, author: 'the ai engineering team', featured: false, glyph: '⌘',
    body: `The pitch for AI agents writes itself: software that doesn't just answer, but *acts*. Triages the invoice, updates the record, sends the email, closes the loop. The pitch against them also writes itself, usually as a screenshot of an agent that closed the wrong loop several hundred times before anyone noticed.

The difference between the two isn't model quality. It's architecture — specifically, whether the system was designed to know its own limits.

## Human-in-the-loop is a design, not a disclaimer

Every automation we ship is built around a simple contract: **the system must know when to stop and ask.** That means three things in practice:

- **Confidence thresholds with real consequences.** High-confidence classifications flow through; anything below the line routes to a person. The threshold is tuned on your data, not vibes.
- **Blast-radius limits.** An agent can process one invoice wrongly; it must not be able to process a thousand wrongly. Rate limits, batch checkpoints, and reversibility are the seatbelts.
- **An exception queue that's a first-class product.** The human review screen isn't an afterthought — it's where trust is built and where the system learns. Every human correction is training signal.

> Full automation isn't the goal. Full automation of the boring 95%, with graceful escalation of the interesting 5% — that's the goal.

## The metric that matters

Teams ask "what's the accuracy?" The better question: **what percentage of errors reached a human before they reached a customer?** A 94%-accurate system that escalates its uncertain cases beats a 98%-accurate system that confidently ships its mistakes.

> **Rule of thumb:** If your automation vendor can't show you the escalation path in the first demo, the escalation path doesn't exist.

Agents aren't dangerous. Agents without exits are. Build the exits first.`
  },
  {
    slug: 'sevendays', tag: 'delivery', title: 'Why we demo in seven days (and you should demand it)',
    excerpt: 'The first working demo is the most honest conversation you\'ll have with an agency. What week-one software reveals that proposals hide.',
    minutes: 4, author: 'the delivery team', featured: false, glyph: '☮',
    body: `Seven days after kickoff, we demo working software. Not a deck about software. Not a Figma of software. Software — ugly, partial, real — running in front of the client.

Clients assume this is a speed brag. It's actually a honesty mechanism.

## What week-one software reveals

A proposal can hide anything. A working demo can hide almost nothing:

- **It reveals whether we understood you.** If the week-one demo solves the wrong problem, we find out in week one — not month three. The cost of being wrong drops by an order of magnitude.
- **It reveals your data's real condition.** Connecting to actual systems in week one surfaces the missing fields, permissions, and mystery spreadsheets that every project eventually meets. Better to meet them early.
- **It reveals how we'll work together.** How feedback flows, how decisions get made, whether the meetings are honest — the working relationship gets its first stress test while it's still cheap to fix.

> The first demo isn't a milestone. It's a lie detector — for both sides.

## Why AI makes this the new normal

Five years ago, seven-day demos meant heroics. Now AI-assisted development makes a week-one walking skeleton straightforward — scaffold, integrations, one thin end-to-end slice of real functionality. Any agency not offering this is either not using the tools or billing you as if they aren't.

> **For your next agency conversation:** Ask one question: "What will I see running in week one?" The answer tells you more than the whole proposal.

Slideware is a promise. Software is a fact. Ask for facts early.`
  },
  {
    slug: 'gdpr', tag: 'ai & data', title: 'GDPR and LLMs: what your AI vendor should be able to answer',
    excerpt: 'Seven questions to ask before any AI touches your customer data. If the answers are vague, walk away.',
    minutes: 6, author: 'the data team', featured: false, glyph: '☾',
    body: `The fastest way to evaluate an AI vendor isn't their demo — it's their answers to boring questions. GDPR questions especially, because they force precision about what actually happens to your data. Vague answers to precise questions are a finding.

## The seven questions

### 1. Exactly which data reaches the model?

Not "your data is secure" — *which fields, from which systems, in which form?* Good architectures minimise: profiles and aggregates instead of raw rows, masked identifiers instead of names. If the vendor can't produce a data-flow diagram, they haven't drawn one.

### 2. Is our data used for training?

The answer must be a contractual no (or an explicit, separate opt-in) — including for "service improvement," the phrase where training likes to hide.

### 3. Where does inference happen?

Region matters. EU/UK data residency options should be a checkbox conversation, not a custom project. Ask which sub-processors are involved and where *they* run.

### 4. What's the retention story?

Prompts, outputs, logs, embeddings — each has a lifetime. A vendor who knows their retention periods off-hand has thought about it; one who has to check has not.

### 5. How do deletion requests propagate?

When you delete a customer, what happens to the vector store? To cached results? To fine-tuned models that saw their data? "It's complicated" is an honest start — followed by an actual mechanism.

### 6. What can the system leak between users?

Row-level security must hold *through* the AI layer. If user A can prompt their way into user B's numbers, nothing else on this list matters.

### 7. Who's liable when it's wrong?

Hallucinated personal data is still personal data. The contract should say whose problem that is, in numbers.

> Compliance questions are architecture questions wearing a suit. Vendors who've built it right enjoy answering them.

> **How we handle it:** Every Devene AI build starts with a data-flow map and a data-protection review — before the first prompt is written. It's a day of work that saves a quarter of retrofitting. Ask us to walk you through one.`
  }
];

export const siteSettings = {
  email: 'hello@devene.io',
  responseTime: 'within one working day',
  firstCall: '30 minutes, no slides, no sales team',
};
