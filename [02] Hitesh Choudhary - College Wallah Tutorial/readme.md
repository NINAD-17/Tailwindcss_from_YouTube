

- Tailwind changed all to write css. Now writing css code is faster, maintainable, and optimized also.
- Tailwind is a utility framework. It means we write all css code using classes.
- When we use bootstrap and others then they ships all css in production means unused css also.
- Tailwind follows mobile first approach.

- We're making two folders 
    1. dist: It's a final code for production
    2. src: To keep code files.

- Tailwind css actually generates by `input.css` file. Tailwind gives some base utilities which refreshes the browser with predefined css.
- To generate customized css created by you, tailwind gives you a command `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`. `--watch` This command will continuously gives output of tailwindcss which is written by developer in input.css/styles.css.

## States and Responsive designs

- See website in form of components so that you can make designs easily. Focus on only one component at a time.