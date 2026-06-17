import type { MiniSiteData } from '../components/MiniSite'

/**
 * Example small-business sites, each with its own palette and typeface so the
 * showcase reads as bespoke work, not one template recolored. None of these
 * use Kazoom's coral; the point is range.
 */

export const marloweCoffee: MiniSiteData = {
  name: 'Marlowe & Co.',
  domain: 'marlowecoffee.com',
  category: 'coffee shop',
  fontFamily: 'Georgia, "Times New Roman", serif',
  theme: {
    bg: 'oklch(0.972 0.012 68)',
    surface: 'oklch(0.992 0.006 75)',
    ink: 'oklch(0.31 0.04 52)',
    sub: 'oklch(0.5 0.03 52)',
    accent: 'oklch(0.43 0.055 50)',
    accentInk: 'oklch(0.97 0.012 75)',
    heroFrom: 'oklch(0.95 0.03 62)',
    heroTo: 'oklch(0.88 0.055 50)',
    border: 'oklch(0.9 0.016 64)',
  },
  nav: ['Menu', 'Our story', 'Visit'],
  hero: {
    kicker: 'Open 7am daily',
    heading: 'Slow mornings, good coffee.',
    sub: 'Small-batch roasts and fresh pastries on the corner of 5th & Main.',
    cta: 'See the menu',
  },
  itemsLabel: "What's brewing",
  items: [
    { title: 'Espresso', meta: 'House blend', from: 'oklch(0.42 0.06 50)', to: 'oklch(0.6 0.07 55)' },
    { title: 'Pour over', meta: 'Single origin', from: 'oklch(0.7 0.07 70)', to: 'oklch(0.85 0.05 80)' },
    { title: 'Pastries', meta: 'Baked daily', from: 'oklch(0.78 0.09 70)', to: 'oklch(0.9 0.06 85)' },
  ],
}

export const rosasBakery: MiniSiteData = {
  name: "Rosa's Bakery",
  domain: 'rosasbakery.com',
  category: 'bakery',
  fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
  theme: {
    bg: 'oklch(0.98 0.013 38)',
    surface: 'oklch(0.995 0.006 45)',
    ink: 'oklch(0.36 0.075 22)',
    sub: 'oklch(0.52 0.05 28)',
    accent: 'oklch(0.64 0.16 18)',
    accentInk: 'oklch(0.99 0.012 60)',
    heroFrom: 'oklch(0.96 0.035 40)',
    heroTo: 'oklch(0.9 0.07 28)',
    border: 'oklch(0.92 0.022 34)',
  },
  nav: ['Menu', 'Order', 'Hours'],
  hero: {
    kicker: 'Fresh every morning',
    heading: 'Baked with love since 1998.',
    sub: 'Sourdough, pastries and custom cakes made by hand in the neighborhood.',
    cta: 'Order ahead',
  },
  itemsLabel: 'From the case',
  items: [
    { title: 'Sourdough', meta: '$6 a loaf', from: 'oklch(0.74 0.1 60)', to: 'oklch(0.86 0.07 70)' },
    { title: 'Croissants', meta: '$4 each', from: 'oklch(0.82 0.08 75)', to: 'oklch(0.92 0.05 85)' },
    { title: 'Custom cakes', meta: 'From $40', from: 'oklch(0.8 0.09 20)', to: 'oklch(0.9 0.06 30)' },
  ],
}

export const sageAndStone: MiniSiteData = {
  name: 'Sage & Stone',
  domain: 'sageandstone.co',
  category: 'hair salon',
  fontFamily: '"Hanken Grotesk", system-ui, sans-serif',
  theme: {
    bg: 'oklch(0.972 0.014 150)',
    surface: 'oklch(0.992 0.008 150)',
    ink: 'oklch(0.33 0.03 160)',
    sub: 'oklch(0.5 0.025 158)',
    accent: 'oklch(0.53 0.07 156)',
    accentInk: 'oklch(0.98 0.012 150)',
    heroFrom: 'oklch(0.94 0.028 152)',
    heroTo: 'oklch(0.87 0.05 160)',
    border: 'oklch(0.9 0.02 150)',
  },
  nav: ['Services', 'Team', 'Book'],
  hero: {
    kicker: 'By appointment',
    heading: 'A fresh look, beautifully done.',
    sub: 'A calm studio for cuts, color and care, right in the heart of town.',
    cta: 'Book now',
  },
  itemsLabel: 'Popular services',
  items: [
    { title: 'Cut & style', meta: 'From $55', from: 'oklch(0.6 0.06 156)', to: 'oklch(0.8 0.05 150)' },
    { title: 'Color', meta: 'From $90', from: 'oklch(0.72 0.07 60)', to: 'oklch(0.85 0.05 30)' },
    { title: 'Treatments', meta: 'From $40', from: 'oklch(0.78 0.05 155)', to: 'oklch(0.9 0.03 150)' },
  ],
}

export const dawsonPlumbing: MiniSiteData = {
  name: 'Dawson Plumbing',
  domain: 'dawsonplumbing.com',
  category: 'plumbing',
  fontFamily: '"Trebuchet MS", Verdana, sans-serif',
  theme: {
    bg: 'oklch(0.972 0.012 240)',
    surface: 'oklch(0.992 0.006 240)',
    ink: 'oklch(0.31 0.05 248)',
    sub: 'oklch(0.5 0.03 246)',
    accent: 'oklch(0.74 0.13 66)',
    accentInk: 'oklch(0.29 0.06 60)',
    heroFrom: 'oklch(0.93 0.026 242)',
    heroTo: 'oklch(0.85 0.05 244)',
    border: 'oklch(0.89 0.02 240)',
  },
  nav: ['Services', 'Areas', 'Contact'],
  badge: '24/7 emergency',
  hero: {
    kicker: 'Licensed & insured',
    heading: 'Fast, honest plumbing help.',
    sub: 'Same-day repairs and upfront pricing from a local team you can trust.',
    cta: 'Call now',
  },
  itemsLabel: 'How we help',
  items: [
    { title: 'Repairs', meta: 'Same day', from: 'oklch(0.55 0.08 244)', to: 'oklch(0.75 0.06 240)' },
    { title: 'Installs', meta: 'Free quote', from: 'oklch(0.6 0.07 220)', to: 'oklch(0.8 0.05 210)' },
    { title: 'Inspections', meta: 'From $89', from: 'oklch(0.74 0.1 66)', to: 'oklch(0.86 0.07 75)' },
  ],
}

export const showcaseSites = [rosasBakery, sageAndStone, dawsonPlumbing]
