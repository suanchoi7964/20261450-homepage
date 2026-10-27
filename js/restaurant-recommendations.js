var restaurantDestinations = [
  {
    code: "JPY",
    country: "일본",
    city: "도쿄",
    restaurants: [
      { name: "스시 다이 (Sushi Dai)", specialty: "에도마에 스시", description: "도요스 시장에서 신선한 초밥을 즐기기 좋은 유명점." },
      { name: "이치란 시부야점", specialty: "돈코츠 라멘", description: "취향에 맞게 국물과 면을 고를 수 있는 라멘 전문점." },
      { name: "후운지 (Fuunji)", specialty: "츠케멘", description: "진한 국물에 면을 찍어 먹는 츠케멘으로 잘 알려진 곳." }
    ]
  },
  {
    code: "CNY",
    country: "중국",
    city: "베이징",
    restaurants: [
      { name: "전취덕 (Quanjude)", specialty: "베이징 카오야", description: "베이징 오리구이를 대표하는 전통 음식점." },
      { name: "다둥 카오야 (Da Dong)", specialty: "오리구이", description: "바삭한 껍질의 오리구이를 맛볼 수 있는 베이징 식당." },
      { name: "하이디라오 (Haidilao)", specialty: "중국식 훠궈", description: "다양한 육수와 재료를 골라 즐기는 훠궈 체인." }
    ]
  },
  {
    code: "HKD",
    country: "홍콩",
    city: "홍콩",
    restaurants: [
      { name: "팀호완 (Tim Ho Wan)", specialty: "차슈 바오", description: "홍콩식 딤섬을 합리적으로 즐길 수 있는 식당." },
      { name: "캄스 로스트 구스 (Kam's Roast Goose)", specialty: "구스 로스트", description: "홍콩식 바삭한 거위구이로 유명한 곳." },
      { name: "막스 누들 (Mak's Noodle)", specialty: "완탕면", description: "새우 완탕과 가는 면이 어우러진 홍콩식 면 요리 전문점." }
    ]
  },
  {
    code: "IDR",
    country: "인도네시아",
    city: "발리",
    restaurants: [
      { name: "Warung Babi Guling Ibu Oka", specialty: "바비 굴링", description: "발리식 향신료 돼지고기 요리를 맛볼 수 있는 와룽." },
      { name: "Nasi Ayam Kedewatan Ibu Mangku", specialty: "나시 아얌", description: "밥과 발리식 양념 닭고기를 곁들인 현지 인기 메뉴." },
      { name: "Made's Warung", specialty: "나시 캄푸르", description: "발리 현지 요리와 인도네시아식 밥 요리를 즐기기 좋은 식당." }
    ]
  },
  {
    code: "INR",
    country: "인도",
    city: "뉴델리",
    restaurants: [
      { name: "Karim's", specialty: "무굴식 양고기 커리", description: "올드델리에서 무굴식 고기 요리로 잘 알려진 식당." },
      { name: "Indian Accent", specialty: "현대 인도 요리", description: "전통 인도 요리를 현대적으로 풀어낸 파인 다이닝." },
      { name: "Saravana Bhavan", specialty: "도사와 남인도 탈리", description: "채식 중심의 남인도 음식을 맛볼 수 있는 식당." }
    ]
  },
  {
    code: "MYR",
    country: "말레이시아",
    city: "쿠알라룸푸르",
    restaurants: [
      { name: "Village Park Restaurant", specialty: "나시 르막", description: "바삭한 닭고기와 삼발을 곁들인 나시 르막으로 유명." },
      { name: "Lai Foong Lala Noodles", specialty: "조개 국수", description: "진한 국물에 조개를 넣은 쿠알라룸푸르의 인기 국수집." },
      { name: "Madam Kwan's", specialty: "나시 보자리", description: "말레이시아 가정식과 현지 대표 메뉴를 편하게 즐길 수 있는 곳." }
    ]
  },
  {
    code: "PHP",
    country: "필리핀",
    city: "마닐라",
    restaurants: [
      { name: "Aristocrat Restaurant", specialty: "치킨 바비큐", description: "필리핀식 바비큐와 현지 가정식을 즐길 수 있는 마닐라 식당." },
      { name: "Toyo Eatery", specialty: "현대 필리핀 요리", description: "필리핀 식재료와 전통 요리를 새롭게 선보이는 레스토랑." },
      { name: "Manam", specialty: "시니강과 크리스피 파타", description: "대표적인 필리핀 음식을 다양하게 맛보기 좋은 곳." }
    ]
  },
  {
    code: "SGD",
    country: "싱가포르",
    city: "싱가포르",
    restaurants: [
      { name: "Tian Tian Hainanese Chicken Rice", specialty: "하이난식 치킨라이스", description: "부드러운 닭고기와 향긋한 밥으로 유명한 호커 음식점." },
      { name: "Song Fa Bak Kut Teh", specialty: "바쿠테", description: "후추 향이 나는 싱가포르식 돼지갈비탕 전문점." },
      { name: "328 Katong Laksa", specialty: "카통 락사", description: "코코넛 향의 매콤한 락사로 잘 알려진 식당." }
    ]
  },
  {
    code: "THB",
    country: "태국",
    city: "방콕",
    restaurants: [
      { name: "팁싸마이 (Thipsamai)", specialty: "팟타이", description: "방콕의 대표적인 팟타이 전문점." },
      { name: "제이파이 (Jay Fai)", specialty: "게살 오믈렛", description: "웍 요리와 게살 오믈렛으로 유명한 길거리 음식점." },
      { name: "Somboon Seafood", specialty: "푸팟퐁커리", description: "커리 소스와 게를 함께 볶은 태국 요리를 맛볼 수 있는 곳." }
    ]
  }
];

var destinationSelect = document.getElementById("destination");
var restaurantList = document.getElementById("restaurant-list");

restaurantDestinations.forEach(function (destination) {
  var option = document.createElement("option");
  option.value = destination.code;
  option.textContent = destination.country + " · " + destination.city + " (" + destination.code + ")";
  destinationSelect.appendChild(option);
});

function renderRestaurantRecommendations() {
  var selectedCode = destinationSelect.value;
  var destinations = selectedCode === "all"
    ? restaurantDestinations
    : restaurantDestinations.filter(function (destination) {
      return destination.code === selectedCode;
    });

  restaurantList.innerHTML = destinations.map(function (destination) {
    var cards = destination.restaurants.map(function (restaurant) {
      return '<article class="restaurant-card"><h3>' + restaurant.name +
        '</h3><p class="specialty">추천 메뉴 · ' + restaurant.specialty +
        '</p><p>' + restaurant.description + '</p></article>';
    }).join("");

    return '<section class="destination-section"><h2>' + destination.country +
      '<span>· ' + destination.city + ' · ' + destination.code + '</span></h2>' +
      '<div class="restaurant-cards">' + cards + '</div></section>';
  }).join("");
}

destinationSelect.addEventListener("change", renderRestaurantRecommendations);
renderRestaurantRecommendations();
