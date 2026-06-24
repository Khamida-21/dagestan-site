/* ====================================================
   ДАГЕСТАН.ТУР — общий скрипт для всех страниц
   ==================================================== */

/* ---------- ДАННЫЕ ---------- */
const TOURS = {
  classic:{
    title:'Классический тур по Дагестану', badge:'Хит', price:'от 32 000 ₽', days:'5 дней', level:'Лёгкий', group:'до 12 чел.',
    img:'tour-classic.jpg', color:'#0C6E6B',
    sub:'Дербент, Сулакский каньон и главные символы республики за одну поездку.',
    program:[
      ['Махачкала — знакомство','Встреча, обзорная по столице, набережная Каспийского моря, первый ужин с дагестанской кухней.'],
      ['Древний Дербент','Крепость Нарын-Кала, старый город, Джума-мечеть и магалы — наследие ЮНЕСКО.'],
      ['Сулакский каньон','Один из глубочайших каньонов мира, смотровые площадки, прогулка на катере.'],
      ['Бархан Сарыкум','Крупнейшая песчаная гора Евразии и Каспийское побережье.'],
      ['Аулы мастеров','Кубачи и возвращение — сувениры, серебро, прощальный обед.']
    ],
    includes:['Транспорт по программе','Проживание 4 ночи','Завтраки и часть обедов','Гид на весь маршрут','Входные билеты','Прогулка на катере']
  },
  mountain:{
    title:'Тур по горным районам Дагестана', badge:'Природа', price:'от 41 000 ₽', days:'6 дней', level:'Средний', group:'до 10 чел.',
    img:'tour-mountain.jpg', color:'#243A36',
    sub:'Высокогорные аулы, заброшенный Гамсутль, водопады и серпантины.',
    program:[
      ['Старт из Махачкалы','Переезд в горы, акклиматизация, обзор маршрута.'],
      ['Гуниб и Гамсутль','Древняя крепость и треккинг к аулу-призраку Гамсутль.'],
      ['Карадахская теснина','Узкое ущелье «Ворота чудес» и Салтинский подземный водопад.'],
      ['Чох и террасы','Старинный аул Чох, каменная архитектура, горные тропы.'],
      ['Водопад Тобот','Хунзахское плато, обрыв и водопады высотой более 70 метров.'],
      ['Возвращение','Спуск, обед в горном кафе, переезд в Махачкалу.']
    ],
    includes:['Внедорожный транспорт','Проживание в гостевых домах','Полный пансион','Опытный горный гид','Треккинговое сопровождение','Страховка']
  },
  gastro:{
    title:'Гастрономический тур', badge:'Вкусно', price:'от 28 000 ₽', days:'4 дня', level:'Лёгкий', group:'до 14 чел.',
    img:'tour-gastro.jpg', color:'#C9783A',
    sub:'Хинкал, чуду, абрикосовые сады и мастер-классы у местных хозяек.',
    program:[
      ['Вкус столицы','Рынок Махачкалы, дегустация сыров, специй и сладостей.'],
      ['Мастер-класс хинкала','Готовим аварский и даргинский хинкал вместе с местной семьёй.'],
      ['Чуду и выпечка','Тонкие пироги чуду с разными начинками, чай с горными травами.'],
      ['Сады и урбеч','Абрикосовые сады, дегустация урбеча и мёда, прощальный стол.']
    ],
    includes:['Все дегустации','3 мастер-класса','Проживание 3 ночи','Сопровождение гида-гастронома','Трансферы','Рецепты с собой']
  }
};

const PLACES = [
  {n:'Дербент и Нарын-Кала',d:'Древнейший город России, крепость и стены — наследие ЮНЕСКО.',c:'#243A36',i:'🏰',img:'place-derbent.jpg'},
  {n:'Сулакский каньон',d:'Один из глубочайших каньонов мира — до 1920 метров.',c:'#0C6E6B',i:'🏞',img:'place-sulak.jpg'},
  {n:'Гамсутль',d:'Заброшенный горный аул-призрак на вершине хребта.',c:'#1B2C29',i:'🏚',img:'place-gamsutl.jpg'},
  {n:'Кубачи',d:'Аул ювелиров и оружейников, родина дагестанского серебра.',c:'#C9783A',i:'💍',img:'place-kubachi.jpg'},
  {n:'Бархан Сарыкум',d:'Крупнейшая песчаная гора Евразии у подножия гор.',c:'#C7A95E',i:'🏜',img:'place-sarykum.jpg'},
  {n:'Карадахская теснина',d:'Узкое ущелье «Ворота чудес» с отвесными стенами.',c:'#243A36',i:'🪨',img:'place-karadakh.jpg'},
  {n:'Салтинский водопад',d:'Единственный подземный водопад Дагестана в пещере.',c:'#0C6E6B',i:'💧',img:'place-saltinsky.jpg'},
  {n:'Хунзах и водопад Тобот',d:'Плато с обрывами и водопадами высотой более 70 метров.',c:'#2FA39B',i:'🌊',img:'place-tobot.jpg'},
  {n:'Гуниб',d:'Историческая крепость и одно из самых солнечных мест Кавказа.',c:'#1B2C29',i:'⛰',img:'place-gunib.jpg'},
  {n:'Самурский лес',d:'Единственный в России лиановый субтропический лес у моря.',c:'#0C6E6B',i:'🌿',img:'place-samur.jpg'},
  {n:'Каспийское море',d:'Пляжи Махачкалы и Каспийска, набережные и закаты.',c:'#2FA39B',i:'🌅',img:'place-caspian.jpg'},
  {n:'Аул Чох',d:'Старинное горное село с уникальной каменной архитектурой.',c:'#243A36',i:'🏘',img:'place-choh.jpg'}
];

const CULTURE = [
  {i:'🗣',t:'30+ языков',b:'Дагестан — самый многоязычный регион России. Здесь говорят более чем на 30 языках, поэтому его называют «горой языков».'},
  {i:'💍',t:'Кубачинское серебро',b:'Аул Кубачи веками славится ювелирами и оружейниками. Их гравировка и чернь по серебру известны по всему миру.'},
  {i:'🧶',t:'Ковры Табасарана',b:'Табасаранские ковры ткут вручную по сей день. Они ценятся за плотность, узор и долговечность.'},
  {i:'🍲',t:'Хинкал',b:'Главное блюдо дагестанской кухни. У каждого народа свой хинкал — аварский, даргинский, кумыкский, лакский.'},
  {i:'🏺',t:'Балхарская керамика',b:'В ауле Балхар женщины лепят посуду из глины без гончарного круга и расписывают её белым орнаментом.'},
  {i:'🪵',t:'Унцукульская насечка',b:'Мастера Унцукуля украшают дерево тончайшей насечкой из серебра и мельхиора — техника передаётся поколениями.'},
  {i:'💃',t:'Лезгинка',b:'Стремительный кавказский танец, ставший символом региона. У каждого народа — свои движения и ритмы.'},
  {i:'🍯',t:'Урбеч',b:'Паста из перетёртых семян льна, абрикосовых косточек или орехов — древняя горская «энергетическая еда».'}
];

const ACTIVITIES = [
  {i:'🚤',n:'Прогулка на катере по Сулаку',d:'Скользите по бирюзовой воде между отвесных стен каньона.',tags:['mountains'],lab:['Горы']},
  {i:'🏊',n:'Пляжный отдых на Каспии',d:'Тёплое море, песчаные пляжи Каспийска и Махачкалы.',tags:['sea'],lab:['Море']},
  {i:'🏰',n:'Экскурсия по Нарын-Кале',d:'Подъём в древнюю крепость Дербента с видом на море.',tags:['history'],lab:['История']},
  {i:'🥾',n:'Треккинг к Гамсутлю',d:'Пеший подъём к легендарному аулу-призраку.',tags:['mountains','extreme'],lab:['Горы','Экстрим']},
  {i:'🪂',n:'Полёт на параплане',d:'Полёт над Хунзахским плато и водопадами.',tags:['extreme','mountains'],lab:['Экстрим','Горы']},
  {i:'🍲',n:'Мастер-класс по хинкалу',d:'Готовим традиционное блюдо с местной семьёй.',tags:['food'],lab:['Гастро']},
  {i:'🏺',n:'Гончарная мастерская в Балхаре',d:'Лепка и роспись керамики по старинной технологии.',tags:['history','food'],lab:['История']},
  {i:'🛥',n:'Морская рыбалка',d:'Выход в Каспийское море за уловом с местными рыбаками.',tags:['sea','extreme'],lab:['Море','Экстрим']},
  {i:'🧀',n:'Дегустация сыров и урбеча',d:'Гастрономический тур по рынку Махачкалы.',tags:['food'],lab:['Гастро']},
  {i:'🏜',n:'Восхождение на Сарыкум',d:'Подъём на крупнейший бархан Евразии на рассвете.',tags:['mountains'],lab:['Горы']}
];

const SCHEDULE = [
  {d:'12',m:'Июл',t:'change',title:'Классический тур: перенос старта',desc:'Группа от 12.07 стартует на день позже из-за погодных условий в горах.'},
  {d:'20',m:'Июл',t:'new',title:'Добавлена группа на гастро-тур',desc:'Открыта дополнительная группа гастрономического тура с 20 по 23 июля.'},
  {d:'05',m:'Авг',t:'change',title:'Горный тур: замена локации',desc:'Карадахская теснина заменена на Салтинский водопад из-за уровня воды.'},
  {d:'15',m:'Авг',t:'new',title:'Вечерние выезды на Сулак',desc:'Запущены закатные выезды к каньону по пятницам и субботам.'},
  {d:'01',m:'Сен',t:'change',title:'Изменение времени трансфера',desc:'Утренние трансферы из Махачкалы сдвинуты на 8:00 для всех туров.'}
];

const NEWS = [
  {d:'NEW',m:'2026',title:'Тур «Винодельни и горы»',desc:'Новый маршрут с дегустацией дагестанских вин и коньяков плюс горная программа. Запуск — сентябрь.'},
  {d:'NEW',m:'2026',title:'Зимний Дагестан',desc:'Снежные аулы, горячий чай и заснеженные каньоны. Бронирование на декабрь–февраль уже открыто.'},
  {d:'NEW',m:'2026',title:'Фототур по аулам',desc:'Маршрут для фотографов: лучшее время и точки съёмки Гамсутля, Чоха и Гуниба.'},
  {d:'NEW',m:'2026',title:'Морской уикенд на Каспии',desc:'Короткая программа выходного дня: пляжи, рыбалка и набережные Махачкалы.'}
];

const ARTICLES = [
  {cat:'Гид',title:'7 мест Дагестана, которые стоит увидеть',excerpt:'От Дербента до Гамсутля — маршрут по самым впечатляющим точкам республики.',c:'#0C6E6B',img:'article-1.jpg',
   body:['Дагестан легко перегрузить впечатлениями: на небольшой территории помещаются и море, и пустыня, и высокогорье. Чтобы не растеряться, мы собрали семь мест, с которых стоит начать знакомство.','<b>Дербент</b> — точка отсчёта. Древнейший город России встречает крепостью Нарын-Кала и улочками старого города, спускающимися к Каспию.','<b>Сулакский каньон</b> поражает масштабом: бирюзовая лента реки в глубине почти двухкилометрового ущелья. Лучшее впечатление — прогулка на катере по дну каньона.','<b>Гамсутль</b> — аул-призрак на вершине хребта, до которого нужно подниматься пешком. Тишина и каменные дома без жителей делают это место почти мистическим.','Дополните маршрут барханом Сарыкум, аулом Кубачи, водопадом Тобот и Самурским лесом — и вы увидите Дагестан во всём его контрасте.']},
  {cat:'Кухня',title:'Что попробовать в Дагестане',excerpt:'Хинкал, чуду, урбеч и другие блюда, ради которых стоит приехать.',c:'#C9783A',img:'article-2.jpg',
   body:['Дагестанская кухня — это сытно, просто и невероятно вкусно. Главное правило: не уезжать, не попробовав хинкал.','<b>Хинкал</b> — не путать с грузинскими хинкали. Это кусочки теста, отваренные в бульоне и поданные с мясом, чесночным соусом и наваром. У каждого народа свой вариант.','<b>Чуду</b> — тонкие пироги с начинкой из творога, зелени, мяса или тыквы. Их пекут быстро и едят горячими.','<b>Урбеч</b> — густая паста из перетёртых семян или орехов. Источник энергии горцев и отличный сувенир.','Завершите гастрономическое знакомство абрикосами, горным мёдом и чаем с чабрецом — вкусом дагестанских гор.']},
  {cat:'Советы',title:'Когда ехать в Дагестан',excerpt:'Разбираем сезоны, погоду и что брать с собой в горы и на море.',c:'#243A36',img:'article-3.jpg',
   body:['Дагестан хорош почти круглый год, но у каждого сезона свой характер. Выбор времени зависит от того, что вам важнее — море, горы или комфорт.','<b>Май–июнь</b> — цветущие склоны, мягкая погода и зелень. Идеально для горных маршрутов и фотографий.','<b>Июль–август</b> — пляжный сезон на Каспии и тепло, но в горах может быть жарко. Берите головной убор и воду.','<b>Сентябрь–октябрь</b> — золотая осень, спелые фрукты и комфортная температура. Многие считают это лучшим временем.','В горах погода меняется быстро даже летом, поэтому возьмите тёплую кофту и удобную обувь независимо от сезона.']}
];

/* ---------- ХЕЛПЕРЫ ---------- */
function gradientSvg(color){
  return `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice"><rect width="400" height="200" fill="${color}"/><path d="M0 200 L90 80 L150 140 L230 50 L310 130 L400 80 L400 200 Z" fill="rgba(0,0,0,.25)"/><path d="M0 200 L110 120 L210 170 L400 110 L400 200 Z" fill="rgba(255,255,255,.12)"/></svg>`;
}
/* Картинка поверх градиента: если файла нет — она удалится и останется градиент */
function photo(file){
  return `<img class="photo" src="img/${file}" alt="" loading="lazy" onerror="this.remove()">`;
}
function getParam(name){return new URLSearchParams(location.search).get(name);}
function rub(n){return n.toLocaleString('ru-RU')+' ₽';}

/* ---------- НАВИГАЦИЯ ---------- */
function initNav(){
  const burger=document.querySelector('.burger');
  const links=document.querySelector('.nav-links');
  if(burger&&links) burger.addEventListener('click',()=>links.classList.toggle('open'));
  const page=document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-nav]').forEach(a=>{
    if(a.dataset.nav===page) a.classList.add('active');
  });
}

/* ---------- АНАЛИТИКА (сохраняется между страницами) ---------- */
let stats={};
function loadStats(){try{stats=JSON.parse(localStorage.getItem('dag_stats')||'{}');}catch(e){stats={};}}
function saveStats(){try{localStorage.setItem('dag_stats',JSON.stringify(stats));}catch(e){}}
function track(name){stats[name]=(stats[name]||0)+1;saveStats();renderStats();}
function renderStats(){
  const badge=document.getElementById('an-badge');if(!badge)return;
  const total=Object.values(stats).reduce((a,b)=>a+b,0);
  badge.textContent=total;
  const list=document.getElementById('an-list');
  const entries=Object.entries(stats).sort((a,b)=>b[1]-a[1]);
  list.innerHTML=entries.length
    ? entries.map(([k,v])=>`<div class="an-row"><span>${k}</span><span class="an-c">${v}</span></div>`).join('')
    : '<div class="an-empty">Пока нет данных. Начните взаимодействовать с сайтом.</div>';
}
function toggleAnalytics(){document.getElementById('an-panel').classList.toggle('show');}
function resetAnalytics(){stats={};saveStats();renderStats();}

/* ---------- ТУРЫ ---------- */
function renderTours(){
  const grid=document.getElementById('tours-grid');if(!grid)return;
  grid.innerHTML=Object.entries(TOURS).map(([key,t])=>`
    <a class="card click" href="tour.html?id=${key}" onclick="track('Открыт тур: ${t.title}')">
      <div class="card-img">${gradientSvg(t.color)}${photo(t.img)}<span class="card-badge">${t.badge}</span></div>
      <div class="card-body"><h3>${t.title}</h3><p>${t.sub}</p>
        <div class="card-foot"><span class="price">${t.price}</span><span class="chip-go">Подробнее →</span></div>
      </div>
    </a>`).join('');
}
function renderTourDetail(){
  const box=document.getElementById('tour-detail');if(!box)return;
  const key=getParam('id'); const t=TOURS[key];
  if(!t){box.innerHTML='<div class="section wrap"><a class="back-btn" href="tours.html">← Все туры</a><h2 class="h2">Тур не найден</h2></div>';return;}
  document.title=t.title+' — Дагестан.тур';
  box.innerHTML=`
    <div class="detail-hero bg" style="background-image:url('img/${t.img}')">
      <div class="wrap">
        <a class="back-btn" style="color:var(--brass-soft)" href="tours.html">← Все туры</a>
        <span class="eyebrow" style="color:var(--brass-soft)">${t.badge}</span>
        <h1>${t.title}</h1>
        <p class="sub">${t.sub}</p>
        <div class="meta"><span>📅 <b>${t.days}</b></span><span>📊 Сложность: <b>${t.level}</b></span><span>👥 <b>${t.group}</b></span><span>💳 <b>${t.price}</b></span></div>
      </div>
    </div>
    <div class="section wrap">
      <div class="detail-grid">
        <div>
          <span class="eyebrow">Программа</span>
          <h2 class="h2" style="font-size:1.6rem;margin-bottom:20px">Маршрут по дням</h2>
          ${t.program.map((p,i)=>`<div class="day"><div class="day-no">${i+1}</div><div><h4>${p[0]}</h4><p>${p[1]}</p></div></div>`).join('')}
          <h2 class="h2" style="font-size:1.4rem;margin:34px 0 16px">Что входит в стоимость</h2>
          <ul class="includes">${t.includes.map(i=>`<li>${i}</li>`).join('')}</ul>
        </div>
        <div>
          <div class="sticky-cta">
            <div class="small">Стоимость на человека</div>
            <div class="big">${t.price}</div>
            <div class="small" style="margin-bottom:18px">${t.days} · ${t.level} уровень</div>
            <a class="btn btn-primary btn-block" href="request.html?tour=${encodeURIComponent(t.title)}" onclick="track('Заявка с тура: ${t.title}')">Оставить заявку →</a>
            <a class="btn btn-ghost dark btn-block" href="interactive.html#budget">Рассчитать бюджет</a>
          </div>
        </div>
      </div>
    </div>`;
}

/* ---------- ИНТЕРАКТИВ ---------- */
function openTask(name){
  track('Вкладка интерактива: '+name);
  document.querySelectorAll('.task-tab').forEach(t=>t.classList.toggle('active',t.dataset.task===name));
  document.querySelectorAll('.task-panel').forEach(p=>p.classList.remove('active'));
  const el=document.getElementById('task-'+name); if(el) el.classList.add('active');
}
const answers={};
function pick(btn,q,val){
  track('Ответ в подборе маршрута');
  btn.parentElement.querySelectorAll('.opt').forEach(o=>o.classList.remove('sel'));
  btn.classList.add('sel'); answers[q]=val;
}
function calcRoute(){
  track('Подбор маршрута: расчёт');
  let rec='classic';
  if(answers.q1==='mountains'||answers.q2==='active'||answers.q3==='l')rec='mountain';
  if(answers.q1==='food')rec='gastro';
  if(answers.q1==='history')rec='classic';
  const t=TOURS[rec];
  document.getElementById('rr-title').textContent='Рекомендуем: '+t.title;
  document.getElementById('rr-text').textContent=t.sub+' '+t.days+', '+t.price+'.';
  const btn=document.getElementById('rr-btn'); btn.href='tour.html?id='+rec;
  document.getElementById('route-result').classList.add('show');
}
let comfort=3500,transport=0;
function segPick(btn,type){
  track('Бюджет: выбор параметра');
  btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  const v=+btn.dataset.v;
  if(type==='comfort')comfort=v;else transport=v;
  calcBudget();
}
function toggleAddon(el){track('Бюджет: доп. активность');el.classList.toggle('on');calcBudget();}
function calcBudget(){
  const dEl=document.getElementById('r-days');if(!dEl)return;
  const days=+dEl.value, people=+document.getElementById('r-people').value;
  document.getElementById('b-days').textContent=days;
  document.getElementById('b-people').textContent=people;
  const base=comfort*days*people, trans=transport*days;
  let addon=0;document.querySelectorAll('#task-budget .addon.on').forEach(a=>addon+=+a.dataset.v);
  addon=addon*people;
  const total=base+trans+addon;
  document.getElementById('b-total').textContent=rub(total);
  document.getElementById('b-perp').textContent=people?('≈ '+rub(Math.round(total/people))+' на человека'):'';
  document.getElementById('bl-base').textContent=rub(base);
  document.getElementById('bl-transport').textContent=rub(trans);
  document.getElementById('bl-addon').textContent=rub(addon);
}
function renderCulture(){
  const grid=document.getElementById('culture-grid');if(!grid)return;
  grid.innerHTML=CULTURE.map((c,i)=>`
    <div class="flip" id="flip-${i}" onclick="flipCard(${i})">
      <div class="flip-in">
        <div class="flip-face flip-front"><div class="fi">${c.i}</div><h4>${c.t}</h4><div class="tap">Нажмите →</div></div>
        <div class="flip-face flip-back"><p>${c.b}</p></div>
      </div>
    </div>`).join('');
}
function flipCard(i){track('Культура: переворот карточки');document.getElementById('flip-'+i).classList.toggle('on');}
function renderActivities(filter){
  const list=document.getElementById('act-list');if(!list)return;
  const items=ACTIVITIES.filter(a=>filter==='all'||a.tags.includes(filter));
  list.innerHTML=items.map(a=>`
    <div class="act"><div class="ai">${a.i}</div>
      <div><h4>${a.n}</h4><p>${a.d}</p><div class="tags">${a.lab.map(l=>`<span class="tg">${l}</span>`).join('')}</div></div>
    </div>`).join('')||'<div class="an-empty">Нет активностей по этому фильтру.</div>';
}
function filterAct(btn,f){
  track('Поиск активностей: фильтр');
  document.querySelectorAll('#act-filters .fchip').forEach(c=>c.classList.remove('on'));
  btn.classList.add('on'); renderActivities(f);
}

/* ---------- МЕСТА ---------- */
function renderPlaces(){
  const grid=document.getElementById('places-grid');if(!grid)return;
  grid.innerHTML=PLACES.map(p=>`
    <div class="card">
      <div class="card-img">${gradientSvg(p.c)}${photo(p.img)}<span class="card-icon">${p.i}</span></div>
      <div class="card-body"><h3>${p.n}</h3><p>${p.d}</p></div>
    </div>`).join('');
}

/* ---------- РАСПИСАНИЕ / НОВЫЕ ТУРЫ ---------- */
function renderSchedule(){
  const list=document.getElementById('schedule-list');if(!list)return;
  list.innerHTML=SCHEDULE.map((s,i)=>`
    <div class="row-item" onclick="track('Расписание: ${s.title}');showInfo(${i},'schedule')">
      <div class="row-date"><b>${s.d}</b><span>${s.m}</span></div>
      <div class="row-main"><h4>${s.title}</h4><p>${s.desc}</p></div>
      <span class="row-tag ${s.t==='new'?'tag-new':'tag-change'}">${s.t==='new'?'новое':'изменение'}</span>
    </div>`).join('');
}
function renderNews(){
  const list=document.getElementById('news-list');if(!list)return;
  list.innerHTML=NEWS.map((s,i)=>`
    <div class="row-item" onclick="track('Новый тур: ${s.title}');showInfo(${i},'news')">
      <div class="row-date"><b style="font-size:.85rem;line-height:1.4">${s.d}</b><span>${s.m}</span></div>
      <div class="row-main"><h4>${s.title}</h4><p>${s.desc}</p></div>
      <span class="row-tag tag-new">новинка</span>
    </div>`).join('');
}
function showInfo(i,type){
  const s=(type==='schedule'?SCHEDULE:NEWS)[i];
  alert(s.title+'\n\n'+s.desc);
}

/* ---------- СТАТЬИ ---------- */
function renderArticles(){
  const grid=document.getElementById('articles-grid');if(!grid)return;
  grid.innerHTML=ARTICLES.map((a,i)=>`
    <a class="card click" href="article.html?id=${i}" onclick="track('Открыта статья: ${a.title}')">
      <div class="card-img">${gradientSvg(a.c)}${photo(a.img)}</div>
      <div class="card-body"><span class="cat">${a.cat}</span><h3 style="margin-top:6px">${a.title}</h3><p>${a.excerpt}</p>
        <div class="card-foot"><span class="chip-go">Читать статью →</span></div></div>
    </a>`).join('');
}
function renderArticleDetail(){
  const box=document.getElementById('article-detail');if(!box)return;
  const a=ARTICLES[+getParam('id')];
  if(!a){box.innerHTML='<div class="section wrap"><a class="back-btn" href="articles.html">← Все статьи</a><h2 class="h2">Статья не найдена</h2></div>';return;}
  document.title=a.title+' — Дагестан.тур';
  box.innerHTML=`
    <div class="detail-hero bg" style="background-image:url('img/${a.img}')">
      <div class="wrap">
        <a class="back-btn" style="color:var(--brass-soft)" href="articles.html">← Все статьи</a>
        <span class="eyebrow" style="color:var(--brass-soft)">${a.cat}</span>
        <h1 style="max-width:760px">${a.title}</h1>
      </div>
    </div>
    <div class="section wrap article-body">
      ${a.body.map((p,i)=>`<p class="${i===0?'drop':''}">${p}</p>`).join('')}
      <div style="margin-top:30px"><a class="btn btn-primary" href="request.html" onclick="track('Заявка из статьи')">Хочу в Дагестан →</a></div>
    </div>`;
}

/* ---------- ФОРМЫ ---------- */
function submitForm(formId,okId,label){
  track(label);
  document.getElementById(formId).style.display='none';
  document.getElementById(okId).classList.add('show');
}
function prefillRequest(){
  const sel=document.getElementById('rf-tour'); if(!sel)return;
  const t=getParam('tour');
  if(t){for(const o of sel.options){if(o.value===t||o.text===t){o.selected=true;break;}}}
}

/* ---------- ИНИЦИАЛИЗАЦИЯ ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  loadStats(); initNav(); renderStats();
  renderTours(); renderTourDetail();
  renderPlaces(); renderSchedule(); renderNews();
  renderArticles(); renderArticleDetail();
  if(document.getElementById('culture-grid')){renderCulture();renderActivities('all');calcBudget();}
  prefillRequest();
  // открыть нужную вкладку интерактива по якорю (#budget и т.п.)
  if(document.body.dataset.page==='interactive'){
    const h=location.hash.replace('#',''); if(h) openTask(h);
  }
});
