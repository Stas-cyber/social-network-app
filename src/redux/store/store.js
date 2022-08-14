import dialogsReducer from "./dialogsReduser";
import profileReducer from "./profileReduser";

const avatar = [
    'https://rus.team/images/article/4883/2019-07-09-330_15688-2_859650.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJIW9gwPxKACtL0y3fDqpdfFYeFOjubquyA&usqp=CAU',
    'https://st2.depositphotos.com/1011081/8226/i/600/depositphotos_82267700-stock-photo-astronaut-in-outer-space.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Yuri_Gagarin_with_awards.jpg/274px-Yuri_Gagarin_with_awards.jpg',
    'https://testpilot.ru/review/isplii/parachutist/img/danilovich.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAJPNMPPdDJU3M_7jQioFOcK59-7yuKaFnEYla6FfTS6rAcBkOMJ39S8mVplxMleApc8&usqp=CAU',
    'https://www.biografija.ru/pictures/0af55331.jpg',
    'https://cdnn11.img.sputnik.by/img/102740/32/1027403224_469:0:2516:2047_1920x0_80_0_0_3fe82994d9234f9dc9f29d7ae8c39d3d.jpg',
    'https://knowhistory.ru/sites/default/files/styles/event/public/images/1284237450_tereshkova.jpg?itok=7faDVbIP',
    'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg'
];
const store = {
    state: {
        
    MessangePage: {
            users: [
            { id: 1, img: avatar[0], name: "Петр Климук" },
            { id: 2, img: avatar[1], name: "Веселый космонавт" },
            { id: 3, img: avatar[2], name: "Веселый космонавт" },
            { id: 4, img: avatar[3], name: "Юрий Гагарин" },
            { id: 5, img: avatar[4], name: "Валентин Данилович" },
            { id: 6, img: avatar[5], name: "Веселый космонавт" },
            { id: 7, img: avatar[6], name: "Владимир Ковалёнок" },
            { id: 8, img: avatar[7], name: "Олег Новицкий" },
            { id: 9, img: avatar[8], name: "Валентина Терешкова" },
        ],
        usersMessanges: [
            { img: avatar[3], mess: "Привет", },
            { img: avatar[9], mess: "Привет", },
            { img: avatar[3], mess: "Как дела?", },
            { img: avatar[9], mess: "Плохо", },
            { img: avatar[3], mess: "Что случилось?",  },
        ],
        newMess: ''
    },
    PostPage: {
        postData: [
            {
                avatar: avatar[9],
                message: 'Hello World',
                img: '',
                date: '13 июля',
                time: '12:45'
                },
                {
                avatar: avatar[9],
                message: 'Это я))',
                img: 'https://st2.depositphotos.com/1000647/8123/i/600/depositphotos_81232590-stock-photo-astronaut-in-outer-space.jpg',
                date: '16 мая',
                time: '17:01'
                }
        ],
        newPost: ''
    },
    NewsPage: {
        textData: [
            {
                avatar: avatar[3],
                message: '12 апреля 1961 года Юрий Гагарин стал первым человеком в мировой истории, совершившим полёт в космическое пространство. Ракета-носитель «Восток» с кораблём «Восток-1», на борту которого находился Гагарин, была запущена с космодрома Байконур, расположенного в Кызылординской области Казахстана. После 108 минут полёта Гагарин успешно приземлился в Саратовской области, неподалёку от Энгельса. 12 апреля 1961 года, день полёта Юрия Гагарина в космос, был объявлен праздником — Днём космонавтики. Первый космический полёт вызвал большой интерес во всём мире, а сам Юрий Гагарин превратился в мировую знаменитость. По приглашениям зарубежных правительств и общественных организаций он посетил около 30 стран. Также у первого космонавта было много поездок и внутри Советского Союза. В последующие годы Гагарин вёл большую общественно-политическую работу, окончил Военно-воздушную инженерную академию имени профессора Н. Е. Жуковского, работал в Центре подготовки космонавтов и готовился к новому полёту в космос',
                date: '13 апреля',
                time: '12:45'
            },
            {
                avatar: avatar[9],
                message: 'Солнечная система — наиболее изученная часть космического пространства. По официальной версии, она включает восемь планет. В действительности их значительно больше. Одних только «карликов» здесь насчитывается не меньше пяти. Это Плутон, Церера, Хаумеа, Макемаке и Эрида. Из-за удаленности от Земли они мало изучены. Более того, по оценкам ученых, в Солнечной системе может находиться еще около 2 тыс. потенциальных карликовых планет. К тому же многие астрофизики признают наличие девятой крупной планеты. Она размером с Нептун и в десять раз тяжелее Земли. О существовании загадочной планеты X ученые стали догадываться еще в 2014 году, а в 2016-м получили первые доказательства с помощью компьютерного моделирования.',
                date: '16 июля',
                time: '17:01'
            },
            {
                avatar: avatar[0],
                message: 'Зачислен в отряд космонавтов в 1965 году. Прошёл полный курс общекосмической подготовки и подготовки к космическим полётам на кораблях типа «Союз» и орбитальных станциях типа «Салют». Совершил три космических полёта в качестве командира экипажа. Первый космический полёт совершил с 18 по 26 декабря 1973 года вместе с бортинженером В. В. Лебедевым на космическом корабле «Союз-13». Продолжительность полёта составила 7 дней 20 часов 55 минут 35 секунд. Свой второй полёт в космос совершил с 24 мая по 26 июля 1975 года совместно с бортинженером В. И. Севастьяновым на космическом корабле «Союз-18-2» к орбитальной станции «Салют-4». Продолжительность пребывания в космосе составила 62 дня 23 часа 20 минут 8 секунд. Свой третий полёт в космос совершил с 27 июня по 5 июля 1978 года в качестве командира международного экипажа совместно с космонавтом-исследователем, гражданином Польской Народной Республики М. Гермашевским на космическом корабле «Союз-30» к орбитальной станции «Салют-6» для совместной работы с её экипажем — В. В. Ковалёнком и А. С. Иванченковым. Продолжительность пребывания в космосе составила 7 дней 22 часа 2 минуты 59 секунд. Всего за 3 полёта в космос налетал 78 дней 18 часов 18 минут 42 секунды.',
                date: '27 декабря',
                time: '19:34'
            }
        ]
    },
    FriendsPage: {
        users: [
            {
                    img: avatar[0],
                    name: "Петр Климук"
                },
                {
                    img: avatar[1],
                    name: "Веселый космонавт"
                },
                {
                    img: avatar[2],
                    name: "Веселый космонавт"
                },
                {
                    img: avatar[3],
                    name: "Юрий Гагарин"
                },
                {
                    img: avatar[4],
                    name: "Валентин Данилович"
                },
                {
                    img: avatar[5],
                    name: "Веселый космонавт"
                },
                {
                    img: avatar[6],
                    name: "Владимир Ковалёнок"
                },
                {
                    img: avatar[7],
                    name: "Олег Новицкий"
                },
                {
                    img: avatar[8],
                    name: "Валентина Терешкова"
                }
            ]
    },
    SurscribersPage: {
            users: [
                {
                    name: 'Злой космонавт',
                    img: 'https://st2.depositphotos.com/1011081/8636/i/600/depositphotos_86360046-stock-photo-deadastronaut-in-outer-space-elements.jpg'
                },
                {
                    name: 'Инопланетянин',
                    img: 'https://n1s2.hsmedia.ru/f2/0b/18/f20b187aed08ec8b22db68381676694f/728x410_1_d620060a6772cdecbea07f94ce49058f@3840x2160_0xac120003_8182750811628506920.jpg'
                }
            ]
    }
    },

    callSurscribers() {
    },

    surscriber(observer) {
        this.callSurscribers = observer;
    },
    dispatch(action) {
        this.state.PostPage = profileReducer(this.state.PostPage, action);
        this.state.MessangePage = dialogsReducer(this.state.MessangePage, action)
        this.callSurscribers(this.state)
    }
    }
;
    

    
    // localStorage.setItem('store', JSON.stringify(store));

    // if (localStorage.getItem(store) != undefined) {
    //     store = JSON.parse(localStorage.getItem(store));
    //     store.surscriber()
    // }


export default store;