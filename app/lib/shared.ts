import {
  IconBarbell,
  IconBed,
  IconBooks,
  IconCar,
  IconChess,
  IconCoffee,
  IconDeviceLaptop,
  IconFirstAidKit,
  IconFlower,
  IconGasStation,
  IconPaint,
  IconPaperBag,
  IconPaperclip,
  IconPaw,
  IconPlane,
  IconShoppingCart,
  IconTheater,
  IconTicket,
  IconToolsKitchen2,
} from '@tabler/icons-react';

export enum Routes {
  AddCards = '/add-cards',
  MyCards = '/my-cards',
  Settings = '/settings',
  Offline = '/offline',
  CreateCard = '/create-card',
  ScanCard = '/scan-card',
}

export enum Cookies {
  LandingPage = 'LandingPage',
}

export const ICON_COLOR = '#db924b';

export enum PredefinedCompanies {
  TESCO = 'Tesco',
  DM = 'Dm',
  IKEA = 'Ikea',
  BILLA = 'Billa',
  LIDL = 'Lidl',
  TERNO = 'Terno',
  PET_CENTER = 'Pet center',
  ALBERT = 'Albert',
  GLOBUS = 'Globus',
  ROSSMANN = 'Rossmann',
  AUPARK = 'Aupark',
  DATART = 'Datart',
  KAUFLAND = 'Kaufland',
  MALL = 'Mall',
  NOTINO = 'Notino',
  O2 = 'O2',
  SPORTISIMO = 'Sportisimo',
  TETA = 'Teta',
  ZOOT = 'Zoot',
}

export enum CardIcon {
  Grocery = 'Grocery',
  Retail = 'Retail',
  Pharmacy = 'Pharmacy',
  Gas = 'Gas Station',
  Restaurant = 'Restaurant',
  Cafes = 'Cafés',
  Accommodation = 'Accommodation',
  Airlines = 'Airlines',
  Car = 'Car Rental',
  Culture = 'Culture',
  Beauty = 'Beauty',
  Books = 'Books',
  Fitness = 'Fitness',
  Electronic = 'Electronic',
  Pet = 'Pet',
  Hobby = 'Hobby',
  Office = 'Office',
  Gaming = 'Gaming',
  Entertainment = 'Entertainment',
}
export const iconsMap = {
  [CardIcon.Grocery]: IconShoppingCart,
  [CardIcon.Retail]: IconPaperBag,
  [CardIcon.Pharmacy]: IconFirstAidKit,
  [CardIcon.Gas]: IconGasStation,
  [CardIcon.Restaurant]: IconToolsKitchen2,
  [CardIcon.Cafes]: IconCoffee,
  [CardIcon.Accommodation]: IconBed,
  [CardIcon.Airlines]: IconPlane,
  [CardIcon.Car]: IconCar,
  [CardIcon.Culture]: IconTheater,
  [CardIcon.Beauty]: IconFlower,
  [CardIcon.Books]: IconBooks,
  [CardIcon.Fitness]: IconBarbell,
  [CardIcon.Electronic]: IconDeviceLaptop,
  [CardIcon.Pet]: IconPaw,
  [CardIcon.Hobby]: IconPaint,
  [CardIcon.Office]: IconPaperclip,
  [CardIcon.Gaming]: IconChess,
  [CardIcon.Entertainment]: IconTicket,
};
