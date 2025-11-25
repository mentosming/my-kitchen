import { useState } from 'react';
import { ChefHat, Utensils, BookOpen, Clock, Users, X, Globe, ChevronDown } from 'lucide-react';

// Types
type Language = 'en' | 'tl' | 'id';
type Category = 'pork' | 'beef' | 'chicken' | 'seafood' | 'veggie' | 'egg' | 'soup';

type Ingredient = {
  zh: string;
  en: string;
  tl: string; // Tagalog (Filipino)
  id: string; // Indonesian
};

type Step = {
  zh: string;
  en: string;
  tl: string;
  id: string;
};

type Recipe = {
  id: number;
  category: Category | Category[];
  titleZH: string;
  titleEN: string;
  titleTL: string;
  titleID: string;
  image: string; // Image URL
  time: string;
  servings: string;
  ingredients: Ingredient[];
  seasoning: Ingredient[];
  steps: Step[];
  tags: string[];
};

// Data with Local Images (Now using .png)
const recipes: Recipe[] = [
  // --- PORK RECIPES ---
  {
    id: 1,
    category: 'pork',
    titleZH: '薯仔炆排骨',
    titleEN: 'Braised Pork Ribs with Potato',
    titleTL: 'Adobong Tadyang ng Baboy na may Patatas',
    titleID: 'Iga Babi Braised dengan Kentang',
    image: '/recipes/1.png',
    time: '45 min',
    servings: '2-3',
    ingredients: [
      { zh: '排骨 300g', en: 'Pork Ribs 300g', tl: 'Tadyang ng Baboy 300g', id: 'Iga Babi 300g' },
      { zh: '薯仔 2個 (切塊)', en: 'Potatoes 2 (Chunks)', tl: 'Patatas 2 (Hiniwa)', id: 'Kentang 2 (Potong)' },
      { zh: '薑片 3片', en: 'Ginger 3 slices', tl: 'Luya 3 piraso', id: 'Jahe 3 iris' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp', tl: 'Toyo 1 tbsp', id: 'Kecap Asin 1 sdm' },
      { zh: '蠔油 1湯匙', en: 'Oyster Sauce 1 tbsp', tl: 'Oyster Sauce 1 tbsp', id: 'Saus Tiram 1 sdm' },
      { zh: '糖 1茶匙', en: 'Sugar 1 tsp', tl: 'Asukal 1 tsp', id: 'Gula 1 sdt' },
      { zh: '水 1杯', en: 'Water 1 cup', tl: 'Tubig 1 tasa', id: 'Air 1 cangkir' }
    ],
    steps: [
      { 
        zh: '排骨飛水，薯仔煎至金黃備用。', 
        en: 'Blanch ribs. Pan-fry potatoes until golden.',
        tl: 'Pakuluan ang tadyang. I-prito ang patatas hanggang maging golden.',
        id: 'Rebus iga sebentar. Goreng kentang hingga keemasan.'
      },
      { 
        zh: '爆香薑片，加入排骨炒香。', 
        en: 'Sauté ginger, add ribs and stir-fry.',
        tl: 'Igisa ang luya, ilagay ang tadyang at haluin.',
        id: 'Tumis jahe, masukkan iga dan aduk rata.'
      },
      { 
        zh: '加入調味料和水，蓋蓋炆20分鐘。', 
        en: 'Add seasonings and water, simmer for 20 mins.',
        tl: 'Ilagay ang pampalasa at tubig, pakuluan ng 20 minuto.',
        id: 'Tambahkan bumbu dan air, didihkan selama 20 menit.'
      },
      { 
        zh: '加入薯仔再炆15分鐘至軟身。', 
        en: 'Add potatoes, simmer 15 more mins until soft.',
        tl: 'Ilagay ang patatas, pakuluan pa ng 15 minuto hanggang lumambot.',
        id: 'Masukkan kentang, masak lagi 15 menit hingga empuk.'
      }
    ],
    tags: ['Classic', 'Kids Favorite']
  },
  {
    id: 2,
    category: 'pork',
    titleZH: '西蘭花炒肉片',
    titleEN: 'Stir-fried Pork with Broccoli',
    titleTL: 'Ginisang Baboy na may Brokoli',
    titleID: 'Tumis Daging Babi dengan Brokoli',
    image: '/recipes/2.png',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '瘦肉 200g (切片)', en: 'Lean Pork 200g (Sliced)', tl: 'Laman ng Baboy 200g (Hiniwa)', id: 'Daging Babi 200g (Iris)' },
      { zh: '西蘭花 1個', en: 'Broccoli 1 head', tl: 'Brokoli 1 piraso', id: 'Brokoli 1 buah' },
      { zh: '蒜頭 2瓣', en: 'Garlic 2 cloves', tl: 'Bawang 2 butil', id: 'Bawang Putih 2 siung' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp', tl: 'Toyo 1 tbsp', id: 'Kecap Asin 1 sdm' },
      { zh: '粟粉 1茶匙 (醃肉)', en: 'Cornstarch 1 tsp (Marinade)', tl: 'Cornstarch 1 tsp (Pambabad)', id: 'Tepung Maizena 1 sdt (Marinasi)' },
      { zh: '鹽 少許', en: 'Salt pinch', tl: 'Asin kurot', id: 'Garam secukupnya' }
    ],
    steps: [
      { 
        zh: '肉片用生抽粟粉醃15分鐘。', 
        en: 'Marinate pork with soy sauce & starch for 15 mins.',
        tl: 'Ibabad ang baboy sa toyo at cornstarch ng 15 minuto.',
        id: 'Marinasi daging dengan kecap asin & maizena selama 15 menit.'
      },
      { 
        zh: '西蘭花焯水備用。', 
        en: 'Blanch broccoli.',
        tl: 'Banlian ang brokoli.',
        id: 'Rebus brokoli sebentar.'
      },
      { 
        zh: '爆香蒜頭，炒熟肉片，加入西蘭花兜勻。', 
        en: 'Fry garlic and pork, toss in broccoli.',
        tl: 'Igisa ang bawang at baboy, ihalo ang brokoli.',
        id: 'Tumis bawang putih dan daging, masukkan brokoli aduk rata.'
      }
    ],
    tags: ['Quick', 'Healthy']
  },
  {
    id: 3,
    category: ['pork', 'soup'],
    titleZH: '紅蘿蔔粟米瘦肉湯',
    titleEN: 'Carrot & Corn Pork Soup',
    titleTL: 'Sopas na Mais at Karot na may Baboy',
    titleID: 'Sup Wortel & Jagung Daging Babi',
    image: '/recipes/3.png',
    time: '90 min',
    servings: '4',
    ingredients: [
      { zh: '瘦肉 300g', en: 'Lean Pork 300g', tl: 'Laman ng Baboy 300g', id: 'Daging Babi 300g' },
      { zh: '紅蘿蔔 1條', en: 'Carrot 1 pc', tl: 'Karot 1 piraso', id: 'Wortel 1 buah' },
      { zh: '粟米 2條', en: 'Corn 2 pcs', tl: 'Mais 2 piraso', id: 'Jagung 2 buah' }
    ],
    seasoning: [
      { zh: '鹽 適量', en: 'Salt to taste', tl: 'Asin (ayon sa panlasa)', id: 'Garam secukupnya' }
    ],
    steps: [
      { 
        zh: '所有材料洗淨，切塊。', 
        en: 'Wash and chop all ingredients.',
        tl: 'Hugasan at hiwain ang lahat ng sangkap.',
        id: 'Cuci dan potong semua bahan.'
      },
      { 
        zh: '瘦肉飛水。', 
        en: 'Blanch the pork.',
        tl: 'Pakuluan sandali ang baboy para luminis.',
        id: 'Rebus daging babi sebentar untuk membersihkan.'
      },
      { 
        zh: '水滾後放入所有材料，煲1.5小時。', 
        en: 'Boil water, add all ingredients, simmer 1.5 hrs.',
        tl: 'Pagkulo ng tubig, ilagay lahat at pakuluan ng 1.5 oras.',
        id: 'Didihkan air, masukkan semua bahan, masak 1.5 jam.'
      }
    ],
    tags: ['Soup', 'Comfort']
  },
  {
    id: 4,
    category: 'pork',
    titleZH: '黃芽白炒肉片',
    titleEN: 'Stir-fry Napa Cabbage w/ Pork',
    titleTL: 'Ginisang Napa Cabbage na may Baboy',
    titleID: 'Tumis Sawi Putih dengan Daging Babi',
    image: '/recipes/4.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '五花肉/瘦肉 200g', en: 'Pork Belly/Lean 200g', tl: 'Liempo/Laman 200g', id: 'Samcan/Daging 200g' },
      { zh: '黃芽白 半棵', en: 'Napa Cabbage 1/2', tl: 'Napa Cabbage 1/2', id: 'Sawi Putih 1/2' },
      { zh: '薑絲 少許', en: 'Ginger strips', tl: 'Luya (hiniwa)', id: 'Jahe iris' }
    ],
    seasoning: [
      { zh: '雞粉 1茶匙', en: 'Chicken Powder 1 tsp', tl: 'Chicken Powder 1 tsp', id: 'Kaldu Ayam 1 sdt' },
      { zh: '胡椒粉 少許', en: 'Pepper pinch', tl: 'Paminta kurot', id: 'Lada secukupnya' }
    ],
    steps: [
      { 
        zh: '肉片煎香出油 (如用五花肉)。', 
        en: 'Pan-fry pork until fragrant.',
        tl: 'I-prito ang baboy hanggang bumango.',
        id: 'Goreng daging babi sampai harum.'
      },
      { 
        zh: '加入黃芽白炒至軟身。', 
        en: 'Add cabbage and stir-fry until soft.',
        tl: 'Ilagay ang cabbage at igisa hanggang lumambot.',
        id: 'Masukkan sawi putih, tumis sampai layu.'
      },
      { 
        zh: '加少許水和調味焗煮2分鐘。', 
        en: 'Add water/seasoning, cover for 2 mins.',
        tl: 'Lagyan ng tubig/pampalasa, takpan ng 2 minuto.',
        id: 'Tambahkan air/bumbu, tutup selama 2 menit.'
      }
    ],
    tags: ['Simple', 'Sweet']
  },
  {
    id: 5,
    category: 'pork',
    titleZH: '蒸肉餅 (加冬菇/馬蹄)',
    titleEN: 'Steamed Minced Pork Patty',
    titleTL: 'Steamed Giniling na Baboy',
    titleID: 'Tim Daging Babi Cincang',
    image: '/recipes/5.png',
    time: '25 min',
    servings: '3',
    ingredients: [
      { zh: '免治豬肉 300g', en: 'Minced Pork 300g', tl: 'Giniling na Baboy 300g', id: 'Daging Babi Cincang 300g' },
      { zh: '冬菇 3隻 (切粒)', en: 'Mushrooms 3 (Diced)', tl: 'Kabute 3 (Hiniwa)', id: 'Jamur 3 (Cincang)' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp', tl: 'Toyo 1 tbsp', id: 'Kecap Asin 1 sdm' },
      { zh: '糖/粟粉 各1茶匙', en: 'Sugar/Starch 1 tsp ea', tl: 'Asukal/Gawgaw 1 tsp bawat isa', id: 'Gula/Maizena 1 sdt masing-masing' },
      { zh: '水 2湯匙 (分次打入)', en: 'Water 2 tbsp (Mix in)', tl: 'Tubig 2 tbsp (Ihalo)', id: 'Air 2 sdm (Campurkan)' }
    ],
    steps: [
      { 
        zh: '豬肉加入調味及水，順時針攪至起膠。', 
        en: 'Mix pork with seasoning/water until sticky.',
        tl: 'Paghaluin ang baboy, pampalasa at tubig hanggang malagkit.',
        id: 'Campur daging dengan bumbu/air sampai lengket.'
      },
      { 
        zh: '加入冬菇粒拌勻，鋪平碟上。', 
        en: 'Mix in mushrooms, spread on plate.',
        tl: 'Ihalo ang kabute, ilagay sa plato.',
        id: 'Masukkan jamur, ratakan di piring.'
      },
      { 
        zh: '大火蒸12-15分鐘。', 
        en: 'Steam on high heat for 12-15 mins.',
        tl: 'I-steam sa malakas na apoy ng 12-15 minuto.',
        id: 'Kukus dengan api besar selama 12-15 menit.'
      }
    ],
    tags: ['Classic', 'Rice Killer']
  },
  {
    id: 6,
    category: 'pork',
    titleZH: '椒鹽豬扒',
    titleEN: 'Salt & Pepper Pork Chops',
    titleTL: 'Pork Chop na may Asin at Paminta',
    titleID: 'Babi Goreng Garam & Lada',
    image: '/recipes/6.png',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '豬扒 3塊', en: 'Pork Chops 3 pcs', tl: 'Pork Chops 3 piraso', id: 'Pork Chop 3 potong' },
      { zh: '蒜蓉/辣椒粒', en: 'Minced Garlic/Chili', tl: 'Bawang/Sili', id: 'Bawang Putih/Cabai' }
    ],
    seasoning: [
      { zh: '椒鹽 適量', en: 'Salt & Pepper Powder', tl: 'Salt & Pepper Powder', id: 'Bubuk Garam & Lada' },
      { zh: '紹興酒 1湯匙', en: 'Shaoxing Wine 1 tbsp', tl: 'Shaoxing Wine 1 tbsp', id: 'Arak Masak 1 sdm' }
    ],
    steps: [
      { 
        zh: '豬扒用刀背拍鬆，醃好煎至金黃。', 
        en: 'Tenderize chops, marinate, fry til golden.',
        tl: 'Palambutin ang baboy, ibabad, iprito hanggang golden.',
        id: 'Pukul daging, marinasi, goreng hingga keemasan.'
      },
      { 
        zh: '爆香蒜蓉辣椒，回鍋兜勻撒椒鹽。', 
        en: 'Fry garlic/chili, toss chops with spice.',
        tl: 'Igisa ang bawang/sili, ihalo ang baboy at budburan ng salt & pepper.',
        id: 'Tumis bawang/cabai, masukkan daging, taburi garam lada.'
      }
    ],
    tags: ['Crispy', 'Savory']
  },
  {
    id: 24,
    category: 'pork',
    titleZH: '台式魯肉飯',
    titleEN: 'Taiwanese Braised Pork Rice',
    titleTL: 'Taiwanese Braised Pork Rice',
    titleID: 'Nasi Babi Kecap Taiwan',
    image: '/recipes/24.png',
    time: '60 min',
    servings: '3-4',
    ingredients: [
      { zh: '五花肉 500g (切細條)', en: 'Pork Belly 500g (Strips)', tl: 'Liempo 500g (Strips)', id: 'Samcan 500g (Potong panjang)' },
      { zh: '雞蛋 3-4隻 (熟)', en: 'Boiled Eggs 3-4', tl: 'Nilagang Itlog 3-4', id: 'Telur Rebus 3-4' },
      { zh: '紅蔥頭/洋蔥碎 3湯匙', en: 'Minced Shallots/Onion 3 tbsp', tl: 'Sibuyas 3 tbsp', id: 'Bawang Merah Cincang 3 sdm' }
    ],
    seasoning: [
      { zh: '生抽 3湯匙', en: 'Soy Sauce 3 tbsp', tl: 'Toyo 3 tbsp', id: 'Kecap Asin 3 sdm' },
      { zh: '老抽 1湯匙 (上色)', en: 'Dark Soy 1 tbsp', tl: 'Dark Soy 1 tbsp', id: 'Kecap Pekat 1 sdm' },
      { zh: '冰糖 20g', en: 'Rock Sugar 20g', tl: 'Rock Sugar 20g', id: 'Gula Batu 20g' },
      { zh: '五香粉 少許', en: 'Five Spice Powder', tl: 'Five Spice Powder', id: 'Bubuk Ngohiong' },
      { zh: '水 600ml', en: 'Water 600ml', tl: 'Tubig 600ml', id: 'Air 600ml' }
    ],
    steps: [
      { 
        zh: '五花肉切條飛水。熟蛋剝殼備用。', 
        en: 'Blanch pork strips. Peel eggs.',
        tl: 'Pakuluan ang baboy. Balatan ang itlog.',
        id: 'Rebus daging sebentar. Kupas telur.'
      },
      { 
        zh: '不用油，細火炒五花肉至出油金黃，盛起。', 
        en: 'Dry fry pork until oily & golden, remove.',
        tl: 'Iprito ang baboy nang walang mantika hanggang magmantika.',
        id: 'Goreng daging tanpa minyak hingga keluar minyaknya.'
      },
      { 
        zh: '原鑊爆香紅蔥頭，加肉、調味及水煮滾。', 
        en: 'Fry shallots, add pork, seasoning & water.',
        tl: 'Igisa ang sibuyas, ilagay ang baboy, pampalasa at tubig.',
        id: 'Tumis bawang merah, masukkan daging, bumbu & air.'
      },
      { 
        zh: '加入蛋，細火炆煮45分鐘至濃稠。', 
        en: 'Add eggs, simmer 45 mins until thick.',
        tl: 'Ilagay ang itlog, pakuluan ng 45 minuto hanggang lumapot.',
        id: 'Masukkan telur, masak 45 menit hingga kuah kental.'
      }
    ],
    tags: ['Taiwanese', 'Rice Killer']
  },

  // --- BEEF RECIPES ---
  {
    id: 7,
    category: 'beef',
    titleZH: '西蘭花炒牛肉',
    titleEN: 'Beef with Broccoli',
    titleTL: 'Baka na may Brokoli',
    titleID: 'Sapi dengan Brokoli',
    image: '/recipes/7.png',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g (逆紋切)', en: 'Beef 200g (Sliced)', tl: 'Baka 200g (Hiniwa)', id: 'Daging Sapi 200g (Iris)' },
      { zh: '西蘭花 1個', en: 'Broccoli 1 head', tl: 'Brokoli 1 piraso', id: 'Brokoli 1 buah' },
      { zh: '薑片 2片', en: 'Ginger 2 slices', tl: 'Luya 2 piraso', id: 'Jahe 2 iris' }
    ],
    seasoning: [
      { zh: '蠔油 1湯匙', en: 'Oyster Sauce 1 tbsp', tl: 'Oyster Sauce 1 tbsp', id: 'Saus Tiram 1 sdm' },
      { zh: '糖/粟粉/油 (醃肉)', en: 'Sugar/Starch/Oil', tl: 'Asukal/Gawgaw/Mantika', id: 'Gula/Maizena/Minyak' }
    ],
    steps: [
      { 
        zh: '牛肉醃20分鐘。西蘭花焯水。', 
        en: 'Marinate beef 20m. Blanch broccoli.',
        tl: 'Ibabad ang baka ng 20m. Banlian ang brokoli.',
        id: 'Marinasi sapi 20m. Rebus brokoli sebentar.'
      },
      { 
        zh: '熱鑊快炒牛肉至七成熟盛起。', 
        en: 'Quick fry beef to med-rare, remove.',
        tl: 'Lutuin ang baka nang mabilis (medium rare), hanguin.',
        id: 'Tumis sapi sebentar (setengah matang), angkat.'
      },
      { 
        zh: '爆香薑片，回鑊牛肉與西蘭花兜勻。', 
        en: 'Sauté ginger, toss beef & broccoli together.',
        tl: 'Igisa ang luya, ihalo ang baka at brokoli.',
        id: 'Tumis jahe, masukkan kembali sapi & brokoli, aduk.'
      }
    ],
    tags: ['Restaurant Style']
  },
  {
    id: 8,
    category: 'beef',
    titleZH: '菜心炒牛肉',
    titleEN: 'Stir-fried Beef w/ Choy Sum',
    titleTL: 'Ginisang Baka na may Choy Sum',
    titleID: 'Tumis Sapi dengan Choy Sum',
    image: '/recipes/8.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g', en: 'Beef 200g', tl: 'Baka 200g', id: 'Daging Sapi 200g' },
      { zh: '菜心 300g', en: 'Choy Sum 300g', tl: 'Choy Sum 300g', id: 'Choy Sum 300g' },
      { zh: '蒜蓉 1茶匙', en: 'Minced Garlic 1 tsp', tl: 'Bawang 1 tsp', id: 'Bawang Putih 1 sdt' }
    ],
    seasoning: [
      { zh: '生抽/糖', en: 'Soy Sauce/Sugar', tl: 'Toyo/Asukal', id: 'Kecap Asin/Gula' },
      { zh: '生粉水 (埋芡)', en: 'Cornstarch Slurry', tl: 'Cornstarch Slurry', id: 'Larutan Maizena' }
    ],
    steps: [
      { 
        zh: '菜心洗淨切段，焯水備用。', 
        en: 'Wash/cut Choy Sum, blanch.',
        tl: 'Hugasan/hiwain ang Choy Sum, banlian.',
        id: 'Cuci/potong Choy Sum, rebus sebentar.'
      },
      { 
        zh: '炒香牛肉至變色。', 
        en: 'Stir-fry beef until color changes.',
        tl: 'Igisa ang baka hanggang mag-iba ang kulay.',
        id: 'Tumis sapi hingga berubah warna.'
      },
      { 
        zh: '加入菜心及調味快炒。', 
        en: 'Add veggies and seasoning, stir quickly.',
        tl: 'Ilagay ang gulay at pampalasa, haluin.',
        id: 'Masukkan sayur dan bumbu, aduk cepat.'
      }
    ],
    tags: ['Healthy', 'Quick']
  },
  {
    id: 9,
    category: 'beef',
    titleZH: '紅蘿蔔薯仔炆牛腩',
    titleEN: 'Braised Beef Brisket Stew',
    titleTL: 'Beef Brisket Stew na may Patatas',
    titleID: 'Semur Daging Sapi Sandung Lamur',
    image: '/recipes/9.png',
    time: '120 min',
    servings: '4',
    ingredients: [
      { zh: '牛腩 500g', en: 'Beef Brisket 500g', tl: 'Beef Brisket 500g', id: 'Sandung Lamur Sapi 500g' },
      { zh: '紅蘿蔔/薯仔 各2個', en: 'Carrot/Potato 2 pcs ea', tl: 'Karot/Patatas 2 piraso', id: 'Wortel/Kentang 2 buah' },
      { zh: '冰糖 一小粒', en: 'Rock Sugar 1 small pc', tl: 'Rock Sugar 1 piraso', id: 'Gula Batu 1 butir' }
    ],
    seasoning: [
      { zh: '柱侯醬 2湯匙', en: 'Chu Hou Paste 2 tbsp', tl: 'Chu Hou Paste 2 tbsp', id: 'Saus Chu Hou 2 sdm' },
      { zh: '八角/香葉 (選用)', en: 'Star Anise/Bay Leaf', tl: 'Star Anise/Bay Leaf', id: 'Pekak/Daun Salam' }
    ],
    steps: [
      { 
        zh: '牛腩飛水。爆香醬料，加入牛腩炒勻。', 
        en: 'Blanch beef. Fry paste, add beef.',
        tl: 'Pakuluan ang baka. Igisa ang sauce, ilagay ang baka.',
        id: 'Rebus sapi sebentar. Tumis saus, masukkan sapi.'
      },
      { 
        zh: '加水沒過食材，炆1.5小時。', 
        en: 'Cover with water, simmer 1.5 hrs.',
        tl: 'Lagyan ng tubig, pakuluan ng 1.5 oras.',
        id: 'Tambahkan air, masak 1.5 jam.'
      },
      { 
        zh: '加入蔬菜再炆30分鐘。', 
        en: 'Add veggies, simmer 30 more mins.',
        tl: 'Ilagay ang gulay, lutuin pa ng 30 minuto.',
        id: 'Masukkan sayuran, masak lagi 30 menit.'
      }
    ],
    tags: ['Rich', 'Dinner']
  },
  {
    id: 10,
    category: 'beef',
    titleZH: '沙嗲金菇肥牛煲',
    titleEN: 'Satay Beef & Enoki Pot',
    titleTL: 'Satay Beef & Enoki Pot',
    titleID: 'Sapi Satay & Jamur Enoki',
    image: '/recipes/10.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '肥牛片 200g', en: 'Sliced Beef 200g', tl: 'Sliced Beef 200g', id: 'Daging Sapi Iris 200g' },
      { zh: '金菇 1包', en: 'Enoki Mushroom 1 pack', tl: 'Enoki Mushroom 1 pack', id: 'Jamur Enoki 1 bungkus' },
      { zh: '粉絲 1扎', en: 'Vermicelli 1 bundle', tl: 'Sotanghon 1 tali', id: 'Soun 1 ikat' }
    ],
    seasoning: [
      { zh: '沙嗲醬 2湯匙', en: 'Satay Sauce 2 tbsp', tl: 'Satay Sauce 2 tbsp', id: 'Saus Sate 2 sdm' },
      { zh: '花生醬 1茶匙', en: 'Peanut Butter 1 tsp', tl: 'Peanut Butter 1 tsp', id: 'Selai Kacang 1 sdt' }
    ],
    steps: [
      { 
        zh: '砂鍋爆香沙嗲醬，加水煮滾。', 
        en: 'Fry satay sauce in pot, add water to boil.',
        tl: 'Igisa ang satay sauce, lagyan ng tubig at pakuluin.',
        id: 'Tumis saus sate di panci, tambah air mendidih.'
      },
      { 
        zh: '放入金菇粉絲煮軟。', 
        en: 'Add mushrooms & vermicelli until soft.',
        tl: 'Ilagay ang mushroom at sotanghon hanggang lumambot.',
        id: 'Masukkan jamur & soun sampai lunak.'
      },
      { 
        zh: '最後放入肥牛灼熟即可。', 
        en: 'Add beef slices last, cook briefly.',
        tl: 'Ilagay ang baka sa huli, lutuin sandali.',
        id: 'Masukkan daging sapi terakhir, masak sebentar.'
      }
    ],
    tags: ['Spicy', 'Pot']
  },
  {
    id: 11,
    category: 'beef',
    titleZH: '洋蔥炒牛肉',
    titleEN: 'Beef with Onions',
    titleTL: 'Baka na may Sibuyas',
    titleID: 'Sapi dengan Bawang Bombay',
    image: '/recipes/11.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g', en: 'Beef 200g', tl: 'Baka 200g', id: 'Daging Sapi 200g' },
      { zh: '洋蔥 1個 (切絲)', en: 'Onion 1 (Sliced)', tl: 'Sibuyas 1 (Hiniwa)', id: 'Bawang Bombay 1 (Iris)' }
    ],
    seasoning: [
      { zh: '黑椒碎 少許', en: 'Black Pepper pinch', tl: 'Paminta kurot', id: 'Lada Hitam secukupnya' },
      { zh: '蠔油 1湯匙', en: 'Oyster Sauce 1 tbsp', tl: 'Oyster Sauce 1 tbsp', id: 'Saus Tiram 1 sdm' }
    ],
    steps: [
      { 
        zh: '洋蔥炒至軟身帶焦香，盛起。', 
        en: 'Fry onion until soft & caramelized, remove.',
        tl: 'Igisa ang sibuyas hanggang lumambot, hanguin.',
        id: 'Tumis bawang bombay hingga layu, angkat.'
      },
      { 
        zh: '炒熟牛肉，回鑊洋蔥兜勻調味。', 
        en: 'Fry beef, add onions back & season.',
        tl: 'Lutuin ang baka, ibalik ang sibuyas at timplahan.',
        id: 'Tumis sapi, masukkan kembali bawang, bumbui.'
      }
    ],
    tags: ['Aromatic', 'Simple']
  },
  {
    id: 12,
    category: 'beef',
    titleZH: '蕃茄煮牛肉',
    titleEN: 'Tomato Beef Stew',
    titleTL: 'Tomato Beef Stew',
    titleID: 'Semur Tomat Sapi',
    image: '/recipes/12.png',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g', en: 'Beef 200g', tl: 'Baka 200g', id: 'Daging Sapi 200g' },
      { zh: '蕃茄 3個 (切塊)', en: 'Tomatoes 3 (Chunks)', tl: 'Kamatis 3 (Hiniwa)', id: 'Tomat 3 (Potong)' }
    ],
    seasoning: [
      { zh: '糖 2茶匙', en: 'Sugar 2 tsp', tl: 'Asukal 2 tsp', id: 'Gula 2 sdt' },
      { zh: '茄汁 1湯匙', en: 'Ketchup 1 tbsp', tl: 'Ketchup 1 tbsp', id: 'Saus Tomat 1 sdm' }
    ],
    steps: [
      { 
        zh: '牛肉先炒半熟盛起。', 
        en: 'Half-cook beef, remove.',
        tl: 'Lutuin ang baka (half-cook), hanguin.',
        id: 'Masak sapi setengah matang, angkat.'
      },
      { 
        zh: '蕃茄炒至出汁，加糖和茄汁。', 
        en: 'Fry tomatoes until saucy, add sugar/ketchup.',
        tl: 'Igisa ang kamatis, lagyan ng asukal/ketchup.',
        id: 'Tumis tomat sampai berair, tambah gula/saus.'
      },
      { 
        zh: '回鑊牛肉煮至全熟。', 
        en: 'Add beef back, cook until done.',
        tl: 'Ibalik ang baka, lutuin hanggang maluto.',
        id: 'Masukkan kembali sapi, masak hingga matang.'
      }
    ],
    tags: ['Sweet & Sour', 'Appetizing']
  },
  {
    id: 23,
    category: 'beef',
    titleZH: '咖哩牛肋肉',
    titleEN: 'Curry Beef Rib Fingers',
    titleTL: 'Curry Beef Ribs',
    titleID: 'Kari Iga Sapi',
    image: '/recipes/23.png',
    time: '60 min',
    servings: '2-3',
    ingredients: [
      { zh: '牛肋條 400g', en: 'Beef Rib Fingers 400g', tl: 'Beef Ribs 400g', id: 'Iga Sapi 400g' },
      { zh: '薯仔/紅蘿蔔 各1個', en: 'Potato/Carrot 1 pc ea', tl: 'Patatas/Karot 1 piraso bawat isa', id: 'Kentang/Wortel 1 buah' },
      { zh: '洋蔥 半個', en: 'Onion 1/2', tl: 'Sibuyas 1/2', id: 'Bawang Bombay 1/2' }
    ],
    seasoning: [
      { zh: '咖哩塊 2-3磚', en: 'Curry Cubes 2-3 pcs', tl: 'Curry Cubes 2-3 pcs', id: 'Blok Kari 2-3 pcs' },
      { zh: '水 500ml', en: 'Water 500ml', tl: 'Tubig 500ml', id: 'Air 500ml' }
    ],
    steps: [
      { 
        zh: '牛肋條切段飛水。蔬菜切塊。', 
        en: 'Cut beef ribs, blanch. Chop veggies.',
        tl: 'Hiwain ang ribs, pakuluan. Hiwain ang gulay.',
        id: 'Potong iga, rebus sebentar. Potong sayur.'
      },
      { 
        zh: '炒香洋蔥及牛肋條。', 
        en: 'Fry onion and beef ribs.',
        tl: 'Igisa ang sibuyas at beef ribs.',
        id: 'Tumis bawang bombay dan iga sapi.'
      },
      { 
        zh: '加水及咖哩塊，炆煮45分鐘。', 
        en: 'Add water & curry cubes, simmer 45 mins.',
        tl: 'Lagyan ng tubig & curry cubes, pakuluan ng 45 mins.',
        id: 'Tambah air & blok kari, masak 45 menit.'
      },
      { 
        zh: '加入薯仔紅蘿蔔再炆15分鐘。', 
        en: 'Add potato/carrot, simmer 15 more mins.',
        tl: 'Ilagay ang patatas/karot, lutuin pa ng 15 mins.',
        id: 'Masukkan kentang/wortel, masak lagi 15 menit.'
      }
    ],
    tags: ['Rich', 'Rice Killer']
  },
  {
    id: 25,
    category: 'beef',
    titleZH: '蕃茄免治牛肉',
    titleEN: 'Tomato Minced Beef',
    titleTL: 'Giniling na Baka na may Kamatis',
    titleID: 'Daging Sapi Cincang Saus Tomat',
    image: '/recipes/25.png',
    time: '25 min',
    servings: '2-3',
    ingredients: [
      { zh: '免治牛肉 300g (醃製)', en: 'Minced Beef 300g (Marinated)', tl: 'Giniling na Baka 300g (Marinated)', id: 'Daging Sapi Cincang 300g (Marinasi)' },
      { zh: '番茄 2個 (切丁)', en: 'Tomatoes 2 (Diced)', tl: 'Kamatis 2 (Hiniwa)', id: 'Tomat 2 (Potong Dadu)' },
      { zh: '洋蔥 1個 (切末)', en: 'Onion 1 (Minced)', tl: 'Sibuyas 1 (Tadtad)', id: 'Bawang Bombay 1 (Cincang)' },
      { zh: '胡蘿蔔 半條 (切丁 - 選用)', en: 'Carrot 1/2 (Diced - Opt)', tl: 'Karot 1/2 (Hiniwa - Opt)', id: 'Wortel 1/2 (Potong Dadu - Opsi)' }
    ],
    seasoning: [
      { zh: '番茄醬/茄膏 2湯匙', en: 'Ketchup/Tomato Paste 2 tbsp', tl: 'Ketchup 2 tbsp', id: 'Saus Tomat/Pasta Tomat 2 sdm' },
      { zh: '生抽/蠔油/糖', en: 'Soy/Oyster Sauce/Sugar', tl: 'Toyo/Oyster Sauce/Asukal', id: 'Kecap Asin/Saus Tiram/Gula' },
      { zh: '生粉水 (埋芡)', en: 'Cornstarch Slurry', tl: 'Cornstarch Slurry', id: 'Larutan Maizena' }
    ],
    steps: [
      { 
        zh: '牛肉用醬油蠔油糖醃15分鐘。蔬菜切丁。', 
        en: 'Marinate beef 15 mins. Chop veggies.',
        tl: 'Ibabad ang baka ng 15 mins. Hiwain ang gulay.',
        id: 'Marinasi daging 15 mnt. Potong sayur.'
      },
      { 
        zh: '爆香洋蔥，加入牛肉炒至八成熟盛起。', 
        en: 'Fry onion until fragrant. Add beef, cook med-rare, remove.',
        tl: 'Igisa ang sibuyas. Ilagay ang baka, lutuin ng bahagya, hanguin.',
        id: 'Tumis bawang bombay. Masukkan daging, masak setengah matang, angkat.'
      },
      { 
        zh: '炒軟番茄，加入番茄醬、調味和水煮滾。', 
        en: 'Fry tomatoes soft. Add ketchup, seasoning & water, simmer.',
        tl: 'Igisa ang kamatis. Ilagay ang ketchup, pampalasa at tubig, pakuluin.',
        id: 'Tumis tomat sampai layu. Masukkan saus tomat, bumbu & air, didihkan.'
      },
      { 
        zh: '牛肉回鑊兜勻，生粉水埋芡。', 
        en: 'Add beef back. Thicken sauce with starch.',
        tl: 'Ibalik ang baka. Palaputin ang sabaw.',
        id: 'Masukkan kembali daging. Kentalkan kuah.'
      }
    ],
    tags: ['Appetizing', 'Saucy']
  },

  // --- CHICKEN RECIPES ---
  {
    id: 13,
    category: 'chicken',
    titleZH: '薯仔炆雞翼',
    titleEN: 'Braised Chicken Wings w/ Potato',
    titleTL: 'Chicken Wings na may Patatas',
    titleID: 'Sayap Ayam Braised dengan Kentang',
    image: '/recipes/13.png',
    time: '30 min',
    servings: '3',
    ingredients: [
      { zh: '雞翼 8-10隻', en: 'Chicken Wings 8-10', tl: 'Pakpak ng Manok 8-10', id: 'Sayap Ayam 8-10' },
      { zh: '薯仔 2個', en: 'Potatoes 2', tl: 'Patatas 2', id: 'Kentang 2' },
      { zh: '蒜頭 2瓣', en: 'Garlic 2 cloves', tl: 'Bawang 2 butil', id: 'Bawang Putih 2 siung' }
    ],
    seasoning: [
      { zh: '蠔油 2湯匙', en: 'Oyster Sauce 2 tbsp', tl: 'Oyster Sauce 2 tbsp', id: 'Saus Tiram 2 sdm' },
      { zh: '老抽 少許 (上色)', en: 'Dark Soy (Color)', tl: 'Dark Soy (Pangkulay)', id: 'Kecap Pekat (Warna)' },
      { zh: '糖 1茶匙', en: 'Sugar 1 tsp', tl: 'Asukal 1 tsp', id: 'Gula 1 sdt' }
    ],
    steps: [
      { 
        zh: '雞翼煎至兩面金黃。', 
        en: 'Pan-fry wings until golden.',
        tl: 'Iprito ang pakpak hanggang golden.',
        id: 'Goreng sayap hingga keemasan.'
      },
      { 
        zh: '加入薯仔塊同炒。', 
        en: 'Add potato chunks and stir-fry.',
        tl: 'Isama ang patatas at igisa.',
        id: 'Masukkan kentang dan tumis.'
      },
      { 
        zh: '加水及調味，蓋蓋炆15-20分鐘。', 
        en: 'Add water/seasoning, simmer 15-20 mins.',
        tl: 'Lagyan ng tubig/pampalasa, pakuluan ng 15-20 mins.',
        id: 'Tambah air/bumbu, masak 15-20 menit.'
      }
    ],
    tags: ['Kids Love', 'Classic']
  },
  {
    id: 14,
    category: 'chicken',
    titleZH: '西蘭花炒雞柳',
    titleEN: 'Chicken Fillet with Broccoli',
    titleTL: 'Chicken Fillet na may Brokoli',
    titleID: 'Fillet Ayam dengan Brokoli',
    image: '/recipes/14.png',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '雞柳/雞胸 250g', en: 'Chicken Fillet 250g', tl: 'Chicken Fillet 250g', id: 'Fillet Ayam 250g' },
      { zh: '西蘭花 1個', en: 'Broccoli 1 head', tl: 'Brokoli 1 piraso', id: 'Brokoli 1 buah' },
      { zh: '紅蘿蔔花 少許', en: 'Carrot Slices few', tl: 'Karot (Hiniwa)', id: 'Wortel (Iris)' }
    ],
    seasoning: [
      { zh: '鹽/胡椒粉', en: 'Salt/Pepper', tl: 'Asin/Paminta', id: 'Garam/Lada' },
      { zh: '粟粉水', en: 'Cornstarch Water', tl: 'Cornstarch Water', id: 'Larutan Maizena' }
    ],
    steps: [
      { 
        zh: '雞柳切條醃好。西蘭花焯水。', 
        en: 'Slice/marinate chicken. Blanch broccoli.',
        tl: 'Hiwain/ibabad ang manok. Banlian ang brokoli.',
        id: 'Iris/marinasi ayam. Rebus brokoli sebentar.'
      },
      { 
        zh: '炒熟雞柳，加入蔬菜兜炒。', 
        en: 'Fry chicken, toss in veggies.',
        tl: 'Lutuin ang manok, ihalo ang gulay.',
        id: 'Goreng ayam, masukkan sayuran.'
      },
      { 
        zh: '埋薄芡即可上碟。', 
        en: 'Thicken sauce lightly and serve.',
        tl: 'Palaputin ang sauce at ihanda.',
        id: 'Kentalkan saus sedikit dan sajikan.'
      }
    ],
    tags: ['Low Fat', 'Healthy']
  },
  {
    id: 15,
    category: 'chicken',
    titleZH: '檸檬雞翼',
    titleEN: 'Lemon Chicken Wings',
    titleTL: 'Lemon Chicken Wings',
    titleID: 'Sayap Ayam Lemon',
    image: '/recipes/15.png',
    time: '25 min',
    servings: '3',
    ingredients: [
      { zh: '雞翼 8-10隻', en: 'Chicken Wings 8-10', tl: 'Pakpak ng Manok 8-10', id: 'Sayap Ayam 8-10' },
      { zh: '檸檬 半個 (切片)', en: 'Lemon 1/2 (Sliced)', tl: 'Lemon 1/2 (Hiniwa)', id: 'Lemon 1/2 (Iris)' },
      { zh: '蜜糖 1湯匙', en: 'Honey 1 tbsp', tl: 'Honey 1 tbsp', id: 'Madu 1 sdm' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp', tl: 'Toyo 1 tbsp', id: 'Kecap Asin 1 sdm' },
      { zh: '冰糖 適量', en: 'Rock Sugar to taste', tl: 'Rock Sugar', id: 'Gula Batu secukupnya' }
    ],
    steps: [
      { 
        zh: '雞翼煎金黃。', 
        en: 'Fry wings until golden.',
        tl: 'Iprito ang pakpak hanggang golden.',
        id: 'Goreng sayap hingga keemasan.'
      },
      { 
        zh: '加入檸檬片和調味，加少許水炆煮。', 
        en: 'Add lemon, seasoning & water, simmer.',
        tl: 'Ilagay ang lemon, pampalasa & tubig, pakuluan.',
        id: 'Masukkan lemon, bumbu & air, masak.'
      },
      { 
        zh: '收汁時加入蜜糖令表面光亮。', 
        en: 'Add honey when sauce reduces for glaze.',
        tl: 'Ilagay ang honey pagkaunti ng sabaw.',
        id: 'Tambahkan madu saat kuah menyusut.'
      }
    ],
    tags: ['Tangy', 'Appetizing']
  },
  {
    id: 16,
    category: 'chicken',
    titleZH: '紅蘿蔔馬蹄蒸雞',
    titleEN: 'Steamed Chicken w/ Carrot',
    titleTL: 'Steamed Chicken na may Karot',
    titleID: 'Ayam Kukus dengan Wortel',
    image: '/recipes/16.png',
    time: '25 min',
    servings: '3',
    ingredients: [
      { zh: '雞件 半隻', en: 'Chicken (Chopped) 1/2', tl: 'Manok 1/2', id: 'Ayam Potong 1/2' },
      { zh: '紅蘿蔔 1條 (滾刀)', en: 'Carrot 1 (Chunks)', tl: 'Karot 1 (Hiniwa)', id: 'Wortel 1 (Potong)' },
      { zh: '馬蹄 4粒 (拍扁)', en: 'Water Chestnut 4', tl: 'Water Chestnut 4', id: 'Water Chestnut 4' }
    ],
    seasoning: [
      { zh: '生粉/生抽/油', en: 'Starch/Soy/Oil', tl: 'Gawgaw/Toyo/Mantika', id: 'Maizena/Kecap/Minyak' },
      { zh: '薑絲', en: 'Ginger Strips', tl: 'Luya', id: 'Jahe Iris' }
    ],
    steps: [
      { 
        zh: '雞件用醃料醃20分鐘。', 
        en: 'Marinate chicken for 20 mins.',
        tl: 'Ibabad ang manok ng 20 minuto.',
        id: 'Marinasi ayam selama 20 menit.'
      },
      { 
        zh: '紅蘿蔔鋪底，放上雞件。', 
        en: 'Layer carrots at bottom, top with chicken.',
        tl: 'Ilagay ang karot sa ilalim, ipatong ang manok.',
        id: 'Taruh wortel di bawah, ayam di atas.'
      },
      { 
        zh: '大火蒸15-18分鐘。', 
        en: 'Steam on high for 15-18 mins.',
        tl: 'I-steam sa malakas na apoy ng 15-18 mins.',
        id: 'Kukus api besar 15-18 menit.'
      }
    ],
    tags: ['Steam', 'Light']
  },
  {
    id: 17,
    category: 'chicken',
    titleZH: '洋蔥圈煎雞扒',
    titleEN: 'Pan-fried Chicken w/ Onion',
    titleTL: 'Piniritong Manok na may Sibuyas',
    titleID: 'Ayam Goreng dengan Bawang Bombay',
    image: '/recipes/17.png',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '去骨雞脾扒 2塊', en: 'Boneless Thighs 2', tl: 'Boneless Thighs 2', id: 'Paha Ayam Tanpa Tulang 2' },
      { zh: '洋蔥 1個', en: 'Onion 1', tl: 'Sibuyas 1', id: 'Bawang Bombay 1' }
    ],
    seasoning: [
      { zh: '豉油雞汁/生抽', en: 'Sweet Soy/Soy Sauce', tl: 'Sweet Soy/Toyo', id: 'Kecap Manis/Asin' },
      { zh: '糖 少許', en: 'Sugar pinch', tl: 'Asukal kurot', id: 'Gula secukupnya' }
    ],
    steps: [
      { 
        zh: '雞皮向下慢火煎出油至脆身。', 
        en: 'Fry skin-side down until crispy/oily.',
        tl: 'Iprito nang nakataob ang balat hanggang crispy.',
        id: 'Goreng sisi kulit sampai renyah.'
      },
      { 
        zh: '反面煎熟，盛起切件。', 
        en: 'Flip and cook through, slice.',
        tl: 'Baliktarin at lutuin, hiwain.',
        id: 'Balik dan masak matang, iris.'
      },
      { 
        zh: '原鑊炒洋蔥，淋在雞扒上。', 
        en: 'Fry onions in same pan, serve over chicken.',
        tl: 'Igisa ang sibuyas, ilagay sa ibabaw ng manok.',
        id: 'Tumis bawang di wajan sama, taruh di atas ayam.'
      }
    ],
    tags: ['Crispy Skin', 'Easy']
  },
  {
    id: 18,
    category: 'chicken',
    titleZH: '粟米紅蘿蔔雞粒',
    titleEN: 'Diced Chicken w/ Corn & Carrot',
    titleTL: 'Chicken Cubes na may Mais at Karot',
    titleID: 'Ayam Dadu dengan Jagung & Wortel',
    image: '/recipes/18.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '雞胸肉 200g (切粒)', en: 'Chicken Breast 200g', tl: 'Chicken Breast 200g', id: 'Dada Ayam 200g' },
      { zh: '粟米粒 半碗', en: 'Corn Kernels 1/2 bowl', tl: 'Mais 1/2 bowl', id: 'Jagung 1/2 mangkuk' },
      { zh: '紅蘿蔔粒 半碗', en: 'Carrot Diced 1/2 bowl', tl: 'Karot 1/2 bowl', id: 'Wortel Dadu 1/2 mangkuk' }
    ],
    seasoning: [
      { zh: '鹽/雞粉', en: 'Salt/Chicken Powder', tl: 'Asin/Chicken Powder', id: 'Garam/Kaldu Ayam' }
    ],
    steps: [
      { 
        zh: '雞粒醃好。雜菜粒焯水。', 
        en: 'Marinate chicken. Blanch veggies.',
        tl: 'Ibabad ang manok. Banlian ang gulay.',
        id: 'Marinasi ayam. Rebus sayuran sebentar.'
      },
      { 
        zh: '炒熟雞粒，加入雜菜粒兜勻。', 
        en: 'Fry chicken, mix in veggies.',
        tl: 'Lutuin ang manok, ihalo ang gulay.',
        id: 'Goreng ayam, campur sayuran.'
      },
      { 
        zh: '簡單調味即可。', 
        en: 'Season simply and serve.',
        tl: 'Timplahan at ihanda.',
        id: 'Bumbui simpel dan sajikan.'
      }
    ],
    tags: ['Bento', 'Colorful']
  },

  // --- SEAFOOD RECIPES ---
  {
    id: 26,
    category: 'seafood',
    titleZH: '香煎三文魚',
    titleEN: 'Pan-fried Salmon',
    titleTL: 'Piniritong Salmon',
    titleID: 'Salmon Goreng Pan',
    image: '/recipes/26.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '三文魚扒 2塊', en: 'Salmon Steak/Fillet 2 pcs', tl: 'Salmon 2 piraso', id: 'Salmon Steak 2 potong' },
      { zh: '檸檬 半個', en: 'Lemon 1/2', tl: 'Lemon 1/2', id: 'Lemon 1/2' }
    ],
    seasoning: [
      { zh: '鹽/黑胡椒', en: 'Salt/Black Pepper', tl: 'Asin/Paminta', id: 'Garam/Lada Hitam' },
      { zh: '牛油 (選用)', en: 'Butter (Opt)', tl: 'Butter (Opt)', id: 'Mentega (Opsi)' }
    ],
    steps: [
      { 
        zh: '三文魚抹乾，用鹽和黑胡椒醃5分鐘。', 
        en: 'Dry salmon, season with salt & pepper for 5 mins.',
        tl: 'Patuyuin ang salmon, lagyan ng asin at paminta.',
        id: 'Keringkan salmon, bumbui garam & lada 5 mnt.'
      },
      { 
        zh: '熱鑊少油，中火煎至兩面金黃熟透。', 
        en: 'Pan-fry medium heat until golden and cooked.',
        tl: 'Iprito sa katamtamang apoy hanggang maluto.',
        id: 'Goreng api sedang hingga keemasan & matang.'
      },
      { 
        zh: '上碟前擠上檸檬汁。', 
        en: 'Squeeze lemon juice before serving.',
        tl: 'Lagyan ng lemon bago ihanda.',
        id: 'Peras jeruk lemon sebelum disajikan.'
      }
    ],
    tags: ['Omega-3', 'Western']
  },
  {
    id: 28,
    category: ['seafood', 'egg'],
    titleZH: '蝦仁炒蛋',
    titleEN: 'Stir-fried Shrimp with Eggs',
    titleTL: 'Ginisang Hipon na may Itlog',
    titleID: 'Tumis Udang Telur',
    image: '/recipes/28.png',
    time: '15 min',
    servings: '2-3',
    ingredients: [
      { zh: '蝦仁 200g', en: 'Shrimp 200g', tl: 'Hipon 200g', id: 'Udang Kupas 200g' },
      { zh: '雞蛋 4隻', en: 'Eggs 4', tl: 'Itlog 4', id: 'Telur 4' },
      { zh: '蔥花 少許', en: 'Scallion', tl: 'Sibuyas na Mura', id: 'Daun Bawang' }
    ],
    seasoning: [
      { zh: '鹽/胡椒粉', en: 'Salt/Pepper', tl: 'Asin/Paminta', id: 'Garam/Lada' },
      { zh: '麻油 少許', en: 'Sesame Oil splash', tl: 'Sesame Oil', id: 'Minyak Wijen' }
    ],
    steps: [
      { 
        zh: '蝦仁用少許鹽胡椒醃好，飛水或煎熟備用。', 
        en: 'Season shrimp, blanch or fry until cooked.',
        tl: 'Timplahan ang hipon, pakuluan o iprito.',
        id: 'Bumbui udang, rebus/goreng matang.'
      },
      { 
        zh: '雞蛋打勻加調味和蔥花。', 
        en: 'Beat eggs with seasoning and scallion.',
        tl: 'Batihin ang itlog kasama ang pampalasa.',
        id: 'Kocok telur dengan bumbu & daun bawang.'
      },
      { 
        zh: '熱鑊下油，倒入蛋液，半凝固時加入蝦仁炒勻。', 
        en: 'Fry eggs, add shrimp when half-set, stir well.',
        tl: 'Lutuin ang itlog, ihalo ang hipon pag medyo luto na.',
        id: 'Goreng telur, masukkan udang saat setengah matang.'
      }
    ],
    tags: ['Protein', 'Quick']
  },

  // --- EGG RECIPES ---
  {
    id: 29,
    category: 'egg',
    titleZH: '蒸水蛋',
    titleEN: 'Steamed Eggs',
    titleTL: 'Steamed Egg',
    titleID: 'Tim Telur',
    image: '/recipes/29.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '雞蛋 3隻', en: 'Eggs 3', tl: 'Itlog 3', id: 'Telur 3' },
      { zh: '水/雞湯 (蛋液1.5倍)', en: 'Water/Broth (1.5x egg vol)', tl: 'Tubig/Sabaw', id: 'Air/Kaldu (1.5x vol telur)' },
      { zh: '蔥花', en: 'Scallion', tl: 'Sibuyas na Mura', id: 'Daun Bawang' }
    ],
    seasoning: [
      { zh: '生抽/熟油', en: 'Soy Sauce/Cooked Oil', tl: 'Toyo/Mantika', id: 'Kecap Asin/Minyak Matang' }
    ],
    steps: [
      { 
        zh: '雞蛋打勻，加入水或雞湯拌勻。', 
        en: 'Beat eggs, mix with water or broth.',
        tl: 'Batihin ang itlog, haluan ng tubig/sabaw.',
        id: 'Kocok telur, campur air/kaldu.'
      },
      { 
        zh: '過篩倒入碟中，蓋上保鮮紙/碟。', 
        en: 'Strain into plate, cover.',
        tl: 'Salain sa plato, takpan.',
        id: 'Saring ke piring, tutup.'
      },
      { 
        zh: '水滾後細火蒸8-10分鐘，淋上豉油熟油。', 
        en: 'Steam low heat 8-10 mins, add soy sauce/oil.',
        tl: 'I-steam (mahina apoy) 8-10 mins, lagyan ng toyo/mantika.',
        id: 'Kukus api kecil 8-10 mnt, siram kecap/minyak.'
      }
    ],
    tags: ['Smooth', 'Light']
  },
  {
    id: 30,
    category: 'egg',
    titleZH: '蕃茄煮蛋',
    titleEN: 'Stir-fried Tomato and Eggs',
    titleTL: 'Ginisang Kamatis at Itlog',
    titleID: 'Tumis Tomat Telur',
    image: '/recipes/30.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '蕃茄 2個 (切塊)', en: 'Tomatoes 2 (Chunks)', tl: 'Kamatis 2 (Hiniwa)', id: 'Tomat 2 (Potong)' },
      { zh: '雞蛋 3隻', en: 'Eggs 3', tl: 'Itlog 3', id: 'Telur 3' },
      { zh: '蒜蓉/蔥花', en: 'Garlic/Scallion', tl: 'Bawang/Sibuyas', id: 'Bawang Putih/Daun Bawang' }
    ],
    seasoning: [
      { zh: '茄汁 1湯匙', en: 'Ketchup 1 tbsp', tl: 'Ketchup 1 tbsp', id: 'Saus Tomat 1 sdm' },
      { zh: '糖/鹽', en: 'Sugar/Salt', tl: 'Asukal/Asin', id: 'Gula/Garam' }
    ],
    steps: [
      { 
        zh: '雞蛋炒熟盛起。', 
        en: 'Scramble eggs, remove.',
        tl: 'Lutuin ang itlog, hanguin.',
        id: 'Orak-arik telur, angkat.'
      },
      { 
        zh: '爆香蒜蓉，炒蕃茄至出汁軟身。', 
        en: 'Fry garlic, cook tomatoes until soft/saucy.',
        tl: 'Igisa ang bawang at kamatis hanggang lumambot.',
        id: 'Tumis bawang, masak tomat sampai layu/berair.'
      },
      { 
        zh: '加入雞蛋和調味兜勻，撒上蔥花。', 
        en: 'Add eggs back, season, garnish with scallion.',
        tl: 'Ibalik ang itlog, timplahan, lagyan ng sibuyas.',
        id: 'Masukkan telur, bumbui, taburi daun bawang.'
      }
    ],
    tags: ['Sweet & Sour', 'Homey']
  },

  // --- VEGGIE RECIPES ---
  {
    id: 19,
    category: 'veggie',
    titleZH: '蒜蓉炒雜菜',
    titleEN: 'Garlic Stir-fry Mixed Veggies',
    titleTL: 'Ginisang Gulay (Mixed Veggies)',
    titleID: 'Tumis Sayur Campur Bawang Putih',
    image: '/recipes/19.png',
    time: '10 min',
    servings: '2',
    ingredients: [
      { zh: '西蘭花/紅蘿蔔/菜心', en: 'Broccoli/Carrot/Choy Sum', tl: 'Brokoli/Karot/Choy Sum', id: 'Brokoli/Wortel/Choy Sum' },
      { zh: '蒜蓉 1湯匙', en: 'Minced Garlic 1 tbsp', tl: 'Bawang 1 tbsp', id: 'Bawang Putih 1 sdm' }
    ],
    seasoning: [
      { zh: '鹽 1茶匙', en: 'Salt 1 tsp', tl: 'Asin 1 tsp', id: 'Garam 1 sdt' },
      { zh: '紹興酒 少許', en: 'Wine splash', tl: 'Wine konti', id: 'Arak sedikit' }
    ],
    steps: [
      { 
        zh: '所有蔬菜切好，較硬的先焯水。', 
        en: 'Cut veggies, blanch hard ones first.',
        tl: 'Hiwain ang gulay, banlian ang matigas.',
        id: 'Potong sayur, rebus yang keras dulu.'
      },
      { 
        zh: '爆香蒜蓉，大火快炒所有蔬菜。', 
        en: 'Fry garlic, high heat stir-fry veggies.',
        tl: 'Igisa ang bawang, lutuin ang gulay (malakas na apoy).',
        id: 'Tumis bawang, masak sayur api besar.'
      },
      { 
        zh: '灒酒加鹽調味。', 
        en: 'Splash wine, salt, serve.',
        tl: 'Lagyan ng wine, asin, ihanda.',
        id: 'Tuang arak, garam, sajikan.'
      }
    ],
    tags: ['Vegan', 'Vitamin']
  },
  {
    id: 20,
    category: 'veggie',
    titleZH: '上湯浸黃芽白',
    titleEN: 'Napa Cabbage in Broth',
    titleTL: 'Napa Cabbage sa Sabaw',
    titleID: 'Sawi Putih Kuah Kaldu',
    image: '/recipes/20.png',
    time: '15 min',
    servings: '3',
    ingredients: [
      { zh: '黃芽白 1棵', en: 'Napa Cabbage 1 head', tl: 'Napa Cabbage 1 piraso', id: 'Sawi Putih 1 buah' },
      { zh: '皮蛋/鹹蛋 (選用)', en: 'Preserved Eggs (Opt)', tl: 'Preserved Eggs (Opt)', id: 'Telur Pitan/Asin (Opsi)' },
      { zh: '薑絲', en: 'Ginger Strips', tl: 'Luya', id: 'Jahe Iris' }
    ],
    seasoning: [
      { zh: '雞湯 1盒', en: 'Chicken Broth 1 pack', tl: 'Chicken Broth 1 pack', id: 'Kaldu Ayam 1 kotak' }
    ],
    steps: [
      { 
        zh: '黃芽白洗淨切段。', 
        en: 'Wash and cut cabbage.',
        tl: 'Hugasan at hiwain ang cabbage.',
        id: 'Cuci dan potong sawi.'
      },
      { 
        zh: '雞湯煮滾，加入薑絲及蛋粒。', 
        en: 'Boil broth with ginger and eggs.',
        tl: 'Pakuluin ang sabaw kasama ang luya at itlog.',
        id: 'Didihkan kaldu dengan jahe dan telur.'
      },
      { 
        zh: '放入黃芽白煮至軟淋。', 
        en: 'Add cabbage, boil until soft.',
        tl: 'Ilagay ang cabbage, lutuin hanggang lumambot.',
        id: 'Masukkan sawi, masak hingga lunak.'
      }
    ],
    tags: ['Soup Veggie', 'Sweet']
  },
  {
    id: 21,
    category: 'veggie',
    titleZH: '薯仔絲炒紅蘿蔔',
    titleEN: 'Stir-fry Potato & Carrot Shreds',
    titleTL: 'Ginisang Patatas at Karot',
    titleID: 'Tumis Irisan Kentang & Wortel',
    image: '/recipes/21.png',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '薯仔 1個 (切絲)', en: 'Potato 1 (Shredded)', tl: 'Patatas 1 (Shredded)', id: 'Kentang 1 (Serut)' },
      { zh: '紅蘿蔔 半條 (切絲)', en: 'Carrot 1/2 (Shredded)', tl: 'Karot 1/2 (Shredded)', id: 'Wortel 1/2 (Serut)' },
      { zh: '蔥段', en: 'Scallion', tl: 'Sibuyas na Mura', id: 'Daun Bawang' }
    ],
    seasoning: [
      { zh: '醋 1湯匙', en: 'Vinegar 1 tbsp', tl: 'Suka 1 tbsp', id: 'Cuka 1 sdm' },
      { zh: '鹽/糖', en: 'Salt/Sugar', tl: 'Asin/Asukal', id: 'Garam/Gula' }
    ],
    steps: [
      { 
        zh: '薯仔絲浸水去澱粉。', 
        en: 'Soak potato shreds to remove starch.',
        tl: 'Ibabad ang patatas para mawala ang starch.',
        id: 'Rendam kentang untuk buang pati.'
      },
      { 
        zh: '熱油炒香紅蘿蔔和薯仔絲。', 
        en: 'Fry carrot and potato shreds.',
        tl: 'Igisa ang karot at patatas.',
        id: 'Tumis wortel dan kentang.'
      },
      { 
        zh: '加入醋保持爽脆，調味上碟。', 
        en: 'Add vinegar for crunch, season.',
        tl: 'Lagyan ng suka, timplahan.',
        id: 'Tambah cuka biar renyah, bumbui.'
      }
    ],
    tags: ['Crunchy', 'Appetizer']
  },
  {
    id: 22,
    category: 'veggie',
    titleZH: '白灼菜心',
    titleEN: 'Poached Choy Sum',
    titleTL: 'Nilagang Choy Sum',
    titleID: 'Rebus Choy Sum',
    image: '/recipes/22.png',
    time: '8 min',
    servings: '2',
    ingredients: [
      { zh: '菜心 300g', en: 'Choy Sum 300g', tl: 'Choy Sum 300g', id: 'Choy Sum 300g' },
      { zh: '薑片 2片', en: 'Ginger 2 slices', tl: 'Luya 2 piraso', id: 'Jahe 2 iris' }
    ],
    seasoning: [
      { zh: '熟油/蠔油', en: 'Cooked Oil/Oyster Sauce', tl: 'Mantika/Oyster Sauce', id: 'Minyak Matang/Saus Tiram' }
    ],
    steps: [
      { 
        zh: '水滾加鹽和薑片。', 
        en: 'Boil water with salt and ginger.',
        tl: 'Magpakulo ng tubig na may asin at luya.',
        id: 'Didihkan air dengan garam dan jahe.'
      },
      { 
        zh: '放入菜心灼至剛熟。', 
        en: 'Poach choy sum until just done.',
        tl: 'Ilagay ang choy sum hanggang maluto.',
        id: 'Rebus choy sum sampai matang.'
      },
      { 
        zh: '撈起瀝乾，淋上蠔油熟油。', 
        en: 'Drain, drizzle with oil/sauce.',
        tl: 'Patuluin, lagyan ng oil/sauce.',
        id: 'Tiriskan, siram minyak/saus.'
      }
    ],
    tags: ['Basic', 'Clean']
  },
  {
    id: 27,
    category: 'veggie',
    titleZH: '炒椰菜',
    titleEN: 'Stir-fried Cabbage',
    titleTL: 'Ginisang Repolyo',
    titleID: 'Tumis Kubis',
    image: '/recipes/27.png',
    time: '10 min',
    servings: '2',
    ingredients: [
      { zh: '椰菜 1/4個', en: 'Cabbage 1/4', tl: 'Repolyo 1/4', id: 'Kubis 1/4' },
      { zh: '蒜頭 2瓣', en: 'Garlic 2 cloves', tl: 'Bawang 2 butil', id: 'Bawang Putih 2 siung' }
    ],
    seasoning: [
      { zh: '鹽/雞粉', en: 'Salt/Chicken Powder', tl: 'Asin/Chicken Powder', id: 'Garam/Kaldu Ayam' }
    ],
    steps: [
      { 
        zh: '椰菜洗淨，手撕成小塊。', 
        en: 'Wash cabbage, tear into small pieces.',
        tl: 'Hugasan ang repolyo, himayin.',
        id: 'Cuci kubis, sobek kecil-kecil.'
      },
      { 
        zh: '爆香蒜頭，加入椰菜炒軟。', 
        en: 'Fry garlic, add cabbage and stir-fry until soft.',
        tl: 'Igisa ang bawang, ilagay ang repolyo.',
        id: 'Tumis bawang, masukkan kubis hingga layu.'
      },
      { 
        zh: '加少許水焗一會，調味。', 
        en: 'Add water, cover briefly, season.',
        tl: 'Lagyan ng tubig, takpan sandali, timplahan.',
        id: 'Tambah air, tutup sebentar, bumbui.'
      }
    ],
    tags: ['Quick', 'Fiber']
  },

  // --- SOUP RECIPES ---
  {
    id: 31,
    category: ['pork', 'soup'],
    titleZH: '蕃茄薯仔瘦肉湯',
    titleEN: 'Tomato Potato Pork Soup',
    titleTL: 'Sopas na Kamatis, Patatas at Baboy',
    titleID: 'Sup Tomat Kentang Daging Babi',
    image: '/recipes/31.png',
    time: '60 min',
    servings: '3-4',
    ingredients: [
      { zh: '瘦肉 200g', en: 'Lean Pork 200g', tl: 'Laman ng Baboy 200g', id: 'Daging Babi 200g' },
      { zh: '蕃茄 2個', en: 'Tomatoes 2', tl: 'Kamatis 2', id: 'Tomat 2' },
      { zh: '薯仔 2個', en: 'Potatoes 2', tl: 'Patatas 2', id: 'Kentang 2' },
      { zh: '薑片 2片', en: 'Ginger 2 slices', tl: 'Luya 2 piraso', id: 'Jahe 2 iris' }
    ],
    seasoning: [
      { zh: '鹽 適量', en: 'Salt to taste', tl: 'Asin', id: 'Garam secukupnya' }
    ],
    steps: [
      { 
        zh: '瘦肉飛水。蕃茄薯仔去皮切塊。', 
        en: 'Blanch pork. Peel and chop tomatoes/potatoes.',
        tl: 'Pakuluan ang baboy. Balatan/hiwain ang kamatis/patatas.',
        id: 'Rebus babi sebentar. Kupas & potong tomat/kentang.'
      },
      { 
        zh: '燒熱少許油，爆香薑片，略炒蕃茄薯仔。', 
        en: 'Heat oil, fry ginger, lightly fry tomatoes/potatoes.',
        tl: 'Igisa ang luya, kamatis at patatas.',
        id: 'Tumis jahe, tumis sebentar tomat/kentang.'
      },
      { 
        zh: '加入滾水和瘦肉，大火煲滾轉細火煲45分鐘。', 
        en: 'Add boiling water/pork, boil then simmer 45 mins.',
        tl: 'Lagyan ng tubig/baboy, pakuluan ng 45 mins.',
        id: 'Tambah air mendidih/daging, masak api kecil 45 mnt.'
      }
    ],
    tags: ['Soup', 'Vitamin C']
  }
];

const App = () => {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const [lang, setLang] = useState<Language>('en'); // Default to English
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = recipes.filter(r => {
    if (filter === 'all') return true;
    return Array.isArray(r.category) ? r.category.includes(filter) : r.category === filter;
  });

  // Helper to get translated text based on current language mode
  const getTrans = (item: any, field: string) => {
    // Dynamically access the field based on language
    // e.g. field='title' -> titleZH + titleEN/TL/ID
    const key = field + (lang === 'en' ? 'EN' : lang === 'tl' ? 'TL' : 'ID');
    // @ts-ignore
    return item[key] || item[field + 'EN']; // Fallback to EN if translation missing
  };

  const getIngredientText = (ing: Ingredient) => {
    return ing[lang];
  };

  const getStepText = (step: Step) => {
    return step[lang];
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'pork': return '🐷';
      case 'beef': return '🐮';
      case 'chicken': return '🐔';
      case 'seafood': return '🐟';
      case 'egg': return '🥚';
      case 'veggie': return '🥬';
      case 'soup': return '🥣';
      default: return '🥘';
    }
  };

  const getCategoryName = (cat: string) => {
    switch(cat) {
      case 'pork': return '豬肉 Pork';
      case 'beef': return '牛肉 Beef';
      case 'chicken': return '雞肉 Chicken';
      case 'seafood': return '海鮮 Seafood';
      case 'egg': return '蛋類 Egg';
      case 'veggie': return '蔬菜 Veggie';
      case 'soup': return '湯類 Soup';
      default: return '全部 All';
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800 pb-10">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-400 p-2 rounded-full text-white">
              <ChefHat size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-orange-600 leading-tight">家常小菜</h1>
              <p className="text-xs text-orange-400 font-medium">Daily Home Cooking</p>
            </div>
          </div>

          {/* Language Selector (Dropdown) */}
          <div className="relative">
            <div className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-bold text-gray-700 transition-colors border border-gray-200">
              <Globe size={16} className="text-gray-500" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent outline-none appearance-none pr-6 cursor-pointer"
              >
                <option value="en">中 / 英 (EN)</option>
                <option value="tl">中 / 菲 (PH)</option>
                <option value="id">中 / 印 (IN)</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Category Scroll */}
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex px-4 space-x-3 min-w-max">
            {['all', 'pork', 'beef', 'chicken', 'seafood', 'egg', 'veggie', 'soup'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                  filter === cat 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'bg-white text-gray-500 border-2 border-orange-100 hover:border-orange-300'
                }`}
              >
                <span className="text-lg">{getCategoryIcon(cat)}</span>
                <span>{getCategoryName(cat)}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div 
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden border-b-4 border-orange-200 flex flex-col h-full transform hover:-translate-y-1 duration-200"
            >
              {/* Card Image Area (Replaces Cartoon) */}
              <div className="h-48 w-full overflow-hidden relative group bg-gray-100">
                <img 
                  src={recipe.image} 
                  alt={recipe.titleEN} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/orange/white?text=No+Image';
                  }}
                />
                <div className="absolute bottom-0 right-0 p-2 bg-gradient-to-l from-black/60 to-transparent w-full flex justify-end">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-orange-600 flex items-center shadow-sm">
                    <Clock size={12} className="mr-1" /> {recipe.time}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 leading-snug">{recipe.titleZH}</h3>
                </div>
                {/* Dynamic Second Language Title */}
                <p className="text-sm text-gray-500 font-medium mb-3 line-clamp-1">
                  {getTrans(recipe, 'title')}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-1">
                  {recipe.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedRecipe(null)}>
          <div 
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative" 
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="h-64 w-full relative bg-gray-100">
               <img 
                  src={selectedRecipe.image} 
                  alt={selectedRecipe.titleEN} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/orange/white?text=No+Image';
                  }}
                />
               <button 
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{selectedRecipe.titleZH}</h2>
                <h3 className="text-xl text-gray-500 font-medium">
                  {getTrans(selectedRecipe, 'title')}
                </h3>
                
                <div className="flex justify-center space-x-6 mt-4 text-gray-600">
                  <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                    <Clock size={18} className="mr-2 text-orange-500" />
                    <span>{selectedRecipe.time}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                    <Users size={18} className="mr-2 text-orange-500" />
                    <span>{selectedRecipe.servings} 人份</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Ingredients Column */}
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-5 rounded-2xl">
                    <h4 className="flex items-center text-lg font-bold text-yellow-700 mb-4">
                      <Utensils className="mr-2" size={20} /> 食材 Ingredients
                    </h4>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex justify-between text-sm border-b border-yellow-100 pb-1 last:border-0">
                          <span className="font-bold text-gray-700">{ing.zh}</span>
                          <span className="text-gray-500 text-right">{getIngredientText(ing)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-5 rounded-2xl">
                    <h4 className="flex items-center text-lg font-bold text-orange-700 mb-4">
                      <BookOpen className="mr-2" size={20} /> 調味 Seasoning
                    </h4>
                    <ul className="space-y-2">
                      {selectedRecipe.seasoning.map((s, idx) => (
                        <li key={idx} className="flex justify-between text-sm border-b border-orange-100 pb-1 last:border-0">
                          <span className="font-bold text-gray-700">{s.zh}</span>
                          <span className="text-gray-500 text-right">{getIngredientText(s)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps Column */}
                <div>
                  <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4">
                    <ChefHat className="mr-2 text-orange-500" size={20} /> 步驟 Steps
                  </h4>
                  <div className="space-y-4">
                    {selectedRecipe.steps.map((step, idx) => (
                      <div key={idx} className="flex">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mt-1 mr-3 shadow-sm">
                          {idx + 1}
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl flex-grow">
                          <p className="font-bold text-gray-800 mb-1">{step.zh}</p>
                          <p className="text-sm text-gray-500">{getStepText(step)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm mt-12 mb-4">
        <p>🍳 Happy Cooking! 享受入廚樂趣</p>
      </footer>
    </div>
  );
};

export default App;