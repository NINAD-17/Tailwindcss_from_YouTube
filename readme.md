# Tailwind CSS

- **Tutorial Link: YouTube -- <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O">Tailwind Tutorial in Hindi - Code with Harry</a>**
- We can able to use tailwind playCDN in development but not in production.

## Why use tailwind
- You don't need to make names for classes. 
- If you use pure CSS and use that particular class in many components then by changing CSS for one component can break other component. But in tailwind you're building separate CSS for components.
- tailwind only ships the classes which are used in that page. So it will not increase bundle size and not make site slow.
- Tailwind have given breakpoints so at particular breakpoint you can change css. So it's responsive.
![alt text](public/image.png)

- utility classes are made by analyzing many factors. So they give consistancy.

## Setting up Tailwind CSS
![alt text](public/image-1.png)

- Use Extension: **Tailwind CSS IntelliSense** for better experience.

## postcss.config
- postcss.config file will see tailwind.config file and then observe all the    files which are included in content: [] then it will bring only those css classes which are used in those files to styles.css