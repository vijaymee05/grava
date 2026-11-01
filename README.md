# GRAVA - The Stone Art STUDIO

[![Deploy to GitHub Pages](https://github.com/vijaymee05/grava/actions/workflows/deploy.yml/badge.svg)](https://github.com/vijaymee05/grava/actions/workflows/deploy.yml)

A modern, responsive, luxury 2-page architectural stone art website for **GRAVA - The Stone Art STUDIO** (Athena Stones).

🌐 **Live Website**: [https://vijaymee05.github.io/grava/](https://vijaymee05.github.io/grava/)

---

## 🏛️ About GRAVA

Carrying forward an 800,000-year human tradition of stone sculpting, GRAVA specializes in bespoke stone carving, CNC routing, high-pressure water jet cutting, and multi-medium fusion (Stone, Wood & Metal) for Architects, Interior Designers, and luxury estates.

- **Manufacturing Facilities**:
  - **Unit 1**: Ahmedabad, Gujarat (Western Technology & Rapid Prototyping Hub)
  - **Unit 2**: Amberi, Udaipur, Rajasthan (Flagship Workshop in India's Stone Handicraft Capital)
- **Design Studio**: In-house CAD & 3D digital visualization studio.

---

## 📄 Pages & Structure

### 1. Home Page (`index.html`)
- **Hero & Heritage Overview**: Featuring the signature brand aesthetic, stats, and WhatsApp connect.
- **Introduction & History**: 800,000-year history of representational stone carving and the iconic Serene Faces sculpture.
- **Our Work & Capabilities**: Site-specific conceptualization, CAD/3D modeling, CNC routers, Water Jet cutting, and Stone-Wood-Metal fusion.
- **Product Catalog with Interactive Category Filters**:
  - **Jali Work**: Art No. 1155, 1160, 1157, 1156, 1159, 1158 & Grand Architectural Jali Facade.
  - **3D Texture Wall Panels**: Lotus Rosette, Geometric Petals, Fluid Wave, Diamond Weave, Wood-inlay Accent Tile, and Curvilinear Organic Flow.
  - **Sculptures & Murals**: Faces Monolith, Water Goddess Spout, Contemporary Silhouette, 7 Running Horses Vastu Mural, Meditative Buddha, and Gold Floral Basket.
  - **Stone Carvings**: Expressive Intertwined Hands, Blooming Lotus Plaque, and Arched Jasmine Creeper Stele.
  - **Garden Accessories**: Royal Carved Chhatri Gazebo, White Marble Pergola, Octagonal Sandstone Pavilion, Roman Balustrade Colonnade, Stone Dining Set, and Royal Palace Bench.
  - **Planters & Lamps**: Backlit Decorative Jali Screens, Heritage Carved Trough, Floral Lattice Urn/Lamp, Twin Garden Urns, and Heart-Shaped Natural Stone Bowls.
  - **Architectural Fountains**: Grand Tiered Lion Fountain, Rustic Waterfall, Lion Mask Wall Fountain, Arched Lattice Shell Fountain, 3-Tier Pedestal Fountain, and Scrolled Crest Fountain.
  - **Heritage Zarokha**: Jaisalmer Triple-Casement, Double-Bay with Chhajja, White Marble Balcony, Royal Haveli Facade, Multi-Tier Arched Balcony, and Pink Sandstone Chhatri.
- **Full-Screen Lightbox**: High-resolution zoom view with material specifications and direct WhatsApp inquiry generator.

### 2. About Us & Contact Page (`about.html`)
- **Story & Origins**: Growth from Ahmedabad, Gujarat to Amberi, Udaipur (Rajasthan).
- **Dual Production Units**: Specifications and capabilities of the Ahmedabad & Udaipur facilities.
- **Verified Contact Details**:
  - **Contact Person**: Manoj Sharma
  - **Phone / Mobile**: [+91 8905819108](tel:+918905819108)
  - **Email**: [gravastoneart.1512@gmail.com](mailto:gravastoneart.1512@gmail.com)
  - **Studio Location**: N.H. 8 near Amberi Flyover, Amberi, Udaipur (Raj.), India
- **Interactive Project Consultation Form**: Instant simulation with client feedback.
- **Location Map & Directions**: Embedded map centered on Amberi Flyover / NH 8 Udaipur with directions from airport and railway station.

---

## ⚡ Automated CI/CD (GitHub Pages)

Whenever changes are pushed to the `main` branch, the GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) automatically triggers, builds, and deploys the latest version to GitHub Pages.

To enable GitHub Pages in your GitHub repository settings:
1. Go to repository **Settings** $\rightarrow$ **Pages**.
2. Under **Build and deployment** $\rightarrow$ **Source**, select **GitHub Actions**.
3. Every push to `main` will instantly update the live site at `https://vijaymee05.github.io/grava/`.

---

## 💻 Local Development

Run with any local web server or XAMPP:
```bash
# Clone the repository
git clone https://github.com/vijaymee05/grava.git

# Serve locally
cd grava
# Using Python
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

