import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Life is not a matter of holding good cards, but of playing a poor hand well",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Swetha",
    lastName: "Ogeti",
    avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
    username: "sweety555",
    createdAt: new Date("June 21, 2022"),
    updatedAt: new Date("June 21, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Jyothika",
        lastName: "Ogeti",
        username: "@Jyo14Cutie",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",

        text: "This is awsome!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        text: "True words!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  // 2
  {
    _id: uuid(),
    content:
      "Success is never owned, it is rented and the rent is due everyday!",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jyothika",
    lastName: "Ogeti",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
    username: "@Jyo14Cutie",
    createdAt: new Date("June 13, 2022"),
    updatedAt: new Date("June 13, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        text: "This is awsome",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Siya",
        lastName: "Ray",
        username: "@AlphaCoder",
        avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        text: "Hey Hi!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //3

  {
    _id: uuid(),
    content: "Don't use yesterday's state of mind, to make today's decision.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Swetha",
          lastName: "Ogeti",
          username: "Sweety555",
          avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
        },
        {
          firstName: "Ram",
          lastName: "Varma",
          username: "Skathiman🐴",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        },

        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vinay",
    lastName: "Ogeti",
    avatarURL:
      "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
    username: "@vinnu_TheBigBoss",
    createdAt: new Date("August 1, 2022"),
    updatedAt: new Date("August 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Swetha",
        lastName: "Ogeti",
        username: "Sweety555",
        avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",

        text: "wowww",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Jyothika",
        lastName: "Ogeti",
        username: "@Jyo14Cutie",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        text: "Gyan!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //4
  {
    _id: uuid(),
    content: "Start Where you are, use what you have , do what you can.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Swetha",
          lastName: "Ogeti",
          username: "Sweety555",
          avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
        },

        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Siya",
    lastName: "Ray",
    avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
    username: "@AlphaCoder",
    createdAt: new Date("June 11, 2022"),
    updatedAt: new Date("June 11, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",

        text: "Hola",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Swetha",
        lastName: "Ogeti",
        username: "Sweety555",
        avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
        text: "Yeah! cool",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //5

  {
    _id: uuid(),
    content: "Beauty is not flawless it shines even through you flaws....💖",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
      ],
      dislikedBy: [],
    },

    firstName: "Swetha",
    lastName: "Ogeti",
    avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
    username: "Sweety555",
    createdAt: new Date("June 10, 2022"),
    updatedAt: new Date("June 10, 2022"),
    comments: [
      {
        __id: uuid(),
        firstName: "Siya",
        lastName: "Ray",
        username: "@AlphaCoder",
        avatarURL: "https://images2.alphacoders.com/971/971653.jpg",

        text: "Cool",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        text: "Awsome!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //6
  {
    _id: uuid(),
    content: "You get in life what youhave the courage to ask for!",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
        {
          firstName: "Ram",
          lastName: "Varma",
          username: "Skathiman🐴",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vinay",
    lastName: "Ogeti",
    avatarURL:
      "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
    username: "@vinnu_TheBigBoss",
    createdAt: new Date("July 1, 2022"),
    updatedAt: new Date("July 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Siya",
        lastName: "Ray",
        username: "@AlphaCoder",
        avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        text: "Noice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        text: "Wowww!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  //7

  {
    _id: uuid(),
    content:
      "When you know what you want and want it bad enough you'll find a way to get it!",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Swetha",
          lastName: "Ogeti",
          username: "Sweety555",
          avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
        },

        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Ram",
    lastName: "Varma",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
    username: "Skathiman🐴",
    createdAt: new Date("June 19, 2022"),
    updatedAt: new Date("June 19, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Siya",
        lastName: "Ray",
        username: "@AlphaCoder",
        avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        text: "True words",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vikram",
        lastName: "Sharma",
        username: "@TheWolf",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
        text: "This is awsome!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //8
  {
    _id: uuid(),
    content: "Everyday you can imagine is real!",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
        {
          firstName: "Ram",
          lastName: "Varma",
          username: "Skathiman🐴",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jyothika",
    lastName: "Ogeti",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
    username: "@Jyo14Cutie",
    createdAt: new Date("June 16, 2022"),
    updatedAt: new Date("June 16, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",

        text: "Truee",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Siya",
        lastName: "Ray",
        username: "@AlphaCoder",
        avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        text: "Cool!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //9
  {
    _id: uuid(),
    content: "What good are wings without the courage to fly!",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
        {
          _id: uuid(),
          firstName: "Ram",
          lastName: "Varma",
          username: "Skathiman🐴",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vikram",
    lastName: "Sharma",
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
    username: "@TheWolf",
    createdAt: new Date("June 22, 2022"),
    updatedAt: new Date("June 22, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",

        text: "Nice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        text: "Noice!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //10
  {
    _id: uuid(),
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Swetha",
          lastName: "Ogeti",
          username: "Sweety555",
          avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
        },

        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Siya",
    lastName: "Ray",
    avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
    username: "@AlphaCoder",
    createdAt: new Date("June 16, 2022"),
    updatedAt: new Date("June 16, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Jyothika",
        lastName: "Ogeti",
        username: "@Jyo14Cutie",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",

        text: "Hey hi!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        text: "This is awsome!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //11
  {
    _id: uuid(),
    content: "Some beautifuk paths can't be discovered without getting lost💫",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
        {
          firstName: "Ram",
          lastName: "Varma",
          username: "Skathiman🐴",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jyothika",
    lastName: "Ogeti",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
    username: "@Jyo14Cutie",
    createdAt: new Date("June 13, 2022"),
    updatedAt: new Date("June 13, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Swetha",
        lastName: "Ogeti",
        username: "Sweety555",
        avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",

        text: "Gyan",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vikram",
        lastName: "Sharma",
        username: "@TheWolf",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
        text: "Wowwwww!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //12
  {
    _id: uuid(),
    content:
      "You can complain because roses have thrones or you rejoin because thrones have roses",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Swetha",
          lastName: "Ogeti",
          username: "Sweety555",
          avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
        },

        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Siya",
    lastName: "Ray",
    avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
    username: "@AlphaCoder",
    createdAt: new Date("July 1, 2022"),
    updatedAt: new Date("July 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        text: "True words",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vikram",
        lastName: "Sharma",
        username: "@TheWolf",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
        text: "Hola!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //13
  {
    _id: uuid(),
    content:
      "Courage is nothing more than taking one more step than you think you can",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Ram",
    lastName: "Varma",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
    username: "Skathiman🐴",
    createdAt: new Date("August 1, 2022"),
    updatedAt: new Date("August 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        text: "Cool",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Siya",
        lastName: "Ray",
        username: "@AlphaCoder",
        avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        text: "Hey Hi!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //14

  {
    _id: uuid(),
    content:
      "Be Who you are and say what you feel because those who mind don't matter and those who matter don't mind",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Swetha",
    lastName: "Ogeti",
    avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
    username: "Sweety555",
    createdAt: new Date("June 11, 2022"),
    updatedAt: new Date("June 11, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Jyothika",
        lastName: "Ogeti",
        username: "@Jyo14Cutie",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",

        text: "Amazing1",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        text: "True words!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //15

  {
    _id: uuid(),
    content:
      "Almost everything will work again if you unplug it for a few minutes including you.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Swetha",
          lastName: "Ogeti",
          username: "Sweety555",
          avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
        },

        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Ram",
    lastName: "Varma",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
    username: "Skathiman🐴",
    createdAt: new Date("July 1, 2022"),
    updatedAt: new Date("July 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",

        text: "Yeah! cool",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vikram",
        lastName: "Sharma",
        username: "@TheWolf",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
        text: "Wowwww!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //16
  {
    _id: uuid(),
    content:
      "The pain that you've been feeling can't compare to the joy that's coming",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Jyothika",
          lastName: "Ogeti",
          username: "@Jyo14Cutie",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
        },
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vikram",
    lastName: "Sharma",
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
    username: "@TheWolf",
    createdAt: new Date("August 1, 2022"),
    updatedAt: new Date("August 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",

        text: "Yeah! cool",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        text: "Hola👋",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //17
  {
    _id: uuid(),
    content:
      "Challenges are what make life intresting. over coming them is what makes life meaningful",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Vinay",
          lastName: "Ogeti",
          username: "@vinnu_TheBigBoss",
          avatarURL:
            "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        },
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
        {
          _id: uuid(),
          firstName: "Ram",
          lastName: "Varma",
          username: "Skathiman🐴",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vikram",
    lastName: "Sharma",
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
    username: "@TheWolf",
    createdAt: new Date("August 1, 2022"),
    updatedAt: new Date("August 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",

        text: "True words",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vinay",
        lastName: "Ogeti",
        username: "@vinnu_TheBigBoss",
        avatarURL:
          "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
        text: "This is awsome!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  //18

  {
    _id: uuid(),
    content:
      "No tree, it is said , can grow to heaven unless it's roots reach down  to hell",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Siya",
          lastName: "Ray",
          username: "@AlphaCoder",
          avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
        },
        {
          _id: uuid(),
          firstName: "Ram",
          lastName: "Varma",
          username: "Skathiman🐴",
          avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
        },

        {
          _id: uuid(),
          firstName: "Vikram",
          lastName: "Sharma",
          username: "@TheWolf",
          avatarURL:
            "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vinay",
    lastName: "Ogeti",
    avatarURL:
      "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
    username: "@vinnu_TheBigBoss",
    createdAt: new Date("July 1, 2022"),
    updatedAt: new Date("July 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",

        text: "Gyan!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Vikram",
        lastName: "Sharma",
        username: "@TheWolf",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
        text: "Yeah! cool!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
