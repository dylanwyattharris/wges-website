# West GA Equipment Solutions — Website

Production website for [West Georgia Equipment Solutions](https://www.westgaes.com).  
Built with React. Deployed on Vercel.

## 🚀 Deploy to Vercel (from GitHub)

### 1. Push to GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit: WGES website"
git remote add origin https://github.com/YOUR_USERNAME/wges-website.git
git push -u origin main
\`\`\`

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `wges-website` repository
4. Vercel auto-detects React (Create React App) — no config needed
5. Click **Deploy**

Your site will be live at `https://wges-website.vercel.app` (or a custom domain).

### 3. Add Custom Domain (westgaes.com)

In Vercel → Project → Settings → Domains:
- Add `westgaes.com` and `www.westgaes.com`
- Update your DNS provider with the records Vercel provides (A record + CNAME)

## 🛠 Local Development

\`\`\`bash
npm install
npm start
\`\`\`

Opens at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

\`\`\`bash
npm run build
\`\`\`

## 📁 Project Structure

\`\`\`
wges-website/
├── public/
│   ├── index.html          # HTML shell + meta tags
│   ├── logo-full.png       # Full WGES logo (with text)
│   └── logo-icon.png       # Icon-only WGES logo
├── src/
│   ├── App.js              # All components (Nav, Hero, Services, About, Contact, Footer)
│   ├── App.css             # All styles (CSS variables, responsive)
│   └── index.js            # React entry point
├── vercel.json             # Vercel deployment config
└── package.json
\`\`\`

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Yellow (Primary) | `#F5C518` |
| Black (Background) | `#0a0a0a` |
| White (Text) | `#ffffff` |

## 📞 Contact Info (in site)

- **Phone:** (678) 995-4632
- **Email:** getstarted@westgaes.com
- **Location:** Bowdon, GA 30108
- **Facebook:** facebook.com/WestGAES
