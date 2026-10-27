const searchForm = document.getElementById("flight-search");
const originSelect = document.getElementById("origin");
const destinationSelect = document.getElementById("destination");
const departInput = document.getElementById("depart-date");
const returnInput = document.getElementById("return-date");
const returnField = document.getElementById("return-field");
const passengerInput = document.getElementById("passengers");
const message = document.getElementById("form-message");
const results = document.getElementById("results");
const flightList = document.getElementById("flight-list");
const languageCopies = {
  ko: {
    pageTitle: "항공권 검색", nav: ["항공권", "숙소"], home: "여행 홈",
    eyebrow: "YOUR NEXT TRIP STARTS HERE", title: "어디로든,<br><span>가볍게 떠나요.</span>", tagline: "떠나고 싶은 곳을 고르면, 여행의 첫 장면이 시작돼요.", photo: "A WINDOW SEAT MOMENT",
    tripType: "여정 유형", tripOptions: ["왕복", "편도"], topLabels: ["탑승 인원", "좌석 등급"], passenger: "탑승 인원", passengerShort: "명", passengerAria: ["탑승 인원 줄이기", "탑승 인원 늘리기"], cabinOptions: ["일반석", "비즈니스"],
    fields: ["출발지", "도착지", "가는 날", "오는 날"], origins: ["서울 (인천) · ICN", "서울 (김포) · GMP", "부산 · PUS", "제주 · CJU"], airportDestinations: ["오사카 · KIX", "도쿄 (하네다) · HND", "후쿠오카 · FUK", "방콕 · BKK", "다낭 · DAD", "제주 · CJU"], swap: "출발지와 도착지 바꾸기", search: "항공권 찾기", hint: "표시되는 항공편과 운임은 화면 확인을 위한 예시입니다.",
    resultsEyebrow: "FLIGHT PICKS", resultsTitle: "검색 결과", sort: "정렬", sortOptions: ["추천순", "낮은 가격순", "짧은 여정순"], disclaimer: "아래 항공편과 가격은 예시 데이터이며, 실제 예약 및 실시간 운임 조회는 제공하지 않습니다.", inspirationEyebrow: "A LITTLE INSPIRATION", inspirationTitle: "요즘 떠나기 좋은 곳", aside: "마음이 가는 곳을 눌러<br>다음 여정을 시작해 보세요.", popularDestinations: ["오사카", "도쿄", "방콕", "다낭"], fareCaption: "왕복 예시", footer: "좋은 여행은 설레는 검색에서부터.",
    searchHeading: (city) => `${city}행 항공편`, hours: "시간", minutes: "분", nonstop: "직항", fare: (count) => `${count}명 · 예시 운임`, select: "선택", selected: "화면 시연용 페이지라 예약은 진행되지 않습니다.", sameAirport: "출발지와 도착지를 다르게 선택해 주세요.", invalidReturn: "오는 날은 가는 날 이후로 선택해 주세요.", cannotSwap: "선택한 공항 조합은 바꿀 수 없어요. 출발지와 도착지를 직접 선택해 주세요.",
    airlines: ["제주항공", "티웨이항공", "대한항공", "에어서울"], cityNames: ["오사카", "도쿄", "후쿠오카", "방콕", "다낭", "제주"]
  },
  en: {
    pageTitle: "Find flights", nav: ["Flights", "Stays"], home: "Travel home",
    eyebrow: "YOUR NEXT TRIP STARTS HERE", title: "Where will you go?<br><span>Let's take off.</span>", tagline: "Pick a place you've been dreaming about and start planning your next trip.", photo: "A WINDOW SEAT MOMENT",
    tripType: "Trip type", tripOptions: ["Round trip", "One way"], topLabels: ["Travelers", "Cabin"], passenger: "Travelers", passengerShort: "people", passengerAria: ["Remove a traveler", "Add a traveler"], cabinOptions: ["Economy", "Business"],
    fields: ["From", "To", "Depart", "Return"], origins: ["Seoul (Incheon) · ICN", "Seoul (Gimpo) · GMP", "Busan · PUS", "Jeju · CJU"], airportDestinations: ["Osaka · KIX", "Tokyo (Haneda) · HND", "Fukuoka · FUK", "Bangkok · BKK", "Da Nang · DAD", "Jeju · CJU"], swap: "Swap departure and destination", search: "Search flights", hint: "Flights and fares shown are examples for display purposes.",
    resultsEyebrow: "FLIGHT PICKS", resultsTitle: "Search results", sort: "Sort", sortOptions: ["Recommended", "Lowest price", "Shortest trip"], disclaimer: "Flights and prices below are sample data. Booking and live fare searches are not available.", inspirationEyebrow: "A LITTLE INSPIRATION", inspirationTitle: "Places to go now", aside: "Choose a place that calls to you<br>and start planning your next trip.", popularDestinations: ["Osaka", "Tokyo", "Bangkok", "Da Nang"], fareCaption: "Round trip from", footer: "Great trips start with a little inspiration.",
    searchHeading: (city) => `Flights to ${city}`, hours: "hr", minutes: "min", nonstop: "Nonstop", fare: (count) => `${count} traveler(s) · sample fare`, select: "Select", selected: "This demo page does not process bookings.", sameAirport: "Choose different departure and destination airports.", invalidReturn: "Your return date must be on or after your departure date.", cannotSwap: "These airports cannot be swapped. Please choose each airport directly.",
    airlines: ["Jeju Air", "T'way Air", "Korean Air", "Air Seoul"], cityNames: ["Osaka", "Tokyo", "Fukuoka", "Bangkok", "Da Nang", "Jeju"]
  },
  zh: {
    pageTitle: "机票搜索", nav: ["机票", "住宿"], home: "旅行主页",
    eyebrow: "下一段旅程，从这里开始", title: "想去哪里？<br><span>现在就出发。</span>", tagline: "选一个想去的地方，开启下一段旅程。", photo: "A WINDOW SEAT MOMENT",
    tripType: "行程类型", tripOptions: ["往返", "单程"], topLabels: ["乘客人数", "舱位"], passenger: "乘客人数", passengerShort: "人", passengerAria: ["减少乘客", "增加乘客"], cabinOptions: ["经济舱", "商务舱"],
    fields: ["出发地", "目的地", "出发日期", "返程日期"], origins: ["首尔（仁川）· ICN", "首尔（金浦）· GMP", "釜山 · PUS", "济州 · CJU"], airportDestinations: ["大阪 · KIX", "东京（羽田）· HND", "福冈 · FUK", "曼谷 · BKK", "岘港 · DAD", "济州 · CJU"], swap: "交换出发地和目的地", search: "搜索机票", hint: "显示的航班和票价仅供页面演示。",
    resultsEyebrow: "精选航班", resultsTitle: "搜索结果", sort: "排序", sortOptions: ["推荐排序", "价格从低到高", "行程时间最短"], disclaimer: "以下航班和价格均为示例数据，不提供实际预订或实时票价查询。", inspirationEyebrow: "旅行灵感", inspirationTitle: "近期热门目的地", aside: "选择心仪的目的地，<br>开启下一段旅程。", popularDestinations: ["大阪", "东京", "曼谷", "岘港"], fareCaption: "往返示例", footer: "美好的旅程，从满怀期待的搜索开始。",
    searchHeading: (city) => `前往${city}的航班`, hours: "小时", minutes: "分钟", nonstop: "直飞", fare: (count) => `${count}人 · 示例票价`, select: "选择", selected: "此演示页面不提供实际预订。", sameAirport: "请选择不同的出发地和目的地。", invalidReturn: "返程日期不能早于出发日期。", cannotSwap: "无法交换这两个机场，请分别选择出发地和目的地。",
    airlines: ["济州航空", "德威航空", "大韩航空", "首尔航空"], cityNames: ["大阪", "东京", "福冈", "曼谷", "岘港", "济州"]
  },
  ja: {
    pageTitle: "航空券検索", nav: ["航空券", "宿泊"], home: "旅行ホーム",
    eyebrow: "次の旅は、ここから始まる", title: "どこへ行こう？<br><span>気軽に出かけよう。</span>", tagline: "行きたい場所を選んで、次の旅を始めましょう。", photo: "A WINDOW SEAT MOMENT",
    tripType: "旅程", tripOptions: ["往復", "片道"], topLabels: ["搭乗人数", "座席クラス"], passenger: "搭乗人数", passengerShort: "名", passengerAria: ["搭乗人数を減らす", "搭乗人数を増やす"], cabinOptions: ["エコノミー", "ビジネス"],
    fields: ["出発地", "目的地", "出発日", "帰着日"], origins: ["ソウル（仁川）· ICN", "ソウル（金浦）· GMP", "釜山 · PUS", "済州 · CJU"], airportDestinations: ["大阪 · KIX", "東京（羽田）· HND", "福岡 · FUK", "バンコク · BKK", "ダナン · DAD", "済州 · CJU"], swap: "出発地と目的地を入れ替える", search: "航空券を検索", hint: "表示される航空便と運賃はサンプルです。",
    resultsEyebrow: "おすすめの航空便", resultsTitle: "検索結果", sort: "並び替え", sortOptions: ["おすすめ順", "価格が安い順", "所要時間が短い順"], disclaimer: "以下の航空便と価格はサンプルです。実際の予約やリアルタイム運賃検索には対応していません。", inspirationEyebrow: "旅のインスピレーション", inspirationTitle: "今おすすめの旅先", aside: "気になる場所を選んで、<br>次の旅を始めましょう。", popularDestinations: ["大阪", "東京", "バンコク", "ダナン"], fareCaption: "往復サンプル", footer: "素敵な旅は、わくわくする検索から。",
    searchHeading: (city) => `${city}行きの航空便`, hours: "時間", minutes: "分", nonstop: "直行便", fare: (count) => `${count}名 · サンプル運賃`, select: "選択", selected: "デモページのため、予約はできません。", sameAirport: "出発地と目的地を別々に選択してください。", invalidReturn: "帰着日は出発日以降を選択してください。", cannotSwap: "この空港の組み合わせは入れ替えできません。出発地と目的地を選択してください。",
    airlines: ["チェジュ航空", "ティーウェイ航空", "大韓航空", "エアソウル"], cityNames: ["大阪", "東京", "福岡", "バンコク", "ダナン", "済州"]
  }
};
const supportedLanguages = Object.keys(languageCopies);
let activeLanguage = "ko";
const flightOptions = [
  { airline: "제주항공", mark: "7C", departure: "07:25", arrival: "09:10", duration: 105, price: 189000, stops: "직항" },
  { airline: "티웨이항공", mark: "TW", departure: "10:40", arrival: "12:25", duration: 105, price: 214000, stops: "직항" },
  { airline: "대한항공", mark: "KE", departure: "13:15", arrival: "15:00", duration: 105, price: 362000, stops: "직항" },
  { airline: "에어서울", mark: "RS", departure: "17:50", arrival: "19:35", duration: 105, price: 238000, stops: "직항" }
];

function dateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function applyLanguage(language) {
  activeLanguage = supportedLanguages.includes(language) ? language : "ko";
  const copy = languageCopies[activeLanguage];
  document.documentElement.lang = activeLanguage;
  document.title = `${copy.pageTitle} | BYTRIP`;

  document.querySelectorAll(".main-nav .nav-link").forEach((link, index) => { link.textContent = copy.nav[index]; });
  document.querySelector(".main-nav").setAttribute("aria-label", copy.nav.join(", "));
  document.querySelector(".header-link").innerHTML = `${copy.home} <span aria-hidden="true">↗</span>`;
  document.querySelector(".search-section").setAttribute("aria-label", copy.search);
  document.querySelector(".hero .eyebrow").innerHTML = `<span></span> ${copy.eyebrow}`;
  document.querySelector(".hero h1").innerHTML = copy.title;
  document.querySelector(".hero-note").textContent = copy.tagline;
  document.querySelector(".photo-credit").textContent = copy.photo;
  document.querySelector(".trip-type").setAttribute("aria-label", copy.tripType);
  document.querySelectorAll(".type-option span").forEach((option, index) => { option.textContent = copy.tripOptions[index]; });
  document.querySelectorAll(".form-topline .field-kicker").forEach((label, index) => { label.textContent = copy.topLabels[index]; });
  passengerInput.setAttribute("aria-label", copy.passenger);
  document.getElementById("passenger-minus").setAttribute("aria-label", copy.passengerAria[0]);
  document.getElementById("passenger-plus").setAttribute("aria-label", copy.passengerAria[1]);
  document.querySelector(".passenger-control > span:last-child").textContent = copy.passengerShort;
  document.querySelectorAll("#cabin-class option").forEach((option, index) => { option.textContent = copy.cabinOptions[index]; });
  document.querySelectorAll(".search-fields .field-kicker").forEach((label, index) => { label.textContent = copy.fields[index]; });
  document.querySelectorAll("#origin option").forEach((option, index) => { option.textContent = copy.origins[index]; });
  document.querySelectorAll("#destination option").forEach((option, index) => { option.textContent = copy.airportDestinations[index]; });
  document.getElementById("swap-cities").setAttribute("aria-label", copy.swap);
  document.getElementById("swap-cities").setAttribute("title", copy.swap);
  document.querySelector(".search-button").innerHTML = `<span aria-hidden="true">⌕</span> ${copy.search}`;
  message.textContent = copy.hint;
  document.querySelector("#results .dark-eyebrow").textContent = copy.resultsEyebrow;
  document.getElementById("results-title").textContent = copy.resultsTitle;
  document.getElementById("sort-label").textContent = copy.sort;
  document.querySelectorAll("#sort-flights option").forEach((option, index) => { option.textContent = copy.sortOptions[index]; });
  document.querySelector(".results-disclaimer").textContent = copy.disclaimer;
  document.querySelector(".inspiration-section .dark-eyebrow").textContent = copy.inspirationEyebrow;
  document.getElementById("inspiration-title").textContent = copy.inspirationTitle;
  document.querySelector(".section-aside").innerHTML = copy.aside;
  document.querySelectorAll(".destination-name").forEach((name, index) => { name.textContent = copy.popularDestinations[index]; });
  document.querySelectorAll(".fare-caption").forEach((caption) => { caption.textContent = copy.fareCaption; });
  document.querySelector(".site-footer p").textContent = copy.footer;

  if (!results.hidden) renderFlights();
}

function localizedCity(value) {
  const airportCode = value.split("·").pop().trim();
  const codes = ["KIX", "HND", "FUK", "BKK", "DAD", "CJU"];
  const cityIndex = codes.indexOf(airportCode);
  return cityIndex === -1 ? value : languageCopies[activeLanguage].cityNames[cityIndex];
}

const today = new Date();
const departureDate = new Date(today);
departureDate.setDate(today.getDate() + 14);
const arrivalDate = new Date(departureDate);
arrivalDate.setDate(departureDate.getDate() + 4);
departInput.min = dateString(today);
returnInput.min = dateString(departureDate);
departInput.value = dateString(departureDate);
returnInput.value = dateString(arrivalDate);

document.querySelectorAll('input[name="tripType"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".type-option").forEach((option) => option.classList.remove("is-selected"));
    radio.closest(".type-option").classList.add("is-selected");
    const isRoundTrip = radio.value === "roundtrip";
    returnField.hidden = !isRoundTrip;
    returnInput.required = isRoundTrip;
  });
});

document.getElementById("swap-cities").addEventListener("click", () => {
  const previousOrigin = originSelect.value;
  const previousDestination = destinationSelect.value;
  const originOption = [...originSelect.options].find((option) => option.value === previousDestination);
  const destinationOption = [...destinationSelect.options].find((option) => option.value === previousOrigin);

  if (originOption && destinationOption) {
    originSelect.value = previousDestination;
    destinationSelect.value = previousOrigin;
  } else {
    message.textContent = languageCopies[activeLanguage].cannotSwap;
    message.classList.add("is-error");
  }
});

document.getElementById("passenger-minus").addEventListener("click", () => {
  passengerInput.value = Math.max(1, Number(passengerInput.value) - 1);
});

document.getElementById("passenger-plus").addEventListener("click", () => {
  passengerInput.value = Math.min(9, Number(passengerInput.value) + 1);
});

departInput.addEventListener("change", () => {
  returnInput.min = departInput.value;
  if (returnInput.value < departInput.value) returnInput.value = departInput.value;
});

function renderFlights() {
	const copy = languageCopies[activeLanguage];
  const sort = document.getElementById("sort-flights").value;
  const flights = [...flightOptions];
  if (sort === "price") flights.sort((a, b) => a.price - b.price);
  if (sort === "duration") flights.sort((a, b) => a.duration - b.duration || a.price - b.price);

  flightList.innerHTML = flights.map((flight, index) => {
    const price = flight.price * Number(passengerInput.value);
    const durationHours = Math.floor(flight.duration / 60);
    const durationMinutes = flight.duration % 60;
    const airline = copy.airlines[flightOptions.indexOf(flight)];
    return `<article class="flight-card" style="animation-delay:${index * 55}ms">
      <div class="airline"><span class="airline-mark">${flight.mark}</span><span>${airline}</span></div>
      <div class="flight-times">
        <div class="flight-time"><strong>${flight.departure}</strong><span>${originSelect.value.split("·").pop().trim()}</span></div>
        <span class="flight-line" aria-hidden="true"></span>
        <div class="flight-time"><strong>${flight.arrival}</strong><span>${destinationSelect.value.split("·").pop().trim()}</span></div>
      </div>
      <div class="flight-duration">${durationHours}${copy.hours} ${durationMinutes}${copy.minutes}<span class="stops">${copy.nonstop}</span></div>
      <div class="flight-fare"><strong>₩${price.toLocaleString("ko-KR")}</strong><span>${copy.fare(passengerInput.value)}</span></div>
      <button class="select-flight" type="button" aria-label="${airline} · ${copy.select}">${copy.select}</button>
    </article>`;
  }).join("");

  flightList.querySelectorAll(".select-flight").forEach((button) => {
    button.addEventListener("click", () => {
      message.textContent = copy.selected;
      message.classList.remove("is-error");
      document.querySelector(".search-section").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  message.classList.remove("is-error");
  if (originSelect.value === destinationSelect.value) {
    message.textContent = languageCopies[activeLanguage].sameAirport;
    message.classList.add("is-error");
    return;
  }
  if (returnInput.required && returnInput.value < departInput.value) {
    message.textContent = languageCopies[activeLanguage].invalidReturn;
    message.classList.add("is-error");
    return;
  }

  document.getElementById("results-title").textContent = languageCopies[activeLanguage].searchHeading(localizedCity(destinationSelect.value));
  results.hidden = false;
  renderFlights();
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("sort-flights").addEventListener("change", renderFlights);

document.querySelectorAll(".destination-row").forEach((button) => {
  button.addEventListener("click", () => {
    destinationSelect.value = button.dataset.destination;
    document.querySelector(".search-section").scrollIntoView({ behavior: "smooth", block: "center" });
    destinationSelect.focus({ preventScroll: true });
  });
});

applyLanguage(localStorage.getItem("bytrip-language") || "ko");