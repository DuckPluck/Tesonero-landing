import advantageIcon1 from './src/assets/advantage-icon1.svg';
import advantageIcon2 from './src/assets/advantage-icon2.svg';
import advantageIcon3 from './src/assets/advantage-icon3.svg';
import advantageIcon4 from './src/assets/advantage-icon4.svg';
import advantageIcon5 from './src/assets/advantage-icon5.svg';
import quoteAvatar from './src/assets/quote-avatar.png'

export interface Advantage {
    title: string;
    text: string;
    icon: string;
    id: number;
}

export const advantages: Advantage[] = [
    {
        title: 'Компактность и легкость',
        text: 'Stability 24 подходит для использования в домах, квартирах, офисах, помещениях хозяйственного и промышленного предназначения.',
        icon: advantageIcon1,
        id: 0,
    },
    {
        title: 'Охватывает площадь одной квартиры',
        text: 'Stability 24 подходит для использования в домах, квартирах, офисах, помещениях хозяйственного и промышленного предназначения. Stability 24 подходит для использования в домах, квартирах, офисах, помещениях хозяйственного и промышленного предназначения.',
        icon: advantageIcon2,
        id: 1,
    },
    {
        title: 'Подходит для любых помещений',
        text: 'Stability 24 подходит для использования в домах, квартирах, офисах, помещениях хозяйственного и промышленного предназначения.',
        icon: advantageIcon3,
        id: 2,
    },
    {
        title: 'Простота эксплуатации',
        text: 'Stability 24 подходит для использования в домах, квартирах, офисах, помещениях хозяйственного и промышленного предназначения.',
        icon: advantageIcon4,
        id: 3,
    },
    {
        title: 'Экономичность',
        text: 'Stability 24 подходит для использования в домах, квартирах, офисах, помещениях хозяйственного и промышленного предназначения.',
        icon: advantageIcon5,
        id: 4,
    },
];


export interface Reviews {
    mainQuote: { author: string, text: string, avatar: string };
    leftQuote: { author: string, text: string, avatar: string };
    rightQuote: { author: string, text: string };
}

export const reviews: Reviews = {
    mainQuote: {
        author: 'Лариса Петрова',
        text: 'Никогда бы не подумала, что экономить свет так просто! Раньше постоянно ограничивала пользование\n' +
            '                        техникой. Стиралку запускала раз в неделю, посудомойкой не пользовалась, свет постоянно\n' +
            '                        выключала, и все равно экономия выходила мизерная. Подруга подарила мне Stability 24. В первый\n' +
            '                        месяц при установленном режиме пользования техникой счет сократился почти в 2 раза! Сейчас\n' +
            '                        вернулась к прежнему режиму, и не нарадуюсь. Счет за свет не растет, и это круто.',
        avatar: quoteAvatar,
    },

    leftQuote: {
        author: 'Лариса Петрова',
        text: 'Никогда бы не подумала, что экономить свет так просто! Раньше постоянно ограничивала пользование техникой.',
        avatar: quoteAvatar,
    },

    rightQuote: {
        author: 'Лариса Петрова',
        text: 'Сейчас вернулась к прежнему режиму, и не нарадуюсь. Счет за свет не растет, и это круто.',
    },
}