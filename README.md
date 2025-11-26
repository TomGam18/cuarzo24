# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Email Setup (Contact Form)

The contact form uses **FormSubmit** - a free, unlimited, and stable email service that requires **zero configuration** and **no API keys**. Perfect for long-term use!

### Quick Setup (1 minute):

1. **Create a `.env` file** in the root directory:

   ```env
   # Contact Form Email
   VITE_CONTACT_EMAIL=hr@cuarzo24.com

   # Social Media Links (optional - only add the ones you use)
   VITE_SOCIAL_FACEBOOK=https://www.facebook.com/cuarzo24
   VITE_SOCIAL_INSTAGRAM=https://www.instagram.com/cuarzo24
   VITE_SOCIAL_LINKEDIN=https://www.linkedin.com/company/cuarzo24
   VITE_SOCIAL_YOUTUBE=https://www.youtube.com/@cuarzo24
   ```

   **Environment Variables:**
   - `VITE_CONTACT_EMAIL`: Your email address where CVs will be sent (required)
   - `VITE_SOCIAL_FACEBOOK`: Facebook page URL (optional)
   - `VITE_SOCIAL_INSTAGRAM`: Instagram profile URL (optional)
   - `VITE_SOCIAL_LINKEDIN`: LinkedIn company page URL (optional)
   - `VITE_SOCIAL_YOUTUBE`: YouTube channel URL (optional)

   **Note:** Only social links that are configured will appear in the footer. If you don't have a social media account, simply don't add that variable.

2. **Restart your development server** after adding the environment variables.

That's it! The form will send emails directly to your specified address, and only configured social media links will appear in the footer.

### Why FormSubmit?

- ✅ **Free & Unlimited** - No monthly limits, no credit cards
- ✅ **Zero Configuration** - No API keys, no accounts to create
- ✅ **File Attachments** - Supports CV uploads (PDF, Word)
- ✅ **Long-term Stable** - Been around for years, very reliable
- ✅ **No Dependencies** - Uses native fetch API, no extra packages
- ✅ **Spam Protection** - Built-in spam filtering
- ✅ **Professional Formatting** - Uses formatted message structure for clean emails

**Note:** FormSubmit uses predefined templates (`table`, `box`, `basic`). The current implementation uses a nicely formatted message structure that looks professional. For fully custom HTML email templates, consider Web3Forms or Formspree (both free with custom template support).

### Alternative: If you need more control

If you prefer a different service, you can easily switch to:

- **Formspree** (free tier: 50 submissions/month)
- **Web3Forms** (free tier: 250 submissions/month)
- **Netlify Forms** (if hosting on Netlify - unlimited and free)

The form validates all fields and shows success/error messages when submitting.
