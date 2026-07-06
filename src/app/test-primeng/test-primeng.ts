import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { AutoComplete } from 'primeng/autocomplete';
import { AutoFocus } from 'primeng/autofocus';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { Bind } from 'primeng/bind';
import { BlockUI } from 'primeng/blockui';
import { Breadcrumb } from 'primeng/breadcrumb';
import { Button, ButtonDirective } from 'primeng/button';
import { Card } from 'primeng/card';
import { Carousel } from 'primeng/carousel';
import { CascadeSelect } from 'primeng/cascadeselect';
import { Checkbox } from 'primeng/checkbox';
import { Chip } from 'primeng/chip';
import { ClassNames } from 'primeng/classnames';
import { CommandMenu } from 'primeng/commandmenu';
import { Compare, CompareItem } from 'primeng/compare';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { ContextMenu } from 'primeng/contextmenu';
import { DataView } from 'primeng/dataview';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { Divider } from 'primeng/divider';
import { Dock } from 'primeng/dock';
import { Drawer } from 'primeng/drawer';
import { DialogService } from 'primeng/dynamicdialog';
import { Fieldset } from 'primeng/fieldset';
import { FileUpload, FileUploadHandlerEvent } from 'primeng/fileupload';
import { FloatLabel } from 'primeng/floatlabel';
import { Fluid } from 'primeng/fluid';
import { FocusTrap } from 'primeng/focustrap';
import { Gallery, GalleryContent, GalleryItem } from 'primeng/gallery';
import { IconField } from 'primeng/iconfield';
import { IftaLabel } from 'primeng/iftalabel';
import { Inplace, InplaceContent, InplaceDisplay } from 'primeng/inplace';
import { InputColor } from 'primeng/inputcolor';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputIcon } from 'primeng/inputicon';
import { InputMask } from 'primeng/inputmask';
import { InputNumber } from 'primeng/inputnumber';
import { InputOtp } from 'primeng/inputotp';
import { InputPassword } from 'primeng/inputpassword';
import { InputTags } from 'primeng/inputtags';
import { InputText } from 'primeng/inputtext';
import { KeyFilter } from 'primeng/keyfilter';
import { Knob } from 'primeng/knob';
import { Label } from 'primeng/label';
import { Listbox } from 'primeng/listbox';
import { MegaMenu } from 'primeng/megamenu';
import { Menu } from 'primeng/menu';
import { Menubar } from 'primeng/menubar';
import { Message } from 'primeng/message';
import { MeterGroup } from 'primeng/metergroup';
import { OrderList } from 'primeng/orderlist';
import { OrganizationChart } from 'primeng/organizationchart';
import { Paginator, PaginatorState } from 'primeng/paginator';
import { Panel } from 'primeng/panel';
import { PickList } from 'primeng/picklist';
import { Popover } from 'primeng/popover';
import { ProgressBar } from 'primeng/progressbar';
import { ProgressSpinner } from 'primeng/progressspinner';
import { RadioButton } from 'primeng/radiobutton';
import { Rating } from 'primeng/rating';
import { Ripple } from 'primeng/ripple';
import { ScrollArea, ScrollAreaContent, ScrollAreaViewport } from 'primeng/scrollarea';
import { Scroller } from 'primeng/scroller';
import { ScrollTop } from 'primeng/scrolltop';
import { Select } from 'primeng/select';
import { SelectButton } from 'primeng/selectbutton';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarLayout,
  SidebarMain,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from 'primeng/sidebar';
import { Skeleton } from 'primeng/skeleton';
import { Slider } from 'primeng/slider';
import { SpeedDial } from 'primeng/speeddial';
import { SplitButton } from 'primeng/splitbutton';
import { Splitter, SplitterPanel } from 'primeng/splitter';
import { Step, StepList, StepPanel, StepPanels, Stepper } from 'primeng/stepper';
import { StyleClass } from 'primeng/styleclass';
import { Table } from 'primeng/table';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import { Tag } from 'primeng/tag';
import { Terminal, TerminalService } from 'primeng/terminal';
import { Textarea } from 'primeng/textarea';
import { TieredMenu } from 'primeng/tieredmenu';
import { Timeline } from 'primeng/timeline';
import { Toast } from 'primeng/toast';
import { ToggleButton } from 'primeng/togglebutton';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Toolbar } from 'primeng/toolbar';
import { Tooltip } from 'primeng/tooltip';
import { Tree } from 'primeng/tree';
import { TreeSelect } from 'primeng/treeselect';
import { TreeTable, TreeTableToggler, TTRow } from 'primeng/treetable';

import { DynamicDialogDemo } from './dynamic-dialog-demo';

@Component({
  selector: 'app-test-primeng',
  imports: [
    CommonModule,
    FormsModule,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    AnimateOnScroll,
    AutoComplete,
    AutoFocus,
    Avatar,
    Badge,
    Bind,
    BlockUI,
    Breadcrumb,
    Button,
    ButtonDirective,
    Card,
    Carousel,
    CascadeSelect,
    Checkbox,
    Chip,
    ClassNames,
    CommandMenu,
    Compare,
    CompareItem,
    ConfirmDialog,
    ConfirmPopup,
    ContextMenu,
    DataView,
    DatePicker,
    Dialog,
    Divider,
    Dock,
    Drawer,
    Fieldset,
    FileUpload,
    FloatLabel,
    Fluid,
    FocusTrap,
    Gallery,
    GalleryContent,
    GalleryItem,
    TreeTableToggler,
    TTRow,
    IconField,
    IftaLabel,
    Inplace,
    InplaceDisplay,
    InplaceContent,
    InputColor,
    InputGroup,
    InputGroupAddon,
    InputIcon,
    InputMask,
    InputNumber,
    InputOtp,
    InputPassword,
    InputTags,
    InputText,
    KeyFilter,
    Knob,
    Label,
    Listbox,
    MegaMenu,
    Menu,
    Menubar,
    Message,
    MeterGroup,
    OrderList,
    OrganizationChart,
    Paginator,
    Panel,
    PickList,
    Popover,
    ProgressBar,
    ProgressSpinner,
    RadioButton,
    Rating,
    Ripple,
    ScrollArea,
    ScrollAreaViewport,
    ScrollAreaContent,
    Scroller,
    ScrollTop,
    Select,
    SelectButton,
    Sidebar,
    SidebarLayout,
    SidebarHeader,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMain,
    Skeleton,
    Slider,
    SpeedDial,
    SplitButton,
    Splitter,
    SplitterPanel,
    Stepper,
    StepList,
    Step,
    StepPanels,
    StepPanel,
    StyleClass,
    Table,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Tag,
    Terminal,
    Textarea,
    TieredMenu,
    Timeline,
    Toast,
    ToggleButton,
    ToggleSwitch,
    Toolbar,
    Tooltip,
    Tree,
    TreeSelect,
    TreeTable,
  ],
  providers: [MessageService, ConfirmationService, DialogService, TerminalService],
  templateUrl: './test-primeng.html',
  styles: `
    :host {
      display: block;
    }

    .demo-card {
      border: 1px solid var(--p-content-border-color, #e2e8f0);
      border-radius: 0.75rem;
      padding: 1rem;
      background: var(--p-content-background, #fff);
    }

    .demo-card h3 {
      margin: 0 0 0.75rem;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .demo-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }

    .sidebar-demo {
      height: 220px;
      border: 1px solid var(--p-content-border-color, #e2e8f0);
      border-radius: 0.75rem;
      overflow: hidden;
    }
  `,
})
export class TestPrimeng {
  private readonly confirmationService = inject(ConfirmationService);
  private readonly messageService = inject(MessageService);
  private readonly dialogService = inject(DialogService);

  readonly totalComponents = 93;

  text = '';
  textarea = '';
  password = '';
  mask = '';
  number = 42;
  otp = '';
  tags: string[] = ['angular', 'primeng'];
  color = '#6366f1';
  knob = 60;
  slider = 50;
  rating = 3;
  checked = true;
  radio = 'a';
  toggle = true;
  toggleBtn = false;
  switchOn = true;
  selectedCity: string | null = null;
  selectedCities: string[] = [];
  selectBtn = 'one';
  listbox: string[] = [];
  treeSelect: unknown = null;
  date: Date | null = new Date();
  autocompleteText = '';
  filteredCountries: string[] = [];
  cascade: unknown = null;

  dialogVisible = false;
  drawerVisible = false;
  blocked = false;
  inplace = 'PrimeNG';
  classNamesActive = false;
  styleClassVisible = false;
  paginatorFirst = 0;

  cities = [
    { label: 'تهران', value: 'tehran' },
    { label: 'اصفهان', value: 'isfahan' },
    { label: 'شیراز', value: 'shiraz' },
    { label: 'تبریز', value: 'tabriz' },
  ];

  selectBtnOptions = [
    { label: 'یک', value: 'one' },
    { label: 'دو', value: 'two' },
    { label: 'سه', value: 'three' },
  ];

  countries = ['ایران', 'آلمان', 'ژاپن', 'کانادا', 'استرالیا', 'برزیل'];

  cascadeData = [
    {
      label: 'آسیا',
      value: 'asia',
      items: [
        { label: 'ایران', value: 'iran' },
        { label: 'ژاپن', value: 'japan' },
      ],
    },
    {
      label: 'اروپا',
      value: 'europe',
      items: [
        { label: 'آلمان', value: 'germany' },
        { label: 'فرانسه', value: 'france' },
      ],
    },
  ];

  products = [
    { id: 1, name: 'کیف پول', category: 'مالی', price: 120 },
    { id: 2, name: 'کارت', category: 'بانکی', price: 80 },
    { id: 3, name: 'انتقال', category: 'تراکنش', price: 45 },
  ];

  dataViewItems = [
    { name: 'آیتم ۱', status: 'فعال' },
    { name: 'آیتم ۲', status: 'غیرفعال' },
    { name: 'آیتم ۳', status: 'فعال' },
  ];

  orderList = [
    { name: 'اول' },
    { name: 'دوم' },
    { name: 'سوم' },
  ];

  pickSource = [{ name: 'منبع ۱' }, { name: 'منبع ۲' }];
  pickTarget: { name: string }[] = [];

  treeNodes = [
    {
      label: 'ریشه',
      expanded: true,
      children: [
        { label: 'شاخه ۱' },
        { label: 'شاخه ۲', children: [{ label: 'برگ' }] },
      ],
    },
  ];

  treeTableNodes = [
    {
      key: '0',
      data: { name: 'پوشه', size: '100kb' },
      children: [{ key: '0-0', data: { name: 'فایل', size: '50kb' } }],
    },
  ];

  orgData = [
    {
      label: 'مدیرعامل',
      expanded: true,
      children: [{ label: 'مدیر فنی' }, { label: 'مدیر مالی' }],
    },
  ];

  timelineEvents = [
    { status: 'ثبت', date: '۱۵/۰۱/۱۴۰۴' },
    { status: 'بررسی', date: '۱۶/۰۱/۱۴۰۴' },
    { status: 'تایید', date: '۱۷/۰۱/۱۴۰۴' },
  ];

  scrollerItems = Array.from({ length: 100 }, (_, i) => `آیتم ${i + 1}`);

  carouselItems = [
    { title: 'اسلاید ۱', color: '#6366f1' },
    { title: 'اسلاید ۲', color: '#22c55e' },
    { title: 'اسلاید ۳', color: '#f59e0b' },
  ];

  galleryImages = [
    { itemImageSrc: '/gallery/sample-1.svg', alt: '۱' },
    { itemImageSrc: '/gallery/sample-2.svg', alt: '۲' },
  ];

  meters = [
    { label: 'CPU', value: 35, color: '#6366f1' },
    { label: 'RAM', value: 60, color: '#22c55e' },
    { label: 'Disk', value: 80, color: '#f59e0b' },
  ];

  breadcrumbItems = [
    { label: 'خانه', routerLink: '/' },
    { label: 'تست', routerLink: '/' },
    { label: 'PrimeNG' },
  ];

  menuItems = [
    { label: 'جدید', icon: 'pi pi-plus' },
    { label: 'حذف', icon: 'pi pi-trash' },
  ];

  menubarItems = [
  {
    label: 'فایل',
    items: [{ label: 'جدید' }, { label: 'باز کردن' }],
  },
  { label: 'ویرایش', items: [{ label: 'کپی' }, { label: 'چسباندن' }] },
  ];

  tieredItems = [
    {
      label: 'فایل',
      icon: 'pi pi-file',
      items: [{ label: 'جدید', icon: 'pi pi-plus' }],
    },
  ];

  megaItems = [
    {
      label: 'محصولات',
      items: [[{ label: 'کیف پول' }, { label: 'کارت' }]],
    },
  ];

  dockItems = [
    { label: 'Finder', icon: 'pi pi-folder' },
    { label: 'Mail', icon: 'pi pi-envelope' },
    { label: 'Photos', icon: 'pi pi-image' },
  ];

  speedDialItems = [
    { label: 'افزودن', icon: 'pi pi-plus' },
    { label: 'ویرایش', icon: 'pi pi-pencil' },
  ];

  contextMenuItems = [{ label: 'کپی' }, { label: 'حذف' }];

  commandMenuItems = [
    { label: 'داشبورد', icon: 'pi pi-home' },
    { label: 'تنظیمات', icon: 'pi pi-cog' },
  ];

  step = signal(1);

  searchCountries(event: { query?: string }): void {
    const query = (event.query ?? '').toLowerCase();
    this.filteredCountries = this.countries.filter((c) => c.toLowerCase().includes(query));
  }

  showToast(): void {
    this.messageService.add({ severity: 'success', summary: 'Toast', detail: 'پیام PrimeNG' });
  }

  confirmDialog(): void {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      header: 'تایید',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.messageService.add({ severity: 'info', summary: 'تایید شد' }),
    });
  }

  confirmPopup(event: Event): void {
    this.confirmationService.confirm({
      target: event.target as HTMLElement,
      message: 'حذف شود؟',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.messageService.add({ severity: 'warn', summary: 'حذف شد' }),
    });
  }

  openDynamicDialog(): void {
    this.dialogService.open(DynamicDialogDemo, {
      header: 'دیالوگ داینامیک',
      width: '420px',
      modal: true,
    });
  }

  toggleBlock(): void {
    this.blocked = true;
    setTimeout(() => (this.blocked = false), 1500);
  }

  onPaginatorChange(event: PaginatorState): void {
    this.paginatorFirst = event.first ?? 0;
  }

  onFileUpload(event: FileUploadHandlerEvent): void {
    const file = event.files[0];
  this.messageService.add({
      severity: 'info',
      summary: 'فایل انتخاب شد',
      detail: file?.name ?? 'بدون نام',
    });
  }
}
