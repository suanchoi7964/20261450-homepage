const stayCopy = {
	ko: { nav: ["항공권", "숙소"], home: "여행 홈", eyebrow: "A PLACE TO CALL YOUR OWN", title: "머무는 순간까지,<br><span>여행답게.</span>", subtitle: "이번 여행에 꼭 맞는 공간을 찾아보세요.", searchRegion: "숙소 검색", destination: "어디로 떠나세요?", destinations: ["어디든 좋아요", "도쿄", "오사카", "다낭", "제주", "방콕", "서울"], checkin: "체크인", checkout: "체크아웃", guests: "투숙 인원", guestSuffix: "명", guestButtons: ["인원 줄이기", "인원 늘리기"], search: "숙소 찾기", listEyebrow: "A GOOD PLACE, WELL FOUND", allTitle: "마음에 머무는 숙소", count: (n) => `${n}개의 숙소`, sort: "정렬", sorts: ["추천순", "가격 낮은 순", "평점 높은 순"], filter: "필터", reset: "초기화", type: "숙소 유형", types: { hotel: "호텔", resort: "리조트", guesthouse: "게스트하우스" }, budget: "1박 요금 상한", filterNote: "표시 가격은 1박 기준 예시입니다.", perNight: "1박", details: "상세 보기", favorite: "관심 숙소 저장", unfavorite: "관심 숙소 해제", empty: "조건에 맞는 숙소가 없어요. 필터를 조정해 보세요.", destinationEyebrow: "A CHANGE OF SCENERY", destinationTitle: "다음 숙소는 어디에서?", footer: "좋은 여행은 잘 고른 숙소에서 시작돼요.", close: "닫기", demoNote: "이 페이지는 숙소 검색 화면 예시이며 실제 예약은 지원하지 않습니다.", priceLabel: (n) => `₩${Number(n).toLocaleString("ko-KR")}`, guestCount: (n) => `${n}명 기준`, searchTitle: (city) => city === "어디든 좋아요" ? "마음에 머무는 숙소" : `${city} 숙소`, cityNames: { all: "어디든 좋아요", tokyo: "도쿄", osaka: "오사카", danang: "다낭", jeju: "제주", bangkok: "방콕", seoul: "서울" }, checkOutError: "체크아웃은 체크인 이후 날짜로 선택해 주세요." },
	en: { nav: ["Flights", "Stays"], home: "Travel home", eyebrow: "A PLACE TO CALL YOUR OWN", title: "Stay a little longer,<br><span>somewhere lovely.</span>", subtitle: "Find a place that feels right for this trip.", searchRegion: "Find a stay", destination: "Where are you going?", destinations: ["Anywhere", "Tokyo", "Osaka", "Da Nang", "Jeju", "Bangkok", "Seoul"], checkin: "Check-in", checkout: "Check-out", guests: "Guests", guestSuffix: "people", guestButtons: ["Remove a guest", "Add a guest"], search: "Find stays", listEyebrow: "A GOOD PLACE, WELL FOUND", allTitle: "Places worth staying for", count: (n) => `${n} places to stay`, sort: "Sort", sorts: ["Recommended", "Lowest price", "Top rated"], filter: "Filters", reset: "Reset", type: "Property type", types: { hotel: "Hotel", resort: "Resort", guesthouse: "Guesthouse" }, budget: "Maximum per night", filterNote: "Prices shown are sample nightly rates.", perNight: "per night", details: "View details", favorite: "Save to favorites", unfavorite: "Remove from favorites", empty: "No stays match those filters. Try adjusting your search.", destinationEyebrow: "A CHANGE OF SCENERY", destinationTitle: "Where will you stay next?", footer: "A good trip starts with a place that feels right.", close: "Close", demoNote: "This is a sample accommodation search. Bookings are not available.", priceLabel: (n) => `₩${Number(n).toLocaleString("en-US")}`, guestCount: (n) => `For ${n} guests`, searchTitle: (city) => city === "Anywhere" ? "Places worth staying for" : `Stays in ${city}`, cityNames: { all: "Anywhere", tokyo: "Tokyo", osaka: "Osaka", danang: "Da Nang", jeju: "Jeju", bangkok: "Bangkok", seoul: "Seoul" }, checkOutError: "Check-out must be after check-in." },
	zh: { nav: ["机票", "住宿"], home: "旅行主页", eyebrow: "A PLACE TO CALL YOUR OWN", title: "让旅途的每一刻，<br><span>都有舒适停留。</span>", subtitle: "为这次旅行，找到心仪的住宿。", searchRegion: "搜索住宿", destination: "想去哪里？", destinations: ["不限目的地", "东京", "大阪", "岘港", "济州", "曼谷", "首尔"], checkin: "入住", checkout: "退房", guests: "入住人数", guestSuffix: "人", guestButtons: ["减少人数", "增加人数"], search: "搜索住宿", listEyebrow: "A GOOD PLACE, WELL FOUND", allTitle: "值得停留的好住处", count: (n) => `${n} 家住宿`, sort: "排序", sorts: ["推荐排序", "价格从低到高", "评分最高"], filter: "筛选", reset: "重置", type: "住宿类型", types: { hotel: "酒店", resort: "度假村", guesthouse: "民宿" }, budget: "每晚最高价格", filterNote: "显示价格为每晚示例价格。", perNight: "每晚", details: "查看详情", favorite: "收藏住宿", unfavorite: "取消收藏", empty: "没有符合条件的住宿，请调整筛选条件。", destinationEyebrow: "A CHANGE OF SCENERY", destinationTitle: "下一站，住在哪里？", footer: "选好住处，让旅程更自在。", close: "关闭", demoNote: "此页面仅为住宿搜索示例，不提供实际预订。", priceLabel: (n) => `₩${Number(n).toLocaleString("zh-CN")}`, guestCount: (n) => `${n}人入住`, searchTitle: (city) => city === "不限目的地" ? "值得停留的好住处" : `${city}住宿`, cityNames: { all: "不限目的地", tokyo: "东京", osaka: "大阪", danang: "岘港", jeju: "济州", bangkok: "曼谷", seoul: "首尔" }, checkOutError: "退房日期必须晚于入住日期。" },
	ja: { nav: ["航空券", "宿泊"], home: "旅行ホーム", eyebrow: "A PLACE TO CALL YOUR OWN", title: "滞在する時間も、<br><span>旅の楽しみに。</span>", subtitle: "今回の旅にぴったりの場所を見つけましょう。", searchRegion: "宿泊先を検索", destination: "どこへ行きますか？", destinations: ["すべての場所", "東京", "大阪", "ダナン", "済州", "バンコク", "ソウル"], checkin: "チェックイン", checkout: "チェックアウト", guests: "宿泊人数", guestSuffix: "名", guestButtons: ["人数を減らす", "人数を増やす"], search: "宿泊先を探す", listEyebrow: "A GOOD PLACE, WELL FOUND", allTitle: "心に残る宿を見つけよう", count: (n) => `${n}件の宿泊先`, sort: "並び替え", sorts: ["おすすめ順", "料金が安い順", "評価が高い順"], filter: "絞り込み", reset: "リセット", type: "宿泊施設のタイプ", types: { hotel: "ホテル", resort: "リゾート", guesthouse: "ゲストハウス" }, budget: "1泊の上限料金", filterNote: "表示料金は1泊あたりのサンプルです。", perNight: "1泊", details: "詳細を見る", favorite: "お気に入りに保存", unfavorite: "お気に入りを解除", empty: "条件に合う宿泊先がありません。条件を変更してください。", destinationEyebrow: "A CHANGE OF SCENERY", destinationTitle: "次はどこに泊まろう？", footer: "ぴったりの宿から、旅をもっと楽しく。", close: "閉じる", demoNote: "このページは宿泊検索のサンプルです。実際の予約には対応していません。", priceLabel: (n) => `₩${Number(n).toLocaleString("ja-JP")}`, guestCount: (n) => `${n}名で宿泊`, searchTitle: (city) => city === "すべての場所" ? "心に残る宿を見つけよう" : `${city}の宿泊先`, cityNames: { all: "すべての場所", tokyo: "東京", osaka: "大阪", danang: "ダナン", jeju: "済州", bangkok: "バンコク", seoul: "ソウル" }, checkOutError: "チェックアウトはチェックインより後の日付を選択してください。" }
};

const propertyData = [
	{ id: "aoi", city: "tokyo", type: "hotel", price: 158000, rating: 4.8, reviews: 214, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85", names: ["아오이 가든 호텔", "Aoi Garden Hotel", "青井花园酒店", "アオイ ガーデンホテル"], locations: ["도쿄 · 시부야", "Tokyo · Shibuya", "东京 · 涩谷", "東京 · 渋谷"], descriptions: ["도심 속 정원을 품은 조용한 부티크 호텔.", "A quiet boutique hotel wrapped around a city garden.", "藏在城市花园中的安静精品酒店。", "街の庭園に囲まれた静かなブティックホテル。"], amenities: [["조식", "무료 취소"], ["Breakfast", "Free cancellation"], ["含早餐", "免费取消"], ["朝食付き", "キャンセル無料"]] },
	{ id: "nakanoma", city: "osaka", type: "hotel", price: 142000, rating: 4.7, reviews: 186, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85", names: ["나카노마 스테이", "Nakanoma Stay", "中之间住宿", "ナカノマ ステイ"], locations: ["오사카 · 난바", "Osaka · Namba", "大阪 · 难波", "大阪 · 難波"], descriptions: ["골목의 감각과 편안함을 담은 모던 스테이.", "A modern hideaway with a neighborhood feel.", "融合街区氛围与舒适感的现代住宿。", "街の雰囲気と心地よさが調和するモダンな宿。"], amenities: [["역 도보 4분", "무료 취소"], ["4 min to station", "Free cancellation"], ["车站步行4分钟", "免费取消"], ["駅まで徒歩4分", "キャンセル無料"]] },
	{ id: "lagoon", city: "danang", type: "resort", price: 218000, rating: 4.9, reviews: 302, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85", names: ["라군 하우스 다낭", "Lagoon House Danang", "岘港泻湖之家", "ラグーンハウス ダナン"], locations: ["다낭 · 미케 비치", "Da Nang · My Khe Beach", "岘港 · 美溪海滩", "ダナン · ミーケビーチ"], descriptions: ["바다와 수영장 사이, 느린 휴식을 즐겨보세요.", "Slow mornings between the sea and the pool.", "在海边与泳池之间享受悠闲时光。", "海とプールの間でゆったりとした時間を。"], amenities: [["해변 근처", "수영장"], ["Near the beach", "Pool"], ["近海滩", "泳池"], ["ビーチ近く", "プール"]] },
	{ id: "oreum", city: "jeju", type: "guesthouse", price: 98000, rating: 4.6, reviews: 97, image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85", names: ["오름 스테이", "Oreum Stay", "济州山丘住宿", "オルム ステイ"], locations: ["제주 · 구좌", "Jeju · Gujwa", "济州 · 旧左", "済州 · 旧左"], descriptions: ["제주의 바람과 풍경을 가까이 두는 작은 숙소.", "A small retreat close to Jeju's open landscapes.", "亲近济州自然风光的小巧旅居。", "済州の風景を身近に感じる小さな宿。"], amenities: [["조용한 위치", "무료 주차"], ["Quiet location", "Free parking"], ["环境安静", "免费停车"], ["静かな立地", "無料駐車場"]] },
	{ id: "riverroom", city: "bangkok", type: "resort", price: 186000, rating: 4.7, reviews: 243, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85", names: ["리버룸 방콕", "Riverroom Bangkok", "曼谷河畔客房", "リバールーム バンコク"], locations: ["방콕 · 차오프라야", "Bangkok · Chao Phraya", "曼谷 · 湄南河", "バンコク · チャオプラヤー"], descriptions: ["강변의 풍경과 도시의 활기를 함께 누리는 리조트.", "A riverside resort close to the energy of the city.", "在河景与城市活力之间享受度假时光。", "川辺の景色と街の活気を楽しめるリゾート。"], amenities: [["강 전망", "수영장"], ["River view", "Pool"], ["河景", "泳池"], ["リバービュー", "プール"]] },
	{ id: "monohouse", city: "seoul", type: "hotel", price: 176000, rating: 4.8, reviews: 158, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=85", names: ["모노하우스 서울", "Monohouse Seoul", "首尔小屋酒店", "モノハウス ソウル"], locations: ["서울 · 종로", "Seoul · Jongno", "首尔 · 钟路", "ソウル · 鍾路"], descriptions: ["오래된 동네 안에 자리한 따뜻한 디자인 호텔.", "A warm design hotel in one of Seoul's oldest quarters.", "坐落于首尔老街区的温暖设计酒店。", "歴史ある街並みに佇む温かなデザインホテル。"], amenities: [["조식", "대중교통"], ["Breakfast", "Transit nearby"], ["含早餐", "交通便利"], ["朝食付き", "駅近"]] }
];

const stayForm = document.getElementById("stay-search");
const destinationSelect = document.getElementById("stay-destination");
const checkInInput = document.getElementById("check-in");
const checkOutInput = document.getElementById("check-out");
const guestInput = document.getElementById("guest-count");
const maxPriceInput = document.getElementById("max-price");
const propertyGrid = document.getElementById("property-grid");
const detailsDialog = document.getElementById("property-dialog");
const languages = ["ko", "en", "zh", "ja"];
const favoriteIds = new Set();
let language = "ko";
let searchApplied = false;

function copy() { return stayCopy[language]; }

function dateValue(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

const today = new Date();
const arrival = new Date(today);
arrival.setDate(today.getDate() + 14);
const departure = new Date(arrival);
departure.setDate(arrival.getDate() + 3);
checkInInput.min = dateValue(today);
checkOutInput.min = dateValue(arrival);
checkInInput.value = dateValue(arrival);
checkOutInput.value = dateValue(departure);

function updateBudget() {
	document.getElementById("budget-value").textContent = copy().priceLabel(maxPriceInput.value);
}

function applyLanguage(selectedLanguage) {
	language = languages.includes(selectedLanguage) ? selectedLanguage : "ko";
	const text = copy();
	document.documentElement.lang = language;
	document.title = `${text.search} | BYTRIP`;
	document.querySelectorAll(".main-nav .nav-link").forEach((link, index) => { link.textContent = text.nav[index]; });
	document.querySelector(".main-nav").setAttribute("aria-label", text.nav.join(", "));
	document.querySelector(".header-link").innerHTML = `${text.home} <span aria-hidden="true">↗</span>`;
	document.querySelector(".stay-search-section").setAttribute("aria-label", text.searchRegion);
	document.querySelector(".stay-hero .eyebrow").innerHTML = `<span></span> ${text.eyebrow}`;
	document.getElementById("stay-title").innerHTML = text.title;
	document.getElementById("stay-subtitle").textContent = text.subtitle;
	["destination-label", "checkin-label", "checkout-label", "guest-label"].forEach((id, index) => {
		document.getElementById(id).textContent = [text.destination, text.checkin, text.checkout, text.guests][index];
	});
	destinationSelect.setAttribute("aria-label", text.destination);
	destinationSelect.querySelectorAll("option").forEach((option, index) => { option.textContent = text.destinations[index]; });
	guestInput.setAttribute("aria-label", text.guests);
	document.getElementById("guest-minus").setAttribute("aria-label", text.guestButtons[0]);
	document.getElementById("guest-plus").setAttribute("aria-label", text.guestButtons[1]);
	document.getElementById("guest-suffix").textContent = text.guestSuffix;
	document.getElementById("search-label").textContent = text.search;
	document.getElementById("listing-eyebrow").textContent = text.listEyebrow;
	document.getElementById("sort-label").textContent = text.sort;
	document.querySelectorAll("#stay-sort option").forEach((option, index) => { option.textContent = text.sorts[index]; });
	document.getElementById("filter-title").textContent = text.filter;
	document.getElementById("reset-filters").textContent = text.reset;
	document.getElementById("type-legend").textContent = text.type;
	document.querySelectorAll("[data-type]").forEach((label) => { label.textContent = text.types[label.dataset.type]; });
	document.getElementById("budget-label").textContent = text.budget;
	document.getElementById("filter-note").textContent = text.filterNote;
	document.getElementById("destination-eyebrow").textContent = text.destinationEyebrow;
	document.getElementById("destination-title").textContent = text.destinationTitle;
	document.getElementById("footer-copy").textContent = text.footer;
	document.getElementById("dialog-close").setAttribute("aria-label", text.close);
	document.getElementById("dialog-note").textContent = text.demoNote;
	document.querySelectorAll(".destination-links button").forEach((button) => { button.firstChild.textContent = text.cityNames[button.dataset.city]; });
	updateBudget();
	renderProperties();
}

function renderProperties() {
	const text = copy();
	const city = destinationSelect.value;
	const types = [...document.querySelectorAll(".type-filter:checked")].map((filter) => filter.value);
	let properties = propertyData.filter((property) => (city === "all" || property.city === city) && types.includes(property.type) && property.price <= Number(maxPriceInput.value));
	const sort = document.getElementById("stay-sort").value;
	if (sort === "price") properties.sort((first, second) => first.price - second.price);
	if (sort === "rating") properties.sort((first, second) => second.rating - first.rating);
	document.getElementById("listing-title").textContent = searchApplied ? text.searchTitle(text.destinations[["all", "tokyo", "osaka", "danang", "jeju", "bangkok", "seoul"].indexOf(city)]) : text.allTitle;
	document.getElementById("listing-count").textContent = text.count(properties.length);
	if (!properties.length) {
		propertyGrid.innerHTML = `<p class="empty-state">${text.empty}</p>`;
		return;
	}
	propertyGrid.innerHTML = properties.map((property, index) => {
		const propertyIndex = propertyData.indexOf(property);
		const isFavorite = favoriteIds.has(property.id);
		return `<article class="property-card" style="animation-delay:${index * 45}ms">
			<div class="property-photo"><img src="${property.image}" alt="${property.names[languages.indexOf(language)]}" loading="lazy"><span class="property-type">${text.types[property.type]}</span><button class="favorite-button" type="button" aria-label="${isFavorite ? text.unfavorite : text.favorite}" aria-pressed="${isFavorite}" data-favorite="${property.id}" title="${isFavorite ? text.unfavorite : text.favorite}">${isFavorite ? "♥" : "♡"}</button></div>
			<div class="property-info"><div class="property-location"><span>${property.locations[languages.indexOf(language)]}</span><span class="property-rating"><span aria-hidden="true">★</span> ${property.rating} <small>(${property.reviews})</small></span></div><h3>${property.names[languages.indexOf(language)]}</h3><p class="property-description">${property.descriptions[languages.indexOf(language)]}</p><div class="amenity-list">${property.amenities[languages.indexOf(language)].map((amenity) => `<span>${amenity}</span>`).join("")}</div><div class="property-bottom"><div class="property-price"><strong>${text.priceLabel(property.price)}</strong><span>${text.perNight} · ${text.guestCount(guestInput.value)}</span></div><button class="details-button" type="button" data-details="${property.id}">${text.details}</button></div></div>
		</article>`;
	}).join("");
	propertyGrid.querySelectorAll("[data-favorite]").forEach((button) => button.addEventListener("click", () => {
		if (favoriteIds.has(button.dataset.favorite)) favoriteIds.delete(button.dataset.favorite);
		else favoriteIds.add(button.dataset.favorite);
		renderProperties();
	}));
	propertyGrid.querySelectorAll("[data-details]").forEach((button) => button.addEventListener("click", () => openDetails(button.dataset.details)));
}

function openDetails(propertyId) {
	const property = propertyData.find((item) => item.id === propertyId);
	const localeIndex = languages.indexOf(language);
	document.getElementById("dialog-image").src = property.image;
	document.getElementById("dialog-image").alt = property.names[localeIndex];
	document.getElementById("dialog-location").textContent = `${property.locations[localeIndex]} · ${copy().types[property.type]}`;
	document.getElementById("dialog-title").textContent = property.names[localeIndex];
	document.getElementById("dialog-description").textContent = property.descriptions[localeIndex];
	document.getElementById("dialog-amenities").innerHTML = property.amenities[localeIndex].map((amenity) => `<span>${amenity}</span>`).join("");
	document.getElementById("dialog-price").textContent = `${copy().priceLabel(property.price)} · ${copy().perNight}`;
	detailsDialog.showModal();
}

stayForm.addEventListener("submit", (event) => {
	event.preventDefault();
	if (checkOutInput.value <= checkInInput.value) {
		checkOutInput.setCustomValidity(copy().checkOutError);
		checkOutInput.reportValidity();
		return;
	}
	checkOutInput.setCustomValidity("");
	searchApplied = true;
	renderProperties();
	document.getElementById("stays").scrollIntoView({ behavior: "smooth", block: "start" });
});
checkInInput.addEventListener("change", () => {
	checkOutInput.min = checkInInput.value;
	if (checkOutInput.value <= checkInInput.value) {
		const nextDay = new Date(`${checkInInput.value}T00:00:00`);
		nextDay.setDate(nextDay.getDate() + 1);
		checkOutInput.value = dateValue(nextDay);
	}
});
checkOutInput.addEventListener("change", () => checkOutInput.setCustomValidity(""));
document.getElementById("guest-minus").addEventListener("click", () => { guestInput.value = Math.max(1, Number(guestInput.value) - 1); renderProperties(); });
document.getElementById("guest-plus").addEventListener("click", () => { guestInput.value = Math.min(8, Number(guestInput.value) + 1); renderProperties(); });
document.getElementById("stay-sort").addEventListener("change", renderProperties);
document.querySelectorAll(".type-filter").forEach((filter) => filter.addEventListener("change", renderProperties));
maxPriceInput.addEventListener("input", () => { updateBudget(); renderProperties(); });
destinationSelect.addEventListener("change", () => { searchApplied = true; renderProperties(); });
document.getElementById("reset-filters").addEventListener("click", () => {
	document.querySelectorAll(".type-filter").forEach((filter) => { filter.checked = true; });
	maxPriceInput.value = maxPriceInput.max;
	updateBudget();
	renderProperties();
});
document.querySelectorAll(".destination-links button").forEach((button) => button.addEventListener("click", () => {
	destinationSelect.value = button.dataset.city;
	searchApplied = true;
	renderProperties();
	document.getElementById("stays").scrollIntoView({ behavior: "smooth", block: "start" });
}));
document.getElementById("dialog-close").addEventListener("click", () => detailsDialog.close());
detailsDialog.addEventListener("click", (event) => { if (event.target === detailsDialog) detailsDialog.close(); });

const initialDestination = new URLSearchParams(window.location.search).get("destination");
if ([...destinationSelect.options].some((option) => option.value === initialDestination)) {
	destinationSelect.value = initialDestination;
	searchApplied = true;
}
applyLanguage(localStorage.getItem("bytrip-language") || "ko");