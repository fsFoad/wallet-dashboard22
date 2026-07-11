import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';
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
import {
  Gallery,
  GalleryContent,
  GalleryFooter,
  GalleryItem,
  GalleryNext,
  GalleryPrev,
  GalleryThumbnail,
  GalleryThumbnailContent,
  GalleryThumbnailItem,
} from 'primeng/gallery';
import { IconField } from 'primeng/iconfield';
import { IftaLabel } from 'primeng/iftalabel';
import { Inplace } from 'primeng/inplace';
import { InputColor, InputColorArea, InputColorAreaBackground, InputColorAreaHandle, InputColorInput, InputColorSlider, InputColorSliderHandle, InputColorSliderTrack, InputColorSwatch, InputColorSwatchBackground } from 'primeng/inputcolor';
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

import { DynamicDialogDemoComponent } from '../../components/dynamic-dialog-demo/dynamic-dialog-demo.component';
import {
  DEMO_BREADCRUMB_ITEMS,
  DEMO_CAROUSEL_ITEMS,
  DEMO_CASCADE_DATA,
  DEMO_CITIES,
  DEMO_COMMAND_MENU_ITEMS,
  DEMO_CONTEXT_MENU_ITEMS,
  DEMO_COUNTRIES,
  DEMO_DATA_VIEW_ITEMS,
  DEMO_DOCK_ITEMS,
  DEMO_FORM_STATE,
  DEMO_GALLERY_IMAGES,
  DEMO_MEGA_ITEMS,
  DEMO_MENU_ITEMS,
  DEMO_MENUBAR_ITEMS,
  DEMO_METERS,
  DEMO_SCROLLTOP_LINES,
  DEMO_ORDER_LIST,
  DEMO_ORG_DATA,
  DEMO_PICK_SOURCE,
  DEMO_PICK_TARGET,
  DEMO_PRODUCTS,
  DEMO_SELECT_BTN_OPTIONS,
  DEMO_SPEED_DIAL_ITEMS,
  DEMO_TIERED_ITEMS,
  DEMO_TIMELINE_EVENTS,
  DEMO_TREE_NODES,
  DEMO_TREE_TABLE_NODES,
} from '../../data/showcase.data';

@Component({
  selector: 'app-showcase',
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
    GalleryFooter,
    GalleryItem,
    GalleryPrev,
    GalleryNext,
    GalleryThumbnail,
    GalleryThumbnailContent,
    GalleryThumbnailItem,
    TreeTableToggler,
    TTRow,
    IconField,
    IftaLabel,
    Inplace,
    InputColor,
    InputColorArea,
    InputColorAreaBackground,
    InputColorAreaHandle,
    InputColorSlider,
    InputColorSliderTrack,
    InputColorSliderHandle,
    InputColorSwatch,
    InputColorSwatchBackground,
    InputColorInput,
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
  templateUrl: './showcase.component.html',
})
export class ShowcaseComponent implements OnInit {
  private readonly confirmationService = inject(ConfirmationService);
  private readonly messageService = inject(MessageService);
  private readonly dialogService = inject(DialogService);
  private readonly terminalService = inject(TerminalService);
  private readonly destroyRef = inject(DestroyRef);

  readonly totalComponents = 93;

  text = DEMO_FORM_STATE.text;
  textarea = DEMO_FORM_STATE.textarea;
  password = DEMO_FORM_STATE.password;
  mask = DEMO_FORM_STATE.mask;
  number = DEMO_FORM_STATE.number;
  otp = DEMO_FORM_STATE.otp;
  tags = [...DEMO_FORM_STATE.tags];
  color = DEMO_FORM_STATE.color;
  knob = DEMO_FORM_STATE.knob;
  slider = DEMO_FORM_STATE.slider;
  rating = DEMO_FORM_STATE.rating;
  checked = DEMO_FORM_STATE.checked;
  radio = 'a';
  toggleBtn = DEMO_FORM_STATE.toggleBtn;
  switchOn = DEMO_FORM_STATE.switchOn;
  selectedCity = DEMO_FORM_STATE.selectedCity;
  selectBtn = DEMO_FORM_STATE.selectBtn;
  listbox = [...DEMO_FORM_STATE.listbox];
  treeSelect: TreeNode | null = DEMO_FORM_STATE.treeSelect;
  date: Date | null = DEMO_FORM_STATE.date;
  autocompleteText = DEMO_FORM_STATE.autocompleteText;
  filteredCountries: string[] = [];
  cascade = DEMO_FORM_STATE.cascade;
  progressValue = DEMO_FORM_STATE.progressValue;

  dialogVisible = false;
  drawerVisible = false;
  blocked = false;
  inplace = '۱,۲۵۰,۰۰۰ تومان';
  classNamesActive = true;
  paginatorFirst = 0;
  paginatorTotal = DEMO_PRODUCTS.length * 3;

  cities = DEMO_CITIES;
  selectBtnOptions = DEMO_SELECT_BTN_OPTIONS;
  countries = DEMO_COUNTRIES;
  cascadeData = DEMO_CASCADE_DATA;
  products = DEMO_PRODUCTS;
  dataViewItems = DEMO_DATA_VIEW_ITEMS;
  orderList = [...DEMO_ORDER_LIST];
  pickSource = [...DEMO_PICK_SOURCE];
  pickTarget = [...DEMO_PICK_TARGET];
  treeNodes = DEMO_TREE_NODES;
  treeTableNodes = DEMO_TREE_TABLE_NODES;
  orgData = DEMO_ORG_DATA;
  timelineEvents = DEMO_TIMELINE_EVENTS;
  scrollerItems = Array.from({ length: 100 }, (_, i) => `تراکنش #${1000 + i}`);
  carouselItems = DEMO_CAROUSEL_ITEMS;
  galleryImages = DEMO_GALLERY_IMAGES;
  meters = DEMO_METERS;
  scrollTopLines = DEMO_SCROLLTOP_LINES;
  breadcrumbItems = DEMO_BREADCRUMB_ITEMS;
  menuItems = DEMO_MENU_ITEMS;
  menubarItems = DEMO_MENUBAR_ITEMS;
  tieredItems = DEMO_TIERED_ITEMS;
  megaItems = DEMO_MEGA_ITEMS;
  dockItems = DEMO_DOCK_ITEMS;
  speedDialItems = DEMO_SPEED_DIAL_ITEMS;
  contextMenuItems = DEMO_CONTEXT_MENU_ITEMS;
  commandMenuItems = DEMO_COMMAND_MENU_ITEMS;

  step = signal(1);

  ngOnInit(): void {
    this.terminalService.commandHandler.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((command) => {
      const cmd = command.trim().toLowerCase();
      if (cmd === 'help') {
        this.terminalService.sendResponse('دستورات: help, date, balance, clear');
      } else if (cmd === 'date') {
        this.terminalService.sendResponse(new Date().toLocaleString('fa-IR'));
      } else if (cmd === 'balance') {
        this.terminalService.sendResponse('موجودی: ۱,۲۵۰,۰۰۰ تومان');
      } else if (cmd === 'clear') {
        this.terminalService.sendResponse('');
      } else {
        this.terminalService.sendResponse(`دستور ناشناخته: ${command}`);
      }
    });
  }

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
    this.dialogService.open(DynamicDialogDemoComponent, {
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
