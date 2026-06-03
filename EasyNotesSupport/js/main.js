const translations = {
  zh: {
    brandName: "备忘便签",
    navFeatures: "功能",
    navSupport: "支持",
    navFaq: "常见问题",
    eyebrow: "本地计划与便签管理工具",
    heroTitle: "把计划拆成清单，让每一天都有结果。",
    heroDesc: "备忘便签帮助你创建有日期范围的计划，逐项完成任务，并在结束时清楚留下完成或失败记录。",
    contactSupport: "联系技术支持",
    viewFaq: "查看常见问题",
    previewHome: "首页",
    completed: "累计完成",
    failed: "累计失败",
    active: "进行中",
    previewPlanTitle: "7 天阅读计划",
    previewPlanDate: "6月3日 - 6月9日",
    previewProgress: "已完成 5/7 · 71%",
    previewItem1: "阅读 30 分钟",
    previewItem2: "记录一句摘抄",
    previewItem3: "整理今日感受",
    featuresEyebrow: "核心功能",
    featuresTitle: "简单、明确、有结果感",
    featurePlanTitle: "创建计划",
    featurePlanDesc: "设置开始日期、结束日期和条项列表，支持周期内完成一次或每天循环完成。",
    featureProgressTitle: "进度追踪",
    featureProgressDesc: "用分段进度条展示每一项的完成状态，勾选后立即刷新进度。",
    featureRecordsTitle: "完成与失败记录",
    featureRecordsDesc: "计划结束后自动进入完成或失败记录，方便回看自己的执行结果。",
    featureLocalTitle: "本地保存",
    featureLocalDesc: "v1.0 不需要账号，计划数据仅保存在本机，重启应用后仍可查看。",
    supportEyebrow: "技术支持",
    supportTitle: "遇到问题时，可以直接联系我们。",
    supportDesc: "请尽量描述设备型号、系统版本、遇到问题的页面和复现步骤，我们会根据反馈持续优化应用体验。",
    emailLabel: "反馈邮箱",
    privacyLabel: "隐私政策",
    agreementLabel: "用户协议",
    openPage: "打开页面",
    faqEyebrow: "FAQ",
    faqTitle: "常见问题",
    faq1Q: "备忘便签是否需要登录账号？",
    faq1A: "不需要。v1.0 不提供账号体系，所有计划数据都保存在本机。",
    faq2Q: "为什么没有收到提醒通知？",
    faq2A: "请检查系统通知权限、计划提醒开关、提醒时间，以及计划是否仍处于进行中并存在未完成条项。",
    faq3Q: "已失败的计划还能继续打勾完成吗？",
    faq3A: "不能。已完成和已失败都是最终状态。你可以使用重新创建功能生成新的进行中计划。",
    faq4Q: "清空本地数据后可以恢复吗？",
    faq4A: "不能。清空本地数据是不可逆操作，请在确认不再需要记录后再执行。",
    footerName: "备忘便签 Easy Notes",
    footerDesc: "本地计划管理与技术支持",
    mailSubject: "备忘便签 意见反馈",
    mailBody: "请描述你遇到的问题：%0D%0A%0D%0A设备型号：%0D%0A系统版本：%0D%0A应用版本："
  },
  en: {
    brandName: "Easy Notes",
    navFeatures: "Features",
    navSupport: "Support",
    navFaq: "FAQ",
    eyebrow: "Local plans and notes",
    heroTitle: "Turn plans into checklists and finish with clarity.",
    heroDesc: "Easy Notes helps you create dated plans, complete items one by one, and keep a clear record of completed or failed plans.",
    contactSupport: "Contact Support",
    viewFaq: "View FAQ",
    previewHome: "Home",
    completed: "Completed",
    failed: "Failed",
    active: "Active",
    previewPlanTitle: "7-Day Reading Plan",
    previewPlanDate: "Jun 3 - Jun 9",
    previewProgress: "Completed 5/7 · 71%",
    previewItem1: "Read for 30 minutes",
    previewItem2: "Save one quote",
    previewItem3: "Write today’s note",
    featuresEyebrow: "Core Features",
    featuresTitle: "Simple, clear, and result-focused",
    featurePlanTitle: "Create Plans",
    featurePlanDesc: "Set a start date, end date, and task list. Choose one-time completion or daily recurring completion.",
    featureProgressTitle: "Track Progress",
    featureProgressDesc: "Segmented progress blocks show each item’s status and update immediately after every check.",
    featureRecordsTitle: "Completion and Failure Records",
    featureRecordsDesc: "Plans automatically move into completed or failed records, so you can review your past results.",
    featureLocalTitle: "Local Storage",
    featureLocalDesc: "No account is required in v1.0. Plan data is stored locally on your device and remains available after restart.",
    supportEyebrow: "Support",
    supportTitle: "Need help? Contact us directly.",
    supportDesc: "Please include your device model, system version, the page where the issue happened, and steps to reproduce it.",
    emailLabel: "Support Email",
    privacyLabel: "Privacy Policy",
    agreementLabel: "User Agreement",
    openPage: "Open Page",
    faqEyebrow: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Does Easy Notes require an account?",
    faq1A: "No. v1.0 does not include accounts. All plan data is stored locally on your device.",
    faq2Q: "Why did I not receive a reminder notification?",
    faq2A: "Please check system notification permission, the plan reminder switch, reminder time, and whether the plan is still active with unfinished items.",
    faq3Q: "Can I complete a failed plan later?",
    faq3A: "No. Completed and failed are final states. You can recreate a failed plan as a new active plan.",
    faq4Q: "Can local data be restored after clearing it?",
    faq4A: "No. Clearing local data is irreversible. Please confirm you no longer need the records before deleting them.",
    footerName: "Easy Notes",
    footerDesc: "Local plan management and technical support",
    mailSubject: "Easy Notes Feedback",
    mailBody: "Please describe the issue:%0D%0A%0D%0ADevice model:%0D%0ASystem version:%0D%0AApp version:"
  }
};

let currentLang = localStorage.getItem("easyNotesSupportLang") || (navigator.language.startsWith("zh") ? "zh" : "en");

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("easyNotesSupportLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "备忘便签 | Easy Notes Support" : "Easy Notes | Support";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });

  const toggle = document.getElementById("langToggle");
  toggle.textContent = lang === "zh" ? "EN" : "中文";

  const mailLink = document.getElementById("mailLink");
  const subject = encodeURIComponent(translations[lang].mailSubject);
  mailLink.href = `mailto:aainote@outlook.com?subject=${subject}&body=${translations[lang].mailBody}`;
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLanguage(currentLang === "zh" ? "en" : "zh");
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("is-open");
  });
});

applyLanguage(currentLang);
