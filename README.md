# 🚀 DevStack — Build Your Ideal Development Stack

DevStack is a modern and interactive web application designed to help developers explore, filter, and curate their ideal tech stack for upcoming software projects. Users can view various technologies across frontend, backend, database, and tooling categories, side-by-side with ratings, difficulty levels, and instant notifications.

---

## 🛠️ Technologies Used

* **Frontend Library:** React.js (Vite)
* **Styling & UI Components:** Tailwind CSS, DaisyUI
* **Language:** JavaScript (ES6+)
* **State & Feedback:** React-Toastify
* **Data Source:** JSON (Static tech data)

---

## ✨ Key Features

* 📱 **Interactive Tech Explorer:** Browse a grid of modern web development technologies with clean badges, difficulty indicators, and ratings.
* ⚡ **Dynamic Stack Builder:** Real-time sidebar tracking that updates instantly when you add or remove technologies from your customized stack.
* 🔔 **Instant Feedback & Notifications:** Smooth user feedback powered by `react-toastify` when adding duplicates, clearing items, or updating the selection.

---

## ❓ React Concepts & FAQs

### 1. What is JSX, and why is it used in React?
JSX stands for **JavaScript XML**. It allows us to write HTML-like elements inside JavaScript code. It is used in React because it makes building UI components much easier, more readable, and enables combining logic with markup in a single component.

### 2. What is the difference between props and state?
* **Props (Properties):** Read-only data passed from a parent component down to a child component. A child cannot modify its own props.
* **State:** Data created and managed internally within a component. Unlike props, state is mutable and triggers a re-render when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage dynamic state. In this project, it was used to manage:
* `technologies`: Storing the loaded list of technology items.
* `selectedStack`: Keeping track of technologies selected by the user.
* `loading`: Handling the loading spinner state before fetching data.
* `isMobileMenuOpen`: Toggling the mobile menu navigation drawer.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React components (such as API calls or DOM manipulation). We used it to fetch the `techData.json` file asynchronously right after the component mounts on the DOM, ensuring smooth data loading without blocking initial rendering.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on unique `key` props to efficiently track, identify, and update specific list items when items change, get added, or are removed. Without a unique `key`, React might re-render the whole list unnecessarily, leading to lower rendering performance and unexpected UI bugs.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding specific elements/components based on dynamic logic or state values. 

**Example from the project:** Displaying the empty stack message when no items are selected in the sidebar:

```jsx
{selectedStack.length === 0 ? (
  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center my-2">
    <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
  </div>
) : (
  <SelectedItemsList/>
)}
