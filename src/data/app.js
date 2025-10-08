const apps = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=60",
        title: "Pixel Pro",
        companyName: "Creative Labs",
        description: "Powerful photo editor with professional features and filters for creating stunning visuals.",
        size: 120,
        reviews: 12540,
        ratingAvg: 4.6,
        downloads: 520000,
        ratings: [
            { name: "1 star", count: 210 },
            { name: "2 star", count: 320 },
            { name: "3 star", count: 540 },
            { name: "4 star", count: 3400 },
            { name: "5 star", count: 81570 }
        ]
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&q=60",
        title: "NoteEase",
        companyName: "NoteWorks",
        description: "Minimalist note-taking app with markdown support and cloud sync across all devices.",
        size: 45,
        reviews: 7340,
        ratingAvg: 4.4,
        downloads: 210000,
        ratings: [
            { name: "1 star", count: 120 },
            { name: "2 star", count: 200 },
            { name: "3 star", count: 600 },
            { name: "4 star", count: 1500 },
            { name: "5 star", count: 5400 }
        ]
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=60",
        title: "TaskFlow",
        companyName: "Workflow Inc",
        description: "Organize tasks and projects with simple boards, reminders, and progress tracking.",
        size: 62,
        reviews: 15020,
        ratingAvg: 4.7,
        downloads: 730000,
        ratings: [
            { name: "1 star", count: 340 },
            { name: "2 star", count: 420 },
            { name: "3 star", count: 710 },
            { name: "4 star", count: 4000 },
            { name: "5 star", count: 10050 }
        ]
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=60",
        title: "TuneSpace",
        companyName: "AudioWorks",
        description: "Stream and share your favorite tracks, create playlists, and discover new music.",
        size: 80,
        reviews: 9300,
        ratingAvg: 4.3,
        downloads: 320000,
        ratings: [
            { name: "1 star", count: 300 },
            { name: "2 star", count: 410 },
            { name: "3 star", count: 900 },
            { name: "4 star", count: 3200 },
            { name: "5 star", count: 4800 }
        ]
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=60",
        title: "FitPulse",
        companyName: "Healthify",
        description: "Track workouts, calories, and stay motivated with personalized fitness plans.",
        size: 95,
        reviews: 18200,
        ratingAvg: 4.5,
        downloads: 990000,
        ratings: [
            { name: "1 star", count: 410 },
            { name: "2 star", count: 520 },
            { name: "3 star", count: 1200 },
            { name: "4 star", count: 5500 },
            { name: "5 star", count: 10600 }
        ]
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=60",
        title: "FinanceHub",
        companyName: "MoneyMinds",
        description: "Personal finance manager and budgets tracker with insights and charts.",
        size: 70,
        reviews: 5400,
        ratingAvg: 4.2,
        downloads: 230000,
        ratings: [
            { name: "1 star", count: 220 },
            { name: "2 star", count: 300 },
            { name: "3 star", count: 600 },
            { name: "4 star", count: 1800 },
            { name: "5 star", count: 2480 }
        ]
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=60",
        title: "Learnly",
        companyName: "EduTech",
        description: "Bite-sized learning and quizzes for students and professionals to improve skills.",
        size: 40,
        reviews: 4300,
        ratingAvg: 4.1,
        downloads: 150000,
        ratings: [
            { name: "1 star", count: 100 },
            { name: "2 star", count: 210 },
            { name: "3 star", count: 450 },
            { name: "4 star", count: 1200 },
            { name: "5 star", count: 2340 }
        ]
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=60",
        title: "DevBoard",
        companyName: "CodeLab",
        description: "Dev tools and snippets organizer for developers to manage projects efficiently.",
        size: 30,
        reviews: 2100,
        ratingAvg: 4.0,
        downloads: 97000,
        ratings: [
            { name: "1 star", count: 80 },
            { name: "2 star", count: 120 },
            { name: "3 star", count: 300 },
            { name: "4 star", count: 600 },
            { name: "5 star", count: 1000 }
        ]
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=60",
        title: "Shoply",
        companyName: "MarketCorp",
        description: "Find deals and manage shopping lists with ease and share them with friends.",
        size: 55,
        reviews: 8900,
        ratingAvg: 4.3,
        downloads: 410000,
        ratings: [
            { name: "1 star", count: 170 },
            { name: "2 star", count: 260 },
            { name: "3 star", count: 700 },
            { name: "4 star", count: 2200 },
            { name: "5 star", count: 6570 }
        ]
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=60",
        title: "CookMate",
        companyName: "Kitchenly",
        description: "Recipes and meal planner to help you cook delicious meals with step-by-step guidance.",
        size: 60,
        reviews: 6400,
        ratingAvg: 4.4,
        downloads: 270000,
        ratings: [
            { name: "1 star", count: 140 },
            { name: "2 star", count: 200 },
            { name: "3 star", count: 480 },
            { name: "4 star", count: 1400 },
            { name: "5 star", count: 4180 }
        ]
    },
    {
        id: 11,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=60",
        title: "TravelGo",
        companyName: "Wanderlust",
        description: "Plan trips and itineraries, track bookings, and share plans with friends and family.",
        size: 85,
        reviews: 10200,
        ratingAvg: 4.6,
        downloads: 600000,
        ratings: [
            { name: "1 star", count: 200 },
            { name: "2 star", count: 300 },
            { name: "3 star", count: 600 },
            { name: "4 star", count: 3200 },
            { name: "5 star", count: 6400 }
        ]
    },
    {
        id: 12,
        image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&q=60",
        title: "WeatherNow",
        companyName: "SkyNet",
        description: "Fast local weather updates and alerts, track forecasts and severe conditions in real-time.",
        size: 25,
        reviews: 4100,
        ratingAvg: 4.2,
        downloads: 180000,
        ratings: [
            { name: "1 star", count: 90 },
            { name: "2 star", count: 150 },
            { name: "3 star", count: 420 },
            { name: "4 star", count: 1100 },
            { name: "5 star", count: 2340 }
        ]
    },
    // 8 more apps similarly
];

export default apps;
