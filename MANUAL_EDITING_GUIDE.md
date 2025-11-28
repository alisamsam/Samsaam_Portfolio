# Manual Editing Guide for Your Website

## 📁 Website Location
**Main Folder:** `D:\ClaudeApps\Website\Samsaam\Samsaam`

## 🛠️ Tools You Need

### 1. **Text Editor (Choose One):**
- **VS Code** (Recommended) - Download: https://code.visualstudio.com/
- **Notepad++** - Download: https://notepad-plus-plus.org/
- **Sublime Text** - Download: https://www.sublimetext.com/
- **Even Windows Notepad** works (but less features)

### 2. **Web Browser (for testing):**
- Chrome, Firefox, or Edge
- Just double-click `index.html` to view changes

---

## 📝 What File to Edit for Different Changes

### **CONTENT CHANGES**

#### 1. **Homepage Content** → Edit: `index.html`
```
Location: D:\ClaudeApps\Website\Samsaam\Samsaam\index.html
```

**What you can change:**
- Your name and title
- About Me text
- Work experience descriptions
- Project descriptions
- Contact information
- Email, phone, social media links

**How to edit:**
1. Right-click `index.html`
2. Select "Open with" → Choose your text editor
3. Find the text you want to change
4. Edit it
5. Save (Ctrl + S)
6. Double-click `index.html` to see changes in browser
7. Refresh browser (F5) if already open

#### 2. **Detailed Projects Page** → Edit: `generic.html`
```
Location: D:\ClaudeApps\Website\Samsaam\Samsaam\generic.html
```

---

### **VISUAL CHANGES**

#### 3. **Colors, Fonts, Spacing** → Edit: `assets/css/main.css`
```
Location: D:\ClaudeApps\Website\Samsaam\Samsaam\assets\css\main.css
```

**WARNING:** CSS is more technical. Make small changes at a time.

#### 4. **Images** → Replace files in: `images/` folder
```
Location: D:\ClaudeApps\Website\Samsaam\Samsaam\images\
```

**How to change images:**
1. Add your new image to the `images/` folder
2. Make sure it's a good size (recommended: 1200x800px for sections)
3. Rename it to match existing names OR
4. Update the HTML to use your new filename

---

## 📖 Common Editing Tasks

### **TASK 1: Change Your Name**

**File:** `index.html`

**Find this (around line 24):**
```html
<h1><a href="index.html">Samsaam Ali Baig</a></h1>
```

**Change to:**
```html
<h1><a href="index.html">Your New Name</a></h1>
```

---

### **TASK 2: Update Email Address**

**File:** `index.html`

**Find this (around line 360):**
```html
<li class="icon solid fa-envelope"><a href="mailto:alisamsam72@gmail.com">alisamsam72@gmail.com</a></li>
```

**Change to:**
```html
<li class="icon solid fa-envelope"><a href="mailto:your.email@example.com">your.email@example.com</a></li>
```

---

### **TASK 3: Add Your LinkedIn Profile**

**File:** `index.html`

**Find this (around line 361):**
```html
<li class="icon brands fa-linkedin"><a href="#">linkedin.com/in/samsaam-ali-baig</a></li>
```

**Change to:**
```html
<li class="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/YOUR_USERNAME">linkedin.com/in/YOUR_USERNAME</a></li>
```

---

### **TASK 4: Change About Me Text**

**File:** `index.html`

**Find this section (around line 60-65):**
```html
<h2 class="major">About Me</h2>
<p>I am a passionate Mechanical Engineer with expertise in sustainability...</p>
<p>My journey includes working with prestigious organizations...</p>
```

**Simply edit the text between `<p>` and `</p>` tags**

---

### **TASK 5: Replace an Image**

**Example: Change your profile picture**

**Option 1: Keep same filename**
1. Delete old `Avatar.jpeg` from `images/` folder
2. Copy your new photo to `images/` folder
3. Rename your new photo to `Avatar.jpeg`
4. Done! Refresh browser

**Option 2: Use different filename**
1. Copy your new photo (e.g., `my-photo.jpg`) to `images/` folder
2. Open `index.html`
3. Find: `<img src="images/Avatar.jpeg"`
4. Change to: `<img src="images/my-photo.jpg"`
5. Save and refresh browser

---

### **TASK 6: Add a New Work Experience**

**File:** `index.html`

**Find the work experience sections (around line 120-200)**

**Copy this template:**
```html
<section class="wrapper spotlight style2">
    <div class="inner">
        <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
        <div class="content">
            <h2 class="major">Your Job Title</h2>
            <h3>Company Name</h3>
            <p>Job description goes here...</p>
            <ul>
                <li>Key responsibility 1</li>
                <li>Key responsibility 2</li>
                <li>Key responsibility 3</li>
            </ul>
        </div>
    </div>
</section>
```

**Paste it where you want the new experience to appear**

---

### **TASK 7: Change Colors**

**File:** `assets/css/main.css`

**Find these color codes in the CSS file:**

**Primary Color (Blue accent):**
```css
/* Search for: #935d8c */
/* Change to your preferred color */
```

**Background Color:**
```css
/* Search for: #2e3141 */
/* Change to your preferred dark color */
```

**Text Color:**
```css
/* Search for: #ffffff or rgba(255, 255, 255 */
/* For white text */
```

**🎨 Color Picker Tool:** https://htmlcolorcodes.com/

---

## 🖼️ Image Guidelines

### **Recommended Image Sizes:**
- **Profile Photo (Avatar):** 500x500px (square)
- **Section Images (pic01-08):** 1200x800px (landscape)
- **Background:** 1920x1080px (full HD)

### **File Formats:**
- `.jpg` or `.jpeg` - Best for photos
- `.png` - Best for logos or transparent images
- `.gif` - For animations (not recommended for professional site)

### **How to Resize Images:**
- **Online Tool:** https://www.iloveimg.com/resize-image
- **Windows:** Open in Paint → Resize
- **Mac:** Open in Preview → Tools → Adjust Size

---

## 💻 Step-by-Step Editing Process

### **Method 1: Using VS Code (Recommended)**

1. **Download VS Code:** https://code.visualstudio.com/
2. **Install VS Code**
3. **Open your website folder:**
   - Open VS Code
   - File → Open Folder
   - Navigate to `D:\ClaudeApps\Website\Samsaam\Samsaam`
   - Click "Select Folder"
4. **Edit files:**
   - Click on any file in the left sidebar
   - Make your changes
   - Save (Ctrl + S)
5. **Preview:**
   - Right-click `index.html` in VS Code
   - Select "Open with Live Server" (install Live Server extension first)
   - OR just double-click `index.html` in File Explorer

### **Method 2: Using Notepad++ (Simpler)**

1. **Download Notepad++:** https://notepad-plus-plus.org/
2. **Install Notepad++**
3. **Open file:**
   - Right-click `index.html`
   - Open With → Notepad++
4. **Edit and Save**
5. **Preview:**
   - Double-click `index.html` in File Explorer
   - Opens in your web browser

### **Method 3: Using Windows Notepad (Basic)**

1. **Right-click `index.html`**
2. **Open With → Notepad**
3. **Edit and Save**
4. **Preview:** Double-click `index.html`

---

## 🔍 Finding Specific Content

### **How to Find Text in Your Files:**

**In VS Code or Notepad++:**
1. Press `Ctrl + F` (Find)
2. Type the text you want to find
3. Press Enter to jump to it

**Example:** Want to change your phone number?
- Press `Ctrl + F`
- Search for "000-0000"
- Edit it

---

## ⚠️ Important Tips

### **DO's:**
✅ Make a backup before big changes (copy the whole folder)
✅ Change one thing at a time
✅ Test in browser after each change
✅ Save your work frequently
✅ Keep your code properly indented

### **DON'Ts:**
❌ Don't delete `<` or `>` brackets
❌ Don't forget closing tags (e.g., `</div>`)
❌ Don't edit minified files (files ending in `.min.js` or `.min.css`)
❌ Don't change file names without updating references
❌ Don't use special characters in image filenames (use: `my-photo.jpg` not `my photo!.jpg`)

---

## 🐛 Common Mistakes & Fixes

### **Problem 1: Page looks broken**
**Cause:** Missing closing tag
**Fix:** Check your HTML - every `<div>` needs `</div>`

### **Problem 2: Image not showing**
**Cause:** Wrong path or filename
**Fix:** 
- Check spelling: `Avatar.jpeg` not `avatar.jpeg` (case sensitive)
- Check location: `images/Avatar.jpeg` not `Avatar.jpeg`

### **Problem 3: Changes not appearing**
**Cause:** Browser cache
**Fix:** 
- Press `Ctrl + F5` (hard refresh)
- Or press `Ctrl + Shift + Delete` → Clear cache

### **Problem 4: CSS changes not working**
**Cause:** Wrong file or syntax error
**Fix:**
- Make sure you're editing `main.css` not `main.min.css`
- Check for missing semicolons `;` after each CSS property

---

## 📚 Learning Resources

### **HTML Basics:**
- https://www.w3schools.com/html/
- Tutorial: How to structure content

### **CSS Basics:**
- https://www.w3schools.com/css/
- Tutorial: How to style your website

### **Quick Reference:**
- HTML Cheat Sheet: https://htmlcheatsheet.com/
- CSS Cheat Sheet: https://htmlcheatsheet.com/css/

---

## 🚀 After Making Changes

### **Testing Your Changes:**

1. **Open in Browser:**
   - Double-click `index.html`
   - Opens in default browser

2. **Test on Different Devices:**
   - Desktop: Full size
   - Mobile: Resize browser window OR
   - Press `F12` → Click phone icon for mobile view

3. **Test All Links:**
   - Click every menu item
   - Click every "Learn more" button
   - Make sure everything works

### **Updating on GitHub & Vercel:**

After making changes locally:

```bash
# Navigate to folder
cd D:\ClaudeApps\Website\Samsaam\Samsaam

# See what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Updated contact info and images"

# Push to GitHub
git push
```

**Vercel will automatically update** within 1-2 minutes after pushing to GitHub!

---

## 📞 Quick Reference Sheet

| What to Change | File to Edit | Line (Approx) |
|---------------|--------------|---------------|
| Your Name | index.html | 24, 48 |
| Email | index.html | 360 |
| Phone | index.html | 359 |
| About Text | index.html | 60-65 |
| Work Experience | index.html | 120-200 |
| Projects | index.html | 230-270 |
| LinkedIn/Social | index.html | 361-362 |
| Profile Picture | images/Avatar.jpeg | - |
| Section Images | images/pic01-08.jpg | - |
| Colors | assets/css/main.css | Various |

---

## ✅ Checklist Before Publishing

- [ ] All personal information updated
- [ ] All placeholder text removed
- [ ] All images replaced/updated
- [ ] All links work (test them!)
- [ ] Contact email is correct
- [ ] Social media links are correct
- [ ] Tested on mobile view
- [ ] No spelling errors
- [ ] No broken images

---

## 🆘 Need More Help?

**File Location Again:**
```
D:\ClaudeApps\Website\Samsaam\Samsaam
```

**Important Files:**
- `index.html` - Main page
- `generic.html` - Projects detail page
- `images/` - All images
- `assets/css/main.css` - Styling

**Remember:** Always keep a backup copy before major changes!

---

*Created: November 28, 2024*
*Website Template: HTML5 UP Solid State*
