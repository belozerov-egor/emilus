import {
    DashboardOutlined,
    AppstoreOutlined,
    MailOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
    PictureOutlined,
    GiftOutlined,
    ShopOutlined,
    UsergroupAddOutlined, 
    MobileOutlined,
    SettingOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
    {
        key: "dashboards",
        path: `${APP_PREFIX_PATH}/dashboards`,
        title: "sidenav.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        isGroupTitle: true,
        submenu: [
            {
                key: "dashboards-default",
                path: `${APP_PREFIX_PATH}/dashboards/default`,
                title: "sidenav.dashboard.default",
                icon: DashboardOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "dashboards-ecommerce",
                path: `${APP_PREFIX_PATH}/dashboards/ecommerce`,
                title: "sidenav.dashboard.catalog",
                icon: ShoppingCartOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: "dashboards-ecommerce-productList",
                        path: `${APP_PREFIX_PATH}/dashboards/ecommerce/product-list`,
                        title: "sidenav.dashboard.catalog.productList",
                        icon: "",
                        breadcrumb: true,
                        submenu: [],
                    },
                    {
                        key: "dashboards-ecommerce-categories",
                        path: `${APP_PREFIX_PATH}/dashboards/ecommerce/categories`,
                        title: "sidenav.dashboard.catalog.categories",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                    {
                        key: "dashboards-ecommerce-collections",
                        path: `${APP_PREFIX_PATH}/dashboards/ecommerce/collections`,
                        title: "sidenav.dashboard.catalog.collections",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                    {
                        key: "dashboards-ecommerce-combo",
                        path: `${APP_PREFIX_PATH}/dashboards/ecommerce/combo`,
                        title: "sidenav.dashboard.catalog.combo",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                ],
            },
            {
                key: "dashboards-orders",
                path: `${APP_PREFIX_PATH}/dashboards/orders`,
                title: "sidenav.dashboard.orders",
                icon: ShoppingOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "dashboards-clients",
                path: `${APP_PREFIX_PATH}/dashboards/clients`,
                title: "sidenav.dashboard.clients",
                icon: UserOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: "dashboards-clients-clients-list",
                        path: `${APP_PREFIX_PATH}/dashboards/clients/clients-list`,
                        title: "sidenav.dashboard.clients.list",
                        icon: "",
                        breadcrumb: true,
                        submenu: [],
                    },
                    {
                        key: "dashboards-clients-clients-groups",
                        path: `${APP_PREFIX_PATH}/dashboards/clients/clients-groups`,
                        title: "sidenav.dashboard.clients.groups",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                ],
            },

            {
                key: "dashboards-banners",
                path: `${APP_PREFIX_PATH}/dashboards/banners`,
                title: "sidenav.dashboard.banners",
                icon: PictureOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "dashboards-promo-codes",
                path: `${APP_PREFIX_PATH}/dashboards/promo-codes`,
                title: "sidenav.dashboard.promo-codes",
                icon: GiftOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
              key: "dashboards-offline-points",
              path: `${APP_PREFIX_PATH}/dashboards/offline-points`,
              title: "sidenav.dashboard.offline-points",
              icon: ShopOutlined,
              breadcrumb: true,
              submenu: [
                  {
                      key: "dashboards-offline-points-addresses",
                      path: `${APP_PREFIX_PATH}/dashboards/offline-points/addresses`,
                      title: "sidenav.dashboard.offline-points.addresses",
                      icon: "",
                      breadcrumb: true,
                      submenu: [],
                  },
                  {
                      key: "dashboards--offline-points-geodata",
                      path: `${APP_PREFIX_PATH}/dashboards/offline-points/geodata`,
                      title: "sidenav.dashboard.offline-points.geodata",
                      icon: "",
                      breadcrumb: false,
                      submenu: [],
                  },
              ],
          },
          {
            key: "dashboards-employees",
            path: `${APP_PREFIX_PATH}/dashboards/employees`,
            title: "sidenav.dashboard.employees",
            icon: UsergroupAddOutlined,
            breadcrumb: false,
            submenu: [],
        },
          {
            key: "dashboards-mail",
            path: `${APP_PREFIX_PATH}/dashboards/mail`,
            title: "sidenav.dashboard.mail",
            icon: MailOutlined,
            breadcrumb: false,
            submenu: [],
        },
        ],
    },
];

const systemicNavTree = [
    {
        key: "systemic",
        path: `${APP_PREFIX_PATH}/systemic`,
        title: "sidenav.systemic",
        icon: AppstoreOutlined,
        breadcrumb: false,
        isGroupTitle: true,
        submenu: [
            {
                key: "systemic-settings",
                path: `${APP_PREFIX_PATH}/systemic/settings`,
                title: "sidenav.systemic.settings",
                icon: SettingOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "systemic-mobile",
                path: `${APP_PREFIX_PATH}/systemic/mobile`,
                title: "sidenav.systemic.mobile",
                icon: MobileOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "systemic-log",
                path: `${APP_PREFIX_PATH}/systemic/log`,
                title: "sidenav.systemic.log",
                icon: FileTextOutlined,
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
];





const navigationConfig = [
    ...dashBoardNavTree,
    ...systemicNavTree,
]

export default navigationConfig;
