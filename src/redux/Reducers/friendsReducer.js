let initialState = {
    users: [
        {
                img: 'https://rus.team/images/article/4883/2019-07-09-330_15688-2_859650.webp',
                name: "Петр Климук"
            },
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJIW9gwPxKACtL0y3fDqpdfFYeFOjubquyA&usqp=CAU',
                name: "Веселый космонавт"
            },
            {
                img: 'https://st2.depositphotos.com/1011081/8226/i/600/depositphotos_82267700-stock-photo-astronaut-in-outer-space.jpg',
                name: "Веселый космонавт"
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Yuri_Gagarin_with_awards.jpg/274px-Yuri_Gagarin_with_awards.jpg',
                name: "Юрий Гагарин"
            },
            {
                img: 'https://testpilot.ru/review/isplii/parachutist/img/danilovich.jpg',
                name: "Валентин Данилович"
            },
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAJPNMPPdDJU3M_7jQioFOcK59-7yuKaFnEYla6FfTS6rAcBkOMJ39S8mVplxMleApc8&usqp=CAU',
                name: "Веселый космонавт"
            },
            {
                img: 'https://www.biografija.ru/pictures/0af55331.jpg',
                name: "Владимир Ковалёнок"
            },
            {
                img: 'https://cdnn11.img.sputnik.by/img/102740/32/1027403224_469:0:2516:2047_1920x0_80_0_0_3fe82994d9234f9dc9f29d7ae8c39d3d.jpg',
                name: "Олег Новицкий"
            },
            {
                img: 'https://knowhistory.ru/sites/default/files/styles/event/public/images/1284237450_tereshkova.jpg?itok=7faDVbIP',
                name: "Валентина Терешкова"
            }
        ]
};

const friendsReducer = (state = initialState, action) => {return state};
    
export default friendsReducer;