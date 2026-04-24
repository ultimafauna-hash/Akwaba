export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    mail?: string;
  };
  specialties: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  image?: string;
  video?: string;
  audiourl?: string; // Podcast/Audio support
  gallery?: string[]; // Multiple photos
  author: string;
  authorrole?: string;
  excerpt: string;
  content: string;
  readingtime: string;
  imagecredit?: string;
  source?: string;
  views: number;
  likes: number;
  reactions?: Record<string, number>; // Emoji reactions
  commentscount?: number;
  tags?: string[];
  status: 'draft' | 'published';
  ispremium?: boolean;
  premiumpreviewselection?: 'auto' | 'manual';
  manualpreview?: string;
  scheduledat?: string;
  // SEO & Social
  seotitle?: string;
  seodescription?: string;
  socialimage?: string;
}

export interface Comment {
  id: string;
  userid?: string;
  userphoto?: string;
  username: string;
  date: string;
  content: string;
  likes: number;
  likedby?: string[]; // Array of user IDs who liked
  articleid: string;
  reportedby?: string[]; // Array of user IDs who reported
  isreported?: boolean;
  replies: Comment[];
}

export interface UserProfile {
  uid: string;
  displayname: string;
  email: string;
  photourl: string;
  role: 'user' | 'editor' | 'admin';
  likedarticles: string[];
  bookmarkedarticles: string[];
  followedauthors: string[];
  followedcategories: string[];
  votedpolls: string[];
  badges: string[];
  points: number;
  ispremium?: boolean;
  premiumsince?: string;
  premiumuntil?: string; // ISO date string
  paymentmethod?: string;
  history?: { articleid: string; date: string }[];
}

export interface ChatMessage {
  id: string;
  articleid: string;
  userid: string;
  username: string;
  userphoto?: string;
  content: string;
  date: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
  image?: string;
  imagecredit?: string;
  gallery?: string[];
  video?: string;
  excerpt: string;
  content: string;
  status: 'draft' | 'published';
  scheduledat?: string;
}

export interface Poll {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    votes: number;
  }[];
  startdate: string;
  enddate?: string;
  active: boolean;
}

export interface SiteSettings {
  aboutText: string;
  email: string;
  phone: string;
  address: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  // Ads
  adSlotHeader?: string;
  adSlotSidebar?: string;
  adSlotFooter?: string;
  // Breaking News
  urgentbannertext?: string;
  urgentbanneractive?: boolean;
  urgentbannerlink?: string;
  flashnews?: string; // Semicolon separated news for ticker
  // Categories
  categories: string[];
  categories_icons?: Record<string, string>;
  // Maintenance
  maintenanceMode: boolean;
  // Donations & Premium
  donationAmounts: number[];
  donationPaymentMethods: string[];
  premiumPrice: number;
  isdonationactive: boolean;
  ispremiumactive: boolean;
  activepaymentmethods: {
    paypal?: boolean;
    stripe?: boolean;
    flutterwave?: boolean;
    orangeMoney?: boolean;
    mtn?: boolean;
    moov?: boolean;
    wave?: boolean;
  };
  paymentlinks?: {
    paypal?: string;
    stripe?: string;
    flutterwave?: string;
    orangeMoney?: string;
    mtn?: string;
    moov?: string;
    wave?: string;
  };
  premiumduration?: number;
  paypalId?: string;
  stripePublicKey?: string;
  flutterwavePublicKey?: string;
  orangeMoneyNumber?: string;
  mtnMoneyNumber?: string;
  moovMoneyNumber?: string;
  waveNumber?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  date: string;
}

export interface MediaAsset {
  id: string;
  url: string;
  type: 'image' | 'video';
  date: string;
  filename?: string;
}

export interface LiveBlog {
  id: string;
  articleid: string; // Linked to article if it's a "Live" article
  title: string;
  updates: LiveUpdate[];
  status: 'live' | 'ended';
  createdat: string;
}

export interface LiveUpdate {
  id: string;
  content: string;
  date: string;
  type: 'info' | 'urgent' | 'media';
  imageurl?: string;
  videourl?: string;
  author: string;
}

export interface WebTV {
  id: string;
  title: string;
  description: string;
  videourl: string;
  thumbnail: string;
  category: string;
  date: string;
  views: number;
  ispremium?: boolean;
}

export interface Classified {
  id: string;
  title: string;
  description: string;
  price?: string;
  category: 'emploi' | 'immobilier' | 'véhicules' | 'services' | 'divers';
  location: string;
  contact: string;
  imageurl?: string;
  userid: string;
  username: string;
  date: string;
  status: 'active' | 'sold' | 'expired';
}

export interface SiteStats {
  views: number;
}

export interface AppNotification {
  id: string;
  userid?: string;
  topic?: string;
  title: string;
  message: string;
  link?: string;
  date: string;
  read: boolean;
  type: 'article' | 'event' | 'urgent' | 'system';
}

export interface SupportMessage {
  id: string;
  userid: string;
  username: string;
  userphoto?: string;
  content: string;
  date: string;
  isadmin: boolean;
}
