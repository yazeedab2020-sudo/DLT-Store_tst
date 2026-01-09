const products = [
    {
        id: 'god-of-war',
        name: 'God of War',
        price: 179,
        image: 'https://cdn1.epicgames.com/spt-assets/edaff839f0734d16bc89d2ddb1dc9339/steel-magnolia-15owu.jpg',
        developer: 'Santa Monica Studio',
        category: 'Offline Games',
        description: 'رحلة كراتوس الأب والمحارب في الأراضي الاسكندنافية. قصة مؤثرة وأكشن جبار.',
        longDescription: 'كراتوس عاد، لكنه ليس كما عرفته من قبل. في رحلة محفوفة بالمخاطر لتعليم ابنه البقاء، يواجه آلهة ووحوش الميثولوجيا الإسكندنافية. مزيج مثالي بين القصة العاطفية والأكشن العنيف الذي يخطف الأنفاس. هذه اللعبة ستغير مفهومك عن ألعاب الفيديو للأبد.',
        features: [
            'قصة أب وابن مؤثرة وعميقة',
            'أسلوب قتال عنيف ومرضي',
            'جرافيكس مذهل وعوالم خلابة',
            'كاميرا واحدة مستمرة بدون انقطاع'
        ],
        badges: ['HOT', 'Offline', 'Story Rich']
    },
    {
        id: 'red-dead-redemption-2',
        name: 'Red Dead 2',
        price: 189,
        image: 'https://dailyspin.id/wp-content/uploads/2021/02/RDR-2-R.jpg',
        developer: 'Rockstar Games',
        category: 'Offline Games',
        description: 'أعظم لعبة عالم مفتوح في الغرب المتوحش. تفاصيل لا تصدق وقصة لا تنسى.',
        longDescription: 'عيش حياة الخارجين عن القانون في أواخر عصر الغرب المتوحش. آرثر مورغان وعصابة فان دير ليند في رحلة هروب وبقاء. عالم اللعبة ينبض بالحياة بشكل لا يصدق، كل تفصيل دقيق، كل شخصية لها قصة. Red Dead Redemption 2 ليست لعبة، إنها تجربة حياة كاملة.',
        features: [
            'عالم مفتوح حي وواقعي بشكل لا يصدق',
            'قصة درامية ملحمية وشخصيات لا تنسى',
            'مئات الأنشطة الجانبية والصيد والاستكشاف',
            'جودة رسومية وتفاصيل بصرية مذهلة'
        ],
        badges: ['New', 'Offline', 'Masterpiece']
    },
    {
        id: 'the-last-of-us',
        name: 'The Last of Us',
        price: 249,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2531310/94b5d8b3165a6fe592e406054b08a2dd24e2f848/capsule_616x353.jpg?t=1750959180',
        developer: 'Naughty Dog',
        category: 'Offline Games',
        description: 'قصة البقاء والأمل في عالم مدمر. علاقة جويل وإيلي التي أبكت الملايين.',
        longDescription: 'عندما ينهار العالم، لمن ستلجأ؟ انضم إلى جويل وإيلي في رحلة محفوفة بالمخاطر عبر أمريكا المدمرة. واجه المصابين والناجين اليائس. قصة ستلامس قلبك وتجعلك تحبس أنفاسك في كل لحظة. تجربة سينمائية تفاعلية لا مثيل لها.',
        features: [
            'سرد قصصي عاطفي وقوي',
            'أجواء توتر ورعب بقاء واقعية',
            'تمثيل صوتي وحركي بمستوى عالمي',
            'تحسينات رسومية مذهلة للجيل الجديد'
        ],
        badges: ['Offline', 'Emotional']
    },
    {
        id: 'horizon-forbidden-west',
        name: 'Horizon Forbidden West',
        price: 159,
        image: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2021/05/Horizon-Forbidden-West.jpg?w=1200&h=675&fit=crop',
        developer: 'Guerrilla Games',
        category: 'Offline Games',
        description: 'استكشف الغرب المحرم مع ألوي. آلات عملاقة وأسرار قديمة تنتظر الكشف.',
        longDescription: 'عد إلى عالم Horizon المذهل حيث الطبيعة استعادت الأرض والآلات العملاقة تحكم البرية. انطلق مع Aloy في مغامرة إلى الغرب المحرم، واجه آلات جديدة مرعبة، وقبائل غامضة، واكشف أسراراً قد تنقذ العالم من الدمار. جمال بصري يخطف الأبصار ومتعة استكشاف لا تنتهي.',
        features: [
            'عالم مفتوح خلاب ومتنوع البيئات',
            'قتال استراتيجي ضد آلات عملاقة',
            'قصة خيال علمي مثيرة',
            'استكشاف تحت الماء وتسلق الجبال'
        ],
        badges: ['Offline', 'Open World']
    },
    {
        id: 'call-of-duty-black-ops-3',
        name: 'Call of Duty: Black Ops III',
        price: 199,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311210/library_600x900.jpg',
        developer: 'Treyarch',
        category: 'Offline Games',
        description: 'مستقبل مظلم وجنود خارقين. قصة مشوقة وطور زومبي أسطوري.',
        longDescription: 'انطلق في مستقبل مظلم حيث تلاشت الخطوط بين الإنسانية والتكنولوجيا. واجه أعداءك بقدرات سيبرانية خارقة في حملة قصة ملحمية يمكن لعبها بشكل فردي أو تعاوني، بالإضافة إلى طور الزومبي الأكثر عمقاً وطموحاً.',
        features: [
            'قصة خيال علمي مثيرة',
            'طور زومبي عميق وممتع',
            'قدرات سيبرانية وتخصيص',
            'لعب تعاوني ومحلي'
        ],
        badges: ['Action', 'Zombies', 'Shooter']
    },
    {
        id: 'project-zomboid',
        name: 'Project Zomboid',
        price: 89,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/library_600x900.jpg',
        developer: 'The Indie Stone',
        category: 'Offline Games',
        description: 'البقاء للأقوى في عالم الزومبي. واقعية مفرطة وتفاصيل دقيقة.',
        longDescription: 'هل ستنجو؟ في عالم مفتوح مليء بالزومبي، كل قرار يهم. ابنِ ملجأك، ابحث عن الطعام، واصنع أدواتك. نظام صحة وطب واقعي، وتفاصيل دقيقة تجعل كل تجربة فريدة من نوعها.',
        features: [
            'عالم مفتوح وواقعي جداً',
            'نظام بناء وصناعة عميق',
            'مهارات وتطور للشخصية',
            'تحدي البقاء الصعب'
        ],
        badges: ['Survival', 'Open World', 'Simulation']
    },
    {
        id: 'ark-survival-evolved',
        name: 'ARK: Survival Evolved',
        price: 95,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/library_600x900.jpg',
        developer: 'Studio Wildcard',
        category: 'Offline Games',
        description: 'روض الديناصورات وابنِ امبراطوريتك في جزيرة غامضة.',
        longDescription: 'استيقظ عارياً على شاطئ جزيرة غامضة تدعى ARK. يجب عليك الصيد، والحصاد، وصناعة الأدوات، وزراعة المحاصيل، وبناء الملاجئ للبقاء على قيد الحياة. استخدم دهاءك ومواردك لترويض الديناصورات العملاقة.',
        features: [
            'ترويض وركوب الديناصورات',
            'بناء قواعد ضخمة',
            'عالم مفتوح شاسع',
            'بقاء ومغامرة'
        ],
        badges: ['Dinosaurs', 'Survival', 'Adventure']
    },
    {
        id: 'hollow-knight',
        name: 'Hollow Knight',
        price: 59,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900.jpg',
        developer: 'Team Cherry',
        category: 'Offline Games',
        description: 'مغامرة في عالم حشري غامض ورسوم يدوية خلابة.',
        longDescription: 'انزل إلى أعماق مملكة Hallownest المدمرة. استكشف الكهوف الملتوية، وحارب المخلوقات الفاسدة، وكون صداقات مع حشرات غريبة، كل ذلك بأسلوب رسم يدوي كلاسيكي ثنائي الأبعاد.',
        features: [
            'عالم ميترويدفينيا مترابط',
            'قتال سلس وصعب',
            'رسوم يدوية وموسيقى ساحرة',
            'استكشاف وأسرار عميقة'
        ],
        badges: ['Indie', 'Metroidvania', 'Masterpiece']
    }
];

function getProductById(id) {
    return products.find(product => product.id === id);
}
