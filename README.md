
# **3x3 Interactive Grid in React**  

This project implements a **3x3 interactive grid** using React and Tailwind CSS, where:  
1. Clicking a box changes its color to **green**.  
2. Clicking the **last box (bottom-right)** triggers a sequence where all clicked boxes turn **red** in the order they were clicked.  

## **Demo**
🚀 Interactive UI where users can visually track their clicks and see a smooth transition when clicking the last box.  

## **Features**
✅ **State Management**: Uses `useState` to track the grid colors and click order.  
✅ **Sequential Color Transition**: The last box click triggers an animated sequence.  
✅ **Responsive Design**: Styled with **Tailwind CSS** for clean and flexible UI.  

## **Installation & Setup**
1. **Clone the repository**  
   ```sh
   git clone https://github.com/kushvendar/assignment.git
   cd assignment
   ```
2. **Install dependencies**  
   ```sh
   npm install
   ```
3. **Run the project**  
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5713](http://localhost:5713) in your browser.  

## **Code Structure**
- **`App.js`** - Main React component that handles grid interactions.  
- **`App.css` (or Tailwind)** - Handles grid styling and transitions.  

## **Usage**
1. Click any box → It turns **green**.  
2. Click the last box (bottom-right) → All clicked boxes turn **red** in order.  

## **Technologies Used**
- **React.js** ⚛️  
- **Tailwind CSS** 🎨  

## **Future Enhancements**
- Add animations for a smoother color transition.  
- Implement a reset button to clear the grid.  
- Allow users to customize grid size dynamically.  

## **Contributing**
Feel free to fork, submit pull requests, or suggest improvements! 🚀  

---
