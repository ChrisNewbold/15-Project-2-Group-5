const { Article } = require("../models");

const articleData = [
  {
    url: "http://blog.com",
    title: "Nam nisi turpis, elementum vel dolor at",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate nisi porta metus aliquam tempor. Cras efficitur, enim quis sodales faucibus, neque tellus dictum dolor, eu consequat tellus neque sit amet justo. Fusce scelerisque, purus ornare cursus cursus, urna sapien imperdiet felis, vel sodales nulla purus in justo. Nam nisi turpis, elementum vel dolor at, molestie consequat turpis. Aliquam ultricies vestibulum dolor nec aliquet. Pellentesque sodales elit et feugiat egestas. Aliquam massa odio, laoreet tincidunt fermentum non, placerat vitae erat. Etiam pharetra dapibus pharetra. In euismod elit vel lectus molestie finibus. Nam a auctor ante. ",
    credits: 50,
    blogger_id: 1,
    image_url:
      "https://image.shutterstock.com/image-photo/hands-robot-human-touching-on-260nw-1653839683.jpg",
  },
  {
    url: "http://localhost:3001/splashTest1",
    title: "Etiam vulputate elit nec lorem viverra efficitur",
    preview:
      "Nunc imperdiet quam at augue pulvinar scelerisque. Sed venenatis lobortis est, non egestas ligula elementum at. Proin et diam venenatis, commodo ante sed, gravida quam. Ut sit amet risus magna. Aliquam a tristique mi, eget tempor mi. Sed nec mollis urna, vel fringilla nulla. Mauris suscipit purus sapien, et bibendum lacus semper vel. Integer vel diam orci. Integer pellentesque quam quis mattis fringilla. In quis purus id nisl ultrices rutrum id sit amet eros. Aenean mattis ultrices magna, ut blandit erat hendrerit vel. ",
    credits: 30,
    blogger_id: 1,
    image_url:
      "https://media.istockphoto.com/photos/healthcare-and-technology-doctor-using-digital-tablet-with-icon-on-picture-id1182619271?k=20&m=1182619271&s=612x612&w=0&h=GRRH6eEKPbuouj3YCJ6juoQAWU5Ytd8shL4TONRYFEU=",
  },
  {
    url: "http://localhost:3001/splashTest2",
    title: "Aenean tempus nulla vel posuere commodo",
    preview:
      "Vivamus volutpat non ante et imperdiet. Suspendisse potenti. Cras ipsum enim, aliquam et dolor a, finibus dictum odio. Donec mauris erat, ultricies et elit vel, pharetra mattis risus. Etiam vulputate elit nec lorem viverra efficitur. Cras in fringilla eros. Maecenas malesuada arcu odio. Vestibulum id sapien fringilla, vehicula mauris ac, viverra tortor. Etiam nec mattis urna, at tincidunt ipsum. ",
    credits: 40,
    blogger_id: 1,
    image_url:
      "https://media.istockphoto.com/photos/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-picture-id1296353202?k=20&m=1296353202&s=612x612&w=0&h=-J5RllK3gwzLCkYbLUUPHmGuMxpneC7cfkAKFpfNfuk=",
  },
  {
    url: "http://localhost:3001/splashTest3",
    title: "Vestibulum ante ipsum primis in faucibus orci luctus",
    preview:
      "Duis congue maximus accumsan. Aenean vulputate vel augue vitae maximus. Etiam at dui purus. Etiam lacus purus, consequat vitae justo eu, consectetur auctor dui. Nullam id faucibus neque. Ut venenatis urna consectetur fringilla luctus. Etiam at ex quis nibh ultrices sodales. Ut pellentesque accumsan est, et volutpat dui bibendum ut. Aenean tempus nulla vel posuere commodo. Curabitur mattis, est nec dignissim porta, leo neque consequat nibh, et mollis urna ex ac arcu. Cras tristique nisl purus, at sodales ex efficitur congue. Fusce fringilla mi eget nibh aliquam, et tempor ipsum sagittis. Nulla consectetur ac augue non porta. Nulla libero ante, efficitur a vehicula quis, blandit non tellus. Vestibulum consequat sapien at malesuada pharetra. ",
    credits: 25,
    blogger_id: 1,
    image_url:
      "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
  },
  {
    url: "http://localhost:3001/splashTest4",
    title: "Donec quis eros tempus, posuere mi aliquam, tempus nisi.",
    preview:
      "Donec quis eros tempus, posuere mi aliquam, tempus nisi. In placerat nunc eget elementum vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc volutpat bibendum volutpat. Nam aliquet ligula et nibh sodales vestibulum. Maecenas pretium congue felis vitae ultrices. In sit amet dolor sit amet mi volutpat porttitor. Morbi volutpat nulla orci, quis eleifend elit consectetur nec. Aliquam ac neque tortor. Etiam non sagittis nulla, sit amet pellentesque nibh. Curabitur ut sagittis dui. Sed consequat enim molestie tortor placerat, ac accumsan mi vulputate. ",
    credits: 28,
    blogger_id: 1,
    image_url:
      "https://media.istockphoto.com/photos/car-factory-professional-male-automotive-engineer-wearing-hard-hat-picture-id1352825038?b=1&k=20&m=1352825038&s=170667a&w=0&h=w4kixdQxAxZxgjlRDUkrQGx7H6vDefEPenv-nXoK1rg=",
  },
  {
    url: "http://localhost:3001/splashTest5",
    title: "ac sodales lectus consectetur vel",
    preview:
      "Cras interdum varius risus nec varius. Suspendisse ligula leo, finibus at faucibus at, pellentesque sit amet odio. Curabitur in pulvinar arcu, id auctor nibh. Maecenas facilisis eros id mi hendrerit lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat tincidunt lacus, at varius mauris. Curabitur sollicitudin orci et imperdiet tristique. Praesent ornare finibus ex, in congue neque lacinia interdum. Morbi luctus tortor eu tincidunt hendrerit. Donec a nunc tristique, placerat nisl id, sollicitudin eros. Proin maximus finibus gravida. Etiam maximus, nisi sed tempor venenatis, felis ante congue nibh, ac viverra elit lacus a lorem. Aliquam commodo, mauris in vehicula convallis, nisl mauris sollicitudin quam, eget blandit ipsum lorem vitae turpis. Integer sit amet viverra nulla. Donec et orci nec ipsum bibendum rutrum. ",
    credits: 100,
    blogger_id: 1,
    image_url:
      "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxsaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;
