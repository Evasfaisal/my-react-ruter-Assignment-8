const apps = [
    {
        id: 1,
        image: "https://i.ibb.co.com/DPpmNyLV/alexander-shatov-ni-Uk-Im-Zc-SP8-unsplash.jpg",
        title: "YouTube",
        companyName: "Google LLC",
        description:
            "YouTube is the world’s leading video-sharing platform, allowing users to upload, view, and share videos across every genre imaginable—from entertainment, education, and news to gaming and lifestyle. With billions of active users, YouTube connects creators and audiences globally, making it a central hub for digital culture. Its personalized recommendation system curates videos based on user interests, ensuring an engaging experience for everyone. Users can subscribe to channels, join live streams, and interact through comments or community posts. YouTube Premium offers ad-free viewing, background playback, and access to exclusive content. Whether you're learning new skills, enjoying your favorite creators, or exploring trending topics, YouTube provides endless opportunities for creativity and discovery, making it an essential part of modern digital life.",
        size: 150,
        reviews: 125000000,
        ratingAvg: 4.7,
        downloads: 10000000000,
        ratings: [
            { name: "1 star", count: 1000000 },
            { name: "2 star", count: 2000000 },
            { name: "3 star", count: 5000000 },
            { name: "4 star", count: 30000000 },
            { name: "5 star", count: 90000000 }
        ]
    },
    {
        id: 2,
        image: "https://i.ibb.co.com/HDFVyBgR/alexander-shatov-t-F3vug2-Fh-Q-unsplash.jpg",
        title: "Instagram",
        companyName: "Meta Platforms, Inc.",
        description:
            "Instagram is a visual social media platform that enables people to share photos, videos, and stories with a global audience. Launched in 2010, it quickly became one of the most popular apps in the world for connecting, expressing creativity, and building communities. With features like Reels, Stories, and IGTV, Instagram allows creators, brands, and individuals to showcase their lifestyles and engage directly with followers. The app also supports shopping, influencer marketing, and brand promotion, making it a powerful tool for business growth. Users can explore trends, discover niche content, and express themselves through filters, captions, and reels. Instagram’s integration with Facebook and Messenger enhances its connectivity, ensuring a seamless experience across Meta’s platforms.",
        size: 120,
        reviews: 85000000,
        ratingAvg: 4.5,
        downloads: 5000000000,
        ratings: [
            { name: "1 star", count: 1500000 },
            { name: "2 star", count: 3000000 },
            { name: "3 star", count: 7000000 },
            { name: "4 star", count: 28000000 },
            { name: "5 star", count: 46000000 }
        ]
    },
    {
        id: 3,
        image: "https://i.ibb.co.com/F40LgBVN/dima-solomin-up-BKRm-HJr-CI-unsplash.jpg",
        title: "WhatsApp Messenger",
        companyName: "Meta Platforms, Inc.",
        description:
            "WhatsApp is a fast, secure messaging app that connects more than two billion people around the world. It allows users to send text messages, voice notes, photos, videos, documents, and location data instantly—all with end-to-end encryption for privacy. WhatsApp supports high-quality voice and video calls, making it a go-to communication tool for personal and professional use. Group chats help families, friends, and teams stay connected, while WhatsApp Business enables companies to manage customer relationships efficiently. The app syncs seamlessly across devices, ensuring that users can communicate anytime, anywhere. With its focus on simplicity, reliability, and security, WhatsApp has redefined global communication and continues to be one of the most trusted apps worldwide.",
        size: 95,
        reviews: 90000000,
        ratingAvg: 4.6,
        downloads: 10000000000,
        ratings: [
            { name: "1 star", count: 1200000 },
            { name: "2 star", count: 2100000 },
            { name: "3 star", count: 4000000 },
            { name: "4 star", count: 30000000 },
            { name: "5 star", count: 88000000 }
        ]
    },
    {
        id: 4,
        image: "https://i.ibb.co.com/GQzPQxgN/alexander-shatov-I4p0-Fcj-DBJI-unsplash.jpg",
        title: "TikTok",
        companyName: "ByteDance Ltd.",
        description:
            "TikTok is a creative short-form video platform that empowers users to express themselves through music, trends, and storytelling. With its algorithm-driven feed, TikTok personalizes content for every user, offering endless entertainment tailored to their interests. From comedy skits and tutorials to dance challenges and educational clips, it has become a global phenomenon shaping pop culture. TikTok provides easy-to-use video editing tools, filters, and effects, making high-quality content creation accessible to everyone. Its vibrant creator community, live features, and duet system encourage collaboration and discovery. Businesses also leverage TikTok for viral marketing and brand engagement, while influencers find it a perfect space for creativity and growth.",
        size: 200,
        reviews: 82000000,
        ratingAvg: 4.4,
        downloads: 5000000000,
        ratings: [
            { name: "1 star", count: 2000000 },
            { name: "2 star", count: 3000000 },
            { name: "3 star", count: 8000000 },
            { name: "4 star", count: 25000000 },
            { name: "5 star", count: 44000000 }
        ]
    },
    {
        id: 5,
        image: "https://i.ibb.co.com/p6gJNYMt/farhat-altaf-y-ZUx-D4-Rz-L0-E-unsplash.jpg",
        title: "Gmail",
        companyName: "Google LLC",
        description:
            "Gmail is a free, secure, and intelligent email service developed by Google. It provides users with 15GB of free storage, smart categorization, and advanced spam protection. With integration across Google Workspace (Docs, Drive, Meet), Gmail simplifies communication and productivity. Its AI-powered features like Smart Compose and Smart Reply help write messages faster, while automatic sorting keeps the inbox clean and organized. Gmail’s search capabilities make it easy to find any message instantly, and offline mode ensures accessibility without an internet connection. The app is optimized for both personal and professional use, offering strong security and synchronization across devices. Whether managing business emails or personal messages, Gmail remains a trusted and efficient communication hub for millions worldwide.",
        size: 60,
        reviews: 76000000,
        ratingAvg: 4.6,
        downloads: 10000000000,
        ratings: [
            { name: "1 star", count: 900000 },
            { name: "2 star", count: 1800000 },
            { name: "3 star", count: 3000000 },
            { name: "4 star", count: 20000000 },
            { name: "5 star", count: 50000000 }
        ]
    },
    {
        id: 6,
        image: "https://i.ibb.co.com/1tJwNRBd/alexander-shatov-w-qqwn5-O-4-I-unsplash.jpg",
        title: "Spotify",
        companyName: "Spotify AB",
        description:
            "Spotify is the world’s leading music streaming service, offering millions of tracks, albums, and podcasts across all genres. With personalized playlists like Discover Weekly and Daily Mix, Spotify delivers a listening experience tailored to each user. The app supports both free ad-supported and premium ad-free tiers, allowing seamless offline playback and high-quality streaming. Users can follow artists, share playlists, and explore trending music from around the world. Spotify also supports podcasts and audiobooks, making it a comprehensive entertainment platform. Its clean design and smart recommendation system make discovering new content effortless. For creators, Spotify for Artists provides insights into listener behavior and tools to grow their audience. Spotify redefines how we enjoy music globally.",
        size: 85,
        reviews: 69000000,
        ratingAvg: 4.5,
        downloads: 1000000000,
        ratings: [
            { name: "1 star", count: 1200000 },
            { name: "2 star", count: 2200000 },
            { name: "3 star", count: 5000000 },
            { name: "4 star", count: 25000000 },
            { name: "5 star", count: 40000000 }
        ]
    },
    {
        id: 7,
        image: "https://i.ibb.co.com/84Mt5JXg/alexander-shatov-f-Rjjn-N-8njo-unsplash.jpg",
        title: "Snapchat",
        companyName: "Snap Inc.",
        description:
            "Snapchat is a multimedia messaging app that revolutionized digital communication with its disappearing messages and fun filters. It allows users to send photos and videos called 'Snaps' that vanish after being viewed. With features like Stories, Spotlight, and Snap Map, Snapchat lets users share their moments creatively while exploring real-time events from around the world. Augmented reality filters and Bitmoji integration enhance the experience, making it playful and interactive. Snapchat also serves as a platform for publishers, influencers, and brands to engage audiences through Discover. Focused on privacy and creativity, Snapchat remains one of the most innovative social apps, blending communication, entertainment, and technology seamlessly for a new generation of digital storytellers.",
        size: 110,
        reviews: 58000000,
        ratingAvg: 4.3,
        downloads: 1000000000,
        ratings: [
            { name: "1 star", count: 1500000 },
            { name: "2 star", count: 2800000 },
            { name: "3 star", count: 5000000 },
            { name: "4 star", count: 18000000 },
            { name: "5 star", count: 32000000 }
        ]
    },
    {
        id: 8,
        image: "https://i.ibb.co.com/PsvXyY8h/tolgahan-akbulut-vbnk-R6c-Ygjk-unsplash.jpg",
        title: "X (formerly Twitter)",
        companyName: "X Corp.",
        description:
            "X, formerly known as Twitter, is a global platform for real-time conversations, news, and trends. It empowers users to share short posts (formerly tweets), images, and videos while engaging with global communities. X has evolved into a space for expression, entertainment, and debate, connecting millions of people, leaders, journalists, and creators. With Spaces, users can host live audio discussions; with X Premium, they can enjoy extended post limits, editing, and verification features. Businesses use X for marketing and audience engagement, while individuals use it for news, humor, and communication. The platform’s dynamic and fast-paced nature makes it one of the most influential social networks shaping public discourse worldwide.",
        size: 70,
        reviews: 64000000,
        ratingAvg: 4.2,
        downloads: 1000000000,
        ratings: [
            { name: "1 star", count: 1700000 },
            { name: "2 star", count: 2500000 },
            { name: "3 star", count: 4800000 },
            { name: "4 star", count: 19000000 },
            { name: "5 star", count: 32000000 }
        ]
    },
    {
        id: 9,
        image: "https://i.ibb.co.com/RMc4My4/rubaitul-azad-q-K8-Tu-Z7-T9-N4-unsplash.jpg",
        title: "Google Maps",
        companyName: "Google LLC",
        description:
            "Google Maps is the world’s most reliable navigation and mapping app, helping billions of users explore the world with ease. It provides real-time GPS navigation, traffic conditions, and route optimization for driving, walking, cycling, or public transport. Users can explore nearby restaurants, businesses, and landmarks, complete with reviews and photos. With offline maps, users can navigate even without an internet connection. Google Maps also supports Street View for immersive, 360-degree virtual tours. Businesses benefit from Google Maps listings to reach local customers, while travelers rely on it for trip planning. Its constant updates, accurate data, and integration with Google Search make Google Maps an indispensable tool for modern life and travel.",
        size: 130,
        reviews: 88000000,
        ratingAvg: 4.6,
        downloads: 10000000000,
        ratings: [
            { name: "1 star", count: 1100000 },
            { name: "2 star", count: 2000000 },
            { name: "3 star", count: 4000000 },
            { name: "4 star", count: 26000000 },
            { name: "5 star", count: 55000000 }
        ]
    },
    {
        id: 10,
        image: "https://i.ibb.co.com/ym7FCX4j/alexander-shatov-UVfv-Frp4x4-E-unsplash.jpg",
        title: "Netflix",
        companyName: "Netflix Inc.",
        description:
            "Netflix is the world’s most popular streaming platform, offering an ever-growing library of movies, TV shows, documentaries, and original productions. Subscribers can enjoy unlimited ad-free viewing across devices, from smartphones and smart TVs to laptops and tablets. Netflix personalizes recommendations using advanced algorithms, making content discovery effortless. It supports offline downloads, parental controls, and multi-profile setups. Known for producing critically acclaimed originals like Stranger Things and The Crown, Netflix has transformed how the world consumes entertainment. Its intuitive interface, global reach, and constant innovation make it the leading platform for on-demand content, giving users complete control over their viewing experience anytime, anywhere.",
        size: 180,
        reviews: 64000000,
        ratingAvg: 4.4,
        downloads: 1000000000,
        ratings: [
            { name: "1 star", count: 1200000 },
            { name: "2 star", count: 2200000 },
            { name: "3 star", count: 4800000 },
            { name: "4 star", count: 22000000 },
            { name: "5 star", count: 33000000 }
        ]
    },
    {
        id: 11,
        image: "https://i.ibb.co.com/wrYXzTtP/ilgmyzin-m-SIFEZ8-WW1-M-unsplash.jpg",
        title: "Duolingo",
        companyName: "Duolingo Inc.",
        description:
            "Duolingo is a gamified language-learning app designed to make education fun, engaging, and accessible to everyone. It offers lessons in over 40 languages, including Spanish, French, Japanese, and English. Using interactive exercises, quizzes, and challenges, Duolingo helps users improve their reading, writing, listening, and speaking skills. Its streak system and rewards keep learners motivated daily. With Duolingo Max and Duolingo for Schools, the platform caters to both casual learners and educators. The app’s friendly owl mascot, Duo, encourages consistency and progress. Backed by science and AI-driven personalization, Duolingo has become the world’s most popular way to learn languages efficiently and joyfully.",
        size: 55,
        reviews: 48000000,
        ratingAvg: 4.7,
        downloads: 500000000,
        ratings: [
            { name: "1 star", count: 600000 },
            { name: "2 star", count: 800000 },
            { name: "3 star", count: 3000000 },
            { name: "4 star", count: 10000000 },
            { name: "5 star", count: 34000000 }
        ]
    },
    {
        id: 12,
        image: "https://i.ibb.co.com/Ndb7MfJR/rubaitul-azad-HLQDfa-JUTVI-unsplash.jpg",
        title: "GitHub",
        companyName: "Microsoft Corporation",
        description:
            "GitHub is the world’s leading platform for software development and version control, enabling millions of developers to collaborate on code projects. Built around Git, it offers repositories for hosting code, tracking changes, and managing issues efficiently. Developers use GitHub for open-source projects, private repositories, and team collaboration. Its features include pull requests, code reviews, project boards, and continuous integration with GitHub Actions. GitHub also serves as a hub for learning and innovation through its community of contributors. With tools like Copilot and Codespaces, it simplifies coding and enhances productivity. Whether for individuals, startups, or enterprises, GitHub empowers developers to build the future of technology together.",
        size: 100,
        reviews: 22000000,
        ratingAvg: 4.8,
        downloads: 100000000,
        ratings: [
            { name: "1 star", count: 300000 },
            { name: "2 star", count: 500000 },
            { name: "3 star", count: 1000000 },
            { name: "4 star", count: 6000000 },
            { name: "5 star", count: 14000000 }
        ]
    }
];

export default apps;
