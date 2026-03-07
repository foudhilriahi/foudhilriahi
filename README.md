# Developer Galaxy - Foudhil Riahi Portfolio

An interactive cosmic portfolio showcasing projects, skills, and experience through a galaxy exploration interface.

## Features

- **Interactive Galaxy**: Drag to explore, scroll to zoom
- **Project Planets**: Each project represented as a unique planet
- **Skill Constellations**: Skills displayed as connected star formations
- **Cosmic Elements**: Interactive asteroids and satellites with developer messages
- **Space Station**: Contact panel for communication
- **Spaceship Cursor**: Custom cursor with trail effect (desktop only)
- **Boot Sequence**: Immersive loading animation
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Deployment to Vercel

### Step 1: Prepare Your Repository

1. Initialize a Git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Developer Galaxy portfolio"
```

2. Push to GitHub:
```bash
git remote add origin https://github.com/foudhilriahi/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
6. Click "Deploy"

Your portfolio will be live at: `https://your-project.vercel.app`

### Step 3: Connect Custom Domain (Namecheap)

1. **Purchase Domain**: Buy your domain at [namecheap.com](https://namecheap.com)

2. **Add Domain in Vercel**:
   - Go to your project in Vercel
   - Navigate to Settings → Domains
   - Add your custom domain (e.g., `foudhilriahi.com`)
   - Vercel will provide DNS records

3. **Configure DNS in Namecheap**:
   - Log in to Namecheap
   - Go to Domain List → Manage
   - Navigate to Advanced DNS
   - Add the following records:

   **For root domain (foudhilriahi.com):**
   ```
   Type: A Record
   Host: @
   Value: 76.76.21.21
   TTL: Automatic
   ```

   **For www subdomain:**
   ```
   Type: CNAME Record
   Host: www
   Value: cname.vercel-dns.com
   TTL: Automatic
   ```

4. **Verify Domain**:
   - Return to Vercel
   - Click "Verify" on your domain
   - DNS propagation may take up to 48 hours

5. **Set Primary Domain**:
   - In Vercel, mark your preferred domain as primary
   - Enable "Redirect other domains to primary" if desired

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with boot sequence
│   └── globals.css         # Global styles
├── components/
│   ├── BootSequence.tsx    # Initial loading animation
│   ├── GalaxyScene.tsx     # Main galaxy interface
│   ├── Planet.tsx          # Project planet component
│   ├── PlanetModal.tsx     # Project details modal
│   ├── Constellation.tsx   # Skills visualization
│   ├── Starfield.tsx       # Animated background
│   ├── SpaceshipCursor.tsx # Custom cursor effect
│   ├── SpaceStation.tsx    # Contact panel
│   ├── CosmicElements.tsx  # Interactive elements
│   └── HUD.tsx             # Heads-up display
├── data/
│   ├── projects.ts         # Project information
│   ├── skills.ts           # Skills data
│   └── experience.ts       # Work experience
└── utils/
    ├── animations.ts       # Animation configurations
    └── constants.ts        # App constants

```

## Customization

### Adding New Projects

Edit `data/projects.ts`:

```typescript
{
  id: 'new-project',
  name: 'Project Name',
  description: 'Description',
  stack: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  positionX: 50,  // 0-100
  positionY: 50,  // 0-100
  color: '#4F46E5',
  size: 90,
  github: 'https://github.com/...'
}
```

### Adding Skills

Edit `data/skills.ts` to add new skills to constellations.

### Updating Contact Information

Edit `utils/constants.ts`:

```typescript
export const CONTACT = {
  email: 'your@email.com',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  phone: '+1234567890',
  location: 'Your City, Country'
};
```

## Performance Optimization

- Starfield uses canvas for efficient rendering
- Animations are hardware-accelerated
- Mobile optimizations disable heavy effects
- Lazy loading for modals and panels
- Optimized for 60fps on most devices

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

Foudhil Riahi
- Email: foudhilriahi@gmail.com
- GitHub: [foudhilriahi](https://github.com/foudhilriahi)
- LinkedIn: [riahifoudhil](https://linkedin.com/in/riahifoudhil)
