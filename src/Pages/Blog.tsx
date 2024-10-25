import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Welcome to My Blog',
      date: 'October 8, 2024',
      content: 'This is a training post on my blog. Here, I will share my thoughts, projects, and tutorials on web development and more!',
    },
    {
      id: 2,
      title: 'Understanding React',
      date: 'October 1, 2024',
      content: 'React has changed the way we build components of websites. With React, I will dive into creating new components, new blogs, and more.',
    },
    {
      id: 3,
      title: 'Building Responsive Portfolio',
      date: 'September 24, 2024',
      content: 'With React, we can create responsive portfolios that more users can access from various devices. Building responsive designs is crucial. Here’s how you can make your site look great on any screen size.',
    },
    {
      id: 4,
      title: 'New Terms from Today’s Workshop',
      date: 'October 9, 2024',
      content: `Const: Creates constants, which means that once you assign a value to a variable declared with const, you cannot change the reference to a new value later. 
      =>: Arrow function, a shorter syntax for defining functions. 
      Array: A list-like structure to store multiple values in a single variable. 
      $: Used in template literals to embed variables into strings. 
      useState: A React hook that allows functional components to have state. 
      index: The position of an element within an array, starting from 0.`,
    },
   {
  id: 5,
  title: 'How to Create a New React App, Connect VSCode to GitHub, and Deploy to GitHub Pages',
  date: 'October 15, 2024',
  content: `To successfully deploy a React app to GitHub Pages, you need to follow these steps:
  
  1. **Check the required tools**: 
     - **Node and npm**: Check if Node.js and npm are installed with these commands: \`node --version\`, \`npm --version\`
     - **Git**: Verify Git installation with: \`git --version\`
  
  2. **Create a repository on GitHub**: 
     If you don’t have an account, create one at [GitHub.com](https://github.com). Create an empty repository for your project.
  
  3. **Create a new React app**:
     - Use this command to create a React app: \`npx create-react-app your-app-name\`
     - For a TypeScript app: \`npx create-react-app your-app-name --template typescript\`
     - Navigate to your app folder: \`cd your-app-name\`
  
  4. **Install gh-pages**:
     Install the gh-pages package to handle deployment: \`npm install gh-pages --save-dev\`
  
  5. **Add the homepage** to the \`package.json\` file of your app:
  
  \`\`\`json
  {
    "name": "my-app",
    "version": "0.1.0",
    "homepage": "https://your-github-username.github.io/repository-name",
    "private": true
  }
  \`\`\`
  
  6. **Add deployment scripts** to the \`package.json\` file:
  
  \`\`\`json
  {
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build"
    }
  }
  \`\`\`
  
  7. **Add a remote to your repository**:
     Add your GitHub repository as a remote with this command: \`git remote add origin https://github.com/{username}/{repo-name}.git\`
  
  8. **Deploy the app to GitHub Pages**:
     Deploy your app using: \`npm run deploy\` or \`npm run deploy -- -m "Deploy React app to GitHub Pages"\`
  
  9. **Configure GitHub Pages**:
     - Go to the **Settings** tab of your GitHub repository.
     - In the **Code and automation** section, click **Pages**.
     - Set **Source** to "Deploy from a branch".
     - Set **Branch** to \`gh-pages\` and Folder to \`/(root)\`.
     - Click **Save**.

  10. **Commit and push your changes**:
  
  \`\`\`
  git add .
  git commit -m "Configure React app for deployment to GitHub Pages"
  git push origin master
  \`\`\`
  `,
},
    ]
  return (
    <div className="blog-container">
      <h1>Salim Saay's Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
