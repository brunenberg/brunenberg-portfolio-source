window.addEventListener("load", () => {
    const terminal = document.getElementById('nav-terminal');
  
    const KEY_ENTER = 'Enter';
    const KEY_BACKSPACE = 'Backspace';

    const isLetterOrDigitKey = (key) => key.length === 1 && /[\w]/.test(key) && key !== '_';

    const CHARACTER_LIMIT = 10;
  
    const keyDown = (e) => {
      if (e.key === KEY_ENTER) {
        if (document.activeElement !== document.body) {
            return;
        }
        if (terminal.textContent.length === 0) {
            return;
        } 
  
        window.location.href = `${window.location.origin}/${terminal.textContent.toLowerCase()}`;
        return;
      }
  
      if (e.key === KEY_BACKSPACE) {
        terminal.textContent = terminal.textContent.slice(0, -1);
        return;
      }
      
      if (isLetterOrDigitKey(e.key) && terminal.textContent.length < CHARACTER_LIMIT) {
        terminal.textContent += e.key;
      }
    }
  
    document.addEventListener('keydown', keyDown);
});
