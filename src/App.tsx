import React, { useState } from 'react';
import { Search, ChefHat, Utensils, BookOpen, Clock, Users, X } from 'lucide-react';

// Types
type Ingredient = {
  zh: string;
  en: string;
};

type Step = {
  zh: string;
  en: string;
};

type Recipe = {
  id: number;
  category: 'pork' | 'beef' | 'chicken' | 'veggie';
  titleZH: string;
  titleEN: string;
  emoji: string;
  time: string;
  servings: string;
  ingredients: Ingredient[];
  seasoning: Ingredient[];
  steps: Step[];
  tags: string[];
};

// Data
const recipes: Recipe[] = [
  // --- PORK RECIPES ---
  {
    id: 1,
    category: 'pork',
    titleZH: '薯仔炆排骨',
    titleEN: 'Braised Pork Ribs with Potato',
    emoji: '🥘',
    time: '45 min',
    servings: '2-3',
    ingredients: [
      { zh: '排骨 300g', en: 'Pork Ribs 300g' },
      { zh: '薯仔 2個 (切塊)', en: 'Potatoes 2 (Chunks)' },
      { zh: '薑片 3片', en: 'Ginger 3 slices' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp' },
      { zh: '蠔油 1湯匙', en: 'Oyster Sauce 1 tbsp' },
      { zh: '糖 1茶匙', en: 'Sugar 1 tsp' },
      { zh: '水 1杯', en: 'Water 1 cup' }
    ],
    steps: [
      { zh: '排骨飛水，薯仔煎至金黃備用。', en: 'Blanch ribs. Pan-fry potatoes until golden.' },
      { zh: '爆香薑片，加入排骨炒香。', en: 'Sauté ginger, add ribs and stir-fry.' },
      { zh: '加入調味料和水，蓋蓋炆20分鐘。', en: 'Add seasonings and water, simmer for 20 mins.' },
      { zh: '加入薯仔再炆15分鐘至軟身。', en: 'Add potatoes, simmer 15 more mins until soft.' }
    ],
    tags: ['Classic', 'Kids Favorite']
  },
  {
    id: 2,
    category: 'pork',
    titleZH: '西蘭花炒肉片',
    titleEN: 'Stir-fried Pork with Broccoli',
    emoji: '🥦',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '瘦肉 200g (切片)', en: 'Lean Pork 200g (Sliced)' },
      { zh: '西蘭花 1個', en: 'Broccoli 1 head' },
      { zh: '蒜頭 2瓣', en: 'Garlic 2 cloves' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp' },
      { zh: '粟粉 1茶匙 (醃肉)', en: 'Cornstarch 1 tsp (Marinade)' },
      { zh: '鹽 少許', en: 'Salt pinch' }
    ],
    steps: [
      { zh: '肉片用生抽粟粉醃15分鐘。', en: 'Marinate pork with soy sauce & starch for 15 mins.' },
      { zh: '西蘭花焯水備用。', en: 'Blanch broccoli.' },
      { zh: '爆香蒜頭，炒熟肉片，加入西蘭花兜勻。', en: 'Fry garlic and pork, toss in broccoli.' }
    ],
    tags: ['Quick', 'Healthy']
  },
  {
    id: 3,
    category: 'pork',
    titleZH: '紅蘿蔔粟米瘦肉湯',
    titleEN: 'Carrot & Corn Pork Soup',
    emoji: '🍲',
    time: '90 min',
    servings: '4',
    ingredients: [
      { zh: '瘦肉 300g', en: 'Lean Pork 300g' },
      { zh: '紅蘿蔔 1條', en: 'Carrot 1 pc' },
      { zh: '粟米 2條', en: 'Corn 2 pcs' }
    ],
    seasoning: [
      { zh: '鹽 適量', en: 'Salt to taste' }
    ],
    steps: [
      { zh: '所有材料洗淨，切塊。', en: 'Wash and chop all ingredients.' },
      { zh: '瘦肉飛水。', en: 'Blanch the pork.' },
      { zh: '水滾後放入所有材料，煲1.5小時。', en: 'Boil water, add all ingredients, simmer 1.5 hrs.' }
    ],
    tags: ['Soup', 'Comfort']
  },
  {
    id: 4,
    category: 'pork',
    titleZH: '黃芽白炒肉片',
    titleEN: 'Stir-fry Napa Cabbage w/ Pork',
    emoji: '🥬',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '五花肉/瘦肉 200g', en: 'Pork Belly/Lean 200g' },
      { zh: '黃芽白 半棵', en: 'Napa Cabbage 1/2' },
      { zh: '薑絲 少許', en: 'Ginger strips' }
    ],
    seasoning: [
      { zh: '雞粉 1茶匙', en: 'Chicken Powder 1 tsp' },
      { zh: '胡椒粉 少許', en: 'Pepper pinch' }
    ],
    steps: [
      { zh: '肉片煎香出油 (如用五花肉)。', en: 'Pan-fry pork until fragrant.' },
      { zh: '加入黃芽白炒至軟身。', en: 'Add cabbage and stir-fry until soft.' },
      { zh: '加少許水和調味焗煮2分鐘。', en: 'Add water/seasoning, cover for 2 mins.' }
    ],
    tags: ['Simple', 'Sweet']
  },
  {
    id: 5,
    category: 'pork',
    titleZH: '蒸肉餅 (加冬菇/馬蹄)',
    titleEN: 'Steamed Minced Pork Patty',
    emoji: '🍘',
    time: '25 min',
    servings: '3',
    ingredients: [
      { zh: '免治豬肉 300g', en: 'Minced Pork 300g' },
      { zh: '冬菇 3隻 (切粒)', en: 'Mushrooms 3 (Diced)' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp' },
      { zh: '糖/粟粉 各1茶匙', en: 'Sugar/Starch 1 tsp ea' },
      { zh: '水 2湯匙 (分次打入)', en: 'Water 2 tbsp (Mix in)' }
    ],
    steps: [
      { zh: '豬肉加入調味及水，順時針攪至起膠。', en: 'Mix pork with seasoning/water until sticky.' },
      { zh: '加入冬菇粒拌勻，鋪平碟上。', en: 'Mix in mushrooms, spread on plate.' },
      { zh: '大火蒸12-15分鐘。', en: 'Steam on high heat for 12-15 mins.' }
    ],
    tags: ['Classic', 'Rice Killer']
  },
  {
    id: 6,
    category: 'pork',
    titleZH: '椒鹽豬扒',
    titleEN: 'Salt & Pepper Pork Chops',
    emoji: '🍖',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '豬扒 3塊', en: 'Pork Chops 3 pcs' },
      { zh: '蒜蓉/辣椒粒', en: 'Minced Garlic/Chili' }
    ],
    seasoning: [
      { zh: '椒鹽 適量', en: 'Salt & Pepper Powder' },
      { zh: '紹興酒 1湯匙', en: 'Shaoxing Wine 1 tbsp' }
    ],
    steps: [
      { zh: '豬扒用刀背拍鬆，醃好煎至金黃。', en: 'Tenderize chops, marinate, fry til golden.' },
      { zh: '爆香蒜蓉辣椒，回鍋兜勻撒椒鹽。', en: 'Fry garlic/chili, toss chops with spice.' }
    ],
    tags: ['Crispy', 'Savory']
  },

  // --- BEEF RECIPES ---
  {
    id: 7,
    category: 'beef',
    titleZH: '西蘭花炒牛肉',
    titleEN: 'Beef with Broccoli',
    emoji: '🥩',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g (逆紋切)', en: 'Beef 200g (Sliced)' },
      { zh: '西蘭花 1個', en: 'Broccoli 1 head' },
      { zh: '薑片 2片', en: 'Ginger 2 slices' }
    ],
    seasoning: [
      { zh: '蠔油 1湯匙', en: 'Oyster Sauce 1 tbsp' },
      { zh: '糖/粟粉/油 (醃肉)', en: 'Sugar/Starch/Oil' }
    ],
    steps: [
      { zh: '牛肉醃20分鐘。西蘭花焯水。', en: 'Marinate beef 20m. Blanch broccoli.' },
      { zh: '熱鑊快炒牛肉至七成熟盛起。', en: 'Quick fry beef to med-rare, remove.' },
      { zh: '爆香薑片，回鑊牛肉與西蘭花兜勻。', en: 'Sauté ginger, toss beef & broccoli together.' }
    ],
    tags: ['Restaurant Style']
  },
  {
    id: 8,
    category: 'beef',
    titleZH: '菜心炒牛肉',
    titleEN: 'Stir-fried Beef w/ Choy Sum',
    emoji: '🌿',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g', en: 'Beef 200g' },
      { zh: '菜心 300g', en: 'Choy Sum 300g' },
      { zh: '蒜蓉 1茶匙', en: 'Minced Garlic 1 tsp' }
    ],
    seasoning: [
      { zh: '生抽/糖', en: 'Soy Sauce/Sugar' },
      { zh: '生粉水 (埋芡)', en: 'Cornstarch Slurry' }
    ],
    steps: [
      { zh: '菜心洗淨切段，焯水備用。', en: 'Wash/cut Choy Sum, blanch.' },
      { zh: '炒香牛肉至變色。', en: 'Stir-fry beef until color changes.' },
      { zh: '加入菜心及調味快炒。', en: 'Add veggies and seasoning, stir quickly.' }
    ],
    tags: ['Healthy', 'Quick']
  },
  {
    id: 9,
    category: 'beef',
    titleZH: '紅蘿蔔薯仔炆牛腩',
    titleEN: 'Braised Beef Brisket Stew',
    emoji: '🍛',
    time: '120 min',
    servings: '4',
    ingredients: [
      { zh: '牛腩 500g', en: 'Beef Brisket 500g' },
      { zh: '紅蘿蔔/薯仔 各2個', en: 'Carrot/Potato 2 pcs ea' },
      { zh: '冰糖 一小粒', en: 'Rock Sugar 1 small pc' }
    ],
    seasoning: [
      { zh: '柱侯醬 2湯匙', en: 'Chu Hou Paste 2 tbsp' },
      { zh: '八角/香葉 (選用)', en: 'Star Anise/Bay Leaf' }
    ],
    steps: [
      { zh: '牛腩飛水。爆香醬料，加入牛腩炒勻。', en: 'Blanch beef. Fry paste, add beef.' },
      { zh: '加水沒過食材，炆1.5小時。', en: 'Cover with water, simmer 1.5 hrs.' },
      { zh: '加入蔬菜再炆30分鐘。', en: 'Add veggies, simmer 30 more mins.' }
    ],
    tags: ['Rich', 'Dinner']
  },
  {
    id: 10,
    category: 'beef',
    titleZH: '沙嗲金菇肥牛煲',
    titleEN: 'Satay Beef & Enoki Pot',
    emoji: '🍄',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '肥牛片 200g', en: 'Sliced Beef 200g' },
      { zh: '金菇 1包', en: 'Enoki Mushroom 1 pack' },
      { zh: '粉絲 1扎', en: 'Vermicelli 1 bundle' }
    ],
    seasoning: [
      { zh: '沙嗲醬 2湯匙', en: 'Satay Sauce 2 tbsp' },
      { zh: '花生醬 1茶匙', en: 'Peanut Butter 1 tsp' }
    ],
    steps: [
      { zh: '砂鍋爆香沙嗲醬，加水煮滾。', en: 'Fry satay sauce in pot, add water to boil.' },
      { zh: '放入金菇粉絲煮軟。', en: 'Add mushrooms & vermicelli until soft.' },
      { zh: '最後放入肥牛灼熟即可。', en: 'Add beef slices last, cook briefly.' }
    ],
    tags: ['Spicy', 'Pot']
  },
  {
    id: 11,
    category: 'beef',
    titleZH: '洋蔥炒牛肉',
    titleEN: 'Beef with Onions',
    emoji: '🧅',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g', en: 'Beef 200g' },
      { zh: '洋蔥 1個 (切絲)', en: 'Onion 1 (Sliced)' }
    ],
    seasoning: [
      { zh: '黑椒碎 少許', en: 'Black Pepper pinch' },
      { zh: '蠔油 1湯匙', en: 'Oyster Sauce 1 tbsp' }
    ],
    steps: [
      { zh: '洋蔥炒至軟身帶焦香，盛起。', en: 'Fry onion until soft & caramelized, remove.' },
      { zh: '炒熟牛肉，回鑊洋蔥兜勻調味。', en: 'Fry beef, add onions back & season.' }
    ],
    tags: ['Aromatic', 'Simple']
  },
  {
    id: 12,
    category: 'beef',
    titleZH: '蕃茄煮牛肉',
    titleEN: 'Tomato Beef Stew',
    emoji: '🍅',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '牛肉 200g', en: 'Beef 200g' },
      { zh: '蕃茄 3個 (切塊)', en: 'Tomatoes 3 (Chunks)' }
    ],
    seasoning: [
      { zh: '糖 2茶匙', en: 'Sugar 2 tsp' },
      { zh: '茄汁 1湯匙', en: 'Ketchup 1 tbsp' }
    ],
    steps: [
      { zh: '牛肉先炒半熟盛起。', en: 'Half-cook beef, remove.' },
      { zh: '蕃茄炒至出汁，加糖和茄汁。', en: 'Fry tomatoes until saucy, add sugar/ketchup.' },
      { zh: '回鑊牛肉煮至全熟。', en: 'Add beef back, cook until done.' }
    ],
    tags: ['Sweet & Sour', 'Appetizing']
  },

  // --- CHICKEN RECIPES ---
  {
    id: 13,
    category: 'chicken',
    titleZH: '薯仔炆雞翼',
    titleEN: 'Braised Chicken Wings w/ Potato',
    emoji: '🥔',
    time: '30 min',
    servings: '3',
    ingredients: [
      { zh: '雞翼 8-10隻', en: 'Chicken Wings 8-10' },
      { zh: '薯仔 2個', en: 'Potatoes 2' },
      { zh: '蒜頭 2瓣', en: 'Garlic 2 cloves' }
    ],
    seasoning: [
      { zh: '蠔油 2湯匙', en: 'Oyster Sauce 2 tbsp' },
      { zh: '老抽 少許 (上色)', en: 'Dark Soy (Color)' },
      { zh: '糖 1茶匙', en: 'Sugar 1 tsp' }
    ],
    steps: [
      { zh: '雞翼煎至兩面金黃。', en: 'Pan-fry wings until golden.' },
      { zh: '加入薯仔塊同炒。', en: 'Add potato chunks and stir-fry.' },
      { zh: '加水及調味，蓋蓋炆15-20分鐘。', en: 'Add water/seasoning, simmer 15-20 mins.' }
    ],
    tags: ['Kids Love', 'Classic']
  },
  {
    id: 14,
    category: 'chicken',
    titleZH: '西蘭花炒雞柳',
    titleEN: 'Chicken Fillet with Broccoli',
    emoji: '🥢',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '雞柳/雞胸 250g', en: 'Chicken Fillet 250g' },
      { zh: '西蘭花 1個', en: 'Broccoli 1 head' },
      { zh: '紅蘿蔔花 少許', en: 'Carrot Slices few' }
    ],
    seasoning: [
      { zh: '鹽/胡椒粉', en: 'Salt/Pepper' },
      { zh: '粟粉水', en: 'Cornstarch Water' }
    ],
    steps: [
      { zh: '雞柳切條醃好。西蘭花焯水。', en: 'Slice/marinate chicken. Blanch broccoli.' },
      { zh: '炒熟雞柳，加入蔬菜兜炒。', en: 'Fry chicken, toss in veggies.' },
      { zh: '埋薄芡即可上碟。', en: 'Thicken sauce lightly and serve.' }
    ],
    tags: ['Low Fat', 'Healthy']
  },
  {
    id: 15,
    category: 'chicken',
    titleZH: '檸檬雞翼',
    titleEN: 'Lemon Chicken Wings',
    emoji: '🍋',
    time: '25 min',
    servings: '3',
    ingredients: [
      { zh: '雞翼 8-10隻', en: 'Chicken Wings 8-10' },
      { zh: '檸檬 半個 (切片)', en: 'Lemon 1/2 (Sliced)' },
      { zh: '蜜糖 1湯匙', en: 'Honey 1 tbsp' }
    ],
    seasoning: [
      { zh: '生抽 1湯匙', en: 'Soy Sauce 1 tbsp' },
      { zh: '冰糖 適量', en: 'Rock Sugar to taste' }
    ],
    steps: [
      { zh: '雞翼煎金黃。', en: 'Fry wings until golden.' },
      { zh: '加入檸檬片和調味，加少許水炆煮。', en: 'Add lemon, seasoning & water, simmer.' },
      { zh: '收汁時加入蜜糖令表面光亮。', en: 'Add honey when sauce reduces for glaze.' }
    ],
    tags: ['Tangy', 'Appetizing']
  },
  {
    id: 16,
    category: 'chicken',
    titleZH: '紅蘿蔔馬蹄蒸雞',
    titleEN: 'Steamed Chicken w/ Carrot',
    emoji: '🥕',
    time: '25 min',
    servings: '3',
    ingredients: [
      { zh: '雞件 半隻', en: 'Chicken (Chopped) 1/2' },
      { zh: '紅蘿蔔 1條 (滾刀)', en: 'Carrot 1 (Chunks)' },
      { zh: '馬蹄 4粒 (拍扁)', en: 'Water Chestnut 4' }
    ],
    seasoning: [
      { zh: '生粉/生抽/油', en: 'Starch/Soy/Oil' },
      { zh: '薑絲', en: 'Ginger Strips' }
    ],
    steps: [
      { zh: '雞件用醃料醃20分鐘。', en: 'Marinate chicken for 20 mins.' },
      { zh: '紅蘿蔔鋪底，放上雞件。', en: 'Layer carrots at bottom, top with chicken.' },
      { zh: '大火蒸15-18分鐘。', en: 'Steam on high for 15-18 mins.' }
    ],
    tags: ['Steam', 'Light']
  },
  {
    id: 17,
    category: 'chicken',
    titleZH: '洋蔥圈煎雞扒',
    titleEN: 'Pan-fried Chicken w/ Onion',
    emoji: '🍳',
    time: '20 min',
    servings: '2',
    ingredients: [
      { zh: '去骨雞脾扒 2塊', en: 'Boneless Thighs 2' },
      { zh: '洋蔥 1個', en: 'Onion 1' }
    ],
    seasoning: [
      { zh: '豉油雞汁/生抽', en: 'Sweet Soy/Soy Sauce' },
      { zh: '糖 少許', en: 'Sugar pinch' }
    ],
    steps: [
      { zh: '雞皮向下慢火煎出油至脆身。', en: 'Fry skin-side down until crispy/oily.' },
      { zh: '反面煎熟，盛起切件。', en: 'Flip and cook through, slice.' },
      { zh: '原鑊炒洋蔥，淋在雞扒上。', en: 'Fry onions in same pan, serve over chicken.' }
    ],
    tags: ['Crispy Skin', 'Easy']
  },
  {
    id: 18,
    category: 'chicken',
    titleZH: '粟米紅蘿蔔雞粒',
    titleEN: 'Diced Chicken w/ Corn & Carrot',
    emoji: '🌽',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '雞胸肉 200g (切粒)', en: 'Chicken Breast 200g' },
      { zh: '粟米粒 半碗', en: 'Corn Kernels 1/2 bowl' },
      { zh: '紅蘿蔔粒 半碗', en: 'Carrot Diced 1/2 bowl' }
    ],
    seasoning: [
      { zh: '鹽/雞粉', en: 'Salt/Chicken Powder' }
    ],
    steps: [
      { zh: '雞粒醃好。雜菜粒焯水。', en: 'Marinate chicken. Blanch veggies.' },
      { zh: '炒熟雞粒，加入雜菜粒兜勻。', en: 'Fry chicken, mix in veggies.' },
      { zh: '簡單調味即可。', en: 'Season simply and serve.' }
    ],
    tags: ['Bento', 'Colorful']
  },

  // --- VEGGIE RECIPES ---
  {
    id: 19,
    category: 'veggie',
    titleZH: '蒜蓉炒雜菜',
    titleEN: 'Garlic Stir-fry Mixed Veggies',
    emoji: '🥗',
    time: '10 min',
    servings: '2',
    ingredients: [
      { zh: '西蘭花/紅蘿蔔/菜心', en: 'Broccoli/Carrot/Choy Sum' },
      { zh: '蒜蓉 1湯匙', en: 'Minced Garlic 1 tbsp' }
    ],
    seasoning: [
      { zh: '鹽 1茶匙', en: 'Salt 1 tsp' },
      { zh: '紹興酒 少許', en: 'Wine splash' }
    ],
    steps: [
      { zh: '所有蔬菜切好，較硬的先焯水。', en: 'Cut veggies, blanch hard ones first.' },
      { zh: '爆香蒜蓉，大火快炒所有蔬菜。', en: 'Fry garlic, high heat stir-fry veggies.' },
      { zh: '灒酒加鹽調味。', en: 'Splash wine, salt, serve.' }
    ],
    tags: ['Vegan', 'Vitamin']
  },
  {
    id: 20,
    category: 'veggie',
    titleZH: '上湯浸黃芽白',
    titleEN: 'Napa Cabbage in Broth',
    emoji: '🥣',
    time: '15 min',
    servings: '3',
    ingredients: [
      { zh: '黃芽白 1棵', en: 'Napa Cabbage 1 head' },
      { zh: '皮蛋/鹹蛋 (選用)', en: 'Preserved Eggs (Opt)' },
      { zh: '薑絲', en: 'Ginger Strips' }
    ],
    seasoning: [
      { zh: '雞湯 1盒', en: 'Chicken Broth 1 pack' }
    ],
    steps: [
      { zh: '黃芽白洗淨切段。', en: 'Wash and cut cabbage.' },
      { zh: '雞湯煮滾，加入薑絲及蛋粒。', en: 'Boil broth with ginger and eggs.' },
      { zh: '放入黃芽白煮至軟淋。', en: 'Add cabbage, boil until soft.' }
    ],
    tags: ['Soup Veggie', 'Sweet']
  },
  {
    id: 21,
    category: 'veggie',
    titleZH: '薯仔絲炒紅蘿蔔',
    titleEN: 'Stir-fry Potato & Carrot Shreds',
    emoji: '🍟',
    time: '15 min',
    servings: '2',
    ingredients: [
      { zh: '薯仔 1個 (切絲)', en: 'Potato 1 (Shredded)' },
      { zh: '紅蘿蔔 半條 (切絲)', en: 'Carrot 1/2 (Shredded)' },
      { zh: '蔥段', en: 'Scallion' }
    ],
    seasoning: [
      { zh: '醋 1湯匙', en: 'Vinegar 1 tbsp' },
      { zh: '鹽/糖', en: 'Salt/Sugar' }
    ],
    steps: [
      { zh: '薯仔絲浸水去澱粉。', en: 'Soak potato shreds to remove starch.' },
      { zh: '熱油炒香紅蘿蔔和薯仔絲。', en: 'Fry carrot and potato shreds.' },
      { zh: '加入醋保持爽脆，調味上碟。', en: 'Add vinegar for crunch, season.' }
    ],
    tags: ['Crunchy', 'Appetizer']
  },
  {
    id: 22,
    category: 'veggie',
    titleZH: '白灼菜心',
    titleEN: 'Poached Choy Sum',
    emoji: '🥬',
    time: '8 min',
    servings: '2',
    ingredients: [
      { zh: '菜心 300g', en: 'Choy Sum 300g' },
      { zh: '薑片 2片', en: 'Ginger 2 slices' }
    ],
    seasoning: [
      { zh: '熟油/蠔油', en: 'Cooked Oil/Oyster Sauce' }
    ],
    steps: [
      { zh: '水滾加鹽和薑片。', en: 'Boil water with salt and ginger.' },
      { zh: '放入菜心灼至剛熟。', en: 'Poach choy sum until just done.' },
      { zh: '撈起瀝乾，淋上蠔油熟油。', en: 'Drain, drizzle with oil/sauce.' }
    ],
    tags: ['Basic', 'Clean']
  }
];

const App = () => {
  const [filter, setFilter] = useState<'all' | 'pork' | 'beef' | 'chicken' | 'veggie'>('all');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = recipes.filter(r => filter === 'all' || r.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'pork': return '🐷';
      case 'beef': return '🐮';
      case 'chicken': return '🐔';
      case 'veggie': return '🥬';
      default: return '🥘';
    }
  };

  const getCategoryName = (cat: string) => {
    switch(cat) {
      case 'pork': return '豬肉 Pork';
      case 'beef': return '牛肉 Beef';
      case 'chicken': return '雞肉 Chicken';
      case 'veggie': return '蔬菜 Veggie';
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
        </div>
        
        {/* Category Scroll */}
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex px-4 space-x-3 min-w-max">
            {['all', 'pork', 'beef', 'chicken', 'veggie'].map((cat) => (
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
              {/* Card Image Area (Cartoon Placeholder) */}
              <div className="h-40 bg-orange-100 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-yellow-200 opacity-20 pattern-dots"></div>
                <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md filter">{recipe.emoji}</span>
                <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-orange-600 flex items-center shadow-sm">
                  <Clock size={12} className="mr-1" /> {recipe.time}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 leading-snug">{recipe.titleZH}</h3>
                </div>
                <p className="text-sm text-gray-500 font-medium mb-3">{recipe.titleEN}</p>
                
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
            <div className="bg-orange-100 h-48 flex items-center justify-center relative">
               <button 
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 bg-white/50 hover:bg-white p-2 rounded-full text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              <span className="text-9xl drop-shadow-lg filter">{selectedRecipe.emoji}</span>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{selectedRecipe.titleZH}</h2>
                <h3 className="text-xl text-gray-500 font-medium">{selectedRecipe.titleEN}</h3>
                
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
                          <span className="text-gray-500 text-right">{ing.en}</span>
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
                          <span className="text-gray-500 text-right">{s.en}</span>
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
                          <p className="text-sm text-gray-500">{step.en}</p>
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