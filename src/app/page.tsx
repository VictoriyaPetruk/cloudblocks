"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HomePageContent from "./home-page-content";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Intercept clicks on demo links and use Next.js router
    const handleDemoLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/start/demo"]') as HTMLAnchorElement;

      if (link) {
        e.preventDefault();
        router.push("https://app.cloudblocks.tech");
      }
    };

    document.addEventListener("click", handleDemoLinkClick);

    return () => {
      document.removeEventListener("click", handleDemoLinkClick);
    };
  }, [router]);

  useEffect(() => {
    const mobileMenu = document.querySelector("dialog.mobile") as HTMLDialogElement | null;
    if (!mobileMenu) return;
    const onDialogClick = (e: MouseEvent) => {
      if (e.target === mobileMenu) mobileMenu.close();
    };
    mobileMenu.addEventListener("click", onDialogClick);
    return () => mobileMenu.removeEventListener("click", onDialogClick);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    :root{
      --bg: #ffffff;
      --text: #111827; /* slate-900 */
      --muted: #6b7280; /* gray-500 */
      --primary: #ff6a3d; /* orange/coral */
      --primary-dark: #ea580c; /* orange-600 */
      --accent: #f97316; /* orange-500 */
      --ring: rgba(249,115,22,.35);
      --card: #ffffff;
      --border: #eef2f7;
      --shadow: 0 10px 30px rgba(17,24,39,.08);
      --radius: 18px;
      --container: 1120px;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    html {
      scroll-padding-top: 80px; /* Account for fixed header height */
      scroll-behavior: smooth; /* Smooth scrolling for anchor links */
    }
    body{
      margin:0;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      color:var(--text);
      background:var(--bg);
      line-height:1.6;
      -webkit-font-smoothing:antialiased;
      text-rendering:optimizeLegibility;
    }
    .container{width:min(var(--container), 92%); margin-inline:auto}
    .btn{display:inline-flex; align-items:center; gap:.6rem; padding:.9rem 1.1rem; background:var(--primary); color:#fff; border:none; border-radius:14px; font-weight:600; text-decoration:none; box-shadow:0 8px 20px rgba(249,115,22,.25); transition:.25s ease;}
    .btn:hover{transform:translateY(-1px); background:var(--primary-dark); box-shadow:0 12px 26px rgba(249,115,22,.32)}
    .btn.secondary{background:#fff; color:var(--text); border:1px solid var(--border); box-shadow:var(--shadow)}
    .btn.small{padding:.6rem .85rem; border-radius:12px; font-size:.9rem}
    header{position:fixed; top:0; left:0; right:0; z-index:40; backdrop-filter:saturate(180%) blur(10px); background:linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.72)); border-bottom:1px solid rgba(15,23,42,.06); width:100%; margin:0; padding:0}
    main.home-main{padding-top:80px}
    header .container{width:min(var(--container), 92%); margin-inline:auto; padding-inline:clamp(1rem, 3vw, 2rem)}
    .nav{display:flex; align-items:center; justify-content:space-between; padding:.9rem 0; width:100%}
    .brand{display:flex; align-items:center; gap:.7rem; font-weight:800; letter-spacing:-.02em}
    .brand .logo{width:26px; height:26px; display:grid; grid-template-columns:repeat(2,1fr); gap:3px}
    .brand .logo span{background:var(--text); border-radius:4px}
    .nav a{color:#374151; text-decoration:none; font-weight:500}
    .nav-menu{display:flex; gap:1.2rem; align-items:center}
    .nav-links{display:flex; gap:1rem}
    .hamb{display:none}
    dialog.mobile{max-width:100%; width:100%}

    /* Hero */
    .hero{position:relative; overflow:hidden}
    .hero .wrap{display:grid; grid-template-columns: 1.05fr .95fr; gap:2rem; align-items:center; padding:3.4rem 0 2.6rem}
    .hero .container{width:min(var(--container), 92%); margin-inline:auto; padding-inline:clamp(1rem, 3vw, 2rem)}
    
    .eyebrow{color:var(--muted); font-weight:600; letter-spacing:.06em; text-transform:uppercase; font-size:.78rem}
    h1{font-size: clamp(2rem, 3.4vw + 1rem, 3.6rem); line-height:1.05; letter-spacing:-.03em; margin:.5rem 0 1.1rem}
    .animated-badge{margin-bottom:0.55rem; font-size:clamp(14px, 2vw, 22px); color:var(--muted); font-weight:500}
    .animated-badge img{height:auto; max-height:50px; width:auto; max-width:min(220px,42vw); object-fit:contain; display:block; flex-shrink:0}
    .hero-badges{display:flex; flex-wrap:wrap; align-items:center; gap:0.65rem 1.1rem; margin:1.1rem 0 1.25rem 0; line-height:0}
    .hero-badges .startup-fame-badge, .hero-badges .microsoft-startups-badge, .hero-badges .ai-agents-directory-badge{margin:0}
    .hero-badges a{display:inline-block; line-height:0}
    .hero-badges .startup-fame-badge img{display:block; width:auto; max-width:min(224px, 92vw); height:auto}
    .hero-badges .microsoft-startups-badge img{display:block; width:auto; max-height:min(48px, 13vw); height:auto}
    .hero-badges .ai-agents-directory-badge img{display:block; width:auto; max-width:min(200px, 92vw); max-height:min(50px, 13vw); height:auto}
    h2{font-weight: 700;}
    .lead{font-size:1.05rem; color:#4b5563; max-width:44ch}
    .hero-cta{display:flex; gap:.8rem; flex-wrap:wrap; margin-top:1.4rem}
    .btn{display:inline-flex; align-items:center; gap:.6rem; padding:.9rem 1.1rem; background:var(--primary); color:#fff; border:none; border-radius:14px; font-weight:600; text-decoration:none; box-shadow:0 8px 20px rgba(249,115,22,.25); transition:.25s ease;}
    .btn:hover{transform:translateY(-1px); background:var(--primary-dark); box-shadow:0 12px 26px rgba(249,115,22,.32)}
    .btn.secondary{background:#fff; color:var(--text); border:1px solid var(--border); box-shadow:var(--shadow)}
    .hero-ill{
      aspect-ratio: 4 / 3; border-radius: 22px; background:
        repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 40px),
        radial-gradient(1200px 600px at -10% 110%, rgba(249, 116, 22, 0.01), transparent 60%),
        radial-gradient(800px 500px at 120% -10%, rgba(253, 187, 116, 0.07), transparent 60%),
        linear-gradient(180deg, #f8f9fa, #ffffff);
      box-shadow: var(--shadow);
      display:flex; align-items:center; justify-content:center; position:relative;
    }
    .hero-ill svg{width:78%; max-width:520px}
    .hero-ill img{width:72%; max-width:480px; height:auto; object-fit:contain; display:block; position:relative; z-index:1}

    /* Ribbon statement */
    .ribbon{position:relative; margin:0rem 0 0; width:min(var(--container), 92%); margin-inline:auto; padding-inline:clamp(1rem, 3vw, 2rem)}
    .ribbon .card{background:linear-gradient(180deg,#fff, #fff); border:1px solid var(--border); padding:1.2rem 1.4rem; border-radius:var(--radius); box-shadow:var(--shadow); display:grid; grid-template-columns:1fr auto; align-items:center; gap:1rem}
    .ribbon strong{color:var(--accent)}
    .ribbon .link{color:var(--accent); text-decoration:none; font-weight:600}

    /* Features grid */
    .features{padding: 5rem 0 3rem; background:linear-gradient(to bottom, #ffffff, #fafafa)}
    
    /* Add padding to sections for better anchor navigation */
    section[id] {
      scroll-margin-top: 80px;
    }
    .features-grid{display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:2rem; margin-top:3rem}
    .feat{background:linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85)); backdrop-filter:blur(10px); border:1px solid rgba(255,106,61,0.1); border-radius:24px; padding:2.5rem; display:flex; flex-direction:column; gap:1.5rem; box-shadow:0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,106,61,0.05); transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1); position:relative; overflow:hidden}
    .feat::before{content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #ff6a3d, #ff8f59, #ffb08a); transform:scaleX(0); transform-origin:left; transition:transform 0.4s ease}
    .feat::after{content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%; background:radial-gradient(circle, rgba(255,106,61,0.1) 0%, transparent 70%); opacity:0; transition:opacity 0.4s ease; pointer-events:none}
    .feat:hover{transform:translateY(-8px) scale(1.02); box-shadow:0 20px 40px rgba(255,106,61,0.15), 0 0 0 1px rgba(255,106,61,0.2); border-color:rgba(255,106,61,0.3); background:linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.95))}
    .feat:hover::before{transform:scaleX(1)}
    .feat:hover::after{opacity:1}
    .feat .ic{width:64px; height:64px; display:grid; place-items:center; border-radius:18px; background:linear-gradient(135deg, #ff6a3d 0%, #ff8f59 50%, #ffb08a 100%); color:#fff; flex-shrink:0; transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1); box-shadow:0 8px 16px rgba(255,106,61,0.3); position:relative; z-index:1}
    .feat:hover .ic{transform:scale(1.15) rotate(10deg); box-shadow:0 12px 24px rgba(255,106,61,0.4)}
    .feat .ic svg{width:28px; height:28px; stroke-width:2.5; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.1))}
    .feat h4{margin:0; font-size:1.4rem; font-weight: 700; color:var(--text); line-height:1.3; letter-spacing:-0.02em}
    .feat p{margin:.75rem 0 0; color:#64748b; font-size:1.05rem; line-height:1.7}

    /* Certifications */
    .section{padding: 3.4rem 0}
    .section h2{font-size: clamp(1.6rem, 1.8vw + 1rem, 2rem); margin:0 0 .6rem}
    .section .sub{color:#6b7280; max-width:70ch}
    .hex{width:90px; height:90px; margin-inline:auto;}
 
    /* Diagram block */
    .diagram{margin-top:1.6rem; border:1px dashed #e5e7eb; border-radius:18px; padding:1rem; background:
      radial-gradient(1000px 500px at -10% 120%, rgba(249,115,22,.08), transparent 60%),
      #fff; box-shadow:var(--shadow)}
    .diagram img{max-width:100%; border-radius:14px; display:block}

    /* Features Dashboard Section */
    .features-dashboard{display:grid; grid-template-columns: 1fr 1.2fr; gap:1.5rem; align-items:start; margin-top:3rem}
    .features-list{display:flex; flex-direction:column; gap:1.5rem}
    .feature-item{position:relative; padding:2rem 2rem 2rem 2.5rem; border-left:4px solid transparent; border-radius:20px; background:linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7)); backdrop-filter:blur(10px); transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1); cursor:pointer; border:1px solid rgba(255,106,61,0.1); box-shadow:0 2px 12px rgba(0,0,0,0.04)}
    .feature-item::before{content:''; position:absolute; left:0; top:0; bottom:0; width:4px; background:linear-gradient(180deg, #ff6a3d, #ff8f59, #ffb08a); transform:scaleY(0); transform-origin:top; transition:transform 0.4s ease; border-radius:0 4px 4px 0}
    .feature-item:hover{transform:translateX(8px); background:linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.95)); box-shadow:0 8px 28px rgba(255,106,61,0.12), 0 0 0 1px rgba(255,106,61,0.15); border-color:rgba(255,106,61,0.2)}
    .feature-item:hover::before{transform:scaleY(1)}
    .feature-item.active{border-left-color:var(--accent); background:linear-gradient(135deg, rgba(255,106,61,0.08), rgba(255,255,255,0.95)); box-shadow:0 6px 24px rgba(255,106,61,0.15), 0 0 0 1px rgba(255,106,61,0.2)}
    .feature-item.active::before{transform:scaleY(1)}
    .feature-item h3{margin:0 0 .75rem; font-size:1.4rem; font-weight:700; color:var(--text); line-height:1.3; letter-spacing:-0.01em; transition:color 0.3s}
    .feature-item:hover h3{color:#ff6a3d}
    .feature-item p{margin:0 0 1.25rem; color:#64748b; font-size:1.05rem; line-height:1.7}
    .feature-item .read-more{color:var(--accent); text-decoration:none; font-weight:600; font-size:1rem; display:inline-flex; align-items:center; gap:.5rem; transition:all 0.3s ease; padding:.6rem 1.2rem; border-radius:10px; background:rgba(255,106,61,0.08); border:1px solid rgba(255,106,61,0.15)}
    .feature-item .read-more:hover{color:#fff; background:linear-gradient(135deg, #ff6a3d, #ff8f59); border-color:transparent; transform:translateX(4px); box-shadow:0 4px 16px rgba(255,106,61,0.3); gap:.75rem}
    .feature-item .read-more svg{transition:transform 0.3s ease}
    .feature-item .read-more:hover svg{transform:translateX(4px)}
    .dashboard-preview{background:linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.92)); backdrop-filter:blur(12px); border:1px solid rgba(255,106,61,0.1); border-radius:24px; padding:1rem; box-shadow:0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,106,61,0.05); position:sticky; top:120px; transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1)}
    .dashboard-preview:hover{box-shadow:0 16px 48px rgba(255,106,61,0.15), 0 0 0 1px rgba(255,106,61,0.2); transform:translateY(-6px)}
    .dashboard-preview img{width:100%; height:auto; border-radius:16px; display:block; transition:transform 0.4s ease}
    .dashboard-preview:hover img{transform:scale(1.03)}

    /* Pricing */
    .pricing-wrap{display:grid; place-items:center}
    .card{background:#fff; border:1px solid var(--border); border-radius:18px; box-shadow:var(--shadow)}
    .price-card{width:min(420px, 100%); padding:1.2rem}
    .price-card h3{margin:.3rem 0 0; font-weight: 700}
    .check{display:flex; align-items:flex-start; gap:.6rem; margin:.55rem 0; color:#374151}
    .price{font-size:1.8rem; font-weight:800; letter-spacing:-.02em}

    /* Newsletter */
    .newsletter{position:relative; overflow:hidden; padding:3.6rem 0; color:#fff;}
    .newsletter .bg{position:absolute; inset:0; background:
      radial-gradient(900px 500px at -10% 120%, #ffb08a, transparent 60%),
      radial-gradient(900px 600px at 120% -10%, #ff8647, transparent 60%),
      linear-gradient(180deg, #ff7a45, #ff5b2f);}
    .newsletter .inner{position:relative}
    .newsletter h2{font-size: clamp(1.6rem, 1.8vw + 1rem, 2.2rem); margin:0 0 .4rem}
    .field{display:flex; gap:.6rem; flex-wrap:wrap}
    .input{flex:1 1 280px; padding:.9rem 1rem; border-radius:12px; border:none; background: #f3f4f6; color: #111827; height: 48px; max-width: 500px; }
    #subscribe-form{display: flex; justify-content: center; align-items: center;}
   .architect-section {
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  background: linear-gradient(135deg, #ff5b2f,#ff7a45);
  color: #fff;
}
  .architect-section p{color:#fff}

    /* CTA Section */
    .cta-section{position:relative; overflow:hidden; padding:4rem 0; background:
      repeating-linear-gradient(0deg,rgb(26, 26, 26) 0px, #1a1a1a 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 20px),
rgb(255, 255, 255);
      text-align:center; color:#1a1a1a}
    .cta-section .inner{position:relative; z-index:1}
    .cta-section h2{font-size: clamp(2rem, 4vw + 1rem, 3.5rem); margin:0 0 2rem; font-weight:700; color:#1a1a1a}
    .cta-button{display:inline-block; background:#ff6a3d; color:#fff; padding:1rem 2.5rem; border-radius:12px; text-decoration:none; font-weight:600; font-size:1.1rem; transition:all 0.3s ease; box-shadow:0 4px 14px #ff6a3d}
    .cta-button:hover{background:#ff6a3d; transform:translateY(-2px); box-shadow:0 6px 20px #ff6a3d}

    /* Customer Feedbacks Section */
    .testimonials-section{padding:4rem 0; background:#fff}
    .testimonials-section h2{text-align:center; font-size: clamp(2rem, 3vw + 1rem, 2.5rem); margin:0 0 3rem; font-weight:700; color:var(--text)}
    .marquee-wrapper{overflow:hidden; position:relative; width:100%}
    .marquee{display:flex; gap:1.5rem; animation:marquee 30s linear infinite}
    .marquee:hover{animation-play-state:paused}
    @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .marquee-content{display:flex; gap:1.5rem; flex-shrink:0}
    .testimonial-card{flex-shrink:0; width:400px; max-width:90vw; background:#fff; border:1px solid var(--border); border-radius:18px; padding:2rem; box-shadow:var(--shadow); display:flex; flex-direction:column; gap:1rem}
    .testimonial-header{display:flex; align-items:center; gap:1rem}
    .testimonial-avatar{width:50px; height:50px; border-radius:50%; background:linear-gradient(135deg, #ff6a3d, #ff8f59); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:1.2rem}
    .testimonial-info{flex:1}
    .testimonial-name{font-weight:700; color:var(--text); margin:0 0 0.2rem}
    .testimonial-role{font-size:0.9rem; color:var(--muted); margin:0}
    .testimonial-rating{display:flex; gap:0.2rem; color:#fbbf24; font-size:1.2rem}
    .testimonial-text{color:var(--muted); line-height:1.6; margin:0; font-size:0.95rem}

    /* Build Great Things Section */
    .build-section{position:relative; overflow:hidden; padding:5rem 0; background:
      repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px),
rgb(255, 144, 84);
      border-radius:24px; margin:3rem auto; max-width:min(var(--container), 92%); text-align:center; color:#fff}
    .build-section .inner{position:relative; z-index:1; padding:2rem}
    .build-section h2{font-size: clamp(2.5rem, 5vw + 1rem, 4rem); margin:0 0 3rem; font-weight:700; color:#fff; line-height:1.2}
    .build-buttons{display:flex; gap:1rem; justify-content:center; flex-wrap:wrap}
    .build-button-primary{display:inline-flex; align-items:center; gap:0.5rem; background:#ff6a3d; color:#fff; padding:1rem 2rem; border-radius:12px; text-decoration:none; font-weight:600; font-size:1rem; transition:all 0.3s ease; box-shadow:0 4px 14px rgba(255,106,61,0.4)}
    .build-button-primary:hover{background:#ea580c; transform:translateY(-2px); box-shadow:0 6px 20px rgba(255,106,61,0.5)}
    .build-button-secondary{display:inline-flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.15); color:#fff; padding:1rem 2rem; border-radius:12px; text-decoration:none; font-weight:600; font-size:1rem; transition:all 0.3s ease; backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.2)}
    .build-button-secondary:hover{background:rgba(255,255,255,0.25); transform:translateY(-2px)}

    /* Partner Great Things Section */
 .partner-section{
  position:relative;
  overflow:hidden;
  padding:5rem 0;
  background:
    repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.05) 0px,
      rgba(0,0,0,0.05) 1px,
      transparent 1px,
      transparent 20px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(0,0,0,0.05) 0px,
      rgba(0,0,0,0.05) 1px,
      transparent 1px,
      transparent 20px
    ),
    #ffffff;
  border-radius:24px;
  margin:3rem auto;
  max-width:min(var(--container), 92%);
  text-align:center;
  color:#111;
}

.partner-section .inner{
  position:relative;
  z-index:1;
  padding:2rem;
}

.partner-section h2{
  font-size: clamp(2.5rem, 5vw + 1rem, 4rem);
  margin:0 0 3rem;
  font-weight:700;
  color:#111;
  line-height:1.2;
}

.partner-buttons{
  display:flex;
  gap:1rem;
  justify-content:center;
  flex-wrap:wrap;
}

/* Primary Orange Button */
.partner-button-primary{
  display:inline-flex;
  align-items:center;
  gap:0.5rem;
  background:#ff7a1a;
  color:#fff;
  padding:1rem 2rem;
  border-radius:12px;
  text-decoration:none;
  font-weight:600;
  font-size:1rem;
  transition:all 0.3s ease;
  box-shadow:0 4px 14px rgba(255,122,26,0.35);
}

.partner-button-primary:hover{
  background:#ea580c;
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(255,122,26,0.45);
}

/* Secondary Orange Outline Button */
.partner-button-secondary{
  display:inline-flex;
  align-items:center;
  gap:0.5rem;
  background:transparent;
  color:#ff7a1a;
  padding:1rem 2rem;
  border-radius:12px;
  text-decoration:none;
  font-weight:600;
  font-size:1rem;
  transition:all 0.3s ease;
  border:2px solid #ff7a1a;
}

.partner-button-secondary:hover{
  background:#ff7a1a;
  color:#fff;
  transform:translateY(-2px);
}

.partner-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: 24px 0;
  text-align: center;
}

.partner-logo {
  max-height: 48px;
  width: auto;
}

.partner-description {
  max-width: 520px;
  color: #666;
  font-size: 15px;
  line-height: 1.5;
}




    /* Footer */
    footer{padding:2.6rem 0 2rem; background:#fff}
    .foot-grid{display:grid; grid-template-columns: 1.4fr repeat(3, 1fr); gap:2rem; align-items:start}
    .foot h5{margin:.2rem 0 0; font-size:1rem}
    .foot a{color:#4b5563; text-decoration:none}
    .foot ul{list-style:none; padding:0; margin:.6rem 0 0; display:grid; gap:.4rem}
    .copyright{margin-top:2rem; color:#6b7280; font-size:.9rem}
    .social-icons{display:flex; gap:1rem; margin-top:1rem; align-items:center}
    .social-icons a{color:#4b5563; transition:color 0.3s ease; display:flex; align-items:center; justify-content:center}
    .social-icons a:hover{color:#111827}
    .social-icons svg{width:20px; height:20px}

    /* Responsive */
    @media (max-width: 960px){
      .hero .wrap{grid-template-columns:1fr; padding:2.4rem 0 1.6rem}
      .badges{grid-template-columns:repeat(2, minmax(0,1fr))}
      .foot-grid{grid-template-columns:1fr 1fr}
      .features-dashboard{grid-template-columns:1fr; gap:2rem}
      .dashboard-preview{position:relative; top:0}
    }
    .container {
    width: min(var(--container), 92%);
    margin-inline: auto;
    padding-inline: clamp(1rem, 3vw, 2rem); /* adaptive padding */
  }
    @media (max-width: 640px){
      header{width:100% !important; margin:0 !important; padding:0 !important}
      header .container.nav{width:100% !important; max-width:100% !important; padding-inline:1rem !important; margin-inline:0 !important}
      header .container{width:100% !important; max-width:100% !important; padding-inline:1rem !important; margin-inline:0 !important}
      .nav{width:100%}
      .nav-links{display:none}
      .hamb{display:inline-flex; background:#fff; border:1px solid var(--border); border-radius:12px; padding:.55rem}
      dialog.mobile{max-width:100% !important; width:100% !important; border-radius:0 !important}
      .features-grid{grid-template-columns:1fr}
      .badges{grid-template-columns:1fr}
      .foot-grid{grid-template-columns:1fr}
      .animated-badge{font-size:14px; gap:0.4rem}
      .animated-badge img{max-height:35px}
      .features-dashboard{grid-template-columns:1fr; gap:1.5rem}
      .feature-item{padding:1.5rem 1.5rem 1.5rem 2rem}
      .feature-item h3{font-size:1.2rem}
      .features-grid{grid-template-columns:1fr; gap:1.5rem}
      .feat{padding:2rem}
      .feat .ic{width:56px; height:56px}
      .feat h4{font-size:1.2rem}
      .feat p{font-size:1rem}
      .build-section{padding:3rem 1rem; margin:2rem 1rem}
      .build-section h2{font-size:clamp(1.8rem, 4vw + 1rem, 3rem); margin-bottom:2rem}
      .build-buttons{flex-direction:column; align-items:stretch}
      .build-button-primary, .build-button-secondary{width:100%; justify-content:center}
      .testimonials-section{padding:3rem 0}
      .testimonials-section h2{font-size:clamp(1.6rem, 3vw + 1rem, 2rem); margin-bottom:2rem}
      .testimonial-card{width:320px; padding:1.5rem}
    }
  
  h1 {
    font-size: clamp(1.8rem, 4vw + 1rem, 3.6rem);
    line-height: 1.1;
    font-weight: 700;
  }
  
  .lead {
    font-size: clamp(.95rem, 1vw + .6rem, 1.2rem);
  }
  
  .hero .wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(1rem, 4vw, 2.5rem);
    align-items: center;
    padding: clamp(2rem, 6vw, 3.4rem) 0 clamp(1.6rem, 5vw, 2.6rem);
  }
  
  .hero-ill svg {
    width: 100%;
    max-width: 520px;
    height: auto;
  }

  .hero-ill img {
    width: 85%;
    max-width: 480px;
    height: auto;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }
  
  .badges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
  margin-top: 1.6rem;
}
.badge {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.1rem;
  text-align: center;
  box-shadow: var(--shadow);
  
  /* 🧭 Center everything */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.badge img {
  width: 70%;
  max-width: 100px; /* keep consistent size even on big screens */
  height: auto;
  object-fit: contain;
  display: block;
}
  .btn.vibrant {
  display: inline-block;
  padding: 0.7em 1.6em;
  font-weight: 600;
  color: white;
  background: linear-gradient(90deg, #ff4000ff, #f78400ff, #f83131ff);
  border: none;
  border-radius: 10px;
  text-decoration: none;
  background-size: 200%;
  box-shadow: 0 0 18px rgba(255, 0, 120, 0.6);
}

/* Pulse animation */
.btn.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 12px rgba(255, 106, 0, 0.94),
                0 0 24px rgba(255, 152, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 106, 0, 0.94),
                0 0 45px rgba(255, 152, 0, 0.7);
  }
  100% {
    box-shadow: 0 0 12px rgba(255, 106, 0, 0.94),
                0 0 24px rgba(255, 152, 0, 0.4);
  }
}
  
  .foot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
  }
  
  /* Extra small phones */
  @media (max-width: 480px) {
    .hero .wrap {
      grid-template-columns: 1fr;
    }
    .nav a.btn { display: none; } /* hide demo btn to save space */
  }
  .logo-img {
  width: 38px;   /* или подгони под нужный размер */
  height: auto;  /* чтобы не искажалось */
  border-radius: 6px; /* если нужен скруглённый угол */
}

@keyframes swing {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); } /* перевернули направление */
  50% { transform: rotate(0deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
}

.swing {
  display: inline-block;
  transform-origin: bottom center; /* теперь вращается от нижнего края */
  animation: swing 3s ease-in-out infinite;
}
  .orange-text {
  background: linear-gradient(90deg, #FF8C00, #FF4500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
  `,
        }}
      />
      <HomePageContent />
      <Script
        src='https://cdn.emailjs.com/dist/email.min.js'
        strategy='afterInteractive'
      />
      <Script
        id='emailjs-form-handler'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            let formHandlerAttached = false;
            let isSubmitting = false;
            
            function initEmailJS() {
              if (typeof emailjs === 'undefined') {
                // Wait a bit and try again
                setTimeout(initEmailJS, 100);
                return;
              }
              
              emailjs.init('4SYMi98c8zlBSQXnp');
            }
            
            function setupFormHandler() {
              const form = document.getElementById('subscribe-form');
              if (!form || formHandlerAttached) return;
              
              formHandlerAttached = true;
              
              // Remove any existing inline onsubmit handler
              form.removeAttribute('onsubmit');
              
              form.addEventListener('submit', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                // Prevent double submission
                if (isSubmitting) {
                  return false;
                }
                
                const email = document.getElementById('email-input').value;
                const submitButton = form.querySelector('button[type="submit"]');
                if (!submitButton) return false;
                
                const originalButtonText = submitButton.textContent;
                
                // Disable button and set submitting state
                isSubmitting = true;
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
              
                // Check if EmailJS is loaded before sending
                if (typeof emailjs === 'undefined') {
                  alert("Please wait, the form is still loading...");
                  isSubmitting = false;
                  submitButton.disabled = false;
                  submitButton.textContent = originalButtonText;
                  return false;
                }
              
                // Send first email (subscription)
                let firstEmailSent = false;
                emailjs.send('service_6pgksdi', 'template_ld3y9nd', {
                  user_email: email
                })
                .then(() => {
                  firstEmailSent = true;
                  // Send second email (confirmation) only if first succeeds
                  return emailjs.send('service_6pgksdi', 'template_l21ckqw', {
                    user_email: email
                  });
                })
                .then(() => {
                  alert("Thanks! We'll be in touch.");
                  form.reset();
                  isSubmitting = false;
                  submitButton.disabled = false;
                  submitButton.textContent = originalButtonText;
                })
                .catch((err) => {
                  console.error('EmailJS Error:', err);
                  // If first email succeeded but second failed with 422, still show success
                  if (firstEmailSent && err.status === 422) {
                    console.warn('Second email (confirmation) failed with 422 - subscription email was sent successfully');
                    alert("Thanks! We'll be in touch.");
                    form.reset();
                  } else {
                    // First email failed or other error
                    alert("Oops, something went wrong. Try again!");
                  }
                  isSubmitting = false;
                  submitButton.disabled = false;
                  submitButton.textContent = originalButtonText;
                });
                
                return false;
              }, true); // Use capture phase to catch event early
            }
            
            // Try multiple times to ensure form handler is attached
            function trySetupHandler() {
              setupFormHandler();
              // Try again after a delay if handler wasn't attached
              if (!formHandlerAttached) {
                setTimeout(trySetupHandler, 100);
              }
            }
            
            // Set up form handler immediately (don't wait for DOMContentLoaded)
            function init() {
              trySetupHandler();
              initEmailJS();
            }
            
            // Try to set up immediately if DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', init);
            } else {
              // DOM is already loaded
              init();
            }
            
            // Also try after a delay to catch form that might be added later
            setTimeout(trySetupHandler, 200);
            setTimeout(trySetupHandler, 500);
          `,
        }}
      />
    </>
  );
}
