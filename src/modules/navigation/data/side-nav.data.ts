import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'ADMINISTRATIVO',
        items: ['dashboard','categoria','fornCli','dataVencPadrao','formasPagamento'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    }
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    categoria:{
        icon: 'tachometer-alt',
        text: 'Categorias',
        link: '/dashboard',
    },
    fornCli:{
        icon: 'tachometer-alt',
        text: 'Fornecedor / Cliente',
        link: '/dashboard',
    },
    dataVencPadrao:{
        icon: 'tachometer-alt',
        text: 'Dia Vencimento Padrão',
        link: '/dashboard',
    },
    formasPagamento:{
        icon: 'tachometer-alt',
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
        icon: 'chart-area',
        text: 'Receitas',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Despesas',
        link: '/tables',
    },
};
