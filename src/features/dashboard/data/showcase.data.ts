import { MegaMenuItem, MenuItem, TreeNode } from 'primeng/api';

export interface WalletProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive';
}

export interface DataViewItem {
  id: number;
  name: string;
  status: string;
  amount: number;
}

export interface NamedItem {
  id: number;
  name: string;
}

export interface CarouselSlide {
  title: string;
  subtitle: string;
  color: string;
}

export interface GalleryImage {
  itemImageSrc: string;
  alt: string;
}

export interface MeterItem {
  label: string;
  value: number;
  color: string;
}

export interface TimelineEvent {
  status: string;
  date: string;
  icon: string;
  color: string;
}

export interface CityOption {
  label: string;
  value: string;
}

export interface CascadeGroup {
  label: string;
  value: string;
  items: CityOption[];
}

export const DEMO_CITIES: CityOption[] = [
  { label: 'تهران', value: 'tehran' },
  { label: 'اصفهان', value: 'isfahan' },
  { label: 'شیراز', value: 'shiraz' },
  { label: 'تبریز', value: 'tabriz' },
  { label: 'مشهد', value: 'mashhad' },
];

export const DEMO_SELECT_BTN_OPTIONS: CityOption[] = [
  { label: 'روزانه', value: 'daily' },
  { label: 'هفتگی', value: 'weekly' },
  { label: 'ماهانه', value: 'monthly' },
];

export const DEMO_COUNTRIES = [
  'ایران',
  'آلمان',
  'ژاپن',
  'کانادا',
  'استرالیا',
  'برزیل',
  'فرانسه',
  'ایتالیا',
  'اسپانیا',
  'ترکیه',
];

export const DEMO_CASCADE_DATA: CascadeGroup[] = [
  {
    label: 'آسیا',
    value: 'asia',
    items: [
      { label: 'ایران', value: 'iran' },
      { label: 'ژاپن', value: 'japan' },
      { label: 'هند', value: 'india' },
    ],
  },
  {
    label: 'اروپا',
    value: 'europe',
    items: [
      { label: 'آلمان', value: 'germany' },
      { label: 'فرانسه', value: 'france' },
      { label: 'ایتالیا', value: 'italy' },
    ],
  },
  {
    label: 'آمریکا',
    value: 'america',
    items: [
      { label: 'کانادا', value: 'canada' },
      { label: 'برزیل', value: 'brazil' },
    ],
  },
];

export const DEMO_PRODUCTS: WalletProduct[] = [
  { id: 1, name: 'کیف پول طلایی', category: 'کیف پول', price: 1200000, stock: 42, status: 'active' },
  { id: 2, name: 'کارت بانکی', category: 'کارت', price: 850000, stock: 18, status: 'active' },
  { id: 3, name: 'انتقال آنی', category: 'تراکنش', price: 45000, stock: 999, status: 'active' },
  { id: 4, name: 'پرداخت قسطی', category: 'اعتبار', price: 320000, stock: 7, status: 'inactive' },
  { id: 5, name: 'کیف ارز دیجیتال', category: 'کیف پول', price: 2100000, stock: 11, status: 'active' },
  { id: 6, name: 'بیمه سفر', category: 'خدمات', price: 180000, stock: 25, status: 'active' },
  { id: 7, name: 'شارژ سیم‌کارت', category: 'شارژ', price: 50000, stock: 500, status: 'active' },
  { id: 8, name: 'پرداخت قبض', category: 'قبض', price: 0, stock: 0, status: 'active' },
];

export const DEMO_DATA_VIEW_ITEMS: DataViewItem[] = [
  { id: 1, name: 'تراکنش ورودی', status: 'موفق', amount: 2500000 },
  { id: 2, name: 'تراکنش خروجی', status: 'موفق', amount: 850000 },
  { id: 3, name: 'درخواست برداشت', status: 'در انتظار', amount: 1200000 },
  { id: 4, name: 'شارژ کیف پول', status: 'موفق', amount: 500000 },
  { id: 5, name: 'انتقال بین‌بانکی', status: 'ناموفق', amount: 300000 },
  { id: 6, name: 'پرداخت QR', status: 'موفق', amount: 175000 },
];

export const DEMO_ORDER_LIST: NamedItem[] = [
  { id: 1, name: 'تایید هویت' },
  { id: 2, name: 'افزودن کارت' },
  { id: 3, name: 'شارژ اولیه' },
  { id: 4, name: 'فعال‌سازی OTP' },
];

export const DEMO_PICK_SOURCE: NamedItem[] = [
  { id: 1, name: 'حساب جاری' },
  { id: 2, name: 'حساب پس‌انداز' },
  { id: 3, name: 'کیف ارزی' },
];

export const DEMO_PICK_TARGET: NamedItem[] = [
  { id: 4, name: 'کیف اصلی' },
];

export const DEMO_TREE_NODES: TreeNode[] = [
  {
    key: 'wallet',
    label: 'کیف پول',
    icon: 'pi pi-wallet',
    expanded: true,
    children: [
      {
        key: 'cards',
        label: 'کارت‌ها',
        icon: 'pi pi-credit-card',
        children: [
          { key: 'visa', label: 'ویزا', icon: 'pi pi-circle' },
          { key: 'master', label: 'مسترکارت', icon: 'pi pi-circle' },
        ],
      },
      {
        key: 'transactions',
        label: 'تراکنش‌ها',
        icon: 'pi pi-list',
        children: [
          { key: 'in', label: 'ورودی', icon: 'pi pi-arrow-down' },
          { key: 'out', label: 'خروجی', icon: 'pi pi-arrow-up' },
        ],
      },
    ],
  },
  {
    key: 'settings',
    label: 'تنظیمات',
    icon: 'pi pi-cog',
    children: [
      { key: 'security', label: 'امنیت', icon: 'pi pi-shield' },
      { key: 'profile', label: 'پروفایل', icon: 'pi pi-user' },
    ],
  },
];

export function findTreeNodeByKey(nodes: TreeNode[], key: string): TreeNode | null {
  for (const node of nodes) {
    if (node.key === key) {
      return node;
    }
    if (node.children?.length) {
      const found = findTreeNodeByKey(node.children, key);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export const DEMO_TREE_TABLE_NODES = [
  {
    key: '0',
    data: { name: 'پوشه مالی', size: '2.4 MB', type: 'folder' },
    children: [
      { key: '0-0', data: { name: 'گزارش-فروردین.pdf', size: '540 KB', type: 'file' } },
      { key: '0-1', data: { name: 'گزارش-اردیبهشت.pdf', size: '620 KB', type: 'file' } },
      {
        key: '0-2',
        data: { name: 'آرشیو', size: '1.2 MB', type: 'folder' },
        children: [{ key: '0-2-0', data: { name: 'تراکنش‌ها.csv', size: '310 KB', type: 'file' } }],
      },
    ],
  },
];

export const DEMO_ORG_DATA: TreeNode[] = [
  {
    label: 'مدیرعامل',
    expanded: true,
    type: 'person',
    styleClass: 'p-person',
    data: { title: 'مدیرعامل' },
    children: [
      {
        label: 'مدیر فنی',
        type: 'person',
        data: { title: 'CTO' },
        children: [
          { label: 'تیم فرانت', type: 'person', data: { title: 'Frontend' } },
          { label: 'تیم بک‌اند', type: 'person', data: { title: 'Backend' } },
        ],
      },
      {
        label: 'مدیر مالی',
        type: 'person',
        data: { title: 'CFO' },
        children: [{ label: 'حسابداری', type: 'person', data: { title: 'Accounting' } }],
      },
    ],
  },
];

export const DEMO_TIMELINE_EVENTS: TimelineEvent[] = [
  { status: 'ثبت درخواست', date: '۱۴۰۴/۰۱/۱۵ - ۱۰:۳۰', icon: 'pi pi-check', color: '#22c55e' },
  { status: 'بررسی امنیتی', date: '۱۴۰۴/۰۱/۱۵ - ۱۱:۰۰', icon: 'pi pi-shield', color: '#6366f1' },
  { status: 'تایید نهایی', date: '۱۴۰۴/۰۱/۱۵ - ۱۱:۴۵', icon: 'pi pi-verified', color: '#0ea5e9' },
  { status: 'واریز به کیف پول', date: '۱۴۰۴/۰۱/۱۵ - ۱۲:۰۰', icon: 'pi pi-wallet', color: '#f59e0b' },
];

export const DEMO_CAROUSEL_ITEMS: CarouselSlide[] = [
  { title: 'کیف پول هوشمند', subtitle: 'مدیریت آسان دارایی', color: '#6366f1' },
  { title: 'انتقال آنی', subtitle: '۲۴ ساعته و امن', color: '#22c55e' },
  { title: 'گزارش مالی', subtitle: 'نمودار و آمار لحظه‌ای', color: '#f59e0b' },
  { title: 'پرداخت QR', subtitle: 'سریع در فروشگاه', color: '#ec4899' },
];

export const DEMO_GALLERY_IMAGES: GalleryImage[] = [
  { itemImageSrc: '/gallery/sample-1.svg', alt: 'نمونه گالری ۱' },
  { itemImageSrc: '/gallery/sample-2.svg', alt: 'نمونه گالری ۲' },
  { itemImageSrc: '/gallery/sample-1.svg', alt: 'نمونه گالری ۳' },
];

export const DEMO_METERS: MeterItem[] = [
  { label: 'CPU', value: 35, color: '#6366f1' },
  { label: 'RAM', value: 60, color: '#22c55e' },
  { label: 'Disk', value: 80, color: '#f59e0b' },
  { label: 'Network', value: 45, color: '#ec4899' },
];

export const DEMO_SCROLLTOP_LINES: string[] = [
  'تراکنش ۱ — پرداخت ۲۵۰,۰۰۰ تومان',
  'تراکنش ۲ — واریز ۱,۵۰۰,۰۰۰ تومان',
  'تراکنش ۳ — برداشت ۳۰۰,۰۰۰ تومان',
  'تراکنش ۴ — پرداخت ۸۵,۰۰۰ تومان',
  'تراکنش ۵ — واریز ۲,۰۰۰,۰۰۰ تومان',
  'تراکنش ۶ — انتقال ۴۵۰,۰۰۰ تومان',
  'تراکنش ۷ — پرداخت ۱۲۰,۰۰۰ تومان',
  'تراکنش ۸ — واریز ۹۰۰,۰۰۰ تومان',
  'تراکنش ۹ — برداشت ۵۵,۰۰۰ تومان',
  'تراکنش ۱۰ — پرداخت ۳۱۰,۰۰۰ تومان',
  'تراکنش ۱۱ — واریز ۷۵۰,۰۰۰ تومان',
  'تراکنش ۱۲ — انتقال ۶۰۰,۰۰۰ تومان',
];

export const DEMO_BREADCRUMB_ITEMS: MenuItem[] = [
  { label: 'داشبورد', routerLink: '/' },
  { label: 'کیف پول', routerLink: '/' },
  { label: 'تراکنش‌ها', routerLink: '/' },
  { label: 'جزئیات' },
];

export const DEMO_MENU_ITEMS: MenuItem[] = [
  { label: 'جدید', icon: 'pi pi-plus', command: () => {} },
  { label: 'ویرایش', icon: 'pi pi-pencil', command: () => {} },
  { separator: true },
  { label: 'حذف', icon: 'pi pi-trash', command: () => {} },
];

export const DEMO_MENUBAR_ITEMS: MenuItem[] = [
  {
    label: 'فایل',
    icon: 'pi pi-file',
    items: [
      { label: 'جدید', icon: 'pi pi-plus' },
      { label: 'باز کردن', icon: 'pi pi-folder-open' },
      { separator: true },
      { label: 'خروج', icon: 'pi pi-power-off' },
    ],
  },
  {
    label: 'ویرایش',
    icon: 'pi pi-pencil',
    items: [
      { label: 'کپی', icon: 'pi pi-copy' },
      { label: 'چسباندن', icon: 'pi pi-clone' },
    ],
  },
  {
    label: 'راهنما',
    icon: 'pi pi-question-circle',
    items: [{ label: 'درباره', icon: 'pi pi-info-circle' }],
  },
];

export const DEMO_TIERED_ITEMS: MenuItem[] = [
  {
    label: 'فایل',
    icon: 'pi pi-file',
    items: [
      {
        label: 'جدید',
        icon: 'pi pi-plus',
        items: [
          { label: 'سند', icon: 'pi pi-file' },
          { label: 'پوشه', icon: 'pi pi-folder' },
        ],
      },
      { label: 'باز کردن', icon: 'pi pi-folder-open' },
    ],
  },
  { label: 'جستجو', icon: 'pi pi-search' },
];

export const DEMO_MEGA_ITEMS: MegaMenuItem[] = [
  {
    label: 'محصولات',
    icon: 'pi pi-box',
    items: [
      [
        { label: 'کیف پول', icon: 'pi pi-wallet' },
        { label: 'کارت بانکی', icon: 'pi pi-credit-card' },
        { label: 'انتقال', icon: 'pi pi-send' },
      ],
      [
        { label: 'گزارش', icon: 'pi pi-chart-bar' },
        { label: 'تنظیمات', icon: 'pi pi-cog' },
        { label: 'پشتیبانی', icon: 'pi pi-comments' },
      ],
    ],
  },
  {
    label: 'خدمات',
    icon: 'pi pi-briefcase',
    items: [[{ label: 'شارژ' }, { label: 'قبض' }, { label: 'بیمه' }]],
  },
];

export const DEMO_DOCK_ITEMS: MenuItem[] = [
  { label: 'Finder', icon: 'pi pi-folder' },
  { label: 'Mail', icon: 'pi pi-envelope' },
  { label: 'Photos', icon: 'pi pi-image' },
  { label: 'Wallet', icon: 'pi pi-wallet' },
  { label: 'Settings', icon: 'pi pi-cog' },
];

export const DEMO_SPEED_DIAL_ITEMS: MenuItem[] = [
  { label: 'افزودن', icon: 'pi pi-plus' },
  { label: 'ویرایش', icon: 'pi pi-pencil' },
  { label: 'اشتراک', icon: 'pi pi-share-alt' },
  { label: 'حذف', icon: 'pi pi-trash' },
];

export const DEMO_CONTEXT_MENU_ITEMS: MenuItem[] = [
  { label: 'کپی', icon: 'pi pi-copy' },
  { label: 'چسباندن', icon: 'pi pi-clone' },
  { separator: true },
  { label: 'حذف', icon: 'pi pi-trash' },
];

export const DEMO_COMMAND_MENU_ITEMS: MenuItem[] = [
  { label: 'داشبورد', icon: 'pi pi-home' },
  { label: 'تراکنش‌ها', icon: 'pi pi-list' },
  { label: 'کیف پول', icon: 'pi pi-wallet' },
  { label: 'تنظیمات', icon: 'pi pi-cog' },
  { label: 'خروج', icon: 'pi pi-power-off' },
];

/** مقادیر اولیه فرم‌ها — همه از قبل پر شده‌اند */
export const DEMO_FORM_STATE = {
  text: 'علی محمدی',
  textarea: 'توضیحات نمونه برای تست Textarea در پروژه کیف پول.',
  password: 'SecurePass123!',
  mask: '1404/01/15',
  number: 1250000,
  otp: '1234',
  tags: ['angular', 'primeng', 'wallet'],
  color: '#6366f1',
  knob: 72,
  slider: 65,
  rating: 4,
  checked: true,
  radio: 'weekly',
  toggleBtn: true,
  switchOn: true,
  selectBtn: 'daily',
  selectedCity: 'tehran',
  listbox: ['tehran', 'isfahan'] as string[],
  treeSelect: findTreeNodeByKey(DEMO_TREE_NODES, 'cards'),
  date: new Date(),
  autocompleteText: 'ایران',
  cascade: { label: 'ایران', value: 'iran' },
  progressValue: 68,
  dataViewLayout: 'list' as 'list' | 'grid',
};
