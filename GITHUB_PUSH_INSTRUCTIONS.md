# Commands to Push Your Website to GitHub

## After creating your GitHub repository, follow these steps:

### Step 1: Add Remote Repository
```bash
cd D:\ClaudeApps\Website\Samsaam\Samsaam
git remote add origin YOUR_GITHUB_URL_HERE
```

**Replace `YOUR_GITHUB_URL_HERE` with your actual repository URL**

Example:
```bash
git remote add origin https://github.com/samsaam/samsaam-portfolio.git
```

---

### Step 2: Rename Branch to Main
```bash
git branch -M main
```

---

### Step 3: Push to GitHub
```bash
git push -u origin main
```

**You may be asked to login:**
- Enter your GitHub username
- Enter your GitHub password (or Personal Access Token)

---

### Step 4: Verify
- Go to your GitHub repository URL in browser
- Refresh the page
- You should see all your files!

---

## If You Get Authentication Error:

### Option 1: Use GitHub Desktop (Easier)
1. Download: https://desktop.github.com/
2. Install and sign in
3. File → Add Local Repository
4. Select: `D:\ClaudeApps\Website\Samsaam\Samsaam`
5. Click "Publish repository"

### Option 2: Use Personal Access Token
If password doesn't work, you need a token:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Give it repo access
4. Copy the token
5. Use token instead of password

---

## After Successful Push:

Your website is now on GitHub! 🎉

Next step: Deploy to Vercel for free hosting!
