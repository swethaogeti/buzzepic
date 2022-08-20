import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Swetha",
    lastName: "Ogeti",
    username: "Sweety555",
    avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
    bio: "Coding 👨‍💻| Be you! The world will adjust!🦋🌊",
    website: "https://github.com/swethaogeti",
    following: [
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
      {
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
      },
    ],
    followers: [
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
      {
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
    password: "Sweety555",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 1

  // *********************************************************************
  //user 2

  {
    _id: uuid(),
    firstName: "Jyothika",
    lastName: "Ogeti",
    username: "@Jyo14Cutie",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
    bio: "Data Scientist🚀| Fall, if u wish to fly!🦅 ",
    website: "https://github.com/ogetijyothika",
    following: [
      {
        _id: uuid(),
        firstName: "Swetha",
        lastName: "Ogeti",
        username: "Sweety555",
        avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
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
      {
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
    followers: [
      {
        _id: uuid(),
        firstName: "Swetha",
        lastName: "Ogeti",
        username: "Sweety555",
        avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
      },
    ],
    password: "Sweety555",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // *********************************************************************
  //user3
  {
    _id: uuid(),
    firstName: "Vinay",
    lastName: "Ogeti",
    username: "@vinnu_TheBigBoss",
    avatarURL:
      "https://i0.wp.com/wikifolder.com/wp-content/uploads/2019/04/DQ-Photo.jpg?resize=498%2C582&ssl=1",
    bio: "Game Developer🎮| Dogs🐶| I do a thing called 'what I want'🚀.",
    website: "https://github.com",
    following: [
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
        firstName: "Vikram",
        lastName: "Sharma",
        username: "@TheWolf",
        avatarURL:
          "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
      },
    ],
    followers: [
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
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
      },
      {
        _id: uuid(),
        firstName: "Siya",
        lastName: "Ray",
        username: "@AlphaCoder",
        avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
      },
    ],
    password: "Sweety555",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // *********************************************************************
  //user4

  {
    _id: uuid(),
    firstName: "Vikram",
    lastName: "Sharma",
    username: "@TheWolf",
    avatarURL:
      "https://c4.wallpaperflare.com/wallpaper/54/977/257/batman-the-telltale-series-the-enemy-within-picture-image-wallpaper-thumb.jpg",
    bio: "Cilvil Engineer 🌈| ART | An artist's concern is to capture beauty wherever he finds it 🐱‍🏍",
    website: "https://github.com/swethaogeti",
    following: [
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
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
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
    followers: [
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
        firstName: "Jyothika",
        lastName: "Ogeti",
        username: "@Jyo14Cutie",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlnhU3PYRHPDEx9FJBpbILLTDjlDSw4RE9Q&usqp=CAU",
      },
    ],
    password: "Sweety555",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // *********************************************************************
  //user5

  {
    _id: uuid(),
    firstName: "Ram",
    lastName: "Varma",
    username: "Skathiman🐴",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
    bio: "Graphic Designer |Horse Riding| The biggest adventure you can take is to live the life of your dreams",
    website: "https://github.com/",
    following: [
      {
        _id: uuid(),
        firstName: "Swetha",
        lastName: "Ogeti",
        username: "Sweety555",
        avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
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
    followers: [
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
    password: "Sweety555",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // *********************************************************************
  //user6

  {
    _id: uuid(),
    firstName: "Siya",
    lastName: "Ray",
    username: "@AlphaCoder",
    avatarURL: "https://images2.alphacoders.com/971/971653.jpg",
    bio: "Web developer| All the beautiful things are around you✨",
    website: "https://github.com",
    following: [
      {
        _id: uuid(),
        firstName: "Swetha",
        lastName: "Ogeti",
        username: "Sweety555",
        avatarURL: "https://avatars.githubusercontent.com/u/65771591?v=4",
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
    followers: [
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
        firstName: "Ram",
        lastName: "Varma",
        username: "Skathiman🐴",
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFPIQg2MDg1JCUhKBKZh3TZWtKCrKKJScyQ&usqp=CAU",
      },
    ],
    password: "Sweety555",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // *********************************************************************
];
