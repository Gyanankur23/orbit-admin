// Example: Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('button');
  toggle.textContent = 'Toggle Dark Mode';
  toggle.style.margin = '1rem';
  document.body.prepend(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});

// Dark mode styles
const style = document.createElement('style');
style.textContent = `
  .dark {
    background: #121212;
    color: #eee;
  }
  .dark .card {
    background: #1e1e1e;
    color: #eee;
  }
`;
document.head.appendChild(style);
