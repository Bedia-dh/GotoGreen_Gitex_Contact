"use client";

import Image from "next/image";

const partnerLogos = [
  {
    src: "/Partners/1._image_2026-01-28_145321199-removebg-preview.png",
    alt: "GIZ International Services",
    scale: 1.12,
  },
  {
    src: "/Partners/2._image_2026-01-28_145714510-removebg-preview.png",
    alt: "International Labour Organization",
    scale: 1.08,
  },
  {
    src: "/Partners/3. image_2026-01-28_145826402.png",
    alt: "Agence Nationale de Protection de l'Environnement",
    scale: 1.1,
  },
  {
    src: "/Partners/4._image_2026-01-28_145041663-removebg-preview.png",
    alt: "Deloitte",
    scale: 1.4,
  },
  {
    src: "/Partners/6.-removebg-preview.png",
    alt: "Partner logo",
    scale: 1.2,
  },
  {
    src: "/Partners/djagora-removebg-preview.png",
    alt: "Djagora Foundation",
    scale: 1.25,
  },
  {
    src: "/Partners/image_2026-01-28_145519074-removebg-preview.png",
    alt: "Eleonetech",
    scale: 1.4,
  },
  {
    src: "/Partners/image_2026-01-28_145744703.png",
    alt: "Ministere de l'Industrie",
    scale: 1.08,
  },
  {
    src: "/Partners/image_2026-01-28_145917303-removebg-preview.png",
    alt: "Costart",
    scale: 1.5,
  },
  {
    src: "/Partners/image_2026-01-28_150305216.png",
    alt: "Expertise france",
    scale: 1,
  },
    {
    src: "/Partners/Lapratiqu.png",
    alt: "La pratique",
    scale: 1,
  },
  {
    src: "/Partners/image_2026-01-28_150416084-removebg-preview.png",
    alt: "AFD",
    scale: 1.05,
  },
  {
    src: "/Partners/image_2026-01-28_150434909.png",
    alt: "Caisse des Depots et Consignations",
    scale: 1.1,
  },
];

export default function Home() {
  const MaterialIcon = ({ icon, className = "" }) => (
    <span className={`material-symbols-outlined ${className}`}>{icon}</span>
  );

  return (
    <div className="bg-surface font-body text-on-surface antialiased overflow-x-hidden pb-24 md:pb-0">
      {/* Header */}
      <header className="relative bg-white pt-6 pb-12 px-6 overflow-hidden border-b border-surface-variant">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex items-center">
            <Image
              src="/Partners/logo_gotogreen.png"
              alt="GoToGreen"
              width={260}
              height={100}
              className="h-14 w-auto"
              priority
            />
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold uppercase tracking-wider">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              GoToGreen @ GITEX Africa 2026
            </div>
            <h1 className="font-headline text-4xl leading-[1.1] font-extrabold text-on-surface">
              Export to Europe?{" "}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              You&apos;ll need a{" "}
              <span className="text-primary">Digital Product Passport.</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
              We help manufacturers become EU-compliant before 2026 requirements
              hit.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-on-surface-variant font-medium">
                <MaterialIcon icon="verified" className="text-primary" />
                Generate DPPs
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-medium">
                <MaterialIcon icon="co2" className="text-primary" />
                Calculate carbon footprint
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-medium">
                <MaterialIcon icon="trending_up" className="text-primary" />
                Stay ahead of EU regulations
              </li>
            </ul>
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="/api/calendly/meeting"
                className="w-full bg-primary text-on-primary px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-transform hover:bg-primary/90 text-center"
              >
                Meet us at GITEX
              </a>
              <a
                href="/api/calendly/demo"
                className="w-full bg-surface-container-high text-on-surface px-8 py-5 rounded-2xl font-bold text-lg active:scale-95 transition-transform hover:bg-surface-container-highest text-center"
              >
                Book a live demo now
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      </header>

      <main>
        {/* Why This Matters Section */}
        <section className="py-20 px-6 bg-surface-container-lowest text-center">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-primary">
                Why This Matters
              </h2>
              <div className="relative inline-block">
                <MaterialIcon
                  icon="warning"
                  className="text-error text-6xl absolute -top-8 -right-8 animate-pulse"
                />
                <div className="text-[8rem] font-black leading-none text-on-surface tracking-tighter">
                  2026
                </div>
              </div>
              <p className="text-2xl font-extrabold text-on-surface px-4">
                The EU Digital Product Passport is becoming mandatory.
              </p>
            </div>
            <div className="bg-error-container/30 border border-error/10 p-8 rounded-[2rem] text-left space-y-6">
              <p className="font-bold text-error text-xl">
                Right now, most exporters:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MaterialIcon icon="cancel" className="text-error" />
                  <p className="font-medium text-on-surface-variant">
                    Are not compliant
                  </p>
                </div>
                <div className="flex gap-4">
                  <MaterialIcon icon="construction" className="text-error" />
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <p className="font-medium text-on-surface-variant">
                    Don&apos;t have the right tools
                  </p>
                </div>
                <div className="flex gap-4">
                  <MaterialIcon icon="block" className="text-error" />
                  <p className="font-medium text-on-surface-variant">
                    Risk losing access to EU markets
                  </p>
                </div>
              </div>
              <p className="text-error font-black text-2xl pt-4 uppercase tracking-tight italic">
                This is happening now !
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-6 bg-primary">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <h2 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-white/80">
                Solution
              </h2>
              <h3 className="text-4xl font-extrabold text-white leading-tight">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Pass2Green is your all-in-one DPP compliance platform.
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: "article",
                  title: "Generate EU-compliant Digital Product Passports",
                },
                {
                  icon: "eco",
                  title: "Calculate product carbon footprint",
                },
                {
                  icon: "psychology",
                  title: "Get AI-powered recommendations",
                },
                {
                  icon: "hub",
                  title: "Ensure secure traceability via blockchain",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/15 backdrop-blur-sm p-5 px-6 rounded-full flex gap-4 items-center border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <MaterialIcon
                    icon={item.icon}
                    className="text-white text-2xl flex-shrink-0"
                  />
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pass2Green Flow Section */}
        <section className="py-24 bg-zinc-950 overflow-hidden relative">
          <div className="px-6 mb-12 text-center">
            <h2 className="text-white font-headline text-3xl font-extrabold mb-4">
              Pass2Green Flow
            </h2>
            <p className="text-zinc-500 text-sm">
              An interconnected, organic compliance ecosystem.
            </p>
          </div>
          <div className="scene-3d w-full min-h-[500px] flex items-center justify-center pointer-events-none">
            <div className="iso-plane relative w-[300px] h-[300px]">
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 floating-node z-30">
                <div className="node-card bg-primary p-6 rounded-3xl border-4 border-white/20 flex flex-col items-center">
                  <MaterialIcon
                    icon="article"
                    className="text-white text-4xl mb-1"
                  />
                  <span className="text-[8px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                    DPP Generation
                  </span>
                </div>
              </div>

              {/* Surrounding Nodes */}
              {[
                {
                  position: "top-0 left-0",
                  icon: "database",
                  label: "Data Collection",
                },
                {
                  position: "top-0 right-0",
                  icon: "co2",
                  label: "Carbon Calc",
                },
                {
                  position: "bottom-0 left-0",
                  icon: "link",
                  label: "Blockchain Secure",
                },
                {
                  position: "bottom-0 right-0",
                  icon: "verified_user",
                  label: "Compliance Check",
                },
              ].map((node, index) => (
                <div
                  key={index}
                  className={`absolute ${node.position} floating-node z-20`}
                >
                  <div className="node-card bg-zinc-900 p-4 rounded-2xl border border-white/10 flex flex-col items-center">
                    <MaterialIcon
                      icon={node.icon}
                      className="text-primary text-2xl mb-1"
                    />
                    <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Decorative Circles */}
              <div className="absolute inset-0 border border-primary/20 rounded-full opacity-20"></div>
              <div className="absolute inset-8 border border-primary/10 rounded-full opacity-10"></div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-16 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-extrabold text-on-surface">
                Why Us
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: "public", text: "Built for Africa & MENA exporters" },
                  {
                    icon: "payments",
                    text: "60% more affordable than EU solutions",
                  },
                  {
                    icon: "rocket_launch",
                    text: "No technical expertise needed",
                  },
                  {
                    icon: "settings_input_component",
                    text: "ERP-ready & scalable",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl flex items-center gap-4 border border-zinc-200"
                  >
                    <MaterialIcon icon={item.icon} className="text-primary" />
                    <span className="font-bold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Traction Section */}
            <div className="space-y-6 bg-black p-8 rounded-3xl border border-zinc-800">
              <h2 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                Traction
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-5xl font-black text-tertiary">
                    5
                    <MaterialIcon
                      icon="trending_up"
                      className="inline text-3xl ml-2"
                    />
                  </div>
                  <p className="text-sm text-zinc-400">
                    pilot industrial clients
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="text-5xl font-black text-tertiary">
                    10+
                    <MaterialIcon
                      icon="info"
                      className="inline text-3xl ml-2"
                    />
                  </div>
                  <p className="text-sm text-zinc-400">Letters of Intent</p>
                </div>
              </div>
              <div className="bg-zinc-800/50 p-5 rounded-2xl border border-zinc-700/50 space-y-4">
                <div className="flex items-center gap-3">
                  <MaterialIcon icon="hub" className="text-primary text-2xl" />
                  <p className="text-white font-bold">Cluster partnerships</p>
                </div>
                <div className="space-y-3">
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                    Supported by
                  </p>
                  <div className="partner-carousel-mask">
                    <div className="partner-carousel-track">
                      {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                        <div
                          key={`${logo.src}-${index}`}
                          className="partner-logo-tile"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={176}
                            height={84}
                            className="partner-logo-image"
                            style={{
                              transform: `scale(${logo.scale})`,
                              transformOrigin: "center center",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-extrabold text-on-surface">
                Who {/* eslint-disable-next-line react/no-unescaped-entities */}
                It&apos;s For
              </h2>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="text-on-surface-variant">
                If you&apos;re a company working on the transparency and
                traceability of your products.
              </p>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-6 px-6">
              {[
                { icon: "apparel", label: "Textile" },
                { icon: "battery_charging_full", label: "Electronics" },
                { icon: "inventory_2", label: "Plastics" },
                { icon: "fact_check", label: "ESG Teams" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[140px] bg-surface-container-low p-6 rounded-2xl flex flex-col items-center text-center gap-3"
                >
                  <MaterialIcon
                    icon={item.icon}
                    className="text-primary text-3xl"
                  />
                  <span className="text-xs font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn More Section */}
        <section className="py-16 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-8">
              Learn More
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="font-bold text-on-surface">
                    What is a Digital Product Passport (DPP)?
                  </h3>
                  <MaterialIcon
                    icon="expand_more"
                    className="transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed space-y-4 border-t border-zinc-50">
                  <p>
                    A Digital Product Passport is a structured digital record
                    that includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Product lifecycle data</li>
                    <li>Carbon footprint</li>
                    <li>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Materials & sourcing
                    </li>
                    <li>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Repairability & recyclability
                    </li>
                  </ul>
                  <p>
                    It is required under the Ecodesign for Sustainable Products
                    Regulation.
                  </p>
                  <div className="pt-4 flex flex-col gap-3">
                    <a
                      className="text-primary font-bold flex items-center gap-2 hover:underline"
                      href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1781"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official EU Regulation{" "}
                      <MaterialIcon icon="open_in_new" className="text-xs" />
                    </a>
                    <a
                      className="text-primary font-bold flex items-center gap-2 hover:underline"
                      href="https://environment.ec.europa.eu/topics/circular-economy/digital-product-passport_en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      EU Explanation{" "}
                      <MaterialIcon icon="open_in_new" className="text-xs" />
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 className="font-headline text-4xl font-extrabold leading-tight">
                We&apos;re at GITEX Africa right now.{" "}
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let&apos;s talk.
              </h2>
              <p className="text-white/80 font-medium">
                Meet us on-site or book a meeting during the event.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="/api/whatsapp"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-4 hover:bg-white/15 transition-colors"
              >
                <MaterialIcon icon="chat" className="text-3xl" />
                <div className="text-left">
                  <p className="font-bold">Instant WhatsApp contact</p>
                  <p className="text-xs opacity-70 text-white/60">
                    Quick response within 10 minutes
                  </p>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="/api/calendly/meeting"
                className="bg-white text-primary px-8 py-5 rounded-2xl font-bold text-lg hover:bg-surface transition-colors text-center"
              >
                Meet us now
              </a>
              <a
                href="/api/calendly/demo"
                className="bg-primary-container border border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-colors text-center"
              >
                Schedule a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface py-12 px-6 border-t border-surface-variant">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center">
            <Image
              src="/Partners/logo_gotogreen.png"
              alt="GoToGreen"
              width={220}
              height={84}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-on-surface-variant font-medium text-sm px-4">
            Turning EU compliance into a competitive advantage.
          </p>
          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest pt-4">
            © 2026 GoToGreen. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-zinc-200/50 p-4 block md:hidden">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          <a
            href="/api/calendly/demo"
            className="bg-primary text-on-primary py-4 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary/90"
          >
            <MaterialIcon icon="calendar_today" className="text-lg" />
            Book Demo
          </a>
          <a
            href="/api/whatsapp"
            className="bg-surface-container-high text-on-surface py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-highest"
          >
            <MaterialIcon icon="forum" className="text-lg" />
            WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
}
