// *******************
// Product Searching
// *******************

let productJsonArray = [
  {
    id: 0,
    name: "Rose Oolong",
    src: "./assets/images/teas/rose_oolong_1.jpg",
    discription:
      "rose oolong Roses are a universal symbol of love across many cultures but beyond that, it also symbolizes a variety of feelings. We bring to you one of our finest mixtures of Darjeeling Oolong wrapped in a floral rose flavour. This comforting drink is anti-inflammatory due to the presence of anti-oxidants and contains beneficial vitamins that boost the immunity system and improve overall health",
    keywords:
      "teasroses oolong Reduces Stress Boosts Rate Metabolism Protects Against Diabetes Aids Weight loss Makes Teeth Bones Strong Darjeeling floral flavour tea comforting drink anti-inflammatory anti-oxidants vitamins immunity improve health vitamins comforting",
    display: false,
    readMeHref: "/floral-teas.html?#roseOolong",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 1,
    name: "Jasmine Delight",
    src: "./assets/images/teas/Jasmine_delight.jpg",
    discription:
      "jasmine Delight Freshly picked from the Kashmir Valley, we bring the finest organically grown Jasmine blossom blended with Darjeeling Tea to lift your spirits and reduce the risk of heart attacks. Our blend is helpful to build a strong immune system, reduce sugar levels and improve digestion. The peculiarity of our blend lies in its delicate flavour and floral aroma",
    keywords:
      "teasJasmine Delight Freshly Fights Bacteria Loses Weight Aromatherapy Prevents Cancer Alleviate Pains Aches Kashmiri Valley organically Freshly grown blossom blended Darjeeling Tea reduce heart attacks immunity immune system sugar improve digestion flavour floral aroma",
    display: false,
    readMeHref: "/floral-teas.html?#jasmineDelight",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 2,
    name: "Blueberry Splash",
    src: "./assets/images/teas/blueberry.jpg",
    discription:
      "Our Blueberry Tea is one of the most unique blends. Blue Berry- also known as Jamun, has a very fragrant, astringent, and smooth flavour. Research has proved this tea to be anti-diabetic. It further strengthens the immune system and helps brain functionality. This rare combination of Darjeeling Tea and blueberry can be brewed hot or cold",
    keywords:
      "teasblueberry splash tea Low Fat Packed blends Vitamin C Good Source fibre Reduces Cancer Risk Excellent Source Manganese jamun fragrant astringent smooth flavour anti-diabetic strengthens immune system brain functionality Darjeeling brewed hot cold",

    display: false,
    readMeHref: "/fruity-blend.html?#blueBerrySplash",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 3,
    name: "Tulsi Green Tea",
    src: "./assets/images/teas/Tulsi-Green-Tea.jpg",
    discription:
      "Tulsi, being the queen of all herbs, is the most important element of Ayurveda. Tulsi is considered to be an adaptogen that helps the body to reduce outside stressors. Our special blend of Green Tea and Tulsi significantly improve asthma, bronchitis, and cold. Tulsi also supports the immune system and cardiovascular system. Our tea has been specially blended with Darjeeling Green Tea in a way that brings calming zen to our lives, making it one of the most superior products we have",
    keywords:
      "teastulsi green tea stres burn  herbs extra fat hair skin cough cold Ayurveda Headaches adaptogen Fever stress asthma bronchitis immune immunity cardiovascular Darjeeling calm cold adaptogen",
    display: false,
    readMeHref: "/herbal-teas.html?#tulsiGreenTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 4,
    name: "Lemon Tulsi",
    src: "./assets/images/teas/lemon_tulsi.png",
    discription:
      "Our blend offers lovely lemony flavour mixed with tasty Tulsi leaves, with the added benefits of Green Tea. It is a taste experience too good to be true! What a miracle that something so healthy can taste so good! Tulsi offers a wide horizon of health benefits like a healthy immune and respiratory system. Our tea offers a calm and soothing effect, lifting your mood and carrying you positively throughout the day",
    keywords:
      "teaslemon tulsi blend tea lemony flavour skin immunity soothes mind body weight Antioxidants Green immunity immune respiratory calm mood soothing effect",

    display: false,
    readMeHref: "/herbal-teas.html?#lemonTulsi",
    byNowHref: "https://wa.me/918750028448",
  },

  {
    id: 5,
    name: "Moringa",
    src: "./assets/images/teas/Moringa.jpg",
    discription:
      "Moringa Tea is also called the miracle tea because of its numerous health benefits. Moringa is rich in several essential vitamins and minerals. It helps mobilize stored visceral fat which helps in weight loss. This also keeps blood sugar levels in check. Our blend is specially designed to be a delicious drink with health benefits",
    keywords:
      "teasmoringa tea stress inflammation stomach ulcers Arthritis Diarrhea vitamins minerals visceral fat weight loss blood sugar specially blend",

    display: false,
    readMeHref: "/herbal-teas.html?#moringa",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 6,
    name: "Masala Chai",
    src: "./assets/images/teas/masala_tea.webp",
    discription:
      "Indulge in the rich blend of Indian spices and full-bodied black tea to get the true ‘Desi’ flavour from every cup. We have a blend of Darjeeling orthodox tea and CTC with real spices- no artificial flavours. We have used a lot of spices like cardamom, ginger, cinnamon, nutmeg, licorice, tulsi, pepper, pink pepper, star anise, moringa, and ashwagandha. This will not only tickle your taste buds but also bring a lot of health benefits. An ideal tea to boost your immunity",
    keywords:
      "teasMasala Chai tea blend Indian spices inflammation immunity digestion Antioxidants black desi flavour darjeeling ctc cardamom ginger cinnamon nutmeg orthodox licorice tulsi pepper pink pepper star anise moringa ashwagandha",

    display: false,
    readMeHref: "/exotic.html?#masalaChai",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 7,
    name: "Chamomile",
    src: "./assets/images/teas/chamomile.jpg",
    discription:
      "Chamomile is a calming herb while White Tea is the least processed of all teas. When blended, it is the perfect cup that will soothe your nerves and improve digestion. Sipping a hot cup of our specially blended tea while inhaling its wonderful floral fragrance will make your worries disappear and help with insomnia",
    keywords:
      "teasChamomile White Tea best herb seller popular Reduces Menstrual Pain specially blended Treat Diabetes Lowers Blood Sugar Prevents soothe Osteoporosis nerves Reduces Inflammation calming soothe nerves improve digestion floral inhaling fragrance worries insomnia hot ",

    display: false,
    readMeHref: "/floral-teas.html?#chamomile",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 8,
    name: "Lavender Hush",
    src: "./assets/images/teas/Lovender_Hush.jpg",
    discription:
      "Our Lavender hush Tea offers a delicate flavour and an aromatic fragrance that boasts extensive health benefits, the most well-known being its ability to induce calmness. It streamlines your digestive processes and also helps eliminate bacteria that causes chest cold and congestion. However you choose to brew, it is a great way to unwind a long day",
    keywords:
      "teasLavender Hush tea Improves Sleep Quality Promotes Digestive Health Benefits Blood Sugar Control Improves Heart Protects Against Cancer flavour aromatic fragrance calmness digestive digestion bacteria chest cold congestion",

    display: false,
    readMeHref: "/floral-teas.html?#lavenderHush",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 9,
    name: "Blue Butterfly",
    src: "./assets/images/images/Blue_butterfly_pea_flower.jpg",
    discription:
      "This tea contains catechins which are said to be instrumental in aiding weight loss. This tea is known for its anti-aging properties and is beneficial for skin health. The alluring diffusion of color while brewing makes this an exotic and rich tea for all tea lovers. Our blend makes it a refreshing and mood-enhancing tea making your mind calm and stress-free",
    keywords:
      "teasblue butterfly tea best luxury meeting special catechins Skin Hair Health Weight Loss Stabilizes Blood Sugar Ameliorates Diabetic Conditions Healthy Eyesight catechins anti-aging mind calm stress alluring diffusion exotic refreshing mood-enhancing stress-free",

    display: false,
    readMeHref: "/floral-teas.html?#blueButterfly",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 10,
    name: "Mango Desire",
    src: "./assets/images/teas/Mango_desire.jpeg",
    discription:
      "Just like mango, we bring to you the king of all teas. Sipping our mango tea is like meditation but just not under the mango tree. Combined with the benefits of green tea, our mango tea makes for a delicious, healthy, and guilt-free beverage. The extraordinary fruity flavour can now be tasted all year round. Our tea is rich in plant compounds and anti-inflammatory properties. It helps with hair and skin wellness. This can be enjoyed both hot and cold",
    keywords:
      "teasMango Desire tea Kidney Stones Throat Flushes Unwanted Toxins Diabetes Herbal Medicine green beverage fruit anti-inflammation skin wellness hot cold delicious healthy guilt-free fruity flavour",
    display: false,
    readMeHref: "/fruity-blend.html?#mangoDesire",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 11,
    name: "Mint Tea",
    src: "./assets/images/teas/mint_tea.jpg",
    discription:
      "Our mint blend is an aromatic tea that can be used to warm you up on a chilly winter evening and cool you down on a hot summer day. Our tea is beneficial to the body in multiple ways. Mint is naturally rich in Vitamin C and is also a good source of minerals including iron, potassium, and calcium. It extensively helps improve metabolism, controls acidity, and releases stress. This blend is light and brisk with a sweet and refreshing after-taste. This can be enjoyed both hot and cold",
    keywords:
      "teasMint Tea smoothes indigestion ease IBS symptoms caddeine weight loss immune immunity system aromatic warm winter evening hot summer naturally Vitamin minerals iron potassium calcium metabolism acidity stress blend refreshing cold",

    display: false,
    readMeHref: "/herbal-teas.html?#mintTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 12,
    name: "Liquorice",
    src: "./assets/images/teas/Liquorice.jpg",
    discription:
      "Liquorice, also known as Mulethi, is being used for thousands of years to help treat various ailments, including, respiratory and digestive issues. Our blend with Darjeeling tea also helps to reduce stress and fatigue. Liquorice, being sweet in itself, is one of the most popular flavours of herbal tea",
    keywords:
      "teasLiquorice tea Constipation Acid Reflux weight loss Diabetes Indigestion Mulethi respiratory digestive Darjeeling stress popular fatigue flavours herbal",

    display: false,
    readMeHref: "/herbal-teas.html?#liquorice",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 13,
    name: "Strawberry Magic",
    src: "./assets/images/teas/Strawberry_magic.jpg",
    discription:
      "Our tea brings a joyful balance of sweet strawberry and Darjeeling tea. It helps with digestion and diarrhea. Our blend turns crispy golden in color releasing a sensational fruity aroma to make it an all-time favorite variety we have. This can be enjoyed both hot and cold",
    keywords:
      "teasStrawberry Magic tea Chronic Inflammation Bone Mineral Density Metabolism Heart blood sugar Darjeeling digestion diarrhea hot and cold blend crispy golden sensational fruity aroma",

    display: false,
    readMeHref: "/fruity-blend.html?#strawberryMagic",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 14,
    name: "Ginger Turmeric",
    src: "./assets/images/images/Ginger_turmeric.jpg",
    discription:
      "Ginger turmeric tea is a refreshing tisane with the musky flavour of tea, sweet and spicy flavour of ginger and turmeric. The benefits of this tea are endless. It is a powerful adaptogen, it relieves pain and inflammation, boosts immunity, reduces stress, boosts digestion and metabolism, improves heart health, nourishes the skin, and is a natural antibiotic. It is also a rich source of antioxidants. All the ingredients work in synergy to detoxify your body and boost your immunity",
    keywords:
      "teasginger turmeric tea best seller popular inflammation pain immunity Nausea sickness refreshing tisane musky flavour spicy adaptogen stress digestion metabolism heart skin antibiotic antioxidant synergy detoxify",

    display: false,
    readMeHref: "/immunity.html?#gingerTurmeric",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 15,
    name: "Mystic Banana",
    src: "./assets/images/teas/Mystic_Banana.jpg",
    discription:
      "Our mystic banana tea is a fruit blend that will always satisfy you. It provides anti-oxidants, Potassium, and Magnesium which support heart health, aids sleep, and prevents bloating. If you want to switch things up and try a new tea, mystic banana is the one. This can be enjoyed both hot and cold",
    keywords:
      "teasMystic Banana tea Immunity Excellent Source Prebiotics Prevents Bloating Sleep fruit blend anti-oxidants Potassium Magnesium heart hot cold",

    display: false,
    readMeHref: "/fruity-blend.html?#mysticBanana",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 16,
    name: "Daily wellness Tea",
    src: "./assets/images/teas/daily-wellness.jpg",
    discription:
      "Daily Wellness is a perfect package of herbs, spices, and tea. It gives you an all-round daily wellness dose. We have used Organic green tea, Holy Basil, moringa, cardamom, cinnamon, lemon peel, mint leaves, and ashwagandha. This tea is a rich source of vitamin C and contains high amounts of antioxidants. It will help you fight the common cold, sore throat and helps with respiratory immunization, and also reduces the risk of heart disease. Two to three cups of this Wellness tea can help you have a better metabolism and will develop all-round immunity. It is a refreshing and energizing drink that is recommended for all age groups",
    keywords:
      "teasdaily wellness tea herbs  spices digestion diabetes heart hair skin cancer Organic green Holy Basil moringa cardamom cinnamon lemon peel mint leaves ashwagandha vitamin C cold sore throat  respiratory immunity metabolism energize energy antioxidants immunization refreshing energizing energy",

    display: false,
    readMeHref: "/immunity.html?#dailyWellnessTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 17,
    name: "Immunity Elixir Tea",
    src: "./assets/images/teas/Immunity_Elixir_Tea.jfif",
    discription:
      "Immunity Elixir is a high immunity-boosting tisane. The refreshing light flavour of tea, blended with Rama Tulsi, Shyama Tulsi, licorice, and turmeric makes the perfect blend for your health. Tulsi and licorice are considered the best herbal remedies for sore throat, cough, cold and common flu. Turmeric is a natural antibiotic. A combination of these together gives the best results for keeping your respiratory tract clean and develop antibodies. This is perhaps the best drink to pamper you and develop a high immune system. It is recommended for all age groups",
    keywords:
      "teasImmunity Elixir Tea refreshing blended Tulsi Shyama Tulsi  turmeric natural antibiotic antibodies sore throat immunity herbal remedies  licorice cough cold flu tisane respiratory",

    display: false,
    readMeHref: "/immunity.html?#immunityElixirTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 18,
    name: "Hibiscus",
    src: "./assets/images/teas/hibiscus.jpg",
    discription:
      "This floral blend of ours is naturally one of the sourest teas which marks the uniqueness of the flavour of Hibiscus. As loved across many countries, it has a significant impact on your health. It helps control blood sugar levels and lowers blood pressure. It is also known for its anti-depressing and weight management properties",
    keywords:
      "teashibiscus tea floral blend naturally Antioxidants Lowers Blood Pressure Fat Boosts Liver Health Promotes Weight Loss sugar anti-depressing",

    display: false,
    readMeHref: "/floral-teas.html?#hibiscus",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 19,
    name: "Emerald Green",
    src: "./assets/images/teas/emerald_green.jpg",
    discription:
      "Emerald Green Tea is the best and most delicate green tea in our collection. This comes from high elevated clonal tea plantations of the Darjeeling region. Skilled labours have picked only fine 2 leaves and a bud for making this tea. This is an organically grown tea. It is the least processed tea and the flavour is very delicate and soft. Also the delicate leaves have the highest amount of anti-oxidants which helps in reducing high blood pressure, reduces the chances of cardio vascular ailments and boosts immunity. Overall, a perfect tea for your health and palate",
    keywords:
      "teasemerald green tea best seller popular fat loss metabolism cholestrol blood heart clonal darjeeling organically anti-oxidant pressure cardio vascular immunity anti-oxidants palate",

    display: false,
    readMeHref: "/authentic.html?#emeraldGreen",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 20,
    name: "Divine Apple",
    src: "./assets/images/teas/divine_apple.jpg",
    discription:
      "Our Apple tea is one of the most popular products due to its weight loss properties. It helps treat constipation and improves bone health. A perfect blend of apple and Darjeeling Tea brings an exotic taste and a divine aroma, making it suitable to be consumed all year round. This can be enjoyed both hot and cold",
    keywords:
      "teasdivine apple anti-Inflammation Cholesterol Diabetes Macular Degeneration Constipation weight loss constipation improves bone health blend Darjeeling exotic aroma hot cold",

    display: false,
    readMeHref: "/fruity-blend.html?#divineApple",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 21,
    name: "Refresh Pineapple",
    src: "./assets/images/teas/refreshing_pineapple.png",
    discription:
      "Refreshing Pineapple Our Pineapple Tea is a beverage made by blending organic Darjeeling tea and Pineapple fruit making it the perfect cup to start your day. Bromelain is the most active ingredient present in this tea. It reduces inflammation and is highly recommended to arthritis patients. Our tea is also suitable for people suffering from chronic headaches and irritable bowel movements. This can be enjoyed both hot and cold",
    keywords:
      "teasRefreshing Pineapple tea Immune Anxiety metabolism Weight Loss beverage blend organic Darjeeling fruit Bromelain inflammation arthritis patients chronic headaches irritable bowel movements hot cold",
    display: false,
    readMeHref: "/fruity-blend.html?#refreshingPineapple",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 22,
    name: "Lemon Zing",
    src: "./assets/images/teas/Lemon_zing.jpg",
    discription:
      "An extraordinarily hand-crafted tea is the beauty of our product. We have in offer an inseparable mixture of tangy lemon and musky Darjeeling Muscatel flavour. A cup of this tea is a great way to detoxify the body and enhancing skin wellness. This can be enjoyed both hot and cold",
    keywords:
      "teaslemon zing tea extraordinarily hand-crafted Antioxidants Combats Infections Digestive Sleep blood pressure tangy lemon musky Darjeeling Muscatel flavour detoxify skin hot cold wellness",
    display: false,
    readMeHref: "/fruity-blend.html?#lemonZing",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 23,
    name: "Lapsang Souchong",
    src: "./assets/images/teas/lapsnag.jpg",
    discription:
      "Lapsang Souchong also referred to as smoked tea is a black tea originally from the Fujian Mountains of China. This tea is distinct from the other types of teas as the leaves are traditionally smoke-dried over pinewood fires imparting a distinctive pinewood flavour. This tea is rich in antioxidants which help to improve your heart health and reduces the chances of cardiovascular diseases. This tea also helps to control blood pressure and blood sugar levels and fights bad cholesterol",
    keywords:
      "teasLapsang Souchong Smoked Tea heart immunity immune diabetes weight stress loss originally traditionally black fujjan china antioxidants cardiovascular blood pressure sugar cholestrol",
    display: false,
    readMeHref: "/exotic.html?#lapsangSouchongSmokedTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 24,
    name: "Clove Tulsi Organic",
    src: "./assets/images/teas/clove_tulsi_organic_tea.jpg",
    discription:
      "Our blend of clove tulsi and Darjeeling tea offers a strong clove aroma and medicinal properties. Imagine being able to tackle stress, anxiety, and inflammation with a relaxing cup of tea made with Basil and Clove. Our tea will help you protect against infections and lowers cholesterol. We have made a special blend of clove basil and hand-picked Darjeeling Tea. If you feel the need to pamper your health, this tea is just the right choice ",
    keywords:
      "teasclove tusli organic tea darjeeling stress anxiety inflammation relax basil infection cholesterol",
    display: false,
    readMeHref: "/herbal-teas.html?#cloveTulsiOrganicTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 25,
    name: "Earl Grey",
    src: "./assets/images/img/exotic/exotic1.png",
    discription:
      "The most famous aromatized teas were originally concocted as a gift to the second Earl of Grey and have borne his name ever since. A sensuous, citrusy mix of natural bergamot essential oil on handcrafted premium Darjeeling tea makes our Earl Grey Supreme. The subtle citrus flavor of bergamot combined with the bold musky flavor of Darjeeling makes this tea a connoisseur delight",
    keywords:
      "teasearl grey most famous tea nautral bergamot darjeeling brain boosting heart weight stress strokes",
    display: false,
    readMeHref: "/exotic.html?#earlGrey",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 26,
    name: "Kashmiri Kehwa",
    src: "./assets/images/img/exotic/exotic2.png",
    discription:
      "One cup of our Koshur Kashmiri Kehwa Mix and you lose yourself into the paradise where it is culturally rooted. A blend of aromatic spices of green cardamom, saffron, clove, cinnamon, and some dry fruit chunks. The Kashmiri Kehwa is a gold-hued drink served from times immemorial at small and large gatherings to let the guests indulge in the rich and calming flavor of this magical drink. Apart from the taste, it also has numerous health benefits",
    keywords:
      "teaskashmiri kehwa tea paradise green cardamom saffron clove cinnamon dry fruits chunks guest calming detoxifies stress remedy cold heart glow",
    display: false,
    readMeHref: "/exotic.html?#koshurKashmiriKehwaTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 27,
    name: "Peach Moonshine",
    src: "./assets/images/img/exotic/exotic4.png",
    discription:
      "Peach Moonshine is our oriental blend of high elevation clonal tea with the natural organic peach extract. The leaf provides a golden yellow color and typical oriental beauty taste. The peach extract makes the unique flavor a tropical dream. This can be enjoyed both hot and cold. You can also welcome guests with the Iced Peach Tea",
    keywords:
      "teaspeach moonshine tea natural organic flavor hot cold guest iced cancer smoking damage anti-inflammation obesity eye",
    display: false,
    readMeHref: "/exotic.html?#peachMoonshine",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 28,
    name: "Chocolate Twist",
    src: "./assets/images/img/exotic/exotic5.png",
    discription:
      "If you are looking for a little chocolate to keep you in good spirits, this is the ideal chocolate tea, perfect for your preferences. With far fewer calories compared to real chocolates, this is the guilt-free way to enjoy something special. A perfect tea to greet your guests with or even pamper yourself. This can be enjoyed both hot and cold.",
    keywords:
      "teaschocolate twist tea special guest hot cold heart cancer cognitive magnesium vitamins",
    display: false,
    readMeHref: "/exotic.html?#chocolateTwist",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 29,
    name: "Kasturi Musk",
    src: "./assets/images/img/exotic/exotic6.png",
    discription:
      "‘Kasturi‘ or ‘Musk‘ is a class of aromatic substances that commonly includes glandular secretion of Musk Deer. The male deer uses this to attract the female deer. The aroma is very pleasant with woody and floral notes. It is sharp and the aroma directly touches the soul. We have blended this with the best Muscatel Tea of Darjeeling. This combination is rare and one of the best to taste.",
    keywords:
      "teaskasturi musk tea exotic best muscatel darjeeling  brain strength bloating constipation digestion nerve",
    display: false,
    readMeHref: "/exotic.html?#kasturiMuskTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 30,
    name: "Detox Tea",
    src: "./assets/images/img/immunity/immunity2.png",
    discription:
      "With urbanization and drastic change in lifestyle, impurities and toxins find their way into the body in the form of dust and pollution. It is time to flush out the toxins and allow the mind and body to function at their best. Be cleansed with this immunity tea which is infused with Ginger, turmeric, moringa, cinnamon, and bergamot oil which are well-known for eliminating toxins through efficient digestion. All the ingredients work in synergy to detoxify your body and boost your immunity.",
    keywords:
      "teasdetox tea toxins pollution immunity ginger turmeric moringa cinnamon bergamot digestion detoxify liver gallblandder blood purification glow weight",
    display: false,
    readMeHref: "/immunity.html?#detoxTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 31,
    name: "Giddhapahar Spring",
    src: "./assets/images/img/authentic/authentic1.png",
    discription:
      "Giddapahar is a small garden nestled in Kurseong. It has mainly chinary bushes and makes some of the finest Darjeeling teas. This tea is among the best in Darjeeling. It has a very caramelized flavour which is thick and has a lasting after taste. Overall, it is a wonderful tea to make your everyday cuppa. Start your day with something wonderful. Have our Giddapahar Spring China Tea",
    keywords:
      "teasGiddhapahar Spring tea kurseong darjeeling metabolism fat healthy lifestyle weight Peachy Fruity Aroma",
    display: false,
    readMeHref: "/authentic.html?#giddhapaharSpringChina",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 32,
    name: "Jungpana Golden",
    src: "./assets/images/img/authentic/authentic2.png",
    discription:
      "Jungpana Golden Tips is one of the best specimens of Darjeeling Second Flush. This tea comes from Mahalderam, an outer division of Jungpana tea Estate. The flavour of this tea is thick and complex. It has the sweetness of clones and the musky feel of second flush. Overall, it is a perfect cup for all moods",
    keywords:
      "teasJungpana Golden tea best darjeeling mahalderam sweetness musky moods stress weight loss detoxifies toxins heart",
    display: false,
    readMeHref: "/authentic.html?#jungpanaGoldenTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 33,
    name: "Dorjee Tea",
    src: "./assets/images/img/authentic/authentic3.png",
    discription:
      "Dorjee Tea is an oolong tea produced by Giddapahar Tea Estate. A high elevated section of the garden has clonal bushes which is ideal for this masterpiece. This tea is produced mainly during the first flush season which after mild oxidation gives a brisk cup. Our tea starts with a mild floral note and towards the end, there is a musky finish to the sip. It’s mildly astringency only adds to the glory of this tea. Overall, it is one of the finest clonal Oolongs from Darjeeling.",
    keywords:
      "teasdorjee tea oolong giddapahar darjeeling heart cancer blood sugar gut cavities",
    display: false,
    readMeHref: "/authentic.html?#dorjeeTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 34,
    name: "Silver Needles",
    src: "./assets/images/img/authentic/authentic4.png",
    discription:
      "Silver Needles tea is not just a tea but a handicraft. It consists of only the buds of the tea flush and is considered the highest quality of white tea in the world. In some countries, it was called “the imperial pluck” because the finest product was reserved for consumption by the highest of nobility. This tea has been made without the use of machinery and is handcrafted in true sense",
    keywords:
      "teassilver needles white tea imperial pluck immunity relaxant reproductive reproduction cancer digestion",
    display: false,
    readMeHref: "/authentic.html?#silverNeedles",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 35,
    name: "Cut Tear Crush",
    src: "./assets/images/img/authentic/authentic6.png",
    discription:
      "The classic tea for you. We use our secret process to Cut Tear Crush (CTC) the tea leaves to being an overall taste to your tongue, which is very aromatic and soothing. This is the tea that we use to make our known milk tea that we drink every day",
    keywords:
      "teascut tear crush ctc tea aromatic soothing cancer fat heart attack digestion immunity",
    display: false,
    readMeHref: "/authentic.html?#cutTearCrush",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 36,
    name: "Caribbean Rum",
    src: "./assets/images/img/cellar/cellar1.png",
    discription:
      "The latest feather in our cap is our “From the Cellars” collection. We bring to you our exclusive Caribbean Rum tea which has been blended with the best rum from the Caribbean during the rolling of tea. It is then fully fermented, after which it is sent to the dryer. Due to the careful procedure, the aroma of rum remains intact but the alcohol content is completely evaporated during drying. The taste is sugar sweet. Its full-bodied complex fruity tastes like fermented grapes, making this tea special. The mix of the musky tea flavor adds just the right twist to this wonderful tea. For all tea lovers, we have brought this masterpiece non-alcoholic tea which is ideally the best you can have Health",
    keywords:
      "teasCaribbean rum tea cellars best sugar sweet fruity special musky non-alcoholic Blood Sugar Osteoporosis Strong Bones metabolism Skin Insomnia",
    display: false,
    readMeHref: "/cellar.html?#caribbeanRum",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 37,
    name: "Single Malt Scotch",
    src: "./assets/images/img/cellar/cellar2.png",
    discription:
      "The latest feather in our cap is our “From the Cellars” collection. We bring to you our exclusive Single Malt Scotch tea which has been blended with the finest scotch from the Caribbean during the rolling of tea. It is then fully fermented, after which it is sent to the dryer. Due to the careful procedure, the aroma of scotch remains intact but the alcohol content is completely evaporated during drying. The taste of sweet apples dominates the flavor and has an undertone of honey. This when blended with the best Darjeeling Muscatels makes the best combination for the palate. For all tea lovers, we have brought this masterpiece non-alcoholic tea which is ideally the best you can have",
    keywords:
      "teassingle malt scotch tea cellars Darjeeling non-alcoholic Blood Sugar Osteoporosis Strong Bones metabolism Skin Insomnia",
    display: false,
    readMeHref: "/cellar.html?#singleMaltScotchTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 38,
    name: "Cabernet Red Wine",
    src: "./assets/images/img/cellar/cellar3.png",
    discription:
      "The latest feather in our cap is our “From the Cellars” collection. We bring to you our exclusive Cabernet Red Wine tea which has been blended with the French Cabernet during the rolling of tea. It is then fully fermented, after which it is sent to the dryer. Due to the careful procedure, the aroma of wine remains intact but the alcohol content is completely evaporated during drying. The taste is full-bodied, complex fruity and the mix of the Musky Tea flavor adds just the right twist to this wonderful tea. For all tea lovers, we have brought this masterpiece non-alcoholic tea which is ideally the best you can have.",
    keywords:
      "teasCabernet Red Wine tea cellar French Musky non-alcoholic Blood Sugar Osteoporosis Strong Bones metabolism Skin Insomnia",
    display: false,
    readMeHref: "/cellar.html?#cabernetRedWineTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 39,
    name: "Cognac Brandy",
    src: "./assets/images/img/cellar/cellar4.png",
    discription:
      "The latest feather in our cap is our “From the Cellars” collection. We bring to you our exclusive Cognac Brandy Tea which has been blended with the best rum Cognac from France during the rolling of tea. It is then fully fermented, after which it is sent to the dryer. Due to the careful procedure, the aroma of Brandy remains intact but the alcohol content is completely evaporated during drying. The taste is like passion fruit and little earthy truffle. This when blended with the best Darjeeling Muscatels makes the best combination for the palate. For all tea lovers, we have brought this masterpiece non-alcoholic tea which is ideally the best you can have.",
    keywords:
      "teascognac brandy tea cellars best rum France Darjeeling Muscatels best non-alcoholic Blood Sugar Osteoporosis Strong Bones metabolism Skin Insomnia",
    display: false,
    readMeHref: "/cellar.html?#cognacBrandyTea",
    byNowHref: "https://wa.me/918750028448",
  },
  {
    id: 40,
    name: "Pint Beer",
    src: "./assets/images/img/cellar/cellar5.png",
    discription:
      "The latest feather in our cap is our “From the Cellars” collection. We bring to you our exclusive Pint Beer Tea which has been blended with beer extracts at the time of manufacturing. The blending process is such that the aroma of beer remains embedded within the leaf cells but the alcohol content is completely evaporated during the drying process. The taste is tart and sour and the combination of this with the best Darjeeling Tea is heavenly. For all tea lovers, we have brought this masterpiece non-alcoholic tea which is ideally the best you can have",
    keywords:
      "teaspint beer tea cellars tart sour best Darjeeling non-alcoholic Blood Sugar Osteoporosis Strong Bones metabolism Skin Insomnia",
    display: false,
    readMeHref: "/cellar.html?#pintBeerTea",
    byNowHref: "https://wa.me/918750028448",
  },
];
let faqJsonArray = [
  {
    id: 0,
    keywords:
      "teasfaq prices darjeeling teas start low what",
    display: false,
    card: `<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <b>Q. What is the price of Darjeeling Tea?</b>
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <p>
                <strong>Ans.</strong> At Tastea, our prices start as low as INR 200 for our teas. Please
                contact us for more details.
            </p>
        </div>
    </div>
</div>`,
  },
  {
    id: 1,
    keywords:
      "teasfaq size packets darjeeling teas grams request size what",
    display: false,
    card: `<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <b>Q. What is the size of one packet of Darjeeling Tea?</b>
        </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">

            <p>
                <strong>Ans.</strong> We are available in 50 grams and 100 grams packets. However, in
                special cases, we can change the quantity size per request.

            </p>
        </div>
    </div>
</div>`,
  },
  {
    id: 2,
    keywords:
      "teasfaq how make darjeeling teas brewing guide",
    display: false,
    card: `<div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <b>Q. How to make Darjeeling Tea?</b>
        </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <p>
                <strong>Ans.</strong> Boil water at 90^C until it reaches the mild simmering stage. Pour
                the water in a tea pot containing two grams of Darjeeling tea and let it brew for three
                to five minutes. Strain and enjoy. For a detailed brewing guide, please refer to <a
                    href="./brewing_guide.html" style="color: #9f476a;"><u><i>Brewing
                            Guide</i></u></a>
            </p>
        </div>
    </div>
</div>`,
  },
  {
    id: 3,
    keywords:
      "teasfaq what darjeeling teas health benefits that can help with weight loss, diabetes, anxiety, mood upliftment, sleep ",
    display: false,
    card: `<div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <b>Q. What is special in Darjeeling Tea?</b>
        </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <p>
                <strong>Ans.</strong> Each leaf is picked at its bud and brought to your cup with zero
                added colors, preservatives or chemicals. This is the one of the most natural tea that
                you can have. Our tea contains health benefits that can help with weight loss, diabetes,
                anxiety, mood upliftment, sleep and so on.
            </p>
        </div>
    </div>
</div>`,
  },
  {
    id: 4,
    keywords:
      "teasfaq normal ctc milk teas lovers Masala chai elaichi (cardamom) adrak (ginger) laung (clove)",
    display: false,
    card: `<div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <b>Q. Do you have normal chai?</b>
        </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <p>
                <strong> Ans.</strong> Yes, the tea used in our daily lives is known as CTC. We have a
                premium CTC chai available for the milk tea lovers. Along with this, we have Masala
                chai. It is a mixture of elaichi (cardamom), adrak (ginger) and laung (clove) along with
                CTC.
            </p>
        </div>
    </div>
</div>`,
  },
];

let allCount = 0;
let productCount = 0;
let faqCount = 0;

const search = () => {
  const searchText = localStorage.getItem("QUERY");
  if (searchText !== "") {
    document.getElementById(
      "searchText"
    ).innerHTML = `Search Results For "<span style="color:#9f476a;">${searchText}</span>":`;
  }

  let flag = false; // flag for result found or not

  document.getElementById("Product").innerHTML = "";
  // document.getElementById('faq_accordion_') = "";

  productCount = 0;
  for (let i = 0; i < productJsonArray.length; i++) {
    const element = productJsonArray[i];
    element.display = false;
  }

  let searchTextArr = searchText
    .toLocaleLowerCase()
    .split(/\s+/)
    .filter((ele) => ele !== "" && ele.length > 1);

  for (let j = 0; j < searchTextArr.length; j++) {
    const ele = searchTextArr[j];
    for (let i = 0; i < productJsonArray.length; i++) {
      const element = productJsonArray[i];
      let flag2 = element.keywords.toLocaleLowerCase().includes(ele); //flag for keyword found or not
      if (flag2 && element.display === false) {
        document.getElementById("Product").innerHTML += `
        <div class="product">
            <img src=${element.src} alt="" class="card-img-top card-img">
            <div class="product_content">
                <div class="productName">${element.name}</div>
                <div class="product_btn">
                    <a id="readMe" href=${element.readMeHref}>Read Me</a>
                    <a id="buyNow" href=${element.byNowHref} target="_blank">Buy Now</a>
                </div>
            </div>
        </div>
        `;
        productCount++;
        element.display = true;
        flag = true;
      }
    }
  }

  // ****************
  // faq Searching
  // ****************
  
  for (let i = 0; i < searchTextArr.length; i++) {
    const element = searchTextArr[i];
    for (let j = 0; j < faqJsonArray.length; j++) {
      const ele = faqJsonArray[j];
      if (
        ele.keywords.toLocaleLowerCase().includes(element) &&
        ele.display === false
      ) {
        document.getElementById("faq_accordion_").innerHTML += ele.card;
        faqCount++;
        ele.display = true;
        flag = true;
      }
    }
  }

  document.getElementById("allCount").innerHTML = `${productCount + faqCount}`;
  document.getElementById("productCount").innerHTML = `${productCount}`;
  document.getElementById("faqCount").innerHTML = `${faqCount}`;

  if (productCount !== 0) {
    document.getElementById(
      "Product_heading"
    ).innerHTML = `<h3 style="color:#9f476a;"> Our Products</h3>`;
  }

  if (faqCount !== 0) {
    document.getElementById(
      "faq_heading"
    ).innerHTML = `<h3 style="color:#9f476a;"> Frequently Asked Questions</h3>`;
  }

  if (!flag) {
    document.getElementById(
      "pages"
    ).innerHTML = `<h1 style="color:#9f476a; text-align:center">No Result Found</h1>`;
  }
};

var index = 0;
var page = document.getElementsByClassName("page");
var result_list_items = document.getElementsByClassName("result_list_items");
let headings = document.getElementsByClassName("headings");
var i = 0;

function search_content(index) {
  if (index === 0) {
    result_list_items[index].className += " active";

    for (i = 0; i < page.length; i++) {
      page[i].style.display = "flex";
      headings[i].style.display = "block";
    }
    for (i = 1; i < result_list_items.length; i++) {
      result_list_items[i].className =
        result_list_items[i].className.replace("active");
    }
    return;
  }
  for (i = 0; i < headings.length; i++) {
    headings[i].style.display = "none";
    page[i].style.display = "none";
  }
  for (i = 0; i < result_list_items.length; i++) {
    result_list_items[i].className =
      result_list_items[i].className.replace("active");
  }
  result_list_items[index].className += " active";
  headings[index - 1].style.display = "block";
  page[index - 1].style.display = "flex";
}

window.addEventListener("load", search);
