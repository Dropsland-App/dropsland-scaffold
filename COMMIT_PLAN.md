# Semantic Commit Plan

This document outlines the plan for creating semantic commits for the recent changes.

## Commit Order

### 1. Profile Type Management System (Foundation)

**Type:** `feat`  
**Files:**

- `src/providers/ProfileTypeProvider.tsx`
- `src/hooks/useProfileType.ts`
- `src/util/storage.ts`
- `src/main.tsx`

**Message:**

```
feat: add profile type management system

- Add ProfileTypeProvider for managing DJ/Fan profile types
- Add useProfileType hook for accessing profile type context
- Add profileType to storage schema
- Integrate ProfileTypeProvider in app root
```

### 2. Header Logo and Branding

**Type:** `feat`  
**Files:**

- `src/components/HeaderLogo.tsx`
- `src/components/HeaderLogo.module.css`
- `public/logo-dropsland.png`

**Message:**

```
feat: add header logo component

- Add HeaderLogo component with Dropsland branding
- Add logo image asset
- Style logo with CSS module
```

### 3. Profile Type Selector Component

**Type:** `feat`  
**Files:**

- `src/components/ProfileTypeSelector.tsx`
- `src/components/ProfileTypeSelector.module.css`

**Message:**

```
feat: add profile type selector component

- Add ProfileTypeSelector component for switching between DJ/Fan modes
- Integrate with profile type context
- Style selector with active state indicators
```

### 4. Bottom Navigation Component

**Type:** `feat`  
**Files:**

- `src/components/BottomNav.tsx`
- `src/components/BottomNav.module.css`

**Message:**

```
feat: add bottom navigation component

- Implement BottomNav component with navigation icons
- Add navigation items for Home, Explore, Wallet, Activity, Profile
- Style bottom navigation with active state indicators
```

### 5. Explore Page with Token Buying

**Type:** `feat`  
**Files:**

- `src/pages/Explore.tsx`
- `src/components/BuyDialog.tsx`
- `src/components/BuyDialog.css`

**Message:**

```
feat: add explore page with token buying functionality

- Add Explore page with artist discovery and search
- Implement BuyDialog component for token purchases
- Add filter functionality (all, artists, tokens, NFTs)
- Add artist card UI with buy functionality
```

### 6. Create Token Form

**Type:** `feat`  
**Files:**

- `src/components/CreateTokenForm.tsx`
- `src/components/CreateTokenForm.css`

**Message:**

```
feat: add create token form component

- Add CreateTokenForm modal component
- Implement token creation form with validation
- Add form styling and accessibility features
```

### 7. Wallet Page

**Type:** `feat`  
**Files:**

- `src/pages/Wallet.tsx`

**Message:**

```
feat: add wallet page

- Add Wallet page for viewing balances and assets
- Display XLM balance and owned tokens
- Show NFT collection and transaction history
- Add wallet connection status UI
```

### 8. Activity Page

**Type:** `feat`  
**Files:**

- `src/pages/Activity.tsx`

**Message:**

```
feat: add activity page

- Add Activity page for tracking user interactions
- Implement activity filters (tokens, NFTs, music, community)
- Display activity feed with timestamps
- Add activity type icons and descriptions
```

### 9. Profile Page

**Type:** `feat`  
**Files:**

- `src/pages/Profile.tsx`

**Message:**

```
feat: add profile page

- Add Profile page with DJ/Fan view switching
- Add profile-specific content (tokens, NFTs, stats)
- Display community stats and collection information
- Show different views based on profile type
```

### 10. App Routing and Layout Integration

**Type:** `feat`  
**Files:**

- `src/App.tsx`

**Message:**

```
feat: integrate routing and navigation in app layout

- Add React Router routes for Explore, Wallet, Activity, Profile pages
- Integrate HeaderLogo and ProfileTypeSelector in header
- Add BottomNav to app layout
- Set up routing structure with AppLayout component
```

### 11. Update Existing Components with CSS Modules

**Type:** `style`  
**Files:**

- `src/components/ConnectAccount.tsx`
- `src/components/ConnectAccount.module.css`
- `src/components/NetworkPill.tsx`
- `src/components/NetworkPill.module.css`
- `src/components/WalletButton.tsx`
- `src/components/WalletButton.module.css`

**Message:**

```
style: add CSS modules for existing components

- Convert ConnectAccount to use CSS module
- Convert NetworkPill to use CSS module
- Convert WalletButton to use CSS module
- Improve component styling consistency
```

### 12. Update App Layout and Global Styles

**Type:** `style`  
**Files:**

- `src/App.module.css`
- `src/index.css`
- `src/pages/Home.tsx`
- `src/pages/ScaffoldHome.tsx`

**Message:**

```
style: update app layout and global styles

- Update App layout styles for new navigation
- Update global styles for improved UI consistency
- Update Home and ScaffoldHome pages
```

### 13. Update Configuration Files

**Type:** `chore`  
**Files:**

- `package.json`
- `index.html`

**Message:**

```
chore: update dependencies and configuration

- Update package.json with new dependencies
- Update index.html configuration
```

## Usage

### Option 1: Run the automated script

```bash
./create-commits.sh
```

### Option 2: Manual commits

Follow the order above and create commits manually using:

```bash
git add <files>
git commit -m "commit message"
```

## Notes

- Commits are ordered by dependency (foundation first, then dependent features)
- Each commit is focused on a single feature or concern
- Follows semantic commit convention (feat, style, chore)
- If you encounter permission issues, you may need to fix git repository permissions first
