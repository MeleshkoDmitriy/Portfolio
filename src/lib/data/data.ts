import onlineShop from '../../../public/screens/onlineShop.jpeg';
import todolist from '../../../public/screens/todolist.jpeg';
import muisic from '../../../public/screens/muisic.jpeg';
import wildturkey from '../../../public/screens/wildTurkey.jpeg';


export const projects = [
    {   
        id: 4,
        title: 'Online Shop Pioneer',
        image: onlineShop,
        description: 'Online Shop Pioneer is a web application that serves as an online marketplace for a wide range of products. Users can browse through different product categories, view detailed product descriptions, add items to their cart, set favorites products and make orders.',
        stack: ['React', 'Redux', 'Redux Toolkit', 'RTK Query', 'TypeScript', 'StyledComponents', 'AntDesign', 'Axios', 'ReactRouter'],
        features: [
            'User-friendly interface and design created using modern and aesthetically pleasing tools and technologies.',
            'Product catalog with various categories and the ability to filter products by price.',
            'Detailed product pages with information such as name, description, price, categories and images.',
            'Functionality to add products to favorites and manage them easily.',
            'Shopping cart for adding and removing items, with a total price calculation.',
            'Interactive notifications for an enhanced user experience.',
        ],
        github: 'https://github.com/MeleshkoDmitriy/Online-Shop-Pioneer',
        netlify: 'https://famous-heliotrope-04888a.netlify.app/',
    },
    {   
        id: 3,
        title: 'Todolist App',
        image: todolist,
        description: 'This is a TodoList application built with React and TypeScript. The app allows users to create, update, and delete tasks in various categories. It also provides features like marking tasks as completed and filtering tasks based on category.',
        stack: ['React', 'TypeScript', 'ReactQuery', 'TailwindCSS', 'SCSSmodules', 'SCSS', 'Axios', 'ReactRouter'],
        features: [
            'Create new tasks with specified category and title.',
            'Update the completion status of tasks.',
            'Delete tasks from the list.',
            'Filter tasks based on their category.',
            'Responsive design for mobile and desktop devices.',
        ],
        github: 'https://github.com/MeleshkoDmitriy/Todolist',
        netlify: 'https://dynamic-kitten-7e1916.netlify.app/',
    },
    {   
        id: 2,
        title: 'Muisic',
        image: muisic,
        description: 'Muisic - Music App made up with MUI library and React. It is simple web application which gives you opportunity to listen music. This project have only one electronic playlist right now, but it is can be more.',
        stack: ['React', 'JavaScript', 'Material-UI', 'SCSSmodules', 'SCSS', 'Axios'],
        features: [
            'Listen songs and switch them.',
            'Like and save your favourite tracks.',
            'Search tracks by artists and titles.',
            'Use download links.',
            'Turn volume to convenient value.',
            'More information and genres upcoming soon.',
        ],
        github: 'https://github.com/MeleshkoDmitriy/Muisic',
        netlify: 'https://deft-stardust-687370.netlify.app/',
    },
    {   
        id: 1,
        title: 'Wild Turkey Bourbon',
        image: wildturkey,
        description: 'This site is about Wild Turkey Bourbon company. I made a responsive layout up to 320px. Registration and authentication work with cookie. Please use english language to sign up and log in. You able to add products to your cart, change quantity or delete products. You will always know the price of your purchase.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        features: [
            'Registration and Authentication.',
            'Add products to your cart.',
            'Responsive layout up to 320px.',
        ],
        github: 'https://github.com/MeleshkoDmitriy/Wild-Turkey',
        netlify: 'https://moonlit-truffle-90e9b5.netlify.app/',
    },
]

