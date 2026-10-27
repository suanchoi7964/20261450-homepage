function changeLanguage() {
  var language = document.getElementById("language").value;
  if (language == "en") {
    document.getElementById("exchange-menu-link").innerHTML = "Exchange rates";
    document.getElementById("exchange-title").innerHTML = "Current exchange rates";
    document.getElementById("calculator-title").innerHTML = "Currency converter";
    document.getElementById("amount-label").innerHTML = "Amount";
    document.getElementById("from-currency-label").innerHTML = "From";
    document.getElementById("to-currency-label").innerHTML = "To";
    document.getElementById("login-button").innerHTML = "Log in";
    document.getElementById("trip-title").innerHTML = "Ready to explore<br>today's journey";
    document.getElementById("fansion-title").innerHTML = "Accommodation recommendations";
    document.getElementById("taj-title").innerHTML = "Accommodation 1";
    document.getElementById("osaka-title").innerHTML = "Accommodation 2";
    document.getElementById("hoian-title").innerHTML = "Accommodation 3";
    document.getElementById("login-title").innerHTML = "Log in";
    document.getElementById("id-label").innerHTML = "ID";
    document.getElementById("password-label").innerHTML = "Password";
    document.getElementById("login-submit").innerHTML = "Log in";
    document.getElementById("signup-button").innerHTML = "Sign up";
    document.getElementById("menu-button").innerHTML = "Back to menu";
    document.getElementById("signup-title").innerHTML = "Sign up";
    document.getElementById("email-label").innerHTML = "Email";
    document.getElementById("phone-label").innerHTML = "Phone number";
    document.getElementById("name-label").innerHTML = "Name";
    document.getElementById("signup-password-label").innerHTML = "Password";
    document.getElementById("confirm-button").innerHTML = "Confirm";
    document.getElementById("back-login-button").innerHTML = "Back to log in";
  } else {
    if (language == "zh") {
      document.getElementById("exchange-menu-link").innerHTML = "当前汇率";
      document.getElementById("exchange-title").innerHTML = "当前汇率";
      document.getElementById("calculator-title").innerHTML = "汇率计算器";
      document.getElementById("amount-label").innerHTML = "金额";
      document.getElementById("from-currency-label").innerHTML = "原货币";
      document.getElementById("to-currency-label").innerHTML = "目标货币";
      document.getElementById("login-button").innerHTML = "登录";
      document.getElementById("trip-title").innerHTML = "想要出发<br>今天的旅行";
      document.getElementById("fansion-title").innerHTML = "住宿推荐";
      document.getElementById("taj-title").innerHTML = "住宿1";
      document.getElementById("osaka-title").innerHTML = "住宿2";
      document.getElementById("hoian-title").innerHTML = "住宿3";
      document.getElementById("login-title").innerHTML = "登录";
      document.getElementById("id-label").innerHTML = "用户名";
      document.getElementById("password-label").innerHTML = "密码";
      document.getElementById("login-submit").innerHTML = "登录";
      document.getElementById("signup-button").innerHTML = "注册";
      document.getElementById("menu-button").innerHTML = "返回菜单";
      document.getElementById("signup-title").innerHTML = "注册";
      document.getElementById("email-label").innerHTML = "电子邮件";
      document.getElementById("phone-label").innerHTML = "电话号码";
      document.getElementById("name-label").innerHTML = "姓名";
      document.getElementById("signup-password-label").innerHTML = "密码";
      document.getElementById("confirm-button").innerHTML = "确认";
      document.getElementById("back-login-button").innerHTML = "返回登录";
    } else if (language == "ja") {
      document.getElementById("exchange-menu-link").innerHTML = "現在の為替レート";
      document.getElementById("exchange-title").innerHTML = "現在の為替レート";
      document.getElementById("calculator-title").innerHTML = "通貨換算";
      document.getElementById("amount-label").innerHTML = "金額";
      document.getElementById("from-currency-label").innerHTML = "換算元";
      document.getElementById("to-currency-label").innerHTML = "換算先";
      document.getElementById("login-button").innerHTML = "ログイン";
      document.getElementById("trip-title").innerHTML = "旅に出たい<br>今日の旅";
      document.getElementById("fansion-title").innerHTML = "おすすめの宿泊施設";
      document.getElementById("taj-title").innerHTML = "宿泊先1";
      document.getElementById("osaka-title").innerHTML = "宿泊先2";
      document.getElementById("hoian-title").innerHTML = "宿泊先3";
      document.getElementById("login-title").innerHTML = "ログイン";
      document.getElementById("id-label").innerHTML = "ユーザー名";
      document.getElementById("password-label").innerHTML = "パスワード";
      document.getElementById("login-submit").innerHTML = "ログイン";
      document.getElementById("signup-button").innerHTML = "新規登録";
      document.getElementById("menu-button").innerHTML = "メニューに戻る";
      document.getElementById("signup-title").innerHTML = "新規登録";
      document.getElementById("email-label").innerHTML = "メールアドレス";
      document.getElementById("phone-label").innerHTML = "電話番号";
      document.getElementById("name-label").innerHTML = "名前";
      document.getElementById("signup-password-label").innerHTML = "パスワード";
      document.getElementById("confirm-button").innerHTML = "確認";
      document.getElementById("back-login-button").innerHTML = "ログインに戻る";
    } else {
      document.getElementById("exchange-menu-link").innerHTML = "현재 환율";
      document.getElementById("exchange-title").innerHTML = "현재 환율";
      document.getElementById("calculator-title").innerHTML = "환율 계산기";
      document.getElementById("amount-label").innerHTML = "금액";
      document.getElementById("from-currency-label").innerHTML = "보내는 통화";
      document.getElementById("to-currency-label").innerHTML = "받는 통화";
      document.getElementById("login-button").innerHTML = "로그인";
      document.getElementById("trip-title").innerHTML = "떠나고 싶은<br>오늘의 여행";
      document.getElementById("fansion-title").innerHTML = "숙소 추천";
      document.getElementById("taj-title").innerHTML = "숙소1";
      document.getElementById("osaka-title").innerHTML = "숙소2";
      document.getElementById("hoian-title").innerHTML = "숙소3";
      document.getElementById("login-title").innerHTML = "로그인";
      document.getElementById("id-label").innerHTML = "아이디";
      document.getElementById("password-label").innerHTML = "비밀번호";
      document.getElementById("login-submit").innerHTML = "로그인";
      document.getElementById("signup-button").innerHTML = "회원가입";
      document.getElementById("menu-button").innerHTML = "메뉴로 돌아가기";
      document.getElementById("signup-title").innerHTML = "회원가입";
      document.getElementById("email-label").innerHTML = "이메일";
      document.getElementById("phone-label").innerHTML = "전화번호";
      document.getElementById("name-label").innerHTML = "이름";
      document.getElementById("signup-password-label").innerHTML = "비밀번호";
      document.getElementById("confirm-button").innerHTML = "확인";
      document.getElementById("back-login-button").innerHTML = "로그인으로 돌아가기";
    }
  }
}

var exchangeRates = null;
var exchangeCurrencies = [
  { code: "USD", name: "미국 달러" },
  { code: "JPY", name: "일본 엔" },
  { code: "CNY", name: "중국 위안" },
  { code: "EUR", name: "유로" },
  { code: "HKD", name: "홍콩 달러" },
  { code: "IDR", name: "인도네시아 루피아" },
  { code: "INR", name: "인도 루피" },
  { code: "MYR", name: "말레이시아 링깃" },
  { code: "PHP", name: "필리핀 페소" },
  { code: "SGD", name: "싱가포르 달러" },
  { code: "THB", name: "태국 바트" }
];

function loadExchangeRates() {
  var status = document.getElementById("exchange-date");
  var result = document.getElementById("exchange-result");

  fetch("https://open.er-api.com/v6/latest/KRW")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Exchange rate request failed: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      if (!data || data.result !== "success" || data.base_code !== "KRW" ||
          !data.rates || !exchangeCurrencies.every(function (currency) {
        return Number.isFinite(data.rates[currency.code]) && data.rates[currency.code] > 0;
      }) || !Number.isFinite(Date.parse(data.time_last_update_utc))) {
        throw new Error("Exchange rate response is missing valid currency rates.");
      }

      exchangeRates = data.rates;
      var updatedAt = new Date(data.time_last_update_utc);
      var formattedUpdatedAt = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(updatedAt);
      status.textContent = "최종 업데이트: " + formattedUpdatedAt + " · 기준 통화: KRW";
      renderExchangeRates();
      convertCurrency();
    })
    .catch(function (error) {
      console.error(error);
      status.textContent = "환율 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.";
      result.textContent = "환율 계산을 사용할 수 없습니다.";
    });
}

function renderExchangeRates() {
  var container = document.getElementById("exchange-rates");

  container.innerHTML = exchangeCurrencies.map(function (currency) {
    var wonPerUnit = 1 / exchangeRates[currency.code];
    var formattedRate = new Intl.NumberFormat("ko-KR", {
      maximumFractionDigits: 2
    }).format(wonPerUnit);
    return '<div class="exchange-rate-card"><span>1 ' + currency.code + ' · ' + currency.name +
      '</span><strong>' + formattedRate + ' KRW</strong></div>';
  }).join("");
}

function convertCurrency() {
  if (!exchangeRates) {
    return;
  }

  var amountInput = document.getElementById("exchange-amount");
  var amount = Number(amountInput.value);
  var fromCurrency = document.getElementById("from-currency").value;
  var toCurrency = document.getElementById("to-currency").value;
  var result = document.getElementById("exchange-result");

  if (!Number.isFinite(amount) || amount < 0) {
    result.textContent = "0 이상의 금액을 입력해 주세요.";
    return;
  }

  var amountInWon = fromCurrency === "KRW" ? amount : amount / exchangeRates[fromCurrency];
  var convertedAmount = toCurrency === "KRW" ? amountInWon : amountInWon * exchangeRates[toCurrency];
  var formattedAmount = new Intl.NumberFormat("ko-KR", {
    maximumFractionDigits: 6
  }).format(convertedAmount);

  result.textContent = amountInput.value + " " + fromCurrency + " = " +
    formattedAmount + " " + toCurrency;
}

document.getElementById("exchange-amount").addEventListener("input", convertCurrency);
document.getElementById("from-currency").addEventListener("change", convertCurrency);
document.getElementById("to-currency").addEventListener("change", convertCurrency);
loadExchangeRates();

function showLogin() {
  document.querySelector("header").style.display = "none";
  document.getElementById("menu-page").style.display = "none";
  document.getElementById("login-page").style.display = "block";
  document.getElementById("signup-page").style.display = "none";
  document.body.classList.add("login-background");
}

function showSignup() {
  document.querySelector("header").style.display = "none";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("signup-page").style.display = "block";
  document.body.classList.add("login-background");
}

function signupComplete() {
  alert("회원가입 되셨습니다!");
  showMenu();
}

function showMenu() {
  document.querySelector("header").style.display = "flex";
  document.getElementById("menu-page").style.display = "block";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("signup-page").style.display = "none";
  document.body.classList.remove("login-background");
  document.body.classList.remove("exchange-page");
}

function showExchangePage() {
  document.querySelector("header").style.display = "flex";
  document.getElementById("menu-page").style.display = "block";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("signup-page").style.display = "none";
  document.body.classList.remove("login-background");
  document.body.classList.add("exchange-page");
}

