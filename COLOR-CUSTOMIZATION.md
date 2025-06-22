# Color Customization Guide for Balaji Pest Control Website

## 🎨 How to Match Colors to Your Logo

Your website now includes your `balaji.jpeg` logo and a customizable color theme. Follow this guide to perfectly match your website colors to your logo.

## 📁 Files Updated

✅ **Logo Integration Complete:**
- All HTML pages now display your logo in header and footer
- Logo is responsive and looks great on all devices
- Professional styling applied

✅ **Color Theme System:**
- New file: `css/color-theme.css` - Contains all color variables
- Easy to customize - just change a few color values
- Automatically applies to entire website

## 🔧 How to Customize Colors

### Step 1: Open the Color Theme File
Open `css/color-theme.css` in any text editor.

### Step 2: Find the Color Variables Section
Look for this section at the top:

```css
:root {
    /* Primary Colors - Update these to match your logo */
    --primary-color: #2c5530;        /* Deep Green */
    --primary-light: #4a7c59;        /* Lighter green */
    --primary-dark: #1a3d1f;         /* Darker green */
    
    /* Secondary Colors */
    --secondary-color: #f39c12;      /* Orange/Gold accent */
    --secondary-light: #f5b041;      /* Light orange */
    --secondary-dark: #d68910;       /* Dark orange */
}
```

### Step 3: Choose Your Color Scheme

**Option A: Use Pre-made Themes**
Uncomment one of the ready-made color schemes in the file:

1. **Green Theme (Current)** - Professional pest control colors
2. **Blue Theme** - Professional and trustworthy
3. **Red Theme** - Bold and attention-grabbing  
4. **Purple Theme** - Original design colors
5. **Teal Theme** - Modern and fresh

**Option B: Custom Colors**
Replace the color values with colors from your logo:

```css
:root {
    --primary-color: #YOUR_MAIN_COLOR;
    --primary-light: #YOUR_LIGHTER_COLOR;
    --primary-dark: #YOUR_DARKER_COLOR;
    --secondary-color: #YOUR_ACCENT_COLOR;
}
```

## 🎯 How to Pick Colors from Your Logo

### Method 1: Online Color Picker
1. Upload your logo to an online color picker tool:
   - **Coolors.co** - Upload image and extract colors
   - **Adobe Color** - Extract color palette from image
   - **Canva Color Palette Generator**

2. Copy the hex color codes (e.g., #2c5530)
3. Replace the values in `css/color-theme.css`

### Method 2: Browser Developer Tools
1. Open your website in Chrome/Firefox
2. Right-click on your logo → "Inspect Element"
3. Use the color picker tool in developer tools
4. Click on colors in your logo to get hex codes

### Method 3: Image Editing Software
1. Open your logo in Photoshop, GIMP, or similar
2. Use the eyedropper tool to sample colors
3. Note down the hex color codes
4. Update the CSS file

## 🌈 Recommended Color Combinations

### For Pest Control Business:

**Professional Green (Recommended)**
```css
--primary-color: #2c5530;    /* Forest Green */
--secondary-color: #f39c12;  /* Orange */
```

**Trust Blue**
```css
--primary-color: #2980b9;    /* Professional Blue */
--secondary-color: #f39c12;  /* Orange */
```

**Bold Red**
```css
--primary-color: #c0392b;    /* Strong Red */
--secondary-color: #f39c12;  /* Orange */
```

## 📱 Testing Your Colors

After updating colors:

1. **Save the file** (`css/color-theme.css`)
2. **Refresh your browser** (Ctrl+F5 or Cmd+Shift+R)
3. **Check all pages** to ensure colors look good
4. **Test on mobile** - resize browser window or use phone

## 🔍 What Colors Control What

- **Primary Color**: Headers, buttons, main text highlights
- **Primary Light**: Hover effects, gradients
- **Primary Dark**: Shadows, deep accents
- **Secondary Color**: Logo accents, special highlights, footer icons
- **Success Color**: Checkmarks, positive elements
- **Warning Color**: Important notices
- **Accent Color**: Emergency buttons, urgent elements

## 🎨 Quick Color Swaps

### To Change Main Theme Color:
Replace `--primary-color: #2c5530;` with your color

### To Change Accent Color:
Replace `--secondary-color: #f39c12;` with your color

### To Change Button Colors:
Both primary and secondary colors affect buttons

## 🚀 Advanced Customization

### Adding New Colors:
```css
:root {
    --custom-color: #YOUR_COLOR;
}

/* Then use it anywhere: */
.my-element {
    color: var(--custom-color);
}
```

### Creating Gradients:
```css
--my-gradient: linear-gradient(135deg, #color1, #color2);
```

## 📞 Need Help?

If you need assistance with color customization:

1. **Take a screenshot** of your logo
2. **Use an online color picker** to extract colors
3. **Test different combinations** until you find the perfect match
4. **Save your changes** and refresh the browser

## 🎯 Final Result

Once customized, your website will have:
- ✅ Your logo prominently displayed
- ✅ Colors that perfectly match your brand
- ✅ Professional, cohesive design
- ✅ Consistent branding across all pages

---

**Your website is now fully branded with your logo and ready for color customization!**

*Need the colors changed? Just edit one file: `css/color-theme.css`*
