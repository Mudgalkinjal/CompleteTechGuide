### **HTML Guide**

---

#### **1. Meta Tags**  
**Purpose**: Provide metadata (e.g., charset, viewport, SEO descriptions).  
**Syntax**:  
```html
<head>
  <meta charset="UTF-8"> <!-- Character encoding -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive design -->
  <meta name="description" content="Page description for SEO"> <!-- Search engine snippet -->
  <meta name="keywords" content="HTML, CSS, JavaScript"> <!-- SEO keywords (less relevant today) -->
  <meta http-equiv="refresh" content="30"> <!-- Refresh page every 30s -->
</head>
```

---

#### **2. Semantic HTML**  
**Definition**: Use tags that describe their purpose (improves accessibility and SEO).  
**Examples**:  
- `<header>`: Introductory content (e.g., logo, navigation).  
- `<nav>`: Navigation links.  
- `<main>`: Primary content of the page.  
- `<article>`: Self-contained content (e.g., blog post).  
- `<section>`: Thematic grouping of content.  
- `<aside>`: Sidebar or tangential content.  
- `<footer>`: Copyright, contact info.  

**Non-semantic vs. Semantic**:  
```html
<!-- Non-semantic -->
<div class="header"></div>

<!-- Semantic -->
<header></header>
```

---

#### **3. Iframe Interaction**  
**Challenge**: Communicate between two iframes (cross-origin requires permissions).  
**Solution**: Use `window.postMessage()`.  

**Parent Page**:  
```html
<iframe id="frame1" src="frame1.html"></iframe>
<iframe id="frame2" src="frame2.html"></iframe>
```
```javascript
// Send message from parent to frame1
document.getElementById('frame1').contentWindow.postMessage('Hello Frame 1!', '*');

// Listen for messages from frames
window.addEventListener('message', (event) => {
  console.log('Parent received:', event.data);
});
```

**Child Frame (frame1.html)**:  
```javascript
// Send message to parent
window.parent.postMessage('Hi Parent!', '*');

// Send message to sibling frame (frame2)
window.parent.document.getElementById('frame2').contentWindow.postMessage('Hi Frame 2!', '*');
```

**Security**: Always specify the target origin (replace `'*'` with `'https://specific-origin.com'`).

---

#### **4. Banner Text on an Image**  
**Approach**: Use a container with relative positioning and absolute text overlay.  
**HTML**:  
```html
<div class="banner">
  <img src="image.jpg" alt="Background">
  <div class="banner-text">Sale Ends Soon!</div>
</div>
```
**CSS**:  
```css
.banner {
  position: relative; /* Context for absolute positioning */
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Perfect centering */
  color: white;
  font-size: 2em;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
```

---

#### **5. Keyboard Accessibility**  
**Best Practices**:  
- Use semantic elements (`<button>`, `<a>`, `<input>`).  
- Add `tabindex="0"` to make custom elements focusable.  
- Handle `Enter`/`Space` for custom interactive elements.  
- **ARIA Roles**:  
  ```html
  <div role="button" tabindex="0" aria-label="Close modal">X</div>
  ```
- **Focus Styles**:  
  ```css
  button:focus {
    outline: 2px solid blue; /* Never remove outlines! */
  }
  ```

---

### **CSS Guide**

---

#### **1. CSS Preprocessors**  
**What**: Tools like SASS, LESS, or Stylus that extend CSS with features like variables and mixins.  

**Pros**:  
- **Variables**: Reuse colors/fonts (e.g., `$primary-color: #333;`).  
- **Nesting**: Organize styles hierarchically.  
- **Mixins**: Reuse code blocks (e.g., for flexbox centering).  
- **Modularity**: Split code into partials (`_header.scss`).  

**Cons**:  
- Requires compilation to CSS.  
- Adds build-step complexity.  

**SASS Example**:  
```scss
// Variables
$primary: #3498db;

// Mixin
@mixin center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Usage
.container {
  @include center-flex;
  background: $primary;
}
```

---

#### **2. Flexbox**  
**Purpose**: 1D layout for rows/columns.  
**Key Properties**:  
- `display: flex`: Activates flexbox.  
- `flex-direction`: `row` (default), `column`, `row-reverse`.  
- `justify-content`: Align items along the main axis (e.g., `center`, `space-between`).  
- `align-items`: Align items along the cross axis (e.g., `stretch`, `center`).  
- `flex-wrap`: Allow items to wrap (`wrap`, `nowrap`).  

**Example**:  
```css
.container {
  display: flex;
  gap: 10px; /* Spacing between items */
  justify-content: space-between;
}
```

---

#### **3. CSS Grid**  
**Purpose**: 2D layouts (rows and columns).  
**Key Properties**:  
- `display: grid`: Activates grid.  
- `grid-template-columns`: Define column sizes (e.g., `repeat(3, 1fr)`).  
- `grid-template-rows`: Define row sizes.  
- `gap`: Spacing between grid items.  
- `grid-area`: Assign items to named areas.  

**Example**:  
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Two columns: 1:2 ratio */
  grid-template-rows: 100px auto;
  gap: 20px;
}

.item {
  grid-column: 1 / 3; /* Span from line 1 to 3 */
}
```

---

#### **4. CSS Layout Models**  
- **Normal Flow**: Default layout (`position: static`).  
- **Flexbox**: For 1D layouts.  
- **Grid**: For 2D layouts.  
- **Positioned**: `absolute`, `fixed`, `sticky`.  
- **Multi-column**: `column-count: 3`.  

---

#### **5. BEM Convention**  
**Naming Structure**:  
- **Block**: Standalone component (e.g., `.menu`).  
- **Element**: Part of a block (e.g., `.menu__item`).  
- **Modifier**: Variation of a block/element (e.g., `.menu__item--active`).  

**Example**:  
```html
<nav class="nav">
  <a class="nav__link nav__link--highlighted">Home</a>
</nav>
```

---

#### **6. Adaptive Layout with Flexbox (Accessible)**  
**HTML**:  
```html
<nav class="navbar" aria-label="Main navigation">
  <a href="#" class="nav-item">Home</a>
  <a href="#" class="nav-item">About</a>
  <a href="#" class="nav-item">Contact</a>
</nav>
```
**CSS**:  
```css
.navbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  background: #333;
}

.nav-item {
  color: white;
  padding: 0.5rem;
  text-decoration: none;
}

/* Responsive adjustment */
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }
}
```

---

#### **7. Box Model**  
**Components**:  
- **Content**: Text/images.  
- **Padding**: Space inside the border.  
- **Border**: Outline around padding.  
- **Margin**: Space outside the border.  

**Box-Sizing**:  
```css
* {
  box-sizing: border-box; /* Width includes padding + border */
}
```

---

#### **8. Pseudo-classes**  
**Definition**: Style elements in specific states.  
**Common Pseudo-classes**:  
- `:hover`: Mouse over an element.  
- `:focus`: Element is focused (e.g., input field).  
- `:active`: Element is being clicked.  
- `:nth-child(n)`: Select the nth child (e.g., `:nth-child(odd)`).  

**Example**:  
```css
.button:hover {
  opacity: 0.8;
}

tr:nth-child(even) {
  background: #f5f5f5;
}
```

---

#### **9. 3 Divs in Same Line**  
**Method 1: Flexbox**  
```css
.parent {
  display: flex;
  gap: 10px;
}
```

**Method 2: Inline-Block**  
```css
.child {
  display: inline-block;
  width: 30%; /* Adjust as needed */
}
```

---

#### **10. Position Property (Detailed)**  
- **`static`**: Default; element follows normal flow.  
- **`relative`**: Adjusts position relative to itself (retains original space).  
- **`absolute`**: Removed from flow; positioned relative to nearest positioned ancestor.  
- **`fixed`**: Removed from flow; positioned relative to viewport (stays on scroll).  
- **`sticky`**: Hybrid of `relative` and `fixed`; sticks to a scroll position.  

---

#### **11. Display Property**  
- **`block`**: Takes full width (e.g., `<div>`).  
- **`inline`**: Flows in text (e.g., `<span>`; ignores width/height).  
- **`inline-block`**: Mix of block and inline (respects width/height).  
- **`flex`/`grid`**: Modern layout models.  
- **`none`**: Hides the element.  

---

#### **12. Viewport**  
**Meta Tag**:  
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: Adjusts to the device’s screen width.  
- `initial-scale=1.0`: Sets the initial zoom level.  

---

#### **13. Media Queries**  
**Syntax**:  
```css
@media (max-width: 768px) {
  /* Styles for screens ≤ 768px */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Styles for tablets */
}
```

---

#### **14. Responsive vs. Adaptive CSS**  
- **Responsive**: Fluid layouts using percentages, flex/grid.  
- **Adaptive**: Fixed layouts at specific breakpoints (e.g., `1200px`, `768px`).  

---

#### **15. Centering Elements**  
**Horizontally**:  
```css
.center {
  margin: 0 auto; /* Works for block elements with a set width */
}
```

**Vertically & Horizontally (Flexbox)**:  
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**Grid**:  
```css
.parent {
  display: grid;
  place-items: center;
}
```

---

#### **16. CSS Libraries**  
- **Bootstrap**: Prebuilt components (grid, buttons, modals).  
- **Tailwind**: Utility-first framework (e.g., `class="p-4 flex"`).  
- **Foundation**: Responsive front-end framework.  

---

#### **17. CSS Rendering & Specificity**  
**Order of Precedence**:  
1. `!important` (avoid overuse).  
2. Inline styles (e.g., `<div style="color: red">`).  
3. ID selectors (`#header`).  
4. Class/attribute selectors (`.button`, `[type="text"]`).  
5. Tag selectors (`div`, `p`).  

**Example**:  
```css
#nav .link { color: blue; } /* Becomes blue (higher specificity) */
.link { color: red; }
```

---

#### **18. Vertical Middle Alignment**  
**Method 1: Flexbox**  
```css
.container {
  display: flex;
  align-items: center;
}
```

**Method 2: Transform**  
```css
.element {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

**Method 3: Grid**  
```css
.container {
  display: grid;
  align-items: center;
}
```

---

### **Final Notes**  
- **Accessibility**: Always use semantic HTML and test with screen readers.  
- **Performance**: Minify CSS and avoid overly complex selectors.  
- **Cross-Browser Testing**: Check compatibility for older browsers (e.g., IE11).  