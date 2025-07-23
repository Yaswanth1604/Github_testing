function typeEffect(text, speed = 100, callback = () => {}) {
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(text.charAt(i));
    i++;
    if (i === text.length) {
      clearInterval(interval);
      callback();
    }
  }, speed);
}

// Example usage:
typeEffect("Typing this out... with a typewriter effect!\n", 80, () => {
  console.log("\n🎉 Done!");
});
