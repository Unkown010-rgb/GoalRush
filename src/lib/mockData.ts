import { Article, Transfer, LiveScore, LeagueTableRow } from '@/types'

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Fabrizio Romano EXCLUSIVE: Manchester City close in on €85m striker deal',
    slug: 'fabrizio-romano-exclusive-manchester-city-close-85m-striker-deal',
    excerpt:
      'Manchester City are on the verge of completing one of the summer transfer window\'s biggest moves, with negotiations reaching an advanced stage for a €85 million deal that could reshape the Premier League title race.',
    content: `<p>Manchester City are in advanced negotiations to sign one of Europe's most coveted strikers in a deal worth up to €85 million, Fabrizio Romano has exclusively revealed to GoalRush.</p>

    <p>The Citizens have been tracking the player for over six months and have now submitted a formal bid that the selling club are seriously considering. Pep Guardiola has identified the forward as his top priority to replace the goals lost following the departure of key attackers last season.</p>

    <p>"Everything is progressing well. Personal terms have been agreed in principle and we expect an announcement within days," a source close to the negotiations told Romano.</p>

    <p>City's Abu Dhabi ownership has greenlit the expenditure despite growing concerns about Financial Fair Play compliance, with the club's legal team confident they can navigate any potential challenges.</p>

    <h3>What this means for the title race</h3>

    <p>Should the deal go through, Manchester City would have one of the most potent attacks in world football heading into the new campaign. Combined with an already formidable midfield, this could be the decisive signing that tips the balance in their favor once more.</p>

    <p>Liverpool and Arsenal, who are City's chief rivals for the title, have both been monitoring the situation closely. Sources at both clubs suggest they may accelerate their own transfer plans in response.</p>

    <p>The player himself is reported to be "excited" about the prospect of joining the Etihad, having spoken directly with Guardiola on multiple occasions over recent weeks.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
    category: 'Transfers',
    tags: ['Manchester City', 'Transfer', 'Fabrizio Romano', 'Premier League'],
    source: 'GoalRush Exclusive',
    sourceUrl: '#',
    author: 'GoalRush Staff',
    isBreaking: true,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: '2',
    title: "Real Madrid's Vinicius Jr wins Ballon d'Or in record-breaking ceremony",
    slug: 'real-madrid-vinicius-jr-wins-ballon-dor-record-breaking-ceremony',
    excerpt:
      'Vinicius Junior has been crowned the best footballer on the planet, winning the Ballon d\'Or in a record-breaking ceremony that saw him become the first Brazilian to claim the award since Ronaldo in 1997.',
    content: `<p>Vinicius Junior made history at the Théâtre du Châtelet in Paris last night, claiming the prestigious Ballon d'Or award in a ceremony that cemented his status as the undisputed best player in world football.</p>

    <p>The Brazilian forward, who has been instrumental in Real Madrid's continued European dominance, received the golden ball to thunderous applause from the assembled football elite. His victory marks a watershed moment for Brazilian football, ending a 27-year wait since Ronaldo's triumph in 1997.</p>

    <h3>A season of brilliance</h3>

    <p>Vinicius scored 24 goals and registered 19 assists in all competitions for Real Madrid last season, including a spectacular hat-trick in the Champions League semi-final that left opponents utterly bewildered.</p>

    <p>His performances in Madrid's title-winning campaign were characterized by explosive pace, improved finishing, and a maturity that has elevated him beyond mere entertainment into the realm of football's true greats.</p>

    <p>"This award is for Brazil, for Africa, for all the kids who dream big," Vinicius said in an emotional speech that drew a standing ovation. "I dedicate this to my family and to Real Madrid."</p>

    <h3>The reaction</h3>

    <p>Carlo Ancelotti, Madrid's supremely successful coach, was visibly emotional as his star pupil accepted the award. "I always said he would be the best in the world. Tonight proves it," the Italian said.</p>

    <p>Fellow nominees Erling Haaland and Kylian Mbappé were gracious in defeat, with the Norwegian offering warm congratulations on social media shortly after the ceremony concluded.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop',
    category: 'Champions League',
    tags: ['Vinicius Jr', 'Ballon d\'Or', 'Real Madrid', 'Champions League'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Sarah Mitchell',
    isBreaking: false,
    isFeatured: true,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: '3',
    title: 'World Cup 2026: Full group stage draw revealed — England face tough group',
    slug: 'world-cup-2026-full-group-stage-draw-revealed-england-tough-group',
    excerpt:
      'The FIFA World Cup 2026 group stage draw has been completed in New York City, with England drawn into a challenging group alongside France, Argentina, and Morocco that promises to be one of the most competitive in the tournament\'s history.',
    content: `<p>The draw for the 2026 FIFA World Cup, to be hosted jointly by the United States, Canada, and Mexico, was conducted at the Javits Center in New York City, producing a series of mouth-watering group stage clashes that have set football fans worldwide buzzing with anticipation.</p>

    <h3>England's Group of Death</h3>

    <p>Gareth Southgate's England have been drawn into what many are calling "the group of death," facing France, Argentina, and Morocco. With only two teams progressing to the knockout rounds, every point will be precious.</p>

    <p>England captain Harry Kane was philosophical about the draw: "There are no easy games at a World Cup. These are the best teams in the world and we'll need to be at our very best."</p>

    <h3>Other notable groups</h3>

    <p>Brazil face Germany and Spain in an extraordinary Group A that reads like a who's who of football royalty. Portugal and the Netherlands are paired together in Group D, setting up what could be a stunning encounter between Cristiano Ronaldo and a resurgent Dutch side.</p>

    <p>The expanded 48-team format means there are six groups of eight teams, with the top four from each group advancing to the Round of 32. This new structure has drawn mixed reactions from football purists and casual fans alike.</p>

    <p>The tournament kicks off on June 11, 2026, with the opening ceremony at SoFi Stadium in Los Angeles.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&h=450&fit=crop',
    category: 'World Cup',
    tags: ['World Cup 2026', 'England', 'Draw', 'FIFA'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Marcus Thompson',
    isBreaking: true,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
  },
  {
    id: '4',
    title: 'CONTROVERSY: Bukayo Saka involved in tunnel altercation after North London Derby',
    slug: 'controversy-bukayo-saka-tunnel-altercation-north-london-derby',
    excerpt:
      'Shocking scenes unfolded in the Tottenham Hotspur Stadium tunnel after Arsenal\'s 3-2 victory in the North London Derby, with multiple players involved in a heated confrontation that has left the football world divided.',
    content: `<p>The aftermath of Sunday's pulsating North London Derby descended into controversy when footage emerged of a tunnel confrontation involving several players from both Arsenal and Tottenham Hotspur following the Gunners' dramatic 3-2 victory.</p>

    <p>Sources close to the incident have described scenes of "pushing, shoving, and heated verbal exchanges" that required intervention from security personnel and club officials. Bukayo Saka, whose late penalty sealed Arsenal's win, was reportedly at the center of the altercation.</p>

    <h3>The FA's investigation</h3>

    <p>The Football Association has confirmed it is gathering footage and witness statements and is expected to charge multiple players. Arsenal have described the incident as "regrettable" while Tottenham have called for "appropriate action."</p>

    <p>Match referee Stuart Attwell had already administered six yellow cards during the game, with tensions running particularly high after a contentious VAR decision that overturned a Tottenham equalizer in the 89th minute.</p>

    <h3>Social media fallout</h3>

    <p>The incident has ignited fierce debate on social media, with #NorthLondonDerby trending worldwide for over six hours following the game. Pundits have been sharply divided, with some calling for severe punishments and others dismissing it as "part of the game."</p>

    <p>Gary Lineker tweeted: "Whatever happened in that tunnel, it needs to be dealt with firmly. Football's reputation is on the line."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&h=450&fit=crop',
    category: 'Controversies',
    tags: ['Arsenal', 'Tottenham', 'North London Derby', 'Controversy', 'FA Investigation'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'David Okafor',
    isBreaking: true,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
  },
  {
    id: '5',
    title: 'Arsenal secure stunning comeback Champions League semi-final victory',
    slug: 'arsenal-stunning-comeback-champions-league-semi-final-victory',
    excerpt:
      'Arsenal produced one of the great European comeback nights at the Emirates, overturning a 2-0 first-leg deficit to beat Bayern Munich 3-0 and advance to the Champions League final for the first time since 2006.',
    content: `<p>The Emirates Stadium witnessed one of the most extraordinary nights in Arsenal's history as Mikel Arteta's side produced a breathtaking performance to eliminate Bayern Munich 3-2 on aggregate and reach the Champions League final.</p>

    <p>Going into the second leg trailing 2-0 from the first leg in Munich, Arsenal needed a miracle. They got one, with goals from Martin Odegaard (23', 67'), Kai Havertz (51'), and a late Leandro Trossard goal (88') completing a remarkable turnaround.</p>

    <h3>Arteta's tactical masterclass</h3>

    <p>Mikel Arteta set up his team in an aggressive high-press formation that immediately unsettled Bayern. The German giants, so composed in Munich, looked uncertain and disjointed from the opening whistle.</p>

    <p>"We believed. That was the difference tonight," Arteta said in an emotional post-match interview. "From the first minute to the last, we believed."</p>

    <h3>Odegaard's defining night</h3>

    <p>Arsenal captain Martin Odegaard delivered a captain's performance, scoring twice and providing the assist for Havertz's crucial goal. His second-half display, in particular, was of the highest European quality.</p>

    <p>Arsenal will now face either Real Madrid or Inter Milan in the final in Istanbul next month, a fixture that would represent the club's greatest achievement in two decades.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc595dde56?w=800&h=450&fit=crop',
    category: 'Champions League',
    tags: ['Arsenal', 'Champions League', 'Bayern Munich', 'Semi-Final'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'James Harrington',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
  },
  {
    id: '6',
    title: "HISTORY: The complete story of the 1999 Treble — Manchester United's greatest season",
    slug: 'history-complete-story-1999-treble-manchester-united-greatest-season',
    excerpt:
      'Twenty-five years on from football\'s greatest sporting achievement, we revisit Manchester United\'s extraordinary 1998-99 season — a campaign of breathtaking drama, last-gasp victories, and a final that will never be forgotten.',
    content: `<p>It was the season that redefined what was possible in football. The 1998-99 Manchester United campaign remains the gold standard of achievement in English football — a treble of Premier League, FA Cup, and Champions League titles that seemed impossible to achieve but somehow became reality.</p>

    <h3>Building toward history</h3>

    <p>Sir Alex Ferguson had assembled a squad that blended youth and experience in perfect proportion. Peter Schmeichel in goal, Roy Keane driving from midfield, Ryan Giggs weaving magic on the wing, and the telepathic partnership of Andy Cole and Dwight Yorke up front — this was a team built for greatness.</p>

    <p>The Premier League title was secured on the final day against Tottenham, with United overcoming an early Spurs goal to win 2-1 and pip Arsenal to the title by a single point. It was nerve-shredding stuff, but it had become par for the course.</p>

    <h3>The Nou Camp miracle</h3>

    <p>Nothing in football history compares to the night of May 26, 1999, at Camp Nou in Barcelona. United trailed Bayern Munich 1-0 going into stoppage time, seemingly destined for defeat in the Champions League final.</p>

    <p>Then Teddy Sheringham equalized in the 91st minute. Then Solskjaer stabbed home in the 93rd. The planet seemed to stop spinning for a moment. Peter Schmeichel, who had announced his retirement earlier that week, danced on the pitch like a man possessed.</p>

    <p>"Football, bloody hell!" said Ferguson afterward. It remains the most eloquent summary of the sport ever recorded.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&h=450&fit=crop',
    category: 'History',
    tags: ['Manchester United', '1999 Treble', 'History', 'Champions League', 'Premier League'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Robert Collins',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(),
  },
  {
    id: '7',
    title: 'Premier League title race: Liverpool extend lead after Man City draw',
    slug: 'premier-league-title-race-liverpool-extend-lead-man-city-draw',
    excerpt:
      'Liverpool moved five points clear at the top of the Premier League after Manchester City were held to a frustrating 1-1 draw at Everton, with Mohamed Salah\'s brace securing all three points for the Reds against Wolves.',
    content: `<p>The Premier League title race took a decisive turn on Saturday afternoon as Liverpool capitalised on Manchester City's slip to open up a five-point advantage at the summit with seven games remaining.</p>

    <p>Mohamed Salah was once again the man of the moment, scoring twice in a comfortable 3-0 victory over Wolverhampton Wanderers at Anfield. The Egyptian's 28th and 29th league goals of the season moved him clear in the Golden Boot standings and gave Jurgen Klopp's side crucial breathing room.</p>

    <h3>City stumble at Goodison</h3>

    <p>Manchester City, who needed a win to maintain pressure on Liverpool, were twice pegged back by an Everton side fighting for their Premier League survival. Phil Foden opened the scoring in the first half but Abdoulaye Doucoure's equaliser frustrated City who could not find a winner.</p>

    <p>Pep Guardiola was visibly frustrated at full-time: "We need to be better in these kinds of games. We knew what was at stake and we didn't deliver."</p>

    <h3>Liverpool's title credentials</h3>

    <p>Liverpool's form over the past 12 games — 10 wins and 2 draws — has been exemplary. The question now is whether City can close the gap, and whether Arsenal, six points further back in third, can somehow sneak in.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=450&fit=crop',
    category: 'Premier League',
    tags: ['Liverpool', 'Manchester City', 'Premier League', 'Title Race', 'Mohamed Salah'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Chris Parker',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString(),
  },
  {
    id: '8',
    title: 'Barcelona vs Real Madrid: El Clásico ends in stunning 3-3 draw',
    slug: 'barcelona-real-madrid-el-clasico-3-3-draw',
    excerpt:
      'The Camp Nou was treated to an El Clásico for the ages as Barcelona and Real Madrid shared six spectacular goals in a draw that keeps both clubs within touching distance of La Liga leaders Atletico Madrid.',
    content: `<p>El Clásico delivered on every promise on a night that had 99,000 spectators at Camp Nou on their feet for 90 breathless minutes. Six goals, two VAR controversies, and a performance from Jude Bellingham that drew gasps of admiration even from partisan Barcelona fans.</p>

    <p>Robert Lewandowski opened the scoring with a clinical finish before Bellingham equalized spectacularly with a long-range effort that left Ter Stegen rooted to the spot. Pedri's curling effort gave Barça the lead again only for Vinicius to bring Madrid level before half-time.</p>

    <h3>A second half of drama</h3>

    <p>If the first half was good, the second was extraordinary. Gavi restored Barcelona's lead with a diving header before Kylian Mbappé, looking every inch a Galáctico, swept home a 89th-minute equalizer that silenced the Camp Nou and prompted mayhem in the away end.</p>

    <p>Both managers were philosophical about the draw. "When you score three goals, you expect to win," said Hansi Flick. "But Madrid are always dangerous."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=450&fit=crop',
    category: 'La Liga',
    tags: ['Barcelona', 'Real Madrid', 'El Clasico', 'La Liga', 'Vinicius', 'Bellingham'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Carlos Martinez',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
  },
  {
    id: '9',
    title: 'Erling Haaland breaks Premier League scoring record with 40th goal of the season',
    slug: 'erling-haaland-breaks-premier-league-scoring-record-40th-goal',
    excerpt:
      'Erling Haaland etched his name into the Premier League history books by becoming the first player ever to score 40 league goals in a single season, surpassing the records of Mohamed Salah and Andy Cole.',
    content: `<p>The inevitable happened on Saturday afternoon when Erling Haaland converted a second-half penalty at Selhurst Park to become the most prolific scorer in a single Premier League season, his 40th goal surpassing the records of Salah (2017-18) and Cole/Shearer (1994-95).</p>

    <p>Haaland, who has also contributed 12 assists this campaign, celebrated by pointing to the sky in his trademark style before being mobbed by teammates who understand they are witnessing something truly historic.</p>

    <p>"I don't really think about records," he said afterward in typically understated fashion. "I just try to score goals. If records happen, they happen."</p>

    <h3>The anatomy of a record</h3>

    <p>Haaland's goals have come in every conceivable manner — headers, tap-ins, long-range efforts, and penalties. His movement is devastating, his finishing ice-cold, and his physique seemingly tailor-made for the physicality of the Premier League.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=450&fit=crop',
    category: 'Premier League',
    tags: ['Erling Haaland', 'Manchester City', 'Premier League', 'Goals Record'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Tom Davies',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(),
  },
  {
    id: '10',
    title: 'Champions League draw: Arsenal vs Real Madrid, Liverpool vs Barcelona in QF',
    slug: 'champions-league-draw-arsenal-real-madrid-liverpool-barcelona-qf',
    excerpt:
      'The UEFA Champions League quarter-final draw produced a stunning all-British clash with a European dimension as Arsenal face Real Madrid while Liverpool are pitted against Barcelona in a repeat of the 2019 semi-finals.',
    content: `<p>UEFA's draw for the Champions League quarter-finals produced the blockbuster ties that fans had been dreaming of, with English clubs facing the Spanish giants in what promises to be an extraordinary double-header over two legs.</p>

    <p>Arsenal, who eliminated Bayern Munich in the last 16, will face the holders Real Madrid, while Liverpool — who beat Dortmund — are set for a rematch of their famous 2019 semi-final encounters against Barcelona.</p>

    <h3>Arsenal vs Real Madrid</h3>

    <p>This tie captures the imagination like few others. Arsenal's young, hungry side against the most decorated club in European football history. Mikel Arteta against Carlo Ancelotti — youth and ambition versus experience and pedigree.</p>

    <h3>Liverpool vs Barcelona</h3>

    <p>The ghosts of Anfield 2019 will hover over this tie. Liverpool's miraculous 4-0 comeback victory from 3-0 down remains one of the greatest nights in Champions League history, and fans of both clubs will be remembering it keenly.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1540474893-8e9b5d5e1e9c?w=800&h=450&fit=crop',
    category: 'Champions League',
    tags: ['Champions League', 'Arsenal', 'Real Madrid', 'Liverpool', 'Barcelona'],
    source: 'UEFA Official',
    sourceUrl: '#',
    author: 'UEFA Press',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
  {
    id: '11',
    title: 'Kylian Mbappé scores hat-trick on Real Madrid debut to silence critics',
    slug: 'kylian-mbappe-hat-trick-real-madrid-debut-silence-critics',
    excerpt:
      'Kylian Mbappé answered every question about his ability to adapt to La Liga with a sensational hat-trick on his competitive Real Madrid debut, leaving the Santiago Bernabeu crowd in raptures.',
    content: `<p>There had been whispers of doubt, suggestions the Paris Saint-Germain star would struggle to impose himself in a team of superstars, questions about whether the move was right for both player and club. Kylian Mbappé answered all of them in 90 extraordinary minutes.</p>

    <p>Three goals — a clinical finish after 12 minutes, a breathtaking solo effort in the second half, and a late penalty — announced his arrival at the Bernabeu in the most emphatic way imaginable.</p>

    <p>The crowd chanted his name from the 50th minute onward. By the final whistle, they were treating him as if he'd been there for years.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1606933759779-d1e7d5a3cc61?w=800&h=450&fit=crop',
    category: 'La Liga',
    tags: ['Kylian Mbappé', 'Real Madrid', 'La Liga', 'Hat-Trick'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Elena Rodriguez',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
  },
  {
    id: '12',
    title: 'Transfer EXCLUSIVE: Chelsea agree £72m deal for Sporting CP midfielder',
    slug: 'transfer-exclusive-chelsea-agree-72m-deal-sporting-cp-midfielder',
    excerpt:
      'Chelsea have agreed a £72 million fee with Sporting CP for their highly-rated midfielder, with the player set to undergo a medical at Cobham training ground next week in Todd Boehly\'s latest major investment.',
    content: `<p>Chelsea\'s prolific transfer activity shows no sign of slowing as the club have reached an agreement with Sporting CP for the transfer of their dynamic central midfielder, GoalRush can exclusively reveal.</p>

    <p>The deal, worth £72 million rising to £85 million with add-ons, will see the Portuguese international join a midfield already containing Enzo Fernandez, Moises Caicedo, and Conor Gallagher.</p>

    <p>Manager Mauricio Pochettino has been pushing hard for the addition, believing the player's energy and creative passing will add a new dimension to Chelsea's midfield options.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1550183200-02e9aeecde6b?w=800&h=450&fit=crop',
    category: 'Transfers',
    tags: ['Chelsea', 'Transfer', 'Sporting CP', 'Premier League'],
    source: 'GoalRush Exclusive',
    sourceUrl: '#',
    author: 'GoalRush Staff',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
  },
  {
    id: '13',
    title: "Penalty drama: England beat Germany on spot-kicks to reach Euro final",
    slug: 'penalty-drama-england-beat-germany-spot-kicks-euro-final',
    excerpt:
      'England ended their penalty shootout curse in the most dramatic fashion, beating Germany 4-2 on penalties after a 1-1 draw to reach the European Championship final and send a nation into delirium.',
    content: `<p>The years of heartbreak, the memories of Turin 1990 and Wembley 1996, the pain of Moscow 2018 — all of it washed away in one glorious, cathartic moment as England became penalty shootout winners at a major tournament for the first time since... well, ever.</p>

    <p>Jordan Pickford, the hero of the shootout, saved brilliantly from Toni Kroos and Thomas Müller as England converted their four kicks coolly. When substitute Jarrod Bowen swept home the winning penalty, the players' celebration was a release of decades of hurt.</p>

    <h3>England's journey</h3>

    <p>It was not always pretty. England rode their luck at various points in the tournament, and the German match required a 94th-minute Jude Bellingham equalizer to force extra time after Manuel Neuer denied Saka three times in normal time.</p>

    <p>But they're in the final, and that is all that matters.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=450&fit=crop',
    category: 'World Cup',
    tags: ['England', 'Germany', 'Euros', 'Penalty Shootout'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Andrew Hastings',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 40).toISOString(),
  },
  {
    id: '14',
    title: 'Atletico Madrid handed 3-year European ban over FFP violations',
    slug: 'atletico-madrid-3-year-european-ban-ffp-violations',
    excerpt:
      'UEFA has handed Atletico Madrid a three-year ban from European competition after finding the Spanish club guilty of multiple Financial Fair Play violations dating back to 2020, in a ruling that has sent shockwaves through La Liga.',
    content: `<p>UEFA's Club Financial Control Body (CFCB) has delivered a landmark ruling against Atletico Madrid, banning the Spanish club from European competition for three years following a comprehensive investigation into FFP violations.</p>

    <p>The ruling, which Atletico immediately announced they would appeal, covers alleged breaches during the period 2020-2023 and includes findings of irregular player payments, undisclosed third-party ownership arrangements, and falsified financial reporting.</p>

    <h3>Diego Simeone's response</h3>

    <p>Manager Diego Simeone was visibly shaken in his press conference: "This club, these players — they deserve to be in Europe. We will fight this."</p>

    <p>The Spanish Football Federation has also expressed surprise at the ruling's severity, with La Liga releasing a statement promising to "stand by our clubs."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1552831388-6a0b3575b32a?w=800&h=450&fit=crop',
    category: 'Controversies',
    tags: ['Atletico Madrid', 'UEFA', 'FFP', 'European Ban', 'La Liga'],
    source: 'UEFA Official',
    sourceUrl: '#',
    author: 'Lucia Santos',
    isBreaking: true,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
  {
    id: '15',
    title: "Pep Guardiola signs new 3-year Man City contract, calls it 'last chapter'",
    slug: 'pep-guardiola-signs-new-3-year-man-city-contract-last-chapter',
    excerpt:
      'Pep Guardiola has committed his future to Manchester City by signing a new three-year contract, but hinted that this will be his final managerial role as he prepares for what he called "the last chapter of my coaching career."',
    content: `<p>Manchester City announced Thursday that Pep Guardiola has signed a new three-year contract extension that will keep him at the Etihad Stadium until 2027, ending months of speculation about the Spaniard's future.</p>

    <p>In an interview accompanying the announcement, the 53-year-old coach was characteristically philosophical about what the extension means: "This club has given me everything. My family is happy here. The players inspire me every day. When that changes, I will know it's time to go."</p>

    <p>City chairman Khaldoon Al Mubarak described Guardiola as "the greatest coach in the history of the game" in an effusive statement that reflects the club's enormous gratitude for a period of unprecedented domestic success.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=450&fit=crop',
    category: 'Premier League',
    tags: ['Pep Guardiola', 'Manchester City', 'Contract', 'Premier League'],
    source: 'Manchester City FC',
    sourceUrl: '#',
    author: 'City Correspondent',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 52).toISOString(),
  },
  {
    id: '16',
    title: 'HISTORY: Pelé vs Maradona — Who truly was the greatest of all time?',
    slug: 'history-pele-vs-maradona-who-truly-was-the-greatest-of-all-time',
    excerpt:
      'The eternal debate of football — Pelé or Maradona? On the 50th anniversary of Brazil\'s 1970 World Cup triumph, we revisit the evidence, the statistics, the moments of genius, and the cultural impact of two men who transcended sport.',
    content: `<p>Football has always loved a debate, and no debate has proven more enduring than the question of whether Pelé or Diego Maradona deserves the ultimate title: Greatest of All Time.</p>

    <h3>The case for Pelé</h3>

    <p>Three World Cups. 77 goals for Brazil. Over 1,000 career goals. A grace, power, and athleticism that was decades ahead of his time. Pelé's dominance spanned nearly two decades and two continents, and he achieved his greatness in an era when defenders were permitted to commit near-assault on attackers.</p>

    <h3>The case for Maradona</h3>

    <p>The Hand of God. The Goal of the Century. Napoli's championship years. A World Cup won almost single-handedly in 1986. Maradona achieved things that seemed impossible, driven by a will and a technique that bordered on supernatural. He was also a more complete modern footballer — not just a scorer but a creator.</p>

    <h3>The verdict</h3>

    <p>Perhaps the only honest answer is that it doesn't matter. Both men gave the world joy that transcended football, and the fact that we are still arguing about them half a century later says everything.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=450&fit=crop',
    category: 'History',
    tags: ['Pelé', 'Maradona', 'GOAT', 'History', 'World Cup'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Roberto Silva',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 58).toISOString(),
  },
  {
    id: '17',
    title: 'Newcastle United confirm £95m signing of Inter Milan midfielder',
    slug: 'newcastle-united-confirm-95m-signing-inter-milan-midfielder',
    excerpt:
      'Newcastle United have shattered their transfer record by completing the £95 million signing of Inter Milan\'s outstanding midfielder, announcing the deal as a "statement of our ambitions" as they push for Champions League qualification.',
    content: `<p>Newcastle United have completed the most expensive signing in their history, spending £95 million to bring Inter Milan's Italian international midfielder to St James' Park, the club confirmed on Thursday morning.</p>

    <p>The deal, which was six months in the making, represents a statement of intent from the Saudi-backed club as they seek to establish themselves among Europe's elite. The player signed a five-year contract and will wear the number 8 shirt.</p>

    <p>Manager Eddie Howe was jubilant: "He is exactly the type of player we've been looking for — technically exceptional, physically commanding, and a real winner."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1568659358539-5c8a8c68be82?w=800&h=450&fit=crop',
    category: 'Transfers',
    tags: ['Newcastle United', 'Transfer', 'Inter Milan', 'Premier League'],
    source: 'Newcastle United FC',
    sourceUrl: '#',
    author: 'NUFC Press',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 64).toISOString(),
  },
  {
    id: '18',
    title: 'Bundesliga: Bayer Leverkusen edge closer to historic unbeaten title',
    slug: 'bundesliga-bayer-leverkusen-edge-closer-historic-unbeaten-title',
    excerpt:
      'Bayer Leverkusen took another giant step toward an unprecedented unbeaten Bundesliga season with a comprehensive 3-0 victory over Borussia Dortmund that left rivals and pundits alike struggling to find superlatives.',
    content: `<p>Xabi Alonso's Bayer Leverkusen are on the verge of completing one of the most remarkable seasons in European football history. A 3-0 demolition of Borussia Dortmund at the BayArena extended their unbeaten league run to 29 games, with five matches remaining.</p>

    <p>Goals from Granit Xhaka, Florian Wirtz, and a stunning Alejandro Grimaldo free-kick were the highlights of a display that had even the opposition supporters applauding.</p>

    <p>"We are a team, not individuals," Alonso said with characteristic humility. "Everyone knows their role and everyone fulfils it."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1547519800-6c0a640a2eb6?w=800&h=450&fit=crop',
    category: 'History',
    tags: ['Bayer Leverkusen', 'Bundesliga', 'Xabi Alonso', 'Unbeaten'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Hans Mueller',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 70).toISOString(),
  },
  {
    id: '19',
    title: "Juventus linked with shock move for Tottenham's Son Heung-min",
    slug: 'juventus-linked-shock-move-tottenham-son-heung-min',
    excerpt:
      'Juventus are exploring the possibility of signing Tottenham Hotspur captain Son Heung-min as the Serie A giants look to bolster their attacking options, according to reports in Italy.',
    content: `<p>Italian outlet Corriere dello Sport has reported that Juventus have made inquiries about the availability of Son Heung-min, who is entering the final year of his contract at Tottenham Hotspur.</p>

    <p>The South Korean captain, 32, has been one of Spurs' most consistent performers over the past decade and a potential free transfer next summer represents enormous value for a club of Juventus's stature.</p>

    <p>Tottenham's new manager has reportedly assured Son that he is part of his plans, but with no contract extension offer forthcoming, the player's future remains genuinely uncertain.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=800&h=450&fit=crop',
    category: 'Transfers',
    tags: ['Juventus', 'Son Heung-min', 'Tottenham', 'Transfer Rumour'],
    source: 'Corriere dello Sport',
    sourceUrl: '#',
    author: 'Marco Ferrari',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 76).toISOString(),
  },
  {
    id: '20',
    title: "Lionel Messi announces retirement from international football after Copa América",
    slug: 'lionel-messi-announces-retirement-international-football-copa-america',
    excerpt:
      'Lionel Messi has confirmed he will retire from international football following Argentina\'s successful Copa América defense, ending a 20-year international career that included the 2022 World Cup triumph.',
    content: `<p>In an announcement that brought tears to football fans around the world, Lionel Messi confirmed after Argentina's Copa América final victory that he will retire from the national team, bringing down the curtain on one of sport's most extraordinary careers.</p>

    <p>"This Copa América is my last with Argentina," Messi said at the post-match ceremony, his voice breaking with emotion. "It is the right moment. I want to be remembered at my best."</p>

    <p>Messi ends his international career with 104 goals, two Copa América titles, an Olympic gold medal, and — most importantly to him — the 2022 World Cup that had so long eluded him.</p>

    <p>President of Argentina Milei declared Monday a national holiday. In Buenos Aires, spontaneous celebrations began immediately and continued through the night.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=800&h=450&fit=crop',
    category: 'World Cup',
    tags: ['Lionel Messi', 'Argentina', 'Retirement', 'Copa América'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Ana Gonzalez',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 82).toISOString(),
  },
  {
    id: '21',
    title: "La Liga: Atletico Madrid's Griezmann fires them into third with late winner",
    slug: 'la-liga-atletico-madrid-griezmann-fires-third-late-winner',
    excerpt:
      'Antoine Griezmann struck a stoppage-time winner to give Atletico Madrid a crucial 2-1 victory over Villarreal that moves them into third place in La Liga, keeping alive their hopes of a Champions League place.',
    content: `<p>The Wanda Metropolitano erupted in the 94th minute as Antoine Griezmann, Atletico Madrid's talismanic Frenchman, curled a sublime right-footed effort into the top corner to secure all three points against stubborn Villarreal opponents.</p>

    <p>It was Griezmann's 19th La Liga goal of the season and perhaps his most important — moving Atletico into the Champions League qualification spots with five games to play.</p>

    <p>Manager Diego Simeone pumped his fist toward the crowd in celebration. "Griezmann is the best forward in Spain right now. Nobody questions that after tonight."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=450&fit=crop',
    category: 'La Liga',
    tags: ['Atletico Madrid', 'Griezmann', 'La Liga', 'Villarreal'],
    source: 'GoalRush',
    sourceUrl: '#',
    author: 'Pedro Alvarez',
    isBreaking: false,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 90).toISOString(),
  },
  {
    id: '22',
    title: "Ten Hag sacked: Manchester United appoint Thomas Tuchel as new manager",
    slug: 'ten-hag-sacked-manchester-united-appoint-thomas-tuchel-manager',
    excerpt:
      'Manchester United have parted ways with Erik ten Hag after a disappointing start to the Premier League season and immediately confirmed the appointment of Thomas Tuchel as his successor on a three-year deal.',
    content: `<p>Manchester United ended Erik ten Hag's reign as manager on Tuesday morning, with the board unanimously deciding that a change was necessary after United's worst start to a Premier League season in 30 years.</p>

    <p>Thomas Tuchel, who had been out of work since leaving Bayern Munich, was confirmed as his successor just hours later in a move that had clearly been planned well in advance. The German signed a three-year deal understood to be worth £15 million per year.</p>

    <p>"Thomas Tuchel is one of the best managers in the world," said United co-owner Sir Jim Ratcliffe. "His pedigree speaks for itself — Champions League winner, FA Cup winner, Bundesliga winner. He is the right man to take this club forward."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=800&h=450&fit=crop',
    category: 'Premier League',
    tags: ['Manchester United', 'Thomas Tuchel', 'Erik ten Hag', 'Manager', 'Premier League'],
    source: 'Manchester United FC',
    sourceUrl: '#',
    author: 'MUFC Correspondent',
    isBreaking: true,
    isFeatured: false,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
  },
]

export const mockTransfers: Transfer[] = [
  {
    id: 't1',
    playerName: 'Victor Osimhen',
    fromClub: 'Napoli',
    toClub: 'Chelsea',
    fee: '€120m',
    status: 'confirmed',
    league: 'Premier League',
    nationality: '🇳🇬',
    source: 'Fabrizio Romano',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 't2',
    playerName: 'Florian Wirtz',
    fromClub: 'Bayer Leverkusen',
    toClub: 'Manchester City',
    fee: '€150m',
    status: 'rumour',
    league: 'Premier League',
    nationality: '🇩🇪',
    source: 'Sky Sports',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: 't3',
    playerName: 'Benjamin Sesko',
    fromClub: 'RB Leipzig',
    toClub: 'Arsenal',
    fee: '€65m',
    status: 'confirmed',
    league: 'Premier League',
    nationality: '🇸🇮',
    source: 'Fabrizio Romano',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
  },
  {
    id: 't4',
    playerName: 'Leny Yoro',
    fromClub: 'Lille',
    toClub: 'Manchester United',
    fee: '€62m',
    status: 'completed',
    league: 'Premier League',
    nationality: '🇫🇷',
    source: 'L\'Equipe',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
  },
  {
    id: 't5',
    playerName: 'Jamal Musiala',
    fromClub: 'Bayern Munich',
    toClub: 'Liverpool',
    fee: '€130m',
    status: 'rumour',
    league: 'Premier League',
    nationality: '🇩🇪',
    source: 'Bild',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString(),
  },
  {
    id: 't6',
    playerName: 'Riccardo Calafiori',
    fromClub: 'Bologna',
    toClub: 'Arsenal',
    fee: '€45m',
    status: 'completed',
    league: 'Premier League',
    nationality: '🇮🇹',
    source: 'Fabrizio Romano',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 't7',
    playerName: 'Goncalo Inácio',
    fromClub: 'Sporting CP',
    toClub: 'Tottenham Hotspur',
    fee: '€50m',
    status: 'rumour',
    league: 'Premier League',
    nationality: '🇵🇹',
    source: 'A Bola',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
  },
  {
    id: 't8',
    playerName: 'Mikel Merino',
    fromClub: 'Real Sociedad',
    toClub: 'Arsenal',
    fee: '€32m',
    status: 'completed',
    league: 'Premier League',
    nationality: '🇪🇸',
    source: 'Fabrizio Romano',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
  },
  {
    id: 't9',
    playerName: 'Nico Williams',
    fromClub: 'Athletic Bilbao',
    toClub: 'Barcelona',
    fee: '€58m',
    status: 'rumour',
    league: 'La Liga',
    nationality: '🇪🇸',
    source: 'Sport',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 42).toISOString(),
  },
  {
    id: 't10',
    playerName: 'Pedro Neto',
    fromClub: 'Wolverhampton',
    toClub: 'Chelsea',
    fee: '€54m',
    status: 'completed',
    league: 'Premier League',
    nationality: '🇵🇹',
    source: 'BBC Sport',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
  },
  {
    id: 't11',
    playerName: 'Federico Chiesa',
    fromClub: 'Juventus',
    toClub: 'Liverpool',
    fee: '€12m',
    status: 'completed',
    league: 'Premier League',
    nationality: '🇮🇹',
    source: 'Fabrizio Romano',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 58).toISOString(),
  },
  {
    id: 't12',
    playerName: 'Rayan Cherki',
    fromClub: 'Lyon',
    toClub: 'Borussia Dortmund',
    fee: '€35m',
    status: 'confirmed',
    league: 'Bundesliga',
    nationality: '🇫🇷',
    source: 'L\'Equipe',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 66).toISOString(),
  },
  {
    id: 't13',
    playerName: 'Sandro Tonali',
    fromClub: 'Newcastle United',
    toClub: 'AC Milan',
    fee: '€70m',
    status: 'rumour',
    league: 'Serie A',
    nationality: '🇮🇹',
    source: 'Gazzetta dello Sport',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
  },
  {
    id: 't14',
    playerName: 'Dani Olmo',
    fromClub: 'RB Leipzig',
    toClub: 'Barcelona',
    fee: '€55m',
    status: 'completed',
    league: 'La Liga',
    nationality: '🇪🇸',
    source: 'Fabrizio Romano',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 80).toISOString(),
  },
  {
    id: 't15',
    playerName: 'Jonathan David',
    fromClub: 'Lille',
    toClub: 'Real Madrid',
    fee: 'Free Transfer',
    status: 'rumour',
    league: 'La Liga',
    nationality: '🇨🇦',
    source: 'Marca',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 88).toISOString(),
  },
]

export const mockLiveScores: LiveScore[] = [
  {
    id: 'ls1',
    homeTeam: 'Arsenal',
    awayTeam: 'Manchester City',
    homeScore: 2,
    awayScore: 1,
    minute: 67,
    status: 'live',
    competition: 'Premier League',
  },
  {
    id: 'ls2',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeScore: 1,
    awayScore: 1,
    minute: 45,
    status: 'live',
    competition: 'La Liga',
  },
  {
    id: 'ls3',
    homeTeam: 'Liverpool',
    awayTeam: 'Chelsea',
    homeScore: 3,
    awayScore: 0,
    minute: 90,
    status: 'finished',
    competition: 'Premier League',
  },
  {
    id: 'ls4',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    homeScore: 2,
    awayScore: 2,
    minute: 78,
    status: 'live',
    competition: 'Bundesliga',
  },
  {
    id: 'ls5',
    homeTeam: 'Inter Milan',
    awayTeam: 'Juventus',
    homeScore: 1,
    awayScore: 0,
    minute: 90,
    status: 'finished',
    competition: 'Serie A',
  },
  {
    id: 'ls6',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    status: 'upcoming',
    competition: 'Ligue 1',
  },
  {
    id: 'ls7',
    homeTeam: 'Manchester United',
    awayTeam: 'Tottenham',
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    status: 'upcoming',
    competition: 'Premier League',
  },
  {
    id: 'ls8',
    homeTeam: 'Atletico Madrid',
    awayTeam: 'Sevilla',
    homeScore: 2,
    awayScore: 0,
    minute: 55,
    status: 'live',
    competition: 'La Liga',
  },
]

export const mockLeagueTable: LeagueTableRow[] = [
  { position: 1, team: 'Liverpool', played: 31, won: 22, drawn: 6, lost: 3, gf: 72, ga: 30, gd: 42, points: 72, form: ['W', 'W', 'W', 'D', 'W'] },
  { position: 2, team: 'Manchester City', played: 31, won: 20, drawn: 5, lost: 6, gf: 68, ga: 35, gd: 33, points: 65, form: ['W', 'D', 'W', 'L', 'D'] },
  { position: 3, team: 'Arsenal', played: 31, won: 19, drawn: 6, lost: 6, gf: 64, ga: 32, gd: 32, points: 63, form: ['W', 'W', 'D', 'W', 'L'] },
  { position: 4, team: 'Aston Villa', played: 31, won: 18, drawn: 4, lost: 9, gf: 58, ga: 44, gd: 14, points: 58, form: ['W', 'L', 'W', 'W', 'W'] },
  { position: 5, team: 'Tottenham', played: 31, won: 15, drawn: 6, lost: 10, gf: 55, ga: 51, gd: 4, points: 51, form: ['D', 'W', 'L', 'W', 'D'] },
  { position: 6, team: 'Chelsea', played: 31, won: 14, drawn: 8, lost: 9, gf: 58, ga: 52, gd: 6, points: 50, form: ['W', 'D', 'W', 'D', 'L'] },
  { position: 7, team: 'Newcastle', played: 31, won: 14, drawn: 5, lost: 12, gf: 53, ga: 48, gd: 5, points: 47, form: ['L', 'W', 'D', 'W', 'W'] },
  { position: 8, team: 'Manchester United', played: 31, won: 12, drawn: 6, lost: 13, gf: 35, ga: 49, gd: -14, points: 42, form: ['L', 'D', 'L', 'W', 'L'] },
  { position: 9, team: 'West Ham', played: 31, won: 11, drawn: 7, lost: 13, gf: 42, ga: 58, gd: -16, points: 40, form: ['D', 'L', 'W', 'D', 'W'] },
  { position: 10, team: 'Brighton', played: 31, won: 10, drawn: 9, lost: 12, gf: 45, ga: 50, gd: -5, points: 39, form: ['W', 'D', 'D', 'L', 'W'] },
  { position: 11, team: 'Fulham', played: 31, won: 10, drawn: 8, lost: 13, gf: 43, ga: 52, gd: -9, points: 38, form: ['L', 'W', 'D', 'D', 'L'] },
  { position: 12, team: 'Crystal Palace', played: 31, won: 9, drawn: 8, lost: 14, gf: 33, ga: 48, gd: -15, points: 35, form: ['D', 'L', 'W', 'D', 'L'] },
  { position: 13, team: 'Wolves', played: 31, won: 8, drawn: 9, lost: 14, gf: 36, ga: 55, gd: -19, points: 33, form: ['L', 'D', 'W', 'L', 'D'] },
  { position: 14, team: 'Brentford', played: 31, won: 9, drawn: 5, lost: 17, gf: 41, ga: 58, gd: -17, points: 32, form: ['W', 'L', 'L', 'D', 'W'] },
  { position: 15, team: 'Nottm Forest', played: 31, won: 8, drawn: 7, lost: 16, gf: 37, ga: 56, gd: -19, points: 31, form: ['L', 'D', 'D', 'W', 'L'] },
  { position: 16, team: 'Bournemouth', played: 31, won: 8, drawn: 6, lost: 17, gf: 39, ga: 60, gd: -21, points: 30, form: ['W', 'L', 'L', 'D', 'W'] },
  { position: 17, team: 'Everton', played: 31, won: 7, drawn: 7, lost: 17, gf: 30, ga: 55, gd: -25, points: 28, form: ['D', 'D', 'L', 'L', 'D'] },
  { position: 18, team: 'Luton Town', played: 31, won: 6, drawn: 5, lost: 20, gf: 35, ga: 68, gd: -33, points: 23, form: ['L', 'L', 'D', 'L', 'W'] },
  { position: 19, team: 'Burnley', played: 31, won: 4, drawn: 7, lost: 20, gf: 28, ga: 65, gd: -37, points: 19, form: ['L', 'D', 'L', 'D', 'L'] },
  { position: 20, team: 'Sheffield Utd', played: 31, won: 3, drawn: 5, lost: 23, gf: 25, ga: 83, gd: -58, points: 14, form: ['L', 'L', 'L', 'D', 'L'] },
]

export const breakingNewsItems = [
  'BREAKING: Manchester City agree €85m deal for top striker — Fabrizio Romano',
  'BREAKING: World Cup 2026 group stage draw complete — England in "group of death"',
  'BREAKING: Atletico Madrid handed 3-year European ban for FFP violations',
  'BREAKING: Thomas Tuchel confirmed as Manchester United manager on 3-year deal',
  'LIVE: Arsenal 2-1 Manchester City (67 min) — Havertz with the crucial second goal',
  'TRANSFER: Victor Osimhen to Chelsea for €120m CONFIRMED by both clubs',
  'EXCLUSIVE: Vinicius Jr extension talks at Real Madrid enter final stages',
  'BREAKING: Euro 2024 final — England vs Spain set for Berlin showdown',
]

export const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', flag: '🇳🇬' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', flag: '🇧🇷' },
  { code: 'ARS', symbol: '$', name: 'Argentine Peso', flag: '🇦🇷' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won', flag: '🇰🇷' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', flag: '🇲🇽' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', flag: '🇸🇦' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', flag: '🇦🇪' },
  { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound', flag: '🇪🇬' },
  { code: 'GHS', symbol: '₵', name: 'Ghanaian Cedi', flag: '🇬🇭' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling', flag: '🇰🇪' },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', flag: '🇸🇪' },
  { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', flag: '🇳🇴' },
  { code: 'DKK', symbol: 'kr', name: 'Danish Krone', flag: '🇩🇰' },
  { code: 'PLN', symbol: 'zł', name: 'Polish Złoty', flag: '🇵🇱' },
  { code: 'TRY', symbol: '₺', name: 'Turkish Lira', flag: '🇹🇷' },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', flag: '🇮🇩' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso', flag: '🇵🇭' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht', flag: '🇹🇭' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', flag: '🇲🇾' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', flag: '🇭🇰' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', flag: '🇳🇿' },
  { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna', flag: '🇨🇿' },
  { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint', flag: '🇭🇺' },
  { code: 'RON', symbol: 'lei', name: 'Romanian Leu', flag: '🇷🇴' },
  { code: 'UAH', symbol: '₴', name: 'Ukrainian Hryvnia', flag: '🇺🇦' },
  { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', flag: '🇮🇱' },
  { code: 'QAR', symbol: 'QR', name: 'Qatari Riyal', flag: '🇶🇦' },
  { code: 'KWD', symbol: 'KD', name: 'Kuwaiti Dinar', flag: '🇰🇼' },
  { code: 'MAD', symbol: 'MAD', name: 'Moroccan Dirham', flag: '🇲🇦' },
  { code: 'CLP', symbol: 'CLP$', name: 'Chilean Peso', flag: '🇨🇱' },
  { code: 'COP', symbol: 'COP$', name: 'Colombian Peso', flag: '🇨🇴' },
  { code: 'PEN', symbol: 'S/', name: 'Peruvian Sol', flag: '🇵🇪' },
  { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee', flag: '🇵🇰' },
  { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka', flag: '🇧🇩' },
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', flag: '🇻🇳' },
  { code: 'DZD', symbol: 'DA', name: 'Algerian Dinar', flag: '🇩🇿' },
  { code: 'TND', symbol: 'DT', name: 'Tunisian Dinar', flag: '🇹🇳' },
  { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc', flag: '🌍' },
  { code: 'ETB', symbol: 'Br', name: 'Ethiopian Birr', flag: '🇪🇹' },
  { code: 'TZS', symbol: 'TSh', name: 'Tanzanian Shilling', flag: '🇹🇿' },
  { code: 'UGX', symbol: 'USh', name: 'Ugandan Shilling', flag: '🇺🇬' },
]

export const mockExchangeRates: Record<string, number> = {
  USD: 1, GBP: 0.79, EUR: 0.92, NGN: 1520, BRL: 5.05, ARS: 897,
  CAD: 1.36, AUD: 1.53, JPY: 149.5, KRW: 1325, INR: 83.1, ZAR: 18.6,
  MXN: 17.1, SAR: 3.75, AED: 3.67, EGP: 30.9, GHS: 12.3, KES: 129,
  CHF: 0.88, SEK: 10.4, NOK: 10.6, DKK: 6.88, PLN: 3.99, TRY: 32.1,
  IDR: 15750, PHP: 56.2, THB: 35.2, MYR: 4.72, SGD: 1.34, HKD: 7.82,
  CNY: 7.24, NZD: 1.63, CZK: 22.9, HUF: 356, RON: 4.58, UAH: 37.9,
  ILS: 3.72, QAR: 3.64, KWD: 0.31, MAD: 10.1, CLP: 940, COP: 3920,
  PEN: 3.72, PKR: 278, BDT: 110, VND: 24500, DZD: 134, TND: 3.12,
  XOF: 604, ETB: 56.4, TZS: 2525, UGX: 3780,
}
