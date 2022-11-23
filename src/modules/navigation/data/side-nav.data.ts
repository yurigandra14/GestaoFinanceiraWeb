import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'ADMINISTRATIVO',
        items: ['dashboard','categoria','fornCli','dataVencPadrao','formasPagamento'],
    },
    // {
    //     text: 'INTERFACE',
    //     items: ['layouts', 'pages'],
    // },
    {
        text: 'CONTAS',
        items: ['charts', 'tables'],
    },
    // {
    //     text: 'ADDONS',
    //     items: ['charts', 'tables'],
    // }
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    categoria:{
        icon: 'list',
        text: 'Categorias',
        link: '/dashboard',
    },
    fornCli:{
        icon: 'truck',
        text: 'Fornecedor / Cliente',
        link: '/dashboard',
    },
    dataVencPadrao:{
        icon: 'calendar',
        text: 'Dia Vencimento Padrão',
        link: '/dashboard',
    },
    formasPagamento:{
        icon: 'money-bill-wave',
        text: 'Formas de Pagamento',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'receipt',
        text: 'Receitas',
        link: '/charts',
    },
    tables: {
        icon: 'wallet',
        text: 'Despesas',
        link: '/tables',
    },
};
