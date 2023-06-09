
const posts = [
    {
        id: 1,
        title: 'Sample Post',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1668241683494-84d4aea920e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        author: 'John Doe',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag1', 'tag2', 'tag3'],
        isFavourite: false,
    },
    {
        id: 2,
        title: 'Another Sample Post',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1668241683681-45500829fa42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        author: 'Mohamed Mahmoud',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag4', 'tag5', 'tag6'],
        isFavourite: false,
    },
    {
        id: 3,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        author: 'Alfarouk Amr',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    },
    {
        id: 4,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        author: 'Ahmed Ramadan',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    },
    {
        id: 5,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
        author: 'Kareem Elsharaawy',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 6,
        title: 'This is a third post',
        imageUrl: 'https://media.gettyimages.com/id/1263410670/photo/spa-cosmetics-in-brown-glass-bottles-on-broun-background-copy-space-for-text-beauty-blogger.jpg?s=612x612&w=gi&k=20&c=vUu97mbmrK3rRWGj03CVGVcsRHinrxyTmWJHNo9HWnY=',
        author: 'Ahmed Mohamed',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 7,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        author: 'Khaled Elsayed',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 8,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        author: 'Tamem mohamed',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 9,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        author: 'Mostafa lotfy',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    },
    {
        id: 10,
        title: 'Another Sample Post',
        imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80',
        author: 'Yousef Moman',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag4', 'tag5', 'tag6'],
        isFavourite: false,
    },
    {
        id: 11,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        author: 'Farah mohamed',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    },
    {
        id: 12,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80',
        author: 'Ahmed Ramadan',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    },
    {
        id: 13,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        author: 'Ahmed Mohamed',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 14,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        author: 'Mariam osama',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 15,
        title: 'This is a third post',
        imageUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2139&q=80',
        author: 'Mostafa khaled',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 16,
        title: 'This is a  post',
        imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        author: 'Merna Hamed',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }, {
        id: 17,
        title: 'This is a  post',
        imageUrl: 'https://images.unsplash.com/photo-1609942571926-f3fe26feab26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80',
        author: 'Aliaa Mohamed',
        authorPictureUrl: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        tags: ['tag7', 'tag8', 'tag9'],
        isFavourite: false,
    }
]

export default posts;