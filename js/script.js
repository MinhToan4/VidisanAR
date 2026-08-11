/* =========================================================
   VỊ DI SẢN — LANDING PAGE SCRIPT
   ========================================================= */

/* ---------- TỪ ĐIỂN ĐA NGÔN NGỮ (VI / EN) ---------- */
const translations = {
  vi: {
    nav_collection: "Bộ sưu tập",
    nav_stories: "Bốn câu chuyện",
    nav_ar: "Trải nghiệm AR",
    nav_order: "Đặt hộp quà",
    nav_business: "Doanh nghiệp",

    hero_title: "HÀ NỘI TRONG TÔI",
    hero_subtitle_1: "Trải nghiệm Hà Nội nghìn năm theo cách chưa từng có",
    hero_subtitle_2: "Sự kết hợp hoàn hảo giữa Ẩm thực - Văn hóa - Công nghệ - Trải nghiệm",
    hero_cta: "Khám phá ngay",

    stories_title: "Bốn Biểu tượng",
    stories_title_script: "Bốn Câu Chuyện",

    story1_title: "Văn Miếu - Quốc Tử Giám",
    story1_caption: "\"Đỗ - Thành Tài\"",
    story1_desc: "Dựng từ 1070 dưới thời Lý Thánh Tông, Văn Miếu là biểu tượng cho truyền thống hiếu học ngàn năm của người Hà Nội. Bánh mang hoa văn mái ngói cong và cửa sổ tròn - lời chúc đỗ đạt, thành tài gửi đến người thân yêu.",

    story2_title: "Tháp Rùa",
    story2_caption: "\"Bình Yên - Trường Tồn\"",
    story2_desc: "Giữa lòng Hồ Gươm, Tháp Rùa lặng lẽ như nhắc lại khoảnh khắc vua Lê trả gươm - hết binh đao, đất nước trở về thanh bình. Nhân sen thanh khiết trong bánh là lời chúc: một năm an yên, trường tồn cùng năm tháng.",

    story3_title: "Chùa Một Cột",
    story3_caption: "\"Sinh - Phúc Lành\"",
    story3_desc: "Ngôi chùa mọc lên từ một giấc mơ - vua Lý Thái Tông mơ thấy Quan Âm trao con trên đài sen, và điều lành hiện thực. Nhân đậu đỏ ấm áp là lời chúc: phúc lành gõ cửa nhà bạn.",

    story4_title: "Cầu Long Biên",
    story4_caption: "\"Bền - Gắn Kết\"",
    story4_desc: "Hơn một thế kỷ, cây cầu sắt già chứng kiến những gánh cốm thu đi qua sông Hồng vào phố. Nhân cốm là ký ức của Hà Nội - ăn một miếng, nhớ một thời gắn kết bền lâu.",

    btn_learn_more: "Tìm hiểu thêm",

    roadmap_title: "Hành trình di sản",
    roadmap_quote: "\"Từ Hà Nội Trong Tôi đến Bản Sắc Việt\"",
    roadmap_desc_1: "Bắt đầu cùng \"Hà Nội Trong Tôi\", chúng tôi mong muốn khắc hoạ những biểu tượng đầu tiên của mảnh đất nghìn năm văn hiến lên từng chiếc bánh nhỏ. Đây chỉ là bước khởi đầu trong hành trình dài - đưa bản sắc văn hoá Việt Nam đến gần hơn với mọi người, qua từng vùng miền, từng câu chuyện.",
    roadmap_desc_2: "Từ Hà Nội, hành trình \"Vị Di Sản\" sẽ tiếp tục lan toả tới Huế, Hội An, Sài Gòn và khắp mọi miền Tổ quốc - nơi mỗi lát cắt ký ức đều mang theo một câu chuyện dân tộc riêng biệt, chờ được kể lại theo cách chưa từng có.",

    products_title: "Bộ sản phẩm \"Vị Di Sản\"",

    ar_title: "Quét mã nghe kể chuyện",
    ar_desc: "Mỗi chiếc bánh là một mảnh ký ức. Chỉ với một lần quét mã, câu chuyện di sản ẩn mình trong từng hộp bánh sẽ được kể lại sống động ngay trên màn hình điện thoại của bạn.",
    ar_step1_title: "Mở camera điện thoại",
    ar_step1_desc: "Quét mã QR in trên hộp bánh Vị Di Sản.",
    ar_step2_title: "Xem trải nghiệm AR sống động",
    ar_step2_desc: "Công trình di sản hiện lên chân thực ngay trước mắt bạn.",
    ar_step3_title: "Nghe câu chuyện dân tộc",
    ar_step3_desc: "Lắng nghe những lát cắt ký ức được kể lại theo cách chưa từng có.",
    ar_cta: "Khám phá ở đây!",

    order_title: "Đặt hộp quà của bạn",
    order_subtitle: "Nương Bắc Và Vị Di Sản",
    order_retail_title: "Khách lẻ",
    order_retail_heading: "Hộp 4 chiếc \"Hà Nội Trong Tôi\"",
    order_retail_desc: "Bốn chiếc bánh trung thu nghệ thuật, tạo hình thủ công tại Hà Nội, đặt trong hộp gỗ sơn mài kèm thiệp giấy dó và bộ đế kể chuyện song ngữ Việt - Anh.",
    order_price_single_label: "Bánh lẻ",
    order_price_single_value: "159.000 đ / chiếc",
    order_price_box_label: "Hộp 4 biểu tượng",
    order_price_box_value: "599.000 đ / hộp",
    order_save_badge: "Tiết kiệm 37.000 đ · save vs. 4 cakes lẻ",
    order_btn_box4: "Đặt hộp 4 chiếc",
    order_btn_single: "Mua Bánh lẻ",

    order_business_title: "Doanh nghiệp - Ngoại giao",
    order_business_product: "Quà tặng số lượng lớn theo yêu cầu",
    order_business_desc_1: "Khắc logo lên hộp gỗ, in thiệp riêng song ngữ, chọn cấu hình hộp theo nhân sự và đối tác. Tư vấn 1–1 với đội ngũ thiết kế của Vị Di Sản.",
    order_business_desc_2: "Đặt số lượng từ 20 hộp trở lên, vui lòng liên hệ trực tiếp để được tư vấn ưu đãi và lịch giao hàng.",
    order_contact_phone_label: "Điện thoại",
    order_contact_email_label: "Email",

    label_fullname: "Họ và tên",
    placeholder_fullname: "Nhập họ tên của bạn",
    label_company: "Đơn vị",
    placeholder_company: "Nhập tên đơn vị",
    label_email: "Email",
    placeholder_email: "Nhập email của bạn",
    label_qty_order: "Số lượng",
    placeholder_qty_order: "Nhập số lượng cần đặt",
    label_request: "Yêu cầu cụ thể",
    placeholder_request: "Mô tả yêu cầu của bạn",
    order_response_note: "Phản hồi trong 24 giờ làm việc.",
    order_btn_submit: "Gửi yêu cầu!",

    modal_title: "Đặt hàng",
    label_phone: "Điện thoại",
    placeholder_phone: "Nhập số điện thoại",
    label_address: "Địa chỉ",
    placeholder_address: "Nhập địa chỉ giao hàng",
    label_product: "Sản phẩm",
    label_flavors: "Chọn vị bánh yêu thích",
    label_notes: "Ghi chú",
    placeholder_notes: "Ghi chú thêm (nếu có)",
    modal_delivery_note: "Giao nội thành Hà Nội trong 1-2 ngày.",
    modal_submit: "Xác nhận đặt hàng",
    label_phone_required: "Số điện thoại *",

    payment_success_title: "Đặt hàng thành công!",
    payment_order_label: "Mã đơn hàng:",
    bank_mb_tab: "Cá nhân",
    bank_vcb_tab: "Công ty",
    qr_bank_label: "Ngân hàng",
    qr_account_number_label: "Số tài khoản",
    qr_account_name_label: "Chủ tài khoản",
    qr_amount_label: "Số tiền",
    btn_close: "Đóng",

    footer_brand_desc: "Bánh trung thu nghệ thuật, thủ công tại Hà Nội. Quà tặng văn hóa cho thế giới.",
    footer_copyright: "© 2026 VỊ DI SẢN - Lát cắt ký ức - câu chuyện dân tộc. Bản quyền ý tưởng và sáng tạo sản phẩm thuộc về Công ty TNHH Nương Bắc.",

    footer_nav_title: "Bộ sưu tập",
    footer_nav_item1: "Hà Nội Trong Tôi",
    footer_nav_item3: "Trải nghiệm QR",
    footer_nav_item4: "Sắp ra mắt",

    footer_services_title: "Dịch vụ",
    footer_service_item1: "Đặt hộp lẻ",
    footer_service_item2: "Quà tặng B2B",
    footer_service_item3: "Ngoại giao",
    footer_service_item4: "Vận chuyển quốc tế",

    footer_contact_title: "Liên hệ",
  },

  en: {
    nav_collection: "Collection",
    nav_stories: "Four Stories",
    nav_ar: "AR Experience",
    nav_order: "Order a Gift Box",
    nav_business: "Business",

    hero_title: "HANOI IN MY HEART",
    hero_subtitle_1: "Experience a thousand years of Hanoi like never before",
    hero_subtitle_2: "A perfect blend of Gastronomy - Culture - Technology - Experience",
    hero_cta: "Explore Now",

    stories_title: "Four Symbols",
    stories_title_script: "Four Stories",

    story1_title: "Temple of Literature",
    story1_caption: "\"Success - Achievement\"",
    story1_desc: "Built in 1070 under King Lý Thánh Tông, the Temple of Literature stands for a thousand years of Hanoi's devotion to learning. The cake carries the curved tiled roof and round window - a wish of success and achievement for your loved ones.",

    story2_title: "Turtle Tower",
    story2_caption: "\"Peace - Eternity\"",
    story2_desc: "In the heart of Hoàn Kiếm Lake, Turtle Tower stands quietly, echoing the moment King Lê returned the sacred sword - when war gave way to peace. The pure lotus filling is a wish for a peaceful year that endures through time.",

    story3_title: "One Pillar Pagoda",
    story3_caption: "\"Birth - Blessing\"",
    story3_desc: "Born from a dream - King Lý Thái Tông envisioned Quan Âm handing him a child upon a lotus throne, and the dream became reality. The warm red bean filling carries a wish: may blessings find their way to your door.",

    story4_title: "Long Biên Bridge",
    story4_caption: "\"Resilience - Connection\"",
    story4_desc: "For over a century, this old iron bridge has watched autumn cốm vendors cross the Red River into the city. The cốm filling is Hanoi's living memory - one bite, one lasting connection.",

    btn_learn_more: "Learn More",

    roadmap_title: "Heritage Journey",
    roadmap_quote: "\"From Hanoi In My Heart to Vietnamese Identity\"",
    roadmap_desc_1: "Beginning with \"Hanoi In My Heart\", we set out to capture the first symbols of this thousand-year-old land in every small cake. This is only the first step of a much longer journey - bringing Vietnamese culture closer to everyone, one region and one story at a time.",
    roadmap_desc_2: "From Hanoi, the \"Vị Di Sản\" journey will continue to spread to Huế, Hội An, Sài Gòn and every corner of the homeland - where every slice of memory carries its own story, waiting to be told like never before.",

    products_title: "The \"Vị Di Sản\" Collection",

    ar_title: "Scan to Hear the Story",
    ar_desc: "Every cake holds a fragment of memory. With a single scan, the heritage story hidden within each box comes vividly to life right on your phone screen.",
    ar_step1_title: "Open your phone camera",
    ar_step1_desc: "Scan the QR code printed on the Vị Di Sản box.",
    ar_step2_title: "Watch the AR experience come alive",
    ar_step2_desc: "The heritage monument appears vividly right before your eyes.",
    ar_step3_title: "Listen to the nation's story",
    ar_step3_desc: "Listen to fragments of memory told like never before.",
    ar_cta: "Discover It Here!",

    order_title: "Order Your Gift Box",
    order_subtitle: "Nương Bắc & Vị Di Sản",
    order_retail_title: "Individual Customers",
    order_retail_heading: "Set of 4 \"Hanoi In My Heart\" Cakes",
    order_retail_desc: "Four artisan mooncakes handcrafted in Hanoi, presented in a lacquered wooden box with a dó-paper card and a bilingual Vietnamese-English storytelling stand.",
    order_price_single_label: "Single Cake",
    order_price_single_value: "159,000 VND / cake",
    order_price_box_label: "Box of 4 Symbols",
    order_price_box_value: "599,000 VND / box",
    order_save_badge: "Save 37,000 VND vs. 4 single cakes",
    order_btn_box4: "Order the Set of 4",
    order_btn_single: "Buy a Single Cake",

    order_business_title: "Business & Corporate Gifting",
    order_business_product: "Bulk gifts tailored to your needs",
    order_business_desc_1: "Engrave your logo on the wooden box, print bilingual cards, and choose a box configuration for your staff and partners. Get 1-on-1 guidance from the Vị Di Sản design team.",
    order_business_desc_2: "For orders of 20 boxes or more, please contact us directly for preferred pricing and delivery scheduling.",
    order_contact_phone_label: "Phone",
    order_contact_email_label: "Email",

    label_fullname: "Full Name",
    placeholder_fullname: "Enter your full name",
    label_company: "Company",
    placeholder_company: "Enter your company name",
    label_email: "Email",
    placeholder_email: "Enter your email",
    label_qty_order: "Quantity",
    placeholder_qty_order: "Enter the quantity needed",
    label_request: "Specific Request",
    placeholder_request: "Describe what you need",
    order_response_note: "We respond within 24 business hours.",
    order_btn_submit: "Submit Request!",

    modal_title: "Place Your Order",
    label_phone: "Phone Number",
    placeholder_phone: "Enter your phone number",
    label_address: "Address",
    placeholder_address: "Enter your delivery address",
    label_product: "Product",
    label_flavors: "Choose your favorite flavors",
    label_notes: "Notes",
    placeholder_notes: "Any additional notes",
    modal_delivery_note: "Delivered within Hanoi city in 1-2 days.",
    modal_submit: "Confirm Order",
    label_phone_required: "Phone Number *",

    payment_success_title: "Order placed successfully!",
    payment_order_label: "Order code:",
    bank_mb_tab: "Individual",
    bank_vcb_tab: "Company",
    qr_bank_label: "Bank",
    qr_account_number_label: "Account Number",
    qr_account_name_label: "Account Holder",
    qr_amount_label: "Amount",
    btn_close: "Close",

    footer_brand_desc: "Artisan mooncakes, handcrafted in Hanoi. A cultural gift for the world.",
    footer_copyright: "© 2026 VỊ DI SẢN - A slice of memory, a story of the nation. Concept and product design owned by Nương Bắc Co., Ltd.",

    footer_nav_title: "Collection",
    footer_nav_item1: "Hanoi In My Heart",
    footer_nav_item3: "QR Experience",
    footer_nav_item4: "Coming Soon",

    footer_services_title: "Services",
    footer_service_item1: "Order Individually",
    footer_service_item2: "B2B Gifting",
    footer_service_item3: "Diplomatic Gifts",
    footer_service_item4: "International Shipping",

    footer_contact_title: "Contact",
  },
};

let currentLang = "vi";

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.documentElement.lang = lang;
  currentLang = lang;
}

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. HEADER: đổi trạng thái khi cuộn trang ---------- */
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scrollTop");

  function onScroll() {
    const scrolled = window.scrollY > 20;
    header.classList.toggle("is-scrolled", scrolled);
    scrollTopBtn.classList.toggle("is-visible", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 2. MENU MOBILE (hamburger) ---------- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");

  hamburger.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Đóng menu mobile khi chọn một mục điều hướng
  mainNav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- 3. TOGGLE NGÔN NGỮ (VN / EN) ---------- */
  const langToggle = document.getElementById("langToggle");
  const langOptions = langToggle.querySelectorAll(".lang-toggle__option");

  langToggle.addEventListener("click", (e) => {
    const target = e.target.closest(".lang-toggle__option");
    const nextLang = target ? target.dataset.lang : (currentLang === "vi" ? "en" : "vi");

    if (nextLang === currentLang) return;

    langOptions.forEach((opt) => opt.classList.toggle("is-active", opt.dataset.lang === nextLang));
    applyTranslations(nextLang);
  });

  /* ---------- 4. CUỘN MƯỢT ĐẾN ANCHOR ---------- */
  // Áp dụng cho mọi liên kết nội bộ dạng #id, bao gồm các nút "Tìm hiểu thêm"
  // luôn trỏ về khu vực "BỘ SẢN PHẨM VỊ DI SẢN" (#san-pham).
  const headerOffset = () => header.offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset() + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ---------- 5. HIỆU ỨNG XUẤT HIỆN KHI CUỘN (Scroll Reveal) ---------- */
  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${(index % 4) * 90}ms`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));

  /* ---------- 6. Ô NHẬP SỐ LƯỢNG (Khách lẻ) ---------- */
  const quantityWrap = document.querySelector(".quantity-input");
  if (quantityWrap) {
    const input = quantityWrap.querySelector("input");
    quantityWrap.querySelectorAll(".quantity-input__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        let value = parseInt(input.value, 10) || 1;
        value = btn.dataset.action === "increase" ? value + 1 : Math.max(1, value - 1);
        input.value = value;
      });
    });
  }

  /* ---------- 7. FORM: fallback chặn submit mặc định cho các form chưa có xử lý riêng ---------- */
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });

  /* ---------- 8. POPUP ĐẶT HÀNG (Modal): mở / đóng ---------- */
  const orderModalOverlay = document.getElementById("orderModalOverlay");
  const orderModalClose = document.getElementById("orderModalClose");
  const orderModalSelect = document.getElementById("modalSanPham");
  const btnOrderBox4 = document.getElementById("btnOrderBox4");
  const btnOrderSingle = document.getElementById("btnOrderSingle");
  const modalFormFields = document.getElementById("modalFormFields");
  const orderModalResult = document.getElementById("orderModalResult");
  const orderModalFormEl = document.getElementById("orderModalForm");

  function openOrderModal(productIndex) {
    if (orderModalSelect && typeof productIndex === "number") {
      orderModalSelect.selectedIndex = productIndex;
    }
    orderModalOverlay.classList.add("is-active");
    orderModalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeOrderModal() {
    orderModalOverlay.classList.remove("is-active");
    orderModalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Nếu popup đang ở màn hình kết quả (đã đặt hàng xong), đợi hiệu ứng đóng
    // xong rồi mới reset lại về form trống — để lần mở tiếp theo bắt đầu sạch.
    setTimeout(() => {
      if (orderModalResult && !orderModalResult.hidden) {
        orderModalResult.hidden = true;
        modalFormFields.hidden = false;
        orderModalFormEl.reset();
        enforceFlavorLimit();
      }
    }, 350);
  }

  if (orderModalOverlay && btnOrderBox4 && btnOrderSingle && orderModalClose) {
    btnOrderBox4.addEventListener("click", () => openOrderModal(0));
    btnOrderSingle.addEventListener("click", () => openOrderModal(1));

    orderModalClose.addEventListener("click", closeOrderModal);

    // Đóng khi click ra ngoài (trên lớp overlay mờ, không phải bên trong modal)
    orderModalOverlay.addEventListener("click", (e) => {
      if (e.target === orderModalOverlay) closeOrderModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && orderModalOverlay.classList.contains("is-active")) {
        closeOrderModal();
      }
    });
  }

  const orderModalDoneBtn = document.getElementById("orderModalDone");
  if (orderModalDoneBtn) {
    orderModalDoneBtn.addEventListener("click", closeOrderModal);
  }

  /* ---------- 9. GIỚI HẠN SỐ VỊ BÁNH THEO SỐ LƯỢNG ĐÃ NHẬP (Modal) ----------
     Số ô checkbox được tick không được vượt quá giá trị "Số lượng":
     khi đã chạm giới hạn, các ô chưa tick sẽ tự khoá lại (disabled) và
     hiện dòng cảnh báo giải thích vì sao không chọn thêm được nữa. */
  const modalQtyInput = document.getElementById("modalSoLuong");
  const flavorCheckboxes = Array.from(document.querySelectorAll('#orderModalForm input[name="vi"]'));
  const flavorWarning = document.getElementById("flavorWarning");

  function enforceFlavorLimit() {
    if (!modalQtyInput || flavorCheckboxes.length === 0) return;
    const limit = Math.max(1, parseInt(modalQtyInput.value, 10) || 1);
    let checked = flavorCheckboxes.filter((cb) => cb.checked);

    // Nếu người dùng giảm Số lượng xuống thấp hơn số vị đã chọn trước đó,
    // tự bỏ tick bớt các lựa chọn dư ra (tính từ lựa chọn cuối cùng).
    if (checked.length > limit) {
      checked.slice(limit).forEach((cb) => { cb.checked = false; });
      checked = checked.slice(0, limit);
    }

    const atLimit = checked.length >= limit && limit < flavorCheckboxes.length;
    if (flavorWarning) {
      flavorWarning.hidden = !atLimit;
      if (atLimit) {
        flavorWarning.textContent = `Bạn chỉ được chọn tối đa ${limit} vị, tương ứng với số lượng đã nhập.`;
      }
    }

    flavorCheckboxes.forEach((cb) => {
      cb.disabled = !cb.checked && checked.length >= limit;
    });
  }

  if (modalQtyInput) {
    flavorCheckboxes.forEach((cb) => cb.addEventListener("change", enforceFlavorLimit));
    modalQtyInput.addEventListener("input", enforceFlavorLimit);
    enforceFlavorLimit();
  }

  /* ---------- 10. GỬI ĐƠN HÀNG VỀ BACKEND ---------- */

  // TODO: thay bằng URL Cloudflare Worker / Backend thật xử lý đơn hàng.
  const API_ENDPOINT = "URL_WORKER_CUA_TOI";

  const BANKS = {
    mb: { code: "MB", account: "6619121964", accountName: "BUI THU HA", labelKey: "bank_mb_tab" },
    vcb: { code: "VCB", account: "0451000402887", accountName: "CONG TY TNHH NUONG BAC", labelKey: "bank_vcb_tab" },
  };

  // Đọc mã Affiliate từ URL, ví dụ ?ref=ABC123 — không có thì để rỗng.
  function getAffiliateCode() {
    const params = new URLSearchParams(window.location.search);
    return params.get("ref") || "";
  }

  function formatVnd(amount) {
    const n = Number(amount) || 0;
    return `${new Intl.NumberFormat("vi-VN").format(n)} đ`;
  }

  function buildVietQrUrl(bankKey, amount, orderId) {
    const bank = BANKS[bankKey];
    const params = new URLSearchParams({
      amount: amount,
      addInfo: orderId,
      accountName: bank.accountName,
    });
    return `https://img.vietqr.io/image/${bank.code}-${bank.account}-compact2.png?${params.toString()}`;
  }

  function collectFlavors(form) {
    return Array.from(form.querySelectorAll('input[name="vi"]:checked')).map((cb) => cb.value);
  }

  // Gửi đơn hàng lên backend, trả về { order_id, total_amount, ... } khi thành công.
  async function submitOrder(payload) {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.order_id) {
      throw new Error(data.message || "Không thể gửi đơn hàng, vui lòng thử lại sau.");
    }
    return data;
  }

  /* ---------- 11. FORM DOANH NGHIỆP: submit + thông báo kết quả (Luồng A) ---------- */
  const formDoanhNghiep = document.getElementById("formDoanhNghiep");
  const businessFormFields = document.getElementById("businessFormFields");
  const businessSuccess = document.getElementById("businessSuccess");
  const businessSuccessText = document.getElementById("businessSuccessText");

  if (formDoanhNghiep) {
    formDoanhNghiep.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = formDoanhNghiep.querySelector('button[type="submit"]');

      const payload = {
        loaiKhachHang: "doanh_nghiep",
        hoTen: formDoanhNghiep.hoTen.value.trim(),
        soDienThoai: formDoanhNghiep.soDienThoaiDN.value.trim(),
        donVi: formDoanhNghiep.donVi.value.trim(),
        email: formDoanhNghiep.email.value.trim(),
        soLuong: formDoanhNghiep.soLuongDat.value.trim(),
        yeuCau: formDoanhNghiep.yeuCau.value.trim(),
        affiliateCode: getAffiliateCode(),
      };

      if (!payload.hoTen || !payload.soDienThoai) {
        alert("Vui lòng nhập Họ tên và Số điện thoại.");
        return;
      }

      submitBtn.disabled = true;
      try {
        const result = await submitOrder(payload);
        const lang = document.documentElement.lang === "en" ? "en" : "vi";
        const msg = lang === "en"
          ? `Thank you! Your consultation request (Ref: ${result.order_id}) has been received. The Vị Di Sản team will contact you at your phone number as soon as possible.`
          : `Cảm ơn Quý doanh nghiệp! Yêu cầu tư vấn (Mã: ${result.order_id}) đã được ghi nhận. Đội ngũ Vị Di Sản sẽ liên hệ lại qua số điện thoại của quý khách trong thời gian sớm nhất.`;
        businessSuccessText.textContent = msg;
        businessFormFields.hidden = true;
        businessSuccess.hidden = false;
      } catch (err) {
        alert(err.message);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- 12. FORM KHÁCH LẺ (Modal): submit + màn hình thanh toán (Luồng B) ---------- */
  if (orderModalFormEl) {
    const resultOrderId = document.getElementById("resultOrderId");
    const qrImage = document.getElementById("qrImage");
    const qrBankName = document.getElementById("qrBankName");
    const qrAccountNumber = document.getElementById("qrAccountNumber");
    const qrAccountName = document.getElementById("qrAccountName");
    const qrAmount = document.getElementById("qrAmount");
    const qrTabs = document.querySelectorAll(".qr-picker__tab");

    let currentOrder = null; // { order_id, total_amount }

    function renderQr(bankKey) {
      if (!currentOrder) return;
      const bank = BANKS[bankKey];
      const lang = document.documentElement.lang === "en" ? "en" : "vi";
      qrImage.src = buildVietQrUrl(bankKey, currentOrder.total_amount, currentOrder.order_id);
      qrBankName.textContent = translations[lang][bank.labelKey] + " · " + bank.code;
      qrAccountNumber.textContent = bank.account;
      qrAccountName.textContent = bank.accountName;
      qrAmount.textContent = formatVnd(currentOrder.total_amount);
      qrTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.bank === bankKey));
    }

    qrTabs.forEach((tab) => {
      tab.addEventListener("click", () => renderQr(tab.dataset.bank));
    });

    orderModalFormEl.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = orderModalFormEl.querySelector('.order-modal__submit');

      const payload = {
        loaiKhachHang: "khach_le",
        hoTen: orderModalFormEl.hoTen.value.trim(),
        soDienThoai: orderModalFormEl.dienThoai.value.trim(),
        diaChi: orderModalFormEl.diaChi.value.trim(),
        sanPham: orderModalSelect.value,
        soLuong: modalQtyInput.value,
        viBanh: collectFlavors(orderModalFormEl),
        ghiChu: orderModalFormEl.ghiChu.value.trim(),
        affiliateCode: getAffiliateCode(),
      };

      if (!payload.hoTen || !payload.soDienThoai || !payload.diaChi) {
        alert("Vui lòng nhập đủ Họ tên, Điện thoại và Địa chỉ giao hàng.");
        return;
      }

      submitBtn.disabled = true;
      try {
        const result = await submitOrder(payload);
        currentOrder = result;
        resultOrderId.textContent = result.order_id;
        modalFormFields.hidden = true;
        orderModalResult.hidden = false;
        renderQr("mb");
      } catch (err) {
        alert(err.message);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

});
