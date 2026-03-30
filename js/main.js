
/*const photoCard = [ {
id: num 1-25,
url: photos/{{i}}.jpg, i = 1-25,
description: описание фотографии,
likes: 15-200,
comments:
idComments: comments all num,
avatar:img/avatar-{{случайное число от 1 до 6}}.svg,
message: 1-2 random strings,
userName: random

} ]*/


const photoMass = () => {
  const photoMas = Array.from({ length: 25 }, () => {
    const randomId = Math.floor(Math.random() * 25) + 1;
    return { id: randomId, url: `photos/${randomId}.jpg` };
  });
  return photoMas;
};

photoMass();
