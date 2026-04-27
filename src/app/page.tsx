"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Tray Barber's"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "radial-gradient",
      }}
      title="Precision Grooming at Tray Barber's"
      description="Where tradition meets modern style. Experience the finest cuts in town."
      testimonials={[
        {
          name: "James R.",
          handle: "@jamesr",
          testimonial: "Best fade I've ever had, hands down.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hairstilyst-giving-haircut_23-2148506285.jpg",
        },
        {
          name: "Marcus L.",
          handle: "@mlux",
          testimonial: "Great atmosphere, professional service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2921.jpg",
        },
        {
          name: "David W.",
          handle: "@davew",
          testimonial: "Friendly staff, excellent attention to detail.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-handsome-stylish-redhead-biker-black-leather-jacket-holds-motorcycle-helmet-posing-studio-isolated-dark-background_613910-5351.jpg",
        },
        {
          name: "Alex P.",
          handle: "@alexcut",
          testimonial: "Tray always knows exactly what I need.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1662.jpg",
        },
        {
          name: "Ben S.",
          handle: "@bens",
          testimonial: "Finally found a barber I can trust.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-senior-man-laughing_23-2151203948.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/brown-vintage-leather-chair-stylish-barber-shop_627829-6180.jpg?_wi=1"
      imageAlt="barber shop interior dark aesthetic"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-leather-barber-shop-chair_23-2148256927.jpg",
          alt: "Front view leather barber shop chair",
        },
        {
          src: "http://img.b2bpic.net/free-photo/barber-shop-tools-arrangement_23-2149167462.jpg",
          alt: "Barber shop tools arrangement",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-details-hairdresser-salon_23-2149205862.jpg",
          alt: "Close up details of hairdresser salon",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hairdressing-chair-vintage-barber-shop_23-2148298304.jpg",
          alt: "Hairdressing chair in vintage barber shop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-young-man-getting-haircut_23-2149220536.jpg",
          alt: "Medium shot young man getting haircut",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Classic Cuts",
        },
        {
          type: "text",
          text: "Modern Fades",
        },
        {
          type: "text",
          text: "Beard Grooming",
        },
        {
          type: "text",
          text: "Executive Service",
        },
        {
          type: "text",
          text: "Hot Towel Shave",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Story",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/hairdresser-cutting-man-s-hair-barber-shop_23-2149186474.jpg",
          alt: "barber cutting hair professional closeup",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Classic Cut",
          description: "The traditional barber cut refined.",
          tag: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-man-barbershop-barber-work_627829-7242.jpg",
          imageAlt: "Handsome bearded man at the barbershop barber at work",
        },
        {
          id: "2",
          title: "Beard Grooming",
          description: "Hot towel shave and beard trim.",
          tag: "Essential",
          imageSrc: "http://img.b2bpic.net/free-photo/brown-vintage-leather-chair-stylish-barber-shop_627829-6180.jpg?_wi=2",
          imageAlt: "Handsome bearded man at the barbershop barber at work",
        },
        {
          id: "3",
          title: "Executive Service",
          description: "Full shave, haircut, and facial treatment.",
          tag: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-cutting-man-s-hair-barber-shop_23-2149186474.jpg",
          imageAlt: "Handsome bearded man at the barbershop barber at work",
        },
      ]}
      title="Our Services"
      description="Premium treatments for the modern man."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "m1",
          name: "Tray",
          role: "Master Barber",
          description: "10+ years experience in precision cuts.",
          imageSrc: "http://img.b2bpic.net/free-photo/groomed-bearded-man-with-tattooes-is-posing-dark-photo-studio_613910-15016.jpg",
        },
        {
          id: "m2",
          name: "Marcus",
          role: "Senior Stylist",
          description: "Expert in modern fades and styling.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525956.jpg",
        },
        {
          id: "m3",
          name: "Leo",
          role: "Barber",
          description: "Passionate about traditional grooming.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-tattoo-his-face-with-crossed-arms-dressed-white-shirt-grey-background_613910-1374.jpg",
        },
      ]}
      title="Meet Your Barbers"
      description="Expert hands, sharp skills."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "James R.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-goodlooking-man-showing-thumbs-up-praising-good-job-recommending-company-standing_1258-159836.jpg",
        },
        {
          id: "2",
          name: "Marcus L.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bright-portrait-young-handsome-hipster-man-wearing-plaid-shirt-pretty-face-brown-eyes_291049-1491.jpg",
        },
        {
          id: "3",
          name: "David W.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-bearded-man-getting-haircut-by-hairdresser-while-sitting-chair-barbershop-barber-soul_627829-6410.jpg",
        },
        {
          id: "4",
          name: "Alex P.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9654.jpg",
        },
        {
          id: "5",
          name: "Ben S.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-hairdresser-using-dryer-beard-senior-client_23-2148181879.jpg",
        },
      ]}
      cardTitle="Client Reviews"
      cardTag="What people say"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do I need an appointment?",
          content: "Appointments are highly recommended for the best experience.",
        },
        {
          id: "q2",
          title: "What payment methods are accepted?",
          content: "We accept cards and cash.",
        },
        {
          id: "q3",
          title: "How long do cuts take?",
          content: "Typically 30-45 minutes depending on the service.",
        },
      ]}
      title="Frequently Asked"
      description="Common questions about your visit."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/close-up-hairdresser-making-haircut_23-2149220581.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to get looking sharp? Book your slot now."
      buttons={[
        {
          text: "Book Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Tray Barber's",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Work",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Tray Barber's"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
