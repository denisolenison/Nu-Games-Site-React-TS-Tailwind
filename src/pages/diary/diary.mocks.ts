

export let language = localStorage.getItem("language") ?? "en";


export const diaryDays = [
    {
        id: 1,
        year: 2023,
        month: 10,
        day: 30,
        score: 8.8,
        importance: 2,
        inconsistency_min: 4.5,
        inconsistency_max: 3,
        atmosphere: 2,
    },
    {
        id: 2,
        year: 2023,
        month: 10,
        day: 31,
        score: 8.3,
        importance: 1,
        inconsistency_min: 2,
        inconsistency_max: 2,
        atmosphere: 1,
    },
    {
        id: 3,
        year: 2023,
        month: 11,
        day: 1,
        score: 8.5,
        importance: 1,
        inconsistency_min: 1.5,
        inconsistency_max: 1.5,
        atmosphere: 2,
    },
    {
        id: 4,
        year: 2023,
        month: 11,
        day: 2,
        score: 8.2,
        importance: 1,
        inconsistency_min: 1.5,
        inconsistency_max: 1.5,
        atmosphere: 0,
    },
    {
        id: 5,
        year: 2023,
        month: 11,
        day: 3,
        score: 9,
        importance: 2,
        inconsistency_min: 1,
        inconsistency_max: 1,
        atmosphere: 3,
    },
    {
        id: 6,
        year: 2023,
        month: 11,
        day: 4,
        score: 8.1,
        importance: 1,
        inconsistency_min: 2,
        inconsistency_max: 1,
        atmosphere: -1,
    },

];

export const diaryDayTexts = [
    {
        id: 1,
        year: 2023,
        month: 10,
        day: 30,
        fullText: `An ambiguous day, but ended well in the end. It's not a day off anymore, so went to some doctors today who needed to be seen. Again, slept a lot. But I decided to punish an acquaintance, Katya, for ignoring me. And in the end it came out pretty hard, and it turned out in the end that she had my messages went down, and it was required to write again. Everything settled, and in general, she ended up being a very good girl. I'm sorry about it now. But in the end we had a very good conversation with her. There were no procedures at the clinic yet, I just made an appointment.`,
    },
    {
        id: 2,
        year: 2023,
        month: 10,
        day: 31,
        fullText: `Still making further appointments for treatments, nothing has happened yet. I slept a lot again, the medication makes me very drowsy. I was texting with friends, but I didn't communicate much in the ward. Nothing interesting almost, except that Vika from the dream decided to open her profile. There were two tense moments. First of all, she was in 8th grade instead of 9th, which means that Canada will probably have to be postponed until 2027. That's if it works out with her eventually. And second of all, I didn't see any friends from out of her town. Well, in exactly two months, we'll see. She seems like a nice girl. November is true, alas, could not be met, I fell asleep early.`,
    },
    {
        id: 3,
        year: 2023,
        month: 11,
        day: 1,
        fullText: `And here it is - a purely male month) And that means it's time to do male things) But so far on the first day of this month there was nothing particularly male, well, except for the symbol of the month) Today I went again to the doctors for appointments. The only procedure so far is electrosleep, I remember it, it's a cool thing. I decided to do a little work with the site, but then I got sleepy, I still sleep a lot, though not as much as I used to. Decided to go for a little walk even, the weather is really nice today! We'll see how the men's month goes next.`,
    },
    {
        id: 4,
        year: 2023,
        month: 11,
        day: 2,
        fullText: `Went for a couple of treatments today - electroson and bos. I think I also saw a therapist today, but they didn't schedule anything. The guy who had the extension cord checked out today, and they put another guy in right away. So I kind of had to be without a computer all day today. I also bought some food at the cafeteria, I don't eat much here.`,
    },
    {
        id: 5,
        year: 2023,
        month: 11,
        day: 3,
        fullText: `Not a bad day, that's for sure. Only went to the bos for treatments. Also, my mom came over today and I got an extension cord and there was a lot of goodies + more food from the mac. Not sleeping as much as I used to. Worked on the website, again. Now I'm already rewriting it under React, and by the way, I'm getting pretty good at it. I worked for about an hour, maybe even two. Also Ruslan wrote me today that when I plan to go to Canada, I can write to his brother. And that I could bring a girl with me in a few years. I mean, even if, for example, with this Vika (naturally the one from the dream, not Annie Knitts). I can fly to Canada in 2026 and in 2027 already marry her and take her with me. I'm also glad that Ruslan was offered something about his tea store or store, he may make a lot of money soon) Interesting day overall.`,
    },
    {
        id: 6,
        year: 2023,
        month: 11,
        day: 4,
        fullText: `There's usually some kind of trouble on the 4th of Y-months. Today was okay, but boring. I was still working on the website a little bit. But the problem was that Pete had to call somewhere, and I never did, and then I got pressed for it in the end. Because I thought it was something to do with Otajon again.`,
    },

];

export const diaryDayTextsRu = [
    {
        id: 1,
        year: 2023,
        month: 10,
        day: 30,
        fullText: `Неоднозначный день, но закончился хорошо в итоге. Уже не выходной, так что к некоторым врачам сходил сегодня, к кому надо было. Опять же, очень много спал. Но я решил проучить одну знакомую, Катю, за то что игнорила. И в итоге довольно жестко вышло, а оказалось в итоге, что у нее сообщения вниз уходили, а надо было еще раз написать. Все уладили, и вообще она в итоге очень хорошей тянкой оказалась. Даже стыдно теперь перед ней за это. Но в конце концов мы уже весьма хорошо пообщались с ней. Процедур в клинике пока не было, я только записывался.`,
    },
    {
        id: 2,
        year: 2023,
        month: 10,
        day: 31,
        fullText: `Все дальше записываюсь на процедуры, пока ничего не было. Спал снова много, от препаратов сильно клонит в сон. Переписывался с друзьями, а вот в палате не особо общался. Ничего интересного почти, кроме того, что Вика из сна решила открыть страницу. Было два напряженных момента. Во первых она оказалась не в 9, а в 8 классе, а это значит что походу Канаду придется до 2027 отложить. Ну это если у меня сложится с ней в итоге. А во вторых не заметил друзей из других городов у нее. Ну через ровно два месяца будет уже все видно. А так вроде хорошая девушка по виду. Ноябрь правда, увы не смог встретить, вырубился раньше.`,
    },
    {
        id: 3,
        year: 2023,
        month: 11,
        day: 1,
        fullText: `И вот он - чисто мужской месяц) А значит пора заниматься мужскими делами) Но пока в первый день этого месяца чего-то особо мужского не было, ну кроме символа месяца) Сегодня я ходил снова ко врачам на записи. Из процедур пока только электросон, я помню его, прикольная штука. Решил немного с сайтом поразбираться, но потом мне спать захотелось, все еще сплю много, хоть уже и не так, как раньше. Решил немного погулять даже, погода очень хорошая сегодня! Посмотрим, как мужской месяц пойдет дальше.`,
    },
    {
        id: 4,
        year: 2023,
        month: 11,
        day: 2,
        fullText: `Сходил сегодня на пару процедур - на электросон и на бос. Вроде еще у терапевта был сегодня, ничего особо не назначили. Парень у которого был удлинитель сегодня выписался, и подселили сразу же другого парня. Так что пришлось без компа сегодня весь день вроде бы сидеть. Еще в буфете купил покушать, я вообще ща мало довольно ем тут.`,
    },
    {
        id: 5,
        year: 2023,
        month: 11,
        day: 3,
        fullText: `Неплохой день - это точно. На процедуры только на бос сходил. Еще мама сегодня приехала и я взял удлинитель и еще там много чего вкусного было + из мака еще еда. Уже не так много сплю как раньше. Работал над сайтом, снова. Теперь уже под реакт переписываю, и кстати, уже неплохо получается. Где-то около часа, а может даже два поработал. Еще Руслан написал мне сегодня про то, что я когда буду планировать в Канаду, могу его брату написать. И что можно взять тянку с собой через несколько лет. То есть даже, например, если с этой Викой (естественно которая из сна, а не Энни Ниттс). Я могу в Канаду в 2026 улететь, а в 2027 уже жениться на ней и забрать ее с собой. Еще рад, что Руслану что-то предложили по поводу своей чайной лавки или магазина, он может скоро много зарабатывать) Интересный день в целом.`,
    },
    {
        id: 6,
        year: 2023,
        month: 11,
        day: 4,
        fullText: `Обычно 4-ого в ышные месяца происходят какие-то неприятности. Сегодня в целом день норм был, правда скучно все же. Немного еще с сайтом разбирался. Но проблема была, что Пете надо было куда-то позвонить, а я так и не позвонил и потом меня за это прессанули в итоге. Потому что я думал, что опять что-то с Отажоном связанное.`,
    },

];

export const diaryMonths = [
    {
        id: 1,
        year: 2013,
        month: 12,
        baseScore: 83.75,
    },
    {
        id: 2,
        year: 2014,
        month: 1,
        baseScore: 79.55,
    },
    {
        id: 3,
        year: 2014,
        month: 2,
        baseScore: 68.13,
    },
    {
        id: 4,
        year: 2014,
        month: 3,
        baseScore: 69.30,
    },
    {
        id: 5,
        year: 2014,
        month: 4,
        baseScore: 87.44,
    },
    {
        id: 6,
        year: 2014,
        month: 5,
        baseScore: 78.4,
    },
    {
        id: 7,
        year: 2014,
        month: 6,
        baseScore: 97.33,
    },
    {
        id: 8,
        year: 2014,
        month: 7,
        baseScore: 76.47,
    },
    {
        id: 9,
        year: 2014,
        month: 8,
        baseScore: 91.6,
    },
    {
        id: 10,
        year: 2014,
        month: 9,
        baseScore: 81.23,
    },
    {
        id: 11,
        year: 2014,
        month: 10,
        baseScore: 71.42,
    },
    {
        id: 12,
        year: 2014,
        month: 11,
        baseScore: 88.95,
    },
    {
        id: 13,
        year: 2014,
        month: 12,
        baseScore: 72.2,
    },
    {
        id: 14,
        year: 2015,
        month: 1,
        baseScore: 71.23,
    },
    {
        id: 15,
        year: 2015,
        month: 2,
        baseScore: 79.2,
    },
    {
        id: 16,
        year: 2015,
        month: 3,
        baseScore: 85.12,
    },
    {
        id: 17,
        year: 2015,
        month: 4,
        baseScore: 73.52,
    },
    {
        id: 18,
        year: 2015,
        month: 5,
        baseScore: 87.16,
    },
    {
        id: 19,
        year: 2015,
        month: 6,
        baseScore: 55.1,
    },
    {
        id: 20,
        year: 2015,
        month: 7,
        baseScore: 64.38,
    },
    {
        id: 21,
        year: 2015,
        month: 8,
        baseScore: 85.8,
    },
    {
        id: 22,
        year: 2015,
        month: 9,
        baseScore: 68.14,
    },
    {
        id: 23,
        year: 2015,
        month: 10,
        baseScore: 73.75,
    },
    {
        id: 24,
        year: 2015,
        month: 11,
        baseScore: 86.62,
    },
    {
        id: 25,
        year: 2015,
        month: 12,
        baseScore: 95.95
    },
    {
        id: 26,
        year: 2016,
        month: 1,
        baseScore: 77.51
    },
    {
        id: 27,
        year: 2016,
        month: 2,
        baseScore: 70.75
    },
    {
        id: 28,
        year: 2016,
        month: 3,
        baseScore: 78.03
    },
    {
        id: 29,
        year: 2016,
        month: 4,
        baseScore: 97.44
    },
    {
        id: 30,
        year: 2016,
        month: 5,
        baseScore: 68.17
    },
    {
        id: 31,
        year: 2016,
        month: 6,
        baseScore: 82.13
    },
    {
        id: 32,
        year: 2016,
        month: 7,
        baseScore: 65.69
    },
    {
        id: 33,
        year: 2016,
        month: 8,
        baseScore: 69.32,
        hasDeath: true,
    },
    {
        id: 34,
        year: 2016,
        month: 9,
        baseScore: 81.03
    },
    {
        id: 35,
        year: 2016,
        month: 10,
        baseScore: 86.44
    },
    {
        id: 36,
        year: 2016,
        month: 11,
        baseScore: 77.35
    },
    {
        id: 37,
        year: 2016,
        month: 12,
        baseScore: 57.26
    },
    {
        id: 38,
        year: 2017,
        month: 1,
        baseScore: 47.36
    },
    {
        id: 39,
        year: 2017,
        month: 2,
        baseScore: 47.41
    },
    {
        id: 40,
        year: 2017,
        month: 3,
        baseScore: 67.23
    },
    {
        id: 41,
        year: 2017,
        month: 4,
        baseScore: 98.42
    },
    {
        id: 42,
        year: 2017,
        month: 5,
        baseScore: 67.54
    },
    {
        id: 43,
        year: 2017,
        month: 6,
        baseScore: 77.93
    },
    {
        id: 44,
        year: 2017,
        month: 7,
        baseScore: 86.88
    },
    {
        id: 45,
        year: 2017,
        month: 8,
        baseScore: 94.54
    },
    {
        id: 46,
        year: 2017,
        month: 9,
        baseScore: 100.21
    },
    {
        id: 47,
        year: 2017,
        month: 10,
        baseScore: 75.77
    },
    {
        id: 48,
        year: 2017,
        month: 11,
        baseScore: 78.83
    },
    {
        id: 49,
        year: 2017,
        month: 12,
        baseScore: 71
    },
    {
        id: 50,
        year: 2018,
        month: 1,
        baseScore: 73.81
    },
    {
        id: 51,
        year: 2018,
        month: 2,
        baseScore: 60.33
    },
    {
        id: 52,
        year: 2018,
        month: 3,
        baseScore: 70.55
    },
    {
        id: 53,
        year: 2018,
        month: 4,
        baseScore: 96.34
    },
    {
        id: 54,
        year: 2018,
        month: 5,
        baseScore: 75.4
    },
    {
        id: 55,
        year: 2018,
        month: 6,
        baseScore: 94.9
    },
    {
        id: 56,
        year: 2018,
        month: 7,
        baseScore: 85.22
    },
    {
        id: 57,
        year: 2018,
        month: 8,
        baseScore: 73
    },
    {
        id: 58,
        year: 2018,
        month: 9,
        baseScore: 55.06
    },
    {
        id: 59,
        year: 2018,
        month: 10,
        baseScore: 70.68
    },
    {
        id: 60,
        year: 2018,
        month: 11,
        baseScore: 69.36
    },
    {
        id: 61,
        year: 2018,
        month: 12,
        baseScore: 78.82
    },
    {
        id: 62,
        year: 2019,
        month: 1,
        baseScore: 71.02
    },
    {
        id: 63,
        year: 2019,
        month: 2,
        baseScore: 79.96
    },
    {
        id: 64,
        year: 2019,
        month: 3,
        baseScore: 57.79
    },
    {
        id: 65,
        year: 2019,
        month: 4,
        baseScore: 80.19
    },
    {
        id: 66,
        year: 2019,
        month: 5,
        baseScore: 76.69
    },
    {
        id: 67,
        year: 2019,
        month: 6,
        baseScore: 87.47
    },
    {
        id: 68,
        year: 2019,
        month: 7,
        baseScore: 56.49
    },
    {
        id: 69,
        year: 2019,
        month: 8,
        baseScore: 95.41,
        hasDeath: true,
    },
    {
        id: 70,
        year: 2019,
        month: 9,
        baseScore: 45.67
    },
    {
        id: 71,
        year: 2019,
        month: 10,
        baseScore: 71.72
    },
    {
        id: 72,
        year: 2019,
        month: 11,
        baseScore: 79.05
    },
    {
        id: 73,
        year: 2019,
        month: 12,
        baseScore: 97.02
    },
    {
        id: 74,
        year: 2020,
        month: 1,
        baseScore: 74.73
    },
    {
        id: 75,
        year: 2020,
        month: 2,
        baseScore: 62.49
    },
    {
        id: 76,
        year: 2020,
        month: 3,
        baseScore: 85.81
    },
    {
        id: 77,
        year: 2020,
        month: 4,
        baseScore: 43.09
    },
    {
        id: 78,
        year: 2020,
        month: 5,
        baseScore: 69.86
    },
    {
        id: 79,
        year: 2020,
        month: 6,
        baseScore: 88.51
    },
    {
        id: 80,
        year: 2020,
        month: 7,
        baseScore: 89.76
    },
    {
        id: 81,
        year: 2020,
        month: 8,
        baseScore: 90.88
    },
    {
        id: 82,
        year: 2020,
        month: 9,
        baseScore: 78.91
    },
    {
        id: 83,
        year: 2020,
        month: 10,
        baseScore: 79.19
    },
    {
        id: 84,
        year: 2020,
        month: 11,
        baseScore: 86.34
    },
    {
        id: 85,
        year: 2020,
        month: 12,
        baseScore: 73.22
    },
    {
        id: 86,
        year: 2021,
        month: 1,
        baseScore: 86.57
    },
    {
        id: 87,
        year: 2021,
        month: 2,
        baseScore: 92.32
    },
    {
        id: 88,
        year: 2021,
        month: 3,
        baseScore: 88.85
    },
    {
        id: 89,
        year: 2021,
        month: 4,
        baseScore: 75.29
    },
    {
        id: 90,
        year: 2021,
        month: 5,
        baseScore: 94.91
    },
    {
        id: 91,
        year: 2021,
        month: 6,
        baseScore: 90.50
    },
    {
        id: 92,
        year: 2021,
        month: 7,
        baseScore: 78.89
    },
    {
        id: 93,
        year: 2021,
        month: 8,
        baseScore: 83.02
    },
    {
        id: 94,
        year: 2021,
        month: 9,
        baseScore: 87.64
    },
    {
        id: 95,
        year: 2021,
        month: 10,
        baseScore: 72.91
    },
    {
        id: 96,
        year: 2021,
        month: 11,
        baseScore: 81.12
    },
    {
        id: 97,
        year: 2021,
        month: 12,
        baseScore: 71.06
    },
    {
        id: 98,
        year: 2022,
        month: 1,
        baseScore: 54.8
    },
    {
        id: 99,
        year: 2022,
        month: 2,
        baseScore: 31.26,
        hasDeath: true,
    },
    {
        id: 100,
        year: 2022,
        month: 3,
        baseScore: 66.28
    },
    {
        id: 101,
        year: 2022,
        month: 4,
        baseScore: 90.77
    },
    {
        id: 102,
        year: 2022,
        month: 5,
        baseScore: 83.55
    },
    {
        id: 103,
        year: 2022,
        month: 6,
        baseScore: 64.36
    },
    {
        id: 104,
        year: 2022,
        month: 7,
        baseScore: 79.49
    },
    {
        id: 105,
        year: 2022,
        month: 8,
        baseScore: 82.04
    },
    {
        id: 106,
        year: 2022,
        month: 9,
        baseScore: 56.66
    },
    {
        id: 107,
        year: 2022,
        month: 10,
        baseScore: 67.44
    },
    {
        id: 108,
        year: 2022,
        month: 11,
        baseScore: 70.9
    },
    {
        id: 109,
        year: 2022,
        month: 12,
        baseScore: 70.77
    },
    {
        id: 110,
        year: 2023,
        month: 1,
        baseScore: 94.48
    },
    {
        id: 111,
        year: 2023,
        month: 2,
        baseScore: 81.16
    },
    {
        id: 112,
        year: 2023,
        month: 3,
        baseScore: 66.63
    },
    {
        id: 113,
        year: 2023,
        month: 4,
        baseScore: 92.32
    },
    {
        id: 114,
        year: 2023,
        month: 5,
        baseScore: 98.13
    },
    {
        id: 115,
        year: 2023,
        month: 6,
        baseScore: 86.16
    },
    {
        id: 116,
        year: 2023,
        month: 7,
        baseScore: 80.62
    },
    {
        id: 117,
        year: 2023,
        month: 8,
        baseScore: 30.10
    },
    {
        id: 118,
        year: 2023,
        month: 9,
        baseScore: 96.19
    },
    {
        id: 119,
        year: 2023,
        month: 10,
        baseScore: 84.24
    },
    {
        id: 120,
        year: 2023,
        month: 11,
        baseScore: 79.06
    },

];


export const diaryMonthsTexts = [
    {
        id: 1,
        year: 2019,
        month: 8,
        text_rus: `Август в 2019 году выдался у меня одним из самых насыщенных месяцев в моей жизни! И казалось бы, что все было прекрасно - отличный отдых в Доминикане, очень веселые и клёвые прогулки с друзьями и встречи с двумя подругами, все это разбавлено смешными мемами того месяца. И в конце июля по приколу решил внести в фамилию «Лягу», в итоге поменяли и мне пришлось целый месяц быть с такой фамилией. Лягу это вообще так называется земноводное, но люди его называют неправильно - лягушкой, вот такой у нас был мем в конце июля, до этого. Но вся лампота и все хорошее отделяет одно ужасное и очень трагичное событие, которое произошло в самое неожиданное время. Ну ладно, месяц начался с отдыха в Доминикане) Уже в другом отеле. Няшной тяночки из отеля в этот раз не было, правда, я видел однажды одну горячую жирную) 13-летнюю. Первые дни августа прошли очень хорошо, отдых был классным, еще радовало, что с нами была крестная. Но тем временем, я не только маму с крестной заебывал с Шабуниной, но еще и друзей, от чего они начали чаще злиться на меня, особенно Руслан. 4 августа была очень крутая экскурсия на остров Саона, но особенно круто было на катере, еще когда я лежал там, ветер так дул, ощущения клевые очень) Сделал там фотки с морскими звездами и попил пинаколады. А потом поехали к городу художников, где я тоже сделал пару фоток. В этот день форсили картинку с бабкой мертвой, которую лизала девочка. И в августе 2016 я помню тоже наткнулся на эту картинку и ржал с нее за три дня до смерти бабушки по отцовской линии. И вот, что произошло вечером 6 августа (но в Москве было уже 7-ое). Переломный момент. Утром еще все норм было, я видел в бассейне двух парней - киприота и омежку и они дружили. Я даже придумал, что они делали кое-что гейское и захотел их в беседе зафорсить) А вот самый пиздец произошел вечер, когда маме позвонила жена моего дяди и сообщила, что Дивалюлеля умер… Это было роковым моментом тогда, ведь я помню, как недавно еще, чуть больше двух лет назад мы все вместе отмечали его день рождения, было весело, а он шутил про ватные диски. Вот такое вот очень трагическое событие произошло во время замечательного месяца, что в итоге весь остальной отдых прошел как-то так, без настроения. Было его очень жалко, хоть я и раньше делал мемы с ним, все же очень хороший мужик и мой дядя. В следующие дни я бухал очень много, в один из дней мне даже было настолько плохо, что я не мог дойти до кровати и меня блевало. Это было восьмого августа, а в следующие дни уже так много не пил. И тут резко, после отдыха возвращается лампота снова, уже в Москве. Прилетел Руслан, а впереди у нас три очень классных и веселых прогулки) 13 августа была первая прогулка, где сначала мы вдвоем очень сильно хохотали над моим бывшим одноклассником Егором Кураковым, называли его петухом и читали его цитаты. Даже гс ему всякие записывали и кидали, а потом уже делали это втроем))) 14 августа снова доебывали петуха нашими мемами про него, что он мне потом написал даже, но все равно очень весело было, а голосовые были очень смешными) А еще тогда мы залезли в Алькантару снова и повернули рубильник. И в Авиапарке Руслан увидел девушку и влюбился в нее, успел потрогать ее даже, но зассал познакомиться, после чего он очень долгое время жалел и пытался ее найти (как же мне это знакомо). В середине августа были похороны Дивалюлели, поэтому в семье царила мрачная довольно атмосфера. 16 августа было 9 дней, меня не хотели отпускать на прогулку, день вообще не очень был, да и потом ребята сказали, что не смогут в этот день. Последняя наша прогулка выдалась 18 августа, и снова же была она очень смешной и атмосферной! Опять доебывали Куракова, а потом даже поиграли в мою игру про него, которую я еще в 2014 в рпг мейкере делал. На этом лампота не закончилась. Но хоть мы и гуляли классно, Руслана я все же начинал раздражать тем, что постоянно писал про Шабунину, и у Мырзы также бомбило от этого. До 23 августа особо интересного не было ничего, хотел погулять с одной знакомой Катей (которая вообще из Молдавии), но она не могла. А 23 попробовал впервые желтый арбуз, довольно необычный он оказался. И 25 августа прогулка была с той Катей. Я говорил в этот раз много, но она молчала и не особо часто говорила, поэтому в целом так себе было, но все же прогулка была неплохой. А еще я узнал, что Оля поступила куда-то в Москву и теперь тут снимает комнату с подругой, так что и с ней можно будет погулять. Но пока до этого, 26 августа видимо я друзей совсем достал своими сообщениями про Анечку, так еще и в конце августа заметил что нос у Шабуньки очень милый и на кошачий похож. В итоге друзья с фейков слили ей всю хуйню, которую я писал про нее в беседу, но тогда, я об этом даже не догадывался. Да и она до 1 сентября не заходила в сеть. И вот, 29 августа отличная прогулка с Олей! Было очень приятно гулять и даже весело, даже ей я успел рассказать про Куракова, мы вместе смеялись с него, и Оля даже хотела ему позвонить и пофлиртовать с ним, чтобы мы все поржали над этим петухом безголовым))) А вообще мы с ней гуляли по всяким красивым паркам, в конце оранжевой ветки, там, где она снимала комнату. И гуляли долго, целых 5 часов, да и сама прогулка была замечательной и вообще одна из лучших с кем-либо. Но с 30 августа, как и год назад начали происходить плохие события. В этот раз все еще хуже. Я и с родителями ссорился, так еще и когда хотел освободить место на телефоне, какая-то программа левая потерла больше половины фоток с телефона, и они пропали бесследно! В итоге, только некоторые удалось восстановить. И тут хорошее резко обрывается, как только начинается отвратительный, ужаснейший сентябрь 2019-ого.`,
        text_en: `August in 2019 turned out to be one of the most eventful months of my life! And it would seem that everything was fine - a great vacation in the Dominican Republic, very fun and cool outings with friends and meetings with two girl friends, all diluted by funny memes of that month. And at the end of July for fun decided to put in the last name "Lyagu", eventually changed and I had to be with this name for a month. Lyagu is actually the name of an amphibian, but people call it wrong - frog, that's the kind of meme we had at the end of July, before that. But all great vibes and all good things are separated by one terrible and very tragic event that happened at the most unexpected time. Well okay, the month started with a vacation in the Dominican Republic) Already in a different hotel. Cute girl from the hotel this time was not here, however, I saw once one hot thicc one) 13-year-old. The first days of August went very well, the vacation was cool, still happy that we had a godmother with us. But in the meantime, not only my mom and godmother fucked up with Shabunina, but also my friends, from which they began to get angry with me more often, especially Ruslan. August 4 was a very cool excursion to the island of Saona, but it was especially cool on the boat, even when I was lying there, the wind was blowing, the sensation cool very) Made there pictures with starfish and drank pina colada. And then we went to the city of artists, where I also made a couple of photos. This day I forced a picture of a dead grandmother being licked by a girl. And in August 2016, I remember also came across this picture and was laughing with it three days before my paternal grandmother died. And that's what happened on the evening of August 6th (but it was already the 7th in Moscow). A turning point. In the morning everything was still normal, I saw two guys in the pool - a Cypriot and an Omega and they were friends. I even thought that they were doing something gay and wanted to make a joke about them in the conversation) But the most fucked up thing happened in the evening, when my mom got a call from my uncle's wife and told her that Divalulela had died... It was a fateful moment then, because I remember how recently, just over two years ago, we all celebrated his birthday together, it was fun, and he was joking about cotton disks. This is such a very tragic event happened during a wonderful month, that in the end, the rest of the vacation was like that, without mood. I felt really sorry for him, even though I've made memes with him before, still a very good man and my uncle. The next days I drank a lot, one day I even felt so bad that I couldn't walk to bed and threw up. It was August 8, and the next days I didn't drink so much. And then abruptly, after a rest, the great vibes returned again, already in Moscow. Ruslan flew in, and we have three very cool and fun walks ahead of us) August 13 was the first walk, where first we two very much laughed at my former classmate Egor Kurakov, called him a rooster and read his quotes. We even wrote down and threw him all sorts of vm, and then the three of us already did it))))) On August 14 we again annoyed the rooster with our memes about him, which he later wrote to me even, but it was still very funny, and the voice-overs were very funny) And also then we got into Alcantara again and turned the switch. And in Aviapark Ruslan saw a girl and fell in love with her, he even managed to touch her, but pissed to meet her, after which he regretted for a long time and tried to find her (how familiar it is to me). In the middle of August was the funeral of Divalulela, so the atmosphere in the family was rather gloomy. August 16 was 9 days, they didn't want to let me go for a walk, it wasn't a good day at all, and then the guys said they couldn't go on that day. Our last walk was on August 18, and again it was very funny and atmospheric! We made fun of Kurakov again, and then we even played my game about him, which I made back in 2014 in rpg maker. The great vibes didn't end there. But even though we were having a great time, I was starting to annoy Ruslan by constantly writing about Shabunina, and Myrza was also getting angry by it. Until August 23rd there was nothing particularly interesting, I wanted to go for a walk with a friend Katya (who was from Moldova), but she couldn't. And on August 23 I tried yellow watermelon for the first time, it was quite unusual. And on August 25, I went for a walk with that Katya. I talked a lot this time, but she was silent and didn't talk much, so it was like that, but still it was a good walk. And I also found out that Olya got a place in Moscow and now she rents a room with a friend, so I could go for a walk with her. But until then, on August 26, apparently I got my friends with my messages about Anechka, and at the end of August I noticed that Shabunka's nose is very cute and cat-like.Eventually my friends leaked all the fucked up shit I wrote about her in conversation, but at the time, I didn't even know about it. And she didn't go online until September 1st. And then, on August 29, a great walk with Olya! It was very pleasant to walk and even fun, even to her I had time to tell about Kurakov, we laughed with her together, and Olga even wanted to call him and flirt with him, so that we all laughed at this headless rooster))))) In general, we walked with her in all sorts of beautiful parks, at the end of the orange branch, where she rented a room. And we walked for a long time, as much as 5 hours, and the walk itself was wonderful and generally one of the best with anyone. But on August 30th, just like a year ago, bad things started happening. This time it's even worse. I had a fight with my parents, and when I wanted to free up space on my phone, some left program erased more than half of the photos from my phone, and they disappeared without a trace! In the end, only some of them could be restored. And then the good abruptly ends as soon as the disgusting, horrible September 2019 begins.`,
        song_rus: `https://www.youtube.com/embed/nCltXbFwuRc?si=MPAfEcAXq_zOxHzK`, //fuck sanctions
        song_en: `https://www.youtube.com/embed/nCltXbFwuRc?si=MPAfEcAXq_zOxHzK`,
    },
    {
        id: 2,
        year: 2019,
        month: 9,
        text_rus: `Невероятно жестоким месяцем выдался для меня сентябрь 2019-ого, принесший мне очень много моральной боли и страданий. Это чуть не привело меня к суициду, но хорошо то, что меня в итоге отговорили. А все по пизде пошло уже вечером 1-ого сентября. Тогда мы гуляли с Петей, но что-то прогулка та была совсем не очень. И вот ближе к вечеру, спустя месяц в сеть зашла Шабунька и игнорила меня. Это продолжалось до 3 сентября, но самое ужасное было то, что это было как раз после признания. Я думал, что я ей не нравлюсь и она вообще хотела прекратить контакты со мной, чтобы я дальше не привязывался к ней. О том, что ей мои друзья тогда скинули, я не знал. В итоге, 3 сентября я потратил много нервов, я и звонил Шабуньке, и просил друзей, которые тогда работали на два фронта, в итоге она мне ответила, и казалось бы все наладилось? Ее возмутило то, что я про нее друзьям рассказываю. Но о сливе 26 августа я тогда еще не знал. Общение шло не очень из-за того, что Шабунина узнала про то, что я пересылал ее сообщения друзьям, Мырза спалил. А вообще мы с Мырзой в этом месяце совсем ебанулись и всякой хуйней занимались. А еще иногда ссорились и он рассылал всякую хуйню моим друзьям и подругам. Даже одному одногруппнику с фамилией Цысь, но о нем позже (Мырза проорал с его фамилии и мы начали это форсить). В сентябре уже у меня начался 3 курс, 5 семестр, новые предметы. Как всегда. С Дианой кстати общение тоже по пизде шло, она отвечала хуево, не хотела гулять, да и на кино (Оно 2), на которое я звал ее еще 2 года назад, она решила сходить с какой-то левой подругой. После этого мы и вовсе перестали общаться, ибо меня такое не устраивало. 7 сентября был единственный реально хороший день за весь этот месяц, тогда вроде казалось, что все наладилось и мы с Петей очень весело и клево погуляли. Но зачем-то повернули рубильник, и мне кажется, после этого стало все только хуже. И вот с 8 сентября все снова хуже пошло, Аня стала хуже отвечать, да и настроение в целом стало хуже. Очередным пиздецовым днем стало 11 сентября, когда Мырза попросил написать какой-то его подруге, а она не захотела со мной общаться и знакомиться по причине моей внешности. Тогда это только сильнее меня задело. Более менее неплохим днем оказалось 12 сентября, когда мы с Петей снова погуляли, нашли какую-то странную базу и вообще в необычном довольно месте катались на великах. И вот вторая половина сентября уже полностью была отвратительной и пиздецовой. 16 сентября, когда мы с Аней Шумовой сходили на Оно 2, у меня совсем не было настроения из-за того, что мне Шабунька хуево отвечала. 17 потом она меня игнорила, и потом я встретил ее в автобусе, общалась тоже плохо довольно. Еще в тот день начались конфликты с тем одногруппником с фамилией Цысь из-за того, что Мырза писал ему хуйню и мы угарали над его фамилией. В итоге он сначала меня отпиздить хотел, а потом просто решил не общаться со мной вообще и не обращать на меня внимания. Все катилось по пизде, было отвратительное время, каждый день был ужасным. Были и мысли ужасные, и общение с Шабунькой так себе. 21 сентября я вновь вспомнил про порчу, вдруг она у меня рили есть? Потому что ну как может так все сильно скатиться? И почему такое постоянно происходит? 22 сентября был др у Пети, а у меня этот день был лютым говном - меня Диана из друзей снесла, а еще я искал гадалок в Москве, чтобы узнать про порчу и снять ее. 23 сентября снова пиздецы с шабунькой, а 24 сентября, я ее снова встретил в автобусе. Вроде тогда мы и норм пообщались и казалось, что чуть лучше стало, но нет. На следующий день уже 25 сентября случился глобальный пиздец. Во первых, когда я Шабуньке написал, она меня проигнорила. Во вторых, весь этот день меня Саня доебывал и провоцировал, писал сообщения в духе «Ха, увел Шабуньку у чма ебаного», и так далее. В третьих, я пропустил в этот день все пары ради того, чтобы купить цепочку для камня, который я хотел подарить Шабуньке. То телефон разряжался, то магазин не мог найти, везде цепочки были очень дорогие, и еле нашел какую-то церковную лавку внутри другого здания на другом конце Москвы, где была нужная цепочка и стоила она всего 800 рублей тогда вроде. И вот тогда, я приехал после этого в универ, купив цепочку, ждал, когда закончатся пары. Поехал и хотел встретить Шабуньку, ибо она обычно в это на автобус должна была садиться. Но вдруг я вижу, как она зашла в сеть и до сих пор игнорила. Я понял, что она специально ушла с пар пораньше, чтобы не встретиться со мной в тот день, потому что за день до этого я сказал ей «надеюсь, завтра встретимся еще». Нахлынул лютый депрессняк и настроение было испорчено. Уже вечером дома я бухал. Но и это еще не все, мне слили, что Мырза общался с Шабунькой и она ему сливала мои сообщения, и вообще я думал, что они скрывают что-то. Потом высказался Руслану, но и он слил мои сообщения Мырзе. У меня окончательно бомбануло и был нервный срыв. Настолько, что уже 26 сентября я придумывал план о том, как бы выпилиться и искал железнодорожные пути недалеко от Шабунькиного универа, и планировал после завала пересдачи по физике тогда прыгнуть под поезд. Я удалил свою страницу в итоге тогда, и уже думал, что на следующий день выпилюсь, хотя и родители меня отговаривали. 26 сентября, когда уже проснулся увидел, что у меня было 3 пропущенных от Шабуньки, но отвечать ей не стал, ибо был обижен на нее. По поводу всех мыслей тоже немного отошел, чувствовал чуть получше, хоть в итоге этот Тимохин меня снова завалил на физике. А потом мне в голову моча ебнула и я всем одногруппникам стал говорить, что если им писать начнут, чтобы они говорили, что я сдох. Чтобы Шабунька с Мырзой тогда почувствовали вину за все это. Хотя Руслан вообще почти не был виноват (ну кроме слива тех сообщений, про который я даже не знал еще тогда), я боялся, что он спалит меня Мырзе, а он напишет Шабуньке. Поэтому удалил страницу и даже поменял на время номер, а также просил всех одногруппников говорить то, что я выпилился. Последние дни сентября уже были более менее норм. Я покрасил снова волосы и сделал новую прическу, а также купил игру, которую ждал еще с 2012 года. И нашел гадалку, к которой уже в октябре поеду.`,
        text_en: `September 2019 was an incredibly cruel month for me, bringing me a lot of moral pain and suffering. It almost led me to suicide, but the good thing is that I was eventually talked out of it. And everything went fucked up already on the evening of September 1st. We went for a walk with Petya, but the walk wasn't very good. And that evening, a month later, Shabunka came online and ignored me. It lasted until September 3, but the worst thing was that it was just after the confession. I thought she didn't like me and wanted to stop contacting me altogether so I wouldn't get further attached to her. About what my friends had leaked to her at the time, I didn't know about. In the end, on September 3, I spent a lot of nerves, I and called Shabunka, and asked friends who were then working on two fronts, eventually she responded to me, and it would seem that everything was fine? She resented me telling my friends about her. But I didn't know about the August 26th leak. Communication went not very well because Shabunina found out that I forwarded her messages to friends, Myrza burned. In general, this month Myrza and I have been totally fucked up and doing all sorts of fucked up things. And sometimes we'd fight and he'd send all kinds of fucked up shit to my friends and girlfriends. Even one groupmate with the last name Tsys, but about him later (Myrza yelled with his last name and we started forcing it). In September I already started my 3rd year of study, 5th semester, new subjects. As always. With Diana, by the way, communication was also fucked up, she answered poorly, did not want to go out, and on the movie (It 2), to which I called her 2 years ago, she decided to go with some left friend. After that we stopped communicating altogether, because I was not satisfied with that. September 7 was the only really good day for the whole month, then it seemed that everything got better and we with Petya very fun and cool outing. But for some reason they turned the switch, and I think everything got worse after that. And since September 8, everything got worse again, Anya began to answer worse, and my mood in general became worse. Another fucked-up day was September 11, when Myrza asked me to write to some friend of his, and she didn't want to communicate with me and get acquainted with me because of my face. It only hurt me more then. More or less good day was September 12, when Petya and I again went for a walk, found some strange base and in general in an unusual enough place to ride bikes. And the second half of September was completely disgusting and fucked up. On September 16, when Anya Shumova and I went to It 2, I wasn't in the mood at all because Shabunka was responding to me in a bad way. 17 then she ignored me, and then I met her on the bus, she was communicating badly too. Also that day I started conflicts with that classmate with the last name Tsys because Myrza was writing fucked up stuff to him and we were making fun of his last name. In the end he wanted to fuck me off first, and then he just decided not to communicate with me at all and not to pay attention to me. Everything was fucked up, it was a disgusting time, every day was awful. There were terrible thoughts, and communication with Shabunka so bad. On September 21, I again remembered about curse, if I have it? Because how can everything go down so hard? And why does it happen all the time? On September 22nd I had a birthday party at Petya's, and I had a shit day - Diana deleted me away from her friends, and I was looking for fortune-tellers in Moscow to find out about the curse and remove it. On September 23, I got fucked up with Shabunka again, and on September 24, I met her again on the bus. It seemed then that we had a normal conversation and it seemed that it got a little better, but no. The next day, September 25th, it was a global fuck-up. First of all, when I texted Shabunka, she ignored me. Secondly, all that day Sanya fucked me up and provoked me, wrote messages like "Ha, stole Shabunka from a fucking bastard", and so on. Thirdly, I skipped all the classes that day in order to buy a chain for the stone I wanted to give to Shabunka. The phone was running out of battery, I couldn't find a store, everywhere chains were very expensive, and I barely found some church store inside another building at the other end of Moscow, where I had the necessary chain and it cost only 800 rubles then, I think. And that's when I came to the university after that, having bought the chain, I was waiting for the classes to finish. I went and wanted to meet Shabunka, because she usually had to get on the bus at that time. But suddenly I see her go online and she still ignored me. I realized that she purposely left the guys early to not meet me that day, because the day before I told her "I hope to meet again tomorrow". I was depressed and my mood was ruined. I was already drinking at home that night. But that's not all, I was leaked that Myrza talked to Shabunka and she leaked my messages to him, and in general I thought they were hiding something. Then I spoke out to Ruslan, but he also leaked my messages to Myrza. I had a final shock and a nervous breakdown. So much so that already on September 26, I thought up a plan on how to die and looked for railroad tracks near Shabunka's university, and planned to jump in front of a train after failing the physics retake. I deleted my page in the end then, and I already thought that the next day I would kill myself, although my parents discouraged me. On September 26, when I woke up, I saw that I had 3 missed messages from Shabunka, but I didn't answer her, because I was offended by her. About all the thoughts also a little withdrew, I felt a little better, although in the end this Timokhin again failed me in physics. And then pissed in my head and I began to tell all my groupmates that if they started to write to them, that they should say that I was dead. So that Shabunka and Myrza would feel guilty about it. Although Ruslan was almost not guilty at all (except for leaking those messages, which I didn't even know about even then), I was afraid that he would leak me to Myrza, and he would write to Shabunka. So I deleted my page and even changed my phone number for a while, and also asked all my groupmates to say that I killed myself. The last days of September were already more or less normal. I dyed my hair again and got a new hairstyle, and bought a game I've been waiting for since 2012. And I found a fortune teller, to whom I will go in October.`,
        song_rus: `https://www.youtube.com/embed/fjaXbqpnDwE?si=k9bPGuO8YUpVD6d2`,
        song_en: `https://www.youtube.com/embed/fjaXbqpnDwE?si=k9bPGuO8YUpVD6d2`,
    },
    {
        id: 3,
        year: 2019,
        month: 10,
        text_rus: `В этом году у меня октябрь начался довольно странно. А именно - я создал фейк, сидел с него и общался только с Аней Шумовой и с одногруппниками. А еще всю группу просил говорить, если начнут им писать, что я сдох, чтобы Шабуньке это слили потом и она почувствовала вину. Вообще очень тяжело начался месяц, потому что тогда сентябрьские пиздецы все еще продолжались. Еще в ту игру играл - Cube World, которая немного разочаровала меня тем, что разработчик решил многое убрать и добавил ненужные механики, которые и вовсе портят игру. В итоге, кто-то слил из моего универа моим друзьям, что я не сдох. Вообще тогда, я хотел только на Шабуньку и Мырзу повлиять таким образом. Ходил к психологу тогда, ибо тяжело было такое переносить эмоционально и морально. Погадали на ноябрь) 6 октября уже началась жесть, а дело в том, что тогда Мырза с Русланом писали с фейков моим одногруппникам и угрожали им и мне, чтобы сказали правду, и т.д. А седьмого, во время прогулки с Аней Шумовой, которая в итоге оказалась худшей с ней. Но не по ее вине. Дело в том, что через нее я решил все же написать друзьям тогда. И потом уже через нее кинул свой фейк, я пытался во всем объясниться, но они были очень злы на меня. И была полная жесть, когда тогда с ними общался. А еще и даже Оля тогда переживала, и из-за всего этого цирка, мы и прекратили в итоге общаться, точнее, она уже не захотела. Да, вот такое бывает, когда мне моча в голову ебнет, ибо удалял страницу чисто из-за Шабуньки с Мырзой, а в итоге пострадали и другие друзья. Руслан и вовсе пытался выпилиться, до того как узнал, что это все наебкой было, ужас какой-то. 8 октября ночью мне было очень плохо, но уже днем я вроде как помирился с Русланом. Но вот с Мырзой я еще несколько дней ругался, самая жесть с ним была 11 октября, когда мы с ним чуть ли не совсем не рассорились. А за день до этого, 10 октября, я ходил к священнику, точнее мне тогда крестная посоветовала сходить туда. Но в итоге этот день закончился плохо и вечером был срыв из-за чего-то. И как только наступило 12 октября, месяц начал меняться в лучшую сторону. Если до этого дня он был ужасным, то уже после - начались хорошие события и даже лампота. 12 октября мы очень хорошо погуляли с Петей, не гуляли месяц. Повернули рубильник и походили в Авиапарке… А еще я решил его привести в свою качалку у МАИ, но ему что-то там не понравилось… А 13-ого октября - первая встреча с гадалкой! Она сказала, что у меня правда сглаз какой-то на отношения, и потом она уже его у меня убирала, правда, пришлось заплатить за это. А еще она говорила некоторые вещи, которые просто так нельзя угадать. Например про то, что у меня могла бы быть сестра от прошлого мужа мамы. Но вот она сказала, что будет шанс помириться с Шабунькой через месяц примерно. Увы, но тут она в итоге ошиблась, но об этом позже. Более того, я тогда хотел сделать приворот на Шабуньку, но потом передумал. А еще, что через года 2 я буду получать большие деньги. А здесь, не прогадала, но не все так радужно будет. 14 октября я решил встретить Шабуньку и помириться с ней. Она не хотела ни в какую, но я тогда даже не расстроился. После гадалки еще была какая-то необычная атмосфера и чувство, что-то вроде счастья. Я покушал в каком-то ресторане в Метрополисе. А после этого, мы уже с Мырзой тогда помирились, но не надолго. И вот на одной паре он заорет «Белобрысый пидарас», так я проорал и пытался вырубить трансляцию, а еще и заглючило тогда и эхом отдавалось. Теперь в итоге того препода мы так и называли) И в этот день я видел милую тян как раз рядом с той аудиторией. Очень долго пытался найти ее, но ее там уже не было ни через неделю, ни через две. Вообще вторая половина октября выдалась вполне хорошей. Хотя, 16 октября, когда я восстановил страницу, меня Шабунька чснула. Это вроде уже было после того, как ей слили мою вторую страницу. А еще меня удалила из друзей Оля и та Катя из Молдавии. Олю я попросил вернуть, а Кате решил не писать. Но мы с Олей так почти и не общались после этого случая. 17 октября еще раз сходил к гадалке и спросил некоторые вопросы у нее. А порча та или сглаз должны были уйти примерно дней через 40. Еще я заказал тогда амулет себе на удачу, уже 20 октября, который будет готов уже только к декабрю. И наконец, 18 октября, я смог сдать тот курсач по осям! МирЛонов в этот раз даже не стал на отчет смотреть, поставил 3. Наконец был свободен, но еще у меня экзамен и курсач по дискрану. Вторая половина октября у меня прошла в поиске той «Седой» тянки. Мы ее так назвали с друзьями, потому что она была блондинка, а препода который был седой мы называли белобрысым. 21 октября - неплохая прогулка с Аней Шумовой, сходили в какой-то музей, уже плохо помню, но у нас были забавные фотки. Вот только я не знал в тот день, что до прогулки я жестко завалю контрольную по урматам. 23 октября я искал Седую, и в какой-то аудитории на меня наорал препод и сказал «че надо?». А также в одной группе была девушка с похожим описанием, но розовыми волосами. В итоге 25 октября и она мне понравится, и уже с ней я буду пытаться познакомиться, в начале ноября. 26 октября у меня появилась куча всяких идей, как можно улучшить Cube World, но в итоге я все нарисовал, но так и не отправил на реддит. 27 октября снова повернул рубильник, уже не помню почему, мб просто попросили. И вот, 28 октября, в универе я познакомился с одной девушкой по имени Катя Руденко, с которой я уже потом буду часто гулять в мае-июне 2021. Но тогда я даже контактов еще не взял у нее. Седую я никак не мог найти, а также все думал, как познакомиться мне с тянкой с розовыми волосами? Конец октября - как всегда Хэллоуин, смотрел разные фильмы. И вот что, умудрился немного поссориться с Аней Шумовой. У нее чет случилось, и у меня немного тогда бомбануло. А хэллоуин прошел вполне нормально.`,
        text_en: `This year, October started off rather strangely for me. Namely, I created an alt, I used it to communicate only with Anya Shumova and my groupmates. I also asked the whole group to say, if they start to write to them that I'm dead, so that Shabunka it was leaked then and she felt guilty. In general, the month started very hard, because then the September fuck-ups were still going on. I also played that game - Cube World, which disappointed me a bit because the developer decided to remove a lot of things and added unnecessary mechanics that spoil the game. In the end, someone leaked from my uni to my friends that I didn't die. In general, then, I only wanted to influence Shabunka and Myrza in this way. Went to a psychologist then, because it was hard to bear such emotionally and morally. We predicted for November) October 6 rough has already begun, and the fact that then Myrza and Ruslan wrote from fakes to my groupmates and threatened them and me to tell the truth, and so on. And on the seventh, while walking with Anya Shumova, which ended up being the worst with her. But it wasn't her fault. The thing is that through her I decided to write to my friends then. And then already I leaked my fake, I tried to explain everything, but they were very angry with me. And it was rough when I talked to them. And even Olya was worried then, and because of all this circus, we stopped communicating in the end, or rather, she did not want to. Yes, that's what happens when I get pissed in the head, because I deleted the page purely because of Shabunka and Myrza, and in the end other friends suffered as well. Ruslan even tried to kill himself before he found out it was all a fuck-up, it was horrible. On October 8, I felt very bad at night, but in the afternoon I kind of made up with Ruslan. But I was fighting with Myrza for a few more days, and the most rough thing was October 11, when we almost had a fight with him. And the day before that, on October 10, I went to the priest, or rather my godmother advised me to go there. But this day ended badly and in the evening I had a nervous breakdown because of something. And as soon as October 12 came, the month began to change for the better. If before this day it was terrible, then after it - good events and even great vibes started. On October 12 we had a very good walk with Petya, we hadn't had a walk for a month. We turned the switch and walked in Aviapark... I also decided to bring him to my gym at MAI, but he didn't like something there... And on October 13th - the first meeting with a fortune-teller! She told me that I really have some kind of evil eye on relationships, and then she already removed it from me, though I had to pay for it. She also said some things that you can't just guess. Like the fact that I could have a sister from my mom's last husband. But here she was saying that there would be a chance to reconcile with Shabunka in about a month or so. Alas, but here she ended up being wrong, but more on that later. Moreover, I then wanted to do a hex on Shabunka, but then changed my mind. And also that in 2 years I will get a lot of money. And here, did not miss, but not everything will be so rosy. October 14, I decided to meet Shabunka and make up with her. She did not want in any way, but I did not even upset then. After the fortune-teller there was still some unusual atmosphere and feeling, something like happiness. I ate at some restaurant in Metropolis. And after that, Myrza and I made up, but not for long. And in one of the classes he yelled "White-haired faggot", so I yelled and tried to cut the broadcast, and then it glitched and echoed. And on that day I saw a cute girl right next to that classroom. I tried to find her for a long time, but she was not there in a week or two. In general, the second half of October was quite good. Although, on October 16, when I restored the page, Shabunka blocked me. I think it was after my second page was leaked to her. I was also deleted from my friends by Olya and that Katya from Moldavia. I asked Olga to return it, and I decided not to write to Katya. But Olya and I almost never communicated after this incident. On October 17 I went to the fortune-teller once again and asked her some questions. And the curse or the evil eye were supposed to go away in about 40 days. I also ordered an amulet for good luck on October 20, which will be ready only by December. And finally, on October 18, I was able to pass that course on the OS! MirLonov this time did not even look at the report, put 3. Finally was free, but I still have an exam and a course on diskran. I spent the second half of October looking for that "Grey" girl. We called her so with friends, because she was blonde, and the teacher who was gray we called white-haired. October 21 - a good walk with Anya Shumova, we went to some museum, I don't remember well, but we had funny pictures. Only I didn't know that day that before the walk I'd fail the test on urmats. On October 23, I was looking for Grey haired, and in some classroom a teacher shouted at me and said "what do you want?". And also in one group there was a girl with a similar description, but pink hair. In the end, on October 25 and I like her, and already with her I will try to get acquainted, in early November. October 26 I had a bunch of ideas on how to improve Cube World, but I ended up drawing everything, but never sent it to reddit. On October 27 I turned the switch again, I don't remember why, maybe I was just asked. And then, on October 28, at the university I met a girl named Katya Rudenko, with whom I will often go out in May-June 2021. But then I didn't even have her contacts yet. I couldn't find the gray one, and I kept thinking, how can I meet a girl with pink hair? The end of October - as always Halloween, watched different movies. And get this, I got in a little fight with Anya Shumova. She had an accident, and I got a little bummed out. And Halloween went pretty well.`,
        song_rus: `https://www.youtube.com/embed/MzejcKAzEek?si=iTgZNn_HDYOs6fh3`, 
        song_en: `https://www.youtube.com/embed/MzejcKAzEek?si=iTgZNn_HDYOs6fh3`,
    },
    {
        id: 4,
        year: 2019,
        month: 11,
        text_rus: `Предпоследний месяц 2019 выдался крайне противоречивым у меня и неоднозначным. Но при этом, меня его начало порадовало. Еще 1 ноября мы с Мырзой играли вместе в одну смешную игру, и даже не думали, что скоро сильно поссоримся. А второго ноября я видел ту девушку с розовыми волосами, но боялся подойти к ней, потому что была лютая тревога, а потом сильно винил себя за это. Но зато тогда сдал целых две лабы. Ничего не потеряно, а Руслану я решил скинуть списки с ее факультета. В итоге он даже смог найти ее вк, но не стал мне палить, чтобы потом в универе я сам познакомился с ней. От Мырзы мы решили это скрыть и создали фейк с именем «Вероника Гаркуша», которое мы придумали (Вероника в честь той Вероники из 2015-2016, а Гаркуша в честь того мема из октября 2018), совершенно случайно. 5 ноября, ночью, Руслан отправил анаграму ее фамилии, и вот я в итоге сразу угадал ее. После этого он уже сам ей написал, чтобы со мной познакомилась, потому что ему этот цирк надоел. В итоге она мне написала и мы начали общаться. Это тян - Таня со 2 курса с 9 факультета, и вроде норм отвечала, вот только долго. А еще в этот же день, мы с Катей Руденко добавили друг друга в друзья, а 6 ноября уже встретил ее случайно и неплохо пообщались, она даже угостила меня. Начало ноября прошло так, что я переписывался с Катей и Таней, а также делал некоторые лабы. И вот близилось уже 9 ноября, когда мы с Саней Мурзагалиевым в итоге полностью разосрались и разругались. Потому что уже тогда меня это все достало. В итоге мы слили что-то его друзьям, а потом он нашел Катю и начал ее доебывать. Страницу Тани он не знал, он написал на тот фейк Вероники Гаркуши который мы создали для Сани, было забавно наблюдать за тем, что он писал туда тогда. 10 ноября с Таней обсуждали ситуацию с Мырзой и она даже назвала его долбаебом. А ночью 11 ноября случилось очень странное совпадение. Дело в том, что я смотрел списки и мне стало интересно, сколько у Тани было баллов. И вдруг я натыкаюсь там на имя «Вероника Гаркуша». ТО ЕСТЬ. Девушка с именем и фамилией, которые я рандомно придумал, реально существовала и реально училась на 2 курсе тогда!!! Я также поделился данной находкой с Таней спустя несколько дней. А вообще 11 ноября выдалось довольно классным днем. Для начала, я сдал комиссию по физике, за пару дней до этого писал тест по ней. А еще случайно встретил Таню в тот день, мы ехали на одном автобусе тогда и общались, довольно лампово. И вот, я решил сделать новую игру - Vector Incremental. Вот только ее вообще из группы никто не оценил. Одногруппник, которому понравилась та игра, которую я сделал чисто на отъебись сказал что эта игра дерьмо конское и змейка лучше. Поэтому я не был уверен в том, стоит ли продолжать делать ее и как вообще она пойдет. Общение с Таней хоть было и норм, но она подолгу игнорила часто и отвечала только через несколько часов, от чего было не очень удобно с ней переписываться. С Катей я уже тогда тоже общался, и она даже один раз решила меня нарисовать, но в итоге не закончила. Разбирался также с лабами и учился я в эти дни. А вот 17 ноября 2019 я погулял с Петей, в моем районе. Я тогда впервые попробовал мускатный орех, а Петя не мог его выпить, потому что вкус у него был специфический. Вообще его надо было высыпать в воду или газировку. Я высыпал в гетто и выпил. Эффект был ближе к вечеру, очень странно все ощущалось. Я много над чем тогда смеялся, а потом и вовсе мне пришли всякие странные мысли, например про войну двух государств на территории жопы Александра Мурзагалиева. Примерно полтора дня у меня был этот эффект. А я все надеялся на то, что смогу помириться с Шабунькой. Все же несмотря на то, что я общался тогда с двумя другими девочками, мне все еще нравилась Шабунька и я хотел с ней восстановить общение. 22 ноября я зашел в телеграм, и там Шабунька выложила новую фотку. На что я обратил наибольшее внимание - так на ее носик. Как раз с этого месяца и начались мои мысли по поводу носика Ани Шабуниной, что он очень маленький, милый, кошачий и женский, что очень хочется его погладить и подергать и что он очень няшный) Это даже дойдет до того, что на моем сайте и вообще компании, от лица которой я буду делать игры в логотипе будет нос, а называться она будет Nu Games. (Nu, потому что такой ник был у Шабуньки в телеграмме в какое-то время). Как и год назад, снова ходил в поликлиники для того, чтобы получить зачет по физ-ре. И вот 25 ноября выдался просто отвратительный день, который сильно испортил вроде бы неплохой до этого ноябрь. Во первых, я пересаживался на разные автобусы, чтобы встретить Шабуньку. И когда уже ее увидел, я пытался с ней помириться и шел чуть ли не до ее универа. Но она была непоколебима, и никак не хотела мириться, была в жесткой обиде из-за того случая с друзьями и придуманной смерти. Тогда сильная тоска нахлынула на меня, но это было не все говно, произошедшее со мной в этот день. Ведь до этого, еще ночью, я наконец доделал ту игру и опубликовал ее, вот только рейтинг ее в итоге потом стал довольно низким и игра не занимала никакого места за месяц. В итоге, уже 27 ноября я попросил ее удалить, и решил немного еще доделать ее и опубликовать ее позже. Вообще конец ноября выдался довольно плохим. За исключением 29 ноября, когда я возвращался с универа и у остановки увидел горячую жирную тянку в милых наушниках. Я застеснялся знакомиться с ней и думал, что она сильно младше. А через 3 года я про нее вспомню снова и мы дадим ей прозвище - Наушница.`,
        text_en: `The penultimate month of 2019 has been extremely contradictory and ambiguous for me. But at the same time, I was happy with its beginning. On November 1, Myrza and I were playing a funny game together, and I didn't even think that we would have a big fight soon. And on November 2nd I saw that girl with pink hair, but I was afraid to approach her, because I was so anxious, and then I blamed myself for it. But then I passed two whole labs. Nothing was lost, and I decided to send Ruslan the lists from her faculty. In the end, he was even able to find her vk, but he didn't tell me, so that later in the university I met her myself. We decided to hide it from Myrza and created a fake with the name "Veronika Garkusha", which we came up with (Veronika after that Veronika from 2015-2016, and Garkusha after that meme from October 2018), completely by accident. On November 5, at night, Ruslan sent anagram of her last name, and here I ended up guessing it right away. After that, he already wrote to her himself to meet me, because he was fed up with this circus. Eventually she wrote me and we started talking. This girl - Tanya from the 2nd course from the 9th faculty, and seemed to respond normally, but only for a long time. Also on the same day, Katya Rudenko and I added each other as friends, and on November 6 I met her by chance and had a good conversation, she even gave me a snack. The beginning of November passed so that I corresponded with Katya and Tanya, and also did some labs. And then November 9 was approaching, when Sania Murzagaliev and I ended up having a complete disagreement and fight. Because even then I was fed up with it all. We ended up leaking something to his friends, and then he found Katya and started fucking with her. He didn't know Tanya's page, he wrote on that Veronica Garkusha fake we created for Sanya, it was funny to see what he wrote there then. On November 10, we discussed the situation with Myrza with Tanya and she even called him a dickhead. And on the night of November 11, a very strange coincidence happened. The thing is that I was looking at the lists and I was wondering how many points Tanya had. And suddenly I come across the name "Veronica Garkusha". I MEAN. The girl with the name and surname, which I randomly came up with, really existed and really studied at the 2nd year then!!!! I also shared this discovery with Tanya a few days later. And in general, November 11 was a pretty cool day. For starters, I passed the physics commission, a couple days before I wrote a test on it. I also met Tanya that day by chance, we rode on the same bus then and talked, quite good vibe. So, I decided to make a new game - Vector Incremental. But nobody from the group appreciated it at all. A classmate, who liked the game I made purely for fuck's sake, said that this game was horseshit and snake was better. So I wasn't sure if I should continue making it and how it would go. Communication with Tanya was normal, but she ignored me for a long time and answered only after a few hours, from which it was not very convenient to correspond with her. I also communicated with Katya at that time, and she even decided to draw me once, but in the end she didn't finish. Dealing also with labs and studying I was doing these days. But on November 17, 2019, I went for a walk with Petya, in my neighborhood. I tried nutmeg for the first time then, and Petya couldn't drink it because the flavor was specific. You had to put it in water or soda. I put it in a ghetto (energy drink) and drank it. The effect was in the evening, it felt very strange. I laughed at a lot of things then, and then all sorts of strange thoughts came to me, for example about the war of two states on the territory of Alexander Murzagaliev's anus. For about a day and a half I had this effect. And I kept hoping that I could make peace with Shabunka. However, despite the fact that I was communicating with two other girls at that time, I still liked Shabunka and wanted to restore communication with her. On November 22, I went to Telegram, and there Shabunka posted a new picture. What I paid the most attention to was her nose. Just since this month my thoughts about Anya Shabunina's nose started, that it is very small, cute, feline and feminine, that I really want to stroke and twitch it and that it is very cute) It will even come to the point that on my site and in general the company, on behalf of which I will make games, will have a nose in the logo, and it will be called Nu Games. (Nu, because that was Shabunka's nickname in Telegram at some time). Like a year ago, I went to the clinics again to get my P.E. credit. And so November 25 was just a disgusting day, which greatly spoiled a seemingly good November before that. First of all, I changed buses to meet Shabunka. And when I saw her, I tried to make up with her and walked almost to her uni. But she was unshakable, and did not want to reconcile, was in a severe offense because of that incident with friends and invented death. I was very sad then, but that wasn't all the shit that happened to me that day. I had finally finished that game the night before and published it, except that its rating ended up being pretty low and it didn't rank at all for a month. In the end, on November 27th I asked to delete it and decided to finish it a bit more and publish it later. In general, the end of November was pretty bad. Except for November 29, when I was coming back from uni and saw a hot, thicc girl with cute headphones at the bus stop. I was shy to meet her and thought she was much younger. And in 3 years I will remember about her again and we will give her a nickname - Headphone Girl.`,
        song_rus: `https://www.youtube.com/embed/myatxR5udl4?si=8e4D_va_5kUOOdYK`,
        song_en: `https://www.youtube.com/embed/myatxR5udl4?si=8e4D_va_5kUOOdYK`,
    },
    {
        id: 5,
        year: 2019,
        month: 12,
        text_rus: `Хоть и первая неделя декабря выдалась у меня тяжелой и была в целом не очень, декабрь 2019 является одним из лучших месяцев в жизни у меня. Начался он у меня с очень необычной прогулки с Петей, в тот день он уже сам попробовал мускат, а еще мы лазили по какой-то заброшке, не далеко от его дома, чувствовалась мрачная, но при этом довольно клевая атмосфера. Еще собака лаяла, мы над ней шутили очень) В этот день я с Таней и еще одной подругой обсуждал ситуацию по поводу Шабуниной. И они обе сказали, зачем мне общаться с человеком, который тебя ни во что не ставит и так относится? А ведь, они правы. А еще в декабре 2019 снова я решил провести кубок мемов, уже по мемам 2019 года, было прикольно и отдельная беседа для этого))) А главным мемом декабря стала Фэмка - женщина феминистка которая выглядит как мужик) Именно 2 декабря я только узнал про то, что Шабуниной слили многие мои сообщения, 26 августа. Руслан в итоге все рассказал, и это было очень неожиданным тогда для меня поворотом. Руслану в то время понравилась моя однокурсница - Юля Пташинская, в итоге я потом их познакомил. 4 декабря очень странный день. Сначала я все же познакомился с девушкой одной на физ-ре, по имени Маша. Но контактами не успел обменяться, зато узнал, что она тоже ненавидит физику) Но странность дня была в другом. Дело в том, что тогда мы форсили один мем из 2015 года, который форсил Руслан в своей школе и писали людям оттуда. А потом на меня что-то нашло, что я вообще пытался помирить Руслана с его врагами и вообще чуть ли на их сторону не перешел, хз, что случилось тогда, что я чуть не предал друга. Самым плохим днем в декабре 2019 оказалось седьмое. Тогда была пересдача экзамена по дискрану, которую я завалил. А ночью, перед экзаменом, мы с друзьями сильно ржали со свиного пуза и «свинья для Петры». Вот тебе и свиное пузо. За пару дней до этого, сказали до какого-то дня сдать все, а то отчислят. И после завала у меня было дико ужасное настроение и желание сдохнуть потому что боялся того, что меня теперь отчислят. И вот, как только наступило 8 декабря, все начало меняться в лучшую сторону! Во первых, в этот день был готов амулет, я его забрал и через пару дней уже надевал его иногда. Во вторых про Шабуньку гадалка теперь сказала что шанс помириться будет к весне, но только если ей НИКТО не будет писать про меня до этого. Да и в целом тогда все казалось как-то лучше, я еще на Холодное Сердце 2 сходил и мне казалось, что у героинь носики как у Шабуньки няшные и маленькие) 9 декабря была сдача лаб по физике а еще случайно встретил Таню и мы немного пообщались. В итоге на комиссии дали еще время на сдачу долгов, уже это было хорошо. Машу я кстати больше не видел в универе, даже у преподовательницы спрашивал, она сказала, что она закрыла все долги. Хоть и страницу ее я в итоге сам нашел потом, добавляться к ней не решил, так как мы очень мало общались. К 14 декабря надо было снова готовиться к пересдаче экзамена по дискретному анализу. 13 декабря я заметил, что меня в чс добавила Ксюша Лямина и пришлось с этим разбираться. Оказалось, что еще из-за того, что ей Мырза кидал хуйню в сентябре, но потом он перед ней извинился и она меня убрала из чс, но общаться вообще перестали (хотя мы уже в этом году и не общались почти). Кстати, с Мырзой после месяца ссоры, когда мы друг друга еще и подставляли, все же как-то помирились, и в этом месяце общались более менее спокойно и адекватно с ним. А еще 13 декабря мне написал какой-то хач-гей который еще притворялся девушкой, очень сильно горело с него в этом месяце, что я потом его захуесосил в итоге, когда он меня окончательно достал. Также в этом месяце мы с Мырзой форсили одного другого гея-поэта Макса Чуякова (по кличке Параша), который сначала Мырзе писал, а потом мне с очень ебанутой манерой речи. Создавали и его фейк и ржали с него дико, хотя мем еще появился в октябре, а Мырзе он и вовсе в июле еще написал. И вот, 14 декабря выдалось замечательным днем!!! Я наконец пересдал дискран в этот день, а еще неплохо пообщался с однокурсниками и однокурсницами!!! Настроение было очень хорошим, после экзамена еще видел кошек в универе, представлял что это Шабунина и гладил их носы))))) А также общались с Зайцевым в тот день - тем преподом, который у меня был на 1 курсе. Теперь у меня оставался только курсач по дискрану, к которому я приступил сразу же на днях. Ходил на консультации того, как его делать, мне все нормально объяснили и я понимал, что нужно делать. Примерно 1 или 2 недели времени у меня ушло на него, параллельно сдавая всякие зачеты. 19 декабря 2019 я пошел в школу. Но в этот раз не в новую, где я учился в 11 классе, а в старую, где не был аж с 2016 года. Там пообщался с многими учителями, а еще от физика узнал, что препод который год назад у нас вел матан был близким другом самого физика из школы. С другими учителями тоже пообщался. И потом вдруг эвакуация, я вспомнил октябрь 2017, неужели опять это началось? Я увидел одну милую тян из 9 класса, которая мне понравилась тогда и мы часто смотрели друг на друга. Но не узнал даже, как ее зовут. На эвакуации особо не было времени общаться с учителями, так что после этого я пошел домой, но перед этим я купил новый гетто, который раньше не пил. И на следующий день, 20 декабря в универе снова эвакуация. Также в этот день решил с фейка поздравить одну девушку из старой школы, которая мне нравилась в 2012-2013 - Алину. Она в итоге ответила, но общаться мы уже начнем только в марте 2020. Как раз 21 декабря и была консультация по курсачу, а еще тогда я познакомился с одной девушкой с 1 курса по имени Аня. Она у меня попросила зарядку для компа, и моя ей так и не подошла в итоге, что не удивительно. Почему-то я сразу контакты у них не беру, потому что думаю, что мало знакомы. Но радовало меня то, что я уже хотя бы почаще стал действовать и знакомиться. 22 декабря довольно плохой день, потому что на каком-то сайте мне написали, что у меня уродская внешность и снова думал о пластике. Тогда еще с Петей погулять хотел, но и он не смог, в итоге я поехал в Авиапарк один, за сладостями для нового года. Но зато меня ждала хорошая новость - то, что Руслан прилетает в Москву! И вот уже 23 декабря мы с ним погуляли и уже он попробовал мускатный орех после того, как я рассказал про него. Прогулка хоть была и так себе, но зато очень веселой, Руслан очень смешно вел себя под орехом и выдирал корни представляя что это волосы на жопе Мырзы))) Прогулка хоть и хорошей была, только вот Руслан не очень себя чувствовал после этого ореха и даже в кровати блевал потом, уже после прогулки. 25 декабря был зачет по твимс, но я не был готов, сдавал его уже в другой день. Зато еще с одной однокурсницей пообщался тогда - Юлей, но другой, которой Руслан потом тоже написал, но уже в январе. Кстати с Пташинской у Руслана в итоге все плохо закончилось, когда Руслан ее позвал гулять, она написала что у нее парень и времени нет на прогулки с Русом. 27 я все же сдал зачет по твимс, хотя и боялся, что не сдам и атмосфера была мрачной + меня тогда все игнорили. В итоге вообще могла быть даже 4, если бы не пара глупых ошибок, а так 3 вышла. 28 декабря я наконец сдал курсач по дискрану!!! И все, был свободен от долгов. Вообще день классный тогда выдался, потому что еще и пообщался с девушкой, которая была похожа на Седую (вряд ли она конечно) со 2 курса, которую ТОЖЕ Юлей звали!!! А еще с некоторыми другими ребятами со 2 курса, а еще с преподом по поводу нейросетей общаться интересно было. Заказал еще сладостей на НГ. 29 декабря крутая прогулка с Петей и Русланом, захуесосили того хача-гея который мне писал постоянно. А потом дико ржали с вонючей семейки (Путилычей))) и вообще очень весело было, а также мы с Русланом акками обменялись тогда, я мог видеть что он писал, а он что я. И тогда я уже увидел все, что слили Шабуньке 26 августа, правда, от этого настроение немного подпортилось. Самым лучшим днем 2019 года оказался последний день перед новым годом - 31 декабря!!! Встретили мы все Новый Год 2020 просто замечательно! И как раз 31 декабря мы решили погулять втроем, как раз перед новым годом. Сначала мы встретились только с Русланом, Петя спал. Поэтому потом уже к нему пошли будить его. Далее, мы втроем гуляли. Петя решил на днях купить снюс корвус, и в этот день мы его впервые попробовали. В первый раз очень мощный эффект от него был, необычное чувство похолодания в теле и адреналина, а также было очень весело и смешно. На самом деле снюс это просто никотин в пакетиках - альтернатива курению и вейпу, но с большей концентрацией никотина и зависимость от него не такая сильная, можно просто кидать раз в 3 дня, как я в итоге и подсяду, но уже в следующем году. А так вообще казалось, что на весь день эффект был, мы пошли к авиапарку. Там были горячие девушки 2006 года рождения, на парковке, которые курили сигареты. Руслан решил к ним подойти и по приколу расспрашивать их про синкретизм мифологической мысли, было вообще весело, а они спросили -что вы ему в колу подмешали? Потом мы уже пошли в сам Авиапарк, там тоже было весело, но вот очереди в Ашане были безумными. Я решил в этот день многих знакомых и друзей поздравить с наступающим новым годом, даже Шабунину. И в итоге Шабунька даже ответила мне потом. После прогулки, мы пошли в гости к Руслану, где тоже довольно лампово было. Попробовали тогда чифирь, его сделать нам решил Руслан, но я особо эффекта от него тогда не почувствовал, мб потому что он был некрепким, а мб потому что мало выпили. Там еще был парень Артем, которому было 19 лет и с которым обсуждали игры. Снова же играли в игру про Куракова и записали голосовую Романову - «поздравление» с новым годом его) До дома меня уже довез потом батя Пети, в машине я снова закинулся снюсом, немного тошнило, потому что держал долго, но было прикольно)0)). Этот новый год у меня прошел просто замечательно, и это был лучшее 31 декабря в моей жизни! Не удивительно и то, что новый 2020 год начался так же лампово, как и 2014, а может даже еще лучше! И да, перед новым годом, я даже поздравил ту Алину, но как я и писал раньше, общение с ней уже будет только в марте. Вот такой вот классный декабрь выдался, что в итоге он оказался даже лучше, чем декабрь 2015-ого.`,
        text_en: `Even though the first week of December was hard for me and was not very good in general, December 2019 is one of the best months of my life. It started with a very unusual walk with Petya, that day he had already tasted muscat and we were climbing in some abandoned place, not far from his house, it felt gloomy but still pretty cool. Also the dog was barking, we were joking about it very much) That day I was discussing with Tanya and another friend about Shabunina. And they both said, why should I communicate with a person who does not put you in anything and treats you like that? And they're right. And also in December 2019 again I decided to hold a meme cup, already on the memes of 2019, it was fun and a separate conversation for this))))) And the main meme of December was Femka - a feminist woman who looks like a man) It was on December 2 that I just found out about Shabunina got leaked many of my posts on August 26. Ruslan ended up telling me everything and it was a very unexpected turn for me at the time. Ruslan liked my course mate at the time, Yulia Ptashinskaya, and I ended up introducing them later. December 4 was a very strange day. At first I met a girl at the gym, named Masha. But I didn't manage to exchange contacts, but I found out that she also hates physics) But the strangeness of the day was in another way. The thing is that we were forcing a meme from 2015, which Ruslan was forcing in his school, and wrote to people from there. And then something came over me that I actually tried to make up Ruslan with his enemies and almost went over to their side in general, huzzah what happened then that I almost betrayed my friend. The worst day in December 2019 was the seventh. That was when there was a retake of the discrana exam, which I failed. And the night before the exam, my friends and I had a big laugh with pork belly and "pig for Petra". So much for the pig belly. A couple days before, they told me to turn everything in by some day or they'd expel me. And after the failure I had a wildly terrible mood and a desire to die because I was afraid that I was now expelled. And as soon as December 8 came, everything began to change for the better! First of all, this day was ready amulet, I took it and in a couple days already put it on sometimes. In the second about Shabunka fortune-teller now said that the chance to reconcile will be by spring, but only if NOBODY will write her about me before that. Yes, and in general then everything seemed somehow better, I still on Cold Heart 2 went and I thought that the heroines have noses like Shabunka nanny and small) December 9 was the passing of labs on physics and also accidentally met Tanya and we had a little chat. As a result, the commission gave more time to pass debts, already it was good. By the way, I haven't seen Masha in the university anymore, even the teacher asked, she said that she closed all the debts. Though I found her page later, I didn't decide to add to it, as we didn't communicate much. By December 14, I had to get ready to retake the exam on discrete analysis. On December 13, I noticed that I was blocked by Ksyusha Lyamina and had to deal with it. It turned out that still because of the fact that Myrza threw her a dick in September, but then he apologized to her and she removed me from block list, but we stopped communicating altogether (although we have already this year and did not communicate almost). By the way, with Myrza after a month of quarrels, when we still set each other up, still somehow made up, and this month communicated more or less calmly and adequately with him. And also on December 13, I wrote some ciapaty gay who was still pretending to be a girl, very much on fire with him this month, that I then him fucked up in the end, when he finally got me. Also this month Myrza and I were forcing one other gay poet Max Chuyakov (nicknamed Parasha), who first wrote to Myrza and then to me with a very fucked up manner of speech. We created his fake and laughed wildly with it, although the meme appeared in October, and he wrote to Myrza in July. And now, December 14 was a great day!!! I finally retook the test on that day, and also had a good chat with my coursemates!!!! The mood was very good, after the exam I saw cats in the university, imagined that it was Shabunina and stroked their noses))))). And also communicated with Zaitsev that day - the teacher I had in the 1st year. Now all I had left to do was a coursework on Diskran, which I started right away the other day. Went to counseling on how to do it, everything was explained to me normally and I understood what I needed to do. It took me about 1 or 2 weeks of time to do it, while taking all sorts of credits in parallel. December 19, 2019 I went to school. But this time not to the new one, where I studied in the 11th grade, but to the old one, where I had not been since 2016. There I talked to many teachers, and also from a physicist I learned that the teacher who was teaching math a year ago was a close friend of the physicist from the school. I talked to the other teachers too. And then suddenly the evacuation, I remembered October 2017, is it starting again? I saw this cute girl from 9th grade that I liked back then and we looked at each other a lot. But didn't even recognize her name. At the evacuation there wasn't much time to communicate with teachers, so after that I went home, but before that I bought a new ghetto, which I hadn't drunk before. And the next day, December 20 in the uni again evacuation. Also on this day I decided from fake to greet one girl from my old school that I liked in 2012-2013 - Alina, it was her birthday. She eventually replied, but we will start communicating only in March 2020. Just on December 21 was the course consultation, and also then I met a girl from the 1st course named Anya. She asked me for a computer charger, and mine didn't fit her in the end, which is not surprising. For some reason I don't take contacts from them right away, because I think they don't know each other very well. But I was glad that I already at least started to act and get acquainted more often. December 22 is a bad day, because on some site I wrote that I have an ugly face and again I thought about plastic surgery. Then I wanted to go out with Petya, but he couldn't, so I went to Aviapark alone to buy sweets for the new year. But I got good news - Ruslan was coming to Moscow! And on December 23 we went for a walk with him and he tried nutmeg after I told him about it. Although the walk was so bad, but it was very funny, Ruslan behaved very funny under the nut and pulled out the roots imagining that it was hair on Myrza's anus))). The walk was good, but Ruslan didn't feel very good after the nut and even vomited in bed after the walk. On December 25th there was a test on tweems, but I was not ready, so I took it on another day. But I communicated with one more classmate at that time - Yulia, but another one, to whom Ruslan also wrote later, but already in January. By the way, Ruslan's relationship with Ptashinskaya ended badly in the end, when Ruslan asked her to go out, she wrote that she had a boyfriend and had no time to go out with Rus. 27 I still passed the test on tweems, although I was afraid that I wouldn't pass and the atmosphere was gloomy + everyone ignored me then. In the end it could have been even a B, if it wasn't for a couple of stupid mistakes, but so I got a C. December 28, I finally passed the coursework on diskran!!! And that's it, I was free from debts. In general, the day was cool then, because I also talked to a girl who was similar to Gray (unlikely to be her, of course) from the 2nd year, who was also called Julia!!! And also with some other guys from the 2nd course, and also with the professor about neural networks it was interesting to communicate. Ordered more sweets for New Year. December 29, a cool walk with Petya and Ruslan, fucked that gay hacha who wrote to me all the time. And then wildly laughed with the stinking family (Putilycha)) and in general was very fun, and also Ruslan and I exchanged accounts then, I could see what he wrote, and he that I. And then I already saw everything that was leaked to Shabunka on August 26, however, from that the mood was a little spoiled. The best day of 2019 turned out to be the last day before the new year - December 31!!! We all had a wonderful New Year's Eve 2020! And just on December 31, we decided to go out for a threesome just before the new year. At first we met only Ruslan, Petya was sleeping. So then we went to him to wake him up. Then the three of us went for a walk. Petya decided to buy some Corvus snus the other day, and that day we tried it for the first time. The first time it had a very powerful effect, an unusual feeling of coldness in the body and adrenaline, and it was very fun and funny. Actually snus is just nicotine in packets - an alternative to smoking and vape, but with a higher concentration of nicotine and dependence on it is not so strong, you can just throw once every 3 days, as I will eventually get addicted, but next year. And so in general it seemed like there was an all day effect, we went to the Aviapark. There were some hot girls born in 2006 in the parking lot smoking cigarettes. Ruslan decided to approach them and ask them about syncretism of mythological thought, it was fun, and they asked - what did you put in his coke? Then we went to Aviapark itself, it was fun there too, but the queues in Auchan were crazy. I decided that day to congratulate many acquaintances and friends on the coming new year, even Shabunina. And as a result, Shabuninka even replied to me afterwards. After the walk, we went to visit Ruslan, where it was also pretty good vibe. We tried chifir, Ruslan decided to make it for us, but I didn't feel much effect from it, maybe because it was not strong, or maybe because we didn't drink enough. There was also a guy Artem, who was 19 years old, with whom we discussed games. Again we played the game about Kurakov and recorded a voicemail to Romanov- "congratulations" on the new year to him) I was already driven home by Petya's father, in the car I took snus again, a little nauseous, because I held it for a long time, but it was fun)0)))). This New Year's Eve went just fine for me, and it was the best December 31st of my life! It's also no surprise that the new year 2020 started off just as good vibe as 2014, maybe even better! And yes, before the new year, I even congratulated that Alina, but as I wrote before, communication with her will be only in March. It was such a great December that in the end it was even better than December 2015.`,
        song_rus: `https://www.youtube.com/embed/NBKULIJvyzo?si=y9mpJzVRPQC4hq7o`,
        song_en: `https://www.youtube.com/embed/NBKULIJvyzo?si=y9mpJzVRPQC4hq7o`,
    },
    {
        id: 6,
        year: 2020,
        month: 1,
        text_rus: `Первый месяц 2020 не оказался гладким, как бы этого хотелось. Хоть и 1 января мы снова погуляли, уже даже вчетвером - с нами был один друг Руслана, которого звали Гоша. С ним я в итоге тоже буду общаться и иногда он будет с нами на прогулках, но довольно редко. Так вот, январь 2020 был месяцем снюса для меня, да и вообще весь 2020 год - годом снюса, как я думаю. Потому что в январе я кидал тот корвус каждые 2-3 дня и очень прикольные ощущения были от него, даже запах такой необычный, мне он нравился. Но как раз из-за снюса, прям 1 января 2020 я блеванул в метро, я его передержал слишком долго, 15 или 20 минут, а вообще больше 5-10 нельзя, да и тем более в метро или транспорте. Хоть январь начался и довольно хорошо, да еще и было до сих пор приятное впечатление после 31 декабря 2019, позже в этом месяце уже было много негативных моментов и событий. Иногда ссорился с родителями, заметил, что одна однокурсница меня просто так в чс кинула, хотя мы даже не общались с ней - и это скорее всего из-за моей внешности, чтобы всякие уроды внешне не писали ей, от чего, настроение иногда тоже было хуевым. А еще я хотел найти одну тян по имени Настя, с которой я общался когда был в 4 классе, а она в 1. А потом нашел Турчанку и думал, что это она, но с ней очень жесткий пиздец произойдет уже позже. Вообще, январь 2020 это месяц, когда я серьезно задумался о своей внешности и о пластике, что она мне необходима. Еще тогда я часто сидел на дваче, почти каждый день заходил туда и ныл по поводу внешности. Хоть некоторые и писали, что я норм выгляжу, но было много ответов, что мне пластика просто необходима, а еще был какой-то сайт с оценкой внешности, где мою внешность плохо оценили. Основная моя проблема была именно с дистальным прикусом - и мне нужны брекеты, а потом возможно придется делать и операцию на челюсть. А еще я с этого месяца пробовал мьюинг и примерно около года так держал язык, но в итоге я пойму, что это хуйня и не помогает никак. 7 января 2020 была ссора с родителями, зато вечером через беседу моего района я познакомился с одной девушкой, которая раньше училась со мной в одной школе (в старой), но была лет на 6 младше - с Арианой. Но она оказалась довольно хорошей тянкой и общение с ней приятным было, до сих пор иногда списываемся. А еще я тогда в ванной снюс кидал и ловил кайф от него) Часто спал в этом месяце, уставал, да еще и сессия снова. Но в этот раз уже нагрузка не такая большая. К 12 января я сделал курсач по базам данных, получилось довольно хорошо, но я всю ночь тогда не спал. А под утро и вовсе на дваче наткнулся на смешную картинку, где к свинье и ее рту прифотошопили язык и письку, дико проорал с этого, на всю квартиру наверное))))) А курсач успешно сдал я на 5! Потом зашел в гости к Пете с компом, там мы поиграли во всякие игры. В январе 2020 я смотрел различные аниме, например я точно помню, что смотрел САО. 14 января я сходил в школу к классной. Середина января как-то не особо запомнилась. Только 17 января поздравил Турчанку с др и подарил ей стикеры с фейка. А вот у Руслана январь 2020 оказался очень веселым месяцем))) Он тогда с 7 по 18 января был в диком запое и каждый день бухал водку и записывал всякие смешные голосовые в беседу или в лс, иногда с моего акка даже Мырзе или Псковке писал) И вот уже 18 января, когда у Руслана был пик того, когда он набухался очень сильно, я сдавал экзамен по базам данных. В итоге, сдал его я на 4, вот только очень сильно пригорело с одного задания. Дело в том, что там данные выдаются реальных студентов, а мне выпала та девка, которая меня в чс кинула по причине моей внешности, и даже делать это задание не очень хотелось из-за этого. Хоть и многие предметы в сессии я сдал нормально, у меня все же были проблемы с физикой, которую у меня не получалось сдать, а также с некоторыми другими предметами вроде, поэтому стипендии у меня снова не было. Отвратительный день был 20 января - и это была худшая прогулка с Петей за все время. Во первых ночью я сильно переживал из-за одного треда. Во вторых в этот день произошло куча обломов - один за другим. Например, я хотел в Таиланд в феврале, но не было ни денег, ни времени + еще и загранпаспорта у нас с мамой заканчивались в июле или августе, а там минимум за полгода должно быть или даже за год. Петю тоже в этот день пришлось ждать долго. AirPods Pro которые я хотел не поддерживали мой старый телефон, а потом еще с родителями дико поссорился по телефону, когда хотел обычные AirPods, из-за того, что опять денег не было. Да и вообще весь этот день отвратительное настроение было, а прогулка была хоть и с Петей, но с ним тогда еще был батя. А в итоге, я прям в тц психанул и стал там резать руку какой-то штукой у кассы, которой заматывали колонку, когда Отажон (отец Пети) покупал ее. Чуть позже стало лучше, а вечером помирился с родителями и уже на следующий день все же мне заказали беспроводные наушники AirPods, или как мы их называли с друзьями - ыырпыдсы. Которые я получил уже 22 января, как подарок себе на новый год. В конце месяца я вспомнил про ту игру Vector Incremental, которая в конце ноября провалилась, и в итоге я стал ее доделывать, чтобы в феврале уже ее опубликовать. 24 января был последний экзамен, по которому у меня уже была 5 автоматом, и вот все, сессия закончилась. Основные проблемы у меня были с физикой… И тогда даже был небольшой шанс на то, что в конце апреля все же получится полететь в Таиланд, но никто не знал, что начнется пандемия. 25 января была веселая бухая прогулка с Петей в честь дня студента) Конец января уже был более спокойным, а 30 января очередная прогулка с Петей. Хоть она и выдалась довольно хорошей и прикольной, нас из магазина техники выгнал один очень наглый охранник за то, что мы там пытались на компьютерах с разной производительностью протестировать мою игру. После чего, мы со многих аккаунтов на этот магазин поставили ужасные отзывы и 1 звезду. А вот последний день января выдался дерьмовым. Во первых какой-то урод на дваче попался и кинул репорт на один мой тред за то, что там было мое фото. А во вторых, снова поссорился с родителями.`,
        text_en: `The first month of 2020 was not as smooth as I would have liked it to be. Even though on January 1, we went out again, even as a foursome - Ruslan's friend, whose name was Gosha, was with us. I would eventually communicate with him too, and sometimes he would be with us on walks, but quite rarely. So, January 2020 was a snus month for me, and indeed the whole of 2020 was a snus year I think. Because in January I was throwing that corvus every 2-3 days and it felt really cool, even the smell was so unusual, I liked it. But just because of the snus, right on January 1, 2020 I vomited in the subway, I kept it too long, 15 or 20 minutes, and in general more than 5-10 is not allowed, and even more so in the subway or transportation. Although January started off pretty well, and there was still a good impression after December 31, 2019, later in the month there were already a lot of negative moments and events. Sometimes quarreled with my parents, I noticed that one female coursemate threw me in blocklist just like that, although we didn't even communicate with her - and it's most likely because of my facial appearance, so that all sorts of ugly guys wouldn't write to her, from what, my mood was also fucked up sometimes. I also wanted to find a girl named Nastya, who I talked to when I was in 4th grade and she was in 1st. And then I found Turchanka and thought it was her, but she was going to get really fucked up later. In general, January 2020 is the month when I seriously thought about my looks and plastic surgery, that I needed it. Even then I often sat on 2ch, almost every day I went there and whined about my appearance. Even though some people wrote that I looked normal, there were a lot of answers that I needed plastic surgery, and there was also some site with the evaluation of appearance, where my appearance was poorly evaluated. My main problem was specifically with my distal bite - and I need braces, and then I may have to have jaw surgery as well. Also, I've been trying mewing since this month and I've been holding my tongue like that for about a year, but eventually I'll realize it's fucked up and doesn't help in any way. January 7, 2020 I had a fight with my parents, but in the evening through my neighborhood conversation I met a girl who used to go to the same school with me (old school) but was about 6 years younger - Ariana. But she turned out to be a pretty good girl and communication with her was pleasant, we still write to each other sometimes. I also threw snus in the bathtub and got high from it) I slept a lot this month, I was tired, and I had a session again. But this time the load is not so big. By January 12, I did a course on databases, it turned out pretty well, but I did not sleep all night then. And in the morning I came across a funny picture on 2ch, where a pig and its mouth were photoshopped with a tongue and a dick, I yelled wildly with it, for the whole apartment, probably))))). I successfully passed the course with a A! Then I went to visit Petya with a computer, where we played all sorts of games. In January 2020 I watched various anime, for example I remember that I watched SAO. On January 14, I went to school to my classmate. The middle of January was not really memorable. Only on January 17 I congratulated Turchanka on her birthday and gave her stickers from my fake. But Ruslan's January 2020 turned out to be a very fun month))))) He was in a wild drunkenness from January 7 to January 18, and every day he drank vodka and recorded all sorts of funny voices in conversation or in lis, sometimes from my account even wrote to Myrza or Pskovka) And on January 18, when Ruslan had a peak when he was drunk very much, I took the exam on databases. In the end, I passed it on B, but only very much got angry from one task. The thing is that there the data are given to real students, and I got a name of the girl who blocked me because of my ugly face, and even to do this task is not very much wanted because of this. Though I passed many subjects in the session fine, I still had problems with physics which I couldn't pass and some other subjects like that, so I didn't have the scholarship again. The disgusting day was January 20 - and it was the worst outing with Petya ever. In the first place, I had a lot of anxiety at night because of one one thread about a professor. Secondly a bunch of bummer things happened on that day - one after another. For example, I wanted to go to Thailand in February, but there was neither money nor time + also my mom and I had passports expire in July or August, and there should be at least six months or even a year in advance. Petya also had to wait for a long time on that day. AirPods Pro that I wanted did not support my old phone, and then I had a wild fight with my parents on the phone when I wanted regular AirPods, because again there was no money. Yes, and in general, the whole day was a disgusting mood, and the walk was even though with Petya, but with him then was still with my father. And in the end, I freaked out right in the shopping center and started to cut my hand with some thing at the cash register, which was used to wrap the speaker when Otajon (Petya's father) was buying it. A little later it got better, and in the evening I made up with my parents and the next day I ordered wireless headphones AirPods, or as we called them with friends - yyrpyds. Which I received already on January 22, as a gift to myself for the new year. At the end of the month I remembered about that game Vector Incremental, which failed at the end of November, and in the end I started to finish it so that I could publish it in February. On January 24th was the last exam, for which I already had a "A", and that was it, the session was over. The main problems I had were with physics... And then there was even a small chance that at the end of April I would be able to fly to Thailand, but no one knew that the pandemic would start. January 25 was a fun boozy walk with Petya in honor of the student's day) The end of January was already more calm, and January 30 another walk with Petya. Although it was pretty good and fun, we were kicked out of the hardware store by a very brazen security guard for the fact that we tried to test my game on computers with different performance. After that, we put terrible reviews and 1 star on that store from many accounts. But the last day of January was a shitty day. First of all, some asshole on 2ch got caught and threw a report on one of my threads for having my photo there. And secondly, I had another fight with my parents.`,
        song_rus: `https://www.youtube.com/embed/WD2IY3TWc94?si=i9uIeBz69IRoQsfO`,
        song_en: `https://www.youtube.com/embed/WD2IY3TWc94?si=i9uIeBz69IRoQsfO`,
    },
    {
        id: 7,
        year: 2020,
        month: 2,
        text_rus: `Довольно неприятным и гадким месяцем выдался для меня февраль 2020. Он не был слишком плохим, но все же не очень хочется вспоминать о нем. Да и не удивительно, ведь февраль почти всегда проходит плохо у меня. А для Пети так и вовсе этот месяц оказался переломным - тот самый месяц, когда его кинула семья, постоянно врала - месяц, когда он стал жить в изоляции от всей семьи. И когда его самые родные люди обманывали из-за того, что в прошлом были кое-какие ошибки у него. Сюда, я лучше, про это не буду писать. Начался февраль у меня с того, что решил зафорсить мем на дваче из одной игры, а в итоге меня зарепортили и забанили на день за «рекламу». Потом я уже и доделал свою игру, и как она в самом начале пошла - просто довело меня до истерики, ибо была ситуация как со вторым идлбайтом по началу. У меня был лютый срыв и я начал наносить самоповреждения из-за этого. Хоть и спустя время рейтинг и вырос и стал более менее нормальным, он все равно оставался довольно низким - около 3.4-3.5. Но зато в этом месяце я познакомился с дискордом и сделал свой канал там для игр. В то время, там активность была еще высокая и было прикольно общаться с игроками. Как раз это и было 4 февраля - в лучший день в данном месяце. А еще тогда мы с Петей классно погуляли в авиапарке. В икее тогда было особенно лампово. А на следующий день мы в беседе смеялись со слова «мишка») Рили оно какое-то ебанутое, будто решили оставить пасхалку в русском языке. Кстати, теперь уже новый комп у меня сломался, была проблема с крышкой, и его в начале февраля, после того как я доделал игру, повезли в ремонт. Ну вообще по началу месяц был еще более менее норм, хотя я все еще довольно часто на двач заходил и всякие треды там делал. Каникулы после сессии закончились 10 февраля и начались пары. Это был уже 6 семестр, и снова же, как и обычно в начале семестра было интересно на новых предметах. Снюс кстати хранился у Пети, но после прогулок я брал несколько паков и уже дома у себя их в ванной обычно кидал. К концу февраля тот корвус закончился, но мне хотелось еще иногда расслабляться. 11 февраля был дерьмовый день, похожий на 20 января. Снова одни обломы, да и вообще тогда сказали что комп больше месяца ремонтировать будут. А помимо этого, у меня с одной игры тогда бомбило. А вообще весь день была плохая атмосфера и ужасные мысли. 12 февраля я поздравил с др одну знакомую Софу и подарил ей стикеры. Я с ней хоть даже и не общался, она ответила мне очень хорошо, странно то, что я с ней дальше не продолжил тогда общение. В феврале, как и весь январь я думал и мечтал о пластике и о том, чтобы исправить свое лицо хирургически. Были лютые загоны из-за этого. 15 февраля с одним однокурсником обсуждали нейросеть, над которой он работал, было довольно интересно с ним общаться. Но как раз с этого дня и пошли основные февральские пиздецы. Я создал на дваче тред про нос шабуниной, и туда написал очень токсичный чел, который меня хуесосил и жестко оскорблял. У меня тогда сильно бомбануло, в итоге я и вовсе разошелся и хотел его позвать на стрелку, назначил ему встретиться около азбуки вкуса в крылатском, чтобы на следующий день уже с ним поговорить в реальной жизни, и если он начнет сам лезть в драку или как-то так же сильно оскорблять, уже тогда я бы на него набросился и стал бы драться с ним. На всякий случай я даже взял Петю, чтобы он тогда мне помог и залил бы его перцем. Но тот чел в итоге не пришел, мы на следующий день как раз с Петей там гуляли, а мне снова моча в голову ебнула и я сделал тред о том, что тот чел испугался встречи не пришел. Были немного негативные последствия для меня после этого, но не от самого треда. Хоть меня и сдеанонили и писали всякую хуйню и мне и друзьям, мне было похуй. А вот не похуй было, когда мне написал чел, который вообще выдал себя тянкой и уже ему удалось даже в доверие втереться не только мне, но и Пете. Дело в том, что я рассказал ему про Шабунину, но я просто переслал сообщения, которые я пересылал Тане. В итоге он меня потом подставил и от моего лица ей всякую хуйню стал писать. У меня больше пригорело даже от того, что сама Таня тогда не написала мне, что ей пишут от моего лица, а поверила во всю эту хуйню и на следующий день, уже 17 февраля пришлось разбираться с ней. В итоге я объяснил, что меня подставили. В итоге и у меня желание общаться с Таней пропало из-за того, что она сразу после этой херни мне не написала, и у Тани скорее всего после всей этой ситуации. Поэтому тогда мы перестали общаться, хоть и в друзьях были друг у друга. Но на этом плохое не закончилось. 18 февраля также выдался отвратительным днем. Мы тогда с Петей хотели повернуть рубильник, но там очень наглая женщина на машине нас не пускала, а потом и вовсе выебываться начала. Пришлось долго ждать, в итоге рубильник мы повернули, но лучше не стало. Я хотел в этот день спросить у однокурсника про то, как он смог устроиться в Яндекс. В итоге он меня и вовсе троллить начал и говорить, что у него договор о неразглашении. Я тогда подумал, что он издевается надо мной и стебет так, и от этого еще сильнее настроение упало. Но спустя три с небольшим года, я уже пойму, что видимо он не шутил про NDA. Спустя несколько дней после этого уже Петя один повернул рубильник снова. В этом феврале постоянно что-то ломалось, долго приходили деньги, не мог покраситься. А в итоге, когда еще и покрасился, меня покрасили некрасиво, да еще и денег содрали больше намного, чем должны были. Под конец февраля уже пошли более менее нормальные дни. Но ничего особенного в них не было. 25 февраля я вообще видел Шабуньку или девушку похожую на нее в автобусе и жестко умилялся с того, какой милый носик у нее был))) А еще примерно в то время я залип в одну игру и решил разработчику написать, тк хотел сделать вторую часть. Но 28 февраля, когда я кинул видео с той игры, которую я делал по мотиву игры разработчика, ОН ВЗЯЛ МЕНЯ СУКА И ЗАБАНИЛ НА ЭТОМ КАНАЛЕ. В итоге я его послал нахуй и вообще переименовал игру и убрал его авторство совсем. А игра вообще выйдет только через 1.5 года, и то не на конгрегейт и вообще недоделана так и будет. Но последний день - 29 февраля, который бывает раз в 4 года выдался необычайно хорошим. Я тогда познакомился еще с одной однокурсницей и мы вместе готовились к пересдаче одного экзамена, а потом собрали еще компанию и обсуждали вместе всякие задания. В итоге все хорошо получилось, мне удалось пересдать этот экзамен на 3! И даже почти 4 у меня выходила, хотя он и был довольно сложным. И уже близился очень необычный март 2020-ого. Но именно в нем и начнется глобальное плохое событие - пандемия коронавируса.`,
        text_en: `February 2020 was a rather unpleasant and nasty month for me. It wasn't too bad, but I still don't really want to remember it. No wonder, because February is almost always bad for me. And for Petya this month turned out to be a turning point - the very month when he was abandoned by his family, constantly lied to - the month when he began to live in isolation from the whole family. And when his closest people deceived him because he had some mistakes in the past. I'd rather not write about that here. I started February with the fact that I decided to form a meme on the 2ch from one game, and in the end I was reported and banned for a day for "advertising". Then I already finished my game, and how it went in the beginning - just drove me to hysterics, for there was a situation like with the second idlebyte at first. I had a luteous nervious breakdown and started self-harming because of it. Even though after a while my rating increased and became more or less normal, it was still quite low - about 3.4-3.5. But this month I got to know Discord and made my own channel there for games. At that time, the activity there was still high and it was fun to chat with players. It was February 4 - the best day of the month. At that time Petya and I also had a great walk in the Aviapark. Ikea was especially good vibe then. And the next day we laughed in conversation with the word "mishka") Really it is some fucked up, as if they decided to leave a Easter egg in the Russian language. By the way, now I have a new computer broke, there was a problem with the lid, and it in early February, after I finished the game, was taken to repair. Well, in general, at first the month was still more or less normal, although I still quite often on 2ch went to 2ch and all sorts of tracks there did. Vacation after the session ended on February 10, and the pairs began. It was already the 6th semester, and again, as usual at the beginning of the semester was interesting in new subjects. Snus by the way was kept at Petya's place, but after walks I took some packs and usually threw them in the bathroom at home. By the end of February that corvus was over, but I still wanted to relax sometimes. February 11 was a shitty day, similar to January 20. Again only failures, and in general, then they said that the comp will be repaired for more than a month. And on top of that, I had one game that made me angry. In general, the whole day was a bad atmosphere and terrible thoughts. On February 12, I congratulated one of my friends Sophia on her birthday and gave her stickers. I didn't even communicate with her, but she answered me very well, it's strange that I didn't continue communicating with her. In February, as well as the whole January, I thought and dreamed about plastic surgery and about fixing my face surgically. There were fierce fights about it. On February 15 with a classmate we discussed a neural network he was working on, it was quite interesting to talk to him. But that's when the major February fuck-ups started. I created a thread on 2ch about shabunina's nose, and a very toxic person wrote there, cocksucking me and insulting me harshly. I was really bombed then, and eventually I got really angry and wanted to call him to a fight, I set him up to meet near the Azbuka Vkusa in Krylatskoe, so that the next day I could talk to him in real life, and if he started to get into a fight or insult me in the same way, I would jump on him and fight with him. Just in case, I even took Petya to help me and pepper sprayed him. But that guy didn't show up in the end, the next day we were out there with Petya, and I got another piss in my head and made a thread about how that guy was scared of the meeting and didn't show up. There were a little negative consequences for me after that, but not from the track itself. Even though I got deanoned and wrote all kinds of fucked up shit to me and my friends, I didn't give a fuck. But I didn't give a fuck when a guy wrote to me, who pretended to be a girl and managed to gain the trust of not only me, but also Petya. The thing is that I told him about Shabunina, but I just forwarded the messages that I forwarded to Tanya. He ended up setting me up and writing shit to her on my behalf. I was even more burned by the fact that Tanya herself did not write to me that she was being written on my behalf, but believed in all this bullshit and the next day, on February 17, I had to deal with her. In the end I explained that I was set up. In the end, I lost the desire to communicate with Tanya because she did not write to me immediately after this shit, and Tanya probably after the whole situation. So then we stopped communicating, even though we were each other's friends. But the bad didn't end there. February 18 was also a disgusting day. Then Petya and I wanted to turn the switch, but there was a very insolent woman in a car did not let us in, and then she started fucking around. We had to wait a long time, and eventually we turned the switch, but it didn't get better. I wanted to ask my coursemate that day about how he managed to get a job at Yandex. In the end, he started trolling me and saying that he had a non-disclosure agreement. I thought then that he was mocking me and making fun of me, and it made my mood even worse. But after a little over three years, I realize that he probably wasn't joking about the NDA. A few days after that, Pete alone turned the switch again. This February something broke all the time, money took a long time to arrive, I couldn't dye my hair. And in the end, when I also dyed my hair, they dyed it ugly and charged me more money than they should have. Toward the end of February already went more or less normal days. But there was nothing special in them. On February 25, I saw Shabunka or a girl similar to her on the bus and hard to smile with what a cute nose she had))))) And also about that time I got stuck in one game and decided to write to the developer, because I wanted to make the second part. But on February 28th, when I posted a video of the game I was making based on the developer's game, he fucking banned me from the channel. I ended up telling him to fuck off and renaming the game and removing his authorship altogether. And the game in general will be released only in 1.5 years, and that not on kongregate and generally unfinished so will be. But the last day - February 29, which happens once in 4 years, was unusually good. I then met another classmate and we were preparing together for the retake of one exam, and then gathered another company and discussed together all sorts of tasks. In the end everything worked out well, I managed to retake this exam with a C! I even got almost a B, even though it was quite difficult. And already the very unusual March of 2020 was approaching. But that's where the global bad event, the coronavirus pandemic, would begin.`,
        song_rus: `https://www.youtube.com/embed/es22OwPuBa4?si=OvvDPxA4nEZmV8VU`, 
        song_en: `https://www.youtube.com/embed/es22OwPuBa4?si=OvvDPxA4nEZmV8VU`,
    },
    {
        id: 8,
        year: 2020,
        month: 3,
        text_rus: `Март 2020 выдался для меня очень приятным и необычным месяцем, с какой-то своей атмосферой, немного мистической даже. Хоть тогда и началась пандемия коронавируса и локдаун, у меня этот месяц оказался вполне хорошим. С самого первого дня чувствовалась какая-то особенная атмосфера. Тогда как раз мы снова начали ездить на олимпиады, в этот раз они были по воскресеньям и мы их решали командами - я был с Сашей и Лёней. Я работал над той игрой, но особо желания у меня уже не было, после того, как тот урод меня забанил на своем сервере. Поэтому, эту игру я в итоге заброшу и доделаю только в июле 2021, и то, не до конца. У меня в марте закончился снюс и нужен был новый, поэтому утром 3 марта, я нашел чела который его продавал и купил у него. Правда, у него оказался самый дерьмовый из тех, который я пробовал, и самый слабый. Но хоть что-то было. Вообще парадоксально вышло как-то) Что в конце 2019 снюс запретили, и только после этого я и подсел на него и 2020 годом снюса у меня оказался. А еще 3 марта мы неплохо тогда с Петей погуляли. Близились очень важные и интересные дни для меня. Еще комиссия по физике была, а еще в один день Петина сестра увидела идиотские пикчи, которые я делал, чтобы поржать вместе с Петей, и сильно обиделась на меня. Для Пети же и март 2020 оказался ужасным, даже наверное самым болезненным месяцем. Ведь тогда ему и пришло осознание, что его все кинули и от этого ему было очень плохо. И вот, 9 марта очень необычная прогулка с Петей, а еще тогда я уже попробовал нормальный чифирь, от которого вообще необычный эффект был, какой-то небольшой нереальности и ощущения себя во сне. Вечером этого же дня, я написал той Алине, и мы начали с того дня общаться и переписываться. У нее уже был парень, поэтому я и претендовал только на дружеское общение, да и был не против этого, с ней довольно интересно иногда. А вот 10 марта один из немногих плохих дней в марте, когда поссорился с родителями, подкатила депрессия и были очередные загоны. Алине я также рассказал про свои игры и она даже немного в них поиграла. А еще я вспомнил, что у меня в старой школе была очень странная криповая комната, точнее в другом отделении, где была 379 школа для инвалидов. А еще там училась очень страшная девушка, которую мы потом называли проказой. Мы это обсуждали тогда с Русланом и с Алиной, а потом появилась и общая беседа, но это уже было в конце марта. Близился день репетитора, но вот только новость не очень хорошая - он тогда не мог со мной заниматься. А 14 марта была одна из самых атмосферных прогулок с Петей за всю жизнь. Но и очень противоречивой она выдалась - плохие и хорошие события чередовались и расли по синусоиде, амплитуда которой тоже расла. Сначала Алина отвечала мне не очень, потом после того как с Петей мы выпили чифиря, она стала отвечать резко лучше. Потом меня от чифиря стошнило, но потом стало лучше и появился эффект, стало очень весело. А потом, когда мы сели в автобус на нас наорал какой-то дед. Затем сильно проорали с нашего диктатора и вообще форсили, что это ходячий наркотик))) И самое плохое в этом дне - резко испортилась погода, а когда мы искали место, где укрыться от холода и нашли подъезд, то туда зашла просто ахуевшая женщина с ребенком которая без повода начала на нас выебываться и орать, в итоге Петя тоже стал орать на нее и мы вышли, а вообще даже до мака и других помещений тогда было далеко, а на улице было холодно и даже снег пошел. Гуляли мы, кстати, тогда в Крылатском. Но позже мы дошли до мака, но зашли не в мак, а в какой-то фудкорт с блинами. Стало очень лампово, а до этого или после этого в маке я видел горячих тянок из своей школы, но почему то не пообщался с ними тогда. Но я с ними так в итоге и не познакомился, пока учился в 11 классе. А еще именно в этот день я Алине кинул свои игры и общение с ней было тогда ламповым. 16 марта был не очень приятный день, когда хотелось доебаться до грибочка (та тян, которая меня без причины заблокировала), но зачем-то сделал я это с аккаунта петиной сестры, в итоге все между собой рассорились, а она еще хуже к Пете относиться стала. А друзья на меня наехали за то, что мне моча в голову залезла и я мог с любого акка написать грибу, но зачем-то именно с акка, с которого не надо было писать. Потом я попробовал подвид чифиря - конь, тоже необычный эффект был и сильная бодрость. И вот уже во второй половине марта объявили локдаун и была тогда полноценная пандемия коронавируса. Нас перевели на дистанционное обучение, но еще тогда, в марте все было ок. Вообще 20 марта, мы с Петей планировали поехать к Куракову и около его двери оставить куриную голову и позвонить, чтобы поржать так над ним, но ковид разрушил эти планы. 21 марта хоть я был и дома, очень веселый и приятный день был. Тогда я и с Алиной хорошо пообщался, и с Петей с Русланом в скайпе сильно орали с мемов про гуфа) А в конце марта у меня резко появилось какое-то нехорошее предчувствие, без каких-либо поводов на это. Очень волновались мы все 25 марта, когда Петя хотел выпилиться из-за своей сестры и удалился. Тогда я создал беседу по этому поводу, даже Алину добавил тогда и попросил ее позвонить Пете, чтобы убедиться что с ним ок все, потому что нам он не отвечал. А потом уже и Алина общалась иногда с нами в беседе, например мы все вместе обсуждали ту крипоту из моей старой школы. Последние дни марта были тоже норм, вот только 26 марта конфликты с одногруппниками - они начали жестко на меня выебываться и поносить лишь за то, что я на лекции сидел с друзьями по скайпу. Особенно староста меня прессовал, но тогда я боялся свое мнение высказать и захуесосить их в ответ, потому что не хотел еще сильнее с ними рассориться. В целом конец марта был норм, и вот уже 31 марта, ближе к ночи решил создать тред про Гриб очек. Ту бабу, которая чснула меня без причины (а точнее из-за моей внешности), где позвал анонов, чтобы они ее начали прессовать за это.`,
        text_en: `March 2020 was a very pleasant and unusual month for me, with its own atmosphere, a bit mystical even. Even though there was a coronavirus pandemic and a lockdown, it was a good month for me. From the very first day, you could feel some special atmosphere. Then we just started going to the Olympiads again, this time they were on Sundays and we solved them in teams - I was with Sasha and Lyonya. I was working on that game, but I didn't have much desire after that asshole banned me on his server. Therefore, this game I will eventually abandon and finish only in July 2021, and then, not to the end. I ran out of snus in March and needed a new one, so on the morning of March 3, I found a guy who was selling it and bought it from him. True, he had the shittiest of the ones I tried, and the weakest. But at least it was something. It was paradoxical somehow) That at the end of 2019 snus was banned, and only after that I got hooked on it and 2020 turned out to be the year of snus for me. Also on March 3 we had a nice walk with Petya. Very important and interesting days for me were approaching. There was also a commission on physics, and one day Petya's sister saw the idiotic pics that I made to make fun with Petya, and took great offense at me. For Petya March 2020 turned out to be a terrible, even the most painful month. It was then that he came to realize that he had been screwed by everyone and it made him feel very bad. And then, on March 9, a very unusual walk with Petya, and then I tried normal chifir, which had an unusual effect, some small unreality and a feeling of being in a dream. In the evening of the same day, I wrote to Alina, and we began to communicate and correspond from that day. She already had a boyfriend, so I claimed only friendly communication, and I was not against it, with her quite interesting sometimes. But March 10 was one of the few bad days in March, when I quarreled with my parents, depression set in and there were another paddles. I also told Alina about my games and she even played them a bit. And I also remembered that I had a very weird creep room at my old school, or rather in another department where there was a 379 school for the disabled. And there was also a very scary girl who studied there, who we later called leprosy. We discussed it then with Ruslan and with Alina, and then there was a general conversation, but it was already at the end of March. The day of the tutor was approaching, but the news was not good - he could not study with me then. And on March 14 I had one of the most atmospheric walks with Petya in my whole life. But it was also very contradictory - bad and good events alternated and rasped along a sine wave, the amplitude of which also rasped. At first Alina answered me not very well, then after we drank chifir with Petya, she began to answer sharply better. Then I threw up from the chifir, but then it became better and the effect appeared, it became very funny. And then when we got on the bus we got yelled at by some grandpa. Then strongly yelled from our dictator and in general forced that it is a walking drug))))) And the worst thing about this day - the weather turned bad, and when we were looking for a place to shelter from the cold and found the entrance, there came just a fucking woman with a child who without reason began to fuck us and yell at us, eventually Petya also began to yell at her and we went out, and in general even to the mac and other premises then was far away, and it was cold outside and even snowed. By the way, we were walking in Krylatskoe at the time. But later we reached a mac, but we didn't go into a mac, but into some food court with pancakes. It became very good vibe, and before or after that I saw hot girls from my school at the pop-up, but for some reason I didn't talk to them then. But I didn't end up meeting them until I was in 11th grade. It was also the day I threw my games to Alina and communicating with her was good vibe at the time. March 16 was not a very pleasant day, when I wanted to screw with Mushroom (the girl who blocked me for no reason), but for some reason I did it from Petya's sister's account, and as a result everyone got into a fight, and she started treating Petya even worse. And my friends got on me for the fact that I had pee in my head and I could write to the mushroom from any account, but for some reason I did it from an account that I didn't have to write from. Then I tried a subspecies of chifir - horse, also unusual effect was and strong vigor. And then in the second half of March they announced a lockdown and there was a full-blown coronavirus pandemic. We were transferred to distance learning, but even then, in March, everything was ok. In general, on March 20, Petya and I planned to go to Kurakov's house and leave a chicken head near his door and call him to make fun of him, but Covid ruined these plans. March 21 though I was home, it was a very fun and enjoyable day. Then I had a good conversation with Alina, and with Petya and Ruslan in Skype we were yelling a lot with memes about guf) And at the end of March I suddenly had some bad feeling, without any reason for it. We were all very worried on March 25, when Petya wanted to kill himself because of his sister, and he deleted himself. Then I created a conversation about it, I even added Alina and asked her to call Petya to make sure he was okay, because he didn't answer us. And then Alina also communicated with us sometimes in the conversation, for example we all discussed together about that creepy thing from my old school. The last days of March were also normal, but only on March 26th conflicts with groupmates - they started to fuck me up and abuse me just for the fact that I was sitting in lectures with my friends on Skype. Especially the head student pressed me, but then I was afraid to express my opinion and fuck them back, because I didn't want to get even more upset with them. In general, the end of March was normal, and so already on March 31, closer to night I decided to create a thread about Mushroom. That girl who blocked me for no reason (or rather, because of my uglyness), where I called anons to press her for it.`,
        song_rus: `https://www.youtube.com/embed/ytcPOCzeigQ?si=fPzENaZMYSQR2To1`, 
        song_en: `https://www.youtube.com/embed/ytcPOCzeigQ?si=fPzENaZMYSQR2To1`,
    },
    {
        id: 9,
        year: 2020,
        month: 4,
        text_rus: `Впервые в жизни, апрель оказался у меня плохим месяцем. Даже не так, в этом году он оказался просто отвратительным, самым ужасным, очень болезненным и разрушительным месяцем, который принес мне не только много моральной боли и переживаний, но и даже физическую. Этот месяц оставался худшим в моей жизни, пока не наступил 2022 год. И уже сразу, начался он дерьмово, хотя еще в первый день были небольшие положительные моменты. Все продолжилось с того треда про Грибочек. В итоге мне написал потом ее парень или просто друг и начал выебываться на меня и еще на одного анона, который тогда мне хотел помочь. Настроение резко упало, когда до меня дошло, что он хотел меня отпиздить и я был просто в ахуе, с каким агрессивным быдлом я учусь на одном факультете. В апреле 2020 почти каждый день был дерьмовым, и с родителями небольшие конфликты были, и с друзьями напряженка, и с Алиной в общении тоже иногда было не очень. Но и это еще не все, в этом месяце произшло два очень жестких пиздеца. Апрель 2020 был месяцем локдауна, выходить из дома практически нельзя было из-за распространяющегося тогда коронавируса, только совсем быстро если и в магазин. Хоть в этом месяце снова был форс Параши (Максима Чуякова), это не сильно улучшило как-то месяц. Уже 3 апреля день был полным дерьмом, когда я чуть с Петей не поругался и со всеми остальными, так потом еще и Алина на нас обиделась, что мы с Мырзой с Парашей наебали (мы создали фейк параши, а она думала что сам параша в конфу писал). На следующий день и с Русланом чуть было не поругался, каждый день происходило какое-то дерьмо. Вплоть до первого глобального пиздеца - 9 апреля, я каждый день с кем-то ругался и ссорился, то с Петей, то с Русланом, то с Алиной. Как ни странно, но вроде только с Мырзой я тогда общался нормально. Да и с родителями тоже иногда напряг был. 7 и 8 апреля я пообещал Руслану и Алине, что напишу Турчанке и постараюсь с ней пообщаться. Но именно с ней и произошел жесткий пиздец 9 апреля. Когда я написал ей, она сказала, что это не она была в 1 классе в 1127 школе. Но тогда мне она показалась норм человеком, но увы - нет. После того, как зачем-то она попросила мою фотку, она начала сразу игнорить, а потом и вовсе меня отшила и послала нахуй, написала «не ищу новых знакомств». Я сразу понял, что причина в моей внешности и несколько дней от этого у меня был депрессняк и желание сдохнуть. Ведь на пластику я тогда тоже не мог накопить. Меня порадовало в тот день, 9 апреля только то, что Алина меня после этого поддержала и назвала Турчанку тупенькой шкурой. В ужасном апреле мы с друзьями, а иногда и Алину звали, играли в рисовашки. Это сайт такой, где можно было рисовать мемы, а другие люди должны были их угадать. И у нас был список своих локальных мемов. Середина апреля 2020 еще была более менее, но все равно частенько бывали дни с жесткой депрессией и суицидальными мыслями. Я также обсуждал все и понял, что девушкам живется в этом мире легче, а мне чтобы найти себе девушку срочно нужно делать пластику. 12 вообще загнался дико и порезался немного. С Русланом очень часто ссорился и ругался тогда особенно, почти каждый день. 14 апреля потом еще мой одногруппник, с которым я раньше дружил, начал на меня выебываться, когда я высказал свое мнение по поводу физика. А еще я вспомнил случай из 26 марта, и жестко горело с моих одногруппников, какими они были лицемерами тогда. Единственным действительно неплохим днем оказалось 15 апреля - мне пришли деньги с Vector Incremental - 37 тысяч рублей, а еще в этот день мы неплохо посидели с Русланом, Петей, Мырзой и Алиной в скайпе, обсуждали проказу, а потом уже втроем с Мырзой и Алиной смеялись с вложений. А вообще мне кажется, что именно с апреля 2020 у меня с Русланом начались первые ссоры и разногласия, а дойдет это в итоге до того, что в сентябре мы окончательно рассоримся и почти полгода общаться не будет. 17 апреля мы сидели в скайпе с Алиной и Гошей, она проходила мою давнюю игру, которую я делал еще в начале 2014, когда в нее был влюблен, так что она там была, и она как-то странно отреагировала тогда. Поэтому в то время я еще немного волновался о том, чтобы написать своей подруге. 20-е числа прошли так же ужасно. Каждый день я с кем-то ссорился, особенно часто с Русланом, с родителями тоже из-за того, что постоянно нервный был и постоянно было плохое настроение и хуевые мысли. Очень депрессивная тогда была атмосфера в том месяце, вплоть до его конца. 25 апреля более менее тоже нормальный день был, тогда мы с Русланом нормально общались и повеселились в скайпе. Но все это было затишьем перед бурей. Самый главный пиздец произошел 28 апреля 2020. Тогда я хотел сделать сюрприз для Пети и Руслана - заказать историю про Алькантару. А в итоге так получилось, что они потом меня захуесосили жестко, сказали что я все переврал там, что я деньги на ветер выбросил и вообще что они нихуя меня не просили об этом и смотреть ее не будут. Очень сильно тогда с ними разругался, что через какое-то время у меня случился очень мощный нервный срыв. В этот раз я руку резал бритвой очень сильно, чуть ли до вен не дошло в этот раз, психанул дико и перестал общаться с Русланом и Петей тогда. Потом мне еще мама руку забинтовывала и шрамы остались глубокие там. А кровь не проходила несколько дней. Такого у меня еще ни разу не было. Я уже 30 апреля я был рад тому, что этот отвратительнейший месяц подошел к концу.`,
        text_en: `For the first time in my life, April turned out to be a bad month for me. Not even that, this year it turned out to be just disgusting, the most horrible, very painful and destructive month that brought me not only a lot of moral pain and worry, but even physical pain. This month remained the worst month of my life until the year 2022 came. And right off the bat, it started off shitty, even though there were small positives even on the first day. It continued with that Mushroom thread. Eventually her boyfriend or just a friend wrote to me and started screwing with me and one other anon who wanted to help me at the time. My mood plummeted when I realized he was trying to beat me up and I was just fucked up about what kind of aggressive bastard I was in the same faculty with. In April 2020 almost every day was shitty, and with parents there were small conflicts, and with friends tense, and with Alina in communication was also sometimes not so good. But that's not all, there were two very tough fuck-ups this month. April 2020 was the month of lockdown, it was practically impossible to leave the house because of the coronavirus that was spreading at that time, only to go to the store very quickly. Even though this month was Parasha's (Maxim Chuyakov) force again, it didn't really improve the month somehow. Already on April 3 was a day full of shit, when I almost had a fight with Petya and all the others, and then Alina also took offense at us that we and Myrza with Parasha fucked up (we created a fake of Parasha, and she thought that Parasha himself wrote in the chat). The next day I almost had a fight with Ruslan too, every day there was some shit going on. Up to the first global fuckup - April 9, I was fighting with someone every day, then with Petya, then with Ruslan, then with Alina. Strange as it may seem, it was only with Myrza that I communicated normally. And with my parents, too, it was sometimes tense. On April 7 and 8 I promised Ruslan and Alina that I would write to Turchanka and try to communicate with her. But it was with her that the hard fuck up happened on April 9. When I wrote to her, she said that it was not her who was in the 1st grade in 1127 school. But she seemed like a normal person to me at the time, but alas, she was not. After she asked for my photo for some reason, she started to ignore me immediately, and then she blew me off and sent me the fuck off, she wrote "not looking for new acquaintances". I immediately realized that the reason is my uglyness and for a few days I was depressed and wanted to die. After all, I could not save for plastic surgery at that time too. I was happy on that day, April 9, only that Alina supported me after that and called Turchanka a stupid bitch. In horrible April, my friends and I, and sometimes Alina would call me, would play Risovashki. It was a site where you could draw memes and other people had to guess them. And we had a list of our own local memes. Mid-April 2020 was still more or less, but there were still frequent days with severe depression and suicidal thoughts. I also discussed everything and realized that girls live in this world is easier, and I to find a girl urgently need to do plastic surgery. 12 in general, I got wild and cut myself a little. I quarreled with Ruslan very often and fought then especially, almost every day. On April 14, my groupmate, with whom I used to be friends, started fucking with me when I expressed my opinion about the physicist. I also remembered the incident from March 26, and it burned hard with my groupmates what hypocrites they were back then. The only really good day was April 15 - I got money from Vector Incremental - 37 thousand rubles, and also on this day we had a good sit with Ruslan, Petya, Myrza and Alina in Skype, discussed leprosy, and then the three of us with Myrza and Alina laughed with investments. And in general it seems to me that it was from April 2020 that Ruslan and I started the first quarrels and disagreements, and it will eventually come to the point that in September we will finally quarrel and will not communicate for almost half a year. On April 17 we were sitting in skype with Alina and Gosha, she was going through my long-time game that I did back in early 2014 when I was in love with her, so she was there, and she reacted kind of weirdly then. So at the time I was still a little worried about texting my friend. The 20th went just as horribly. Every day I was fighting with someone, especially often with Ruslan, with my parents too because I was nervous all the time and was constantly in a bad mood and dickish thoughts. It was very depressing atmosphere in that month, until the end of the month. April 25th was more or less a normal day too, Ruslan and I had normal communication and fun on Skype. But it was the calm before the storm. The biggest fuckup happened on April 28, 2020. Then I wanted to make a surprise for Petya and Ruslan - to order a story about Alcantara. And in the end, it turned out that they fucked me hard, said that I had twisted everything, that I had thrown away money, and in general that they didn't fucking ask me for it and wouldn't watch it. I had a very strong fight with them then, that after a while I had a very powerful nervous breakdown. This time I cut my hand with a razor very badly, almost to the veins this time, freaked out wildly and stopped communicating with Ruslan and Petya then. Then my mom bandaged my arm and the scars remained deep there. And the blood didn't go away for days. I've never had that before. On April 30, I was already happy that this disgusting month had come to an end.`,
        song_rus: `https://www.youtube.com/embed/zxqIVxkfLlw?si=se6XAlH66ICHbgYY`, 
        song_en: `https://www.youtube.com/embed/zxqIVxkfLlw?si=se6XAlH66ICHbgYY`,
    },
    {
        id: 10,
        year: 2020,
        month: 5,
        text_rus: `Май 2020 - это продолжение локдауна. Коронавирус все еще распространялся и были жесткие меры, выходить из дома тогда почти нельзя было, тем у кого не было специальных пропусков. В отличие от апреля, май у меня уже прошел более спокойно. Прогулок, естественно, не было, правда с Петей все же удалось встретиться в конце месяца, но об этом попозже. А вот с Русланом в этом месяце очень напряженные были отношения, еще хуже даже, чем в апреле. Основной пиздец случился во второй половине, но давайте по порядку. Месяц начался у меня с одной очень неоднозначной новости - больше не будет конкурсов на Kongregate, а скоро в итоге туда и вовсе уже игры нельзя будет загружать. Кажется, что плохо и не смогу больше там заработать. Но с другой стороны меня это даже порадовало - теперь не придется постоянно переживать и психовать из-за рейтинга игры и плохих комментариев. Это давало еще кстати какую-то возможность искать другие сайты и другие пути для заработка. Но тогда я как-то об этом еще не думал. У нас с Мырзой с конца апреля - начала мая 2020 появилось веселое занятие - покупать чужие акки и писать всякую хуйню с них и угарать с этого. Мы это называем «ржать», а страницы которые нам попадаются - «ржака», а потом уже «опохмел». Так как моей руке был пиздец тогда, то мы с мырзой троллили всяких училок, я фотках порезанную руку на фоне экрана со страницей училки и кидали им эти пикчи. Было смешно, хоть и немного подло. Но с другой страницы, это не мы их взламывали, а лишь ржали с них. Было очень много смешных ржак в этом месяце, они иногда поднимали настроение и мне и Мырзе, хоть это и не очень хорошо было с нашей стороны. Как апрель закончился, все сразу стало как-то спокойнее, атмосфера улучшилась, а я возобновил общение и с Алиной. Очень жаль, что тогда был локдаун, потому что мне кажется, что атмосфера была очень необычной, и мы с Петей могли бы несколько раз классно погулять, месяц выдался бы намного лучше. 5 мая Руслану в голову ебнула моча и он «влюбился» в мою так себе одноклассницу бывшую Лизу Захарову по кличке «мудак», которая в итоге его игнорила и не принимала заявку. Я вообще хз что на него нашло и как он влюбиться мог?) Но это фигня по сравнению с тем, что он хотел мутить с проказой. Хоть и был карантин и локдаун, пары никто не отменял, были они дистанционные тогда. Лекции были в Microsoft Teams обычно, лабы тоже делать надо было. Но как-то времени свободного было больше, чем когда мы учились прям в универе. Очень смешные мемы были в мае 2020, даже скорее это были апгрейды других мемов - «борода и губы уточкой», «Елена Черняева» и некоторые другие. Лабы кстати уже были несложными, но лучше было бы, если бы их делал я раньше. Либо я уже как-то влился в учебу и мне все проще давалось. 9 мая был очень веселый день, когда мы в беседе веселились и ржали над Аглае-свиньей снова и одним видео, а еще мне пришла идея для игры, где нужно раскармливать свинью, чтобы она становилась все больше и больше. Конечно, это несерьезно, но все же, какими игры ща только не бывают… 12 мая хуевый день пиздец, когда я с фейка себе в комменты написал, что я урод и этот комментарий пролайкало очень много людей. Все же, нужно копить деньги и делать пластику. Но зато кое-что хорошее меня ожидало, мне Руслан посоветовал один классный чай - Те Гуань Инь и я решил его заказать. 13 мая, я спустя месяц вышел на улицу в магазин, было классное ощущение, ведь очень долго из-за локдауна я провел дома и не дышал свежим воздухом. А 14-ого мне наконец привезли тот чай. Он мне очень сильно понравился, был необычный, очень вкусный а еще эффект от него был классный. Даже сейчас, иногда скучаю по тому чаю - Те Гуань Иню. 15 мая очень отвратный день был. Мало того, что с Алиной тогда какой-то напряг был из-за того, что она что-то скрывать решила тогда, а потом игнорила, так еще и лютый пиздец был с учебой. Это просто полный пиздец был - я делал диаграмму для основ менеджмента. Преподша оказалась просто конченной сукой, которая игнорила меня, когда я кинул диаграмму ей на почту и несколько раз сказал, чтобы она проверила тогда. А потом через несколько часов после самого семинара она мне написала какую-то хуйню уже на почту. Очень сильно именно это испортило мне тогда настроение. А на следующий день с Петей и Русланом, а также Гошей посидели в скайпе, порисовали и посмотрели Мэри Поппинс (был мем один такой). И на следующий день тоже, вот только с Русланом снова тогда поругался. А уже 20 мая мы сильно ржали в беседе над мудаком, а потом я решил заказать себе смешную вещь - миноксидил). Но в итоге потом мне стало лень им мазать БОРОДУ. А еще было масло для роста бровей, им уже мазал подольше. 22 мая сильно пригорело с сайта YTMonster, какие же конченые уроды там сидят, что я даже заплатил сколько-то и в итоге нихуя не получил. Из-за прикола с бородой меня потом прессовал Руслан, я просто решил разыграть что от миноксидила у меня резко выросла борода и сделал ее в фейсаппе. Опять ссоры с ним, да у него еще и возраст такой был как раз 16 лет - самый агрессивный. И вот 23 мая я решил заказать что-то домой и еще взял два пакета мускатного ореха и решил снова испытать трип как в ноябре 2019. Однако, в этот раз он не оказался таким прикольным как тогда, да и вообще ничего хорошего не принес. Может, потому что я тогда его еще и пивом запивал, эффект у меня затянулся вообще на несколько дней. Руслан не верил тогда, что у меня так долго эффект и думал, что я придуряюсь и несу хуйню всякую просто так, особенно после того пранка с бородой. Эти дни были очень хуевые, хоть я и под мускатом тогда был. Руслан с Мырзой делали вид что не замечают меня, игнорили все сообщения мои в беседе и считали меня долбаебом, который притворяется. А также назло форсили один мем и то, что я не принимал в нем участия. Это все закончилось наконец-то 26-27 мая. И 26 была лютая ссора с Русланом. А уже с 27 пошли более менее неплохие дни. После муската, я решил попробовать дурман)))000. Который тогда Петя заказал для себя, но я попросил его поделиться им со мной. Мы встретились около моего дома, я ему отдал что-то свое, а он дурман и вечером в ванной я его уже попробовал. Эффект очень странный и необычный от него был, но лучше, чем от муската и намного короче. Сначала у меня центр тяжести сместился куда-то вниз, было трудно держать равновесие. Еще нельзя тогда было ничего есть, потому что проглотить было почти нереально. Потом какие-то небольшие визуальные галлюцинации и слуховые. Ночью, когда я пытался заснуть куча голосов шептало мне что-то непонятное. И примерно тогда я еще узнал и про калею - особую траву для того, чтобы лучше засыпать и видеть более насыщенные сны. А под конец месяца я сдал некоторые зачеты и залип в интересные игры. Локдаун близился к отмене и в моей жизни близился один из лучших периодов. А еще в конце мая мы с Русланом и Петей все же посмотрели ту историю, которую я для них заказал. Она им не очень понравилась, а после того как Петя что-то там в комментах нехорошее написал, автор ее удалил, но аудиозапись оставил в телеграмме. И как раз в этой группе она и есть в аудиозаписях) Но по мне больше всего, что не понравилось в истории - голос, которым озвучили Петю, уж не похож на него совсем и какой-то омежный. А сюжет и вообще текст истории - хз, мне понравился, даже очень. В итоге май у меня был месяцем локдауна и легального наркотрипа)`,
        text_en: `May 2020 was the continuation of the lockdown. The coronavirus was still spreading and there were strict measures, it was almost impossible to leave the house at that time for those who did not have special passes. In contrast to April, I had already had a quieter May. There were no walks, of course, but I did manage to meet Petya at the end of the month, but about that later. But this month I had very tense relations with Ruslan, even worse than in April. The main fuck-up happened in the second half, but let's go in order. I started the month with one very ambiguous news - there will be no more contests on Kongregate, and soon it will be impossible to upload games there. It seems to be bad and I won't be able to earn any more money there. But on the other hand it even pleased me - now I will not have to worry and freak out because of the game rating and bad comments. This gave still by the way some opportunity to look for other sites and other ways to earn money. But at that time I somehow did not think about it yet. Me and Myrza since the end of April - beginning of May 2020 we have a fun thing - to buy other people's accounts and write all kinds of shit from them and make fun of it. We call it " laughing", and the pages we come across - "laughter", and then already "hangover". Since my hand was fucked up then, me and Myrza trolled all kinds of teachers, I took pictures of my cut hand against the background of the screen with the teacher's page and threw them these pics. It was funny, even if it was a little mean. But on the other side of the page, we weren't hacking them, we were just making fun of them. There were a lot of funny laughs this month, they sometimes lifted my and Myrza's mood, even though it wasn't very nice of us. As April ended, everything became calmer, the atmosphere improved, and I resumed communication with Alina as well. It's a pity that there was a lockdown, because I think that the atmosphere was very unusual, and Petya and I could have had a few nice walks, it would have been a much better month. On May 5, Ruslan got pissed in the head and "fell in love" with my so-so classmate ex-Lisa Zakharova nicknamed "asshole", who ended up ignoring him and not accepting his request. I don't know what came over him and how could he fall in love?) But it's nothing compared to the fact that he wanted to get involved with leprosy. Even though there was a quarantine and lockdown, no one canceled the classes, they were remote back then. Lectures were usually in Microsoft Teams, labs had to be done too. But somehow we had more free time than when we studied at uni. Very funny memes were in May 2020, even more likely they were upgrades of other memes - "beard and duck lips", "Elena Chernyaeva" and some others. Labs by the way were already uncomplicated, but it would have been better if I had done them earlier. Either I had already somehow got into my studies and everything was easier for me. May 9 was a very funny day, when we had a conversation and laughed over Aglae the Pig again and one video, and I also got an idea for a game where you have to feed the pig to make it bigger and bigger. Of course, it's not serious, but still, what kind of games are there now only... May 12 is a fucked up fucking day, when I wrote from a fake to myself in the comments that I'm a freak and this comment was liked by a lot of people. Still, I need to save up and get plastic surgery. But something good was waiting for me, Ruslan recommended me a cool tea - Te Guan Yin and I decided to order it. On May 13, after a month I went outside to the store, it was a great feeling, because I spent a very long time at home because of the lockdown and did not breathe fresh air. And on the 14th I finally got that tea. I liked it very much, it was unusual, very tasty and the effect of it was great. Even now, sometimes I miss that tea - Te Guan Yin. May 15th was a very bad day. Not only was there some tension with Alina because she decided to hide something and then ignored me, but I was also fucked up with my studies. I was doing a diagram for the basics of management. The teacher turned out to be a total bitch who ignored me when I e-mailed the diagram to her and told her several times to check it. And then a few hours after the seminar itself she wrote me some fucked up shit already on my e-mail. That really spoiled my mood then. And the next day with Petya and Ruslan and Gosha we sat in Skype, drew and watched Mary Poppins (there was a meme like that). And the next day too, except that I had a fight with Ruslan again. And already on May 20 we had a big laugh in a conversation over an asshole, and then I decided to order myself a funny thing - minoxidil). But I ended up getting lazy to smear it on my beard afterwards. And there was also an oil for eyebrow growth, I already smeared it longer. On May 22, I got really burned from the YTMonster site, what kind of fucked up assholes are sitting there, that I even paid some money and in the end I didn't get a fucking thing. Ruslan pressed me later because of the beard joke, I just decided to make a joke that my beard had grown dramatically because of minoxidil and made it in faceapp. Again quarrels with him, and he was just 16 years old - the most aggressive age. And so on May 23 I decided to order something home and also took two packets of nutmeg and decided to experience the trip again as in November 2019. However, this time it didn't turn out to be as groovy as it was then, and it didn't do anything good at all. Maybe because I also drank beer with it then, the effect took me a few days longer. Ruslan didn't believe then that I had the effect for so long and thought I was just fucking around and talking shit for nothing, especially after that prank with the beard. Those days were really fucked up, even though I was under muscat at the time. Ruslan and Myrza pretended not to notice me, ignored all my messages in the conversation and thought I was a fucker who was pretending. They also spitefully forced one meme and the fact that I didn't participate in it. It all finally ended on May 26-27. And on the 26th I had a huge fight with Ruslan. And already from 27 went more or less good days. After muscat, I decided to try durman)))000. Which then Petya ordered for himself, but I asked him to share it with me. We met near my house, I gave him something of mine and him the durman and in the evening in the bathroom I already tried it. The effect was very strange and unusual from it, but better than muscat and much shorter. At first my center of gravity shifted downwards, it was hard to keep my balance. I also couldn't eat anything then, because it was almost impossible to swallow. Then some small visual hallucinations and auditory hallucinations. At night when I was trying to sleep a bunch of voices whispered something incomprehensible to me. And around that time I also learned about kale, a special herb to help me fall asleep better and have more intense dreams. And at the end of the month I took some credits and played some interesting games. Lockdown was about to be canceled and I was approaching one of the best times of my life. Also, at the end of May, Ruslan and Petya and I watched the story I had ordered for them. They didn't like it very much, and after Petya wrote something bad in the comments, the author deleted it, but left the audio in Telegram. And just in this group it is in the audio recordings) But for me most of all that did not like the story - the voice, which voiced Petya, does not look like him at all and some kind of omega. And the plot and the text of the story in general - idk, I liked it, even very much. As a result, May was a month of lockdown and legal drug trip for me)`,
        song_rus: `https://www.youtube.com/embed/Y1-fovmY13I?si=ANOsgeWpY-AZL0NN`, 
        song_en: `https://www.youtube.com/embed/Y1-fovmY13I?si=ANOsgeWpY-AZL0NN`,
    },
    {
        id: 11,
        year: 2020,
        month: 6,
        text_rus: `Июнь 2020 это не только начало классного лета 2020, но и начало замечательного и одного из лучших периодов в моей жизни (пока на момент начала 2023), который продлится до ноября-декабря 2021. Июнь уже с первых дней меня радовал, сначала отменили локдаун и ввели прогулки. Потом и вовсе уже можно было нормально гулять и посещать здания. Но маски носить нужно было в зданиях. Вообще мы июнь с друзьями очень весело встретили в этот раз, ржали над Петиным отцом и фотошоп его сделали. 3 июня я делал РГР для какого-то предмета, в итоге все успел сдать в последний день! Но еще оставались лабы, делал их всю ночь, но для этого пришлось выпить чифирь. А еще в этот день с ребятами сидели в скайпе и мы с Петей придумали мем смешной, что язык собаки - это хэшбраун) Вот только Руслан не заценил и не очень относился ко мне уже тогда. А я и не думал и не знал, что потом они создадут беседу без меня, ближе к концу месяца. Зачет 4 июня поставили мне в итоге, можно было немного отдохнуть. И вот 6 июня делал очередные лабы, а также очень сильно залип в игру Do not feed monkeys. Она была очень атмосферной и необычной, как-то классно июнь казалось, начался. И вот 7 мы уже с Петей наконец погуляли, у меня в Крылатском и даже встретили Алину с ее парнем. Я хотел еще калею попробовать, но Петя ее потерял. В итоге, уже я сам себе ее заказал и пил во второй половине этого месяца. Но уже в июне 2020 Руслан начал подозревать меня в том, что я общаюсь и сотрудничаю с Отажоном, и позже это станет его главным тезисом против меня. Я вообще не знаю, почему он тогда это или придумал, или так совпадало часто, я к этому не имел никакого отношения. Середина июня 2020 запомнилась мне тем, что я делал курсач по численным методам - самый сложный мой курсач, но и при этом самый интересный и даже самый веселый) А дело в том, что в него я решил добавить мини игру с маленькими миленькими носиками шабуньки, на которые нужно было нажимать и они пищали)))) Потом по мотиву этой мини игры через год я сделаю полноценную игру. 12 июня я сходил постригся. А самым дерьмовым днем было 13 июня, меня в итоге тогда Оля удалила из друзей. Мы почти перестали общаться после того случая с «фейковой смертью» в конце сентября 2019, а еще у нее был парень тогда какой-то вроде. Но зато 14 я сначала дальше сидел над курсачом, и миниигру доделал также в этот день) Делал преобразование в производную, а потом погулял с Петей и мы очень много шутили про нашего диктатора))) А также орали со слов «ширш» и «снюс») 15 июня покрасил волосы, норм получилось, а потом все дальше делал тот самый курсач с милой миниигрой) Только вот и по криптографии у меня поджимали сроки, поэтому не доделав еще курсач, я сделал лабы по крипте. Хоть я и сделал дополнительную даже, препод все равно поставил мне 3. Меня это расстроило немного тогда, но вроде как и у него что-то случилось плохое или с настроением было + еще потому что очень поздно все сделал. И вот скоро, 19 июня я доделал полностью курсач по ЧМ, а также получил свою калею и попробовал ее. На вкус очень горькая, но сны были прикольные) Например, как мне мама отрубила нос 2 марта 2021)0). Очень прикольные, да))) Ну а если серьезно, их стало больше, да и со сном получше стало, когда пил калею. Курсач на 5 я тоже опоздал сдать. Вот только преподу он в итоге так сильно понравился (может, он даже поиграл в миниигру с крошками ню))), что он несмотря на сроки поставил мне 5. Очень обрадовался я этому) Вот правда 20 июня я пропустил важный зачет, потому что думал, что в тот день было необязательно сдавать, погулял тогда с Петей, да и сама прогулка скучной сказалась. А спустя несколько часов мы с Мырзой зафорсили мем про абортыши. И 22 июня мы уже на пару катались с Петей на его электросамокате. И да, я знал, какой подарок хочу себе на день рождения! Электросамокат! Хоть я и хотел его и на прошлое др, то тогда и родители к ним плохо относились, и Шабунька была. А ща они уже были не против, так что последние дни июня я искал себе нужный самокат! А также решил, как и в июле 2016 заказать себе футболку со своим принтом! В этот раз - была футболка с крошкой Ню (носом Шабуньки с глазами - такой инопланетянин), вообще каеееффф) К концу июня я делал лабораторные по искуственному интеллекту и они выдались в итоге очень интересными. Дошло до того, что я сам всем этим заинтересовался и с помощью машинного обучения делал прогнозы на ближайшие месяца и смотрел статистику в Jupyter Notebook. 24 июня мы с Петей выбрали лучший вариант электросамоката для меня, стоил он где-то 35 тысяч рублей. А вот с Русланом все еще периодически были ссоры, и как раз в конце июня появилась беседа без меня, про которую я тогда еще не знал. 27 июня был тест драйв самоката, который я получу на свой день рождения, мы поехали с Петей вместе, а еще я был в футболке с принтом крошки Ню! И даже в этот день снова умудрился поругаться с Русланом из-за какой-то фигни. Близился конец месяца и скоро мой день рождения. В конце июня уже привезли мой электросамокат на котором кататься буду я уже в июле! Также я сделал все лабы по ИИ и оставалось совсем немного учебы. В последний день июня пообщался с многими подругами а также ждал, когда наступит очередной мой день рождения.`,
        text_en: `June 2020 is not only the beginning of a great summer 2020, but also the beginning of a wonderful and one of the best periods in my life (so far at the start of 2023), which will last until November-December 2021. June has already made me happy from the first days, first they canceled the lockdown and introduced walks. Then it was possible to walk normally and visit buildings. But you had to wear masks in the buildings. In general, we met June with friends very fun this time, laughing at Petya's father and photoshopped it. June 3 I did RGR for some subject, in the end all managed to pass on the last day! But there were still labs, I did them all night, but for this I had to drink chifir. And also on this day with the guys were sitting in Skype and Petya and I came up with a funny meme that the dog's tongue is a hashbrown) Only Ruslan didn't appreciate it and didn't treat me very well at that time. And I didn't think and didn't know that later they would create a conversation without me, near the end of the month. On June 4 I got a pass in the end, so I could rest a little. And on June 6 I did the next labs, and also very much stuck in the game Do not feed monkeys. It was very atmospheric and unusual, somehow cool June seemed to start. And on the 7th we finally went for a walk with Petya at my place in Krylatskoe and even met Alina and her boyfriend. I wanted to try kaleya, but Petya lost it. In the end, I ordered it myself and drank it in the second half of this month. But already in June 2020 Ruslan began to suspect me of communicating and cooperating with Otajon, and later this would become his main thesis against me. I don't know at all why he either made it up at the time or it coincided so often, I had nothing to do with it. The middle of June 2020 was memorable for me because I was doing a course on numerical methods - the most difficult course of mine, but also the most interesting and even the most fun) And the thing is that in it I decided to add a mini game with little cute little noses of shabunka, on which you had to press and they squeaked)))). Then, based on the motive of this mini game, I'll make a full game in a year. On June 12, I got a haircut. And the crappiest day was June 13, I ended up being deleted from my friends by Olya. We almost stopped communicating after that "fake death" incident at the end of September 2019, and she also had a boyfriend of some sort back then. But 14 I first further sat on my coursework, and finished the minigame also on that day) I did the transformation to the derivative, and then I went for a walk with Petya and we joked a lot about our dictator)))))) And also yelled from the words "shirsh" and "snus") June 15 dyed my hair, norm it turned out, and then all further did the same course with a nice minigame) Only here and on cryptography I had a deadline, so not having finished the course, I did labs on crypta. Even though I did an extra one, the teacher still gave me a C. It upset me a little bit then, but like he had something bad or with the mood was + also because very late all done. And soon, on June 19, I finished my coursework on the numeric methods, and I got my kaleya and tried it. It tasted very bitter, but the dreams were cool) Like how my mom cut off my nose on March 2, 2021)0). Very cool, yeah)))))) Well, seriously, they became more, and with sleep better became when drinking kaleya. I was also late for my 5 course. Except that the teacher liked it so much in the end (maybe he even played a minigame with nu babies)) that he gave me a "A" in spite of the deadline. I was very happy about it) It's true that on June 20 I missed an important test, because I thought that day was not necessary to pass, went for a walk then with Petya, and the walk itself was boring. A few hours later, Myrza and I made a meme about abortions. And on June 22nd, we were already riding with Petya on his electric scooter. And yes, I knew what I wanted for my birthday! An electric scooter! Although I wanted it for the last birthday, then my parents were bad towards them, and Shabunka was. But now they were already okay with it, so the last days of June I was looking for the right scooter! I also decided, as in July 2016, to order a T-shirt with my own print! This time - there was a T-shirt with Nu (Shabunka's nose with eyes - such an alien), in general kayefff) By the end of June I was doing labs on artificial intelligence and they were very interesting in the end. It got to the point that I got interested in it all myself and with the help of machine learning I made predictions for the next few months and looked at statistics in Jupyter Notebook. On June 24, Petya and I chose the best electric scooter for me, it cost somewhere around 35 thousand rubles. But with Ruslan there were still occasional quarrels, and just at the end of June there was a conversation without me, which I did not know about at that time. June 27 was a test drive of a scooter, which I will get for my birthday, we went with Petya together, and I was also in a T-shirt with a print of Nu! And even on that day I managed to fight with Ruslan again over some bullshit. It was nearing the end of the month and my birthday was coming up. At the end of June my electric scooter was delivered and I will ride it in July! I also did all the labs on AI and there was only a little bit of studying left. On the last day of June I socialized with many friends and also waited for my birthday to come.`,
        song_rus: `https://www.youtube.com/embed/fNEABJ5HuJc?si=3o-DE_Dnz8xHgY8Z`, 
        song_en: `https://www.youtube.com/embed/fNEABJ5HuJc?si=3o-DE_Dnz8xHgY8Z`,
    },
]