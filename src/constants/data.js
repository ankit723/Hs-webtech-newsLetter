const trendingNews = [
    {
        title: "Breaking: Scientists Discover New Species of Marine Life"
    },
    {
        title: "Tech Giant Unveils Revolutionary Smartphone with AI Assistants"
    },
    {
        title: "World Leaders Gather for Global Climate Summit"
    },
    {
        title: "Sports Team Makes Historic Comeback, Wins Championship Title"
    },
    {
        title: "New Study Reveals Surprising Health Benefits of Meditation"
    }
]

const socialLinks = [
    {
        title: "Facebook",
        logo: "/fb.webp",
        link: "https://www.facebook.com",
        alt: "Like"
    },
    {
        title: "Instagram",
        logo: "/ig.png",
        link: "https://www.instagram.com",
        alt: "Follow"
    },
    {
        title: "Youtube",
        logo: "/yt.avif",
        link: "https://www.youtube.com",
        alt: "Subscribe"
    }
]

const priority = [
    {
        id: 1,
        category: "Business",
        img: "/5.jpeg",
        title: "Successful Entrepreneurship: Strategies for Startup Growth",
        author: "John Smith",
        date: "2023-06-14"
    },
    {
        id: 2,
        category: "Business",
        img: "/6.jpeg",
        title: "Successful Entrepreneurship: Strategies for Startup Growth",
        author: "John Smith",
        date: "2023-06-14"
    },
    {
        id: 3,
        category: "Business",
        img: "/3.jpeg",
        title: "Successful Entrepreneurship: Strategies for Startup Growth",
        author: "John Smith",
        date: "2023-06-14"
    },
    {
        id: 4,
        category: "Health & Fitness",
        img: "/4.jpeg",
        title: "Boosting Immunity: Essential Vitamins and Nutrients for a Healthy Lifestyle",
        author: "Emily Johnson",
        date: "2023-06-14"
    },
    {
        id: 5,
        category: "Recipes",
        img: "/5.jpeg",
        title: "Delicious Summer Salads: Refreshing Recipes to Beat the Heat",
        author: "David Lee",
        date: "2023-06-13"
    },
    {
        id: 6,
        category: "Recipes",
        img: "/6.jpeg",
        title: "Delicious Summer Salads: Refreshing Recipes to Beat the Heat",
        author: "David Lee",
        date: "2023-06-13"
    },
    {
        id: 6,
        category: "Travel",
        img: "/7.jpeg",
        title: "Exploring Exotic Destinations: Unforgettable Adventures Around the World",
        author: "Sarah Thompson",
        date: "2023-06-12"
    },
    {
        id: 6,
        category: "Health & Fitness",
        img: "/8.jpeg",
        title: "Yoga for Stress Relief: Relaxing Poses for a Peaceful Mind",
        author: "Michael Johnson",
        date: "2023-06-11"
    },
    {
        id: 6,
        category: "Business",
        img: "/3.jpeg",
        title: "Digital Transformation: Adapting Businesses to the Digital Age",
        author: "Jennifer Adams",
        date: "2023-06-11"
    },
    {
        id: 6,
        category: "Recipes",
        img: "/7.jpeg",
        title: "Flavorful BBQ Recipes: Grilling Techniques for Perfectly Cooked Meats",
        author: "Robert Wilson",
        date: "2023-06-10"
    },
    {
        id: 6,
        category: "Travel",
        img: "/6.jpeg",
        title: "Hidden Gems: Unexplored Destinations Off the Beaten Path",
        author: "Sophia Turner",
        date: "2023-06-09"
    },
    {
        id: 6,
        category: "Travel",
        img: "/5.jpeg",
        title: "Hidden Gems: Unexplored Destinations Off the Beaten Path",
        author: "Sophia Turner",
        date: "2023-06-09"
    },
    {
        id: 6,
        category: "Travel",
        img: "/4.jpeg",
        title: "Hidden Gems: Unexplored Destinations Off the Beaten Path",
        author: "Sophia Turner",
        date: "2023-06-09"
    },
    {
        id: 6,
        category: "Recipes",
        img: "/3.jpeg",
        title: "Decadent Chocolate Desserts: Indulgent Treats for Chocolate Lovers",
        author: "Emma Carter",
        date: "2023-06-08"
    },
    {
        id: 6,
        category: "Health & Fitness",
        img: "/2.jpg",
        title: "Morning Workout Routine: Energize Your Day with Exercise",
        author: "Daniel Martinez",
        date: "2023-06-07"
    },
    {
        id: 6,
        category: "Health & Fitness",
        img: "/1.jpg",
        title: "Morning Workout Routine: Energize Your Day with Exercise",
        author: "Daniel Martinez",
        date: "2023-06-07"
    }

]

const news = [
    {
        id: 1,
        category: "Fashion",
        img: "/5.jpeg",
        title: "Successful Entrepreneurship: Strategies for Startup Growth",
        description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining...",
        author: "John Smith",
        date: "2023-06-14"
    },
    {
        id: 2,
        category: "Travel",
        img: "/6.jpeg",
        title: "Successful Entrepreneurship: Strategies for Startup Growth",
        description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining...",
        author: "John Smith",
        date: "2023-06-14"
    },
    {
        id: 3,
        category: "Business",
        img: "/3.jpeg",
        title: "Successful Entrepreneurship: Strategies for Startup Growth",
        description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining...",
        author: "John Smith",
        date: "2023-06-14"
    },
    {
        id: 4,
        category: "Health & Fitness",
        img: "/4.jpeg",
        title: "Boosting Immunity: Essential Vitamins and Nutrients for a Healthy Lifestyle",
        description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining...",
        author: "Emily Johnson",
        date: "2023-06-14"
    }
]

const someNews = [
    {
        category: "Sports",
        author: "John Smith",
        title: "Record-Breaking Run: Athlete Shatters Marathon World Record",
        img: "/1.jpg",
        date: "2023-06-14"
    },
    {
        category: "Entertainment",
        author: "Emily Johnson",
        title: "Blockbuster Film 'The Legacy' Dominates Box Office",
        img: "/2.jpg",
        date: "2023-06-14"
    },
    {
        category: "Technology",
        author: "David Lee",
        title: "New AI-Powered Robot Assistant Takes Over Manufacturing Industry",
        img: "/3.jpeg",
        date: "2023-06-13"
    },
    {
        category: "Business",
        author: "Sarah Thompson",
        title: "Company XYZ Reports Record Profits in Q2 Financial Results",
        img: "/1.jpg",
        date: "2023-06-12"
    },
    {
        category: "Science",
        author: "Michael Johnson",
        title: "Breakthrough Discovery: Scientists Uncover New Planet in Habitable Zone",
        img: "/1.jpg",
        date: "2023-06-11"
    },
    {
        category: "Health",
        author: "Jennifer Adams",
        title: "Groundbreaking Study Reveals Promising Treatment for Alzheimer's Disease",
        img: "/1.jpg",
        date: "2023-06-11"
    },
    {
        category: "Politics",
        author: "Robert Wilson",
        title: "Government Implements New Policy to Address Climate Change",
        img: "/2.jpg",
        date: "2023-06-10"
    },
    {
        category: "Travel",
        author: "Sophia Turner",
        title: "Top Travel Destinations for Summer 2023: A Guide for Wanderlust",
        img: "/1.jpg",
        date: "2023-06-09"
    },
    {
        category: "Fashion",
        author: "Emma Carter",
        title: "Fashion Week Extravaganza: Designers Showcase Latest Trends",
        img: "/2.jpg",
        date: "2023-06-08"
    },
    {
        category: "Food",
        author: "Daniel Martinez",
        title: "Culinary Delights: Discovering the Flavors of International Street Food",
        img: "/2.jpg",
        date: "2023-06-07"
    }
]

const lifeStyleCategories = {
    category1: "Business",
    category2: "Health & Fitness",
    category3: "Recipes",
    category4: "Travel"
}

const comments = [
    {
      name: "John Smith",
      rating: 4.5,
      review: "I love this product! It exceeded my expectations and has been incredibly useful in my daily life.",
      date: "2023-06-14"
    },
    {
      name: "Emily Johnson",
      rating: 3.2,
      review: "The product is decent, but I feel it could be improved in terms of quality. It's an okay purchase for the price.",
      date: "2023-06-12"
    },
    {
      name: "David Lee",
      rating: 5,
      review: "Absolutely fantastic! This product is a game-changer. I can't imagine my life without it now.",
      date: "2023-06-10"
    },
    {
      name: "Sarah Thompson",
      rating: 2.8,
      review: "I had high hopes for this product, but unfortunately, it didn't live up to my expectations. Disappointed with the performance.",
      date: "2023-06-08"
    },
    {
      name: "Michael Johnson",
      rating: 4.7,
      review: "Impressed with the quality and functionality of the product. It's definitely worth the investment.",
      date: "2023-06-06"
    },
    // Add more reviews here
  ];
  

export { priority, trendingNews, socialLinks, someNews, comments, news }