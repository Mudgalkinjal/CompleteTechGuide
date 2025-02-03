### **Web Development & Performance **  

#### **1. Debugging a Web Page**  
1. **Browser DevTools**:  
   - Use `Console` for errors.  
   - `Sources` tab for breakpoints.  
   - `Network` tab to audit requests.  
2. **Linting**: Check for syntax errors.  
3. **Isolate Components**: Disable scripts/stylesheets one by one.  

---

#### **2. Improving Page Speed**  
- **Optimize Images**: Compress (e.g., WebP format).  
- **Lazy Loading**: Defer non-critical resources.  
- **Code Splitting**: Split JS bundles (e.g., Webpack).  
- **CDN**: Serve static assets via CDN.  
- **Caching**: Use `Cache-Control` headers.  

---

#### **3. Blank Screen Troubleshooting**  
1. **Check Console**: Look for JS/CSS errors.  
2. **Verify HTML**: Ensure valid markup (e.g., missing `<head>`).  
3. **Network Requests**: Confirm files load (e.g., 404 errors).  
4. **Disable Extensions**: Conflicts may block rendering.  

---

#### **4. MVC Framework**  
- **Model**: Manages data (e.g., database interactions).  
- **View**: Renders UI (e.g., HTML templates).  
- **Controller**: Handles logic/routing (e.g., user input).  
- **Example**: Django (Python), Ruby on Rails.  

---

#### **5. General Debugging in Web Contexts**  
- **Console Logging**: `console.log()`, `console.error()`.  
- **Performance Profiling**: Use Chrome’s Lighthouse.  
- **Unit Testing**: Jest, Mocha.  
- **Cross-Browser Testing**: Check Safari, Firefox, Edge.  

---


#### **6. OOP vs Functional Programming**  
| **OOP** | **Functional** |  
|---------|----------------|  
| Focus on objects and classes. | Focus on pure functions. |  
| Stateful (mutable data). | Stateless (immutable data). |  
| Inheritance/Polymorphism. | Higher-order functions (e.g., `map`, `reduce`). |  

#### **7. Structured vs OOP/Functional Programming**  
- **Structured (Linear)**:  
  - Procedural steps (e.g., C).  
  - Harder to scale for complex systems.  
- **OOP/Functional**:  
  - Modularity and reusability.  
  - Better for large-scale applications.  

---

#### **8. General Debugging Approach**  
1. **Reproduce**: Confirm the issue occurs consistently.  
2. **Logs**: Check application/container logs (`kubectl logs <pod>`).  
3. **Isolate**: Disable components to identify the faulty module.  
4. **Breakpoints**: Use IDE/debugger (Chrome DevTools, PyCharm).  
5. **Test Fixes**: Validate with unit/integration tests.  
