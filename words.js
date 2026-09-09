const WORDS = [
  {
    "word": "computer",
    "zh": "電腦",
    "pos": "noun"
  },
  {
    "word": "hardware",
    "zh": "硬體",
    "pos": "noun"
  },
  {
    "word": "software",
    "zh": "軟體",
    "pos": "noun"
  },
  {
    "word": "network",
    "zh": "網路",
    "pos": "noun"
  },
  {
    "word": "database",
    "zh": "資料庫",
    "pos": "noun"
  },
  {
    "word": "program",
    "zh": "程式",
    "pos": "noun"
  },
  {
    "word": "algorithm",
    "zh": "演算法",
    "pos": "noun"
  },
  {
    "word": "memory",
    "zh": "記憶體",
    "pos": "noun"
  },
  {
    "word": "keyboard",
    "zh": "鍵盤",
    "pos": "noun"
  },
  {
    "word": "monitor",
    "zh": "螢幕",
    "pos": "noun"
  },
  {
    "word": "processor",
    "zh": "處理器",
    "pos": "noun"
  },
  {
    "word": "server",
    "zh": "伺服器",
    "pos": "noun"
  },
  {
    "word": "browser",
    "zh": "瀏覽器",
    "pos": "noun"
  },
  {
    "word": "file",
    "zh": "檔案",
    "pos": "noun"
  },
  {
    "word": "folder",
    "zh": "資料夾",
    "pos": "noun"
  },
  {
    "word": "Internet",
    "zh": "網際網路",
    "pos": "noun"
  },
  {
    "word": "security",
    "zh": "安全性",
    "pos": "noun"
  },
  {
    "word": "password",
    "zh": "密碼",
    "pos": "noun"
  },
  {
    "word": "website",
    "zh": "網站",
    "pos": "noun"
  },
  {
    "word": "application",
    "zh": "應用程式",
    "pos": "noun"
  },
  {
    "word": "information",
    "zh": "資訊",
    "pos": "noun"
  },
  {
    "word": "technology",
    "zh": "科技",
    "pos": "noun"
  },
  {
    "word": "system",
    "zh": "系統",
    "pos": "noun"
  },
  {
    "word": "device",
    "zh": "裝置",
    "pos": "noun"
  },
  {
    "word": "storage",
    "zh": "儲存空間",
    "pos": "noun"
  },
  {
    "word": "input",
    "zh": "輸入",
    "pos": "noun"
  },
  {
    "word": "output",
    "zh": "輸出",
    "pos": "noun"
  },
  {
    "word": "process",
    "zh": "處理",
    "pos": "noun"
  },
  {
    "word": "data",
    "zh": "資料",
    "pos": "noun"
  },
  {
    "word": "digital",
    "zh": "數位的",
    "pos": "adjective"
  },
  {
    "word": "virtual",
    "zh": "虛擬的",
    "pos": "adjective"
  },
  {
    "word": "wireless",
    "zh": "無線的",
    "pos": "adjective"
  },
  {
    "word": "secure",
    "zh": "安全的",
    "pos": "adjective"
  },
  {
    "word": "connect",
    "zh": "連接",
    "pos": "verb"
  },
  {
    "word": "download",
    "zh": "下載",
    "pos": "verb"
  },
  {
    "word": "upload",
    "zh": "上傳",
    "pos": "verb"
  },
  {
    "word": "install",
    "zh": "安裝",
    "pos": "verb"
  },
  {
    "word": "delete",
    "zh": "刪除",
    "pos": "verb"
  },
  {
    "word": "access",
    "zh": "存取",
    "pos": "verb"
  },
  {
    "word": "create",
    "zh": "建立",
    "pos": "verb"
  },
  {
    "word": "update",
    "zh": "更新",
    "pos": "verb"
  },
  {
    "word": "protect",
    "zh": "保護",
    "pos": "verb"
  },
  {
    "word": "search",
    "zh": "搜尋",
    "pos": "verb"
  },
  {
    "word": "manage",
    "zh": "管理",
    "pos": "verb"
  },
  {
    "word": "programmer",
    "zh": "程式設計師",
    "pos": "noun"
  },
  {
    "word": "coding",
    "zh": "程式設計",
    "pos": "noun"
  },
  {
    "word": "interface",
    "zh": "介面",
    "pos": "noun"
  },
  {
    "word": "networking",
    "zh": "網路技術",
    "pos": "noun"
  },
  {
    "word": "operating system",
    "zh": "作業系統",
    "pos": "noun"
  },
  {
    "word": "cloud computing",
    "zh": "雲端運算",
    "pos": "noun"
  },
  {
    "word": "artificial intelligence",
    "zh": "人工智慧",
    "pos": "noun"
  },
  {
    "word": "cybersecurity",
    "zh": "網路安全",
    "pos": "noun"
  },
  {
    "word": "encryption",
    "zh": "加密",
    "pos": "noun"
  },
  {
    "word": "virus",
    "zh": "病毒",
    "pos": "noun"
  },
  {
    "word": "backup",
    "zh": "備份",
    "pos": "noun"
  },
  {
    "word": "command",
    "zh": "指令",
    "pos": "noun"
  },
  {
    "word": "pixel",
    "zh": "像素",
    "pos": "noun"
  },
  {
    "word": "CPU",
    "zh": "中央處理器",
    "pos": "noun"
  },
  {
    "word": "RAM",
    "zh": "隨機存取記憶體",
    "pos": "noun"
  },
  {
    "word": "debug",
    "zh": "除錯",
    "pos": "verb"
  },
  {
    "word": "compile",
    "zh": "編譯",
    "pos": "verb"
  }
];

const POS_ZH = {noun:"名詞", verb:"動詞", adjective:"形容詞", adverb:"副詞"};
