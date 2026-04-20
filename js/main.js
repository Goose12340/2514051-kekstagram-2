const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;


const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const NAMES = [
  'Анна', 'Максим', 'Елена', 'Дмитрий', 'Ольга',
  'Иван', 'Мария', 'Сергей', 'Татьяна', 'Алексей'
];


const DESCRIPTIONS = [
  'Красивый закат на море', 'Прогулка по осеннему парку', 'Мой кот спит в коробке',
  'Вкусный завтрак сегодня', 'Новая причёска', 'Путешествие в горы',
  'Вечеринка с друзьями', 'Уютный вечер дома', 'Спортивное достижение',
  'Мой любимый фильм', 'Цветущий сад', 'Зимняя сказка', 'Архитектурная красота',
  'Животные в зоопарке', 'Фестиваль уличной еды', 'Музей современного искусства',
  'Велосипедная прогулка', 'Пляжный отдых', 'Ночной город', 'Рабочие будни',
  'Семейный ужин', 'Хобби и рукоделие', 'Утренняя пробежка', 'Книжный магазин',
  'Концерт любимой группы'
];


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const getRandomMessage = () => {
  const count = getRandomInt(1, 2);
  if (count === 1) {
    return MESSAGES[getRandomInt(0, MESSAGES.length - 1)];
  }
  const idx1 = getRandomInt(0, MESSAGES.length - 1);
  let idx2 = getRandomInt(0, MESSAGES.length - 1);
  while (idx2 === idx1 && MESSAGES.length > 1) {
    idx2 = getRandomInt(0, MESSAGES.length - 1);
  }
  return `${MESSAGES[idx1]} ${MESSAGES[idx2]}`;
};


const generateComments = (commentIdCounter, count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      id: commentIdCounter.value++,
      avatar: `img/avatar-${getRandomInt(AVATAR_MIN, AVATAR_MAX)}.svg`,
      message: getRandomMessage(),
      name: NAMES[getRandomInt(0, NAMES.length - 1)]
    });
  }
  return comments;
};


const createGallery = () => {
  const commentIdCounter = { value: 1 };

  return Array.from({ length: PHOTOS_COUNT }, (_, index) => {
    const id = index + 1;
    const commentsCount = getRandomInt(COMMENTS_MIN, COMMENTS_MAX);

    return {
      id,
      url: `photos/${id}_.jpg`,
      description: DESCRIPTIONS[index],
      likes: getRandomInt(LIKES_MIN, LIKES_MAX),
      comments: generateComments(commentIdCounter, commentsCount)
    };
  });
};

createGallery();

