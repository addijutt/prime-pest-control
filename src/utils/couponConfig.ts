export const couponConfigs = {
  home: {
    A: { desktop: "/assets/coupons/coupon-home-new.png", mobile: "/assets/coupons/home-mobile-new.webp", alt: "pest control coupon - limited time offer" },
    B: { desktop: "/assets/coupons/hornet-desktop-estimate.webp", mobile: "/assets/coupons/home-mobile-estimate.webp", alt: "pest control coupon - special offer" }
  },
  hornet: {
    A: { desktop: "/assets/coupons/new-hornet-desktop.webp", mobile: "/assets/coupons/new-hornet-mobile.webp", alt: "hornet removal coupon" },
    B: { desktop: "/assets/coupons/hornet-desktop-estimate.webp", mobile: "/assets/coupons/hornet-mobile-estimate.webp", alt: "hornet removal coupon" }
  },
  yellow: {
    A: { desktop: "/assets/coupons/new-hornet-desktop.webp", mobile: "/assets/coupons/yellow-mobile.webp", alt: "hornet removal coupon" },
    B: { desktop: "/assets/coupons/hornet-desktop-estimate.webp", mobile: "/assets/coupons/hornet-mobile-estimate.webp", alt: "hornet removal coupon" }
  },
  rodent: {
    A: { desktop: "/assets/coupons/rodant-desktop.webp", mobile: "/assets/coupons/rodant-mobile.webp", alt: "rodent control coupon" },
    B: { desktop: "/assets/coupons/rodent-desktop-estimate.webp", mobile: "/assets/coupons/rodent-mobile-estimate.webp", alt: "rodent control coupon" }
  },
  ant: {
    A: { desktop: "/assets/coupons/ant-desktop.webp", mobile: "/assets/coupons/ant-mobile-new.webp", alt: "ant control coupon" },
    B: { desktop: "/assets/coupons/ant-desktop-estimate.webp", mobile: "/assets/coupons/ant-mobile-estimate.webp", alt: "ant control coupon" }
  },
  spider: {
    A: { desktop: "/assets/coupons/spider-desktop.webp", mobile: "/assets/coupons/spider-mobile.jpg", alt: "spider control coupon" },
    B: { desktop: "/assets/coupons/spider-desktop-estimate.webp", mobile: "/assets/coupons/spider-mobile-estimate.webp", alt: "spider control coupon" }
  },
  wasp: {
    A: { desktop: "/assets/coupons/new-hornet-desktop.webp", mobile: "/assets/coupons/wasp-mobile.webp", alt: "wasp removal coupon" },
    B: { desktop: "/assets/coupons/hornet-desktop-estimate.webp", mobile: "/assets/coupons/hornet-mobile-estimate.webp", alt: "wasp removal coupon" }
  },
  roach: {
    A: { desktop: "/assets/coupons/roach-desktop.webp", mobile: "/assets/coupons/roach-mobile.webp", alt: "wasp removal coupon" },
    B: { desktop: "/assets/coupons/roach-desktop-estimate.webp", mobile: "/assets/coupons/roach-mobile-estimate.webp", alt: "wasp removal coupon" }
  },
  flea: {
    A: { desktop: "/assets/coupons/flea-desktop.webp", mobile: "/assets/coupons/flea-mobile.webp", alt: "Flea removal coupon" },
    B: { desktop: "/assets/coupons/flea-desktop-estimate.webp", mobile: "/assets/coupons/flea-mobile-estimate.webp", alt: "Flea removal coupon" }
  },
  centipedies: {
    A: { desktop: "/assets/coupons/centipedies-desktop.webp", mobile: "/assets/coupons/centipedies-mobile.webp", alt: "Centipedies removal coupon" },
    B: { desktop: "/assets/coupons/centipede-desktop-estimate.webp", mobile: "/assets/coupons/centipede-mobile-estimate.webp", alt: "Centipedies removal coupon" }
  },
  ticks: {
    A: { desktop: "/assets/coupons/ticks-desktop.webp", mobile: "/assets/coupons/ticks-mobile.webp", alt: "Ticks removal coupon" },
    B: { desktop: "/assets/coupons/ticks-desktop-estimate.webp", mobile: "/assets/coupons/ticks-mobile-estimate.webp", alt: "Ticks removal coupon" }
  },
  bugs: {
    A: { desktop: "/assets/coupons/bugs-desktop.webp", mobile: "/assets/coupons/bugs-mobile.jpg", alt: "Bugs removal coupon" },
    B: { desktop: "/assets/coupons/bugs-desktop-estimate.webp", mobile: "/assets/coupons/bugs-mobile-estimate.webp", alt: "Bugs removal coupon" }
  },
  bedBug: {
    A: { desktop: "/assets/coupons/bed-bugs-desktop.webp", mobile: "/assets/coupons/bed-bugs-mobile.webp", alt: "Bugs removal coupon" },
    B: { desktop: "/assets/coupons/bed-bugs-desktop-estimate.webp", mobile: "/assets/coupons/bed-bugs-mobile-estimate.webp", alt: "Bugs removal coupon" }
  },
  termite: {
    A: { desktop: "/assets/coupons/termites-desktop.webp", mobile: "/assets/coupons/termites-mobile.webp", alt: "Termite control coupon" },
    B: { desktop: "/assets/coupons/termite-desktop-estimate.webp", mobile: "/assets/coupons/termite-mobile-estimate.webp", alt: "Termite control coupon" }
  },
  rat: {
    A: { desktop: "/assets/coupons/rat-desktop.webp", mobile: "/assets/coupons/rat-mobile.webp", alt: "Rat removal coupon" },
    B: { desktop: "/assets/coupons/rat-desktop-estimate.webp", mobile: "/assets/coupons/rat-mobile-estimate.webp", alt: "Rat removal coupon" }
  }
};

export const getCouponConfig = (
  configKey: keyof typeof couponConfigs,
  variant: 'A' | 'B'
) => {
  const config = couponConfigs[configKey];
  if (!config) return couponConfigs.home[variant];
  return config[variant];
};
